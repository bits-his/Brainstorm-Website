import  './teem.css'


function Teem(props) {
  return (
    <div>
        <div class="team_thumb teem-card">
<img src={props.img} alt="" className=''/>
<div class="team_hover">
<div class="hover_inner text-center">
<ul>
<li><a href="#"> <i class="fa fa-facebook"></i> </a></li>
<li><a href="#"> <i class="fa fa-twitter"></i> </a></li>
<li><a href="#"> <i class="fa fa-instagram"></i> </a></li>
</ul>
</div>
</div>
</div>
    </div>
  )
}

export default Teem