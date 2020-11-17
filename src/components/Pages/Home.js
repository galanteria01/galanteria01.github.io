import React ,{Component} from 'react';

class Home extends Component{
    render(){
        return (
            <section class="site-hero" style="background-image: url(images/image_1.png);" id="section-home" data-stellar-background-ratio="0.5">
                <div class="container">
                    <div class="row intro-text align-items-center justify-content-center">
                        <div class="col-md-10 text-center pt-5">

                            <h1 class="site-heading site-animate">Hello, I'm <strong class="d-block">Shoury Sharma</strong></h1>
                            <strong class="d-block text-white text-uppercase letter-spacing">Android Enthusiast and Web Developer</strong>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Home