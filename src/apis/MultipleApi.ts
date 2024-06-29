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


import * as runtime from '../runtime';
import type {
  Concepts,
  Domain,
  ErrorMessage,
  Field,
  Subfield,
  Topics,
} from '../models/index';
import {
    ConceptsFromJSON,
    ConceptsToJSON,
    DomainFromJSON,
    DomainToJSON,
    ErrorMessageFromJSON,
    ErrorMessageToJSON,
    FieldFromJSON,
    FieldToJSON,
    SubfieldFromJSON,
    SubfieldToJSON,
    TopicsFromJSON,
    TopicsToJSON,
} from '../models/index';

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

export interface GetDomainByIdRequest {
    id: any;
    perPage?: number;
    userAgent?: any;
    mailto?: any;
}

export interface GetFieldByIdRequest {
    id: any;
    perPage?: number;
    userAgent?: any;
    mailto?: any;
}

export interface GetSubfieldByIdRequest {
    id: any;
    perPage?: number;
    userAgent?: any;
    mailto?: any;
}

export interface GetTopicsRequest {
    sort?: string;
    perPage?: number;
    page?: any;
    sample?: any;
    select?: string;
    filter?: string;
    search?: string;
    groupBy?: string;
    userAgent?: any;
    mailto?: any;
}

/**
 * MultipleApi - interface
 * 
 * @export
 * @interface MultipleApiInterface
 */
