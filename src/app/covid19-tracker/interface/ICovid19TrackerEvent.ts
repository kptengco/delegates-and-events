import { ICovid19TrackerDelegateEvent } from "./ICovid19TrackerEventListener";

export interface ICovid19TrackerEvent {
    subscribeDelegate(delegate: ICovid19TrackerDelegateEvent): number;
    unsubscribeDelegate(delegateId: number): void;
}
