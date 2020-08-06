import { Component, OnInit } from '@angular/core';
import { CurrenciesService } from '../../services/currencies.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.scss']
})
export class CurrenciesComponent implements OnInit {
  currencies = [];
  // Crypto names 
  bitcoin: string = 'Bitcoin';
  dash: string = 'Dash';
  ethereum: string = 'Ethereum';

  // Carousel Options
  marketOptions: OwlOptions = {
    loop: true,
    items: 3,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    dots: false,
    center: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
  }

  constructor(public currenciesService: CurrenciesService) {}

  ngOnInit(): void {
    this.getCurrency();
  }

  getCurrency() {
    this.currenciesService.getCurrencies()
    .subscribe((resp: any) => {
      // console.log(resp);
      for(let i = 0; i < resp.length; i++) {
        if(resp[i].symbol === 'BTCUSDT') {
          resp[i].cryptoName = this.bitcoin;
          resp[i].askPrice = parseInt(resp[i].askPrice).toFixed(2);
          resp[i].priceChangePercent = parseInt(resp[i].priceChangePercent).toFixed(2);
          this.currencies.push(resp[i]);
        } else if (resp[i].symbol === 'ETHUSDT') {
            resp[i].cryptoName = this.ethereum;
            resp[i].askPrice = parseInt(resp[i].askPrice).toFixed(2);
            resp[i].priceChangePercent = parseInt(resp[i].priceChangePercent).toFixed(2);
            this.currencies.push(resp[i]);
        } else if (resp[i].symbol === 'DASHUSDT') {
            resp[i].cryptoName = this.dash;
            resp[i].askPrice = parseInt(resp[i].askPrice).toFixed(2);
            resp[i].priceChangePercent = parseInt(resp[i].priceChangePercent).toFixed(2);
            this.currencies.push(resp[i]);
        }
       }

      console.log(this.currencies);
    });
  }

}
