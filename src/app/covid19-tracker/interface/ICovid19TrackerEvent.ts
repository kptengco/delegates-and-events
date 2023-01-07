import { ICovid19TrackerDelegateEvent } from "./ICovid19TrackerDelegateEvent";

export interface ICovid19TrackerEvent {
    registerDelegate(delegate: ICovid19TrackerDelegateEvent): number;
    unregisterDelegate(delegateId: number): void;
}
