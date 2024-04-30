import { Injectable } from '@nestjs/common';
import { AppService } from 'src/app.service'; 


@Injectable()
export class ProductsService {

    constructor(private readonly appService:AppService){}
    
    getProducts(): string {
        return this.appService.getHello() + 'cars & bids'
    }

    getAllProducts(): string [] {
        return ['cars', 'bids']
    }

    getPriceOfAllProducts():  string[]{
        return ['56€',  '1234€'];
    }

    postProducts(): string[] {
        return
    }

    postAllProducts(): string[] {
        return
    }

    postPriceOfAllProducts(): string[] {
        return
    }

    saveProduct(product: {}) {
        //save product to data base
        console.log('product saved')
        const productSaved = {
            id: '1',
            ...product
        }
        return productSaved
    }
}
