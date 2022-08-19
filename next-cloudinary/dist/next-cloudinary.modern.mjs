import Image from 'next/image';
import { Cloudinary } from '@cloudinary/url-gen';
import { jsx } from 'react/jsx-runtime';

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const primary = {
  crop: {
    qualifier: 'c'
  },
  gravity: {
    qualifier: 'g'
  },
  height: {
    qualifier: 'h'
  },
  width: {
    qualifier: 'w'
  }
};
const position = {
  angle: {
    qualifier: 'a'
  },
  gravity: {
    qualifier: 'g'
  },
  x: {
    qualifier: 'x'
  },
  y: {
    qualifier: 'y'
  }
};
const text = {
  color: {
    qualifier: 'co',
    location: 'primary'
  },
  textDecoration: {
    qualifier: false
  },
  fontFamily: {
    qualifier: false
  },
  fontSize: {
    qualifier: false
  },
  fontWeight: {
    qualifier: false
  },
  letterSpacing: {
    qualifier: 'letter_spacing'
  }
};

const _excluded$1 = ["publicId", "type", "position", "text", "effects"];
const cld$1 = new Cloudinary({
  cloud: {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  }
});
function cloudinaryLoader(options, cldOptions) {
  const {
    src,
    width,
    format = 'auto',
    quality = 'auto'
  } = options;
  const {
    overlays = [],
    effects = [],
    removeBackground = false,
    underlays = []
  } = cldOptions;
  const cldImage = cld$1.image(src);

  if (removeBackground) {
    cldImage.effect('e_background_removal');
  } // Adding overlays and underlays allows you to compose your image
  // by using layering with overlays appearing on top of and udnerlays
  // appearing below your base image layer
  //
  // Learn more: https://cloudinary.com/documentation/layers


  const layers = [...overlays.map(overlay => _extends({}, overlay, {
    type: 'overlay'
  })), ...underlays.map(underlay => _extends({}, underlay, {
    type: 'underlay'
  }))];
  layers.forEach(_ref => {
    let {
      publicId,
      type,
      position: position$1,
      text: text$1,
      effects: layerEffects = []
    } = _ref,
        options = _objectWithoutPropertiesLoose(_ref, _excluded$1);

    const hasPublicId = typeof publicId === 'string';
    const hasText = typeof text$1 === 'object';
    const hasPosition = typeof position$1 === 'object';

    if (!hasPublicId && !hasText) {
      console.warn(`${type} is missing Public ID or Text`);
      return;
    } // Determine the qualifier for the type of layer


    let typeQualifier;

    if (type === 'overlay') {
      typeQualifier = 'l';
    } else if (type === 'underlay') {
      typeQualifier = 'u';
    } // Start to construct the transformation string using text or the public ID
    // if it's image-based


    let layerTransformation;

    if (hasText) {
      layerTransformation = `${typeQualifier}_text`;
    } else {
      layerTransformation = `${typeQualifier}_${publicId.replace(/\//g, ':')}`;
    } // Begin organizing transformations based on what it is and the location
    // it needs to be placed in the URL


    const primary$1 = [];
    const applied = []; // Gemeral options

    Object.keys(options).forEach(key => {
      if (!primary[key]) return;
      const {
        qualifier
      } = primary[key];
      primary$1.push(`${qualifier}_${options[key]}`);
    }); // Layer effects

    layerEffects.forEach(effect => {
      Object.keys(effect).forEach(key => {
        if (!primary[key]) return;
        const {
          qualifier
        } = primary[key];
        primary$1.push(`${qualifier}_${effect[key]}`);
      });
    }); // Text styling

    if (hasText) {
      const textTransformations = [];
      Object.keys(text$1).forEach(key => {
        if (!text[key]) return;
        const {
          qualifier,
          location
        } = text[key];

        if (location === 'primary') {
          primary$1.push(`${qualifier}_${text$1[key]}`);
        } else {
          textTransformations.push(text$1[key]);
        }
      });
      layerTransformation = `${layerTransformation}:${textTransformations.join('_')}:${text$1.text}`;
    } // Positioning


    if (hasPosition) {
      Object.keys(position$1).forEach(key => {
        if (!position[key]) return;
        const {
          qualifier
        } = position[key];
        applied.push(`${qualifier}_${position$1[key]}`);
      });
    } // Add all primary transformations


    layerTransformation = `${layerTransformation},${primary$1.join(',')}`; // Add all applied transformations

    layerTransformation = `${layerTransformation}/fl_layer_apply`;

    if (applied.length > 0) {
      layerTransformation = `${layerTransformation},${applied.join(',')}`;
    } // Finally add it to the image


    cldImage.addTransformation(layerTransformation);
  });
  return cldImage.resize(`c_limit,w_${width}`).format(format).delivery(`q_${quality}`).toURL();
}

const _excluded = ["overlays", "removeBackground", "underlays"];
const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  },
  url: {
    // Used to avoid issues with SSR particularly for the blurred placeholder
    analytics: false
  }
});

const CldImage = _ref => {
  let {
    overlays,
    removeBackground,
    underlays
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  const cldOptions = {
    overlays,
    removeBackground,
    underlays
  };
  const imageProps = {}; // If we see a placeholder option, configure a Cloudinary-based URL.
  // The resulting image will always be blurred per Next.js, so we're
  // limited on options for placeholders.
  // https://nextjs.org/docs/api-reference/next/image#blurdataurl

  if (props.placeholder) {
    const cldBlurredImage = cld.image(props.src).resize('c_limit,w_100').delivery('q_1').format('auto');

    if (props.placeholder === 'grayscale') {
      cldBlurredImage.effect('e_grayscale');
    }

    if (props.placeholder.includes('color:')) {
      const color = props.placeholder.split(':').splice(1).join(':');
      cldBlurredImage.effect('e_grayscale');
      cldBlurredImage.effect(`e_colorize:60,co_${color}`);
    }

    imageProps.blurDataURL = cldBlurredImage.toURL();

    if (props.placeholder !== 'blur') {
      props.placeholder = 'blur';
    }
  }

  return /*#__PURE__*/jsx(Image, _extends({}, imageProps, props, {
    loader: options => cloudinaryLoader(options, cldOptions)
  }));
};

export { CldImage, cloudinaryLoader, position, primary, text };
//# sourceMappingURL=next-cloudinary.modern.mjs.map
