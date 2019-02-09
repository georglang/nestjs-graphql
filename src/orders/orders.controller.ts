import { Controller, Get, Post, createRouteParamDecorator, Put } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get()
  getAllOrders() {
    // find orders
  }

  @Get()
  getOrderById() {
    // find order by id
  }

  @Get()
  getRecordsByOrderId() {
    // get all records of an order
  }

  @Post()
  createOrder() {
    // create an order
  }

  @Post()
  deleteOrder() {
    // delete order
  }

  @Put(':id')
  updateOrder() {
    // update order
  }
}
