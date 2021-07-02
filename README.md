A web-based Elite Dangerous external HUD for touch screens.

Will work on any device, but screen resolution must be greater than 1920x1080 and a 10" (minimum) screen is recommended.
Most phones are NOT eligible, tablets, convertible laptops will be a better experience. If this stuff gets more attention, I will add support for smaller screens.

## Requirements

- node js
- yarn
- serve

## Installation

Clone and install on the same host which runs the elite-hud-server.
After installing the prerequisites, run these commands from the project root:

`
yarn install
yarn build
serve -s build
`

On your touch screen device, navigate to the IP:port of your host PC. The `serve` command will print out the IP:port to the command line.