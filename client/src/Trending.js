import React, { Component } from "react";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
 
class Trending extends Component {
  render() {
    return (
    
      <h2>
      
          <TwitterTimelineEmbed
  sourceType="profile"
  screenName="chesscom"
  options={{height: 500, width: 400}}
  
/>

      
      
          <TwitterTimelineEmbed
  sourceType="profile"
  screenName="FIDE_chess"
  options={{height: 500, width: 400}}
/>

      </h2>
    );
  }
}


export default Trending;
