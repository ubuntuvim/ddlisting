/**
* 设置为完成状态时播放提示音效
* @Author: ubuntuvim
* @Date:   2016-08-11T01:12:30+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-08-11T01:16:09+08:00
*/
export default function playCompletedBgm(flag) {
    if (flag) {  //如果用户开启了播放声音
        // 播放完成的声音
        var au = document.createElement("audio");
        au.preload="auto";
        au.src = "/assets/tip_musice/completed_bgm.ogg";
        au.play();
    }

    return true;
}
