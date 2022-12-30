import { Inject, Injectable } from "@angular/core";

import { ICovid19TrackerEventListener } from "../interface";
import { Covid19TrackerDelegateToken } from "../token";

@Injectable({
    providedIn: "root"
})
export class Covid19TrackerDelegateRegistryService {

    private delegateId: number = 0;

    constructor(
        @Inject(Covid19TrackerDelegateToken) private readonly delegates: Map<number, ICovid19TrackerEventListener>
    ) { }

    public subscribeDelegate(delegate: ICovid19TrackerEventListener): number {
        this.delegateId++;

        this.delegates.set(this.delegateId, delegate);

        return this.delegateId;
    }

    public unsubscribeDelegate(delegateId: number): void {
        if (this.delegates.has(delegateId) === false) {
            throw new Error(`'${delegateId}' delegateId not found in the dictionary.`);
        }

        this.delegates.delete(delegateId);
    }
}
