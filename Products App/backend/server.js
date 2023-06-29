const express = require('express');
const mongoose = require('mongoose');
const cors= require('cors');
const dotenv = require('dotenv');

const PORT = process.env.PORT || 5000

const app = express();