import {h, app} from 'hyperapp';

export default function TopImg({state, actions}) {
  return (
    <section id="ContactUs">
      <div class="container">
        <h5 class="comp-title">Contact Us</h5>
        <h2> Delicious Sushi Meals Of All Time</h2>
        <div class="box">
          <div class="row">
            <div class="col-md-6">
              <div class="title">
              
              {state.companyInfo.location}
              
              </div>
              <h6>
                11111 Main Street Road, London
              </h6>
              <p>
                <strong> Email: </strong>
                <a href="MailTo:Info@SushiMayfair.com">
                  Info@ExampleSushiMayfair.com
                </a>
              </p>
            </div>
            <div class="col-md-6">
              <h6>
                Phone:
              </h6>
              <div class="title">
              0208 000 0000
              </div>
              <h6>
                Lunch Service:{' '}
              </h6>
              <p>
                Friday, Saturday, Sunday <br />from 12pm - 1.30pm
              </p>
              <h6>
                Dinner Service:
              </h6>
              <p>
                Daily <br />
                from 6pm - 9:30pm
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
