#!/usr/bin/env node
/* eslint-disable no-console */

// Bumps the package version, then reinstalls dependencies (to sync
// package-lock.json) and rebuilds the browser bundle.
//
// Usage: npm run bump -- <major|minor|patch>
//    or: npm run bump:major | bump:minor | bump:patch

const { execSync } = require( "child_process" );
const path = require( "path" );

const RELEASE_TYPES = ["major", "minor", "patch"];
const releaseType = process.argv[2];

if ( !RELEASE_TYPES.includes( releaseType ) ) {
  console.error( `Usage: npm run bump -- <${RELEASE_TYPES.join( "|" )}>` );
  process.exit( 1 );
}

const run = command => {
  console.log( `\n> ${command}` );
  execSync( command, { stdio: "inherit", cwd: path.resolve( __dirname, ".." ) } );
};

run( `npm version ${releaseType} --no-git-tag-version` );
run( "npm install" );
run( "npm run webpack" );

const { version } = require( "../package.json" );

console.log( `\nVersion bumped to ${version}` );
