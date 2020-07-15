import React from "react"
import {FaEnvelope} from "react-icons/fa"


const Newsletter = () => (

<section id="newsletter" className="section is-small">
<div className="container">
<div className="columns is-vcentered">
 <div className="column">
 <p className="title">Newsletter</p>   
 <p className="subtitle">Stay up to date!</p>
 </div>

 <div className="column">
     <form action="" method="POST" acceptCharset="utf-8">
<div className="field is-grouped">
<div className="control has-icons-left is-expanded">

    <input type="email" class="input is-medium is-flat" placeholder="email adress"/>
    <span className="icon is-small is-left">
<FaEnvelope/>
        </span>

        
</div>

<div className="control">
<div className="is-hidden"></div>
<input type="hidden" name="list" value="777"/>
<button className="button is-medium is-link">Subscribe</button>
</div>

</div>

     </form>
    
</div>
</div>   
</div> 


</section>

)

export default Newsletter;