const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

const mlabURI = 'mongodb://huynhduckhoan:huynhduckhoan@ds143907.mlab.com:43907/multiple-choice-online'

mongoose.connect(mlabURI);
