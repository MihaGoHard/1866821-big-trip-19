import TripInfoView from '../view/trip-info-view.js';
import { render, remove} from '../framework/render.js';
import { RenderPosition } from '../const/view.js';
import { TripInfoModel } from '../model/trip-info-model.js';

export default class TripInfoPresenter {
  #model = null;
  #component = null;
  #parentContainer = null;
  #destinationsModel = null;
  #offersModel = null;
  #pointsModel = null;

  constructor({parentContainer, pointsModel, destinationsModel, offersModel}) {
    this.#parentContainer = parentContainer;
    this.#pointsModel = pointsModel;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
    this.#pointsModel.addObserver(this.#handleModelEvent);
  }

  init() {
    if (this.#pointsModel.points.length !== 0) {
      this.#model = new TripInfoModel({
        pointsModel: this.#pointsModel,
        destinations: this.#destinationsModel.data,
        offers: this.#offersModel.data
      });
      this.#render();
    }
  }

  #render() {
    this.#component = new TripInfoView(this.#model.data);
    render(this.#component, this.#parentContainer, RenderPosition.AFTERBEGIN);
  }

  #handleModelEvent = () => {
    this.clear();
    if (this.#pointsModel.points.length !== 0) {
      this.init();
    }
  };

  clear() {
    remove(this.#component);
  }
}
