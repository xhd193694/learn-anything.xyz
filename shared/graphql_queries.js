/*

This file is generated by `bun graphql` command. Do not edit it manually.
To regenerate this file, run `bun graphql`.

*/

/** @typedef {string     } String */
/** @typedef {string & {}} ID */
/** @typedef {number     } Int */
/** @typedef {number     } Float */
/** @typedef {boolean    } Boolean */

/**
 * @template T
 * @typedef {T | null} Maybe
 */

/**
 * @template TVars
 * @callback Query_Get_Body
 * @param   {TVars} vars
 * @returns {string}
 */

/**
 * @enum {(typeof Operation_Kind)[keyof typeof Operation_Kind]} */
export const Operation_Kind = /** @type {const} */({
	Query   : "query",
	Mutation: "mutation",
})

/**
 * @template TVars
 * @template TValue
 * @typedef  {object               } Query_Data
 * @property {string               } name
 * @property {Operation_Kind       } kind
 * @property {Query_Get_Body<TVars>} get_body
 * @property {TValue               } initial_value
 * @property {TVars                } _type_vars
 * @property {TValue               } _type_value
 */

/**
 * @typedef  {Object} Query_Location
 * @property {Int} column
 * @property {Int} line
 */

class Query_Error extends Error {
	/**
	 * @param {string          } message
	 * @param {Query_Location[]} locations
	 */
	constructor(message, locations) {
		super(message)
		this.locations = locations
	}
}
class Fetch_Error extends Error {
	/**
	 * @param {string} message
	 */
	constructor(message) {super(message)}
}

/**
 * @typedef  {object} Raw_Request_Result
 * @property {any   } data
 * @property {(Query_Error | Fetch_Error)[]} errors
 */

/** @typedef {RequestInit} Request_Init */

/**
 * @param   {Request_Init       } request_init `RequestInit` object to modify
 * @param   {string             } query        GraphQL query string
 * @returns {void} */
export function request_init_init(request_init, query) {
	request_init.method  ??= "POST"
	request_init.headers ??= {"Content-Type": "application/json"}
	request_init.body      = '{"query":'+JSON.stringify(query)+'}'
}


/**
 * @param   {string} query
 * @returns {string} */
export function query_to_requestinit_body(query) {
	return '{"query":'+JSON.stringify(query)+'}'
}

/**
 * @param   {string | URL | Request} url
 * @param   {Request_Init          } request_init
 * @returns {Promise<Raw_Request_Result>} */
export async function raw_request(url, request_init) {
	try {
		const res  = await fetch(url, request_init)
		const json = await res.json()

		if (Array.isArray(json.errors)) {
			for (let i = 0; i < json.errors.length; i++) {
				const err = json.errors[i]
				json.errors[i] = new Query_Error(err.message, err.locations)
			}
		}
		return json
	} catch (err) {
		if (err instanceof Error) {
			err = new Fetch_Error(err.message)
		} else if (typeof err === "string") {
			err = new Fetch_Error(err)
		} else {
			err = new Fetch_Error("Unknown error")
		}
		return {data: null, errors: [/** @type {*} */(err)]}
	}
}

/*

TYPES:

*/

/**
 * @enum {(typeof learningStatus)[keyof typeof learningStatus]} */
export const learningStatus = /** @type {const} */({
	Learn: "Learn",
	Learning: "Learning",
	Learned: "Learned",
})

/**
 * Initial value: {@link initial_User}
 *
 * @typedef  {object} User
 * @property {String} name
 */
/** @type {User} */
export const initial_User = {
	name: "",
}

/**
 * Initial value: {@link initial_webIndexOutput}
 *
 * @typedef  {object} webIndexOutput
 * @property {User} user
 */
/** @type {webIndexOutput} */
export const initial_webIndexOutput = {
	user: initial_User,
}

/*

QUERIES:

*/


/**
 * @typedef  {object} Vars_webIndex
 *
 * @typedef  {webIndexOutput} Value_webIndex
 */

/**
 * @param   {Vars_webIndex} vars
 * @returns {string} */
export function query_get_body_webIndex(vars) {
	return 'webIndex{user{name}}'
}

/**
 * query: `webIndex`\
 * vars : {@link Vars_webIndex }\
 * value: {@link Value_webIndex}
 * @type  {Query_Data<Vars_webIndex, Value_webIndex>}
 */
export const query_webIndex = /** @type {*} */({
	name         : "webIndex",
	kind         : "query",
	get_body     : query_get_body_webIndex,
	initial_value: initial_webIndexOutput,
})

/*

MUTATIONS:

*/


/**
 * @typedef  {object} Vars_updatePersonalLink
 * @property {String} linkId
 * @property {learningStatus} status
 *
 * @typedef  {Boolean} Value_updatePersonalLink
 */

/**
 * @param   {Vars_updatePersonalLink} vars
 * @returns {string} */
export function query_get_body_updatePersonalLink(vars) {
	return 'updatePersonalLink(linkId:'+JSON.stringify(vars.linkId)+' status:'+JSON.stringify(vars.status)+')'
}

/**
 * mutation: `updatePersonalLink`\
 * vars : {@link Vars_updatePersonalLink }\
 * value: {@link Value_updatePersonalLink}
 * @type  {Query_Data<Vars_updatePersonalLink, Value_updatePersonalLink>}
 */
export const mutation_updatePersonalLink = /** @type {*} */({
	name         : "updatePersonalLink",
	kind         : "mutation",
	get_body     : query_get_body_updatePersonalLink,
	initial_value: false,
})
