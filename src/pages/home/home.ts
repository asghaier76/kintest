import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';


import { 
	Payment,
	Keypair, 
	KinWallet, 
	KinNetwork, 
	createWallet } from "@kinecosystem/kin.js";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  keys: any = {};
  wallet: KinWallet;
  account: any = {};
  loader1: any;

  
  constructor(
              public navCtrl: NavController, 
              public loading: LoadingController,
            ) {

  }

  createWallet() {
    this.kinWallet();
  }

  async kinWallet() {
    this.keys = Keypair.random();
    console.log(this.keys.publicKey());
    console.log(this.keys.secret());
    
    this.account.pubkey = this.keys.publicKey();
    // this.buildWallet();
  }

  // async buildWallet() {
  //   //const network = KinNetwork.Testnet;
  //   const network = KinNetwork.from(
  //     "Kin Production Network ; March 2019",
  //     "https://horizon.kinfederation.com");
  //   // const network = KinNetwork.from(
  //   //   "Kin Production Network ; March 2019",
  //   //   "GBC3SG6NGTSZ2OMH3FFGB7UVRQWILW367U4GSOOF4TFSZONV42UJXUH7",
  //   //   "https://horizon-playground.kininfrastructure.com");
  //   this.wallet = await createWallet(network, this.keys);
  //   console.log(this.wallet);
  //   //this.wallet.trustKin();

  // }

}
