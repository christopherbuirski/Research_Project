var buttonId = 'overlay-button';
var mapButton = 'map';
var informationButton = 'map';

// Variable for orange info marker link
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

const viewer = new PhotoSphereViewer.Viewer({
  container: 'photosphere',
  loadingImg: 'https://photo-sphere-viewer.js.org/assets/photosphere-logo.gif',
  defaultZoomLvl: 0,
  touchmoveTwoFingers: false,
  moveSpeed: 1.3,
  zoomSpeed: 1.2,
  //mousewheelCtrlKey: false,
  autorotateSpeed: '1.5rpm',
  plugins: [
    PhotoSphereViewer.MarkersPlugin,
    [PhotoSphereViewer.CompassPlugin, {
      hotspots: [
      ],
    }],
    [PhotoSphereViewer.GalleryPlugin,
    {
      items: [],
    }],

    [PhotoSphereViewer.VirtualTourPlugin, {
      positionMode: PhotoSphereViewer.VirtualTourPlugin.MODE_GPS,
      renderMode: PhotoSphereViewer.VirtualTourPlugin.MODE_3D,
      startNodeId: '1',
    }],
  ],
  //  navbar: 'zoom move download gallery caption fullscreen',
  navbar: [
    'autorotate', 'zoom', 'move', 'caption',
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
    }, 'markersList', 'gallery', 'fullscreen'
  ],
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
    image: document.getElementById('start').innerHTML,
    dissmisable: true,
  });
}

viewer.once('ready', showOverlay);

const virtualTour = viewer.getPlugin(PhotoSphereViewer.VirtualTourPlugin);

