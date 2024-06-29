/* tslint:disable */
/* eslint-disable */
/**
 * OpenAlex
 * ![](https://raw.githubusercontent.com/ourresearch/openalex-docs/main/.gitbook/assets/OpenAlex-logo-5.png)  **OpenAlex** is a fully open catalog of the global research system.  It\'s named after the [ancient Library of Alexandria](https://en.wikipedia.org/wiki/Library_of_Alexandria) and made by the nonprofit [OurResearch](https://ourresearch.org/).  ## OpenAPI Specification  [Mearman/openalex-api-spec](https://github.com/Mearman/openalex-api-spec)  This OpenAPI specification is reverse-engineered and derived from spec generated by [openapi-devtools](https://github.com/AndrewWalsh/openapi-devtools).  The specification document itself is OpenAPI version 3.1 and is generated from TypeScript source code.  [![Open in](https://img.shields.io/badge/Open%20in-Swagger%20UI-85EA2D?style=for-the-badge&logo=Swagger&link=https://mearman.github.io/openalex-swagger-ui-react/)](https://mearman.github.io/openalex-swagger-ui-react/)  **[Releases](https://github.com/Mearman/openalex-api-spec/releases)**  ## Clients  [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white&link=https://github.com/Mearman/openalex-typescript)](https://github.com/Mearman/openalex-typescript)  [![TypeScript Fetch](https://img.shields.io/badge/TypeScript%20Fetch-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white&link=https://github.com/Mearman/openalex-typescript-fetch)](https://github.com/Mearman/openalex-typescript-fetch)  [![TypeScript Node](https://img.shields.io/badge/TypeScript%20Node-339933?style=for-the-badge&logo=Node.js&logoColor=white&link=https://github.com/Mearman/openalex-typescript-node)](https://github.com/Mearman/openalex-typescript-node)  [![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=white&link=https://github.com/Mearman/openalex-python)](https://github.com/Mearman/openalex-python) [![Open in](https://img.shields.io/badge/Open%20in-CodeSpaces-181717?style=for-the-badge&logo=GitHub&link=https://codespaces.new/Mearman/openalex-python)](https://codespaces.new/Mearman/openalex-python) [![Open in](https://img.shields.io/badge/Open%20in-Colab-F9AB00?style=for-the-badge&logo=Google%20Colab&link=https://colab.research.google.com/github/Mearman/openalex-python/blob/main/README.ipynb)](https://colab.research.google.com/github/Mearman/openalex-python/blob/main/README.ipynb)  ---
 *
 * The version of the OpenAPI document: 0.2.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Geo } from './Geo';
import {
    GeoFromJSON,
    GeoFromJSONTyped,
    GeoToJSON,
} from './Geo';
import type { Ids } from './Ids';
import {
    IdsFromJSON,
    IdsFromJSONTyped,
    IdsToJSON,
} from './Ids';
import type { InternationalDisplayName } from './InternationalDisplayName';
import {
    InternationalDisplayNameFromJSON,
    InternationalDisplayNameFromJSONTyped,
    InternationalDisplayNameToJSON,
} from './InternationalDisplayName';
import type { SummaryStats } from './SummaryStats';
import {
    SummaryStatsFromJSON,
    SummaryStatsFromJSONTyped,
    SummaryStatsToJSON,
} from './SummaryStats';

/**
 * 
 * @export
 * @interface Institution
 */
export interface Institution {
    /**
     * 
     * @type {any}
     * @memberof Institution
     */
    associatedInstitutions?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Institution
     */
    citedByCount?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Institution
     */
    countryCode?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Institution
     */
    countsByYear?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Institution
     */
    createdDate?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Institution
     */
    displayName: any | null;
    /**
     * 
     * @type {any}
     * @memberof Institution
     */
    displayNameAcronyms?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Institution
     */
    displayNameAlternatives?: any | null;
    /**
     * 
     * @type {Geo}
     * @memberof Institution
     */
    geo?: Geo;
    /**
     * 
     * @type {any}
     * @memberof Institution
     */
    homepageUrl?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Institution
     */
    id: any | null;
    /**
     * 
     * @type {Ids}
     * @memberof Institution
     */
    ids?: Ids;
    /**
     * 
     * @type {any}
     * @memberof Institution
     */
    imageThumbnailUrl?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Institution
     */
    imageUrl?: any | null;
    /**
     * 
     * @type {InternationalDisplayName}
     * @memberof Institution
     */
    international?: InternationalDisplayName;
    /**
     * 
     * @type {any}
     * @memberof Institution
     */
    lineage?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Institution
     */
    repositories?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Institution
     */
    roles?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Institution
     */
    ror?: any | null;
    /**
     * 
     * @type {SummaryStats}
     * @memberof Institution
     */
    summaryStats?: SummaryStats;
    /**
     * 
     * @type {any}
     * @memberof Institution
     */
    type?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Institution
     */
    updatedDate?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Institution
     */
    worksApiUrl?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Institution
     */
    worksCount?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Institution
     */
    xConcepts?: any | null;
}

