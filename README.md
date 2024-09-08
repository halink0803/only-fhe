# Only-FHE

## This repo is dedicated to the ethglobal online hackathon




**Contract**
1. *localfhenix (exposed)*:
2. *Helium testnet*: 


## Quick start

The first things you need to do are cloning this repository and installing its dependencies:

```sh
git clone https://github.com/halink0803/only-fhe.git
cd fhenix-only-fhe
pnpm install
```

Next, you need an .env file containing your mnemonics or keys. You can use .env.example that comes with a predefined mnemonic, or use your own

```sh
cp .env.example .env
```

Once the file exists, let's run a LocalFhenix instance:

```sh
pnpm localfhenix:start
```

This will start a LocalFhenix instance in a docker container. If this worked you should see a `Started LocalFhenix successfully` message in your console.

If not, please make sure you have `docker` installed and running on your machine. You can find instructions on how to install docker [here](https://docs.docker.com/get-docker/).

Now that we have a LocalFhenix instance running, we can deploy our contracts to it:

```sh
npx hardhat deploy
```


```sh
```

## Troubleshooting


## More Info

