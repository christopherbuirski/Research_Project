var buttonId = 'overlay-button';
var mapButton = 'map';
var informationButton = 'map';

var infoBlue = 'https://i.ibb.co/mb3vjdY/Blue-info-marker.png';
var infoOrange = 'https://i.ibb.co/y0DFNPj/Orange-Info.png';

// Variables for image links 
var location_1 = 'https://i.ibb.co/Px4cd5g/GS-0119-edited.jpg';
var location_1_thumbnail = 'https://i.ibb.co/TcR4sHt/GS-0119-edited.jpg';

var location_2 = 'https://i.ibb.co/ngGnZ2g/GS-0120-edited.jpg';
var location_2_thumbnail = 'https://i.ibb.co/5M0ntDM/GS-0120-edited.jpg';

var location_3 = 'https://i.ibb.co/4t4R6rc/GS-0121-edited.jpg';
var location_3_thumbnail = 'https://i.ibb.co/3dSmDZw/GS-0121-edited.jpg';

var location_4 = 'https://i.ibb.co/QJ63J8b/GS-0122-edited.jpg';
var location_4_thumbnail = 'https://i.ibb.co/kGhsG3H/GS-0122-edited.jpg';

var location_5 = 'https://i.ibb.co/nDwSLzm/GS-0123-edited.jpg';
var location_5_thumbnail = 'https://i.ibb.co/hKgvmD9/GS-0123-edited.jpg';

var location_6 = 'https://i.ibb.co/vV9CXpV/GS-0124-edited.jpg';
var location_6_thumbnail = 'https://i.ibb.co/9cPmZ6c/GS-0124-edited.jpg';

var location_7 = 'https://i.ibb.co/KGS2xhd/GS-0125-edited.jpg';
var location_7_thumbnail = 'https://i.ibb.co/59wrh4m/GS-0125-edited.jpg';

var location_8 = 'https://i.ibb.co/4WC3bM5/GS-0126-edited.jpg';
var location_8_thumbnail = 'https://i.ibb.co/qBhVH9P/GS-0126-edited.jpg';

var location_9 = 'https://i.ibb.co/hcMVDf6/GS-0134-edited.jpg';
var location_9_thumbnail = 'https://i.ibb.co/w7L4Msk/GS-0134-edited.jpg';

var location_10 = 'https://i.ibb.co/R4z0Gvd/GS-0131-edited.jpg';
var location_10_thumbnail = 'https://i.ibb.co/8465nKt/GS-0131-edited.jpg';

var location_11 = 'https://i.ibb.co/N6tMNdR/GS-0129-edited.jpg';
var location_11_thumbnail = 'https://i.ibb.co/DDzZMHd/GS-0129-edited.jpg';

var viewer = new PhotoSphereViewer.Viewer({
  container: 'photosphere',
  loadingImg: 'https://photo-sphere-viewer.js.org/assets/photosphere-logo.gif',
  defaultZoomLvl: 0,
  touchmoveTwoFingers: false,
  //caption: 'Virtual Tour at Lebenya',
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
        }
      ],
    ],  
  //navbar: ['autorotate', 'zoom', 'move', 'caption', 'markers','markersList', 'nodesList', 'fullscreen' ], 
  /*navbar: ['autorotate', 'zoom', 'move', 'caption', 'markers','markersList', 'nodesList',
    {
      id: buttonId,
      title: 'Show overlay',
      content: 'Help', 
      onClick: help,
    },
     'fullscreen'],*/
  
  navbar: ['autorotate', 'zoom', 'move', 'caption', 
    {
      id: informationButton,
      title: 'Click here to view the Project Information',
      content: document.getElementById('information').innerHTML,
    },   
    {
      id: mapButton,
      title: 'Click here to view the Location Map',
      content: document.getElementById('map').innerHTML,
    },
    {
      id: buttonId,
      title: 'Click here to view the Instructions',
      content: document.getElementById('help1').innerHTML,
      onClick: help,
    },'markersList','nodesList','fullscreen'
  ]
});

