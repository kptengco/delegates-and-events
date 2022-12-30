import { InjectionToken } from "@angular/core";

import { ICovid19TrackerEventListener } from "../interface";

export const Covid19TrackerDelegateToken = new InjectionToken<Map<number, ICovid19TrackerEventListener>>("Dictionary of delegates");
