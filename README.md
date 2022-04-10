# Frontend developer challenge

**_You may use any 3rd party packages_**

## Challenge overview

There is a mock api set up to facilitate this challenge.

    import  {  getMedias  }  from  "../api/";
    getMedias().then(console.log).catch(console.error);

The response will provide you with a data set of movies and shows. Specifically an image, title and id.

    [
        {
    	     id: 1234,
    	     title: "Friends"
    	    image: "https://images2.9c9media.com/image_asset/2022_3_9_91c9ffc5-b3fa-4780-a776-de6989ca25ae_png_2000x3000.jpg"
        },
        ...
    ]

## Challenge

1. Using the response from the mock api, your objective is to generate a responsive Grid interface

![Layout example](/public/assets/layout.png 'Layout')

2. Each movie or show should allow the user to add or remove from their watchlist. (This will only update the local state)And the state will be reflected to the user in the UI.

(+) Add to watchlist

(-) Remove from watchlist

## Areas of interest.

1. State management strategy.
2. Updates on local state should be done with Time and Space Complexity in mind.
3. Component architecture.
