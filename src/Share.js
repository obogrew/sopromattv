import React from 'react';


import 'sharer.js/sharer';

import { SocialMediaIconsReact } from 'social-media-icons-react';

const links = [
    'https://vk.com/kanskvideo',
    'https://www.facebook.com/kanskfest/',
    'https://www.instagram.com/kansk_fest/'
];

class Share extends React.Component {

    render() {
        return (
            <div class="container">
            
            <div class="social">
                <a href="#" id="share-wa" class="sharer button"><i class="fa fa-3x fa-whatsapp"></i></a>
            
              <a href="#" id="share-fb" class="sharer button"><i class="fa fa-3x fa-facebook-square"></i></a>
              <a href="#" id="share-tw" class="sharer button"><i class="fa fa-3x fa-twitter-square"></i></a>
              <a href="#" id="share-li" class="sharer button"><i class="fa fa-3x fa-linkedin-square"></i></a>
              <a href="#" id="share-gp" class="sharer button"><i class="fa fa-3x fa-google-plus-square"></i></a>
              <a href="#" id="share-em" class="sharer button"><i class="fa fa-3x fa-envelope-square"></i></a>
            </div>
              
            </div>
            )
    }
}
export default Share
