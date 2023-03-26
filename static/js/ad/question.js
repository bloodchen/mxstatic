/**
 * 问卷调查
 * @return {[type]} [description]
 */
$(function () {
     if(navigator.language.toLocaleLowerCase() !== 'zh-cn' || window.Api.Maxthon.max_version !== '5.1.5.2000' || localStorage.getItem('question-naire-collapse') === 'done') return;
     var questionTpl = '<div id="question">\
        <button class="close-ad"></button>\
        <img src="https://pc-newtab-img.maxthon.com/static/img/question.png" alt="" width="118" height="98" />\
     </div';

     var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML='#question {position:fixed; top:40px; left:10px;width:130px;cursor:pointer;z-index:10;} #question .close-ad {width:16px;height:16px;right: 6px;} #question .close-ad::after,#question .close-ad::before {left: 3px;}';
        document.getElementsByTagName('HEAD')[0].appendChild(style);

     $('body').append(questionTpl);

     $('#question').on('click', function() {
         window.Api.Maxthon.useApi('newTabUpground', { 'url': ' https://www.wenjuan.in/s/jABbaa/' });
         localStorage.setItem('question-naire-collapse', 'done');
         $(this).remove();
     });

     $('#question').on('click', '.close-ad', function(e) {
        e.stopPropagation();
        localStorage.setItem('question-naire-collapse', 'done');
        $('#question').remove();
     });
 });
