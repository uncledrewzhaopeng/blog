---
home: true
heroText: Talk is cheap，Show me the code！
# tagline: WEB前端开发
# heroImage: /img/My.jpg
# heroImageStyle: {
#   maxHeight: '200px',
#   display: block,
#   margin: '6rem auto 1.5rem',
#   borderRadius: '50%',
#   boxShadow: '0 5px 18px rgba(0,0,0,0.2)'
# }

bgImage: '/img/bg.jpeg'
bgImageStyle: { height: '100vh' }
features:
# - title: Email
#   details: Email pengweb_job@163.com
#   details: WeChat self_Discipline_Z2p

footer: Email：pengweb_job@163.com
---

<style>
.anchor-down {
  display: block;
  margin: 12rem auto 0;
  bottom: 45px;
  width: 20px;
  height: 20px;
  font-size: 34px;
  text-align: center;
  animation: bounce-in 5s 3s infinite;
  position: absolute;
  left: 50%;
  bottom: 30%;
  margin-left: -10px;
  cursor: pointer;
}
@-webkit-keyframes bounce-in{
  0%{transform:translateY(0)}
  20%{transform:translateY(0)}
  50%{transform:translateY(-20px)}
  80%{transform:translateY(0)}
  to{transform:translateY(0)}
}
.anchor-down::before {
  content: "";
  width: 18px;
  height: 18px;
  display: block;
  border-right: 3px solid rgba(255,255,255,0.8);
  border-top: 3px solid rgba(255,255,255,0.8);
  transform: rotate(135deg);
  position: absolute;
  bottom: 10px;
}
.anchor-down::after {
  content: "";
  width: 18px;
  height: 18px;
  display: block;
  border-right: 3px solid rgba(255,255,255,0.8);
  border-top: 3px solid rgba(255,255,255,0.8);
  transform: rotate(135deg);
}
</style>

<script>
export default {
  mounted () {
    const ifJanchor = document.getElementById("JanchorDown"); 
    ifJanchor && ifJanchor.parentNode.removeChild(ifJanchor);
    let a = document.createElement('a');
    a.id = 'JanchorDown';
    a.className = 'anchor-down';
    document.getElementsByClassName('hero')[0].append(a);
    let targetA = document.getElementById("JanchorDown");
    targetA.addEventListener('click', e => { // 添加点击事件
      this.scrollFn();
    })
  },

  methods: {
    scrollFn() {
      const windowH = document.getElementsByClassName('hero')[0].clientHeight; // 获取窗口高度
      document.documentElement.scrollTop = windowH; // 滚动条滚动到指定位置
    }
  }
}
</script>
