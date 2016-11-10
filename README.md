![Imgur](http://i.imgur.com/R2zg7Yz.png)

# Angela DeCarlis Art Portfolio
This app was designed as a life portfolio for Angela DeCarlis - artist, dance caller, and jazz musician

## Approach
My general strategy for approaching this app was based upon the fact that my data was multi-tiered in nature.
Being a portfolio of a person with diverse skills, I had to have a template that was both flexible enough to
handle each type of portfolio item, yet with enough structure to actually relate items together. I decided to
attempt to make a navbar component that I could re-use at every nested layer of my app.

On the back-end, I had a very simple structure. The focus of the app was on the images, each of which represented
a single item of artwork or performance. However, I wanted the relationships between these items to be fluid and
easily changed by the end-user. Each item had attributes for artform, portfolio, and section. These corresponded
to the link structure on the front-end.

I tried to make it such that the links in the navbars were dynamically populated by the data that was uploaded
on the item attributes to the back-end.

## Tools and Technologies

-   Ember.js
  - a front-end framework
  - computed properties for dynamically updating the website based on back-end data
  - components for reusing code and organizing data-flow between parts of the app
-   Ruby on Rails
  - efficiently generated a back-end API for communicating with AWS S3
-   Paperclip
  - file attachment library for ActiveRecord, used to upload image files to AWS S3
-   AWS S3
  - storage solution for hosting images on the web and generating unique links.

## Dependencies
- Ember.js
- Paperclip
- AWS S3
**all detailed dependencies and version information is listed in package.json**

## Client user-stories
- I would like a website to display my wide variety of skills and artistic works to show to potential customers
- I would like a way to organize my life accomplishments into a structure that makes sense so I can easily navigate the site.
- I would like to be able to upload my own photos to each section of the website, so I can organize the site's content myself.
- I would like to delete photos that are no longer relevant to a category.
- I would like to be able to edit the information on each photo so I can restructure where each items belongs if I need to.

## Hurdles and Speed Bumps
Trying to model data on the front-end in a way that did not match the modeling on the back-end ended up costing me several
days of work. I had many fundamental misunderstandings of what Ember was trying to do and how it was trying to do it. I now
have a better idea of the misleading statement "Data Down Actions Up," even though data gets passed both down and up, and actions
get referenced both down and up. I think it's unwise to simply chant DDAU as a mantra without saying why exactly it is the way it is,
why it was implemented in this way, what problems it solves or avoids, and what issues you run into when you do not practice it.
In previous projects, it may have been ok to not understand what was going on as long as we could get things to work. I do not think
that is the case with highly abstracted front-end frameworks. I think we need to know more of the intent behind what they do, especially
if they are opinionated and are trying to funnel us into a particular course of action.

I had a lot of issues trying to use Ember tools for things they probably were not meant to be used for, especially where a different
tool could have been better used instead, but none of this is clearly spelled out in the documentation. I get the feeling that you
already need to know everything about Ember before using it, otherwise you will probably run into a wall.

## Unsolved problems
- Styling with a purchased Bootstrap template that uses Less instead of Sass
- Category filtering

## Wireframing
Wireframing and site outline was based entirely on the following template:
![Wrap Bootstrap purchased template](http://wrapbootstrap.com/preview/WB0905P3F)

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