/**
 * Check if a given object implements the Institution interface.
 */
export function instanceOfInstitution(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "displayName" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function InstitutionFromJSON(json: any): Institution {
    return InstitutionFromJSONTyped(json, false);
}

export function InstitutionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Institution {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'associatedInstitutions': !exists(json, 'associated_institutions') ? undefined : json['associated_institutions'],
        'citedByCount': !exists(json, 'cited_by_count') ? undefined : json['cited_by_count'],
        'countryCode': !exists(json, 'country_code') ? undefined : json['country_code'],
        'countsByYear': !exists(json, 'counts_by_year') ? undefined : json['counts_by_year'],
        'createdDate': !exists(json, 'created_date') ? undefined : json['created_date'],
        'displayName': json['display_name'],
        'displayNameAcronyms': !exists(json, 'display_name_acronyms') ? undefined : json['display_name_acronyms'],
        'displayNameAlternatives': !exists(json, 'display_name_alternatives') ? undefined : json['display_name_alternatives'],
        'geo': !exists(json, 'geo') ? undefined : GeoFromJSON(json['geo']),
        'homepageUrl': !exists(json, 'homepage_url') ? undefined : json['homepage_url'],
        'id': json['id'],
        'ids': !exists(json, 'ids') ? undefined : IdsFromJSON(json['ids']),
        'imageThumbnailUrl': !exists(json, 'image_thumbnail_url') ? undefined : json['image_thumbnail_url'],
        'imageUrl': !exists(json, 'image_url') ? undefined : json['image_url'],
        'international': !exists(json, 'international') ? undefined : InternationalDisplayNameFromJSON(json['international']),
        'lineage': !exists(json, 'lineage') ? undefined : json['lineage'],
        'repositories': !exists(json, 'repositories') ? undefined : json['repositories'],
        'roles': !exists(json, 'roles') ? undefined : json['roles'],
        'ror': !exists(json, 'ror') ? undefined : json['ror'],
        'summaryStats': !exists(json, 'summary_stats') ? undefined : SummaryStatsFromJSON(json['summary_stats']),
        'type': !exists(json, 'type') ? undefined : json['type'],
        'updatedDate': !exists(json, 'updated_date') ? undefined : json['updated_date'],
        'worksApiUrl': !exists(json, 'works_api_url') ? undefined : json['works_api_url'],
        'worksCount': !exists(json, 'works_count') ? undefined : json['works_count'],
        'xConcepts': !exists(json, 'x_concepts') ? undefined : json['x_concepts'],
    };
}

export function InstitutionToJSON(value?: Institution | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'associated_institutions': value.associatedInstitutions,
        'cited_by_count': value.citedByCount,
        'country_code': value.countryCode,
        'counts_by_year': value.countsByYear,
        'created_date': value.createdDate,
        'display_name': value.displayName,
        'display_name_acronyms': value.displayNameAcronyms,
        'display_name_alternatives': value.displayNameAlternatives,
        'geo': GeoToJSON(value.geo),
        'homepage_url': value.homepageUrl,
        'id': value.id,
        'ids': IdsToJSON(value.ids),
        'image_thumbnail_url': value.imageThumbnailUrl,
        'image_url': value.imageUrl,
        'international': InternationalDisplayNameToJSON(value.international),
        'lineage': value.lineage,
        'repositories': value.repositories,
        'roles': value.roles,
        'ror': value.ror,
        'summary_stats': SummaryStatsToJSON(value.summaryStats),
        'type': value.type,
        'updated_date': value.updatedDate,
        'works_api_url': value.worksApiUrl,
        'works_count': value.worksCount,
        'x_concepts': value.xConcepts,
    };
}

