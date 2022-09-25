"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "src/blendMode.js"));
const baseUri = "ipfs://LinkIsRepleacedWhenUploadingWithTurtleMoonTools";

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 5000,
    layersOrder: [
      { name: "Background" },
      { name: "NZ" },
      { name: "Feet" },
      { name: "Body" },
      { name: "Head" },
      { name: "Addon" },
    
    ],
  },
];

// UPDATE THIS TO: The creator of this collection
const creator = "Pelican";

// UPDATE THIS TO: A category that makes sense for your art. Digital Art, Collectible, Art, Document, Music, Photo, Other
const category = "Digital 3D Art";

// UPDATE THIS TO: The maximum number of mints of this collection
const maxSupply = '5,000'

// UPDATE THIS DESCRIPTION. Your own description would be best :)
const description = `${creator} are a collection of ${maxSupply} randomly 3D generated NFTs that exist on the Hedera network.`;

const shuffleLayerConfigurations = false;

// If true, data/addedSequentialData will be used for the name of the NFT in the metadata
// If wanted elsewhere, move { useAdditionalData ? addedData[_edition -1] : '' } into the attribute you want and update name attribute
const useAdditionalData = false;

const debugLogs = true;

const format = {
  width: 1080,
  height: 1080,
};

const background = {
  generate: true,
  brightness: "100%",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.width / format.height,
  imageName: "preview.png",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  category,
  creator,
  maxSupply,
  useAdditionalData,
};