export interface MultipleApiInterface {
    /**
     * 
     * @summary /concepts
     * @param {string} [apiKey] 
     * @param {string} [cursor] 
     * @param {string} [filter] 
     * @param {string} [groupBy] 
     * @param {number} [page] 
     * @param {number} [perPage] 
     * @param {number} [sample] 
     * @param {string} [search] 
     * @param {any} [seed] 
     * @param {string} [select] 
     * @param {string} [sort] 
     * @param {any} [userAgent] [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param {any} [mailto] The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MultipleApiInterface
     */
    getConceptsRaw(requestParameters: GetConceptsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Concepts>>;

    /**
     * 
     * /concepts
     */
    getConcepts(requestParameters: GetConceptsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Concepts>;

    /**
     * 
     * @summary /domains/{id}
     * @param {any} id 
     * @param {number} [perPage] 
     * @param {any} [userAgent] [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param {any} [mailto] The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MultipleApiInterface
     */
    getDomainByIdRaw(requestParameters: GetDomainByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Domain>>;

    /**
     * 
     * /domains/{id}
     */
    getDomainById(requestParameters: GetDomainByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Domain>;

    /**
     * 
     * @summary /fields/{id}
     * @param {any} id 
     * @param {number} [perPage] 
     * @param {any} [userAgent] [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param {any} [mailto] The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MultipleApiInterface
     */
    getFieldByIdRaw(requestParameters: GetFieldByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Field>>;

    /**
     * 
     * /fields/{id}
     */
    getFieldById(requestParameters: GetFieldByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Field>;

    /**
     * 
     * @summary /subfields/{id}
     * @param {any} id 
     * @param {number} [perPage] 
     * @param {any} [userAgent] [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param {any} [mailto] The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MultipleApiInterface
     */
    getSubfieldByIdRaw(requestParameters: GetSubfieldByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Subfield>>;

    /**
     * 
     * /subfields/{id}
     */
    getSubfieldById(requestParameters: GetSubfieldByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Subfield>;

    /**
     * 
     * @summary /topics
     * @param {string} [sort] 
     * @param {number} [perPage] 
     * @param {any} [page] 
     * @param {any} [sample] 
     * @param {string} [select] 
     * @param {string} [filter] 
     * @param {string} [search] 
     * @param {string} [groupBy] 
     * @param {any} [userAgent] [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)
     * @param {any} [mailto] The API is the primary way to get OpenAlex data. It\&#39;s free and requires no authentication. The daily limit for API calls is 100,000 requests per user per day. For best performance, add your email to all API requests The email can be either in the query string, like &#x60;mailto:example@domain.com&#x60;, or in the User-Agent request header, like &#x60;User-Agent: my-app (mailto:example@domain.com)&#x60;. Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MultipleApiInterface
     */
    getTopicsRaw(requestParameters: GetTopicsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Topics>>;

    /**
     * 
     * /topics
     */
    getTopics(requestParameters: GetTopicsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Topics>;

}

/**
 * 
 */
export class MultipleApi extends runtime.BaseAPI implements MultipleApiInterface {

    /**
     * 
     * /concepts
     */
    async getConceptsRaw(requestParameters: GetConceptsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Concepts>> {
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

        return new runtime.JSONApiResponse(response, (jsonValue) => ConceptsFromJSON(jsonValue));
    }

    /**
     * 
     * /concepts
     */
    async getConcepts(requestParameters: GetConceptsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Concepts> {
        const response = await this.getConceptsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * /domains/{id}
     */
    async getDomainByIdRaw(requestParameters: GetDomainByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Domain>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getDomainById.');
        }

        const queryParameters: any = {};

        if (requestParameters.perPage !== undefined) {
            queryParameters['per_page'] = requestParameters.perPage;
        }

        if (requestParameters.mailto !== undefined) {
            queryParameters['mailto'] = requestParameters.mailto;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.userAgent !== undefined && requestParameters.userAgent !== null) {
            headerParameters['User-Agent'] = String(requestParameters.userAgent);
        }

        const response = await this.request({
            path: `/domains/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainFromJSON(jsonValue));
    }

    /**
     * 
     * /domains/{id}
     */
    async getDomainById(requestParameters: GetDomainByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Domain> {
        const response = await this.getDomainByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * /fields/{id}
     */
    async getFieldByIdRaw(requestParameters: GetFieldByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Field>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getFieldById.');
        }

        const queryParameters: any = {};

        if (requestParameters.perPage !== undefined) {
            queryParameters['per_page'] = requestParameters.perPage;
        }

        if (requestParameters.mailto !== undefined) {
            queryParameters['mailto'] = requestParameters.mailto;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.userAgent !== undefined && requestParameters.userAgent !== null) {
            headerParameters['User-Agent'] = String(requestParameters.userAgent);
        }

        const response = await this.request({
            path: `/field/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FieldFromJSON(jsonValue));
    }

    /**
     * 
     * /fields/{id}
     */
    async getFieldById(requestParameters: GetFieldByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Field> {
        const response = await this.getFieldByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * /subfields/{id}
     */
    async getSubfieldByIdRaw(requestParameters: GetSubfieldByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Subfield>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getSubfieldById.');
        }

        const queryParameters: any = {};

        if (requestParameters.perPage !== undefined) {
            queryParameters['per_page'] = requestParameters.perPage;
        }

        if (requestParameters.mailto !== undefined) {
            queryParameters['mailto'] = requestParameters.mailto;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.userAgent !== undefined && requestParameters.userAgent !== null) {
            headerParameters['User-Agent'] = String(requestParameters.userAgent);
        }

        const response = await this.request({
            path: `/subfields/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubfieldFromJSON(jsonValue));
    }

    /**
     * 
     * /subfields/{id}
     */
    async getSubfieldById(requestParameters: GetSubfieldByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Subfield> {
        const response = await this.getSubfieldByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * /topics
     */
    async getTopicsRaw(requestParameters: GetTopicsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Topics>> {
        const queryParameters: any = {};

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.perPage !== undefined) {
            queryParameters['per_page'] = requestParameters.perPage;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.sample !== undefined) {
            queryParameters['sample'] = requestParameters.sample;
        }

        if (requestParameters.select !== undefined) {
            queryParameters['select'] = requestParameters.select;
        }

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        if (requestParameters.search !== undefined) {
            queryParameters['search'] = requestParameters.search;
        }

        if (requestParameters.groupBy !== undefined) {
            queryParameters['group_by'] = requestParameters.groupBy;
        }

        if (requestParameters.mailto !== undefined) {
            queryParameters['mailto'] = requestParameters.mailto;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.userAgent !== undefined && requestParameters.userAgent !== null) {
            headerParameters['User-Agent'] = String(requestParameters.userAgent);
        }

        const response = await this.request({
            path: `/topics`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TopicsFromJSON(jsonValue));
    }

    /**
     * 
     * /topics
     */
    async getTopics(requestParameters: GetTopicsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Topics> {
        const response = await this.getTopicsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
