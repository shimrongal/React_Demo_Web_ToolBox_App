'use strict';

var ES = require('../').ES2015;
var boundES = require('./helpers/createBoundESNamespace')(ES);

var ops = require('../operations/2015');

var expectedMissing = [
	'AddRestrictedFunctionProperties',
	'AllocateArrayBuffer',
	'AllocateTypedArray',
	'BoundFunctionCreate',
	'Canonicalize',
	'CharacterRange',
	'CharacterSetMatcher',
	'CloneArrayBuffer',
	'Completion',
	'Construct',
	'CopyDataBlockBytes',
	'CreateArrayFromList',
	'CreateArrayIterator',
	'CreateBuiltinFunction',
	'CreateByteDataBlock',
	'CreateDynamicFunction',
	'CreateIntrinsics',
	'CreateListIterator',
	'CreateMapIterator',
	'CreateMappedArgumentsObject',
	'CreatePerIterationEnvironment',
	'CreateRealm',
	'CreateSetIterator',
	'CreateUnmappedArgumentsObject',
	'DaylightSavingTA',
	'Decode',
	'DetachArrayBuffer',
	'Encode',
	'EnqueueJob',
	'EscapeRegExpPattern',
	'EvalDeclarationInstantiation',
	'EvaluateCall',
	'EvaluateDirectCall',
	'EvaluateNew',
	'ForBodyEvaluation',
	'ForIn/OfBodyEvaluation',
	'ForIn/OfHeadEvaluation',
	'FulfillPromise',
	'FunctionAllocate',
	'FunctionCreate',
	'FunctionInitialize',
	'GeneratorFunctionCreate',
	'GeneratorResume',
	'GeneratorResumeAbrupt',
	'GeneratorStart',
	'GeneratorValidate',
	'GeneratorYield',
	'GetBase',
	'GetFunctionRealm',
	'GetGlobalObject',
	'GetIdentifierReference',
	'GetModuleNamespace',
	'GetNewTarget',
	'GetReferencedName',
	'GetSuperConstructor',
	'GetTemplateObject',
	'GetThisEnvironment',
	'GetThisValue',
	'GetValue',
	'GetValueFromBuffer',
	'GetViewValue',
	'HasPrimitiveBase',
	'HostResolveImportedModule',
	'ImportedLocalNames',
	'InitializeHostDefinedRealm',
	'InitializeReferencedBinding',
	'IntegerIndexedElementGet',
	'IntegerIndexedElementSet',
	'IntegerIndexedObjectCreate',
	'InternalizeJSONProperty',
	'IsAnonymousFunctionDefinition',
	'IsCompatiblePropertyDescriptor',
	'IsDetachedBuffer',
	'IsInTailPosition',
	'IsLabelledFunction',
	'IsPropertyReference',
	'IsStrictReference',
	'IsSuperReference',
	'IsUnresolvableReference',
	'IsWordChar',
	'LocalTime',
	'LoopContinues',
	'MakeArgGetter',
	'MakeArgSetter',
	'MakeClassConstructor',
	'MakeConstructor',
	'MakeMethod',
	'MakeSuperPropertyReference',
	'max',
	'min',
	'ModuleNamespaceCreate',
	'msPerDay', // constant
	'NewDeclarativeEnvironment',
	'NewFunctionEnvironment',
	'NewGlobalEnvironment',
	'NewModuleEnvironment',
	'NewObjectEnvironment',
	'NewPromiseCapability',
	'NormalCompletion',
	'ObjectDefineProperties',
	'OrdinaryCallBindThis',
	'OrdinaryCallEvaluateBody',
	'ParseModule',
	'PerformEval',
	'PerformPromiseAll',
	'PerformPromiseRace',
	'PerformPromiseThen',
	'PrepareForOrdinaryCall',
	'PrepareForTailCall',
	'ProxyCreate',
	'PutValue', // takes a Reference
	'RegExpAlloc', // creates a regex with uninitialized internal lots
	'RegExpBuiltinExec',
	'RegExpInitialize', // initializes allocated regex's internal slots
	'RejectPromise',
	'RepeatMatcher',
	'ResolveBinding',
	'ResolveThisBinding',
	'SerializeJSONArray',
	'SerializeJSONObject',
	'SerializeJSONProperty',
	'SetDefaultGlobalBindings',
	'SetRealmGlobalObject',
	'SetValueInBuffer',
	'SetViewValue',
	'sign',
	'SortCompare', // mystery access to `comparefn` arg
	'TriggerPromiseReactions',
	'TypedArrayFrom',
	'UpdateEmpty', // completion records
	'UTC' // depends on LocalTZA, DaylightSavingTA
];

require('./tests').es2015(boundES, ops, expectedMissing);

require('./helpers/runManifestTest')(require('tape'), ES, 2015);