function help() {
  viewer.overlay.show({
    text: document.getElementById('help').innerHTML,
    dissmisable: true,
  });
}

function showOverlay() {
  viewer.overlay.show({
    id: 'start',
    text: document.getElementById('start').innerHTML,
    dissmisable: true,
  });
}

viewer.once('ready', showOverlay);

var virtualTour = viewer.getPlugin(PhotoSphereViewer.VirtualTourPlugin);

virtualTour.setNodes([
  { /* node 1 */
    id: '1',
    panorama: location_1, // panerama image link 
    thumbnail: location_1_thumbnail, // thumbnail image link
    name: 'Location One', // set the name of the panerama in the nodeslist 
    caption: 'Location One', // set the caption

    links: [
      { // link to the next location, location 2
        nodeId: '2', longitude: 6.14, latitude: -0.217, name: 'Move Forward to here', 
        markerStyle: { svgStyle: { fill: 'rgba(0, 255, 0, 0.4)', stroke: 'rgba(0, 255, 0, 0.4)', strokeWidth: 5 } } 
      } 
    ],

    markers: [
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
      },
      { // Info Marker
        id: 'info',
        listContent: 'Stonewall Site Information',
        image: infoOrange,
        //longitude: 5.362, latitude: 0.007,
        longitude: 5.85, latitude: 0.014,
        width: 50, height: 50,
        anchor: 'bottom center',
        tooltip: { content: 'Stonewall Site Information', position: 'top center', trigger: 'hover' },
        //tooltip: { content: document.getElementById('overview').innerHTML, position: 'top center', trigger: 'hover' },
        content: document.getElementById('overview').innerHTML
      },
      { // Wall outline 
        id: 'wall',
        polylineRad: [[2.581, -0.149], [2.745, -0.171], [2.926, -0.189], [3.031, -0.192], [3.261, -0.17]],
        hideList: true, // remove the marker from the markers list
        scale: { zoom: [0.5, 1] }, // the wall is twice smaller on the minimum zoom level
        tooltip: { content: 'Wall Outline', position: 'top center', trigger: 'hover' },
        svgStyle: { stroke: 'rgba(255, 255, 153, 0.6)', strokeWidth: 4, strokeLinecap: 'round', strokeLinejoin: 'round' }, // set the style of the wall
        data: { compass: 'rgba(255, 255, 153, 1)' }
      }
    ],
  },

  { /* node 2 */ 
    id: '2',
    panorama: location_2, // panerama image link
    thumbnail: location_2_thumbnail, // thumbnail image link
    name: 'Location Two', // set the name of the panerama in the nodeslist 
    caption: 'Location Two', // set the caption

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
      },
      { // Info Marker
        id: 'info',
        listContent: 'Site Work Done',
        image: infoOrange,
        longitude: 6.079, latitude: -0.018,
        width: 50, height: 50,
        anchor: 'bottom center',
        tooltip: { content: 'Site Work Done', position: 'top center', trigger: 'hover' },
        content: document.getElementById('workdone').innerHTML,
      },
      { // Info Marker
        id: 'info2',
        listContent: 'Where are we?',
        image: infoOrange,
        longitude: 0.759, latitude: -0.014,
        width: 50, height: 50,
        anchor: 'bottom center',
        tooltip: { content: 'Where are we going?', position: 'top center', trigger: 'hover' },
        content: document.getElementById('wherearewe').innerHTML
      }
    ],
  },

  { /* node 3 */
    id: '3',
    panorama: location_3, // panerama image link
    thumbnail: location_3_thumbnail, // thumbnail image link
    name: 'Location Three', // set the name of the panerama in the nodeslist
    caption: 'Location Three', // set the caption 

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
      },
      { // Info Marker
        id: 'info',
        listContent: 'Cluster Organisation',
        image: infoOrange,
        longitude: 5.741, latitude: -0.294,
        width: 50, height: 50,
        anchor: 'bottom center',
        tooltip: { content: 'How were each of the three clusters organised?', position: 'top center', trigger: 'hover' },
        content: document.getElementById('organised').innerHTML
      },
      { // Info Marker
        id: 'info2',
        listContent: 'Compound Appearance',
        image: infoOrange,
        longitude: 0.276, latitude: -0.122,
        width: 50, height: 50,
        anchor: 'bottom center',
        tooltip: { content: 'Occupied Compound Appearance', position: 'top center', trigger: 'hover' },
        content: document.getElementById('compoundappearance').innerHTML
      }
    ],
  },

  { /* node 4 */
    id: '4',
    panorama: location_4, // panerama image link
    thumbnail: location_4_thumbnail, // thumbnail image link
    name: 'Location Four', // set the name of the panerama in the nodeslist 
    caption: 'Location Four', // set the caption

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
      },
      { // Info Marker
        id: 'info',
        listContent: 'Hut Appearance',
        image: infoOrange,
        longitude: 0.12, latitude: -0.156,
        width: 50, height: 50,
        anchor: 'bottom center',
        tooltip: { content: 'What did the huts look like?', position: 'top center', trigger: 'hover' },
        content: document.getElementById('hut').innerHTML
      },
    ],
  },
  
  { /* node 5 */
    id: '5',
    panorama: location_5, // panerama image link 
    thumbnail: location_5_thumbnail, // thumbnail image link
    name: 'Location Five', // set the name of the panerama in the nodeslist 
    caption: 'Location Five', // set the caption
    
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
      },
      { // Info Marker
        id: 'info',
        listContent: 'Materials & techniques for building a family unit',
        image: infoOrange,
        longitude: 0.566, latitude: -0.397,
        width: 50, height: 50,
        anchor: 'bottom center',
        tooltip: { content: 'Materials & techniques for building a family unit?', position: 'top center', trigger: 'hover' },
        content: document.getElementById('materials').innerHTML
      }
    ],
  },

  { /* node 6 */
    id: '6',
    panorama: location_6, // panerama image link
    thumbnail: location_6_thumbnail, // thumbnail image link
    name: 'Location Six', // set the name of the panerama in the nodeslist 
    caption: 'Location Six', // set the caption

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
      },
      { // Info Marker
        id: 'info',
        listContent: 'Who lived here',
        image: infoOrange,
        longitude: 0.276, latitude: -0.28,
        width: 50, height: 50,
        anchor: 'bottom center',
        tooltip: { content: 'Who lived here?', position: 'top center', trigger: 'hover' },
        content: document.getElementById('wholivedhere').innerHTML
      }
    ],
  },

  { /* node 7 */
    id: '7',
    panorama: location_7, // panerama image link
    thumbnail: location_7_thumbnail, // thumbnail image link
    name: 'Location Seven', // set the name of the panerama in the nodeslist 
    caption: 'Location Seven', // set the caption

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
      },
      { // Wall outline 
        id: 'wall',
        polylineRad: [[2.495, -0.106], [2.563, -0.117], [2.626, -0.12], [2.688, -0.121], [2.753, -0.122], [2.836, -0.106], [2.926, -0.089], [3.031, -0.072], [3.135, -0.068], [3.231, -0.067], [3.337, -0.073], [3.435, -0.08], [3.55, -0.098], [3.673, -0.125], [3.795, -0.134], [3.905, -0.14], [4.093, -0.152], [4.249, -0.167], [4.472, -0.188], [4.692, -0.198], [4.908, -0.207], [5.125, -0.201], [5.317, -0.204], [5.549, -0.206], [5.796, -0.205], [5.958, -0.219], [6.098, -0.23], [0.022, -0.229], [0.276, -0.234], [0.525, -0.229], [0.727, -0.236], [0.902, -0.228], [1.077, -0.209], [1.196, -0.198], [1.293, -0.194], [1.402, -0.185], [1.45, -0.18]],
        hideList: true, // remove the marker from the markers list
        scale: { zoom: [0.5, 1] }, // the wall is twice smaller on the minimum zoom level
        tooltip: { content: 'Wall Outline', position: 'top center', trigger: 'hover' },
        svgStyle: { stroke: 'rgba(255, 255, 153, 0.6)', strokeWidth: 4, strokeLinecap: 'round', strokeLinejoin: 'round' }, // set the style of the wall
        data: { compass: 'rgba(255, 255, 153, 1)' }
      },
      { // Info Marker
        id: 'info',
        listContent: 'Settlement Life',
        image: infoOrange,
        longitude: 2.117, latitude: -0.325,
        width: 50, height: 50,
        anchor: 'bottom center',
        tooltip: { content: 'Settlement Life', position: 'top center', trigger: 'hover' },
        content: 'What was it like living in the settlement? Roles of the men, of the women, of children?'
      }
    ],
  },

  { /* node 8 */
    id: '8',
    panorama: location_8, // panerama image link
    thumbnail: location_8_thumbnail, // thumbnail image link
    name: 'Location Eight', // set the name of the panerama in the nodeslist 
    caption: 'Location Eight', // set the caption

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
      },
      { // Wall outline 
        id: 'wall',
        polylineRad: [[1.387, -0.418], [1.083, -0.455], [0.838, -0.473], [0.636, -0.481], [0.418, -0.49], [0.293, -0.489], [6.119, -0.393], [5.796, -0.283], [5.583, -0.197], [5.394, -0.157], [5.253, -0.12], [5.059, -0.086], [4.898, -0.055], [4.802, -0.047], [4.739, -0.043], [4.605, -0.038], [4.515, -0.044], [4.367, -0.046], [4.228, -0.049], [4.101, -0.055], [3.995, -0.065], [3.923, -0.069], [3.798, -0.07], [3.708, -0.059], [3.591, -0.046], [3.467, -0.045], [3.373, -0.049], [3.261, -0.071], [3.147, -0.087], [3.046, -0.101], [2.976, -0.1]],
        hideList: true, // remove the marker from the markers list
        scale: { zoom: [0.5, 1] }, // the wall is twice smaller on the minimum zoom level
        tooltip: { content: 'Wall Outline', position: 'top center', trigger: 'hover' },
        svgStyle: { stroke: 'rgba(255, 255, 153, 0.6)', strokeWidth: 4, strokeLinecap: 'round', strokeLinejoin: 'round' }, // set the style of the wall
        data: { compass: 'rgba(255, 255, 153, 1)' }
      },
      { // Info Marker
        id: 'info',
        listContent: 'Settlement Life Continued',
        image: infoOrange,
        longitude: 1.902, latitude: -0.153,
        width: 50, height: 50,
        anchor: 'bottom center',
        tooltip: { content: 'Settlement Life Continued', position: 'top center', trigger: 'hover' },
        content: 'What was it like living in the settlement? What food did they eat? Quality of life/ life expectancy?'
      }
    ],
    panoData: { poseHeading: 90 }, // change the initial direction of the panarama 
  },

  { /* node 9 */
    id: '9',
    panorama: location_9, // panerama image link
    thumbnail: location_9_thumbnail, // thumbnail image link
    name: 'Location Nine', // set the name of the panerama in the nodeslist 
    caption: 'Location Nine', // set the caption

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
      },
      { // Wall outline 
        id: 'wall',
        polylineRad: [[1.32, -0.209], [1.392, -0.192], [1.44, -0.172], [1.471, -0.145], [1.502, -0.111], [1.505, -0.089], [1.507, -0.07], [1.493, -0.052], [1.472, -0.043], [1.432, -0.033], [1.378, -0.027], [1.333, -0.028], [1.267, -0.027], [1.179, -0.031], [1.073, -0.043], [1.001, -0.045], [0.937, -0.044], [0.875, -0.042], [0.836, -0.039], [0.803, -0.035], [0.777, -0.026], [0.744, -0.019], [0.706, -0.019], [0.666, -0.015], [0.626, -0.017], [0.572, -0.018], [0.537, -0.023], [0.501, -0.029], [0.486, -0.038], [0.479, -0.049], [0.474, -0.06]],
        hideList: true, // remove the marker from the markers list
        scale: { zoom: [0.5, 1] }, // the wall is twice smaller on the minimum zoom level
        tooltip: { content: 'Wall Outline', position: 'top center', trigger: 'hover' },
        svgStyle: { stroke: 'rgba(255, 255, 153, 0.6)', strokeWidth: 4, strokeLinecap: 'round', strokeLinejoin: 'round' }, // set the style of the wall
        data: { compass: 'rgba(255, 255, 153, 1)' }
      },
      { // Wall outline
        id: 'walls',
        polylineRad: [[0.102, -0.081], [0.181, -0.074], [0.234, -0.069], [0.283, -0.068], [0.332, -0.06], [0.356, -0.052], [0.369, -0.039], [0.376, -0.028]],
        hideList: true, // remove the marker from the markers list
        scale: { zoom: [0.5, 1] }, // the wall is twice smaller on the minimum zoom level
        tooltip: { content: 'Wall Outline', position: 'top center', trigger: 'hover' },
        svgStyle: { stroke: 'rgba(255, 255, 153, 0.6)', strokeWidth: 4, strokeLinecap: 'round', strokeLinejoin: 'round' }, // set the style of the wall
        data: { compass: 'rgba(255, 255, 153, 1)' }
      },
      { // Wall outline
        id: 'wall2',
        polylineRad: [[2.318, -0.106], [2.27, -0.09], [2.225, -0.076], [2.186, -0.059], [2.141, -0.048], [2.122, -0.039], [2.085, -0.031], [2.056, -0.028], [2.007, -0.026], [1.952, -0.027], [1.895, -0.027], [1.856, -0.025], [1.799, -0.028], [1.753, -0.029], [1.701, -0.034], [1.659, -0.041], [1.596, -0.051], [1.571, -0.057], [1.531, -0.067], [1.515, -0.076], [1.509, -0.085]],
        hideList: true, // remove the marker from the markers list
        scale: { zoom: [0.5, 1] }, // the wall is twice smaller on the minimum zoom level
        tooltip: { content: 'Wall Outline', position: 'top center', trigger: 'hover' },
        svgStyle: { stroke: 'rgba(255, 255, 153, 0.6)', strokeWidth: 4, strokeLinecap: 'round', strokeLinejoin: 'round' }, // set the style of the wall
        data: { compass: 'rgba(255, 255, 153, 1)' }
      },
      { // Info Marker
        id: 'info',
        listContent: 'Settlement Layout',
        image: infoOrange,
        longitude: 1.301, latitude: -0.437,
        width: 50, height: 50,
        anchor: 'bottom center',
        tooltip: { content: 'Settlement Layout', position: 'top center', trigger: 'hover' },
        content: 'Why was the settlement laid out like this? What part of the settlement are we in?'
      }
    ],
    panoData: { poseHeading: 90 }, // change the initial direction of the panarama 
  },

  { /* node 10 */
    id: '10',
    panorama: location_10, // panerama image link
    thumbnail: location_10_thumbnail, // thumbnail image link
    name: 'Location Ten', // set the name of the panerama in the nodeslist 
    caption: 'Location Ten', // set the caption

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
      },
      { // Wall outline 
        id: 'wall',
        polylineRad: [[3.171, -0.412], [2.773, -0.34], [2.472, -0.233], [2.319, -0.158], [2.175, -0.104], [2.08, -0.072], [2.015, -0.053], [1.936, -0.046], [1.838, -0.042], [1.72, -0.034], [1.655, -0.033], [1.568, -0.035], [1.5, -0.038], [1.411, -0.045], [1.301, -0.055], [1.192, -0.072], [1.061, -0.09], [0.974, -0.108], [0.857, -0.134], [0.723, -0.162], [0.542, -0.202], [0.286, -0.228], [6.258, -0.249], [5.935, -0.259], [5.866, -0.262]],
        hideList: true, // remove the marker from the markers list
        scale: { zoom: [0.5, 1] }, // the wall is twice smaller on the minimum zoom level
        tooltip: { content: 'Wall Outline', position: 'top center', trigger: 'hover' },
        svgStyle: { stroke: 'rgba(255, 255, 153, 0.6)', strokeWidth: 4, strokeLinecap: 'round', strokeLinejoin: 'round' }, // set the style of the wall
        data: { compass: 'rgba(255, 255, 153, 1)' }
      },
      { // Wall outline
        id: 'walls',
        polylineRad: [[0.713, -0.157], [0.764, -0.131], [0.809, -0.106], [0.84, -0.08], [0.846, -0.056], [0.832, -0.04], [0.806, -0.032], [0.773, -0.024], [0.729, -0.026], [0.674, -0.029], [0.609, -0.029], [0.54, -0.031], [0.47, -0.032], [0.408, -0.03], [0.355, -0.026], [0.308, -0.018], [0.271, -0.011], [0.228, -0.01], [0.183, -0.011], [0.142, -0.011], [0.097, -0.014], [0.065, -0.016], [0.021, -0.021], [6.265, -0.029], [6.237, -0.034], [6.209, -0.04], [6.198, -0.041]],
        hideList: true, // remove the marker from the markers list
        scale: { zoom: [0.5, 1] }, // the wall is twice smaller on the minimum zoom level
        tooltip: { content: 'Wall Outline', position: 'top center', trigger: 'hover' },
        svgStyle: { stroke: 'rgba(255, 255, 153, 0.6)', strokeWidth: 4, strokeLinecap: 'round', strokeLinejoin: 'round' }, // set the style of the wall
        data: { compass: 'rgba(255, 255, 153, 1)' }
      },
      { // Info Marker
        id: 'info',
        listContent: 'Settlement Layout Continued',
        image: infoOrange,
        longitude: 1.403, latitude: -0.214,
        width: 50, height: 50,
        anchor: 'bottom center',
        tooltip: { content: 'Settlement Layout Continued', position: 'top center', trigger: 'hover' },
        content: 'Where are the entrances to the settlement?'
      }
    ],
    panoData: { poseHeading: 90 }, // change the initial direction of the panarama 
  },

  { /* node 11 */
    id: '11',
    panorama: location_11, // panerama image link
    thumbnail: location_11_thumbnail, // thumbnail image link
    name: 'Location Eleven', // set the name of the panerama in the nodeslist 
    caption: 'Location Eleven', // set the caption

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
      },
      { // Wall outline 
        id: 'wall',
        polylineRad: [[4.393, -0.12], [4.339, -0.179], [4.218, -0.209], [4.059, -0.212], [3.855, -0.208], [3.737, -0.203], [3.59, -0.208], [3.427, -0.237], [3.201, -0.294], [2.758, -0.298], [2.411, -0.254], [2.055, -0.218], [1.766, -0.178], [1.486, -0.164], [1.144, -0.139], [0.904, -0.132], [0.741, -0.137], [0.554, -0.147], [0.33, -0.155], [6.276, -0.143], [5.987, -0.137], [5.761, -0.131], [5.545, -0.111], [5.439, -0.1], [5.338, -0.079]],
        hideList: true, // remove the marker from the markers list
        scale: { zoom: [0.5, 1] }, // the wall is twice smaller on the minimum zoom level
        tooltip: { content: 'Wall Outline', position: 'top center', trigger: 'hover' },
        svgStyle: { stroke: 'rgba(255, 255, 153, 0.6)', strokeWidth: 4, strokeLinecap: 'round', strokeLinejoin: 'round' }, // set the style of the wall
        data: { compass: 'rgba(255, 255, 153, 1)' }
      },
      { // Info Marker
        id: 'info',
        listContent: 'Future Archeological Work',
        image: infoOrange,
        longitude: 0.816, latitude: -0.244,
        width: 50, height: 50,
        anchor: 'bottom center',
        tooltip: { content: 'Future Archeological Work', position: 'top center', trigger: 'hover' },
        content: 'Is there any future archeological work planned?'
      }
    ],
    panoData: { poseHeading: 90 }, // change the initial direction of the panarama 
  },

], '1');