import Vue from 'vue';
import {
  Row, Col, Button, Carousel, CarouselItem, Image, Form, FormItem, Input, Message,Notification
} from 'element-ui';

Vue.use(Row)
  .use(Col)
  .use(Button)
  .use(Carousel)
  .use(CarouselItem)
  .use(Image)
  .use(Form)
  .use(FormItem)
  .use(Input)

Vue.prototype.$message = Message;
Vue.prototype.$notify = Notification;