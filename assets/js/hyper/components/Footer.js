import {h, app} from 'hyperapp';

export default function Footer ({state, actions}) {
  return (
<footer>
<div class="container">

  <nav class="menu">
    <a href ="#">Our Story</a>
     <a href ="#">Reviews</a>
      <a href ="#">Special Menu</a>
       <a href ="#">Reservations</a>
              <a href ="#">Contact Us</a>
  </nav>
  <ul class="socia-media">
    <li>
  <a href="www.youtube.com">
<i class="fab fa-youtube-play" aria-hidden="true"></i>
  </a>
  </li>
    <li>
  <a href="www.twitter.com">
<i class="fab fa-twitter" aria-hidden="true"></i>
  </a>
  </li>
    <li>
  <a href="www.tripadvisor.co.uk">
<i class="fab fa-tripadvisor" aria-hidden="true"></i>
  </a>
  </li>
    <li>
  <a href="www.youtube.com">
<i class="fab fa-youtube" aria-hidden="true"></i>
  </a>
  </li>
    <li>
  <a href="www.facebook.com">
<i class="fab fa-facebook-f" aria-hidden="true"></i>
  </a>
  </li>
  </ul>




  <div class="copyright">
    © Copyright 2018 by Jonnnnn
  </div>
</div>
</footer>
    
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
