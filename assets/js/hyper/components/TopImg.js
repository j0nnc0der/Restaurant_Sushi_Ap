import {h, app} from 'hyperapp';

export default function TopImg({state, actions}) {
  console.log (state.companyInfo.title);
  return (
    <section id="TopImg">
      <div class="container">
        <div class="title">

          <h5> Welcome To</h5>
          <h1>
            {state.companyInfo.title}
          </h1>
        </div>

        <div class="contact-info">
          <div class="container">
            <div class="booking">Book Table Directly</div>
            <h2> (718) - 219 - 8652 </h2>
            <div class="hours">
              Opening Hours
              <strong> Monday - Friday: </strong>
              9 am - 9 pm
              <strong> Weekend:</strong>
              9am - 11pm
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
