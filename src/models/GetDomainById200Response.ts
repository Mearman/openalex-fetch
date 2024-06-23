/* tslint:disable */
/* eslint-disable */
/**
 * OpenAlex
 * ![](https://raw.githubusercontent.com/ourresearch/openalex-docs/main/.gitbook/assets/OpenAlex-logo-5.png)  **OpenAlex** is a fully open catalog of the global research system.  It\'s named after the [ancient Library of Alexandria](https://en.wikipedia.org/wiki/Library_of_Alexandria) and made by the nonprofit [OurResearch](https://ourresearch.org/).  ## OpenAPI Specification  [Mearman/openalex-api-spec](https://github.com/Mearman/openalex-api-spec)  This OpenAPI specification is reverse-engineered and derived from spec generated by [openapi-devtools](https://github.com/AndrewWalsh/openapi-devtools).  The specification document itself is OpenAPI version 3.1 and is generated from TypeScript source code.  [![Open in](https://img.shields.io/badge/Open%20in-Swagger%20UI-85EA2D?style=for-the-badge&logo=Swagger&link=https://mearman.github.io/openalex-swagger-ui-react/)](https://mearman.github.io/openalex-swagger-ui-react/)  **[Releases](https://github.com/Mearman/openalex-api-spec/releases)**  ## Clients  [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white&link=https://github.com/Mearman/openalex-typescript)](https://github.com/Mearman/openalex-typescript)  [![TypeScript Fetch](https://img.shields.io/badge/TypeScript%20Fetch-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white&link=https://github.com/Mearman/openalex-typescript-fetch)](https://github.com/Mearman/openalex-typescript-fetch)  [![TypeScript Node](https://img.shields.io/badge/TypeScript%20Node-339933?style=for-the-badge&logo=Node.js&logoColor=white&link=https://github.com/Mearman/openalex-typescript-node)](https://github.com/Mearman/openalex-typescript-node)  [![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=white&link=https://github.com/Mearman/openalex-python)](https://github.com/Mearman/openalex-python) [![Open in](https://img.shields.io/badge/Open%20in-CodeSpaces-181717?style=for-the-badge&logo=GitHub&link=https://codespaces.new/Mearman/openalex-python)](https://codespaces.new/Mearman/openalex-python) [![Open in](https://img.shields.io/badge/Open%20in-Colab-F9AB00?style=for-the-badge&logo=Google%20Colab&link=https://colab.research.google.com/github/Mearman/openalex-python/blob/main/README.ipynb)](https://colab.research.google.com/github/Mearman/openalex-python/blob/main/README.ipynb)  ---
 *
 * The version of the OpenAPI document: 0.2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Ids } from './Ids';
import {
    IdsFromJSON,
    IdsFromJSONTyped,
    IdsToJSON,
} from './Ids';
import type { TopicLevelArraySchema } from './TopicLevelArraySchema';
import {
    TopicLevelArraySchemaFromJSON,
    TopicLevelArraySchemaFromJSONTyped,
    TopicLevelArraySchemaToJSON,
} from './TopicLevelArraySchema';

/**
 * 
 * @export
 * @interface GetDomainById200Response
 */
export interface GetDomainById200Response {
    /**
     * 
     * @type {any}
     * @memberof GetDomainById200Response
     */
    citedByCount: any | null;
    /**
     * 
     * @type {any}
     * @memberof GetDomainById200Response
     */
    createdDate: any | null;
    /**
     * 
     * @type {any}
     * @memberof GetDomainById200Response
     */
    description: any | null;
    /**
     * 
     * @type {any}
     * @memberof GetDomainById200Response
     */
    displayName: any | null;
    /**
     * 
     * @type {any}
     * @memberof GetDomainById200Response
     */
    displayNameAlternatives: any | null;
    /**
     * 
     * @type {TopicLevelArraySchema}
     * @memberof GetDomainById200Response
     */
    fields: TopicLevelArraySchema;
    /**
     * 
     * @type {any}
     * @memberof GetDomainById200Response
     */
    id: any | null;
    /**
     * 
     * @type {Ids}
     * @memberof GetDomainById200Response
     */
    ids: Ids;
    /**
     * 
     * @type {TopicLevelArraySchema}
     * @memberof GetDomainById200Response
     */
    siblings: TopicLevelArraySchema;
    /**
     * 
     * @type {any}
     * @memberof GetDomainById200Response
     */
    updatedDate: any | null;
    /**
     * 
     * @type {any}
     * @memberof GetDomainById200Response
     */
    worksApiUrl: any | null;
    /**
     * 
     * @type {any}
     * @memberof GetDomainById200Response
     */
    worksCount: any | null;
}

/**
 * Check if a given object implements the GetDomainById200Response interface.
 */
export function instanceOfGetDomainById200Response(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "citedByCount" in value;
    isInstance = isInstance && "createdDate" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "displayName" in value;
    isInstance = isInstance && "displayNameAlternatives" in value;
    isInstance = isInstance && "fields" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "ids" in value;
    isInstance = isInstance && "siblings" in value;
    isInstance = isInstance && "updatedDate" in value;
    isInstance = isInstance && "worksApiUrl" in value;
    isInstance = isInstance && "worksCount" in value;

    return isInstance;
}

export function GetDomainById200ResponseFromJSON(json: any): GetDomainById200Response {
    return GetDomainById200ResponseFromJSONTyped(json, false);
}

export function GetDomainById200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetDomainById200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'citedByCount': json['cited_by_count'],
        'createdDate': json['created_date'],
        'description': json['description'],
        'displayName': json['display_name'],
        'displayNameAlternatives': json['display_name_alternatives'],
        'fields': TopicLevelArraySchemaFromJSON(json['fields']),
        'id': json['id'],
        'ids': IdsFromJSON(json['ids']),
        'siblings': TopicLevelArraySchemaFromJSON(json['siblings']),
        'updatedDate': json['updated_date'],
        'worksApiUrl': json['works_api_url'],
        'worksCount': json['works_count'],
    };
}

export function GetDomainById200ResponseToJSON(value?: GetDomainById200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cited_by_count': value.citedByCount,
        'created_date': value.createdDate,
        'description': value.description,
        'display_name': value.displayName,
        'display_name_alternatives': value.displayNameAlternatives,
        'fields': TopicLevelArraySchemaToJSON(value.fields),
        'id': value.id,
        'ids': IdsToJSON(value.ids),
        'siblings': TopicLevelArraySchemaToJSON(value.siblings),
        'updated_date': value.updatedDate,
        'works_api_url': value.worksApiUrl,
        'works_count': value.worksCount,
    };
}

