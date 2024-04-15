import { Controller, Get, Post, Param} from '@nestjs/common';
import { ProductsService } from './products.service';


@Controller('products')
export class ProductsController {

    constructor(private readonly productService: ProductsService){}
    
    @Get('/name/:name')
    getProductById( @Param ('name') pName:string ): string {
        return 'Hello' + " " + pName;
    }

    @Get()
    getProducts(): string {
        return  this.productService.getProducts();
    }

    @Get('/allProducts')
    getAllProducts() : string[] {
        return this.productService.getAllProducts();
    }

    @Get('/allPrices')
    getPriceOfAllProducts() : string []{
        return this.productService.getPriceOfAllProducts();
    }

    @Post()
    postProducts(): string[] {
        return  this.productService.postProducts();
    }

    @Post('/allProducts')
    postAllProducts(): string[] {
        return  this.productService.postProducts();
    }

    @Post('/allPrices')
    postPriceOfAllProducts(): string[] {
        return  this.productService.postPriceOfAllProducts();
    }
}
