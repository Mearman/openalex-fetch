/* tslint:disable */
/* eslint-disable */
/**
 * OpenAlex
 * ![](https://raw.githubusercontent.com/ourresearch/openalex-docs/main/.gitbook/assets/OpenAlex-logo-5.png)  **OpenAlex** is a fully open catalog of the global research system.  It\'s named after the [ancient Library of Alexandria](https://en.wikipedia.org/wiki/Library_of_Alexandria) and made by the nonprofit [OurResearch](https://ourresearch.org/).  ## OpenAPI Specification  [Mearman/openalex-api-spec](https://github.com/Mearman/openalex-api-spec)  This OpenAPI specification is reverse-engineered and derived from spec generated by [openapi-devtools](https://github.com/AndrewWalsh/openapi-devtools).  The specification document itself is OpenAPI version 3.1 and is generated from TypeScript source code.  **[Releases](https://github.com/Mearman/openalex-api-spec/releases)**  ## Clients  [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white&link=https://github.com/Mearman/openalex-typescript)](https://github.com/Mearman/openalex-typescript)  [![TypeScript Fetch](https://img.shields.io/badge/TypeScript%20Fetch-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white&link=https://github.com/Mearman/openalex-typescript-fetch)](https://github.com/Mearman/openalex-typescript-fetch)  [![TypeScript Node](https://img.shields.io/badge/TypeScript%20Node-339933?style=for-the-badge&logo=Node.js&logoColor=white&link=https://github.com/Mearman/openalex-typescript-node)](https://github.com/Mearman/openalex-typescript-node)  [![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=white&link=https://github.com/Mearman/openalex-python)](https://github.com/Mearman/openalex-python) [![Open in](https://img.shields.io/badge/Open%20in-CodeSpaces-181717?style=for-the-badge&logo=GitHub&link=https://codespaces.new/Mearman/openalex-python)](https://codespaces.new/Mearman/openalex-python) [![Open in](https://img.shields.io/badge/Open%20in-Colab-F9AB00?style=for-the-badge&logo=Google%20Colab&link=https://colab.research.google.com/github/Mearman/openalex-python/blob/main/README.ipynb)](https://colab.research.google.com/github/Mearman/openalex-python/blob/main/README.ipynb)  ---
 *
 * The version of the OpenAPI document: 0.0.7
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AutoCompleteResultSchema,
  Concept,
  ConceptsResponseSchema,
  ErrorMessage,
} from '../models/index';
import {
    AutoCompleteResultSchemaFromJSON,
    AutoCompleteResultSchemaToJSON,
    ConceptFromJSON,
    ConceptToJSON,
    ConceptsResponseSchemaFromJSON,
    ConceptsResponseSchemaToJSON,
    ErrorMessageFromJSON,
    ErrorMessageToJSON,
} from '../models/index';

export interface GetAutocompleteConceptsRequest {
    q?: string;
    userAgent?: any;
    mailto?: any;
}

export interface GetConceptRequest {
    id: any;
    select?: string;
    userAgent?: any;
    mailto?: any;
}

export interface GetConceptsRequest {
    apiKey?: string;
    cursor?: string;
    filter?: string;
    groupBy?: string;
    page?: number;
    perPage?: number;
    sample?: number;
    search?: string;
    seed?: any;
    select?: string;
    sort?: string;
    userAgent?: any;
    mailto?: any;
}

/**
 * 
 */
export class ConceptsApi extends runtime.BaseAPI {

    /**
     * 
     * /autocomplete/concepts
     */
    async getAutocompleteConceptsRaw(requestParameters: GetAutocompleteConceptsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AutoCompleteResultSchema>> {
        const queryParameters: any = {};

        if (requestParameters.q !== undefined) {
            queryParameters['q'] = requestParameters.q;
        }

        if (requestParameters.mailto !== undefined) {
            queryParameters['mailto'] = requestParameters.mailto;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.userAgent !== undefined && requestParameters.userAgent !== null) {
            headerParameters['User-Agent'] = String(requestParameters.userAgent);
        }

        const response = await this.request({
            path: `/autocomplete/concepts`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AutoCompleteResultSchemaFromJSON(jsonValue));
    }

    /**
     * 
     * /autocomplete/concepts
     */
    async getAutocompleteConcepts(requestParameters: GetAutocompleteConceptsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AutoCompleteResultSchema> {
        const response = await this.getAutocompleteConceptsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a single concept
     * /concepts/{id}
     */
    async getConceptRaw(requestParameters: GetConceptRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Concept>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getConcept.');
        }

        const queryParameters: any = {};

        if (requestParameters.select !== undefined) {
            queryParameters['select'] = requestParameters.select;
        }

        if (requestParameters.mailto !== undefined) {
            queryParameters['mailto'] = requestParameters.mailto;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.userAgent !== undefined && requestParameters.userAgent !== null) {
            headerParameters['User-Agent'] = String(requestParameters.userAgent);
        }

        const response = await this.request({
            path: `/concepts/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConceptFromJSON(jsonValue));
    }

    /**
     * Get a single concept
     * /concepts/{id}
     */
    async getConcept(requestParameters: GetConceptRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Concept> {
        const response = await this.getConceptRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * /concepts
     */
    async getConceptsRaw(requestParameters: GetConceptsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConceptsResponseSchema>> {
        const queryParameters: any = {};

        if (requestParameters.apiKey !== undefined) {
            queryParameters['api_key'] = requestParameters.apiKey;
        }

        if (requestParameters.cursor !== undefined) {
            queryParameters['cursor'] = requestParameters.cursor;
        }

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        if (requestParameters.groupBy !== undefined) {
            queryParameters['group_by'] = requestParameters.groupBy;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.perPage !== undefined) {
            queryParameters['per_page'] = requestParameters.perPage;
        }

        if (requestParameters.sample !== undefined) {
            queryParameters['sample'] = requestParameters.sample;
        }

        if (requestParameters.search !== undefined) {
            queryParameters['search'] = requestParameters.search;
        }

        if (requestParameters.seed !== undefined) {
            queryParameters['seed'] = requestParameters.seed;
        }

        if (requestParameters.select !== undefined) {
            queryParameters['select'] = requestParameters.select;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.mailto !== undefined) {
            queryParameters['mailto'] = requestParameters.mailto;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.userAgent !== undefined && requestParameters.userAgent !== null) {
            headerParameters['User-Agent'] = String(requestParameters.userAgent);
        }

        const response = await this.request({
            path: `/concepts`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConceptsResponseSchemaFromJSON(jsonValue));
    }

    /**
     * 
     * /concepts
     */
    async getConcepts(requestParameters: GetConceptsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConceptsResponseSchema> {
        const response = await this.getConceptsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
