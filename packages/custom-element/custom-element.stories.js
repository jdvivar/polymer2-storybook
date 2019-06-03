import { storiesOf } from '@storybook/polymer';
import './custom-element.html'

storiesOf('Custom element', module)
  .add('normal', () => '<custom-element></custom-element>')