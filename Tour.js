var buttonId = 'overlay-button';

var viewer = new PhotoSphereViewer.Viewer({
  container: 'photosphere',
  loadingImg: 'https://photo-sphere-viewer.js.org/assets/photosphere-logo.gif',
  defaultZoomLvl: 0,
  touchmoveTwoFingers: false,
  caption: 'Virtual Tour at Lebenya',
  //description: 'this is a test',
  //defaultLat: 0.1,
  moveSpeed: 1.3,
  zoomSpeed: 1.2,
  autorotateSpeed: '1.5rpm',
  plugins: 
    [
      PhotoSphereViewer.CompassPlugin, // allows one to use the compass plugin 
      PhotoSphereViewer.MarkersPlugin, // allows one to use markers 
      //PhotoSphereViewer.GalleryPlugin, // allows one to use the gallery instead of the nodes list 
      [PhotoSphereViewer.VirtualTourPlugin, // allows one to use the virtual tour, by creating nodes that link to other paneramas
        {
        positionMode: 'manual', // set the virtual tour to use manually placed node link
        renderMode: 'markers', // set the node links to use markers instead of arrows
        linksOnCompass: false, // remove the node links from the compass, will use other markers for the compass
        
        markerStyle:{
          html: null, // remove the default arrow node link
          ellipse: [30, 15], // set the node link to be an ellipse 
          anchor: 'bottom center', // anchor the ellipse to the bottom center
          scale: {
            zoom: [0.5, 1] // the marker is twice smaller on the minimum zoom level
          },
        }
        
        /*markerStyle: {
          html: null, // remove the default arrow node link
          width: 120,
          height: 120,
          orientation: 'horizontal',
          anchor: 'center center',
        }*/

        }
      ],
    ],
  //navbar: 'autorotate zoom move caption markersList nodesList fullscreen', // set the navigation bar to use these buttons 
  
  //navbar: ['autorotate', 'zoom', 'move', 'caption', 'markers','markersList', 'nodesList', 'fullscreen' ], 
  navbar: ['autorotate', 'zoom', 'move', 'caption', 'markers','markersList', 'nodesList',
    {
      id: buttonId,
      title: 'Show overlay',
      content: 'Help',
      onClick: showOverlay,
    },
     'fullscreen'], 
  
  //navbar: ['autorotate', 'zoom', 'move', 'description', 'markers', 'markersList', 'nodesList', 'fullscreen'],   
  
  //navbar: ['autorotate', 'zoom', 'move', 'gallery', 'caption', 'markersList', 'fullscreen'], // addition of gallery button 
});

function showOverlay() {
  viewer.overlay.show({
    //image: document.getElementById('overlay-icon').innerHTML,
    //text: document.querySelector('#help').innerHTML,
    text: document.getElementById('help').innerHTML,
    dissmisable: true,
  });
}

viewer.once('ready', showOverlay);

var virtualTour = viewer.getPlugin(PhotoSphereViewer.VirtualTourPlugin);

