'use strict';
var $p;
var $fileLevelThis = this;
function $Char(c) {
  this.c = c;
}
$p = $Char.prototype;
$p.toString = (function() {
  return String.fromCharCode(this.c);
});
function $Long(lo, hi) {
  this.l = lo;
  this.h = hi;
}
$p = $Long.prototype;
$p.toString = (function() {
  return $s_RTLong__toString__I__I__T(this.l, this.h);
});
function $noIsInstance(arg0) {
  throw new TypeError("Cannot call isInstance() on a Class representing a JS trait/object");
}
function $objectClone(arg0) {
  return Object.create(Object.getPrototypeOf(arg0), Object.getOwnPropertyDescriptors(arg0));
}
function $objectOrArrayClone(arg0) {
  return (arg0.$classData.Z ? arg0.aU() : $objectClone(arg0));
}
function $objectGetClass(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return $d_T.l();
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return $d_jl_Byte.l();
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return $d_jl_Short.l();
        } else {
          return $d_jl_Integer.l();
        }
      } else if ($isFloat(arg0)) {
        return $d_jl_Float.l();
      } else {
        return $d_jl_Double.l();
      }
    }
    case "boolean": {
      return $d_jl_Boolean.l();
    }
    case "undefined": {
      return $d_jl_Void.l();
    }
    default: {
      if ((arg0 instanceof $Long)) {
        return $d_jl_Long.l();
      } else if ((arg0 instanceof $Char)) {
        return $d_jl_Character.l();
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.l();
      } else {
        return null;
      }
    }
  }
}
function $objectClassName(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return "java.lang.String";
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return "java.lang.Byte";
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return "java.lang.Short";
        } else {
          return "java.lang.Integer";
        }
      } else if ($isFloat(arg0)) {
        return "java.lang.Float";
      } else {
        return "java.lang.Double";
      }
    }
    case "boolean": {
      return "java.lang.Boolean";
    }
    case "undefined": {
      return "java.lang.Void";
    }
    default: {
      if ((arg0 instanceof $Long)) {
        return "java.lang.Long";
      } else if ((arg0 instanceof $Char)) {
        return "java.lang.Character";
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.N;
      } else {
        return null.pv();
      }
    }
  }
}
function $dp_equals__O__Z(instance, x0) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__equals__O__Z(instance, x0);
    }
    case "number": {
      return $f_jl_Double__equals__O__Z(instance, x0);
    }
    case "boolean": {
      return $f_jl_Boolean__equals__O__Z(instance, x0);
    }
    case "undefined": {
      return $f_jl_Void__equals__O__Z(instance, x0);
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.s(x0);
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__equals__O__Z(instance.l, instance.h, x0);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__equals__O__Z(instance.c, x0);
      } else {
        return $c_O.prototype.s.call(instance, x0);
      }
    }
  }
}
function $dp_hashCode__I(instance) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__hashCode__I(instance);
    }
    case "number": {
      return $f_jl_Double__hashCode__I(instance);
    }
    case "boolean": {
      return $f_jl_Boolean__hashCode__I(instance);
    }
    case "undefined": {
      return $f_jl_Void__hashCode__I(instance);
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.z();
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__hashCode__I(instance.l, instance.h);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I(instance.c);
      } else {
        return $c_O.prototype.z.call(instance);
      }
    }
  }
}
function $dp_indexOf__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__indexOf__I__I(instance, x0);
  } else {
    return instance.pw(x0);
  }
}
function $dp_toString__T(instance) {
  return ((instance === (void 0)) ? "undefined" : instance.toString());
}
function $checkIntDivisor(arg0) {
  if ((arg0 === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  } else {
    return arg0;
  }
}
function $doubleToInt(arg0) {
  return ((arg0 > 2147483647) ? 2147483647 : ((arg0 < (-2147483648)) ? (-2147483648) : (arg0 | 0)));
}
function $cToS(arg0) {
  return String.fromCharCode(arg0);
}
var $fpBitsDataView = new DataView(new ArrayBuffer(8));
function $floatToBits(arg0) {
  var dataView = $fpBitsDataView;
  dataView.setFloat32(0, arg0, true);
  return dataView.getInt32(0, true);
}
function $floatFromBits(arg0) {
  var dataView = $fpBitsDataView;
  dataView.setInt32(0, arg0, true);
  return dataView.getFloat32(0, true);
}
function $doubleToBits(arg0) {
  var dataView = $fpBitsDataView;
  return $s_RTLong__fromDoubleBits__D__O__J(arg0, dataView);
}
function $doubleFromBits(arg0) {
  var dataView = $fpBitsDataView;
  return $s_RTLong__bitsToDouble__I__I__O__D(arg0.l, arg0.h, dataView);
}
function $resolveSuperRef(arg0, arg1) {
  var getPrototypeOf = Object.getPrototyeOf;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var superProto = arg0.prototype;
  while ((superProto !== null)) {
    var desc = getOwnPropertyDescriptor(superProto, arg1);
    if ((desc !== (void 0))) {
      return desc;
    }
    superProto = getPrototypeOf(superProto);
  }
}
function $superGet(arg0, arg1, arg2) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var getter = desc.get;
    return ((getter !== (void 0)) ? getter.call(arg1) : getter.value);
  }
}
function $superSet(arg0, arg1, arg2, arg3) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var setter = desc.set;
    if ((setter !== (void 0))) {
      setter.call(arg1, arg3);
      return (void 0);
    }
  }
  throw new TypeError((("super has no setter '" + arg2) + "'."));
}
function $arraycopyGeneric(arg0, arg1, arg2, arg3, arg4) {
  if (((arg0 !== arg2) || (((arg3 - arg1) >>> 0) > (arg4 >>> 0)))) {
    for (var i = 0; (i < arg4); i = ((i + 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)];
    }
  } else {
    for (var i = ((arg4 - 1) | 0); (i >= 0); i = ((i - 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)];
    }
  }
}
var $lastIDHash = 0;
var $idHashCodeMap = new WeakMap();
function $systemIdentityHashCode(obj) {
  switch ((typeof obj)) {
    case "string": {
      return $f_T__hashCode__I(obj);
    }
    case "number": {
      return $f_jl_Double__hashCode__I(obj);
    }
    case "bigint": {
      var biHash = 0;
      if ((obj < BigInt(0))) {
        obj = (~obj);
      }
      while ((obj !== BigInt(0))) {
        biHash = (biHash ^ Number(BigInt.asIntN(32, obj)));
        obj = (obj >> BigInt(32));
      }
      return biHash;
    }
    case "boolean": {
      return (obj ? 1231 : 1237);
    }
    case "undefined": {
      return 0;
    }
    case "symbol": {
      var description = obj.description;
      return ((description === (void 0)) ? 0 : $f_T__hashCode__I(description));
    }
    default: {
      if ((obj === null)) {
        return 0;
      } else {
        var hash = $idHashCodeMap.get(obj);
        if ((hash === (void 0))) {
          hash = (($lastIDHash + 1) | 0);
          $lastIDHash = hash;
          $idHashCodeMap.set(obj, hash);
        }
        return hash;
      }
    }
  }
}
function $isByte(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 24) >> 24) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isShort(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 16) >> 16) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isInt(arg0) {
  return ((((typeof arg0) === "number") && ((arg0 | 0) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isFloat(arg0) {
  return (((typeof arg0) === "number") && ((arg0 !== arg0) || (Math.fround(arg0) === arg0)));
}
function $bC(arg0) {
  return new $Char(arg0);
}
var $bC0 = $bC(0);
function $bL(arg0, arg1) {
  return new $Long(arg0, arg1);
}
var $bL0 = $bL(0, 0);
function $uC(arg0) {
  return ((arg0 === null) ? 0 : arg0.c);
}
function $uJ(arg0) {
  return ((arg0 === null) ? $bL0 : arg0);
}
/** @constructor */
function $c_O() {
}
$p = $c_O.prototype;
$p.constructor = $c_O;
/** @constructor */
function $h_O() {
}
$h_O.prototype = $p;
$p.z = (function() {
  return $systemIdentityHashCode(this);
});
$p.s = (function(that) {
  return (this === that);
});
$p.p = (function() {
  var i = this.z();
  return (($objectClassName(this) + "@") + (i >>> 0.0).toString(16));
});
$p.toString = (function() {
  return this.p();
});
function $ac_O(arg) {
  if (((typeof arg) === "number")) {
    this.f = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.f[i] = null;
    }
  } else {
    this.f = arg;
  }
}
$p = $ac_O.prototype = new $h_O();
$p.constructor = $ac_O;
$p.aP = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.f, srcPos, dest.f, destPos, length);
});
$p.aU = (function() {
  return new $ac_O(this.f.slice());
});
function $ah_O() {
}
$ah_O.prototype = $p;
function $ac_Z(arg) {
  if (((typeof arg) === "number")) {
    this.f = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.f[i] = false;
    }
  } else {
    this.f = arg;
  }
}
$p = $ac_Z.prototype = new $h_O();
$p.constructor = $ac_Z;
$p.aP = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.f, srcPos, dest.f, destPos, length);
});
$p.aU = (function() {
  return new $ac_Z(this.f.slice());
});
function $ac_C(arg) {
  if (((typeof arg) === "number")) {
    this.f = new Uint16Array(arg);
  } else {
    this.f = arg;
  }
}
$p = $ac_C.prototype = new $h_O();
$p.constructor = $ac_C;
$p.aP = (function(srcPos, dest, destPos, length) {
  dest.f.set(this.f.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aU = (function() {
  return new $ac_C(this.f.slice());
});
function $ac_B(arg) {
  if (((typeof arg) === "number")) {
    this.f = new Int8Array(arg);
  } else {
    this.f = arg;
  }
}
$p = $ac_B.prototype = new $h_O();
$p.constructor = $ac_B;
$p.aP = (function(srcPos, dest, destPos, length) {
  dest.f.set(this.f.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aU = (function() {
  return new $ac_B(this.f.slice());
});
function $ac_S(arg) {
  if (((typeof arg) === "number")) {
    this.f = new Int16Array(arg);
  } else {
    this.f = arg;
  }
}
$p = $ac_S.prototype = new $h_O();
$p.constructor = $ac_S;
$p.aP = (function(srcPos, dest, destPos, length) {
  dest.f.set(this.f.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aU = (function() {
  return new $ac_S(this.f.slice());
});
function $ac_I(arg) {
  if (((typeof arg) === "number")) {
    this.f = new Int32Array(arg);
  } else {
    this.f = arg;
  }
}
$p = $ac_I.prototype = new $h_O();
$p.constructor = $ac_I;
$p.aP = (function(srcPos, dest, destPos, length) {
  dest.f.set(this.f.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aU = (function() {
  return new $ac_I(this.f.slice());
});
function $ac_J(arg) {
  if (((typeof arg) === "number")) {
    arg = (arg << 1);
    this.f = new Int32Array(arg);
  } else {
    this.f = arg;
  }
}
$p = $ac_J.prototype = new $h_O();
$p.constructor = $ac_J;
$p.aP = (function(srcPos, dest, destPos, length) {
  dest.f.set(this.f.subarray((srcPos << 1), (((srcPos + length) | 0) << 1)), (destPos << 1));
});
$p.aU = (function() {
  return new $ac_J(this.f.slice());
});
function $ac_F(arg) {
  if (((typeof arg) === "number")) {
    this.f = new Float32Array(arg);
  } else {
    this.f = arg;
  }
}
$p = $ac_F.prototype = new $h_O();
$p.constructor = $ac_F;
$p.aP = (function(srcPos, dest, destPos, length) {
  dest.f.set(this.f.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aU = (function() {
  return new $ac_F(this.f.slice());
});
function $ac_D(arg) {
  if (((typeof arg) === "number")) {
    this.f = new Float64Array(arg);
  } else {
    this.f = arg;
  }
}
$p = $ac_D.prototype = new $h_O();
$p.constructor = $ac_D;
$p.aP = (function(srcPos, dest, destPos, length) {
  dest.f.set(this.f.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aU = (function() {
  return new $ac_D(this.f.slice());
});
function $TypeData() {
  this.C = (void 0);
  this.n = null;
  this.O = null;
  this.B = null;
  this.D = 0;
  this.z = null;
  this.E = "";
  this.L = (void 0);
  this.A = (void 0);
  this.F = (void 0);
  this.w = (void 0);
  this.J = false;
  this.N = "";
  this.X = false;
  this.Y = false;
  this.Z = false;
  this.I = (void 0);
}
$p = $TypeData.prototype;
$p.p = (function(zero, arrayEncodedName, displayName, arrayClass, typedArrayClass) {
  this.n = ({});
  this.z = zero;
  this.E = arrayEncodedName;
  var self = this;
  this.F = ((that) => (that === self));
  this.N = displayName;
  this.X = true;
  this.I = ((obj) => false);
  if ((arrayClass !== (void 0))) {
    this.A = new $TypeData().y(this, arrayClass, typedArrayClass, (arrayEncodedName === "J"));
  }
  return this;
});
$p.i = (function(kindOrCtor, fullName, ancestors, isInstance) {
  var internalName = Object.getOwnPropertyNames(ancestors)[0];
  this.n = ancestors;
  this.E = (("L" + fullName) + ";");
  this.F = ((that) => (!(!that.n[internalName])));
  this.J = (kindOrCtor === 2);
  this.N = fullName;
  this.Y = (kindOrCtor === 1);
  this.I = (isInstance || ((obj) => (!(!((obj && obj.$classData) && obj.$classData.n[internalName])))));
  if (((typeof kindOrCtor) !== "number")) {
    kindOrCtor.prototype.$classData = this;
  }
  return this;
});
$p.y = (function(componentData, arrayClass, typedArrayClass, isLongArray, isAssignableFromFun) {
  arrayClass.prototype.$classData = this;
  var name = ("[" + componentData.E);
  this.C = arrayClass;
  this.n = ({
    y: 1,
    a: 1
  });
  this.O = componentData;
  this.B = componentData;
  this.D = 1;
  this.E = name;
  this.N = name;
  this.Z = true;
  var self = this;
  this.F = (isAssignableFromFun || ((that) => (self === that)));
  this.w = (isLongArray ? ((array) => {
    var len = (array.length | 0);
    var result = new arrayClass(len);
    var u = result.f;
    for (var i = 0; (i < len); i = ((i + 1) | 0)) {
      var srcElem = array[i];
      u[(i << 1)] = srcElem.l;
      u[(((i << 1) + 1) | 0)] = srcElem.h;
    }
    return result;
  }) : (typedArrayClass ? ((array) => new arrayClass(new typedArrayClass(array))) : ((array) => new arrayClass(array))));
  this.I = ((obj) => (obj instanceof arrayClass));
  return this;
});
$p.a = (function(componentData) {
  function ArrayClass(arg) {
    if (((typeof arg) === "number")) {
      this.f = new Array(arg);
      for (var i = 0; (i < arg); (i++)) {
        this.f[i] = null;
      }
    } else {
      this.f = arg;
    }
  }
  var $p = ArrayClass.prototype = new $ah_O();
  $p.constructor = ArrayClass;
  $p.aP = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.f, srcPos, dest.f, destPos, length);
  });
  $p.aU = (function() {
    return new ArrayClass(this.f.slice());
  });
  $p.$classData = this;
  var arrayBase = (componentData.B || componentData);
  var arrayDepth = (componentData.D + 1);
  var name = ("[" + componentData.E);
  this.C = ArrayClass;
  this.n = ({
    y: 1,
    a: 1
  });
  this.O = componentData;
  this.B = arrayBase;
  this.D = arrayDepth;
  this.E = name;
  this.N = name;
  this.Z = true;
  var isAssignableFromFun = ((that) => {
    var thatDepth = that.D;
    return ((thatDepth === arrayDepth) ? arrayBase.F(that.B) : ((thatDepth > arrayDepth) && (arrayBase === $d_O)));
  });
  this.F = isAssignableFromFun;
  this.w = ((array) => new ArrayClass(array));
  var self = this;
  this.I = ((obj) => {
    var data = (obj && obj.$classData);
    return ((!(!data)) && ((data === self) || isAssignableFromFun(data)));
  });
  return this;
});
$p.r = (function() {
  if ((!this.A)) {
    this.A = new $TypeData().a(this);
  }
  return this.A;
});
$p.l = (function() {
  if ((!this.L)) {
    this.L = new $c_jl_Class(this);
  }
  return this.L;
});
$p.R = (function(that) {
  return ((this === that) || this.F(that));
});
$p.S = (function() {
  return (this.P ? this.P.l() : null);
});
$p.Q = (function() {
  return (this.O ? this.O.l() : null);
});
$p.U = (function(length) {
  if ((this === $d_V)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return new (this.r().C)(length);
});
function $isArrayOf_O(obj, depth) {
  var data = (obj && obj.$classData);
  if ((!data)) {
    return false;
  } else {
    var arrayDepth = data.D;
    return ((arrayDepth === depth) ? (!data.B.X) : (arrayDepth > depth));
  }
}
function $isArrayOf_Z(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_Z))));
}
function $isArrayOf_C(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_C))));
}
function $isArrayOf_B(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_B))));
}
function $isArrayOf_S(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_S))));
}
function $isArrayOf_I(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_I))));
}
function $isArrayOf_J(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_J))));
}
function $isArrayOf_F(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_F))));
}
function $isArrayOf_D(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_D))));
}
var $d_O = new $TypeData();
$d_O.n = ({});
$d_O.E = "Ljava.lang.Object;";
$d_O.F = ((that) => (!that.X));
$d_O.N = "java.lang.Object";
$d_O.I = ((obj) => (obj !== null));
$d_O.A = new $TypeData().y($d_O, $ac_O, (void 0), false, ((that) => {
  var thatDepth = that.D;
  return ((thatDepth === 1) ? (!that.B.X) : (thatDepth > 1));
}));
$c_O.prototype.$classData = $d_O;
var $d_V = new $TypeData().p((void 0), "V", "void", (void 0), (void 0));
var $d_Z = new $TypeData().p(false, "Z", "boolean", $ac_Z, (void 0));
var $d_C = new $TypeData().p(0, "C", "char", $ac_C, Uint16Array);
var $d_B = new $TypeData().p(0, "B", "byte", $ac_B, Int8Array);
var $d_S = new $TypeData().p(0, "S", "short", $ac_S, Int16Array);
var $d_I = new $TypeData().p(0, "I", "int", $ac_I, Int32Array);
var $d_J = new $TypeData().p($bL0, "J", "long", $ac_J, Int32Array);
var $d_F = new $TypeData().p(0.0, "F", "float", $ac_F, Float32Array);
var $d_D = new $TypeData().p(0.0, "D", "double", $ac_D, Float64Array);
var $typedArraysAreBigEndian = (new Int8Array(new Int32Array([1]).buffer)[0] === 0);
function $constArrayBuffer_B(len, encoded) {
  var buf = new ArrayBuffer(len);
  var view = new DataView(buf);
  var regularChunksEnd = ((encoded.length - 4) | 0);
  var i = 0;
  var j = 0;
  var chunk = 0;
  while (true) {
    chunk = (((encoded.charCodeAt(i) | (encoded.charCodeAt(((i + 1) | 0)) << 8)) | (encoded.charCodeAt(((i + 2) | 0)) << 16)) | (encoded.charCodeAt(((i + 3) | 0)) << 24));
    chunk = ((((chunk - 808464432) | 0) - ((chunk & 1616928864) >>> 3)) | 0);
    chunk = (((chunk & 1056980736) >>> 2) | (chunk & 4128831));
    chunk = (((chunk & 268369920) >>> 4) | (chunk & 4095));
    if ((i === regularChunksEnd)) {
      break;
    }
    view.setUint32(j, chunk, true);
    i = ((i + 4) | 0);
    j = ((j + 3) | 0);
  }
  var trailing = ((len - j) | 0);
  view.setUint8(j, chunk);
  if ((trailing !== 1)) {
    view.setUint8(((j + 1) | 0), (chunk >>> 8));
    if ((trailing === 3)) {
      view.setUint8(((j + 2) | 0), (chunk >>> 16));
    }
  }
  return buf;
}
function $constArrayBuffer_S(len, encoded) {
  var buf = $constArrayBuffer_B((len << 1), encoded);
  if ($typedArraysAreBigEndian) {
    var view = new DataView(buf);
    var i = 0;
    while ((i !== len)) {
      view.putInt16(i, view.getInt16(i, true), false);
      i = ((i + 2) | 0);
    }
  }
  return buf;
}
function $constArrayBuffer_I(len, encoded) {
  var buf = $constArrayBuffer_B((len << 2), encoded);
  if ($typedArraysAreBigEndian) {
    var view = new DataView(buf);
    var i = 0;
    while ((i !== len)) {
      view.putInt32(i, view.getInt32(i, true), false);
      i = ((i + 4) | 0);
    }
  }
  return buf;
}
function $constArrayBuffer_J(len, encoded) {
  return $constArrayBuffer_I((len << 1), encoded);
}
function $constTypedArrayU_I(len, encoded, prevMask) {
  var buf = new Int32Array(len);
  var inLen = (encoded.length | 0);
  var prev = 0;
  var i = 0;
  var j = 0;
  var v = 0;
  while ((i !== inLen)) {
    var c = encoded.charCodeAt(i);
    if ((c < 80)) {
      v = ((v | (c - 48)) << 5);
    } else {
      v = (v | (c - 93));
      prev = (((prev & prevMask) + v) | 0);
      buf[j] = prev;
      j = ((j + 1) | 0);
      v = 0;
    }
    i = ((i + 1) | 0);
  }
  return buf;
}
function $constTypedArrayS_I(len, encoded, prevMask) {
  var buf = new Int32Array(len);
  var inLen = (encoded.length | 0);
  var prev = 0;
  var i = 0;
  var j = 0;
  var v = 0;
  var first = true;
  while ((i !== inLen)) {
    var c = encoded.charCodeAt(i);
    if ((c < 80)) {
      if (first) {
        v = (((c - 48) << 27) >> 22);
        first = false;
      } else {
        v = ((v | (c - 48)) << 5);
      }
    } else {
      if (first) {
        v = (((c - 93) << 27) >> 27);
      } else {
        v = (v | (c - 93));
        first = true;
      }
      prev = (((prev & prevMask) + v) | 0);
      buf[j] = prev;
      j = ((j + 1) | 0);
    }
    i = ((i + 1) | 0);
  }
  return buf;
}
function $constArrRaw_B(len, encoded) {
  return new $ac_B(new Int8Array($constArrayBuffer_B(len, encoded)));
}
function $constArrRaw_S(len, encoded) {
  return new $ac_S(new Int16Array($constArrayBuffer_S(len, encoded)));
}
function $constArrRaw_C(len, encoded) {
  return new $ac_C(new Uint16Array($constArrayBuffer_S(len, encoded)));
}
function $constArrRaw_I(len, encoded) {
  return new $ac_I(new Int32Array($constArrayBuffer_I(len, encoded)));
}
function $constArrRaw_J(len, encoded) {
  return new $ac_J(new Int32Array($constArrayBuffer_J(len, encoded)));
}
function $constArrUVals_I(len, encoded) {
  return new $ac_I($constTypedArrayU_I(len, encoded, 0));
}
function $constArrUDiffs_I(len, encoded) {
  return new $ac_I($constTypedArrayU_I(len, encoded, (-1)));
}
function $constArrSVals_I(len, encoded) {
  return new $ac_I($constTypedArrayS_I(len, encoded, 0));
}
function $constArrSDiffs_I(len, encoded) {
  return new $ac_I($constTypedArrayS_I(len, encoded, (-1)));
}
function $constArrUVals_J(len, encoded) {
  return new $ac_J($constTypedArrayU_I((len << 1), encoded, 0));
}
function $constArrUDiffs_J(len, encoded) {
  return new $ac_J($constTypedArrayU_I((len << 1), encoded, (-1)));
}
function $constArrSVals_J(len, encoded) {
  return new $ac_J($constTypedArrayS_I((len << 1), encoded, 0));
}
function $constArrSDiffs_J(len, encoded) {
  return new $ac_J($constTypedArrayS_I((len << 1), encoded, (-1)));
}
function $p_jl_System$SystemProperties$__loadSystemProperties__O($thiz) {
  var result = ({});
  result["java.version"] = "1.8";
  result["java.vm.specification.version"] = "1.8";
  result["java.vm.specification.vendor"] = "Oracle Corporation";
  result["java.vm.specification.name"] = "Java Virtual Machine Specification";
  result["java.vm.name"] = "Scala.js";
  result["java.vm.version"] = "1.22.0";
  result["java.specification.version"] = "1.8";
  result["java.specification.vendor"] = "Oracle Corporation";
  result["java.specification.name"] = "Java Platform API Specification";
  result["file.separator"] = "/";
  result["path.separator"] = ":";
  result["line.separator"] = "\n";
  return result;
}
/** @constructor */
function $c_jl_System$SystemProperties$() {
  this.i0 = null;
  this.jv = null;
  $n_jl_System$SystemProperties$ = this;
  this.i0 = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
  this.jv = null;
}
$p = $c_jl_System$SystemProperties$.prototype = new $h_O();
$p.constructor = $c_jl_System$SystemProperties$;
/** @constructor */
function $h_jl_System$SystemProperties$() {
}
$h_jl_System$SystemProperties$.prototype = $p;
$p.m6 = (function(key, default$1) {
  if ((this.i0 !== null)) {
    var dict = this.i0;
    return ((!(!$m_jl_Utils$Cache$().jx.call(dict, key))) ? dict[key] : default$1);
  } else {
    return this.jv.m6(key, default$1);
  }
});
var $d_jl_System$SystemProperties$ = new $TypeData().i($c_jl_System$SystemProperties$, "java.lang.System$SystemProperties$", ({
  b7: 1
}));
var $n_jl_System$SystemProperties$;
function $m_jl_System$SystemProperties$() {
  if ((!$n_jl_System$SystemProperties$)) {
    $n_jl_System$SystemProperties$ = new $c_jl_System$SystemProperties$();
  }
  return $n_jl_System$SystemProperties$;
}
/** @constructor */
function $c_jl_Utils$Cache$() {
  this.jx = null;
  $n_jl_Utils$Cache$ = this;
  this.jx = Object.prototype.hasOwnProperty;
}
$p = $c_jl_Utils$Cache$.prototype = new $h_O();
$p.constructor = $c_jl_Utils$Cache$;
/** @constructor */
function $h_jl_Utils$Cache$() {
}
$h_jl_Utils$Cache$.prototype = $p;
var $d_jl_Utils$Cache$ = new $TypeData().i($c_jl_Utils$Cache$, "java.lang.Utils$Cache$", ({
  b9: 1
}));
var $n_jl_Utils$Cache$;
function $m_jl_Utils$Cache$() {
  if ((!$n_jl_Utils$Cache$)) {
    $n_jl_Utils$Cache$ = new $c_jl_Utils$Cache$();
  }
  return $n_jl_Utils$Cache$;
}
function $f_jl_Void__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_jl_Void__hashCode__I($thiz) {
  return 0;
}
function $f_jl_Void__toString__T($thiz) {
  return "undefined";
}
var $d_jl_Void = new $TypeData().i(0, "java.lang.Void", ({
  ba: 1
}), ((x) => (x === (void 0))));
function $p_jl_reflect_Array$__mismatch__O__E($thiz, array) {
  throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "argument type mismatch");
}
/** @constructor */
function $c_jl_reflect_Array$() {
}
$p = $c_jl_reflect_Array$.prototype = new $h_O();
$p.constructor = $c_jl_reflect_Array$;
/** @constructor */
function $h_jl_reflect_Array$() {
}
$h_jl_reflect_Array$.prototype = $p;
$p.jc = (function(array) {
  if ((array instanceof $ac_O)) {
    return array.f.length;
  } else if ((array instanceof $ac_Z)) {
    return array.f.length;
  } else if ((array instanceof $ac_C)) {
    return array.f.length;
  } else if ((array instanceof $ac_B)) {
    return array.f.length;
  } else if ((array instanceof $ac_S)) {
    return array.f.length;
  } else if ((array instanceof $ac_I)) {
    return array.f.length;
  } else if ((array instanceof $ac_J)) {
    return ((array.f.length >>> 1) | 0);
  } else if ((array instanceof $ac_F)) {
    return array.f.length;
  } else {
    if ((!(array instanceof $ac_D))) {
      $p_jl_reflect_Array$__mismatch__O__E(this, array);
    }
    return array.f.length;
  }
});
var $d_jl_reflect_Array$ = new $TypeData().i($c_jl_reflect_Array$, "java.lang.reflect.Array$", ({
  bb: 1
}));
var $n_jl_reflect_Array$;
function $m_jl_reflect_Array$() {
  if ((!$n_jl_reflect_Array$)) {
    $n_jl_reflect_Array$ = new $c_jl_reflect_Array$();
  }
  return $n_jl_reflect_Array$;
}
/** @constructor */
function $c_ju_Arrays$() {
}
$p = $c_ju_Arrays$.prototype = new $h_O();
$p.constructor = $c_ju_Arrays$;
/** @constructor */
function $h_ju_Arrays$() {
}
$h_ju_Arrays$.prototype = $p;
$p.n3 = (function(a, key) {
  var startIndex = 0;
  var endIndex = a.f.length;
  while (true) {
    if ((startIndex === endIndex)) {
      return (~startIndex);
    } else {
      var mid = ((((startIndex + endIndex) | 0) >>> 1) | 0);
      var elem = a.f[mid];
      var cmp = ((key === elem) ? 0 : ((key < elem) ? (-1) : 1));
      if ((cmp < 0)) {
        endIndex = mid;
        continue;
      }
      if ((cmp !== 0)) {
        startIndex = ((1 + mid) | 0);
        continue;
      }
      return mid;
    }
  }
});
var $d_ju_Arrays$ = new $TypeData().i($c_ju_Arrays$, "java.util.Arrays$", ({
  bc: 1
}));
var $n_ju_Arrays$;
function $m_ju_Arrays$() {
  if ((!$n_ju_Arrays$)) {
    $n_ju_Arrays$ = new $c_ju_Arrays$();
  }
  return $n_ju_Arrays$;
}
function $s_RTLong__remainderUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().oO(alo, ahi, blo, bhi);
}
function $s_RTLong__remainder__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().oN(alo, ahi, blo, bhi);
}
function $s_RTLong__divideUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().nf(alo, ahi, blo, bhi);
}
function $s_RTLong__divide__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().ne(alo, ahi, blo, bhi);
}
function $s_RTLong__fromDoubleBits__D__O__J(value, fpBitsDataView) {
  fpBitsDataView.setFloat64(0, value, true);
  var lo = (fpBitsDataView.getInt32(0, true) | 0);
  var hi = (fpBitsDataView.getInt32(4, true) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__fromDouble__D__J(value) {
  return $m_RTLong$().gQ(value);
}
function $s_RTLong__fromUnsignedInt__I__J(value) {
  return $bL(value, 0);
}
function $s_RTLong__fromInt__I__J(value) {
  var hi = (value >> 31);
  return $bL(value, hi);
}
function $s_RTLong__clz__I__I__I(lo, hi) {
  return ((hi !== 0) ? Math.clz32(hi) : ((32 + Math.clz32(lo)) | 0));
}
function $s_RTLong__toFloat__I__I__F(lo, hi) {
  return Math.fround(((4.294967296E9 * hi) + ((((((-2097152) & (hi ^ (hi >> 10))) === 0) || ((65535 & lo) === 0)) ? lo : (32768 | ((-32768) & lo))) >>> 0.0)));
}
function $s_RTLong__toDouble__I__I__D(lo, hi) {
  return ((4.294967296E9 * hi) + (lo >>> 0.0));
}
function $s_RTLong__toInt__I__I__I(lo, hi) {
  return lo;
}
function $s_RTLong__toString__I__I__T(lo, hi) {
  return $m_RTLong$().mC(lo, hi);
}
function $s_RTLong__bitsToDouble__I__I__O__D(lo, hi, fpBitsDataView) {
  fpBitsDataView.setInt32(0, lo, true);
  fpBitsDataView.setInt32(4, hi, true);
  return (+fpBitsDataView.getFloat64(0, true));
}
function $s_RTLong__mul__I__I__I__I__J(alo, ahi, blo, bhi) {
  var a0 = (65535 & alo);
  var a1 = ((alo >>> 16) | 0);
  var b0 = (65535 & blo);
  var b1 = ((blo >>> 16) | 0);
  var a0b0 = Math.imul(a0, b0);
  var a1b0 = Math.imul(a1, b0);
  var a0b1 = Math.imul(a0, b1);
  var lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
  var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
  var hi = ((((((((Math.imul(alo, bhi) + Math.imul(ahi, blo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__sub__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = ((alo - blo) | 0);
  var hi = ((((ahi - bhi) | 0) - (((lo >>> 0) > (alo >>> 0)) | 0)) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__add__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = ((alo + blo) | 0);
  var hi = ((((ahi + bhi) | 0) + (((lo >>> 0) < (alo >>> 0)) | 0)) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__sar__I__I__I__J(lo, hi, n) {
  var lo$1 = (((32 & n) === 0) ? (((lo >>> n) | 0) | ((hi << 1) << (~n))) : (hi >> n));
  var hi$1 = (((32 & n) === 0) ? (hi >> n) : (hi >> 31));
  return $bL(lo$1, hi$1);
}
function $s_RTLong__shr__I__I__I__J(lo, hi, n) {
  var lo$1 = (((32 & n) === 0) ? (((lo >>> n) | 0) | ((hi << 1) << (~n))) : ((hi >>> n) | 0));
  var hi$1 = (((32 & n) === 0) ? ((hi >>> n) | 0) : 0);
  return $bL(lo$1, hi$1);
}
function $s_RTLong__shl__I__I__I__J(lo, hi, n) {
  var lo$1 = (((32 & n) === 0) ? (lo << n) : 0);
  var hi$1 = (((32 & n) === 0) ? (((((lo >>> 1) | 0) >>> (~n)) | 0) | (hi << n)) : (lo << n));
  return $bL(lo$1, hi$1);
}
function $s_RTLong__xor__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = (alo ^ blo);
  var hi = (ahi ^ bhi);
  return $bL(lo, hi);
}
function $s_RTLong__and__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = (alo & blo);
  var hi = (ahi & bhi);
  return $bL(lo, hi);
}
function $s_RTLong__or__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = (alo | blo);
  var hi = (ahi | bhi);
  return $bL(lo, hi);
}
function $s_RTLong__geu__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) >= (blo >>> 0)) : ((ahi >>> 0) > (bhi >>> 0)));
}
function $s_RTLong__gtu__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) > (blo >>> 0)) : ((ahi >>> 0) > (bhi >>> 0)));
}
function $s_RTLong__leu__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) <= (blo >>> 0)) : ((ahi >>> 0) < (bhi >>> 0)));
}
function $s_RTLong__ltu__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) < (blo >>> 0)) : ((ahi >>> 0) < (bhi >>> 0)));
}
function $s_RTLong__ge__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) >= (blo >>> 0)) : (ahi > bhi));
}
function $s_RTLong__gt__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) > (blo >>> 0)) : (ahi > bhi));
}
function $s_RTLong__le__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) <= (blo >>> 0)) : (ahi < bhi));
}
function $s_RTLong__lt__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) < (blo >>> 0)) : (ahi < bhi));
}
function $s_RTLong__notEquals__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return (((alo ^ blo) | (ahi ^ bhi)) !== 0);
}
function $s_RTLong__equals__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return (((alo ^ blo) | (ahi ^ bhi)) === 0);
}
/** @constructor */
function $c_RTLong$() {
}
$p = $c_RTLong$.prototype = new $h_O();
$p.constructor = $c_RTLong$;
/** @constructor */
function $h_RTLong$() {
}
$h_RTLong$.prototype = $p;
$p.mC = (function(lo, hi) {
  if ((hi === (lo >> 31))) {
    return ("" + lo);
  } else if ((((-2097152) & (hi ^ (hi >> 10))) === 0)) {
    return ("" + ((4.294967296E9 * hi) + (lo >>> 0.0)));
  } else {
    var sign = (hi >> 31);
    var xlo = (lo ^ sign);
    var rlo = ((xlo - sign) | 0);
    var rhi = (((hi ^ sign) + (((rlo >>> 0) < (xlo >>> 0)) | 0)) | 0);
    var aHat = ((4.294967296E9 * (rhi >>> 0.0)) + (rlo >>> 0.0));
    var qHat = (+Math.floor((1.0000000000000265E-9 * aHat)));
    var rHat = ((rlo - Math.imul(1000000000, (qHat | 0.0))) | 0);
    if ((rHat < 0)) {
      qHat = (qHat - 1.0);
      rHat = ((1000000000 + rHat) | 0);
    }
    var this$7 = rHat;
    var remStr = ("" + this$7);
    var $x_1 = qHat;
    var start = remStr.length;
    var s = ((("" + $x_1) + "000000000".substring(start)) + remStr);
    return ((hi < 0) ? ("-" + s) : s);
  }
});
$p.gQ = (function(value) {
  if ((value < (-9.223372036854776E18))) {
    return $bL(0, (-2147483648));
  } else if ((value >= 9.223372036854776E18)) {
    return $bL((-1), 2147483647);
  } else {
    var rawLo = (value | 0.0);
    var rawHi = ((2.3283064365386963E-10 * value) | 0.0);
    var hi = (((value < 0.0) && (rawLo !== 0)) ? ((rawHi - 1) | 0) : rawHi);
    return $bL(rawLo, hi);
  }
});
$p.ne = (function(alo, ahi, blo, bhi) {
  var sign = (ahi >> 31);
  var xlo = (alo ^ sign);
  var rlo = ((xlo - sign) | 0);
  var rhi = (((ahi ^ sign) + (((rlo >>> 0) < (xlo >>> 0)) | 0)) | 0);
  var sign$1 = (bhi >> 31);
  var xlo$1 = (blo ^ sign$1);
  var rlo$1 = ((xlo$1 - sign$1) | 0);
  var rhi$1 = (((bhi ^ sign$1) + (((rlo$1 >>> 0) < (xlo$1 >>> 0)) | 0)) | 0);
  if (((rhi$1 | ((-2097152) & rlo$1)) === 0)) {
    var quotHi = (((rhi >>> 0) / ($checkIntDivisor(rlo$1) >>> 0)) | 0);
    var k = ((rhi - Math.imul(rlo$1, quotHi)) | 0);
    var quotLo = ((((4.294967296E9 * k) + (rlo >>> 0.0)) / rlo$1) | 0.0);
    var absR_$_lo = quotLo;
    var absR_$_hi = quotHi;
  } else {
    var aHat = ((4.294967296E9 * (rhi >>> 0.0)) + (rlo >>> 0.0));
    var bHat = ((4.294967296E9 * (rhi$1 >>> 0.0)) + (rlo$1 >>> 0.0));
    var x$1 = ((aHat / bHat) + 0.00390625);
    var lo = (x$1 | 0.0);
    var hi = ((2.3283064365386963E-10 * x$1) | 0.0);
    var a0 = (65535 & rlo$1);
    var a1 = ((rlo$1 >>> 16) | 0);
    var b0 = (65535 & lo);
    var b1 = ((lo >>> 16) | 0);
    var a0b0 = Math.imul(a0, b0);
    var a1b0 = Math.imul(a1, b0);
    var a0b1 = Math.imul(a0, b1);
    var lo$1 = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    if ((((((rhi - ((((((((Math.imul(rlo$1, hi) + Math.imul(rhi$1, lo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0)) | 0) - (((((rlo - lo$1) | 0) >>> 0) > (rlo >>> 0)) | 0)) | 0) < 0)) {
      var lo$3 = ((lo - 1) | 0);
      var hi$3 = ((((hi - 1) | 0) + ((lo$3 !== (-1)) | 0)) | 0);
      var absR_$_lo = lo$3;
      var absR_$_hi = hi$3;
    } else {
      var absR_$_lo = lo;
      var absR_$_hi = hi;
    }
  }
  if (((ahi ^ bhi) >= 0)) {
    return $bL(absR_$_lo, absR_$_hi);
  } else {
    var lo$4 = ((-absR_$_lo) | 0);
    var hi$4 = ((((-absR_$_hi) | 0) - ((lo$4 !== 0) | 0)) | 0);
    return $bL(lo$4, hi$4);
  }
});
$p.nf = (function(alo, ahi, blo, bhi) {
  if (((bhi | ((-2097152) & blo)) === 0)) {
    var quotHi = (((ahi >>> 0) / ($checkIntDivisor(blo) >>> 0)) | 0);
    var k = ((ahi - Math.imul(blo, quotHi)) | 0);
    var quotLo = ((((4.294967296E9 * k) + (alo >>> 0.0)) / blo) | 0.0);
    return $bL(quotLo, quotHi);
  } else if ((bhi >= 0)) {
    var aHat = ((4.294967296E9 * (ahi >>> 0.0)) + (alo >>> 0.0));
    var bHat = ((4.294967296E9 * (bhi >>> 0.0)) + (blo >>> 0.0));
    var x$1 = ((aHat / bHat) + 0.00390625);
    var lo = (x$1 | 0.0);
    var hi = ((2.3283064365386963E-10 * x$1) | 0.0);
    var a0 = (65535 & blo);
    var a1 = ((blo >>> 16) | 0);
    var b0 = (65535 & lo);
    var b1 = ((lo >>> 16) | 0);
    var a0b0 = Math.imul(a0, b0);
    var a1b0 = Math.imul(a1, b0);
    var a0b1 = Math.imul(a0, b1);
    var lo$1 = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    if ((((((ahi - ((((((((Math.imul(blo, hi) + Math.imul(bhi, lo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0)) | 0) - (((((alo - lo$1) | 0) >>> 0) > (alo >>> 0)) | 0)) | 0) < 0)) {
      var lo$3 = ((lo - 1) | 0);
      var hi$3 = ((((hi - 1) | 0) + ((lo$3 !== (-1)) | 0)) | 0);
      return $bL(lo$3, hi$3);
    } else {
      return $bL(lo, hi);
    }
  } else if (((ahi === bhi) ? ((alo >>> 0) < (blo >>> 0)) : ((ahi >>> 0) < (bhi >>> 0)))) {
    return $bL(0, 0);
  } else {
    return $bL(1, 0);
  }
});
$p.oN = (function(alo, ahi, blo, bhi) {
  var sign = (ahi >> 31);
  var xlo = (alo ^ sign);
  var rlo = ((xlo - sign) | 0);
  var rhi = (((ahi ^ sign) + (((rlo >>> 0) < (xlo >>> 0)) | 0)) | 0);
  var sign$1 = (bhi >> 31);
  var xlo$1 = (blo ^ sign$1);
  var rlo$1 = ((xlo$1 - sign$1) | 0);
  var rhi$1 = (((bhi ^ sign$1) + (((rlo$1 >>> 0) < (xlo$1 >>> 0)) | 0)) | 0);
  if (((rhi$1 | ((-2097152) & rlo$1)) === 0)) {
    var k$2 = (((rhi >>> 0) % ($checkIntDivisor(rlo$1) >>> 0)) | 0);
    var quotLo$2 = ((((4.294967296E9 * k$2) + (rlo >>> 0.0)) / rlo$1) | 0.0);
    var remLo = ((rlo - Math.imul(rlo$1, quotLo$2)) | 0);
    var absR_$_lo = remLo;
    var absR_$_hi = 0;
  } else {
    var aHat = ((4.294967296E9 * (rhi >>> 0.0)) + (rlo >>> 0.0));
    var bHat = ((4.294967296E9 * (rhi$1 >>> 0.0)) + (rlo$1 >>> 0.0));
    var x$1 = ((aHat / bHat) + 0.00390625);
    var lo = (x$1 | 0.0);
    var hi = ((2.3283064365386963E-10 * x$1) | 0.0);
    var a0 = (65535 & rlo$1);
    var a1 = ((rlo$1 >>> 16) | 0);
    var b0 = (65535 & lo);
    var b1 = ((lo >>> 16) | 0);
    var a0b0 = Math.imul(a0, b0);
    var a1b0 = Math.imul(a1, b0);
    var a0b1 = Math.imul(a0, b1);
    var lo$1 = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    var hi$1 = ((((((((Math.imul(rlo$1, hi) + Math.imul(rhi$1, lo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
    var lo$2 = ((rlo - lo$1) | 0);
    var hi$2 = ((((rhi - hi$1) | 0) - (((lo$2 >>> 0) > (rlo >>> 0)) | 0)) | 0);
    if ((hi$2 < 0)) {
      var lo$3 = ((lo$2 + rlo$1) | 0);
      var hi$3 = ((((hi$2 + rhi$1) | 0) + (((lo$3 >>> 0) < (lo$2 >>> 0)) | 0)) | 0);
      var absR_$_lo = lo$3;
      var absR_$_hi = hi$3;
    } else {
      var absR_$_lo = lo$2;
      var absR_$_hi = hi$2;
    }
  }
  if ((ahi < 0)) {
    var lo$4 = ((-absR_$_lo) | 0);
    var hi$4 = ((((-absR_$_hi) | 0) - ((lo$4 !== 0) | 0)) | 0);
    return $bL(lo$4, hi$4);
  } else {
    return $bL(absR_$_lo, absR_$_hi);
  }
});
$p.oO = (function(alo, ahi, blo, bhi) {
  if (((bhi | ((-2097152) & blo)) === 0)) {
    var k$2 = (((ahi >>> 0) % ($checkIntDivisor(blo) >>> 0)) | 0);
    var quotLo$2 = ((((4.294967296E9 * k$2) + (alo >>> 0.0)) / blo) | 0.0);
    var remLo = ((alo - Math.imul(blo, quotLo$2)) | 0);
    return $bL(remLo, 0);
  } else if ((bhi >= 0)) {
    var aHat = ((4.294967296E9 * (ahi >>> 0.0)) + (alo >>> 0.0));
    var bHat = ((4.294967296E9 * (bhi >>> 0.0)) + (blo >>> 0.0));
    var x$1 = ((aHat / bHat) + 0.00390625);
    var lo = (x$1 | 0.0);
    var hi = ((2.3283064365386963E-10 * x$1) | 0.0);
    var a0 = (65535 & blo);
    var a1 = ((blo >>> 16) | 0);
    var b0 = (65535 & lo);
    var b1 = ((lo >>> 16) | 0);
    var a0b0 = Math.imul(a0, b0);
    var a1b0 = Math.imul(a1, b0);
    var a0b1 = Math.imul(a0, b1);
    var lo$1 = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    var hi$1 = ((((((((Math.imul(blo, hi) + Math.imul(bhi, lo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
    var lo$2 = ((alo - lo$1) | 0);
    var hi$2 = ((((ahi - hi$1) | 0) - (((lo$2 >>> 0) > (alo >>> 0)) | 0)) | 0);
    if ((hi$2 < 0)) {
      var lo$3 = ((lo$2 + blo) | 0);
      var hi$3 = ((((hi$2 + bhi) | 0) + (((lo$3 >>> 0) < (lo$2 >>> 0)) | 0)) | 0);
      return $bL(lo$3, hi$3);
    } else {
      return $bL(lo$2, hi$2);
    }
  } else if (((ahi === bhi) ? ((alo >>> 0) < (blo >>> 0)) : ((ahi >>> 0) < (bhi >>> 0)))) {
    return $bL(alo, ahi);
  } else {
    var lo$4 = ((alo - blo) | 0);
    var hi$4 = ((((ahi - bhi) | 0) - (((lo$4 >>> 0) > (alo >>> 0)) | 0)) | 0);
    return $bL(lo$4, hi$4);
  }
});
var $d_RTLong$ = new $TypeData().i($c_RTLong$, "org.scalajs.linker.runtime.RuntimeLong$", ({
  be: 1
}));
var $n_RTLong$;
function $m_RTLong$() {
  if ((!$n_RTLong$)) {
    $n_RTLong$ = new $c_RTLong$();
  }
  return $n_RTLong$;
}
/** @constructor */
function $c_s_Array$() {
}
$p = $c_s_Array$.prototype = new $h_O();
$p.constructor = $c_s_Array$;
/** @constructor */
function $h_s_Array$() {
}
$h_s_Array$.prototype = $p;
$p.m4 = (function(xs, ys) {
  if ((xs === ys)) {
    return true;
  }
  if ((xs.f.length !== ys.f.length)) {
    return false;
  }
  var len = xs.f.length;
  var i = 0;
  while ((i < len)) {
    if ((!$m_sr_BoxesRunTime$().b(xs.f[i], ys.f[i]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
var $d_s_Array$ = new $TypeData().i($c_s_Array$, "scala.Array$", ({
  bf: 1
}));
var $n_s_Array$;
function $m_s_Array$() {
  if ((!$n_s_Array$)) {
    $n_s_Array$ = new $c_s_Array$();
  }
  return $n_s_Array$;
}
/** @constructor */
function $c_s_LowPriorityImplicits2() {
}
$p = $c_s_LowPriorityImplicits2.prototype = new $h_O();
$p.constructor = $c_s_LowPriorityImplicits2;
/** @constructor */
function $h_s_LowPriorityImplicits2() {
}
$h_s_LowPriorityImplicits2.prototype = $p;
function $f_sc_IterableOnceOps__foreach__F1__V($thiz, f) {
  var it = $thiz.ac();
  while (it.U()) {
    f.h(it.P());
  }
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  return (($thiz.am() === 0) ? (("" + start) + end) : $thiz.j3($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end).aQ.ad);
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = b.aQ;
  if ((start.length !== 0)) {
    jsb.ad = (("" + jsb.ad) + start);
  }
  var it = $thiz.ac();
  if (it.U()) {
    var obj = it.P();
    jsb.ad = (("" + jsb.ad) + obj);
    while (it.U()) {
      if ((sep.length !== 0)) {
        jsb.ad = (("" + jsb.ad) + sep);
      }
      var obj$1 = it.P();
      jsb.ad = (("" + jsb.ad) + obj$1);
    }
  }
  if ((end.length !== 0)) {
    jsb.ad = (("" + jsb.ad) + end);
  }
  return b;
}
/** @constructor */
function $c_sc_Iterator$ConcatIteratorCell(head, tail) {
  this.jD = null;
  this.gh = null;
  this.jD = head;
  this.gh = tail;
}
$p = $c_sc_Iterator$ConcatIteratorCell.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$ConcatIteratorCell;
/** @constructor */
function $h_sc_Iterator$ConcatIteratorCell() {
}
$h_sc_Iterator$ConcatIteratorCell.prototype = $p;
$p.nE = (function() {
  return this.jD.gN().ac();
});
var $d_sc_Iterator$ConcatIteratorCell = new $TypeData().i($c_sc_Iterator$ConcatIteratorCell, "scala.collection.Iterator$ConcatIteratorCell", ({
  bW: 1
}));
/** @constructor */
function $c_sc_StringOps$() {
  this.jE = null;
  $n_sc_StringOps$ = this;
  this.jE = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$2) => this.jE));
}
$p = $c_sc_StringOps$.prototype = new $h_O();
$p.constructor = $c_sc_StringOps$;
/** @constructor */
function $h_sc_StringOps$() {
}
$h_sc_StringOps$.prototype = $p;
var $d_sc_StringOps$ = new $TypeData().i($c_sc_StringOps$, "scala.collection.StringOps$", ({
  c4: 1
}));
var $n_sc_StringOps$;
function $m_sc_StringOps$() {
  if ((!$n_sc_StringOps$)) {
    $n_sc_StringOps$ = new $c_sc_StringOps$();
  }
  return $n_sc_StringOps$;
}
/** @constructor */
function $c_sci_IndexedSeqDefaults$() {
  this.jH = 0;
  $n_sci_IndexedSeqDefaults$ = this;
  try {
    $m_sc_StringOps$();
    var $x_1 = $m_jl_Integer$().nL($m_jl_System$SystemProperties$().m6("scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength", "64"), 10, 214748364);
  } catch (e) {
    if (false) {
      var $x_1 = 64;
    } else {
      var $x_1;
      throw e;
    }
  }
  this.jH = $x_1;
}
$p = $c_sci_IndexedSeqDefaults$.prototype = new $h_O();
$p.constructor = $c_sci_IndexedSeqDefaults$;
/** @constructor */
function $h_sci_IndexedSeqDefaults$() {
}
$h_sci_IndexedSeqDefaults$.prototype = $p;
var $d_sci_IndexedSeqDefaults$ = new $TypeData().i($c_sci_IndexedSeqDefaults$, "scala.collection.immutable.IndexedSeqDefaults$", ({
  c9: 1
}));
var $n_sci_IndexedSeqDefaults$;
function $m_sci_IndexedSeqDefaults$() {
  if ((!$n_sci_IndexedSeqDefaults$)) {
    $n_sci_IndexedSeqDefaults$ = new $c_sci_IndexedSeqDefaults$();
  }
  return $n_sci_IndexedSeqDefaults$;
}
/** @constructor */
function $c_sr_BoxesRunTime$() {
}
$p = $c_sr_BoxesRunTime$.prototype = new $h_O();
$p.constructor = $c_sr_BoxesRunTime$;
/** @constructor */
function $h_sr_BoxesRunTime$() {
}
$h_sr_BoxesRunTime$.prototype = $p;
$p.b = (function(x, y) {
  return ((x === y) || ($is_jl_Number(x) ? this.nn(x, y) : ((x instanceof $Char) ? this.nl(x, y) : ((x === null) ? (y === null) : $dp_equals__O__Z(x, y)))));
});
$p.nn = (function(xn, y) {
  if ($is_jl_Number(y)) {
    return this.nm(xn, y);
  } else if ((y instanceof $Char)) {
    if (((typeof xn) === "number")) {
      return ((+xn) === y.c);
    } else if ((xn instanceof $Long)) {
      var $x_1 = $uJ(xn);
      var x3_$_lo = $x_1.l;
      var x3_$_hi = $x_1.h;
      var value = y.c;
      var hi = (value >> 31);
      return (((x3_$_lo ^ value) | (x3_$_hi ^ hi)) === 0);
    } else {
      return ((xn === null) ? (y === null) : $dp_equals__O__Z(xn, y));
    }
  } else {
    return ((xn === null) ? (y === null) : $dp_equals__O__Z(xn, y));
  }
});
$p.nm = (function(xn, yn) {
  if (((typeof xn) === "number")) {
    var x2 = (+xn);
    if (((typeof yn) === "number")) {
      return (x2 === (+yn));
    } else if ((yn instanceof $Long)) {
      var $x_1 = $uJ(yn);
      var x3_$_lo = $x_1.l;
      var x3_$_hi = $x_1.h;
      return (x2 === ((4.294967296E9 * x3_$_hi) + (x3_$_lo >>> 0.0)));
    } else {
      return (false && yn.s(x2));
    }
  } else if ((xn instanceof $Long)) {
    var $x_2 = $uJ(xn);
    var x3$2_$_lo = $x_2.l;
    var x3$2_$_hi = $x_2.h;
    if ((yn instanceof $Long)) {
      var $x_3 = $uJ(yn);
      var x2$3_$_lo = $x_3.l;
      var x2$3_$_hi = $x_3.h;
      return (((x3$2_$_lo ^ x2$3_$_lo) | (x3$2_$_hi ^ x2$3_$_hi)) === 0);
    } else if (((typeof yn) === "number")) {
      var x3$3 = (+yn);
      return (((4.294967296E9 * x3$2_$_hi) + (x3$2_$_lo >>> 0.0)) === x3$3);
    } else {
      return (false && yn.s($bL(x3$2_$_lo, x3$2_$_hi)));
    }
  } else {
    return ((xn === null) ? (yn === null) : $dp_equals__O__Z(xn, yn));
  }
});
$p.nl = (function(xc, y) {
  if ((y instanceof $Char)) {
    return (xc.c === y.c);
  } else if ($is_jl_Number(y)) {
    if (((typeof y) === "number")) {
      return ((+y) === xc.c);
    } else if ((y instanceof $Long)) {
      var $x_1 = $uJ(y);
      var x3_$_lo = $x_1.l;
      var x3_$_hi = $x_1.h;
      var value = xc.c;
      var hi = (value >> 31);
      return (((x3_$_lo ^ value) | (x3_$_hi ^ hi)) === 0);
    } else {
      return ((y === null) ? (xc === null) : $dp_equals__O__Z(y, xc));
    }
  } else {
    return ((xc === null) && (y === null));
  }
});
var $d_sr_BoxesRunTime$ = new $TypeData().i($c_sr_BoxesRunTime$, "scala.runtime.BoxesRunTime$", ({
  cI: 1
}));
var $n_sr_BoxesRunTime$;
function $m_sr_BoxesRunTime$() {
  if ((!$n_sr_BoxesRunTime$)) {
    $n_sr_BoxesRunTime$ = new $c_sr_BoxesRunTime$();
  }
  return $n_sr_BoxesRunTime$;
}
/** @constructor */
function $c_sr_Scala3RunTime$() {
}
$p = $c_sr_Scala3RunTime$.prototype = new $h_O();
$p.constructor = $c_sr_Scala3RunTime$;
/** @constructor */
function $h_sr_Scala3RunTime$() {
}
$h_sr_Scala3RunTime$.prototype = $p;
$p.n2 = (function() {
  throw new $c_jl_AssertionError("assertion failed");
});
$p.hR = (function() {
  throw $ct_jl_NullPointerException__T__(new $c_jl_NullPointerException(), "tried to cast away nullability, but value is null");
});
var $d_sr_Scala3RunTime$ = new $TypeData().i($c_sr_Scala3RunTime$, "scala.runtime.Scala3RunTime$", ({
  cK: 1
}));
var $n_sr_Scala3RunTime$;
function $m_sr_Scala3RunTime$() {
  if ((!$n_sr_Scala3RunTime$)) {
    $n_sr_Scala3RunTime$ = new $c_sr_Scala3RunTime$();
  }
  return $n_sr_Scala3RunTime$;
}
/** @constructor */
function $c_sr_ScalaRunTime$() {
}
$p = $c_sr_ScalaRunTime$.prototype = new $h_O();
$p.constructor = $c_sr_ScalaRunTime$;
/** @constructor */
function $h_sr_ScalaRunTime$() {
}
$h_sr_ScalaRunTime$.prototype = $p;
$p.g8 = (function(xs, idx) {
  if ((xs instanceof $ac_O)) {
    return xs.f[idx];
  }
  if ((xs instanceof $ac_I)) {
    return xs.f[idx];
  }
  if ((xs instanceof $ac_D)) {
    return xs.f[idx];
  }
  if ((xs instanceof $ac_J)) {
    var $x_1 = xs.f;
    var $x_2 = (idx << 1);
    return $bL($x_1[$x_2], $x_1[(($x_2 + 1) | 0)]);
  }
  if ((xs instanceof $ac_F)) {
    return xs.f[idx];
  }
  if ((xs instanceof $ac_C)) {
    return $bC(xs.f[idx]);
  }
  if ((xs instanceof $ac_B)) {
    return xs.f[idx];
  }
  if ((xs instanceof $ac_S)) {
    return xs.f[idx];
  }
  if ((xs instanceof $ac_Z)) {
    return xs.f[idx];
  }
  if ((xs === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  throw new $c_s_MatchError(xs);
});
$p.mN = (function(x) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(x.Q(), (x.L() + "("), ",", ")");
});
$p.ah = (function(xs) {
  if ((xs === null)) {
    return null;
  } else if ((xs.f.length === 0)) {
    var this$2 = $m_sci_ArraySeq$();
    $m_s_reflect_ManifestFactory$ObjectManifest$();
    return $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef(this$2);
  } else {
    return new $c_sci_ArraySeq$ofRef(xs);
  }
});
var $d_sr_ScalaRunTime$ = new $TypeData().i($c_sr_ScalaRunTime$, "scala.runtime.ScalaRunTime$", ({
  cL: 1
}));
var $n_sr_ScalaRunTime$;
function $m_sr_ScalaRunTime$() {
  if ((!$n_sr_ScalaRunTime$)) {
    $n_sr_ScalaRunTime$ = new $c_sr_ScalaRunTime$();
  }
  return $n_sr_ScalaRunTime$;
}
/** @constructor */
function $c_sr_Statics$() {
}
$p = $c_sr_Statics$.prototype = new $h_O();
$p.constructor = $c_sr_Statics$;
/** @constructor */
function $h_sr_Statics$() {
}
$h_sr_Statics$.prototype = $p;
$p.nP = (function(lv_$_lo, lv_$_hi) {
  return ((lv_$_hi === (lv_$_lo >> 31)) ? lv_$_lo : (lv_$_lo ^ lv_$_hi));
});
$p.nh = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var $x_1 = $m_RTLong$().gQ(dv);
    var lv_$_lo = $x_1.l;
    var lv_$_hi = $x_1.h;
    if ((((4.294967296E9 * lv_$_hi) + (lv_$_lo >>> 0.0)) === dv)) {
      return (lv_$_lo ^ lv_$_hi);
    } else {
      var valueInt = (dv | 0);
      if (((valueInt === dv) && ((1.0 / dv) !== (-Infinity)))) {
        return valueInt;
      } else if ((dv !== dv)) {
        return 2146959360;
      } else {
        var fpBitsDataView = $fpBitsDataView;
        fpBitsDataView.setFloat64(0, dv, true);
        return ((fpBitsDataView.getInt32(0, true) | 0) ^ (fpBitsDataView.getInt32(4, true) | 0));
      }
    }
  }
});
$p.a7 = (function(x) {
  if ((x === null)) {
    return 0;
  } else if (((typeof x) === "number")) {
    return this.nh((+x));
  } else if ((x instanceof $Long)) {
    var $x_1 = $uJ(x);
    return this.nP($x_1.l, $x_1.h);
  } else {
    return $dp_hashCode__I(x);
  }
});
$p.nJ = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_sr_Statics$ = new $TypeData().i($c_sr_Statics$, "scala.runtime.Statics$", ({
  cN: 1
}));
var $n_sr_Statics$;
function $m_sr_Statics$() {
  if ((!$n_sr_Statics$)) {
    $n_sr_Statics$ = new $c_sr_Statics$();
  }
  return $n_sr_Statics$;
}
function $p_sr_Tuples$__specialCaseCons__O__s_Product__s_Product($thiz, x, self) {
  if (($m_T$package$EmptyTuple$() === self)) {
    return new $c_T1(x);
  }
  if ((self instanceof $c_T1)) {
    return new $c_T2(x, self.fr);
  }
  if ((self instanceof $c_T2)) {
    return new $c_T3(x, self.S, self.aq);
  }
  if ((self instanceof $c_T3)) {
    return new $c_T4(x, self.bd, self.aZ, self.b0);
  }
  if ((self instanceof $c_T4)) {
    return new $c_T5(x, self.fF, self.ex, self.ey, self.ez);
  }
  if ((self instanceof $c_T5)) {
    return new $c_T6(x, self.fG, self.eA, self.eB, self.eC, self.eD);
  }
  if ((self instanceof $c_T6)) {
    return new $c_T7(x, self.fH, self.eE, self.eF, self.eG, self.eH, self.eI);
  }
  if ((self instanceof $c_T7)) {
    return new $c_T8(x, self.fI, self.eJ, self.eK, self.eL, self.eM, self.eN, self.eO);
  }
  if ((self instanceof $c_T8)) {
    return new $c_T9(x, self.fJ, self.eP, self.eQ, self.eR, self.eS, self.eT, self.eU, self.eV);
  }
  if ((self instanceof $c_T9)) {
    return new $c_T10(x, self.fK, self.eW, self.eX, self.eY, self.eZ, self.f0, self.f1, self.f2, self.f3);
  }
  if ((self instanceof $c_T10)) {
    return new $c_T11(x, self.fs, self.bo, self.bp, self.bq, self.br, self.bs, self.bt, self.bu, self.bv, self.bn);
  }
  if ((self instanceof $c_T11)) {
    return new $c_T12(x, self.ft, self.by, self.bz, self.bA, self.bB, self.bC, self.bD, self.bE, self.bF, self.bw, self.bx);
  }
  if ((self instanceof $c_T12)) {
    return new $c_T13(x, self.fu, self.bJ, self.bK, self.bL, self.bM, self.bN, self.bO, self.bP, self.bQ, self.bG, self.bH, self.bI);
  }
  if ((self instanceof $c_T13)) {
    return new $c_T14(x, self.fv, self.bV, self.bW, self.bX, self.bY, self.bZ, self.c0, self.c1, self.c2, self.bR, self.bS, self.bT, self.bU);
  }
  if ((self instanceof $c_T14)) {
    return new $c_T15(x, self.fw, self.c8, self.c9, self.ca, self.cb, self.cc, self.cd, self.ce, self.cf, self.c3, self.c4, self.c5, self.c6, self.c7);
  }
  if ((self instanceof $c_T15)) {
    return new $c_T16(x, self.fx, self.cm, self.cn, self.co, self.cp, self.cq, self.cr, self.cs, self.ct, self.cg, self.ch, self.ci, self.cj, self.ck, self.cl);
  }
  if ((self instanceof $c_T16)) {
    return new $c_T17(x, self.fy, self.cB, self.cC, self.cD, self.cE, self.cF, self.cG, self.cH, self.cI, self.cu, self.cv, self.cw, self.cx, self.cy, self.cz, self.cA);
  }
  if ((self instanceof $c_T17)) {
    return new $c_T18(x, self.fz, self.cR, self.cS, self.cT, self.cU, self.cV, self.cW, self.cX, self.cY, self.cJ, self.cK, self.cL, self.cM, self.cN, self.cO, self.cP, self.cQ);
  }
  if ((self instanceof $c_T18)) {
    return new $c_T19(x, self.fA, self.d8, self.d9, self.da, self.db, self.dc, self.dd, self.de, self.df, self.cZ, self.d0, self.d1, self.d2, self.d3, self.d4, self.d5, self.d6, self.d7);
  }
  if ((self instanceof $c_T19)) {
    return new $c_T20(x, self.fB, self.dr, self.ds, self.dt, self.du, self.dv, self.dw, self.dx, self.dy, self.dg, self.dh, self.di, self.dj, self.dk, self.dl, self.dm, self.dn, self.dp, self.dq);
  }
  if ((self instanceof $c_T20)) {
    return new $c_T21(x, self.fC, self.dJ, self.dL, self.dM, self.dN, self.dO, self.dP, self.dQ, self.dR, self.dz, self.dA, self.dB, self.dC, self.dD, self.dE, self.dF, self.dG, self.dH, self.dI, self.dK);
  }
  if ((self instanceof $c_T21)) {
    return new $c_T22(x, self.fD, self.e2, self.e5, self.e6, self.e7, self.e8, self.e9, self.ea, self.eb, self.dS, self.dT, self.dU, self.dV, self.dW, self.dX, self.dY, self.dZ, self.e0, self.e1, self.e3, self.e4);
  }
  if ((self instanceof $c_T22)) {
    return new $c_sr_TupleXXL(new $ac_O([x, self.fE, self.em, self.eq, self.er, self.es, self.et, self.eu, self.ev, self.ew, self.ec, self.ed, self.ee, self.ef, self.eg, self.eh, self.ei, self.ej, self.ek, self.el, self.en, self.eo, self.ep]));
  }
  throw new $c_s_MatchError(self);
}
function $p_sr_Tuples$__xxlCons__O__sr_TupleXXL__sr_TupleXXL($thiz, x, xxl) {
  var arr = new $ac_O(((1 + xxl.I()) | 0));
  arr.f[0] = x;
  var src = xxl.ae;
  var length = xxl.I();
  src.aP(0, arr, 1, length);
  return new $c_sr_TupleXXL(arr);
}
function $p_sr_Tuples$__specialCaseTail__s_Product__s_Product($thiz, self) {
  matchResult34$1: {
    var $x_1;
    if ((self instanceof $c_T1)) {
      var $x_1 = $m_T$package$EmptyTuple$();
      break matchResult34$1;
    }
    if ((self instanceof $c_T2)) {
      var $x_1 = new $c_T1(self.aq);
      break matchResult34$1;
    }
    if ((self instanceof $c_T3)) {
      var $x_1 = new $c_T2(self.aZ, self.b0);
      break matchResult34$1;
    }
    if ((self instanceof $c_T4)) {
      var $x_1 = new $c_T3(self.ex, self.ey, self.ez);
      break matchResult34$1;
    }
    if ((self instanceof $c_T5)) {
      var $x_1 = new $c_T4(self.eA, self.eB, self.eC, self.eD);
      break matchResult34$1;
    }
    if ((self instanceof $c_T6)) {
      var $x_1 = new $c_T5(self.eE, self.eF, self.eG, self.eH, self.eI);
      break matchResult34$1;
    }
    if ((self instanceof $c_T7)) {
      var $x_1 = new $c_T6(self.eJ, self.eK, self.eL, self.eM, self.eN, self.eO);
      break matchResult34$1;
    }
    if ((self instanceof $c_T8)) {
      var $x_1 = new $c_T7(self.eP, self.eQ, self.eR, self.eS, self.eT, self.eU, self.eV);
      break matchResult34$1;
    }
    if ((self instanceof $c_T9)) {
      var $x_1 = new $c_T8(self.eW, self.eX, self.eY, self.eZ, self.f0, self.f1, self.f2, self.f3);
      break matchResult34$1;
    }
    if ((self instanceof $c_T10)) {
      var $x_1 = new $c_T9(self.bo, self.bp, self.bq, self.br, self.bs, self.bt, self.bu, self.bv, self.bn);
      break matchResult34$1;
    }
    if ((self instanceof $c_T11)) {
      var $x_1 = new $c_T10(self.by, self.bz, self.bA, self.bB, self.bC, self.bD, self.bE, self.bF, self.bw, self.bx);
      break matchResult34$1;
    }
    if ((self instanceof $c_T12)) {
      var $x_1 = new $c_T11(self.bJ, self.bK, self.bL, self.bM, self.bN, self.bO, self.bP, self.bQ, self.bG, self.bH, self.bI);
      break matchResult34$1;
    }
    if ((self instanceof $c_T13)) {
      var $x_1 = new $c_T12(self.bV, self.bW, self.bX, self.bY, self.bZ, self.c0, self.c1, self.c2, self.bR, self.bS, self.bT, self.bU);
      break matchResult34$1;
    }
    if ((self instanceof $c_T14)) {
      var $x_1 = new $c_T13(self.c8, self.c9, self.ca, self.cb, self.cc, self.cd, self.ce, self.cf, self.c3, self.c4, self.c5, self.c6, self.c7);
      break matchResult34$1;
    }
    if ((self instanceof $c_T15)) {
      var $x_1 = new $c_T14(self.cm, self.cn, self.co, self.cp, self.cq, self.cr, self.cs, self.ct, self.cg, self.ch, self.ci, self.cj, self.ck, self.cl);
      break matchResult34$1;
    }
    if ((self instanceof $c_T16)) {
      var $x_1 = new $c_T15(self.cB, self.cC, self.cD, self.cE, self.cF, self.cG, self.cH, self.cI, self.cu, self.cv, self.cw, self.cx, self.cy, self.cz, self.cA);
      break matchResult34$1;
    }
    if ((self instanceof $c_T17)) {
      var $x_1 = new $c_T16(self.cR, self.cS, self.cT, self.cU, self.cV, self.cW, self.cX, self.cY, self.cJ, self.cK, self.cL, self.cM, self.cN, self.cO, self.cP, self.cQ);
      break matchResult34$1;
    }
    if ((self instanceof $c_T18)) {
      var $x_1 = new $c_T17(self.d8, self.d9, self.da, self.db, self.dc, self.dd, self.de, self.df, self.cZ, self.d0, self.d1, self.d2, self.d3, self.d4, self.d5, self.d6, self.d7);
      break matchResult34$1;
    }
    if ((self instanceof $c_T19)) {
      var $x_1 = new $c_T18(self.dr, self.ds, self.dt, self.du, self.dv, self.dw, self.dx, self.dy, self.dg, self.dh, self.di, self.dj, self.dk, self.dl, self.dm, self.dn, self.dp, self.dq);
      break matchResult34$1;
    }
    if ((self instanceof $c_T20)) {
      var $x_1 = new $c_T19(self.dJ, self.dL, self.dM, self.dN, self.dO, self.dP, self.dQ, self.dR, self.dz, self.dA, self.dB, self.dC, self.dD, self.dE, self.dF, self.dG, self.dH, self.dI, self.dK);
      break matchResult34$1;
    }
    if ((self instanceof $c_T21)) {
      var $x_1 = new $c_T20(self.e2, self.e5, self.e6, self.e7, self.e8, self.e9, self.ea, self.eb, self.dS, self.dT, self.dU, self.dV, self.dW, self.dX, self.dY, self.dZ, self.e0, self.e1, self.e3, self.e4);
      break matchResult34$1;
    }
    if ((self instanceof $c_T22)) {
      var $x_1 = new $c_T21(self.em, self.eq, self.er, self.es, self.et, self.eu, self.ev, self.ew, self.ec, self.ed, self.ee, self.ef, self.eg, self.eh, self.ei, self.ej, self.ek, self.el, self.en, self.eo, self.ep);
      break matchResult34$1;
    }
    throw new $c_s_MatchError(self);
  }
  return $x_1;
}
function $p_sr_Tuples$__xxlTail__sr_TupleXXL__s_Product($thiz, xxl) {
  if ((xxl.I() === 23)) {
    var elems = xxl.ae;
    return new $c_T22(elems.f[1], elems.f[2], elems.f[3], elems.f[4], elems.f[5], elems.f[6], elems.f[7], elems.f[8], elems.f[9], elems.f[10], elems.f[11], elems.f[12], elems.f[13], elems.f[14], elems.f[15], elems.f[16], elems.f[17], elems.f[18], elems.f[19], elems.f[20], elems.f[21], elems.f[22]);
  } else {
    var arr$1 = new $ac_O(((xxl.ae.f.length - 1) | 0));
    var src = xxl.ae;
    var length = ((xxl.ae.f.length - 1) | 0);
    src.aP(1, arr$1, 0, length);
    return new $c_sr_TupleXXL(arr$1);
  }
}
/** @constructor */
function $c_sr_Tuples$() {
}
$p = $c_sr_Tuples$.prototype = new $h_O();
$p.constructor = $c_sr_Tuples$;
/** @constructor */
function $h_sr_Tuples$() {
}
$h_sr_Tuples$.prototype = $p;
$p.n9 = (function(x, self) {
  return ((self instanceof $c_sr_TupleXXL) ? $p_sr_Tuples$__xxlCons__O__sr_TupleXXL__sr_TupleXXL(this, x, self) : $p_sr_Tuples$__specialCaseCons__O__s_Product__s_Product(this, x, self));
});
$p.p7 = (function(self) {
  return ((self instanceof $c_sr_TupleXXL) ? $p_sr_Tuples$__xxlTail__sr_TupleXXL__s_Product(this, self) : $p_sr_Tuples$__specialCaseTail__s_Product__s_Product(this, self));
});
var $d_sr_Tuples$ = new $TypeData().i($c_sr_Tuples$, "scala.runtime.Tuples$", ({
  cO: 1
}));
var $n_sr_Tuples$;
function $m_sr_Tuples$() {
  if ((!$n_sr_Tuples$)) {
    $n_sr_Tuples$ = new $c_sr_Tuples$();
  }
  return $n_sr_Tuples$;
}
var $d_sjs_js_Any = new $TypeData().i(2, "scala.scalajs.js.Any", ({
  cP: 1
}), $noIsInstance);
/** @constructor */
function $c_sjs_js_Any$ObjectCompanionOps$() {
}
$p = $c_sjs_js_Any$ObjectCompanionOps$.prototype = new $h_O();
$p.constructor = $c_sjs_js_Any$ObjectCompanionOps$;
/** @constructor */
function $h_sjs_js_Any$ObjectCompanionOps$() {
}
$h_sjs_js_Any$ObjectCompanionOps$.prototype = $p;
$p.nC = (function(this$, o, p) {
  return (!(!(p in o)));
});
var $d_sjs_js_Any$ObjectCompanionOps$ = new $TypeData().i($c_sjs_js_Any$ObjectCompanionOps$, "scala.scalajs.js.Any$ObjectCompanionOps$", ({
  cR: 1
}));
var $n_sjs_js_Any$ObjectCompanionOps$;
function $m_sjs_js_Any$ObjectCompanionOps$() {
  if ((!$n_sjs_js_Any$ObjectCompanionOps$)) {
    $n_sjs_js_Any$ObjectCompanionOps$ = new $c_sjs_js_Any$ObjectCompanionOps$();
  }
  return $n_sjs_js_Any$ObjectCompanionOps$;
}
/** @constructor */
function $c_sjs_js_ArrayOps$() {
}
$p = $c_sjs_js_ArrayOps$.prototype = new $h_O();
$p.constructor = $c_sjs_js_ArrayOps$;
/** @constructor */
function $h_sjs_js_ArrayOps$() {
}
$h_sjs_js_ArrayOps$.prototype = $p;
$p.m8 = (function(this$, elem, from) {
  var len = (this$.length | 0);
  var i = from;
  while ((i < len)) {
    if ($m_sr_BoxesRunTime$().b(elem, this$[i])) {
      return i;
    }
    i = ((1 + i) | 0);
  }
  return (-1);
});
$p.mF = (function(this$, that) {
  var b = [];
  var len = (this$.length | 0);
  var i = 0;
  var it = that.ac();
  while (((i < len) && it.U())) {
    b.push(new $c_T2(this$[i], it.P()));
    i = ((1 + i) | 0);
  }
  return b;
});
$p.mG = (function(this$) {
  var len = (this$.length | 0);
  var b = new Array(len);
  var i = 0;
  while ((i < len)) {
    b[i] = new $c_T2(this$[i], i);
    i = ((1 + i) | 0);
  }
  return b;
});
$p.M = (function(this$, f) {
  var len = (this$.length | 0);
  var i = 0;
  while ((i < len)) {
    f.h(this$[i]);
    i = ((1 + i) | 0);
  }
});
var $d_sjs_js_ArrayOps$ = new $TypeData().i($c_sjs_js_ArrayOps$, "scala.scalajs.js.ArrayOps$", ({
  cS: 1
}));
var $n_sjs_js_ArrayOps$;
function $m_sjs_js_ArrayOps$() {
  if ((!$n_sjs_js_ArrayOps$)) {
    $n_sjs_js_ArrayOps$ = new $c_sjs_js_ArrayOps$();
  }
  return $n_sjs_js_ArrayOps$;
}
/** @constructor */
function $c_sjs_js_ArrayOpsCommon$() {
}
$p = $c_sjs_js_ArrayOpsCommon$.prototype = new $h_O();
$p.constructor = $c_sjs_js_ArrayOpsCommon$;
/** @constructor */
function $h_sjs_js_ArrayOpsCommon$() {
}
$h_sjs_js_ArrayOpsCommon$.prototype = $p;
$p.a = (function(left, right) {
  var leftLength = (left.length | 0);
  var rightLength = (right.length | 0);
  var result = new Array(((leftLength + rightLength) | 0));
  var i = 0;
  while (true) {
    if ((i !== leftLength)) {
      result[i] = left[i];
      i = ((1 + i) | 0);
      continue;
    }
    break;
  }
  var i$1 = 0;
  while (true) {
    if ((i$1 !== rightLength)) {
      result[((i$1 + leftLength) | 0)] = right[i$1];
      i$1 = ((1 + i$1) | 0);
      continue;
    }
    break;
  }
  return result;
});
var $d_sjs_js_ArrayOpsCommon$ = new $TypeData().i($c_sjs_js_ArrayOpsCommon$, "scala.scalajs.js.ArrayOpsCommon$", ({
  cT: 1
}));
var $n_sjs_js_ArrayOpsCommon$;
function $m_sjs_js_ArrayOpsCommon$() {
  if ((!$n_sjs_js_ArrayOpsCommon$)) {
    $n_sjs_js_ArrayOpsCommon$ = new $c_sjs_js_ArrayOpsCommon$();
  }
  return $n_sjs_js_ArrayOpsCommon$;
}
/** @constructor */
function $c_sjs_js_WrappedDictionary$Cache$() {
  this.jR = null;
  $n_sjs_js_WrappedDictionary$Cache$ = this;
  this.jR = Object.prototype.hasOwnProperty;
}
$p = $c_sjs_js_WrappedDictionary$Cache$.prototype = new $h_O();
$p.constructor = $c_sjs_js_WrappedDictionary$Cache$;
/** @constructor */
function $h_sjs_js_WrappedDictionary$Cache$() {
}
$h_sjs_js_WrappedDictionary$Cache$.prototype = $p;
var $d_sjs_js_WrappedDictionary$Cache$ = new $TypeData().i($c_sjs_js_WrappedDictionary$Cache$, "scala.scalajs.js.WrappedDictionary$Cache$", ({
  cX: 1
}));
var $n_sjs_js_WrappedDictionary$Cache$;
function $m_sjs_js_WrappedDictionary$Cache$() {
  if ((!$n_sjs_js_WrappedDictionary$Cache$)) {
    $n_sjs_js_WrappedDictionary$Cache$ = new $c_sjs_js_WrappedDictionary$Cache$();
  }
  return $n_sjs_js_WrappedDictionary$Cache$;
}
/** @constructor */
function $c_sjs_js_special_package$() {
}
$p = $c_sjs_js_special_package$.prototype = new $h_O();
$p.constructor = $c_sjs_js_special_package$;
/** @constructor */
function $h_sjs_js_special_package$() {
}
$h_sjs_js_special_package$.prototype = $p;
$p.d = (function(properties) {
  var result = ({});
  properties.gP(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((pair$2$2) => {
    result[pair$2$2.S] = pair$2$2.aq;
  })));
  return result;
});
var $d_sjs_js_special_package$ = new $TypeData().i($c_sjs_js_special_package$, "scala.scalajs.js.special.package$", ({
  cY: 1
}));
var $n_sjs_js_special_package$;
function $m_sjs_js_special_package$() {
  if ((!$n_sjs_js_special_package$)) {
    $n_sjs_js_special_package$ = new $c_sjs_js_special_package$();
  }
  return $n_sjs_js_special_package$;
}
/** @constructor */
function $c_sjsr_Compat$() {
}
$p = $c_sjsr_Compat$.prototype = new $h_O();
$p.constructor = $c_sjsr_Compat$;
/** @constructor */
function $h_sjsr_Compat$() {
}
$h_sjsr_Compat$.prototype = $p;
$p.ag = (function(seq) {
  if ((seq instanceof $c_sjsr_WrappedVarArgs)) {
    return seq.hh;
  } else {
    var result = [];
    seq.gP(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2$2) => (result.push(x$2$2) | 0))));
    return result;
  }
});
var $d_sjsr_Compat$ = new $TypeData().i($c_sjsr_Compat$, "scala.scalajs.runtime.Compat$", ({
  cZ: 1
}));
var $n_sjsr_Compat$;
function $m_sjsr_Compat$() {
  if ((!$n_sjsr_Compat$)) {
    $n_sjsr_Compat$ = new $c_sjsr_Compat$();
  }
  return $n_sjsr_Compat$;
}
/** @constructor */
function $c_sjsr_package$() {
}
$p = $c_sjsr_package$.prototype = new $h_O();
$p.constructor = $c_sjsr_package$;
/** @constructor */
function $h_sjsr_package$() {
}
$h_sjsr_package$.prototype = $p;
$p.c = (function(array) {
  var len = array.f.length;
  var result = [];
  var i = 0;
  while ((i !== len)) {
    var x1 = i;
    result.push(array.f[x1]);
    i = ((1 + i) | 0);
  }
  return result;
});
var $d_sjsr_package$ = new $TypeData().i($c_sjsr_package$, "scala.scalajs.runtime.package$", ({
  d0: 1
}));
var $n_sjsr_package$;
function $m_sjsr_package$() {
  if ((!$n_sjsr_package$)) {
    $n_sjsr_package$ = new $c_sjsr_package$();
  }
  return $n_sjsr_package$;
}
/** @constructor */
function $c_s_util_hashing_MurmurHash3() {
}
$p = $c_s_util_hashing_MurmurHash3.prototype = new $h_O();
$p.constructor = $c_s_util_hashing_MurmurHash3;
/** @constructor */
function $h_s_util_hashing_MurmurHash3() {
}
$h_s_util_hashing_MurmurHash3.prototype = $p;
$p.K = (function(hash, data) {
  var h = this.mr(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.mr = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.av = (function(hash, length) {
  return this.hb((hash ^ length));
});
$p.hb = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.V = (function(x, seed, ignorePrefix) {
  var arr = x.I();
  if ((arr === 0)) {
    return ((!ignorePrefix) ? $f_T__hashCode__I(x.L()) : seed);
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.K(h, $f_T__hashCode__I(x.L()));
    }
    var i = 0;
    while ((i < arr)) {
      h = this.K(h, $m_sr_Statics$().a7(x.t(i)));
      i = ((1 + i) | 0);
    }
    return this.av(h, arr);
  }
});
$p.n7 = (function(x, seed, caseClassName) {
  var arr = x.I();
  var aye = $f_T__hashCode__I(((caseClassName !== null) ? caseClassName : x.L()));
  if ((arr === 0)) {
    return aye;
  } else {
    var h = seed;
    h = this.K(h, aye);
    var i = 0;
    while ((i < arr)) {
      h = this.K(h, $m_sr_Statics$().a7(x.t(i)));
      i = ((1 + i) | 0);
    }
    return this.av(h, arr);
  }
});
$p.pe = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = xs.ac();
  while (iterator.U()) {
    var x = iterator.P();
    var h = $m_sr_Statics$().a7(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0);
  }
  var h$2 = seed;
  h$2 = this.K(h$2, a);
  h$2 = this.K(h$2, b);
  h$2 = this.mr(h$2, c);
  return this.av(h$2, n);
});
$p.ow = (function(xs, seed) {
  var it = xs.ac();
  var h = seed;
  if ((!it.U())) {
    return this.av(h, 0);
  }
  var x0 = it.P();
  if ((!it.U())) {
    return this.av(this.K(h, $m_sr_Statics$().a7(x0)), 1);
  }
  var x1 = it.P();
  var initial = $m_sr_Statics$().a7(x0);
  h = this.K(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().a7(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while (it.U()) {
    h = this.K(h, prev);
    var hash = $m_sr_Statics$().a7(it.P());
    if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
      h = this.K(h, hash);
      i = ((1 + i) | 0);
      while (it.U()) {
        h = this.K(h, $m_sr_Statics$().a7(it.P()));
        i = ((1 + i) | 0);
      }
      return this.av(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.hb(this.K(this.K(h0, rangeDiff), prev));
});
$p.lR = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().jc(a);
  switch (l) {
    case 0: {
      return this.av(h, 0);
      break;
    }
    case 1: {
      return this.av(this.K(h, $m_sr_Statics$().a7($m_sr_ScalaRunTime$().g8(a, 0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().a7($m_sr_ScalaRunTime$().g8(a, 0));
      h = this.K(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().a7($m_sr_ScalaRunTime$().g8(a, 1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.K(h, prev);
        var hash = $m_sr_Statics$().a7($m_sr_ScalaRunTime$().g8(a, i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.K(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.K(h, $m_sr_Statics$().a7($m_sr_ScalaRunTime$().g8(a, i)));
            i = ((1 + i) | 0);
          }
          return this.av(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.hb(this.K(this.K(h0, rangeDiff), prev));
    }
  }
});
$p.oJ = (function(start, step, last, seed) {
  return this.hb(this.K(this.K(this.K(seed, start), step), last));
});
$p.nF = (function(a, seed) {
  var h = seed;
  var l = a.R();
  switch (l) {
    case 0: {
      return this.av(h, 0);
      break;
    }
    case 1: {
      return this.av(this.K(h, $m_sr_Statics$().a7(a.a2(0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().a7(a.a2(0));
      h = this.K(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().a7(a.a2(1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.K(h, prev);
        var hash = $m_sr_Statics$().a7(a.a2(i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.K(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.K(h, $m_sr_Statics$().a7(a.a2(i)));
            i = ((1 + i) | 0);
          }
          return this.av(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.hb(this.K(this.K(h0, rangeDiff), prev));
    }
  }
});
$p.nO = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!elems.a8())) {
    elems.hQ();
  }
  return ((rangeState === 2) ? this.oJ(initial, rangeDiff, prev, seed) : this.av(h, n));
});
function $p_Lsketches_experiments_gridceiling_GridCeiling$package$__fbm$1__I__I__D__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr($thiz, FbmOctaves$2, domainPeriod$1, FbmGain$2, domainPos) {
  var acc = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o().h(0.0);
  var freq = 1;
  var amp = 1.0;
  var totalAmp = 0.0;
  var o = 0;
  while ((o < FbmOctaves$2)) {
    var pd = Math.imul(domainPeriod$1, freq);
    acc = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().j2(acc, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().Z($m_Ltrivalibs_graphics_shader_lib_noise_Extended$().ou($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().lO(domainPos, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), freq), $m_Ltrivalibs_graphics_math_gpu_vec3$().aJ($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o().h(pd), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o().h(pd)), null, null), amp));
    totalAmp = (totalAmp + amp);
    freq = (freq << 1);
    amp = (amp * FbmGain$2);
    o = ((1 + o) | 0);
  }
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().gO($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().ns($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().j1(acc, totalAmp)));
}
function $p_Lsketches_experiments_gridceiling_GridCeiling$package$__bakeShade$1__I__D__Ltrivalibs_graphics_painter_Painter__D__I__Ltrivalibs_graphics_painter_Shade($thiz, FbmOctaves$1, FbmGain$1, p$1, NoiseScale$1, domainPeriod) {
  var program = new $c_Ltrivalibs_graphics_shader_dsl_Program();
  var ctx = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg;
  try {
    var uv = ctx.ba.k("uv");
    var AssignTarget_this = ctx.bb.a3("worldPos");
    var value$proxy1 = ctx.ba.k("position");
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var x0 = (((("  " + AssignTarget_this.W) + " = ") + value$proxy1.e) + ";");
    var AssignTarget_this$2 = ctx.bb.gD;
    var $x_4 = $m_Ltrivalibs_graphics_math_gpu_vec4$();
    var $x_3 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().m5($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().bm(uv));
    var $x_2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
    var e$proxy2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().ge(uv);
    var L$proxy1 = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aW();
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var value$proxy3 = $x_4.lQ($x_3, $x_2.m5(L$proxy1.aY((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aV(1.0)) + " - ") + e$proxy2.e) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o().h(1.0));
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var x1 = (((("  " + AssignTarget_this$2.W) + " = ") + value$proxy3.e) + ";");
    var array = [x0, x1];
    var out = [];
    var i = 0;
    while ((i < (array.length | 0))) {
      var idx = i;
      var p = array[idx];
      if ((p.length > 0)) {
        out.push(p);
      }
      i = ((1 + i) | 0);
    }
    var $x_1 = out.join("\n");
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev;
  }
  program.b9 = $x_1;
  var array$1 = reg.a1;
  var len = (array$1.length | 0);
  var i$1 = 0;
  while ((i$1 < len)) {
    $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$1[i$1]);
    i$1 = ((1 + i$1) | 0);
  }
  var ctx$2 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$2;
  try {
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var n = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("n");
    var x0$2 = n.w($p_Lsketches_experiments_gridceiling_GridCeiling$package$__fbm$1__I__I__D__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr($thiz, FbmOctaves$1, domainPeriod, FbmGain$1, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().lO(ctx$2.ao.k("worldPos"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), NoiseScale$1)));
    var AssignTarget_this$1 = ctx$2.ai.a3("color");
    var value$proxy5 = $m_Ltrivalibs_graphics_math_gpu_vec4$().af($m_Ltrivalibs_graphics_math_gpu_vec3$().aT(n), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o().h(1.0));
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var x1$1 = (((("  " + AssignTarget_this$1.W) + " = ") + value$proxy5.e) + ";");
    var array$2 = [x0$2, x1$1];
    var out$1 = [];
    var i$2 = 0;
    while ((i$2 < (array$2.length | 0))) {
      var idx$1 = i$2;
      var p$2 = array$2[idx$1];
      if ((p$2.length > 0)) {
        out$1.push(p$2);
      }
      i$2 = ((1 + i$2) | 0);
    }
    var $x_5 = out$1.join("\n");
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$2;
  }
  program.b8 = $x_5;
  var array$3 = reg$2.a1;
  var len$1 = (array$3.length | 0);
  var i$3 = 0;
  while ((i$3 < len$1)) {
    $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$3[i$3]);
    i$3 = ((1 + i$3) | 0);
  }
  var b = program.b9;
  var b$1 = program.b8;
  var helperFns$proxy1 = program.al();
  var id = p$1.q;
  p$1.q = ((1 + p$1.q) | 0);
  var names = [];
  var dict = ({});
  var i$4 = 0;
  while ((i$4 < (names.length | 0))) {
    dict[names[i$4]] = i$4;
    i$4 = ((1 + i$4) | 0);
  }
  var names$2 = [];
  var dict$2 = ({});
  var i$2$1 = 0;
  while ((i$2$1 < (names$2.length | 0))) {
    dict$2[names$2[i$2$1]] = i$2$1;
    i$2$1 = ((1 + i$2$1) | 0);
  }
  var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef(b, b$1, helperFns$proxy1);
  var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().a(["position"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], [])), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
  var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["worldPos"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, "", sd.a6, sd.a5, fragBuiltinParams);
  var args$proxy1 = $m_sr_ScalaRunTime$().ah(new ($d_sjs_js_Any.r().C)([baseWgsl]));
  console.log(...$m_sjsr_Compat$().ag(args$proxy1));
  var module = p$1.g.createShaderModule(({
    "code": baseWgsl
  }));
  var formats = $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], $m_sjs_js_ArrayOpsCommon$().a(["float32x2"], []));
  var sizes = $m_sjs_js_ArrayOpsCommon$().a([12], $m_sjs_js_ArrayOpsCommon$().a([8], []));
  var offsets = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes);
  var stride = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes);
  var attributes = [];
  var i$3$1 = 0;
  while ((i$3$1 < (formats.length | 0))) {
    var value$2 = i$3$1;
    var value$3 = (offsets[i$3$1] | 0);
    var s = formats[i$3$1];
    attributes.push(({
      "shaderLocation": value$2,
      "offset": value$3,
      "format": s
    }));
    i$3$1 = ((1 + i$3$1) | 0);
  }
  var vbl = ({
    "arrayStride": stride,
    "attributes": attributes
  });
  var bgls = [];
  return new $c_Ltrivalibs_graphics_painter_Shade(id, module, vbl, null, null, $m_Ltrivalibs_graphics_shader_layouts$().O(p$1.g, bgls), false, dict, dict$2);
}
function $p_Lsketches_experiments_gridceiling_GridCeiling$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form($thiz, p$2, faces) {
  var mesh$proxy1 = $m_Ltrivalibs_graphics_geometry_Mesh$().mY(faces, null, 0, new $c_Ltrivalibs_graphics_geometry_package$package$$anon$1(0));
  var vl = new $c_Ltrivalibs_graphics_geometry_VertexLayout$named(new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$(), new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$(), $m_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$())));
  var f = ((v$3, ref$3) => {
    var values$proxy1 = vl.ka.gc(v$3);
    var baseOffset$proxy1 = (ref$3.off | 0);
    var nestedValues = values$proxy1.t(0);
    var value = nestedValues.t(0);
    ref$3.dv.setFloat32(baseOffset$proxy1, Math.fround(value), true);
    var tailOffset = ((4 + baseOffset$proxy1) | 0);
    var value$2 = nestedValues.t(1);
    ref$3.dv.setFloat32(tailOffset, Math.fround(value$2), true);
    var tailOffset$2 = ((4 + tailOffset) | 0);
    var value$3 = nestedValues.t(2);
    ref$3.dv.setFloat32(tailOffset$2, Math.fround(value$3), true);
    var tailOffset$4 = ((12 + baseOffset$proxy1) | 0);
    var nestedValues$2 = values$proxy1.t(1);
    var value$4 = nestedValues$2.t(0);
    ref$3.dv.setFloat32(tailOffset$4, Math.fround(value$4), true);
    var tailOffset$5 = ((4 + tailOffset$4) | 0);
    var value$5 = nestedValues$2.t(1);
    ref$3.dv.setFloat32(tailOffset$5, Math.fround(value$5), true);
  });
  var \u03b4proxy2 = $m_Ltrivalibs_graphics_geometry_buffers$package$();
  var vertexCount = 0;
  var hasQuads = false;
  var fi = 0;
  while ((fi < (mesh$proxy1.b5.length | 0))) {
    var n = (mesh$proxy1.b5[fi].length | 0);
    vertexCount = ((vertexCount + n) | 0);
    if ((n === 4)) {
      hasQuads = true;
    }
    fi = ((1 + fi) | 0);
  }
  var count$proxy1 = vertexCount;
  var buffer = new ArrayBuffer(Math.imul(20, count$proxy1));
  var verts = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), count$proxy1);
  var vi = 0;
  if ((!hasQuads)) {
    fi = 0;
    while ((fi < (mesh$proxy1.b5.length | 0))) {
      var arr = mesh$proxy1.b5[fi];
      var si = 0;
      while ((si < (arr.length | 0))) {
        var x0 = arr[si];
        var index$proxy1 = vi;
        var offset$proxy6 = Math.imul(20, index$proxy1);
        var x1 = new ($a_Ltrivalibs_bufferdata_BufferView())(verts.dv, offset$proxy6);
        f(x0, x1);
        vi = ((1 + vi) | 0);
        si = ((1 + si) | 0);
      }
      fi = ((1 + fi) | 0);
    }
    var $x_1 = new $c_Ltrivalibs_graphics_geometry_BufferedGeometry(verts, null);
  } else {
    var idxBuf = [];
    var base = 0;
    fi = 0;
    while ((fi < (mesh$proxy1.b5.length | 0))) {
      var arr$2 = mesh$proxy1.b5[fi];
      var n$2 = (arr$2.length | 0);
      var si$2 = 0;
      while ((si$2 < n$2)) {
        var x0$1 = arr$2[si$2];
        var index$proxy2 = vi;
        var offset$proxy7 = Math.imul(20, index$proxy2);
        var x1$1 = new ($a_Ltrivalibs_bufferdata_BufferView())(verts.dv, offset$proxy7);
        f(x0$1, x1$1);
        vi = ((1 + vi) | 0);
        si$2 = ((1 + si$2) | 0);
      }
      if ((n$2 === 3)) {
        idxBuf.push(base, ((1 + base) | 0), ((2 + base) | 0));
      } else {
        idxBuf.push(base, ((1 + base) | 0), ((2 + base) | 0));
        idxBuf.push(base, ((2 + base) | 0), ((3 + base) | 0));
      }
      base = ((base + n$2) | 0);
      fi = ((1 + fi) | 0);
    }
    var $x_1 = new $c_Ltrivalibs_graphics_geometry_BufferedGeometry(verts, \u03b4proxy2.om(idxBuf, vertexCount));
  }
  return p$2.nu($x_1, (void 0), (void 0), (void 0), (void 0), (void 0));
}
function $p_Lsketches_experiments_gridceiling_GridCeiling$package$__bakeTile$1__Ltrivalibs_graphics_painter_Painter__I__I__sjs_js_Array__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_Panel($thiz, p$3, w, h, faces, shade) {
  var shape$1 = p$3.gb($p_Lsketches_experiments_gridceiling_GridCeiling$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form($thiz, p$3, faces), shade, "none", (void 0));
  return p$3.bc(w, h, (void 0), (void 0), (void 0), (void 0), true, (void 0), (void 0), shape$1, (void 0), (void 0), (void 0));
}
/** @constructor */
function $c_Lsketches_experiments_gridceiling_GridCeiling$package$() {
}
$p = $c_Lsketches_experiments_gridceiling_GridCeiling$package$.prototype = new $h_O();
$p.constructor = $c_Lsketches_experiments_gridceiling_GridCeiling$package$;
/** @constructor */
function $h_Lsketches_experiments_gridceiling_GridCeiling$package$() {
}
$h_Lsketches_experiments_gridceiling_GridCeiling$package$.prototype = $p;
$p.aC = (function(c, u, v) {
  return new $c_T2(c, new $c_Ltrivalibs_graphics_math_cpu_Vec2(u, v));
});
$p.my = (function(n, length, xCenter, startZ, step, gridY, sw, sh, tileWorld, vTileCount) {
  var perStripV = ((2.0 * sh) + sw);
  var vFull = (vTileCount * perStripV);
  var vH = (sh / vFull);
  var vB = (sw / vFull);
  var perStripVn = (perStripV / vFull);
  var faces = [];
  var i = 0;
  while ((i < n)) {
    var box = $m_Ltrivalibs_graphics_geometry_Box$().j5(new $c_Ltrivalibs_graphics_math_cpu_Vec3(xCenter, gridY, (startZ + (i * step))), length, sh, sw);
    var vb = (i * perStripVn);
    var f = ((tileWorld, vb, vH) => ((c$2, uvw$2) => $m_Lsketches_experiments_gridceiling_GridCeiling$package$().aC(c$2, (c$2.x / tileWorld), (vb + (uvw$2.v * vH)))))(tileWorld, vb, vH);
    var $x_4 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
    var x0 = box.fQ;
    var x1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0);
    var $x_3 = f(x0, x1);
    var x0$1 = box.f7;
    var x1$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
    var $x_2 = f(x0$1, x1$1);
    var x0$2 = box.f8;
    var x1$2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0);
    var $x_1 = f(x0$2, x1$2);
    var x0$3 = box.fR;
    var x1$3 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 0.0);
    faces.push($x_4.aB($x_3, $x_2, $x_1, f(x0$3, x1$3)));
    var f$1 = ((tileWorld, vb, vH) => ((c$2$1, uvw$2$1) => $m_Lsketches_experiments_gridceiling_GridCeiling$package$().aC(c$2$1, (c$2$1.x / tileWorld), ((vb + vH) + (uvw$2$1.v * vH)))))(tileWorld, vb, vH);
    var $x_8 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
    var x0$4 = box.fP;
    var x1$4 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 1.0);
    var $x_7 = f$1(x0$4, x1$4);
    var x0$5 = box.f6;
    var x1$5 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0);
    var $x_6 = f$1(x0$5, x1$5);
    var x0$6 = box.f5;
    var x1$6 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0);
    var $x_5 = f$1(x0$6, x1$6);
    var x0$7 = box.fO;
    var x1$7 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0);
    faces.push($x_8.aB($x_7, $x_6, $x_5, f$1(x0$7, x1$7)));
    var f$2 = ((tileWorld, vb, vH, vB) => ((c$2$2, uvw$2$2) => $m_Lsketches_experiments_gridceiling_GridCeiling$package$().aC(c$2$2, (c$2$2.x / tileWorld), ((vb + (2.0 * vH)) + (uvw$2$2.y * vB)))))(tileWorld, vb, vH, vB);
    var $x_12 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
    var x0$8 = box.f7;
    var x1$8 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
    var $x_11 = f$2(x0$8, x1$8);
    var x0$9 = box.f5;
    var x1$9 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0);
    var $x_10 = f$2(x0$9, x1$9);
    var x0$10 = box.f6;
    var x1$10 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0);
    var $x_9 = f$2(x0$10, x1$10);
    var x0$11 = box.f8;
    var x1$11 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0);
    faces.push($x_12.aB($x_11, $x_10, $x_9, f$2(x0$11, x1$11)));
    i = ((1 + i) | 0);
  }
  return faces;
});
$p.lZ = (function(n, length, zCenter, startX, step, gridY, sw, sh, tileWorld, vTileCount) {
  var perStripV = ((2.0 * sh) + sw);
  var vFull = (vTileCount * perStripV);
  var vH = (sh / vFull);
  var vB = (sw / vFull);
  var perStripVn = (perStripV / vFull);
  var faces = [];
  var i = 0;
  while ((i < n)) {
    var box = $m_Ltrivalibs_graphics_geometry_Box$().j5(new $c_Ltrivalibs_graphics_math_cpu_Vec3((startX + (i * step)), gridY, zCenter), sw, sh, length);
    var vb = (i * perStripVn);
    var f = ((tileWorld, vb, vH) => ((c$2, uvw$2) => $m_Lsketches_experiments_gridceiling_GridCeiling$package$().aC(c$2, (c$2.y / tileWorld), (vb + (uvw$2.v * vH)))))(tileWorld, vb, vH);
    var $x_4 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
    var x0 = box.fO;
    var x1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0);
    var $x_3 = f(x0, x1);
    var x0$1 = box.f5;
    var x1$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0);
    var $x_2 = f(x0$1, x1$1);
    var x0$2 = box.f7;
    var x1$2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
    var $x_1 = f(x0$2, x1$2);
    var x0$3 = box.fQ;
    var x1$3 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0);
    faces.push($x_4.aB($x_3, $x_2, $x_1, f(x0$3, x1$3)));
    var f$1 = ((tileWorld, vb, vH) => ((c$2$1, uvw$2$1) => $m_Lsketches_experiments_gridceiling_GridCeiling$package$().aC(c$2$1, (c$2$1.y / tileWorld), ((vb + vH) + (uvw$2$1.v * vH)))))(tileWorld, vb, vH);
    var $x_8 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
    var x0$4 = box.fR;
    var x1$4 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 0.0);
    var $x_7 = f$1(x0$4, x1$4);
    var x0$5 = box.f8;
    var x1$5 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0);
    var $x_6 = f$1(x0$5, x1$5);
    var x0$6 = box.f6;
    var x1$6 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0);
    var $x_5 = f$1(x0$6, x1$6);
    var x0$7 = box.fP;
    var x1$7 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 1.0);
    faces.push($x_8.aB($x_7, $x_6, $x_5, f$1(x0$7, x1$7)));
    var f$2 = ((tileWorld, vb, vH, vB) => ((c$2$2, uvw$2$2) => $m_Lsketches_experiments_gridceiling_GridCeiling$package$().aC(c$2$2, (c$2$2.y / tileWorld), ((vb + (2.0 * vH)) + (uvw$2$2.x * vB)))))(tileWorld, vb, vH, vB);
    var $x_12 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
    var x0$8 = box.f7;
    var x1$8 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
    var $x_11 = f$2(x0$8, x1$8);
    var x0$9 = box.f5;
    var x1$9 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0);
    var $x_10 = f$2(x0$9, x1$9);
    var x0$10 = box.f6;
    var x1$10 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0);
    var $x_9 = f$2(x0$10, x1$10);
    var x0$11 = box.f8;
    var x1$11 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0);
    faces.push($x_12.aB($x_11, $x_10, $x_9, f$2(x0$11, x1$11)));
    i = ((1 + i) | 0);
  }
  return faces;
});
$p.hS = (function(size, centerXZ, y, normal, tileWorld) {
  var center$proxy1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(centerXZ, y, centerXZ);
  var f = ((pos$2, _$1$2) => $m_Lsketches_experiments_gridceiling_GridCeiling$package$().aC(pos$2, (pos$2.x / tileWorld), (pos$2.y / tileWorld)));
  var uvAtPivot = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.5, 0.5);
  var n = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().T(), normal, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
  var x = n.v;
  if (((+Math.abs(x)) > 0.999)) {
    var up = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().T(), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
  } else {
    var up = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
  }
  var tangent = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().T(), up, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), n);
  var n$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().T(), n, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
  var uDir = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().T(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().T(), tangent, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().T(), n$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D($m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), n$1, tangent))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
  var uVec = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().T(), uDir, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), size);
  var vVec = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().T(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().T(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().T(), n$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uDir), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$()), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), size);
  var tlPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().T(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().T(), center$proxy1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().T(), uVec, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uvAtPivot.ir)), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().T(), vVec, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uvAtPivot.is));
  var trPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().T(), tlPos, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uVec);
  var blPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().T(), tlPos, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), vVec);
  var brPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().T(), blPos, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uVec);
  var $x_4 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x1 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 0.0);
  var $x_3 = f(tlPos, x1);
  var x1$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 1.0);
  var $x_2 = f(blPos, x1$1);
  var x1$2 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(1.0, 1.0);
  var $x_1 = f(brPos, x1$2);
  var x1$3 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(1.0, 0.0);
  return [$x_4.aB($x_3, $x_2, $x_1, f(trPos, x1$3))];
});
$p.lV = (function(size, height) {
  var box = $m_Ltrivalibs_graphics_geometry_Box$().j5(new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, (0.5 * height), 0.0), size, height, size);
  var f = ((c$2, uvw$2) => $m_Lsketches_experiments_gridceiling_GridCeiling$package$().aC(c$2, uvw$2.x, (0.0 + (0.2 * uvw$2.y))));
  var $x_24 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0 = box.fO;
  var x1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0);
  var $x_23 = f(x0, x1);
  var x0$1 = box.fQ;
  var x1$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0);
  var $x_22 = f(x0$1, x1$1);
  var x0$2 = box.fR;
  var x1$2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 0.0);
  var $x_21 = f(x0$2, x1$2);
  var x0$3 = box.fP;
  var x1$3 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 1.0);
  var $x_20 = $x_24.aB($x_23, $x_22, $x_21, f(x0$3, x1$3));
  var f$1 = ((c$2$1, uvw$2$1) => $m_Lsketches_experiments_gridceiling_GridCeiling$package$().aC(c$2$1, uvw$2$1.x, (0.2 + (0.2 * uvw$2$1.v))));
  var $x_19 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0$4 = box.fQ;
  var x1$4 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0);
  var $x_18 = f$1(x0$4, x1$4);
  var x0$5 = box.f7;
  var x1$5 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
  var $x_17 = f$1(x0$5, x1$5);
  var x0$6 = box.f8;
  var x1$6 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0);
  var $x_16 = f$1(x0$6, x1$6);
  var x0$7 = box.fR;
  var x1$7 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 0.0);
  var $x_15 = $x_19.aB($x_18, $x_17, $x_16, f$1(x0$7, x1$7));
  var f$2 = ((c$2$2, uvw$2$2) => $m_Lsketches_experiments_gridceiling_GridCeiling$package$().aC(c$2$2, uvw$2$2.x, (0.4 + (0.2 * uvw$2$2.v))));
  var $x_14 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0$8 = box.fP;
  var x1$8 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 1.0);
  var $x_13 = f$2(x0$8, x1$8);
  var x0$9 = box.f6;
  var x1$9 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0);
  var $x_12 = f$2(x0$9, x1$9);
  var x0$10 = box.f5;
  var x1$10 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0);
  var $x_11 = f$2(x0$10, x1$10);
  var x0$11 = box.fO;
  var x1$11 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0);
  var $x_10 = $x_14.aB($x_13, $x_12, $x_11, f$2(x0$11, x1$11));
  var f$3 = ((c$2$3, uvw$2$3) => $m_Lsketches_experiments_gridceiling_GridCeiling$package$().aC(c$2$3, uvw$2$3.y, (0.6000000000000001 + (0.2 * uvw$2$3.v))));
  var $x_9 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0$12 = box.fO;
  var x1$12 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0);
  var $x_8 = f$3(x0$12, x1$12);
  var x0$13 = box.f5;
  var x1$13 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0);
  var $x_7 = f$3(x0$13, x1$13);
  var x0$14 = box.f7;
  var x1$14 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
  var $x_6 = f$3(x0$14, x1$14);
  var x0$15 = box.fQ;
  var x1$15 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0);
  var $x_5 = $x_9.aB($x_8, $x_7, $x_6, f$3(x0$15, x1$15));
  var f$4 = ((c$2$4, uvw$2$4) => $m_Lsketches_experiments_gridceiling_GridCeiling$package$().aC(c$2$4, uvw$2$4.y, (0.8 + (0.2 * uvw$2$4.v))));
  var $x_4 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0$16 = box.fR;
  var x1$16 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 0.0);
  var $x_3 = f$4(x0$16, x1$16);
  var x0$17 = box.f8;
  var x1$17 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0);
  var $x_2 = f$4(x0$17, x1$17);
  var x0$18 = box.f6;
  var x1$18 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0);
  var $x_1 = f$4(x0$18, x1$18);
  var x0$19 = box.fP;
  var x1$19 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 1.0);
  return [$x_20, $x_15, $x_10, $x_5, $x_4.aB($x_3, $x_2, $x_1, f$4(x0$19, x1$19))];
});
$p.oS = (function(canvas) {
  $m_Ltrivalibs_graphics_painter_Painter$().nG(canvas, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((p$11) => {
    var cam = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().mT(0.6, 1.0, 0.1, 340.0, 0.0, 0.0, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 3.0, 15.0));
    $m_Ltrivalibs_dev_devPreserve$().n1(cam, "camera");
    var rowCount = $doubleToInt((+Math.floor(226.66666666666666)));
    var colCount = $doubleToInt((+Math.floor(226.66666666666666)));
    var gridStep = (340.0 / rowCount);
    var gridStart = ((-170.0) + (0.5 * gridStep));
    var LightColor = new $c_Ltrivalibs_graphics_math_cpu_Vec3(2.4, 2.2, 2.0);
    var p$proxy3 = (28.0 / gridStep);
    var $x_1 = $m_RTLong$().gQ((+Math.round(p$proxy3)));
    var x_$_lo = $x_1.l;
    var x_$_hi = $x_1.h;
    var p$proxy4 = $doubleToInt(((4.294967296E9 * x_$_hi) + (x_$_lo >>> 0.0)));
    var TileCells = ((p$proxy4 > 1) ? p$proxy4 : 1);
    var tileWorld = (TileCells * gridStep);
    var p$proxy5 = (0.075 * tileWorld);
    var $x_2 = $m_RTLong$().gQ((+Math.round(p$proxy5)));
    var x$1_$_lo = $x_2.l;
    var x$1_$_hi = $x_2.h;
    var p$proxy6 = $doubleToInt(((4.294967296E9 * x$1_$_hi) + (x$1_$_lo >>> 0.0)));
    var noisePeriod = ((p$proxy6 > 1) ? p$proxy6 : 1);
    var NoiseScale = (noisePeriod / tileWorld);
    var noiseBakeShade = $p_Lsketches_experiments_gridceiling_GridCeiling$package$__bakeShade$1__I__D__Ltrivalibs_graphics_painter_Painter__D__I__Ltrivalibs_graphics_painter_Shade(this, 4, 0.3, p$11, NoiseScale, noisePeriod);
    var gridTileU = $doubleToInt((24.0 * tileWorld));
    var gridTileV = $doubleToInt((24.0 * (1.75 * TileCells)));
    var planeTilePx = $doubleToInt((24.0 * tileWorld));
    var rowTile = $p_Lsketches_experiments_gridceiling_GridCeiling$package$__bakeTile$1__Ltrivalibs_graphics_painter_Painter__I__I__sjs_js_Array__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_Panel(this, p$11, gridTileU, gridTileV, $m_Lsketches_experiments_gridceiling_GridCeiling$package$().my(TileCells, tileWorld, (0.5 * tileWorld), gridStart, gridStep, 19.0, 0.15, 0.8, tileWorld, TileCells), noiseBakeShade);
    var colTile = $p_Lsketches_experiments_gridceiling_GridCeiling$package$__bakeTile$1__Ltrivalibs_graphics_painter_Painter__I__I__sjs_js_Array__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_Panel(this, p$11, gridTileU, gridTileV, $m_Lsketches_experiments_gridceiling_GridCeiling$package$().lZ(TileCells, tileWorld, (0.5 * tileWorld), gridStart, gridStep, 19.0, 0.15, 0.8, tileWorld, TileCells), noiseBakeShade);
    var groundTile = $p_Lsketches_experiments_gridceiling_GridCeiling$package$__bakeTile$1__Ltrivalibs_graphics_painter_Painter__I__I__sjs_js_Array__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_Panel(this, p$11, planeTilePx, planeTilePx, $m_Lsketches_experiments_gridceiling_GridCeiling$package$().hS(tileWorld, (0.5 * tileWorld), 0.0, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0), tileWorld), noiseBakeShade);
    var ceilTile = $p_Lsketches_experiments_gridceiling_GridCeiling$package$__bakeTile$1__Ltrivalibs_graphics_painter_Painter__I__I__sjs_js_Array__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_Panel(this, p$11, planeTilePx, planeTilePx, $m_Lsketches_experiments_gridceiling_GridCeiling$package$().hS(tileWorld, (0.5 * tileWorld), 20.0, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().T(), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$()), tileWorld), noiseBakeShade);
    var boxTile = $p_Lsketches_experiments_gridceiling_GridCeiling$package$__bakeTile$1__Ltrivalibs_graphics_painter_Painter__I__I__sjs_js_Array__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_Panel(this, p$11, 1024, 1024, $m_Lsketches_experiments_gridceiling_GridCeiling$package$().lV(7.0, 10.5), noiseBakeShade);
    var rowForm = $p_Lsketches_experiments_gridceiling_GridCeiling$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$11, $m_Lsketches_experiments_gridceiling_GridCeiling$package$().my(rowCount, 340.0, 0.0, gridStart, gridStep, 19.0, 0.15, 0.8, tileWorld, TileCells));
    var colForm = $p_Lsketches_experiments_gridceiling_GridCeiling$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$11, $m_Lsketches_experiments_gridceiling_GridCeiling$package$().lZ(colCount, 340.0, 0.0, gridStart, gridStep, 19.0, 0.15, 0.8, tileWorld, TileCells));
    var groundForm = $p_Lsketches_experiments_gridceiling_GridCeiling$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$11, $m_Lsketches_experiments_gridceiling_GridCeiling$package$().hS(340.0, 0.0, 0.0, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0), tileWorld));
    var ceilForm = $p_Lsketches_experiments_gridceiling_GridCeiling$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$11, $m_Lsketches_experiments_gridceiling_GridCeiling$package$().hS(340.0, 0.0, 20.0, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().T(), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$()), tileWorld));
    var boxForm = $p_Lsketches_experiments_gridceiling_GridCeiling$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$11, $m_Lsketches_experiments_gridceiling_GridCeiling$package$().lV(7.0, 10.5));
    var build$proxy2 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3) => {
      var body$proxy5 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2) => {
        var $x_6 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
        var $x_5 = $m_sjsr_package$();
        var AssignTarget_this = ctx$2.bb.gD;
        var value$proxy7 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().he(ctx$2.hI.k("mvp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gS(), $m_Ltrivalibs_graphics_math_gpu_vec4$().af(ctx$2.ba.k("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o().h(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$());
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_4 = AssignTarget_this.W;
        var $x_3 = value$proxy7.e;
        var AssignTarget_this$2 = ctx$2.bb.a3("uv");
        var value$proxy9 = ctx$2.ba.k("uv");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return $x_6.aI(new $c_sjsr_WrappedVarArgs($x_5.c(new ($d_T.r().C)([(((("  " + $x_4) + " = ") + $x_3) + ";"), (((("  " + AssignTarget_this$2.W) + " = ") + value$proxy9.e) + ";")]))));
      }));
      var ctx = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg;
      try {
        var $x_7 = body$proxy5.h(ctx);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev;
      }
      program$3.b9 = $x_7;
      $m_sjs_js_ArrayOps$().M(reg.a1, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$11) => ((data$3) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$11, data$3);
      }))(program$3)));
      var body$proxy7 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$1) => {
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var n = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("n");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var lum = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("lum");
        var $x_13 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
        var $x_12 = $m_sjsr_package$();
        var $x_11 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$();
        var tex = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex");
        var uv = ctx$2$1.ao.k("uv");
        var sampler = ctx$2$1.D.k("samp");
        var $x_10 = n.w($x_11.bm($m_Ltrivalibs_graphics_math_gpu_expr$package$().aJ(tex, uv, sampler)));
        var $x_9 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
        var e$proxy3 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().Z($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().fl(n, 0.5), 0.3);
        var L$proxy3 = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aW();
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_8 = lum.w($x_9.gO(L$proxy3.aY((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aV(0.85)) + " + ") + e$proxy3.e) + ")"))));
        var AssignTarget_this$1 = ctx$2$1.ai.a3("color");
        var value$proxy11 = $m_Ltrivalibs_graphics_math_gpu_vec4$().af($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().bl(ctx$2$1.D.k("tint"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), lum), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o().h(1.0));
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return $x_13.aI(new $c_sjsr_WrappedVarArgs($x_12.c(new ($d_T.r().C)([$x_10, $x_8, (((("  " + AssignTarget_this$1.W) + " = ") + value$proxy11.e) + ";")]))));
      }));
      var ctx$2$2 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$2;
      try {
        var $x_14 = body$proxy7.h(ctx$2$2);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$2;
      }
      program$3.b8 = $x_14;
      $m_sjs_js_ArrayOps$().M(reg$2.a1, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$12) => ((data$3$1) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$12, data$3$1);
      }))(program$3)));
    }));
    var program = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy2.h(program);
    var b = program.b9;
    var b$1 = program.b8;
    var helperFns$proxy2 = program.al();
    var id = p$11.q;
    p$11.q = ((1 + p$11.q) | 0);
    var names = $m_sjs_js_ArrayOpsCommon$().a(["mvp"], $m_sjs_js_ArrayOpsCommon$().a(["tint"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])));
    var dict = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
    var i = 0;
    while ((i < (names.length | 0))) {
      dict[names[i]] = i;
      i = ((1 + i) | 0);
    }
    var names$2 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], []);
    var dict$2 = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
    var i$2 = 0;
    while ((i$2 < (names$2.length | 0))) {
      dict$2[names$2[i$2]] = i$2;
      i$2 = ((1 + i$2) | 0);
    }
    var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef(b, b$1, helperFns$proxy2);
    var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().a(["position"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], [])), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["mvp"], $m_sjs_js_ArrayOpsCommon$().a(["tint"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).gC.u()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$()).J.u()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).J.u()], []))));
    var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.a6, sd.a5, fragBuiltinParams);
    var wgsl = (baseWgsl + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
    var args$proxy2 = $m_sr_ScalaRunTime$().ah(new ($d_sjs_js_Any.r().C)([wgsl]));
    console.log(...$m_sjsr_Compat$().ag(args$proxy2));
    var module = p$11.g.createShaderModule($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("code", wgsl)])))));
    var formats = $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], $m_sjs_js_ArrayOpsCommon$().a(["float32x2"], []));
    var sizes = $m_sjs_js_ArrayOpsCommon$().a([12], $m_sjs_js_ArrayOpsCommon$().a([8], []));
    var offsets = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes);
    var stride = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes);
    var attributes = [];
    var i$3 = 0;
    while ((i$3 < (formats.length | 0))) {
      attributes.push($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("shaderLocation", i$3), new $c_T2("offset", (offsets[i$3] | 0)), new $c_T2("format", formats[i$3])])))));
      i$3 = ((1 + i$3) | 0);
    }
    var vbl = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("arrayStride", stride), new $c_T2("attributes", attributes)]))));
    var descriptors = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 1), new $c_T2("buffer", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 2), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([])))))]))))], [])))], []);
    var result = [];
    $m_sjs_js_ArrayOps$().M(descriptors, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$1) => ((entries$2) => (result.push(Painter_this$1.g.createBindGroupLayout($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries$2)])))))) | 0)))(p$11)));
    var x1 = new $c_T2(result, $m_Ltrivalibs_graphics_shader_layouts$().O(p$11.g, result));
    var \u03b42$ = x1;
    var bgls$2 = \u03b42$.S;
    var entries = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([])))))]))))], []);
    var panelBgl = p$11.g.createBindGroupLayout($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries)])))));
    if ((panelBgl !== null)) {
      var other$proxy1 = [panelBgl];
      var allBgls = bgls$2.concat(other$proxy1);
    } else {
      var allBgls = bgls$2;
    }
    var pl = $m_Ltrivalibs_graphics_shader_layouts$().O(p$11.g, allBgls);
    var renderShade = new $c_Ltrivalibs_graphics_painter_Shade(id, module, vbl, bgls$2[0], panelBgl, pl, false, dict, dict$2);
    var build$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$1) => {
      var body$proxy9 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$3) => {
        var $x_18 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
        var $x_17 = $m_sjsr_package$();
        var AssignTarget_this$3 = ctx$2$3.bb.gD;
        var value$proxy13 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().he(ctx$2$3.hI.k("mvp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gS(), $m_Ltrivalibs_graphics_math_gpu_vec4$().af(ctx$2$3.ba.k("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o().h(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$());
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_16 = AssignTarget_this$3.W;
        var $x_15 = value$proxy13.e;
        var AssignTarget_this$2$1 = ctx$2$3.bb.a3("uv");
        var value$proxy15 = ctx$2$3.ba.k("uv");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return $x_18.aI(new $c_sjsr_WrappedVarArgs($x_17.c(new ($d_T.r().C)([(((("  " + $x_16) + " = ") + $x_15) + ";"), (((("  " + AssignTarget_this$2$1.W) + " = ") + value$proxy15.e) + ";")]))));
      }));
      var ctx$1 = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$1;
      try {
        var $x_19 = body$proxy9.h(ctx$1);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$1;
      }
      program$3$1.b9 = $x_19;
      $m_sjs_js_ArrayOps$().M(reg$1.a1, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$13) => ((data$3$2) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$13, data$3$2);
      }))(program$3$1)));
      var body$proxy11 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$4) => {
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var n$1 = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("n");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var lum$1 = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("lum");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var worldZ = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("worldZ");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var s$1 = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("s");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var band = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("band");
        var $x_28 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
        var $x_27 = $m_sjsr_package$();
        var $x_26 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$();
        var tex$1 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex");
        var uv$1 = ctx$2$4.ao.k("uv");
        var sampler$1 = ctx$2$4.D.k("samp");
        var $x_25 = n$1.w($x_26.bm($m_Ltrivalibs_graphics_math_gpu_expr$package$().aJ(tex$1, uv$1, sampler$1)));
        var $x_24 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
        var e$proxy4 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().Z($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().fl(n$1, 0.5), 0.3);
        var L$proxy5 = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aW();
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_23 = lum$1.w($x_24.gO(L$proxy5.aY((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aV(0.85)) + " + ") + e$proxy4.e) + ")"))));
        var $x_22 = worldZ.w($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().Z($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().ge(ctx$2$4.ao.k("uv")), tileWorld));
        var $x_21 = s$1.w($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().nv($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().j1(worldZ, 1.2)));
        var $x_20 = band.w($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().mB($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().mO($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().fl(s$1, 0.5)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o().h(0.06), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o().h(0.03)));
        var AssignTarget_this$4 = ctx$2$4.ai.a3("color");
        var value$proxy17 = $m_Ltrivalibs_graphics_math_gpu_vec4$().af($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().j4($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().bl(ctx$2$4.D.k("tint"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), lum$1), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().np(band, $m_Ltrivalibs_graphics_math_gpu_vec3$().aJ($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o().h(LightColor.x), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o().h(LightColor.v), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o().h(LightColor.y)))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o().h(1.0));
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return $x_28.aI(new $c_sjsr_WrappedVarArgs($x_27.c(new ($d_T.r().C)([$x_25, $x_23, $x_22, $x_21, $x_20, (((("  " + AssignTarget_this$4.W) + " = ") + value$proxy17.e) + ";")]))));
      }));
      var ctx$2$5 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$2$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$2$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$2$1;
      try {
        var $x_29 = body$proxy11.h(ctx$2$5);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$2$1;
      }
      program$3$1.b8 = $x_29;
      $m_sjs_js_ArrayOps$().M(reg$2$1.a1, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$14) => ((data$3$3) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$14, data$3$3);
      }))(program$3$1)));
    }));
    var program$2 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy3.h(program$2);
    var b$2 = program$2.b9;
    var b$3 = program$2.b8;
    var helperFns$proxy3 = program$2.al();
    var id$2 = p$11.q;
    p$11.q = ((1 + p$11.q) | 0);
    var names$4 = $m_sjs_js_ArrayOpsCommon$().a(["mvp"], $m_sjs_js_ArrayOpsCommon$().a(["tint"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])));
    var dict$3 = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
    var i$4 = 0;
    while ((i$4 < (names$4.length | 0))) {
      dict$3[names$4[i$4]] = i$4;
      i$4 = ((1 + i$4) | 0);
    }
    var names$5 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], []);
    var dict$4 = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
    var i$5 = 0;
    while ((i$5 < (names$5.length | 0))) {
      dict$4[names$5[i$5]] = i$5;
      i$5 = ((1 + i$5) | 0);
    }
    var sd$2 = new $c_Ltrivalibs_graphics_shader_ShaderDef(b$2, b$3, helperFns$proxy3);
    var vertexInputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().a(["position"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], [])), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$2 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["mvp"], $m_sjs_js_ArrayOpsCommon$().a(["tint"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).gC.u()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$()).J.u()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).J.u()], []))));
    var fragBuiltinParams$2 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$2 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$2, vertexInputStruct$2, vertexOutputStruct$2, fragmentOutputStruct$2, groupDecls$2, sd$2.a6, sd$2.a5, fragBuiltinParams$2);
    var wgsl$2 = (baseWgsl$2 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
    var args$proxy3 = $m_sr_ScalaRunTime$().ah(new ($d_sjs_js_Any.r().C)([wgsl$2]));
    console.log(...$m_sjsr_Compat$().ag(args$proxy3));
    var module$2 = p$11.g.createShaderModule($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("code", wgsl$2)])))));
    var formats$2 = $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], $m_sjs_js_ArrayOpsCommon$().a(["float32x2"], []));
    var sizes$2 = $m_sjs_js_ArrayOpsCommon$().a([12], $m_sjs_js_ArrayOpsCommon$().a([8], []));
    var offsets$2 = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes$2);
    var stride$2 = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes$2);
    var attributes$2 = [];
    var i$6 = 0;
    while ((i$6 < (formats$2.length | 0))) {
      attributes$2.push($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("shaderLocation", i$6), new $c_T2("offset", (offsets$2[i$6] | 0)), new $c_T2("format", formats$2[i$6])])))));
      i$6 = ((1 + i$6) | 0);
    }
    var vbl$2 = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("arrayStride", stride$2), new $c_T2("attributes", attributes$2)]))));
    var descriptors$2 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 1), new $c_T2("buffer", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 2), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([])))))]))))], [])))], []);
    var result$2 = [];
    $m_sjs_js_ArrayOps$().M(descriptors$2, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$2) => ((entries$2$1) => (result$2.push(Painter_this$2.g.createBindGroupLayout($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries$2$1)])))))) | 0)))(p$11)));
    var x4 = new $c_T2(result$2, $m_Ltrivalibs_graphics_shader_layouts$().O(p$11.g, result$2));
    var \u03b42$$2 = x4;
    var bgls$4 = \u03b42$$2.S;
    var entries$2$2 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([])))))]))))], []);
    var panelBgl$2 = p$11.g.createBindGroupLayout($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries$2$2)])))));
    if ((panelBgl$2 !== null)) {
      var other$proxy2 = [panelBgl$2];
      var allBgls$2 = bgls$4.concat(other$proxy2);
    } else {
      var allBgls$2 = bgls$4;
    }
    var pl$2 = $m_Ltrivalibs_graphics_shader_layouts$().O(p$11.g, allBgls$2);
    var ceilShade = new $c_Ltrivalibs_graphics_painter_Shade(id$2, module$2, vbl$2, bgls$4[0], panelBgl$2, pl$2, false, dict$3, dict$4);
    var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
    var uv$proxy1 = ul$proxy1.as;
    var buffer = new ArrayBuffer(64);
    var arr$proxy4 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
    var mvp = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy4.dv, 0), p$11.g, uv$proxy1);
    var samp = p$11.jg("linear", "linear", "linear", "repeat", (void 0), (void 0));
    var clampSamp = p$11.jg("linear", "linear", "linear", "clamp-to-edge", (void 0), (void 0));
    var Bindable_this = p$11.gb(ceilForm, ceilShade, "none", (void 0));
    var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", ceilTile);
    var e2$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("tint", new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.1, 1.1, 1.12));
    var e3$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", samp);
    var \u03b4scrutinee242 = e1$proxy1.m;
    var idx = (Bindable_this.N.a4.tex | 0);
    while (((Bindable_this.X.length | 0) <= idx)) {
      Bindable_this.X.push(null);
    }
    Bindable_this.X[idx] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee242);
    var \u03b4scrutinee248 = e2$proxy1.m;
    var idx$2 = (Bindable_this.N.A.tint | 0);
    var existing = ((idx$2 < (Bindable_this.n.length | 0)) ? Bindable_this.n[idx$2] : null);
    var device$proxy1 = Bindable_this.g1.g;
    if ((existing !== null)) {
      existing.F.B(existing.j, \u03b4scrutinee248);
      var $x_32 = existing.E.queue;
      var $x_31 = existing.C;
      var s$proxy2 = existing.j;
      var $x_30 = s$proxy2.dv.buffer;
      $x_32.writeBuffer($x_31, 0.0, $x_30);
      var bb = existing;
    } else {
      var uv$3 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$();
      var buffer$2 = new ArrayBuffer(16);
      var arr$proxy5 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
      var b$4 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy5.dv, 0), device$proxy1, uv$3);
      b$4.F.B(b$4.j, \u03b4scrutinee248);
      var $x_35 = b$4.E.queue;
      var $x_34 = b$4.C;
      var s$proxy3 = b$4.j;
      var $x_33 = s$proxy3.dv.buffer;
      $x_35.writeBuffer($x_34, 0.0, $x_33);
      var bb = b$4;
    }
    while (((Bindable_this.n.length | 0) <= idx$2)) {
      Bindable_this.n.push(null);
    }
    Bindable_this.n[idx$2] = bb;
    var \u03b4scrutinee269 = e3$proxy1.m;
    var idx$3 = (Bindable_this.N.A.samp | 0);
    while (((Bindable_this.n.length | 0) <= idx$3)) {
      Bindable_this.n.push(null);
    }
    Bindable_this.n[idx$3] = \u03b4scrutinee269;
    var Bindable_this$6 = p$11.gb(rowForm, renderShade, "none", (void 0));
    var e1$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", rowTile);
    var e2$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("tint", new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.9, 0.9, 0.92));
    var e3$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", samp);
    var \u03b4scrutinee289 = e1$proxy2.m;
    var idx$4 = (Bindable_this$6.N.a4.tex | 0);
    while (((Bindable_this$6.X.length | 0) <= idx$4)) {
      Bindable_this$6.X.push(null);
    }
    Bindable_this$6.X[idx$4] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee289);
    var \u03b4scrutinee295 = e2$proxy2.m;
    var idx$5 = (Bindable_this$6.N.A.tint | 0);
    var existing$2 = ((idx$5 < (Bindable_this$6.n.length | 0)) ? Bindable_this$6.n[idx$5] : null);
    var device$proxy2 = Bindable_this$6.g1.g;
    if ((existing$2 !== null)) {
      existing$2.F.B(existing$2.j, \u03b4scrutinee295);
      var $x_38 = existing$2.E.queue;
      var $x_37 = existing$2.C;
      var s$proxy4 = existing$2.j;
      var $x_36 = s$proxy4.dv.buffer;
      $x_38.writeBuffer($x_37, 0.0, $x_36);
      var bb$2 = existing$2;
    } else {
      var uv$2$1 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$();
      var buffer$3 = new ArrayBuffer(16);
      var arr$proxy6 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$3), 1);
      var b$2$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy6.dv, 0), device$proxy2, uv$2$1);
      b$2$1.F.B(b$2$1.j, \u03b4scrutinee295);
      var $x_41 = b$2$1.E.queue;
      var $x_40 = b$2$1.C;
      var s$proxy5 = b$2$1.j;
      var $x_39 = s$proxy5.dv.buffer;
      $x_41.writeBuffer($x_40, 0.0, $x_39);
      var bb$2 = b$2$1;
    }
    while (((Bindable_this$6.n.length | 0) <= idx$5)) {
      Bindable_this$6.n.push(null);
    }
    Bindable_this$6.n[idx$5] = bb$2;
    var \u03b4scrutinee316 = e3$proxy2.m;
    var idx$6 = (Bindable_this$6.N.A.samp | 0);
    while (((Bindable_this$6.n.length | 0) <= idx$6)) {
      Bindable_this$6.n.push(null);
    }
    Bindable_this$6.n[idx$6] = \u03b4scrutinee316;
    var Bindable_this$11 = p$11.gb(colForm, renderShade, "none", (void 0));
    var e1$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", colTile);
    var e2$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("tint", new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.9, 0.9, 0.92));
    var e3$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", samp);
    var \u03b4scrutinee336 = e1$proxy3.m;
    var idx$7 = (Bindable_this$11.N.a4.tex | 0);
    while (((Bindable_this$11.X.length | 0) <= idx$7)) {
      Bindable_this$11.X.push(null);
    }
    Bindable_this$11.X[idx$7] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee336);
    var \u03b4scrutinee342 = e2$proxy3.m;
    var idx$8 = (Bindable_this$11.N.A.tint | 0);
    var existing$3 = ((idx$8 < (Bindable_this$11.n.length | 0)) ? Bindable_this$11.n[idx$8] : null);
    var device$proxy3 = Bindable_this$11.g1.g;
    if ((existing$3 !== null)) {
      existing$3.F.B(existing$3.j, \u03b4scrutinee342);
      var $x_44 = existing$3.E.queue;
      var $x_43 = existing$3.C;
      var s$proxy6 = existing$3.j;
      var $x_42 = s$proxy6.dv.buffer;
      $x_44.writeBuffer($x_43, 0.0, $x_42);
      var bb$3 = existing$3;
    } else {
      var uv$3$1 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$();
      var buffer$4 = new ArrayBuffer(16);
      var arr$proxy7 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$4), 1);
      var b$3$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy7.dv, 0), device$proxy3, uv$3$1);
      b$3$1.F.B(b$3$1.j, \u03b4scrutinee342);
      var $x_47 = b$3$1.E.queue;
      var $x_46 = b$3$1.C;
      var s$proxy7 = b$3$1.j;
      var $x_45 = s$proxy7.dv.buffer;
      $x_47.writeBuffer($x_46, 0.0, $x_45);
      var bb$3 = b$3$1;
    }
    while (((Bindable_this$11.n.length | 0) <= idx$8)) {
      Bindable_this$11.n.push(null);
    }
    Bindable_this$11.n[idx$8] = bb$3;
    var \u03b4scrutinee363 = e3$proxy3.m;
    var idx$9 = (Bindable_this$11.N.A.samp | 0);
    while (((Bindable_this$11.n.length | 0) <= idx$9)) {
      Bindable_this$11.n.push(null);
    }
    Bindable_this$11.n[idx$9] = \u03b4scrutinee363;
    var Bindable_this$16 = p$11.gb(boxForm, renderShade, "none", (void 0));
    var e1$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", boxTile);
    var e2$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("tint", new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.28, 0.27, 0.27));
    var e3$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", clampSamp);
    var \u03b4scrutinee383 = e1$proxy4.m;
    var idx$10 = (Bindable_this$16.N.a4.tex | 0);
    while (((Bindable_this$16.X.length | 0) <= idx$10)) {
      Bindable_this$16.X.push(null);
    }
    Bindable_this$16.X[idx$10] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee383);
    var \u03b4scrutinee389 = e2$proxy4.m;
    var idx$11 = (Bindable_this$16.N.A.tint | 0);
    var existing$4 = ((idx$11 < (Bindable_this$16.n.length | 0)) ? Bindable_this$16.n[idx$11] : null);
    var device$proxy4 = Bindable_this$16.g1.g;
    if ((existing$4 !== null)) {
      existing$4.F.B(existing$4.j, \u03b4scrutinee389);
      var $x_50 = existing$4.E.queue;
      var $x_49 = existing$4.C;
      var s$proxy8 = existing$4.j;
      var $x_48 = s$proxy8.dv.buffer;
      $x_50.writeBuffer($x_49, 0.0, $x_48);
      var bb$4 = existing$4;
    } else {
      var uv$4 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$();
      var buffer$5 = new ArrayBuffer(16);
      var arr$proxy8 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$5), 1);
      var b$4$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy8.dv, 0), device$proxy4, uv$4);
      b$4$1.F.B(b$4$1.j, \u03b4scrutinee389);
      var $x_53 = b$4$1.E.queue;
      var $x_52 = b$4$1.C;
      var s$proxy9 = b$4$1.j;
      var $x_51 = s$proxy9.dv.buffer;
      $x_53.writeBuffer($x_52, 0.0, $x_51);
      var bb$4 = b$4$1;
    }
    while (((Bindable_this$16.n.length | 0) <= idx$11)) {
      Bindable_this$16.n.push(null);
    }
    Bindable_this$16.n[idx$11] = bb$4;
    var \u03b4scrutinee410 = e3$proxy4.m;
    var idx$12 = (Bindable_this$16.N.A.samp | 0);
    while (((Bindable_this$16.n.length | 0) <= idx$12)) {
      Bindable_this$16.n.push(null);
    }
    Bindable_this$16.n[idx$12] = \u03b4scrutinee410;
    var shapes$2 = [Bindable_this$6, Bindable_this$11, Bindable_this, Bindable_this$16];
    $m_Lsketchlib_utils_mirror_MirrorReflection$();
    var mirror$1 = $m_Ltrivalibs_graphics_geometry_Plane$().k9;
    $m_Lsketchlib_utils_mirror_MirrorReflection$();
    var stretch$1 = 0.0;
    $m_Lsketchlib_utils_mirror_MirrorReflection$();
    var overscan$1 = 3.0;
    $m_Lsketchlib_utils_mirror_MirrorReflection$();
    var clearColor$2 = new $c_Ltrivalibs_graphics_math_cpu_Vec4(0.0, 0.0, 0.0, 0.0);
    var mirror = $m_Lsketchlib_utils_mirror_MirrorReflection$().n0(p$11, cam, shapes$2, "mvp", 10.0, mirror$1, 3.2, stretch$1, 6, overscan$1, clearColor$2);
    var ul$proxy2 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
    var uv$proxy2 = ul$proxy2.as;
    var buffer$6 = new ArrayBuffer(4);
    var arr$proxy9 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$6), 1);
    var b$5 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy9.dv, 0), p$11.g, uv$proxy2);
    b$5.F.B(b$5.j, 0.4);
    var $x_56 = b$5.E.queue;
    var $x_55 = b$5.C;
    var s$proxy10 = b$5.j;
    var $x_54 = s$proxy10.dv.buffer;
    $x_56.writeBuffer($x_55, 0.0, $x_54);
    var build$proxy4 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$2) => {
      var body$proxy13 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$6) => {
        var $x_60 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
        var $x_59 = $m_sjsr_package$();
        var AssignTarget_this$5 = ctx$2$6.bb.gD;
        var value$proxy23 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().he(ctx$2$6.hI.k("mvp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gS(), $m_Ltrivalibs_graphics_math_gpu_vec4$().af(ctx$2$6.ba.k("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o().h(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$());
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_58 = AssignTarget_this$5.W;
        var $x_57 = value$proxy23.e;
        var AssignTarget_this$2$2 = ctx$2$6.bb.a3("uv");
        var value$proxy25 = ctx$2$6.ba.k("uv");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return $x_60.aI(new $c_sjsr_WrappedVarArgs($x_59.c(new ($d_T.r().C)([(((("  " + $x_58) + " = ") + $x_57) + ";"), (((("  " + AssignTarget_this$2$2.W) + " = ") + value$proxy25.e) + ";")]))));
      }));
      var ctx$3 = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$3 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$3 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$3;
      try {
        var $x_61 = body$proxy13.h(ctx$3);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$3;
      }
      program$3$2.b9 = $x_61;
      $m_sjs_js_ArrayOps$().M(reg$3.a1, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$15) => ((data$3$4) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$15, data$3$4);
      }))(program$3$2)));
      var body$proxy15 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$7) => {
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var n$2 = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("n");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var lum$2 = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("lum");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var base = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("base");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var refl = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("refl");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var falloff = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("falloff");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var mix = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("mix");
        var $x_76 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
        var $x_75 = $m_sjsr_package$();
        var $x_74 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$();
        var tex$2 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex");
        var uv$6 = ctx$2$7.ao.k("uv");
        var sampler$2 = ctx$2$7.D.k("samp");
        var $x_73 = n$2.w($x_74.bm($m_Ltrivalibs_graphics_math_gpu_expr$package$().aJ(tex$2, uv$6, sampler$2)));
        var $x_72 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
        var e$proxy5 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().Z($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().fl(n$2, 0.5), 0.3);
        var L$proxy7 = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aW();
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_71 = lum$2.w($x_72.gO(L$proxy7.aY((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aV(0.85)) + " + ") + e$proxy5.e) + ")"))));
        var $x_70 = base.w($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().bl(ctx$2$7.D.k("tint"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), lum$2));
        var tex$3 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "reflTex");
        var coord = $m_Ltrivalibs_graphics_math_gpu_ivec2$().aT($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fq(ctx$2$7.fh));
        var $x_69 = refl.w($m_Ltrivalibs_graphics_math_gpu_expr$package$().gT(tex$3, coord));
        var $x_68 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
        var e$proxy6 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().hX(refl);
        var L$proxy9 = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aW();
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_67 = falloff.w($x_68.on(L$proxy9.aY((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aV(1.0)) + " - ") + e$proxy6.e) + ")")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o().h(0.1)));
        var $x_66 = mix.w($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().gM(ctx$2$7.D.k("reflStrength"), falloff));
        var AssignTarget_this$6 = ctx$2$7.ai.a3("color");
        var $x_65 = $m_Ltrivalibs_graphics_math_gpu_vec4$();
        var $x_64 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$();
        var $x_63 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$();
        var $x_62 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$();
        var L$proxy11 = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aW();
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var value$proxy27 = $x_65.af($x_64.j4($x_63.bl(base, $x_62, L$proxy11.aY((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aV(1.0)) + " - ") + mix.e) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().bl($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gd(refl), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), mix)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o().h(1.0));
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return $x_76.aI(new $c_sjsr_WrappedVarArgs($x_75.c(new ($d_T.r().C)([$x_73, $x_71, $x_70, $x_69, $x_67, $x_66, (((("  " + AssignTarget_this$6.W) + " = ") + value$proxy27.e) + ";")]))));
      }));
      var ctx$2$8 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$2$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$2$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$2$2;
      try {
        var $x_77 = body$proxy15.h(ctx$2$8);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$2$2;
      }
      program$3$2.b8 = $x_77;
      $m_sjs_js_ArrayOps$().M(reg$2$2.a1, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$16) => ((data$3$5) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$16, data$3$5);
      }))(program$3$2)));
    }));
    var program$3$3 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy4.h(program$3$3);
    var b$6 = program$3$3.b9;
    var b$7 = program$3$3.b8;
    var helperFns$proxy4 = program$3$3.al();
    var id$3 = p$11.q;
    p$11.q = ((1 + p$11.q) | 0);
    var names$7 = $m_sjs_js_ArrayOpsCommon$().a(["mvp"], $m_sjs_js_ArrayOpsCommon$().a(["tint"], $m_sjs_js_ArrayOpsCommon$().a(["reflStrength"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []))));
    var dict$5 = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
    var i$7 = 0;
    while ((i$7 < (names$7.length | 0))) {
      dict$5[names$7[i$7]] = i$7;
      i$7 = ((1 + i$7) | 0);
    }
    var names$8 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], $m_sjs_js_ArrayOpsCommon$().a(["reflTex"], []));
    var dict$6 = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
    var i$8 = 0;
    while ((i$8 < (names$8.length | 0))) {
      dict$6[names$8[i$8]] = i$8;
      i$8 = ((1 + i$8) | 0);
    }
    var sd$3 = new $c_Ltrivalibs_graphics_shader_ShaderDef(b$6, b$7, helperFns$proxy4);
    var vertexInputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().a(["position"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], [])), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$3 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["mvp"], $m_sjs_js_ArrayOpsCommon$().a(["tint"], $m_sjs_js_ArrayOpsCommon$().a(["reflStrength"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])))), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).gC.u()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$()).J.u()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).J.u()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).J.u()], [])))));
    var fragBuiltinParams$3 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$3 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$3, vertexInputStruct$3, vertexOutputStruct$3, fragmentOutputStruct$3, groupDecls$3, sd$3.a6, sd$3.a5, fragBuiltinParams$3);
    var wgsl$3 = (baseWgsl$3 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;\n@group(1) @binding(1) var reflTex: texture_2d<f32>;");
    var args$proxy4 = $m_sr_ScalaRunTime$().ah(new ($d_sjs_js_Any.r().C)([wgsl$3]));
    console.log(...$m_sjsr_Compat$().ag(args$proxy4));
    var module$3 = p$11.g.createShaderModule($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("code", wgsl$3)])))));
    var formats$3 = $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], $m_sjs_js_ArrayOpsCommon$().a(["float32x2"], []));
    var sizes$3 = $m_sjs_js_ArrayOpsCommon$().a([12], $m_sjs_js_ArrayOpsCommon$().a([8], []));
    var offsets$3 = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes$3);
    var stride$9 = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes$3);
    var attributes$3 = [];
    var i$9 = 0;
    while ((i$9 < (formats$3.length | 0))) {
      attributes$3.push($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("shaderLocation", i$9), new $c_T2("offset", (offsets$3[i$9] | 0)), new $c_T2("format", formats$3[i$9])])))));
      i$9 = ((1 + i$9) | 0);
    }
    var vbl$3 = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("arrayStride", stride$9), new $c_T2("attributes", attributes$3)]))));
    var descriptors$3 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 1), new $c_T2("buffer", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 2), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 3), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([])))))]))))], []))))], []);
    var result$3 = [];
    $m_sjs_js_ArrayOps$().M(descriptors$3, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$3) => ((entries$2$3) => (result$3.push(Painter_this$3.g.createBindGroupLayout($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries$2$3)])))))) | 0)))(p$11)));
    var x7 = new $c_T2(result$3, $m_Ltrivalibs_graphics_shader_layouts$().O(p$11.g, result$3));
    var \u03b42$$3 = x7;
    var bgls$6 = \u03b42$$3.S;
    var entries$3 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([])))))]))))], []));
    var panelBgl$3 = p$11.g.createBindGroupLayout($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries$3)])))));
    if ((panelBgl$3 !== null)) {
      var other$proxy3 = [panelBgl$3];
      var allBgls$3 = bgls$6.concat(other$proxy3);
    } else {
      var allBgls$3 = bgls$6;
    }
    var pl$3 = $m_Ltrivalibs_graphics_shader_layouts$().O(p$11.g, allBgls$3);
    var groundShade = new $c_Ltrivalibs_graphics_painter_Shade(id$3, module$3, vbl$3, bgls$6[0], panelBgl$3, pl$3, false, dict$5, dict$6);
    var Bindable_this$21 = p$11.gb(groundForm, groundShade, "none", (void 0));
    var e1$proxy5 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", groundTile);
    var e2$proxy5 = new $c_Ltrivalibs_graphics_painter_BindPair("tint", new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.85, 0.84, 0.82));
    var e3$proxy5 = new $c_Ltrivalibs_graphics_painter_BindPair("reflStrength", b$5);
    var e4$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", samp);
    var e5$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("reflTex", mirror.k3);
    var \u03b4scrutinee528 = e1$proxy5.m;
    var idx$13 = (Bindable_this$21.N.a4.tex | 0);
    while (((Bindable_this$21.X.length | 0) <= idx$13)) {
      Bindable_this$21.X.push(null);
    }
    Bindable_this$21.X[idx$13] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee528);
    var \u03b4scrutinee534 = e2$proxy5.m;
    var idx$14 = (Bindable_this$21.N.A.tint | 0);
    var existing$5 = ((idx$14 < (Bindable_this$21.n.length | 0)) ? Bindable_this$21.n[idx$14] : null);
    var device$proxy5 = Bindable_this$21.g1.g;
    if ((existing$5 !== null)) {
      existing$5.F.B(existing$5.j, \u03b4scrutinee534);
      var $x_80 = existing$5.E.queue;
      var $x_79 = existing$5.C;
      var s$proxy11 = existing$5.j;
      var $x_78 = s$proxy11.dv.buffer;
      $x_80.writeBuffer($x_79, 0.0, $x_78);
      var bb$5 = existing$5;
    } else {
      var uv$5$1 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$();
      var buffer$7 = new ArrayBuffer(16);
      var arr$proxy10 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$7), 1);
      var b$6$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy10.dv, 0), device$proxy5, uv$5$1);
      b$6$1.F.B(b$6$1.j, \u03b4scrutinee534);
      var $x_83 = b$6$1.E.queue;
      var $x_82 = b$6$1.C;
      var s$proxy12 = b$6$1.j;
      var $x_81 = s$proxy12.dv.buffer;
      $x_83.writeBuffer($x_82, 0.0, $x_81);
      var bb$5 = b$6$1;
    }
    while (((Bindable_this$21.n.length | 0) <= idx$14)) {
      Bindable_this$21.n.push(null);
    }
    Bindable_this$21.n[idx$14] = bb$5;
    var \u03b4scrutinee555 = e3$proxy5.m;
    var idx$15 = (Bindable_this$21.N.A.reflStrength | 0);
    while (((Bindable_this$21.n.length | 0) <= idx$15)) {
      Bindable_this$21.n.push(null);
    }
    Bindable_this$21.n[idx$15] = \u03b4scrutinee555;
    var \u03b4scrutinee576 = e4$proxy1.m;
    var idx$16 = (Bindable_this$21.N.A.samp | 0);
    while (((Bindable_this$21.n.length | 0) <= idx$16)) {
      Bindable_this$21.n.push(null);
    }
    Bindable_this$21.n[idx$16] = \u03b4scrutinee576;
    var \u03b4scrutinee602 = e5$proxy1.m;
    var idx$17 = (Bindable_this$21.N.a4.reflTex | 0);
    while (((Bindable_this$21.X.length | 0) <= idx$17)) {
      Bindable_this$21.X.push(null);
    }
    Bindable_this$21.X[idx$17] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee602);
    var ul$proxy3 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
    var uv$proxy3 = ul$proxy3.as;
    var buffer$8 = new ArrayBuffer(64);
    var arr$proxy11 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$8), 1);
    var invVp = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy11.dv, 0), p$11.g, uv$proxy3);
    var ul$proxy4 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$());
    var uv$proxy4 = ul$proxy4.as;
    var buffer$9 = new ArrayBuffer(16);
    var arr$proxy12 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$9), 1);
    var camPos = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy12.dv, 0), p$11.g, uv$proxy4);
    var fogColor = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.48, 0.49, 0.5);
    var clearColor$3 = new $c_Ltrivalibs_graphics_math_cpu_Vec4(fogColor.x, fogColor.v, fogColor.y, 1.0);
    var shapes$3 = [Bindable_this$21, Bindable_this, Bindable_this$6, Bindable_this$11, Bindable_this$16];
    var Panel_this = p$11.bc((void 0), (void 0), clearColor$3, true, true, (void 0), (void 0), "rgba16float", (void 0), (void 0), shapes$3, (void 0), (void 0));
    var e1$proxy6 = new $c_Ltrivalibs_graphics_painter_BindPair("mvp", mvp);
    var \u03b4scrutinee603 = e1$proxy6.m;
    var dict$proxy1 = Panel_this.gz;
    dict$proxy1.mvp = \u03b4scrutinee603;
    var build$proxy5 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$4) => {
      var body$proxy17 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$9) => {
        var AssignTarget_this$7 = ctx$2$9.ai.a3("color");
        var tex$4 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "src");
        var uv$9 = ctx$2$9.ao.k("uv");
        var sampler$3 = ctx$2$9.D.k("samp");
        var value$proxy31 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().aJ(tex$4, uv$9, sampler$3);
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return (((("  " + AssignTarget_this$7.W) + " = ") + value$proxy31.e) + ";");
      }));
      var ctx$4 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$4 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$4 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$4;
      try {
        var $x_84 = body$proxy17.h(ctx$4);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$4;
      }
      program$3$4.Y = $x_84;
      $m_sjs_js_ArrayOps$().M(reg$4.a1, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$4) => ((data$3$6) => {
        $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$4, data$3$6);
      }))(program$3$4)));
    }));
    var program$4 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
    build$proxy5.h(program$4);
    var b$8 = program$4.Y;
    var helperFns$proxy5 = program$4.al();
    var id$4 = p$11.q;
    p$11.q = ((1 + p$11.q) | 0);
    var names$10 = $m_sjs_js_ArrayOpsCommon$().a(["samp"], []);
    var dict$7 = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
    var i$10 = 0;
    while ((i$10 < (names$10.length | 0))) {
      dict$7[names$10[i$10]] = i$10;
      i$10 = ((1 + i$10) | 0);
    }
    var names$11 = $m_sjs_js_ArrayOpsCommon$().a(["src"], []);
    var dict$8 = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
    var i$11 = 0;
    while ((i$11 < (names$11.length | 0))) {
      dict$8[names$11[i$11]] = i$11;
      i$11 = ((1 + i$11) | 0);
    }
    var sd$4 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$8, helperFns$proxy5);
    var vertexInputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
    var vertexOutputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$4 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["samp"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).J.u()], []));
    var fragBuiltinParams$4 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$4 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$4, vertexInputStruct$4, vertexOutputStruct$4, fragmentOutputStruct$4, groupDecls$4, sd$4.a6, sd$4.a5, fragBuiltinParams$4);
    var wgsl$4 = (baseWgsl$4 + "\n\n@group(1) @binding(0) var src: texture_2d<f32>;");
    var args$proxy5 = $m_sr_ScalaRunTime$().ah(new ($d_sjs_js_Any.r().C)([wgsl$4]));
    console.log(...$m_sjsr_Compat$().ag(args$proxy5));
    var module$4 = p$11.g.createShaderModule($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("code", wgsl$4)])))));
    var descriptors$4 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([])))))]))))], [])], []);
    var result$4 = [];
    $m_sjs_js_ArrayOps$().M(descriptors$4, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$4) => ((entries$2$4) => (result$4.push(Painter_this$4.g.createBindGroupLayout($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries$2$4)])))))) | 0)))(p$11)));
    var x10 = new $c_T2(result$4, $m_Ltrivalibs_graphics_shader_layouts$().O(p$11.g, result$4));
    var \u03b46$ = x10;
    var bgls$8 = \u03b46$.S;
    var entries$4 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([])))))]))))], []);
    var panelBgl$4 = p$11.g.createBindGroupLayout($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries$4)])))));
    if ((panelBgl$4 !== null)) {
      var other$proxy4 = [panelBgl$4];
      var allBgls$4 = bgls$8.concat(other$proxy4);
    } else {
      var allBgls$4 = bgls$8;
    }
    var pl$4 = $m_Ltrivalibs_graphics_shader_layouts$().O(p$11.g, allBgls$4);
    var copyShade = new $c_Ltrivalibs_graphics_painter_Shade(id$4, module$4, null, bgls$8[0], panelBgl$4, pl$4, false, dict$7, dict$8);
    var build$proxy6 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$5) => {
      var body$proxy19 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$10) => {
        var AssignTarget_this$8 = ctx$2$10.ai.a3("color");
        var value$proxy33 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$().jn($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex"), ctx$2$10.D.k("samp"), ctx$2$10.ao.k("uv"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o().h(4.0), null);
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return (((("  " + AssignTarget_this$8.W) + " = ") + value$proxy33.e) + ";");
      }));
      var ctx$5 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$5 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$5 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$5;
      try {
        var $x_85 = body$proxy19.h(ctx$5);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$5;
      }
      program$3$5.Y = $x_85;
      $m_sjs_js_ArrayOps$().M(reg$5.a1, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$5) => ((data$3$7) => {
        $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$5, data$3$7);
      }))(program$3$5)));
    }));
    var program$5 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
    build$proxy6.h(program$5);
    var b$9 = program$5.Y;
    var helperFns$proxy6 = program$5.al();
    var id$5 = p$11.q;
    p$11.q = ((1 + p$11.q) | 0);
    var names$13 = $m_sjs_js_ArrayOpsCommon$().a(["samp"], []);
    var dict$9 = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
    var i$12 = 0;
    while ((i$12 < (names$13.length | 0))) {
      dict$9[names$13[i$12]] = i$12;
      i$12 = ((1 + i$12) | 0);
    }
    var names$14 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], []);
    var dict$10 = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
    var i$13 = 0;
    while ((i$13 < (names$14.length | 0))) {
      dict$10[names$14[i$13]] = i$13;
      i$13 = ((1 + i$13) | 0);
    }
    var sd$5 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$9, helperFns$proxy6);
    var vertexInputStruct$5 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
    var vertexOutputStruct$5 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$5 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$5 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["samp"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).J.u()], []));
    var fragBuiltinParams$5 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$5 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$5, vertexInputStruct$5, vertexOutputStruct$5, fragmentOutputStruct$5, groupDecls$5, sd$5.a6, sd$5.a5, fragBuiltinParams$5);
    var wgsl$5 = (baseWgsl$5 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
    var args$proxy6 = $m_sr_ScalaRunTime$().ah(new ($d_sjs_js_Any.r().C)([wgsl$5]));
    console.log(...$m_sjsr_Compat$().ag(args$proxy6));
    var module$5 = p$11.g.createShaderModule($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("code", wgsl$5)])))));
    var descriptors$5 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([])))))]))))], [])], []);
    var result$5 = [];
    $m_sjs_js_ArrayOps$().M(descriptors$5, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$5) => ((entries$2$5) => (result$5.push(Painter_this$5.g.createBindGroupLayout($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries$2$5)])))))) | 0)))(p$11)));
    var x13 = new $c_T2(result$5, $m_Ltrivalibs_graphics_shader_layouts$().O(p$11.g, result$5));
    var \u03b46$$2 = x13;
    var bgls$10 = \u03b46$$2.S;
    var entries$5 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([])))))]))))], []);
    var panelBgl$5 = p$11.g.createBindGroupLayout($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries$5)])))));
    if ((panelBgl$5 !== null)) {
      var other$proxy5 = [panelBgl$5];
      var allBgls$5 = bgls$10.concat(other$proxy5);
    } else {
      var allBgls$5 = bgls$10;
    }
    var pl$5 = $m_Ltrivalibs_graphics_shader_layouts$().O(p$11.g, allBgls$5);
    var downBlurShade = new $c_Ltrivalibs_graphics_painter_Shade(id$5, module$5, null, bgls$10[0], panelBgl$5, pl$5, false, dict$9, dict$10);
    var fadeLayers = [];
    var Bindable_this$28 = p$11.aX(copyShade, (void 0), (void 0), (void 0));
    var e1$proxy7 = new $c_Ltrivalibs_graphics_painter_BindPair("src", Panel_this);
    var e2$proxy6 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", clampSamp);
    var \u03b4scrutinee725 = e1$proxy7.m;
    var idx$18 = (Bindable_this$28.r.a4.src | 0);
    while (((Bindable_this$28.H.length | 0) <= idx$18)) {
      Bindable_this$28.H.push(null);
    }
    Bindable_this$28.H[idx$18] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee725);
    Bindable_this$28.G = null;
    var \u03b4scrutinee729 = e2$proxy6.m;
    var idx$19 = (Bindable_this$28.r.A.samp | 0);
    while (((Bindable_this$28.i.length | 0) <= idx$19)) {
      Bindable_this$28.i.push(null);
    }
    Bindable_this$28.i[idx$19] = \u03b4scrutinee729;
    Bindable_this$28.G = null;
    fadeLayers.push(Bindable_this$28);
    var fm = 0;
    while ((fm < 5)) {
      var mipSource$1 = fm;
      var mipTarget$1 = ((1 + fm) | 0);
      var Bindable_this$31 = p$11.aX(downBlurShade, (void 0), mipSource$1, mipTarget$1);
      var e1$proxy8 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", clampSamp);
      var \u03b4scrutinee737 = e1$proxy8.m;
      var idx$20 = (Bindable_this$31.r.A.samp | 0);
      while (((Bindable_this$31.i.length | 0) <= idx$20)) {
        Bindable_this$31.i.push(null);
      }
      Bindable_this$31.i[idx$20] = \u03b4scrutinee737;
      Bindable_this$31.G = null;
      fadeLayers.push(Bindable_this$31);
      fm = ((1 + fm) | 0);
    }
    var fadeBlurPanel = p$11.bc((void 0), (void 0), (void 0), (void 0), (void 0), 6, (void 0), "rgba16float", (void 0), (void 0), (void 0), (void 0), fadeLayers);
    var build$proxy7 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$6) => {
      var body$proxy21 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$11) => {
        var uv$10 = ctx$2$11.ao.k("uv");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var d = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("d");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var ndc = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("ndc");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var worldH = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("worldH");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var worldPos = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("worldPos");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var dist = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("dist");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var f = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("f");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var lod = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("lod");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var col = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("col");
        var $x_100 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
        var $x_99 = $m_sjsr_package$();
        var tex$5 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "depth");
        var coord$1 = $m_Ltrivalibs_graphics_math_gpu_ivec2$().aT($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fq(ctx$2$11.fh));
        var $x_98 = d.w($m_Ltrivalibs_graphics_math_gpu_expr$package$().m0(tex$5, coord$1));
        var $x_97 = $m_Ltrivalibs_graphics_math_gpu_vec3$();
        var $x_96 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().fl($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().Z($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().bm(uv$10), 2.0), 1.0);
        var e$proxy7 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().Z($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().ge(uv$10), 2.0);
        var L$proxy13 = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aW();
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_95 = ndc.w($x_97.aJ($x_96, L$proxy13.aY((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aV(1.0)) + " - ") + e$proxy7.e) + ")")), d));
        var $x_94 = worldH.w($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().he(ctx$2$11.D.k("invVp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gS(), $m_Ltrivalibs_graphics_math_gpu_vec4$().af(ndc, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().m7().h(1)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$()));
        var $x_93 = worldPos.w($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().m2($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gd(worldH), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().hX(worldH)));
        var $x_92 = dist.w($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().nN($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().jl(worldPos, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), ctx$2$11.D.k("camPos"))));
        var $x_91 = f.w($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().mB(dist, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o().h(18.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o().h(160.0)));
        var $x_90 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
        var $x_89 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
        var e$proxy8 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().Z(f, 4.0);
        var L$proxy15 = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aW();
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_88 = lod.w($x_90.mq($x_89.m9(L$proxy15.aY((("(f32(1) + " + e$proxy8.e) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().m7().h(5)));
        var $x_87 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$();
        var tex$6 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "col");
        var sampler$4 = ctx$2$11.D.k("samp");
        var $x_86 = col.w($x_87.gd($m_Ltrivalibs_graphics_math_gpu_expr$package$().ga(tex$6, uv$10, sampler$4, lod)));
        var AssignTarget_this$9 = ctx$2$11.ai.a3("color");
        var value$proxy35 = $m_Ltrivalibs_graphics_math_gpu_vec4$().af($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().oq(col, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_vec3$().aJ($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o().h(fogColor.x), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o().h(fogColor.v), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o().h(fogColor.y)), f), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o().h(1.0));
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return $x_100.aI(new $c_sjsr_WrappedVarArgs($x_99.c(new ($d_T.r().C)([$x_98, $x_95, $x_94, $x_93, $x_92, $x_91, $x_88, $x_86, (((("  " + AssignTarget_this$9.W) + " = ") + value$proxy35.e) + ";")]))));
      }));
      var ctx$6 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$6 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$6 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$6;
      try {
        var $x_101 = body$proxy21.h(ctx$6);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$6;
      }
      program$3$6.Y = $x_101;
      $m_sjs_js_ArrayOps$().M(reg$6.a1, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$6) => ((data$3$8) => {
        $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$6, data$3$8);
      }))(program$3$6)));
    }));
    var program$6 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
    build$proxy7.h(program$6);
    var b$10 = program$6.Y;
    var helperFns$proxy7 = program$6.al();
    var id$6 = p$11.q;
    p$11.q = ((1 + p$11.q) | 0);
    var names$16 = $m_sjs_js_ArrayOpsCommon$().a(["invVp"], $m_sjs_js_ArrayOpsCommon$().a(["camPos"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])));
    var dict$11 = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
    var i$14 = 0;
    while ((i$14 < (names$16.length | 0))) {
      dict$11[names$16[i$14]] = i$14;
      i$14 = ((1 + i$14) | 0);
    }
    var names$17 = $m_sjs_js_ArrayOpsCommon$().a(["col"], $m_sjs_js_ArrayOpsCommon$().a(["depth"], []));
    var dict$12 = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
    var i$15 = 0;
    while ((i$15 < (names$17.length | 0))) {
      dict$12[names$17[i$15]] = i$15;
      i$15 = ((1 + i$15) | 0);
    }
    var sd$6 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$10, helperFns$proxy7);
    var vertexInputStruct$6 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
    var vertexOutputStruct$6 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$6 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$6 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["invVp"], $m_sjs_js_ArrayOpsCommon$().a(["camPos"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).J.u()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$()).J.u()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).J.u()], []))));
    var fragBuiltinParams$6 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$6 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$6, vertexInputStruct$6, vertexOutputStruct$6, fragmentOutputStruct$6, groupDecls$6, sd$6.a6, sd$6.a5, fragBuiltinParams$6);
    var wgsl$6 = (baseWgsl$6 + "\n\n@group(1) @binding(0) var col: texture_2d<f32>;\n@group(1) @binding(1) var depth: texture_depth_2d;");
    var args$proxy7 = $m_sr_ScalaRunTime$().ah(new ($d_sjs_js_Any.r().C)([wgsl$6]));
    console.log(...$m_sjsr_Compat$().ag(args$proxy7));
    var module$6 = p$11.g.createShaderModule($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("code", wgsl$6)])))));
    var descriptors$6 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 2), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([])))))]))))], [])))], []);
    var result$6 = [];
    $m_sjs_js_ArrayOps$().M(descriptors$6, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$6) => ((entries$2$6) => (result$6.push(Painter_this$6.g.createBindGroupLayout($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries$2$6)])))))) | 0)))(p$11)));
    var x16 = new $c_T2(result$6, $m_Ltrivalibs_graphics_shader_layouts$().O(p$11.g, result$6));
    var \u03b46$$3 = x16;
    var bgls$12 = \u03b46$$3.S;
    var entries$6 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("sampleType", "depth")])))))]))))], []));
    var panelBgl$6 = p$11.g.createBindGroupLayout($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries$6)])))));
    if ((panelBgl$6 !== null)) {
      var other$proxy6 = [panelBgl$6];
      var allBgls$6 = bgls$12.concat(other$proxy6);
    } else {
      var allBgls$6 = bgls$12;
    }
    var pl$6 = $m_Ltrivalibs_graphics_shader_layouts$().O(p$11.g, allBgls$6);
    var resolveShade = new $c_Ltrivalibs_graphics_painter_Shade(id$6, module$6, null, bgls$12[0], panelBgl$6, pl$6, false, dict$11, dict$12);
    var Bindable_this$33 = p$11.aX(resolveShade, (void 0), (void 0), (void 0));
    var e1$proxy9 = new $c_Ltrivalibs_graphics_painter_BindPair("col", fadeBlurPanel);
    var e2$proxy7 = new $c_Ltrivalibs_graphics_painter_BindPair("depth", Panel_this.lT(0, (-1), true));
    var e3$proxy6 = new $c_Ltrivalibs_graphics_painter_BindPair("invVp", invVp);
    var e4$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("camPos", camPos);
    var e5$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", clampSamp);
    var \u03b4scrutinee828 = e1$proxy9.m;
    var idx$21 = (Bindable_this$33.r.a4.col | 0);
    while (((Bindable_this$33.H.length | 0) <= idx$21)) {
      Bindable_this$33.H.push(null);
    }
    Bindable_this$33.H[idx$21] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee828);
    Bindable_this$33.G = null;
    var \u03b4scrutinee842 = e2$proxy7.m;
    var idx$22 = (Bindable_this$33.r.a4.depth | 0);
    while (((Bindable_this$33.H.length | 0) <= idx$22)) {
      Bindable_this$33.H.push(null);
    }
    Bindable_this$33.H[idx$22] = \u03b4scrutinee842;
    Bindable_this$33.G = null;
    var \u03b4scrutinee846 = e3$proxy6.m;
    var idx$23 = (Bindable_this$33.r.A.invVp | 0);
    while (((Bindable_this$33.i.length | 0) <= idx$23)) {
      Bindable_this$33.i.push(null);
    }
    Bindable_this$33.i[idx$23] = \u03b4scrutinee846;
    Bindable_this$33.G = null;
    var \u03b4scrutinee856 = e4$proxy2.m;
    var idx$24 = (Bindable_this$33.r.A.camPos | 0);
    while (((Bindable_this$33.i.length | 0) <= idx$24)) {
      Bindable_this$33.i.push(null);
    }
    Bindable_this$33.i[idx$24] = \u03b4scrutinee856;
    Bindable_this$33.G = null;
    var \u03b4scrutinee870 = e5$proxy2.m;
    var idx$25 = (Bindable_this$33.r.A.samp | 0);
    while (((Bindable_this$33.i.length | 0) <= idx$25)) {
      Bindable_this$33.i.push(null);
    }
    Bindable_this$33.i[idx$25] = \u03b4scrutinee870;
    Bindable_this$33.G = null;
    var fadePanel = p$11.bc((void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), "rgba16float", (void 0), (void 0), (void 0), Bindable_this$33, (void 0));
    var bloom = $m_Lsketchlib_utils_bloom_Bloom$().mZ(p$11, fadePanel, 0.005, 1.0, 4.0, 5, 1.0, 2.0);
    var input = $m_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$().nI(p$11.fc, true, 400.0, 5.0, true, (void 0), 90.0, 50.0);
    var controller = new $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController(cam, input, 2.5, 3.0);
    p$11.ov(new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((v1$2, v2$2) => {
      var w = (+v1$2);
      var h = (+v2$2);
      var aspect$2 = (w / h);
      var fov$1 = cam.b6;
      var near$1 = cam.g3;
      var far$1 = cam.g2;
      var rotH$2 = cam.au;
      var rotV$2 = cam.b7;
      var pos$2 = cam.ab;
      cam.jh(fov$1, aspect$2, near$1, far$1, rotH$2, rotV$2, pos$2);
      mirror.oQ(w, h);
    })));
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$11, rowTile);
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$11, colTile);
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$11, groundTile);
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$11, ceilTile);
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$11, boxTile);
    $m_Ltrivalibs_utils_animation_animate$package$().mS(((p$5) => ((arg1$2) => {
      var tpf = (+arg1$2);
      input.fp(tpf);
      controller.fp(tpf);
      var vp = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().fm(), cam.hH, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), cam.mE());
      mvp.F.B(mvp.j, vp);
      var $x_104 = mvp.E.queue;
      var $x_103 = mvp.C;
      var s$proxy13 = mvp.j;
      var $x_102 = s$proxy13.dv.buffer;
      $x_104.writeBuffer($x_103, 0.0, $x_102);
      var value$proxy38 = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().fm(), vp, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
      invVp.F.B(invVp.j, value$proxy38);
      var $x_107 = invVp.E.queue;
      var $x_106 = invVp.C;
      var s$proxy14 = invVp.j;
      var $x_105 = s$proxy14.dv.buffer;
      $x_107.writeBuffer($x_106, 0.0, $x_105);
      var value$proxy39 = cam.ab;
      camPos.F.B(camPos.j, value$proxy39);
      var $x_110 = camPos.E.queue;
      var $x_109 = camPos.C;
      var s$proxy15 = camPos.j;
      var $x_108 = s$proxy15.dv.buffer;
      $x_110.writeBuffer($x_109, 0.0, $x_108);
      mirror.ox(vp);
      $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$5, Panel_this);
      $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$5, fadeBlurPanel);
      $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$5, fadePanel);
      bloom.oy();
      p$5.oX(bloom.jW);
    }))(p$11));
  })));
});
var $d_Lsketches_experiments_gridceiling_GridCeiling$package$ = new $TypeData().i($c_Lsketches_experiments_gridceiling_GridCeiling$package$, "sketches.experiments.gridceiling.GridCeiling$package$", ({
  d3: 1
}));
var $n_Lsketches_experiments_gridceiling_GridCeiling$package$;
function $m_Lsketches_experiments_gridceiling_GridCeiling$package$() {
  if ((!$n_Lsketches_experiments_gridceiling_GridCeiling$package$)) {
    $n_Lsketches_experiments_gridceiling_GridCeiling$package$ = new $c_Lsketches_experiments_gridceiling_GridCeiling$package$();
  }
  return $n_Lsketches_experiments_gridceiling_GridCeiling$package$;
}
/** @constructor */
function $c_Lsketchlib_utils_bloom_Bloom$() {
}
$p = $c_Lsketchlib_utils_bloom_Bloom$.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_bloom_Bloom$;
/** @constructor */
function $h_Lsketchlib_utils_bloom_Bloom$() {
}
$h_Lsketchlib_utils_bloom_Bloom$.prototype = $p;
$p.mZ = (function(p, scene, intensity, threshold, blurRadius, mipLevels, toneKnee, toneWhite) {
  if ((mipLevels < 2)) {
    var message$proxy1 = (("bloom mipLevels must be >= 2 (got " + mipLevels) + ")");
    throw new $c_sjs_js_JavaScriptException(Error(message$proxy1)).aF;
  }
  var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy1 = ul$proxy1.as;
  var buffer = new ArrayBuffer(4);
  var arr$proxy1 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
  var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy1.dv, 0), p.g, uv$proxy1);
  b.F.B(b.j, blurRadius);
  var $x_3 = b.E.queue;
  var $x_2 = b.C;
  var s$proxy1 = b.j;
  var $x_1 = s$proxy1.dv.buffer;
  $x_3.writeBuffer($x_2, 0.0, $x_1);
  var ul$proxy2 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy2 = ul$proxy2.as;
  var buffer$2 = new ArrayBuffer(4);
  var arr$proxy2 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
  var b$2 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy2.dv, 0), p.g, uv$proxy2);
  b$2.F.B(b$2.j, intensity);
  var $x_6 = b$2.E.queue;
  var $x_5 = b$2.C;
  var s$proxy2 = b$2.j;
  var $x_4 = s$proxy2.dv.buffer;
  $x_6.writeBuffer($x_5, 0.0, $x_4);
  var sampler = p.mz();
  var build$proxy1 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3) => {
    var body$proxy1 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2) => {
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var color = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("color");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var brightness = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("brightness");
      var $x_10 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
      var $x_9 = $m_sjsr_package$();
      var $x_8 = color.w($m_Ltrivalibs_graphics_math_gpu_expr$package$().gT($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "scene"), $m_Ltrivalibs_graphics_math_gpu_ivec2$().aT($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fq(ctx$2.fh))));
      var $x_7 = brightness.w($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().j2($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().j2($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().Z($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().bm(color), 0.2126), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().Z($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().ge(color), 0.7152)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().Z($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().ps(color), 0.0722)));
      var AssignTarget_this = ctx$2.ai.a3("color");
      var value$proxy1 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().oT($m_Ltrivalibs_graphics_math_gpu_vec4$().lQ($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o().h(1.0)), color, $m_Ltrivalibs_graphics_math_gpu_expr$package$().nt(brightness, ctx$2.D.k("threshold")));
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return $x_10.aI(new $c_sjsr_WrappedVarArgs($x_9.c(new ($d_T.r().C)([$x_8, $x_7, (((("  " + AssignTarget_this.W) + " = ") + value$proxy1.e) + ";")]))));
    }));
    var ctx = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg;
    try {
      var $x_11 = body$proxy1.h(ctx);
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev;
    }
    program$3.Y = $x_11;
    $m_sjs_js_ArrayOps$().M(reg.a1, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$5) => ((data$3) => {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$5, data$3);
    }))(program$3)));
  }));
  var program = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  build$proxy1.h(program);
  var b$1 = program.Y;
  var helperFns$proxy1 = program.al();
  var id = p.q;
  p.q = ((1 + p.q) | 0);
  var names = $m_sjs_js_ArrayOpsCommon$().a(["threshold"], []);
  var dict = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
  var i = 0;
  while ((i < (names.length | 0))) {
    dict[names[i]] = i;
    i = ((1 + i) | 0);
  }
  var names$2 = $m_sjs_js_ArrayOpsCommon$().a(["scene"], []);
  var dict$2 = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
  var i$2 = 0;
  while ((i$2 < (names$2.length | 0))) {
    dict$2[names$2[i$2]] = i$2;
    i$2 = ((1 + i$2) | 0);
  }
  var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$1, helperFns$proxy1);
  var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["threshold"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).J.u()], []));
  var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.a6, sd.a5, fragBuiltinParams);
  var wgsl = (baseWgsl + "\n\n@group(1) @binding(0) var scene: texture_2d<f32>;");
  var args$proxy1 = $m_sr_ScalaRunTime$().ah(new ($d_sjs_js_Any.r().C)([wgsl]));
  console.log(...$m_sjsr_Compat$().ag(args$proxy1));
  var module = p.g.createShaderModule($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("code", wgsl)])))));
  var descriptors = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], [])], []);
  var result = [];
  $m_sjs_js_ArrayOps$().M(descriptors, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((entries$2) => (result.push(p.g.createBindGroupLayout($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries$2)])))))) | 0))));
  var x1 = new $c_T2(result, $m_Ltrivalibs_graphics_shader_layouts$().O(p.g, result));
  var \u03b46$ = x1;
  var bgls$2 = \u03b46$.S;
  var entries = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([])))))]))))], []);
  var panelBgl = p.g.createBindGroupLayout($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries)])))));
  if ((panelBgl !== null)) {
    var other$proxy1 = [panelBgl];
    var allBgls = bgls$2.concat(other$proxy1);
  } else {
    var allBgls = bgls$2;
  }
  var pl = $m_Ltrivalibs_graphics_shader_layouts$().O(p.g, allBgls);
  var thresholdShade = new $c_Ltrivalibs_graphics_painter_Shade(id, module, null, bgls$2[0], panelBgl, pl, false, dict, dict$2);
  var build$proxy2 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$1) => {
    var body$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$1) => {
      var AssignTarget_this$1 = ctx$2$1.ai.a3("color");
      var value$proxy3 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$().n4($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex"), ctx$2$1.D.k("samp"), ctx$2$1.ao.k("uv"), ctx$2$1.D.k("blurRadius"), null);
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return (((("  " + AssignTarget_this$1.W) + " = ") + value$proxy3.e) + ";");
    }));
    var ctx$1 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$1;
    try {
      var $x_12 = body$proxy3.h(ctx$1);
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$1;
    }
    program$3$1.Y = $x_12;
    $m_sjs_js_ArrayOps$().M(reg$1.a1, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$6) => ((data$3$1) => {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$6, data$3$1);
    }))(program$3$1)));
  }));
  var program$2 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  build$proxy2.h(program$2);
  var b$3 = program$2.Y;
  var helperFns$proxy2 = program$2.al();
  var id$2 = p.q;
  p.q = ((1 + p.q) | 0);
  var names$4 = $m_sjs_js_ArrayOpsCommon$().a(["blurRadius"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []));
  var dict$3 = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
  var i$3 = 0;
  while ((i$3 < (names$4.length | 0))) {
    dict$3[names$4[i$3]] = i$3;
    i$3 = ((1 + i$3) | 0);
  }
  var names$5 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], []);
  var dict$4 = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
  var i$4 = 0;
  while ((i$4 < (names$5.length | 0))) {
    dict$4[names$5[i$4]] = i$4;
    i$4 = ((1 + i$4) | 0);
  }
  var sd$2 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$3, helperFns$proxy2);
  var vertexInputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls$2 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["blurRadius"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).J.u()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).J.u()], [])));
  var fragBuiltinParams$2 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$2 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$2, vertexInputStruct$2, vertexOutputStruct$2, fragmentOutputStruct$2, groupDecls$2, sd$2.a6, sd$2.a5, fragBuiltinParams$2);
  var wgsl$2 = (baseWgsl$2 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
  var args$proxy2 = $m_sr_ScalaRunTime$().ah(new ($d_sjs_js_Any.r().C)([wgsl$2]));
  console.log(...$m_sjsr_Compat$().ag(args$proxy2));
  var module$2 = p.g.createShaderModule($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("code", wgsl$2)])))));
  var descriptors$2 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([])))))]))))], []))], []);
  var result$2 = [];
  $m_sjs_js_ArrayOps$().M(descriptors$2, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((entries$2$1) => (result$2.push(p.g.createBindGroupLayout($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries$2$1)])))))) | 0))));
  var x4 = new $c_T2(result$2, $m_Ltrivalibs_graphics_shader_layouts$().O(p.g, result$2));
  var \u03b46$$2 = x4;
  var bgls$4 = \u03b46$$2.S;
  var entries$2$2 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([])))))]))))], []);
  var panelBgl$2 = p.g.createBindGroupLayout($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries$2$2)])))));
  if ((panelBgl$2 !== null)) {
    var other$proxy2 = [panelBgl$2];
    var allBgls$2 = bgls$4.concat(other$proxy2);
  } else {
    var allBgls$2 = bgls$4;
  }
  var pl$2 = $m_Ltrivalibs_graphics_shader_layouts$().O(p.g, allBgls$2);
  var downsampleShade = new $c_Ltrivalibs_graphics_painter_Shade(id$2, module$2, null, bgls$4[0], panelBgl$2, pl$2, false, dict$3, dict$4);
  var build$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$2) => {
    var body$proxy5 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$2) => {
      var AssignTarget_this$2 = ctx$2$2.ai.a3("color");
      var value$proxy5 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$().jn($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex"), ctx$2$2.D.k("samp"), ctx$2$2.ao.k("uv"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().Z(ctx$2$2.D.k("blurRadius"), 0.5), null);
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return (((("  " + AssignTarget_this$2.W) + " = ") + value$proxy5.e) + ";");
    }));
    var ctx$3 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$2;
    try {
      var $x_13 = body$proxy5.h(ctx$3);
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$2;
    }
    program$3$2.Y = $x_13;
    $m_sjs_js_ArrayOps$().M(reg$2.a1, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$7) => ((data$3$2) => {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$7, data$3$2);
    }))(program$3$2)));
  }));
  var program$3$3 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  build$proxy3.h(program$3$3);
  var b$4 = program$3$3.Y;
  var helperFns$proxy3 = program$3$3.al();
  var id$3 = p.q;
  p.q = ((1 + p.q) | 0);
  var names$7 = $m_sjs_js_ArrayOpsCommon$().a(["blurRadius"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []));
  var dict$5 = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
  var i$5 = 0;
  while ((i$5 < (names$7.length | 0))) {
    dict$5[names$7[i$5]] = i$5;
    i$5 = ((1 + i$5) | 0);
  }
  var names$8 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], []);
  var dict$6 = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
  var i$6 = 0;
  while ((i$6 < (names$8.length | 0))) {
    dict$6[names$8[i$6]] = i$6;
    i$6 = ((1 + i$6) | 0);
  }
  var sd$3 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$4, helperFns$proxy3);
  var vertexInputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls$3 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["blurRadius"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).J.u()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).J.u()], [])));
  var fragBuiltinParams$3 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$3 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$3, vertexInputStruct$3, vertexOutputStruct$3, fragmentOutputStruct$3, groupDecls$3, sd$3.a6, sd$3.a5, fragBuiltinParams$3);
  var wgsl$3 = (baseWgsl$3 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
  var args$proxy3 = $m_sr_ScalaRunTime$().ah(new ($d_sjs_js_Any.r().C)([wgsl$3]));
  console.log(...$m_sjsr_Compat$().ag(args$proxy3));
  var module$3 = p.g.createShaderModule($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("code", wgsl$3)])))));
  var descriptors$3 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([])))))]))))], []))], []);
  var result$3 = [];
  $m_sjs_js_ArrayOps$().M(descriptors$3, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((entries$2$3) => (result$3.push(p.g.createBindGroupLayout($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries$2$3)])))))) | 0))));
  var x7 = new $c_T2(result$3, $m_Ltrivalibs_graphics_shader_layouts$().O(p.g, result$3));
  var \u03b46$$3 = x7;
  var bgls$6 = \u03b46$$3.S;
  var entries$3 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([])))))]))))], []);
  var panelBgl$3 = p.g.createBindGroupLayout($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries$3)])))));
  if ((panelBgl$3 !== null)) {
    var other$proxy3 = [panelBgl$3];
    var allBgls$3 = bgls$6.concat(other$proxy3);
  } else {
    var allBgls$3 = bgls$6;
  }
  var pl$3 = $m_Ltrivalibs_graphics_shader_layouts$().O(p.g, allBgls$3);
  var upsampleShade = new $c_Ltrivalibs_graphics_painter_Shade(id$3, module$3, null, bgls$6[0], panelBgl$3, pl$3, false, dict$5, dict$6);
  var layers = [];
  var Bindable_this = p.aX(thresholdShade, (void 0), (void 0), (void 0));
  var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("scene", scene);
  var e2$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("threshold", threshold);
  var \u03b4scrutinee192 = e1$proxy1.m;
  var idx = (Bindable_this.r.a4.scene | 0);
  while (((Bindable_this.H.length | 0) <= idx)) {
    Bindable_this.H.push(null);
  }
  Bindable_this.H[idx] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee192);
  Bindable_this.G = null;
  var \u03b4scrutinee196 = (+e2$proxy1.m);
  var idx$2 = (Bindable_this.r.A.threshold | 0);
  var existing = ((idx$2 < (Bindable_this.i.length | 0)) ? Bindable_this.i[idx$2] : null);
  var device$proxy1 = Bindable_this.gq.g;
  if ((existing !== null)) {
    existing.F.B(existing.j, \u03b4scrutinee196);
    var $x_16 = existing.E.queue;
    var $x_15 = existing.C;
    var s$proxy3 = existing.j;
    var $x_14 = s$proxy3.dv.buffer;
    $x_16.writeBuffer($x_15, 0.0, $x_14);
    var bb = existing;
  } else {
    var uv$2 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
    var buffer$3 = new ArrayBuffer(4);
    var arr$proxy3 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$3), 1);
    var b$3$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy3.dv, 0), device$proxy1, uv$2);
    b$3$1.F.B(b$3$1.j, \u03b4scrutinee196);
    var $x_19 = b$3$1.E.queue;
    var $x_18 = b$3$1.C;
    var s$proxy4 = b$3$1.j;
    var $x_17 = s$proxy4.dv.buffer;
    $x_19.writeBuffer($x_18, 0.0, $x_17);
    var bb = b$3$1;
  }
  while (((Bindable_this.i.length | 0) <= idx$2)) {
    Bindable_this.i.push(null);
  }
  Bindable_this.i[idx$2] = bb;
  Bindable_this.G = null;
  layers.push(Bindable_this);
  var di = 0;
  while ((di < ((mipLevels - 1) | 0))) {
    var mipSource$1 = di;
    var mipTarget$1 = ((1 + di) | 0);
    var Bindable_this$5 = p.aX(downsampleShade, (void 0), mipSource$1, mipTarget$1);
    var e1$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("blurRadius", b);
    var e2$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var \u03b4scrutinee212 = e1$proxy2.m;
    var idx$3 = (Bindable_this$5.r.A.blurRadius | 0);
    while (((Bindable_this$5.i.length | 0) <= idx$3)) {
      Bindable_this$5.i.push(null);
    }
    Bindable_this$5.i[idx$3] = \u03b4scrutinee212;
    Bindable_this$5.G = null;
    var \u03b4scrutinee225 = e2$proxy2.m;
    var idx$4 = (Bindable_this$5.r.A.samp | 0);
    while (((Bindable_this$5.i.length | 0) <= idx$4)) {
      Bindable_this$5.i.push(null);
    }
    Bindable_this$5.i[idx$4] = \u03b4scrutinee225;
    Bindable_this$5.G = null;
    layers.push(Bindable_this$5);
    di = ((1 + di) | 0);
  }
  var ui = ((mipLevels - 2) | 0);
  while ((ui >= 0)) {
    var Bindable_this$8 = p.aX(upsampleShade, $m_Ltrivalibs_graphics_painter_BlendState$().kv, ((1 + ui) | 0), ui);
    var e1$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("blurRadius", b);
    var e2$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var \u03b4scrutinee235 = e1$proxy3.m;
    var idx$5 = (Bindable_this$8.r.A.blurRadius | 0);
    while (((Bindable_this$8.i.length | 0) <= idx$5)) {
      Bindable_this$8.i.push(null);
    }
    Bindable_this$8.i[idx$5] = \u03b4scrutinee235;
    Bindable_this$8.G = null;
    var \u03b4scrutinee248 = e2$proxy3.m;
    var idx$6 = (Bindable_this$8.r.A.samp | 0);
    while (((Bindable_this$8.i.length | 0) <= idx$6)) {
      Bindable_this$8.i.push(null);
    }
    Bindable_this$8.i[idx$6] = \u03b4scrutinee248;
    Bindable_this$8.G = null;
    layers.push(Bindable_this$8);
    ui = ((ui - 1) | 0);
  }
  var bloomP = p.bc((void 0), (void 0), (void 0), (void 0), (void 0), mipLevels, (void 0), "rgba16float", (void 0), (void 0), (void 0), (void 0), layers);
  var toneOn = (toneWhite > toneKnee);
  var toneLift = (toneOn ? (1.0 - toneKnee) : 0.0);
  var toneFalloff = (toneOn ? ((-1.0) / (toneWhite - toneKnee)) : (-1.0));
  var build$proxy4 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$4) => {
    var body$proxy7 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$3) => {
      var coord = $m_Ltrivalibs_graphics_math_gpu_ivec2$().aT($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fq(ctx$2$3.fh));
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var c = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("c");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var low = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("low");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var over = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("over");
      var $x_24 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
      var $x_23 = $m_sjsr_package$();
      var $x_22 = c.w($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gd($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().hN($m_Ltrivalibs_graphics_math_gpu_expr$package$().gT($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "scene"), coord), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().mt($m_Ltrivalibs_graphics_math_gpu_expr$package$().gT($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "bloom"), coord), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), ctx$2$3.D.k("intensity")))));
      var $x_21 = low.w($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().op(c, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_vec3$().aT(ctx$2$3.D.k("knee"))));
      var $x_20 = over.w($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().jl(c, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), low));
      var AssignTarget_this$3 = ctx$2$3.ai.a3("color");
      var value$proxy7 = $m_Ltrivalibs_graphics_math_gpu_vec4$().af($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().j4(low, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().bl($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().jl($m_Ltrivalibs_graphics_math_gpu_vec3$().mU(1.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().no($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().bl(over, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), ctx$2$3.D.k("falloff")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$())), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), ctx$2$3.D.k("lift"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o().h(1.0));
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return $x_24.aI(new $c_sjsr_WrappedVarArgs($x_23.c(new ($d_T.r().C)([$x_22, $x_21, $x_20, (((("  " + AssignTarget_this$3.W) + " = ") + value$proxy7.e) + ";")]))));
    }));
    var ctx$4 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg$3 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev$3 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$3;
    try {
      var $x_25 = body$proxy7.h(ctx$4);
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$3;
    }
    program$3$4.Y = $x_25;
    $m_sjs_js_ArrayOps$().M(reg$3.a1, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$8) => ((data$3$3) => {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$8, data$3$3);
    }))(program$3$4)));
  }));
  var program$4 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  build$proxy4.h(program$4);
  var b$5 = program$4.Y;
  var helperFns$proxy4 = program$4.al();
  var id$4 = p.q;
  p.q = ((1 + p.q) | 0);
  var names$10 = $m_sjs_js_ArrayOpsCommon$().a(["intensity"], $m_sjs_js_ArrayOpsCommon$().a(["knee"], $m_sjs_js_ArrayOpsCommon$().a(["lift"], $m_sjs_js_ArrayOpsCommon$().a(["falloff"], []))));
  var dict$7 = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
  var i$7 = 0;
  while ((i$7 < (names$10.length | 0))) {
    dict$7[names$10[i$7]] = i$7;
    i$7 = ((1 + i$7) | 0);
  }
  var names$11 = $m_sjs_js_ArrayOpsCommon$().a(["scene"], $m_sjs_js_ArrayOpsCommon$().a(["bloom"], []));
  var dict$8 = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
  var i$8 = 0;
  while ((i$8 < (names$11.length | 0))) {
    dict$8[names$11[i$8]] = i$8;
    i$8 = ((1 + i$8) | 0);
  }
  var sd$4 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$5, helperFns$proxy4);
  var vertexInputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls$4 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["intensity"], $m_sjs_js_ArrayOpsCommon$().a(["knee"], $m_sjs_js_ArrayOpsCommon$().a(["lift"], $m_sjs_js_ArrayOpsCommon$().a(["falloff"], [])))), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).J.u()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).J.u()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).J.u()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).J.u()], [])))));
  var fragBuiltinParams$4 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$4 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$4, vertexInputStruct$4, vertexOutputStruct$4, fragmentOutputStruct$4, groupDecls$4, sd$4.a6, sd$4.a5, fragBuiltinParams$4);
  var wgsl$4 = (baseWgsl$4 + "\n\n@group(1) @binding(0) var scene: texture_2d<f32>;\n@group(1) @binding(1) var bloom: texture_2d<f32>;");
  var args$proxy4 = $m_sr_ScalaRunTime$().ah(new ($d_sjs_js_Any.r().C)([wgsl$4]));
  console.log(...$m_sjsr_Compat$().ag(args$proxy4));
  var module$4 = p.g.createShaderModule($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("code", wgsl$4)])))));
  var descriptors$4 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 2), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 3), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], []))))], []);
  var result$4 = [];
  $m_sjs_js_ArrayOps$().M(descriptors$4, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((entries$2$4) => (result$4.push(p.g.createBindGroupLayout($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries$2$4)])))))) | 0))));
  var x10 = new $c_T2(result$4, $m_Ltrivalibs_graphics_shader_layouts$().O(p.g, result$4));
  var \u03b46$$4 = x10;
  var bgls$8 = \u03b46$$4.S;
  var entries$4 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([])))))]))))], []));
  var panelBgl$4 = p.g.createBindGroupLayout($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries$4)])))));
  if ((panelBgl$4 !== null)) {
    var other$proxy4 = [panelBgl$4];
    var allBgls$4 = bgls$8.concat(other$proxy4);
  } else {
    var allBgls$4 = bgls$8;
  }
  var pl$4 = $m_Ltrivalibs_graphics_shader_layouts$().O(p.g, allBgls$4);
  var compositeShade = new $c_Ltrivalibs_graphics_painter_Shade(id$4, module$4, null, bgls$8[0], panelBgl$4, pl$4, false, dict$7, dict$8);
  var Bindable_this$11 = p.aX(compositeShade, (void 0), (void 0), (void 0));
  var e1$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("scene", scene);
  var e2$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("bloom", bloomP);
  var e3$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("intensity", b$2);
  var e4$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("knee", toneKnee);
  var e5$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("lift", toneLift);
  var e6$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("falloff", toneFalloff);
  var \u03b4scrutinee350 = e1$proxy4.m;
  var idx$7 = (Bindable_this$11.r.a4.scene | 0);
  while (((Bindable_this$11.H.length | 0) <= idx$7)) {
    Bindable_this$11.H.push(null);
  }
  Bindable_this$11.H[idx$7] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee350);
  Bindable_this$11.G = null;
  var \u03b4scrutinee366 = e2$proxy4.m;
  var idx$8 = (Bindable_this$11.r.a4.bloom | 0);
  while (((Bindable_this$11.H.length | 0) <= idx$8)) {
    Bindable_this$11.H.push(null);
  }
  Bindable_this$11.H[idx$8] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee366);
  Bindable_this$11.G = null;
  var \u03b4scrutinee370 = e3$proxy1.m;
  var idx$9 = (Bindable_this$11.r.A.intensity | 0);
  while (((Bindable_this$11.i.length | 0) <= idx$9)) {
    Bindable_this$11.i.push(null);
  }
  Bindable_this$11.i[idx$9] = \u03b4scrutinee370;
  Bindable_this$11.G = null;
  var \u03b4scrutinee383 = (+e4$proxy1.m);
  var idx$10 = (Bindable_this$11.r.A.knee | 0);
  var existing$2 = ((idx$10 < (Bindable_this$11.i.length | 0)) ? Bindable_this$11.i[idx$10] : null);
  var device$proxy2 = Bindable_this$11.gq.g;
  if ((existing$2 !== null)) {
    existing$2.F.B(existing$2.j, \u03b4scrutinee383);
    var $x_28 = existing$2.E.queue;
    var $x_27 = existing$2.C;
    var s$proxy5 = existing$2.j;
    var $x_26 = s$proxy5.dv.buffer;
    $x_28.writeBuffer($x_27, 0.0, $x_26);
    var bb$5 = existing$2;
  } else {
    var uv$2$1 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
    var buffer$4 = new ArrayBuffer(4);
    var arr$proxy4 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$4), 1);
    var b$4$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy4.dv, 0), device$proxy2, uv$2$1);
    b$4$1.F.B(b$4$1.j, \u03b4scrutinee383);
    var $x_31 = b$4$1.E.queue;
    var $x_30 = b$4$1.C;
    var s$proxy6 = b$4$1.j;
    var $x_29 = s$proxy6.dv.buffer;
    $x_31.writeBuffer($x_30, 0.0, $x_29);
    var bb$5 = b$4$1;
  }
  while (((Bindable_this$11.i.length | 0) <= idx$10)) {
    Bindable_this$11.i.push(null);
  }
  Bindable_this$11.i[idx$10] = bb$5;
  Bindable_this$11.G = null;
  var \u03b4scrutinee407 = (+e5$proxy1.m);
  var idx$11 = (Bindable_this$11.r.A.lift | 0);
  var existing$3 = ((idx$11 < (Bindable_this$11.i.length | 0)) ? Bindable_this$11.i[idx$11] : null);
  var device$proxy3 = Bindable_this$11.gq.g;
  if ((existing$3 !== null)) {
    existing$3.F.B(existing$3.j, \u03b4scrutinee407);
    var $x_34 = existing$3.E.queue;
    var $x_33 = existing$3.C;
    var s$proxy7 = existing$3.j;
    var $x_32 = s$proxy7.dv.buffer;
    $x_34.writeBuffer($x_33, 0.0, $x_32);
    var bb$6 = existing$3;
  } else {
    var uv$3 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
    var buffer$5 = new ArrayBuffer(4);
    var arr$proxy5 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$5), 1);
    var b$5$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy5.dv, 0), device$proxy3, uv$3);
    b$5$1.F.B(b$5$1.j, \u03b4scrutinee407);
    var $x_37 = b$5$1.E.queue;
    var $x_36 = b$5$1.C;
    var s$proxy8 = b$5$1.j;
    var $x_35 = s$proxy8.dv.buffer;
    $x_37.writeBuffer($x_36, 0.0, $x_35);
    var bb$6 = b$5$1;
  }
  while (((Bindable_this$11.i.length | 0) <= idx$11)) {
    Bindable_this$11.i.push(null);
  }
  Bindable_this$11.i[idx$11] = bb$6;
  Bindable_this$11.G = null;
  var \u03b4scrutinee437 = (+e6$proxy1.m);
  var idx$12 = (Bindable_this$11.r.A.falloff | 0);
  var existing$4 = ((idx$12 < (Bindable_this$11.i.length | 0)) ? Bindable_this$11.i[idx$12] : null);
  var device$proxy4 = Bindable_this$11.gq.g;
  if ((existing$4 !== null)) {
    existing$4.F.B(existing$4.j, \u03b4scrutinee437);
    var $x_40 = existing$4.E.queue;
    var $x_39 = existing$4.C;
    var s$proxy9 = existing$4.j;
    var $x_38 = s$proxy9.dv.buffer;
    $x_40.writeBuffer($x_39, 0.0, $x_38);
    var bb$7 = existing$4;
  } else {
    var uv$4 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
    var buffer$6 = new ArrayBuffer(4);
    var arr$proxy6 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$6), 1);
    var b$6 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy6.dv, 0), device$proxy4, uv$4);
    b$6.F.B(b$6.j, \u03b4scrutinee437);
    var $x_43 = b$6.E.queue;
    var $x_42 = b$6.C;
    var s$proxy10 = b$6.j;
    var $x_41 = s$proxy10.dv.buffer;
    $x_43.writeBuffer($x_42, 0.0, $x_41);
    var bb$7 = b$6;
  }
  while (((Bindable_this$11.i.length | 0) <= idx$12)) {
    Bindable_this$11.i.push(null);
  }
  Bindable_this$11.i[idx$12] = bb$7;
  Bindable_this$11.G = null;
  return new $c_Lsketchlib_utils_bloom_Bloom$$anon$1(bloomP, p.bc((void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), Bindable_this$11, (void 0)), p, b, b$2);
});
var $d_Lsketchlib_utils_bloom_Bloom$ = new $TypeData().i($c_Lsketchlib_utils_bloom_Bloom$, "sketchlib.utils.bloom.Bloom$", ({
  d5: 1
}));
var $n_Lsketchlib_utils_bloom_Bloom$;
function $m_Lsketchlib_utils_bloom_Bloom$() {
  if ((!$n_Lsketchlib_utils_bloom_Bloom$)) {
    $n_Lsketchlib_utils_bloom_Bloom$ = new $c_Lsketchlib_utils_bloom_Bloom$();
  }
  return $n_Lsketchlib_utils_bloom_Bloom$;
}
/** @constructor */
function $c_Lsketchlib_utils_mirror_MirrorReflection$() {
  this.i2 = 0.0;
  this.jX = null;
  $n_Lsketchlib_utils_mirror_MirrorReflection$ = this;
  this.i2 = 2.0;
  this.jX = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("mirror_tex_height", "fn mirror_tex_height(tex: texture_2d<f32>) -> f32 {\n  return f32(textureDimensions(tex).y);\n}");
}
$p = $c_Lsketchlib_utils_mirror_MirrorReflection$.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_mirror_MirrorReflection$;
/** @constructor */
function $h_Lsketchlib_utils_mirror_MirrorReflection$() {
}
$h_Lsketchlib_utils_mirror_MirrorReflection$.prototype = $p;
$p.n0 = (function(p, camera, shapes, vpName, alphaScale, mirror, blurStrength, stretch, mipLevels, overscan, clearColor) {
  if ((mipLevels < 2)) {
    var message$proxy1 = (("MirrorReflection mipLevels must be >= 2 (got " + mipLevels) + ")");
    throw new $c_sjs_js_JavaScriptException(Error(message$proxy1)).aF;
  }
  if ((overscan < 0.0)) {
    var message$proxy2 = (("MirrorReflection overscan must be >= 0 (got " + overscan) + ")");
    throw new $c_sjs_js_JavaScriptException(Error(message$proxy2)).aF;
  }
  var reflMat = mirror.oL();
  var p$proxy1 = ((mipLevels - 1) | 0);
  var maxRadius = ((+Math.pow(2.0, p$proxy1)) - 1.0);
  if ((((0.0062499999999999995 * blurStrength) * p.je()) > maxRadius)) {
    var $x_3 = $m_sr_ScalaRunTime$();
    var $x_2 = p.je();
    var p$proxy2 = ((0.0062499999999999995 * blurStrength) * p.je());
    var $x_1 = $m_RTLong$().gQ((+Math.round(p$proxy2)));
    var x_$_lo = $x_1.l;
    var x_$_hi = $x_1.h;
    var args$proxy1 = $x_3.ah(new ($d_sjs_js_Any.r().C)([(((((((("MirrorReflection: blurStrength " + blurStrength) + "% of height ") + $x_2) + " ") + ("needs a " + ((4.294967296E9 * x_$_hi) + (x_$_lo >>> 0.0)))) + " px mip ") + ((("radius, beyond the reach of " + mipLevels) + " mip levels (") + maxRadius)) + " px) \u2014 the blur will saturate before alphaScale. Raise mipLevels.")]));
    console.log(...$m_sjsr_Compat$().ag(args$proxy1));
  }
  var pn = mirror.gm;
  var pd = mirror.gl;
  var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
  var uv$proxy1 = ul$proxy1.as;
  var buffer = new ArrayBuffer(64);
  var arr$proxy1 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
  var uVp = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy1.dv, 0), p.g, uv$proxy1);
  var ul$proxy2 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
  var uv$proxy2 = ul$proxy2.as;
  var buffer$2 = new ArrayBuffer(64);
  var arr$proxy2 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
  var uInvVp = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy2.dv, 0), p.g, uv$proxy2);
  var value$proxy1 = (0.0062499999999999995 * blurStrength);
  var ul$proxy3 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy3 = ul$proxy3.as;
  var buffer$3 = new ArrayBuffer(4);
  var arr$proxy3 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$3), 1);
  var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy3.dv, 0), p.g, uv$proxy3);
  b.F.B(b.j, value$proxy1);
  var $x_6 = b.E.queue;
  var $x_5 = b.C;
  var s$proxy1 = b.j;
  var $x_4 = s$proxy1.dv.buffer;
  $x_6.writeBuffer($x_5, 0.0, $x_4);
  var ul$proxy4 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy4 = ul$proxy4.as;
  var buffer$4 = new ArrayBuffer(4);
  var arr$proxy4 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$4), 1);
  var b$2 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy4.dv, 0), p.g, uv$proxy4);
  b$2.F.B(b$2.j, stretch);
  var $x_9 = b$2.E.queue;
  var $x_8 = b$2.C;
  var s$proxy2 = b$2.j;
  var $x_7 = s$proxy2.dv.buffer;
  $x_9.writeBuffer($x_8, 0.0, $x_7);
  var ul$proxy5 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy5 = ul$proxy5.as;
  var buffer$5 = new ArrayBuffer(4);
  var arr$proxy5 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$5), 1);
  var b$3 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy5.dv, 0), p.g, uv$proxy5);
  b$3.F.B(b$3.j, 0.0);
  var $x_12 = b$3.E.queue;
  var $x_11 = b$3.C;
  var s$proxy3 = b$3.j;
  var $x_10 = s$proxy3.dv.buffer;
  $x_12.writeBuffer($x_11, 0.0, $x_10);
  var value$proxy2 = new $c_Ltrivalibs_graphics_math_cpu_Vec4(1.0, 1.0, 0.0, 0.0);
  var ul$proxy6 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$());
  var uv$proxy6 = ul$proxy6.as;
  var buffer$6 = new ArrayBuffer(16);
  var arr$proxy6 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$6), 1);
  var b$4 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy6.dv, 0), p.g, uv$proxy6);
  b$4.F.B(b$4.j, value$proxy2);
  var $x_15 = b$4.E.queue;
  var $x_14 = b$4.C;
  var s$proxy4 = b$4.j;
  var $x_13 = s$proxy4.dv.buffer;
  $x_15.writeBuffer($x_14, 0.0, $x_13);
  var sampler = p.mz();
  var mirrorPanel = p.bc((void 0), (void 0), clearColor, true, true, (void 0), (void 0), "rgba16float", (void 0), (void 0), shapes, (void 0), (void 0));
  var dict$proxy1 = mirrorPanel.gz;
  dict$proxy1[vpName] = uVp;
  var build$proxy1 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3) => {
    var body$proxy1 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2) => {
      var uv$6 = ctx$2.ao.k("uv");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var d = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("d");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var ndc = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("ndc");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var worldH = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("worldH");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var worldPos = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("worldPos");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var t = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("t");
      var $x_24 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
      var $x_23 = $m_sjsr_package$();
      var $x_22 = d.w($m_Ltrivalibs_graphics_math_gpu_expr$package$().m0($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "depth"), $m_Ltrivalibs_graphics_math_gpu_ivec2$().aT($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fq(ctx$2.fh))));
      var $x_21 = $m_Ltrivalibs_graphics_math_gpu_vec3$();
      var $x_20 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().fl($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().Z($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().bm(uv$6), 2.0), 1.0);
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var e$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().Z($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().ge(uv$6), 2.0);
      var $x_19 = ndc.w($x_21.aJ($x_20, $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aW().aY((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aV(1.0)) + " - ") + e$proxy1.e) + ")")), d));
      var $x_18 = worldH.w($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().he(ctx$2.D.k("invVp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gS(), $m_Ltrivalibs_graphics_math_gpu_vec4$().af(ndc, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o().h(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$()));
      var $x_17 = worldPos.w($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().m2($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gd(worldH), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().hX(worldH)));
      var $x_16 = t.w($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().gO($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().j1($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().fl($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().ng($m_Ltrivalibs_graphics_math_gpu_vec3$().aJ($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o().h(pn.x), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o().h(pn.v), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o().h(pn.y)), worldPos), pd), alphaScale)));
      var AssignTarget_this = ctx$2.ai.a3("color");
      var value$proxy3 = $m_Ltrivalibs_graphics_math_gpu_vec4$().af($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gd($m_Ltrivalibs_graphics_math_gpu_expr$package$().gT($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "col"), $m_Ltrivalibs_graphics_math_gpu_ivec2$().aT($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fq(ctx$2.fh)))), t);
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return $x_24.aI(new $c_sjsr_WrappedVarArgs($x_23.c(new ($d_T.r().C)([$x_22, $x_19, $x_18, $x_17, $x_16, (((("  " + AssignTarget_this.W) + " = ") + value$proxy3.e) + ";")]))));
    }));
    var ctx = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg;
    try {
      var $x_25 = body$proxy1.h(ctx);
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev;
    }
    program$3.Y = $x_25;
    $m_sjs_js_ArrayOps$().M(reg.a1, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$4) => ((data$3) => {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$4, data$3);
    }))(program$3)));
  }));
  var program = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  build$proxy1.h(program);
  var b$1 = program.Y;
  var helperFns$proxy1 = program.al();
  var id = p.q;
  p.q = ((1 + p.q) | 0);
  var names = $m_sjs_js_ArrayOpsCommon$().a(["invVp"], []);
  var dict = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
  var i = 0;
  while ((i < (names.length | 0))) {
    dict[names[i]] = i;
    i = ((1 + i) | 0);
  }
  var names$2 = $m_sjs_js_ArrayOpsCommon$().a(["col"], $m_sjs_js_ArrayOpsCommon$().a(["depth"], []));
  var dict$2 = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
  var i$2 = 0;
  while ((i$2 < (names$2.length | 0))) {
    dict$2[names$2[i$2]] = i$2;
    i$2 = ((1 + i$2) | 0);
  }
  var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$1, helperFns$proxy1);
  var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["invVp"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).J.u()], []));
  var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.a6, sd.a5, fragBuiltinParams);
  var wgsl = (baseWgsl + "\n\n@group(1) @binding(0) var col: texture_2d<f32>;\n@group(1) @binding(1) var depth: texture_depth_2d;");
  var args$proxy2 = $m_sr_ScalaRunTime$().ah(new ($d_sjs_js_Any.r().C)([wgsl]));
  console.log(...$m_sjsr_Compat$().ag(args$proxy2));
  var module = p.g.createShaderModule($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("code", wgsl)])))));
  var descriptors = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], [])], []);
  var result = [];
  $m_sjs_js_ArrayOps$().M(descriptors, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((entries$2) => (result.push(p.g.createBindGroupLayout($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries$2)])))))) | 0))));
  var x1 = new $c_T2(result, $m_Ltrivalibs_graphics_shader_layouts$().O(p.g, result));
  var \u03b46$ = x1;
  var bgls$2 = \u03b46$.S;
  var entries = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("sampleType", "depth")])))))]))))], []));
  var panelBgl = p.g.createBindGroupLayout($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries)])))));
  if ((panelBgl !== null)) {
    var other$proxy1 = [panelBgl];
    var allBgls = bgls$2.concat(other$proxy1);
  } else {
    var allBgls = bgls$2;
  }
  var pl = $m_Ltrivalibs_graphics_shader_layouts$().O(p.g, allBgls);
  var bakeShade = new $c_Ltrivalibs_graphics_painter_Shade(id, module, null, bgls$2[0], panelBgl, pl, false, dict, dict$2);
  var build$proxy2 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$1) => {
    var body$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$1) => {
      var AssignTarget_this$1 = ctx$2$1.ai.a3("color");
      var value$proxy5 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$().jn($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex"), ctx$2$1.D.k("samp"), ctx$2$1.ao.k("uv"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o().h(4.0), null);
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return (((("  " + AssignTarget_this$1.W) + " = ") + value$proxy5.e) + ";");
    }));
    var ctx$1 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$1;
    try {
      var $x_26 = body$proxy3.h(ctx$1);
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$1;
    }
    program$3$1.Y = $x_26;
    $m_sjs_js_ArrayOps$().M(reg$1.a1, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$5) => ((data$3$1) => {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$5, data$3$1);
    }))(program$3$1)));
  }));
  var program$2 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  build$proxy2.h(program$2);
  var b$5 = program$2.Y;
  var helperFns$proxy2 = program$2.al();
  var id$2 = p.q;
  p.q = ((1 + p.q) | 0);
  var names$4 = $m_sjs_js_ArrayOpsCommon$().a(["samp"], []);
  var dict$3 = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
  var i$3 = 0;
  while ((i$3 < (names$4.length | 0))) {
    dict$3[names$4[i$3]] = i$3;
    i$3 = ((1 + i$3) | 0);
  }
  var names$5 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], []);
  var dict$4 = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
  var i$4 = 0;
  while ((i$4 < (names$5.length | 0))) {
    dict$4[names$5[i$4]] = i$4;
    i$4 = ((1 + i$4) | 0);
  }
  var sd$2 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$5, helperFns$proxy2);
  var vertexInputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls$2 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["samp"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).J.u()], []));
  var fragBuiltinParams$2 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$2 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$2, vertexInputStruct$2, vertexOutputStruct$2, fragmentOutputStruct$2, groupDecls$2, sd$2.a6, sd$2.a5, fragBuiltinParams$2);
  var wgsl$2 = (baseWgsl$2 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
  var args$proxy3 = $m_sr_ScalaRunTime$().ah(new ($d_sjs_js_Any.r().C)([wgsl$2]));
  console.log(...$m_sjsr_Compat$().ag(args$proxy3));
  var module$2 = p.g.createShaderModule($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("code", wgsl$2)])))));
  var descriptors$2 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([])))))]))))], [])], []);
  var result$2 = [];
  $m_sjs_js_ArrayOps$().M(descriptors$2, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((entries$2$1) => (result$2.push(p.g.createBindGroupLayout($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries$2$1)])))))) | 0))));
  var x4 = new $c_T2(result$2, $m_Ltrivalibs_graphics_shader_layouts$().O(p.g, result$2));
  var \u03b46$$2 = x4;
  var bgls$4 = \u03b46$$2.S;
  var entries$2$2 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([])))))]))))], []);
  var panelBgl$2 = p.g.createBindGroupLayout($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries$2$2)])))));
  if ((panelBgl$2 !== null)) {
    var other$proxy2 = [panelBgl$2];
    var allBgls$2 = bgls$4.concat(other$proxy2);
  } else {
    var allBgls$2 = bgls$4;
  }
  var pl$2 = $m_Ltrivalibs_graphics_shader_layouts$().O(p.g, allBgls$2);
  var downBlurShade = new $c_Ltrivalibs_graphics_painter_Shade(id$2, module$2, null, bgls$4[0], panelBgl$2, pl$2, false, dict$3, dict$4);
  var blurLayers = [];
  var Bindable_this = p.aX(bakeShade, (void 0), (void 0), (void 0));
  var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("col", mirrorPanel);
  var e2$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("depth", mirrorPanel.lT(0, (-1), true));
  var e3$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("invVp", uInvVp);
  var \u03b4scrutinee134 = e1$proxy1.m;
  var idx = (Bindable_this.r.a4.col | 0);
  while (((Bindable_this.H.length | 0) <= idx)) {
    Bindable_this.H.push(null);
  }
  Bindable_this.H[idx] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee134);
  Bindable_this.G = null;
  var \u03b4scrutinee144 = e2$proxy1.m;
  var idx$2 = (Bindable_this.r.a4.depth | 0);
  while (((Bindable_this.H.length | 0) <= idx$2)) {
    Bindable_this.H.push(null);
  }
  Bindable_this.H[idx$2] = \u03b4scrutinee144;
  Bindable_this.G = null;
  var \u03b4scrutinee148 = e3$proxy1.m;
  var idx$3 = (Bindable_this.r.A.invVp | 0);
  while (((Bindable_this.i.length | 0) <= idx$3)) {
    Bindable_this.i.push(null);
  }
  Bindable_this.i[idx$3] = \u03b4scrutinee148;
  Bindable_this.G = null;
  blurLayers.push(Bindable_this);
  var mi = 0;
  while ((mi < ((mipLevels - 1) | 0))) {
    var mipSource$1 = mi;
    var mipTarget$1 = ((1 + mi) | 0);
    var Bindable_this$5 = p.aX(downBlurShade, (void 0), mipSource$1, mipTarget$1);
    var e1$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var \u03b4scrutinee156 = e1$proxy2.m;
    var idx$4 = (Bindable_this$5.r.A.samp | 0);
    while (((Bindable_this$5.i.length | 0) <= idx$4)) {
      Bindable_this$5.i.push(null);
    }
    Bindable_this$5.i[idx$4] = \u03b4scrutinee156;
    Bindable_this$5.G = null;
    blurLayers.push(Bindable_this$5);
    mi = ((1 + mi) | 0);
  }
  var _blurPanel = p.bc((void 0), (void 0), (void 0), (void 0), (void 0), mipLevels, (void 0), "rgba16float", (void 0), (void 0), (void 0), (void 0), blurLayers);
  var build$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$2) => {
    var body$proxy5 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$2) => {
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var uv$7 = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("uv");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var t$1 = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("t");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var h = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("h");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var radius = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("radius");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var lod = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("lod");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var s$1 = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("s");
      var $x_35 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
      var $x_34 = $m_sjsr_package$();
      var $x_33 = uv$7.w($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().mR($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().os(ctx$2$2.ao.k("uv"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fq(ctx$2$2.D.k("crop"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().pu(ctx$2$2.D.k("crop"))));
      var WgslFn$_this = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
      var fn$proxy1 = this.jX;
      var a1$proxy1 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "col");
      var s$proxy5 = WgslFn$_this.lX(fn$proxy1, a1$proxy1);
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var $x_32 = h.w($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy5));
      var $x_31 = t$1.w($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().hX($m_Ltrivalibs_graphics_math_gpu_expr$package$().ga($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "col"), uv$7, ctx$2$2.D.k("samp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o().h(0.0))));
      var $x_30 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var e$proxy2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().gM($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().gM(t$1, ctx$2$2.D.k("blurStrength")), ctx$2$2.D.k("visHeight"));
      var $x_29 = radius.w($x_30.mq($m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aW().aY((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aV(1.0)) + " + ") + e$proxy2.e) + ")")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o().h(maxRadius)));
      var $x_28 = lod.w($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().m9(radius));
      var $x_27 = s$1.w($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().lN($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().gM($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().Z(ctx$2$2.D.k("stretch"), this.i2), radius), h));
      var AssignTarget_this$2 = ctx$2$2.ai.a3("color");
      var value$proxy8 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().hN($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().hN($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().hN($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().hM($m_Ltrivalibs_graphics_math_gpu_expr$package$().ga($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "col"), uv$7, ctx$2$2.D.k("samp"), lod), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), 0.4), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().hM($m_Ltrivalibs_graphics_math_gpu_expr$package$().ga($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "col"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().jk(uv$7, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), $m_Ltrivalibs_graphics_math_gpu_vec2$().af($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o().h(0.0), s$1)), ctx$2$2.D.k("samp"), lod), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), 0.3)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().hM($m_Ltrivalibs_graphics_math_gpu_expr$package$().ga($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "col"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().jk(uv$7, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), $m_Ltrivalibs_graphics_math_gpu_vec2$().af($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().Z(s$1, 2.0))), ctx$2$2.D.k("samp"), lod), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), 0.2)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().hM($m_Ltrivalibs_graphics_math_gpu_expr$package$().ga($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "col"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().jk(uv$7, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), $m_Ltrivalibs_graphics_math_gpu_vec2$().af($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().Z(s$1, 3.0))), ctx$2$2.D.k("samp"), lod), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), 0.1));
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return $x_35.aI(new $c_sjsr_WrappedVarArgs($x_34.c(new ($d_T.r().C)([$x_33, $x_32, $x_31, $x_29, $x_28, $x_27, (((("  " + AssignTarget_this$2.W) + " = ") + value$proxy8.e) + ";")]))));
    }));
    var ctx$3 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$2;
    try {
      var $x_36 = body$proxy5.h(ctx$3);
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$2;
    }
    program$3$2.Y = $x_36;
    $m_sjs_js_ArrayOps$().M(reg$2.a1, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$6) => ((data$3$2) => {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$6, data$3$2);
    }))(program$3$2)));
  }));
  var program$3$3 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  build$proxy3.h(program$3$3);
  var b$6 = program$3$3.Y;
  var helperFns$proxy3 = program$3$3.al();
  var id$3 = p.q;
  p.q = ((1 + p.q) | 0);
  var names$7 = $m_sjs_js_ArrayOpsCommon$().a(["blurStrength"], $m_sjs_js_ArrayOpsCommon$().a(["stretch"], $m_sjs_js_ArrayOpsCommon$().a(["visHeight"], $m_sjs_js_ArrayOpsCommon$().a(["crop"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])))));
  var dict$5 = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
  var i$5 = 0;
  while ((i$5 < (names$7.length | 0))) {
    dict$5[names$7[i$5]] = i$5;
    i$5 = ((1 + i$5) | 0);
  }
  var names$8 = $m_sjs_js_ArrayOpsCommon$().a(["col"], []);
  var dict$6 = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
  var i$6 = 0;
  while ((i$6 < (names$8.length | 0))) {
    dict$6[names$8[i$6]] = i$6;
    i$6 = ((1 + i$6) | 0);
  }
  var sd$3 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$6, helperFns$proxy3);
  var vertexInputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls$3 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["blurStrength"], $m_sjs_js_ArrayOpsCommon$().a(["stretch"], $m_sjs_js_ArrayOpsCommon$().a(["visHeight"], $m_sjs_js_ArrayOpsCommon$().a(["crop"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []))))), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).J.u()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).J.u()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).J.u()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$()).J.u()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).J.u()], []))))));
  var fragBuiltinParams$3 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$3 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$3, vertexInputStruct$3, vertexOutputStruct$3, fragmentOutputStruct$3, groupDecls$3, sd$3.a6, sd$3.a5, fragBuiltinParams$3);
  var wgsl$3 = (baseWgsl$3 + "\n\n@group(1) @binding(0) var col: texture_2d<f32>;");
  var args$proxy4 = $m_sr_ScalaRunTime$().ah(new ($d_sjs_js_Any.r().C)([wgsl$3]));
  console.log(...$m_sjsr_Compat$().ag(args$proxy4));
  var module$3 = p.g.createShaderModule($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("code", wgsl$3)])))));
  var descriptors$3 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 2), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 3), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 4), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([])))))]))))], [])))))], []);
  var result$3 = [];
  $m_sjs_js_ArrayOps$().M(descriptors$3, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((entries$2$3) => (result$3.push(p.g.createBindGroupLayout($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries$2$3)])))))) | 0))));
  var x7 = new $c_T2(result$3, $m_Ltrivalibs_graphics_shader_layouts$().O(p.g, result$3));
  var \u03b46$$3 = x7;
  var bgls$6 = \u03b46$$3.S;
  var entries$3 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([])))))]))))], []);
  var panelBgl$3 = p.g.createBindGroupLayout($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries$3)])))));
  if ((panelBgl$3 !== null)) {
    var other$proxy3 = [panelBgl$3];
    var allBgls$3 = bgls$6.concat(other$proxy3);
  } else {
    var allBgls$3 = bgls$6;
  }
  var pl$3 = $m_Ltrivalibs_graphics_shader_layouts$().O(p.g, allBgls$3);
  var resolveShade = new $c_Ltrivalibs_graphics_painter_Shade(id$3, module$3, null, bgls$6[0], panelBgl$3, pl$3, false, dict$5, dict$6);
  var Bindable_this$7 = p.aX(resolveShade, (void 0), (void 0), (void 0));
  var e1$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("col", _blurPanel);
  var e2$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("blurStrength", b);
  var e3$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("stretch", b$2);
  var e4$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("visHeight", b$3);
  var e5$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("crop", b$4);
  var e6$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
  var \u03b4scrutinee258 = e1$proxy3.m;
  var idx$5 = (Bindable_this$7.r.a4.col | 0);
  while (((Bindable_this$7.H.length | 0) <= idx$5)) {
    Bindable_this$7.H.push(null);
  }
  Bindable_this$7.H[idx$5] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee258);
  Bindable_this$7.G = null;
  var \u03b4scrutinee262 = e2$proxy2.m;
  var idx$6 = (Bindable_this$7.r.A.blurStrength | 0);
  while (((Bindable_this$7.i.length | 0) <= idx$6)) {
    Bindable_this$7.i.push(null);
  }
  Bindable_this$7.i[idx$6] = \u03b4scrutinee262;
  Bindable_this$7.G = null;
  var \u03b4scrutinee275 = e3$proxy2.m;
  var idx$7 = (Bindable_this$7.r.A.stretch | 0);
  while (((Bindable_this$7.i.length | 0) <= idx$7)) {
    Bindable_this$7.i.push(null);
  }
  Bindable_this$7.i[idx$7] = \u03b4scrutinee275;
  Bindable_this$7.G = null;
  var \u03b4scrutinee292 = e4$proxy1.m;
  var idx$8 = (Bindable_this$7.r.A.visHeight | 0);
  while (((Bindable_this$7.i.length | 0) <= idx$8)) {
    Bindable_this$7.i.push(null);
  }
  Bindable_this$7.i[idx$8] = \u03b4scrutinee292;
  Bindable_this$7.G = null;
  var \u03b4scrutinee313 = e5$proxy1.m;
  var idx$9 = (Bindable_this$7.r.A.crop | 0);
  while (((Bindable_this$7.i.length | 0) <= idx$9)) {
    Bindable_this$7.i.push(null);
  }
  Bindable_this$7.i[idx$9] = \u03b4scrutinee313;
  Bindable_this$7.G = null;
  var \u03b4scrutinee335 = e6$proxy1.m;
  var idx$10 = (Bindable_this$7.r.A.samp | 0);
  while (((Bindable_this$7.i.length | 0) <= idx$10)) {
    Bindable_this$7.i.push(null);
  }
  Bindable_this$7.i[idx$10] = \u03b4scrutinee335;
  Bindable_this$7.G = null;
  var layers$2 = [Bindable_this$7];
  return new $c_Lsketchlib_utils_mirror_MirrorReflection$$anon$1(mirrorPanel, p.bc((void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), "rgba16float", (void 0), (void 0), (void 0), (void 0), layers$2), camera, blurStrength, stretch, overscan, _blurPanel, b$3, b$4, b, 0.0062499999999999995, b$2, reflMat, uVp, uInvVp, p);
});
var $d_Lsketchlib_utils_mirror_MirrorReflection$ = new $TypeData().i($c_Lsketchlib_utils_mirror_MirrorReflection$, "sketchlib.utils.mirror.MirrorReflection$", ({
  d8: 1
}));
var $n_Lsketchlib_utils_mirror_MirrorReflection$;
function $m_Lsketchlib_utils_mirror_MirrorReflection$() {
  if ((!$n_Lsketchlib_utils_mirror_MirrorReflection$)) {
    $n_Lsketchlib_utils_mirror_MirrorReflection$ = new $c_Lsketchlib_utils_mirror_MirrorReflection$();
  }
  return $n_Lsketchlib_utils_mirror_MirrorReflection$;
}
/** @constructor */
function $c_Ltrivalibs_dev_DevHandle(resetFn) {
}
$p = $c_Ltrivalibs_dev_DevHandle.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_dev_DevHandle;
/** @constructor */
function $h_Ltrivalibs_dev_DevHandle() {
}
$h_Ltrivalibs_dev_DevHandle.prototype = $p;
var $d_Ltrivalibs_dev_DevHandle = new $TypeData().i($c_Ltrivalibs_dev_DevHandle, "trivalibs.dev.DevHandle", ({
  da: 1
}));
/** @constructor */
function $c_Ltrivalibs_dev_dev$package$() {
  this.fN = null;
  this.i6 = false;
  $n_Ltrivalibs_dev_dev$package$ = this;
  this.fN = [];
  this.i6 = false;
}
$p = $c_Ltrivalibs_dev_dev$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_dev_dev$package$;
/** @constructor */
function $h_Ltrivalibs_dev_dev$package$() {
}
$h_Ltrivalibs_dev_dev$package$.prototype = $p;
$p.nc = (function() {
  return (import.meta.hot !== (void 0));
});
$p.oo = (function() {
  var u = import.meta.url;
  var end = (u.indexOf("?") | 0);
  if ((end < 0)) {
    end = (u.indexOf("#") | 0);
  }
  if ((end >= 0)) {
    var endIndex = end;
    return u.substring(0, endIndex);
  } else {
    return u;
  }
});
$p.p5 = (function(label) {
  return ((("trivalibs:dev:" + $m_Ltrivalibs_dev_dev$package$().oo()) + ":") + label);
});
$p.jj = (function() {
  return window.sessionStorage;
});
$p.oK = (function(key) {
  var raw = $m_Ltrivalibs_dev_dev$package$().jj().getItem(key);
  if ((raw === null)) {
    return null;
  } else {
    try {
      return JSON.parse(raw);
    } catch (e) {
      return null;
    }
  }
});
$p.pm = (function(key, json) {
  $m_Ltrivalibs_dev_dev$package$().jj().setItem(key, JSON.stringify(json));
});
$p.oP = (function(key) {
  $m_Ltrivalibs_dev_dev$package$().jj().removeItem(key);
});
$p.nj = (function() {
  if ((!$m_Ltrivalibs_dev_dev$package$().i6)) {
    $m_Ltrivalibs_dev_dev$package$().i6 = true;
    window.addEventListener("pagehide", ((_$1$2) => {
      var i = 0;
      while ((i < ($m_Ltrivalibs_dev_dev$package$().fN.length | 0))) {
        $m_Ltrivalibs_dev_dev$package$().fN[i].gN();
        i = ((1 + i) | 0);
      }
    }));
  }
});
$p.oM = (function(flush) {
  $m_Ltrivalibs_dev_dev$package$().nj();
  $m_Ltrivalibs_dev_dev$package$().fN.push(flush);
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    var idx = $m_sjs_js_ArrayOps$().m8($m_Ltrivalibs_dev_dev$package$().fN, flush, 0);
    if ((idx >= 0)) {
      $m_Ltrivalibs_dev_dev$package$().fN.splice(idx, 1);
    }
  }));
});
var $d_Ltrivalibs_dev_dev$package$ = new $TypeData().i($c_Ltrivalibs_dev_dev$package$, "trivalibs.dev.dev$package$", ({
  db: 1
}));
var $n_Ltrivalibs_dev_dev$package$;
function $m_Ltrivalibs_dev_dev$package$() {
  if ((!$n_Ltrivalibs_dev_dev$package$)) {
    $n_Ltrivalibs_dev_dev$package$ = new $c_Ltrivalibs_dev_dev$package$();
  }
  return $n_Ltrivalibs_dev_dev$package$;
}
function $p_Ltrivalibs_dev_devPreserve$__encodeCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any($thiz, cam) {
  return [cam.ab.x, cam.ab.v, cam.ab.y, cam.au, cam.b7];
}
function $p_Ltrivalibs_dev_devPreserve$__applyCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any__V($thiz, cam, json) {
  if ((!(!Array.isArray(json)))) {
    if (((json.length | 0) >= 5)) {
      var pos$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((+json[0]), (+json[1]), (+json[2]));
      var rotH$1 = (+json[3]);
      var rotV$1 = (+json[4]);
      var fov$1 = cam.b6;
      var aspect$1 = cam.fg;
      var near$1 = cam.g3;
      var far$1 = cam.g2;
      cam.jh(fov$1, aspect$1, near$1, far$1, rotH$1, rotV$1, pos$1);
    }
  }
}
/** @constructor */
function $c_Ltrivalibs_dev_devPreserve$() {
}
$p = $c_Ltrivalibs_dev_devPreserve$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_dev_devPreserve$;
/** @constructor */
function $h_Ltrivalibs_dev_devPreserve$() {
}
$h_Ltrivalibs_dev_devPreserve$.prototype = $p;
$p.n1 = (function(cam, label) {
  if ((!$m_Ltrivalibs_dev_dev$package$().nc())) {
    return new $c_Ltrivalibs_dev_DevHandle(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => (void 0))));
  } else {
    var sk = $m_Ltrivalibs_dev_dev$package$().p5(label);
    var initPos = cam.ab;
    var initRotH = cam.au;
    var initRotV = cam.b7;
    var stored = $m_Ltrivalibs_dev_dev$package$().oK(sk);
    if ((stored !== null)) {
      $p_Ltrivalibs_dev_devPreserve$__applyCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any__V(this, cam, stored);
    }
    return new $c_Ltrivalibs_dev_DevHandle(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(((unregister) => (() => {
      unregister.gN();
      $m_Ltrivalibs_dev_dev$package$().oP(sk);
      var fov$proxy1 = cam.b6;
      var aspect$proxy1 = cam.fg;
      var near$proxy1 = cam.g3;
      var far$proxy1 = cam.g2;
      cam.jh(fov$proxy1, aspect$proxy1, near$proxy1, far$proxy1, initRotH, initRotV, initPos);
    }))($m_Ltrivalibs_dev_dev$package$().oM(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
      $m_Ltrivalibs_dev_dev$package$().pm(sk, $p_Ltrivalibs_dev_devPreserve$__encodeCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any(this, cam));
    }))))));
  }
});
var $d_Ltrivalibs_dev_devPreserve$ = new $TypeData().i($c_Ltrivalibs_dev_devPreserve$, "trivalibs.dev.devPreserve$", ({
  dc: 1
}));
var $n_Ltrivalibs_dev_devPreserve$;
function $m_Ltrivalibs_dev_devPreserve$() {
  if ((!$n_Ltrivalibs_dev_devPreserve$)) {
    $n_Ltrivalibs_dev_devPreserve$ = new $c_Ltrivalibs_dev_devPreserve$();
  }
  return $n_Ltrivalibs_dev_devPreserve$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_BufferBinding(buffer, device, uv) {
  this.j = null;
  this.E = null;
  this.F = null;
  this.C = null;
  this.j = buffer;
  this.E = device;
  this.F = uv;
  var b = (buffer.dv.byteLength | 0);
  var value = ((b < 16) ? 16 : b);
  var $x_1 = device.createBuffer(({
    "size": value,
    "usage": 72
  }));
  this.C = $x_1;
}
$p = $c_Ltrivalibs_graphics_buffers_BufferBinding.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_BufferBinding;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_BufferBinding() {
}
$h_Ltrivalibs_graphics_buffers_BufferBinding.prototype = $p;
function $isArrayOf_Ltrivalibs_graphics_buffers_BufferBinding(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aG)));
}
var $d_Ltrivalibs_graphics_buffers_BufferBinding = new $TypeData().i($c_Ltrivalibs_graphics_buffers_BufferBinding, "trivalibs.graphics.buffers.BufferBinding", ({
  aG: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Box(center, size, frontTopLeft, frontTopRight, frontBottomLeft, frontBottomRight, backTopLeft, backTopRight, backBottomLeft, backBottomRight) {
  this.fQ = null;
  this.fR = null;
  this.f7 = null;
  this.f8 = null;
  this.fO = null;
  this.fP = null;
  this.f5 = null;
  this.f6 = null;
  this.fQ = frontTopLeft;
  this.fR = frontTopRight;
  this.f7 = frontBottomLeft;
  this.f8 = frontBottomRight;
  this.fO = backTopLeft;
  this.fP = backTopRight;
  this.f5 = backBottomLeft;
  this.f6 = backBottomRight;
}
$p = $c_Ltrivalibs_graphics_geometry_Box.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Box;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Box() {
}
$h_Ltrivalibs_graphics_geometry_Box.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_Box = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Box, "trivalibs.graphics.geometry.Box", ({
  dj: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Box$() {
}
$p = $c_Ltrivalibs_graphics_geometry_Box$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Box$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Box$() {
}
$h_Ltrivalibs_graphics_geometry_Box$.prototype = $p;
$p.j5 = (function(center, width, height, depth) {
  var hw = (0.5 * width);
  var hh = (0.5 * height);
  var hd = (0.5 * depth);
  var cx = center.x;
  var cy = center.v;
  var cz = center.y;
  return new $c_Ltrivalibs_graphics_geometry_Box(center, new $c_Ltrivalibs_graphics_math_cpu_Vec3(width, height, depth), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy + hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy + hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy - hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy - hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy + hh), (cz - hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy + hh), (cz - hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy - hh), (cz - hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy - hh), (cz - hd)));
});
var $d_Ltrivalibs_graphics_geometry_Box$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Box$, "trivalibs.graphics.geometry.Box$", ({
  dk: 1
}));
var $n_Ltrivalibs_graphics_geometry_Box$;
function $m_Ltrivalibs_graphics_geometry_Box$() {
  if ((!$n_Ltrivalibs_graphics_geometry_Box$)) {
    $n_Ltrivalibs_graphics_geometry_Box$ = new $c_Ltrivalibs_graphics_geometry_Box$();
  }
  return $n_Ltrivalibs_graphics_geometry_Box$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_BufferedGeometry(vertices, indices) {
  this.i7 = null;
  this.hm = null;
  this.i7 = vertices;
  this.hm = indices;
}
$p = $c_Ltrivalibs_graphics_geometry_BufferedGeometry.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_BufferedGeometry;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_BufferedGeometry() {
}
$h_Ltrivalibs_graphics_geometry_BufferedGeometry.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_BufferedGeometry = new $TypeData().i($c_Ltrivalibs_graphics_geometry_BufferedGeometry, "trivalibs.graphics.geometry.BufferedGeometry", ({
  dl: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_FaceData(normal, section) {
}
$p = $c_Ltrivalibs_graphics_geometry_FaceData.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_FaceData;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_FaceData() {
}
$h_Ltrivalibs_graphics_geometry_FaceData.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_FaceData = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FaceData, "trivalibs.graphics.geometry.FaceData", ({
  dm: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Mesh(evidence$1) {
  this.i8 = null;
  this.b5 = null;
  this.k8 = null;
  this.ho = null;
  this.hn = null;
  this.i8 = evidence$1;
  this.b5 = [];
  this.k8 = [];
  this.ho = [];
  this.hn = ({});
}
$p = $c_Ltrivalibs_graphics_geometry_Mesh.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Mesh;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Mesh() {
}
$h_Ltrivalibs_graphics_geometry_Mesh.prototype = $p;
$p.mP = (function(face, normal, section) {
  var faceIdx = (this.b5.length | 0);
  this.b5.push(face);
  this.k8.push(new $c_Ltrivalibs_graphics_geometry_FaceData(normal, section));
  var n = (face.length | 0);
  var slot = 0;
  while ((slot < n)) {
    var v = face[slot];
    var key = $m_Ltrivalibs_graphics_geometry_package$package$().oC(this.i8.mw(v));
    if ($m_sjs_js_Any$ObjectCompanionOps$().nC(Object, this.hn, key)) {
      var $x_2 = this.ho;
      var dict = this.hn;
      if ((!(!(!$m_sjs_js_WrappedDictionary$Cache$().jR.call(dict, key))))) {
        throw new $c_ju_NoSuchElementException(("key not found: " + key));
      }
      var $x_1 = $x_2[(dict[key] | 0)];
      $x_1.kd.push(new $c_Ltrivalibs_graphics_geometry_PositionFaceRef(faceIdx, slot));
    } else {
      var idx = (this.ho.length | 0);
      var dict$1 = this.hn;
      dict$1[key] = idx;
      this.ho.push(new $c_Ltrivalibs_graphics_geometry_VertexPosition(this.i8.mw(v), [new $c_Ltrivalibs_graphics_geometry_PositionFaceRef(faceIdx, slot)]));
    }
    slot = ((1 + slot) | 0);
  }
});
var $d_Ltrivalibs_graphics_geometry_Mesh = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Mesh, "trivalibs.graphics.geometry.Mesh", ({
  dq: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Mesh$() {
}
$p = $c_Ltrivalibs_graphics_geometry_Mesh$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Mesh$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Mesh$() {
}
$h_Ltrivalibs_graphics_geometry_Mesh$.prototype = $p;
$p.mY = (function(faces, normal, section, evidence$1) {
  var m = new $c_Ltrivalibs_graphics_geometry_Mesh(evidence$1);
  $m_Ltrivalibs_graphics_geometry_mesh$package$().mQ(m, faces, normal, section, evidence$1);
  return m;
});
var $d_Ltrivalibs_graphics_geometry_Mesh$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Mesh$, "trivalibs.graphics.geometry.Mesh$", ({
  dr: 1
}));
var $n_Ltrivalibs_graphics_geometry_Mesh$;
function $m_Ltrivalibs_graphics_geometry_Mesh$() {
  if ((!$n_Ltrivalibs_graphics_geometry_Mesh$)) {
    $n_Ltrivalibs_graphics_geometry_Mesh$ = new $c_Ltrivalibs_graphics_geometry_Mesh$();
  }
  return $n_Ltrivalibs_graphics_geometry_Mesh$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Plane(normal, d) {
  this.gm = null;
  this.gl = 0.0;
  this.gm = normal;
  this.gl = d;
}
$p = $c_Ltrivalibs_graphics_geometry_Plane.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Plane;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Plane() {
}
$h_Ltrivalibs_graphics_geometry_Plane.prototype = $p;
$p.oL = (function() {
  var a = this.gm.x;
  var b = this.gm.v;
  var c = this.gm.y;
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4((1.0 - ((2.0 * a) * a)), (((-2.0) * a) * b), (((-2.0) * a) * c), 0.0, (((-2.0) * a) * b), (1.0 - ((2.0 * b) * b)), (((-2.0) * b) * c), 0.0, (((-2.0) * a) * c), (((-2.0) * b) * c), (1.0 - ((2.0 * c) * c)), 0.0, ((2.0 * a) * this.gl), ((2.0 * b) * this.gl), ((2.0 * c) * this.gl), 1.0);
});
var $d_Ltrivalibs_graphics_geometry_Plane = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Plane, "trivalibs.graphics.geometry.Plane", ({
  ds: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Plane$() {
  this.k9 = null;
  $n_Ltrivalibs_graphics_geometry_Plane$ = this;
  this.k9 = new $c_Ltrivalibs_graphics_geometry_Plane(new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0), 0.0);
}
$p = $c_Ltrivalibs_graphics_geometry_Plane$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Plane$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Plane$() {
}
$h_Ltrivalibs_graphics_geometry_Plane$.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_Plane$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Plane$, "trivalibs.graphics.geometry.Plane$", ({
  dt: 1
}));
var $n_Ltrivalibs_graphics_geometry_Plane$;
function $m_Ltrivalibs_graphics_geometry_Plane$() {
  if ((!$n_Ltrivalibs_graphics_geometry_Plane$)) {
    $n_Ltrivalibs_graphics_geometry_Plane$ = new $c_Ltrivalibs_graphics_geometry_Plane$();
  }
  return $n_Ltrivalibs_graphics_geometry_Plane$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_PositionFaceRef(faceIndex, vertexSlot) {
  this.mI = 0;
  this.mJ = 0;
  this.mI = faceIndex;
  this.mJ = vertexSlot;
}
$p = $c_Ltrivalibs_graphics_geometry_PositionFaceRef.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_PositionFaceRef;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_PositionFaceRef() {
}
$h_Ltrivalibs_graphics_geometry_PositionFaceRef.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_PositionFaceRef = new $TypeData().i($c_Ltrivalibs_graphics_geometry_PositionFaceRef, "trivalibs.graphics.geometry.PositionFaceRef", ({
  dv: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexPosition(position, faces) {
  this.kd = null;
  this.kd = faces;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexPosition.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexPosition;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexPosition() {
}
$h_Ltrivalibs_graphics_geometry_VertexPosition.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_VertexPosition = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexPosition, "trivalibs.graphics.geometry.VertexPosition", ({
  dA: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_buffers$package$() {
}
$p = $c_Ltrivalibs_graphics_geometry_buffers$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_buffers$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_buffers$package$() {
}
$h_Ltrivalibs_graphics_geometry_buffers$package$.prototype = $p;
$p.om = (function(idxBuf, vertexCount) {
  if (((idxBuf.length | 0) === 0)) {
    return null;
  } else if ((vertexCount <= 65535)) {
    var ua = new Uint16Array((idxBuf.length | 0));
    var i = 0;
    while ((i < (idxBuf.length | 0))) {
      ua[i] = idxBuf[i];
      i = ((1 + i) | 0);
    }
    return ua;
  } else {
    var ua$2 = new Uint32Array((idxBuf.length | 0));
    var i$2 = 0;
    while ((i$2 < (idxBuf.length | 0))) {
      ua$2[i$2] = (idxBuf[i$2] | 0);
      i$2 = ((1 + i$2) | 0);
    }
    return ua$2;
  }
});
var $d_Ltrivalibs_graphics_geometry_buffers$package$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_buffers$package$, "trivalibs.graphics.geometry.buffers$package$", ({
  dB: 1
}));
var $n_Ltrivalibs_graphics_geometry_buffers$package$;
function $m_Ltrivalibs_graphics_geometry_buffers$package$() {
  if ((!$n_Ltrivalibs_graphics_geometry_buffers$package$)) {
    $n_Ltrivalibs_graphics_geometry_buffers$package$ = new $c_Ltrivalibs_graphics_geometry_buffers$package$();
  }
  return $n_Ltrivalibs_graphics_geometry_buffers$package$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_mesh$package$() {
}
$p = $c_Ltrivalibs_graphics_geometry_mesh$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_mesh$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_mesh$package$() {
}
$h_Ltrivalibs_graphics_geometry_mesh$package$.prototype = $p;
$p.mQ = (function(m, faces, normal, section, evidence$1) {
  var i = 0;
  while ((i < (faces.length | 0))) {
    m.mP(faces[i], normal, section);
    i = ((1 + i) | 0);
  }
});
var $d_Ltrivalibs_graphics_geometry_mesh$package$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_mesh$package$, "trivalibs.graphics.geometry.mesh$package$", ({
  dC: 1
}));
var $n_Ltrivalibs_graphics_geometry_mesh$package$;
function $m_Ltrivalibs_graphics_geometry_mesh$package$() {
  if ((!$n_Ltrivalibs_graphics_geometry_mesh$package$)) {
    $n_Ltrivalibs_graphics_geometry_mesh$package$ = new $c_Ltrivalibs_graphics_geometry_mesh$package$();
  }
  return $n_Ltrivalibs_graphics_geometry_mesh$package$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_package$package$() {
}
$p = $c_Ltrivalibs_graphics_geometry_package$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_package$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_package$package$() {
}
$h_Ltrivalibs_graphics_geometry_package$package$.prototype = $p;
$p.oC = (function(v) {
  return (((($doubleToInt((10000.0 * v.x)) + ",") + $doubleToInt((10000.0 * v.v))) + ",") + $doubleToInt((10000.0 * v.y)));
});
var $d_Ltrivalibs_graphics_geometry_package$package$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_package$package$, "trivalibs.graphics.geometry.package$package$", ({
  dD: 1
}));
var $n_Ltrivalibs_graphics_geometry_package$package$;
function $m_Ltrivalibs_graphics_geometry_package$package$() {
  if ((!$n_Ltrivalibs_graphics_geometry_package$package$)) {
    $n_Ltrivalibs_graphics_geometry_package$package$ = new $c_Ltrivalibs_graphics_geometry_package$package$();
  }
  return $n_Ltrivalibs_graphics_geometry_package$package$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_polygon$package$Quad$() {
}
$p = $c_Ltrivalibs_graphics_geometry_polygon$package$Quad$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_polygon$package$Quad$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_polygon$package$Quad$() {
}
$h_Ltrivalibs_graphics_geometry_polygon$package$Quad$.prototype = $p;
$p.aB = (function(tl, bl, br, tr) {
  return [tl, bl, br, tr];
});
var $d_Ltrivalibs_graphics_geometry_polygon$package$Quad$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_polygon$package$Quad$, "trivalibs.graphics.geometry.polygon$package$Quad$", ({
  dF: 1
}));
var $n_Ltrivalibs_graphics_geometry_polygon$package$Quad$;
function $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$() {
  if ((!$n_Ltrivalibs_graphics_geometry_polygon$package$Quad$)) {
    $n_Ltrivalibs_graphics_geometry_polygon$package$Quad$ = new $c_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  }
  return $n_Ltrivalibs_graphics_geometry_polygon$package$Quad$;
}
function $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($thiz, fovY, aspect, near, far) {
  var x = (0.5 * fovY);
  var f = (1.0 / (+Math.tan(x)));
  var rInv = (1.0 / (near - far));
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4((f / aspect), 0.0, 0.0, 0.0, 0.0, f, 0.0, 0.0, 0.0, 0.0, (far * rInv), (-1.0), 0.0, 0.0, ((near * far) * rInv), 0.0);
}
function $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($thiz, m, x$2, other) {
  var a00 = (+x$2.gU(m));
  var a01 = (+x$2.gV(m));
  var a02 = (+x$2.gW(m));
  var a03 = (+x$2.gX(m));
  var a10 = (+x$2.gY(m));
  var a11 = (+x$2.gZ(m));
  var a12 = (+x$2.h0(m));
  var a13 = (+x$2.h1(m));
  var a20 = (+x$2.h2(m));
  var a21 = (+x$2.h3(m));
  var a22 = (+x$2.h4(m));
  var a23 = (+x$2.h5(m));
  var a30 = (+x$2.h6(m));
  var a31 = (+x$2.h7(m));
  var a32 = (+x$2.h8(m));
  var a33 = (+x$2.h9(m));
  var b00 = (+x$2.gU(other));
  var b01 = (+x$2.gV(other));
  var b02 = (+x$2.gW(other));
  var b03 = (+x$2.gX(other));
  var b10 = (+x$2.gY(other));
  var b11 = (+x$2.gZ(other));
  var b12 = (+x$2.h0(other));
  var b13 = (+x$2.h1(other));
  var b20 = (+x$2.h2(other));
  var b21 = (+x$2.h3(other));
  var b22 = (+x$2.h4(other));
  var b23 = (+x$2.h5(other));
  var b30 = (+x$2.h6(other));
  var b31 = (+x$2.h7(other));
  var b32 = (+x$2.h8(other));
  var b33 = (+x$2.h9(other));
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4(((((a00 * b00) + (a10 * b01)) + (a20 * b02)) + (a30 * b03)), ((((a01 * b00) + (a11 * b01)) + (a21 * b02)) + (a31 * b03)), ((((a02 * b00) + (a12 * b01)) + (a22 * b02)) + (a32 * b03)), ((((a03 * b00) + (a13 * b01)) + (a23 * b02)) + (a33 * b03)), ((((a00 * b10) + (a10 * b11)) + (a20 * b12)) + (a30 * b13)), ((((a01 * b10) + (a11 * b11)) + (a21 * b12)) + (a31 * b13)), ((((a02 * b10) + (a12 * b11)) + (a22 * b12)) + (a32 * b13)), ((((a03 * b10) + (a13 * b11)) + (a23 * b12)) + (a33 * b13)), ((((a00 * b20) + (a10 * b21)) + (a20 * b22)) + (a30 * b23)), ((((a01 * b20) + (a11 * b21)) + (a21 * b22)) + (a31 * b23)), ((((a02 * b20) + (a12 * b21)) + (a22 * b22)) + (a32 * b23)), ((((a03 * b20) + (a13 * b21)) + (a23 * b22)) + (a33 * b23)), ((((a00 * b30) + (a10 * b31)) + (a20 * b32)) + (a30 * b33)), ((((a01 * b30) + (a11 * b31)) + (a21 * b32)) + (a31 * b33)), ((((a02 * b30) + (a12 * b31)) + (a22 * b32)) + (a32 * b33)), ((((a03 * b30) + (a13 * b31)) + (a23 * b32)) + (a33 * b33)));
}
function $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($thiz, m, x$2) {
  var a00 = (+x$2.gU(m));
  var a01 = (+x$2.gV(m));
  var a02 = (+x$2.gW(m));
  var a03 = (+x$2.gX(m));
  var a10 = (+x$2.gY(m));
  var a11 = (+x$2.gZ(m));
  var a12 = (+x$2.h0(m));
  var a13 = (+x$2.h1(m));
  var a20 = (+x$2.h2(m));
  var a21 = (+x$2.h3(m));
  var a22 = (+x$2.h4(m));
  var a23 = (+x$2.h5(m));
  var a30 = (+x$2.h6(m));
  var a31 = (+x$2.h7(m));
  var a32 = (+x$2.h8(m));
  var a33 = (+x$2.h9(m));
  var b00 = ((a00 * a11) - (a01 * a10));
  var b01 = ((a00 * a12) - (a02 * a10));
  var b02 = ((a00 * a13) - (a03 * a10));
  var b03 = ((a01 * a12) - (a02 * a11));
  var b04 = ((a01 * a13) - (a03 * a11));
  var b05 = ((a02 * a13) - (a03 * a12));
  var b06 = ((a20 * a31) - (a21 * a30));
  var b07 = ((a20 * a32) - (a22 * a30));
  var b08 = ((a20 * a33) - (a23 * a30));
  var b09 = ((a21 * a32) - (a22 * a31));
  var b10 = ((a21 * a33) - (a23 * a31));
  var b11 = ((a22 * a33) - (a23 * a32));
  var det = ((((((b00 * b11) - (b01 * b10)) + (b02 * b09)) + (b03 * b08)) - (b04 * b07)) + (b05 * b06));
  var invDet = (1.0 / det);
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4(((((a11 * b11) - (a12 * b10)) + (a13 * b09)) * invDet), (((((-a01) * b11) + (a02 * b10)) - (a03 * b09)) * invDet), ((((a31 * b05) - (a32 * b04)) + (a33 * b03)) * invDet), (((((-a21) * b05) + (a22 * b04)) - (a23 * b03)) * invDet), (((((-a10) * b11) + (a12 * b08)) - (a13 * b07)) * invDet), ((((a00 * b11) - (a02 * b08)) + (a03 * b07)) * invDet), (((((-a30) * b05) + (a32 * b02)) - (a33 * b01)) * invDet), ((((a20 * b05) - (a22 * b02)) + (a23 * b01)) * invDet), ((((a10 * b10) - (a11 * b08)) + (a13 * b06)) * invDet), (((((-a00) * b10) + (a01 * b08)) - (a03 * b06)) * invDet), ((((a30 * b04) - (a31 * b02)) + (a33 * b00)) * invDet), (((((-a20) * b04) + (a21 * b02)) - (a23 * b00)) * invDet), (((((-a10) * b09) + (a11 * b07)) - (a12 * b06)) * invDet), ((((a00 * b09) - (a01 * b07)) + (a02 * b06)) * invDet), (((((-a30) * b03) + (a31 * b01)) - (a32 * b00)) * invDet), ((((a20 * b03) - (a21 * b01)) + (a22 * b00)) * invDet));
}
function $f_Ltrivalibs_graphics_math_Mat4MutableOps__set__O__Ltrivalibs_graphics_math_Mat4Mutable__O__Ltrivalibs_graphics_math_Mat4Base__V($thiz, m, mb, other, x$4) {
  mb.ma(m, (+x$4.gU(other)));
  mb.mb(m, (+x$4.gV(other)));
  mb.mc(m, (+x$4.gW(other)));
  mb.md(m, (+x$4.gX(other)));
  mb.me(m, (+x$4.gY(other)));
  mb.mf(m, (+x$4.gZ(other)));
  mb.mg(m, (+x$4.h0(other)));
  mb.mh(m, (+x$4.h1(other)));
  mb.mi(m, (+x$4.h2(other)));
  mb.mj(m, (+x$4.h3(other)));
  mb.mk(m, (+x$4.h4(other)));
  mb.ml(m, (+x$4.h5(other)));
  mb.mm(m, (+x$4.h6(other)));
  mb.mn(m, (+x$4.h7(other)));
  mb.mo(m, (+x$4.h8(other)));
  mb.mp(m, (+x$4.h9(other)));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.x + other.x), (v.v + other.v), (v.y + other.y));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($thiz, v, x$2) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((-v.x), (-v.v), (-v.y));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.x - other.x), (v.v - other.v), (v.y - other.y));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, scalar) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.x * scalar), (v.v * scalar), (v.y * scalar));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__divScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, scalar) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.x / scalar), (v.v / scalar), (v.y / scalar));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3(((v.v * other.y) - (v.y * other.v)), ((v.y * other.x) - (v.x * other.y)), ((v.x * other.v) - (v.v * other.x)));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($thiz, v, x$2) {
  return $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__divScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, $f_Ltrivalibs_graphics_math_Vec3Base__length__O__D(x$2, v));
}
function $f_Ltrivalibs_graphics_math_Vec4MutableOps__set__O__Ltrivalibs_graphics_math_Vec4Mutable__O__Ltrivalibs_graphics_math_Vec4Base__V($thiz, v, x$2, other, x$4) {
  x$2.js(v, (+x$4.aM(other)));
  x$2.jt(v, (+x$4.aN(other)));
  x$2.ju(v, (+x$4.aO(other)));
  x$2.jr(v, (+x$4.aL(other)));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat4(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  this.i9 = 0.0;
  this.ia = 0.0;
  this.ib = 0.0;
  this.ic = 0.0;
  this.id = 0.0;
  this.ie = 0.0;
  this.ig = 0.0;
  this.ih = 0.0;
  this.ii = 0.0;
  this.ij = 0.0;
  this.ik = 0.0;
  this.il = 0.0;
  this.im = 0.0;
  this.io = 0.0;
  this.ip = 0.0;
  this.iq = 0.0;
  this.i9 = m00;
  this.ia = m01;
  this.ib = m02;
  this.ic = m03;
  this.id = m10;
  this.ie = m11;
  this.ig = m12;
  this.ih = m13;
  this.ii = m20;
  this.ij = m21;
  this.ik = m22;
  this.il = m23;
  this.im = m30;
  this.io = m31;
  this.ip = m32;
  this.iq = m33;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat4.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat4;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat4() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat4.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Mat4 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4, "trivalibs.graphics.math.cpu.Mat4", ({
  dR: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Quat(x, y, z, w) {
  this.hq = 0.0;
  this.hr = 0.0;
  this.hs = 0.0;
  this.hp = 0.0;
  this.hq = x;
  this.hr = y;
  this.hs = z;
  this.hp = w;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Quat.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Quat;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Quat() {
}
$h_Ltrivalibs_graphics_math_cpu_Quat.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Quat = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat, "trivalibs.graphics.math.cpu.Quat", ({
  dU: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Quat$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Quat$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Quat$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Quat$() {
}
$h_Ltrivalibs_graphics_math_cpu_Quat$.prototype = $p;
$p.nw = (function(angle) {
  var h = (0.5 * angle);
  return new $c_Ltrivalibs_graphics_math_cpu_Quat((+Math.sin(h)), 0.0, 0.0, (+Math.cos(h)));
});
$p.nx = (function(angle) {
  var h = (0.5 * angle);
  return new $c_Ltrivalibs_graphics_math_cpu_Quat(0.0, (+Math.sin(h)), 0.0, (+Math.cos(h)));
});
var $d_Ltrivalibs_graphics_math_cpu_Quat$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat$, "trivalibs.graphics.math.cpu.Quat$", ({
  dV: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Quat$;
function $m_Ltrivalibs_graphics_math_cpu_Quat$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Quat$)) {
    $n_Ltrivalibs_graphics_math_cpu_Quat$ = new $c_Ltrivalibs_graphics_math_cpu_Quat$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Quat$;
}
function $f_Ltrivalibs_graphics_math_cpu_QuatImmutableOps__quatMul__O__Ltrivalibs_graphics_math_Vec4Base__O__O($thiz, q, x$2, p) {
  return new $c_Ltrivalibs_graphics_math_cpu_Quat((((((+x$2.aL(q)) * (+x$2.aM(p))) + ((+x$2.aM(q)) * (+x$2.aL(p)))) + ((+x$2.aN(q)) * (+x$2.aO(p)))) - ((+x$2.aO(q)) * (+x$2.aN(p)))), (((((+x$2.aL(q)) * (+x$2.aN(p))) - ((+x$2.aM(q)) * (+x$2.aO(p)))) + ((+x$2.aN(q)) * (+x$2.aL(p)))) + ((+x$2.aO(q)) * (+x$2.aM(p)))), (((((+x$2.aL(q)) * (+x$2.aO(p))) + ((+x$2.aM(q)) * (+x$2.aN(p)))) - ((+x$2.aN(q)) * (+x$2.aM(p)))) + ((+x$2.aO(q)) * (+x$2.aL(p)))), (((((+x$2.aL(q)) * (+x$2.aL(p))) - ((+x$2.aM(q)) * (+x$2.aM(p)))) - ((+x$2.aN(q)) * (+x$2.aN(p)))) - ((+x$2.aO(q)) * (+x$2.aO(p)))));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec2(x, y) {
  this.ir = 0.0;
  this.is = 0.0;
  this.ir = x;
  this.is = y;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec2.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec2;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec2() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec2.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec2 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec2, "trivalibs.graphics.math.cpu.Vec2", ({
  dZ: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec3(x, y, z) {
  this.x = 0.0;
  this.v = 0.0;
  this.y = 0.0;
  this.x = x;
  this.v = y;
  this.y = z;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec3.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec3;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec3() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec3.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec3 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3, "trivalibs.graphics.math.cpu.Vec3", ({
  e0: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec4(x, y, z, w) {
  this.fT = 0.0;
  this.fU = 0.0;
  this.fV = 0.0;
  this.fS = 0.0;
  this.fT = x;
  this.fU = y;
  this.fV = z;
  this.fS = w;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec4.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec4;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec4() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec4.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec4 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4, "trivalibs.graphics.math.cpu.Vec4", ({
  e3: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
  this.kj = null;
  this.kk = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$.prototype = $p;
$p.nB = (function() {
  if ((!this.kk)) {
    this.kj = new $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18();
    this.kk = true;
  }
  return this.kj;
});
var $d_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$, "trivalibs.graphics.math.cpu.mat4$package$Mat4Buffer$", ({
  e5: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$;
function $m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$)) {
    $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$ = new $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$() {
  this.kl = null;
  this.km = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$.prototype = $p;
$p.pg = (function() {
  if ((!this.km)) {
    this.kl = new $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$8();
    this.km = true;
  }
  return this.kl;
});
var $d_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$, "trivalibs.graphics.math.cpu.vec4$package$Vec4Buffer$", ({
  e8: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$;
function $m_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$)) {
    $n_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$ = new $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$;
}
function $ct_Ltrivalibs_graphics_math_gpu_Expr__T__($thiz, wgsl) {
  $thiz.e = wgsl;
  return $thiz;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_Expr() {
  this.e = null;
}
$p = $c_Ltrivalibs_graphics_math_gpu_Expr.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_Expr;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_Expr() {
}
$h_Ltrivalibs_graphics_math_gpu_Expr.prototype = $p;
$p.p = (function() {
  return this.e;
});
var $d_Ltrivalibs_graphics_math_gpu_Expr = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_Expr, "trivalibs.graphics.math.gpu.Expr", ({
  aM: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_LeftScalar$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_LeftScalar$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_LeftScalar$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_LeftScalar$() {
}
$h_Ltrivalibs_graphics_math_gpu_LeftScalar$.prototype = $p;
$p.aW = (function() {
  return new $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$13(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$10$2) => {
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), _$10$2);
  })));
});
var $d_Ltrivalibs_graphics_math_gpu_LeftScalar$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_LeftScalar$, "trivalibs.graphics.math.gpu.LeftScalar$", ({
  ec: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_LeftScalar$;
function $m_Ltrivalibs_graphics_math_gpu_LeftScalar$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_LeftScalar$)) {
    $n_Ltrivalibs_graphics_math_gpu_LeftScalar$ = new $c_Ltrivalibs_graphics_math_gpu_LeftScalar$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_LeftScalar$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$() {
}
$h_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$.prototype = $p;
$p.pb = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aV(v));
});
var $d_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$, "trivalibs.graphics.math.gpu.cpu_interop$package$", ({
  ef: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$;
function $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$)) {
    $n_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$ = new $c_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_expr$package$() {
  $n_Ltrivalibs_graphics_math_gpu_expr$package$ = this;
}
$p = $c_Ltrivalibs_graphics_math_gpu_expr$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_expr$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_expr$package$() {
}
$h_Ltrivalibs_graphics_math_gpu_expr$package$.prototype = $p;
$p.aJ = (function(tex, uv, sampler) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("textureSample(" + tex.e) + ", ") + sampler.e) + ", ") + uv.e) + ")"));
});
$p.ga = (function(tex, uv, sampler, level) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((((("textureSampleLevel(" + tex.e) + ", ") + sampler.e) + ", ") + uv.e) + ", ") + level.e) + ")"));
});
$p.gT = (function(tex, coord) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("textureLoad(" + tex.e) + ", ") + coord.e) + ", 0)"));
});
$p.m0 = (function(tex, coord) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("textureLoad(" + tex.e) + ", ") + coord.e) + ", 0)"));
});
$p.oT = (function(onFalse, onTrue, cond) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("select(" + onFalse.e) + ", ") + onTrue.e) + ", ") + cond.e) + ")"));
});
$p.nt = (function(a, b) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.e) + " > ") + b.e) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_expr$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_expr$package$, "trivalibs.graphics.math.gpu.expr$package$", ({
  eg: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_expr$package$;
function $m_Ltrivalibs_graphics_math_gpu_expr$package$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_expr$package$)) {
    $n_Ltrivalibs_graphics_math_gpu_expr$package$ = new $c_Ltrivalibs_graphics_math_gpu_expr$package$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_expr$package$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_expr$package$Block$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_expr$package$Block$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_expr$package$Block$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_expr$package$Block$() {
}
$h_Ltrivalibs_graphics_math_gpu_expr$package$Block$.prototype = $p;
$p.aI = (function(parts) {
  var out = [];
  var i = 0;
  while ((i < parts.R())) {
    var p = parts.a2(i);
    if ((p.length > 0)) {
      out.push(p);
    }
    i = ((1 + i) | 0);
  }
  return out.join("\n");
});
var $d_Ltrivalibs_graphics_math_gpu_expr$package$Block$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_expr$package$Block$, "trivalibs.graphics.math.gpu.expr$package$Block$", ({
  eh: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_expr$package$Block$;
function $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_expr$package$Block$)) {
    $n_Ltrivalibs_graphics_math_gpu_expr$package$Block$ = new $c_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_expr$package$Block$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$() {
  this.kp = null;
  this.kq = false;
  this.kr = null;
  this.ks = false;
  this.kt = null;
  this.ku = false;
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$.prototype = $p;
$p.aV = (function(v) {
  var s = ("" + v);
  return (((($f_T__indexOf__I__I(s, 46) >= 0) || ($f_T__indexOf__I__I(s, 69) >= 0)) || ($f_T__indexOf__I__I(s, 101) >= 0)) ? s : (s + ".0"));
});
$p.o = (function() {
  if ((!this.kq)) {
    this.kp = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1();
    this.kq = true;
  }
  return this.kp;
});
$p.m7 = (function() {
  if ((!this.ks)) {
    this.kr = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3();
    this.ks = true;
  }
  return this.kr;
});
$p.gS = (function() {
  if ((!this.ku)) {
    this.kt = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6();
    this.ku = true;
  }
  return this.kt;
});
$p.fq = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.e + ".xy"));
});
$p.pu = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.e + ".zw"));
});
$p.gd = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.e + ".xyz"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$, "trivalibs.graphics.math.gpu.float_expr$package$", ({
  ei: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_ivec2$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_ivec2$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_ivec2$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_ivec2$() {
}
$h_Ltrivalibs_graphics_math_gpu_ivec2$.prototype = $p;
$p.aT = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("vec2<i32>(" + v.e) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_ivec2$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_ivec2$, "trivalibs.graphics.math.gpu.ivec2$", ({
  ev: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_ivec2$;
function $m_Ltrivalibs_graphics_math_gpu_ivec2$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_ivec2$)) {
    $n_Ltrivalibs_graphics_math_gpu_ivec2$ = new $c_Ltrivalibs_graphics_math_gpu_ivec2$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_ivec2$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_vec2$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_vec2$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_vec2$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_vec2$() {
}
$h_Ltrivalibs_graphics_math_gpu_vec2$.prototype = $p;
$p.af = (function(x, y) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("vec2<f32>(" + x.e) + ", ") + y.e) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_vec2$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec2$, "trivalibs.graphics.math.gpu.vec2$", ({
  ew: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_vec2$;
function $m_Ltrivalibs_graphics_math_gpu_vec2$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_vec2$)) {
    $n_Ltrivalibs_graphics_math_gpu_vec2$ = new $c_Ltrivalibs_graphics_math_gpu_vec2$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_vec2$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_vec3$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_vec3$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_vec3$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_vec3$() {
}
$h_Ltrivalibs_graphics_math_gpu_vec3$.prototype = $p;
$p.aJ = (function(x, y, z) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("vec3<f32>(" + x.e) + ", ") + y.e) + ", ") + z.e) + ")"));
});
$p.aT = (function(scalar) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("vec3<f32>(" + scalar.e) + ")"));
});
$p.mU = (function(scalar) {
  return this.aT($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o().h(scalar));
});
var $d_Ltrivalibs_graphics_math_gpu_vec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec3$, "trivalibs.graphics.math.gpu.vec3$", ({
  ex: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_vec3$;
function $m_Ltrivalibs_graphics_math_gpu_vec3$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_vec3$)) {
    $n_Ltrivalibs_graphics_math_gpu_vec3$ = new $c_Ltrivalibs_graphics_math_gpu_vec3$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_vec3$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_vec4$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_vec4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_vec4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_vec4$() {
}
$h_Ltrivalibs_graphics_math_gpu_vec4$.prototype = $p;
$p.lQ = (function(x, y, z, w) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((((("vec4<f32>(" + x.e) + ", ") + y.e) + ", ") + z.e) + ", ") + w.e) + ")"));
});
$p.af = (function(xyz, w) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("vec4<f32>(" + xyz.e) + ", ") + w.e) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_vec4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec4$, "trivalibs.graphics.math.gpu.vec4$", ({
  ey: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_vec4$;
function $m_Ltrivalibs_graphics_math_gpu_vec4$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_vec4$)) {
    $n_Ltrivalibs_graphics_math_gpu_vec4$ = new $c_Ltrivalibs_graphics_math_gpu_vec4$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_vec4$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_BindPair(name, value) {
  this.m = null;
  this.m = value;
}
$p = $c_Ltrivalibs_graphics_painter_BindPair.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_BindPair;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_BindPair() {
}
$h_Ltrivalibs_graphics_painter_BindPair.prototype = $p;
var $d_Ltrivalibs_graphics_painter_BindPair = new $TypeData().i($c_Ltrivalibs_graphics_painter_BindPair, "trivalibs.graphics.painter.BindPair", ({
  ez: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_BlendState$() {
  this.kv = null;
  $n_Ltrivalibs_graphics_painter_BlendState$ = this;
  new ($a_Ltrivalibs_graphics_painter_BlendState())(new ($a_Ltrivalibs_graphics_painter_BlendFn())("src-alpha", "one-minus-src-alpha"), new ($a_Ltrivalibs_graphics_painter_BlendFn())("one", "one-minus-src-alpha"));
  this.kv = new ($a_Ltrivalibs_graphics_painter_BlendState())(new ($a_Ltrivalibs_graphics_painter_BlendFn())("src-alpha", "one"), new ($a_Ltrivalibs_graphics_painter_BlendFn())("one", "one"));
  new ($a_Ltrivalibs_graphics_painter_BlendState())(new ($a_Ltrivalibs_graphics_painter_BlendFn())("dst", "zero"), new ($a_Ltrivalibs_graphics_painter_BlendFn())("dst-alpha", "zero"));
}
$p = $c_Ltrivalibs_graphics_painter_BlendState$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_BlendState$;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_BlendState$() {
}
$h_Ltrivalibs_graphics_painter_BlendState$.prototype = $p;
var $d_Ltrivalibs_graphics_painter_BlendState$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_BlendState$, "trivalibs.graphics.painter.BlendState$", ({
  eA: 1
}));
var $n_Ltrivalibs_graphics_painter_BlendState$;
function $m_Ltrivalibs_graphics_painter_BlendState$() {
  if ((!$n_Ltrivalibs_graphics_painter_BlendState$)) {
    $n_Ltrivalibs_graphics_painter_BlendState$ = new $c_Ltrivalibs_graphics_painter_BlendState$();
  }
  return $n_Ltrivalibs_graphics_painter_BlendState$;
}
function $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V($thiz) {
  var format = null;
  var i = 0;
  while ((i < $thiz.f9)) {
    var b = $thiz.fa[i];
    if (((format === null) && (b.bi > 0))) {
      format = b.fb;
    }
    i = ((1 + i) | 0);
  }
  $thiz.iu = format;
}
function $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V($thiz, index, verts, indices, widenTo32) {
  while ((($thiz.fa.length | 0) <= index)) {
    $thiz.fa.push(new $c_Ltrivalibs_graphics_painter_FormBuffers());
  }
  var b = $thiz.fa[index];
  $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_graphics_painter_FormBuffers__Ltrivalibs_bufferdata_BufferView__V($thiz, b, verts);
  if ((indices !== null)) {
    $p_Ltrivalibs_graphics_painter_Form__uploadIndices__Ltrivalibs_graphics_painter_FormBuffers__sjs_js_typedarray_TypedArray__Z__V($thiz, b, indices, widenTo32);
  } else {
    b.bi = 0;
    b.go = 0;
  }
}
function $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_graphics_painter_FormBuffers__Ltrivalibs_bufferdata_BufferView__V($thiz, b, verts) {
  var data = verts.dv.buffer;
  var size = (data.byteLength | 0);
  var p = ((-4) & ((3 + size) | 0));
  var padded = ((p < 4) ? 4 : p);
  if (((b.bj === null) || (b.ix < padded))) {
    if ((b.bj !== null)) {
      b.bj.destroy();
    }
    b.bj = $thiz.gn.g.createBuffer(({
      "size": padded,
      "usage": 40
    }));
    b.ix = padded;
  }
  $thiz.gn.ay.writeBuffer(b.bj, 0.0, $p_Ltrivalibs_graphics_painter_Form__alignedData__sjs_js_typedarray_ArrayBuffer__sjs_js_typedarray_ArrayBuffer($thiz, data));
  b.ht = size;
  b.fW = (verts.off | 0);
}
function $p_Ltrivalibs_graphics_painter_Form__uploadIndices__Ltrivalibs_graphics_painter_FormBuffers__sjs_js_typedarray_TypedArray__Z__V($thiz, b, raw, widenTo32) {
  var data = null;
  var count = 0;
  if (((!(!(raw instanceof Uint16Array))) && widenTo32)) {
    var u32 = new Uint32Array((raw.length | 0));
    var i = 0;
    while ((i < (raw.length | 0))) {
      u32[i] = (raw[i] | 0);
      i = ((1 + i) | 0);
    }
    data = u32.buffer;
    count = (u32.length | 0);
    b.fb = "uint32";
  } else if ((!(!(raw instanceof Uint16Array)))) {
    data = raw.buffer;
    count = (raw.length | 0);
    b.fb = "uint16";
  } else {
    data = raw.buffer;
    count = (raw.length | 0);
    b.fb = "uint32";
  }
  var size = (data.byteLength | 0);
  var p = ((-4) & ((3 + size) | 0));
  var padded = ((p < 4) ? 4 : p);
  if (((b.bh === null) || (b.iw < padded))) {
    if ((b.bh !== null)) {
      b.bh.destroy();
    }
    b.bh = $thiz.gn.g.createBuffer(({
      "size": padded,
      "usage": 24
    }));
    b.iw = padded;
  }
  $thiz.gn.ay.writeBuffer(b.bh, 0.0, $p_Ltrivalibs_graphics_painter_Form__alignedData__sjs_js_typedarray_ArrayBuffer__sjs_js_typedarray_ArrayBuffer($thiz, data));
  b.go = size;
  b.bi = count;
}
function $p_Ltrivalibs_graphics_painter_Form__alignedData__sjs_js_typedarray_ArrayBuffer__sjs_js_typedarray_ArrayBuffer($thiz, data) {
  var size = (data.byteLength | 0);
  if (((3 & size) === 0)) {
    return data;
  } else {
    var $x_1 = ArrayBuffer;
    var p = ((-4) & ((3 + size) | 0));
    var out = new $x_1(((p < 4) ? 4 : p));
    new Uint8Array(out).set(new Uint8Array(data));
    return out;
  }
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Form(painter) {
  this.gn = null;
  this.fa = null;
  this.f9 = 0;
  this.iv = null;
  this.it = null;
  this.iu = null;
  this.gn = painter;
  this.fa = [];
  this.f9 = 0;
  this.iv = "triangle-list";
  this.it = "ccw";
  this.iu = null;
}
$p = $c_Ltrivalibs_graphics_painter_Form.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Form;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Form() {
}
$h_Ltrivalibs_graphics_painter_Form.prototype = $p;
$p.oU = (function(geometry, vertices, geometries, verticesAll, topology, frontFace) {
  if ((topology !== (void 0))) {
    this.iv = topology;
  }
  if ((frontFace !== (void 0))) {
    this.it = frontFace;
  }
  if ((geometry !== (void 0))) {
    $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V(this, 0, geometry.i7, geometry.hm, false);
    this.f9 = 1;
    $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V(this);
  }
  if ((vertices !== (void 0))) {
    $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V(this, 0, vertices, null, false);
    this.f9 = 1;
    $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V(this);
  }
  if ((geometries !== (void 0))) {
    var use32 = false;
    var i = 0;
    while ((i < (geometries.length | 0))) {
      var idx = geometries[i].hm;
      if (((idx !== null) && (!(!(idx instanceof Uint32Array))))) {
        use32 = true;
      }
      i = ((1 + i) | 0);
    }
    i = 0;
    while ((i < (geometries.length | 0))) {
      var geo = geometries[i];
      $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V(this, i, geo.i7, geo.hm, use32);
      i = ((1 + i) | 0);
    }
    this.f9 = (geometries.length | 0);
    $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V(this);
  }
  if ((verticesAll !== (void 0))) {
    var i$1 = 0;
    while ((i$1 < (verticesAll.length | 0))) {
      $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V(this, i$1, verticesAll[i$1], null, false);
      i$1 = ((1 + i$1) | 0);
    }
    this.f9 = (verticesAll.length | 0);
    $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V(this);
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Form = new $TypeData().i($c_Ltrivalibs_graphics_painter_Form, "trivalibs.graphics.painter.Form", ({
  eB: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_FormBuffers() {
  this.bj = null;
  this.ix = 0;
  this.ht = 0;
  this.fW = 0;
  this.bh = null;
  this.iw = 0;
  this.go = 0;
  this.bi = 0;
  this.fb = null;
  this.bj = null;
  this.ix = 0;
  this.ht = 0;
  this.fW = 0;
  this.bh = null;
  this.iw = 0;
  this.go = 0;
  this.bi = 0;
  this.fb = "uint16";
}
$p = $c_Ltrivalibs_graphics_painter_FormBuffers.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_FormBuffers;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_FormBuffers() {
}
$h_Ltrivalibs_graphics_painter_FormBuffers.prototype = $p;
var $d_Ltrivalibs_graphics_painter_FormBuffers = new $TypeData().i($c_Ltrivalibs_graphics_painter_FormBuffers, "trivalibs.graphics.painter.FormBuffers", ({
  eC: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter) {
  this.hu = null;
  this.hu = [];
}
$p = $c_Ltrivalibs_graphics_painter_InstanceList.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_InstanceList;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_InstanceList() {
}
$h_Ltrivalibs_graphics_painter_InstanceList.prototype = $p;
$p.R = (function() {
  return (this.hu.length | 0);
});
var $d_Ltrivalibs_graphics_painter_InstanceList = new $TypeData().i($c_Ltrivalibs_graphics_painter_InstanceList, "trivalibs.graphics.painter.InstanceList", ({
  eD: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_LayerBindCache(panelId, epoch, valueGroup, panelGroup) {
  this.kx = 0;
  this.kw = 0;
  this.iB = null;
  this.iA = null;
  this.kx = panelId;
  this.kw = epoch;
  this.iB = valueGroup;
  this.iA = panelGroup;
}
$p = $c_Ltrivalibs_graphics_painter_LayerBindCache.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_LayerBindCache;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_LayerBindCache() {
}
$h_Ltrivalibs_graphics_painter_LayerBindCache.prototype = $p;
var $d_Ltrivalibs_graphics_painter_LayerBindCache = new $TypeData().i($c_Ltrivalibs_graphics_painter_LayerBindCache, "trivalibs.graphics.painter.LayerBindCache", ({
  eF: 1
}));
function $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var w = ($thiz.fc.width | 0);
  var h = ($thiz.fc.height | 0);
  panel.nk(w, h);
  var msaa = panel.g0;
  var encoder = $thiz.g.createCommandEncoder();
  var panelFormats = panel.jb();
  var colorAttachments = [];
  var t = 0;
  while ((t < panel.p8())) {
    if ((panel.hA !== null)) {
      var opt$proxy2 = panel.hA;
      if (msaa) {
        var _2 = panel.ms(t);
        var TextureViewBundle_this = panel.a0[t];
        var _2$1 = TextureViewBundle_this.az[0];
        var value = opt$proxy2.fT;
        var value$1 = opt$proxy2.fU;
        var value$2 = opt$proxy2.fV;
        var value$3 = opt$proxy2.fS;
        var _2$2 = ({
          "r": value,
          "g": value$1,
          "b": value$2,
          "a": value$3
        });
        var attachment = ({
          "view": _2,
          "resolveTarget": _2$1,
          "loadOp": "clear",
          "storeOp": "discard",
          "clearValue": _2$2
        });
      } else {
        var TextureViewBundle_this$2 = panel.a0[t];
        var _2$3 = TextureViewBundle_this$2.az[0];
        var value$4 = opt$proxy2.fT;
        var value$5 = opt$proxy2.fU;
        var value$6 = opt$proxy2.fV;
        var value$7 = opt$proxy2.fS;
        var _2$4 = ({
          "r": value$4,
          "g": value$5,
          "b": value$6,
          "a": value$7
        });
        var attachment = ({
          "view": _2$3,
          "loadOp": "clear",
          "storeOp": "store",
          "clearValue": _2$4
        });
      }
    } else if (msaa) {
      var _2$5 = panel.ms(t);
      var TextureViewBundle_this$3 = panel.a0[t];
      var _2$6 = TextureViewBundle_this$3.az[0];
      var attachment = ({
        "view": _2$5,
        "resolveTarget": _2$6,
        "loadOp": "load",
        "storeOp": "store"
      });
    } else {
      var TextureViewBundle_this$4 = panel.a0[t];
      var _2$7 = TextureViewBundle_this$4.az[0];
      var attachment = ({
        "view": _2$7,
        "loadOp": "load",
        "storeOp": "store"
      });
    }
    colorAttachments.push(attachment);
    t = ((1 + t) | 0);
  }
  var passDesc = ({
    "colorAttachments": colorAttachments
  });
  if (panel.gx) {
    var _2$8 = panel.m1();
    passDesc.depthStencilAttachment = ({
      "view": _2$8,
      "depthLoadOp": "clear",
      "depthStoreOp": "store",
      "depthClearValue": 1.0
    });
  }
  var shapePass = encoder.beginRenderPass(passDesc);
  var i = 0;
  while ((i < (panel.hB.length | 0))) {
    $p_Ltrivalibs_graphics_painter_Painter__renderShapeOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shape__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_Panel__V($thiz, shapePass, panel.hB[i], panel.gx, msaa, panelFormats, panel);
    i = ((1 + i) | 0);
  }
  shapePass.end();
  $thiz.ay.submit([encoder.finish()]);
  if (panel.gu) {
    $p_Ltrivalibs_graphics_painter_Painter__resolvePanelDepth__Ltrivalibs_graphics_painter_Panel__V($thiz, panel);
  }
  var curEncoder = null;
  var curPass = null;
  var j = 0;
  while ((j < (panel.bk.length | 0))) {
    var layer = panel.bk[j];
    var needsPingPong = layer.lS();
    if ((layer.gp >= 0)) {
      if ((curPass !== null)) {
        curPass.end();
        $thiz.ay.submit([curEncoder.finish()]);
        curPass = null;
      }
      var mipDstView = panel.a0[0].az[layer.gp];
      var mipSrcView = ((layer.hv >= 0) ? panel.a0[0].az[layer.hv] : panel.hW());
      var enc = $thiz.g.createCommandEncoder();
      var _2$9 = [({
        "view": mipDstView,
        "loadOp": "load",
        "storeOp": "store"
      })];
      var mipPass = enc.beginRenderPass(({
        "colorAttachments": _2$9
      }));
      $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V($thiz, mipPass, layer, false, false, panelFormats, mipSrcView, panel);
      mipPass.end();
      $thiz.ay.submit([enc.finish()]);
    } else if (needsPingPong) {
      if ((curPass !== null)) {
        curPass.end();
        $thiz.ay.submit([curEncoder.finish()]);
        curPass = null;
      }
      var enc$2 = $thiz.g.createCommandEncoder();
      var _2$10 = panel.oB();
      var _2$11 = [({
        "view": _2$10,
        "loadOp": "load",
        "storeOp": "store"
      })];
      var ppPass = enc$2.beginRenderPass(({
        "colorAttachments": _2$11
      }));
      $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V($thiz, ppPass, layer, false, false, panelFormats, panel.hW(), panel);
      ppPass.end();
      $thiz.ay.submit([enc$2.finish()]);
      panel.p6();
    } else {
      if ((curPass === null)) {
        curEncoder = $thiz.g.createCommandEncoder();
        var $x_1 = curEncoder;
        var _2$12 = panel.hW();
        var _2$13 = [({
          "view": _2$12,
          "loadOp": "load",
          "storeOp": "store"
        })];
        curPass = $x_1.beginRenderPass(({
          "colorAttachments": _2$13
        }));
      }
      $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V($thiz, curPass, layer, false, false, panelFormats, null, panel);
    }
    j = ((1 + j) | 0);
  }
  if ((curPass !== null)) {
    curPass.end();
    $thiz.ay.submit([curEncoder.finish()]);
  }
  var hasMipTargetLayers = false;
  var mi = 0;
  while ((mi < (panel.bk.length | 0))) {
    if ((panel.bk[mi].gp >= 0)) {
      hasMipTargetLayers = true;
    }
    mi = ((1 + mi) | 0);
  }
  if (((panel.jf() > 1) && (!hasMipTargetLayers))) {
    $p_Ltrivalibs_graphics_painter_Painter__generateMipmaps__Ltrivalibs_graphics_painter_Panel__V($thiz, panel);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__blitSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz) {
  if ((!$thiz.kD)) {
    $thiz.kC = $thiz.g.createSampler(({
      "magFilter": "nearest",
      "minFilter": "nearest"
    }));
    $thiz.kD = true;
  }
  return $thiz.kC;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz) {
  if ((!$thiz.kz)) {
    var $x_2 = $thiz.g;
    var _2 = ({});
    var _2$1 = ({});
    var _2$2 = [({
      "binding": 0,
      "visibility": 2,
      "texture": _2
    }), ({
      "binding": 1,
      "visibility": 2,
      "sampler": _2$1
    })];
    var $x_1 = $x_2.createBindGroupLayout(({
      "entries": _2$2
    }));
    $thiz.ky = $x_1;
    $thiz.kz = true;
  }
  return $thiz.ky;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitPipeline__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz) {
  if ((!$thiz.kB)) {
    var module = $thiz.g.createShaderModule(({
      "code": "\nstruct VsOut {\n  @builtin(position) pos: vec4f,\n  @location(0) uv: vec2f,\n}\n\n@vertex\nfn vs_main(@builtin(vertex_index) vi: u32) -> VsOut {\n  let x = f32((vi << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(vi & 2u) * 2.0 - 1.0;\n  var out: VsOut;\n  out.pos = vec4f(x, y, 0.0, 1.0);\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  return out;\n}\n\n@group(0) @binding(0) var blit_texture: texture_2d<f32>;\n@group(0) @binding(1) var blit_sampler: sampler;\n\n@fragment\nfn fs_main(in: VsOut) -> @location(0) vec4f {\n  return textureSample(blit_texture, blit_sampler, in.uv);\n}\n"
    }));
    var $x_1 = $thiz.g;
    var _2 = [$p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz)];
    var pipelineLayout = $x_1.createPipelineLayout(({
      "bindGroupLayouts": _2
    }));
    var $x_3 = $thiz.g;
    var _2$1 = ({
      "module": module,
      "entryPoint": "vs_main"
    });
    var f$proxy4 = $thiz.fX;
    var _2$2 = [({
      "format": f$proxy4
    })];
    var _2$3 = ({
      "module": module,
      "entryPoint": "fs_main",
      "targets": _2$2
    });
    var _2$4 = ({
      "topology": "triangle-list"
    });
    var $x_2 = $x_3.createRenderPipeline(({
      "layout": pipelineLayout,
      "vertex": _2$1,
      "fragment": _2$3,
      "primitive": _2$4
    }));
    $thiz.kA = $x_2;
    $thiz.kB = true;
  }
  return $thiz.kA;
}
function $p_Ltrivalibs_graphics_painter_Painter__depthResolveBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz) {
  if ((!$thiz.kG)) {
    var $x_2 = $thiz.g;
    var _2 = ({
      "sampleType": "depth",
      "multisampled": true
    });
    var _2$1 = [({
      "binding": 0,
      "visibility": 2,
      "texture": _2
    })];
    var $x_1 = $x_2.createBindGroupLayout(({
      "entries": _2$1
    }));
    $thiz.kF = $x_1;
    $thiz.kG = true;
  }
  return $thiz.kF;
}
function $p_Ltrivalibs_graphics_painter_Painter__depthResolvePipeline__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz) {
  if ((!$thiz.kI)) {
    var module = $thiz.g.createShaderModule(({
      "code": "\n@group(0) @binding(0) var ms_depth: texture_depth_multisampled_2d;\n\n@vertex\nfn vs_main(@builtin(vertex_index) vi: u32) -> @builtin(position) vec4f {\n  let x = f32((vi << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(vi & 2u) * 2.0 - 1.0;\n  return vec4f(x, y, 0.0, 1.0);\n}\n\n@fragment\nfn fs_main(@builtin(position) pos: vec4f) -> @builtin(frag_depth) f32 {\n  return textureLoad(ms_depth, vec2i(pos.xy), 0);\n}\n"
    }));
    var $x_1 = $thiz.g;
    var _2 = [$p_Ltrivalibs_graphics_painter_Painter__depthResolveBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz)];
    var pl = $x_1.createPipelineLayout(({
      "bindGroupLayouts": _2
    }));
    var $x_3 = $thiz.g;
    var _2$1 = ({
      "module": module,
      "entryPoint": "vs_main"
    });
    var _2$2 = [];
    var _2$3 = ({
      "module": module,
      "entryPoint": "fs_main",
      "targets": _2$2
    });
    var _2$4 = ({
      "topology": "triangle-list"
    });
    var _2$5 = ({
      "format": "depth24plus",
      "depthWriteEnabled": true,
      "depthCompare": "always"
    });
    var $x_2 = $x_3.createRenderPipeline(({
      "layout": pl,
      "vertex": _2$1,
      "fragment": _2$3,
      "primitive": _2$4,
      "depthStencil": _2$5
    }));
    $thiz.kH = $x_2;
    $thiz.kI = true;
  }
  return $thiz.kH;
}
function $p_Ltrivalibs_graphics_painter_Painter__resolvePanelDepth__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var encoder = $thiz.g.createCommandEncoder();
  var _2 = [];
  var _2$1 = panel.oR();
  var _2$2 = ({
    "view": _2$1,
    "depthLoadOp": "clear",
    "depthStoreOp": "store",
    "depthClearValue": 1.0
  });
  var pass = encoder.beginRenderPass(({
    "colorAttachments": _2,
    "depthStencilAttachment": _2$2
  }));
  var $x_1 = $thiz.g;
  var _2$3 = $p_Ltrivalibs_graphics_painter_Painter__depthResolveBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz);
  var _2$4 = panel.m1();
  var _2$5 = [({
    "binding": 0,
    "resource": _2$4
  })];
  var bindGroup = $x_1.createBindGroup(({
    "layout": _2$3,
    "entries": _2$5
  }));
  pass.setPipeline($p_Ltrivalibs_graphics_painter_Painter__depthResolvePipeline__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz));
  pass.setBindGroup(0, bindGroup);
  pass.draw(3);
  pass.end();
  $thiz.ay.submit([encoder.finish()]);
}
function $p_Ltrivalibs_graphics_painter_Painter__mipBlitSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz) {
  if ((!$thiz.kK)) {
    $thiz.kJ = $thiz.g.createSampler(({
      "magFilter": "linear",
      "minFilter": "linear"
    }));
    $thiz.kK = true;
  }
  return $thiz.kJ;
}
function $p_Ltrivalibs_graphics_painter_Painter__getMipBlitPipeline__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, format) {
  if ((!(!(!(!$thiz.hw.hasOwnProperty(format)))))) {
    return $thiz.hw[format];
  } else {
    var module = $thiz.g.createShaderModule(({
      "code": "\nstruct VsOut {\n  @builtin(position) pos: vec4f,\n  @location(0) uv: vec2f,\n}\n\n@vertex\nfn vs_main(@builtin(vertex_index) vi: u32) -> VsOut {\n  let x = f32((vi << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(vi & 2u) * 2.0 - 1.0;\n  var out: VsOut;\n  out.pos = vec4f(x, y, 0.0, 1.0);\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  return out;\n}\n\n@group(0) @binding(0) var blit_texture: texture_2d<f32>;\n@group(0) @binding(1) var blit_sampler: sampler;\n\n@fragment\nfn fs_main(in: VsOut) -> @location(0) vec4f {\n  return textureSample(blit_texture, blit_sampler, in.uv);\n}\n"
    }));
    var $x_1 = $thiz.g;
    var _2 = [$p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz)];
    var pl = $x_1.createPipelineLayout(({
      "bindGroupLayouts": _2
    }));
    var $x_2 = $thiz.g;
    var _2$1 = ({
      "module": module,
      "entryPoint": "vs_main"
    });
    var _2$2 = [({
      "format": format
    })];
    var _2$3 = ({
      "module": module,
      "entryPoint": "fs_main",
      "targets": _2$2
    });
    var _2$4 = ({
      "topology": "triangle-list"
    });
    var p = $x_2.createRenderPipeline(({
      "layout": pl,
      "vertex": _2$1,
      "fragment": _2$3,
      "primitive": _2$4
    }));
    $thiz.hw[format] = p;
    return p;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__generateMipmaps__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var mipCount = panel.jf();
  if ((mipCount <= 1)) {
    return (void 0);
  }
  var fmt = (((panel.fe.length | 0) > 0) ? panel.fe[0] : $thiz.fX);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getMipBlitPipeline__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, fmt);
  var i = 1;
  while ((i < mipCount)) {
    var srcView = panel.a0[0].az[((i - 1) | 0)];
    var dstView = panel.a0[0].az[i];
    var encoder = $thiz.g.createCommandEncoder();
    var _2 = ({
      "r": 0,
      "g": 0,
      "b": 0,
      "a": 0
    });
    var _2$1 = [({
      "view": dstView,
      "loadOp": "clear",
      "storeOp": "store",
      "clearValue": _2
    })];
    var pass = encoder.beginRenderPass(({
      "colorAttachments": _2$1
    }));
    var $x_1 = $thiz.g;
    var _2$2 = $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz);
    var _2$3 = $p_Ltrivalibs_graphics_painter_Painter__mipBlitSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz);
    var _2$4 = [({
      "binding": 0,
      "resource": srcView
    }), ({
      "binding": 1,
      "resource": _2$3
    })];
    var bindGroup = $x_1.createBindGroup(({
      "layout": _2$2,
      "entries": _2$4
    }));
    pass.setPipeline(pipeline);
    pass.setBindGroup(0, bindGroup);
    pass.draw(3);
    pass.end();
    $thiz.ay.submit([encoder.finish()]);
    i = ((1 + i) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, bindings, panelBindings) {
  $thiz.at.length = (bindings.length | 0);
  var i = 0;
  while ((i < (bindings.length | 0))) {
    $thiz.at[i] = bindings[i];
    i = ((1 + i) | 0);
  }
  $thiz.a9.length = (panelBindings.length | 0);
  var j = 0;
  while ((j < (panelBindings.length | 0))) {
    $thiz.a9[j] = panelBindings[j];
    j = ((1 + j) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shade, workBindings, workPanelBindings) {
  var dict = panel.gz;
  var keys = Object.keys(dict);
  var i = 0;
  while ((i < (keys.length | 0))) {
    var name = keys[i];
    var value = dict[name];
    if ((!(!(!(!shade.A.hasOwnProperty(name)))))) {
      var idx = (shade.A[name] | 0);
      if (((idx >= (workBindings.length | 0)) || (workBindings[idx] === null))) {
        while (((workBindings.length | 0) <= idx)) {
          workBindings.push(null);
        }
        workBindings[idx] = value;
      }
    } else if ((!(!(!(!shade.a4.hasOwnProperty(name)))))) {
      var idx$2 = (shade.a4[name] | 0);
      if (((idx$2 >= (workPanelBindings.length | 0)) || (workPanelBindings[idx$2] === null))) {
        while (((workPanelBindings.length | 0) <= idx$2)) {
          workPanelBindings.push(null);
        }
        var pb = ((!(!(value instanceof $a_Ltrivalibs_graphics_painter_PanelBinding()))) ? value : new ($a_Ltrivalibs_graphics_painter_PanelBinding())(value));
        workPanelBindings[idx$2] = pb;
      }
    }
    i = ((1 + i) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__applyInstanceBindings__Ltrivalibs_graphics_painter_Instance__sjs_js_Array__sjs_js_Array__V($thiz, inst, workBindings, workPanelBindings) {
  var i = 0;
  while ((i < (inst.lU().length | 0))) {
    if ((inst.lU()[i] !== null)) {
      while (((workBindings.length | 0) <= i)) {
        workBindings.push(null);
      }
      workBindings[i] = inst.lU()[i];
    }
    i = ((1 + i) | 0);
  }
  var j = 0;
  while ((j < (inst.mu().length | 0))) {
    if ((inst.mu()[j] !== null)) {
      while (((workPanelBindings.length | 0) <= j)) {
        workPanelBindings.push(null);
      }
      workPanelBindings[j] = inst.mu()[j];
    }
    j = ((1 + j) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel) {
  return ((panel !== null) && ((Object.keys(panel.gz).length | 0) > 0));
}
function $p_Ltrivalibs_graphics_painter_Painter__buildValueBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, shade, bindings) {
  if ((((bindings.length | 0) > 0) && (shade.iE !== null))) {
    var entries = [];
    var i = 0;
    while ((i < (bindings.length | 0))) {
      var b = bindings[i];
      if ((b !== null)) {
        entries.push($p_Ltrivalibs_graphics_painter_Painter__bindingEntry__I__O__sjs_js_Dynamic($thiz, i, b));
      }
      i = ((1 + i) | 0);
    }
    var $x_1 = $thiz.g;
    var _2 = shade.iE;
    return $x_1.createBindGroup(({
      "layout": _2,
      "entries": entries
    }));
  } else {
    return null;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shade, bindings) {
  var bg = $p_Ltrivalibs_graphics_painter_Painter__buildValueBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, shade, bindings);
  if ((bg !== null)) {
    pass.setBindGroup(0, bg);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__buildPanelBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, shade, panelBindings, srcView) {
  if ((shade.hE !== null)) {
    var entries = [];
    if ((srcView !== null)) {
      entries.push(({
        "binding": 0,
        "resource": srcView
      }));
    }
    var startIdx = ((srcView !== null) | 0);
    var k = startIdx;
    while ((k < (panelBindings.length | 0))) {
      var pb = panelBindings[k];
      if ((pb !== null)) {
        var view = ((!(!pb.depth)) ? pb.panel.nb() : (((pb.mipLevel | 0) < 0) ? pb.panel.a0[(pb.index | 0)].kP : pb.panel.a0[(pb.index | 0)].az[(pb.mipLevel | 0)]));
        var value = k;
        entries.push(({
          "binding": value,
          "resource": view
        }));
      }
      k = ((1 + k) | 0);
    }
    if (((entries.length | 0) > 0)) {
      var $x_1 = $thiz.g;
      var _2 = shade.hE;
      return $x_1.createBindGroup(({
        "layout": _2,
        "entries": entries
      }));
    } else {
      return null;
    }
  } else {
    return null;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shade, panelBindings, srcView) {
  var pg = $p_Ltrivalibs_graphics_painter_Painter__buildPanelBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, shade, panelBindings, srcView);
  if ((pg !== null)) {
    pass.setBindGroup(1, pg);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__renderShapeOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shape__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_Panel__V($thiz, pass, shape, depthTest, multisample, formats, panel) {
  var fmts = ((formats !== null) ? formats : [$thiz.fX]);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, shape.N, shape.iG, fmts, depthTest, multisample, shape.gA.iv, shape.iH, shape.gA.it, shape.gA.iu);
  pass.setPipeline(pipeline);
  var form = shape.gA;
  var bufferCount = form.f9;
  var instanceCount = shape.iI.R();
  var hasPanelBinds = $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel);
  if ((instanceCount === 0)) {
    if (hasPanelBinds) {
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, shape.n, shape.X);
      $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shape.N, $thiz.at, $thiz.a9);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.N, $thiz.at);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.N, $thiz.a9, null);
    } else {
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.N, shape.n);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.N, shape.X, null);
    }
    var b = 0;
    while ((b < bufferCount)) {
      var buf = form.fa[b];
      if ((buf.fW > 0)) {
        pass.setVertexBuffer(0, buf.bj, 0.0, buf.ht);
        if ((buf.bi > 0)) {
          pass.setIndexBuffer(buf.bh, buf.fb, 0.0, buf.go);
          pass.drawIndexed(buf.bi);
        } else {
          pass.draw(buf.fW);
        }
      }
      b = ((1 + b) | 0);
    }
  } else {
    var i = 0;
    while ((i < instanceCount)) {
      var inst = shape.iI.hu[i];
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, shape.n, shape.X);
      if (hasPanelBinds) {
        $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shape.N, $thiz.at, $thiz.a9);
      }
      $p_Ltrivalibs_graphics_painter_Painter__applyInstanceBindings__Ltrivalibs_graphics_painter_Instance__sjs_js_Array__sjs_js_Array__V($thiz, inst, $thiz.at, $thiz.a9);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.N, $thiz.at);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.N, $thiz.a9, null);
      var b$2 = 0;
      while ((b$2 < bufferCount)) {
        var buf$2 = form.fa[b$2];
        if ((buf$2.fW > 0)) {
          pass.setVertexBuffer(0, buf$2.bj, 0.0, buf$2.ht);
          if ((buf$2.bi > 0)) {
            pass.setIndexBuffer(buf$2.bh, buf$2.fb, 0.0, buf$2.go);
            pass.drawIndexed(buf$2.bi);
          } else {
            pass.draw(buf$2.fW);
          }
        }
        b$2 = ((1 + b$2) | 0);
      }
      i = ((1 + i) | 0);
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V($thiz, pass, layer, depthTest, multisample, formats, srcView, panel) {
  var fmts = ((formats !== null) ? formats : [$thiz.fX]);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, layer.r, layer.iy, fmts, depthTest, multisample, "triangle-list", "none", "ccw", null);
  pass.setPipeline(pipeline);
  var instanceCount = layer.iz.R();
  var hasPanelBinds = $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel);
  if ((instanceCount === 0)) {
    if (hasPanelBinds) {
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, layer.i, layer.H);
      $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, layer.r, $thiz.at, $thiz.a9);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, layer.r, $thiz.at);
      var effectiveSrcView = (((($thiz.a9.length | 0) > 0) && ($thiz.a9[0] !== null)) ? null : srcView);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer.r, $thiz.a9, effectiveSrcView);
    } else {
      var c = layer.G;
      if (((((c !== null) && (panel !== null)) && (c.kx === panel.iD)) && (c.kw === panel.fd))) {
        if ((c.iB !== null)) {
          pass.setBindGroup(0, c.iB);
        }
        if ((c.iA !== null)) {
          pass.setBindGroup(1, c.iA);
        }
      } else {
        var vg = $p_Ltrivalibs_graphics_painter_Painter__buildValueBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, layer.r, layer.i);
        var pg = $p_Ltrivalibs_graphics_painter_Painter__buildPanelBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, layer.r, layer.H, srcView);
        if ((vg !== null)) {
          pass.setBindGroup(0, vg);
        }
        if ((pg !== null)) {
          pass.setBindGroup(1, pg);
        }
        layer.G = ((panel !== null) ? new $c_Ltrivalibs_graphics_painter_LayerBindCache(panel.iD, panel.fd, vg, pg) : null);
      }
    }
    pass.draw(3);
  } else {
    var i = 0;
    while ((i < instanceCount)) {
      var inst = layer.iz.hu[i];
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, layer.i, layer.H);
      if (hasPanelBinds) {
        $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, layer.r, $thiz.at, $thiz.a9);
      }
      $p_Ltrivalibs_graphics_painter_Painter__applyInstanceBindings__Ltrivalibs_graphics_painter_Instance__sjs_js_Array__sjs_js_Array__V($thiz, inst, $thiz.at, $thiz.a9);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, layer.r, $thiz.at);
      var effectiveSrcView$2 = (((($thiz.a9.length | 0) > 0) && ($thiz.a9[0] !== null)) ? null : srcView);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer.r, $thiz.a9, effectiveSrcView$2);
      pass.draw(3);
      i = ((1 + i) | 0);
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__blendKeyStr__Ltrivalibs_graphics_painter_BlendState__T($thiz, bs) {
  if ((bs === null)) {
    return "n";
  } else {
    var c = bs.color;
    var a = bs.alpha;
    return ((((((((((c.srcFactor + ".") + c.dstFactor) + ".") + c.operation) + "|") + a.srcFactor) + ".") + a.dstFactor) + ".") + a.operation);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, shade, blendState, formats, depthTest, multisample, topology, cullMode, frontFace, indexFormat) {
  var stripIndexFormat = (((indexFormat !== null) && ((topology === "triangle-strip") || (topology === "line-strip"))) ? indexFormat : null);
  var stripKey = ((stripIndexFormat === null) ? "" : ((stripIndexFormat === "uint32") ? "4" : "2"));
  var key = (((((((((((((((shade.kN + "|") + $p_Ltrivalibs_graphics_painter_Painter__blendKeyStr__Ltrivalibs_graphics_painter_BlendState__T($thiz, blendState)) + "|") + formats.join(",")) + "|") + depthTest) + "|") + multisample) + "|") + topology) + "|") + cullMode) + "|") + frontFace) + stripKey);
  var cached = $thiz.iC[key];
  if ((cached !== (void 0))) {
    return cached;
  } else {
    var targets = [];
    var ti = 0;
    while ((ti < (formats.length | 0))) {
      if ((blendState === null)) {
        var f$proxy7 = formats[ti];
        var target = ({
          "format": f$proxy7
        });
      } else {
        var f$proxy8 = formats[ti];
        var target = ({
          "format": f$proxy8,
          "blend": blendState
        });
      }
      targets.push(target);
      ti = ((1 + ti) | 0);
    }
    if ((shade.iF !== null)) {
      var _2 = shade.hF;
      var _2$1 = [shade.iF];
      var vertexDescriptor = ({
        "module": _2,
        "entryPoint": "vs_main",
        "buffers": _2$1
      });
    } else {
      var _2$2 = shade.hF;
      var vertexDescriptor = ({
        "module": _2$2,
        "entryPoint": "vs_main"
      });
    }
    var _2$3 = shade.kO;
    var _2$4 = shade.hF;
    var _2$5 = ({
      "module": _2$4,
      "entryPoint": "fs_main",
      "targets": targets
    });
    var _2$6 = ({
      "topology": topology,
      "cullMode": cullMode,
      "frontFace": frontFace
    });
    var desc = ({
      "layout": _2$3,
      "vertex": vertexDescriptor,
      "fragment": _2$5,
      "primitive": _2$6
    });
    if ((stripIndexFormat !== null)) {
      desc.primitive.stripIndexFormat = stripIndexFormat;
    }
    if (depthTest) {
      desc.depthStencil = ({
        "format": "depth24plus",
        "depthWriteEnabled": true,
        "depthCompare": "less"
      });
    }
    if (multisample) {
      desc.multisample = ({
        "count": 4
      });
    }
    var p = $thiz.g.createRenderPipeline(desc);
    $thiz.iC[key] = p;
    return p;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__bindingEntry__I__O__sjs_js_Dynamic($thiz, i, b) {
  if ((b instanceof $c_Ltrivalibs_graphics_buffers_BufferBinding)) {
    var _2 = b.C;
    var _2$1 = ({
      "buffer": _2
    });
    return ({
      "binding": i,
      "resource": _2$1
    });
  } else {
    return ({
      "binding": i,
      "resource": b
    });
  }
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Painter(device, queue, canvas, context, preferredFormat) {
  this.g = null;
  this.ay = null;
  this.fc = null;
  this.kE = null;
  this.fX = null;
  this.iC = null;
  this.q = 0;
  this.hx = null;
  this.kL = null;
  this.kM = false;
  this.kC = null;
  this.kD = false;
  this.ky = null;
  this.kz = false;
  this.kA = null;
  this.kB = false;
  this.kF = null;
  this.kG = false;
  this.kH = null;
  this.kI = false;
  this.kJ = null;
  this.kK = false;
  this.hw = null;
  this.at = null;
  this.a9 = null;
  this.g = device;
  this.ay = queue;
  this.fc = canvas;
  this.kE = context;
  this.fX = preferredFormat;
  this.iC = ({});
  this.q = 0;
  this.hx = [];
  this.hw = ({});
  this.at = [];
  this.a9 = [];
}
$p = $c_Ltrivalibs_graphics_painter_Painter.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Painter;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Painter() {
}
$h_Ltrivalibs_graphics_painter_Painter.prototype = $p;
$p.ov = (function(cb) {
  this.hx.push(cb);
  cb.lP((this.fc.width | 0), (this.fc.height | 0));
});
$p.nr = (function(w, h) {
  var k = 0;
  while ((k < (this.hx.length | 0))) {
    this.hx[k].lP(w, h);
    k = ((1 + k) | 0);
  }
});
$p.je = (function() {
  return (this.fc.height | 0);
});
$p.jg = (function(magFilter, minFilter, mipmapFilter, addressMode, addressModeU, addressModeV) {
  var $x_1 = this.g;
  var a$proxy1 = ((addressModeU === (void 0)) ? addressMode : addressModeU);
  var a$proxy2 = ((addressModeV === (void 0)) ? addressMode : addressModeV);
  return $x_1.createSampler(({
    "magFilter": magFilter,
    "minFilter": minFilter,
    "mipmapFilter": mipmapFilter,
    "addressModeU": a$proxy1,
    "addressModeV": a$proxy2
  }));
});
$p.mz = (function() {
  if ((!this.kM)) {
    this.kL = this.jg("linear", "linear", "linear", "clamp-to-edge", (void 0), (void 0));
    this.kM = true;
  }
  return this.kL;
});
$p.nu = (function(geometry, vertices, geometries, verticesAll, topology, frontFace) {
  return new $c_Ltrivalibs_graphics_painter_Form(this).oU(geometry, vertices, geometries, verticesAll, topology, frontFace);
});
$p.gb = (function(form, shade, cullMode, blendState) {
  return new $c_Ltrivalibs_graphics_painter_Shape(this, form, shade).oW(cullMode, blendState);
});
$p.aX = (function(shade, blendState, mipSource, mipTarget) {
  return new $c_Ltrivalibs_graphics_painter_Layer(this, shade).oV(blendState, mipSource, mipTarget);
});
$p.bc = (function(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers) {
  return new $c_Ltrivalibs_graphics_painter_Panel(this).ji(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers);
});
$p.oX = (function(panel) {
  var encoder = this.g.createCommandEncoder();
  var swapChainView = this.kE.getCurrentTexture().createView();
  var _2 = [({
    "view": swapChainView,
    "loadOp": "load",
    "storeOp": "store"
  })];
  var pass = encoder.beginRenderPass(({
    "colorAttachments": _2
  }));
  var $x_1 = this.g;
  var _2$1 = $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout(this);
  var _2$2 = panel.hW();
  var _2$3 = $p_Ltrivalibs_graphics_painter_Painter__blitSampler__Ltrivalibs_graphics_painter_GPUSampler(this);
  var _2$4 = [({
    "binding": 0,
    "resource": _2$2
  }), ({
    "binding": 1,
    "resource": _2$3
  })];
  var bindGroup = $x_1.createBindGroup(({
    "layout": _2$1,
    "entries": _2$4
  }));
  pass.setPipeline($p_Ltrivalibs_graphics_painter_Painter__blitPipeline__Ltrivalibs_graphics_painter_GPURenderPipeline(this));
  pass.setBindGroup(0, bindGroup);
  pass.draw(3);
  pass.end();
  this.ay.submit([encoder.finish()]);
});
var $d_Ltrivalibs_graphics_painter_Painter = new $TypeData().i($c_Ltrivalibs_graphics_painter_Painter, "trivalibs.graphics.painter.Painter", ({
  eG: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Painter$() {
}
$p = $c_Ltrivalibs_graphics_painter_Painter$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Painter$;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Painter$() {
}
$h_Ltrivalibs_graphics_painter_Painter$.prototype = $p;
$p.nH = (function(canvas) {
  var maybeGpu = $m_Ltrivalibs_graphics_painter_WebGPU$().nA();
  if ((maybeGpu === (void 0))) {
    return Promise.reject(Error("WebGPU is not supported"));
  } else {
    var promise$proxy1 = maybeGpu.requestAdapter();
    var promise$proxy3 = promise$proxy1.then(((value$2) => {
      if ((value$2 === null)) {
        throw new $c_sjs_js_JavaScriptException(Error("Failed to get WebGPU adapter")).aF;
      } else {
        return value$2;
      }
    }));
    var f$proxy11 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((adapter$2) => {
      var promise$proxy2 = adapter$2.requestDevice();
      var f$proxy10 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((device$2) => {
        var queue = device$2.queue;
        var context = $m_Ltrivalibs_graphics_painter_WebGPU$().nz(canvas);
        var format = maybeGpu.getPreferredCanvasFormat();
        context.configure(({
          "device": device$2,
          "format": format
        }));
        var painter = new $c_Ltrivalibs_graphics_painter_Painter(device$2, queue, canvas, context, format);
        var w = (canvas.clientWidth | 0);
        var h = (canvas.clientHeight | 0);
        canvas.width = w;
        canvas.height = h;
        var observer = new ResizeObserver(((entries$3) => {
          var entry = entries$3[0];
          var rw = (+entry.contentRect.width);
          var rh = (+entry.contentRect.height);
          if (((rw > 0.0) && (rh > 0.0))) {
            canvas.width = $doubleToInt(rw);
            canvas.height = $doubleToInt(rh);
            painter.nr(rw, rh);
          }
        }));
        observer.observe(canvas);
        return painter;
      }));
      return promise$proxy2.then($m_sjs_js_Any$().gR(f$proxy10));
    }));
    return promise$proxy3.then($m_sjs_js_Any$().gR(f$proxy11));
  }
});
$p.nG = (function(canvas, setup) {
  var promise$proxy4 = this.nH(canvas);
  return promise$proxy4.then($m_sjs_js_Any$().gR(setup));
});
var $d_Ltrivalibs_graphics_painter_Painter$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_Painter$, "trivalibs.graphics.painter.Painter$", ({
  eH: 1
}));
var $n_Ltrivalibs_graphics_painter_Painter$;
function $m_Ltrivalibs_graphics_painter_Painter$() {
  if ((!$n_Ltrivalibs_graphics_painter_Painter$)) {
    $n_Ltrivalibs_graphics_painter_Painter$ = new $c_Ltrivalibs_graphics_painter_Painter$();
  }
  return $n_Ltrivalibs_graphics_painter_Painter$;
}
function $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V($thiz) {
  if (($thiz.gs !== null)) {
    $thiz.gs.destroy();
  }
  if (($thiz.gv !== null)) {
    $thiz.gv.destroy();
  }
  var depthUsage = ($thiz.gr ? 20 : 16);
  var $x_1 = $thiz.ff.g;
  var value = $thiz.fZ;
  var value$1 = $thiz.fY;
  var _2 = ({
    "width": value,
    "height": value$1
  });
  var _2$1 = ($thiz.g0 ? 4 : 1);
  var depthTex = $x_1.createTexture(({
    "size": _2,
    "format": "depth24plus",
    "usage": depthUsage,
    "sampleCount": _2$1
  }));
  $thiz.gs = depthTex;
  $thiz.hy = depthTex.createView();
  if (($thiz.gr && $thiz.g0)) {
    var $x_2 = $thiz.ff.g;
    var value$2 = $thiz.fZ;
    var value$3 = $thiz.fY;
    var _2$2 = ({
      "width": value$2,
      "height": value$3
    });
    var resTex = $x_2.createTexture(({
      "size": _2$2,
      "format": "depth24plus",
      "usage": 20,
      "sampleCount": 1
    }));
    $thiz.gv = resTex;
    $thiz.gw = resTex.createView();
    $thiz.gu = true;
  } else {
    $thiz.gv = null;
    $thiz.gw = null;
    $thiz.gu = false;
  }
}
function $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z($thiz) {
  var i = 0;
  while ((i < ($thiz.bk.length | 0))) {
    if ($thiz.bk[i].lS()) {
      return true;
    }
    i = ((1 + i) | 0);
  }
  return false;
}
function $p_Ltrivalibs_graphics_painter_Panel__buildViews__Ltrivalibs_graphics_painter_GPUTexture__I__Ltrivalibs_graphics_painter_TextureViewBundle($thiz, tex, mipCount) {
  var perMip = [];
  var m = 0;
  while ((m < mipCount)) {
    var value = m;
    var $x_1 = tex.createView(({
      "baseMipLevel": value,
      "mipLevelCount": 1
    }));
    perMip.push($x_1);
    m = ((1 + m) | 0);
  }
  return new $c_Ltrivalibs_graphics_painter_TextureViewBundle(perMip, tex.createView());
}
function $p_Ltrivalibs_graphics_painter_Panel__default$proxy1$1__O__O($thiz, format$1) {
  return ((format$1 === (void 0)) ? (void 0) : [format$1]);
}
function $p_Ltrivalibs_graphics_painter_Panel__default$proxy2$1__O__O($thiz, shape$1) {
  return ((shape$1 === (void 0)) ? (void 0) : [shape$1]);
}
function $p_Ltrivalibs_graphics_painter_Panel__default$proxy3$1__O__O($thiz, layer$1) {
  return ((layer$1 === (void 0)) ? (void 0) : [layer$1]);
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Panel(painter) {
  this.ff = null;
  this.hD = 0;
  this.hC = 0;
  this.hA = null;
  this.gx = false;
  this.g0 = false;
  this.gy = 0;
  this.fe = null;
  this.hB = null;
  this.bk = null;
  this.gz = null;
  this.iD = 0;
  this.fd = 0;
  this.aR = null;
  this.a0 = null;
  this.gs = null;
  this.hy = null;
  this.gr = false;
  this.gv = null;
  this.gw = null;
  this.gu = false;
  this.gt = null;
  this.hz = null;
  this.fZ = 0;
  this.fY = 0;
  this.ff = painter;
  this.hD = 0;
  this.hC = 0;
  this.hA = null;
  this.gx = false;
  this.g0 = false;
  this.gy = 1;
  this.fe = [];
  this.hB = [];
  this.bk = [];
  this.gz = ({});
  $m_Ltrivalibs_graphics_painter_panel$package$().hG = ((1 + $m_Ltrivalibs_graphics_painter_panel$package$().hG) | 0);
  this.iD = $m_Ltrivalibs_graphics_painter_panel$package$().hG;
  this.fd = 0;
  this.aR = [];
  this.a0 = [];
  this.gs = null;
  this.hy = null;
  this.gr = false;
  this.gv = null;
  this.gw = null;
  this.gu = false;
  this.gt = [];
  this.hz = [];
  this.fZ = 0;
  this.fY = 0;
}
$p = $c_Ltrivalibs_graphics_painter_Panel.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Panel;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Panel() {
}
$h_Ltrivalibs_graphics_painter_Panel.prototype = $p;
$p.jf = (function() {
  if ((this.gy === 0)) {
    var a = this.fZ;
    var b = this.fY;
    var maxDim = ((a > b) ? a : b);
    if ((maxDim <= 0)) {
      return 1;
    } else {
      var a$1 = maxDim;
      return ((1 + $doubleToInt(((+Math.log(a$1)) / (+Math.log(2.0))))) | 0);
    }
  } else {
    return this.gy;
  }
});
$p.jb = (function() {
  return (((this.fe.length | 0) === 0) ? [this.ff.fX] : this.fe);
});
$p.p8 = (function() {
  return (this.jb().length | 0);
});
$p.hW = (function() {
  var TextureViewBundle_this = this.a0[0];
  return TextureViewBundle_this.az[0];
});
$p.oB = (function() {
  var TextureViewBundle_this = this.a0[1];
  return TextureViewBundle_this.az[0];
});
$p.m1 = (function() {
  return this.hy;
});
$p.oR = (function() {
  return this.gw;
});
$p.ms = (function(index) {
  return this.hz[index];
});
$p.p6 = (function() {
  var t = this.aR[0];
  this.aR[0] = this.aR[1];
  this.aR[1] = t;
  var sv = this.a0[0];
  this.a0[0] = this.a0[1];
  this.a0[1] = sv;
  this.fd = ((1 + this.fd) | 0);
});
$p.nb = (function() {
  if (((!this.gr) && (this.gs !== null))) {
    this.gr = true;
    $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V(this);
  }
  return (this.gu ? this.gw : this.hy);
});
$p.lT = (function(index, mipLevel, depth) {
  return new ($a_Ltrivalibs_graphics_painter_PanelBinding())(this, index, mipLevel, depth);
});
$p.ji = (function(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers) {
  if ((width !== (void 0))) {
    var v = (width | 0);
    this.hD = v;
  }
  if ((height !== (void 0))) {
    var v$1 = (height | 0);
    this.hC = v$1;
  }
  if ((clearColor !== (void 0))) {
    this.hA = ((clearColor === null) ? null : new $c_Ltrivalibs_graphics_math_cpu_Vec4(clearColor.fT, clearColor.fU, clearColor.fV, clearColor.fS));
  }
  if ((depthTest !== (void 0))) {
    var v$2 = (!(!depthTest));
    this.gx = v$2;
  }
  if ((multisample !== (void 0))) {
    var v$3 = (!(!multisample));
    this.g0 = v$3;
  }
  if ((mips !== (void 0))) {
    if ((!(!mips))) {
      this.gy = 0;
    }
  }
  if ((mipLevels !== (void 0))) {
    var v$5 = (mipLevels | 0);
    if ((v$5 > 0)) {
      this.gy = v$5;
    }
  }
  var x$1 = ((formats === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy1$1__O__O(this, format) : formats);
  if ((x$1 !== (void 0))) {
    this.fe = x$1;
  }
  var x$2 = ((shapes === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy2$1__O__O(this, shape) : shapes);
  if ((x$2 !== (void 0))) {
    this.hB = x$2;
  }
  var x$3 = ((layers === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy3$1__O__O(this, layer) : layers);
  if ((x$3 !== (void 0))) {
    this.bk = x$3;
  }
  if ((((this.fe.length | 0) > 1) && $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z(this))) {
    throw new $c_sjs_js_JavaScriptException(Error("Panel: MRT (multiple formats) cannot host auto-pong layers. Chain a single-format panel for post-processing instead.")).aF;
  }
  return this;
});
$p.nk = (function(canvasW, canvasH) {
  var targetW = ((this.hD === 0) ? canvasW : this.hD);
  var targetH = ((this.hC === 0) ? canvasH : this.hC);
  if (((targetW !== this.fZ) || (targetH !== this.fY))) {
    var d = 0;
    while ((d < (this.aR.length | 0))) {
      this.aR[d].destroy();
      d = ((1 + d) | 0);
    }
    d = 0;
    while ((d < (this.gt.length | 0))) {
      this.gt[d].destroy();
      d = ((1 + d) | 0);
    }
    this.fZ = targetW;
    this.fY = targetH;
    var mipCount = this.jf();
    var fmts = this.jb();
    var hasPong = $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z(this);
    this.aR = [];
    this.a0 = [];
    this.gt = [];
    this.hz = [];
    var i = 0;
    while ((i < (fmts.length | 0))) {
      var fmt = fmts[i];
      var $x_1 = this.ff.g;
      var _2 = ({
        "width": targetW,
        "height": targetH
      });
      var tex = $x_1.createTexture(({
        "size": _2,
        "format": fmt,
        "usage": 20,
        "mipLevelCount": mipCount
      }));
      this.aR.push(tex);
      this.a0.push($p_Ltrivalibs_graphics_painter_Panel__buildViews__Ltrivalibs_graphics_painter_GPUTexture__I__Ltrivalibs_graphics_painter_TextureViewBundle(this, tex, mipCount));
      if (this.g0) {
        var $x_2 = this.ff.g;
        var _2$1 = ({
          "width": targetW,
          "height": targetH
        });
        var msaaTex = $x_2.createTexture(({
          "size": _2$1,
          "format": fmt,
          "sampleCount": 4,
          "usage": 16
        }));
        this.gt.push(msaaTex);
        this.hz.push(msaaTex.createView());
      }
      i = ((1 + i) | 0);
    }
    if (hasPong) {
      var $x_3 = this.ff.g;
      var _2$2 = ({
        "width": targetW,
        "height": targetH
      });
      var f$proxy3 = fmts[0];
      var pongTex = $x_3.createTexture(({
        "size": _2$2,
        "format": f$proxy3,
        "usage": 20,
        "mipLevelCount": mipCount
      }));
      this.aR.push(pongTex);
      this.a0.push($p_Ltrivalibs_graphics_painter_Panel__buildViews__Ltrivalibs_graphics_painter_GPUTexture__I__Ltrivalibs_graphics_painter_TextureViewBundle(this, pongTex, mipCount));
    }
    if (this.gx) {
      $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V(this);
    }
    this.fd = ((1 + this.fd) | 0);
  }
});
var $d_Ltrivalibs_graphics_painter_Panel = new $TypeData().i($c_Ltrivalibs_graphics_painter_Panel, "trivalibs.graphics.painter.Panel", ({
  eI: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Shade(id, shaderModule, vertexBufferLayout, valueBindGroupLayout, panelBindGroupLayout, pipelineLayout, isLayer, uniformIndices, panelIndices) {
  this.kN = 0;
  this.hF = null;
  this.iF = null;
  this.iE = null;
  this.hE = null;
  this.kO = null;
  this.A = null;
  this.a4 = null;
  this.kN = id;
  this.hF = shaderModule;
  this.iF = vertexBufferLayout;
  this.iE = valueBindGroupLayout;
  this.hE = panelBindGroupLayout;
  this.kO = pipelineLayout;
  this.A = uniformIndices;
  this.a4 = panelIndices;
}
$p = $c_Ltrivalibs_graphics_painter_Shade.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Shade;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Shade() {
}
$h_Ltrivalibs_graphics_painter_Shade.prototype = $p;
var $d_Ltrivalibs_graphics_painter_Shade = new $TypeData().i($c_Ltrivalibs_graphics_painter_Shade, "trivalibs.graphics.painter.Shade", ({
  eJ: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_TextureViewBundle(perMip, sampling) {
  this.az = null;
  this.kP = null;
  this.az = perMip;
  this.kP = sampling;
}
$p = $c_Ltrivalibs_graphics_painter_TextureViewBundle.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_TextureViewBundle;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_TextureViewBundle() {
}
$h_Ltrivalibs_graphics_painter_TextureViewBundle.prototype = $p;
var $d_Ltrivalibs_graphics_painter_TextureViewBundle = new $TypeData().i($c_Ltrivalibs_graphics_painter_TextureViewBundle, "trivalibs.graphics.painter.TextureViewBundle", ({
  eL: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_WebGPU$() {
}
$p = $c_Ltrivalibs_graphics_painter_WebGPU$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_WebGPU$;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_WebGPU$() {
}
$h_Ltrivalibs_graphics_painter_WebGPU$.prototype = $p;
$p.nA = (function() {
  return window.navigator.gpu;
});
$p.nz = (function(canvas) {
  return canvas.getContext("webgpu");
});
var $d_Ltrivalibs_graphics_painter_WebGPU$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_WebGPU$, "trivalibs.graphics.painter.WebGPU$", ({
  eM: 1
}));
var $n_Ltrivalibs_graphics_painter_WebGPU$;
function $m_Ltrivalibs_graphics_painter_WebGPU$() {
  if ((!$n_Ltrivalibs_graphics_painter_WebGPU$)) {
    $n_Ltrivalibs_graphics_painter_WebGPU$ = new $c_Ltrivalibs_graphics_painter_WebGPU$();
  }
  return $n_Ltrivalibs_graphics_painter_WebGPU$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_panel$package$() {
  this.hG = 0;
  this.hG = 0;
}
$p = $c_Ltrivalibs_graphics_painter_panel$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_panel$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_panel$package$() {
}
$h_Ltrivalibs_graphics_painter_panel$package$.prototype = $p;
var $d_Ltrivalibs_graphics_painter_panel$package$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_panel$package$, "trivalibs.graphics.painter.panel$package$", ({
  eN: 1
}));
var $n_Ltrivalibs_graphics_painter_panel$package$;
function $m_Ltrivalibs_graphics_painter_panel$package$() {
  if ((!$n_Ltrivalibs_graphics_painter_panel$package$)) {
    $n_Ltrivalibs_graphics_painter_panel$package$ = new $c_Ltrivalibs_graphics_painter_panel$package$();
  }
  return $n_Ltrivalibs_graphics_painter_panel$package$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController(cam, in$1, sensitivity, speed) {
  this.kQ = null;
  this.aa = null;
  this.iJ = 0.0;
  this.kR = 0.0;
  this.kQ = cam;
  this.aa = in$1;
  this.iJ = sensitivity;
  this.kR = speed;
}
$p = $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController() {
}
$h_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController.prototype = $p;
$p.fp = (function(tpf) {
  var dist = ((this.kR * tpf) / 1000.0);
  var forward = 0.0;
  if (((this.aa.aj.aK("KeyW") || this.aa.aj.aK("ArrowUp")) || (this.aa.iU.fk && (this.aa.aj.mv() === 1)))) {
    forward = (forward + dist);
  }
  if ((((this.aa.aj.aK("KeyS") || this.aa.aj.aK("ArrowDown")) || this.aa.aj.nK(2)) || (this.aa.aj.mv() >= 2))) {
    forward = (forward - dist);
  }
  var left = 0.0;
  if ((this.aa.aj.aK("KeyA") || this.aa.aj.aK("ArrowLeft"))) {
    left = (left + dist);
  }
  if ((this.aa.aj.aK("KeyD") || this.aa.aj.aK("ArrowRight"))) {
    left = (left - dist);
  }
  var up = 0.0;
  if (this.aa.aj.aK("Space")) {
    up = (up + dist);
  }
  if ((this.aa.aj.aK("ShiftLeft") || this.aa.aj.aK("ShiftRight"))) {
    up = (up - dist);
  }
  var drag = this.aa.iT.na();
  var deltaH = (((+drag.S) * this.iJ) / 1000.0);
  var deltaV = (((+drag.aq) * this.iJ) / 1000.0);
  this.kQ.or(forward, left, up, deltaH, deltaV);
});
var $d_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController = new $TypeData().i($c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController, "trivalibs.graphics.scene.BasicFirstPersonCameraController", ({
  eO: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_scene_PerspectiveCamera(fov, aspect, near, far, rotH, rotV, pos, proj) {
  this.b6 = 0.0;
  this.fg = 0.0;
  this.g3 = 0.0;
  this.g2 = 0.0;
  this.au = 0.0;
  this.b7 = 0.0;
  this.ab = null;
  this.hH = null;
  this.b6 = fov;
  this.fg = aspect;
  this.g3 = near;
  this.g2 = far;
  this.au = rotH;
  this.b7 = rotV;
  this.ab = pos;
  this.hH = proj;
}
$p = $c_Ltrivalibs_graphics_scene_PerspectiveCamera.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_PerspectiveCamera;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_PerspectiveCamera() {
}
$h_Ltrivalibs_graphics_scene_PerspectiveCamera.prototype = $p;
$p.jh = (function(fov, aspect, near, far, rotH, rotV, pos) {
  var needsProj = ((((fov !== this.b6) || (aspect !== this.fg)) || (near !== this.g3)) || (far !== this.g2));
  this.b6 = fov;
  this.fg = aspect;
  this.g3 = near;
  this.g2 = far;
  if ((rotH !== this.au)) {
    this.au = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().jq(rotH);
  }
  if ((rotV !== this.b7)) {
    this.b7 = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().jo(rotV);
  }
  this.ab = pos;
  if (needsProj) {
    this.hH = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($m_Ltrivalibs_graphics_math_cpu_Mat4$(), $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().jp(this.b6, this.fg), aspect, near, far);
  }
});
$p.or = (function(forward, left, up, deltaH, deltaV) {
  if ((deltaH !== 0.0)) {
    this.au = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().jq((this.au + deltaH));
  }
  if ((deltaV !== 0.0)) {
    this.b7 = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().jo((this.b7 + deltaV));
  }
  if ((up !== 0.0)) {
    this.ab = new $c_Ltrivalibs_graphics_math_cpu_Vec3(this.ab.x, (this.ab.v + up), this.ab.y);
  }
  if ((forward !== 0.0)) {
    var $x_5 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().T();
    var $x_4 = this.ab;
    var $x_3 = $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$();
    var $x_2 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().T();
    var p$proxy1 = this.au;
    var $x_1 = Math.sin(p$proxy1);
    var p$proxy2 = this.au;
    this.ab = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($x_5, $x_4, $x_3, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($x_2, new $c_Ltrivalibs_graphics_math_cpu_Vec3((-(+$x_1)), 0.0, (-(+Math.cos(p$proxy2)))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), forward));
  }
  if ((left !== 0.0)) {
    var $x_10 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().T();
    var $x_9 = this.ab;
    var $x_8 = $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$();
    var $x_7 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().T();
    var p$proxy3 = this.au;
    var $x_6 = Math.cos(p$proxy3);
    var p$proxy4 = this.au;
    this.ab = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($x_10, $x_9, $x_8, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($x_7, new $c_Ltrivalibs_graphics_math_cpu_Vec3((-(+$x_6)), 0.0, (+Math.sin(p$proxy4))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), left));
  }
});
$p.pd = (function() {
  return new $c_Ltrivalibs_graphics_scene_Transform(this.ab, $f_Ltrivalibs_graphics_math_cpu_QuatImmutableOps__quatMul__O__Ltrivalibs_graphics_math_Vec4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$(), $m_Ltrivalibs_graphics_math_cpu_Quat$().nx(this.au), $m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$(), $m_Ltrivalibs_graphics_math_cpu_Quat$().nw(this.b7)), new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0));
});
$p.mE = (function() {
  var $x_1 = $m_Ltrivalibs_graphics_math_cpu_Mat4$().fm();
  var t = this.pd();
  return $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($x_1, $m_Ltrivalibs_graphics_math_cpu_Mat4$().ny(t.kU, t.kS, t.kT), $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
});
var $d_Ltrivalibs_graphics_scene_PerspectiveCamera = new $TypeData().i($c_Ltrivalibs_graphics_scene_PerspectiveCamera, "trivalibs.graphics.scene.PerspectiveCamera", ({
  eP: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_scene_PerspectiveCamera$() {
}
$p = $c_Ltrivalibs_graphics_scene_PerspectiveCamera$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_PerspectiveCamera$;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_PerspectiveCamera$() {
}
$h_Ltrivalibs_graphics_scene_PerspectiveCamera$.prototype = $p;
$p.jq = (function(a) {
  var r = (a % 6.283185307179586);
  return ((r < 0.0) ? (r + 6.283185307179586) : r);
});
$p.jo = (function(a) {
  return ((a < (-1.5707963267948966)) ? (-1.5707963267948966) : ((a > 1.5707963267948966) ? 1.5707963267948966 : a));
});
$p.jp = (function(fov, aspect) {
  var p$proxy5 = (0.5 * fov);
  var p$proxy6 = ((+Math.tan(p$proxy5)) / (+Math.min(aspect, 1.0)));
  return (2.0 * (+Math.atan(p$proxy6)));
});
$p.mT = (function(fov, aspect, near, far, rotH, rotV, pos) {
  var proj = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($m_Ltrivalibs_graphics_math_cpu_Mat4$(), this.jp(fov, aspect), aspect, near, far);
  return new $c_Ltrivalibs_graphics_scene_PerspectiveCamera(fov, aspect, near, far, this.jq(rotH), this.jo(rotV), pos, proj);
});
var $d_Ltrivalibs_graphics_scene_PerspectiveCamera$ = new $TypeData().i($c_Ltrivalibs_graphics_scene_PerspectiveCamera$, "trivalibs.graphics.scene.PerspectiveCamera$", ({
  eQ: 1
}));
var $n_Ltrivalibs_graphics_scene_PerspectiveCamera$;
function $m_Ltrivalibs_graphics_scene_PerspectiveCamera$() {
  if ((!$n_Ltrivalibs_graphics_scene_PerspectiveCamera$)) {
    $n_Ltrivalibs_graphics_scene_PerspectiveCamera$ = new $c_Ltrivalibs_graphics_scene_PerspectiveCamera$();
  }
  return $n_Ltrivalibs_graphics_scene_PerspectiveCamera$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_scene_Transform(translation, rotation, scale) {
  this.kU = null;
  this.kS = null;
  this.kT = null;
  this.kU = translation;
  this.kS = rotation;
  this.kT = scale;
}
$p = $c_Ltrivalibs_graphics_scene_Transform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_Transform;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_Transform() {
}
$h_Ltrivalibs_graphics_scene_Transform.prototype = $p;
var $d_Ltrivalibs_graphics_scene_Transform = new $TypeData().i($c_Ltrivalibs_graphics_scene_Transform, "trivalibs.graphics.scene.Transform", ({
  eR: 1
}));
function $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($thiz, builtins) {
  var s = "";
  var i = 0;
  while ((i < (builtins.length | 0))) {
    var b = builtins[i];
    s = ((s + ((((", @builtin(" + b.aZ) + ") ") + b.bd) + ": ")) + b.b0);
    i = ((1 + i) | 0);
  }
  return s;
}
function $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($thiz, structName, locNames, locTypes, builtins) {
  var array$1 = $m_sjs_js_ArrayOps$().mG($m_sjs_js_ArrayOps$().mF(locNames, new $c_sjs_js_WrappedArray(locTypes)));
  var len = (array$1.length | 0);
  var res = new Array(len);
  var i = 0;
  while ((i < len)) {
    var $x_2 = i;
    var x0 = array$1[i];
    matchResult3: {
      var $x_1;
      if ((x0 !== null)) {
        var x11 = x0.S;
        if ((x11 !== null)) {
          var name = x11.S;
          var typ = x11.aq;
          var $x_1 = (((((("  @location(" + (x0.aq | 0)) + ") ") + name) + ": ") + typ) + ",");
          break matchResult3;
        }
      }
      throw new $c_s_MatchError(x0);
    }
    res[$x_2] = $x_1;
    i = ((1 + i) | 0);
  }
  var len$1 = (builtins.length | 0);
  var res$1 = new Array(len$1);
  var i$1 = 0;
  while ((i$1 < len$1)) {
    var $x_4 = i$1;
    var x0$1 = builtins[i$1];
    matchResult4: {
      var $x_3;
      if ((x0$1 !== null)) {
        var name$1 = x0$1.bd;
        var builtin = x0$1.aZ;
        var typ$1 = x0$1.b0;
        var $x_3 = (((((("  @builtin(" + builtin) + ") ") + name$1) + ": ") + typ$1) + ",");
        break matchResult4;
      }
      throw new $c_s_MatchError(x0$1);
    }
    res$1[$x_4] = $x_3;
    i$1 = ((1 + i$1) | 0);
  }
  var allFields = $m_sjs_js_ArrayOpsCommon$().a(res, res$1);
  return (((allFields.length | 0) === 0) ? "" : (((("struct " + structName) + " {\n") + allFields.join("\n")) + "\n}"));
}
function $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($thiz, groupIdx, names, types) {
  var array$1 = $m_sjs_js_ArrayOps$().mG($m_sjs_js_ArrayOps$().mF(names, new $c_sjs_js_WrappedArray(types)));
  var len = (array$1.length | 0);
  var res = new Array(len);
  var i = 0;
  while ((i < len)) {
    var $x_3 = i;
    var x0 = array$1[i];
    matchResult5: {
      var $x_2;
      if ((x0 !== null)) {
        var x20 = x0.S;
        if ((x20 !== null)) {
          var name = x20.S;
          var typ = x20.aq;
          var bindingIdx = (x0.aq | 0);
          var $x_2 = ((typ === "sampler") ? (((((("@group(" + groupIdx) + ") @binding(") + bindingIdx) + ") var ") + name) + ": sampler;") : (((((((("@group(" + groupIdx) + ") @binding(") + bindingIdx) + ") var<uniform> ") + name) + ": ") + typ) + ";"));
          break matchResult5;
        }
      }
      throw new $c_s_MatchError(x0);
    }
    res[$x_3] = $x_2;
    i = ((1 + i) | 0);
  }
  var $x_1 = res.join("\n");
  return $x_1;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_derive$() {
}
$p = $c_Ltrivalibs_graphics_shader_derive$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_derive$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_derive$() {
}
$h_Ltrivalibs_graphics_shader_derive$.prototype = $p;
var $d_Ltrivalibs_graphics_shader_derive$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_derive$, "trivalibs.graphics.shader.derive$", ({
  eU: 1
}));
var $n_Ltrivalibs_graphics_shader_derive$;
function $m_Ltrivalibs_graphics_shader_derive$() {
  if ((!$n_Ltrivalibs_graphics_shader_derive$)) {
    $n_Ltrivalibs_graphics_shader_derive$ = new $c_Ltrivalibs_graphics_shader_derive$();
  }
  return $n_Ltrivalibs_graphics_shader_derive$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_AssignTarget(target) {
  this.W = null;
  this.W = target;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_AssignTarget.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_AssignTarget;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_AssignTarget() {
}
$h_Ltrivalibs_graphics_shader_dsl_AssignTarget.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_AssignTarget = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_AssignTarget, "trivalibs.graphics.shader.dsl.AssignTarget", ({
  eV: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_FnRegistry() {
  this.iK = null;
  this.a1 = null;
  this.iK = ({});
  this.a1 = [];
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FnRegistry() {
}
$h_Ltrivalibs_graphics_shader_dsl_FnRegistry.prototype = $p;
$p.mD = (function(d) {
  if ((!(!(!(!(!this.iK.hasOwnProperty(d.name))))))) {
    this.iK[d.name] = true;
    var array = d.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      this.mD(array[i]);
      i = ((1 + i) | 0);
    }
    this.a1.push(d);
  }
});
var $d_Ltrivalibs_graphics_shader_dsl_FnRegistry = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FnRegistry, "trivalibs.graphics.shader.dsl.FnRegistry", ({
  eW: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$() {
  this.l = null;
  this.l = null;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FnRegistry$() {
}
$h_Ltrivalibs_graphics_shader_dsl_FnRegistry$.prototype = $p;
$p.hd = (function(d) {
  var r = this.l;
  if ((r !== null)) {
    r.mD(d);
  }
});
var $d_Ltrivalibs_graphics_shader_dsl_FnRegistry$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FnRegistry$, "trivalibs.graphics.shader.dsl.FnRegistry$", ({
  eX: 1
}));
var $n_Ltrivalibs_graphics_shader_dsl_FnRegistry$;
function $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$() {
  if ((!$n_Ltrivalibs_graphics_shader_dsl_FnRegistry$)) {
    $n_Ltrivalibs_graphics_shader_dsl_FnRegistry$ = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$();
  }
  return $n_Ltrivalibs_graphics_shader_dsl_FnRegistry$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(in$1, out, bindings, textures) {
  this.ao = null;
  this.ai = null;
  this.D = null;
  this.mK = null;
  this.fh = null;
  this.ao = in$1;
  this.ai = out;
  this.D = bindings;
  this.mK = textures;
  this.fh = ($m_Ltrivalibs_graphics_math_gpu_expr$package$(), $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "in.position"));
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FragmentCtx() {
}
$h_Ltrivalibs_graphics_shader_dsl_FragmentCtx.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_FragmentCtx = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FragmentCtx, "trivalibs.graphics.shader.dsl.FragmentCtx", ({
  eY: 1
}));
function $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, data) {
  if ((!(!(!(!(!$thiz.iL.hasOwnProperty(data.name))))))) {
    var dict = $thiz.iL;
    var key = data.name;
    dict[key] = true;
    var array = data.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, array[i]);
      i = ((1 + i) | 0);
    }
    $thiz.iM.push(data.src);
  }
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_LayerProgram() {
  this.Y = null;
  this.iM = null;
  this.iL = null;
  this.Y = "";
  this.iM = [];
  this.iL = ({});
}
$p = $c_Ltrivalibs_graphics_shader_dsl_LayerProgram.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_LayerProgram;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_LayerProgram() {
}
$h_Ltrivalibs_graphics_shader_dsl_LayerProgram.prototype = $p;
$p.al = (function() {
  return this.iM.join("\n\n");
});
var $d_Ltrivalibs_graphics_shader_dsl_LayerProgram = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_LayerProgram, "trivalibs.graphics.shader.dsl.LayerProgram", ({
  eZ: 1
}));
function $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, data) {
  if ((!(!(!(!(!$thiz.iN.hasOwnProperty(data.name))))))) {
    var dict = $thiz.iN;
    var key = data.name;
    dict[key] = true;
    var array = data.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, array[i]);
      i = ((1 + i) | 0);
    }
    $thiz.iO.push(data.src);
  }
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_Program() {
  this.b9 = null;
  this.b8 = null;
  this.iO = null;
  this.iN = null;
  this.b9 = "";
  this.b8 = "";
  this.iO = [];
  this.iN = ({});
}
$p = $c_Ltrivalibs_graphics_shader_dsl_Program.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_Program;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_Program() {
}
$h_Ltrivalibs_graphics_shader_dsl_Program.prototype = $p;
$p.al = (function() {
  return this.iO.join("\n\n");
});
var $d_Ltrivalibs_graphics_shader_dsl_Program = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_Program, "trivalibs.graphics.shader.dsl.Program", ({
  f0: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(in$1, out, bindings, textures) {
  this.ba = null;
  this.bb = null;
  this.hI = null;
  this.ba = in$1;
  this.bb = out;
  this.hI = bindings;
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
}
$p = $c_Ltrivalibs_graphics_shader_dsl_VertexCtx.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_VertexCtx;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_VertexCtx() {
}
$h_Ltrivalibs_graphics_shader_dsl_VertexCtx.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_VertexCtx = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_VertexCtx, "trivalibs.graphics.shader.dsl.VertexCtx", ({
  f4: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_WgslFnData$() {
}
$p = $c_Ltrivalibs_graphics_shader_dsl_WgslFnData$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_WgslFnData$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_WgslFnData$() {
}
$h_Ltrivalibs_graphics_shader_dsl_WgslFnData$.prototype = $p;
$p.mL = (function() {
  return [];
});
var $d_Ltrivalibs_graphics_shader_dsl_WgslFnData$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_WgslFnData$, "trivalibs.graphics.shader.dsl.WgslFnData$", ({
  f6: 1
}));
var $n_Ltrivalibs_graphics_shader_dsl_WgslFnData$;
function $m_Ltrivalibs_graphics_shader_dsl_WgslFnData$() {
  if ((!$n_Ltrivalibs_graphics_shader_dsl_WgslFnData$)) {
    $n_Ltrivalibs_graphics_shader_dsl_WgslFnData$ = new $c_Ltrivalibs_graphics_shader_dsl_WgslFnData$();
  }
  return $n_Ltrivalibs_graphics_shader_dsl_WgslFnData$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$() {
}
$p = $c_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$() {
}
$h_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$.prototype = $p;
$p.ap = (function(fn, ds) {
  var seen = ({});
  var merged = [];
  var i = 0;
  while ((i < (fn.deps.length | 0))) {
    var d = fn.deps[i];
    if ((!(!(!(!(!seen.hasOwnProperty(d.name))))))) {
      seen[d.name] = true;
      merged.push(d);
    }
    i = ((1 + i) | 0);
  }
  ds.gP(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((d$3) => {
    if ((!(!(!(!(!seen.hasOwnProperty(d$3.name))))))) {
      seen[d$3.name] = true;
      merged.push(d$3);
    }
  })));
  return new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())(fn.name, fn.src, merged);
});
$p.lX = (function(fn, a1) {
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().hd(fn);
  return (((fn.name + "(") + a1) + ")");
});
$p.j9 = (function(fn, a1, a2) {
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().hd(fn);
  return (((((fn.name + "(") + a1) + ", ") + a2) + ")");
});
$p.j8 = (function(fn, a1, a2, a3) {
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().hd(fn);
  return (((((((fn.name + "(") + a1) + ", ") + a2) + ", ") + a3) + ")");
});
$p.j7 = (function(fn, a1, a2, a3, a4) {
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().hd(fn);
  return (((((((((fn.name + "(") + a1) + ", ") + a2) + ", ") + a3) + ", ") + a4) + ")");
});
$p.lW = (function(fn, a1, a2, a3, a4, a5) {
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().hd(fn);
  return (((((((((((fn.name + "(") + a1) + ", ") + a2) + ", ") + a3) + ", ") + a4) + ", ") + a5) + ")");
});
var $d_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$, "trivalibs.graphics.shader.dsl.fn$package$WgslFn$", ({
  f7: 1
}));
var $n_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$;
function $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$() {
  if ((!$n_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$)) {
    $n_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$ = new $c_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  }
  return $n_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$;
}
function $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($thiz, sizes) {
  var offsets = [];
  var elem = 0;
  elem = 0;
  var len = (sizes.length | 0);
  var i = 0;
  while ((i < len)) {
    var x0 = sizes[i];
    var size = (x0 | 0);
    offsets.push(elem);
    elem = ((elem + size) | 0);
    i = ((1 + i) | 0);
  }
  return offsets;
}
function $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($thiz, sizes) {
  var elem = 0;
  elem = 0;
  var len = (sizes.length | 0);
  var i = 0;
  while ((i < len)) {
    var x0 = sizes[i];
    var size = (x0 | 0);
    elem = ((elem + size) | 0);
    i = ((1 + i) | 0);
  }
  return elem;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_layouts$() {
}
$p = $c_Ltrivalibs_graphics_shader_layouts$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_layouts$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_layouts$() {
}
$h_Ltrivalibs_graphics_shader_layouts$.prototype = $p;
$p.O = (function(device, bindGroupLayouts) {
  return device.createPipelineLayout(({
    "bindGroupLayouts": bindGroupLayouts
  }));
});
var $d_Ltrivalibs_graphics_shader_layouts$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_layouts$, "trivalibs.graphics.shader.layouts$", ({
  f8: 1
}));
var $n_Ltrivalibs_graphics_shader_layouts$;
function $m_Ltrivalibs_graphics_shader_layouts$() {
  if ((!$n_Ltrivalibs_graphics_shader_layouts$)) {
    $n_Ltrivalibs_graphics_shader_layouts$ = new $c_Ltrivalibs_graphics_shader_layouts$();
  }
  return $n_Ltrivalibs_graphics_shader_layouts$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_lib_blur_Blur$() {
}
$p = $c_Ltrivalibs_graphics_shader_lib_blur_Blur$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_blur_Blur$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_blur_Blur$() {
}
$h_Ltrivalibs_graphics_shader_lib_blur_Blur$.prototype = $p;
$p.n4 = (function(tex, s, uv, radius, res) {
  if ((res === null)) {
    var WgslFn$_this = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy1 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$().n6();
    var s$proxy1 = WgslFn$_this.j7(fn$proxy1, tex, s, uv, radius);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy1);
  } else {
    var WgslFn$_this$2 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy2 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$().n5();
    var s$proxy2 = WgslFn$_this$2.lW(fn$proxy2, tex, s, uv, res, radius);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy2);
  }
});
$p.jn = (function(tex, s, uv, radius, res) {
  if ((res === null)) {
    var WgslFn$_this = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy3 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$().pa();
    var s$proxy3 = WgslFn$_this.j7(fn$proxy3, tex, s, uv, radius);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy3);
  } else {
    var WgslFn$_this$2 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy4 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$().p9();
    var s$proxy4 = WgslFn$_this$2.lW(fn$proxy4, tex, s, uv, res, radius);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy4);
  }
});
var $d_Ltrivalibs_graphics_shader_lib_blur_Blur$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_blur_Blur$, "trivalibs.graphics.shader.lib.blur.Blur$", ({
  f9: 1
}));
var $n_Ltrivalibs_graphics_shader_lib_blur_Blur$;
function $m_Ltrivalibs_graphics_shader_lib_blur_Blur$() {
  if ((!$n_Ltrivalibs_graphics_shader_lib_blur_Blur$)) {
    $n_Ltrivalibs_graphics_shader_lib_blur_Blur$ = new $c_Ltrivalibs_graphics_shader_lib_blur_Blur$();
  }
  return $n_Ltrivalibs_graphics_shader_lib_blur_Blur$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$() {
  this.kW = null;
  this.kZ = false;
  this.l0 = null;
  this.l3 = false;
  this.kX = null;
  this.kY = false;
  this.l1 = null;
  this.l2 = false;
}
$p = $c_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$() {
}
$h_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$.prototype = $p;
$p.n5 = (function() {
  if ((!this.kZ)) {
    this.kW = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("blur_box_2d", "fn blur_box_2d(tex: texture_2d<f32>, s: sampler, uv: vec2<f32>, res: vec2<f32>, radius: f32) -> vec4<f32> {\n  let o = vec2<f32>(radius) / res;\n    var color = textureSample(tex, s, uv - o);\n    color += textureSample(tex, s, uv + vec2<f32>(o.x, -o.y));\n    color += textureSample(tex, s, uv + vec2<f32>(-o.x, o.y));\n    color += textureSample(tex, s, uv + o);\n    return color * 0.25;\n}");
    this.kZ = true;
  }
  return this.kW;
});
$p.p9 = (function() {
  if ((!this.l3)) {
    this.l0 = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("blur_tent_2d", "fn blur_tent_2d(tex: texture_2d<f32>, s: sampler, uv: vec2<f32>, res: vec2<f32>, radius: f32) -> vec4<f32> {\n  let o = vec2<f32>(radius) / res;\n    var color = textureSample(tex, s, uv) * 0.25;\n    color += (textureSample(tex, s, uv + vec2<f32>(0.0, o.y)) + textureSample(tex, s, uv + vec2<f32>(0.0, -o.y)) + textureSample(tex, s, uv + vec2<f32>(o.x, 0.0)) + textureSample(tex, s, uv + vec2<f32>(-o.x, 0.0))) * 0.125;\n    color += (textureSample(tex, s, uv + o) + textureSample(tex, s, uv + vec2<f32>(-o.x, o.y)) + textureSample(tex, s, uv + vec2<f32>(o.x, -o.y)) + textureSample(tex, s, uv - o)) * 0.0625;\n    return color;\n}");
    this.l3 = true;
  }
  return this.l0;
});
$p.n6 = (function() {
  if ((!this.kY)) {
    this.kX = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("blur_box_2d_auto", "fn blur_box_2d_auto(tex: texture_2d<f32>, s: sampler, uv: vec2<f32>, radius: f32) -> vec4<f32> {\n  let o = vec2<f32>(radius) / vec2<f32>(textureDimensions(tex));\n    var color = textureSample(tex, s, uv - o);\n    color += textureSample(tex, s, uv + vec2<f32>(o.x, -o.y));\n    color += textureSample(tex, s, uv + vec2<f32>(-o.x, o.y));\n    color += textureSample(tex, s, uv + o);\n    return color * 0.25;\n}");
    this.kY = true;
  }
  return this.kX;
});
$p.pa = (function() {
  if ((!this.l2)) {
    this.l1 = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("blur_tent_2d_auto", "fn blur_tent_2d_auto(tex: texture_2d<f32>, s: sampler, uv: vec2<f32>, radius: f32) -> vec4<f32> {\n  let o = vec2<f32>(radius) / vec2<f32>(textureDimensions(tex));\n    var color = textureSample(tex, s, uv) * 0.25;\n    color += (textureSample(tex, s, uv + vec2<f32>(0.0, o.y)) + textureSample(tex, s, uv + vec2<f32>(0.0, -o.y)) + textureSample(tex, s, uv + vec2<f32>(o.x, 0.0)) + textureSample(tex, s, uv + vec2<f32>(-o.x, 0.0))) * 0.125;\n    color += (textureSample(tex, s, uv + o) + textureSample(tex, s, uv + vec2<f32>(-o.x, o.y)) + textureSample(tex, s, uv + vec2<f32>(o.x, -o.y)) + textureSample(tex, s, uv - o)) * 0.0625;\n    return color;\n}");
    this.l2 = true;
  }
  return this.l1;
});
var $d_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$, "trivalibs.graphics.shader.lib.blur.Blur$wgsl$", ({
  fa: 1
}));
var $n_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$;
function $m_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$() {
  if ((!$n_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$)) {
    $n_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$ = new $c_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$();
  }
  return $n_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_lib_noise_Extended$() {
}
$p = $c_Ltrivalibs_graphics_shader_lib_noise_Extended$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_noise_Extended$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_noise_Extended$() {
}
$h_Ltrivalibs_graphics_shader_lib_noise_Extended$.prototype = $p;
$p.ou = (function(pos, tilingPeriod, rot, seed) {
  var p = (tilingPeriod !== null);
  var r = (rot !== null);
  if ((seed === null)) {
    if ((p && r)) {
      var WgslFn$_this = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
      var fn$proxy41 = $m_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$().oG();
      var a3$proxy7 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().Z(rot, 6.283185307179586);
      var s$proxy41 = WgslFn$_this.j8(fn$proxy41, pos, tilingPeriod, a3$proxy7);
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy41);
    } else if (p) {
      var WgslFn$_this$2 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
      var fn$proxy42 = $m_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$().oD();
      var s$proxy42 = WgslFn$_this$2.j9(fn$proxy42, pos, tilingPeriod);
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy42);
    } else if (r) {
      var WgslFn$_this$3 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
      var fn$proxy43 = $m_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$().p1();
      var a2$proxy21 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().Z(rot, 6.283185307179586);
      var s$proxy43 = WgslFn$_this$3.j9(fn$proxy43, pos, a2$proxy21);
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy43);
    } else {
      var WgslFn$_this$4 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
      var fn$proxy44 = $m_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$().oY();
      var s$proxy44 = WgslFn$_this$4.lX(fn$proxy44, pos);
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy44);
    }
  } else if ((p && r)) {
    var WgslFn$_this$5 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy45 = $m_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$().oH();
    var a3$proxy8 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().Z(rot, 6.283185307179586);
    var s$proxy45 = WgslFn$_this$5.j7(fn$proxy45, pos, tilingPeriod, a3$proxy8, seed);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy45);
  } else if (p) {
    var WgslFn$_this$6 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy46 = $m_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$().oE();
    var s$proxy46 = WgslFn$_this$6.j8(fn$proxy46, pos, tilingPeriod, seed);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy46);
  } else if (r) {
    var WgslFn$_this$7 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy47 = $m_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$().p2();
    var a2$proxy24 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().Z(rot, 6.283185307179586);
    var s$proxy47 = WgslFn$_this$7.j8(fn$proxy47, pos, a2$proxy24, seed);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy47);
  } else {
    var WgslFn$_this$8 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy48 = $m_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$().oZ();
    var s$proxy48 = WgslFn$_this$8.j9(fn$proxy48, pos, seed);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy48);
  }
});
var $d_Ltrivalibs_graphics_shader_lib_noise_Extended$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_noise_Extended$, "trivalibs.graphics.shader.lib.noise.Extended$", ({
  fb: 1
}));
var $n_Ltrivalibs_graphics_shader_lib_noise_Extended$;
function $m_Ltrivalibs_graphics_shader_lib_noise_Extended$() {
  if ((!$n_Ltrivalibs_graphics_shader_lib_noise_Extended$)) {
    $n_Ltrivalibs_graphics_shader_lib_noise_Extended$ = new $c_Ltrivalibs_graphics_shader_lib_noise_Extended$();
  }
  return $n_Ltrivalibs_graphics_shader_lib_noise_Extended$;
}
function $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__mod289v4__Ltrivalibs_graphics_shader_dsl_WgslFnData($thiz) {
  if ((!$thiz.l5)) {
    $thiz.l4 = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_mod289_4", "fn extended_mod289_4(i: vec4<f32>) -> vec4<f32> {\n  return i - floor(i / 289.0) * 289.0;\n}");
    $thiz.l5 = true;
  }
  return $thiz.l4;
}
function $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__permute4__Ltrivalibs_graphics_shader_dsl_WgslFnData($thiz) {
  if ((!$thiz.l7)) {
    $thiz.l6 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$().ap(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_permute_4", "fn extended_permute_4(i: vec4<f32>) -> vec4<f32> {\n  let im = extended_mod289_4(i);\n  return extended_mod289_4((im * 34.0 + 10.0) * im);\n}"), new $c_sjsr_WrappedVarArgs([$p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__mod289v4__Ltrivalibs_graphics_shader_dsl_WgslFnData($thiz)]));
    $thiz.l7 = true;
  }
  return $thiz.l6;
}
function $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__body3__Z__Z__Z__Z__T($thiz, periodic, rotating, gradient, seeded) {
  var wrap = (periodic ? "  if (any(p > vec3<f32>(0.0))) {\n    var vx = vec4<f32>(v0.x, v1.x, v2.x, v3.x);\n    var vy = vec4<f32>(v0.y, v1.y, v2.y, v3.y);\n    var vz = vec4<f32>(v0.z, v1.z, v2.z, v3.z);\n    if (p.x > 0.0) {\n      vx = vx - floor(vx / p.x) * p.x;\n    }\n    if (p.y > 0.0) {\n      vy = vy - floor(vy / p.y) * p.y;\n    }\n    if (p.z > 0.0) {\n      vz = vz - floor(vz / p.z) * p.z;\n    }\n    i0 = floor(M * vec3<f32>(vx.x, vy.x, vz.x) + 0.5);\n    i1 = floor(M * vec3<f32>(vx.y, vy.y, vz.y) + 0.5);\n    i2 = floor(M * vec3<f32>(vx.z, vy.z, vz.z) + 0.5);\n    i3 = floor(M * vec3<f32>(vx.w, vy.w, vz.w) + 0.5);\n  }\n" : "");
  var seed = (seeded ? "  hash = extended_permute_4(extended_permute_4(hash + so.x) + so.y);\n" : "");
  var gradients = (rotating ? "  let psi = hash * 0.108705628;\n  let Ct = cos(theta);\n  let St = sin(theta);\n  let sz_ = sqrt(1.0 - sz * sz);\n  var gx: vec4<f32>;\n  var gy: vec4<f32>;\n  var gz: vec4<f32>;\n  if (alpha != 0.0) {\n    let px = Ct * sz_;\n    let py = St * sz_;\n    let pz = sz;\n    let Sp = sin(psi);\n    let Cp = cos(psi);\n    let Ctp = St * Sp - Ct * Cp;\n    let qx = mix(Ctp * St, Sp, sz);\n    let qy = mix(-Ctp * Ct, Cp, sz);\n    let qz = -(py * Cp + px * Sp);\n    let Sa = vec4<f32>(sin(alpha));\n    let Ca = vec4<f32>(cos(alpha));\n    gx = Ca * px + Sa * qx;\n    gy = Ca * py + Sa * qy;\n    gz = Ca * pz + Sa * qz;\n  } else {\n    gx = Ct * sz_;\n    gy = St * sz_;\n    gz = sz;\n  }\n" : "  let Ct = cos(theta);\n  let St = sin(theta);\n  let sz_ = sqrt(1.0 - sz * sz);\n  let gx = Ct * sz_;\n  let gy = St * sz_;\n  let gz = sz;\n");
  var result = (gradient ? "  let n = 39.5 * dot(w3, gdotx);\n  let dw = -6.0 * w2 * gdotx;\n  let dn0 = w3.x * g0 + dw.x * x0;\n  let dn1 = w3.y * g1 + dw.y * x1;\n  let dn2 = w3.z * g2 + dw.z * x2;\n  let dn3 = w3.w * g3 + dw.w * x3;\n  let g = 39.5 * (dn0 + dn1 + dn2 + dn3);\n  return vec4<f32>(n, g);" : "  let n = dot(w3, gdotx);\n  return 39.5 * n;");
  return ((((((("  let M = mat3x3<f32>(0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0);\n  let Mi = mat3x3<f32>(-0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, -0.5);\n  let uvw = M * x;\n  var i0 = floor(uvw);\n  let f0 = uvw - i0;\n  let gt_ = step(f0.xyx, f0.yzz);\n  let lt_ = 1.0 - gt_;\n  let gt = vec3<f32>(lt_.z, gt_.xy);\n  let lt = vec3<f32>(lt_.xy, gt_.z);\n  let o1 = min(gt, lt);\n  let o2 = max(gt, lt);\n  var i1 = i0 + o1;\n  var i2 = i0 + o2;\n  var i3 = i0 + vec3<f32>(1.0, 1.0, 1.0);\n  let v0 = Mi * i0;\n  let v1 = Mi * i1;\n  let v2 = Mi * i2;\n  let v3 = Mi * i3;\n  let x0 = x - v0;\n  let x1 = x - v1;\n  let x2 = x - v2;\n  let x3 = x - v3;\n" + wrap) + "  var hash = extended_permute_4(extended_permute_4(extended_permute_4(vec4<f32>(i0.z, i1.z, i2.z, i3.z)) + vec4<f32>(i0.y, i1.y, i2.y, i3.y)) + vec4<f32>(i0.x, i1.x, i2.x, i3.x));\n") + seed) + "  let theta = hash * 3.883222077;\n  let sz = hash * -0.006920415 + 0.996539792;\n") + gradients) + "  let g0 = vec3<f32>(gx.x, gy.x, gz.x);\n  let g1 = vec3<f32>(gx.y, gy.y, gz.y);\n  let g2 = vec3<f32>(gx.z, gy.z, gz.z);\n  let g3 = vec3<f32>(gx.w, gy.w, gz.w);\n  var w = 0.5 - vec4<f32>(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3));\n  w = max(w, vec4<f32>(0.0, 0.0, 0.0, 0.0));\n  let w2 = w * w;\n  let w3 = w2 * w;\n  let gdotx = vec4<f32>(dot(g0, x0), dot(g1, x1), dot(g2, x2), dot(g3, x3));\n") + result);
}
function $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__seededFwd__T__T__T($thiz, variant, args) {
  return (((("  return extended_" + variant) + "_so(") + args) + ", noise_seed_offsets(seed));");
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$() {
  this.l4 = null;
  this.l5 = false;
  this.l6 = null;
  this.l7 = false;
  this.le = null;
  this.lj = false;
  this.l8 = null;
  this.ld = false;
  this.lq = null;
  this.lv = false;
  this.lk = null;
  this.lp = false;
  this.lh = null;
  this.li = false;
  this.lb = null;
  this.lc = false;
  this.lt = null;
  this.lu = false;
  this.ln = null;
  this.lo = false;
  this.lf = null;
  this.lg = false;
  this.l9 = null;
  this.la = false;
  this.lr = null;
  this.ls = false;
  this.ll = null;
  this.lm = false;
}
$p = $c_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$() {
}
$h_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$.prototype = $p;
$p.oG = (function() {
  if ((!this.lj)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy17 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__body3__Z__Z__Z__Z__T(this, true, true, false, false);
    var src = (("fn extended_psrnoise_3(x: vec3<f32>, p: vec3<f32>, alpha: f32) -> f32 {\n" + body$proxy17) + "\n}");
    this.le = $x_1.ap(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_psrnoise_3", src), new $c_sjsr_WrappedVarArgs([$p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__permute4__Ltrivalibs_graphics_shader_dsl_WgslFnData(this)]));
    this.lj = true;
  }
  return this.le;
});
$p.oD = (function() {
  if ((!this.ld)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy18 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__body3__Z__Z__Z__Z__T(this, true, false, false, false);
    var src = (("fn extended_psnoise_3(x: vec3<f32>, p: vec3<f32>) -> f32 {\n" + body$proxy18) + "\n}");
    this.l8 = $x_1.ap(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_psnoise_3", src), new $c_sjsr_WrappedVarArgs([$p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__permute4__Ltrivalibs_graphics_shader_dsl_WgslFnData(this)]));
    this.ld = true;
  }
  return this.l8;
});
$p.p1 = (function() {
  if ((!this.lv)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy19 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__body3__Z__Z__Z__Z__T(this, false, true, false, false);
    var src = (("fn extended_srnoise_3(x: vec3<f32>, alpha: f32) -> f32 {\n" + body$proxy19) + "\n}");
    this.lq = $x_1.ap(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_srnoise_3", src), new $c_sjsr_WrappedVarArgs([$p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__permute4__Ltrivalibs_graphics_shader_dsl_WgslFnData(this)]));
    this.lv = true;
  }
  return this.lq;
});
$p.oY = (function() {
  if ((!this.lp)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy20 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__body3__Z__Z__Z__Z__T(this, false, false, false, false);
    var src = (("fn extended_snoise_3(x: vec3<f32>) -> f32 {\n" + body$proxy20) + "\n}");
    this.lk = $x_1.ap(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_snoise_3", src), new $c_sjsr_WrappedVarArgs([$p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__permute4__Ltrivalibs_graphics_shader_dsl_WgslFnData(this)]));
    this.lp = true;
  }
  return this.lk;
});
$p.oI = (function() {
  if ((!this.li)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy25 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__body3__Z__Z__Z__Z__T(this, true, true, false, true);
    var src = (("fn extended_psrnoise_3_so(x: vec3<f32>, p: vec3<f32>, alpha: f32, so: vec2<f32>) -> f32 {\n" + body$proxy25) + "\n}");
    this.lh = $x_1.ap(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_psrnoise_3_so", src), new $c_sjsr_WrappedVarArgs([$p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__permute4__Ltrivalibs_graphics_shader_dsl_WgslFnData(this)]));
    this.li = true;
  }
  return this.lh;
});
$p.oF = (function() {
  if ((!this.lc)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy26 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__body3__Z__Z__Z__Z__T(this, true, false, false, true);
    var src = (("fn extended_psnoise_3_so(x: vec3<f32>, p: vec3<f32>, so: vec2<f32>) -> f32 {\n" + body$proxy26) + "\n}");
    this.lb = $x_1.ap(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_psnoise_3_so", src), new $c_sjsr_WrappedVarArgs([$p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__permute4__Ltrivalibs_graphics_shader_dsl_WgslFnData(this)]));
    this.lc = true;
  }
  return this.lb;
});
$p.p3 = (function() {
  if ((!this.lu)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy27 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__body3__Z__Z__Z__Z__T(this, false, true, false, true);
    var src = (("fn extended_srnoise_3_so(x: vec3<f32>, alpha: f32, so: vec2<f32>) -> f32 {\n" + body$proxy27) + "\n}");
    this.lt = $x_1.ap(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_srnoise_3_so", src), new $c_sjsr_WrappedVarArgs([$p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__permute4__Ltrivalibs_graphics_shader_dsl_WgslFnData(this)]));
    this.lu = true;
  }
  return this.lt;
});
$p.p0 = (function() {
  if ((!this.lo)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy28 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__body3__Z__Z__Z__Z__T(this, false, false, false, true);
    var src = (("fn extended_snoise_3_so(x: vec3<f32>, so: vec2<f32>) -> f32 {\n" + body$proxy28) + "\n}");
    this.ln = $x_1.ap(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_snoise_3_so", src), new $c_sjsr_WrappedVarArgs([$p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__permute4__Ltrivalibs_graphics_shader_dsl_WgslFnData(this)]));
    this.lo = true;
  }
  return this.ln;
});
$p.oH = (function() {
  if ((!this.lg)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy33 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__seededFwd__T__T__T(this, "psrnoise_3", "x, p, alpha");
    var src = (("fn extended_psrnoise_3_seeded(x: vec3<f32>, p: vec3<f32>, alpha: f32, seed: f32) -> f32 {\n" + body$proxy33) + "\n}");
    this.lf = $x_1.ap(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_psrnoise_3_seeded", src), new $c_sjsr_WrappedVarArgs([this.oI(), $m_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$().hU()]));
    this.lg = true;
  }
  return this.lf;
});
$p.oE = (function() {
  if ((!this.la)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy34 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__seededFwd__T__T__T(this, "psnoise_3", "x, p");
    var src = (("fn extended_psnoise_3_seeded(x: vec3<f32>, p: vec3<f32>, seed: f32) -> f32 {\n" + body$proxy34) + "\n}");
    this.l9 = $x_1.ap(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_psnoise_3_seeded", src), new $c_sjsr_WrappedVarArgs([this.oF(), $m_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$().hU()]));
    this.la = true;
  }
  return this.l9;
});
$p.p2 = (function() {
  if ((!this.ls)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy35 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__seededFwd__T__T__T(this, "srnoise_3", "x, alpha");
    var src = (("fn extended_srnoise_3_seeded(x: vec3<f32>, alpha: f32, seed: f32) -> f32 {\n" + body$proxy35) + "\n}");
    this.lr = $x_1.ap(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_srnoise_3_seeded", src), new $c_sjsr_WrappedVarArgs([this.p3(), $m_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$().hU()]));
    this.ls = true;
  }
  return this.lr;
});
$p.oZ = (function() {
  if ((!this.lm)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy36 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__seededFwd__T__T__T(this, "snoise_3", "x");
    var src = (("fn extended_snoise_3_seeded(x: vec3<f32>, seed: f32) -> f32 {\n" + body$proxy36) + "\n}");
    this.ll = $x_1.ap(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_snoise_3_seeded", src), new $c_sjsr_WrappedVarArgs([this.p0(), $m_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$().hU()]));
    this.lm = true;
  }
  return this.ll;
});
var $d_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$, "trivalibs.graphics.shader.lib.noise.Extended$wgsl$", ({
  fc: 1
}));
var $n_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$;
function $m_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$() {
  if ((!$n_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$)) {
    $n_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$ = new $c_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$();
  }
  return $n_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$() {
  this.lw = null;
  this.lx = false;
}
$p = $c_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$() {
}
$h_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$.prototype = $p;
$p.hU = (function() {
  if ((!this.lx)) {
    this.lw = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$().ap(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("noise_seed_offsets", "fn noise_seed_offsets(seed: f32) -> vec2<f32> {\n  let h = hash1i(bitcast<u32>(seed));\n  return vec2<f32>(f32(h % 289u), f32((h / 289u) % 289u));\n}"), new $c_sjsr_WrappedVarArgs([$m_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$().nD()]));
    this.lx = true;
  }
  return this.lw;
});
var $d_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$, "trivalibs.graphics.shader.lib.noise.NoiseCommon$", ({
  fd: 1
}));
var $n_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$;
function $m_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$() {
  if ((!$n_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$)) {
    $n_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$ = new $c_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$();
  }
  return $n_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$() {
  this.ly = null;
  this.lz = false;
}
$p = $c_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$() {
}
$h_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$.prototype = $p;
$p.nD = (function() {
  if ((!this.lz)) {
    this.ly = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("hash1i", "fn hash1i(x: u32) -> u32 {\n  var v = x;\n    v ^= v >> 16u;\n    v = v * 0x21f0aaadu;\n    v ^= v >> 15u;\n    v = v * 0xd35a2d97u;\n    return v ^ (v >> 15u);\n}");
    this.lz = true;
  }
  return this.ly;
});
var $d_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$, "trivalibs.graphics.shader.lib.random.Hash$wgsl$", ({
  fe: 1
}));
var $n_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$;
function $m_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$() {
  if ((!$n_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$)) {
    $n_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$ = new $c_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$();
  }
  return $n_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$;
}
/** @constructor */
function $c_Ltrivalibs_utils_animation_Animator(frame, onFpsCallback) {
  this.lA = null;
  this.iR = null;
  this.gE = 0;
  this.gF = 0.0;
  this.hJ = 0.0;
  this.hK = 0.0;
  this.iS = false;
  this.lA = frame;
  this.iR = onFpsCallback;
  this.gE = 0;
  this.gF = 0.0;
  this.hJ = 0.0;
  this.hK = (-1.0);
  this.iS = false;
}
$p = $c_Ltrivalibs_utils_animation_Animator.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_animation_Animator;
/** @constructor */
function $h_Ltrivalibs_utils_animation_Animator() {
}
$h_Ltrivalibs_utils_animation_Animator.prototype = $p;
$p.mx = (function(time) {
  this.gE = ((1 + this.gE) | 0);
  if ((this.gF === 0.0)) {
    this.gF = time;
    this.hJ = time;
  }
  var fpsElapsed = (time - this.gF);
  if ((fpsElapsed >= 1000.0)) {
    var fps = ((1000.0 * this.gE) / fpsElapsed);
    if (((time - this.hJ) >= 1000.0)) {
      var args$proxy1 = $m_sr_ScalaRunTime$().ah(new ($d_sjs_js_Any.r().C)([(fps.toFixed(1) + " FPS")]));
      console.log(...$m_sjsr_Compat$().ag(args$proxy1));
      this.hJ = time;
      if ((this.iR !== null)) {
        (0, this.iR)(fps);
      }
    }
    this.gE = 0;
    this.gF = time;
  }
  var delta = ((this.hK < 0.0) ? 0.0 : (time - this.hK));
  this.hK = time;
  (0, this.lA)(delta);
  if (this.iS) {
    requestAnimationFrame($m_sjs_js_Any$().gR(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2) => {
      this.mx((+v1$2));
    }))));
  }
});
$p.p4 = (function() {
  this.iS = true;
  return requestAnimationFrame($m_sjs_js_Any$().gR(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2) => {
    this.mx((+v1$2));
  }))));
});
var $d_Ltrivalibs_utils_animation_Animator = new $TypeData().i($c_Ltrivalibs_utils_animation_Animator, "trivalibs.utils.animation.Animator", ({
  fk: 1
}));
/** @constructor */
function $c_Ltrivalibs_utils_animation_animate$package$() {
}
$p = $c_Ltrivalibs_utils_animation_animate$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_animation_animate$package$;
/** @constructor */
function $h_Ltrivalibs_utils_animation_animate$package$() {
}
$h_Ltrivalibs_utils_animation_animate$package$.prototype = $p;
$p.mS = (function(frame) {
  var animator = new $c_Ltrivalibs_utils_animation_Animator(frame, null);
  animator.p4();
  return animator;
});
var $d_Ltrivalibs_utils_animation_animate$package$ = new $TypeData().i($c_Ltrivalibs_utils_animation_animate$package$, "trivalibs.utils.animation.animate$package$", ({
  fl: 1
}));
var $n_Ltrivalibs_utils_animation_animate$package$;
function $m_Ltrivalibs_utils_animation_animate$package$() {
  if ((!$n_Ltrivalibs_utils_animation_animate$package$)) {
    $n_Ltrivalibs_utils_animation_animate$package$ = new $c_Ltrivalibs_utils_animation_animate$package$();
  }
  return $n_Ltrivalibs_utils_animation_animate$package$;
}
/** @constructor */
function $c_Ltrivalibs_utils_events_CanvasInput(input, drag, hold) {
  this.aj = null;
  this.iT = null;
  this.iU = null;
  this.aj = input;
  this.iT = drag;
  this.iU = hold;
}
$p = $c_Ltrivalibs_utils_events_CanvasInput.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_CanvasInput;
/** @constructor */
function $h_Ltrivalibs_utils_events_CanvasInput() {
}
$h_Ltrivalibs_utils_events_CanvasInput.prototype = $p;
$p.fp = (function(tpf) {
  this.iT.fp(tpf);
  this.iU.fp(tpf);
});
var $d_Ltrivalibs_utils_events_CanvasInput = new $TypeData().i($c_Ltrivalibs_utils_events_CanvasInput, "trivalibs.utils.events.CanvasInput", ({
  fm: 1
}));
function $ct_Ltrivalibs_utils_events_DragGesture__F0__D__D__($thiz, pointersOf, glideMinSpeed, glideHalfLife) {
  $thiz.lD = pointersOf;
  $thiz.lC = glideHalfLife;
  $thiz.g4 = null;
  $thiz.iW = 0.0;
  $thiz.iX = 0.0;
  $thiz.fi = 0.0;
  $thiz.fj = 0.0;
  $thiz.aG = 0.0;
  $thiz.aH = 0.0;
  $thiz.iV = (glideHalfLife > 0.0);
  var s = (glideMinSpeed / 1000.0);
  $thiz.lB = ((s < 0.001) ? 0.001 : s);
  return $thiz;
}
function $ct_Ltrivalibs_utils_events_DragGesture__Ltrivalibs_utils_events_InputState__D__D__($thiz, input, glideMinSpeed, glideHalfLife) {
  $ct_Ltrivalibs_utils_events_DragGesture__F0__D__D__($thiz, $ps_Ltrivalibs_utils_events_DragGesture__DragGesture$superArg$1__Ltrivalibs_utils_events_InputState__D__D__F0(input, glideMinSpeed, glideHalfLife), glideMinSpeed, glideHalfLife);
  return $thiz;
}
function $ps_Ltrivalibs_utils_events_DragGesture__DragGesture$superArg$1__Ltrivalibs_utils_events_InputState__D__D__F0(input, glideMinSpeed, glideHalfLife) {
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => input.aA));
}
/** @constructor */
function $c_Ltrivalibs_utils_events_DragGesture() {
  this.lD = null;
  this.lC = 0.0;
  this.g4 = null;
  this.iW = 0.0;
  this.iX = 0.0;
  this.fi = 0.0;
  this.fj = 0.0;
  this.aG = 0.0;
  this.aH = 0.0;
  this.iV = false;
  this.lB = 0.0;
}
$p = $c_Ltrivalibs_utils_events_DragGesture.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_DragGesture;
/** @constructor */
function $h_Ltrivalibs_utils_events_DragGesture() {
}
$h_Ltrivalibs_utils_events_DragGesture.prototype = $p;
$p.na = (function() {
  return new $c_T2(this.fi, this.fj);
});
$p.fp = (function(tpf) {
  var d = $m_Ltrivalibs_utils_events_gestures$package$().m3(this.lD.gN());
  if ((d === null)) {
    this.g4 = null;
    if (this.iV) {
      var p$proxy1 = ((this.aG * this.aG) + (this.aH * this.aH));
      var $x_1 = ((+Math.sqrt(p$proxy1)) >= this.lB);
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      var e$proxy1 = (tpf / this.lC);
      var f = (+Math.pow(0.5, e$proxy1));
      this.aG = (this.aG * f);
      this.aH = (this.aH * f);
      this.fi = (this.aG * tpf);
      this.fj = (this.aH * tpf);
    } else {
      this.aG = 0.0;
      this.aH = 0.0;
      this.fi = 0.0;
      this.fj = 0.0;
    }
  } else {
    if ((((this.g4 !== null) && (d.aS !== null)) && ((+this.g4) === (+d.aS)))) {
      this.fi = (d.g6 - this.iW);
      this.fj = (d.g7 - this.iX);
      if ((this.iV && (tpf > 0.0))) {
        var e$proxy2 = (tpf / 40.0);
        var k = (1.0 - (+Math.pow(0.5, e$proxy2)));
        this.aG = (this.aG + (((this.fi / tpf) - this.aG) * k));
        this.aH = (this.aH + (((this.fj / tpf) - this.aH) * k));
      }
    } else {
      if ((this.g4 === null)) {
        this.aG = 0.0;
        this.aH = 0.0;
      }
      this.fi = 0.0;
      this.fj = 0.0;
    }
    this.g4 = d.aS;
    this.iW = d.g6;
    this.iX = d.g7;
  }
});
var $d_Ltrivalibs_utils_events_DragGesture = new $TypeData().i($c_Ltrivalibs_utils_events_DragGesture, "trivalibs.utils.events.DragGesture", ({
  fn: 1
}));
function $ct_Ltrivalibs_utils_events_HoldGesture__F0__D__D__($thiz, pointersOf, holdDelay, holdRadius) {
  $thiz.lG = pointersOf;
  $thiz.lE = holdDelay;
  $thiz.lF = holdRadius;
  $thiz.gH = null;
  $thiz.g5 = 0.0;
  $thiz.gI = false;
  $thiz.gG = false;
  $thiz.fk = false;
  return $thiz;
}
function $ct_Ltrivalibs_utils_events_HoldGesture__Ltrivalibs_utils_events_InputState__D__D__($thiz, input, holdDelay, holdRadius) {
  $ct_Ltrivalibs_utils_events_HoldGesture__F0__D__D__($thiz, $ps_Ltrivalibs_utils_events_HoldGesture__HoldGesture$superArg$1__Ltrivalibs_utils_events_InputState__D__D__F0(input, holdDelay, holdRadius), holdDelay, holdRadius);
  return $thiz;
}
function $ps_Ltrivalibs_utils_events_HoldGesture__HoldGesture$superArg$1__Ltrivalibs_utils_events_InputState__D__D__F0(input, holdDelay, holdRadius) {
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => input.aA));
}
/** @constructor */
function $c_Ltrivalibs_utils_events_HoldGesture() {
  this.lG = null;
  this.lE = 0.0;
  this.lF = 0.0;
  this.gH = null;
  this.g5 = 0.0;
  this.gI = false;
  this.gG = false;
  this.fk = false;
}
$p = $c_Ltrivalibs_utils_events_HoldGesture.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_HoldGesture;
/** @constructor */
function $h_Ltrivalibs_utils_events_HoldGesture() {
}
$h_Ltrivalibs_utils_events_HoldGesture.prototype = $p;
$p.fp = (function(tpf) {
  var d = $m_Ltrivalibs_utils_events_gestures$package$().m3(this.lG.gN());
  if ((d === null)) {
    this.gH = null;
    this.g5 = 0.0;
    this.gI = false;
    this.gG = false;
    this.fk = false;
  } else {
    var pid = d.aS;
    if ((!(((this.gH !== null) && (pid !== null)) && ((+this.gH) === (+pid))))) {
      this.gH = pid;
      this.g5 = 0.0;
      this.gI = false;
      this.gG = false;
    }
    this.g5 = (this.g5 + tpf);
    if (this.gG) {
      this.fk = true;
    } else if ((this.g5 < this.lE)) {
      var dx = (d.g6 - d.iZ);
      var dy = (d.g7 - d.j0);
      var p$proxy2 = ((dx * dx) + (dy * dy));
      if (((+Math.sqrt(p$proxy2)) > this.lF)) {
        this.gI = true;
      }
      this.fk = false;
    } else if (this.gI) {
      this.fk = false;
    } else {
      this.gG = true;
      this.fk = true;
    }
  }
});
var $d_Ltrivalibs_utils_events_HoldGesture = new $TypeData().i($c_Ltrivalibs_utils_events_HoldGesture, "trivalibs.utils.events.HoldGesture", ({
  fo: 1
}));
function $p_Ltrivalibs_utils_events_InputState__freeSlot__Ltrivalibs_utils_events_Pointer($thiz) {
  var i = 0;
  while ((i < ($thiz.gL.length | 0))) {
    if (($thiz.gL[i].aS === null)) {
      return $thiz.gL[i];
    }
    i = ((1 + i) | 0);
  }
  return null;
}
function $p_Ltrivalibs_utils_events_InputState__slotById__D__Ltrivalibs_utils_events_Pointer($thiz, id) {
  var i = 0;
  while ((i < ($thiz.aA.length | 0))) {
    var p = $thiz.aA[i];
    if (((p.aS !== null) && ((+p.aS) === id))) {
      return p;
    }
    i = ((1 + i) | 0);
  }
  return null;
}
function $p_Ltrivalibs_utils_events_InputState__removePointer__D__V($thiz, id) {
  var p = $p_Ltrivalibs_utils_events_InputState__slotById__D__Ltrivalibs_utils_events_Pointer($thiz, id);
  if ((p !== null)) {
    p.aS = null;
    var idx = $m_sjs_js_ArrayOps$().m8($thiz.aA, p, 0);
    if ((idx >= 0)) {
      $thiz.aA.splice(idx, 1);
    }
  }
}
function $p_Ltrivalibs_utils_events_InputState__install__V($thiz) {
  var i = 0;
  while ((i < $thiz.lL)) {
    $thiz.gL.push(new $c_Ltrivalibs_utils_events_Pointer());
    i = ((1 + i) | 0);
  }
  $m_Ltrivalibs_utils_events_keyboard$package$().nM($thiz.gJ, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((k$3) => {
    if ((!(!(!(!(!$thiz.gK.hasOwnProperty(k$3))))))) {
      var value$proxy1 = (+Date.now());
      $thiz.gK[k$3] = value$proxy1;
      if ((!($thiz.ak === (void 0)))) {
        (0, $thiz.ak)();
      }
    }
  })), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((k$3$1) => {
    delete $thiz.gK[k$3$1];
    if ((!($thiz.ak === (void 0)))) {
      (0, $thiz.ak)();
    }
  })), false);
  $m_Ltrivalibs_utils_events_pointer$package$().oz($thiz.lI, $m_Ltrivalibs_utils_events_pointer$package$().oA(), new $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078(((v1$2, v2$2, v3$2, v4$2, v5$2) => {
    var button = (v1$2 | 0);
    var id = (+v2$2);
    var x$1 = (+v3$2);
    var y = (+v4$2);
    if ($thiz.lK) {
      $thiz.gJ.focus();
    }
    var key$proxy3 = ("" + button);
    var value$proxy2 = (+Date.now());
    $thiz.hL[key$proxy3] = value$proxy2;
    var slot = $p_Ltrivalibs_utils_events_InputState__freeSlot__Ltrivalibs_utils_events_Pointer($thiz);
    if ((slot !== null)) {
      slot.aS = id;
      slot.iY = button;
      (+Date.now());
      slot.iZ = x$1;
      slot.j0 = y;
      slot.g6 = x$1;
      slot.g7 = y;
      $thiz.aA.push(slot);
      ($thiz.aA.length | 0);
    }
    if ((!($thiz.ak === (void 0)))) {
      (0, $thiz.ak)();
    }
  })), new $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(((v1$2$1, v2$2$1, v3$2$1) => {
    var id$1 = (+v1$2$1);
    var x$2 = (+v2$2$1);
    var y$1 = (+v3$2$1);
    var p = $p_Ltrivalibs_utils_events_InputState__slotById__D__Ltrivalibs_utils_events_Pointer($thiz, id$1);
    if ((p !== null)) {
      p.g6 = x$2;
      p.g7 = y$1;
      if ((($thiz.aA.length | 0) > 0)) {
        $thiz.aA[0];
      }
    }
  })), new $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(((v1$2$2, v2$2$2, v3$2$2, v4$2$1) => {
    var button$1 = (v1$2$2 | 0);
    var id$2 = (+v2$2$2);
    delete $thiz.hL[("" + button$1)];
    $p_Ltrivalibs_utils_events_InputState__removePointer__D__V($thiz, id$2);
    if ((!($thiz.ak === (void 0)))) {
      (0, $thiz.ak)();
    }
  })), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2$3) => {
    $p_Ltrivalibs_utils_events_InputState__removePointer__D__V($thiz, (+v1$2$3));
    if ((!($thiz.ak === (void 0)))) {
      (0, $thiz.ak)();
    }
  })), $thiz.lM);
  $thiz.gJ.addEventListener("focus", $thiz.lJ);
  $thiz.gJ.addEventListener("blur", $thiz.lH);
}
/** @constructor */
function $c_Ltrivalibs_utils_events_InputState(el, keyTarget, suppressContextMenu, onActivity, focusOnPointerDown, maxPointers) {
  this.lI = null;
  this.gJ = null;
  this.lM = false;
  this.ak = null;
  this.lK = false;
  this.lL = 0;
  this.gK = null;
  this.hL = null;
  this.gL = null;
  this.aA = null;
  this.lJ = null;
  this.lH = null;
  this.lI = el;
  this.gJ = keyTarget;
  this.lM = suppressContextMenu;
  this.ak = onActivity;
  this.lK = focusOnPointerDown;
  this.lL = maxPointers;
  this.gK = ({});
  this.hL = ({});
  this.gL = [];
  this.aA = [];
  if ($m_sr_BoxesRunTime$().b(keyTarget, window)) {
    (!(!document.hasFocus()));
  } else {
    $m_sr_BoxesRunTime$().b(keyTarget, document.activeElement);
  }
  this.lJ = ((_$1$3) => {
    if ((!(this.ak === (void 0)))) {
      (0, this.ak)();
    }
  });
  this.lH = ((_$2$3) => {
    if ((!(this.ak === (void 0)))) {
      (0, this.ak)();
    }
  });
  $p_Ltrivalibs_utils_events_InputState__install__V(this);
}
$p = $c_Ltrivalibs_utils_events_InputState.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_InputState;
/** @constructor */
function $h_Ltrivalibs_utils_events_InputState() {
}
$h_Ltrivalibs_utils_events_InputState.prototype = $p;
$p.aK = (function(key) {
  return (!(!(!(!this.gK.hasOwnProperty(key)))));
});
$p.nK = (function(button) {
  var key$proxy7 = ("" + button);
  return (!(!(!(!this.hL.hasOwnProperty(key$proxy7)))));
});
$p.mv = (function() {
  return (this.aA.length | 0);
});
var $d_Ltrivalibs_utils_events_InputState = new $TypeData().i($c_Ltrivalibs_utils_events_InputState, "trivalibs.utils.events.InputState", ({
  fp: 1
}));
/** @constructor */
function $c_Ltrivalibs_utils_events_Pointer() {
  this.aS = null;
  this.iY = 0;
  this.iZ = 0.0;
  this.j0 = 0.0;
  this.g6 = 0.0;
  this.g7 = 0.0;
  this.aS = null;
  this.iY = 0;
  this.iZ = 0.0;
  this.j0 = 0.0;
  this.g6 = 0.0;
  this.g7 = 0.0;
}
$p = $c_Ltrivalibs_utils_events_Pointer.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_Pointer;
/** @constructor */
function $h_Ltrivalibs_utils_events_Pointer() {
}
$h_Ltrivalibs_utils_events_Pointer.prototype = $p;
var $d_Ltrivalibs_utils_events_Pointer = new $TypeData().i($c_Ltrivalibs_utils_events_Pointer, "trivalibs.utils.events.Pointer", ({
  fq: 1
}));
/** @constructor */
function $c_Ltrivalibs_utils_events_gestures$package$() {
}
$p = $c_Ltrivalibs_utils_events_gestures$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_gestures$package$;
/** @constructor */
function $h_Ltrivalibs_utils_events_gestures$package$() {
}
$h_Ltrivalibs_utils_events_gestures$package$.prototype = $p;
$p.m3 = (function(pointers) {
  var i = 0;
  while ((i < (pointers.length | 0))) {
    var p = pointers[i];
    if ((p.iY === 0)) {
      return p;
    }
    i = ((1 + i) | 0);
  }
  return null;
});
var $d_Ltrivalibs_utils_events_gestures$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_gestures$package$, "trivalibs.utils.events.gestures$package$", ({
  fr: 1
}));
var $n_Ltrivalibs_utils_events_gestures$package$;
function $m_Ltrivalibs_utils_events_gestures$package$() {
  if ((!$n_Ltrivalibs_utils_events_gestures$package$)) {
    $n_Ltrivalibs_utils_events_gestures$package$ = new $c_Ltrivalibs_utils_events_gestures$package$();
  }
  return $n_Ltrivalibs_utils_events_gestures$package$;
}
/** @constructor */
function $c_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$() {
}
$p = $c_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$;
/** @constructor */
function $h_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$() {
}
$h_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$.prototype = $p;
$p.nI = (function(canvas, initialFocus, holdDelay, holdRadius, suppressContextMenu, onActivity, dragGlideHalfLife, dragGlideMinSpeed) {
  canvas.setAttribute("tabindex", "0");
  var \u03b41$ = canvas.style;
  \u03b41$.setProperty("outline", "none");
  var \u03b42$ = canvas.style;
  \u03b42$.setProperty("touch-action", "none");
  var \u03b43$ = canvas.style;
  \u03b43$.setProperty("user-select", "none");
  var \u03b44$ = canvas.style;
  \u03b44$.setProperty("-webkit-user-select", "none");
  var \u03b45$ = canvas.style;
  \u03b45$.setProperty("-webkit-touch-callout", "none");
  var \u03b46$ = canvas.style;
  \u03b46$.setProperty("-webkit-tap-highlight-color", "transparent");
  var input = new $c_Ltrivalibs_utils_events_InputState(canvas, canvas, suppressContextMenu, onActivity, true, 4);
  if (initialFocus) {
    canvas.focus();
  }
  return new $c_Ltrivalibs_utils_events_CanvasInput(input, $ct_Ltrivalibs_utils_events_DragGesture__Ltrivalibs_utils_events_InputState__D__D__(new $c_Ltrivalibs_utils_events_DragGesture(), input, dragGlideMinSpeed, dragGlideHalfLife), $ct_Ltrivalibs_utils_events_HoldGesture__Ltrivalibs_utils_events_InputState__D__D__(new $c_Ltrivalibs_utils_events_HoldGesture(), input, holdDelay, holdRadius));
});
var $d_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$, "trivalibs.utils.events.interactive_canvas$package$", ({
  fs: 1
}));
var $n_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$;
function $m_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$() {
  if ((!$n_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$)) {
    $n_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$ = new $c_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$();
  }
  return $n_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$;
}
/** @constructor */
function $c_Ltrivalibs_utils_events_keyboard$package$() {
}
$p = $c_Ltrivalibs_utils_events_keyboard$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_keyboard$package$;
/** @constructor */
function $h_Ltrivalibs_utils_events_keyboard$package$() {
}
$h_Ltrivalibs_utils_events_keyboard$package$.prototype = $p;
$p.nM = (function(el, onDown, onUp, keepDefault) {
  var down = ((e$3) => {
    var isTab = (e$3.code === "Tab");
    if (((!keepDefault) && (!isTab))) {
      e$3.preventDefault();
    }
    if ((!(!(!e$3.repeat)))) {
      onDown.h(e$3.code);
    }
  });
  var up = ((e$3$1) => {
    onUp.h(e$3$1.code);
  });
  el.addEventListener("keydown", down);
  el.addEventListener("keyup", up);
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    el.removeEventListener("keydown", down);
    el.removeEventListener("keyup", up);
  }));
});
var $d_Ltrivalibs_utils_events_keyboard$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_keyboard$package$, "trivalibs.utils.events.keyboard$package$", ({
  ft: 1
}));
var $n_Ltrivalibs_utils_events_keyboard$package$;
function $m_Ltrivalibs_utils_events_keyboard$package$() {
  if ((!$n_Ltrivalibs_utils_events_keyboard$package$)) {
    $n_Ltrivalibs_utils_events_keyboard$package$ = new $c_Ltrivalibs_utils_events_keyboard$package$();
  }
  return $n_Ltrivalibs_utils_events_keyboard$package$;
}
/** @constructor */
function $c_Ltrivalibs_utils_events_pointer$package$() {
}
$p = $c_Ltrivalibs_utils_events_pointer$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_pointer$package$;
/** @constructor */
function $h_Ltrivalibs_utils_events_pointer$package$() {
}
$h_Ltrivalibs_utils_events_pointer$package$.prototype = $p;
$p.oz = (function(el, moveTarget, onDown, onMove, onUp, onCancel, suppressContextMenu) {
  var downFn = ((e$3) => {
    onDown.mV((e$3.button | 0), (+e$3.pointerId), (+e$3.clientX), (+e$3.clientY), (!(!e$3.isPrimary)));
  });
  var moveFn = ((e$3$1) => {
    onMove.mX((+e$3$1.pointerId), (+e$3$1.clientX), (+e$3$1.clientY));
  });
  var upFn = ((e$3$2) => {
    onUp.mW((e$3$2.button | 0), (+e$3$2.pointerId), (+e$3$2.clientX), (+e$3$2.clientY));
  });
  var cancelFn = ((e$3$3) => {
    onCancel.h((+e$3$3.pointerId));
  });
  var ctxFn = ((e$3$4) => {
    e$3$4.preventDefault();
  });
  el.addEventListener("pointerdown", downFn);
  moveTarget.addEventListener("pointermove", moveFn);
  moveTarget.addEventListener("pointerup", upFn);
  moveTarget.addEventListener("pointercancel", cancelFn);
  if (suppressContextMenu) {
    el.addEventListener("contextmenu", ctxFn);
  }
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    el.removeEventListener("pointerdown", downFn);
    moveTarget.removeEventListener("pointermove", moveFn);
    moveTarget.removeEventListener("pointerup", upFn);
    moveTarget.removeEventListener("pointercancel", cancelFn);
    if (suppressContextMenu) {
      el.removeEventListener("contextmenu", ctxFn);
    }
  }));
});
$p.oA = (function() {
  return window;
});
var $d_Ltrivalibs_utils_events_pointer$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_pointer$package$, "trivalibs.utils.events.pointer$package$", ({
  fu: 1
}));
var $n_Ltrivalibs_utils_events_pointer$package$;
function $m_Ltrivalibs_utils_events_pointer$package$() {
  if ((!$n_Ltrivalibs_utils_events_pointer$package$)) {
    $n_Ltrivalibs_utils_events_pointer$package$ = new $c_Ltrivalibs_utils_events_pointer$package$();
  }
  return $n_Ltrivalibs_utils_events_pointer$package$;
}
/** @constructor */
function $c_jl_Character$() {
  this.hZ = null;
  $n_jl_Character$ = this;
  this.hZ = $constArrUDiffs_I(67, "1C]4m6m=c4]4]4]4]4]4]4]4]4]3g4]2m9]2m1Jm1m9s4g5mm6]3]4mm12>mEm1m6m1]3]=]DI]1<m24mIs4g2c4w9];]4]<]3m3m=m3mH]8]2m=mBHm3]4mK3{gggg2:g=m@]13]4E]");
}
$p = $c_jl_Character$.prototype = new $h_O();
$p.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
}
$h_jl_Character$.prototype = $p;
$p.pc = (function(codePoint) {
  if (((codePoint >>> 0) > 1114111)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return String.fromCodePoint(codePoint);
});
$p.nd = (function(codePoint, radix) {
  if ((codePoint < 256)) {
    var value = (((((codePoint - 48) | 0) >>> 0) <= 9) ? ((codePoint - 48) | 0) : (((((codePoint - 65) | 0) >>> 0) <= 25) ? ((codePoint - 55) | 0) : (((((codePoint - 97) | 0) >>> 0) <= 25) ? ((codePoint - 87) | 0) : (-1))));
  } else if (((((codePoint - 65313) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65303) | 0);
  } else if (((((codePoint - 65345) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65335) | 0);
  } else {
    var p = $m_ju_Arrays$().n3(this.hZ, codePoint);
    var zeroCodePointIndex = ((p < 0) ? (((-2) - p) | 0) : p);
    if ((zeroCodePointIndex < 0)) {
      var value = (-1);
    } else {
      var v = ((codePoint - this.hZ.f[zeroCodePointIndex]) | 0);
      var value = ((v > 9) ? (-1) : v);
    }
  }
  return ((value < radix) ? value : (-1));
});
var $d_jl_Character$ = new $TypeData().i($c_jl_Character$, "java.lang.Character$", ({
  aU: 1,
  a: 1
}));
var $n_jl_Character$;
function $m_jl_Character$() {
  if ((!$n_jl_Character$)) {
    $n_jl_Character$ = new $c_jl_Character$();
  }
  return $n_jl_Character$;
}
/** @constructor */
function $c_jl_Integer$() {
}
$p = $c_jl_Integer$.prototype = new $h_O();
$p.constructor = $c_jl_Integer$;
/** @constructor */
function $h_jl_Integer$() {
}
$h_jl_Integer$.prototype = $p;
$p.ha = (function(s) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s) + "\""));
});
$p.nL = (function(s, radix, overflowBarrier) {
  if ((s === null)) {
    $m_jl_Integer$().ha(s);
  }
  var len = s.length;
  if ((len === 0)) {
    $m_jl_Integer$().ha(s);
  }
  var character = $m_jl_Character$();
  var firstChar = s.charCodeAt(0);
  var negative = (firstChar === 45);
  var sign = (negative ? (-1) : 0);
  var i = ((negative || (firstChar === 43)) | 0);
  if ((i >= len)) {
    $m_jl_Integer$().ha(s);
  }
  var java$lang$IntFloatBits$Int32Box$$value = 0;
  java$lang$IntFloatBits$Int32Box$$value = 0;
  while ((i !== len)) {
    var x = character.nd(s.charCodeAt(i), radix);
    if (((x < 0) || ((java$lang$IntFloatBits$Int32Box$$value >>> 0) > (overflowBarrier >>> 0)))) {
      $m_jl_Integer$().ha(s);
    }
    var x$2 = java$lang$IntFloatBits$Int32Box$$value;
    var x$3 = Math.imul(x$2, radix);
    var v = ((x$3 + x) | 0);
    java$lang$IntFloatBits$Int32Box$$value = v;
    i = ((1 + i) | 0);
  }
  if (((java$lang$IntFloatBits$Int32Box$$value >>> 0) > (((2147483647 - sign) | 0) >>> 0))) {
    $m_jl_Integer$().ha(s);
  }
  return (((java$lang$IntFloatBits$Int32Box$$value ^ sign) - sign) | 0);
});
var $d_jl_Integer$ = new $TypeData().i($c_jl_Integer$, "java.lang.Integer$", ({
  b0: 1,
  a: 1
}));
var $n_jl_Integer$;
function $m_jl_Integer$() {
  if ((!$n_jl_Integer$)) {
    $n_jl_Integer$ = new $c_jl_Integer$();
  }
  return $n_jl_Integer$;
}
/** @constructor */
function $c_jl_Number() {
}
$p = $c_jl_Number.prototype = new $h_O();
$p.constructor = $c_jl_Number;
/** @constructor */
function $h_jl_Number() {
}
$h_jl_Number.prototype = $p;
function $is_jl_Number(obj) {
  return (((obj instanceof $c_jl_Number) || ((typeof obj) === "number")) || (obj instanceof $Long));
}
function $isArrayOf_jl_Number(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.m)));
}
function $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace) {
  $thiz.jw = s;
  if (writableStackTrace) {
    $thiz.nq();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.jw = null;
  }
  hP() {
    return this.jw;
  }
  nq() {
    var reference = ((this instanceof $c_sjs_js_JavaScriptException) ? this.aF : this);
    if ((Object.prototype.toString.call(reference) !== "[object Error]")) {
      if (((Error.captureStackTrace === (void 0)) || (!(!Object.isSealed(this))))) {
        new Error();
      } else {
        Error.captureStackTrace(this);
      }
    }
    return this;
  }
  p() {
    var className = $objectClassName(this);
    var message = this.hP();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  z() {
    return $c_O.prototype.z.call(this);
  }
  s(that) {
    return $c_O.prototype.s.call(this, that);
  }
  get "message"() {
    var m = this.hP();
    return ((m === null) ? "" : m);
  }
  get "name"() {
    return $objectClassName(this);
  }
  "toString"() {
    return this.p();
  }
}
function $isArrayOf_jl_Throwable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.f)));
}
/** @constructor */
function $c_s_Conversion() {
}
$p = $c_s_Conversion.prototype = new $h_O();
$p.constructor = $c_s_Conversion;
/** @constructor */
function $h_s_Conversion() {
}
$h_s_Conversion.prototype = $p;
$p.p = (function() {
  return "<function1>";
});
/** @constructor */
function $c_s_LowPriorityImplicits() {
}
$p = $c_s_LowPriorityImplicits.prototype = new $h_s_LowPriorityImplicits2();
$p.constructor = $c_s_LowPriorityImplicits;
/** @constructor */
function $h_s_LowPriorityImplicits() {
}
$h_s_LowPriorityImplicits.prototype = $p;
$p.pj = (function(xs) {
  if ((xs === null)) {
    return null;
  } else if ((xs.f.length === 0)) {
    var this$2 = $m_scm_ArraySeq$();
    $m_s_reflect_ManifestFactory$ObjectManifest$();
    return this$2.jI;
  } else {
    return new $c_scm_ArraySeq$ofRef(xs);
  }
});
/** @constructor */
function $c_sr_AbstractFunction0() {
}
$p = $c_sr_AbstractFunction0.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction0;
/** @constructor */
function $h_sr_AbstractFunction0() {
}
$h_sr_AbstractFunction0.prototype = $p;
$p.p = (function() {
  return "<function0>";
});
/** @constructor */
function $c_sr_AbstractFunction1() {
}
$p = $c_sr_AbstractFunction1.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction1;
/** @constructor */
function $h_sr_AbstractFunction1() {
}
$h_sr_AbstractFunction1.prototype = $p;
$p.p = (function() {
  return "<function1>";
});
/** @constructor */
function $c_sr_AbstractFunction2() {
}
$p = $c_sr_AbstractFunction2.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction2;
/** @constructor */
function $h_sr_AbstractFunction2() {
}
$h_sr_AbstractFunction2.prototype = $p;
$p.p = (function() {
  return "<function2>";
});
/** @constructor */
function $c_sr_AbstractFunction3() {
}
$p = $c_sr_AbstractFunction3.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction3;
/** @constructor */
function $h_sr_AbstractFunction3() {
}
$h_sr_AbstractFunction3.prototype = $p;
$p.p = (function() {
  return "<function3>";
});
/** @constructor */
function $c_sr_AbstractFunction4() {
}
$p = $c_sr_AbstractFunction4.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction4;
/** @constructor */
function $h_sr_AbstractFunction4() {
}
$h_sr_AbstractFunction4.prototype = $p;
$p.p = (function() {
  return "<function4>";
});
/** @constructor */
function $c_sr_AbstractFunction5() {
}
$p = $c_sr_AbstractFunction5.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction5;
/** @constructor */
function $h_sr_AbstractFunction5() {
}
$h_sr_AbstractFunction5.prototype = $p;
$p.p = (function() {
  return "<function5>";
});
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.fM = 0;
  this.jS = 0;
  this.mH = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.fM = $f_T__hashCode__I("Seq");
  this.jS = $f_T__hashCode__I("Map");
  $f_T__hashCode__I("Set");
  this.mH = this.pe($m_sci_Nil$(), this.jS);
}
$p = $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$p.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $p;
$p.mA = (function(xs) {
  return ($is_sc_IndexedSeq(xs) ? this.nF(xs, this.fM) : ((xs instanceof $c_sci_List) ? this.nO(xs, this.fM) : this.ow(xs, this.fM)));
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().i($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  d2: 1,
  d1: 1
}));
var $n_s_util_hashing_MurmurHash3$;
function $m_s_util_hashing_MurmurHash3$() {
  if ((!$n_s_util_hashing_MurmurHash3$)) {
    $n_s_util_hashing_MurmurHash3$ = new $c_s_util_hashing_MurmurHash3$();
  }
  return $n_s_util_hashing_MurmurHash3$;
}
/** @constructor */
function $c_Lsketchlib_utils_bloom_Bloom$$anon$1(bloomP$1, resultP$1, p$1, uBlurRadius$1, uIntensity$1) {
  this.jU = null;
  this.jT = null;
  this.jV = null;
  this.jW = null;
  this.jU = p$1;
  this.jT = bloomP$1;
  this.jV = resultP$1;
  this.jW = resultP$1;
}
$p = $c_Lsketchlib_utils_bloom_Bloom$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_bloom_Bloom$$anon$1;
/** @constructor */
function $h_Lsketchlib_utils_bloom_Bloom$$anon$1() {
}
$h_Lsketchlib_utils_bloom_Bloom$$anon$1.prototype = $p;
$p.oy = (function() {
  var Painter_this = this.jU;
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.jT);
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.jV);
});
var $d_Lsketchlib_utils_bloom_Bloom$$anon$1 = new $TypeData().i($c_Lsketchlib_utils_bloom_Bloom$$anon$1, "sketchlib.utils.bloom.Bloom$$anon$1", ({
  d6: 1,
  d4: 1
}));
function $p_Lsketchlib_utils_mirror_MirrorReflection$$anon$1__applySizing__V($thiz) {
  if (($thiz.f4 > 0.0)) {
    var sigma = ((0.01 * $thiz.jY) * $thiz.hl);
    var vRatio = (1.0 + ($thiz.jZ * $m_Lsketchlib_utils_mirror_MirrorReflection$().i2));
    var p$proxy3 = ($thiz.i5 * sigma);
    var p$proxy4 = (+Math.ceil(p$proxy3));
    var other$proxy4 = (0.5 * $thiz.gk);
    var mx = (+Math.min(p$proxy4, other$proxy4));
    var p$proxy5 = (($thiz.i5 * sigma) * vRatio);
    var p$proxy6 = (+Math.ceil(p$proxy5));
    var other$proxy5 = (0.5 * $thiz.f4);
    var my = (+Math.min(p$proxy6, other$proxy5));
    var pw = $doubleToInt(($thiz.gk + (2.0 * mx)));
    var ph = $doubleToInt(($thiz.f4 + (2.0 * my)));
    $thiz.i4.ji(pw, ph, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0));
    $thiz.i3.ji(pw, ph, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0));
    var BufferBinding_this = $thiz.k6;
    var value$proxy10 = $thiz.hl;
    BufferBinding_this.F.B(BufferBinding_this.j, value$proxy10);
    var $x_3 = BufferBinding_this.E.queue;
    var $x_2 = BufferBinding_this.C;
    var s$proxy6 = BufferBinding_this.j;
    var $x_1 = s$proxy6.dv.buffer;
    $x_3.writeBuffer($x_2, 0.0, $x_1);
    $thiz.hj = ($thiz.gk / pw);
    $thiz.hk = ($thiz.f4 / ph);
    var BufferBinding_this$3 = $thiz.k4;
    var value$proxy11 = new $c_Ltrivalibs_graphics_math_cpu_Vec4($thiz.hj, $thiz.hk, (mx / pw), (my / ph));
    BufferBinding_this$3.F.B(BufferBinding_this$3.j, value$proxy11);
    var $x_6 = BufferBinding_this$3.E.queue;
    var $x_5 = BufferBinding_this$3.C;
    var s$proxy7 = BufferBinding_this$3.j;
    var $x_4 = s$proxy7.dv.buffer;
    $x_6.writeBuffer($x_5, 0.0, $x_4);
  }
}
function $p_Lsketchlib_utils_mirror_MirrorReflection$$anon$1__deriveRefH__V($thiz) {
  var $x_2 = $thiz.f4;
  var $x_1 = $thiz.hi.b6;
  var this$1 = $thiz.hi;
  $thiz.hl = (($x_2 * $x_1) / $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().jp(this$1.b6, this$1.fg));
}
function $p_Lsketchlib_utils_mirror_MirrorReflection$$anon$1__default$proxy1$1__Ltrivalibs_graphics_math_cpu_Mat4($thiz) {
  var this$1 = $thiz.hi;
  return $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().fm(), this$1.hH, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), this$1.mE());
}
/** @constructor */
function $c_Lsketchlib_utils_mirror_MirrorReflection$$anon$1(mirrorPanel$1, resolvePanel$1, camera$1, blurStrength$1, stretch$1, overscan$1, _blurPanel$1, uVisHeight$1, uCrop$1, uBlurStrength$1, strengthScale$1, uStretch$1, reflMat$1, uVp$1, uInvVp$1, p$1) {
  this.i5 = 0.0;
  this.i4 = null;
  this.i3 = null;
  this.k6 = null;
  this.k4 = null;
  this.k1 = null;
  this.k7 = null;
  this.k5 = null;
  this.k0 = null;
  this.k2 = null;
  this.k3 = null;
  this.hi = null;
  this.gk = 0.0;
  this.f4 = 0.0;
  this.hl = 0.0;
  this.jY = 0.0;
  this.jZ = 0.0;
  this.hj = 0.0;
  this.hk = 0.0;
  this.i5 = overscan$1;
  this.i4 = mirrorPanel$1;
  this.i3 = _blurPanel$1;
  this.k6 = uVisHeight$1;
  this.k4 = uCrop$1;
  this.k1 = reflMat$1;
  this.k7 = uVp$1;
  this.k5 = uInvVp$1;
  this.k0 = p$1;
  this.k2 = resolvePanel$1;
  this.k3 = resolvePanel$1;
  this.hi = camera$1;
  this.gk = 0.0;
  this.f4 = 0.0;
  this.hl = 0.0;
  this.jY = blurStrength$1;
  this.jZ = stretch$1;
  this.hj = 1.0;
  this.hk = 1.0;
}
$p = $c_Lsketchlib_utils_mirror_MirrorReflection$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_mirror_MirrorReflection$$anon$1;
/** @constructor */
function $h_Lsketchlib_utils_mirror_MirrorReflection$$anon$1() {
}
$h_Lsketchlib_utils_mirror_MirrorReflection$$anon$1.prototype = $p;
$p.oQ = (function(w, h) {
  var x = $doubleToInt(w);
  this.gk = ((x > 1) ? x : 1);
  var x$1 = $doubleToInt(h);
  this.f4 = ((x$1 > 1) ? x$1 : 1);
  $p_Lsketchlib_utils_mirror_MirrorReflection$$anon$1__deriveRefH__V(this);
  $p_Lsketchlib_utils_mirror_MirrorReflection$$anon$1__applySizing__V(this);
});
$p.ox = (function(vp) {
  var cameraVP = ((vp === (void 0)) ? $p_Lsketchlib_utils_mirror_MirrorReflection$$anon$1__default$proxy1$1__Ltrivalibs_graphics_math_cpu_Mat4(this) : vp);
  var m$1 = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().fm(), new $c_Ltrivalibs_graphics_math_cpu_Mat4(this.hj, 0.0, 0.0, 0.0, 0.0, this.hk, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0), $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().fm(), cameraVP, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), this.k1));
  var BufferBinding_this = this.k7;
  BufferBinding_this.F.B(BufferBinding_this.j, m$1);
  var $x_3 = BufferBinding_this.E.queue;
  var $x_2 = BufferBinding_this.C;
  var s$proxy10 = BufferBinding_this.j;
  var $x_1 = s$proxy10.dv.buffer;
  $x_3.writeBuffer($x_2, 0.0, $x_1);
  var BufferBinding_this$3 = this.k5;
  var value$proxy13 = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().fm(), m$1, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
  BufferBinding_this$3.F.B(BufferBinding_this$3.j, value$proxy13);
  var $x_6 = BufferBinding_this$3.E.queue;
  var $x_5 = BufferBinding_this$3.C;
  var s$proxy11 = BufferBinding_this$3.j;
  var $x_4 = s$proxy11.dv.buffer;
  $x_6.writeBuffer($x_5, 0.0, $x_4);
  var Painter_this = this.k0;
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.i4);
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.i3);
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.k2);
});
var $d_Lsketchlib_utils_mirror_MirrorReflection$$anon$1 = new $TypeData().i($c_Lsketchlib_utils_mirror_MirrorReflection$$anon$1, "sketchlib.utils.mirror.MirrorReflection$$anon$1", ({
  d9: 1,
  d7: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT(uv) {
  this.as = null;
  this.as = uv;
}
$p = $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT() {
}
$h_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT.prototype = $p;
var $d_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT, "trivalibs.graphics.buffers.UniformLayout$given_UniformLayout_T", ({
  de: 1,
  dd: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$() {
}
$p = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$() {
}
$h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$.prototype = $p;
$p.pk = (function(ref, value) {
  var value$proxy1 = Math.fround(value);
  var offset$proxy3 = (ref.off | 0);
  ref.dv.setFloat32(offset$proxy3, value$proxy1, true);
});
$p.B = (function(ref, value) {
  this.pk(ref, (+value));
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Double_$times$colon$", ({
  df: 1,
  F: 1
}));
var $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$;
function $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$() {
  if ((!$n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$)) {
    $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$ = new $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
  }
  return $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$() {
}
$p = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$() {
}
$h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$.prototype = $p;
$p.B = (function(ref, value) {
  $f_Ltrivalibs_graphics_math_Mat4MutableOps__set__O__Ltrivalibs_graphics_math_Mat4Mutable__O__Ltrivalibs_graphics_math_Mat4Base__V($m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$().nB(), ref, $m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$(), value, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Mat4_Mat4Buffer$", ({
  dg: 1,
  F: 1
}));
var $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$;
function $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$() {
  if ((!$n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$)) {
    $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$ = new $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
  }
  return $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$() {
}
$p = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$() {
}
$h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$.prototype = $p;
$p.pl = (function(ref, value) {
  var value$proxy2 = value.x;
  var value$proxy3 = Math.fround(value$proxy2);
  var offset$proxy5 = (ref.off | 0);
  ref.dv.setFloat32(offset$proxy5, value$proxy3, true);
  var value$proxy4 = value.v;
  var value$proxy5 = Math.fround(value$proxy4);
  var offset$proxy6 = ((4 + (ref.off | 0)) | 0);
  ref.dv.setFloat32(offset$proxy6, value$proxy5, true);
  var value$proxy6 = value.y;
  var value$proxy7 = Math.fround(value$proxy6);
  var offset$proxy7 = ((8 + (ref.off | 0)) | 0);
  ref.dv.setFloat32(offset$proxy7, value$proxy7, true);
});
$p.B = (function(ref, value) {
  this.pl(ref, value);
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Vec3_Vec4Buffer$", ({
  dh: 1,
  F: 1
}));
var $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$;
function $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$() {
  if ((!$n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$)) {
    $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$ = new $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$();
  }
  return $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$() {
}
$p = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$() {
}
$h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$.prototype = $p;
$p.B = (function(ref, value) {
  $f_Ltrivalibs_graphics_math_Vec4MutableOps__set__O__Ltrivalibs_graphics_math_Vec4Mutable__O__Ltrivalibs_graphics_math_Vec4Base__V($m_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$().pg(), ref, $m_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$(), value, $m_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$());
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Vec4_Vec4Buffer$", ({
  di: 1,
  F: 1
}));
var $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$;
function $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$() {
  if ((!$n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$)) {
    $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$ = new $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$();
  }
  return $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$() {
}
$p = $c_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$() {
}
$h_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$.prototype = $p;
$p.gc = (function(t) {
  return new $c_T2(t.ir, t.is);
});
var $d_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$, "trivalibs.graphics.geometry.FieldWriter$vec2Writer$", ({
  dn: 1,
  aH: 1
}));
var $n_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$;
function $m_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$() {
  if ((!$n_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$)) {
    $n_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$ = new $c_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$();
  }
  return $n_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$() {
}
$p = $c_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$() {
}
$h_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$.prototype = $p;
$p.gc = (function(t) {
  return new $c_T3(t.x, t.v, t.y);
});
var $d_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$, "trivalibs.graphics.geometry.FieldWriter$vec3Writer$", ({
  dp: 1,
  aH: 1
}));
var $n_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$;
function $m_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$() {
  if ((!$n_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$)) {
    $n_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$ = new $c_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$();
  }
  return $n_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexLayout$named(x$1) {
  this.ka = null;
  this.ka = x$1;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexLayout$named.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexLayout$named;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexLayout$named() {
}
$h_Ltrivalibs_graphics_geometry_VertexLayout$named.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_VertexLayout$named = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayout$named, "trivalibs.graphics.geometry.VertexLayout$named", ({
  dx: 1,
  dw: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons(x$1, x$2) {
  this.kb = null;
  this.kc = null;
  this.kb = x$1;
  this.kc = x$2;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons() {
}
$h_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons.prototype = $p;
$p.pf = (function(t) {
  return $m_sr_Tuples$().n9(this.kb.gc(t.t(0)), this.kc.gc($m_sr_Tuples$().p7(t)));
});
$p.gc = (function(t) {
  return this.pf(t);
});
var $d_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons, "trivalibs.graphics.geometry.VertexLayoutHelper$cons", ({
  dy: 1,
  aI: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$() {
}
$p = $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$() {
}
$h_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$.prototype = $p;
$p.gc = (function(t) {
  return $m_T$package$EmptyTuple$();
});
var $d_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$, "trivalibs.graphics.geometry.VertexLayoutHelper$nil$", ({
  dz: 1,
  aI: 1
}));
var $n_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$;
function $m_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$() {
  if ((!$n_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$)) {
    $n_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$ = new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$();
  }
  return $n_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_package$package$$anon$1(idx$2) {
  this.ke = 0;
  this.ke = idx$2;
}
$p = $c_Ltrivalibs_graphics_geometry_package$package$$anon$1.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_package$package$$anon$1;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_package$package$$anon$1() {
}
$h_Ltrivalibs_graphics_geometry_package$package$$anon$1.prototype = $p;
$p.mw = (function(t) {
  return t.t(this.ke);
});
var $d_Ltrivalibs_graphics_geometry_package$package$$anon$1 = new $TypeData().i($c_Ltrivalibs_graphics_geometry_package$package$$anon$1, "trivalibs.graphics.geometry.package$package$$anon$1", ({
  dE: 1,
  du: 1
}));
function $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D($thiz, v, other) {
  return (((v.x * other.x) + (v.v * other.v)) + (v.y * other.y));
}
function $f_Ltrivalibs_graphics_math_Vec3Base__length__O__D($thiz, v) {
  var p$proxy1 = $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D($thiz, v, v);
  return (+Math.sqrt(p$proxy1));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat4$() {
  this.kf = null;
  this.kg = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat4$() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat4$.prototype = $p;
$p.fm = (function() {
  if ((!this.kg)) {
    this.kf = $m_Ltrivalibs_graphics_math_cpu_Mat4$();
    this.kg = true;
  }
  return this.kf;
});
$p.ny = (function(t, r, s) {
  var x = r.hq;
  var y = r.hr;
  var z = r.hs;
  var w = r.hp;
  var x2 = (x + x);
  var y2 = (y + y);
  var z2 = (z + z);
  var xx = (x * x2);
  var xy = (x * y2);
  var xz = (x * z2);
  var yy = (y * y2);
  var yz = (y * z2);
  var zz = (z * z2);
  var wx = (w * x2);
  var wy = (w * y2);
  var wz = (w * z2);
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4(((1.0 - (yy + zz)) * s.x), ((xy + wz) * s.x), ((xz - wy) * s.x), 0.0, ((xy - wz) * s.v), ((1.0 - (xx + zz)) * s.v), ((yz + wx) * s.v), 0.0, ((xz + wy) * s.y), ((yz - wx) * s.y), ((1.0 - (xx + yy)) * s.y), 0.0, t.x, t.v, t.y, 1.0);
});
var $d_Ltrivalibs_graphics_math_cpu_Mat4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4$, "trivalibs.graphics.math.cpu.Mat4$", ({
  dS: 1,
  dG: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Mat4$;
function $m_Ltrivalibs_graphics_math_cpu_Mat4$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Mat4$)) {
    $n_Ltrivalibs_graphics_math_cpu_Mat4$ = new $c_Ltrivalibs_graphics_math_cpu_Mat4$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Mat4$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$() {
}
$h_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$, "trivalibs.graphics.math.cpu.Quat$given_QuatImmutableOps_Quat$", ({
  dW: 1,
  dY: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$;
function $m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$)) {
    $n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$ = new $c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec3$() {
  this.kh = null;
  this.ki = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec3$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec3$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec3$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec3$.prototype = $p;
$p.T = (function() {
  if ((!this.ki)) {
    this.kh = $m_Ltrivalibs_graphics_math_cpu_Vec3$();
    this.ki = true;
  }
  return this.kh;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3$, "trivalibs.graphics.math.cpu.Vec3$", ({
  e1: 1,
  dM: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Vec3$;
function $m_Ltrivalibs_graphics_math_cpu_Vec3$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Vec3$)) {
    $n_Ltrivalibs_graphics_math_cpu_Vec3$ = new $c_Ltrivalibs_graphics_math_cpu_Vec3$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Vec3$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18() {
}
$h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18, "trivalibs.graphics.math.cpu.mat4$package$Mat4Buffer$$anon$18", ({
  e6: 1,
  dI: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$8() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$8.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$8;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$8() {
}
$h_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$8.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$8 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$8, "trivalibs.graphics.math.cpu.vec4$package$Vec4Buffer$$anon$8", ({
  e9: 1,
  dQ: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$13(f$2) {
  this.kn = null;
  this.kn = f$2;
}
$p = $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$13.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$13;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$13() {
}
$h_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$13.prototype = $p;
$p.aY = (function(s) {
  return this.kn.h(s);
});
var $d_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$13 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$13, "trivalibs.graphics.math.gpu.LeftScalar$$anon$13", ({
  ed: 1,
  eb: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_LetExpr(name) {
  this.e = null;
  this.ko = null;
  this.ko = name;
  $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(this, name);
}
$p = $c_Ltrivalibs_graphics_math_gpu_LetExpr.prototype = new $h_Ltrivalibs_graphics_math_gpu_Expr();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_LetExpr;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_LetExpr() {
}
$h_Ltrivalibs_graphics_math_gpu_LetExpr.prototype = $p;
$p.w = (function(value) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return (((("  let " + this.ko) + " = ") + value.e) + ";");
});
var $d_Ltrivalibs_graphics_math_gpu_LetExpr = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_LetExpr, "trivalibs.graphics.math.gpu.LetExpr", ({
  ee: 1,
  aM: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6.prototype = $p;
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6, "trivalibs.graphics.math.gpu.float_expr$package$$anon$6", ({
  el: 1,
  U: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$.prototype = $p;
$p.he = (function(m, x$2, v, x$4, x$5) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + m.e) + " * ") + v.e) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Mat4ImmutableOpsG_FloatExpr_Mat4Expr$", ({
  em: 1,
  dH: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$.prototype = $p;
$p.mO = (function(a) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("abs(" + a.e) + ")"));
});
$p.nv = (function(a) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("fract(" + a.e) + ")"));
});
$p.m9 = (function(a) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("log2(" + a.e) + ")"));
});
$p.mq = (function(a, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("min(" + a.e) + ", ") + other.e) + ")"));
});
$p.on = (function(a, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("max(" + a.e) + ", ") + other.e) + ")"));
});
$p.gO = (function(a) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("saturate(" + a.e) + ")"));
});
$p.m5 = (function(a) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(" + a.e) + " * 2.0 - 1.0)"));
});
$p.ns = (function(a) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(" + a.e) + " * 0.5 + 0.5)"));
});
$p.mB = (function(a, edge0, edge1) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("smoothstep(" + edge0.e) + ", ") + edge1.e) + ", ") + a.e) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$, "trivalibs.graphics.math.gpu.float_expr$package$given_NumExt_FloatExpr$", ({
  en: 1,
  fv: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$.prototype = $p;
$p.j2 = (function(a, b) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.e) + " + ") + b.e) + ")"));
});
$p.mM = (function(a, b) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.e) + " - ") + b.e) + ")"));
});
$p.gM = (function(a, b) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.e) + " * ") + b.e) + ")"));
});
$p.lN = (function(a, b) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.e) + " / ") + b.e) + ")"));
});
$p.fl = (function(a, b) {
  return this.mM(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o().h(b));
});
$p.Z = (function(a, b) {
  return this.gM(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o().h(b));
});
$p.j1 = (function(a, b) {
  return this.lN(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o().h(b));
});
$p.np = (function(a, v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.e) + " * ") + v.e) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$, "trivalibs.graphics.math.gpu.float_expr$package$given_NumOps_FloatExpr$", ({
  eo: 1,
  fw: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$.prototype = $p;
$p.bm = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.e + ".x"));
});
$p.ge = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.e + ".y"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec2BaseG_FloatExpr_Vec2Expr$", ({
  ep: 1,
  dJ: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$.prototype = $p;
$p.mR = (function(v, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.e) + " + ") + other.e) + ")"));
});
$p.jk = (function(v, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.e) + " - ") + other.e) + ")"));
});
$p.os = (function(v, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.e) + " * ") + other.e) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec2ImmutableOpsG_FloatExpr_Vec2Expr$", ({
  eq: 1,
  dK: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$.prototype = $p;
$p.ng = (function(v, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("dot(" + v.e) + ", ") + other.e) + ")"));
});
$p.nN = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("length(" + v.e) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec3BaseG_FloatExpr_Vec3Expr$", ({
  er: 1,
  aL: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$.prototype = $p;
$p.j4 = (function(v, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.e) + " + ") + other.e) + ")"));
});
$p.jl = (function(v, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.e) + " - ") + other.e) + ")"));
});
$p.bl = (function(v, x$2, scalar) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.e) + " * ") + scalar.e) + ")"));
});
$p.lO = (function(v, x$2, scalar) {
  return this.bl(v, x$2, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o().h(scalar));
});
$p.m2 = (function(v, x$2, scalar) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.e) + " / ") + scalar.e) + ")"));
});
$p.no = (function(v, x$2) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("exp(" + v.e) + ")"));
});
$p.op = (function(v, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("min(" + v.e) + ", ") + other.e) + ")"));
});
$p.oq = (function(v, x$2, b, t) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("mix(" + v.e) + ", ") + b.e) + ", ") + t.e) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec3ImmutableOpsG_FloatExpr_Vec3Expr$", ({
  es: 1,
  dN: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$.prototype = $p;
$p.bm = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.e + ".x"));
});
$p.ge = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.e + ".y"));
});
$p.ps = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.e + ".z"));
});
$p.hX = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.e + ".w"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec4BaseG_FloatExpr_Vec4Expr$", ({
  et: 1,
  G: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$.prototype = $p;
$p.hN = (function(v, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.e) + " + ") + other.e) + ")"));
});
$p.mt = (function(v, x$2, scalar) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.e) + " * ") + scalar.e) + ")"));
});
$p.hM = (function(v, x$2, scalar) {
  return this.mt(v, x$2, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o().h(scalar));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec4ImmutableOpsG_FloatExpr_Vec4Expr$", ({
  eu: 1,
  dP: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Layer(painter, shade) {
  this.gq = null;
  this.r = null;
  this.iy = null;
  this.hv = 0;
  this.gp = 0;
  this.i = null;
  this.H = null;
  this.G = null;
  this.iz = null;
  this.gq = painter;
  this.r = shade;
  this.iy = null;
  this.hv = (-1);
  this.gp = (-1);
  this.i = [];
  this.H = [];
  this.G = null;
  this.iz = new $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter);
}
$p = $c_Ltrivalibs_graphics_painter_Layer.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Layer;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Layer() {
}
$h_Ltrivalibs_graphics_painter_Layer.prototype = $p;
$p.lS = (function() {
  return ((this.r.hE !== null) && (((this.H.length | 0) === 0) || (this.H[0] === null)));
});
$p.oV = (function(blendState, mipSource, mipTarget) {
  if ((blendState !== (void 0))) {
    this.iy = blendState;
  }
  if ((mipSource !== (void 0))) {
    var v = (mipSource | 0);
    this.hv = v;
  }
  if ((mipTarget !== (void 0))) {
    var v$1 = (mipTarget | 0);
    this.gp = v$1;
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Layer = new $TypeData().i($c_Ltrivalibs_graphics_painter_Layer, "trivalibs.graphics.painter.Layer", ({
  eE: 1,
  aN: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Shape(painter, form, shade) {
  this.g1 = null;
  this.gA = null;
  this.N = null;
  this.iH = null;
  this.iG = null;
  this.n = null;
  this.X = null;
  this.iI = null;
  this.g1 = painter;
  this.gA = form;
  this.N = shade;
  this.iH = "none";
  this.iG = null;
  this.n = [];
  this.X = [];
  this.iI = new $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter);
}
$p = $c_Ltrivalibs_graphics_painter_Shape.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Shape;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Shape() {
}
$h_Ltrivalibs_graphics_painter_Shape.prototype = $p;
$p.oW = (function(cullMode, blendState) {
  if ((cullMode !== (void 0))) {
    this.iH = cullMode;
  }
  if ((blendState !== (void 0))) {
    this.iG = blendState;
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Shape = new $TypeData().i($c_Ltrivalibs_graphics_painter_Shape, "trivalibs.graphics.painter.Shape", ({
  eK: 1,
  aN: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform(inner) {
  this.J = null;
  this.J = inner;
}
$p = $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform() {
}
$h_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform.prototype = $p;
$p.u = (function() {
  return this.J.u();
});
var $d_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform = new $TypeData().i($c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform, "trivalibs.graphics.shader.FragmentUniform$given_WGSLType_FragmentUniform", ({
  eS: 1,
  u: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform(inner) {
  this.gC = null;
  this.gC = inner;
}
$p = $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform() {
}
$h_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform.prototype = $p;
$p.u = (function() {
  return this.gC.u();
});
var $d_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform = new $TypeData().i($c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform, "trivalibs.graphics.shader.VertexUniform$given_WGSLType_VertexUniform", ({
  eT: 1,
  u: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor(prefix) {
  this.iP = null;
  this.iP = prefix;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor.prototype = $p;
$p.a3 = (function(name) {
  return new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget(((this.iP === "") ? name : ((this.iP + ".") + name)));
});
var $d_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor, "trivalibs.graphics.shader.dsl.TypedAssignAccessor", ({
  f1: 1,
  D: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(prefix) {
  this.iQ = null;
  this.iQ = prefix;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor.prototype = $p;
$p.k = (function(name) {
  return ((this.iQ === "") ? $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), name) : $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), ((this.iQ + ".") + name)));
});
var $d_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor, "trivalibs.graphics.shader.dsl.TypedExprAccessor", ({
  f2: 1,
  D: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor() {
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor, "trivalibs.graphics.shader.dsl.TypedPanelAccessor", ({
  f3: 1,
  D: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_VertexOut(prefix) {
  this.kV = null;
  this.gD = null;
  this.kV = prefix;
  this.gD = new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget((prefix + ".position"));
}
$p = $c_Ltrivalibs_graphics_shader_dsl_VertexOut.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_VertexOut;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_VertexOut() {
}
$h_Ltrivalibs_graphics_shader_dsl_VertexOut.prototype = $p;
$p.a3 = (function(name) {
  return new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget(((this.kV + ".") + name));
});
var $d_Ltrivalibs_graphics_shader_dsl_VertexOut = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_VertexOut, "trivalibs.graphics.shader.dsl.VertexOut", ({
  f5: 1,
  D: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$() {
}
$p = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$() {
}
$h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$.prototype = $p;
$p.u = (function() {
  return "f32";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$, "trivalibs.graphics.shader.types$package$given_WGSLType_Float$", ({
  ff: 1,
  u: 1
}));
var $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$;
function $m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$() {
  if ((!$n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$)) {
    $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$ = new $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$();
  }
  return $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$() {
}
$p = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$() {
}
$h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$.prototype = $p;
$p.u = (function() {
  return "mat4x4<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$, "trivalibs.graphics.shader.types$package$given_WGSLType_Mat4$", ({
  fg: 1,
  u: 1
}));
var $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$;
function $m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$() {
  if ((!$n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$)) {
    $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$ = new $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$();
  }
  return $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$() {
}
$p = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$() {
}
$h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$.prototype = $p;
$p.u = (function() {
  return "sampler";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$, "trivalibs.graphics.shader.types$package$given_WGSLType_Sampler$", ({
  fh: 1,
  u: 1
}));
var $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$;
function $m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$() {
  if ((!$n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$)) {
    $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$ = new $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$();
  }
  return $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$() {
}
$p = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$() {
}
$h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$.prototype = $p;
$p.u = (function() {
  return "vec3<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$, "trivalibs.graphics.shader.types$package$given_WGSLType_Vec3$", ({
  fi: 1,
  u: 1
}));
var $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$;
function $m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$() {
  if ((!$n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$)) {
    $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$ = new $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$();
  }
  return $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$() {
}
$p = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$() {
}
$h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$.prototype = $p;
$p.u = (function() {
  return "vec4<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$, "trivalibs.graphics.shader.types$package$given_WGSLType_Vec4$", ({
  fj: 1,
  u: 1
}));
var $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$;
function $m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$() {
  if ((!$n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$)) {
    $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$ = new $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$();
  }
  return $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$;
}
/** @constructor */
function $c_jl_Class($data) {
  this.hY = $data;
}
$p = $c_jl_Class.prototype = new $h_O();
$p.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
}
$h_jl_Class.prototype = $p;
$p.p = (function() {
  return ((this.hY.Y ? "interface " : (this.hY.X ? "" : "class ")) + this.hY.N);
});
var $d_jl_Class = new $TypeData().i($c_jl_Class, "java.lang.Class", ({
  aV: 1,
  a: 1,
  g: 1
}));
class $c_jl_Error extends $c_jl_Throwable {
}
class $c_jl_Exception extends $c_jl_Throwable {
}
/** @constructor */
function $c_s_Predef$() {
  $n_s_Predef$ = this;
  $m_sci_List$();
}
$p = $c_s_Predef$.prototype = new $h_s_LowPriorityImplicits();
$p.constructor = $c_s_Predef$;
/** @constructor */
function $h_s_Predef$() {
}
$h_s_Predef$.prototype = $p;
var $d_s_Predef$ = new $TypeData().i($c_s_Predef$, "scala.Predef$", ({
  bo: 1,
  bl: 1,
  bm: 1
}));
var $n_s_Predef$;
function $m_s_Predef$() {
  if ((!$n_s_Predef$)) {
    $n_s_Predef$ = new $c_s_Predef$();
  }
  return $n_s_Predef$;
}
function $f_s_Product1__productElement__I__O($thiz, n) {
  if ((n === 0)) {
    return $thiz.fr;
  } else {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 0)"));
  }
}
function $f_s_Product10__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fs;
      break;
    }
    case 1: {
      return $thiz.bo;
      break;
    }
    case 2: {
      return $thiz.bp;
      break;
    }
    case 3: {
      return $thiz.bq;
      break;
    }
    case 4: {
      return $thiz.br;
      break;
    }
    case 5: {
      return $thiz.bs;
      break;
    }
    case 6: {
      return $thiz.bt;
      break;
    }
    case 7: {
      return $thiz.bu;
      break;
    }
    case 8: {
      return $thiz.bv;
      break;
    }
    case 9: {
      return $thiz.bn;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 9)"));
    }
  }
}
function $f_s_Product11__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.ft;
      break;
    }
    case 1: {
      return $thiz.by;
      break;
    }
    case 2: {
      return $thiz.bz;
      break;
    }
    case 3: {
      return $thiz.bA;
      break;
    }
    case 4: {
      return $thiz.bB;
      break;
    }
    case 5: {
      return $thiz.bC;
      break;
    }
    case 6: {
      return $thiz.bD;
      break;
    }
    case 7: {
      return $thiz.bE;
      break;
    }
    case 8: {
      return $thiz.bF;
      break;
    }
    case 9: {
      return $thiz.bw;
      break;
    }
    case 10: {
      return $thiz.bx;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 10)"));
    }
  }
}
function $f_s_Product12__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fu;
      break;
    }
    case 1: {
      return $thiz.bJ;
      break;
    }
    case 2: {
      return $thiz.bK;
      break;
    }
    case 3: {
      return $thiz.bL;
      break;
    }
    case 4: {
      return $thiz.bM;
      break;
    }
    case 5: {
      return $thiz.bN;
      break;
    }
    case 6: {
      return $thiz.bO;
      break;
    }
    case 7: {
      return $thiz.bP;
      break;
    }
    case 8: {
      return $thiz.bQ;
      break;
    }
    case 9: {
      return $thiz.bG;
      break;
    }
    case 10: {
      return $thiz.bH;
      break;
    }
    case 11: {
      return $thiz.bI;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 11)"));
    }
  }
}
function $f_s_Product13__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fv;
      break;
    }
    case 1: {
      return $thiz.bV;
      break;
    }
    case 2: {
      return $thiz.bW;
      break;
    }
    case 3: {
      return $thiz.bX;
      break;
    }
    case 4: {
      return $thiz.bY;
      break;
    }
    case 5: {
      return $thiz.bZ;
      break;
    }
    case 6: {
      return $thiz.c0;
      break;
    }
    case 7: {
      return $thiz.c1;
      break;
    }
    case 8: {
      return $thiz.c2;
      break;
    }
    case 9: {
      return $thiz.bR;
      break;
    }
    case 10: {
      return $thiz.bS;
      break;
    }
    case 11: {
      return $thiz.bT;
      break;
    }
    case 12: {
      return $thiz.bU;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 12)"));
    }
  }
}
function $f_s_Product14__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fw;
      break;
    }
    case 1: {
      return $thiz.c8;
      break;
    }
    case 2: {
      return $thiz.c9;
      break;
    }
    case 3: {
      return $thiz.ca;
      break;
    }
    case 4: {
      return $thiz.cb;
      break;
    }
    case 5: {
      return $thiz.cc;
      break;
    }
    case 6: {
      return $thiz.cd;
      break;
    }
    case 7: {
      return $thiz.ce;
      break;
    }
    case 8: {
      return $thiz.cf;
      break;
    }
    case 9: {
      return $thiz.c3;
      break;
    }
    case 10: {
      return $thiz.c4;
      break;
    }
    case 11: {
      return $thiz.c5;
      break;
    }
    case 12: {
      return $thiz.c6;
      break;
    }
    case 13: {
      return $thiz.c7;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 13)"));
    }
  }
}
function $f_s_Product15__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fx;
      break;
    }
    case 1: {
      return $thiz.cm;
      break;
    }
    case 2: {
      return $thiz.cn;
      break;
    }
    case 3: {
      return $thiz.co;
      break;
    }
    case 4: {
      return $thiz.cp;
      break;
    }
    case 5: {
      return $thiz.cq;
      break;
    }
    case 6: {
      return $thiz.cr;
      break;
    }
    case 7: {
      return $thiz.cs;
      break;
    }
    case 8: {
      return $thiz.ct;
      break;
    }
    case 9: {
      return $thiz.cg;
      break;
    }
    case 10: {
      return $thiz.ch;
      break;
    }
    case 11: {
      return $thiz.ci;
      break;
    }
    case 12: {
      return $thiz.cj;
      break;
    }
    case 13: {
      return $thiz.ck;
      break;
    }
    case 14: {
      return $thiz.cl;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 14)"));
    }
  }
}
function $f_s_Product16__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fy;
      break;
    }
    case 1: {
      return $thiz.cB;
      break;
    }
    case 2: {
      return $thiz.cC;
      break;
    }
    case 3: {
      return $thiz.cD;
      break;
    }
    case 4: {
      return $thiz.cE;
      break;
    }
    case 5: {
      return $thiz.cF;
      break;
    }
    case 6: {
      return $thiz.cG;
      break;
    }
    case 7: {
      return $thiz.cH;
      break;
    }
    case 8: {
      return $thiz.cI;
      break;
    }
    case 9: {
      return $thiz.cu;
      break;
    }
    case 10: {
      return $thiz.cv;
      break;
    }
    case 11: {
      return $thiz.cw;
      break;
    }
    case 12: {
      return $thiz.cx;
      break;
    }
    case 13: {
      return $thiz.cy;
      break;
    }
    case 14: {
      return $thiz.cz;
      break;
    }
    case 15: {
      return $thiz.cA;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 15)"));
    }
  }
}
function $f_s_Product17__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fz;
      break;
    }
    case 1: {
      return $thiz.cR;
      break;
    }
    case 2: {
      return $thiz.cS;
      break;
    }
    case 3: {
      return $thiz.cT;
      break;
    }
    case 4: {
      return $thiz.cU;
      break;
    }
    case 5: {
      return $thiz.cV;
      break;
    }
    case 6: {
      return $thiz.cW;
      break;
    }
    case 7: {
      return $thiz.cX;
      break;
    }
    case 8: {
      return $thiz.cY;
      break;
    }
    case 9: {
      return $thiz.cJ;
      break;
    }
    case 10: {
      return $thiz.cK;
      break;
    }
    case 11: {
      return $thiz.cL;
      break;
    }
    case 12: {
      return $thiz.cM;
      break;
    }
    case 13: {
      return $thiz.cN;
      break;
    }
    case 14: {
      return $thiz.cO;
      break;
    }
    case 15: {
      return $thiz.cP;
      break;
    }
    case 16: {
      return $thiz.cQ;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 16)"));
    }
  }
}
function $f_s_Product18__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fA;
      break;
    }
    case 1: {
      return $thiz.d8;
      break;
    }
    case 2: {
      return $thiz.d9;
      break;
    }
    case 3: {
      return $thiz.da;
      break;
    }
    case 4: {
      return $thiz.db;
      break;
    }
    case 5: {
      return $thiz.dc;
      break;
    }
    case 6: {
      return $thiz.dd;
      break;
    }
    case 7: {
      return $thiz.de;
      break;
    }
    case 8: {
      return $thiz.df;
      break;
    }
    case 9: {
      return $thiz.cZ;
      break;
    }
    case 10: {
      return $thiz.d0;
      break;
    }
    case 11: {
      return $thiz.d1;
      break;
    }
    case 12: {
      return $thiz.d2;
      break;
    }
    case 13: {
      return $thiz.d3;
      break;
    }
    case 14: {
      return $thiz.d4;
      break;
    }
    case 15: {
      return $thiz.d5;
      break;
    }
    case 16: {
      return $thiz.d6;
      break;
    }
    case 17: {
      return $thiz.d7;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 17)"));
    }
  }
}
function $f_s_Product19__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fB;
      break;
    }
    case 1: {
      return $thiz.dr;
      break;
    }
    case 2: {
      return $thiz.ds;
      break;
    }
    case 3: {
      return $thiz.dt;
      break;
    }
    case 4: {
      return $thiz.du;
      break;
    }
    case 5: {
      return $thiz.dv;
      break;
    }
    case 6: {
      return $thiz.dw;
      break;
    }
    case 7: {
      return $thiz.dx;
      break;
    }
    case 8: {
      return $thiz.dy;
      break;
    }
    case 9: {
      return $thiz.dg;
      break;
    }
    case 10: {
      return $thiz.dh;
      break;
    }
    case 11: {
      return $thiz.di;
      break;
    }
    case 12: {
      return $thiz.dj;
      break;
    }
    case 13: {
      return $thiz.dk;
      break;
    }
    case 14: {
      return $thiz.dl;
      break;
    }
    case 15: {
      return $thiz.dm;
      break;
    }
    case 16: {
      return $thiz.dn;
      break;
    }
    case 17: {
      return $thiz.dp;
      break;
    }
    case 18: {
      return $thiz.dq;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 18)"));
    }
  }
}
function $f_s_Product2__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.S;
      break;
    }
    case 1: {
      return $thiz.aq;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 1)"));
    }
  }
}
function $f_s_Product20__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fC;
      break;
    }
    case 1: {
      return $thiz.dJ;
      break;
    }
    case 2: {
      return $thiz.dL;
      break;
    }
    case 3: {
      return $thiz.dM;
      break;
    }
    case 4: {
      return $thiz.dN;
      break;
    }
    case 5: {
      return $thiz.dO;
      break;
    }
    case 6: {
      return $thiz.dP;
      break;
    }
    case 7: {
      return $thiz.dQ;
      break;
    }
    case 8: {
      return $thiz.dR;
      break;
    }
    case 9: {
      return $thiz.dz;
      break;
    }
    case 10: {
      return $thiz.dA;
      break;
    }
    case 11: {
      return $thiz.dB;
      break;
    }
    case 12: {
      return $thiz.dC;
      break;
    }
    case 13: {
      return $thiz.dD;
      break;
    }
    case 14: {
      return $thiz.dE;
      break;
    }
    case 15: {
      return $thiz.dF;
      break;
    }
    case 16: {
      return $thiz.dG;
      break;
    }
    case 17: {
      return $thiz.dH;
      break;
    }
    case 18: {
      return $thiz.dI;
      break;
    }
    case 19: {
      return $thiz.dK;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 19)"));
    }
  }
}
function $f_s_Product21__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fD;
      break;
    }
    case 1: {
      return $thiz.e2;
      break;
    }
    case 2: {
      return $thiz.e5;
      break;
    }
    case 3: {
      return $thiz.e6;
      break;
    }
    case 4: {
      return $thiz.e7;
      break;
    }
    case 5: {
      return $thiz.e8;
      break;
    }
    case 6: {
      return $thiz.e9;
      break;
    }
    case 7: {
      return $thiz.ea;
      break;
    }
    case 8: {
      return $thiz.eb;
      break;
    }
    case 9: {
      return $thiz.dS;
      break;
    }
    case 10: {
      return $thiz.dT;
      break;
    }
    case 11: {
      return $thiz.dU;
      break;
    }
    case 12: {
      return $thiz.dV;
      break;
    }
    case 13: {
      return $thiz.dW;
      break;
    }
    case 14: {
      return $thiz.dX;
      break;
    }
    case 15: {
      return $thiz.dY;
      break;
    }
    case 16: {
      return $thiz.dZ;
      break;
    }
    case 17: {
      return $thiz.e0;
      break;
    }
    case 18: {
      return $thiz.e1;
      break;
    }
    case 19: {
      return $thiz.e3;
      break;
    }
    case 20: {
      return $thiz.e4;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 20)"));
    }
  }
}
function $f_s_Product22__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fE;
      break;
    }
    case 1: {
      return $thiz.em;
      break;
    }
    case 2: {
      return $thiz.eq;
      break;
    }
    case 3: {
      return $thiz.er;
      break;
    }
    case 4: {
      return $thiz.es;
      break;
    }
    case 5: {
      return $thiz.et;
      break;
    }
    case 6: {
      return $thiz.eu;
      break;
    }
    case 7: {
      return $thiz.ev;
      break;
    }
    case 8: {
      return $thiz.ew;
      break;
    }
    case 9: {
      return $thiz.ec;
      break;
    }
    case 10: {
      return $thiz.ed;
      break;
    }
    case 11: {
      return $thiz.ee;
      break;
    }
    case 12: {
      return $thiz.ef;
      break;
    }
    case 13: {
      return $thiz.eg;
      break;
    }
    case 14: {
      return $thiz.eh;
      break;
    }
    case 15: {
      return $thiz.ei;
      break;
    }
    case 16: {
      return $thiz.ej;
      break;
    }
    case 17: {
      return $thiz.ek;
      break;
    }
    case 18: {
      return $thiz.el;
      break;
    }
    case 19: {
      return $thiz.en;
      break;
    }
    case 20: {
      return $thiz.eo;
      break;
    }
    case 21: {
      return $thiz.ep;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 21)"));
    }
  }
}
function $f_s_Product3__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.bd;
      break;
    }
    case 1: {
      return $thiz.aZ;
      break;
    }
    case 2: {
      return $thiz.b0;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 2)"));
    }
  }
}
function $f_s_Product4__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fF;
      break;
    }
    case 1: {
      return $thiz.ex;
      break;
    }
    case 2: {
      return $thiz.ey;
      break;
    }
    case 3: {
      return $thiz.ez;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 3)"));
    }
  }
}
function $f_s_Product5__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fG;
      break;
    }
    case 1: {
      return $thiz.eA;
      break;
    }
    case 2: {
      return $thiz.eB;
      break;
    }
    case 3: {
      return $thiz.eC;
      break;
    }
    case 4: {
      return $thiz.eD;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 4)"));
    }
  }
}
function $f_s_Product6__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fH;
      break;
    }
    case 1: {
      return $thiz.eE;
      break;
    }
    case 2: {
      return $thiz.eF;
      break;
    }
    case 3: {
      return $thiz.eG;
      break;
    }
    case 4: {
      return $thiz.eH;
      break;
    }
    case 5: {
      return $thiz.eI;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 5)"));
    }
  }
}
function $f_s_Product7__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fI;
      break;
    }
    case 1: {
      return $thiz.eJ;
      break;
    }
    case 2: {
      return $thiz.eK;
      break;
    }
    case 3: {
      return $thiz.eL;
      break;
    }
    case 4: {
      return $thiz.eM;
      break;
    }
    case 5: {
      return $thiz.eN;
      break;
    }
    case 6: {
      return $thiz.eO;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 6)"));
    }
  }
}
function $f_s_Product8__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fJ;
      break;
    }
    case 1: {
      return $thiz.eP;
      break;
    }
    case 2: {
      return $thiz.eQ;
      break;
    }
    case 3: {
      return $thiz.eR;
      break;
    }
    case 4: {
      return $thiz.eS;
      break;
    }
    case 5: {
      return $thiz.eT;
      break;
    }
    case 6: {
      return $thiz.eU;
      break;
    }
    case 7: {
      return $thiz.eV;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 7)"));
    }
  }
}
function $f_s_Product9__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fK;
      break;
    }
    case 1: {
      return $thiz.eW;
      break;
    }
    case 2: {
      return $thiz.eX;
      break;
    }
    case 3: {
      return $thiz.eY;
      break;
    }
    case 4: {
      return $thiz.eZ;
      break;
    }
    case 5: {
      return $thiz.f0;
      break;
    }
    case 6: {
      return $thiz.f1;
      break;
    }
    case 7: {
      return $thiz.f2;
      break;
    }
    case 8: {
      return $thiz.f3;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 8)"));
    }
  }
}
function $f_sc_Iterator__concat__F0__sc_Iterator($thiz, xs) {
  return new $c_sc_Iterator$ConcatIterator($thiz).n8(xs);
}
function $f_sc_Iterator__sliceIterator__I__I__sc_Iterator($thiz, from, until) {
  var lo = ((from > 0) ? from : 0);
  var rest = ((until < 0) ? (-1) : ((until <= lo) ? 0 : ((until - lo) | 0)));
  return ((rest === 0) ? $m_sc_Iterator$().b2 : new $c_sc_Iterator$SliceIterator($thiz, lo, rest));
}
function $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz, that) {
  var those = that.ac();
  while ($thiz.U()) {
    if ((!those.U())) {
      return false;
    }
    if ((!$m_sr_BoxesRunTime$().b($thiz.P(), those.P()))) {
      return false;
    }
  }
  return (!those.U());
}
/** @constructor */
function $c_sc_Iterator$() {
  this.b2 = null;
  $n_sc_Iterator$ = this;
  this.b2 = new $c_sc_Iterator$$anon$19();
}
$p = $c_sc_Iterator$.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
}
$h_sc_Iterator$.prototype = $p;
var $d_sc_Iterator$ = new $TypeData().i($c_sc_Iterator$, "scala.collection.Iterator$", ({
  bU: 1,
  a: 1,
  ar: 1
}));
var $n_sc_Iterator$;
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$();
  }
  return $n_sc_Iterator$;
}
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.co)));
}
/** @constructor */
function $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(f) {
  this.jJ = null;
  this.jJ = f;
}
$p = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = new $h_sr_AbstractFunction0();
$p.constructor = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c;
/** @constructor */
function $h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c() {
}
$h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = $p;
$p.gN = (function() {
  return (0, this.jJ)();
});
var $d_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c = new $TypeData().i($c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c, "scala.runtime.AbstractFunction0.$$Lambda$07eded5776954a9c145e92c329afd52873ad179c", ({
  cx: 1,
  cw: 1,
  bg: 1
}));
/** @constructor */
function $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(f) {
  this.jK = null;
  this.jK = f;
}
$p = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919;
/** @constructor */
function $h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919() {
}
$h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = $p;
$p.h = (function(x0) {
  return (0, this.jK)(x0);
});
var $d_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919 = new $TypeData().i($c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919, "scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919", ({
  cz: 1,
  cy: 1,
  k: 1
}));
/** @constructor */
function $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(f) {
  this.jL = null;
  this.jL = f;
}
$p = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = new $h_sr_AbstractFunction2();
$p.constructor = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8;
/** @constructor */
function $h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8() {
}
$h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = $p;
$p.lP = (function(x0, x1) {
  return (0, this.jL)(x0, x1);
});
var $d_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8 = new $TypeData().i($c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8, "scala.runtime.AbstractFunction2.$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8", ({
  cB: 1,
  cA: 1,
  bh: 1
}));
/** @constructor */
function $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(f) {
  this.jM = null;
  this.jM = f;
}
$p = $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825.prototype = new $h_sr_AbstractFunction3();
$p.constructor = $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825;
/** @constructor */
function $h_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825() {
}
$h_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825.prototype = $p;
$p.mX = (function(x0, x1, x2) {
  return (0, this.jM)(x0, x1, x2);
});
var $d_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825 = new $TypeData().i($c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825, "scala.runtime.AbstractFunction3.$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825", ({
  cD: 1,
  cC: 1,
  bi: 1
}));
/** @constructor */
function $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(f) {
  this.jN = null;
  this.jN = f;
}
$p = $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a.prototype = new $h_sr_AbstractFunction4();
$p.constructor = $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a;
/** @constructor */
function $h_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a() {
}
$h_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a.prototype = $p;
$p.mW = (function(x0, x1, x2, x3) {
  return (0, this.jN)(x0, x1, x2, x3);
});
var $d_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a = new $TypeData().i($c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a, "scala.runtime.AbstractFunction4.$$Lambda$451042f443265710aa66de6985cba67480d9b00a", ({
  cF: 1,
  cE: 1,
  bj: 1
}));
/** @constructor */
function $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078(f) {
  this.jO = null;
  this.jO = f;
}
$p = $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078.prototype = new $h_sr_AbstractFunction5();
$p.constructor = $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078;
/** @constructor */
function $h_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078() {
}
$h_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078.prototype = $p;
$p.mV = (function(x0, x1, x2, x3, x4) {
  return (0, this.jO)(x0, x1, x2, x3, x4);
});
var $d_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078 = new $TypeData().i($c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078, "scala.runtime.AbstractFunction5.$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078", ({
  cH: 1,
  cG: 1,
  bk: 1
}));
var $d_sr_Nothing$ = new $TypeData().i(0, "scala.runtime.Nothing$", ({
  cJ: 1,
  f: 1,
  a: 1
}));
/** @constructor */
function $c_sr_TupleXXL(es) {
  this.ae = null;
  this.ae = es;
  if ((es.f.length <= 22)) {
    $m_sr_Scala3RunTime$().n2();
  }
}
$p = $c_sr_TupleXXL.prototype = new $h_O();
$p.constructor = $c_sr_TupleXXL;
/** @constructor */
function $h_sr_TupleXXL() {
}
$h_sr_TupleXXL.prototype = $p;
$p.Q = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.t = (function(n) {
  return this.ae.f[n];
});
$p.I = (function() {
  return this.ae.f.length;
});
$p.L = (function() {
  return "Tuple";
});
$p.p = (function() {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($m_s_Predef$().pj(this.ae), "(", ",", ")");
});
$p.z = (function() {
  return $m_s_util_hashing_MurmurHash3$().n7(this, (-889275714), null);
});
$p.s = (function(that) {
  if ((that instanceof $c_sr_TupleXXL)) {
    if ((this.ae === that.ae)) {
      return true;
    } else {
      if ((this.ae.f.length !== that.ae.f.length)) {
        return false;
      }
      var i = 0;
      while ((i < this.ae.f.length)) {
        var $x_2 = $m_sr_BoxesRunTime$();
        var arr$3 = this.ae;
        var n = i;
        var $x_1 = arr$3.f[n];
        var arr$4 = that.ae;
        var n$1 = i;
        if ((!$x_2.b($x_1, arr$4.f[n$1]))) {
          return false;
        }
        i = ((1 + i) | 0);
      }
      return true;
    }
  } else {
    return false;
  }
});
function $isArrayOf_sr_TupleXXL(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aD)));
}
var $d_sr_TupleXXL = new $TypeData().i($c_sr_TupleXXL, "scala.runtime.TupleXXL", ({
  aD: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sjs_js_Any$() {
}
$p = $c_sjs_js_Any$.prototype = new $h_O();
$p.constructor = $c_sjs_js_Any$;
/** @constructor */
function $h_sjs_js_Any$() {
}
$h_sjs_js_Any$.prototype = $p;
$p.gR = (function(f) {
  return ((arg1$2) => f.h(arg1$2));
});
var $d_sjs_js_Any$ = new $TypeData().i($c_sjs_js_Any$, "scala.scalajs.js.Any$", ({
  cQ: 1,
  cU: 1,
  cV: 1
}));
var $n_sjs_js_Any$;
function $m_sjs_js_Any$() {
  if ((!$n_sjs_js_Any$)) {
    $n_sjs_js_Any$ = new $c_sjs_js_Any$();
  }
  return $n_sjs_js_Any$;
}
var $b_Ltrivalibs_bufferdata_BufferView;
function $a_Ltrivalibs_bufferdata_BufferView() {
  if ((!$b_Ltrivalibs_bufferdata_BufferView)) {
    $b_Ltrivalibs_bufferdata_BufferView = class $b_Ltrivalibs_bufferdata_BufferView extends Object {
      constructor(arg, arg$2) {
        var dv = null;
        var off = 0;
        dv = arg;
        off = (arg$2 | 0);
        super();
        Object.defineProperty(this, "dv", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        }));
        Object.defineProperty(this, "off", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": 0
        }));
        this.dv = dv;
        this.off = off;
      }
    };
  }
  return $b_Ltrivalibs_bufferdata_BufferView;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1.prototype = new $h_s_Conversion();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1.prototype = $p;
$p.h = (function(x) {
  return $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().pb((+x));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1, "trivalibs.graphics.math.gpu.float_expr$package$$anon$1", ({
  ej: 1,
  a1: 1,
  k: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3.prototype = new $h_s_Conversion();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3.prototype = $p;
$p.h = (function(x) {
  var v = (x | 0);
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("f32(" + v) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3, "trivalibs.graphics.math.gpu.float_expr$package$$anon$3", ({
  ek: 1,
  a1: 1,
  k: 1
}));
var $b_Ltrivalibs_graphics_painter_BlendFn;
function $a_Ltrivalibs_graphics_painter_BlendFn() {
  if ((!$b_Ltrivalibs_graphics_painter_BlendFn)) {
    $b_Ltrivalibs_graphics_painter_BlendFn = class $b_Ltrivalibs_graphics_painter_BlendFn extends Object {
      constructor(arg, arg$2, ...rest) {
        var srcFactor = null;
        var dstFactor = null;
        var operation = null;
        srcFactor = arg;
        dstFactor = arg$2;
        operation = ((rest[0] === (void 0)) ? "add" : rest[0]);
        super();
        Object.defineProperty(this, "srcFactor", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        }));
        Object.defineProperty(this, "dstFactor", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        }));
        Object.defineProperty(this, "operation", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        }));
        this.srcFactor = srcFactor;
        this.dstFactor = dstFactor;
        this.operation = operation;
      }
    };
  }
  return $b_Ltrivalibs_graphics_painter_BlendFn;
}
var $b_Ltrivalibs_graphics_painter_BlendState;
function $a_Ltrivalibs_graphics_painter_BlendState() {
  if ((!$b_Ltrivalibs_graphics_painter_BlendState)) {
    $b_Ltrivalibs_graphics_painter_BlendState = class $b_Ltrivalibs_graphics_painter_BlendState extends Object {
      constructor(arg, arg$2) {
        var color = null;
        var alpha = null;
        color = arg;
        alpha = arg$2;
        super();
        Object.defineProperty(this, "color", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        }));
        Object.defineProperty(this, "alpha", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        }));
        this.color = color;
        this.alpha = alpha;
      }
    };
  }
  return $b_Ltrivalibs_graphics_painter_BlendState;
}
var $b_Ltrivalibs_graphics_painter_PanelBinding;
function $a_Ltrivalibs_graphics_painter_PanelBinding() {
  if ((!$b_Ltrivalibs_graphics_painter_PanelBinding)) {
    $b_Ltrivalibs_graphics_painter_PanelBinding = class $b_Ltrivalibs_graphics_painter_PanelBinding extends Object {
      constructor(arg, ...rest) {
        var panel = null;
        var index = 0;
        var mipLevel = 0;
        var depth = false;
        panel = arg;
        index = ((rest[0] === (void 0)) ? 0 : (rest[0] | 0));
        mipLevel = ((rest[1] === (void 0)) ? (-1) : (rest[1] | 0));
        depth = ((rest[2] !== (void 0)) && (!(!rest[2])));
        super();
        Object.defineProperty(this, "panel", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        }));
        Object.defineProperty(this, "index", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": 0
        }));
        Object.defineProperty(this, "mipLevel", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": 0
        }));
        Object.defineProperty(this, "depth", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": false
        }));
        this.panel = panel;
        this.index = index;
        this.mipLevel = mipLevel;
        this.depth = depth;
      }
    };
  }
  return $b_Ltrivalibs_graphics_painter_PanelBinding;
}
var $b_Ltrivalibs_graphics_shader_dsl_WgslFnData;
function $a_Ltrivalibs_graphics_shader_dsl_WgslFnData() {
  if ((!$b_Ltrivalibs_graphics_shader_dsl_WgslFnData)) {
    $b_Ltrivalibs_graphics_shader_dsl_WgslFnData = class $b_Ltrivalibs_graphics_shader_dsl_WgslFnData extends Object {
      constructor(arg, arg$2, ...rest) {
        var name = null;
        var src = null;
        var deps = null;
        name = arg;
        src = arg$2;
        deps = ((rest[0] === (void 0)) ? $m_Ltrivalibs_graphics_shader_dsl_WgslFnData$().mL() : rest[0]);
        super();
        Object.defineProperty(this, "name", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        }));
        Object.defineProperty(this, "src", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        }));
        Object.defineProperty(this, "deps", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        }));
        this.name = name;
        this.src = src;
        this.deps = deps;
      }
    };
  }
  return $b_Ltrivalibs_graphics_shader_dsl_WgslFnData;
}
class $c_jl_AssertionError extends $c_jl_Error {
  constructor(detailMessage) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ("" + detailMessage), ((detailMessage instanceof $c_jl_Throwable) ? detailMessage : null), true, true);
  }
}
var $d_jl_AssertionError = new $TypeData().i($c_jl_AssertionError, "java.lang.AssertionError", ({
  aR: 1,
  aW: 1,
  f: 1,
  a: 1
}));
function $f_jl_Boolean__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_jl_Boolean__hashCode__I($thiz) {
  return ($thiz ? 1231 : 1237);
}
function $f_jl_Boolean__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Boolean = new $TypeData().i(0, "java.lang.Boolean", ({
  aS: 1,
  a: 1,
  h: 1,
  g: 1
}), ((x) => ((typeof x) === "boolean")));
function $f_jl_Character__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Character__equals__O__Z($thiz, that) {
  return ((that instanceof $Char) && ($thiz === that.c));
}
function $f_jl_Character__toString__T($thiz) {
  return ("" + $cToS($thiz));
}
function $isArrayOf_jl_Character(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.X)));
}
var $d_jl_Character = new $TypeData().i(0, "java.lang.Character", ({
  X: 1,
  a: 1,
  h: 1,
  g: 1
}), ((x) => (x instanceof $Char)));
class $c_jl_RuntimeException extends $c_jl_Exception {
}
/** @constructor */
function $c_jl_StringBuilder() {
  this.ad = null;
  this.ad = "";
}
$p = $c_jl_StringBuilder.prototype = new $h_O();
$p.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
}
$h_jl_StringBuilder.prototype = $p;
$p.p = (function() {
  return this.ad;
});
$p.R = (function() {
  return this.ad.length;
});
$p.lY = (function(index) {
  return this.ad.charCodeAt(index);
});
var $d_jl_StringBuilder = new $TypeData().i($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  b6: 1,
  H: 1,
  aP: 1,
  a: 1
}));
/** @constructor */
function $c_sc_AbstractIterator() {
}
$p = $c_sc_AbstractIterator.prototype = new $h_O();
$p.constructor = $c_sc_AbstractIterator;
/** @constructor */
function $h_sc_AbstractIterator() {
}
$h_sc_AbstractIterator.prototype = $p;
$p.am = (function() {
  return (-1);
});
$p.j3 = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.ac = (function() {
  return this;
});
$p.hO = (function(n) {
  return this.hV(n, (-1));
});
$p.hV = (function(from, until) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until);
});
$p.p = (function() {
  return "<iterator>";
});
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.fn(0) === 0);
}
function $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  var thisKnownSize = $thiz.am();
  if ((thisKnownSize !== (-1))) {
    var thatKnownSize = that.am();
    if ((thatKnownSize !== (-1))) {
      if ((thisKnownSize !== thatKnownSize)) {
        return false;
      }
      if ((thisKnownSize === 0)) {
        return true;
      }
    }
  }
  return $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz.ac(), that);
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$.prototype = $p;
$p.gU = (function(m) {
  return m.i9;
});
$p.gV = (function(m) {
  return m.ia;
});
$p.gW = (function(m) {
  return m.ib;
});
$p.gX = (function(m) {
  return m.ic;
});
$p.gY = (function(m) {
  return m.id;
});
$p.gZ = (function(m) {
  return m.ie;
});
$p.h0 = (function(m) {
  return m.ig;
});
$p.h1 = (function(m) {
  return m.ih;
});
$p.h2 = (function(m) {
  return m.ii;
});
$p.h3 = (function(m) {
  return m.ij;
});
$p.h4 = (function(m) {
  return m.ik;
});
$p.h5 = (function(m) {
  return m.il;
});
$p.h6 = (function(m) {
  return m.im;
});
$p.h7 = (function(m) {
  return m.io;
});
$p.h8 = (function(m) {
  return m.ip;
});
$p.h9 = (function(m) {
  return m.iq;
});
$p.ma = (function(m, v) {
  m.i9 = v;
});
$p.mb = (function(m, v) {
  m.ia = v;
});
$p.mc = (function(m, v) {
  m.ib = v;
});
$p.md = (function(m, v) {
  m.ic = v;
});
$p.me = (function(m, v) {
  m.id = v;
});
$p.mf = (function(m, v) {
  m.ie = v;
});
$p.mg = (function(m, v) {
  m.ig = v;
});
$p.mh = (function(m, v) {
  m.ih = v;
});
$p.mi = (function(m, v) {
  m.ii = v;
});
$p.mj = (function(m, v) {
  m.ij = v;
});
$p.mk = (function(m, v) {
  m.ik = v;
});
$p.ml = (function(m, v) {
  m.il = v;
});
$p.mm = (function(m, v) {
  m.im = v;
});
$p.mn = (function(m, v) {
  m.io = v;
});
$p.mo = (function(m, v) {
  m.ip = v;
});
$p.mp = (function(m, v) {
  m.iq = v;
});
var $d_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$, "trivalibs.graphics.math.cpu.Mat4$given_Mat4Mutable_Mat4$", ({
  dT: 1,
  U: 1,
  aJ: 1,
  aK: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$;
function $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$)) {
    $n_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$ = new $c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$() {
}
$h_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$.prototype = $p;
$p.aM = (function(v) {
  return v.hq;
});
$p.aN = (function(v) {
  return v.hr;
});
$p.aO = (function(v) {
  return v.hs;
});
$p.aL = (function(v) {
  return v.hp;
});
$p.js = (function(v, value) {
  v.hq = value;
});
$p.jt = (function(v, value) {
  v.hr = value;
});
$p.ju = (function(v, value) {
  v.hs = value;
});
$p.jr = (function(v, value) {
  v.hp = value;
});
var $d_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$, "trivalibs.graphics.math.cpu.Quat$given_Vec4Mutable_Quat$", ({
  dX: 1,
  G: 1,
  V: 1,
  W: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$;
function $m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$)) {
    $n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$ = new $c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$, "trivalibs.graphics.math.cpu.Vec3$given_Vec3Mutable_Vec3$", ({
  e2: 1,
  aL: 1,
  dL: 1,
  dO: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$;
function $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$)) {
    $n_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$ = new $c_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$.prototype = $p;
$p.aM = (function(v) {
  return v.fT;
});
$p.aN = (function(v) {
  return v.fU;
});
$p.aO = (function(v) {
  return v.fV;
});
$p.aL = (function(v) {
  return v.fS;
});
$p.js = (function(v, value) {
  v.fT = value;
});
$p.jt = (function(v, value) {
  v.fU = value;
});
$p.ju = (function(v, value) {
  v.fV = value;
});
$p.jr = (function(v, value) {
  v.fS = value;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$, "trivalibs.graphics.math.cpu.Vec4$given_Vec4Mutable_Vec4$", ({
  e4: 1,
  G: 1,
  V: 1,
  W: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$;
function $m_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$)) {
    $n_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$ = new $c_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$() {
}
$h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$.prototype = $p;
$p.nQ = (function(m) {
  var offset$proxy1 = (m.off | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy1, true));
});
$p.nS = (function(m) {
  var offset$proxy2 = ((4 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy2, true));
});
$p.nU = (function(m) {
  var offset$proxy3 = ((8 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy3, true));
});
$p.nW = (function(m) {
  var offset$proxy4 = ((12 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy4, true));
});
$p.nY = (function(m) {
  var offset$proxy5 = ((16 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy5, true));
});
$p.o0 = (function(m) {
  var offset$proxy6 = ((20 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy6, true));
});
$p.o2 = (function(m) {
  var offset$proxy7 = ((24 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy7, true));
});
$p.o4 = (function(m) {
  var offset$proxy8 = ((28 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy8, true));
});
$p.o6 = (function(m) {
  var offset$proxy9 = ((32 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy9, true));
});
$p.o8 = (function(m) {
  var offset$proxy10 = ((36 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy10, true));
});
$p.oa = (function(m) {
  var offset$proxy11 = ((40 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy11, true));
});
$p.oc = (function(m) {
  var offset$proxy12 = ((44 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy12, true));
});
$p.oe = (function(m) {
  var offset$proxy13 = ((48 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy13, true));
});
$p.og = (function(m) {
  var offset$proxy14 = ((52 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy14, true));
});
$p.oi = (function(m) {
  var offset$proxy15 = ((56 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy15, true));
});
$p.ok = (function(m) {
  var offset$proxy16 = ((60 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy16, true));
});
$p.nR = (function(m, v) {
  var value$proxy1 = Math.fround(v);
  var offset$proxy17 = (m.off | 0);
  m.dv.setFloat32(offset$proxy17, value$proxy1, true);
});
$p.nT = (function(m, v) {
  var value$proxy2 = Math.fround(v);
  var offset$proxy18 = ((4 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy18, value$proxy2, true);
});
$p.nV = (function(m, v) {
  var value$proxy3 = Math.fround(v);
  var offset$proxy19 = ((8 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy19, value$proxy3, true);
});
$p.nX = (function(m, v) {
  var value$proxy4 = Math.fround(v);
  var offset$proxy20 = ((12 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy20, value$proxy4, true);
});
$p.nZ = (function(m, v) {
  var value$proxy5 = Math.fround(v);
  var offset$proxy21 = ((16 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy21, value$proxy5, true);
});
$p.o1 = (function(m, v) {
  var value$proxy6 = Math.fround(v);
  var offset$proxy22 = ((20 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy22, value$proxy6, true);
});
$p.o3 = (function(m, v) {
  var value$proxy7 = Math.fround(v);
  var offset$proxy23 = ((24 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy23, value$proxy7, true);
});
$p.o5 = (function(m, v) {
  var value$proxy8 = Math.fround(v);
  var offset$proxy24 = ((28 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy24, value$proxy8, true);
});
$p.o7 = (function(m, v) {
  var value$proxy9 = Math.fround(v);
  var offset$proxy25 = ((32 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy25, value$proxy9, true);
});
$p.o9 = (function(m, v) {
  var value$proxy10 = Math.fround(v);
  var offset$proxy26 = ((36 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy26, value$proxy10, true);
});
$p.ob = (function(m, v) {
  var value$proxy11 = Math.fround(v);
  var offset$proxy27 = ((40 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy27, value$proxy11, true);
});
$p.od = (function(m, v) {
  var value$proxy12 = Math.fround(v);
  var offset$proxy28 = ((44 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy28, value$proxy12, true);
});
$p.of = (function(m, v) {
  var value$proxy13 = Math.fround(v);
  var offset$proxy29 = ((48 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy29, value$proxy13, true);
});
$p.oh = (function(m, v) {
  var value$proxy14 = Math.fround(v);
  var offset$proxy30 = ((52 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy30, value$proxy14, true);
});
$p.oj = (function(m, v) {
  var value$proxy15 = Math.fround(v);
  var offset$proxy31 = ((56 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy31, value$proxy15, true);
});
$p.ol = (function(m, v) {
  var value$proxy16 = Math.fround(v);
  var offset$proxy32 = ((60 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy32, value$proxy16, true);
});
$p.gU = (function(m) {
  return this.nQ(m);
});
$p.gV = (function(m) {
  return this.nS(m);
});
$p.gW = (function(m) {
  return this.nU(m);
});
$p.gX = (function(m) {
  return this.nW(m);
});
$p.gY = (function(m) {
  return this.nY(m);
});
$p.gZ = (function(m) {
  return this.o0(m);
});
$p.h0 = (function(m) {
  return this.o2(m);
});
$p.h1 = (function(m) {
  return this.o4(m);
});
$p.h2 = (function(m) {
  return this.o6(m);
});
$p.h3 = (function(m) {
  return this.o8(m);
});
$p.h4 = (function(m) {
  return this.oa(m);
});
$p.h5 = (function(m) {
  return this.oc(m);
});
$p.h6 = (function(m) {
  return this.oe(m);
});
$p.h7 = (function(m) {
  return this.og(m);
});
$p.h8 = (function(m) {
  return this.oi(m);
});
$p.h9 = (function(m) {
  return this.ok(m);
});
$p.ma = (function(m, v) {
  this.nR(m, v);
});
$p.mb = (function(m, v) {
  this.nT(m, v);
});
$p.mc = (function(m, v) {
  this.nV(m, v);
});
$p.md = (function(m, v) {
  this.nX(m, v);
});
$p.me = (function(m, v) {
  this.nZ(m, v);
});
$p.mf = (function(m, v) {
  this.o1(m, v);
});
$p.mg = (function(m, v) {
  this.o3(m, v);
});
$p.mh = (function(m, v) {
  this.o5(m, v);
});
$p.mi = (function(m, v) {
  this.o7(m, v);
});
$p.mj = (function(m, v) {
  this.o9(m, v);
});
$p.mk = (function(m, v) {
  this.ob(m, v);
});
$p.ml = (function(m, v) {
  this.od(m, v);
});
$p.mm = (function(m, v) {
  this.of(m, v);
});
$p.mn = (function(m, v) {
  this.oh(m, v);
});
$p.mo = (function(m, v) {
  this.oj(m, v);
});
$p.mp = (function(m, v) {
  this.ol(m, v);
});
var $d_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$, "trivalibs.graphics.math.cpu.mat4$package$Mat4Buffer$given_Mat4Mutable_StructRef$", ({
  e7: 1,
  U: 1,
  aJ: 1,
  aK: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$;
function $m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$)) {
    $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$ = new $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$.prototype = $p;
$p.pn = (function(v) {
  var offset$proxy1 = (v.off | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy1, true));
});
$p.pp = (function(v) {
  var offset$proxy2 = ((4 + (v.off | 0)) | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy2, true));
});
$p.pr = (function(v) {
  var offset$proxy3 = ((8 + (v.off | 0)) | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy3, true));
});
$p.ph = (function(v) {
  var offset$proxy4 = ((12 + (v.off | 0)) | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy4, true));
});
$p.po = (function(v, value) {
  var value$proxy1 = Math.fround(value);
  var offset$proxy5 = (v.off | 0);
  v.dv.setFloat32(offset$proxy5, value$proxy1, true);
});
$p.pq = (function(v, value) {
  var value$proxy2 = Math.fround(value);
  var offset$proxy6 = ((4 + (v.off | 0)) | 0);
  v.dv.setFloat32(offset$proxy6, value$proxy2, true);
});
$p.pt = (function(v, value) {
  var value$proxy3 = Math.fround(value);
  var offset$proxy7 = ((8 + (v.off | 0)) | 0);
  v.dv.setFloat32(offset$proxy7, value$proxy3, true);
});
$p.pi = (function(v, value) {
  var value$proxy4 = Math.fround(value);
  var offset$proxy8 = ((12 + (v.off | 0)) | 0);
  v.dv.setFloat32(offset$proxy8, value$proxy4, true);
});
$p.aM = (function(v) {
  return this.pn(v);
});
$p.aN = (function(v) {
  return this.pp(v);
});
$p.aO = (function(v) {
  return this.pr(v);
});
$p.aL = (function(v) {
  return this.ph(v);
});
$p.js = (function(v, value) {
  this.po(v, value);
});
$p.jt = (function(v, value) {
  this.pq(v, value);
});
$p.ju = (function(v, value) {
  this.pt(v, value);
});
$p.jr = (function(v, value) {
  this.pi(v, value);
});
var $d_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$, "trivalibs.graphics.math.cpu.vec4$package$Vec4Buffer$vec4MutableBuffer$", ({
  ea: 1,
  G: 1,
  V: 1,
  W: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$;
function $m_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$)) {
    $n_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$ = new $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$;
}
function $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T($thiz, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, uniformDecls, vertexBody, fragmentBody, fragBuiltinParams) {
  var f$proxy1 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildVertexMain__T__T($thiz, vertexBody);
  var g$proxy1 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildFragmentMain__T__T__T($thiz, fragmentBody, fragBuiltinParams);
  var all = [vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, uniformDecls, $thiz.gB, f$proxy1, g$proxy1];
  var parts = [];
  var i = 0;
  while ((i < (all.length | 0))) {
    if ((all[i].length > 0)) {
      parts.push(all[i]);
    }
    i = ((1 + i) | 0);
  }
  return parts.join("\n\n");
}
function $p_Ltrivalibs_graphics_shader_ShaderDef__buildVertexMain__T__T($thiz, body) {
  return (("@vertex\nfn vs_main(in: VertexInput) -> VertexOutput {\n  var out: VertexOutput;\n" + body) + "\n  return out;\n}");
}
function $p_Ltrivalibs_graphics_shader_ShaderDef__buildFragmentMain__T__T__T($thiz, body, builtinParams) {
  return (((("@fragment\nfn fs_main(in: VertexOutput" + builtinParams) + ") -> FragmentOutput {\n  var out: FragmentOutput;\n") + body) + "\n  return out;\n}");
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_ShaderDef(vertexBody, fragmentBody, helperFns) {
  this.a6 = null;
  this.a5 = null;
  this.gB = null;
  this.a6 = vertexBody;
  this.a5 = fragmentBody;
  this.gB = helperFns;
}
$p = $c_Ltrivalibs_graphics_shader_ShaderDef.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_ShaderDef;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_ShaderDef() {
}
$h_Ltrivalibs_graphics_shader_ShaderDef.prototype = $p;
$p.Q = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return $m_s_util_hashing_MurmurHash3$().V(this, (-1488826029), true);
});
$p.s = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_Ltrivalibs_graphics_shader_ShaderDef) && (((this.a6 === x$0.a6) && (this.a5 === x$0.a5)) && (this.gB === x$0.gB))));
});
$p.p = (function() {
  return $m_sr_ScalaRunTime$().mN(this);
});
$p.I = (function() {
  return 3;
});
$p.L = (function() {
  return "ShaderDef";
});
$p.t = (function(n) {
  switch (n) {
    case 0: {
      return this.a6;
      break;
    }
    case 1: {
      return this.a5;
      break;
    }
    case 2: {
      return this.gB;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
    }
  }
});
function $isArrayOf_Ltrivalibs_graphics_shader_ShaderDef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aO)));
}
var $d_Ltrivalibs_graphics_shader_ShaderDef = new $TypeData().i($c_Ltrivalibs_graphics_shader_ShaderDef, "trivalibs.graphics.shader.ShaderDef", ({
  aO: 1,
  b: 1,
  c: 1,
  a: 1
}));
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_ArithmeticException = new $TypeData().i($c_jl_ArithmeticException, "java.lang.ArithmeticException", ({
  aQ: 1,
  j: 1,
  i: 1,
  f: 1,
  a: 1
}));
function $f_jl_Byte__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Byte__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Byte__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Byte = new $TypeData().i(0, "java.lang.Byte", ({
  aT: 1,
  m: 1,
  a: 1,
  h: 1,
  g: 1
}), ((x) => $isByte(x)));
function $ct_jl_IllegalArgumentException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_jl_IllegalArgumentException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz;
}
class $c_jl_IllegalArgumentException extends $c_jl_RuntimeException {
}
var $d_jl_IllegalArgumentException = new $TypeData().i($c_jl_IllegalArgumentException, "java.lang.IllegalArgumentException", ({
  Z: 1,
  j: 1,
  i: 1,
  f: 1,
  a: 1
}));
function $ct_jl_IndexOutOfBoundsException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_jl_IndexOutOfBoundsException__I__($thiz, index) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, ("Index out of range: " + index), null, true, true);
  return $thiz;
}
class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
}
var $d_jl_IndexOutOfBoundsException = new $TypeData().i($c_jl_IndexOutOfBoundsException, "java.lang.IndexOutOfBoundsException", ({
  aY: 1,
  j: 1,
  i: 1,
  f: 1,
  a: 1
}));
function $ct_jl_NullPointerException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_jl_NullPointerException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz;
}
class $c_jl_NullPointerException extends $c_jl_RuntimeException {
}
var $d_jl_NullPointerException = new $TypeData().i($c_jl_NullPointerException, "java.lang.NullPointerException", ({
  b1: 1,
  j: 1,
  i: 1,
  f: 1,
  a: 1
}));
function $isArrayOf_jl_SecurityException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.b3)));
}
function $f_jl_Short__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Short__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Short__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Short = new $TypeData().i(0, "java.lang.Short", ({
  b4: 1,
  m: 1,
  a: 1,
  h: 1,
  g: 1
}), ((x) => $isShort(x)));
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_UnsupportedOperationException = new $TypeData().i($c_jl_UnsupportedOperationException, "java.lang.UnsupportedOperationException", ({
  b8: 1,
  j: 1,
  i: 1,
  f: 1,
  a: 1
}));
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_ju_NoSuchElementException = new $TypeData().i($c_ju_NoSuchElementException, "java.util.NoSuchElementException", ({
  bd: 1,
  j: 1,
  i: 1,
  f: 1,
  a: 1
}));
function $p_s_MatchError__objString__T($thiz) {
  if ((!$thiz.jz)) {
    if (($thiz.hf === null)) {
      var $x_1 = "null";
    } else {
      var this$1 = $thiz.hf;
      var cls = $objectGetClass(this$1);
      var ofClass = ((cls === null) ? "of a JS class" : ("of class " + cls.hY.N));
      try {
        var $x_1 = ((($thiz.hf + " (") + ofClass) + ")");
      } catch (e) {
        var $x_1 = ("an instance " + ofClass);
      }
    }
    $thiz.jy = $x_1;
    $thiz.jz = true;
  }
  return $thiz.jy;
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.hf = null;
    this.jy = null;
    this.jz = false;
    this.hf = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  hP() {
    return $p_s_MatchError__objString__T(this);
  }
}
var $d_s_MatchError = new $TypeData().i($c_s_MatchError, "scala.MatchError", ({
  bn: 1,
  j: 1,
  i: 1,
  f: 1,
  a: 1
}));
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.gf = 0;
  this.jB = 0;
  this.jA = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.jA = outer;
  this.gf = 0;
  this.jB = outer.I();
}
$p = $c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $p;
$p.U = (function() {
  return (this.gf < this.jB);
});
$p.P = (function() {
  var result = this.jA.t(this.gf);
  this.gf = ((1 + this.gf) | 0);
  return result;
});
var $d_s_Product$$anon$1 = new $TypeData().i($c_s_Product$$anon$1, "scala.Product$$anon$1", ({
  bp: 1,
  n: 1,
  d: 1,
  e: 1,
  s: 1
}));
/** @constructor */
function $c_T1(_1) {
  this.fr = null;
  this.fr = _1;
}
$p = $c_T1.prototype = new $h_O();
$p.constructor = $c_T1;
/** @constructor */
function $h_T1() {
}
$h_T1.prototype = $p;
$p.I = (function() {
  return 1;
});
$p.t = (function(n) {
  return $f_s_Product1__productElement__I__O(this, n);
});
$p.p = (function() {
  return (("(" + this.fr) + ")");
});
$p.L = (function() {
  return "Tuple1";
});
$p.Q = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.z = (function() {
  return $m_s_util_hashing_MurmurHash3$().V(this, 1228477340, true);
});
$p.s = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T1) && $m_sr_BoxesRunTime$().b(this.fr, x$1.fr)));
});
function $isArrayOf_T1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a2)));
}
var $d_T1 = new $TypeData().i($c_T1, "scala.Tuple1", ({
  a2: 1,
  bq: 1,
  c: 1,
  b: 1,
  a: 1
}));
/** @constructor */
function $c_T10(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10) {
  this.fs = null;
  this.bo = null;
  this.bp = null;
  this.bq = null;
  this.br = null;
  this.bs = null;
  this.bt = null;
  this.bu = null;
  this.bv = null;
  this.bn = null;
  this.fs = _1;
  this.bo = _2;
  this.bp = _3;
  this.bq = _4;
  this.br = _5;
  this.bs = _6;
  this.bt = _7;
  this.bu = _8;
  this.bv = _9;
  this.bn = _10;
}
$p = $c_T10.prototype = new $h_O();
$p.constructor = $c_T10;
/** @constructor */
function $h_T10() {
}
$h_T10.prototype = $p;
$p.Q = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.I = (function() {
  return 10;
});
$p.t = (function(n) {
  return $f_s_Product10__productElement__I__O(this, n);
});
$p.z = (function() {
  return $m_s_util_hashing_MurmurHash3$().V(this, 2104595240, true);
});
$p.s = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T10) && ((((((((($m_sr_BoxesRunTime$().b(this.fs, x$0.fs) && $m_sr_BoxesRunTime$().b(this.bo, x$0.bo)) && $m_sr_BoxesRunTime$().b(this.bp, x$0.bp)) && $m_sr_BoxesRunTime$().b(this.bq, x$0.bq)) && $m_sr_BoxesRunTime$().b(this.br, x$0.br)) && $m_sr_BoxesRunTime$().b(this.bs, x$0.bs)) && $m_sr_BoxesRunTime$().b(this.bt, x$0.bt)) && $m_sr_BoxesRunTime$().b(this.bu, x$0.bu)) && $m_sr_BoxesRunTime$().b(this.bv, x$0.bv)) && $m_sr_BoxesRunTime$().b(this.bn, x$0.bn))));
});
$p.L = (function() {
  return "Tuple10";
});
$p.p = (function() {
  return (((((((((((((((((((("(" + this.fs) + ",") + this.bo) + ",") + this.bp) + ",") + this.bq) + ",") + this.br) + ",") + this.bs) + ",") + this.bt) + ",") + this.bu) + ",") + this.bv) + ",") + this.bn) + ")");
});
function $isArrayOf_T10(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a3)));
}
var $d_T10 = new $TypeData().i($c_T10, "scala.Tuple10", ({
  a3: 1,
  b: 1,
  c: 1,
  br: 1,
  a: 1
}));
/** @constructor */
function $c_T11(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11) {
  this.ft = null;
  this.by = null;
  this.bz = null;
  this.bA = null;
  this.bB = null;
  this.bC = null;
  this.bD = null;
  this.bE = null;
  this.bF = null;
  this.bw = null;
  this.bx = null;
  this.ft = _1;
  this.by = _2;
  this.bz = _3;
  this.bA = _4;
  this.bB = _5;
  this.bC = _6;
  this.bD = _7;
  this.bE = _8;
  this.bF = _9;
  this.bw = _10;
  this.bx = _11;
}
$p = $c_T11.prototype = new $h_O();
$p.constructor = $c_T11;
/** @constructor */
function $h_T11() {
}
$h_T11.prototype = $p;
$p.Q = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.I = (function() {
  return 11;
});
$p.t = (function(n) {
  return $f_s_Product11__productElement__I__O(this, n);
});
$p.z = (function() {
  return $m_s_util_hashing_MurmurHash3$().V(this, 838406606, true);
});
$p.s = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T11) && (((((((((($m_sr_BoxesRunTime$().b(this.ft, x$0.ft) && $m_sr_BoxesRunTime$().b(this.by, x$0.by)) && $m_sr_BoxesRunTime$().b(this.bz, x$0.bz)) && $m_sr_BoxesRunTime$().b(this.bA, x$0.bA)) && $m_sr_BoxesRunTime$().b(this.bB, x$0.bB)) && $m_sr_BoxesRunTime$().b(this.bC, x$0.bC)) && $m_sr_BoxesRunTime$().b(this.bD, x$0.bD)) && $m_sr_BoxesRunTime$().b(this.bE, x$0.bE)) && $m_sr_BoxesRunTime$().b(this.bF, x$0.bF)) && $m_sr_BoxesRunTime$().b(this.bw, x$0.bw)) && $m_sr_BoxesRunTime$().b(this.bx, x$0.bx))));
});
$p.L = (function() {
  return "Tuple11";
});
$p.p = (function() {
  return (((((((((((((((((((((("(" + this.ft) + ",") + this.by) + ",") + this.bz) + ",") + this.bA) + ",") + this.bB) + ",") + this.bC) + ",") + this.bD) + ",") + this.bE) + ",") + this.bF) + ",") + this.bw) + ",") + this.bx) + ")");
});
function $isArrayOf_T11(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a4)));
}
var $d_T11 = new $TypeData().i($c_T11, "scala.Tuple11", ({
  a4: 1,
  b: 1,
  c: 1,
  bs: 1,
  a: 1
}));
/** @constructor */
function $c_T12(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12) {
  this.fu = null;
  this.bJ = null;
  this.bK = null;
  this.bL = null;
  this.bM = null;
  this.bN = null;
  this.bO = null;
  this.bP = null;
  this.bQ = null;
  this.bG = null;
  this.bH = null;
  this.bI = null;
  this.fu = _1;
  this.bJ = _2;
  this.bK = _3;
  this.bL = _4;
  this.bM = _5;
  this.bN = _6;
  this.bO = _7;
  this.bP = _8;
  this.bQ = _9;
  this.bG = _10;
  this.bH = _11;
  this.bI = _12;
}
$p = $c_T12.prototype = new $h_O();
$p.constructor = $c_T12;
/** @constructor */
function $h_T12() {
}
$h_T12.prototype = $p;
$p.Q = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.I = (function() {
  return 12;
});
$p.t = (function(n) {
  return $f_s_Product12__productElement__I__O(this, n);
});
$p.z = (function() {
  return $m_s_util_hashing_MurmurHash3$().V(this, (-1964145863), true);
});
$p.s = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T12) && ((((((((((($m_sr_BoxesRunTime$().b(this.fu, x$0.fu) && $m_sr_BoxesRunTime$().b(this.bJ, x$0.bJ)) && $m_sr_BoxesRunTime$().b(this.bK, x$0.bK)) && $m_sr_BoxesRunTime$().b(this.bL, x$0.bL)) && $m_sr_BoxesRunTime$().b(this.bM, x$0.bM)) && $m_sr_BoxesRunTime$().b(this.bN, x$0.bN)) && $m_sr_BoxesRunTime$().b(this.bO, x$0.bO)) && $m_sr_BoxesRunTime$().b(this.bP, x$0.bP)) && $m_sr_BoxesRunTime$().b(this.bQ, x$0.bQ)) && $m_sr_BoxesRunTime$().b(this.bG, x$0.bG)) && $m_sr_BoxesRunTime$().b(this.bH, x$0.bH)) && $m_sr_BoxesRunTime$().b(this.bI, x$0.bI))));
});
$p.L = (function() {
  return "Tuple12";
});
$p.p = (function() {
  return (((((((((((((((((((((((("(" + this.fu) + ",") + this.bJ) + ",") + this.bK) + ",") + this.bL) + ",") + this.bM) + ",") + this.bN) + ",") + this.bO) + ",") + this.bP) + ",") + this.bQ) + ",") + this.bG) + ",") + this.bH) + ",") + this.bI) + ")");
});
function $isArrayOf_T12(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a5)));
}
var $d_T12 = new $TypeData().i($c_T12, "scala.Tuple12", ({
  a5: 1,
  b: 1,
  c: 1,
  bt: 1,
  a: 1
}));
/** @constructor */
function $c_T13(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13) {
  this.fv = null;
  this.bV = null;
  this.bW = null;
  this.bX = null;
  this.bY = null;
  this.bZ = null;
  this.c0 = null;
  this.c1 = null;
  this.c2 = null;
  this.bR = null;
  this.bS = null;
  this.bT = null;
  this.bU = null;
  this.fv = _1;
  this.bV = _2;
  this.bW = _3;
  this.bX = _4;
  this.bY = _5;
  this.bZ = _6;
  this.c0 = _7;
  this.c1 = _8;
  this.c2 = _9;
  this.bR = _10;
  this.bS = _11;
  this.bT = _12;
  this.bU = _13;
}
$p = $c_T13.prototype = new $h_O();
$p.constructor = $c_T13;
/** @constructor */
function $h_T13() {
}
$h_T13.prototype = $p;
$p.Q = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.I = (function() {
  return 13;
});
$p.t = (function(n) {
  return $f_s_Product13__productElement__I__O(this, n);
});
$p.z = (function() {
  return $m_s_util_hashing_MurmurHash3$().V(this, 1224168367, true);
});
$p.s = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T13) && (((((((((((($m_sr_BoxesRunTime$().b(this.fv, x$0.fv) && $m_sr_BoxesRunTime$().b(this.bV, x$0.bV)) && $m_sr_BoxesRunTime$().b(this.bW, x$0.bW)) && $m_sr_BoxesRunTime$().b(this.bX, x$0.bX)) && $m_sr_BoxesRunTime$().b(this.bY, x$0.bY)) && $m_sr_BoxesRunTime$().b(this.bZ, x$0.bZ)) && $m_sr_BoxesRunTime$().b(this.c0, x$0.c0)) && $m_sr_BoxesRunTime$().b(this.c1, x$0.c1)) && $m_sr_BoxesRunTime$().b(this.c2, x$0.c2)) && $m_sr_BoxesRunTime$().b(this.bR, x$0.bR)) && $m_sr_BoxesRunTime$().b(this.bS, x$0.bS)) && $m_sr_BoxesRunTime$().b(this.bT, x$0.bT)) && $m_sr_BoxesRunTime$().b(this.bU, x$0.bU))));
});
$p.L = (function() {
  return "Tuple13";
});
$p.p = (function() {
  return (((((((((((((((((((((((((("(" + this.fv) + ",") + this.bV) + ",") + this.bW) + ",") + this.bX) + ",") + this.bY) + ",") + this.bZ) + ",") + this.c0) + ",") + this.c1) + ",") + this.c2) + ",") + this.bR) + ",") + this.bS) + ",") + this.bT) + ",") + this.bU) + ")");
});
function $isArrayOf_T13(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a6)));
}
var $d_T13 = new $TypeData().i($c_T13, "scala.Tuple13", ({
  a6: 1,
  b: 1,
  c: 1,
  bu: 1,
  a: 1
}));
/** @constructor */
function $c_T14(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14) {
  this.fw = null;
  this.c8 = null;
  this.c9 = null;
  this.ca = null;
  this.cb = null;
  this.cc = null;
  this.cd = null;
  this.ce = null;
  this.cf = null;
  this.c3 = null;
  this.c4 = null;
  this.c5 = null;
  this.c6 = null;
  this.c7 = null;
  this.fw = _1;
  this.c8 = _2;
  this.c9 = _3;
  this.ca = _4;
  this.cb = _5;
  this.cc = _6;
  this.cd = _7;
  this.ce = _8;
  this.cf = _9;
  this.c3 = _10;
  this.c4 = _11;
  this.c5 = _12;
  this.c6 = _13;
  this.c7 = _14;
}
$p = $c_T14.prototype = new $h_O();
$p.constructor = $c_T14;
/** @constructor */
function $h_T14() {
}
$h_T14.prototype = $p;
$p.Q = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.I = (function() {
  return 14;
});
$p.t = (function(n) {
  return $f_s_Product14__productElement__I__O(this, n);
});
$p.z = (function() {
  return $m_s_util_hashing_MurmurHash3$().V(this, 147759069, true);
});
$p.s = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T14) && ((((((((((((($m_sr_BoxesRunTime$().b(this.fw, x$0.fw) && $m_sr_BoxesRunTime$().b(this.c8, x$0.c8)) && $m_sr_BoxesRunTime$().b(this.c9, x$0.c9)) && $m_sr_BoxesRunTime$().b(this.ca, x$0.ca)) && $m_sr_BoxesRunTime$().b(this.cb, x$0.cb)) && $m_sr_BoxesRunTime$().b(this.cc, x$0.cc)) && $m_sr_BoxesRunTime$().b(this.cd, x$0.cd)) && $m_sr_BoxesRunTime$().b(this.ce, x$0.ce)) && $m_sr_BoxesRunTime$().b(this.cf, x$0.cf)) && $m_sr_BoxesRunTime$().b(this.c3, x$0.c3)) && $m_sr_BoxesRunTime$().b(this.c4, x$0.c4)) && $m_sr_BoxesRunTime$().b(this.c5, x$0.c5)) && $m_sr_BoxesRunTime$().b(this.c6, x$0.c6)) && $m_sr_BoxesRunTime$().b(this.c7, x$0.c7))));
});
$p.L = (function() {
  return "Tuple14";
});
$p.p = (function() {
  return (((((((((((((((((((((((((((("(" + this.fw) + ",") + this.c8) + ",") + this.c9) + ",") + this.ca) + ",") + this.cb) + ",") + this.cc) + ",") + this.cd) + ",") + this.ce) + ",") + this.cf) + ",") + this.c3) + ",") + this.c4) + ",") + this.c5) + ",") + this.c6) + ",") + this.c7) + ")");
});
function $isArrayOf_T14(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a7)));
}
var $d_T14 = new $TypeData().i($c_T14, "scala.Tuple14", ({
  a7: 1,
  b: 1,
  c: 1,
  bv: 1,
  a: 1
}));
/** @constructor */
function $c_T15(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15) {
  this.fx = null;
  this.cm = null;
  this.cn = null;
  this.co = null;
  this.cp = null;
  this.cq = null;
  this.cr = null;
  this.cs = null;
  this.ct = null;
  this.cg = null;
  this.ch = null;
  this.ci = null;
  this.cj = null;
  this.ck = null;
  this.cl = null;
  this.fx = _1;
  this.cm = _2;
  this.cn = _3;
  this.co = _4;
  this.cp = _5;
  this.cq = _6;
  this.cr = _7;
  this.cs = _8;
  this.ct = _9;
  this.cg = _10;
  this.ch = _11;
  this.ci = _12;
  this.cj = _13;
  this.ck = _14;
  this.cl = _15;
}
$p = $c_T15.prototype = new $h_O();
$p.constructor = $c_T15;
/** @constructor */
function $h_T15() {
}
$h_T15.prototype = $p;
$p.Q = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.I = (function() {
  return 15;
});
$p.t = (function(n) {
  return $f_s_Product15__productElement__I__O(this, n);
});
$p.z = (function() {
  return $m_s_util_hashing_MurmurHash3$().V(this, 1834180931, true);
});
$p.s = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T15) && (((((((((((((($m_sr_BoxesRunTime$().b(this.fx, x$0.fx) && $m_sr_BoxesRunTime$().b(this.cm, x$0.cm)) && $m_sr_BoxesRunTime$().b(this.cn, x$0.cn)) && $m_sr_BoxesRunTime$().b(this.co, x$0.co)) && $m_sr_BoxesRunTime$().b(this.cp, x$0.cp)) && $m_sr_BoxesRunTime$().b(this.cq, x$0.cq)) && $m_sr_BoxesRunTime$().b(this.cr, x$0.cr)) && $m_sr_BoxesRunTime$().b(this.cs, x$0.cs)) && $m_sr_BoxesRunTime$().b(this.ct, x$0.ct)) && $m_sr_BoxesRunTime$().b(this.cg, x$0.cg)) && $m_sr_BoxesRunTime$().b(this.ch, x$0.ch)) && $m_sr_BoxesRunTime$().b(this.ci, x$0.ci)) && $m_sr_BoxesRunTime$().b(this.cj, x$0.cj)) && $m_sr_BoxesRunTime$().b(this.ck, x$0.ck)) && $m_sr_BoxesRunTime$().b(this.cl, x$0.cl))));
});
$p.L = (function() {
  return "Tuple15";
});
$p.p = (function() {
  return (((((((((((((((((((((((((((((("(" + this.fx) + ",") + this.cm) + ",") + this.cn) + ",") + this.co) + ",") + this.cp) + ",") + this.cq) + ",") + this.cr) + ",") + this.cs) + ",") + this.ct) + ",") + this.cg) + ",") + this.ch) + ",") + this.ci) + ",") + this.cj) + ",") + this.ck) + ",") + this.cl) + ")");
});
function $isArrayOf_T15(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a8)));
}
var $d_T15 = new $TypeData().i($c_T15, "scala.Tuple15", ({
  a8: 1,
  b: 1,
  c: 1,
  bw: 1,
  a: 1
}));
/** @constructor */
function $c_T16(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16) {
  this.fy = null;
  this.cB = null;
  this.cC = null;
  this.cD = null;
  this.cE = null;
  this.cF = null;
  this.cG = null;
  this.cH = null;
  this.cI = null;
  this.cu = null;
  this.cv = null;
  this.cw = null;
  this.cx = null;
  this.cy = null;
  this.cz = null;
  this.cA = null;
  this.fy = _1;
  this.cB = _2;
  this.cC = _3;
  this.cD = _4;
  this.cE = _5;
  this.cF = _6;
  this.cG = _7;
  this.cH = _8;
  this.cI = _9;
  this.cu = _10;
  this.cv = _11;
  this.cw = _12;
  this.cx = _13;
  this.cy = _14;
  this.cz = _15;
  this.cA = _16;
}
$p = $c_T16.prototype = new $h_O();
$p.constructor = $c_T16;
/** @constructor */
function $h_T16() {
}
$h_T16.prototype = $p;
$p.Q = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.I = (function() {
  return 16;
});
$p.t = (function(n) {
  return $f_s_Product16__productElement__I__O(this, n);
});
$p.z = (function() {
  return $m_s_util_hashing_MurmurHash3$().V(this, 499793902, true);
});
$p.s = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T16) && ((((((((((((((($m_sr_BoxesRunTime$().b(this.fy, x$0.fy) && $m_sr_BoxesRunTime$().b(this.cB, x$0.cB)) && $m_sr_BoxesRunTime$().b(this.cC, x$0.cC)) && $m_sr_BoxesRunTime$().b(this.cD, x$0.cD)) && $m_sr_BoxesRunTime$().b(this.cE, x$0.cE)) && $m_sr_BoxesRunTime$().b(this.cF, x$0.cF)) && $m_sr_BoxesRunTime$().b(this.cG, x$0.cG)) && $m_sr_BoxesRunTime$().b(this.cH, x$0.cH)) && $m_sr_BoxesRunTime$().b(this.cI, x$0.cI)) && $m_sr_BoxesRunTime$().b(this.cu, x$0.cu)) && $m_sr_BoxesRunTime$().b(this.cv, x$0.cv)) && $m_sr_BoxesRunTime$().b(this.cw, x$0.cw)) && $m_sr_BoxesRunTime$().b(this.cx, x$0.cx)) && $m_sr_BoxesRunTime$().b(this.cy, x$0.cy)) && $m_sr_BoxesRunTime$().b(this.cz, x$0.cz)) && $m_sr_BoxesRunTime$().b(this.cA, x$0.cA))));
});
$p.L = (function() {
  return "Tuple16";
});
$p.p = (function() {
  return (((((((((((((((((((((((((((((((("(" + this.fy) + ",") + this.cB) + ",") + this.cC) + ",") + this.cD) + ",") + this.cE) + ",") + this.cF) + ",") + this.cG) + ",") + this.cH) + ",") + this.cI) + ",") + this.cu) + ",") + this.cv) + ",") + this.cw) + ",") + this.cx) + ",") + this.cy) + ",") + this.cz) + ",") + this.cA) + ")");
});
function $isArrayOf_T16(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a9)));
}
var $d_T16 = new $TypeData().i($c_T16, "scala.Tuple16", ({
  a9: 1,
  b: 1,
  c: 1,
  bx: 1,
  a: 1
}));
/** @constructor */
function $c_T17(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17) {
  this.fz = null;
  this.cR = null;
  this.cS = null;
  this.cT = null;
  this.cU = null;
  this.cV = null;
  this.cW = null;
  this.cX = null;
  this.cY = null;
  this.cJ = null;
  this.cK = null;
  this.cL = null;
  this.cM = null;
  this.cN = null;
  this.cO = null;
  this.cP = null;
  this.cQ = null;
  this.fz = _1;
  this.cR = _2;
  this.cS = _3;
  this.cT = _4;
  this.cU = _5;
  this.cV = _6;
  this.cW = _7;
  this.cX = _8;
  this.cY = _9;
  this.cJ = _10;
  this.cK = _11;
  this.cL = _12;
  this.cM = _13;
  this.cN = _14;
  this.cO = _15;
  this.cP = _16;
  this.cQ = _17;
}
$p = $c_T17.prototype = new $h_O();
$p.constructor = $c_T17;
/** @constructor */
function $h_T17() {
}
$h_T17.prototype = $p;
$p.Q = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.I = (function() {
  return 17;
});
$p.t = (function(n) {
  return $f_s_Product17__productElement__I__O(this, n);
});
$p.z = (function() {
  return $m_s_util_hashing_MurmurHash3$().V(this, (-934366247), true);
});
$p.s = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T17) && (((((((((((((((($m_sr_BoxesRunTime$().b(this.fz, x$0.fz) && $m_sr_BoxesRunTime$().b(this.cR, x$0.cR)) && $m_sr_BoxesRunTime$().b(this.cS, x$0.cS)) && $m_sr_BoxesRunTime$().b(this.cT, x$0.cT)) && $m_sr_BoxesRunTime$().b(this.cU, x$0.cU)) && $m_sr_BoxesRunTime$().b(this.cV, x$0.cV)) && $m_sr_BoxesRunTime$().b(this.cW, x$0.cW)) && $m_sr_BoxesRunTime$().b(this.cX, x$0.cX)) && $m_sr_BoxesRunTime$().b(this.cY, x$0.cY)) && $m_sr_BoxesRunTime$().b(this.cJ, x$0.cJ)) && $m_sr_BoxesRunTime$().b(this.cK, x$0.cK)) && $m_sr_BoxesRunTime$().b(this.cL, x$0.cL)) && $m_sr_BoxesRunTime$().b(this.cM, x$0.cM)) && $m_sr_BoxesRunTime$().b(this.cN, x$0.cN)) && $m_sr_BoxesRunTime$().b(this.cO, x$0.cO)) && $m_sr_BoxesRunTime$().b(this.cP, x$0.cP)) && $m_sr_BoxesRunTime$().b(this.cQ, x$0.cQ))));
});
$p.L = (function() {
  return "Tuple17";
});
$p.p = (function() {
  return (((((((((((((((((((((((((((((((((("(" + this.fz) + ",") + this.cR) + ",") + this.cS) + ",") + this.cT) + ",") + this.cU) + ",") + this.cV) + ",") + this.cW) + ",") + this.cX) + ",") + this.cY) + ",") + this.cJ) + ",") + this.cK) + ",") + this.cL) + ",") + this.cM) + ",") + this.cN) + ",") + this.cO) + ",") + this.cP) + ",") + this.cQ) + ")");
});
function $isArrayOf_T17(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aa)));
}
var $d_T17 = new $TypeData().i($c_T17, "scala.Tuple17", ({
  aa: 1,
  b: 1,
  c: 1,
  by: 1,
  a: 1
}));
/** @constructor */
function $c_T18(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18) {
  this.fA = null;
  this.d8 = null;
  this.d9 = null;
  this.da = null;
  this.db = null;
  this.dc = null;
  this.dd = null;
  this.de = null;
  this.df = null;
  this.cZ = null;
  this.d0 = null;
  this.d1 = null;
  this.d2 = null;
  this.d3 = null;
  this.d4 = null;
  this.d5 = null;
  this.d6 = null;
  this.d7 = null;
  this.fA = _1;
  this.d8 = _2;
  this.d9 = _3;
  this.da = _4;
  this.db = _5;
  this.dc = _6;
  this.dd = _7;
  this.de = _8;
  this.df = _9;
  this.cZ = _10;
  this.d0 = _11;
  this.d1 = _12;
  this.d2 = _13;
  this.d3 = _14;
  this.d4 = _15;
  this.d5 = _16;
  this.d6 = _17;
  this.d7 = _18;
}
$p = $c_T18.prototype = new $h_O();
$p.constructor = $c_T18;
/** @constructor */
function $h_T18() {
}
$h_T18.prototype = $p;
$p.Q = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.I = (function() {
  return 18;
});
$p.t = (function(n) {
  return $f_s_Product18__productElement__I__O(this, n);
});
$p.z = (function() {
  return $m_s_util_hashing_MurmurHash3$().V(this, (-937041276), true);
});
$p.s = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T18) && ((((((((((((((((($m_sr_BoxesRunTime$().b(this.fA, x$0.fA) && $m_sr_BoxesRunTime$().b(this.d8, x$0.d8)) && $m_sr_BoxesRunTime$().b(this.d9, x$0.d9)) && $m_sr_BoxesRunTime$().b(this.da, x$0.da)) && $m_sr_BoxesRunTime$().b(this.db, x$0.db)) && $m_sr_BoxesRunTime$().b(this.dc, x$0.dc)) && $m_sr_BoxesRunTime$().b(this.dd, x$0.dd)) && $m_sr_BoxesRunTime$().b(this.de, x$0.de)) && $m_sr_BoxesRunTime$().b(this.df, x$0.df)) && $m_sr_BoxesRunTime$().b(this.cZ, x$0.cZ)) && $m_sr_BoxesRunTime$().b(this.d0, x$0.d0)) && $m_sr_BoxesRunTime$().b(this.d1, x$0.d1)) && $m_sr_BoxesRunTime$().b(this.d2, x$0.d2)) && $m_sr_BoxesRunTime$().b(this.d3, x$0.d3)) && $m_sr_BoxesRunTime$().b(this.d4, x$0.d4)) && $m_sr_BoxesRunTime$().b(this.d5, x$0.d5)) && $m_sr_BoxesRunTime$().b(this.d6, x$0.d6)) && $m_sr_BoxesRunTime$().b(this.d7, x$0.d7))));
});
$p.L = (function() {
  return "Tuple18";
});
$p.p = (function() {
  return (((((((((((((((((((((((((((((((((((("(" + this.fA) + ",") + this.d8) + ",") + this.d9) + ",") + this.da) + ",") + this.db) + ",") + this.dc) + ",") + this.dd) + ",") + this.de) + ",") + this.df) + ",") + this.cZ) + ",") + this.d0) + ",") + this.d1) + ",") + this.d2) + ",") + this.d3) + ",") + this.d4) + ",") + this.d5) + ",") + this.d6) + ",") + this.d7) + ")");
});
function $isArrayOf_T18(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ab)));
}
var $d_T18 = new $TypeData().i($c_T18, "scala.Tuple18", ({
  ab: 1,
  b: 1,
  c: 1,
  bz: 1,
  a: 1
}));
/** @constructor */
function $c_T19(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19) {
  this.fB = null;
  this.dr = null;
  this.ds = null;
  this.dt = null;
  this.du = null;
  this.dv = null;
  this.dw = null;
  this.dx = null;
  this.dy = null;
  this.dg = null;
  this.dh = null;
  this.di = null;
  this.dj = null;
  this.dk = null;
  this.dl = null;
  this.dm = null;
  this.dn = null;
  this.dp = null;
  this.dq = null;
  this.fB = _1;
  this.dr = _2;
  this.ds = _3;
  this.dt = _4;
  this.du = _5;
  this.dv = _6;
  this.dw = _7;
  this.dx = _8;
  this.dy = _9;
  this.dg = _10;
  this.dh = _11;
  this.di = _12;
  this.dj = _13;
  this.dk = _14;
  this.dl = _15;
  this.dm = _16;
  this.dn = _17;
  this.dp = _18;
  this.dq = _19;
}
$p = $c_T19.prototype = new $h_O();
$p.constructor = $c_T19;
/** @constructor */
function $h_T19() {
}
$h_T19.prototype = $p;
$p.Q = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.I = (function() {
  return 19;
});
$p.t = (function(n) {
  return $f_s_Product19__productElement__I__O(this, n);
});
$p.z = (function() {
  return $m_s_util_hashing_MurmurHash3$().V(this, (-1955940499), true);
});
$p.s = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T19) && (((((((((((((((((($m_sr_BoxesRunTime$().b(this.fB, x$0.fB) && $m_sr_BoxesRunTime$().b(this.dr, x$0.dr)) && $m_sr_BoxesRunTime$().b(this.ds, x$0.ds)) && $m_sr_BoxesRunTime$().b(this.dt, x$0.dt)) && $m_sr_BoxesRunTime$().b(this.du, x$0.du)) && $m_sr_BoxesRunTime$().b(this.dv, x$0.dv)) && $m_sr_BoxesRunTime$().b(this.dw, x$0.dw)) && $m_sr_BoxesRunTime$().b(this.dx, x$0.dx)) && $m_sr_BoxesRunTime$().b(this.dy, x$0.dy)) && $m_sr_BoxesRunTime$().b(this.dg, x$0.dg)) && $m_sr_BoxesRunTime$().b(this.dh, x$0.dh)) && $m_sr_BoxesRunTime$().b(this.di, x$0.di)) && $m_sr_BoxesRunTime$().b(this.dj, x$0.dj)) && $m_sr_BoxesRunTime$().b(this.dk, x$0.dk)) && $m_sr_BoxesRunTime$().b(this.dl, x$0.dl)) && $m_sr_BoxesRunTime$().b(this.dm, x$0.dm)) && $m_sr_BoxesRunTime$().b(this.dn, x$0.dn)) && $m_sr_BoxesRunTime$().b(this.dp, x$0.dp)) && $m_sr_BoxesRunTime$().b(this.dq, x$0.dq))));
});
$p.L = (function() {
  return "Tuple19";
});
$p.p = (function() {
  return (((((((((((((((((((((((((((((((((((((("(" + this.fB) + ",") + this.dr) + ",") + this.ds) + ",") + this.dt) + ",") + this.du) + ",") + this.dv) + ",") + this.dw) + ",") + this.dx) + ",") + this.dy) + ",") + this.dg) + ",") + this.dh) + ",") + this.di) + ",") + this.dj) + ",") + this.dk) + ",") + this.dl) + ",") + this.dm) + ",") + this.dn) + ",") + this.dp) + ",") + this.dq) + ")");
});
function $isArrayOf_T19(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ac)));
}
var $d_T19 = new $TypeData().i($c_T19, "scala.Tuple19", ({
  ac: 1,
  b: 1,
  c: 1,
  bA: 1,
  a: 1
}));
/** @constructor */
function $c_T2(_1, _2) {
  this.S = null;
  this.aq = null;
  this.S = _1;
  this.aq = _2;
}
$p = $c_T2.prototype = new $h_O();
$p.constructor = $c_T2;
/** @constructor */
function $h_T2() {
}
$h_T2.prototype = $p;
$p.I = (function() {
  return 2;
});
$p.t = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n);
});
$p.p = (function() {
  return (((("(" + this.S) + ",") + this.aq) + ")");
});
$p.L = (function() {
  return "Tuple2";
});
$p.Q = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.z = (function() {
  return $m_s_util_hashing_MurmurHash3$().V(this, (-116390334), true);
});
$p.s = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T2) && ($m_sr_BoxesRunTime$().b(this.S, x$1.S) && $m_sr_BoxesRunTime$().b(this.aq, x$1.aq))));
});
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ad)));
}
var $d_T2 = new $TypeData().i($c_T2, "scala.Tuple2", ({
  ad: 1,
  bB: 1,
  c: 1,
  b: 1,
  a: 1
}));
/** @constructor */
function $c_T20(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20) {
  this.fC = null;
  this.dJ = null;
  this.dL = null;
  this.dM = null;
  this.dN = null;
  this.dO = null;
  this.dP = null;
  this.dQ = null;
  this.dR = null;
  this.dz = null;
  this.dA = null;
  this.dB = null;
  this.dC = null;
  this.dD = null;
  this.dE = null;
  this.dF = null;
  this.dG = null;
  this.dH = null;
  this.dI = null;
  this.dK = null;
  this.fC = _1;
  this.dJ = _2;
  this.dL = _3;
  this.dM = _4;
  this.dN = _5;
  this.dO = _6;
  this.dP = _7;
  this.dQ = _8;
  this.dR = _9;
  this.dz = _10;
  this.dA = _11;
  this.dB = _12;
  this.dC = _13;
  this.dD = _14;
  this.dE = _15;
  this.dF = _16;
  this.dG = _17;
  this.dH = _18;
  this.dI = _19;
  this.dK = _20;
}
$p = $c_T20.prototype = new $h_O();
$p.constructor = $c_T20;
/** @constructor */
function $h_T20() {
}
$h_T20.prototype = $p;
$p.Q = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.I = (function() {
  return 20;
});
$p.t = (function(n) {
  return $f_s_Product20__productElement__I__O(this, n);
});
$p.z = (function() {
  return $m_s_util_hashing_MurmurHash3$().V(this, 1328807075, true);
});
$p.s = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T20) && ((((((((((((((((((($m_sr_BoxesRunTime$().b(this.fC, x$0.fC) && $m_sr_BoxesRunTime$().b(this.dJ, x$0.dJ)) && $m_sr_BoxesRunTime$().b(this.dL, x$0.dL)) && $m_sr_BoxesRunTime$().b(this.dM, x$0.dM)) && $m_sr_BoxesRunTime$().b(this.dN, x$0.dN)) && $m_sr_BoxesRunTime$().b(this.dO, x$0.dO)) && $m_sr_BoxesRunTime$().b(this.dP, x$0.dP)) && $m_sr_BoxesRunTime$().b(this.dQ, x$0.dQ)) && $m_sr_BoxesRunTime$().b(this.dR, x$0.dR)) && $m_sr_BoxesRunTime$().b(this.dz, x$0.dz)) && $m_sr_BoxesRunTime$().b(this.dA, x$0.dA)) && $m_sr_BoxesRunTime$().b(this.dB, x$0.dB)) && $m_sr_BoxesRunTime$().b(this.dC, x$0.dC)) && $m_sr_BoxesRunTime$().b(this.dD, x$0.dD)) && $m_sr_BoxesRunTime$().b(this.dE, x$0.dE)) && $m_sr_BoxesRunTime$().b(this.dF, x$0.dF)) && $m_sr_BoxesRunTime$().b(this.dG, x$0.dG)) && $m_sr_BoxesRunTime$().b(this.dH, x$0.dH)) && $m_sr_BoxesRunTime$().b(this.dI, x$0.dI)) && $m_sr_BoxesRunTime$().b(this.dK, x$0.dK))));
});
$p.L = (function() {
  return "Tuple20";
});
$p.p = (function() {
  return (((((((((((((((((((((((((((((((((((((((("(" + this.fC) + ",") + this.dJ) + ",") + this.dL) + ",") + this.dM) + ",") + this.dN) + ",") + this.dO) + ",") + this.dP) + ",") + this.dQ) + ",") + this.dR) + ",") + this.dz) + ",") + this.dA) + ",") + this.dB) + ",") + this.dC) + ",") + this.dD) + ",") + this.dE) + ",") + this.dF) + ",") + this.dG) + ",") + this.dH) + ",") + this.dI) + ",") + this.dK) + ")");
});
function $isArrayOf_T20(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ae)));
}
var $d_T20 = new $TypeData().i($c_T20, "scala.Tuple20", ({
  ae: 1,
  b: 1,
  c: 1,
  bC: 1,
  a: 1
}));
/** @constructor */
function $c_T21(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21) {
  this.fD = null;
  this.e2 = null;
  this.e5 = null;
  this.e6 = null;
  this.e7 = null;
  this.e8 = null;
  this.e9 = null;
  this.ea = null;
  this.eb = null;
  this.dS = null;
  this.dT = null;
  this.dU = null;
  this.dV = null;
  this.dW = null;
  this.dX = null;
  this.dY = null;
  this.dZ = null;
  this.e0 = null;
  this.e1 = null;
  this.e3 = null;
  this.e4 = null;
  this.fD = _1;
  this.e2 = _2;
  this.e5 = _3;
  this.e6 = _4;
  this.e7 = _5;
  this.e8 = _6;
  this.e9 = _7;
  this.ea = _8;
  this.eb = _9;
  this.dS = _10;
  this.dT = _11;
  this.dU = _12;
  this.dV = _13;
  this.dW = _14;
  this.dX = _15;
  this.dY = _16;
  this.dZ = _17;
  this.e0 = _18;
  this.e1 = _19;
  this.e3 = _20;
  this.e4 = _21;
}
$p = $c_T21.prototype = new $h_O();
$p.constructor = $c_T21;
/** @constructor */
function $h_T21() {
}
$h_T21.prototype = $p;
$p.Q = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.I = (function() {
  return 21;
});
$p.t = (function(n) {
  return $f_s_Product21__productElement__I__O(this, n);
});
$p.z = (function() {
  return $m_s_util_hashing_MurmurHash3$().V(this, (-21288119), true);
});
$p.s = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T21) && (((((((((((((((((((($m_sr_BoxesRunTime$().b(this.fD, x$0.fD) && $m_sr_BoxesRunTime$().b(this.e2, x$0.e2)) && $m_sr_BoxesRunTime$().b(this.e5, x$0.e5)) && $m_sr_BoxesRunTime$().b(this.e6, x$0.e6)) && $m_sr_BoxesRunTime$().b(this.e7, x$0.e7)) && $m_sr_BoxesRunTime$().b(this.e8, x$0.e8)) && $m_sr_BoxesRunTime$().b(this.e9, x$0.e9)) && $m_sr_BoxesRunTime$().b(this.ea, x$0.ea)) && $m_sr_BoxesRunTime$().b(this.eb, x$0.eb)) && $m_sr_BoxesRunTime$().b(this.dS, x$0.dS)) && $m_sr_BoxesRunTime$().b(this.dT, x$0.dT)) && $m_sr_BoxesRunTime$().b(this.dU, x$0.dU)) && $m_sr_BoxesRunTime$().b(this.dV, x$0.dV)) && $m_sr_BoxesRunTime$().b(this.dW, x$0.dW)) && $m_sr_BoxesRunTime$().b(this.dX, x$0.dX)) && $m_sr_BoxesRunTime$().b(this.dY, x$0.dY)) && $m_sr_BoxesRunTime$().b(this.dZ, x$0.dZ)) && $m_sr_BoxesRunTime$().b(this.e0, x$0.e0)) && $m_sr_BoxesRunTime$().b(this.e1, x$0.e1)) && $m_sr_BoxesRunTime$().b(this.e3, x$0.e3)) && $m_sr_BoxesRunTime$().b(this.e4, x$0.e4))));
});
$p.L = (function() {
  return "Tuple21";
});
$p.p = (function() {
  return (((((((((((((((((((((((((((((((((((((((((("(" + this.fD) + ",") + this.e2) + ",") + this.e5) + ",") + this.e6) + ",") + this.e7) + ",") + this.e8) + ",") + this.e9) + ",") + this.ea) + ",") + this.eb) + ",") + this.dS) + ",") + this.dT) + ",") + this.dU) + ",") + this.dV) + ",") + this.dW) + ",") + this.dX) + ",") + this.dY) + ",") + this.dZ) + ",") + this.e0) + ",") + this.e1) + ",") + this.e3) + ",") + this.e4) + ")");
});
function $isArrayOf_T21(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.af)));
}
var $d_T21 = new $TypeData().i($c_T21, "scala.Tuple21", ({
  af: 1,
  b: 1,
  c: 1,
  bD: 1,
  a: 1
}));
/** @constructor */
function $c_T22(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22) {
  this.fE = null;
  this.em = null;
  this.eq = null;
  this.er = null;
  this.es = null;
  this.et = null;
  this.eu = null;
  this.ev = null;
  this.ew = null;
  this.ec = null;
  this.ed = null;
  this.ee = null;
  this.ef = null;
  this.eg = null;
  this.eh = null;
  this.ei = null;
  this.ej = null;
  this.ek = null;
  this.el = null;
  this.en = null;
  this.eo = null;
  this.ep = null;
  this.fE = _1;
  this.em = _2;
  this.eq = _3;
  this.er = _4;
  this.es = _5;
  this.et = _6;
  this.eu = _7;
  this.ev = _8;
  this.ew = _9;
  this.ec = _10;
  this.ed = _11;
  this.ee = _12;
  this.ef = _13;
  this.eg = _14;
  this.eh = _15;
  this.ei = _16;
  this.ej = _17;
  this.ek = _18;
  this.el = _19;
  this.en = _20;
  this.eo = _21;
  this.ep = _22;
}
$p = $c_T22.prototype = new $h_O();
$p.constructor = $c_T22;
/** @constructor */
function $h_T22() {
}
$h_T22.prototype = $p;
$p.Q = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.I = (function() {
  return 22;
});
$p.t = (function(n) {
  return $f_s_Product22__productElement__I__O(this, n);
});
$p.z = (function() {
  return $m_s_util_hashing_MurmurHash3$().V(this, (-139445068), true);
});
$p.s = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T22) && ((((((((((((((((((((($m_sr_BoxesRunTime$().b(this.fE, x$0.fE) && $m_sr_BoxesRunTime$().b(this.em, x$0.em)) && $m_sr_BoxesRunTime$().b(this.eq, x$0.eq)) && $m_sr_BoxesRunTime$().b(this.er, x$0.er)) && $m_sr_BoxesRunTime$().b(this.es, x$0.es)) && $m_sr_BoxesRunTime$().b(this.et, x$0.et)) && $m_sr_BoxesRunTime$().b(this.eu, x$0.eu)) && $m_sr_BoxesRunTime$().b(this.ev, x$0.ev)) && $m_sr_BoxesRunTime$().b(this.ew, x$0.ew)) && $m_sr_BoxesRunTime$().b(this.ec, x$0.ec)) && $m_sr_BoxesRunTime$().b(this.ed, x$0.ed)) && $m_sr_BoxesRunTime$().b(this.ee, x$0.ee)) && $m_sr_BoxesRunTime$().b(this.ef, x$0.ef)) && $m_sr_BoxesRunTime$().b(this.eg, x$0.eg)) && $m_sr_BoxesRunTime$().b(this.eh, x$0.eh)) && $m_sr_BoxesRunTime$().b(this.ei, x$0.ei)) && $m_sr_BoxesRunTime$().b(this.ej, x$0.ej)) && $m_sr_BoxesRunTime$().b(this.ek, x$0.ek)) && $m_sr_BoxesRunTime$().b(this.el, x$0.el)) && $m_sr_BoxesRunTime$().b(this.en, x$0.en)) && $m_sr_BoxesRunTime$().b(this.eo, x$0.eo)) && $m_sr_BoxesRunTime$().b(this.ep, x$0.ep))));
});
$p.L = (function() {
  return "Tuple22";
});
$p.p = (function() {
  return (((((((((((((((((((((((((((((((((((((((((((("(" + this.fE) + ",") + this.em) + ",") + this.eq) + ",") + this.er) + ",") + this.es) + ",") + this.et) + ",") + this.eu) + ",") + this.ev) + ",") + this.ew) + ",") + this.ec) + ",") + this.ed) + ",") + this.ee) + ",") + this.ef) + ",") + this.eg) + ",") + this.eh) + ",") + this.ei) + ",") + this.ej) + ",") + this.ek) + ",") + this.el) + ",") + this.en) + ",") + this.eo) + ",") + this.ep) + ")");
});
function $isArrayOf_T22(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ag)));
}
var $d_T22 = new $TypeData().i($c_T22, "scala.Tuple22", ({
  ag: 1,
  b: 1,
  c: 1,
  bE: 1,
  a: 1
}));
/** @constructor */
function $c_T3(_1, _2, _3) {
  this.bd = null;
  this.aZ = null;
  this.b0 = null;
  this.bd = _1;
  this.aZ = _2;
  this.b0 = _3;
}
$p = $c_T3.prototype = new $h_O();
$p.constructor = $c_T3;
/** @constructor */
function $h_T3() {
}
$h_T3.prototype = $p;
$p.Q = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.I = (function() {
  return 3;
});
$p.t = (function(n) {
  return $f_s_Product3__productElement__I__O(this, n);
});
$p.z = (function() {
  return $m_s_util_hashing_MurmurHash3$().V(this, (-192629203), true);
});
$p.s = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T3) && (($m_sr_BoxesRunTime$().b(this.bd, x$0.bd) && $m_sr_BoxesRunTime$().b(this.aZ, x$0.aZ)) && $m_sr_BoxesRunTime$().b(this.b0, x$0.b0))));
});
$p.L = (function() {
  return "Tuple3";
});
$p.p = (function() {
  return (((((("(" + this.bd) + ",") + this.aZ) + ",") + this.b0) + ")");
});
function $isArrayOf_T3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ah)));
}
var $d_T3 = new $TypeData().i($c_T3, "scala.Tuple3", ({
  ah: 1,
  b: 1,
  c: 1,
  bF: 1,
  a: 1
}));
/** @constructor */
function $c_T4(_1, _2, _3, _4) {
  this.fF = null;
  this.ex = null;
  this.ey = null;
  this.ez = null;
  this.fF = _1;
  this.ex = _2;
  this.ey = _3;
  this.ez = _4;
}
$p = $c_T4.prototype = new $h_O();
$p.constructor = $c_T4;
/** @constructor */
function $h_T4() {
}
$h_T4.prototype = $p;
$p.Q = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.I = (function() {
  return 4;
});
$p.t = (function(n) {
  return $f_s_Product4__productElement__I__O(this, n);
});
$p.z = (function() {
  return $m_s_util_hashing_MurmurHash3$().V(this, (-1542739752), true);
});
$p.s = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T4) && ((($m_sr_BoxesRunTime$().b(this.fF, x$0.fF) && $m_sr_BoxesRunTime$().b(this.ex, x$0.ex)) && $m_sr_BoxesRunTime$().b(this.ey, x$0.ey)) && $m_sr_BoxesRunTime$().b(this.ez, x$0.ez))));
});
$p.L = (function() {
  return "Tuple4";
});
$p.p = (function() {
  return (((((((("(" + this.fF) + ",") + this.ex) + ",") + this.ey) + ",") + this.ez) + ")");
});
function $isArrayOf_T4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ai)));
}
var $d_T4 = new $TypeData().i($c_T4, "scala.Tuple4", ({
  ai: 1,
  b: 1,
  c: 1,
  bG: 1,
  a: 1
}));
/** @constructor */
function $c_T5(_1, _2, _3, _4, _5) {
  this.fG = null;
  this.eA = null;
  this.eB = null;
  this.eC = null;
  this.eD = null;
  this.fG = _1;
  this.eA = _2;
  this.eB = _3;
  this.eC = _4;
  this.eD = _5;
}
$p = $c_T5.prototype = new $h_O();
$p.constructor = $c_T5;
/** @constructor */
function $h_T5() {
}
$h_T5.prototype = $p;
$p.Q = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.I = (function() {
  return 5;
});
$p.t = (function(n) {
  return $f_s_Product5__productElement__I__O(this, n);
});
$p.z = (function() {
  return $m_s_util_hashing_MurmurHash3$().V(this, 417360321, true);
});
$p.s = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T5) && (((($m_sr_BoxesRunTime$().b(this.fG, x$0.fG) && $m_sr_BoxesRunTime$().b(this.eA, x$0.eA)) && $m_sr_BoxesRunTime$().b(this.eB, x$0.eB)) && $m_sr_BoxesRunTime$().b(this.eC, x$0.eC)) && $m_sr_BoxesRunTime$().b(this.eD, x$0.eD))));
});
$p.L = (function() {
  return "Tuple5";
});
$p.p = (function() {
  return (((((((((("(" + this.fG) + ",") + this.eA) + ",") + this.eB) + ",") + this.eC) + ",") + this.eD) + ")");
});
function $isArrayOf_T5(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aj)));
}
var $d_T5 = new $TypeData().i($c_T5, "scala.Tuple5", ({
  aj: 1,
  b: 1,
  c: 1,
  bH: 1,
  a: 1
}));
/** @constructor */
function $c_T6(_1, _2, _3, _4, _5, _6) {
  this.fH = null;
  this.eE = null;
  this.eF = null;
  this.eG = null;
  this.eH = null;
  this.eI = null;
  this.fH = _1;
  this.eE = _2;
  this.eF = _3;
  this.eG = _4;
  this.eH = _5;
  this.eI = _6;
}
$p = $c_T6.prototype = new $h_O();
$p.constructor = $c_T6;
/** @constructor */
function $h_T6() {
}
$h_T6.prototype = $p;
$p.Q = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.I = (function() {
  return 6;
});
$p.t = (function(n) {
  return $f_s_Product6__productElement__I__O(this, n);
});
$p.z = (function() {
  return $m_s_util_hashing_MurmurHash3$().V(this, (-1037607828), true);
});
$p.s = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T6) && ((((($m_sr_BoxesRunTime$().b(this.fH, x$0.fH) && $m_sr_BoxesRunTime$().b(this.eE, x$0.eE)) && $m_sr_BoxesRunTime$().b(this.eF, x$0.eF)) && $m_sr_BoxesRunTime$().b(this.eG, x$0.eG)) && $m_sr_BoxesRunTime$().b(this.eH, x$0.eH)) && $m_sr_BoxesRunTime$().b(this.eI, x$0.eI))));
});
$p.L = (function() {
  return "Tuple6";
});
$p.p = (function() {
  return (((((((((((("(" + this.fH) + ",") + this.eE) + ",") + this.eF) + ",") + this.eG) + ",") + this.eH) + ",") + this.eI) + ")");
});
function $isArrayOf_T6(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ak)));
}
var $d_T6 = new $TypeData().i($c_T6, "scala.Tuple6", ({
  ak: 1,
  b: 1,
  c: 1,
  bI: 1,
  a: 1
}));
/** @constructor */
function $c_T7(_1, _2, _3, _4, _5, _6, _7) {
  this.fI = null;
  this.eJ = null;
  this.eK = null;
  this.eL = null;
  this.eM = null;
  this.eN = null;
  this.eO = null;
  this.fI = _1;
  this.eJ = _2;
  this.eK = _3;
  this.eL = _4;
  this.eM = _5;
  this.eN = _6;
  this.eO = _7;
}
$p = $c_T7.prototype = new $h_O();
$p.constructor = $c_T7;
/** @constructor */
function $h_T7() {
}
$h_T7.prototype = $p;
$p.Q = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.I = (function() {
  return 7;
});
$p.t = (function(n) {
  return $f_s_Product7__productElement__I__O(this, n);
});
$p.z = (function() {
  return $m_s_util_hashing_MurmurHash3$().V(this, (-1050932777), true);
});
$p.s = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T7) && (((((($m_sr_BoxesRunTime$().b(this.fI, x$0.fI) && $m_sr_BoxesRunTime$().b(this.eJ, x$0.eJ)) && $m_sr_BoxesRunTime$().b(this.eK, x$0.eK)) && $m_sr_BoxesRunTime$().b(this.eL, x$0.eL)) && $m_sr_BoxesRunTime$().b(this.eM, x$0.eM)) && $m_sr_BoxesRunTime$().b(this.eN, x$0.eN)) && $m_sr_BoxesRunTime$().b(this.eO, x$0.eO))));
});
$p.L = (function() {
  return "Tuple7";
});
$p.p = (function() {
  return (((((((((((((("(" + this.fI) + ",") + this.eJ) + ",") + this.eK) + ",") + this.eL) + ",") + this.eM) + ",") + this.eN) + ",") + this.eO) + ")");
});
function $isArrayOf_T7(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.al)));
}
var $d_T7 = new $TypeData().i($c_T7, "scala.Tuple7", ({
  al: 1,
  b: 1,
  c: 1,
  bJ: 1,
  a: 1
}));
/** @constructor */
function $c_T8(_1, _2, _3, _4, _5, _6, _7, _8) {
  this.fJ = null;
  this.eP = null;
  this.eQ = null;
  this.eR = null;
  this.eS = null;
  this.eT = null;
  this.eU = null;
  this.eV = null;
  this.fJ = _1;
  this.eP = _2;
  this.eQ = _3;
  this.eR = _4;
  this.eS = _5;
  this.eT = _6;
  this.eU = _7;
  this.eV = _8;
}
$p = $c_T8.prototype = new $h_O();
$p.constructor = $c_T8;
/** @constructor */
function $h_T8() {
}
$h_T8.prototype = $p;
$p.Q = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.I = (function() {
  return 8;
});
$p.t = (function(n) {
  return $f_s_Product8__productElement__I__O(this, n);
});
$p.z = (function() {
  return $m_s_util_hashing_MurmurHash3$().V(this, 1998822530, true);
});
$p.s = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T8) && ((((((($m_sr_BoxesRunTime$().b(this.fJ, x$0.fJ) && $m_sr_BoxesRunTime$().b(this.eP, x$0.eP)) && $m_sr_BoxesRunTime$().b(this.eQ, x$0.eQ)) && $m_sr_BoxesRunTime$().b(this.eR, x$0.eR)) && $m_sr_BoxesRunTime$().b(this.eS, x$0.eS)) && $m_sr_BoxesRunTime$().b(this.eT, x$0.eT)) && $m_sr_BoxesRunTime$().b(this.eU, x$0.eU)) && $m_sr_BoxesRunTime$().b(this.eV, x$0.eV))));
});
$p.L = (function() {
  return "Tuple8";
});
$p.p = (function() {
  return (((((((((((((((("(" + this.fJ) + ",") + this.eP) + ",") + this.eQ) + ",") + this.eR) + ",") + this.eS) + ",") + this.eT) + ",") + this.eU) + ",") + this.eV) + ")");
});
function $isArrayOf_T8(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.am)));
}
var $d_T8 = new $TypeData().i($c_T8, "scala.Tuple8", ({
  am: 1,
  b: 1,
  c: 1,
  bK: 1,
  a: 1
}));
/** @constructor */
function $c_T9(_1, _2, _3, _4, _5, _6, _7, _8, _9) {
  this.fK = null;
  this.eW = null;
  this.eX = null;
  this.eY = null;
  this.eZ = null;
  this.f0 = null;
  this.f1 = null;
  this.f2 = null;
  this.f3 = null;
  this.fK = _1;
  this.eW = _2;
  this.eX = _3;
  this.eY = _4;
  this.eZ = _5;
  this.f0 = _6;
  this.f1 = _7;
  this.f2 = _8;
  this.f3 = _9;
}
$p = $c_T9.prototype = new $h_O();
$p.constructor = $c_T9;
/** @constructor */
function $h_T9() {
}
$h_T9.prototype = $p;
$p.Q = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.I = (function() {
  return 9;
});
$p.t = (function(n) {
  return $f_s_Product9__productElement__I__O(this, n);
});
$p.z = (function() {
  return $m_s_util_hashing_MurmurHash3$().V(this, (-1807911176), true);
});
$p.s = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T9) && (((((((($m_sr_BoxesRunTime$().b(this.fK, x$0.fK) && $m_sr_BoxesRunTime$().b(this.eW, x$0.eW)) && $m_sr_BoxesRunTime$().b(this.eX, x$0.eX)) && $m_sr_BoxesRunTime$().b(this.eY, x$0.eY)) && $m_sr_BoxesRunTime$().b(this.eZ, x$0.eZ)) && $m_sr_BoxesRunTime$().b(this.f0, x$0.f0)) && $m_sr_BoxesRunTime$().b(this.f1, x$0.f1)) && $m_sr_BoxesRunTime$().b(this.f2, x$0.f2)) && $m_sr_BoxesRunTime$().b(this.f3, x$0.f3))));
});
$p.L = (function() {
  return "Tuple9";
});
$p.p = (function() {
  return (((((((((((((((((("(" + this.fK) + ",") + this.eW) + ",") + this.eX) + ",") + this.eY) + ",") + this.eZ) + ",") + this.f0) + ",") + this.f1) + ",") + this.f2) + ",") + this.f3) + ")");
});
function $isArrayOf_T9(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.an)));
}
var $d_T9 = new $TypeData().i($c_T9, "scala.Tuple9", ({
  an: 1,
  b: 1,
  c: 1,
  bL: 1,
  a: 1
}));
function $f_sc_Iterable__toString__T($thiz) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, ($thiz.g9() + "("), ", ", ")");
}
/** @constructor */
function $c_sc_Iterator$$anon$19() {
}
$p = $c_sc_Iterator$$anon$19.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$19;
/** @constructor */
function $h_sc_Iterator$$anon$19() {
}
$h_sc_Iterator$$anon$19.prototype = $p;
$p.U = (function() {
  return false;
});
$p.ot = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator");
});
$p.am = (function() {
  return 0;
});
$p.P = (function() {
  this.ot();
});
$p.hV = (function(from, until) {
  return this;
});
var $d_sc_Iterator$$anon$19 = new $TypeData().i($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  bV: 1,
  n: 1,
  d: 1,
  e: 1,
  s: 1
}));
function $p_sc_Iterator$ConcatIterator__merge$1__V($thiz) {
  while (true) {
    if (($thiz.an instanceof $c_sc_Iterator$ConcatIterator)) {
      var c = $thiz.an;
      $thiz.an = c.an;
      $thiz.bf = c.bf;
      if ((c.ax !== null)) {
        if (($thiz.aw === null)) {
          $thiz.aw = c.aw;
        }
        var x$proxy10 = c.aw;
        if ((x$proxy10 === null)) {
          $m_sr_Scala3RunTime$().hR();
        }
        x$proxy10.gh = $thiz.ax;
        $thiz.ax = c.ax;
      }
    } else {
      return (void 0);
    }
  }
}
function $p_sc_Iterator$ConcatIterator__advance$1__Z($thiz) {
  while (true) {
    if (($thiz.ax === null)) {
      $thiz.an = null;
      $thiz.aw = null;
      return false;
    } else {
      $thiz.an = $thiz.ax.nE();
      if (($thiz.aw === $thiz.ax)) {
        var x$proxy12 = $thiz.aw;
        if ((x$proxy12 === null)) {
          $m_sr_Scala3RunTime$().hR();
        }
        $thiz.aw = x$proxy12.gh;
      }
      $thiz.ax = $thiz.ax.gh;
      $p_sc_Iterator$ConcatIterator__merge$1__V($thiz);
      if ($thiz.bf) {
        return true;
      } else {
        if ((!(($thiz.an !== null) && $thiz.an.U()))) {
          continue;
        }
        $thiz.bf = true;
        return true;
      }
    }
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIterator(from) {
  this.an = null;
  this.ax = null;
  this.aw = null;
  this.bf = false;
  this.an = from;
  this.ax = null;
  this.aw = null;
  this.bf = false;
}
$p = $c_sc_Iterator$ConcatIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$ConcatIterator;
/** @constructor */
function $h_sc_Iterator$ConcatIterator() {
}
$h_sc_Iterator$ConcatIterator.prototype = $p;
$p.U = (function() {
  if (this.bf) {
    return true;
  } else if ((this.an !== null)) {
    if (this.an.U()) {
      this.bf = true;
      return true;
    } else {
      return $p_sc_Iterator$ConcatIterator__advance$1__Z(this);
    }
  } else {
    return false;
  }
});
$p.P = (function() {
  if (this.U()) {
    this.bf = false;
    var x$proxy13 = this.an;
    if ((x$proxy13 === null)) {
      $m_sr_Scala3RunTime$().hR();
    }
    return x$proxy13.P();
  } else {
    return $m_sc_Iterator$().b2.P();
  }
});
$p.n8 = (function(that) {
  var c = new $c_sc_Iterator$ConcatIteratorCell(that, null);
  if ((this.ax === null)) {
    this.ax = c;
    this.aw = c;
  } else {
    var x$proxy14 = this.aw;
    if ((x$proxy14 === null)) {
      $m_sr_Scala3RunTime$().hR();
    }
    x$proxy14.gh = c;
    this.aw = c;
  }
  if ((this.an === null)) {
    this.an = $m_sc_Iterator$().b2;
  }
  return this;
});
function $isArrayOf_sc_Iterator$ConcatIterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.as)));
}
var $d_sc_Iterator$ConcatIterator = new $TypeData().i($c_sc_Iterator$ConcatIterator, "scala.collection.Iterator$ConcatIterator", ({
  as: 1,
  n: 1,
  d: 1,
  e: 1,
  s: 1
}));
function $p_sc_Iterator$SliceIterator__skip__V($thiz) {
  while (($thiz.b3 > 0)) {
    if ($thiz.bg.U()) {
      $thiz.bg.P();
      $thiz.b3 = (($thiz.b3 - 1) | 0);
    } else {
      $thiz.b3 = 0;
    }
  }
}
function $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I($thiz, lo$1) {
  if (($thiz.ar < 0)) {
    return (-1);
  } else {
    var that = (($thiz.ar - lo$1) | 0);
    return ((that < 0) ? 0 : that);
  }
}
/** @constructor */
function $c_sc_Iterator$SliceIterator(underlying, start, limit) {
  this.bg = null;
  this.ar = 0;
  this.b3 = 0;
  this.bg = underlying;
  this.ar = limit;
  this.b3 = start;
}
$p = $c_sc_Iterator$SliceIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$SliceIterator;
/** @constructor */
function $h_sc_Iterator$SliceIterator() {
}
$h_sc_Iterator$SliceIterator.prototype = $p;
$p.am = (function() {
  var size = this.bg.am();
  if ((size < 0)) {
    return (-1);
  } else {
    var that = ((size - this.b3) | 0);
    var dropSize = ((that < 0) ? 0 : that);
    if ((this.ar < 0)) {
      return dropSize;
    } else {
      var x = this.ar;
      return ((x < dropSize) ? x : dropSize);
    }
  }
});
$p.U = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  return ((this.ar !== 0) && this.bg.U());
});
$p.P = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  if ((this.ar > 0)) {
    this.ar = ((this.ar - 1) | 0);
    return this.bg.P();
  } else {
    return ((this.ar < 0) ? this.bg.P() : $m_sc_Iterator$().b2.P());
  }
});
$p.hV = (function(from, until) {
  var lo = ((from > 0) ? from : 0);
  if ((until < 0)) {
    var rest = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
  } else if ((until <= lo)) {
    var rest = 0;
  } else if ((this.ar < 0)) {
    var rest = ((until - lo) | 0);
  } else {
    var x = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
    var that = ((until - lo) | 0);
    var rest = ((x < that) ? x : that);
  }
  var sum = ((this.b3 + lo) | 0);
  if ((rest === 0)) {
    return $m_sc_Iterator$().b2;
  } else if ((sum < 0)) {
    this.b3 = 2147483647;
    this.ar = 0;
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => new $c_sc_Iterator$SliceIterator(this.bg, ((sum - 2147483647) | 0), rest))));
  } else {
    this.b3 = sum;
    this.ar = rest;
    return this;
  }
});
var $d_sc_Iterator$SliceIterator = new $TypeData().i($c_sc_Iterator$SliceIterator, "scala.collection.Iterator$SliceIterator", ({
  bX: 1,
  n: 1,
  d: 1,
  e: 1,
  s: 1
}));
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  var skipped = $thiz.ni(n);
  if (skipped.a8()) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  return skipped.jd();
}
function $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  return ($is_sc_LinearSeq(that) ? $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, $thiz, that) : $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that));
}
function $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, a, b) {
  var b$tailLocal1 = b;
  var a$tailLocal1 = a;
  while (true) {
    if ((a$tailLocal1 === b$tailLocal1)) {
      return true;
    } else {
      if ((((!a$tailLocal1.a8()) && (!b$tailLocal1.a8())) && $m_sr_BoxesRunTime$().b(a$tailLocal1.jd(), b$tailLocal1.jd()))) {
        var a$tailLocal1$tmp1 = a$tailLocal1.jm();
        var b$tailLocal1$tmp1 = b$tailLocal1.jm();
        a$tailLocal1 = a$tailLocal1$tmp1;
        b$tailLocal1 = b$tailLocal1$tmp1;
        continue;
      }
      return (a$tailLocal1.a8() && b$tailLocal1.a8());
    }
  }
}
/** @constructor */
function $c_sci_List$() {
  $n_sci_List$ = this;
  var _1 = $m_sci_Nil$();
  $m_sci_Nil$();
}
$p = $c_sci_List$.prototype = new $h_O();
$p.constructor = $c_sci_List$;
/** @constructor */
function $h_sci_List$() {
}
$h_sci_List$.prototype = $p;
var $d_sci_List$ = new $TypeData().i($c_sci_List$, "scala.collection.immutable.List$", ({
  cc: 1,
  a: 1,
  ar: 1,
  bZ: 1,
  c3: 1
}));
var $n_sci_List$;
function $m_sci_List$() {
  if ((!$n_sci_List$)) {
    $n_sci_List$ = new $c_sci_List$();
  }
  return $n_sci_List$;
}
/** @constructor */
function $c_sr_ScalaRunTime$$anon$1(x$1) {
  this.jQ = null;
  this.gj = 0;
  this.jP = 0;
  this.jQ = x$1;
  this.gj = 0;
  this.jP = x$1.I();
}
$p = $c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $p;
$p.U = (function() {
  return (this.gj < this.jP);
});
$p.P = (function() {
  var result = this.jQ.t(this.gj);
  this.gj = ((1 + this.gj) | 0);
  return result;
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().i($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
  cM: 1,
  n: 1,
  d: 1,
  e: 1,
  s: 1
}));
function $f_jl_Double__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Double__hashCode__I($thiz) {
  var valueInt = ($thiz | 0);
  if (((valueInt === $thiz) && ((1.0 / $thiz) !== (-Infinity)))) {
    return valueInt;
  } else if (($thiz !== $thiz)) {
    return 2146959360;
  } else {
    var fpBitsDataView = $fpBitsDataView;
    fpBitsDataView.setFloat64(0, $thiz, true);
    return ((fpBitsDataView.getInt32(0, true) | 0) ^ (fpBitsDataView.getInt32(4, true) | 0));
  }
}
function $f_jl_Double__toString__T($thiz) {
  return ("" + $thiz);
}
function $isArrayOf_jl_Double(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.Y)));
}
var $d_jl_Double = new $TypeData().i(0, "java.lang.Double", ({
  Y: 1,
  m: 1,
  a: 1,
  h: 1,
  g: 1,
  z: 1
}), ((x) => ((typeof x) === "number")));
function $f_jl_Float__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Float__hashCode__I($thiz) {
  var value = $thiz;
  var valueInt = (value | 0);
  if (((valueInt === value) && ((1.0 / value) !== (-Infinity)))) {
    return valueInt;
  } else if ((value !== value)) {
    return 2146959360;
  } else {
    var fpBitsDataView = $fpBitsDataView;
    fpBitsDataView.setFloat64(0, value, true);
    return ((fpBitsDataView.getInt32(0, true) | 0) ^ (fpBitsDataView.getInt32(4, true) | 0));
  }
}
function $f_jl_Float__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Float = new $TypeData().i(0, "java.lang.Float", ({
  aX: 1,
  m: 1,
  a: 1,
  h: 1,
  g: 1,
  z: 1
}), ((x) => $isFloat(x)));
function $f_jl_Integer__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Integer__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Integer__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Integer = new $TypeData().i(0, "java.lang.Integer", ({
  aZ: 1,
  m: 1,
  a: 1,
  h: 1,
  g: 1,
  z: 1
}), ((x) => $isInt(x)));
function $f_jl_Long__equals__O__Z($thiz, $thizhi, that) {
  if ((that instanceof $Long)) {
    var $x_1 = that;
    var this$1_$_lo = $x_1.l;
    var this$1_$_hi = $x_1.h;
    return ((($thiz ^ this$1_$_lo) | ($thizhi ^ this$1_$_hi)) === 0);
  } else {
    return false;
  }
}
function $f_jl_Long__hashCode__I($thiz, $thizhi) {
  return ($thiz ^ $thizhi);
}
function $f_jl_Long__toString__T($thiz, $thizhi) {
  return $m_RTLong$().mC($thiz, $thizhi);
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a0)));
}
var $d_jl_Long = new $TypeData().i(0, "java.lang.Long", ({
  a0: 1,
  m: 1,
  a: 1,
  h: 1,
  g: 1,
  z: 1
}), ((x) => (x instanceof $Long)));
class $c_jl_NumberFormatException extends $c_jl_IllegalArgumentException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_NumberFormatException = new $TypeData().i($c_jl_NumberFormatException, "java.lang.NumberFormatException", ({
  b2: 1,
  Z: 1,
  j: 1,
  i: 1,
  f: 1,
  a: 1
}));
function $f_T__hashCode__I($thiz) {
  var n = $thiz.length;
  var h = 0;
  var i = 0;
  while ((i !== n)) {
    h = (((((h << 5) - h) | 0) + $thiz.charCodeAt(i)) | 0);
    i = ((1 + i) | 0);
  }
  return h;
}
function $f_T__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_T__indexOf__I__I($thiz, ch) {
  var str = $m_jl_Character$().pc(ch);
  return ($thiz.indexOf(str) | 0);
}
function $f_T__toString__T($thiz) {
  return $thiz;
}
var $d_T = new $TypeData().i(0, "java.lang.String", ({
  b5: 1,
  a: 1,
  h: 1,
  H: 1,
  g: 1,
  z: 1
}), ((x) => ((typeof x) === "string")));
/** @constructor */
function $c_sc_AbstractIterable() {
}
$p = $c_sc_AbstractIterable.prototype = new $h_O();
$p.constructor = $c_sc_AbstractIterable;
/** @constructor */
function $h_sc_AbstractIterable() {
}
$h_sc_AbstractIterable.prototype = $p;
$p.gP = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.j3 = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.g9 = (function() {
  return this.fo();
});
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator(xs) {
  this.hg = null;
  this.b1 = 0;
  this.gg = 0;
  this.hg = xs;
  this.b1 = 0;
  this.gg = $m_jl_reflect_Array$().jc(this.hg);
}
$p = $c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
}
$h_sc_ArrayOps$ArrayIterator.prototype = $p;
$p.am = (function() {
  return ((this.gg - this.b1) | 0);
});
$p.U = (function() {
  return (this.b1 < this.gg);
});
$p.P = (function() {
  if ((this.b1 >= $m_jl_reflect_Array$().jc(this.hg))) {
    $m_sc_Iterator$().b2.P();
  }
  var r = $m_sr_ScalaRunTime$().g8(this.hg, this.b1);
  this.b1 = ((1 + this.b1) | 0);
  return r;
});
$p.hO = (function(n) {
  if ((n > 0)) {
    var newPos = ((this.b1 + n) | 0);
    if ((newPos < 0)) {
      var $x_1 = this.gg;
    } else {
      var a = this.gg;
      var $x_1 = ((a < newPos) ? a : newPos);
    }
    this.b1 = $x_1;
  }
  return this;
});
var $d_sc_ArrayOps$ArrayIterator = new $TypeData().i($c_sc_ArrayOps$ArrayIterator, "scala.collection.ArrayOps$ArrayIterator", ({
  bP: 1,
  n: 1,
  d: 1,
  e: 1,
  s: 1,
  a: 1
}));
function $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I($thiz, value) {
  return ((value < 0) ? 0 : ((value > $thiz.aD) ? $thiz.aD : value));
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator(self) {
  this.jC = null;
  this.be = 0;
  this.aD = 0;
  this.jC = self;
  this.be = 0;
  this.aD = self.R();
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $p;
$p.am = (function() {
  return this.aD;
});
$p.U = (function() {
  return (this.aD > 0);
});
$p.P = (function() {
  if ((this.aD > 0)) {
    var r = this.jC.a2(this.be);
    this.be = ((1 + this.be) | 0);
    this.aD = ((this.aD - 1) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().b2.P();
  }
});
$p.hO = (function(n) {
  if ((n > 0)) {
    this.be = ((this.be + n) | 0);
    var b = ((this.aD - n) | 0);
    this.aD = ((b < 0) ? 0 : b);
  }
  return this;
});
$p.hV = (function(from, until) {
  var formatFrom = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, from);
  var formatUntil = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, until);
  var b = ((formatUntil - formatFrom) | 0);
  this.aD = ((b < 0) ? 0 : b);
  this.be = ((this.be + formatFrom) | 0);
  return this;
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
  bT: 1,
  n: 1,
  d: 1,
  e: 1,
  s: 1,
  a: 1
}));
function $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($thiz) {
  if ((!$thiz.jG)) {
    $thiz.jF = new $c_sci_ArraySeq$ofRef(new ($d_sr_Nothing$.r().C)(0));
    $thiz.jG = true;
  }
  return $thiz.jF;
}
/** @constructor */
function $c_sci_ArraySeq$() {
  this.jF = null;
  this.jG = false;
}
$p = $c_sci_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_sci_ArraySeq$;
/** @constructor */
function $h_sci_ArraySeq$() {
}
$h_sci_ArraySeq$.prototype = $p;
var $d_sci_ArraySeq$ = new $TypeData().i($c_sci_ArraySeq$, "scala.collection.immutable.ArraySeq$", ({
  c8: 1,
  a: 1,
  aq: 1,
  ao: 1,
  ap: 1,
  at: 1
}));
var $n_sci_ArraySeq$;
function $m_sci_ArraySeq$() {
  if ((!$n_sci_ArraySeq$)) {
    $n_sci_ArraySeq$ = new $c_sci_ArraySeq$();
  }
  return $n_sci_ArraySeq$;
}
/** @constructor */
function $c_scm_ArraySeq$() {
  this.jI = null;
  $n_scm_ArraySeq$ = this;
  this.jI = new $c_scm_ArraySeq$ofRef(new $ac_O(0));
}
$p = $c_scm_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_scm_ArraySeq$;
/** @constructor */
function $h_scm_ArraySeq$() {
}
$h_scm_ArraySeq$.prototype = $p;
var $d_scm_ArraySeq$ = new $TypeData().i($c_scm_ArraySeq$, "scala.collection.mutable.ArraySeq$", ({
  cf: 1,
  a: 1,
  aq: 1,
  ao: 1,
  ap: 1,
  at: 1
}));
var $n_scm_ArraySeq$;
function $m_scm_ArraySeq$() {
  if ((!$n_scm_ArraySeq$)) {
    $n_scm_ArraySeq$ = new $c_scm_ArraySeq$();
  }
  return $n_scm_ArraySeq$;
}
/** @constructor */
function $c_T$package$EmptyTuple$() {
}
$p = $c_T$package$EmptyTuple$.prototype = new $h_O();
$p.constructor = $c_T$package$EmptyTuple$;
/** @constructor */
function $h_T$package$EmptyTuple$() {
}
$h_T$package$EmptyTuple$.prototype = $p;
$p.Q = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 924202651;
});
$p.I = (function() {
  return 0;
});
$p.L = (function() {
  return "EmptyTuple";
});
$p.t = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
});
$p.p = (function() {
  return "()";
});
var $d_T$package$EmptyTuple$ = new $TypeData().i($c_T$package$EmptyTuple$, "scala.Tuple$package$EmptyTuple$", ({
  bM: 1,
  b: 1,
  c: 1,
  a: 1,
  cl: 1,
  cm: 1,
  cn: 1
}));
var $n_T$package$EmptyTuple$;
function $m_T$package$EmptyTuple$() {
  if ((!$n_T$package$EmptyTuple$)) {
    $n_T$package$EmptyTuple$ = new $c_T$package$EmptyTuple$();
  }
  return $n_T$package$EmptyTuple$;
}
function $f_sc_View__toString__T($thiz) {
  return ($thiz.fo() + "(<not computed>)");
}
/** @constructor */
function $c_s_reflect_ManifestFactory$ClassTypeManifest() {
}
$p = $c_s_reflect_ManifestFactory$ClassTypeManifest.prototype = new $h_O();
$p.constructor = $c_s_reflect_ManifestFactory$ClassTypeManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ClassTypeManifest() {
}
$h_s_reflect_ManifestFactory$ClassTypeManifest.prototype = $p;
class $c_sjs_js_JavaScriptException extends $c_jl_RuntimeException {
  constructor(exception) {
    super();
    this.aF = null;
    this.aF = exception;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  hP() {
    return $dp_toString__T(this.aF);
  }
  L() {
    return "JavaScriptException";
  }
  I() {
    return 1;
  }
  t(x$1) {
    return ((x$1 === 0) ? this.aF : $m_sr_Statics$().nJ(x$1));
  }
  Q() {
    return new $c_sr_ScalaRunTime$$anon$1(this);
  }
  z() {
    return $m_s_util_hashing_MurmurHash3$().V(this, 1744042595, true);
  }
  s(x$1) {
    return ((this === x$1) || ((x$1 instanceof $c_sjs_js_JavaScriptException) && $m_sr_BoxesRunTime$().b(this.aF, x$1.aF)));
  }
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aE)));
}
var $d_sjs_js_JavaScriptException = new $TypeData().i($c_sjs_js_JavaScriptException, "scala.scalajs.js.JavaScriptException", ({
  aE: 1,
  j: 1,
  i: 1,
  f: 1,
  a: 1,
  c: 1,
  b: 1
}));
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  var s$tailLocal1 = s;
  var n$tailLocal1 = n;
  while (true) {
    if (((n$tailLocal1 <= 0) || s$tailLocal1.a8())) {
      return s$tailLocal1;
    } else {
      var n$tailLocal1$tmp1 = ((n$tailLocal1 - 1) | 0);
      var s$tailLocal1$tmp1 = s$tailLocal1.jm();
      n$tailLocal1 = n$tailLocal1$tmp1;
      s$tailLocal1 = s$tailLocal1$tmp1;
    }
  }
}
/** @constructor */
function $c_s_reflect_ManifestFactory$PhantomManifest() {
  this.i1 = null;
}
$p = $c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$p.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
}
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $p;
$p.p = (function() {
  return this.i1;
});
$p.s = (function(that) {
  return (this === that);
});
$p.z = (function() {
  return $systemIdentityHashCode(this);
});
/** @constructor */
function $c_sc_AbstractView() {
}
$p = $c_sc_AbstractView.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_AbstractView;
/** @constructor */
function $h_sc_AbstractView() {
}
$h_sc_AbstractView.prototype = $p;
$p.p = (function() {
  return $f_sc_View__toString__T(this);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ObjectManifest$() {
  this.i1 = null;
  this.i1 = "Object";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$ObjectManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ObjectManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ObjectManifest$() {
}
$h_s_reflect_ManifestFactory$ObjectManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ObjectManifest$, "scala.reflect.ManifestFactory$ObjectManifest$", ({
  ct: 1,
  cu: 1,
  cs: 1,
  a: 1,
  cv: 1,
  cp: 1,
  b: 1,
  cq: 1,
  cr: 1
}));
var $n_s_reflect_ManifestFactory$ObjectManifest$;
function $m_s_reflect_ManifestFactory$ObjectManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ObjectManifest$)) {
    $n_s_reflect_ManifestFactory$ObjectManifest$ = new $c_s_reflect_ManifestFactory$ObjectManifest$();
  }
  return $n_s_reflect_ManifestFactory$ObjectManifest$;
}
function $f_sc_Seq__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true;
  } else {
    if ($is_sc_Seq(o)) {
      if (o.ja($thiz)) {
        return $thiz.hT(o);
      }
    }
    return false;
  }
}
function $is_sc_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.l)));
}
function $isArrayOf_sc_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.l)));
}
/** @constructor */
function $c_sc_AbstractSeq() {
}
$p = $c_sc_AbstractSeq.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_AbstractSeq;
/** @constructor */
function $h_sc_AbstractSeq() {
}
$h_sc_AbstractSeq.prototype = $p;
$p.a8 = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.hT = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.ja = (function(that) {
  return true;
});
$p.s = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.z = (function() {
  return $m_s_util_hashing_MurmurHash3$().mA(this);
});
$p.p = (function() {
  return $f_sc_Iterable__toString__T(this);
});
/** @constructor */
function $c_sc_AbstractSeqView() {
}
$p = $c_sc_AbstractSeqView.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_AbstractSeqView;
/** @constructor */
function $h_sc_AbstractSeqView() {
}
$h_sc_AbstractSeqView.prototype = $p;
function $is_sc_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.o)));
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.o)));
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.I)));
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.I)));
}
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.gi = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.gi = null;
}
$p = $c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $p;
$p.a2 = (function(idx) {
  return this.gi.a2(idx);
});
$p.R = (function() {
  return this.gi.R();
});
$p.a8 = (function() {
  return this.gi.a8();
});
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.gi = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$p.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
}
$h_sc_IndexedSeqView$Id.prototype = $p;
$p.fn = (function(len) {
  var x = this.R();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.am = (function() {
  return this.R();
});
$p.ac = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this);
});
$p.fo = (function() {
  return "IndexedSeqView";
});
var $d_sc_IndexedSeqView$Id = new $TypeData().i($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  bS: 1,
  c1: 1,
  bN: 1,
  bO: 1,
  w: 1,
  d: 1,
  e: 1,
  r: 1,
  q: 1,
  p: 1,
  a: 1,
  c5: 1,
  t: 1,
  c0: 1,
  x: 1,
  bR: 1
}));
/** @constructor */
function $c_sci_AbstractSeq() {
}
$p = $c_sci_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$p.constructor = $c_sci_AbstractSeq;
/** @constructor */
function $h_sci_AbstractSeq() {
}
$h_sci_AbstractSeq.prototype = $p;
function $f_sci_IndexedSeq__canEqual__O__Z($thiz, that) {
  return ($is_sci_IndexedSeq(that) ? ($thiz.R() === that.R()) : true);
}
function $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z($thiz, o) {
  if ($is_sci_IndexedSeq(o)) {
    if (($thiz === o)) {
      return true;
    } else {
      var length = $thiz.R();
      var equal = (length === o.R());
      if (equal) {
        var index = 0;
        var a = $thiz.j6();
        var b = o.j6();
        var preferredLength = ((a < b) ? a : b);
        var hi = (length >> 31);
        var hi$1 = (preferredLength >> 31);
        var lo = (preferredLength << 1);
        var hi$2 = (((preferredLength >>> 31) | 0) | (hi$1 << 1));
        if (((hi === hi$2) ? ((length >>> 0) > (lo >>> 0)) : (hi > hi$2))) {
          var maxApplyCompare = preferredLength;
        } else {
          var maxApplyCompare = length;
        }
        while (((index < maxApplyCompare) && equal)) {
          equal = $m_sr_BoxesRunTime$().b($thiz.a2(index), o.a2(index));
          index = ((1 + index) | 0);
        }
        if (((index < length) && equal)) {
          var thisIt = $thiz.ac().hO(index);
          var thatIt = o.ac().hO(index);
          while ((equal && thisIt.U())) {
            equal = $m_sr_BoxesRunTime$().b(thisIt.P(), thatIt.P());
          }
        }
      }
      return equal;
    }
  } else {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, o);
  }
}
function $is_sci_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.E)));
}
function $isArrayOf_sci_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.E)));
}
/** @constructor */
function $c_scm_AbstractSeq() {
}
$p = $c_scm_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$p.constructor = $c_scm_AbstractSeq;
/** @constructor */
function $h_scm_AbstractSeq() {
}
$h_scm_AbstractSeq.prototype = $p;
/** @constructor */
function $c_sjsr_WrappedVarArgs(array) {
  this.hh = null;
  this.hh = array;
}
$p = $c_sjsr_WrappedVarArgs.prototype = new $h_O();
$p.constructor = $c_sjsr_WrappedVarArgs;
/** @constructor */
function $h_sjsr_WrappedVarArgs() {
}
$h_sjsr_WrappedVarArgs.prototype = $p;
$p.ja = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.hT = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.j6 = (function() {
  return $m_sci_IndexedSeqDefaults$().jH;
});
$p.ac = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.fn = (function(len) {
  var x = this.R();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.am = (function() {
  return this.R();
});
$p.s = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.z = (function() {
  return $m_s_util_hashing_MurmurHash3$().mA(this);
});
$p.p = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.a8 = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.gP = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.j3 = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.R = (function() {
  return (this.hh.length | 0);
});
$p.a2 = (function(idx) {
  return this.hh[idx];
});
$p.g9 = (function() {
  return "WrappedVarArgs";
});
$p.h = (function(v1) {
  return this.a2((v1 | 0));
});
function $isArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aF)));
}
var $d_sjsr_WrappedVarArgs = new $TypeData().i($c_sjsr_WrappedVarArgs, "scala.scalajs.runtime.WrappedVarArgs", ({
  aF: 1,
  E: 1,
  d: 1,
  e: 1,
  r: 1,
  q: 1,
  p: 1,
  J: 1,
  k: 1,
  v: 1,
  t: 1,
  b: 1,
  l: 1,
  L: 1,
  K: 1,
  x: 1,
  o: 1,
  aw: 1,
  M: 1,
  B: 1,
  C: 1,
  a: 1
}));
/** @constructor */
function $c_scm_AbstractBuffer() {
}
$p = $c_scm_AbstractBuffer.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_AbstractBuffer;
/** @constructor */
function $h_scm_AbstractBuffer() {
}
$h_scm_AbstractBuffer.prototype = $p;
/** @constructor */
function $c_sci_ArraySeq() {
}
$p = $c_sci_ArraySeq.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_ArraySeq;
/** @constructor */
function $h_sci_ArraySeq() {
}
$h_sci_ArraySeq.prototype = $p;
$p.fn = (function(len) {
  var x = this.b4.f.length;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.am = (function() {
  return this.b4.f.length;
});
$p.fo = (function() {
  return "IndexedSeq";
});
$p.ja = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.hT = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.g9 = (function() {
  return "ArraySeq";
});
$p.j6 = (function() {
  return 2147483647;
});
/** @constructor */
function $c_scm_ArraySeq() {
}
$p = $c_scm_ArraySeq.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_ArraySeq;
/** @constructor */
function $h_scm_ArraySeq() {
}
$h_scm_ArraySeq.prototype = $p;
$p.fn = (function(len) {
  var x = this.aE.f.length;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.am = (function() {
  return this.aE.f.length;
});
$p.fo = (function() {
  return "IndexedSeq";
});
$p.g9 = (function() {
  return "ArraySeq";
});
$p.s = (function(other) {
  if ((other instanceof $c_scm_ArraySeq)) {
    if ((this.aE.f.length !== other.aE.f.length)) {
      return false;
    }
  }
  return $f_sc_Seq__equals__O__Z(this, other);
});
function $isArrayOf_scm_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ay)));
}
/** @constructor */
function $c_sci_ArraySeq$ofRef(unsafeArray) {
  this.b4 = null;
  this.b4 = unsafeArray;
}
$p = $c_sci_ArraySeq$ofRef.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofRef;
/** @constructor */
function $h_sci_ArraySeq$ofRef() {
}
$h_sci_ArraySeq$ofRef.prototype = $p;
$p.R = (function() {
  return this.b4.f.length;
});
$p.a2 = (function(i) {
  return this.b4.f[i];
});
$p.z = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.lR(this.b4, this$1.fM);
});
$p.s = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofRef) ? $m_s_Array$().m4(this.b4, that.b4) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.ac = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.b4);
});
$p.h = (function(v1) {
  return this.a2((v1 | 0));
});
function $isArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.av)));
}
var $d_sci_ArraySeq$ofRef = new $TypeData().i($c_sci_ArraySeq$ofRef, "scala.collection.immutable.ArraySeq$ofRef", ({
  av: 1,
  c7: 1,
  au: 1,
  A: 1,
  w: 1,
  d: 1,
  e: 1,
  r: 1,
  q: 1,
  p: 1,
  k: 1,
  v: 1,
  t: 1,
  b: 1,
  l: 1,
  J: 1,
  L: 1,
  K: 1,
  x: 1,
  o: 1,
  aw: 1,
  E: 1,
  B: 1,
  C: 1,
  M: 1,
  bQ: 1,
  a: 1
}));
function $p_sci_List__loop$2__I__I__sci_List__I($thiz, len$1, i, xs) {
  var xs$tailLocal1 = xs;
  var i$tailLocal1 = i;
  while (true) {
    if ((i$tailLocal1 === len$1)) {
      return ((!xs$tailLocal1.a8()) | 0);
    } else {
      if ((!xs$tailLocal1.a8())) {
        xs$tailLocal1.hc();
      }
      return (-1);
    }
  }
}
function $p_sci_List__listEq$1__sci_List__sci_List__Z($thiz, a, b) {
  var b$tailLocal1 = b;
  var a$tailLocal1 = a;
  while (true) {
    if ((a$tailLocal1 === b$tailLocal1)) {
      return true;
    } else {
      var aEmpty = a$tailLocal1.a8();
      var bEmpty = b$tailLocal1.a8();
      if ((!(aEmpty || bEmpty))) {
        a$tailLocal1.hQ();
      }
      if (false) {
        a$tailLocal1.hc();
      }
      return (aEmpty && bEmpty);
    }
  }
}
/** @constructor */
function $c_sci_List() {
}
$p = $c_sci_List.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_List;
/** @constructor */
function $h_sci_List() {
}
$h_sci_List.prototype = $p;
$p.a2 = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.hT = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.fo = (function() {
  return "LinearSeq";
});
$p.a8 = (function() {
  return (this === $m_sci_Nil$());
});
$p.gP = (function(f) {
  var these = this;
  while ((!these.a8())) {
    f.h(these.hQ());
    these.hc();
  }
});
$p.R = (function() {
  var these = this;
  var len = 0;
  while ((!these.a8())) {
    len = ((1 + len) | 0);
    these.hc();
  }
  return len;
});
$p.fn = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__I__sci_List__I(this, len, 0, this));
});
$p.g9 = (function() {
  return "List";
});
$p.s = (function(o) {
  return ((o instanceof $c_sci_List) ? $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, o) : $f_sc_Seq__equals__O__Z(this, o));
});
$p.ni = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
$p.h = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ax)));
}
/** @constructor */
function $c_scm_ArraySeq$ofRef(array) {
  this.aE = null;
  this.aE = array;
}
$p = $c_scm_ArraySeq$ofRef.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofRef;
/** @constructor */
function $h_scm_ArraySeq$ofRef() {
}
$h_scm_ArraySeq$ofRef.prototype = $p;
$p.R = (function() {
  return this.aE.f.length;
});
$p.a2 = (function(index) {
  return this.aE.f[index];
});
$p.z = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.lR(this.aE, this$1.fM);
});
$p.s = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofRef) ? $m_s_Array$().m4(this.aE, that.aE) : $c_scm_ArraySeq.prototype.s.call(this, that));
});
$p.ac = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.aE);
});
$p.h = (function(v1) {
  return this.a2((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.az)));
}
var $d_scm_ArraySeq$ofRef = new $TypeData().i($c_scm_ArraySeq$ofRef, "scala.collection.mutable.ArraySeq$ofRef", ({
  az: 1,
  ay: 1,
  N: 1,
  A: 1,
  w: 1,
  d: 1,
  e: 1,
  r: 1,
  q: 1,
  p: 1,
  k: 1,
  v: 1,
  t: 1,
  b: 1,
  l: 1,
  R: 1,
  y: 1,
  O: 1,
  T: 1,
  S: 1,
  x: 1,
  o: 1,
  Q: 1,
  P: 1,
  B: 1,
  C: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Nil$() {
  $n_sci_Nil$ = this;
  var _1 = $m_sci_Nil$();
  $m_sci_Nil$();
}
$p = $c_sci_Nil$.prototype = new $h_sci_List();
$p.constructor = $c_sci_Nil$;
/** @constructor */
function $h_sci_Nil$() {
}
$h_sci_Nil$.prototype = $p;
$p.Q = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.I = (function() {
  return 0;
});
$p.L = (function() {
  return "Nil";
});
$p.t = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
});
$p.hQ = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list");
});
$p.hc = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$p.am = (function() {
  return 0;
});
$p.ac = (function() {
  return $m_sc_Iterator$().b2;
});
$p.jd = (function() {
  this.hQ();
});
$p.jm = (function() {
  this.hc();
});
var $d_sci_Nil$ = new $TypeData().i($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  cd: 1,
  ax: 1,
  au: 1,
  A: 1,
  w: 1,
  d: 1,
  e: 1,
  r: 1,
  q: 1,
  p: 1,
  k: 1,
  v: 1,
  t: 1,
  b: 1,
  l: 1,
  J: 1,
  L: 1,
  K: 1,
  bY: 1,
  I: 1,
  cb: 1,
  ca: 1,
  B: 1,
  C: 1,
  c2: 1,
  M: 1,
  a: 1,
  c6: 1,
  c: 1
}));
var $n_sci_Nil$;
function $m_sci_Nil$() {
  if ((!$n_sci_Nil$)) {
    $n_sci_Nil$ = new $c_sci_Nil$();
  }
  return $n_sci_Nil$;
}
function $ct_scm_StringBuilder__jl_StringBuilder__($thiz, underlying) {
  $thiz.aQ = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, new $c_jl_StringBuilder());
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.aQ = null;
}
$p = $c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
}
$h_scm_StringBuilder.prototype = $p;
$p.ac = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.fn = (function(len) {
  var x = this.aQ.R();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.fo = (function() {
  return "IndexedSeq";
});
$p.R = (function() {
  return this.aQ.R();
});
$p.am = (function() {
  return this.aQ.R();
});
$p.p = (function() {
  return this.aQ.ad;
});
$p.a8 = (function() {
  return (this.aQ.R() === 0);
});
$p.a2 = (function(i) {
  return $bC(this.aQ.lY(i));
});
$p.h = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.aQ.lY(i));
});
var $d_scm_StringBuilder = new $TypeData().i($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
  ck: 1,
  N: 1,
  A: 1,
  w: 1,
  d: 1,
  e: 1,
  r: 1,
  q: 1,
  p: 1,
  k: 1,
  v: 1,
  t: 1,
  b: 1,
  l: 1,
  R: 1,
  y: 1,
  O: 1,
  T: 1,
  S: 1,
  aB: 1,
  aC: 1,
  aA: 1,
  ci: 1,
  x: 1,
  o: 1,
  Q: 1,
  P: 1,
  H: 1,
  a: 1
}));
/** @constructor */
function $c_sjs_js_WrappedArray(array) {
  this.fL = null;
  this.fL = array;
}
$p = $c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
}
$h_sjs_js_WrappedArray.prototype = $p;
$p.fo = (function() {
  return "IndexedSeq";
});
$p.ac = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.fn = (function(len) {
  var x = (this.fL.length | 0);
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.a2 = (function(index) {
  return this.fL[index];
});
$p.R = (function() {
  return (this.fL.length | 0);
});
$p.am = (function() {
  return (this.fL.length | 0);
});
$p.g9 = (function() {
  return "WrappedArray";
});
$p.h = (function(v1) {
  var index = (v1 | 0);
  return this.fL[index];
});
var $d_sjs_js_WrappedArray = new $TypeData().i($c_sjs_js_WrappedArray, "scala.scalajs.js.WrappedArray", ({
  cW: 1,
  ce: 1,
  N: 1,
  A: 1,
  w: 1,
  d: 1,
  e: 1,
  r: 1,
  q: 1,
  p: 1,
  k: 1,
  v: 1,
  t: 1,
  b: 1,
  l: 1,
  R: 1,
  y: 1,
  O: 1,
  T: 1,
  S: 1,
  aB: 1,
  aC: 1,
  cj: 1,
  cg: 1,
  C: 1,
  B: 1,
  P: 1,
  x: 1,
  o: 1,
  Q: 1,
  ch: 1,
  aA: 1,
  a: 1
}));
let $e_sketch = (function(arg) {
  $m_Lsketches_experiments_gridceiling_GridCeiling$package$().oS(arg);
});
export { $e_sketch as sketch };
