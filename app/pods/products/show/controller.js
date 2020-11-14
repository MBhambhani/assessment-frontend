import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  actions: {
    click: function(button){
      console.log(`The ${ button } button was clicked!`);
    }
  },
  publisher: alias('model.publisher'),
  product: alias('model.product'),
  productData: alias('product.data'),
});
