// mx-news-loader.js
// new NewsLoader({
//   container: '#news-container',  // 内容容器选择器
//   scrollbar: '#news-containe',   // 滚动容器选择器，默认body
//   category: 'Trending',          // 分类
// });
class MxNewsLoader {
  constructor(config) {
    // 配置处理
    this.config = {
      container: config.container ? document.querySelector(config.container) : document.body,
      scrollbar: config.scrollbar ? document.querySelector(config.scrollbar) : document.documentElement,
      scrollbarBindEvent: config.scrollbar ? document.querySelector(config.scrollbar) : window,
      category: config.category || 'Trending'
    };

    // 常量
    this.errorImage = 'https://pc-newtab.maxthonimg.com/news/error.png';
    this.styleTagId = 'mx-news-styles';
    this.deviceStorageKey = 'mx-deviceId';
    this.newsSession = 'init';

    // 状态管理
    this.deviceId = localStorage.getItem(this.deviceStorageKey) || this.guid();
    this.timestamp = Date.now();
    this.isLoading = false;
    this.elements = {};

    // 初始化执行
    this.initContainer();
    this.initStyles();
    this.loadNews();
    this.bindEvents();
  }

  // 获取guid
  guid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      const str = v.toString(16);
      localStorage.setItem(this.deviceStorageKey, str);
      return str;
    });
  }

  /* 初始化容器 */
  initContainer() {
    const { container } = this.config;
    container.innerHTML = `
      <div class="mx-news-list"></div>
      <div class="mx-loading-indicator">Loading...</div>
      <div class="mx-error-message" style="display: none;">
        <span>Load Fail, </span>
        <span class="mx-retry-btn">Retry</span>
      </div>
    `;

    this.elements = {
      list: container.querySelector('.mx-news-list'),
      loading: container.querySelector('.mx-loading-indicator'),
      error: container.querySelector('.mx-error-message')
    };

    document.querySelector('.mx-retry-btn').onclick = () => this.loadNews();
  }

  /* 动态注入样式 */
  initStyles() {
    const styleTag = document.getElementById(this.styleTagId);
    if (styleTag) return;
    const style = document.createElement('style');
    style.id = this.styleTagId;
    style.textContent = `
      .mx-news-list {
        max-width: 800px;
        margin: 0 auto;
      }

      .mx-news-item {
        display: flex;
        gap: 15px;
        padding: 8px 0;
        background-color: #fff;
        border-bottom: 1px solid #d3d5d4;
        cursor: pointer;
        text-decoration: none;
      }

      .mx-news-image {
        flex: none;
        width: 115px;
        aspect-ratio: 16/9;
        background: linear-gradient(90deg, #f0f2f5 25%, #e6e8eb 37%, #f0f2f5 63%);
        background-size: 400% 100%;
        border-radius: 4px;
        animation: mx-skeleton-loading 1.4s ease infinite;
      }

      .mx-news-image-inner {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 4px;
        object-fit: cover;
      }

      .mx-news-text {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: auto;
        font-size: 12px;
      }

      .mx-news-title {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-weight: bold;
        color: #0b0b0b;
      }

      .mx-news-row {
        display: flex;
        justify-content: space-between;
        margin-top: 8px;
        color: #646c74;
      }

      .mx-loading-indicator,
      .mx-error-message {
        text-align: center;
        padding: 8px 20px;
        color: #646c74;
      }

      .mx-retry-btn {
        color: #1890ff;
        cursor: pointer;
      }

      @keyframes mx-skeleton-loading {
        0% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0 50%;
        }
      }
    `;
    document.head.appendChild(style);
  }

  /* 核心数据加载 */
  async loadNews() {
    if (this.isLoading) return;
    this.isLoading = true;
    this.elements.loading.style.display = 'block';
    this.elements.error.style.display = 'none';
    try {
      const url = 'https://api.taboola.com/2.0/json/maxthonbrowser-us-english/recommendations.get';
      const params = this.getParams();
      const res = await fetch(url, {
        method: 'post',
        credentials: 'include',
        body: JSON.stringify(params)
      });
      const data = await res.json();
      this.newsSession = data.user.session;
      this.formatItems(data.placements);
    } catch (err) {
      this.elements.error.style.display = 'block';
    } finally {
      this.isLoading = false;
      this.elements.loading.style.display = 'none';
    }
  }

  // 获取参数
  getParams() {
    const params = {
      placements: [],
      // 用户信息
      user: {
        // 请求单元，第一次请求是 init，后续用上次返回的值
        session: this.newsSession,
        // 设备ID，每个设备随机生成一个，后续从本地取，比如 'a3ad232c-9f08-45c5-9051-051409edb405'
        device: this.deviceId,
        // 以下固定：用户IP和设备信息
        // realip: '192.199.248.75',
        agent: navigator.userAgent
      },
      view: {
        // 页面ID，每次刷新随机生成一个，可以用时间戳，比如 'a558e7763d614902a3689c69b23c25a7'
        id: `view_${this.timestamp}`
      },
      app: {
        // 傲游key
        apiKey: '6d24fb0e092f4d688803aa8dd2b40fc43a8dad37',
        // SERVER or CLIENT
        origin: 'CLIENT',
        // 以下固定
        type: 'MOBILE',
        name: 'maxthonbrowser-us-english'
      },
      source: {
        // 页面ID，每次刷新随机生成一个，可以用时间戳，比如 'a558e7763d614902a3689c69b23c25a7'
        id: `source_${this.timestamp}`,
        // "home" or "article" or "video"
        type: 'HOME',
        // 当前网址
        url: location.href
      }
    };

    // 返回的条目：9条，每3条有1条广告
    for (let i = 0; i < 9; i++) {
      const n = i + 1;
      params.placements.push({
        // Editorial Trending 1
        name: n % 3 === 0 ? `AD Editorial ${this.config.category} ${n}` : `Editorial ${this.config.category} ${n}`,
        // 以下固定
        recCount: 1,
        organicType: 'mix'
      });
    }
    return params;
  }

  // 格式化新闻
  formatItems(items) {
    const contentItems = [];
    const adItems = [];
    items.forEach(item => {
      const oldItem = item.list[0];
      const newItem = {
        hash: oldItem['raw-id'],
        category: oldItem.categories ? oldItem.categories[0] : 'ad',
        title: oldItem.name,
        tag: oldItem.branding,
        date: oldItem.categories ? this.formatDate(oldItem.created) : oldItem.origin,
        imageUrl: oldItem.thumbnail[0].url,
        link: oldItem.url
      };
      if (newItem.category === 'ad') {
        adItems.push(newItem);
      } else {
        contentItems.push(newItem);
      }
    });

    // 将广告均匀插入到内容项中
    const contentCount = contentItems.length;
    const adCount = adItems.length;
    const interval = Math.floor(contentCount / adCount);
    for (let i = adCount - 1; i >= 0; i--) {
      const insertIndex = interval * (i + 1);
      contentItems.splice(insertIndex, 0, adItems[i]);
    }
    this.renderItems(contentItems);
  }

  // 格式化日期输出：2025-01-01
  formatDate(date) {
    const _date = new Date(date);
    return _date.toISOString().split('T')[0];
  }

  /* 渲染新闻项 */
  renderItems(items) {
    items.forEach(item => {
      const html = `
          <a
            class="mx-news-item"
            href="${item.link}"
            target="_blank"
          >
            <div class="mx-news-image">
              <img data-src="${item.imageUrl}"
                class="mx-news-image-inner"
                src="${item.imageUrl}"
                onerror="this.onerror=null;this.src='${this.errorImage}';">
            </div>
            <div class="mx-news-text">
              <div class="mx-news-title">${item.title}</div>
              <div class="mx-news-row">
                <span>${item.tag}</span>
                <span>${item.date}</span>
              </div>
            </div>
          </a>
        `;
      this.elements.list.innerHTML += html;
    });
    setTimeout(() => {
      this.scrollHandle();
    }, 200);
  }

  /* 事件绑定 */
  bindEvents() {
    this.config.scrollbarBindEvent.addEventListener('scroll', () => this.scrollHandle());
  }

  // 滚动列表
  scrollHandle() {
    const { scrollHeight, scrollTop, clientHeight } = this.config.scrollbar;
    if (scrollHeight - scrollTop - clientHeight <= 100) {
      this.loadNews();
    }
  }
}
