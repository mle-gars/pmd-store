import { ProductsService } from './products.service';
import { request } from 'http';
import { Response } from 'express';
import { Get, Query, Header, Controller, Post, Body, Res, Req, HttpStatus, Param, Logger, UseInterceptors, UploadedFile } from '@nestjs/common';

@Controller('products')
export class ProductsController {

    constructor(private readonly productService: ProductsService){}
    
    @Get('/name/:name')
    getProductById( @Param ('name') pName:string ): string {
        return 'Hello' + " " + pName;
    }

    // @Get()
    // getProducts(): string {
    //     return  this.productService.getProducts();
    // }

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

    @Post()
    getProducts(@Res() response:Response, @Body() body: []): Response {
        console.log(body)
        if ( body['pName'] && body['pType']) {
            const productSaved= this.productService.saveProduct(body)
            return response.status(HttpStatus.OK).send(JSON.stringify(productSaved))
        } else {
            response.status(HttpStatus.BAD_REQUEST).send("This is a Bad request");
        }
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
