function tips() {
    var str = "�ഺ�Ĵ�����ͷ�������£����˹¶���㯣����˿������裬˭�ܰ�Ȼ������ⳡ�ꣿ���������ܹ��ܶೡ�꣬�ǹ��ܶ�仨���������ܶ�ΰ����������ܶ�ط�����գ�ȴ��Զ�ǵ�������Ǵ��Ķ���";
    alert(str);
}
function failed(e) {
    // video playback failed - show a message saying why
    switch (e.target.error.code) {
        case e.target.error.MEDIA_ERR_ABORTED:
            alert("����ֹ����Ƶ�Ļ���");
            break;
        case e.target.error.MEDIA_ERR_NETWORK:
            alert("�����������Ƶ����ʧ��");
            break;
        case e.target.error.MEDIA_ERR_DECODE:
            alert("��Ƶʹ�����������֧�ֵ���Ƶ����Ƶ���ű���ֹ");
            break;
        case e.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
            alert("���ڷ�����������ϲ���ʽ����֧�֣���Ƶ�޷�����");
            break;
        default:
            alert("δ֪����");
            break;
    }
}