/* ==UserStyle==
@name           Reddit AMOLED Orange Style
@version        1.0.2
@description	Orange AMOLED with colored comments
@author         YiuBen
@homepageURL    https://github.com/YiuBen/dootfiles
@downloadURL    https%3A%2F%2Fraw.githubusercontent.com%2FYiuBen%2Fdootfiles%2Frefs%2Fheads%2Fmain%2Freddit_style.user.js
@updateURL      https%3A%2F%2Fraw.githubusercontent.com%2FYiuBen%2Fdootfiles%2Frefs%2Fheads%2Fmain%2Freddit_style.meta.js
@var checkbox thumbnails "Show thumbnails" 1
==/UserStyle== */

@-moz-document domain("www.reddit.com"), domain("old.reddit.com") {


/*######## COLORED COMMENTS #########*/
    /* COLOR DEFINITIONS */
  :root {

    /* Comments border colors */
    --border-transparency: .5;
    --arrow-offset: 1em;
    --default-color: rgba(99, 99, 99, var(--border-transparency));
    --color1: #a51d2d;
    --color2: rgb(0,69,22);
    --color3: #ad7200;
    --color4: rgb(26,95,180);
    --color5: rgb(97,53,131);
    --color6: rgb(99,69,44);
    --color7: rgb(173,114,0);
    --color8: rgb(123,40,0);
    --color9: rgb(165,29,45);
    --divider-color: var(--default-color);

  }
      .thing.comment, .commentarea .child .thing.comment, .commentarea .child .thing{
          border: 1px solid transparent !important;
          border-left-width: 4px !important;
          border-right-width: 0px !important;
          border-top-width: 0px !important;
          border-bottom-width: 0px !important;
          border-color: var(--color1) !important;
        	color: var(--color1) !important;
      }
      .thing.comment .thing.comment, .thing.comment .thing.comment .expand a{
          border-color: var(--color2) !important;
        	color: var(--color2) !important;
      }
      .thing.comment .thing.comment .thing.comment{
          border-color: var(--color3) !important;
        	color: var(--color3) !important;
      }
      .thing.comment .thing.comment .thing.comment .thing.comment{
          border-color: var(--color4) !important;
        	color: var(--color4) !important;
      }
      .thing.comment .thing.comment .thing.comment .thing.comment .thing.comment {
          border-color: var(--color5) !important;
        	color: var(--color5) !important;
      }
       .thing.comment .thing.comment .thing.comment .thing.comment .thing.comment .thing.comment {
          border-color: var(--color6) !important;
        	color: var(--color6) !important;
      }
       .thing.comment .thing.comment .thing.comment .thing.comment .thing.comment .thing.comment .thing.comment{
          border-color: var(--color7) !important;
        	color: var(--color7) !important;
      }
       .thing.comment .thing.comment .thing.comment .thing.comment .thing.comment .thing.comment .thing.comment .thing.comment{
          border-color: var(--color8) !important;
        	color: var(--color8) !important;
      }
       .thing.comment .thing.comment .thing.comment .thing.comment .thing.comment .thing.comment .thing.comment .thing.comment .thing.comment {
          border-color: var(--color9) !important;
        	color: var(--color9) !important;
      }

/*####### STYLE FIXES ########*/

  /* COLOR DEFINITIONS */
  :root {

    --url: #e66100; /* Usernames & Links*/

    --gray-0: #000;
    --gray-1: #121212;
    --gray-2: #232323;
    --gray-3: #343434;
    --gray-4: #454545;
    --gray-5: #9a9996;
    --gray-6: #c0bfbc;

    --gray-a0: #1e1e1e;
    --blue-0: #4ac;
    --blue-1: #369;
    --blue-2: #2c89f5;
    --red: #d3391a;
    --dark-red: #440202;
    --text-normal: #fff;
    --text-normal-hover: #f6f5f4;
    --text-med: hsl(0, 0%, 85%);
    --text-dark: hsl(0, 0%, 45%);
    --text-dark-hover: var(--text-normal);


  }
  body{
      background-color: var(--gray-0) !important;
      background: var(--gray-0) !important;
      color: var(--text-normal) !important;
  }

  body[class] {

    /* White text on black*/
    .md,
    textarea,
    .side,
    #header,
    #header-bottom-right,
    #searchexpando,
    .grippy,
    .tabmenu li a,
    .trophy-area .content,
      .searchpane {
      background-color: var(--gray-0) !important;
      background: var(--gray-0) !important;
      color: var(--text-normal) !important;
    }

    /*Removed stuff*/
    #sr-header-area, /*Subreddits list*/
    .comment.noncollapsed .buttons /*Comment buttons*/,
    .domain /*post domain name*/,
    .sidebox /*submit buttons*/,
    .arrow /*voting*/,
    .read-next /*recos*/,
    .infobar.listingsignupbar, .commentsignupbar /*ad*/,
    .rank /*post rank*/{
      visibility: hidden !important;
      height: 0px !important;
      font-size: 0px !important;
    }


    /*White text*/
    .pagename a /*sub name*/,
    .title,
    .trophy-name{
      color: var(--text-normal) !important;
    }

    /*Secondary text*/
    .linkinfo,
    .titlebox form.toggle,
    input,
    .side .md,
    .reddit-infobar,
    .flaircolordark,
    .searchpane{
      color: var(--gray-5) !important;
      background-color: transparent !important;
    }

    /*Primary links*/
    a {
      color: var(--url) !important;
    }


    /*Secondary links*/
    .side a,
    .buttons li a,
    .spoiler-stamp {
      color: var(--gray-6) !important;
    }

    /*Code paragraph*/
    .md code, .md pre {
      background-color: var(--gray-2) !important;
      color: var(--text-normal-hover) !important;
      border: none !important;
  		background-color: transparent;
  		border-radius: 2px;
    }

    /*Border (Dark gray)*/
    .md,
    .linkinfo,
    td,
    th,
    .flairrichtext,
    #header{
      border-color: var(--gray-3) !important;
    }

    /*Border (Gray)*/
    .tabmenu li.selected a{
      border-bottom-color: var(--gray-5) !important;
    }

    /*Left Border remove*/
    .comment .child {
      border-left: none !important;
    }
    
    .thing.comment{
      margin-top: -10px;
    }

    /*Remove borders*/
    .flair,
    .grippy::after {
      border: none !important;
    }
    
    /*Top of comments*/
    .tagline {
        padding-top: 10px;
    }


/* Image fixes */

		/*Reddit logo*/
    #header-img {
      background-image: url(https://www.redditstatic.com/desktop2x/img/favicon/apple-icon-57x57.png) !important;
      background-position: center !important;
      background-size: cover;
      height: 36px !important;
      margin: 4px 16px;
      width: 36px !important;
      top: 0px !important;
    }

    /*Thumbnails*/
    
    .link:before, .link .thumbnail {
      border-radius: 3px;
      background: transparent url(https://b.thumbs.redditmedia.com/-3KwleH20XZ1b9Cw4lB0L5mEfied_cdwc7p4Tm1hF4M.png) 0 / 538px 373.2px;
      content: "";
		}
    .thumbnail {
      float: left;
      font-size: 0;
      margin-bottom: 2px;
      margin-right: 5px;
      margin-top: 0;
      margin-left: 0;
      overflow: hidden;
      width: 70px;
		}
    .link .thumbnail.self {
      background-position: -44px -60px;
		}
    .link .thumbnail.spoiler {
      background: url(https://b.thumbs.redditmedia.com/H8fTLHcMy0mTMKnn8K4cG8M1mgB8Np8GNskdcsZLS3M.png) 10px !important;
      background-size: 48px !important;
      background-repeat: no-repeat !important;
		}
    .link .thumbnail.default {
      background-position: -108px -54px;
		}
    
    
    /*Expand buttons*/
    .expando-button {
      margin: 0 !important;
      margin-left: 6px !important;
      margin-right: 6px !important;
      width: 30px !important;
      height: 30px !important;
      max-width: 30px !important;
      max-height: none !important;
      border-radius: 3px;
      background: transparent url(https://b.thumbs.redditmedia.com/-3KwleH20XZ1b9Cw4lB0L5mEfied_cdwc7p4Tm1hF4M.png) no-repeat 0 / 359px 248.8px !important;
    }
    .expando-button:hover {
    	background-color: var(--url) !important;
    }
    
    .expando-button.video {
      background-position: -37px -222px !important;
    	vertical-align: middle !important;
    }
    
    .expando-button.selftext {
			background-position: -41px 07px !important;
      vertical-align: middle !important;
    }

  }
}
