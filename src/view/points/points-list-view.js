import AbstractView from '../../framework/view/abstract-view';

const createPointsListTemplate = () =>
  (
    `<ul class="trip-events__list">
    </ul>`
  );


export default class PointsListView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return createPointsListTemplate();
  }
}