virtualTour.setNodes([
  { /* node 1 */
    id: '1',
    panorama: 'https://i.ibb.co/9VL47dZ/GS-0119.jpg', // panerama image link 
    thumbnail: 'https://i.ibb.co/cCH8jsY/GS-0119.jpg', // thumbnail image link
    name: 'Location One', // set the name of the panerama in the nodeslist 

    links: [
      { // link to the next location, location 2
        nodeId: '2', longitude: 6.14, latitude: -0.217, name: 'Move Forward to here', 
        markerStyle: { svgStyle: { fill: 'rgba(0, 255, 0, 0.4)', stroke: 'rgba(0, 255, 0, 0.4)', strokeWidth: 5 } } 
      } 
    ],

    /*links: [
      { // link to the next location, location 2
        nodeId: '2', longitude: 6.14, latitude: -0.217,
        markerStyle: { imageLayer: 'https://i.ibb.co/rGmcJLj/Next.png' },
      }
    ],*/

    markers: [
      /*{ // circle that display popup to move forward
        id: 'forward popup',
        ellipse: [30, 15],
        longitude: 6.14, latitude: -0.217,
        anchor: 'center center',
        hideList: true, // remove the marker from the markers list
        svgStyle: { fill: 'rgba(255, 255, 255, 0)' },
        tooltip: { content: 'Move Forward to here', position: 'top center', trigger: 'hover' },
        data: { compass: 'rgba(0, 255, 0, 1)' }
      },*/
      
      { // create a path between where you are standing to the next locator circle
        id: 'path',
        polylineRad: [[5.494, -1.5], [6.14, -0.217]], // path coodinates using long/ lat
        hideList: true, // remove the path marker from the markers list 
        svgStyle: { stroke: 'rgba(255, 255, 255, 0.4)', strokeWidth: '5px', strokeLinecap: 'round', strokeLinejoin: 'round' }, // set the style of the path
        style: { cursor: 'move' }, // set cursor to display a 'move' cursor when hovering over the path
        data: { compass: 'rgba(255, 255, 255, 0.7)' } // display path on compass
      },
      { // circle indicating where you are standing in the panarama
        id: 'standing here',
        circle: 30, // size of the circle 
        longitude: 5.494, latitude: -1.5, // location of the circle in the panarama
        hideList: true, // remove the circle from the markers list 
        tooltip: { content: 'You are here', position: 'top center', trigger: 'hover' }, // set the tooltip for the user 
        svgStyle: { fill: 'rgba(255, 255, 255, 0.5)' } // set the style of the circle 
      },
      
      { // marker for the compass to indicate where the next location is
        id: 'forward not visible marker',
        circle: 30, // size of the circle 
        longitude: 6.14, latitude: -0.217, // long/ lat of the marker for the next location in the panarama
        hideList: true, // remove the marker from the markers list
        visible: false, // set the marker to not be visible, only will show in the compass
        data: { compass: 'rgba(0, 255, 0, 1)' } // display the move forward dot on the compass
      }

    ],
  },

  { /* node 2 */ 
    id: '2',
    panorama: 'https://i.ibb.co/SvF61hc/GS-0120.jpg', // panerama image link
    thumbnail: 'https://i.ibb.co/tCVHN7z/GS-0120.jpg', // thumbnail image link
    name: 'Location Two', // set the name of the panerama in the nodeslist 
    
    /*links: [
      { // link to the previous location, location 1
        nodeId: '1', longitude: 2.857, latitude: -0.263,
        markerStyle: { imageLayer: 'https://i.ibb.co/YQkbQgm/Previous.png' }
      }, 
      { // link to the next location, location 3
        nodeId: '3', longitude: 0.313, latitude: -0.127, 
        markerStyle: { imageLayer: 'https://i.ibb.co/rGmcJLj/Next.png' }
      } 
    ],*/

    links: [
      { // link to the previous location, location 1
        nodeId: '1', longitude: 2.857, latitude: -0.263, name: 'Move Back to here',
        markerStyle: { svgStyle: { fill: 'rgba(200, 0, 50, 0.6)', stroke: 'rgba(200, 0, 50, 0.6)', strokeWidth: '5px' } }
      },

      { // link to the next location, location 3
        nodeId: '3', longitude: 0.313, latitude: -0.127, name: 'Move Forward to here',
        markerStyle: { svgStyle: { fill: 'rgba(0, 255, 0, 0.4)', stroke: 'rgba(0, 255, 0, 0.4)', strokeWidth: '5px' } }
      }
    ],

    markers: [
      
      /*{ // circle that display popup to move forward
        id: 'forward popup',
        ellipse: [30, 15],
        longitude: 0.313, latitude: -0.127,
        anchor: 'center center',
        hideList: true, // remove the marker from the markers list
        svgStyle: { fill: 'rgba(255, 255, 255, 0)' },
        tooltip: { content: 'Move Forward to here', position: 'top center', trigger: 'hover' },
        data: { compass: 'rgba(0, 255, 0, 1)' } // display path on compass
      },

      { // circle that display popup to move back
        id: 'back popup',
        ellipse: [30, 15],
        longitude: 2.857, latitude: -0.263,
        anchor: 'center center',
        hideList: true, // remove the marker from the markers list
        svgStyle: { fill: 'rgba(255, 255, 255, 0)' },
        tooltip: { content: 'Move Back to here', position: 'top center', trigger: 'hover' },
        data: { compass: 'rgba(200, 0, 50, 1)' } // display the move backward dot on the compass
      },*/

      { // create a path between from the indicator to the previous location to where you are standing and then to the next locator circle
        id: 'path',
        polylineRad: [[2.857, -0.263], [5.494, -1.5], [0.313, -0.127]], // path coodinates using long/ lat
        hideList: true, // remove the path marker from the markers list 
        svgStyle: { stroke: 'rgba(255, 255, 255, 0.4)', strokeWidth: '5px', strokeLinecap: 'round', strokeLinejoin: 'round' }, // set the style of the path
        style: { cursor: 'move' }, // set cursor to display a 'move' cursor when hovering over the path
        data: { compass: 'rgba(255, 255, 255, 0.7)' } // display path on compass
      },

      { // circle indicating where you are standing in the panarama
        id: 'standing here',
        circle: 30, // size of the circle 
        longitude: 5.494, latitude: -1.5, // location of the circle in the panarama
        hideList: true, // remove the circle from the markers list 
        tooltip: { content: 'You are here', position: 'top center', trigger: 'hover' }, // set the tooltip for the user 
        svgStyle: { fill: 'rgba(255, 255, 255, 0.5)' }, // set the style of the circle 
      },

      { // marker for the compass to indicate where the next location is
        id: 'forward not visible marker',
        circle: 30, // size of the circle 
        longitude: 0.313, latitude: -0.127, // long/ lat of the marker for the next location in the panarama
        hideList: true, // remove the marker from the markers list
        visible: false, // set the marker to not be visible, only will show in the compass
        data: { compass: 'rgba(0, 255, 0, 1)' } // display the move forward dot on the compass
      },

      { // marker for the compass to indicate where the previous location is
        id: 'backward not visible marker',
        circle: 30,
        longitude: 2.857, latitude: -0.263, // long/ lat of the marker for the previous location in the panarama
        hideList: true, // remove the marker from the markers list
        visible: false, // set the marker to not be visible, only will show in the compass
        data: { compass: 'rgba(200, 0, 50, 1)' } // display the move backward dot on the compass
      }
    ],
  },

  { /* node 3 */
    id: '3',
    panorama: 'https://i.ibb.co/sVGQZ3W/GS-0121.jpg', // panerama image link
    thumbnail: 'https://i.ibb.co/0GSZxJs/GS-0121.jpg', // thumbnail image link
    name: 'Location Three', // set the name of the panerama in the nodeslist 
    
    /*links: [
      { // link to the previous location, location 2
        nodeId: '2', longitude: 3.678, latitude: -0.214,
        markerStyle: { imageLayer: 'https://i.ibb.co/YQkbQgm/Previous.png' } 
      },

      { // link to the next location, location 4
        nodeId: '4', longitude: 6.199, latitude: -0.132,
        markerStyle: { imageLayer: 'https://i.ibb.co/rGmcJLj/Next.png' } 
      } 
    ],*/

    links: [
      { // link to the previous location, location 2
        nodeId: '2', longitude: 3.678, latitude: -0.214, name: 'Move Back to here',
        markerStyle: { svgStyle: { fill: 'rgba(200, 0, 50, 0.6)', stroke: 'rgba(200, 0, 50, 0.6)', strokeWidth: '5px' } }
      },

      { // link to the next location, location 4
        nodeId: '4', longitude: 6.199, latitude: -0.132, name: 'Move Forward to here',
        markerStyle: { svgStyle: { fill: 'rgba(0, 255, 0, 0.4)', stroke: 'rgba(0, 255, 0, 0.4)', strokeWidth: '5px' } }
      }
    ],

    markers: [
      
      /*{ // circle that display popup to move forward
        id: 'forward popup',
        ellipse: [30, 15],
        longitude: 6.199, latitude: -0.132,
        anchor: 'center center',
        hideList: true, // remove the marker from the markers list
        svgStyle: { fill: 'rgba(255, 255, 255, 0)' },
        tooltip: { content: 'Move Forward to here', position: 'top center', trigger: 'hover' },
        data: { compass: 'rgba(0, 255, 0, 1)' } // display path on compass
      },

      { // circle that display popup to move back
        id: 'back popup',
        ellipse: [30, 15],
        longitude: 3.678, latitude: -0.214,
        anchor: 'center center',
        hideList: true, // remove the marker from the markers list
        svgStyle: { fill: 'rgba(255, 255, 255, 0)' },
        tooltip: { content: 'Move Back to here', position: 'top center', trigger: 'hover' },
        data: { compass: 'rgba(200, 0, 50, 1)' } // display the move backward dot on the compass
      },*/
      
      { // create a path between from the indicator to the previous location to where you are standing and then to the next locator circle
        id: 'path',
        polylineRad: [[3.678, -0.214], [5.494, -1.5], [6.199, -0.132]], // path coodinates using long/ lat
        hideList: true, // remove the path marker from the markers list 
        svgStyle: { stroke: 'rgba(255, 255, 255, 0.4)', strokeWidth: '5px', strokeLinecap: 'round', strokeLinejoin: 'round' }, // set the style of the path
        style: { cursor: 'move' }, // set cursor to display a 'move' cursor when hovering over the path
        data: { compass: 'rgba(255, 255, 255, 0.7)' } // display path on compass
      },
      { // circle indicating where you are standing in the panarama
        id: 'standing here',
        circle: 30, // size of the circle 
        longitude: 5.494, latitude: -1.5, // location of the circle in the panarama
        hideList: true, // remove the circle from the markers list 
        tooltip: { content: 'You are here', position: 'top center', trigger: 'hover' }, // set the tooltip for the user 
        svgStyle: { fill: 'rgba(255, 255, 255, 0.5)' }, // set the style of the circle 
      },

      { // marker for the compass to indicate where the next location is
        id: 'forward not visible marker',
        circle: 30, // size of the circle 
        longitude: 6.199, latitude: -0.132, // long/ lat of the marker for the next location in the panarama
        hideList: true, // remove the marker from the markers list
        visible: false, // set the marker to not be visible, only will show in the compass
        data: { compass: 'rgba(0, 255, 0, 1)' } // display the move forward dot on the compass
      },
      { // marker for the compass to indicate where the previous location is
        id: 'backward not visible marker',
        circle: 30,
        longitude: 3.678, latitude: -0.214, // long/ lat of the marker for the previous location in the panarama
        hideList: true, // remove the marker from the markers list
        visible: false, // set the marker to not be visible, only will show in the compass
        data: { compass: 'rgba(200, 0, 50, 1)' } // display the move backward dot on the compass
      },

      { // Wall outline
        id: 'wall',
        polylineRad: [[5.787, -0.041], [5.805, -0.041], [5.82, -0.04], [5.84, -0.042], [5.852, -0.049], [5.854, -0.061], [5.854, -0.074], [5.843, -0.092], [5.827, -0.099], [5.799, -0.112], [5.761, -0.128], [5.638, -0.176], [5.504, -0.197]],
        hideList: true, // remove the marker from the markers list
        scale: { zoom: [0.5, 1] }, // the wall is twice smaller on the minimum zoom level
        tooltip: { content: 'Wall Outline', position: 'top center', trigger: 'hover' },
        svgStyle: { stroke: 'rgba(255, 255, 153, 0.6)', strokeWidth: 4, strokeLinecap: 'round', strokeLinejoin: 'round' }, // set the style of the wall
        data: { compass: 'rgba(255, 255, 153, 1)' }
      },
      { // Wall outline
        id: 'walls',
        polylineRad: [[6.064, -0.069], [6.038, -0.054], [6.008, -0.041], [5.989, -0.021], [5.985, 0.003], [5.998, 0.025], [6.026, 0.03], [6.064, 0.035], [6.112, 0.038], [6.147, 0.035], [6.191, 0.026], [6.23, 0.01], [6.276, -0.003], [0.037, -0.007], [0.088, -0.004], [0.132, 0.009], [0.175, 0.009], [0.228, 0.005], [0.256, 0.003], [0.301, 0.003], [0.352, 0.005], [0.407, 0.01], [0.448, 0.003], [0.518, -0.017], [0.602, -0.045], [0.663, -0.056], [0.735, -0.073], [0.773, -0.091], [0.795, -0.108], [0.797, -0.136], [0.796, -0.166], [0.781, -0.194], [0.732, -0.226], [0.65, -0.241], [0.572, -0.238], [0.503, -0.238], [0.453, -0.247], [0.39, -0.256], [0.325, -0.264]],
        hideList: true, // remove the marker from the markers list
        scale: { zoom: [0.5, 1] }, // the wall is twice smaller on the minimum zoom level
        tooltip: { content: 'Wall Outline', position: 'top center', trigger: 'hover' },
        svgStyle: { stroke: 'rgba(255, 255, 153, 0.6)', strokeWidth: 4, strokeLinecap: 'round', strokeLinejoin: 'round' }, // set the style of the wall
        data: { compass: 'rgba(255, 255, 153, 1)' }
      }

    ],
  },

  { /* node 4 */
    id: '4',
    panorama: 'https://i.ibb.co/FBYv6Yv/GS-0122.jpg', // panerama image link
    thumbnail: 'https://i.ibb.co/30FX1FX/GS-0122.jpg', // thumbnail image link
    name: 'Location Four', // set the name of the panerama in the nodeslist 
    links: [
      { // link to the previous location, location 3
        nodeId: '3', longitude: 3.401, latitude: -0.405, name: 'Move Back to here', 
        markerStyle: { svgStyle: { fill: 'rgba(200, 0, 50, 0.6)', stroke: 'rgba(200, 0, 50, 0.6)', strokeWidth: '5px' } }
      },

      { // link to the next location, location 5
        nodeId: '5', longitude: 0.435, latitude: -0.221, name: 'Move Forward to here',
        markerStyle: { svgStyle: { fill: 'rgba(0, 255, 0, 0.4)', stroke: 'rgba(0, 255, 0, 0.4)', strokeWidth: '5px' } } 
      }
    ],
    markers: [
      { // create a path between from the indicator to the previous location to where you are standing and then to the next locator circle
        id: 'path',
        polylineRad: [[3.401, -0.405], [5.494, -1.5], [0.435, -0.221]], // path coodinates using long/ lat
        hideList: true, // remove the path marker from the markers list 
        svgStyle: { stroke: 'rgba(255, 255, 255, 0.4)', strokeWidth: '5px', strokeLinecap: 'round', strokeLinejoin: 'round' }, // set the style of the path
        style: { cursor: 'move' }, // set cursor to display a 'move' cursor when hovering over the path
        data: { compass: 'rgba(255, 255, 255, 0.7)' } // display path on compass
      },
      { // circle indicating where you are standing in the panarama
        id: 'standing here',
        circle: 30, // size of the circle 
        longitude: 5.494, latitude: -1.5, // location of the circle in the panarama
        hideList: true, // remove the circle from the markers list 
        tooltip: { content: 'You are here', position: 'top center', trigger: 'hover' }, // set the tooltip for the user 
        svgStyle: { fill: 'rgba(255, 255, 255, 0.5)' }, // set the style of the circle
      },
      { // marker for the compass to indicate where the next location is
        id: 'forward not visible marker',
        circle: 30, // size of the circle 
        longitude: 0.435, latitude: -0.221, // long/ lat of the marker for the next location in the panarama
        hideList: true, // remove the marker from the markers list
        visible: false, // set the marker to not be visible, only will show in the compass
        data: { compass: 'rgba(0, 255, 0, 1)' } // display the move forward dot on the compass
      },
      { // marker for the compass to indicate where the previous location is
        id: 'backward not visible marker',
        circle: 30,
        longitude: 3.401, latitude: -0.405, // long/ lat of the marker for the previous location in the panarama
        hideList: true, // remove the marker from the markers list
        visible: false, // set the marker to not be visible, only will show in the compass
        data: { compass: 'rgba(200, 0, 50, 1)' } // display the move backward dot on the compass
      },
      { // Wall outline 
        id: 'wall',
        polylineRad: [[4.433, -0.517], [5.158, -0.505], [5.559, -0.38], [5.832, -0.242], [5.87, -0.191], [5.876, -0.15], [5.862, -0.109], [5.843, -0.091], [5.814, -0.08], [5.765, -0.077], [5.742, -0.076]],
        hideList: true, // remove the marker from the markers list
        scale: { zoom: [0.5, 1] }, // the wall is twice smaller on the minimum zoom level
        tooltip: { content: 'Wall Outline', position: 'top center', trigger: 'hover' },
        svgStyle: { stroke: 'rgba(255, 255, 153, 0.6)', strokeWidth: 4, strokeLinecap: 'round', strokeLinejoin: 'round' }, // set the style of the wall
        data: { compass: 'rgba(255, 255, 153, 1)' }
      },
      { // Wall outline
        id: 'walls',
        polylineRad: [[0.115, -0.251], [0.046, -0.217], [6.252, -0.185], [6.214, -0.15], [6.197, -0.121], [6.201, -0.084], [6.229, -0.054], [6.277, -0.037], [0.06, -0.035], [0.116, -0.037], [0.169, -0.043], [0.207, -0.057], [0.243, -0.069], [0.285, -0.076], [0.337, -0.077], [0.408, -0.076], [0.501, -0.063], [0.592, -0.054], [0.675, -0.052], [0.807, -0.049], [0.907, -0.052], [1.015, -0.066], [1.128, -0.068], [1.213, -0.081], [1.289, -0.095], [1.369, -0.115], [1.438, -0.139], [1.515, -0.171], [1.547, -0.203], [1.573, -0.26], [1.588, -0.313], [1.577, -0.372], [1.547, -0.429], [1.512, -0.495], [1.465, -0.56]],
        hideList: true, // remove the marker from the markers list
        scale: { zoom: [0.5, 1] }, // the wall is twice smaller on the minimum zoom level
        tooltip: { content: 'Wall Outline', position: 'top center', trigger: 'hover' },
        svgStyle: { stroke: 'rgba(255, 255, 153, 0.6)', strokeWidth: 4, strokeLinecap: 'round', strokeLinejoin: 'round' }, // set the style of the wall
        data: { compass: 'rgba(255, 255, 153, 1)' }
      }
    ],
  },
  
  { /* node 5 */
    id: '5',
    panorama: 'https://i.ibb.co/c6FMQZR/GS-0123.jpg', // panerama image link 
    thumbnail: 'https://i.ibb.co/sKwkqNc/GS-0123.jpg', // thumbnail image link
    name: 'Location Five', // set the name of the panerama in the nodeslist 
    links: [
      { // link to the previous location, location 4
        nodeId: '4', longitude: 3.14, latitude: -0.305, name: 'Move Back to here', 
        markerStyle: { svgStyle: { fill: 'rgba(200, 0, 50, 0.6)', stroke: 'rgba(200, 0, 50, 0.6)', strokeWidth: '5px' } }
      },

      { // link to the next location, location 6
        nodeId: '6', longitude: 0.253, latitude: -0.256, name: 'Move Forward to here',
        markerStyle: { svgStyle: { fill: 'rgba(0, 255, 0, 0.4)', stroke: 'rgba(0, 255, 0, 0.4)', strokeWidth: '5px' } } 
      }
    ],
    markers: [
      { // create a path between from the indicator to the previous location to where you are standing and then to the next locator circle
        id: 'path',
        polylineRad: [[3.14, -0.305], [5.494, -1.5], [0.253, -0.256]], // path coodinates using long/ lat
        hideList: true, // remove the path marker from the markers list 
        svgStyle: { stroke: 'rgba(255, 255, 255, 0.4)', strokeWidth: '5px', strokeLinecap: 'round', strokeLinejoin: 'round' }, // set the style of the path
        style: { cursor: 'move' }, // set cursor to display a 'move' cursor when hovering over the path
        data: { compass: 'rgba(255, 255, 255, 0.7)' } // display path on compass
      },
      { // circle indicating where you are standing in the panarama
        id: 'standing here',
        circle: 30, // size of the circle 
        longitude: 5.494, latitude: -1.5, // location of the circle in the panarama
        hideList: true, // remove the circle from the markers list 
        tooltip: { content: 'You are here', position: 'top center', trigger: 'hover' }, // set the tooltip for the user 
        svgStyle: { fill: 'rgba(255, 255, 255, 0.5)' }, // set the style of the circle
      },
      { // marker for the compass to indicate where the next location is
        id: 'forward not visible marker',
        circle: 30, // size of the circle 
        longitude: 0.253, latitude: -0.256, // long/ lat of the marker for the next location in the panarama
        hideList: true, // remove the marker from the markers list
        visible: false, // set the marker to not be visible, only will show in the compass
        data: { compass: 'rgba(0, 255, 0, 1)' } // display the move forward dot on the compass
      },
      { // marker for the compass to indicate where the previous location is
        id: 'backward not visible marker',
        circle: 30,
        longitude: 3.14, latitude: -0.305, // long/ lat of the marker for the previous location in the panarama
        hideList: true, // remove the marker from the markers list
        visible: false, // set the marker to not be visible, only will show in the compass
        data: { compass: 'rgba(200, 0, 50, 1)' } // display the move backward dot on the compass
      },
      { // Wall outline 
        id: 'wall',
        polylineRad: [[5.324, -0.355], [5.283, -0.262], [5.273, -0.172], [5.326, -0.119], [5.399, -0.1], [5.546, -0.087], [5.703, -0.086], [5.897, -0.085], [6.057, -0.118], [6.198, -0.149], [0.053, -0.136], [0.172, -0.124], [0.346, -0.123], [0.512, -0.1], [0.657, -0.1], [0.781, -0.104], [0.92, -0.107], [1.046, -0.114], [1.303, -0.128], [1.532, -0.148], [1.71, -0.161], [1.883, -0.195], [2.063, -0.24], [2.256, -0.285], [2.409, -0.321], [2.557, -0.35]],
        hideList: true, // remove the marker from the markers list
        scale: { zoom: [0.5, 1] }, // the wall is twice smaller on the minimum zoom level
        tooltip: { content: 'Wall Outline', position: 'top center', trigger: 'hover' },
        svgStyle: { stroke: 'rgba(255, 255, 153, 0.6)', strokeWidth: 4, strokeLinecap: 'round', strokeLinejoin: 'round' }, // set the style of the wall
        data: { compass: 'rgba(255, 255, 153, 1)' }
      },
      { // Wall outline
        id: 'walls',
        polylineRad: [[3.595, -0.141], [3.722, -0.195], [3.884, -0.242], [4.065, -0.287], [4.222, -0.308], [4.41, -0.302], [4.616, -0.268], [4.814, -0.207], [5.08, -0.123]],
        hideList: true, // remove the marker from the markers list
        scale: { zoom: [0.5, 1] }, // the wall is twice smaller on the minimum zoom level
        tooltip: { content: 'Wall Outline', position: 'top center', trigger: 'hover' },
        svgStyle: { stroke: 'rgba(255, 255, 153, 0.6)', strokeWidth: 4, strokeLinecap: 'round', strokeLinejoin: 'round' }, // set the style of the wall
        data: { compass: 'rgba(255, 255, 153, 1)' }
      }
    ],
  },

  { /* node 6 */
    id: '6',
    panorama: 'https://i.ibb.co/tQ7LVjC/GS-0124.jpg', // panerama image link
    thumbnail: 'https://i.ibb.co/2WDZGVK/GS-0124.jpg', // thumbnail image link
    name: 'Location Six', // set the name of the panerama in the nodeslist 
    links: [
      { // link to the previous location, location 5
        nodeId: '5', longitude: 3.013, latitude: -0.326, name: 'Move Back to here',
        markerStyle: { svgStyle: { fill: 'rgba(200, 0, 50, 0.6)', stroke: 'rgba(200, 0, 50, 0.6)', strokeWidth: '5px' } }
      },

      { // link to the next location, location 7
        nodeId: '7', longitude: 1.504, latitude: -0.312, name: 'Move Forward to here',
        markerStyle: { svgStyle: { fill: 'rgba(0, 255, 0, 0.4)', stroke: 'rgba(0, 255, 0, 0.4)', strokeWidth: '5px' } } 
      }
    ],
    markers: [
      { // create a path between from the indicator to the previous location to where you are standing and then to the next locator circle
        id: 'path',
        polylineRad: [[3.013, -0.326], [5.494, -1.5], [1.504, -0.312]], // path coodinates using long/ lat
        hideList: true, // remove the path marker from the markers list 
        svgStyle: { stroke: 'rgba(255, 255, 255, 0.4)', strokeWidth: '5px', strokeLinecap: 'round', strokeLinejoin: 'round' }, // set the style of the path
        style: { cursor: 'move' }, // set cursor to display a 'move' cursor when hovering over the path
        data: { compass: 'rgba(255, 255, 255, 0.7)' } // display path on compass
      },
      { // circle indicating where you are standing in the panarama
        id: 'standing here',
        circle: 30, // size of the circle
        longitude: 5.494, latitude: -1.5, // location of the circle in the panarama
        hideList: true, // remove the circle from the markers list 
        tooltip: { content: 'You are here', position: 'top center', trigger: 'hover' }, // set the tooltip for the user 
        svgStyle: { fill: 'rgba(255, 255, 255, 0.5)' }, // set the style of the circle
      },
      { // marker for the compass to indicate where the next location is
        id: 'forward not visible marker',
        circle: 30, // size of the circle 
        longitude: 1.504, latitude: -0.312, // long/ lat of the marker for the next location in the panarama
        hideList: true, // remove the marker from the markers list
        visible: false, // set the marker to not be visible, only will show in the compass
        data: { compass: 'rgba(0, 255, 0, 1)' } // display the move forward dot on the compass
      },
      { // marker for the compass to indicate where the previous location is
        id: 'backward not visible marker',
        circle: 30,
        longitude: 3.013, latitude: -0.326, // long/ lat of the marker for the previous location in the panarama
        hideList: true, // remove the marker from the markers list
        visible: false, // set the marker to not be visible, only will show in the compass
        data: { compass: 'rgba(200, 0, 50, 1)' } // display the move backward dot on the compass
      },
      { // Wall outline 
        id: 'wall',
        polylineRad: [[3.587, -0.244], [3.849, -0.158], [4.097, -0.106], [4.284, -0.081], [4.479, -0.087], [4.859, -0.08], [5.074, -0.087], [5.425, -0.154], [5.896, -0.218], [0.073, -0.196], [0.551, -0.128], [0.71, -0.107], [0.882, -0.107], [1.079, -0.111], [1.388, -0.131], [1.659, -0.139], [1.993, -0.158], [2.284, -0.171], [2.485, -0.184], [2.681, -0.197]],
        hideList: true, // remove the marker from the markers list
        scale: { zoom: [0.5, 1] }, // the wall is twice smaller on the minimum zoom level
        tooltip: { content: 'Wall Outline', position: 'top center', trigger: 'hover' },
        svgStyle: { stroke: 'rgba(255, 255, 153, 0.6)', strokeWidth: 4, strokeLinecap: 'round', strokeLinejoin: 'round' }, // set the style of the wall
        data: { compass: 'rgba(255, 255, 153, 1)' }
      },
      { // Wall outline
        id: 'walls',
        polylineRad: [[3.198, -0.102], [3.268, -0.122], [3.317, -0.13], [3.382, -0.146], [3.448, -0.15], [3.54, -0.16]],
        hideList: true, // remove the marker from the markers list
        scale: { zoom: [0.5, 1] }, // the wall is twice smaller on the minimum zoom level
        tooltip: { content: 'Wall Outline', position: 'top center', trigger: 'hover' },
        svgStyle: { stroke: 'rgba(255, 255, 153, 0.6)', strokeWidth: 4, strokeLinecap: 'round', strokeLinejoin: 'round' }, // set the style of the wall
        data: { compass: 'rgba(255, 255, 153, 1)' }
      }
    ],
  },

  { /* node 7 */
    id: '7',
    panorama: 'https://i.ibb.co/n05kZrY/GS-0125.jpg', // panerama image link
    thumbnail: 'https://i.ibb.co/RSVHZ2s/GS-0125.jpg', // thumbnail image link
    name: 'Location Seven', // set the name of the panerama in the nodeslist 
    links: [
      { // link to the previous location, location 6
        nodeId: '6', longitude: 3.101, latitude: -0.344, name: 'Move Back to here',
        markerStyle: { svgStyle: { fill: 'rgba(200, 0, 50, 0.6)', stroke: 'rgba(200, 0, 50, 0.6)', strokeWidth: '5px' } }
      },

      { // link to the next location, location 8
        nodeId: '8', longitude: 1.5, latitude: -0.334, name: 'Move Forward to here',
        markerStyle: { svgStyle: { fill: 'rgba(0, 255, 0, 0.4)', stroke: 'rgba(0, 255, 0, 0.4)', strokeWidth: '5px' } }  
      }
    ],
    markers: [
      { // create a path between from the indicator to the previous location to where you are standing and then to the next locator circle
        id: 'path',
        polylineRad: [[3.101, -0.344], [5.494, -1.5], [1.5, -0.334]], // path coodinates using long/ lat
        hideList: true, // remove the path marker from the markers list 
        svgStyle: { stroke: 'rgba(255, 255, 255, 0.4)', strokeWidth: '5px', strokeLinecap: 'round', strokeLinejoin: 'round' }, // set the style of the path
        style: { cursor: 'move' }, // set cursor to display a 'move' cursor when hovering over the path
        data: { compass: 'rgba(255, 255, 255, 0.7)' } // display path on compass
      },
      { // circle indicating where you are standing in the panarama
        id: 'standing here',
        circle: 30, // size of the circle
        longitude: 5.494, latitude: -1.5, // location of the circle in the panarama
        hideList: true, // remove the circle from the markers list 
        tooltip: { content: 'You are here', position: 'top center', trigger: 'hover' }, // set the tooltip for the user 
        svgStyle: { fill: 'rgba(255, 255, 255, 0.5)' }, // set the style of the circle
      },
      { // marker for the compass to indicate where the next location is
        id: 'forward not visible marker',
        circle: 30, // size of the circle 
        longitude: 1.5, latitude: -0.334, // long/ lat of the marker for the next location in the panarama
        hideList: true, // remove the marker from the markers list
        visible: false, // set the marker to not be visible, only will show in the compass
        data: { compass: 'rgba(0, 255, 0, 1)' } // display the move forward dot on the compass
      },
      { // marker for the compass to indicate where the previous location is
        id: 'backward not visible marker',
        circle: 30,
        longitude: 3.101, latitude: -0.344, // long/ lat of the marker for the previous location in the panarama
        hideList: true, // remove the marker from the markers list
        visible: false, // set the marker to not be visible, only will show in the compass
        data: { compass: 'rgba(200, 0, 50, 1)' } // display the move backward dot on the compass
      }
    ],
  },

  { /* node 8 */
    id: '8',
    panorama: 'https://i.ibb.co/rQQKLQC/GS-0126.jpg', // panerama image link
    thumbnail: 'https://i.ibb.co/6yycpy3/GS-0126.jpg', // thumbnail image link
    name: 'Location Eight', // set the name of the panerama in the nodeslist 
    links: [
      { // link to the previous location, location 7
        nodeId: '7', longitude: 4.483, latitude: -0.193, name: 'Move Back to here',
        markerStyle: { svgStyle: { fill: 'rgba(200, 0, 50, 0.6)', stroke: 'rgba(200, 0, 50, 0.6)', strokeWidth: '5px' } } 
      },

      { // link to the next location, location 9
        nodeId: '9', longitude: 1.661, latitude: -0.262, name: 'Move Forward to here',
        markerStyle: { svgStyle: { fill: 'rgba(0, 255, 0, 0.4)', stroke: 'rgba(0, 255, 0, 0.4)', strokeWidth: '5px' } }   
      }
    ],
    markers: [
      { // create a path between from the indicator to the previous location to where you are standing and then to the next locator circle
        id: 'path',
        polylineRad: [[4.483, -0.193], [5.494, -1.5], [1.661, -0.262]], // path coodinates using long/ lat
        hideList: true, // remove the path marker from the markers list 
        svgStyle: { stroke: 'rgba(255, 255, 255, 0.4)', strokeWidth: '5px', strokeLinecap: 'round', strokeLinejoin: 'round' }, // set the style of the path
        style: { cursor: 'move' }, // set cursor to display a 'move' cursor when hovering over the path
        data: { compass: 'rgba(255, 255, 255, 0.7)' } // display path on compass
      },
      { // circle indicating where you are standing in the panarama
        id: 'standing here',
        circle: 30, // size of the circle
        longitude: 5.494, latitude: -1.5, // location of the circle in the panarama
        hideList: true, // remove the circle from the markers list 
        tooltip: { content: 'You are here', position: 'top center', trigger: 'hover' }, // set the tooltip for the user 
        svgStyle: { fill: 'rgba(255, 255, 255, 0.5)' }, // set the style of the circle
      },
      { // marker for the compass to indicate where the next location is
        id: 'forward not visible marker',
        circle: 30, // size of the circle 
        longitude: 1.661, latitude: -0.262, // long/ lat of the marker for the next location in the panarama
        hideList: true, // remove the marker from the markers list
        visible: false, // set the marker to not be visible, only will show in the compass
        data: { compass: 'rgba(0, 255, 0, 1)' } // display the move forward dot on the compass
      },
      { // marker for the compass to indicate where the previous location is
        id: 'backward not visible marker',
        circle: 30,
        longitude: 4.483, latitude: -0.193, // long/ lat of the marker for the previous location in the panarama
        hideList: true, // remove the marker from the markers list
        visible: false, // set the marker to not be visible, only will show in the compass
        data: { compass: 'rgba(200, 0, 50, 1)' } // display the move backward dot on the compass
      }
    ],
    panoData: { poseHeading: 90 }, // change the initial direction of the panarama 
  },

  { /* node 9 */
    id: '9',
    panorama: 'https://i.ibb.co/4T4Cq7F/GS-0134.jpg', // panerama image link
    thumbnail: 'https://i.ibb.co/NjWfvsF/GS-0134.jpg', // thumbnail image link
    name: 'Location Nine', // set the name of the panerama in the nodeslist 
    links: [
      { // link to the previous location, location 8
        nodeId: '8', longitude: 0.873, latitude: -0.143, name: 'Move Back to here',
        markerStyle: { svgStyle: { fill: 'rgba(200, 0, 50, 0.6)', stroke: 'rgba(200, 0, 50, 0.6)', strokeWidth: '5px' } }  
      },

      { // link to the next location, location 10
        nodeId: '10', longitude: 2.039, latitude: -0.148, name: 'Move Forward to here',
        markerStyle: { svgStyle: { fill: 'rgba(0, 255, 0, 0.4)', stroke: 'rgba(0, 255, 0, 0.4)', strokeWidth: '5px' } }    
      }
    ],
    markers: [
      { // create a path between from the indicator to the previous location to where you are standing and then to the next locator circle
        id: 'path',
        polylineRad: [[0.873, -0.143], [5.494, -1.5], [2.039, -0.148]], // path coodinates using long/ lat
        hideList: true, // remove the path marker from the markers list 
        svgStyle: { stroke: 'rgba(255, 255, 255, 0.4)', strokeWidth: '5px', strokeLinecap: 'round', strokeLinejoin: 'round' }, // set the style of the path
        style: { cursor: 'move' }, // set cursor to display a 'move' cursor when hovering over the path
        data: { compass: 'rgba(255, 255, 255, 0.7)' } // display path on compass
      },
      { // circle indicating where you are standing in the panarama
        id: 'standing here',
        circle: 30, // size of the circle
        longitude: 5.494, latitude: -1.5, // location of the circle in the panarama
        hideList: true, // remove the circle from the markers list 
        tooltip: { content: 'You are here', position: 'top center', trigger: 'hover' }, // set the tooltip for the user 
        svgStyle: { fill: 'rgba(255, 255, 255, 0.5)' }, // set the style of the circle
      },
      { // marker for the compass to indicate where the next location is
        id: 'forward not visible marker',
        circle: 30, // size of the circle 
        longitude: 2.039, latitude: -0.148, // long/ lat of the marker for the next location in the panarama
        hideList: true, // remove the marker from the markers list
        visible: false, // set the marker to not be visible, only will show in the compass
        data: { compass: 'rgba(0, 255, 0, 1)' } // display the move forward dot on the compass
      },
      { // marker for the compass to indicate where the previous location is
        id: 'backward not visible marker',
        circle: 30,
        longitude: 0.873, latitude: -0.143, // long/ lat of the marker for the previous location in the panarama
        hideList: true, // remove the marker from the markers list
        visible: false, // set the marker to not be visible, only will show in the compass
        data: { compass: 'rgba(200, 0, 50, 1)' } // display the move backward dot on the compass
      }
    ],
    panoData: { poseHeading: 90 }, // change the initial direction of the panarama 
  },

  { /* node 10 */
    id: '10',
    panorama: 'https://i.ibb.co/YLkTRWv/GS-0131.jpg', // panerama image link
    thumbnail: 'https://i.ibb.co/Tg8qvTz/GS-0131.jpg', // thumbnail image link
    name: 'Location Ten', // set the name of the panerama in the nodeslist 
    links: [
      { // link to the previous location, location 9
        nodeId: '9', longitude: 5.034, latitude: -0.184, name: 'Move Back to here',
        markerStyle: { svgStyle: { fill: 'rgba(200, 0, 50, 0.6)', stroke: 'rgba(200, 0, 50, 0.6)', strokeWidth: '5px' } }  
      },

      { // link to the next location, location 11
        nodeId: '11', longitude: 1.753, latitude: -0.225, name: 'Move Forward to here',
        markerStyle: { svgStyle: { fill: 'rgba(0, 255, 0, 0.4)', stroke: 'rgba(0, 255, 0, 0.4)', strokeWidth: '5px' } }    
      }
    ],
    markers: [
      { // create a path between from the indicator to the previous location to where you are standing and then to the next locator circle
        id: 'path',
        polylineRad: [[5.034, -0.184], [5.494, -1.5], [1.753, -0.225]], // path coodinates using long/ lat
        hideList: true, // remove the path marker from the markers list 
        svgStyle: { stroke: 'rgba(255, 255, 255, 0.4)', strokeWidth: '5px', strokeLinecap: 'round', strokeLinejoin: 'round' }, // set the style of the path
        style: { cursor: 'move' }, // set cursor to display a 'move' cursor when hovering over the path
        data: { compass: 'rgba(255, 255, 255, 0.7)' } // display path on compass
      },
      { // circle indicating where you are standing in the panarama
        id: 'standing here',
        circle: 30, // size of the circle
        longitude: 5.494, latitude: -1.5, // location of the circle in the panarama
        hideList: true, // remove the circle from the markers list 
        tooltip: { content: 'You are here', position: 'top center', trigger: 'hover' }, // set the tooltip for the user 
        svgStyle: { fill: 'rgba(255, 255, 255, 0.5)' }, // set the style of the circle
      },
      { // marker for the compass to indicate where the next location is
        id: 'forward not visible marker',
        circle: 30, // size of the circle 
        longitude: 1.753, latitude: -0.225, // long/ lat of the marker for the next location in the panarama
        hideList: true, // remove the marker from the markers list
        visible: false, // set the marker to not be visible, only will show in the compass
        data: { compass: 'rgba(0, 255, 0, 1)' } // display the move forward dot on the compass
      },
      { // marker for the compass to indicate where the previous location is
        id: 'backward not visible marker',
        circle: 30,
        longitude: 5.034, latitude: -0.184, // long/ lat of the marker for the previous location in the panarama
        hideList: true, // remove the marker from the markers list
        visible: false, // set the marker to not be visible, only will show in the compass
        data: { compass: 'rgba(200, 0, 50, 1)' } // display the move backward dot on the compass
      }
    ],
    panoData: { poseHeading: 90 }, // change the initial direction of the panarama 
  },

  { /* node 11 */
    id: '11',
    panorama: 'https://i.ibb.co/mT4D4pw/GS-0129.jpg', // panerama image link
    thumbnail: 'https://i.ibb.co/4tpmpkG/GS-0129.jpg', // thumbnail image link
    name: 'Location Eleven', // set the name of the panerama in the nodeslist 
    links: [
      { // link to the previous location, location 10
        nodeId: '10', longitude: 4.948, latitude: -0.141, name: 'Move Back to here',
        markerStyle: { svgStyle: { fill: 'rgba(200, 0, 50, 0.6)', stroke: 'rgba(200, 0, 50, 0.6)', strokeWidth: '5px' } }  
      }
    ],
    markers: [
      {
        id: 'path',
        polylineRad: [[4.948, -0.141], [5.494, -1.5]], // path coodinates using long/ lat
        hideList: true, // remove the path marker from the markers list 
        svgStyle: { stroke: 'rgba(255, 255, 255, 0.4)', strokeWidth: '5px', strokeLinecap: 'round', strokeLinejoin: 'round' }, // set the style of the path
        style: { cursor: 'move' }, // set cursor to display a 'move' cursor when hovering over the path
        data: { compass: 'rgba(255, 255, 255, 0.7)' } // display path on compass
      },
      { // circle indicating where you are standing in the panarama
        id: 'standing here',
        circle: 30, // size of the circle
        longitude: 5.494, latitude: -1.5, // location of the circle in the panarama
        hideList: true, // remove the circle from the markers list 
        tooltip: { content: 'You are here', position: 'top center', trigger: 'hover' }, // set the tooltip for the user 
        svgStyle: { fill: 'rgba(255, 255, 255, 0.5)' }, // set the style of the circle
      },
      { // marker for the compass to indicate where the previous location is
        id: 'backward not visible marker',
        circle: 30,
        longitude: 4.948, latitude: -0.141, // long/ lat of the marker for the previous location in the panarama
        hideList: true, // remove the marker from the markers list
        visible: false, // set the marker to not be visible, only will show in the compass
        data: { compass: 'rgba(200, 0, 50, 1)' } // display the move backward dot on the compass
      }
    ],
    panoData: { poseHeading: 90 }, // change the initial direction of the panarama 
  },

], '1');