virtualTour.setNodes([
  {
    id: '1',
    panorama: location_1,
    thumbnail: location_1_thumbnail,
    name: 'Location One',
    caption: 'Location One',
    links: [
      { nodeId: '2' },
    ],
    markers: [
      { // Info Marker
        id: 'info',
        listContent: 'Stonewall Site Information',
        image: infoOrange,
        longitude: 5.85, latitude: 0.014,
        width: 50, height: 50,
        anchor: 'bottom center',
        data: { compass: 'rgba(252, 191, 22, 1)' },
        tooltip: { content: 'Stonewall Site Information', position: 'top center', trigger: 'hover' },
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
    position: [-25.625578016173264, 26.630477320098883, 3],
  },
  {
    id: '2',
    panorama: location_2,
    thumbnail: location_2_thumbnail,
    name: 'Location Two',
    caption: 'Location Two',
    links: [
      { nodeId: '3' },
      { nodeId: '1' },
    ],
    markers: [
      { // Info Marker
        id: 'info2',
        listContent: 'Work Done on Site',
        image: infoOrange,
        longitude: 6.079, latitude: -0.018,
        width: 50, height: 50,
        anchor: 'bottom center',
        data: { compass: 'rgba(252, 191, 22, 1)' },
        tooltip: { content: 'Work Done on Site', position: 'top center', trigger: 'hover' },
        content: document.getElementById('workdone').innerHTML
      }
    ],
    position: [-25.62559512944545, 26.630524113335607, 3],
  },
  {
    id: '3',
    panorama: location_3,
    thumbnail: location_3_thumbnail,
    name: 'Location Three',
    caption: 'Location Three',
    links: [
      { nodeId: '2' },
      { nodeId: '4' },
    ],
    markers: [
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
        listContent: 'Where are we going?',
        image: infoOrange,
        longitude: 0.276, latitude: -0.122,
        width: 50, height: 50,
        anchor: 'bottom center',
        data: { compass: 'rgba(252, 191, 22, 1)' },
        tooltip: { content: 'Where are we going?', position: 'top center', trigger: 'hover' },
        content: document.getElementById('wherearewe').innerHTML
      }
    ],
    position: [-25.62559271106007, 26.630529477753637, 3],
  },

  {/*Location 4*/
    id: '4',
    panorama: location_4,
    thumbnail: location_4_thumbnail,
    name: 'Location Four',
    caption: 'Location Four',
    links: [
      { nodeId: '5' },
      { nodeId: '3' },
    ],
    markers: [
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
        listContent: 'How were each of the three clusters organised?',
        image: infoOrange,
        longitude: 0.12, latitude: -0.156,
        width: 50, height: 50,
        anchor: 'bottom center',
        data: { compass: 'rgba(252, 191, 22, 1)' },
        tooltip: { content: 'How were each of the three clusters organised?', position: 'top center', trigger: 'hover' },
        content: document.getElementById('organised').innerHTML
      }],
    position: [-25.625625016138834, 26.630637815799734, 3],
  },

  { /*Location 5*/
    id: '5',
    panorama: location_5,
    thumbnail: location_5_thumbnail,
    name: 'Location Five',
    caption: 'Location Five',
    links: [
      { nodeId: '6' },
      { nodeId: '4' },
    ],
    markers: [
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
        listContent: 'Compound Appearance',
        image: infoOrange,
        longitude: 0.566, latitude: -0.397,
        width: 50, height: 50,
        anchor: 'bottom center',
        data: { compass: 'rgba(252, 191, 22, 1)' },
        tooltip: { content: 'How did the compound look like when it was occupied?', position: 'top center', trigger: 'hover' },
        content: document.getElementById('compoundappearance').innerHTML
      }],
    //position: [-25.625625598580964, 26.630706926538945, 3],
    position: [-25.625596577960422, 26.630705585434438, 3],
  },

  { /*Location 6*/
    id: '6',
    panorama: location_6,
    thumbnail: location_6_thumbnail,
    name: 'Location Six',
    caption: 'Location Six',
    links: [
      { nodeId: '7' },
      { nodeId: '5' },
    ],
    markers: [
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
        listContent: 'Appearance of the huts',
        image: infoOrange,
        longitude: 0.276, latitude: -0.28,
        width: 50, height: 50,
        anchor: 'bottom center',
        data: { compass: 'rgba(252, 191, 22, 1)' },
        tooltip: { content: 'What did the huts look like?', position: 'top center', trigger: 'hover' },
        content: document.getElementById('hut').innerHTML
      }],
    //position: [-25.625621836281024, 26.630804142189035, 3],
    position: [-25.625600070815597, 26.630792742800722, 3],
  },

  { /*Location 7*/
    id: '7',
    panorama: location_7,
    thumbnail: location_7_thumbnail,
    name: 'Location Seven',
    caption: 'Location Seven',
    links: [
      { nodeId: '8' },
      { nodeId: '6' },
    ],
    markers: [
      { // Wall outline 
        id: 'wall',
        //polylineRad: [[2.495, -0.106], [2.563, -0.117], [2.626, -0.12], [2.688, -0.121], [2.753, -0.122], [2.836, -0.106], [2.926, -0.089], [3.031, -0.072], [3.135, -0.068], [3.231, -0.067], [3.337, -0.073], [3.435, -0.08], [3.55, -0.098], [3.673, -0.125], [3.795, -0.134], [3.905, -0.14], [4.093, -0.152], [4.249, -0.167], [4.472, -0.188], [4.692, -0.198], [4.908, -0.207], [5.125, -0.201], [5.317, -0.204], [5.549, -0.206], [5.796, -0.205], [5.958, -0.219], [6.098, -0.23], [0.022, -0.229], [0.276, -0.234], [0.525, -0.229], [0.727, -0.236], [0.902, -0.228], [1.077, -0.209], [1.196, -0.198], [1.293, -0.194], [1.402, -0.185], [1.45, -0.18]],
        polylineRad: [[3.029, -0.183], [2.93, -0.188], [2.781, -0.189], [2.673, -0.201], [2.598, -0.211], [2.388, -0.229], [2.11, -0.244], [1.745, -0.256], [1.42, -0.254], [1.273, -0.242], [0.978, -0.226], [0.556, -0.234], [0.024, -0.2], [5.927, -0.163], [5.423, -0.111], [5.207, -0.097], [4.951, -0.066], [4.764, -0.049], [4.582, -0.032], [4.485, -0.044], [4.397, -0.06], [4.304, -0.089], [4.254, -0.11], [4.206, -0.119]],
        hideList: true, // remove the marker from the markers list
        scale: { zoom: [0.5, 1] }, // the wall is twice smaller on the minimum zoom level
        tooltip: { content: 'Wall Outline', position: 'top center', trigger: 'hover' },
        svgStyle: { stroke: 'rgba(255, 255, 153, 0.6)', strokeWidth: 4, strokeLinecap: 'round', strokeLinejoin: 'round' }, // set the style of the wall
        data: { compass: 'rgba(255, 255, 153, 1)' }
      },
      { // Wall outline 
        id: 'wall2',
        polylineRad: [[3.715, -0.068], [3.811, -0.085], [3.886, -0.099], [3.965, -0.107], [4.031, -0.111], [4.1, -0.115], [4.167, -0.101]],
        hideList: true, // remove the marker from the markers list
        scale: { zoom: [0.5, 1] }, // the wall is twice smaller on the minimum zoom level
        tooltip: { content: 'Wall Outline', position: 'top center', trigger: 'hover' },
        svgStyle: { stroke: 'rgba(255, 255, 153, 0.6)', strokeWidth: 4, strokeLinecap: 'round', strokeLinejoin: 'round' }, // set the style of the wall
        data: { compass: 'rgba(255, 255, 153, 1)' }
      },
      { // Info Marker
        id: 'info',
        listContent: 'Materials & techniques for buildings a family unit',
        image: infoOrange,
        //longitude: 2.117, latitude: -0.325,
        longitude: 3.685, latitude: -0.241,
        width: 50, height: 50,
        anchor: 'bottom center',
        data: { compass: 'rgba(252, 191, 22, 1)' },
        tooltip: { content: 'What materials & techniques were used to build a family unit?', position: 'top center', trigger: 'hover' },
        content: document.getElementById('materials').innerHTML
      }],
    position: [-25.625545148313936, 26.630811488833448, 3],
    panoData: { poseHeading: 90 },
  },

  { /*Location 8*/
    id: '8',
    panorama: location_8,
    thumbnail: location_8_thumbnail,
    name: 'Location Eight',
    caption: 'Location Eight',
    links: [
      { nodeId: '9' },
      { nodeId: '7' },
    ],
    markers: [
      { // Wall outline 
        id: 'wall',
        //polylineRad: [[1.387, -0.418], [1.083, -0.455], [0.838, -0.473], [0.636, -0.481], [0.418, -0.49], [0.293, -0.489], [6.119, -0.393], [5.796, -0.283], [5.583, -0.197], [5.394, -0.157], [5.253, -0.12], [5.059, -0.086], [4.898, -0.055], [4.802, -0.047], [4.739, -0.043], [4.605, -0.038], [4.515, -0.044], [4.367, -0.046], [4.228, -0.049], [4.101, -0.055], [3.995, -0.065], [3.923, -0.069], [3.798, -0.07], [3.708, -0.059], [3.591, -0.046], [3.467, -0.045], [3.373, -0.049], [3.261, -0.071], [3.147, -0.087], [3.046, -0.101], [2.976, -0.1]],
        polylineRad: [[2.888, -0.456], [2.59, -0.455], [2.319, -0.43], [2.114, -0.432], [1.987, -0.453], [1.44, -0.351], [1.135, -0.269], [0.906, -0.205], [0.679, -0.135], [0.468, -0.082], [0.345, -0.05], [0.195, -0.036], [0.004, -0.028], [6.07, -0.032], [5.913, -0.037], [5.771, -0.039], [5.612, -0.034], [5.51, -0.019], [5.403, 0.001], [5.324, 0.006], [5.223, -0.006], [5.115, -0.022], [5.01, -0.031], [4.906, -0.039], [4.829, -0.06], [4.735, -0.088], [4.674, -0.111], [4.606, -0.129]],
        hideList: true, // remove the marker from the markers list
        scale: { zoom: [0.5, 1] }, // the wall is twice smaller on the minimum zoom level
        tooltip: { content: 'Wall Outline', position: 'top center', trigger: 'hover' },
        svgStyle: { stroke: 'rgba(255, 255, 153, 0.6)', strokeWidth: 4, strokeLinecap: 'round', strokeLinejoin: 'round' }, // set the style of the wall
        data: { compass: 'rgba(255, 255, 153, 1)' }
      },
      { // Wall outline 
        id: 'wall2',
        polylineRad: [[3.935, -0.14], [4.044, -0.148], [4.165, -0.15], [4.299, -0.139], [4.435, -0.104]],
        hideList: true, // remove the marker from the markers list
        scale: { zoom: [0.5, 1] }, // the wall is twice smaller on the minimum zoom level
        tooltip: { content: 'Wall Outline', position: 'top center', trigger: 'hover' },
        svgStyle: { stroke: 'rgba(255, 255, 153, 0.6)', strokeWidth: 4, strokeLinecap: 'round', strokeLinejoin: 'round' }, // set the style of the wall
        data: { compass: 'rgba(255, 255, 153, 1)' }
      },
      { // Info Marker
        id: 'info',
        listContent: 'Who lived here?',
        image: infoOrange,
        //longitude: 1.902, latitude: -0.153,
        longitude: 3.469, latitude: -0.016,
        width: 50, height: 50,
        anchor: 'bottom center',
        data: { compass: 'rgba(252, 191, 22, 1)' },
        tooltip: { content: 'Who were the people who lived here?', position: 'top center', trigger: 'hover' },
        content: document.getElementById('wholivedhere').innerHTML
      }
    ],
    //position: [-25.62547593699472, 26.630824025044436, 3],
    //position: [-25.625501934660537, 26.630742217669482, 3],
    position: [-25.625522490950434, 26.630736853251452, 3],
    panoData: { poseHeading: 160 },
  },

  { /*Location 9*/
    id: '9',
    panorama: location_9,
    thumbnail: location_9_thumbnail,
    name: 'Location Nine',
    caption: 'Location Nine',
    links: [
      { nodeId: '10' },
      { nodeId: '8' },
    ],
    markers: [
      { // Wall outline 
        id: 'wall',
        //polylineRad: [[1.32, -0.209], [1.392, -0.192], [1.44, -0.172], [1.471, -0.145], [1.502, -0.111], [1.505, -0.089], [1.507, -0.07], [1.493, -0.052], [1.472, -0.043], [1.432, -0.033], [1.378, -0.027], [1.333, -0.028], [1.267, -0.027], [1.179, -0.031], [1.073, -0.043], [1.001, -0.045], [0.937, -0.044], [0.875, -0.042], [0.836, -0.039], [0.803, -0.035], [0.777, -0.026], [0.744, -0.019], [0.706, -0.019], [0.666, -0.015], [0.626, -0.017], [0.572, -0.018], [0.537, -0.023], [0.501, -0.029], [0.486, -0.038], [0.479, -0.049], [0.474, -0.06]],
        polylineRad: [[6.113, -0.22], [6.16, -0.204], [6.208, -0.163], [6.227, -0.121], [6.24, -0.085], [6.223, -0.064], [6.198, -0.051], [6.158, -0.036], [6.113, -0.032], [6.044, -0.025], [5.962, -0.021], [5.894, -0.02], [5.822, -0.02], [5.752, -0.024], [5.696, -0.024], [5.651, -0.021], [5.601, -0.02], [5.559, -0.012], [5.523, -0.006], [5.49, -0.006], [5.452, -0.006], [5.407, -0.008], [5.371, -0.013], [5.341, -0.022], [5.311, -0.034], [5.29, -0.048], [5.265, -0.06], [5.251, -0.071], [5.238, -0.084]],
        hideList: true, // remove the marker from the markers list
        scale: { zoom: [0.5, 1] }, // the wall is twice smaller on the minimum zoom level
        tooltip: { content: 'Wall Outline', position: 'top center', trigger: 'hover' },
        svgStyle: { stroke: 'rgba(255, 255, 153, 0.6)', strokeWidth: 4, strokeLinecap: 'round', strokeLinejoin: 'round' }, // set the style of the wall
        data: { compass: 'rgba(255, 255, 153, 1)' }
      },
      { // Wall outline
        id: 'walls',
        //polylineRad: [[0.102, -0.081], [0.181, -0.074], [0.234, -0.069], [0.283, -0.068], [0.332, -0.06], [0.356, -0.052], [0.369, -0.039], [0.376, -0.028]],
        polylineRad: [[4.849, -0.109], [4.947, -0.104], [5.035, -0.092], [5.097, -0.082], [5.137, -0.073], [5.166, -0.058], [5.177, -0.043]],
        hideList: true, // remove the marker from the markers list
        scale: { zoom: [0.5, 1] }, // the wall is twice smaller on the minimum zoom level
        tooltip: { content: 'Wall Outline', position: 'top center', trigger: 'hover' },
        svgStyle: { stroke: 'rgba(255, 255, 153, 0.6)', strokeWidth: 4, strokeLinecap: 'round', strokeLinejoin: 'round' }, // set the style of the wall
        data: { compass: 'rgba(255, 255, 153, 1)' }
      },
      { // Wall outline
        id: 'wall2',
        //polylineRad: [[2.318, -0.106], [2.27, -0.09], [2.225, -0.076], [2.186, -0.059], [2.141, -0.048], [2.122, -0.039], [2.085, -0.031], [2.056, -0.028], [2.007, -0.026], [1.952, -0.027], [1.895, -0.027], [1.856, -0.025], [1.799, -0.028], [1.753, -0.029], [1.701, -0.034], [1.659, -0.041], [1.596, -0.051], [1.571, -0.057], [1.531, -0.067], [1.515, -0.076], [1.509, -0.085]],
        polylineRad: [[0.76, -0.101], [0.706, -0.083], [0.655, -0.069], [0.617, -0.053], [0.565, -0.039], [0.527, -0.032], [0.484, -0.025], [0.428, -0.023], [0.383, -0.023], [0.321, -0.021], [0.247, -0.023], [0.186, -0.023], [0.145, -0.025], [0.105, -0.028], [0.059, -0.037], [0.023, -0.048], [6.278, -0.06], [6.239, -0.078]],
        hideList: true, // remove the marker from the markers list
        scale: { zoom: [0.5, 1] }, // the wall is twice smaller on the minimum zoom level
        tooltip: { content: 'Wall Outline', position: 'top center', trigger: 'hover' },
        svgStyle: { stroke: 'rgba(255, 255, 153, 0.6)', strokeWidth: 4, strokeLinecap: 'round', strokeLinejoin: 'round' }, // set the style of the wall
        data: { compass: 'rgba(255, 255, 153, 1)' }
      },
      { // Info Marker
        id: 'info',
        listContent: 'Stonewall Construction',
        image: infoOrange,
        //longitude: 1.301, latitude: -0.437,
        //longitude: 6.045, latitude: -0.346,
        longitude: 6.067, latitude: 0.104,
        width: 50, height: 50,
        anchor: 'bottom center',
        data: { compass: 'rgba(252, 191, 22, 1)' },
        tooltip: { content: 'How were the stonewalls constructed?', position: 'top center', trigger: 'hover' },
        content: document.getElementById('wallconstruction').innerHTML
      }
    ],
    //position: [-25.62547593699472, 26.630824025044436, 3],

    //position: [-25.625380584530987, 26.630791313405037, 3],
    position: [-25.625491225809068, 26.630651838536263, 3],
    //panoData: { poseHeading: 150 },
  },

  { /*Location 10*/
    id: '10',
    panorama: location_10,
    thumbnail: location_10_thumbnail,
    name: 'Location Ten',
    caption: 'Location Ten',
    links: [
      { nodeId: '11' },
      { nodeId: '9' },
    ],
    markers: [
      { // Wall outline 
        id: 'wall',
        polylineRad: [[1.873, -0.325], [1.653, -0.356], [1.405, -0.343], [1.142, -0.273], [0.922, -0.22], [0.751, -0.161], [0.621, -0.107], [0.527, -0.074], [0.441, -0.053], [0.348, -0.052], [0.217, -0.041], [0.107, -0.039], [6.255, -0.032], [6.124, -0.029], [6.039, -0.036], [5.971, -0.043], [5.868, -0.06], [5.78, -0.082], [5.694, -0.113], [5.544, -0.152], [5.339, -0.212], [5.05, -0.258], [4.822, -0.278], [4.551, -0.262], [4.33, -0.259]],
        hideList: true, // remove the marker from the markers list
        scale: { zoom: [0.5, 1] }, // the wall is twice smaller on the minimum zoom level
        tooltip: { content: 'Wall Outline', position: 'top center', trigger: 'hover' },
        svgStyle: { stroke: 'rgba(255, 255, 153, 0.6)', strokeWidth: 4, strokeLinecap: 'round', strokeLinejoin: 'round' }, // set the style of the wall
        data: { compass: 'rgba(255, 255, 153, 1)' }
      },
      { // Wall outline
        id: 'walls',
        polylineRad: [[5.218, -0.226], [5.401, -0.155], [5.469, -0.116], [5.533, -0.081], [5.546, -0.055], [5.53, -0.037], [5.506, -0.027], [5.476, -0.023], [5.429, -0.022], [5.36, -0.028], [5.308, -0.03], [5.24, -0.033], [5.183, -0.03], [5.123, -0.03], [5.061, -0.021], [5.014, -0.009], [4.964, -0.001], [4.92, -0.001], [4.875, -0.001], [4.836, -0.008], [4.792, -0.017], [4.751, -0.02], [4.704, -0.023], [4.665, -0.032], [4.645, -0.045], [4.617, -0.052]],
        hideList: true, // remove the marker from the markers list
        scale: { zoom: [0.5, 1] }, // the wall is twice smaller on the minimum zoom level
        tooltip: { content: 'Wall Outline', position: 'top center', trigger: 'hover' },
        svgStyle: { stroke: 'rgba(255, 255, 153, 0.6)', strokeWidth: 4, strokeLinecap: 'round', strokeLinejoin: 'round' }, // set the style of the wall
        data: { compass: 'rgba(255, 255, 153, 1)' }
      },
      { // Info Marker
        id: 'info',
        listContent: 'Settlement purpose',
        image: infoOrange,
        //longitude: 1.403, latitude: -0.214,
        longitude: 6.008, latitude: -0.17,
        width: 50, height: 50,
        anchor: 'bottom center',
        data: { compass: 'rgba(252, 191, 22, 1)' },
        tooltip: { content: 'What was the purpose of the settlement?', position: 'top center', trigger: 'hover' },
        content: document.getElementById('purpose').innerHTML
      }
    ],
    //position: [-25.62547593699472, 26.630824025044436, 3],
    //position: [-25.625380584530987, 26.630791313405037, 3],
    //position: [-25.625380584530987, 26.630791313405037, 3],
    position: [-25.62531975942269, 26.63086145882607, 3],
    //panoData: { poseHeading: 90 },
  },

  {/*Location 11*/
    id: '11',
    panorama: location_11,
    thumbnail: location_11_thumbnail,
    name: 'Location Eleven',
    caption: 'Location Eleven',
    links: [
      { nodeId: '10' },
    ],
    markers: [
      { // Wall outline 
        id: 'wall',
        //polylineRad: [[4.393, -0.12], [4.339, -0.179], [4.218, -0.209], [4.059, -0.212], [3.855, -0.208], [3.737, -0.203], [3.59, -0.208], [3.427, -0.237], [3.201, -0.294], [2.758, -0.298], [2.411, -0.254], [2.055, -0.218], [1.766, -0.178], [1.486, -0.164], [1.144, -0.139], [0.904, -0.132], [0.741, -0.137], [0.554, -0.147], [0.33, -0.155], [6.276, -0.143], [5.987, -0.137], [5.761, -0.131], [5.545, -0.111], [5.439, -0.1], [5.338, -0.079]],
        polylineRad: [[2.747, -0.045], [2.729, -0.082], [2.697, -0.106], [2.643, -0.155], [2.566, -0.186], [2.495, -0.198], [2.352, -0.219], [2.116, -0.251], [1.862, -0.309], [1.486, -0.368], [1.204, -0.38], [0.664, -0.318], [0.464, -0.28], [0.149, -0.22], [6.199, -0.188], [6.026, -0.172], [5.814, -0.154], [5.627, -0.139], [5.338, -0.134], [5.05, -0.146], [4.804, -0.155], [4.61, -0.155], [4.324, -0.143], [4.115, -0.132], [3.905, -0.11], [3.74, -0.093], [3.563, -0.069]],
        hideList: true, // remove the marker from the markers list
        scale: { zoom: [0.5, 1] }, // the wall is twice smaller on the minimum zoom level
        tooltip: { content: 'Wall Outline', position: 'top center', trigger: 'hover' },
        svgStyle: { stroke: 'rgba(255, 255, 153, 0.6)', strokeWidth: 4, strokeLinecap: 'round', strokeLinejoin: 'round' }, // set the style of the wall
        data: { compass: 'rgba(255, 255, 153, 1)' }
      },
      { // Info Marker
        id: 'info',
        listContent: 'Settlement activities',
        image: infoOrange,
        //longitude: 0.897, latitude: -0.137,
        longitude: 5.863, latitude: -0.32,
        width: 50, height: 50,
        anchor: 'bottom center',
        data: { compass: 'rgba(252, 191, 22, 1)' },
        tooltip: { content: 'Where did settlement activities happen?', position: 'top center', trigger: 'hover' },
        content: document.getElementById('activities').innerHTML
      }
    ],
    position: [-25.625313491817554, 26.63097271221637, 3],
    //panoData: { poseHeading: 90 },
  }
],);