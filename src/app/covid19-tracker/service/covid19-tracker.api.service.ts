import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";

import { Covid19Statistic, Covid19StatisticResponse } from "../model";

/**
 * @description consider this for internal use only by this module
 * @module Covid19Module
 * @class Covid19TrackerApiService
 */
@Injectable()
export class Covid19TrackerApiService {

    
    private get response(): Covid19StatisticResponse {
        return {
            "get": "statistics",
            "parameters": [],
            "errors": [],
            "results": 238,
            "response": [
                {
                    "continent": "North-America",
                    "country": "Cura&ccedil;ao",
                    "population": 165529,
                    "cases": {
                        "new": null,
                        "active": 971,
                        "critical": 3,
                        "recovered": 44720,
                        "1M_pop": "277812",
                        "total": 45986
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "1782",
                        "total": 295
                    },
                    "tests": {
                        "1M_pop": "3000640",
                        "total": 496693
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "Europe",
                    "country": "Isle-of-Man",
                    "population": 85732,
                    "cases": {
                        "new": null,
                        "active": null,
                        "critical": null,
                        "recovered": null,
                        "1M_pop": "443335",
                        "total": 38008
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "1353",
                        "total": 116
                    },
                    "tests": {
                        "1M_pop": "1758422",
                        "total": 150753
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "Lesotho",
                    "population": 2175699,
                    "cases": {
                        "new": null,
                        "active": 8087,
                        "critical": null,
                        "recovered": 25980,
                        "1M_pop": "15990",
                        "total": 34790
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "332",
                        "total": 723
                    },
                    "tests": {
                        "1M_pop": "198199",
                        "total": 431221
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "Europe",
                    "country": "Faeroe-Islands",
                    "population": 49233,
                    "cases": {
                        "new": null,
                        "active": null,
                        "critical": 5,
                        "recovered": null,
                        "1M_pop": "703959",
                        "total": 34658
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "569",
                        "total": 28
                    },
                    "tests": {
                        "1M_pop": "15802409",
                        "total": 778000
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "North-America",
                    "country": "Cayman-Islands",
                    "population": 67277,
                    "cases": {
                        "new": null,
                        "active": 22882,
                        "critical": 1,
                        "recovered": 8553,
                        "1M_pop": "467797",
                        "total": 31472
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "550",
                        "total": 37
                    },
                    "tests": {
                        "1M_pop": "3311280",
                        "total": 222773
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "Congo",
                    "population": 5797805,
                    "cases": {
                        "new": null,
                        "active": 983,
                        "critical": null,
                        "recovered": 24006,
                        "1M_pop": "4377",
                        "total": 25375
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "67",
                        "total": 386
                    },
                    "tests": {
                        "1M_pop": "59991",
                        "total": 347815
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "Oceania",
                    "country": "Solomon-Islands",
                    "population": 721159,
                    "cases": {
                        "new": null,
                        "active": null,
                        "critical": 1,
                        "recovered": null,
                        "1M_pop": "34077",
                        "total": 24575
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "212",
                        "total": 153
                    },
                    "tests": {
                        "1M_pop": null,
                        "total": null
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "North-America",
                    "country": "Nicaragua",
                    "population": 6779100,
                    "cases": {
                        "new": null,
                        "active": 14041,
                        "critical": null,
                        "recovered": 4225,
                        "1M_pop": "2728",
                        "total": 18491
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "33",
                        "total": 225
                    },
                    "tests": {
                        "1M_pop": null,
                        "total": null
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "South-Sudan",
                    "population": 11618511,
                    "cases": {
                        "new": null,
                        "active": 115,
                        "critical": 1,
                        "recovered": 18115,
                        "1M_pop": "1581",
                        "total": 18368
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "12",
                        "total": 138
                    },
                    "tests": {
                        "1M_pop": "35313",
                        "total": 410280
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "Asia",
                    "country": "Tajikistan",
                    "population": 9957464,
                    "cases": {
                        "new": null,
                        "active": 397,
                        "critical": null,
                        "recovered": 17264,
                        "1M_pop": "1786",
                        "total": 17786
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "13",
                        "total": 125
                    },
                    "tests": {
                        "1M_pop": null,
                        "total": null
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "North-America",
                    "country": "Dominica",
                    "population": 72344,
                    "cases": {
                        "new": null,
                        "active": 13,
                        "critical": null,
                        "recovered": 15673,
                        "1M_pop": "217848",
                        "total": 15760
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "1023",
                        "total": 74
                    },
                    "tests": {
                        "1M_pop": "3170187",
                        "total": 229344
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "Djibouti",
                    "population": 1016097,
                    "cases": {
                        "new": null,
                        "active": 74,
                        "critical": null,
                        "recovered": 15427,
                        "1M_pop": "15441",
                        "total": 15690
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "186",
                        "total": 189
                    },
                    "tests": {
                        "1M_pop": "301094",
                        "total": 305941
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "CAR",
                    "population": 5016678,
                    "cases": {
                        "new": null,
                        "active": 55,
                        "critical": 2,
                        "recovered": 15200,
                        "1M_pop": "3063",
                        "total": 15368
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "23",
                        "total": 113
                    },
                    "tests": {
                        "1M_pop": "16205",
                        "total": 81294
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "North-America",
                    "country": "Greenland",
                    "population": 56973,
                    "cases": {
                        "new": null,
                        "active": 9189,
                        "critical": 4,
                        "recovered": 2761,
                        "1M_pop": "210117",
                        "total": 11971
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "369",
                        "total": 21
                    },
                    "tests": {
                        "1M_pop": "2894810",
                        "total": 164926
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "Asia",
                    "country": "Yemen",
                    "population": 31154867,
                    "cases": {
                        "new": null,
                        "active": 662,
                        "critical": 23,
                        "recovered": 9124,
                        "1M_pop": "383",
                        "total": 11945
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "69",
                        "total": 2159
                    },
                    "tests": {
                        "1M_pop": "10579",
                        "total": 329592
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "Eritrea",
                    "population": 3662244,
                    "cases": {
                        "new": null,
                        "active": 0,
                        "critical": null,
                        "recovered": 10086,
                        "1M_pop": "2782",
                        "total": 10189
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "28",
                        "total": 103
                    },
                    "tests": {
                        "1M_pop": "6470",
                        "total": 23693
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "Niger",
                    "population": 26083660,
                    "cases": {
                        "new": null,
                        "active": 729,
                        "critical": 1,
                        "recovered": 8890,
                        "1M_pop": "381",
                        "total": 9931
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "12",
                        "total": 312
                    },
                    "tests": {
                        "1M_pop": "9759",
                        "total": 254538
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "North-America",
                    "country": "Antigua-and-Barbuda",
                    "population": 99509,
                    "cases": {
                        "new": null,
                        "active": 6,
                        "critical": 1,
                        "recovered": 8954,
                        "1M_pop": "91509",
                        "total": 9106
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "1467",
                        "total": 146
                    },
                    "tests": {
                        "1M_pop": "189943",
                        "total": 18901
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "North-America",
                    "country": "British-Virgin-Islands",
                    "population": 30596,
                    "cases": {
                        "new": null,
                        "active": null,
                        "critical": null,
                        "recovered": null,
                        "1M_pop": "238757",
                        "total": 7305
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "2092",
                        "total": 64
                    },
                    "tests": {
                        "1M_pop": "3508269",
                        "total": 107339
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "North-America",
                    "country": "Anguilla",
                    "population": 15230,
                    "cases": {
                        "new": null,
                        "active": 13,
                        "critical": 4,
                        "recovered": 3879,
                        "1M_pop": "256336",
                        "total": 3904
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "788",
                        "total": 12
                    },
                    "tests": {
                        "1M_pop": "3373736",
                        "total": 51382
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "North-America",
                    "country": "Saint-Pierre-Miquelon",
                    "population": 5759,
                    "cases": {
                        "new": null,
                        "active": 1001,
                        "critical": 1,
                        "recovered": 2449,
                        "1M_pop": "599410",
                        "total": 3452
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "347",
                        "total": 2
                    },
                    "tests": {
                        "1M_pop": "4410488",
                        "total": 25400
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "Saint-Helena",
                    "population": 6115,
                    "cases": {
                        "new": null,
                        "active": 2164,
                        "critical": null,
                        "recovered": 2,
                        "1M_pop": "354211",
                        "total": 2166
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": null,
                        "total": null
                    },
                    "tests": {
                        "1M_pop": null,
                        "total": null
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "South-America",
                    "country": "Falkland-Islands",
                    "population": 3539,
                    "cases": {
                        "new": null,
                        "active": 0,
                        "critical": null,
                        "recovered": 1930,
                        "1M_pop": "545352",
                        "total": 1930
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": null,
                        "total": null
                    },
                    "tests": {
                        "1M_pop": "2439107",
                        "total": 8632
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "North-America",
                    "country": "Montserrat",
                    "population": 4965,
                    "cases": {
                        "new": null,
                        "active": 19,
                        "critical": null,
                        "recovered": 1376,
                        "1M_pop": "282578",
                        "total": 1403
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "1611",
                        "total": 8
                    },
                    "tests": {
                        "1M_pop": "3577442",
                        "total": 17762
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": null,
                    "country": "Diamond-Princess",
                    "population": null,
                    "cases": {
                        "new": null,
                        "active": 0,
                        "critical": null,
                        "recovered": 699,
                        "1M_pop": null,
                        "total": 712
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": null,
                        "total": 13
                    },
                    "tests": {
                        "1M_pop": null,
                        "total": null
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "Europe",
                    "country": "Vatican-City",
                    "population": 799,
                    "cases": {
                        "new": null,
                        "active": 0,
                        "critical": null,
                        "recovered": 29,
                        "1M_pop": "36295",
                        "total": 29
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": null,
                        "total": null
                    },
                    "tests": {
                        "1M_pop": null,
                        "total": null
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "Western-Sahara",
                    "population": 626161,
                    "cases": {
                        "new": null,
                        "active": 0,
                        "critical": null,
                        "recovered": 9,
                        "1M_pop": "16",
                        "total": 10
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "2",
                        "total": 1
                    },
                    "tests": {
                        "1M_pop": null,
                        "total": null
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": null,
                    "country": "MS-Zaandam",
                    "population": null,
                    "cases": {
                        "new": null,
                        "active": 0,
                        "critical": null,
                        "recovered": 7,
                        "1M_pop": null,
                        "total": 9
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": null,
                        "total": 2
                    },
                    "tests": {
                        "1M_pop": null,
                        "total": null
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "Oceania",
                    "country": "Tokelau",
                    "population": 1378,
                    "cases": {
                        "new": null,
                        "active": 5,
                        "critical": null,
                        "recovered": null,
                        "1M_pop": "3628",
                        "total": 5
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": null,
                        "total": null
                    },
                    "tests": {
                        "1M_pop": null,
                        "total": null
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "Asia",
                    "country": "China",
                    "population": 1448471400,
                    "cases": {
                        "new": null,
                        "active": 118977,
                        "critical": null,
                        "recovered": 379053,
                        "1M_pop": "347",
                        "total": 503302
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "4",
                        "total": 5272
                    },
                    "tests": {
                        "1M_pop": "110461",
                        "total": 160000000
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "Burkina-Faso",
                    "population": 22102838,
                    "cases": {
                        "new": null,
                        "active": 64,
                        "critical": null,
                        "recovered": 21596,
                        "1M_pop": "998",
                        "total": 22056
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "18",
                        "total": 396
                    },
                    "tests": {
                        "1M_pop": "11265",
                        "total": 248995
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "Equatorial-Guinea",
                    "population": 1496662,
                    "cases": {
                        "new": "+7",
                        "active": 139,
                        "critical": 5,
                        "recovered": 16907,
                        "1M_pop": "11512",
                        "total": 17229
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "122",
                        "total": 183
                    },
                    "tests": {
                        "1M_pop": "244342",
                        "total": 365697
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "Liberia",
                    "population": 5305117,
                    "cases": {
                        "new": null,
                        "active": 12,
                        "critical": 2,
                        "recovered": 7783,
                        "1M_pop": "1525",
                        "total": 8090
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "56",
                        "total": 295
                    },
                    "tests": {
                        "1M_pop": "26356",
                        "total": 139824
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "Oceania",
                    "country": "Nauru",
                    "population": 10903,
                    "cases": {
                        "new": null,
                        "active": 45,
                        "critical": null,
                        "recovered": 5347,
                        "1M_pop": "494635",
                        "total": 5393
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "92",
                        "total": 1
                    },
                    "tests": {
                        "1M_pop": "1881042",
                        "total": 20509
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "North-America",
                    "country": "Caribbean-Netherlands",
                    "population": 26647,
                    "cases": {
                        "new": "+3",
                        "active": 1168,
                        "critical": null,
                        "recovered": 10476,
                        "1M_pop": "438398",
                        "total": 11682
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "1426",
                        "total": 38
                    },
                    "tests": {
                        "1M_pop": "1130559",
                        "total": 30126
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "Somalia",
                    "population": 16841795,
                    "cases": {
                        "new": "+10",
                        "active": 12791,
                        "critical": null,
                        "recovered": 13182,
                        "1M_pop": "1623",
                        "total": 27334
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "81",
                        "total": 1361
                    },
                    "tests": {
                        "1M_pop": "23778",
                        "total": 400466
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "Sierra-Leone",
                    "population": 8306436,
                    "cases": {
                        "new": "+2",
                        "active": null,
                        "critical": null,
                        "recovered": null,
                        "1M_pop": "934",
                        "total": 7762
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "15",
                        "total": 126
                    },
                    "tests": {
                        "1M_pop": "31296",
                        "total": 259958
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "Europe",
                    "country": "Gibraltar",
                    "population": 33704,
                    "cases": {
                        "new": "+88",
                        "active": 3858,
                        "critical": null,
                        "recovered": 16579,
                        "1M_pop": "609720",
                        "total": 20550
                    },
                    "deaths": {
                        "new": "+2",
                        "1M_pop": "3353",
                        "total": 113
                    },
                    "tests": {
                        "1M_pop": "15852213",
                        "total": 534283
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "North-America",
                    "country": "Bermuda",
                    "population": 61939,
                    "cases": {
                        "new": "+11",
                        "active": 10,
                        "critical": null,
                        "recovered": 18685,
                        "1M_pop": "304493",
                        "total": 18860
                    },
                    "deaths": {
                        "new": "+2",
                        "1M_pop": "2664",
                        "total": 165
                    },
                    "tests": {
                        "1M_pop": "16622128",
                        "total": 1029558
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "Benin",
                    "population": 12784726,
                    "cases": {
                        "new": "+15",
                        "active": 4,
                        "critical": null,
                        "recovered": 27847,
                        "1M_pop": "2191",
                        "total": 28014
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "13",
                        "total": 163
                    },
                    "tests": {
                        "1M_pop": "47268",
                        "total": 604310
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "Gambia",
                    "population": 2558482,
                    "cases": {
                        "new": "+28",
                        "active": 65,
                        "critical": null,
                        "recovered": 12189,
                        "1M_pop": "4935",
                        "total": 12626
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "145",
                        "total": 372
                    },
                    "tests": {
                        "1M_pop": "60851",
                        "total": 155686
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "Mayotte",
                    "population": 286259,
                    "cases": {
                        "new": "+19",
                        "active": null,
                        "critical": null,
                        "recovered": null,
                        "1M_pop": "146815",
                        "total": 42027
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "657",
                        "total": 188
                    },
                    "tests": {
                        "1M_pop": "618038",
                        "total": 176919
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "North-America",
                    "country": "Saint-Lucia",
                    "population": 185113,
                    "cases": {
                        "new": null,
                        "active": 548,
                        "critical": null,
                        "recovered": 29095,
                        "1M_pop": "162344",
                        "total": 30052
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "2209",
                        "total": 409
                    },
                    "tests": {
                        "1M_pop": "1139752",
                        "total": 210983
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "North-America",
                    "country": "Grenada",
                    "population": 113475,
                    "cases": {
                        "new": "+10",
                        "active": 97,
                        "critical": 4,
                        "recovered": 19358,
                        "1M_pop": "173545",
                        "total": 19693
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "2097",
                        "total": 238
                    },
                    "tests": {
                        "1M_pop": "1612523",
                        "total": 182981
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "North-America",
                    "country": "Bahamas",
                    "population": 400516,
                    "cases": {
                        "new": null,
                        "active": 874,
                        "critical": 1,
                        "recovered": 36366,
                        "1M_pop": "95087",
                        "total": 38084
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "2107",
                        "total": 844
                    },
                    "tests": {
                        "1M_pop": "643767",
                        "total": 257839
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "North-America",
                    "country": "Turks-and-Caicos",
                    "population": 39741,
                    "cases": {
                        "new": null,
                        "active": 21,
                        "critical": 4,
                        "recovered": 6529,
                        "1M_pop": "165773",
                        "total": 6588
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "956",
                        "total": 38
                    },
                    "tests": {
                        "1M_pop": "15408143",
                        "total": 612335
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "Comoros",
                    "population": 907419,
                    "cases": {
                        "new": null,
                        "active": 9,
                        "critical": null,
                        "recovered": 8939,
                        "1M_pop": "10038",
                        "total": 9109
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "177",
                        "total": 161
                    },
                    "tests": {
                        "1M_pop": null,
                        "total": null
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "Tanzania",
                    "population": 63298550,
                    "cases": {
                        "new": null,
                        "active": null,
                        "critical": 7,
                        "recovered": null,
                        "1M_pop": "681",
                        "total": 43078
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "13",
                        "total": 846
                    },
                    "tests": {
                        "1M_pop": null,
                        "total": null
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "Guinea-Bissau",
                    "population": 2063367,
                    "cases": {
                        "new": null,
                        "active": 508,
                        "critical": 6,
                        "recovered": 8929,
                        "1M_pop": "4659",
                        "total": 9614
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "86",
                        "total": 177
                    },
                    "tests": {
                        "1M_pop": "70385",
                        "total": 145231
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "Oceania",
                    "country": "Samoa",
                    "population": 202239,
                    "cases": {
                        "new": null,
                        "active": 15127,
                        "critical": null,
                        "recovered": 1605,
                        "1M_pop": "82887",
                        "total": 16763
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "153",
                        "total": 31
                    },
                    "tests": {
                        "1M_pop": "926612",
                        "total": 187397
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "Chad",
                    "population": 17413580,
                    "cases": {
                        "new": null,
                        "active": 2633,
                        "critical": null,
                        "recovered": 4874,
                        "1M_pop": "442",
                        "total": 7701
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "11",
                        "total": 194
                    },
                    "tests": {
                        "1M_pop": "10988",
                        "total": 191341
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "North-America",
                    "country": "St-Vincent-Grenadines",
                    "population": 111551,
                    "cases": {
                        "new": "+12",
                        "active": 14,
                        "critical": null,
                        "recovered": 9493,
                        "1M_pop": "86337",
                        "total": 9631
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "1112",
                        "total": 124
                    },
                    "tests": {
                        "1M_pop": "1023720",
                        "total": 114197
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "Oceania",
                    "country": "Papua-New-Guinea",
                    "population": 9292169,
                    "cases": {
                        "new": "+15",
                        "active": 2212,
                        "critical": 7,
                        "recovered": 43982,
                        "1M_pop": "5043",
                        "total": 46864
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "72",
                        "total": 670
                    },
                    "tests": {
                        "1M_pop": "26813",
                        "total": 249149
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "Guinea",
                    "population": 13865691,
                    "cases": {
                        "new": "+101",
                        "active": 338,
                        "critical": 8,
                        "recovered": 37757,
                        "1M_pop": "2781",
                        "total": 38563
                    },
                    "deaths": {
                        "new": "+1",
                        "1M_pop": "34",
                        "total": 468
                    },
                    "tests": {
                        "1M_pop": "47607",
                        "total": 660107
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "Oceania",
                    "country": "Tonga",
                    "population": 107749,
                    "cases": {
                        "new": "+1",
                        "active": 1166,
                        "critical": null,
                        "recovered": 15638,
                        "1M_pop": "156076",
                        "total": 16817
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "121",
                        "total": 13
                    },
                    "tests": {
                        "1M_pop": "4965327",
                        "total": 535009
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "North-America",
                    "country": "Saint-Martin",
                    "population": 39730,
                    "cases": {
                        "new": "+3",
                        "active": 10841,
                        "critical": 7,
                        "recovered": 1399,
                        "1M_pop": "309665",
                        "total": 12303
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "1586",
                        "total": 63
                    },
                    "tests": {
                        "1M_pop": "2828643",
                        "total": 112382
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "North-America",
                    "country": "St-Barth",
                    "population": 9945,
                    "cases": {
                        "new": "+8",
                        "active": null,
                        "critical": null,
                        "recovered": null,
                        "1M_pop": "552438",
                        "total": 5494
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "603",
                        "total": 6
                    },
                    "tests": {
                        "1M_pop": "7908095",
                        "total": 78646
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "Oceania",
                    "country": "Marshall-Islands",
                    "population": 60057,
                    "cases": {
                        "new": "+17",
                        "active": 2,
                        "critical": null,
                        "recovered": 16079,
                        "1M_pop": "268045",
                        "total": 16098
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "283",
                        "total": 17
                    },
                    "tests": {
                        "1M_pop": null,
                        "total": null
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "Oceania",
                    "country": "Vanuatu",
                    "population": 321832,
                    "cases": {
                        "new": null,
                        "active": 29,
                        "critical": null,
                        "recovered": 11976,
                        "1M_pop": "37346",
                        "total": 12019
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "44",
                        "total": 14
                    },
                    "tests": {
                        "1M_pop": "77606",
                        "total": 24976
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "Oceania",
                    "country": "Micronesia",
                    "population": 117489,
                    "cases": {
                        "new": null,
                        "active": null,
                        "critical": 1,
                        "recovered": null,
                        "1M_pop": "225204",
                        "total": 26459
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "553",
                        "total": 65
                    },
                    "tests": {
                        "1M_pop": "701598",
                        "total": 82430
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "Sao-Tome-and-Principe",
                    "population": 227679,
                    "cases": {
                        "new": null,
                        "active": 0,
                        "critical": null,
                        "recovered": 6507,
                        "1M_pop": "28931",
                        "total": 6587
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "351",
                        "total": 80
                    },
                    "tests": {
                        "1M_pop": "127530",
                        "total": 29036
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "North-America",
                    "country": "Aruba",
                    "population": 107609,
                    "cases": {
                        "new": "+20",
                        "active": 1526,
                        "critical": 2,
                        "recovered": 42438,
                        "1M_pop": "410746",
                        "total": 44200
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "2193",
                        "total": 236
                    },
                    "tests": {
                        "1M_pop": "1653068",
                        "total": 177885
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "North-America",
                    "country": "Sint-Maarten",
                    "population": 43966,
                    "cases": {
                        "new": null,
                        "active": 54,
                        "critical": null,
                        "recovered": 10905,
                        "1M_pop": "251353",
                        "total": 11051
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "2093",
                        "total": 92
                    },
                    "tests": {
                        "1M_pop": "1411454",
                        "total": 62056
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "Oceania",
                    "country": "Wallis-and-Futuna",
                    "population": 10982,
                    "cases": {
                        "new": null,
                        "active": 3104,
                        "critical": null,
                        "recovered": 438,
                        "1M_pop": "323256",
                        "total": 3550
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "728",
                        "total": 8
                    },
                    "tests": {
                        "1M_pop": "1867419",
                        "total": 20508
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "Oceania",
                    "country": "Kiribati",
                    "population": 123419,
                    "cases": {
                        "new": null,
                        "active": 2310,
                        "critical": 3,
                        "recovered": 2703,
                        "1M_pop": "40812",
                        "total": 5037
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "194",
                        "total": 24
                    },
                    "tests": {
                        "1M_pop": null,
                        "total": null
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "Mauritius",
                    "population": 1274727,
                    "cases": {
                        "new": "+41",
                        "active": 701,
                        "critical": null,
                        "recovered": 40865,
                        "1M_pop": "33432",
                        "total": 42617
                    },
                    "deaths": {
                        "new": "+1",
                        "1M_pop": "824",
                        "total": 1051
                    },
                    "tests": {
                        "1M_pop": "281374",
                        "total": 358675
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "Europe",
                    "country": "Liechtenstein",
                    "population": 38387,
                    "cases": {
                        "new": null,
                        "active": 0,
                        "critical": null,
                        "recovered": 21352,
                        "1M_pop": "558679",
                        "total": 21446
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "2449",
                        "total": 94
                    },
                    "tests": {
                        "1M_pop": "2929559",
                        "total": 112457
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "Europe",
                    "country": "San-Marino",
                    "population": 34085,
                    "cases": {
                        "new": "+13",
                        "active": 5,
                        "critical": 4,
                        "recovered": 24181,
                        "1M_pop": "713246",
                        "total": 24311
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "3667",
                        "total": 125
                    },
                    "tests": {
                        "1M_pop": "5775414",
                        "total": 196855
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "Togo",
                    "population": 8680837,
                    "cases": {
                        "new": "+3",
                        "active": 3,
                        "critical": null,
                        "recovered": 39210,
                        "1M_pop": "4551",
                        "total": 39503
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "33",
                        "total": 290
                    },
                    "tests": {
                        "1M_pop": "93552",
                        "total": 812106
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "Asia",
                    "country": "Timor-Leste",
                    "population": 1369429,
                    "cases": {
                        "new": null,
                        "active": 216,
                        "critical": null,
                        "recovered": 23102,
                        "1M_pop": "17128",
                        "total": 23456
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "101",
                        "total": 138
                    },
                    "tests": {
                        "1M_pop": "203391",
                        "total": 278529
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "Europe",
                    "country": "Monaco",
                    "population": 39783,
                    "cases": {
                        "new": null,
                        "active": 755,
                        "critical": 4,
                        "recovered": 15992,
                        "1M_pop": "422643",
                        "total": 16814
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "1684",
                        "total": 67
                    },
                    "tests": {
                        "1M_pop": "1976875",
                        "total": 78646
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "Oceania",
                    "country": "Tuvalu",
                    "population": 12066,
                    "cases": {
                        "new": null,
                        "active": 2911,
                        "critical": null,
                        "recovered": null,
                        "1M_pop": "241256",
                        "total": 2911
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": null,
                        "total": null
                    },
                    "tests": {
                        "1M_pop": null,
                        "total": null
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "North-America",
                    "country": "Saint-Kitts-and-Nevis",
                    "population": 53871,
                    "cases": {
                        "new": null,
                        "active": 4,
                        "critical": null,
                        "recovered": 6554,
                        "1M_pop": "122626",
                        "total": 6606
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "891",
                        "total": 48
                    },
                    "tests": {
                        "1M_pop": "2356555",
                        "total": 126950
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "Oceania",
                    "country": "Niue",
                    "population": 1622,
                    "cases": {
                        "new": null,
                        "active": 2,
                        "critical": null,
                        "recovered": 818,
                        "1M_pop": "505549",
                        "total": 820
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": null,
                        "total": null
                    },
                    "tests": {
                        "1M_pop": null,
                        "total": null
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "Oceania",
                    "country": "Cook-Islands",
                    "population": 17571,
                    "cases": {
                        "new": "+5",
                        "active": 2,
                        "critical": null,
                        "recovered": 7138,
                        "1M_pop": "406465",
                        "total": 7142
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "114",
                        "total": 2
                    },
                    "tests": {
                        "1M_pop": "1120596",
                        "total": 19690
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "North-America",
                    "country": "Haiti",
                    "population": 11680283,
                    "cases": {
                        "new": null,
                        "active": 38,
                        "critical": null,
                        "recovered": 33367,
                        "1M_pop": "2934",
                        "total": 34265
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "74",
                        "total": 860
                    },
                    "tests": {
                        "1M_pop": "11337",
                        "total": 132422
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "Asia",
                    "country": "Macao",
                    "population": 667490,
                    "cases": {
                        "new": "+117",
                        "active": 6939,
                        "critical": null,
                        "recovered": 3487,
                        "1M_pop": "15802",
                        "total": 10548
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "183",
                        "total": 122
                    },
                    "tests": {
                        "1M_pop": "11760",
                        "total": 7850
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "Oceania",
                    "country": "Palau",
                    "population": 18233,
                    "cases": {
                        "new": null,
                        "active": 2,
                        "critical": null,
                        "recovered": 6004,
                        "1M_pop": "329896",
                        "total": 6015
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "494",
                        "total": 9
                    },
                    "tests": {
                        "1M_pop": "3831076",
                        "total": 69852
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "Mali",
                    "population": 21473764,
                    "cases": {
                        "new": null,
                        "active": 76,
                        "critical": null,
                        "recovered": 32331,
                        "1M_pop": "1544",
                        "total": 33150
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "35",
                        "total": 743
                    },
                    "tests": {
                        "1M_pop": "37471",
                        "total": 804637
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:06+00:00"
                },
                {
                    "continent": "Europe",
                    "country": "Belarus",
                    "population": 9432800,
                    "cases": {
                        "new": null,
                        "active": 1327,
                        "critical": null,
                        "recovered": 985592,
                        "1M_pop": "105381",
                        "total": 994037
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "755",
                        "total": 7118
                    },
                    "tests": {
                        "1M_pop": "1446722",
                        "total": 13646641
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Asia",
                    "country": "Palestine",
                    "population": 5345541,
                    "cases": {
                        "new": null,
                        "active": 159,
                        "critical": 17,
                        "recovered": 615445,
                        "1M_pop": "116173",
                        "total": 621008
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "1011",
                        "total": 5404
                    },
                    "tests": {
                        "1M_pop": "575907",
                        "total": 3078533
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Asia",
                    "country": "Oman",
                    "population": 5323993,
                    "cases": {
                        "new": null,
                        "active": 10152,
                        "critical": 2,
                        "recovered": 384669,
                        "1M_pop": "75028",
                        "total": 399449
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "869",
                        "total": 4628
                    },
                    "tests": {
                        "1M_pop": "4695724",
                        "total": 25000000
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "North-America",
                    "country": "El-Salvador",
                    "population": 6550389,
                    "cases": {
                        "new": null,
                        "active": 18145,
                        "critical": 8,
                        "recovered": 179410,
                        "1M_pop": "30805",
                        "total": 201785
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "646",
                        "total": 4230
                    },
                    "tests": {
                        "1M_pop": "398467",
                        "total": 2610114
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "South-America",
                    "country": "French-Guiana",
                    "population": 314169,
                    "cases": {
                        "new": "+13",
                        "active": 86367,
                        "critical": 6,
                        "recovered": 11254,
                        "1M_pop": "312065",
                        "total": 98041
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "1337",
                        "total": 420
                    },
                    "tests": {
                        "1M_pop": "2072951",
                        "total": 651257
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "R&eacute;union",
                    "population": 908061,
                    "cases": {
                        "new": "+693",
                        "active": 67095,
                        "critical": 10,
                        "recovered": 418572,
                        "1M_pop": "535854",
                        "total": 486588
                    },
                    "deaths": {
                        "new": "+2",
                        "1M_pop": "1014",
                        "total": 921
                    },
                    "tests": {
                        "1M_pop": "1766027",
                        "total": 1603660
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "Rwanda",
                    "population": 13600464,
                    "cases": {
                        "new": "+14",
                        "active": 79,
                        "critical": null,
                        "recovered": 131647,
                        "1M_pop": "9793",
                        "total": 133194
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "108",
                        "total": 1468
                    },
                    "tests": {
                        "1M_pop": "442778",
                        "total": 6021981
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "North-America",
                    "country": "Belize",
                    "population": 412190,
                    "cases": {
                        "new": "+25",
                        "active": 9,
                        "critical": 6,
                        "recovered": 70085,
                        "1M_pop": "171722",
                        "total": 70782
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "1669",
                        "total": 688
                    },
                    "tests": {
                        "1M_pop": "1397453",
                        "total": 576016
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "Seychelles",
                    "population": 99426,
                    "cases": {
                        "new": null,
                        "active": 15,
                        "critical": null,
                        "recovered": 50750,
                        "1M_pop": "512311",
                        "total": 50937
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "1730",
                        "total": 172
                    },
                    "tests": {
                        "1M_pop": null,
                        "total": null
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Europe",
                    "country": "Iceland",
                    "population": 345393,
                    "cases": {
                        "new": "+23",
                        "active": null,
                        "critical": 2,
                        "recovered": null,
                        "1M_pop": "605661",
                        "total": 209191
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "663",
                        "total": 229
                    },
                    "tests": {
                        "1M_pop": "5780036",
                        "total": 1996384
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Europe",
                    "country": "Channel-Islands",
                    "population": 176463,
                    "cases": {
                        "new": "+91",
                        "active": 168,
                        "critical": null,
                        "recovered": 101321,
                        "1M_pop": "576421",
                        "total": 101717
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "1292",
                        "total": 228
                    },
                    "tests": {
                        "1M_pop": "7099551",
                        "total": 1252808
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "Nigeria",
                    "population": 216746934,
                    "cases": {
                        "new": "+10",
                        "active": 3567,
                        "critical": 11,
                        "recovered": 259953,
                        "1M_pop": "1230",
                        "total": 266675
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "15",
                        "total": 3155
                    },
                    "tests": {
                        "1M_pop": "26339",
                        "total": 5708974
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "Mauritania",
                    "population": 4901981,
                    "cases": {
                        "new": "+47",
                        "active": 247,
                        "critical": null,
                        "recovered": 62471,
                        "1M_pop": "12998",
                        "total": 63715
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "203",
                        "total": 997
                    },
                    "tests": {
                        "1M_pop": "206030",
                        "total": 1009957
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Europe",
                    "country": "Albania",
                    "population": 2866374,
                    "cases": {
                        "new": "+12",
                        "active": 1696,
                        "critical": null,
                        "recovered": 329428,
                        "1M_pop": "116777",
                        "total": 334726
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "1257",
                        "total": 3602
                    },
                    "tests": {
                        "1M_pop": "677173",
                        "total": 1941032
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Oceania",
                    "country": "New-Caledonia",
                    "population": 290915,
                    "cases": {
                        "new": "+1",
                        "active": 3,
                        "critical": 9,
                        "recovered": 79605,
                        "1M_pop": "274726",
                        "total": 79922
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "1079",
                        "total": 314
                    },
                    "tests": {
                        "1M_pop": "340182",
                        "total": 98964
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "Angola",
                    "population": 35027343,
                    "cases": {
                        "new": "+31",
                        "active": 31,
                        "critical": null,
                        "recovered": 103419,
                        "1M_pop": "3009",
                        "total": 105384
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "55",
                        "total": 1934
                    },
                    "tests": {
                        "1M_pop": "42818",
                        "total": 1499795
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "Ghana",
                    "population": 32395450,
                    "cases": {
                        "new": "+4",
                        "active": 34,
                        "critical": 2,
                        "recovered": 170161,
                        "1M_pop": "5299",
                        "total": 171657
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "45",
                        "total": 1462
                    },
                    "tests": {
                        "1M_pop": "78298",
                        "total": 2536496
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "North-America",
                    "country": "Trinidad-and-Tobago",
                    "population": 1406585,
                    "cases": {
                        "new": "+146",
                        "active": 28,
                        "critical": 8,
                        "recovered": 187078,
                        "1M_pop": "136143",
                        "total": 191496
                    },
                    "deaths": {
                        "new": "+3",
                        "1M_pop": "3121",
                        "total": 4390
                    },
                    "tests": {
                        "1M_pop": "649295",
                        "total": 913289
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "Mozambique",
                    "population": 33089461,
                    "cases": {
                        "new": "+83",
                        "active": 2369,
                        "critical": 11,
                        "recovered": 228805,
                        "1M_pop": "7054",
                        "total": 233417
                    },
                    "deaths": {
                        "new": "+1",
                        "1M_pop": "68",
                        "total": 2243
                    },
                    "tests": {
                        "1M_pop": "41437",
                        "total": 1371127
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "Malawi",
                    "population": 20180839,
                    "cases": {
                        "new": "+6",
                        "active": 391,
                        "critical": 67,
                        "recovered": 85651,
                        "1M_pop": "4397",
                        "total": 88728
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "133",
                        "total": 2686
                    },
                    "tests": {
                        "1M_pop": "30959",
                        "total": 624784
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "South-America",
                    "country": "Venezuela",
                    "population": 29266991,
                    "cases": {
                        "new": "+10",
                        "active": 302,
                        "critical": 31,
                        "recovered": 546537,
                        "1M_pop": "18885",
                        "total": 552695
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "200",
                        "total": 5856
                    },
                    "tests": {
                        "1M_pop": "114771",
                        "total": 3359014
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Asia",
                    "country": "Kazakhstan",
                    "population": 19205043,
                    "cases": {
                        "new": "+63",
                        "active": 14963,
                        "critical": 24,
                        "recovered": 1383020,
                        "1M_pop": "73514",
                        "total": 1411831
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "721",
                        "total": 13848
                    },
                    "tests": {
                        "1M_pop": "602707",
                        "total": 11575012
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Asia",
                    "country": "Saudi-Arabia",
                    "population": 35844909,
                    "cases": {
                        "new": "+121",
                        "active": 3900,
                        "critical": 66,
                        "recovered": 827923,
                        "1M_pop": "23475",
                        "total": 841469
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "269",
                        "total": 9646
                    },
                    "tests": {
                        "1M_pop": "1268848",
                        "total": 45481735
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Europe",
                    "country": "Luxembourg",
                    "population": 642371,
                    "cases": {
                        "new": null,
                        "active": 2037,
                        "critical": null,
                        "recovered": 316690,
                        "1M_pop": "498091",
                        "total": 319959
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "1918",
                        "total": 1232
                    },
                    "tests": {
                        "1M_pop": "7140959",
                        "total": 4587145
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "Egypt",
                    "population": 106156692,
                    "cases": {
                        "new": null,
                        "active": 49228,
                        "critical": 122,
                        "recovered": 442182,
                        "1M_pop": "4861",
                        "total": 516023
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "232",
                        "total": 24613
                    },
                    "tests": {
                        "1M_pop": "34792",
                        "total": 3693367
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "Eswatini",
                    "population": 1184817,
                    "cases": {
                        "new": null,
                        "active": 129,
                        "critical": null,
                        "recovered": 73116,
                        "1M_pop": "63022",
                        "total": 74670
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "1203",
                        "total": 1425
                    },
                    "tests": {
                        "1M_pop": "885119",
                        "total": 1048704
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Europe",
                    "country": "Andorra",
                    "population": 77463,
                    "cases": {
                        "new": null,
                        "active": 287,
                        "critical": 14,
                        "recovered": 47563,
                        "1M_pop": "619844",
                        "total": 48015
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "2130",
                        "total": 165
                    },
                    "tests": {
                        "1M_pop": "3225256",
                        "total": 249838
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Europe",
                    "country": "North-Macedonia",
                    "population": 2081304,
                    "cases": {
                        "new": "+66",
                        "active": 1536,
                        "critical": null,
                        "recovered": 337068,
                        "1M_pop": "167338",
                        "total": 348281
                    },
                    "deaths": {
                        "new": "+1",
                        "1M_pop": "4649",
                        "total": 9677
                    },
                    "tests": {
                        "1M_pop": "1069626",
                        "total": 2226216
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "Namibia",
                    "population": 2633874,
                    "cases": {
                        "new": "+88",
                        "active": 120,
                        "critical": null,
                        "recovered": 167099,
                        "1M_pop": "65041",
                        "total": 171310
                    },
                    "deaths": {
                        "new": "+1",
                        "1M_pop": "1553",
                        "total": 4091
                    },
                    "tests": {
                        "1M_pop": "403460",
                        "total": 1062663
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "Uganda",
                    "population": 48432863,
                    "cases": {
                        "new": "+104",
                        "active": 66712,
                        "critical": 3,
                        "recovered": 100431,
                        "1M_pop": "3526",
                        "total": 170775
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "75",
                        "total": 3632
                    },
                    "tests": {
                        "1M_pop": "62198",
                        "total": 3012408
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "Gabon",
                    "population": 2331533,
                    "cases": {
                        "new": "+11",
                        "active": 11,
                        "critical": null,
                        "recovered": 48674,
                        "1M_pop": "21013",
                        "total": 48992
                    },
                    "deaths": {
                        "new": "+1",
                        "1M_pop": "132",
                        "total": 307
                    },
                    "tests": {
                        "1M_pop": "695641",
                        "total": 1621909
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "Morocco",
                    "population": 37772756,
                    "cases": {
                        "new": null,
                        "active": 1732,
                        "critical": 3,
                        "recovered": 1256151,
                        "1M_pop": "33733",
                        "total": 1274180
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "431",
                        "total": 16297
                    },
                    "tests": {
                        "1M_pop": "344191",
                        "total": 13001033
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "North-America",
                    "country": "Honduras",
                    "population": 10221247,
                    "cases": {
                        "new": "+25",
                        "active": null,
                        "critical": 105,
                        "recovered": null,
                        "1M_pop": "46239",
                        "total": 472619
                    },
                    "deaths": {
                        "new": "+2",
                        "1M_pop": "1088",
                        "total": 11116
                    },
                    "tests": {
                        "1M_pop": "162472",
                        "total": 1660662
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "North-America",
                    "country": "Barbados",
                    "population": 288023,
                    "cases": {
                        "new": null,
                        "active": 230,
                        "critical": null,
                        "recovered": 106971,
                        "1M_pop": "374255",
                        "total": 107794
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "2059",
                        "total": 593
                    },
                    "tests": {
                        "1M_pop": "2782594",
                        "total": 801451
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Asia",
                    "country": "Cyprus",
                    "population": 1223387,
                    "cases": {
                        "new": null,
                        "active": 0,
                        "critical": 60,
                        "recovered": 659490,
                        "1M_pop": "540184",
                        "total": 660854
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "1115",
                        "total": 1364
                    },
                    "tests": {
                        "1M_pop": "7879860",
                        "total": 9640118
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Asia",
                    "country": "UAE",
                    "population": 10081785,
                    "cases": {
                        "new": "+106",
                        "active": 10156,
                        "critical": null,
                        "recovered": 1054525,
                        "1M_pop": "105837",
                        "total": 1067030
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "233",
                        "total": 2349
                    },
                    "tests": {
                        "1M_pop": "19910389",
                        "total": 200732262
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "South-America",
                    "country": "Uruguay",
                    "population": 3496016,
                    "cases": {
                        "new": "+287",
                        "active": 196,
                        "critical": 18,
                        "recovered": 1030944,
                        "1M_pop": "297131",
                        "total": 1038774
                    },
                    "deaths": {
                        "new": "+4",
                        "1M_pop": "2184",
                        "total": 7634
                    },
                    "tests": {
                        "1M_pop": "1749083",
                        "total": 6114822
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Asia",
                    "country": "Uzbekistan",
                    "population": 34382084,
                    "cases": {
                        "new": "+136",
                        "active": 10539,
                        "critical": 23,
                        "recovered": 241486,
                        "1M_pop": "7378",
                        "total": 253662
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "48",
                        "total": 1637
                    },
                    "tests": {
                        "1M_pop": "40077",
                        "total": 1377915
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "North-America",
                    "country": "Martinique",
                    "population": 374087,
                    "cases": {
                        "new": "+75",
                        "active": null,
                        "critical": 12,
                        "recovered": null,
                        "1M_pop": "614763",
                        "total": 229975
                    },
                    "deaths": {
                        "new": "+2",
                        "1M_pop": "2946",
                        "total": 1102
                    },
                    "tests": {
                        "1M_pop": "2215870",
                        "total": 828928
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Asia",
                    "country": "Kyrgyzstan",
                    "population": 6728271,
                    "cases": {
                        "new": "+2",
                        "active": 7493,
                        "critical": 131,
                        "recovered": 196406,
                        "1M_pop": "30749",
                        "total": 206890
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "445",
                        "total": 2991
                    },
                    "tests": {
                        "1M_pop": "283460",
                        "total": 1907195
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "North-America",
                    "country": "Guadeloupe",
                    "population": 399794,
                    "cases": {
                        "new": "+183",
                        "active": null,
                        "critical": 19,
                        "recovered": null,
                        "1M_pop": "507351",
                        "total": 202836
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "2544",
                        "total": 1017
                    },
                    "tests": {
                        "1M_pop": "2346306",
                        "total": 938039
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "Ivory-Coast",
                    "population": 27742298,
                    "cases": {
                        "new": "+1",
                        "active": -1,
                        "critical": null,
                        "recovered": 87497,
                        "1M_pop": "3184",
                        "total": 88331
                    },
                    "deaths": {
                        "new": "+1",
                        "1M_pop": "30",
                        "total": 835
                    },
                    "tests": {
                        "1M_pop": "60951",
                        "total": 1690934
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "Libya",
                    "population": 7040745,
                    "cases": {
                        "new": null,
                        "active": 1,
                        "critical": null,
                        "recovered": 500826,
                        "1M_pop": "72047",
                        "total": 507264
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "914",
                        "total": 6437
                    },
                    "tests": {
                        "1M_pop": "352782",
                        "total": 2483848
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "South-America",
                    "country": "Suriname",
                    "population": 596831,
                    "cases": {
                        "new": null,
                        "active": null,
                        "critical": null,
                        "recovered": null,
                        "1M_pop": "138336",
                        "total": 82563
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "2356",
                        "total": 1406
                    },
                    "tests": {
                        "1M_pop": "405539",
                        "total": 242038
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "Madagascar",
                    "population": 29178077,
                    "cases": {
                        "new": null,
                        "active": 2,
                        "critical": null,
                        "recovered": 66862,
                        "1M_pop": "2340",
                        "total": 68289
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "49",
                        "total": 1425
                    },
                    "tests": {
                        "1M_pop": "18210",
                        "total": 531329
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "Tunisia",
                    "population": 12046656,
                    "cases": {
                        "new": "+38",
                        "active": null,
                        "critical": 44,
                        "recovered": null,
                        "1M_pop": "95741",
                        "total": 1153361
                    },
                    "deaths": {
                        "new": "+3",
                        "1M_pop": "2442",
                        "total": 29423
                    },
                    "tests": {
                        "1M_pop": "416164",
                        "total": 5013383
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "Kenya",
                    "population": 56215221,
                    "cases": {
                        "new": "+238",
                        "active": 315,
                        "critical": 1,
                        "recovered": 337309,
                        "1M_pop": "6107",
                        "total": 343312
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "101",
                        "total": 5688
                    },
                    "tests": {
                        "1M_pop": "70569",
                        "total": 3967062
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "North-America",
                    "country": "Jamaica",
                    "population": 2985094,
                    "cases": {
                        "new": "+37",
                        "active": 48526,
                        "critical": null,
                        "recovered": 102987,
                        "1M_pop": "51946",
                        "total": 155063
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "1189",
                        "total": 3550
                    },
                    "tests": {
                        "1M_pop": "396633",
                        "total": 1183986
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "DRC",
                    "population": 95240792,
                    "cases": {
                        "new": null,
                        "active": 10934,
                        "critical": null,
                        "recovered": 84489,
                        "1M_pop": "1017",
                        "total": 96890
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "15",
                        "total": 1467
                    },
                    "tests": {
                        "1M_pop": "8890",
                        "total": 846704
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "Senegal",
                    "population": 17653671,
                    "cases": {
                        "new": "+2",
                        "active": 4,
                        "critical": null,
                        "recovered": 87024,
                        "1M_pop": "5041",
                        "total": 88999
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "112",
                        "total": 1971
                    },
                    "tests": {
                        "1M_pop": "64946",
                        "total": 1146543
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Asia",
                    "country": "Bhutan",
                    "population": 787941,
                    "cases": {
                        "new": "+1",
                        "active": 1087,
                        "critical": null,
                        "recovered": 61564,
                        "1M_pop": "79539",
                        "total": 62672
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "27",
                        "total": 21
                    },
                    "tests": {
                        "1M_pop": "2923739",
                        "total": 2303734
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "Zambia",
                    "population": 19470234,
                    "cases": {
                        "new": "+1063",
                        "active": 546,
                        "critical": null,
                        "recovered": 340454,
                        "1M_pop": "17722",
                        "total": 345058
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "208",
                        "total": 4058
                    },
                    "tests": {
                        "1M_pop": "209931",
                        "total": 4087410
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "Sudan",
                    "population": 45992020,
                    "cases": {
                        "new": null,
                        "active": 234,
                        "critical": null,
                        "recovered": 58713,
                        "1M_pop": "1391",
                        "total": 63993
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "110",
                        "total": 5046
                    },
                    "tests": {
                        "1M_pop": "12240",
                        "total": 562941
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Asia",
                    "country": "Maldives",
                    "population": 540985,
                    "cases": {
                        "new": "+11",
                        "active": 22680,
                        "critical": 25,
                        "recovered": 163687,
                        "1M_pop": "345080",
                        "total": 186683
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "584",
                        "total": 316
                    },
                    "tests": {
                        "1M_pop": "4092223",
                        "total": 2213831
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Oceania",
                    "country": "Fiji",
                    "population": 909466,
                    "cases": {
                        "new": null,
                        "active": 1046,
                        "critical": null,
                        "recovered": 67099,
                        "1M_pop": "75901",
                        "total": 69029
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "972",
                        "total": 884
                    },
                    "tests": {
                        "1M_pop": "739202",
                        "total": 672279
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Europe",
                    "country": "Latvia",
                    "population": 1848837,
                    "cases": {
                        "new": null,
                        "active": 291,
                        "critical": 13,
                        "recovered": 971406,
                        "1M_pop": "529021",
                        "total": 978074
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "3449",
                        "total": 6377
                    },
                    "tests": {
                        "1M_pop": "4260586",
                        "total": 7877129
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Europe",
                    "country": "Croatia",
                    "population": 4059286,
                    "cases": {
                        "new": "+36",
                        "active": 169,
                        "critical": 6,
                        "recovered": 1255471,
                        "1M_pop": "313825",
                        "total": 1273907
                    },
                    "deaths": {
                        "new": "+1",
                        "1M_pop": "4500",
                        "total": 18267
                    },
                    "tests": {
                        "1M_pop": "1381652",
                        "total": 5608522
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Europe",
                    "country": "Malta",
                    "population": 444033,
                    "cases": {
                        "new": "+43",
                        "active": 527,
                        "critical": 4,
                        "recovered": 117491,
                        "1M_pop": "267678",
                        "total": 118858
                    },
                    "deaths": {
                        "new": "+1",
                        "1M_pop": "1892",
                        "total": 840
                    },
                    "tests": {
                        "1M_pop": "4821099",
                        "total": 2140727
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Asia",
                    "country": "Myanmar",
                    "population": 55227143,
                    "cases": {
                        "new": "+38",
                        "active": 1508,
                        "critical": null,
                        "recovered": 618738,
                        "1M_pop": "11584",
                        "total": 639740
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "353",
                        "total": 19494
                    },
                    "tests": {
                        "1M_pop": "194618",
                        "total": 10748205
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "South-America",
                    "country": "Guyana",
                    "population": 794045,
                    "cases": {
                        "new": "+21",
                        "active": 33,
                        "critical": null,
                        "recovered": 71955,
                        "1M_pop": "92295",
                        "total": 73286
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "1635",
                        "total": 1298
                    },
                    "tests": {
                        "1M_pop": "922105",
                        "total": 732193
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Asia",
                    "country": "Lebanon",
                    "population": 6684849,
                    "cases": {
                        "new": "+47",
                        "active": 139892,
                        "critical": 74,
                        "recovered": 1087587,
                        "1M_pop": "185256",
                        "total": 1238411
                    },
                    "deaths": {
                        "new": "+2",
                        "1M_pop": "1635",
                        "total": 10932
                    },
                    "tests": {
                        "1M_pop": "717380",
                        "total": 4795578
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Europe",
                    "country": "Estonia",
                    "population": 1321910,
                    "cases": {
                        "new": "+97",
                        "active": 91157,
                        "critical": 2,
                        "recovered": 524990,
                        "1M_pop": "468374",
                        "total": 619148
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "2270",
                        "total": 3001
                    },
                    "tests": {
                        "1M_pop": "2814583",
                        "total": 3720626
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "Algeria",
                    "population": 45350148,
                    "cases": {
                        "new": "+4",
                        "active": 81912,
                        "critical": null,
                        "recovered": 183058,
                        "1M_pop": "5994",
                        "total": 271851
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "152",
                        "total": 6881
                    },
                    "tests": {
                        "1M_pop": "5093",
                        "total": 230960
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "North-America",
                    "country": "Costa-Rica",
                    "population": 5182354,
                    "cases": {
                        "new": "+902",
                        "active": 364291,
                        "critical": 52,
                        "recovered": 860711,
                        "1M_pop": "238190",
                        "total": 1234384
                    },
                    "deaths": {
                        "new": "+3",
                        "1M_pop": "1810",
                        "total": 9382
                    },
                    "tests": {
                        "1M_pop": "899158",
                        "total": 4659757
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "North-America",
                    "country": "Dominican-Republic",
                    "population": 11056370,
                    "cases": {
                        "new": "+420",
                        "active": 12427,
                        "critical": 4,
                        "recovered": 644785,
                        "1M_pop": "59838",
                        "total": 661596
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "397",
                        "total": 4384
                    },
                    "tests": {
                        "1M_pop": "338350",
                        "total": 3740928
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Europe",
                    "country": "Bosnia-and-Herzegovina",
                    "population": 3249317,
                    "cases": {
                        "new": "+32",
                        "active": 7598,
                        "critical": null,
                        "recovered": 379084,
                        "1M_pop": "124035",
                        "total": 403030
                    },
                    "deaths": {
                        "new": "+1",
                        "1M_pop": "5031",
                        "total": 16348
                    },
                    "tests": {
                        "1M_pop": "580036",
                        "total": 1884721
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "Zimbabwe",
                    "population": 15331428,
                    "cases": {
                        "new": null,
                        "active": 699,
                        "critical": 12,
                        "recovered": 258888,
                        "1M_pop": "17304",
                        "total": 265289
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "372",
                        "total": 5702
                    },
                    "tests": {
                        "1M_pop": "164744",
                        "total": 2525756
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "Botswana",
                    "population": 2441162,
                    "cases": {
                        "new": "+15",
                        "active": 103,
                        "critical": 1,
                        "recovered": 327049,
                        "1M_pop": "135162",
                        "total": 329953
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "1147",
                        "total": 2801
                    },
                    "tests": {
                        "1M_pop": "830300",
                        "total": 2026898
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Asia",
                    "country": "Mongolia",
                    "population": 3378078,
                    "cases": {
                        "new": null,
                        "active": 0,
                        "critical": 192,
                        "recovered": 1007855,
                        "1M_pop": "298997",
                        "total": 1010034
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "645",
                        "total": 2179
                    },
                    "tests": {
                        "1M_pop": "1193000",
                        "total": 4030048
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "Cameroon",
                    "population": 27911548,
                    "cases": {
                        "new": null,
                        "active": 308,
                        "critical": 13,
                        "recovered": 122807,
                        "1M_pop": "4482",
                        "total": 125087
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "71",
                        "total": 1972
                    },
                    "tests": {
                        "1M_pop": "62762",
                        "total": 1751774
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Oceania",
                    "country": "French-Polynesia",
                    "population": 284164,
                    "cases": {
                        "new": null,
                        "active": null,
                        "critical": 7,
                        "recovered": null,
                        "1M_pop": "276587",
                        "total": 78596
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "2284",
                        "total": 649
                    },
                    "tests": {
                        "1M_pop": null,
                        "total": null
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "North-America",
                    "country": "Panama",
                    "population": 4446964,
                    "cases": {
                        "new": null,
                        "active": 1152,
                        "critical": 16,
                        "recovered": 1032845,
                        "1M_pop": "234459",
                        "total": 1042631
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "1942",
                        "total": 8634
                    },
                    "tests": {
                        "1M_pop": "1730886",
                        "total": 7697189
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Asia",
                    "country": "Kuwait",
                    "population": 4380326,
                    "cases": {
                        "new": null,
                        "active": 3148,
                        "critical": null,
                        "recovered": 660237,
                        "1M_pop": "152033",
                        "total": 665955
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "587",
                        "total": 2570
                    },
                    "tests": {
                        "1M_pop": "1930391",
                        "total": 8455743
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Europe",
                    "country": "Moldova",
                    "population": 4013171,
                    "cases": {
                        "new": null,
                        "active": 104391,
                        "critical": 49,
                        "recovered": 504142,
                        "1M_pop": "154655",
                        "total": 620656
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "3021",
                        "total": 12123
                    },
                    "tests": {
                        "1M_pop": "801437",
                        "total": 3216305
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Asia",
                    "country": "Armenia",
                    "population": 2971966,
                    "cases": {
                        "new": null,
                        "active": 5301,
                        "critical": null,
                        "recovered": 435162,
                        "1M_pop": "151150",
                        "total": 449213
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "2944",
                        "total": 8750
                    },
                    "tests": {
                        "1M_pop": "1091164",
                        "total": 3242901
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Asia",
                    "country": "Brunei",
                    "population": 445431,
                    "cases": {
                        "new": null,
                        "active": 64951,
                        "critical": 3,
                        "recovered": 243601,
                        "1M_pop": "693209",
                        "total": 308777
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "505",
                        "total": 225
                    },
                    "tests": {
                        "1M_pop": "1611437",
                        "total": 717784
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "Burundi",
                    "population": 12624840,
                    "cases": {
                        "new": null,
                        "active": 347,
                        "critical": null,
                        "recovered": 53569,
                        "1M_pop": "4274",
                        "total": 53954
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "3",
                        "total": 38
                    },
                    "tests": {
                        "1M_pop": "27386",
                        "total": 345742
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Asia",
                    "country": "Qatar",
                    "population": 2979915,
                    "cases": {
                        "new": "+42",
                        "active": 209,
                        "critical": 18,
                        "recovered": 513437,
                        "1M_pop": "172601",
                        "total": 514336
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "232",
                        "total": 690
                    },
                    "tests": {
                        "1M_pop": "1364257",
                        "total": 4065369
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Europe",
                    "country": "Montenegro",
                    "population": 627950,
                    "cases": {
                        "new": "+10",
                        "active": 465,
                        "critical": 6,
                        "recovered": 288628,
                        "1M_pop": "464879",
                        "total": 291921
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "4504",
                        "total": 2828
                    },
                    "tests": {
                        "1M_pop": "4393898",
                        "total": 2759148
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "Cabo-Verde",
                    "population": 567678,
                    "cases": {
                        "new": "+11",
                        "active": 88,
                        "critical": 23,
                        "recovered": 63504,
                        "1M_pop": "112751",
                        "total": 64006
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "729",
                        "total": 414
                    },
                    "tests": {
                        "1M_pop": "707482",
                        "total": 401622
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Asia",
                    "country": "Nepal",
                    "population": 30225582,
                    "cases": {
                        "new": "+1",
                        "active": 9,
                        "critical": null,
                        "recovered": 991321,
                        "1M_pop": "33196",
                        "total": 1003361
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "398",
                        "total": 12031
                    },
                    "tests": {
                        "1M_pop": "200088",
                        "total": 6047766
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Europe",
                    "country": "Bulgaria",
                    "population": 6844597,
                    "cases": {
                        "new": "+46",
                        "active": 1830,
                        "critical": 35,
                        "recovered": 1268347,
                        "1M_pop": "191185",
                        "total": 1308585
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "5611",
                        "total": 38408
                    },
                    "tests": {
                        "1M_pop": "1645223",
                        "total": 11260885
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "North-America",
                    "country": "Guatemala",
                    "population": 18584039,
                    "cases": {
                        "new": "+449",
                        "active": 4031,
                        "critical": 5,
                        "recovered": 1232609,
                        "1M_pop": "67630",
                        "total": 1256845
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "1087",
                        "total": 20205
                    },
                    "tests": {
                        "1M_pop": "398706",
                        "total": 7409568
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "South-America",
                    "country": "Paraguay",
                    "population": 7305843,
                    "cases": {
                        "new": "+153",
                        "active": null,
                        "critical": 7,
                        "recovered": null,
                        "1M_pop": "111035",
                        "total": 811204
                    },
                    "deaths": {
                        "new": "+6",
                        "1M_pop": "2732",
                        "total": 19961
                    },
                    "tests": {
                        "1M_pop": "363751",
                        "total": 2657506
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "South-America",
                    "country": "Ecuador",
                    "population": 18113361,
                    "cases": {
                        "new": null,
                        "active": 0,
                        "critical": 759,
                        "recovered": 1026256,
                        "1M_pop": "58646",
                        "total": 1062275
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "1989",
                        "total": 36019
                    },
                    "tests": {
                        "1M_pop": "170173",
                        "total": 3082403
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "South-America",
                    "country": "Bolivia",
                    "population": 11992656,
                    "cases": {
                        "new": null,
                        "active": 8922,
                        "critical": 220,
                        "recovered": 1169920,
                        "1M_pop": "100164",
                        "total": 1201229
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "1867",
                        "total": 22387
                    },
                    "tests": {
                        "1M_pop": "225993",
                        "total": 2710261
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Asia",
                    "country": "Laos",
                    "population": 7481023,
                    "cases": {
                        "new": "+11",
                        "active": null,
                        "critical": null,
                        "recovered": null,
                        "1M_pop": "29189",
                        "total": 218366
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "101",
                        "total": 758
                    },
                    "tests": {
                        "1M_pop": "164845",
                        "total": 1233207
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Asia",
                    "country": "Cambodia",
                    "population": 17168639,
                    "cases": {
                        "new": "+8",
                        "active": 34,
                        "critical": null,
                        "recovered": 135789,
                        "1M_pop": "8089",
                        "total": 138879
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "178",
                        "total": 3056
                    },
                    "tests": {
                        "1M_pop": "180062",
                        "total": 3091420
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Europe",
                    "country": "Lithuania",
                    "population": 2661708,
                    "cases": {
                        "new": "+33",
                        "active": 810,
                        "critical": 4,
                        "recovered": 1310624,
                        "1M_pop": "496345",
                        "total": 1321125
                    },
                    "deaths": {
                        "new": "+1",
                        "1M_pop": "3641",
                        "total": 9691
                    },
                    "tests": {
                        "1M_pop": "3929697",
                        "total": 10459706
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Europe",
                    "country": "Slovenia",
                    "population": 2078034,
                    "cases": {
                        "new": "+1",
                        "active": 9074,
                        "critical": 8,
                        "recovered": 1328006,
                        "1M_pop": "646852",
                        "total": 1344180
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "3417",
                        "total": 7100
                    },
                    "tests": {
                        "1M_pop": "1370382",
                        "total": 2847701
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Asia",
                    "country": "Afghanistan",
                    "population": 40754388,
                    "cases": {
                        "new": "+2",
                        "active": 12606,
                        "critical": 45,
                        "recovered": 202372,
                        "1M_pop": "5469",
                        "total": 222900
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "194",
                        "total": 7922
                    },
                    "tests": {
                        "1M_pop": "31176",
                        "total": 1270552
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Asia",
                    "country": "Syria",
                    "population": 19364809,
                    "cases": {
                        "new": "+14",
                        "active": 0,
                        "critical": null,
                        "recovered": 54487,
                        "1M_pop": "2977",
                        "total": 57652
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "163",
                        "total": 3165
                    },
                    "tests": {
                        "1M_pop": "7553",
                        "total": 146269
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Asia",
                    "country": "Azerbaijan",
                    "population": 10300205,
                    "cases": {
                        "new": "+1",
                        "active": 11,
                        "critical": null,
                        "recovered": 821598,
                        "1M_pop": "80764",
                        "total": 831890
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "998",
                        "total": 10281
                    },
                    "tests": {
                        "1M_pop": "741397",
                        "total": 7636539
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "North-America",
                    "country": "Cuba",
                    "population": 11305652,
                    "cases": {
                        "new": "+25",
                        "active": 147,
                        "critical": 2,
                        "recovered": 1105958,
                        "1M_pop": "98591",
                        "total": 1114635
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "754",
                        "total": 8530
                    },
                    "tests": {
                        "1M_pop": "1268918",
                        "total": 14345940
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Asia",
                    "country": "Bahrain",
                    "population": 1783983,
                    "cases": {
                        "new": "+52",
                        "active": 101,
                        "critical": 2,
                        "recovered": 720616,
                        "1M_pop": "404871",
                        "total": 722283
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "878",
                        "total": 1566
                    },
                    "tests": {
                        "1M_pop": "6091341",
                        "total": 10866848
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Asia",
                    "country": "Sri-Lanka",
                    "population": 21575842,
                    "cases": {
                        "new": "+2",
                        "active": 3,
                        "critical": null,
                        "recovered": 655645,
                        "1M_pop": "31170",
                        "total": 672525
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "782",
                        "total": 16877
                    },
                    "tests": {
                        "1M_pop": "300619",
                        "total": 6486117
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "Ethiopia",
                    "population": 120812698,
                    "cases": {
                        "new": "+1",
                        "active": 5193,
                        "critical": null,
                        "recovered": 488153,
                        "1M_pop": "4146",
                        "total": 500920
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "63",
                        "total": 7574
                    },
                    "tests": {
                        "1M_pop": "45997",
                        "total": 5556977
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:05+00:00"
                },
                {
                    "continent": "Asia",
                    "country": "DPRK",
                    "population": 25990679,
                    "cases": {
                        "new": null,
                        "active": 0,
                        "critical": null,
                        "recovered": 4772739,
                        "1M_pop": "183636",
                        "total": 4772813
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "3",
                        "total": 74
                    },
                    "tests": {
                        "1M_pop": null,
                        "total": null
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "Asia",
                    "country": "Iraq",
                    "population": 42164965,
                    "cases": {
                        "new": null,
                        "active": 673,
                        "critical": 21,
                        "recovered": 2439497,
                        "1M_pop": "58474",
                        "total": 2465545
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "602",
                        "total": 25375
                    },
                    "tests": {
                        "1M_pop": "463523",
                        "total": 19544451
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "Asia",
                    "country": "Jordan",
                    "population": 10300869,
                    "cases": {
                        "new": null,
                        "active": 1868,
                        "critical": 59,
                        "recovered": 1731007,
                        "1M_pop": "169597",
                        "total": 1746997
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "1371",
                        "total": 14122
                    },
                    "tests": {
                        "1M_pop": "1669945",
                        "total": 17201885
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "Asia",
                    "country": "Turkey",
                    "population": 85561976,
                    "cases": {
                        "new": null,
                        "active": null,
                        "critical": null,
                        "recovered": null,
                        "1M_pop": "201399",
                        "total": 17232066
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "1194",
                        "total": 102174
                    },
                    "tests": {
                        "1M_pop": "1902052",
                        "total": 162743369
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "Asia",
                    "country": "Taiwan",
                    "population": 23888595,
                    "cases": {
                        "new": null,
                        "active": 0,
                        "critical": null,
                        "recovered": 10220993,
                        "1M_pop": "428656",
                        "total": 10239998
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "796",
                        "total": 19005
                    },
                    "tests": {
                        "1M_pop": "1286903",
                        "total": 30742304
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "South-Africa",
                    "population": 60756135,
                    "cases": {
                        "new": "+614",
                        "active": 61362,
                        "critical": 192,
                        "recovered": 3912506,
                        "1M_pop": "67095",
                        "total": 4076463
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "1689",
                        "total": 102595
                    },
                    "tests": {
                        "1M_pop": "441027",
                        "total": 26795090
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "Europe",
                    "country": "Netherlands",
                    "population": 17211447,
                    "cases": {
                        "new": null,
                        "active": 0,
                        "critical": 53,
                        "recovered": 8587380,
                        "1M_pop": "500270",
                        "total": 8610372
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "1336",
                        "total": 22992
                    },
                    "tests": {
                        "1M_pop": "1509718",
                        "total": 25984435
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "Asia",
                    "country": "Japan",
                    "population": 125584838,
                    "cases": {
                        "new": "+833",
                        "active": null,
                        "critical": 83,
                        "recovered": null,
                        "1M_pop": "269169",
                        "total": 33803572
                    },
                    "deaths": {
                        "new": "+25",
                        "1M_pop": "595",
                        "total": 74694
                    },
                    "tests": {
                        "1M_pop": "799578",
                        "total": 100414883
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "Europe",
                    "country": "Germany",
                    "population": 83883596,
                    "cases": {
                        "new": null,
                        "active": 13733,
                        "critical": null,
                        "recovered": 38240600,
                        "1M_pop": "458119",
                        "total": 38428685
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "2078",
                        "total": 174352
                    },
                    "tests": {
                        "1M_pop": "1458359",
                        "total": 122332384
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "South-America",
                    "country": "Argentina",
                    "population": 46010234,
                    "cases": {
                        "new": null,
                        "active": 0,
                        "critical": 363,
                        "recovered": 9923742,
                        "1M_pop": "218522",
                        "total": 10054251
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "2837",
                        "total": 130509
                    },
                    "tests": {
                        "1M_pop": "776264",
                        "total": 35716069
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "South-America",
                    "country": "Colombia",
                    "population": 51512762,
                    "cases": {
                        "new": "+982",
                        "active": 36453,
                        "critical": 342,
                        "recovered": 6190683,
                        "1M_pop": "123657",
                        "total": 6369916
                    },
                    "deaths": {
                        "new": "+15",
                        "1M_pop": "2772",
                        "total": 142780
                    },
                    "tests": {
                        "1M_pop": "717327",
                        "total": 36951507
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "Asia",
                    "country": "Singapore",
                    "population": 5943546,
                    "cases": {
                        "new": null,
                        "active": 330094,
                        "critical": 2,
                        "recovered": 2149583,
                        "1M_pop": "417496",
                        "total": 2481404
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "291",
                        "total": 1727
                    },
                    "tests": {
                        "1M_pop": "4165302",
                        "total": 24756666
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "Asia",
                    "country": "Georgia",
                    "population": 3968738,
                    "cases": {
                        "new": null,
                        "active": 50072,
                        "critical": null,
                        "recovered": 1776548,
                        "1M_pop": "464557",
                        "total": 1843707
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "4305",
                        "total": 17087
                    },
                    "tests": {
                        "1M_pop": "4263340",
                        "total": 16920079
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "South-America",
                    "country": "Peru",
                    "population": 33684208,
                    "cases": {
                        "new": null,
                        "active": 0,
                        "critical": 26,
                        "recovered": 4287201,
                        "1M_pop": "133828",
                        "total": 4507896
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "6552",
                        "total": 220695
                    },
                    "tests": {
                        "1M_pop": "1150483",
                        "total": 38753114
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "Asia",
                    "country": "Malaysia",
                    "population": 33181072,
                    "cases": {
                        "new": null,
                        "active": 18147,
                        "critical": 36,
                        "recovered": 5053329,
                        "1M_pop": "153961",
                        "total": 5108586
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "1118",
                        "total": 37110
                    },
                    "tests": {
                        "1M_pop": "2060225",
                        "total": 68360482
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "Oceania",
                    "country": "New-Zealand",
                    "population": 4898203,
                    "cases": {
                        "new": "+1409",
                        "active": 8445,
                        "critical": null,
                        "recovered": 2384172,
                        "1M_pop": "489376",
                        "total": 2397065
                    },
                    "deaths": {
                        "new": "+7",
                        "1M_pop": "908",
                        "total": 4448
                    },
                    "tests": {
                        "1M_pop": "1586011",
                        "total": 7768604
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "Asia",
                    "country": "Thailand",
                    "population": 70078203,
                    "cases": {
                        "new": "+2709",
                        "active": 20884,
                        "critical": null,
                        "recovered": 4692636,
                        "1M_pop": "67749",
                        "total": 4747752
                    },
                    "deaths": {
                        "new": "+69",
                        "1M_pop": "488",
                        "total": 34232
                    },
                    "tests": {
                        "1M_pop": "246450",
                        "total": 17270775
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "Europe",
                    "country": "Slovakia",
                    "population": 5460193,
                    "cases": {
                        "new": null,
                        "active": 0,
                        "critical": 5,
                        "recovered": 1845690,
                        "1M_pop": "341903",
                        "total": 1866857
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "3877",
                        "total": 21167
                    },
                    "tests": {
                        "1M_pop": "1361261",
                        "total": 7432749
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "Europe",
                    "country": "Russia",
                    "population": 145805947,
                    "cases": {
                        "new": "+6785",
                        "active": 160607,
                        "critical": null,
                        "recovered": 22389297,
                        "1M_pop": "157396",
                        "total": 22949243
                    },
                    "deaths": {
                        "new": "+113",
                        "1M_pop": "2739",
                        "total": 399339
                    },
                    "tests": {
                        "1M_pop": "1875095",
                        "total": 273400000
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "Europe",
                    "country": "Romania",
                    "population": 19031335,
                    "cases": {
                        "new": null,
                        "active": 1972,
                        "critical": 58,
                        "recovered": 3335980,
                        "1M_pop": "178977",
                        "total": 3406169
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "3584",
                        "total": 68217
                    },
                    "tests": {
                        "1M_pop": "1449591",
                        "total": 27587658
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "South-America",
                    "country": "Brazil",
                    "population": 215353593,
                    "cases": {
                        "new": null,
                        "active": 686764,
                        "critical": null,
                        "recovered": 36249161,
                        "1M_pop": "174779",
                        "total": 37639324
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "3266",
                        "total": 703399
                    },
                    "tests": {
                        "1M_pop": "296146",
                        "total": 63776166
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "Europe",
                    "country": "Switzerland",
                    "population": 8773637,
                    "cases": {
                        "new": null,
                        "active": 1690,
                        "critical": 39,
                        "recovered": 4390467,
                        "1M_pop": "502256",
                        "total": 4406609
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "1647",
                        "total": 14452
                    },
                    "tests": {
                        "1M_pop": "2716487",
                        "total": 23833472
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "Asia",
                    "country": "Israel",
                    "population": 9326000,
                    "cases": {
                        "new": "+860",
                        "active": 16615,
                        "critical": 21,
                        "recovered": 4798473,
                        "1M_pop": "517654",
                        "total": 4827640
                    },
                    "deaths": {
                        "new": "+12",
                        "1M_pop": "1346",
                        "total": 12552
                    },
                    "tests": {
                        "1M_pop": "4436346",
                        "total": 41373364
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "Asia",
                    "country": "Bangladesh",
                    "population": 167885689,
                    "cases": {
                        "new": "+770",
                        "active": 12781,
                        "critical": null,
                        "recovered": 1998448,
                        "1M_pop": "12155",
                        "total": 2040681
                    },
                    "deaths": {
                        "new": "+1",
                        "1M_pop": "175",
                        "total": 29452
                    },
                    "tests": {
                        "1M_pop": "90862",
                        "total": 15254399
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "Europe",
                    "country": "Portugal",
                    "population": 10140570,
                    "cases": {
                        "new": null,
                        "active": 5011,
                        "critical": 61,
                        "recovered": 5559035,
                        "1M_pop": "551337",
                        "total": 5590870
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "2645",
                        "total": 26824
                    },
                    "tests": {
                        "1M_pop": "4549993",
                        "total": 46139518
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "Europe",
                    "country": "Ukraine",
                    "population": 43192122,
                    "cases": {
                        "new": null,
                        "active": 4964,
                        "critical": null,
                        "recovered": 5440613,
                        "1M_pop": "128681",
                        "total": 5557995
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "2603",
                        "total": 112418
                    },
                    "tests": {
                        "1M_pop": "754855",
                        "total": 32603805
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "Asia",
                    "country": "Pakistan",
                    "population": 229488994,
                    "cases": {
                        "new": "+2",
                        "active": 11757,
                        "critical": 6,
                        "recovered": 1538689,
                        "1M_pop": "6890",
                        "total": 1581106
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "134",
                        "total": 30660
                    },
                    "tests": {
                        "1M_pop": "133215",
                        "total": 30571377
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "Europe",
                    "country": "Hungary",
                    "population": 9606259,
                    "cases": {
                        "new": null,
                        "active": 2048,
                        "critical": 2,
                        "recovered": 2152155,
                        "1M_pop": "229338",
                        "total": 2203082
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "5088",
                        "total": 48879
                    },
                    "tests": {
                        "1M_pop": "1186160",
                        "total": 11394556
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "Asia",
                    "country": "Iran",
                    "population": 86022837,
                    "cases": {
                        "new": "+17",
                        "active": 98124,
                        "critical": 47,
                        "recovered": 7367866,
                        "1M_pop": "88491",
                        "total": 7612280
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "1701",
                        "total": 146290
                    },
                    "tests": {
                        "1M_pop": "660085",
                        "total": 56782369
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "North-America",
                    "country": "Mexico",
                    "population": 131562772,
                    "cases": {
                        "new": null,
                        "active": 413752,
                        "critical": null,
                        "recovered": 6880632,
                        "1M_pop": "57985",
                        "total": 7628640
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "2541",
                        "total": 334256
                    },
                    "tests": {
                        "1M_pop": "152124",
                        "total": 20013810
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "Oceania",
                    "country": "Australia",
                    "population": 26068792,
                    "cases": {
                        "new": "+2811",
                        "active": 42141,
                        "critical": 70,
                        "recovered": 11609163,
                        "1M_pop": "447768",
                        "total": 11672767
                    },
                    "deaths": {
                        "new": "+29",
                        "1M_pop": "823",
                        "total": 21463
                    },
                    "tests": {
                        "1M_pop": "3142326",
                        "total": 81916639
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "Asia",
                    "country": "India",
                    "population": 1406631776,
                    "cases": {
                        "new": null,
                        "active": 2017,
                        "critical": null,
                        "recovered": 44459372,
                        "1M_pop": "31987",
                        "total": 44993282
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "378",
                        "total": 531893
                    },
                    "tests": {
                        "1M_pop": "661721",
                        "total": 930797975
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "Asia",
                    "country": "Hong-Kong",
                    "population": 7604299,
                    "cases": {
                        "new": null,
                        "active": 13568,
                        "critical": 28,
                        "recovered": 2882096,
                        "1M_pop": "382610",
                        "total": 2909483
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "1817",
                        "total": 13819
                    },
                    "tests": {
                        "1M_pop": "10011143",
                        "total": 76127725
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "Europe",
                    "country": "Italy",
                    "population": 60262770,
                    "cases": {
                        "new": null,
                        "active": 116031,
                        "critical": 54,
                        "recovered": 25580707,
                        "1M_pop": "429576",
                        "total": 25887444
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "3165",
                        "total": 190706
                    },
                    "tests": {
                        "1M_pop": "4534503",
                        "total": 273261725
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "Europe",
                    "country": "Spain",
                    "population": 46719142,
                    "cases": {
                        "new": "+1038",
                        "active": 43223,
                        "critical": 231,
                        "recovered": 13740203,
                        "1M_pop": "297631",
                        "total": 13905048
                    },
                    "deaths": {
                        "new": "+15",
                        "1M_pop": "2603",
                        "total": 121622
                    },
                    "tests": {
                        "1M_pop": "10082298",
                        "total": 471036328
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "Asia",
                    "country": "S-Korea",
                    "population": 51329899,
                    "cases": {
                        "new": null,
                        "active": 225567,
                        "critical": 121,
                        "recovered": 31644207,
                        "1M_pop": "621561",
                        "total": 31904667
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "680",
                        "total": 34893
                    },
                    "tests": {
                        "1M_pop": "307892",
                        "total": 15804065
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "Europe",
                    "country": "UK",
                    "population": 68497907,
                    "cases": {
                        "new": null,
                        "active": 3456,
                        "critical": null,
                        "recovered": 24388702,
                        "1M_pop": "359404",
                        "total": 24618436
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "3303",
                        "total": 226278
                    },
                    "tests": {
                        "1M_pop": "7628357",
                        "total": 522526476
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "Europe",
                    "country": "Greece",
                    "population": 10316637,
                    "cases": {
                        "new": null,
                        "active": 14302,
                        "critical": 115,
                        "recovered": 6043996,
                        "1M_pop": "590827",
                        "total": 6095350
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "3591",
                        "total": 37052
                    },
                    "tests": {
                        "1M_pop": "9909078",
                        "total": 102228365
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "Europe",
                    "country": "Belgium",
                    "population": 11668278,
                    "cases": {
                        "new": null,
                        "active": 3651,
                        "critical": 43,
                        "recovered": 4762744,
                        "1M_pop": "411437",
                        "total": 4800759
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "2945",
                        "total": 34364
                    },
                    "tests": {
                        "1M_pop": "3172590",
                        "total": 37018657
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "North-America",
                    "country": "Canada",
                    "population": 38388419,
                    "cases": {
                        "new": null,
                        "active": 12868,
                        "critical": 99,
                        "recovered": 4618837,
                        "1M_pop": "122028",
                        "total": 4684456
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "1374",
                        "total": 52751
                    },
                    "tests": {
                        "1M_pop": "1728207",
                        "total": 66343123
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "Europe",
                    "country": "Sweden",
                    "population": 10218971,
                    "cases": {
                        "new": null,
                        "active": 1922,
                        "critical": 8,
                        "recovered": 2685260,
                        "1M_pop": "265357",
                        "total": 2711671
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "2396",
                        "total": 24489
                    },
                    "tests": {
                        "1M_pop": "1908301",
                        "total": 19500873
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "Europe",
                    "country": "Serbia",
                    "population": 8653016,
                    "cases": {
                        "new": null,
                        "active": 1663,
                        "critical": null,
                        "recovered": 2523465,
                        "1M_pop": "293907",
                        "total": 2543185
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "2087",
                        "total": 18057
                    },
                    "tests": {
                        "1M_pop": "1501476",
                        "total": 12992295
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "Europe",
                    "country": "Ireland",
                    "population": 5020199,
                    "cases": {
                        "new": null,
                        "active": 2107,
                        "critical": 19,
                        "recovered": 1702205,
                        "1M_pop": "341289",
                        "total": 1713340
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "1798",
                        "total": 9028
                    },
                    "tests": {
                        "1M_pop": "2606161",
                        "total": 13083449
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "Europe",
                    "country": "Norway",
                    "population": 5511370,
                    "cases": {
                        "new": null,
                        "active": 482,
                        "critical": 20,
                        "recovered": 1479326,
                        "1M_pop": "269509",
                        "total": 1485364
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "1008",
                        "total": 5556
                    },
                    "tests": {
                        "1M_pop": "1996315",
                        "total": 11002430
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "Europe",
                    "country": "Finland",
                    "population": 5554960,
                    "cases": {
                        "new": null,
                        "active": 2080,
                        "critical": 21,
                        "recovered": 1469621,
                        "1M_pop": "266714",
                        "total": 1481587
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "1780",
                        "total": 9886
                    },
                    "tests": {
                        "1M_pop": "2178453",
                        "total": 12101220
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "Europe",
                    "country": "Poland",
                    "population": 37739785,
                    "cases": {
                        "new": "+30",
                        "active": 1062024,
                        "critical": 103,
                        "recovered": 5335940,
                        "1M_pop": "172698",
                        "total": 6517587
                    },
                    "deaths": {
                        "new": "+1",
                        "1M_pop": "3170",
                        "total": 119623
                    },
                    "tests": {
                        "1M_pop": "1027341",
                        "total": 38771646
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "Asia",
                    "country": "Indonesia",
                    "population": 279134505,
                    "cases": {
                        "new": "+114",
                        "active": 9925,
                        "critical": null,
                        "recovered": 6639292,
                        "1M_pop": "24401",
                        "total": 6811057
                    },
                    "deaths": {
                        "new": "+1",
                        "1M_pop": "580",
                        "total": 161840
                    },
                    "tests": {
                        "1M_pop": "408975",
                        "total": 114158919
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "Asia",
                    "country": "Philippines",
                    "population": 112508994,
                    "cases": {
                        "new": "+693",
                        "active": 9005,
                        "critical": 162,
                        "recovered": 4083097,
                        "1M_pop": "36962",
                        "total": 4158584
                    },
                    "deaths": {
                        "new": "+1",
                        "1M_pop": "591",
                        "total": 66482
                    },
                    "tests": {
                        "1M_pop": "314427",
                        "total": 35375878
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "Asia",
                    "country": "Vietnam",
                    "population": 98953541,
                    "cases": {
                        "new": "+251",
                        "active": 936288,
                        "critical": 14,
                        "recovered": 10639773,
                        "1M_pop": "117421",
                        "total": 11619267
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "437",
                        "total": 43206
                    },
                    "tests": {
                        "1M_pop": "867342",
                        "total": 85826548
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "Europe",
                    "country": "Denmark",
                    "population": 5834950,
                    "cases": {
                        "new": "+13",
                        "active": 211,
                        "critical": 4,
                        "recovered": 3173200,
                        "1M_pop": "545360",
                        "total": 3182149
                    },
                    "deaths": {
                        "new": "+1",
                        "1M_pop": "1498",
                        "total": 8738
                    },
                    "tests": {
                        "1M_pop": "22158811",
                        "total": 129295556
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "Europe",
                    "country": "Czechia",
                    "population": 10736784,
                    "cases": {
                        "new": "+21",
                        "active": 405,
                        "critical": 2,
                        "recovered": 4599323,
                        "1M_pop": "432395",
                        "total": 4642535
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "3987",
                        "total": 42807
                    },
                    "tests": {
                        "1M_pop": "5329863",
                        "total": 57225585
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "Europe",
                    "country": "Austria",
                    "population": 9066710,
                    "cases": {
                        "new": "+175",
                        "active": 4252,
                        "critical": 14,
                        "recovered": 6053167,
                        "1M_pop": "670579",
                        "total": 6079942
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "2484",
                        "total": 22523
                    },
                    "tests": {
                        "1M_pop": "23302116",
                        "total": 211273524
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "Oceania",
                    "country": "Oceania",
                    "population": null,
                    "cases": {
                        "new": null,
                        "active": 150041,
                        "critical": 98,
                        "recovered": 14309041,
                        "1M_pop": null,
                        "total": 14487847
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": null,
                        "total": 28765
                    },
                    "tests": {
                        "1M_pop": null,
                        "total": null
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "South-America",
                    "country": "South-America",
                    "population": null,
                    "cases": {
                        "new": "+20",
                        "active": 943465,
                        "critical": 10103,
                        "recovered": 66481081,
                        "1M_pop": null,
                        "total": 68781407
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": null,
                        "total": 1356861
                    },
                    "tests": {
                        "1M_pop": null,
                        "total": null
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "South-America",
                    "country": "Chile",
                    "population": 19250195,
                    "cases": {
                        "new": "+20",
                        "active": 111,
                        "critical": 13,
                        "recovered": 5223415,
                        "1M_pop": "274700",
                        "total": 5288023
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "3350",
                        "total": 64497
                    },
                    "tests": {
                        "1M_pop": "2585359",
                        "total": 49768667
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "Asia",
                    "country": "Asia",
                    "population": null,
                    "cases": {
                        "new": "+1265",
                        "active": 14751321,
                        "critical": 15158,
                        "recovered": 201574870,
                        "1M_pop": null,
                        "total": 217873394
                    },
                    "deaths": {
                        "new": "+2",
                        "1M_pop": null,
                        "total": 1547203
                    },
                    "tests": {
                        "1M_pop": null,
                        "total": null
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "Europe",
                    "country": "Europe",
                    "population": null,
                    "cases": {
                        "new": "+1755",
                        "active": 1888775,
                        "critical": 5604,
                        "recovered": 245645575,
                        "1M_pop": null,
                        "total": 249599044
                    },
                    "deaths": {
                        "new": "+3",
                        "1M_pop": null,
                        "total": 2064694
                    },
                    "tests": {
                        "1M_pop": null,
                        "total": null
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "Africa",
                    "country": "Africa",
                    "population": null,
                    "cases": {
                        "new": "+1",
                        "active": 480957,
                        "critical": 547,
                        "recovered": 12086466,
                        "1M_pop": null,
                        "total": 12826212
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": null,
                        "total": 258789
                    },
                    "tests": {
                        "1M_pop": null,
                        "total": null
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "Europe",
                    "country": "France",
                    "population": 65584518,
                    "cases": {
                        "new": "+1482",
                        "active": 43648,
                        "critical": 869,
                        "recovered": 39912343,
                        "1M_pop": "611784",
                        "total": 40123539
                    },
                    "deaths": {
                        "new": null,
                        "1M_pop": "2555",
                        "total": 167548
                    },
                    "tests": {
                        "1M_pop": "4139547",
                        "total": 271490188
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "North-America",
                    "country": "North-America",
                    "population": null,
                    "cases": {
                        "new": "+1238",
                        "active": 2378882,
                        "critical": 5972,
                        "recovered": 122843544,
                        "1M_pop": null,
                        "total": 126858226
                    },
                    "deaths": {
                        "new": "+3",
                        "1M_pop": null,
                        "total": 1635800
                    },
                    "tests": {
                        "1M_pop": null,
                        "total": null
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "All",
                    "country": "All",
                    "population": null,
                    "cases": {
                        "new": "+4279",
                        "active": 20593441,
                        "critical": 37482,
                        "recovered": 662941283,
                        "1M_pop": "88575",
                        "total": 690426851
                    },
                    "deaths": {
                        "new": "+8",
                        "1M_pop": "884.2",
                        "total": 6892127
                    },
                    "tests": {
                        "1M_pop": null,
                        "total": null
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                },
                {
                    "continent": "North-America",
                    "country": "USA",
                    "population": 334805269,
                    "cases": {
                        "new": "+1213",
                        "active": 677612,
                        "critical": 806,
                        "recovered": 105360791,
                        "1M_pop": "320202",
                        "total": 107205330
                    },
                    "deaths": {
                        "new": "+3",
                        "1M_pop": "3485",
                        "total": 1166927
                    },
                    "tests": {
                        "1M_pop": "3526230",
                        "total": 1180600368
                    },
                    "day": "2023-06-18",
                    "time": "2023-06-18T00:15:04+00:00"
                }
            ]
        };
    }

    public getStatistics(): Observable<Covid19Statistic[]> {
        return of(this.response).pipe(map(result => result.response));
    }
}
