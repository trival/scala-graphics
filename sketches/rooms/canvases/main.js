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
  return (arg0.$classData.Z ? arg0.b0() : $objectClone(arg0));
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
        return null.r2();
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
        return instance.u();
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__hashCode__I(instance.l, instance.h);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I(instance.c);
      } else {
        return $c_O.prototype.u.call(instance);
      }
    }
  }
}
function $dp_indexOf__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__indexOf__I__I(instance, x0);
  } else {
    return instance.r3(x0);
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
$p.u = (function() {
  return $systemIdentityHashCode(this);
});
$p.s = (function(that) {
  return (this === that);
});
$p.o = (function() {
  var i = this.u();
  return (($objectClassName(this) + "@") + (i >>> 0.0).toString(16));
});
$p.toString = (function() {
  return this.o();
});
function $ac_O(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.a[i] = null;
    }
  } else {
    this.a = arg;
  }
}
$p = $ac_O.prototype = new $h_O();
$p.constructor = $ac_O;
$p.aJ = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
});
$p.b0 = (function() {
  return new $ac_O(this.a.slice());
});
function $ah_O() {
}
$ah_O.prototype = $p;
function $ac_Z(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.a[i] = false;
    }
  } else {
    this.a = arg;
  }
}
$p = $ac_Z.prototype = new $h_O();
$p.constructor = $ac_Z;
$p.aJ = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
});
$p.b0 = (function() {
  return new $ac_Z(this.a.slice());
});
function $ac_C(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Uint16Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_C.prototype = new $h_O();
$p.constructor = $ac_C;
$p.aJ = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.b0 = (function() {
  return new $ac_C(this.a.slice());
});
function $ac_B(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Int8Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_B.prototype = new $h_O();
$p.constructor = $ac_B;
$p.aJ = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.b0 = (function() {
  return new $ac_B(this.a.slice());
});
function $ac_S(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Int16Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_S.prototype = new $h_O();
$p.constructor = $ac_S;
$p.aJ = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.b0 = (function() {
  return new $ac_S(this.a.slice());
});
function $ac_I(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Int32Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_I.prototype = new $h_O();
$p.constructor = $ac_I;
$p.aJ = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.b0 = (function() {
  return new $ac_I(this.a.slice());
});
function $ac_J(arg) {
  if (((typeof arg) === "number")) {
    arg = (arg << 1);
    this.a = new Int32Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_J.prototype = new $h_O();
$p.constructor = $ac_J;
$p.aJ = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray((srcPos << 1), (((srcPos + length) | 0) << 1)), (destPos << 1));
});
$p.b0 = (function() {
  return new $ac_J(this.a.slice());
});
function $ac_F(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Float32Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_F.prototype = new $h_O();
$p.constructor = $ac_F;
$p.aJ = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.b0 = (function() {
  return new $ac_F(this.a.slice());
});
function $ac_D(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Float64Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_D.prototype = new $h_O();
$p.constructor = $ac_D;
$p.aJ = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.b0 = (function() {
  return new $ac_D(this.a.slice());
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
    B: 1,
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
    var u = result.a;
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
      this.a = new Array(arg);
      for (var i = 0; (i < arg); (i++)) {
        this.a[i] = null;
      }
    } else {
      this.a = arg;
    }
  }
  var $p = ArrayClass.prototype = new $ah_O();
  $p.constructor = ArrayClass;
  $p.aJ = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
  });
  $p.b0 = (function() {
    return new ArrayClass(this.a.slice());
  });
  $p.$classData = this;
  var arrayBase = (componentData.B || componentData);
  var arrayDepth = (componentData.D + 1);
  var name = ("[" + componentData.E);
  this.C = ArrayClass;
  this.n = ({
    B: 1,
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
  this.iV = null;
  this.kp = null;
  $n_jl_System$SystemProperties$ = this;
  this.iV = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
  this.kp = null;
}
$p = $c_jl_System$SystemProperties$.prototype = new $h_O();
$p.constructor = $c_jl_System$SystemProperties$;
/** @constructor */
function $h_jl_System$SystemProperties$() {
}
$h_jl_System$SystemProperties$.prototype = $p;
$p.ne = (function(key, default$1) {
  if ((this.iV !== null)) {
    var dict = this.iV;
    return ((!(!$m_jl_Utils$Cache$().kr.call(dict, key))) ? dict[key] : default$1);
  } else {
    return this.kp.ne(key, default$1);
  }
});
var $d_jl_System$SystemProperties$ = new $TypeData().i($c_jl_System$SystemProperties$, "java.lang.System$SystemProperties$", ({
  bi: 1
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
  this.kr = null;
  $n_jl_Utils$Cache$ = this;
  this.kr = Object.prototype.hasOwnProperty;
}
$p = $c_jl_Utils$Cache$.prototype = new $h_O();
$p.constructor = $c_jl_Utils$Cache$;
/** @constructor */
function $h_jl_Utils$Cache$() {
}
$h_jl_Utils$Cache$.prototype = $p;
var $d_jl_Utils$Cache$ = new $TypeData().i($c_jl_Utils$Cache$, "java.lang.Utils$Cache$", ({
  bk: 1
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
  bl: 1
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
$p.hH = (function(array) {
  if ((array instanceof $ac_O)) {
    return array.a.length;
  } else if ((array instanceof $ac_Z)) {
    return array.a.length;
  } else if ((array instanceof $ac_C)) {
    return array.a.length;
  } else if ((array instanceof $ac_B)) {
    return array.a.length;
  } else if ((array instanceof $ac_S)) {
    return array.a.length;
  } else if ((array instanceof $ac_I)) {
    return array.a.length;
  } else if ((array instanceof $ac_J)) {
    return ((array.a.length >>> 1) | 0);
  } else if ((array instanceof $ac_F)) {
    return array.a.length;
  } else {
    if ((!(array instanceof $ac_D))) {
      $p_jl_reflect_Array$__mismatch__O__E(this, array);
    }
    return array.a.length;
  }
});
var $d_jl_reflect_Array$ = new $TypeData().i($c_jl_reflect_Array$, "java.lang.reflect.Array$", ({
  bm: 1
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
$p.oo = (function(a, key) {
  var startIndex = 0;
  var endIndex = a.a.length;
  while (true) {
    if ((startIndex === endIndex)) {
      return (~startIndex);
    } else {
      var mid = ((((startIndex + endIndex) | 0) >>> 1) | 0);
      var elem = a.a[mid];
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
  bn: 1
}));
var $n_ju_Arrays$;
function $m_ju_Arrays$() {
  if ((!$n_ju_Arrays$)) {
    $n_ju_Arrays$ = new $c_ju_Arrays$();
  }
  return $n_ju_Arrays$;
}
function $s_RTLong__remainderUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().ql(alo, ahi, blo, bhi);
}
function $s_RTLong__remainder__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().qk(alo, ahi, blo, bhi);
}
function $s_RTLong__divideUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().oK(alo, ahi, blo, bhi);
}
function $s_RTLong__divide__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().oJ(alo, ahi, blo, bhi);
}
function $s_RTLong__fromDoubleBits__D__O__J(value, fpBitsDataView) {
  fpBitsDataView.setFloat64(0, value, true);
  var lo = (fpBitsDataView.getInt32(0, true) | 0);
  var hi = (fpBitsDataView.getInt32(4, true) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__fromDouble__D__J(value) {
  return $m_RTLong$().nd(value);
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
  return $m_RTLong$().nL(lo, hi);
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
$p.nL = (function(lo, hi) {
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
$p.nd = (function(value) {
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
$p.oJ = (function(alo, ahi, blo, bhi) {
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
$p.oK = (function(alo, ahi, blo, bhi) {
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
$p.qk = (function(alo, ahi, blo, bhi) {
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
$p.ql = (function(alo, ahi, blo, bhi) {
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
  bp: 1
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
$p.n9 = (function(xs, ys) {
  if ((xs === ys)) {
    return true;
  }
  if ((xs.a.length !== ys.a.length)) {
    return false;
  }
  var len = xs.a.length;
  var i = 0;
  while ((i < len)) {
    if ((!$m_sr_BoxesRunTime$().c(xs.a[i], ys.a[i]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
var $d_s_Array$ = new $TypeData().i($c_s_Array$, "scala.Array$", ({
  bq: 1
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
  var it = $thiz.ab();
  while (it.T()) {
    f.h(it.O());
  }
}
function $f_sc_IterableOnceOps__copyToArray__O__I__I__I($thiz, dest, start, n) {
  var it = $thiz.ab();
  var i = start;
  matchResult18: {
    var srclen;
    var x31 = $thiz.af();
    if ((x31 === (-1))) {
      var srclen = $m_jl_reflect_Array$().hH(dest);
      break matchResult18;
    }
    var srclen = x31;
  }
  var destLen = $m_jl_reflect_Array$().hH(dest);
  var limit = ((n < srclen) ? n : srclen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var end = ((start + ((total < 0) ? 0 : total)) | 0);
  while (((i < end) && it.T())) {
    $m_sr_ScalaRunTime$().ok(dest, i, it.O());
    i = ((1 + i) | 0);
  }
  return ((i - start) | 0);
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  return (($thiz.af() === 0) ? (("" + start) + end) : $thiz.k1($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end).b8.an);
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = b.b8;
  if ((start.length !== 0)) {
    jsb.an = (("" + jsb.an) + start);
  }
  var it = $thiz.ab();
  if (it.T()) {
    var obj = it.O();
    jsb.an = (("" + jsb.an) + obj);
    while (it.T()) {
      if ((sep.length !== 0)) {
        jsb.an = (("" + jsb.an) + sep);
      }
      var obj$1 = it.O();
      jsb.an = (("" + jsb.an) + obj$1);
    }
  }
  if ((end.length !== 0)) {
    jsb.an = (("" + jsb.an) + end);
  }
  return b;
}
/** @constructor */
function $c_sc_Iterator$ConcatIteratorCell(head, tail) {
  this.kx = null;
  this.h3 = null;
  this.kx = head;
  this.h3 = tail;
}
$p = $c_sc_Iterator$ConcatIteratorCell.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$ConcatIteratorCell;
/** @constructor */
function $h_sc_Iterator$ConcatIteratorCell() {
}
$h_sc_Iterator$ConcatIteratorCell.prototype = $p;
$p.pc = (function() {
  return this.kx.hE().ab();
});
var $d_sc_Iterator$ConcatIteratorCell = new $TypeData().i($c_sc_Iterator$ConcatIteratorCell, "scala.collection.Iterator$ConcatIteratorCell", ({
  c7: 1
}));
/** @constructor */
function $c_sc_StringOps$() {
  this.ky = null;
  $n_sc_StringOps$ = this;
  this.ky = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$2) => this.ky));
}
$p = $c_sc_StringOps$.prototype = new $h_O();
$p.constructor = $c_sc_StringOps$;
/** @constructor */
function $h_sc_StringOps$() {
}
$h_sc_StringOps$.prototype = $p;
var $d_sc_StringOps$ = new $TypeData().i($c_sc_StringOps$, "scala.collection.StringOps$", ({
  cf: 1
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
  this.kB = 0;
  $n_sci_IndexedSeqDefaults$ = this;
  try {
    $m_sc_StringOps$();
    var $x_1 = $m_jl_Integer$().pj($m_jl_System$SystemProperties$().ne("scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength", "64"), 10, 214748364);
  } catch (e) {
    if (false) {
      var $x_1 = 64;
    } else {
      var $x_1;
      throw e;
    }
  }
  this.kB = $x_1;
}
$p = $c_sci_IndexedSeqDefaults$.prototype = new $h_O();
$p.constructor = $c_sci_IndexedSeqDefaults$;
/** @constructor */
function $h_sci_IndexedSeqDefaults$() {
}
$h_sci_IndexedSeqDefaults$.prototype = $p;
var $d_sci_IndexedSeqDefaults$ = new $TypeData().i($c_sci_IndexedSeqDefaults$, "scala.collection.immutable.IndexedSeqDefaults$", ({
  ck: 1
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
$p.c = (function(x, y) {
  return ((x === y) || ($is_jl_Number(x) ? this.oS(x, y) : ((x instanceof $Char) ? this.oQ(x, y) : ((x === null) ? (y === null) : $dp_equals__O__Z(x, y)))));
});
$p.oS = (function(xn, y) {
  if ($is_jl_Number(y)) {
    return this.oR(xn, y);
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
$p.oR = (function(xn, yn) {
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
$p.oQ = (function(xc, y) {
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
  cU: 1
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
$p.ol = (function() {
  throw new $c_jl_AssertionError("assertion failed");
});
$p.iP = (function() {
  throw $ct_jl_NullPointerException__T__(new $c_jl_NullPointerException(), "tried to cast away nullability, but value is null");
});
var $d_sr_Scala3RunTime$ = new $TypeData().i($c_sr_Scala3RunTime$, "scala.runtime.Scala3RunTime$", ({
  cX: 1
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
$p.gT = (function(xs, idx) {
  if ((xs instanceof $ac_O)) {
    return xs.a[idx];
  }
  if ((xs instanceof $ac_I)) {
    return xs.a[idx];
  }
  if ((xs instanceof $ac_D)) {
    return xs.a[idx];
  }
  if ((xs instanceof $ac_J)) {
    var $x_1 = xs.a;
    var $x_2 = (idx << 1);
    return $bL($x_1[$x_2], $x_1[(($x_2 + 1) | 0)]);
  }
  if ((xs instanceof $ac_F)) {
    return xs.a[idx];
  }
  if ((xs instanceof $ac_C)) {
    return $bC(xs.a[idx]);
  }
  if ((xs instanceof $ac_B)) {
    return xs.a[idx];
  }
  if ((xs instanceof $ac_S)) {
    return xs.a[idx];
  }
  if ((xs instanceof $ac_Z)) {
    return xs.a[idx];
  }
  if ((xs === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  throw new $c_s_MatchError(xs);
});
$p.ok = (function(xs, idx, value) {
  if ((xs instanceof $ac_O)) {
    xs.a[idx] = value;
    return (void 0);
  }
  if ((xs instanceof $ac_I)) {
    xs.a[idx] = (value | 0);
    return (void 0);
  }
  if ((xs instanceof $ac_D)) {
    xs.a[idx] = (+value);
    return (void 0);
  }
  if ((xs instanceof $ac_J)) {
    var $x_1 = $uJ(value);
    var $x_2 = xs.a;
    var $x_3 = (idx << 1);
    $x_2[$x_3] = $x_1.l;
    $x_2[(($x_3 + 1) | 0)] = $x_1.h;
    return (void 0);
  }
  if ((xs instanceof $ac_F)) {
    xs.a[idx] = Math.fround(value);
    return (void 0);
  }
  if ((xs instanceof $ac_C)) {
    xs.a[idx] = $uC(value);
    return (void 0);
  }
  if ((xs instanceof $ac_B)) {
    xs.a[idx] = (value | 0);
    return (void 0);
  }
  if ((xs instanceof $ac_S)) {
    xs.a[idx] = (value | 0);
    return (void 0);
  }
  if ((xs instanceof $ac_Z)) {
    xs.a[idx] = (!(!value));
    return (void 0);
  }
  if ((xs === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  throw new $c_s_MatchError(xs);
});
$p.hD = (function(x) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(x.I(), (x.F() + "("), ",", ")");
});
$p.am = (function(xs) {
  if ((xs === null)) {
    return null;
  } else if ((xs.a.length === 0)) {
    var this$2 = $m_sci_ArraySeq$();
    $m_s_reflect_ManifestFactory$ObjectManifest$();
    return $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef(this$2);
  } else {
    return new $c_sci_ArraySeq$ofRef(xs);
  }
});
var $d_sr_ScalaRunTime$ = new $TypeData().i($c_sr_ScalaRunTime$, "scala.runtime.ScalaRunTime$", ({
  cY: 1
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
$p.m = (function(hash, data) {
  var h = this.iO(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.iO = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.ae = (function(hash, length) {
  return this.om((hash ^ length));
});
$p.om = (function(h0) {
  var h = h0;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.pn = (function(lv_$_lo, lv_$_hi) {
  return ((lv_$_hi === (lv_$_lo >> 31)) ? lv_$_lo : (lv_$_lo ^ lv_$_hi));
});
$p.aI = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var $x_1 = $m_RTLong$().nd(dv);
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
$p.N = (function(x) {
  if ((x === null)) {
    return 0;
  } else if (((typeof x) === "number")) {
    return this.aI((+x));
  } else if ((x instanceof $Long)) {
    var $x_1 = $uJ(x);
    return this.pn($x_1.l, $x_1.h);
  } else {
    return $dp_hashCode__I(x);
  }
});
$p.ph = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_sr_Statics$ = new $TypeData().i($c_sr_Statics$, "scala.runtime.Statics$", ({
  d0: 1
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
    return new $c_T2(x, self.g5);
  }
  if ((self instanceof $c_T2)) {
    return new $c_T3(x, self.P, self.as);
  }
  if ((self instanceof $c_T3)) {
    return new $c_T4(x, self.bv, self.bg, self.bh);
  }
  if ((self instanceof $c_T4)) {
    return new $c_T5(x, self.f2, self.bw, self.bx, self.by);
  }
  if ((self instanceof $c_T5)) {
    return new $c_T6(x, self.gj, self.f3, self.f4, self.f5, self.f6);
  }
  if ((self instanceof $c_T6)) {
    return new $c_T7(x, self.gk, self.f7, self.f8, self.f9, self.fa, self.fb);
  }
  if ((self instanceof $c_T7)) {
    return new $c_T8(x, self.gl, self.fc, self.fd, self.fe, self.ff, self.fg, self.fh);
  }
  if ((self instanceof $c_T8)) {
    return new $c_T9(x, self.gm, self.fi, self.fj, self.fk, self.fl, self.fm, self.fn, self.fo);
  }
  if ((self instanceof $c_T9)) {
    return new $c_T10(x, self.gn, self.fp, self.fq, self.fr, self.fs, self.ft, self.fu, self.fv, self.fw);
  }
  if ((self instanceof $c_T10)) {
    return new $c_T11(x, self.g6, self.bT, self.bU, self.bV, self.bW, self.bX, self.bY, self.bZ, self.c0, self.bS);
  }
  if ((self instanceof $c_T11)) {
    return new $c_T12(x, self.g7, self.c3, self.c4, self.c5, self.c6, self.c7, self.c8, self.c9, self.ca, self.c1, self.c2);
  }
  if ((self instanceof $c_T12)) {
    return new $c_T13(x, self.g8, self.ce, self.cf, self.cg, self.ch, self.ci, self.cj, self.ck, self.cl, self.cb, self.cc, self.cd);
  }
  if ((self instanceof $c_T13)) {
    return new $c_T14(x, self.g9, self.cq, self.cr, self.cs, self.ct, self.cu, self.cv, self.cw, self.cx, self.cm, self.cn, self.co, self.cp);
  }
  if ((self instanceof $c_T14)) {
    return new $c_T15(x, self.ga, self.cD, self.cE, self.cF, self.cG, self.cH, self.cI, self.cJ, self.cK, self.cy, self.cz, self.cA, self.cB, self.cC);
  }
  if ((self instanceof $c_T15)) {
    return new $c_T16(x, self.gb, self.cR, self.cS, self.cT, self.cU, self.cV, self.cW, self.cX, self.cY, self.cL, self.cM, self.cN, self.cO, self.cP, self.cQ);
  }
  if ((self instanceof $c_T16)) {
    return new $c_T17(x, self.gc, self.d6, self.d7, self.d8, self.d9, self.da, self.db, self.dc, self.dd, self.cZ, self.d0, self.d1, self.d2, self.d3, self.d4, self.d5);
  }
  if ((self instanceof $c_T17)) {
    return new $c_T18(x, self.gd, self.dm, self.dn, self.dp, self.dq, self.dr, self.ds, self.dt, self.du, self.de, self.df, self.dg, self.dh, self.di, self.dj, self.dk, self.dl);
  }
  if ((self instanceof $c_T18)) {
    return new $c_T19(x, self.ge, self.dE, self.dF, self.dG, self.dH, self.dI, self.dJ, self.dK, self.dL, self.dv, self.dw, self.dx, self.dy, self.dz, self.dA, self.dB, self.dC, self.dD);
  }
  if ((self instanceof $c_T19)) {
    return new $c_T20(x, self.gf, self.dW, self.dX, self.dY, self.dZ, self.e0, self.e1, self.e2, self.e3, self.dM, self.dN, self.dO, self.dP, self.dQ, self.dR, self.dS, self.dT, self.dU, self.dV);
  }
  if ((self instanceof $c_T20)) {
    return new $c_T21(x, self.gg, self.ee, self.eg, self.eh, self.ei, self.ej, self.ek, self.el, self.em, self.e4, self.e5, self.e6, self.e7, self.e8, self.e9, self.ea, self.eb, self.ec, self.ed, self.ef);
  }
  if ((self instanceof $c_T21)) {
    return new $c_T22(x, self.gh, self.ex, self.eA, self.eB, self.eC, self.eD, self.eE, self.eF, self.eG, self.en, self.eo, self.ep, self.eq, self.er, self.es, self.et, self.eu, self.ev, self.ew, self.ey, self.ez);
  }
  if ((self instanceof $c_T22)) {
    return new $c_sr_TupleXXL(new $ac_O([x, self.gi, self.eR, self.eV, self.eW, self.eX, self.eY, self.eZ, self.f0, self.f1, self.eH, self.eI, self.eJ, self.eK, self.eL, self.eM, self.eN, self.eO, self.eP, self.eQ, self.eS, self.eT, self.eU]));
  }
  throw new $c_s_MatchError(self);
}
function $p_sr_Tuples$__xxlCons__O__sr_TupleXXL__sr_TupleXXL($thiz, x, xxl) {
  var arr = new $ac_O(((1 + xxl.x()) | 0));
  arr.a[0] = x;
  var src = xxl.ac;
  var length = xxl.x();
  src.aJ(0, arr, 1, length);
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
      var $x_1 = new $c_T1(self.as);
      break matchResult34$1;
    }
    if ((self instanceof $c_T3)) {
      var $x_1 = new $c_T2(self.bg, self.bh);
      break matchResult34$1;
    }
    if ((self instanceof $c_T4)) {
      var $x_1 = new $c_T3(self.bw, self.bx, self.by);
      break matchResult34$1;
    }
    if ((self instanceof $c_T5)) {
      var $x_1 = new $c_T4(self.f3, self.f4, self.f5, self.f6);
      break matchResult34$1;
    }
    if ((self instanceof $c_T6)) {
      var $x_1 = new $c_T5(self.f7, self.f8, self.f9, self.fa, self.fb);
      break matchResult34$1;
    }
    if ((self instanceof $c_T7)) {
      var $x_1 = new $c_T6(self.fc, self.fd, self.fe, self.ff, self.fg, self.fh);
      break matchResult34$1;
    }
    if ((self instanceof $c_T8)) {
      var $x_1 = new $c_T7(self.fi, self.fj, self.fk, self.fl, self.fm, self.fn, self.fo);
      break matchResult34$1;
    }
    if ((self instanceof $c_T9)) {
      var $x_1 = new $c_T8(self.fp, self.fq, self.fr, self.fs, self.ft, self.fu, self.fv, self.fw);
      break matchResult34$1;
    }
    if ((self instanceof $c_T10)) {
      var $x_1 = new $c_T9(self.bT, self.bU, self.bV, self.bW, self.bX, self.bY, self.bZ, self.c0, self.bS);
      break matchResult34$1;
    }
    if ((self instanceof $c_T11)) {
      var $x_1 = new $c_T10(self.c3, self.c4, self.c5, self.c6, self.c7, self.c8, self.c9, self.ca, self.c1, self.c2);
      break matchResult34$1;
    }
    if ((self instanceof $c_T12)) {
      var $x_1 = new $c_T11(self.ce, self.cf, self.cg, self.ch, self.ci, self.cj, self.ck, self.cl, self.cb, self.cc, self.cd);
      break matchResult34$1;
    }
    if ((self instanceof $c_T13)) {
      var $x_1 = new $c_T12(self.cq, self.cr, self.cs, self.ct, self.cu, self.cv, self.cw, self.cx, self.cm, self.cn, self.co, self.cp);
      break matchResult34$1;
    }
    if ((self instanceof $c_T14)) {
      var $x_1 = new $c_T13(self.cD, self.cE, self.cF, self.cG, self.cH, self.cI, self.cJ, self.cK, self.cy, self.cz, self.cA, self.cB, self.cC);
      break matchResult34$1;
    }
    if ((self instanceof $c_T15)) {
      var $x_1 = new $c_T14(self.cR, self.cS, self.cT, self.cU, self.cV, self.cW, self.cX, self.cY, self.cL, self.cM, self.cN, self.cO, self.cP, self.cQ);
      break matchResult34$1;
    }
    if ((self instanceof $c_T16)) {
      var $x_1 = new $c_T15(self.d6, self.d7, self.d8, self.d9, self.da, self.db, self.dc, self.dd, self.cZ, self.d0, self.d1, self.d2, self.d3, self.d4, self.d5);
      break matchResult34$1;
    }
    if ((self instanceof $c_T17)) {
      var $x_1 = new $c_T16(self.dm, self.dn, self.dp, self.dq, self.dr, self.ds, self.dt, self.du, self.de, self.df, self.dg, self.dh, self.di, self.dj, self.dk, self.dl);
      break matchResult34$1;
    }
    if ((self instanceof $c_T18)) {
      var $x_1 = new $c_T17(self.dE, self.dF, self.dG, self.dH, self.dI, self.dJ, self.dK, self.dL, self.dv, self.dw, self.dx, self.dy, self.dz, self.dA, self.dB, self.dC, self.dD);
      break matchResult34$1;
    }
    if ((self instanceof $c_T19)) {
      var $x_1 = new $c_T18(self.dW, self.dX, self.dY, self.dZ, self.e0, self.e1, self.e2, self.e3, self.dM, self.dN, self.dO, self.dP, self.dQ, self.dR, self.dS, self.dT, self.dU, self.dV);
      break matchResult34$1;
    }
    if ((self instanceof $c_T20)) {
      var $x_1 = new $c_T19(self.ee, self.eg, self.eh, self.ei, self.ej, self.ek, self.el, self.em, self.e4, self.e5, self.e6, self.e7, self.e8, self.e9, self.ea, self.eb, self.ec, self.ed, self.ef);
      break matchResult34$1;
    }
    if ((self instanceof $c_T21)) {
      var $x_1 = new $c_T20(self.ex, self.eA, self.eB, self.eC, self.eD, self.eE, self.eF, self.eG, self.en, self.eo, self.ep, self.eq, self.er, self.es, self.et, self.eu, self.ev, self.ew, self.ey, self.ez);
      break matchResult34$1;
    }
    if ((self instanceof $c_T22)) {
      var $x_1 = new $c_T21(self.eR, self.eV, self.eW, self.eX, self.eY, self.eZ, self.f0, self.f1, self.eH, self.eI, self.eJ, self.eK, self.eL, self.eM, self.eN, self.eO, self.eP, self.eQ, self.eS, self.eT, self.eU);
      break matchResult34$1;
    }
    throw new $c_s_MatchError(self);
  }
  return $x_1;
}
function $p_sr_Tuples$__xxlTail__sr_TupleXXL__s_Product($thiz, xxl) {
  if ((xxl.x() === 23)) {
    var elems = xxl.ac;
    return new $c_T22(elems.a[1], elems.a[2], elems.a[3], elems.a[4], elems.a[5], elems.a[6], elems.a[7], elems.a[8], elems.a[9], elems.a[10], elems.a[11], elems.a[12], elems.a[13], elems.a[14], elems.a[15], elems.a[16], elems.a[17], elems.a[18], elems.a[19], elems.a[20], elems.a[21], elems.a[22]);
  } else {
    var arr$1 = new $ac_O(((xxl.ac.a.length - 1) | 0));
    var src = xxl.ac;
    var length = ((xxl.ac.a.length - 1) | 0);
    src.aJ(1, arr$1, 0, length);
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
$p.p2 = (function(xs) {
  switch (xs.a.length) {
    case 0: {
      return $m_T$package$EmptyTuple$();
      break;
    }
    case 1: {
      return new $c_T1(xs.a[0]);
      break;
    }
    case 2: {
      return new $c_T2(xs.a[0], xs.a[1]);
      break;
    }
    case 3: {
      return new $c_T3(xs.a[0], xs.a[1], xs.a[2]);
      break;
    }
    case 4: {
      return new $c_T4(xs.a[0], xs.a[1], xs.a[2], xs.a[3]);
      break;
    }
    case 5: {
      return new $c_T5(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4]);
      break;
    }
    case 6: {
      return new $c_T6(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5]);
      break;
    }
    case 7: {
      return new $c_T7(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6]);
      break;
    }
    case 8: {
      return new $c_T8(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7]);
      break;
    }
    case 9: {
      return new $c_T9(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7], xs.a[8]);
      break;
    }
    case 10: {
      return new $c_T10(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7], xs.a[8], xs.a[9]);
      break;
    }
    case 11: {
      return new $c_T11(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7], xs.a[8], xs.a[9], xs.a[10]);
      break;
    }
    case 12: {
      return new $c_T12(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7], xs.a[8], xs.a[9], xs.a[10], xs.a[11]);
      break;
    }
    case 13: {
      return new $c_T13(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7], xs.a[8], xs.a[9], xs.a[10], xs.a[11], xs.a[12]);
      break;
    }
    case 14: {
      return new $c_T14(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7], xs.a[8], xs.a[9], xs.a[10], xs.a[11], xs.a[12], xs.a[13]);
      break;
    }
    case 15: {
      return new $c_T15(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7], xs.a[8], xs.a[9], xs.a[10], xs.a[11], xs.a[12], xs.a[13], xs.a[14]);
      break;
    }
    case 16: {
      return new $c_T16(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7], xs.a[8], xs.a[9], xs.a[10], xs.a[11], xs.a[12], xs.a[13], xs.a[14], xs.a[15]);
      break;
    }
    case 17: {
      return new $c_T17(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7], xs.a[8], xs.a[9], xs.a[10], xs.a[11], xs.a[12], xs.a[13], xs.a[14], xs.a[15], xs.a[16]);
      break;
    }
    case 18: {
      return new $c_T18(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7], xs.a[8], xs.a[9], xs.a[10], xs.a[11], xs.a[12], xs.a[13], xs.a[14], xs.a[15], xs.a[16], xs.a[17]);
      break;
    }
    case 19: {
      return new $c_T19(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7], xs.a[8], xs.a[9], xs.a[10], xs.a[11], xs.a[12], xs.a[13], xs.a[14], xs.a[15], xs.a[16], xs.a[17], xs.a[18]);
      break;
    }
    case 20: {
      return new $c_T20(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7], xs.a[8], xs.a[9], xs.a[10], xs.a[11], xs.a[12], xs.a[13], xs.a[14], xs.a[15], xs.a[16], xs.a[17], xs.a[18], xs.a[19]);
      break;
    }
    case 21: {
      return new $c_T21(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7], xs.a[8], xs.a[9], xs.a[10], xs.a[11], xs.a[12], xs.a[13], xs.a[14], xs.a[15], xs.a[16], xs.a[17], xs.a[18], xs.a[19], xs.a[20]);
      break;
    }
    case 22: {
      return new $c_T22(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7], xs.a[8], xs.a[9], xs.a[10], xs.a[11], xs.a[12], xs.a[13], xs.a[14], xs.a[15], xs.a[16], xs.a[17], xs.a[18], xs.a[19], xs.a[20], xs.a[21]);
      break;
    }
    default: {
      return new $c_sr_TupleXXL(xs.b0());
    }
  }
});
$p.p3 = (function(xs) {
  return ((xs.a.length <= 22) ? this.p2(xs) : new $c_sr_TupleXXL(xs));
});
$p.n5 = (function(x, self) {
  return ((self instanceof $c_sr_TupleXXL) ? $p_sr_Tuples$__xxlCons__O__sr_TupleXXL__sr_TupleXXL(this, x, self) : $p_sr_Tuples$__specialCaseCons__O__s_Product__s_Product(this, x, self));
});
$p.oA = (function(self, that) {
  var selfSize = $m_sr_Tuples$().nH(self);
  if ((selfSize === 0)) {
    return that;
  }
  var thatSize = $m_sr_Tuples$().nH(that);
  if ((thatSize === 0)) {
    return self;
  }
  var arr = new $ac_O(((selfSize + thatSize) | 0));
  if ((self instanceof $c_sr_TupleXXL)) {
    var src = self.ac;
    src.aJ(0, arr, 0, selfSize);
  } else {
    self.I().n6(arr, 0, selfSize);
  }
  if ((that instanceof $c_sr_TupleXXL)) {
    var src$1 = that.ac;
    src$1.aJ(0, arr, selfSize, thatSize);
  } else {
    that.I().n6(arr, selfSize, thatSize);
  }
  return this.p3(arr);
});
$p.nH = (function(self) {
  if (($m_T$package$EmptyTuple$() === self)) {
    return 0;
  }
  if ((self !== null)) {
    return self.x();
  }
  throw new $c_s_MatchError(self);
});
$p.qF = (function(self) {
  return ((self instanceof $c_sr_TupleXXL) ? $p_sr_Tuples$__xxlTail__sr_TupleXXL__s_Product(this, self) : $p_sr_Tuples$__specialCaseTail__s_Product__s_Product(this, self));
});
var $d_sr_Tuples$ = new $TypeData().i($c_sr_Tuples$, "scala.runtime.Tuples$", ({
  d1: 1
}));
var $n_sr_Tuples$;
function $m_sr_Tuples$() {
  if ((!$n_sr_Tuples$)) {
    $n_sr_Tuples$ = new $c_sr_Tuples$();
  }
  return $n_sr_Tuples$;
}
var $d_sjs_js_Any = new $TypeData().i(2, "scala.scalajs.js.Any", ({
  d2: 1
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
$p.pa = (function(this$, o, p) {
  return (!(!(p in o)));
});
var $d_sjs_js_Any$ObjectCompanionOps$ = new $TypeData().i($c_sjs_js_Any$ObjectCompanionOps$, "scala.scalajs.js.Any$ObjectCompanionOps$", ({
  d4: 1
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
$p.nf = (function(this$, elem, from) {
  var len = (this$.length | 0);
  var i = from;
  while ((i < len)) {
    if ($m_sr_BoxesRunTime$().c(elem, this$[i])) {
      return i;
    }
    i = ((1 + i) | 0);
  }
  return (-1);
});
$p.pU = (function(this$, f) {
  var len = (this$.length | 0);
  var res = new Array(len);
  var i = 0;
  while ((i < len)) {
    res[i] = f.h(this$[i]);
    i = ((1 + i) | 0);
  }
  return res;
});
$p.nQ = (function(this$, that) {
  var b = [];
  var len = (this$.length | 0);
  var i = 0;
  var it = that.ab();
  while (((i < len) && it.T())) {
    b.push(new $c_T2(this$[i], it.O()));
    i = ((1 + i) | 0);
  }
  return b;
});
$p.nR = (function(this$) {
  var len = (this$.length | 0);
  var b = new Array(len);
  var i = 0;
  while ((i < len)) {
    b[i] = new $c_T2(this$[i], i);
    i = ((1 + i) | 0);
  }
  return b;
});
$p.D = (function(this$, f) {
  var len = (this$.length | 0);
  var i = 0;
  while ((i < len)) {
    f.h(this$[i]);
    i = ((1 + i) | 0);
  }
});
var $d_sjs_js_ArrayOps$ = new $TypeData().i($c_sjs_js_ArrayOps$, "scala.scalajs.js.ArrayOps$", ({
  d5: 1
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
$p.b = (function(left, right) {
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
  d6: 1
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
  this.kL = null;
  $n_sjs_js_WrappedDictionary$Cache$ = this;
  this.kL = Object.prototype.hasOwnProperty;
}
$p = $c_sjs_js_WrappedDictionary$Cache$.prototype = new $h_O();
$p.constructor = $c_sjs_js_WrappedDictionary$Cache$;
/** @constructor */
function $h_sjs_js_WrappedDictionary$Cache$() {
}
$h_sjs_js_WrappedDictionary$Cache$.prototype = $p;
var $d_sjs_js_WrappedDictionary$Cache$ = new $TypeData().i($c_sjs_js_WrappedDictionary$Cache$, "scala.scalajs.js.WrappedDictionary$Cache$", ({
  da: 1
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
$p.e = (function(properties) {
  var result = ({});
  properties.bs(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((pair$2$2) => {
    result[pair$2$2.P] = pair$2$2.as;
  })));
  return result;
});
var $d_sjs_js_special_package$ = new $TypeData().i($c_sjs_js_special_package$, "scala.scalajs.js.special.package$", ({
  db: 1
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
$p.al = (function(seq) {
  if ((seq instanceof $c_sjsr_WrappedVarArgs)) {
    return seq.i7;
  } else {
    var result = [];
    seq.bs(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2$2) => (result.push(x$2$2) | 0))));
    return result;
  }
});
var $d_sjsr_Compat$ = new $TypeData().i($c_sjsr_Compat$, "scala.scalajs.runtime.Compat$", ({
  dc: 1
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
$p.d = (function(array) {
  var len = array.a.length;
  var result = [];
  var i = 0;
  while ((i !== len)) {
    var x1 = i;
    result.push(array.a[x1]);
    i = ((1 + i) | 0);
  }
  return result;
});
var $d_sjsr_package$ = new $TypeData().i($c_sjsr_package$, "scala.scalajs.runtime.package$", ({
  dd: 1
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
$p.m = (function(hash, data) {
  var h = this.iO(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.iO = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.ae = (function(hash, length) {
  return this.i0((hash ^ length));
});
$p.i0 = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.V = (function(x, seed, ignorePrefix) {
  var arr = x.x();
  if ((arr === 0)) {
    return ((!ignorePrefix) ? $f_T__hashCode__I(x.F()) : seed);
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.m(h, $f_T__hashCode__I(x.F()));
    }
    var i = 0;
    while ((i < arr)) {
      h = this.m(h, $m_sr_Statics$().N(x.n(i)));
      i = ((1 + i) | 0);
    }
    return this.ae(h, arr);
  }
});
$p.ox = (function(x, seed, caseClassName) {
  var arr = x.x();
  var aye = $f_T__hashCode__I(((caseClassName !== null) ? caseClassName : x.F()));
  if ((arr === 0)) {
    return aye;
  } else {
    var h = seed;
    h = this.m(h, aye);
    var i = 0;
    while ((i < arr)) {
      h = this.m(h, $m_sr_Statics$().N(x.n(i)));
      i = ((1 + i) | 0);
    }
    return this.ae(h, arr);
  }
});
$p.qP = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = xs.ab();
  while (iterator.T()) {
    var x = iterator.O();
    var h = $m_sr_Statics$().N(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0);
  }
  var h$2 = seed;
  h$2 = this.m(h$2, a);
  h$2 = this.m(h$2, b);
  h$2 = this.iO(h$2, c);
  return this.ae(h$2, n);
});
$p.qa = (function(xs, seed) {
  var it = xs.ab();
  var h = seed;
  if ((!it.T())) {
    return this.ae(h, 0);
  }
  var x0 = it.O();
  if ((!it.T())) {
    return this.ae(this.m(h, $m_sr_Statics$().N(x0)), 1);
  }
  var x1 = it.O();
  var initial = $m_sr_Statics$().N(x0);
  h = this.m(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().N(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while (it.T()) {
    h = this.m(h, prev);
    var hash = $m_sr_Statics$().N(it.O());
    if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
      h = this.m(h, hash);
      i = ((1 + i) | 0);
      while (it.T()) {
        h = this.m(h, $m_sr_Statics$().N(it.O()));
        i = ((1 + i) | 0);
      }
      return this.ae(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.i0(this.m(this.m(h0, rangeDiff), prev));
});
$p.n2 = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().hH(a);
  switch (l) {
    case 0: {
      return this.ae(h, 0);
      break;
    }
    case 1: {
      return this.ae(this.m(h, $m_sr_Statics$().N($m_sr_ScalaRunTime$().gT(a, 0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().N($m_sr_ScalaRunTime$().gT(a, 0));
      h = this.m(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().N($m_sr_ScalaRunTime$().gT(a, 1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.m(h, prev);
        var hash = $m_sr_Statics$().N($m_sr_ScalaRunTime$().gT(a, i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.m(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.m(h, $m_sr_Statics$().N($m_sr_ScalaRunTime$().gT(a, i)));
            i = ((1 + i) | 0);
          }
          return this.ae(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.i0(this.m(this.m(h0, rangeDiff), prev));
    }
  }
});
$p.nD = (function(start, step, last, seed) {
  return this.i0(this.m(this.m(this.m(seed, start), step), last));
});
$p.pd = (function(a, seed) {
  var h = seed;
  var l = a.H();
  switch (l) {
    case 0: {
      return this.ae(h, 0);
      break;
    }
    case 1: {
      return this.ae(this.m(h, $m_sr_Statics$().N(a.a7(0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().N(a.a7(0));
      h = this.m(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().N(a.a7(1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.m(h, prev);
        var hash = $m_sr_Statics$().N(a.a7(i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.m(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.m(h, $m_sr_Statics$().N(a.a7(i)));
            i = ((1 + i) | 0);
          }
          return this.ae(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.i0(this.m(this.m(h0, rangeDiff), prev));
    }
  }
});
$p.pm = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!elems.aa())) {
    elems.iL();
  }
  return ((rangeState === 2) ? this.nD(initial, rangeDiff, prev, seed) : this.ae(h, n));
});
function $p_Lsketches_rooms_canvases_Canvases$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2($thiz, c, u, v) {
  return new $c_T2(c, new $c_Ltrivalibs_graphics_math_cpu_Vec2(u, v));
}
function $p_Lsketches_rooms_canvases_Canvases$package$__form$2__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form($thiz, p$1, faces) {
  var mesh$proxy1 = $m_Ltrivalibs_graphics_geometry_Mesh$().n0(faces, null, 0, new $c_Ltrivalibs_graphics_geometry_package$package$$anon$1(0));
  var vl = new $c_Ltrivalibs_graphics_geometry_VertexLayout$named(new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$(), new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$(), $m_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$())));
  var f = ((v$3, n$3, ref$3) => {
    var nVal = new $c_T3(n$3.B, n$3.G, n$3.C);
    var values$proxy1 = $m_sr_Tuples$().oA(vl.jb.g3(v$3), $m_sr_Tuples$().n5(nVal, $m_T$package$EmptyTuple$()));
    var baseOffset$proxy1 = (ref$3.off | 0);
    var nestedValues = values$proxy1.n(0);
    var value = nestedValues.n(0);
    ref$3.dv.setFloat32(baseOffset$proxy1, Math.fround(value), true);
    var tailOffset = ((4 + baseOffset$proxy1) | 0);
    var value$2 = nestedValues.n(1);
    ref$3.dv.setFloat32(tailOffset, Math.fround(value$2), true);
    var tailOffset$2 = ((4 + tailOffset) | 0);
    var value$3 = nestedValues.n(2);
    ref$3.dv.setFloat32(tailOffset$2, Math.fround(value$3), true);
    var tailOffset$4 = ((12 + baseOffset$proxy1) | 0);
    var nestedValues$2 = values$proxy1.n(1);
    var value$4 = nestedValues$2.n(0);
    ref$3.dv.setFloat32(tailOffset$4, Math.fround(value$4), true);
    var tailOffset$5 = ((4 + tailOffset$4) | 0);
    var value$5 = nestedValues$2.n(1);
    ref$3.dv.setFloat32(tailOffset$5, Math.fround(value$5), true);
    var tailOffset$7 = ((8 + tailOffset$4) | 0);
    var nestedValues$3 = values$proxy1.n(2);
    var value$6 = nestedValues$3.n(0);
    ref$3.dv.setFloat32(tailOffset$7, Math.fround(value$6), true);
    var tailOffset$8 = ((4 + tailOffset$7) | 0);
    var value$7 = nestedValues$3.n(1);
    ref$3.dv.setFloat32(tailOffset$8, Math.fround(value$7), true);
    var tailOffset$9 = ((4 + tailOffset$8) | 0);
    var value$8 = nestedValues$3.n(2);
    ref$3.dv.setFloat32(tailOffset$9, Math.fround(value$8), true);
  });
  var \u03b4proxy2 = $m_Ltrivalibs_graphics_geometry_buffers$package$();
  mesh$proxy1.oN();
  var vertexCount = 0;
  var hasQuads = false;
  var fi = 0;
  while ((fi < (mesh$proxy1.a8.length | 0))) {
    var n = (mesh$proxy1.a8[fi].length | 0);
    vertexCount = ((vertexCount + n) | 0);
    if ((n === 4)) {
      hasQuads = true;
    }
    fi = ((1 + fi) | 0);
  }
  var count$proxy1 = vertexCount;
  var buffer = new ArrayBuffer((count$proxy1 << 5));
  var verts = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), count$proxy1);
  var vi = 0;
  if ((!hasQuads)) {
    fi = 0;
    while ((fi < (mesh$proxy1.a8.length | 0))) {
      var arr = mesh$proxy1.a8[fi];
      var opt$proxy1 = mesh$proxy1.gF[fi].hb;
      var si = 0;
      while ((si < (arr.length | 0))) {
        var x0 = arr[si];
        var index$proxy1 = vi;
        var offset$proxy9 = (index$proxy1 << 5);
        var x2 = new ($a_Ltrivalibs_bufferdata_BufferView())(verts.dv, offset$proxy9);
        f(x0, opt$proxy1, x2);
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
    while ((fi < (mesh$proxy1.a8.length | 0))) {
      var arr$2 = mesh$proxy1.a8[fi];
      var n$2 = (arr$2.length | 0);
      var opt$proxy2 = mesh$proxy1.gF[fi].hb;
      var si$2 = 0;
      while ((si$2 < n$2)) {
        var x0$1 = arr$2[si$2];
        var index$proxy2 = vi;
        var offset$proxy10 = (index$proxy2 << 5);
        var x2$1 = new ($a_Ltrivalibs_bufferdata_BufferView())(verts.dv, offset$proxy10);
        f(x0$1, opt$proxy2, x2$1);
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
    var $x_1 = new $c_Ltrivalibs_graphics_geometry_BufferedGeometry(verts, \u03b4proxy2.nx(idxBuf, vertexCount));
  }
  return p$1.nb($x_1, (void 0), (void 0), (void 0), (void 0), (void 0));
}
function $p_Lsketches_rooms_canvases_Canvases$package$__edgeDist$1__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr($thiz, wp, normal) {
  var $x_1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
  var d$proxy1 = (0.5 * $m_Lsketches_rooms_canvases_Canvases$package$().bE);
  var e$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().fX($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().ar(wp));
  var L$proxy1 = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().b1();
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  var dx = $x_1.az(L$proxy1.b5((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ax(d$proxy1)) + " - ") + e$proxy1.f) + ")")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().fX($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().ar(normal)), 1000.0));
  var $x_4 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
  var $x_3 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
  var $x_2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().a3(wp);
  var e$proxy2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().a3(wp);
  var L$proxy3 = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().b1();
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  var dy = $x_4.az($x_3.iN($x_2, L$proxy3.b5((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ax($m_Lsketches_rooms_canvases_Canvases$package$().aE)) + " - ") + e$proxy2.f) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().fX($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().a3(normal)), 1000.0));
  var $x_5 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
  var d$proxy2 = (0.5 * $m_Lsketches_rooms_canvases_Canvases$package$().bD);
  var e$proxy3 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().fX($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().h0(wp));
  var L$proxy5 = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().b1();
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  var dz = $x_5.az(L$proxy5.b5((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ax(d$proxy2)) + " - ") + e$proxy3.f) + ")")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().fX($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().h0(normal)), 1000.0));
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().iN($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().iN(dx, dy), dz);
}
function $p_Lsketches_rooms_canvases_Canvases$package$__contact$1__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr($thiz, dist) {
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().ny($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h($m_Lsketches_rooms_canvases_Canvases$package$().kO), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().bf(dist, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h($m_Lsketches_rooms_canvases_Canvases$package$().iX)));
}
function $p_Lsketches_rooms_canvases_Canvases$package$__roomNoise$1__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr($thiz, wp, normal) {
  var scaledWp = $m_Ltrivalibs_graphics_math_gpu_vec3$().aZ($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().az($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().ar(wp), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().a3(wp), 0.2)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().a3(wp), 0.3), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().az($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().h0(wp), 0.8), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().a3(wp), 0.2)));
  var edge = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().bf($p_Lsketches_rooms_canvases_Canvases$package$__edgeDist$1__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr($thiz, wp, normal), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h($m_Lsketches_rooms_canvases_Canvases$package$().iX));
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().ny($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(0.68), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().p0($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().mV($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().az($m_Ltrivalibs_graphics_shader_lib_noise_Simplex$().na($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().mX(scaledWp, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), 0.1), ($m_Ltrivalibs_graphics_math_gpu_expr$package$(), $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "3")), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().g1(3.6), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().g1(0.12), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().g1(120.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bc($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S($m_Ltrivalibs_graphics_shader_lib_noise_Simplex$().na($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().mX($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().oB(scaledWp, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), normal), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), 0.15), ($m_Ltrivalibs_graphics_math_gpu_expr$package$(), $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "3")), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().g1(2.1), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().g1(0.25), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().g1(70.0)), 0.3), edge)), 1.3)));
}
function $p_Lsketches_rooms_canvases_Canvases$package$__texSize$1__D__D__T2($thiz, w, h) {
  return new $c_T2($doubleToInt((w * $m_Lsketches_rooms_canvases_Canvases$package$().iZ)), $doubleToInt((h * $m_Lsketches_rooms_canvases_Canvases$package$().iZ)));
}
function $p_Lsketches_rooms_canvases_Canvases$package$__v$1__D__D__D__D__D__T2($thiz, x, y, z, u, w) {
  return new $c_T2(new $c_Ltrivalibs_graphics_math_cpu_Vec3(x, y, z), new $c_Ltrivalibs_graphics_math_cpu_Vec2(u, w));
}
function $p_Lsketches_rooms_canvases_Canvases$package$__paintingForm$1__Ltrivalibs_graphics_painter_Painter__Lsketches_rooms_canvases_PaintingSpec__Ltrivalibs_graphics_painter_Form($thiz, p$2, spec) {
  var hw = (0.5 * spec.bG);
  var hh = (0.5 * spec.bF);
  var hd = (0.5 * spec.bn);
  var p$proxy3 = (spec.bn / (spec.fD * spec.bG));
  var mu = ((p$proxy3 < 0.0) ? 0.0 : ((p$proxy3 > 0.45) ? 0.45 : p$proxy3));
  var p$proxy4 = (spec.bn / (spec.fD * spec.bF));
  var mv = ((p$proxy4 < 0.0) ? 0.0 : ((p$proxy4 > 0.45) ? 0.45 : p$proxy4));
  var faces = [$m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().br($p_Lsketches_rooms_canvases_Canvases$package$__v$1__D__D__D__D__D__T2($thiz, (-hw), hh, hd, mu, mv), $p_Lsketches_rooms_canvases_Canvases$package$__v$1__D__D__D__D__D__T2($thiz, (-hw), (-hh), hd, mu, (1.0 - mv)), $p_Lsketches_rooms_canvases_Canvases$package$__v$1__D__D__D__D__D__T2($thiz, hw, (-hh), hd, (1.0 - mu), (1.0 - mv)), $p_Lsketches_rooms_canvases_Canvases$package$__v$1__D__D__D__D__D__T2($thiz, hw, hh, hd, (1.0 - mu), mv)), $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().br($p_Lsketches_rooms_canvases_Canvases$package$__v$1__D__D__D__D__D__T2($thiz, hw, hh, hd, (1.0 - mu), mv), $p_Lsketches_rooms_canvases_Canvases$package$__v$1__D__D__D__D__D__T2($thiz, hw, (-hh), hd, (1.0 - mu), (1.0 - mv)), $p_Lsketches_rooms_canvases_Canvases$package$__v$1__D__D__D__D__D__T2($thiz, hw, (-hh), (-hd), 1.0, (1.0 - mv)), $p_Lsketches_rooms_canvases_Canvases$package$__v$1__D__D__D__D__D__T2($thiz, hw, hh, (-hd), 1.0, mv)), $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().br($p_Lsketches_rooms_canvases_Canvases$package$__v$1__D__D__D__D__D__T2($thiz, (-hw), hh, hd, mu, mv), $p_Lsketches_rooms_canvases_Canvases$package$__v$1__D__D__D__D__D__T2($thiz, (-hw), (-hh), hd, mu, (1.0 - mv)), $p_Lsketches_rooms_canvases_Canvases$package$__v$1__D__D__D__D__D__T2($thiz, (-hw), (-hh), (-hd), 0.0, (1.0 - mv)), $p_Lsketches_rooms_canvases_Canvases$package$__v$1__D__D__D__D__D__T2($thiz, (-hw), hh, (-hd), 0.0, mv)), $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().br($p_Lsketches_rooms_canvases_Canvases$package$__v$1__D__D__D__D__D__T2($thiz, (-hw), hh, hd, mu, mv), $p_Lsketches_rooms_canvases_Canvases$package$__v$1__D__D__D__D__D__T2($thiz, hw, hh, hd, (1.0 - mu), mv), $p_Lsketches_rooms_canvases_Canvases$package$__v$1__D__D__D__D__D__T2($thiz, hw, hh, (-hd), (1.0 - mu), 0.0), $p_Lsketches_rooms_canvases_Canvases$package$__v$1__D__D__D__D__D__T2($thiz, (-hw), hh, (-hd), mu, 0.0)), $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().br($p_Lsketches_rooms_canvases_Canvases$package$__v$1__D__D__D__D__D__T2($thiz, (-hw), (-hh), hd, mu, (1.0 - mv)), $p_Lsketches_rooms_canvases_Canvases$package$__v$1__D__D__D__D__D__T2($thiz, hw, (-hh), hd, (1.0 - mu), (1.0 - mv)), $p_Lsketches_rooms_canvases_Canvases$package$__v$1__D__D__D__D__D__T2($thiz, hw, (-hh), (-hd), (1.0 - mu), 1.0), $p_Lsketches_rooms_canvases_Canvases$package$__v$1__D__D__D__D__D__T2($thiz, (-hw), (-hh), (-hd), mu, 1.0)), $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().br($p_Lsketches_rooms_canvases_Canvases$package$__v$1__D__D__D__D__D__T2($thiz, (-hw), hh, (-hd), 0.0, 0.0), $p_Lsketches_rooms_canvases_Canvases$package$__v$1__D__D__D__D__D__T2($thiz, (-hw), (-hh), (-hd), 0.0, 1.0), $p_Lsketches_rooms_canvases_Canvases$package$__v$1__D__D__D__D__D__T2($thiz, hw, (-hh), (-hd), 1.0, 1.0), $p_Lsketches_rooms_canvases_Canvases$package$__v$1__D__D__D__D__D__T2($thiz, hw, hh, (-hd), 1.0, 0.0))];
  var mesh$proxy2 = $m_Ltrivalibs_graphics_geometry_Mesh$().n0(faces, null, 0, new $c_Ltrivalibs_graphics_geometry_package$package$$anon$1(0));
  var vl = new $c_Ltrivalibs_graphics_geometry_VertexLayout$named(new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$(), new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$(), $m_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$())));
  var f = ((v$3, ref$3) => {
    var values$proxy2 = vl.jb.g3(v$3);
    var baseOffset$proxy5 = (ref$3.off | 0);
    var nestedValues = values$proxy2.n(0);
    var value = nestedValues.n(0);
    ref$3.dv.setFloat32(baseOffset$proxy5, Math.fround(value), true);
    var tailOffset = ((4 + baseOffset$proxy5) | 0);
    var value$2 = nestedValues.n(1);
    ref$3.dv.setFloat32(tailOffset, Math.fround(value$2), true);
    var tailOffset$2 = ((4 + tailOffset) | 0);
    var value$3 = nestedValues.n(2);
    ref$3.dv.setFloat32(tailOffset$2, Math.fround(value$3), true);
    var tailOffset$4 = ((12 + baseOffset$proxy5) | 0);
    var nestedValues$2 = values$proxy2.n(1);
    var value$4 = nestedValues$2.n(0);
    ref$3.dv.setFloat32(tailOffset$4, Math.fround(value$4), true);
    var tailOffset$5 = ((4 + tailOffset$4) | 0);
    var value$5 = nestedValues$2.n(1);
    ref$3.dv.setFloat32(tailOffset$5, Math.fround(value$5), true);
  });
  var \u03b4proxy6 = $m_Ltrivalibs_graphics_geometry_buffers$package$();
  var vertexCount = 0;
  var hasQuads = false;
  var fi = 0;
  while ((fi < (mesh$proxy2.a8.length | 0))) {
    var n = (mesh$proxy2.a8[fi].length | 0);
    vertexCount = ((vertexCount + n) | 0);
    if ((n === 4)) {
      hasQuads = true;
    }
    fi = ((1 + fi) | 0);
  }
  var count$proxy3 = vertexCount;
  var buffer = new ArrayBuffer(Math.imul(20, count$proxy3));
  var verts = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), count$proxy3);
  var vi = 0;
  if ((!hasQuads)) {
    fi = 0;
    while ((fi < (mesh$proxy2.a8.length | 0))) {
      var arr = mesh$proxy2.a8[fi];
      var si = 0;
      while ((si < (arr.length | 0))) {
        var x0 = arr[si];
        var index$proxy6 = vi;
        var offset$proxy19 = Math.imul(20, index$proxy6);
        var x1 = new ($a_Ltrivalibs_bufferdata_BufferView())(verts.dv, offset$proxy19);
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
    while ((fi < (mesh$proxy2.a8.length | 0))) {
      var arr$2 = mesh$proxy2.a8[fi];
      var n$2 = (arr$2.length | 0);
      var si$2 = 0;
      while ((si$2 < n$2)) {
        var x0$1 = arr$2[si$2];
        var index$proxy7 = vi;
        var offset$proxy20 = Math.imul(20, index$proxy7);
        var x1$1 = new ($a_Ltrivalibs_bufferdata_BufferView())(verts.dv, offset$proxy20);
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
    var $x_1 = new $c_Ltrivalibs_graphics_geometry_BufferedGeometry(verts, \u03b4proxy6.nx(idxBuf, vertexCount));
  }
  return p$2.nb($x_1, (void 0), (void 0), (void 0), (void 0), (void 0));
}
function $p_Lsketches_rooms_canvases_Canvases$package$__corner$1__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__D__D__D__T2($thiz, center$2, right$1, width$4, height$4, su, sv, u, w) {
  return new $c_T2($f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a0(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a0(), center$2, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a0(), right$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), (0.5 * (su * width$4)))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a0(), $m_Lsketches_rooms_canvases_Canvases$package$().gr, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), (0.5 * (sv * height$4)))), new $c_Ltrivalibs_graphics_math_cpu_Vec2(u, w));
}
function $p_Lsketches_rooms_canvases_Canvases$package$__mkWall$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__Ltrivalibs_graphics_math_cpu_Vec3__Lsketches_rooms_canvases_Wall($thiz, p$12, center, width, height, rotY, inwardNormal) {
  var right = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a0(), $m_Lsketches_rooms_canvases_Canvases$package$().gr, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), inwardNormal);
  return new $c_Lsketches_rooms_canvases_Wall(center, width, height, rotY, inwardNormal, $p_Lsketches_rooms_canvases_Canvases$package$__form$2__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form($thiz, p$12, [$m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().br($p_Lsketches_rooms_canvases_Canvases$package$__corner$1__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__D__D__D__T2($thiz, center, right, width, height, (-1.0), 1.0, 0.0, 0.0), $p_Lsketches_rooms_canvases_Canvases$package$__corner$1__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__D__D__D__T2($thiz, center, right, width, height, (-1.0), (-1.0), 0.0, 1.0), $p_Lsketches_rooms_canvases_Canvases$package$__corner$1__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__D__D__D__T2($thiz, center, right, width, height, 1.0, (-1.0), 1.0, 1.0), $p_Lsketches_rooms_canvases_Canvases$package$__corner$1__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__D__D__D__T2($thiz, center, right, width, height, 1.0, 1.0, 1.0, 0.0))]), $m_Lsketches_rooms_canvases_Wall$().o0());
}
function $p_Lsketches_rooms_canvases_Canvases$package$__hang$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_GPUSampler__Lsketches_rooms_canvases_Wall__Lsketches_rooms_canvases_PaintingSpec__D__D__Lsketches_rooms_canvases_Painting($thiz, p$3, paintingShade$1, sampler$1, wall, spec, u, v) {
  var right = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a0(), $m_Lsketches_rooms_canvases_Canvases$package$().gr, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), wall.fF);
  var hd = (0.5 * spec.bn);
  var pos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a0(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a0(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a0(), wall.gD, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a0(), right, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), (u - (0.5 * wall.aT)))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a0(), $m_Lsketches_rooms_canvases_Canvases$package$().gr, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), (v - (0.5 * wall.aS)))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a0(), wall.fF, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), (hd + 0.02)));
  var m = $m_Ltrivalibs_graphics_math_cpu_Mat4$().k7(pos, $m_Ltrivalibs_graphics_math_cpu_Quat$().k6(wall.fG), new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0));
  var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
  var uv$proxy1 = ul$proxy1.ap;
  var buffer = new ArrayBuffer(64);
  var arr$proxy9 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
  var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy9.dv, 0), p$3.g, uv$proxy1);
  b.A.w(b.j, m);
  var $x_3 = b.z.queue;
  var $x_2 = b.y;
  var s$proxy3 = b.j;
  var $x_1 = s$proxy3.dv.buffer;
  $x_3.writeBuffer($x_2, 0.0, $x_1);
  var Bindable_this = p$3.i2($p_Lsketches_rooms_canvases_Canvases$package$__paintingForm$1__Ltrivalibs_graphics_painter_Painter__Lsketches_rooms_canvases_PaintingSpec__Ltrivalibs_graphics_painter_Form($thiz, p$3, spec), paintingShade$1, "none", (void 0));
  var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("model", b);
  var e2$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler$1);
  var e3$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("img", spec.gy);
  var \u03b4scrutinee554 = e1$proxy1.r;
  var idx = (Bindable_this.Y.E.model | 0);
  while (((Bindable_this.U.length | 0) <= idx)) {
    Bindable_this.U.push(null);
  }
  Bindable_this.U[idx] = \u03b4scrutinee554;
  var \u03b4scrutinee568 = e2$proxy1.r;
  var idx$2 = (Bindable_this.Y.E.samp | 0);
  while (((Bindable_this.U.length | 0) <= idx$2)) {
    Bindable_this.U.push(null);
  }
  Bindable_this.U[idx$2] = \u03b4scrutinee568;
  var \u03b4scrutinee588 = e3$proxy1.r;
  var idx$3 = (Bindable_this.Y.au.img | 0);
  while (((Bindable_this.a9.length | 0) <= idx$3)) {
    Bindable_this.a9.push(null);
  }
  Bindable_this.a9[idx$3] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee588);
  var baseRect = new $c_Ltrivalibs_graphics_math_cpu_Vec4((u / wall.aT), (1.0 - (v / wall.aS)), ((0.5 * spec.bG) / wall.aT), ((0.5 * spec.bF) / wall.aS));
  var ul$proxy2 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$());
  var uv$proxy2 = ul$proxy2.ap;
  var buffer$2 = new ArrayBuffer(16);
  var arr$proxy10 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
  var b$2 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy10.dv, 0), p$3.g, uv$proxy2);
  b$2.A.w(b$2.j, baseRect);
  var $x_6 = b$2.z.queue;
  var $x_5 = b$2.y;
  var s$proxy4 = b$2.j;
  var $x_4 = s$proxy4.dv.buffer;
  $x_6.writeBuffer($x_5, 0.0, $x_4);
  var painting = new $c_Lsketches_rooms_canvases_Painting(b, Bindable_this, b$2, new $c_Ltrivalibs_graphics_math_cpu_Vec2(($m_Lsketches_rooms_canvases_Canvases$package$().iY / wall.aT), ($m_Lsketches_rooms_canvases_Canvases$package$().iY / wall.aS)), pos, baseRect, wall.fG, wall.aS);
  wall.bH.push(painting);
  return painting;
}
function $p_Lsketches_rooms_canvases_Canvases$package$__compositeWallTex$1__Lsketchlib_utils_bake_TextureBaker__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_GPUSampler__Ltrivalibs_graphics_painter_Shade__Lsketches_rooms_canvases_Wall__Ltrivalibs_graphics_painter_Panel($thiz, wallBaker$1, p$4, copyShade$1, sampler$2, shadowShade$1, wall) {
  matchResult21: {
    var \u03b44$;
    var x41 = $p_Lsketches_rooms_canvases_Canvases$package$__texSize$1__D__D__T2($thiz, wall.aT, wall.aS);
    if ((x41 !== null)) {
      var \u03b44$ = x41;
      break matchResult21;
    }
    throw new $c_s_MatchError(x41);
  }
  var ww$2 = (\u03b44$.P | 0);
  var wh$2 = (\u03b44$.as | 0);
  var noiseTex = $m_Lsketchlib_utils_bake_Bake$package$().k3(wallBaker$1, wall.fE, ww$2, wh$2, (void 0), (void 0), true, (void 0));
  var Bindable_this = p$4.be(copyShade$1, (void 0), (void 0), (void 0));
  var e1$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler$2);
  var e2$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", noiseTex);
  var \u03b4scrutinee592 = e1$proxy2.r;
  var idx = (Bindable_this.v.E.samp | 0);
  while (((Bindable_this.i.length | 0) <= idx)) {
    Bindable_this.i.push(null);
  }
  Bindable_this.i[idx] = \u03b4scrutinee592;
  Bindable_this.J = null;
  var \u03b4scrutinee604 = e2$proxy2.r;
  var idx$2 = (Bindable_this.v.au.tex | 0);
  while (((Bindable_this.Q.length | 0) <= idx$2)) {
    Bindable_this.Q.push(null);
  }
  Bindable_this.Q[idx$2] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee604);
  Bindable_this.J = null;
  var Bindable_this$4 = p$4.be(shadowShade$1, $m_Ltrivalibs_graphics_painter_BlendState$().lK, (void 0), (void 0));
  var e1$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("strength", $m_Lsketches_rooms_canvases_Canvases$package$().kT);
  var \u03b4scrutinee612 = (+e1$proxy3.r);
  var idx$3 = (Bindable_this$4.v.E.strength | 0);
  var existing = ((idx$3 < (Bindable_this$4.i.length | 0)) ? Bindable_this$4.i[idx$3] : null);
  var device$proxy1 = Bindable_this$4.bM.g;
  if ((existing !== null)) {
    existing.A.w(existing.j, \u03b4scrutinee612);
    var $x_3 = existing.z.queue;
    var $x_2 = existing.y;
    var s$proxy5 = existing.j;
    var $x_1 = s$proxy5.dv.buffer;
    $x_3.writeBuffer($x_2, 0.0, $x_1);
    var bb = existing;
  } else {
    var uv = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
    var buffer = new ArrayBuffer(4);
    var arr$proxy11 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
    var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy11.dv, 0), device$proxy1, uv);
    b.A.w(b.j, \u03b4scrutinee612);
    var $x_6 = b.z.queue;
    var $x_5 = b.y;
    var s$proxy6 = b.j;
    var $x_4 = s$proxy6.dv.buffer;
    $x_6.writeBuffer($x_5, 0.0, $x_4);
    var bb = b;
  }
  while (((Bindable_this$4.i.length | 0) <= idx$3)) {
    Bindable_this$4.i.push(null);
  }
  Bindable_this$4.i[idx$3] = bb;
  Bindable_this$4.J = null;
  var array = wall.bH;
  var len = (array.length | 0);
  var i = 0;
  while ((i < len)) {
    var x0 = array[i];
    var InstanceList_this = Bindable_this$4.iq;
    var e1$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("rect", x0.fC);
    var e2$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("fade", x0.gv);
    var i$1 = InstanceList_this.o6();
    var Bindable_this$1 = InstanceList_this.fP[i$1];
    var \u03b4scrutinee636 = e1$proxy4.r;
    var idx$1 = (Bindable_this$1.jy.E.rect | 0);
    while (((Bindable_this$1.aM.length | 0) <= idx$1)) {
      Bindable_this$1.aM.push(null);
    }
    Bindable_this$1.aM[idx$1] = \u03b4scrutinee636;
    var \u03b4scrutinee646 = e2$proxy3.r;
    var idx$2$1 = (Bindable_this$1.jy.E.fade | 0);
    var existing$1 = ((idx$2$1 < (Bindable_this$1.aM.length | 0)) ? Bindable_this$1.aM[idx$2$1] : null);
    var device$proxy2 = Bindable_this$1.lL.g;
    if ((existing$1 !== null)) {
      existing$1.A.w(existing$1.j, \u03b4scrutinee646);
      var $x_9 = existing$1.z.queue;
      var $x_8 = existing$1.y;
      var s$proxy7 = existing$1.j;
      var $x_7 = s$proxy7.dv.buffer;
      $x_9.writeBuffer($x_8, 0.0, $x_7);
      var bb$2 = existing$1;
    } else {
      var uv$1 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$();
      var buffer$1 = new ArrayBuffer(8);
      var arr$proxy12 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$1), 1);
      var b$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy12.dv, 0), device$proxy2, uv$1);
      b$1.A.w(b$1.j, \u03b4scrutinee646);
      var $x_12 = b$1.z.queue;
      var $x_11 = b$1.y;
      var s$proxy8 = b$1.j;
      var $x_10 = s$proxy8.dv.buffer;
      $x_12.writeBuffer($x_11, 0.0, $x_10);
      var bb$2 = b$1;
    }
    while (((Bindable_this$1.aM.length | 0) <= idx$2$1)) {
      Bindable_this$1.aM.push(null);
    }
    Bindable_this$1.aM[idx$2$1] = bb$2;
    i = ((1 + i) | 0);
  }
  var layers$1 = [Bindable_this, Bindable_this$4];
  var panel = p$4.bt(ww$2, wh$2, (void 0), (void 0), (void 0), (void 0), true, (void 0), (void 0), (void 0), (void 0), (void 0), layers$1);
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$4, panel);
  return panel;
}
function $p_Lsketches_rooms_canvases_Canvases$package$__lineMask$1__D__D__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr($thiz, GridN$1, HalfWidth$1, t) {
  var f = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().nc($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S(t, GridN$1));
  var $x_2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
  var $x_1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
  var L$proxy11 = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().b1();
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $x_2.bf($x_1.iN(f, L$proxy11.b5((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ax(1.0)) + " - ") + f.f) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(HalfWidth$1), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(0.0));
}
function $p_Lsketches_rooms_canvases_Canvases$package$__patternPanel$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_painter_Panel($thiz, p$5, imgShade$1, c) {
  var Bindable_this = p$5.be(imgShade$1, (void 0), (void 0), (void 0));
  var e1$proxy5 = new $c_Ltrivalibs_graphics_painter_BindPair("color", c);
  var \u03b4scrutinee711 = e1$proxy5.r;
  var idx = (Bindable_this.v.E.color | 0);
  var existing = ((idx < (Bindable_this.i.length | 0)) ? Bindable_this.i[idx] : null);
  var device$proxy3 = Bindable_this.bM.g;
  if ((existing !== null)) {
    existing.A.w(existing.j, \u03b4scrutinee711);
    var $x_3 = existing.z.queue;
    var $x_2 = existing.y;
    var s$proxy9 = existing.j;
    var $x_1 = s$proxy9.dv.buffer;
    $x_3.writeBuffer($x_2, 0.0, $x_1);
    var bb = existing;
  } else {
    var uv = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$();
    var buffer = new ArrayBuffer(16);
    var arr$proxy13 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
    var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy13.dv, 0), device$proxy3, uv);
    b.A.w(b.j, \u03b4scrutinee711);
    var $x_6 = b.z.queue;
    var $x_5 = b.y;
    var s$proxy10 = b.j;
    var $x_4 = s$proxy10.dv.buffer;
    $x_6.writeBuffer($x_5, 0.0, $x_4);
    var bb = b;
  }
  while (((Bindable_this.i.length | 0) <= idx)) {
    Bindable_this.i.push(null);
  }
  Bindable_this.i[idx] = bb;
  Bindable_this.J = null;
  return p$5.bt(256, 256, (void 0), (void 0), (void 0), (void 0), true, (void 0), (void 0), (void 0), (void 0), Bindable_this, (void 0));
}
function $p_Lsketches_rooms_canvases_Canvases$package$__isAnimated$1__I__Z($thiz, wallIndex) {
  return (wallIndex >= 2);
}
/** @constructor */
function $c_Lsketches_rooms_canvases_Canvases$package$() {
  this.bE = 0.0;
  this.aE = 0.0;
  this.bD = 0.0;
  this.iZ = 0.0;
  this.gr = null;
  this.iX = 0.0;
  this.kO = 0.0;
  this.kR = 0.0;
  this.kS = 0.0;
  this.iY = 0.0;
  this.kT = 0.0;
  this.kP = null;
  this.kN = null;
  this.kV = null;
  this.kU = null;
  this.kQ = null;
  $n_Lsketches_rooms_canvases_Canvases$package$ = this;
  this.bE = 6.5;
  this.aE = 5.5;
  this.bD = 10.0;
  this.iZ = 48.0;
  this.gr = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
  this.iX = 0.08;
  this.kO = 0.93;
  this.kR = 2.7;
  this.kS = 0.25;
  this.iY = 0.1;
  this.kT = 0.44;
  this.kP = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.8, 0.78, 0.75);
  this.kN = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.86, 0.86, 0.85);
  this.kV = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.97, 0.97, 0.96);
  this.kU = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.88, 0.88, 0.87);
  this.kQ = new $c_Ltrivalibs_graphics_math_cpu_Vec3(8.0, 7.6, 6.8);
}
$p = $c_Lsketches_rooms_canvases_Canvases$package$.prototype = new $h_O();
$p.constructor = $c_Lsketches_rooms_canvases_Canvases$package$;
/** @constructor */
function $h_Lsketches_rooms_canvases_Canvases$package$() {
}
$h_Lsketches_rooms_canvases_Canvases$package$.prototype = $p;
$p.qy = (function(uv, rect, fade) {
  var hx = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().h0(rect);
  var hy = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().iS(rect);
  var dx = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bO($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().ar(uv), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().ar(rect));
  var dy = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bO($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bO($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().a3(uv), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().a3(rect)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().a3(fade), $m_Lsketches_rooms_canvases_Canvases$package$().kS));
  var hMask = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().bf($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().fX(dx), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().az(hx, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().ar(fade), 0.5)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bO(hx, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().ar(fade), 0.5)));
  var upperFade = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().ar(fade);
  var lowerFade = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().a3(fade), $m_Lsketches_rooms_canvases_Canvases$package$().kR);
  var upper = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().bf(dy, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bO($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().nN(hy), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S(upperFade, 0.5)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().az($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().nN(hy), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S(upperFade, 0.5)));
  var lower = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().bf(dy, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().az(hy, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S(lowerFade, 0.5)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bO(hy, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S(lowerFade, 0.5)));
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bc($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bc(hMask, upper), lower);
});
$p.qp = (function(canvas) {
  $m_Ltrivalibs_graphics_painter_Painter$().pe(canvas, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((p$6) => {
    var sampler = p$6.kb();
    var box = $m_Ltrivalibs_graphics_geometry_Box$().of(new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, (0.5 * $m_Lsketches_rooms_canvases_Canvases$package$().aE), 0.0), $m_Lsketches_rooms_canvases_Canvases$package$().bE, $m_Lsketches_rooms_canvases_Canvases$package$().aE, $m_Lsketches_rooms_canvases_Canvases$package$().bD);
    var floorForm = $p_Lsketches_rooms_canvases_Canvases$package$__form$2__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$6, [box.or(new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((c$2, uvw$2) => $p_Lsketches_rooms_canvases_Canvases$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2(this, c$2, uvw$2.B, uvw$2.C))))]);
    var ceilForm = $p_Lsketches_rooms_canvases_Canvases$package$__form$2__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$6, [box.qM(new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((c$2$1, uvw$2$1) => $p_Lsketches_rooms_canvases_Canvases$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2(this, c$2$1, uvw$2$1.B, uvw$2$1.C))))]);
    matchResult13$1: {
      var \u03b42$;
      var x17 = $p_Lsketches_rooms_canvases_Canvases$package$__texSize$1__D__D__T2(this, $m_Lsketches_rooms_canvases_Canvases$package$().bE, $m_Lsketches_rooms_canvases_Canvases$package$().bD);
      if ((x17 !== null)) {
        var \u03b42$ = x17;
        break matchResult13$1;
      }
      throw new $c_s_MatchError(x17);
    }
    var rfw$2 = (\u03b42$.P | 0);
    var rfh$2 = (\u03b42$.as | 0);
    $m_Lsketchlib_utils_bake_TextureBaker$();
    var transform$proxy1 = (void 0);
    $m_Lsketchlib_utils_bake_TextureBaker$();
    var format$proxy1 = (void 0);
    $m_Lsketchlib_utils_bake_TextureBaker$();
    var mips$proxy1 = true;
    $m_Lsketchlib_utils_bake_TextureBaker$();
    var clearColor$proxy1 = (void 0);
    var frag$proxy1 = new $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(((wp$2, normal$2, _$1$2) => $m_Ltrivalibs_graphics_math_gpu_vec4$().ad($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().b3($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().b3($m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().i4($m_Lsketches_rooms_canvases_Canvases$package$().kP), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $p_Lsketches_rooms_canvases_Canvases$package$__roomNoise$1__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr(this, wp$2, normal$2)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $p_Lsketches_rooms_canvases_Canvases$package$__contact$1__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr(this, $p_Lsketches_rooms_canvases_Canvases$package$__edgeDist$1__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr(this, wp$2, normal$2))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0))));
    var $x_4 = $m_Lsketchlib_utils_bake_Bake$package$();
    var build$proxy1 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3) => {
      $p_Lsketchlib_utils_bake_TextureBaker$__buildVert__Ltrivalibs_graphics_shader_dsl_Program__V($m_Lsketchlib_utils_bake_TextureBaker$(), program$3);
      var body$proxy1 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2) => {
        var $x_2 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
        var $x_1 = $m_sjsr_package$();
        var AssignTarget_this = ctx$2.aj.X("color");
        var value$proxy1 = frag$proxy1.k2(ctx$2.a1.k("worldPos"), ctx$2.a1.k("normal"), ctx$2.a1.k("uv"));
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return $x_2.aY(new $c_sjsr_WrappedVarArgs($x_1.d(new ($d_T.r().C)([(((("  " + AssignTarget_this.R) + " = ") + value$proxy1.f) + ";")]))));
      }));
      var ctx = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg;
      try {
        var $x_3 = body$proxy1.h(ctx);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev;
      }
      program$3.aH = $x_3;
      $m_sjs_js_ArrayOps$().D(reg.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$10) => ((data$3) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$10, data$3);
      }))(program$3)));
    }));
    var program = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy1.h(program);
    var b = program.aU;
    var b$1 = program.aH;
    var helperFns$proxy1 = program.ak();
    var id = p$6.p;
    p$6.p = ((1 + p$6.p) | 0);
    var names = $m_sjs_js_ArrayOpsCommon$().b(["model"], []);
    var dict = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i = 0;
    while ((i < (names.length | 0))) {
      dict[names[i]] = i;
      i = ((1 + i) | 0);
    }
    var names$2 = [];
    var dict$2 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$2 = 0;
    while ((i$2 < (names$2.length | 0))) {
      dict$2[names$2[i$2]] = i$2;
      i$2 = ((1 + i$2) | 0);
    }
    var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef(b, b$1, helperFns$proxy1);
    var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().b(["position"], $m_sjs_js_ArrayOpsCommon$().b(["uv"], $m_sjs_js_ArrayOpsCommon$().b(["normal"], []))), $m_sjs_js_ArrayOpsCommon$().b(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec3<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().b(["worldPos"], $m_sjs_js_ArrayOpsCommon$().b(["normal"], $m_sjs_js_ArrayOpsCommon$().b(["uv"], []))), $m_sjs_js_ArrayOpsCommon$().b(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().b(["color"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec4<f32>"], []), []);
    var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().b(["model"], []), $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).bq.t()], []));
    var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.a6, sd.a5, fragBuiltinParams);
    var args$proxy1 = $m_sr_ScalaRunTime$().am(new ($d_sjs_js_Any.r().C)([baseWgsl]));
    console.log(...$m_sjsr_Compat$().al(args$proxy1));
    var module = p$6.g.createShaderModule($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("code", baseWgsl)])))));
    var formats = $m_sjs_js_ArrayOpsCommon$().b(["float32x3"], $m_sjs_js_ArrayOpsCommon$().b(["float32x2"], $m_sjs_js_ArrayOpsCommon$().b(["float32x3"], [])));
    var sizes = $m_sjs_js_ArrayOpsCommon$().b([12], $m_sjs_js_ArrayOpsCommon$().b([8], $m_sjs_js_ArrayOpsCommon$().b([12], [])));
    var offsets = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes);
    var stride = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes);
    var attributes = [];
    var i$3 = 0;
    while ((i$3 < (formats.length | 0))) {
      attributes.push($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("shaderLocation", i$3), new $c_T2("offset", (offsets[i$3] | 0)), new $c_T2("format", formats[i$3])])))));
      i$3 = ((1 + i$3) | 0);
    }
    var vbl = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("arrayStride", stride), new $c_T2("attributes", attributes)]))));
    var descriptors = $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 1), new $c_T2("buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], [])], []);
    var result = [];
    $m_sjs_js_ArrayOps$().D(descriptors, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$1) => ((entries$2) => (result.push(Painter_this$1.g.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("entries", entries$2)])))))) | 0)))(p$6)));
    var x20 = new $c_T2(result, $m_Ltrivalibs_graphics_shader_layouts$().L(p$6.g, result));
    var \u03b42$$2 = x20;
    var bgls$2 = \u03b42$$2.P;
    var pl = $m_Ltrivalibs_graphics_shader_layouts$().L(p$6.g, bgls$2);
    var floorTex = $x_4.k3(new $c_Lsketchlib_utils_bake_TextureBaker(p$6, new $c_Ltrivalibs_graphics_painter_Shade(id, module, vbl, bgls$2[0], null, pl, false, dict, dict$2)), floorForm, rfw$2, rfh$2, transform$proxy1, format$proxy1, mips$proxy1, clearColor$proxy1);
    $m_Lsketchlib_utils_bake_TextureBaker$();
    var transform$proxy2 = (void 0);
    $m_Lsketchlib_utils_bake_TextureBaker$();
    var mips$proxy2 = true;
    $m_Lsketchlib_utils_bake_TextureBaker$();
    var clearColor$proxy2 = (void 0);
    var frag$proxy2 = new $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(((wp$2$1, normal$2$1, uv$2, color$2) => {
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var col = new $c_Ltrivalibs_graphics_math_gpu_VarExpr("col");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var s$1 = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "s");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var band = new $c_Ltrivalibs_graphics_math_gpu_VarExpr("band");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var lf = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "lf");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var halo = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "halo");
      var $x_16 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
      var $x_15 = $m_sjsr_package$();
      var $x_14 = col.W($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().b3($m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().i4($m_Lsketches_rooms_canvases_Canvases$package$().kN), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $p_Lsketches_rooms_canvases_Canvases$package$__roomNoise$1__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr(this, wp$2$1, normal$2$1)));
      var $x_13 = s$1.W($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().nc($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().o1($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().ar(uv$2), 6.0), 0.5)));
      var $x_12 = band.W($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().bf($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().fX(s$1), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(0.05), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(0.02)));
      var $x_11 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
      var $x_10 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().bf($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().a3(uv$2), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(0.05), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(0.15));
      var $x_9 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
      var e$proxy4 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().a3(uv$2);
      var L$proxy7 = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().b1();
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var $x_8 = lf.W($x_11.bc($x_10, $x_9.bf(L$proxy7.b5((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ax(1.0)) + " - ") + e$proxy4.f) + ")")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(0.05), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(0.15))));
      var $x_7 = band.o4(lf);
      var $x_6 = halo.W($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().o3(band, $m_Lsketches_rooms_canvases_Canvases$package$().kQ));
      var $x_5 = col.o2(halo);
      var value$proxy3 = $m_Ltrivalibs_graphics_math_gpu_vec4$().ad(col, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0));
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return $x_16.aY(new $c_sjsr_WrappedVarArgs($x_15.d(new ($d_T.r().C)([$x_14, $x_13, $x_12, $x_8, $x_7, $x_6, $x_5, (((("  " + color$2.R) + " = ") + value$proxy3.f) + ";")]))));
    }));
    var $x_18 = $m_Lsketchlib_utils_bake_Bake$package$();
    var build$proxy2 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$1) => {
      $p_Lsketchlib_utils_bake_TextureBaker$__buildVert__Ltrivalibs_graphics_shader_dsl_Program__V($m_Lsketchlib_utils_bake_TextureBaker$(), program$3$1);
      var body$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$1) => frag$proxy2.mZ(ctx$2$1.a1.k("worldPos"), ctx$2$1.a1.k("normal"), ctx$2$1.a1.k("uv"), ctx$2$1.aj.X("color"))));
      var ctx$1 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$1;
      try {
        var $x_17 = body$proxy3.h(ctx$1);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$1;
      }
      program$3$1.aH = $x_17;
      $m_sjs_js_ArrayOps$().D(reg$1.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$11) => ((data$3$1) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$11, data$3$1);
      }))(program$3$1)));
    }));
    var program$2 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy2.h(program$2);
    var b$2 = program$2.aU;
    var b$3 = program$2.aH;
    var helperFns$proxy2 = program$2.ak();
    var id$2 = p$6.p;
    p$6.p = ((1 + p$6.p) | 0);
    var names$4 = $m_sjs_js_ArrayOpsCommon$().b(["model"], []);
    var dict$3 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$4 = 0;
    while ((i$4 < (names$4.length | 0))) {
      dict$3[names$4[i$4]] = i$4;
      i$4 = ((1 + i$4) | 0);
    }
    var names$5 = [];
    var dict$4 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$5 = 0;
    while ((i$5 < (names$5.length | 0))) {
      dict$4[names$5[i$5]] = i$5;
      i$5 = ((1 + i$5) | 0);
    }
    var sd$2 = new $c_Ltrivalibs_graphics_shader_ShaderDef(b$2, b$3, helperFns$proxy2);
    var vertexInputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().b(["position"], $m_sjs_js_ArrayOpsCommon$().b(["uv"], $m_sjs_js_ArrayOpsCommon$().b(["normal"], []))), $m_sjs_js_ArrayOpsCommon$().b(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec3<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().b(["worldPos"], $m_sjs_js_ArrayOpsCommon$().b(["normal"], $m_sjs_js_ArrayOpsCommon$().b(["uv"], []))), $m_sjs_js_ArrayOpsCommon$().b(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().b(["color"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec4<f32>"], []), []);
    var groupDecls$2 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().b(["model"], []), $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).bq.t()], []));
    var fragBuiltinParams$2 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$2 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$2, vertexInputStruct$2, vertexOutputStruct$2, fragmentOutputStruct$2, groupDecls$2, sd$2.a6, sd$2.a5, fragBuiltinParams$2);
    var args$proxy2 = $m_sr_ScalaRunTime$().am(new ($d_sjs_js_Any.r().C)([baseWgsl$2]));
    console.log(...$m_sjsr_Compat$().al(args$proxy2));
    var module$2 = p$6.g.createShaderModule($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("code", baseWgsl$2)])))));
    var formats$2 = $m_sjs_js_ArrayOpsCommon$().b(["float32x3"], $m_sjs_js_ArrayOpsCommon$().b(["float32x2"], $m_sjs_js_ArrayOpsCommon$().b(["float32x3"], [])));
    var sizes$2 = $m_sjs_js_ArrayOpsCommon$().b([12], $m_sjs_js_ArrayOpsCommon$().b([8], $m_sjs_js_ArrayOpsCommon$().b([12], [])));
    var offsets$2 = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes$2);
    var stride$2 = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes$2);
    var attributes$2 = [];
    var i$6 = 0;
    while ((i$6 < (formats$2.length | 0))) {
      attributes$2.push($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("shaderLocation", i$6), new $c_T2("offset", (offsets$2[i$6] | 0)), new $c_T2("format", formats$2[i$6])])))));
      i$6 = ((1 + i$6) | 0);
    }
    var vbl$2 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("arrayStride", stride$2), new $c_T2("attributes", attributes$2)]))));
    var descriptors$2 = $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 1), new $c_T2("buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], [])], []);
    var result$2 = [];
    $m_sjs_js_ArrayOps$().D(descriptors$2, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$2) => ((entries$2$1) => (result$2.push(Painter_this$2.g.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("entries", entries$2$1)])))))) | 0)))(p$6)));
    var x23 = new $c_T2(result$2, $m_Ltrivalibs_graphics_shader_layouts$().L(p$6.g, result$2));
    var \u03b42$$3 = x23;
    var bgls$4 = \u03b42$$3.P;
    var pl$2 = $m_Ltrivalibs_graphics_shader_layouts$().L(p$6.g, bgls$4);
    var ceilTex = $x_18.k3(new $c_Lsketchlib_utils_bake_TextureBaker(p$6, new $c_Ltrivalibs_graphics_painter_Shade(id$2, module$2, vbl$2, bgls$4[0], null, pl$2, false, dict$3, dict$4)), ceilForm, rfw$2, rfh$2, transform$proxy2, "rgba16float", mips$proxy2, clearColor$proxy2);
    var frag$proxy3 = new $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(((wp$2$2, normal$2$2, _$2$2) => $m_Ltrivalibs_graphics_math_gpu_vec4$().ad($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().b3($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().b3($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().pl($m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().i4($m_Lsketches_rooms_canvases_Canvases$package$().kV), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Lsketches_rooms_canvases_Canvases$package$().kU, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().bf($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().a3(wp$2$2), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(4.6), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(5.5))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $p_Lsketches_rooms_canvases_Canvases$package$__roomNoise$1__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr(this, wp$2$2, normal$2$2)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $p_Lsketches_rooms_canvases_Canvases$package$__contact$1__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr(this, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().a3(wp$2$2))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0))));
    var build$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$2) => {
      $p_Lsketchlib_utils_bake_TextureBaker$__buildVert__Ltrivalibs_graphics_shader_dsl_Program__V($m_Lsketchlib_utils_bake_TextureBaker$(), program$3$2);
      var body$proxy5 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$2) => {
        var $x_20 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
        var $x_19 = $m_sjsr_package$();
        var AssignTarget_this$1 = ctx$2$2.aj.X("color");
        var value$proxy5 = frag$proxy3.k2(ctx$2$2.a1.k("worldPos"), ctx$2$2.a1.k("normal"), ctx$2$2.a1.k("uv"));
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return $x_20.aY(new $c_sjsr_WrappedVarArgs($x_19.d(new ($d_T.r().C)([(((("  " + AssignTarget_this$1.R) + " = ") + value$proxy5.f) + ";")]))));
      }));
      var ctx$3 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$2;
      try {
        var $x_21 = body$proxy5.h(ctx$3);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$2;
      }
      program$3$2.aH = $x_21;
      $m_sjs_js_ArrayOps$().D(reg$2.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$12) => ((data$3$2) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$12, data$3$2);
      }))(program$3$2)));
    }));
    var program$3$3 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy3.h(program$3$3);
    var b$4 = program$3$3.aU;
    var b$5 = program$3$3.aH;
    var helperFns$proxy3 = program$3$3.ak();
    var id$3 = p$6.p;
    p$6.p = ((1 + p$6.p) | 0);
    var names$7 = $m_sjs_js_ArrayOpsCommon$().b(["model"], []);
    var dict$5 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$7 = 0;
    while ((i$7 < (names$7.length | 0))) {
      dict$5[names$7[i$7]] = i$7;
      i$7 = ((1 + i$7) | 0);
    }
    var names$8 = [];
    var dict$6 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$8 = 0;
    while ((i$8 < (names$8.length | 0))) {
      dict$6[names$8[i$8]] = i$8;
      i$8 = ((1 + i$8) | 0);
    }
    var sd$3 = new $c_Ltrivalibs_graphics_shader_ShaderDef(b$4, b$5, helperFns$proxy3);
    var vertexInputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().b(["position"], $m_sjs_js_ArrayOpsCommon$().b(["uv"], $m_sjs_js_ArrayOpsCommon$().b(["normal"], []))), $m_sjs_js_ArrayOpsCommon$().b(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec3<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().b(["worldPos"], $m_sjs_js_ArrayOpsCommon$().b(["normal"], $m_sjs_js_ArrayOpsCommon$().b(["uv"], []))), $m_sjs_js_ArrayOpsCommon$().b(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().b(["color"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec4<f32>"], []), []);
    var groupDecls$3 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().b(["model"], []), $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).bq.t()], []));
    var fragBuiltinParams$3 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$3 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$3, vertexInputStruct$3, vertexOutputStruct$3, fragmentOutputStruct$3, groupDecls$3, sd$3.a6, sd$3.a5, fragBuiltinParams$3);
    var args$proxy3 = $m_sr_ScalaRunTime$().am(new ($d_sjs_js_Any.r().C)([baseWgsl$3]));
    console.log(...$m_sjsr_Compat$().al(args$proxy3));
    var module$3 = p$6.g.createShaderModule($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("code", baseWgsl$3)])))));
    var formats$3 = $m_sjs_js_ArrayOpsCommon$().b(["float32x3"], $m_sjs_js_ArrayOpsCommon$().b(["float32x2"], $m_sjs_js_ArrayOpsCommon$().b(["float32x3"], [])));
    var sizes$3 = $m_sjs_js_ArrayOpsCommon$().b([12], $m_sjs_js_ArrayOpsCommon$().b([8], $m_sjs_js_ArrayOpsCommon$().b([12], [])));
    var offsets$3 = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes$3);
    var stride$3 = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes$3);
    var attributes$3 = [];
    var i$9 = 0;
    while ((i$9 < (formats$3.length | 0))) {
      attributes$3.push($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("shaderLocation", i$9), new $c_T2("offset", (offsets$3[i$9] | 0)), new $c_T2("format", formats$3[i$9])])))));
      i$9 = ((1 + i$9) | 0);
    }
    var vbl$3 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("arrayStride", stride$3), new $c_T2("attributes", attributes$3)]))));
    var descriptors$3 = $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 1), new $c_T2("buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], [])], []);
    var result$3 = [];
    $m_sjs_js_ArrayOps$().D(descriptors$3, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$3) => ((entries$2$2) => (result$3.push(Painter_this$3.g.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("entries", entries$2$2)])))))) | 0)))(p$6)));
    var x26 = new $c_T2(result$3, $m_Ltrivalibs_graphics_shader_layouts$().L(p$6.g, result$3));
    var \u03b42$$4 = x26;
    var bgls$6 = \u03b42$$4.P;
    var pl$3 = $m_Ltrivalibs_graphics_shader_layouts$().L(p$6.g, bgls$6);
    var wallBaker = new $c_Lsketchlib_utils_bake_TextureBaker(p$6, new $c_Ltrivalibs_graphics_painter_Shade(id$3, module$3, vbl$3, bgls$6[0], null, pl$3, false, dict$5, dict$6));
    var build$proxy4 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$4) => {
      var body$proxy7 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$3) => {
        var AssignTarget_this$2 = ctx$2$3.aj.X("color");
        var tex = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex");
        var uv = ctx$2$3.a1.k("uv");
        var sampler$1 = ctx$2$3.K.k("samp");
        var value$proxy7 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().aZ(tex, uv, sampler$1);
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return (((("  " + AssignTarget_this$2.R) + " = ") + value$proxy7.f) + ";");
      }));
      var ctx$4 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$3 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$3 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$3;
      try {
        var $x_22 = body$proxy7.h(ctx$4);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$3;
      }
      program$3$4.a2 = $x_22;
      $m_sjs_js_ArrayOps$().D(reg$3.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$4) => ((data$3$3) => {
        $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$4, data$3$3);
      }))(program$3$4)));
    }));
    var program$4 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
    build$proxy4.h(program$4);
    var b$6 = program$4.a2;
    var helperFns$proxy4 = program$4.ak();
    var id$4 = p$6.p;
    p$6.p = ((1 + p$6.p) | 0);
    var names$10 = $m_sjs_js_ArrayOpsCommon$().b(["samp"], []);
    var dict$7 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$10 = 0;
    while ((i$10 < (names$10.length | 0))) {
      dict$7[names$10[i$10]] = i$10;
      i$10 = ((1 + i$10) | 0);
    }
    var names$11 = $m_sjs_js_ArrayOpsCommon$().b(["tex"], []);
    var dict$8 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$11 = 0;
    while ((i$11 < (names$11.length | 0))) {
      dict$8[names$11[i$11]] = i$11;
      i$11 = ((1 + i$11) | 0);
    }
    var sd$4 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$6, helperFns$proxy4);
    var vertexInputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("vertex_index", "vertex_index", "u32")], []));
    var vertexOutputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().b(["uv"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().b(["color"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec4<f32>"], []), []);
    var groupDecls$4 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().b(["samp"], []), $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).M.t()], []));
    var fragBuiltinParams$4 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$4 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$4, vertexInputStruct$4, vertexOutputStruct$4, fragmentOutputStruct$4, groupDecls$4, sd$4.a6, sd$4.a5, fragBuiltinParams$4);
    var wgsl$4 = (baseWgsl$4 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
    var args$proxy4 = $m_sr_ScalaRunTime$().am(new ($d_sjs_js_Any.r().C)([wgsl$4]));
    console.log(...$m_sjsr_Compat$().al(args$proxy4));
    var module$4 = p$6.g.createShaderModule($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("code", wgsl$4)])))));
    var descriptors$4 = $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], [])], []);
    var result$4 = [];
    $m_sjs_js_ArrayOps$().D(descriptors$4, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$4) => ((entries$2$3) => (result$4.push(Painter_this$4.g.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("entries", entries$2$3)])))))) | 0)))(p$6)));
    var x29 = new $c_T2(result$4, $m_Ltrivalibs_graphics_shader_layouts$().L(p$6.g, result$4));
    var \u03b46$ = x29;
    var bgls$8 = \u03b46$.P;
    var entries = $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], []);
    var panelBgl$4 = p$6.g.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("entries", entries)])))));
    if ((panelBgl$4 !== null)) {
      var other$proxy4 = [panelBgl$4];
      var allBgls$4 = bgls$8.concat(other$proxy4);
    } else {
      var allBgls$4 = bgls$8;
    }
    var pl$4 = $m_Ltrivalibs_graphics_shader_layouts$().L(p$6.g, allBgls$4);
    var copyShade = new $c_Ltrivalibs_graphics_painter_Shade(id$4, module$4, null, bgls$8[0], panelBgl$4, pl$4, false, dict$7, dict$8);
    var build$proxy5 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$5) => {
      var body$proxy9 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$4) => {
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var sm = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "sm");
        var $x_27 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
        var $x_26 = $m_sjsr_package$();
        var $x_25 = sm.W($m_Lsketches_rooms_canvases_Canvases$package$().qy(ctx$2$4.a1.k("uv"), ctx$2$4.K.k("rect"), ctx$2$4.K.k("fade")));
        var AssignTarget_this$3 = ctx$2$4.aj.X("color");
        var $x_24 = $m_Ltrivalibs_graphics_math_gpu_vec4$();
        var $x_23 = $m_Ltrivalibs_graphics_math_gpu_vec3$();
        var e$proxy5 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bc(ctx$2$4.K.k("strength"), sm);
        var L$proxy9 = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().b1();
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var value$proxy9 = $x_24.ad($x_23.bP(L$proxy9.b5((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ax(1.0)) + " - ") + e$proxy5.f) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0));
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return $x_27.aY(new $c_sjsr_WrappedVarArgs($x_26.d(new ($d_T.r().C)([$x_25, (((("  " + AssignTarget_this$3.R) + " = ") + value$proxy9.f) + ";")]))));
      }));
      var ctx$5 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$4 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$4 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$4;
      try {
        var $x_28 = body$proxy9.h(ctx$5);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$4;
      }
      program$3$5.a2 = $x_28;
      $m_sjs_js_ArrayOps$().D(reg$4.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$5) => ((data$3$4) => {
        $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$5, data$3$4);
      }))(program$3$5)));
    }));
    var program$5 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
    build$proxy5.h(program$5);
    var b$7 = program$5.a2;
    var helperFns$proxy5 = program$5.ak();
    var id$5 = p$6.p;
    p$6.p = ((1 + p$6.p) | 0);
    var names$13 = $m_sjs_js_ArrayOpsCommon$().b(["rect"], $m_sjs_js_ArrayOpsCommon$().b(["fade"], $m_sjs_js_ArrayOpsCommon$().b(["strength"], [])));
    var dict$9 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$12 = 0;
    while ((i$12 < (names$13.length | 0))) {
      dict$9[names$13[i$12]] = i$12;
      i$12 = ((1 + i$12) | 0);
    }
    var names$14 = [];
    var dict$10 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$13 = 0;
    while ((i$13 < (names$14.length | 0))) {
      dict$10[names$14[i$13]] = i$13;
      i$13 = ((1 + i$13) | 0);
    }
    var sd$5 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$7, helperFns$proxy5);
    var vertexInputStruct$5 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("vertex_index", "vertex_index", "u32")], []));
    var vertexOutputStruct$5 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().b(["uv"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$5 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().b(["color"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec4<f32>"], []), []);
    var groupDecls$5 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().b(["rect"], $m_sjs_js_ArrayOpsCommon$().b(["fade"], $m_sjs_js_ArrayOpsCommon$().b(["strength"], []))), $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$()).M.t()], $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$()).M.t()], $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).M.t()], []))));
    var fragBuiltinParams$5 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$5 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$5, vertexInputStruct$5, vertexOutputStruct$5, fragmentOutputStruct$5, groupDecls$5, sd$5.a6, sd$5.a5, fragBuiltinParams$5);
    var args$proxy5 = $m_sr_ScalaRunTime$().am(new ($d_sjs_js_Any.r().C)([baseWgsl$5]));
    console.log(...$m_sjsr_Compat$().al(args$proxy5));
    var module$5 = p$6.g.createShaderModule($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("code", baseWgsl$5)])))));
    var descriptors$5 = $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 2), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], [])))], []);
    var result$5 = [];
    $m_sjs_js_ArrayOps$().D(descriptors$5, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$5) => ((entries$2$4) => (result$5.push(Painter_this$5.g.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("entries", entries$2$4)])))))) | 0)))(p$6)));
    var x32 = new $c_T2(result$5, $m_Ltrivalibs_graphics_shader_layouts$().L(p$6.g, result$5));
    var \u03b46$$2 = x32;
    var bgls$10 = \u03b46$$2.P;
    var pl$5 = $m_Ltrivalibs_graphics_shader_layouts$().L(p$6.g, bgls$10);
    var shadowShade = new $c_Ltrivalibs_graphics_painter_Shade(id$5, module$5, null, bgls$10[0], null, pl$5, false, dict$9, dict$10);
    var build$proxy6 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$6) => {
      var body$proxy11 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$5) => {
        var $x_32 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
        var $x_31 = $m_sjsr_package$();
        var AssignTarget_this$4 = ctx$2$5.aV.X("uv");
        var value$proxy11 = ctx$2$5.ba.k("uv");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_30 = AssignTarget_this$4.R;
        var $x_29 = value$proxy11.f;
        var AssignTarget_this$2$1 = ctx$2$5.aV.hu;
        var value$proxy13 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().gW(ctx$2$5.ht.k("vp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fZ(), $m_Ltrivalibs_graphics_math_gpu_vec4$().ad(ctx$2$5.ba.k("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$());
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return $x_32.aY(new $c_sjsr_WrappedVarArgs($x_31.d(new ($d_T.r().C)([(((("  " + $x_30) + " = ") + $x_29) + ";"), (((("  " + AssignTarget_this$2$1.R) + " = ") + value$proxy13.f) + ";")]))));
      }));
      var ctx$6 = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$5 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$5 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$5;
      try {
        var $x_33 = body$proxy11.h(ctx$6);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$5;
      }
      program$3$6.aU = $x_33;
      $m_sjs_js_ArrayOps$().D(reg$5.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$13) => ((data$3$5) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$13, data$3$5);
      }))(program$3$6)));
      var body$proxy13 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$6) => {
        var AssignTarget_this$5 = ctx$2$6.aj.X("color");
        var tex$1 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex");
        var uv$1 = ctx$2$6.a1.k("uv");
        var sampler$2 = ctx$2$6.K.k("samp");
        var value$proxy15 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().aZ(tex$1, uv$1, sampler$2);
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return (((("  " + AssignTarget_this$5.R) + " = ") + value$proxy15.f) + ";");
      }));
      var ctx$2$7 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$2$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$2$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$2$1;
      try {
        var $x_34 = body$proxy13.h(ctx$2$7);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$2$1;
      }
      program$3$6.aH = $x_34;
      $m_sjs_js_ArrayOps$().D(reg$2$1.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$14) => ((data$3$6) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$14, data$3$6);
      }))(program$3$6)));
    }));
    var program$6 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy6.h(program$6);
    var b$8 = program$6.aU;
    var b$9 = program$6.aH;
    var helperFns$proxy6 = program$6.ak();
    var id$6 = p$6.p;
    p$6.p = ((1 + p$6.p) | 0);
    var names$16 = $m_sjs_js_ArrayOpsCommon$().b(["vp"], $m_sjs_js_ArrayOpsCommon$().b(["samp"], []));
    var dict$11 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$14 = 0;
    while ((i$14 < (names$16.length | 0))) {
      dict$11[names$16[i$14]] = i$14;
      i$14 = ((1 + i$14) | 0);
    }
    var names$17 = $m_sjs_js_ArrayOpsCommon$().b(["tex"], []);
    var dict$12 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$15 = 0;
    while ((i$15 < (names$17.length | 0))) {
      dict$12[names$17[i$15]] = i$15;
      i$15 = ((1 + i$15) | 0);
    }
    var sd$6 = new $c_Ltrivalibs_graphics_shader_ShaderDef(b$8, b$9, helperFns$proxy6);
    var vertexInputStruct$6 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().b(["position"], $m_sjs_js_ArrayOpsCommon$().b(["uv"], $m_sjs_js_ArrayOpsCommon$().b(["normal"], []))), $m_sjs_js_ArrayOpsCommon$().b(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec3<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct$6 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().b(["uv"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$6 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().b(["color"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec4<f32>"], []), []);
    var groupDecls$6 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().b(["vp"], $m_sjs_js_ArrayOpsCommon$().b(["samp"], [])), $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).bq.t()], $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).M.t()], [])));
    var fragBuiltinParams$6 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$6 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$6, vertexInputStruct$6, vertexOutputStruct$6, fragmentOutputStruct$6, groupDecls$6, sd$6.a6, sd$6.a5, fragBuiltinParams$6);
    var wgsl$6 = (baseWgsl$6 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
    var args$proxy6 = $m_sr_ScalaRunTime$().am(new ($d_sjs_js_Any.r().C)([wgsl$6]));
    console.log(...$m_sjsr_Compat$().al(args$proxy6));
    var module$6 = p$6.g.createShaderModule($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("code", wgsl$6)])))));
    var formats$4 = $m_sjs_js_ArrayOpsCommon$().b(["float32x3"], $m_sjs_js_ArrayOpsCommon$().b(["float32x2"], $m_sjs_js_ArrayOpsCommon$().b(["float32x3"], [])));
    var sizes$4 = $m_sjs_js_ArrayOpsCommon$().b([12], $m_sjs_js_ArrayOpsCommon$().b([8], $m_sjs_js_ArrayOpsCommon$().b([12], [])));
    var offsets$4 = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes$4);
    var stride$4 = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes$4);
    var attributes$4 = [];
    var i$16 = 0;
    while ((i$16 < (formats$4.length | 0))) {
      attributes$4.push($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("shaderLocation", i$16), new $c_T2("offset", (offsets$4[i$16] | 0)), new $c_T2("format", formats$4[i$16])])))));
      i$16 = ((1 + i$16) | 0);
    }
    var vbl$4 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("arrayStride", stride$4), new $c_T2("attributes", attributes$4)]))));
    var descriptors$6 = $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 1), new $c_T2("buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], []))], []);
    var result$6 = [];
    $m_sjs_js_ArrayOps$().D(descriptors$6, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$6) => ((entries$2$5) => (result$6.push(Painter_this$6.g.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("entries", entries$2$5)])))))) | 0)))(p$6)));
    var x35 = new $c_T2(result$6, $m_Ltrivalibs_graphics_shader_layouts$().L(p$6.g, result$6));
    var \u03b42$$5 = x35;
    var bgls$12 = \u03b42$$5.P;
    var entries$2$6 = $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], []);
    var panelBgl$6 = p$6.g.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("entries", entries$2$6)])))));
    if ((panelBgl$6 !== null)) {
      var other$proxy6 = [panelBgl$6];
      var allBgls$6 = bgls$12.concat(other$proxy6);
    } else {
      var allBgls$6 = bgls$12;
    }
    var pl$6 = $m_Ltrivalibs_graphics_shader_layouts$().L(p$6.g, allBgls$6);
    var texturedShade = new $c_Ltrivalibs_graphics_painter_Shade(id$6, module$6, vbl$4, bgls$12[0], panelBgl$6, pl$6, false, dict$11, dict$12);
    var build$proxy7 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$7) => {
      var body$proxy15 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$8) => {
        var $x_38 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
        var $x_37 = $m_sjsr_package$();
        var AssignTarget_this$6 = ctx$2$8.aV.X("uv");
        var value$proxy17 = ctx$2$8.ba.k("uv");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_36 = AssignTarget_this$6.R;
        var $x_35 = value$proxy17.f;
        var AssignTarget_this$2$2 = ctx$2$8.aV.hu;
        var value$proxy19 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().gW($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().pV(ctx$2$8.ht.k("vp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fZ(), ctx$2$8.ht.k("model")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fZ(), $m_Ltrivalibs_graphics_math_gpu_vec4$().ad(ctx$2$8.ba.k("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$());
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return $x_38.aY(new $c_sjsr_WrappedVarArgs($x_37.d(new ($d_T.r().C)([(((("  " + $x_36) + " = ") + $x_35) + ";"), (((("  " + AssignTarget_this$2$2.R) + " = ") + value$proxy19.f) + ";")]))));
      }));
      var ctx$7 = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$6 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$6 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$6;
      try {
        var $x_39 = body$proxy15.h(ctx$7);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$6;
      }
      program$3$7.aU = $x_39;
      $m_sjs_js_ArrayOps$().D(reg$6.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$15) => ((data$3$7) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$15, data$3$7);
      }))(program$3$7)));
      var body$proxy17 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$9) => {
        var AssignTarget_this$7 = ctx$2$9.aj.X("color");
        var tex$2 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "img");
        var uv$3 = ctx$2$9.a1.k("uv");
        var sampler$3 = ctx$2$9.K.k("samp");
        var value$proxy21 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().aZ(tex$2, uv$3, sampler$3);
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return (((("  " + AssignTarget_this$7.R) + " = ") + value$proxy21.f) + ";");
      }));
      var ctx$2$10 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$2$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$2$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$2$2;
      try {
        var $x_40 = body$proxy17.h(ctx$2$10);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$2$2;
      }
      program$3$7.aH = $x_40;
      $m_sjs_js_ArrayOps$().D(reg$2$2.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$16) => ((data$3$8) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$16, data$3$8);
      }))(program$3$7)));
    }));
    var program$7 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy7.h(program$7);
    var b$10 = program$7.aU;
    var b$11 = program$7.aH;
    var helperFns$proxy7 = program$7.ak();
    var id$7 = p$6.p;
    p$6.p = ((1 + p$6.p) | 0);
    var names$19 = $m_sjs_js_ArrayOpsCommon$().b(["vp"], $m_sjs_js_ArrayOpsCommon$().b(["model"], $m_sjs_js_ArrayOpsCommon$().b(["samp"], [])));
    var dict$13 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$17 = 0;
    while ((i$17 < (names$19.length | 0))) {
      dict$13[names$19[i$17]] = i$17;
      i$17 = ((1 + i$17) | 0);
    }
    var names$20 = $m_sjs_js_ArrayOpsCommon$().b(["img"], []);
    var dict$14 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$18 = 0;
    while ((i$18 < (names$20.length | 0))) {
      dict$14[names$20[i$18]] = i$18;
      i$18 = ((1 + i$18) | 0);
    }
    var sd$7 = new $c_Ltrivalibs_graphics_shader_ShaderDef(b$10, b$11, helperFns$proxy7);
    var vertexInputStruct$7 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().b(["position"], $m_sjs_js_ArrayOpsCommon$().b(["uv"], [])), $m_sjs_js_ArrayOpsCommon$().b(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], [])), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct$7 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().b(["uv"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$7 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().b(["color"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec4<f32>"], []), []);
    var groupDecls$7 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().b(["vp"], $m_sjs_js_ArrayOpsCommon$().b(["model"], $m_sjs_js_ArrayOpsCommon$().b(["samp"], []))), $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).bq.t()], $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).bq.t()], $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).M.t()], []))));
    var fragBuiltinParams$7 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$7 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$7, vertexInputStruct$7, vertexOutputStruct$7, fragmentOutputStruct$7, groupDecls$7, sd$7.a6, sd$7.a5, fragBuiltinParams$7);
    var wgsl$7 = (baseWgsl$7 + "\n\n@group(1) @binding(0) var img: texture_2d<f32>;");
    var args$proxy7 = $m_sr_ScalaRunTime$().am(new ($d_sjs_js_Any.r().C)([wgsl$7]));
    console.log(...$m_sjsr_Compat$().al(args$proxy7));
    var module$7 = p$6.g.createShaderModule($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("code", wgsl$7)])))));
    var formats$5 = $m_sjs_js_ArrayOpsCommon$().b(["float32x3"], $m_sjs_js_ArrayOpsCommon$().b(["float32x2"], []));
    var sizes$5 = $m_sjs_js_ArrayOpsCommon$().b([12], $m_sjs_js_ArrayOpsCommon$().b([8], []));
    var offsets$5 = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes$5);
    var stride$5 = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes$5);
    var attributes$5 = [];
    var i$19 = 0;
    while ((i$19 < (formats$5.length | 0))) {
      attributes$5.push($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("shaderLocation", i$19), new $c_T2("offset", (offsets$5[i$19] | 0)), new $c_T2("format", formats$5[i$19])])))));
      i$19 = ((1 + i$19) | 0);
    }
    var vbl$5 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("arrayStride", stride$5), new $c_T2("attributes", attributes$5)]))));
    var descriptors$7 = $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 1), new $c_T2("buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 1), new $c_T2("buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 2), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], [])))], []);
    var result$7 = [];
    $m_sjs_js_ArrayOps$().D(descriptors$7, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$7) => ((entries$2$7) => (result$7.push(Painter_this$7.g.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("entries", entries$2$7)])))))) | 0)))(p$6)));
    var x38 = new $c_T2(result$7, $m_Ltrivalibs_graphics_shader_layouts$().L(p$6.g, result$7));
    var \u03b42$$6 = x38;
    var bgls$14 = \u03b42$$6.P;
    var entries$3 = $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], []);
    var panelBgl$7 = p$6.g.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("entries", entries$3)])))));
    if ((panelBgl$7 !== null)) {
      var other$proxy7 = [panelBgl$7];
      var allBgls$7 = bgls$14.concat(other$proxy7);
    } else {
      var allBgls$7 = bgls$14;
    }
    var pl$7 = $m_Ltrivalibs_graphics_shader_layouts$().L(p$6.g, allBgls$7);
    var paintingShade = new $c_Ltrivalibs_graphics_painter_Shade(id$7, module$7, vbl$5, bgls$14[0], panelBgl$7, pl$7, false, dict$13, dict$14);
    var build$proxy8 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$8) => {
      var body$proxy19 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$11) => {
        var uv$4 = ctx$2$11.a1.k("uv");
        var m = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().pW($p_Lsketches_rooms_canvases_Canvases$package$__lineMask$1__D__D__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr(this, 6.0, 0.016, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().az($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().ar(uv$4), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().a3(uv$4))), $p_Lsketches_rooms_canvases_Canvases$package$__lineMask$1__D__D__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr(this, 6.0, 0.016, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bO($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().ar(uv$4), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().a3(uv$4))));
        var AssignTarget_this$8 = ctx$2$11.aj.X("color");
        var $x_44 = $m_Ltrivalibs_graphics_math_gpu_vec4$();
        var $x_43 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$();
        var $x_42 = ctx$2$11.K.k("color");
        var $x_41 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$();
        var L$proxy13 = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().b1();
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var value$proxy23 = $x_44.ad($x_43.b3($x_42, $x_41, L$proxy13.b5((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ax(1.0)) + " - ") + m.f) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0));
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return (((("  " + AssignTarget_this$8.R) + " = ") + value$proxy23.f) + ";");
      }));
      var ctx$8 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$7 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$7 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$7;
      try {
        var $x_45 = body$proxy19.h(ctx$8);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$7;
      }
      program$3$8.a2 = $x_45;
      $m_sjs_js_ArrayOps$().D(reg$7.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$6) => ((data$3$9) => {
        $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$6, data$3$9);
      }))(program$3$8)));
    }));
    var program$8 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
    build$proxy8.h(program$8);
    var b$12 = program$8.a2;
    var helperFns$proxy8 = program$8.ak();
    var id$8 = p$6.p;
    p$6.p = ((1 + p$6.p) | 0);
    var names$22 = $m_sjs_js_ArrayOpsCommon$().b(["color"], []);
    var dict$15 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$20 = 0;
    while ((i$20 < (names$22.length | 0))) {
      dict$15[names$22[i$20]] = i$20;
      i$20 = ((1 + i$20) | 0);
    }
    var names$23 = [];
    var dict$16 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$21 = 0;
    while ((i$21 < (names$23.length | 0))) {
      dict$16[names$23[i$21]] = i$21;
      i$21 = ((1 + i$21) | 0);
    }
    var sd$8 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$12, helperFns$proxy8);
    var vertexInputStruct$8 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("vertex_index", "vertex_index", "u32")], []));
    var vertexOutputStruct$8 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().b(["uv"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$8 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().b(["color"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec4<f32>"], []), []);
    var groupDecls$8 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().b(["color"], []), $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$()).M.t()], []));
    var fragBuiltinParams$8 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$8 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$8, vertexInputStruct$8, vertexOutputStruct$8, fragmentOutputStruct$8, groupDecls$8, sd$8.a6, sd$8.a5, fragBuiltinParams$8);
    var args$proxy8 = $m_sr_ScalaRunTime$().am(new ($d_sjs_js_Any.r().C)([baseWgsl$8]));
    console.log(...$m_sjsr_Compat$().al(args$proxy8));
    var module$8 = p$6.g.createShaderModule($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("code", baseWgsl$8)])))));
    var descriptors$8 = $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], [])], []);
    var result$8 = [];
    $m_sjs_js_ArrayOps$().D(descriptors$8, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$8) => ((entries$2$8) => (result$8.push(Painter_this$8.g.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("entries", entries$2$8)])))))) | 0)))(p$6)));
    var x44 = new $c_T2(result$8, $m_Ltrivalibs_graphics_shader_layouts$().L(p$6.g, result$8));
    var \u03b46$$3 = x44;
    var bgls$16 = \u03b46$$3.P;
    var pl$8 = $m_Ltrivalibs_graphics_shader_layouts$().L(p$6.g, bgls$16);
    var imgShade = new $c_Ltrivalibs_graphics_painter_Shade(id$8, module$8, null, bgls$16[0], null, pl$8, false, dict$15, dict$16);
    var wallFront = $p_Lsketches_rooms_canvases_Canvases$package$__mkWall$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__Ltrivalibs_graphics_math_cpu_Vec3__Lsketches_rooms_canvases_Wall(this, p$6, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, (0.5 * $m_Lsketches_rooms_canvases_Canvases$package$().aE), (0.5 * $m_Lsketches_rooms_canvases_Canvases$package$().bD)), $m_Lsketches_rooms_canvases_Canvases$package$().bE, $m_Lsketches_rooms_canvases_Canvases$package$().aE, 3.141592653589793, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, (-1.0)));
    var wallBack = $p_Lsketches_rooms_canvases_Canvases$package$__mkWall$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__Ltrivalibs_graphics_math_cpu_Vec3__Lsketches_rooms_canvases_Wall(this, p$6, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, (0.5 * $m_Lsketches_rooms_canvases_Canvases$package$().aE), (0.5 * (-$m_Lsketches_rooms_canvases_Canvases$package$().bD))), $m_Lsketches_rooms_canvases_Canvases$package$().bE, $m_Lsketches_rooms_canvases_Canvases$package$().aE, 0.0, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0));
    var wallLeft = $p_Lsketches_rooms_canvases_Canvases$package$__mkWall$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__Ltrivalibs_graphics_math_cpu_Vec3__Lsketches_rooms_canvases_Wall(this, p$6, new $c_Ltrivalibs_graphics_math_cpu_Vec3((0.5 * (-$m_Lsketches_rooms_canvases_Canvases$package$().bE)), (0.5 * $m_Lsketches_rooms_canvases_Canvases$package$().aE), 0.0), $m_Lsketches_rooms_canvases_Canvases$package$().bD, $m_Lsketches_rooms_canvases_Canvases$package$().aE, 1.5707963267948966, new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 0.0));
    var wallRight = $p_Lsketches_rooms_canvases_Canvases$package$__mkWall$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__Ltrivalibs_graphics_math_cpu_Vec3__Lsketches_rooms_canvases_Wall(this, p$6, new $c_Ltrivalibs_graphics_math_cpu_Vec3((0.5 * $m_Lsketches_rooms_canvases_Canvases$package$().bE), (0.5 * $m_Lsketches_rooms_canvases_Canvases$package$().aE), 0.0), $m_Lsketches_rooms_canvases_Canvases$package$().bD, $m_Lsketches_rooms_canvases_Canvases$package$().aE, (-1.5707963267948966), new $c_Ltrivalibs_graphics_math_cpu_Vec3((-1.0), 0.0, 0.0));
    var walls = [wallFront, wallBack, wallLeft, wallRight];
    var palette = [new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.78, 0.3, 0.28), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.3, 0.45, 0.7), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.4, 0.62, 0.42), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.82, 0.7, 0.34)];
    var imagePanels = $m_sjs_js_ArrayOps$().pU(palette, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((p$13) => ((c$2$2) => $p_Lsketches_rooms_canvases_Canvases$package$__patternPanel$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_painter_Panel(this, p$13, imgShade, c$2$2)))(p$6)));
    $m_sjs_js_ArrayOps$().D(imagePanels, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((p$14) => ((_$3$3) => {
      $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$14, _$3$3);
    }))(p$6)));
    var counts = [3, 3, 4, 4];
    var sways = [];
    new $c_sci_Range$Exclusive(0, (walls.length | 0), 1).bs(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((p$16) => ((v1$2) => {
      var i$1 = (v1$2 | 0);
      var wall = walls[i$1];
      var img = imagePanels[i$1];
      var count = (counts[i$1] | 0);
      var span = (wall.aT - 1.0);
      new $c_sci_Range$Exclusive(0, count, 1).bs(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2$1) => {
        var j = (v1$2$1 | 0);
        var pw = $m_Ltrivalibs_utils_random_random$package$().g0(0.9, 1.7);
        var ph = $m_Ltrivalibs_utils_random_random$package$().g0(0.7, 1.4);
        var slot = (0.5 + ((span * (j + 0.5)) / count));
        var u = (slot + $m_Ltrivalibs_utils_random_random$package$().g0((-0.12), 0.12));
        var v$3 = (1.75 + $m_Ltrivalibs_utils_random_random$package$().g0((-0.18), 0.18));
        var painting = $p_Lsketches_rooms_canvases_Canvases$package$__hang$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_GPUSampler__Lsketches_rooms_canvases_Wall__Lsketches_rooms_canvases_PaintingSpec__D__D__Lsketches_rooms_canvases_Painting(this, p$16, paintingShade, sampler, wall, new $c_Lsketches_rooms_canvases_PaintingSpec(pw, ph, 0.05, img, 3.0), u, v$3);
        if ($p_Lsketches_rooms_canvases_Canvases$package$__isAnimated$1__I__Z(this, i$1)) {
          sways.push(new $c_Lsketches_rooms_canvases_Sway(painting, $m_Ltrivalibs_utils_random_random$package$().g0(0.0, 6.283185307179586), $m_Ltrivalibs_utils_random_random$package$().g0(0.6, 1.0), $m_Ltrivalibs_utils_random_random$package$().g0(0.14, 0.22)));
        }
      })));
    }))(p$6)));
    var Bindable_this = p$6.i2(ceilForm, texturedShade, "none", (void 0));
    var e1$proxy6 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var e2$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", ceilTex);
    var \u03b4scrutinee726 = e1$proxy6.r;
    var idx = (Bindable_this.Y.E.samp | 0);
    while (((Bindable_this.U.length | 0) <= idx)) {
      Bindable_this.U.push(null);
    }
    Bindable_this.U[idx] = \u03b4scrutinee726;
    var \u03b4scrutinee742 = e2$proxy4.r;
    var idx$2 = (Bindable_this.Y.au.tex | 0);
    while (((Bindable_this.a9.length | 0) <= idx$2)) {
      Bindable_this.a9.push(null);
    }
    Bindable_this.a9[idx$2] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee742);
    var aboveGround = [Bindable_this];
    var animatedPanels = [];
    new $c_sci_Range$Exclusive(0, (walls.length | 0), 1).bs(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((p$17) => ((v1$2$2) => {
      var i$22 = (v1$2$2 | 0);
      var wall$1 = walls[i$22];
      var wallTex = $p_Lsketches_rooms_canvases_Canvases$package$__compositeWallTex$1__Lsketchlib_utils_bake_TextureBaker__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_GPUSampler__Ltrivalibs_graphics_painter_Shade__Lsketches_rooms_canvases_Wall__Ltrivalibs_graphics_painter_Panel(this, wallBaker, p$17, copyShade, sampler, shadowShade, wall$1);
      if ($p_Lsketches_rooms_canvases_Canvases$package$__isAnimated$1__I__Z(this, i$22)) {
        animatedPanels.push(wallTex);
      }
      var Bindable_this$1 = p$17.i2(wall$1.fE, texturedShade, "none", (void 0));
      var e1$proxy7 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
      var e2$proxy5 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", wallTex);
      var \u03b4scrutinee748 = e1$proxy7.r;
      var idx$1 = (Bindable_this$1.Y.E.samp | 0);
      while (((Bindable_this$1.U.length | 0) <= idx$1)) {
        Bindable_this$1.U.push(null);
      }
      Bindable_this$1.U[idx$1] = \u03b4scrutinee748;
      var \u03b4scrutinee764 = e2$proxy5.r;
      var idx$2$1 = (Bindable_this$1.Y.au.tex | 0);
      while (((Bindable_this$1.a9.length | 0) <= idx$2$1)) {
        Bindable_this$1.a9.push(null);
      }
      Bindable_this$1.a9[idx$2$1] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee764);
      aboveGround.push(Bindable_this$1);
      $m_sjs_js_ArrayOps$().D(wall$1.bH, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((painting$2) => (aboveGround.push(painting$2.gw) | 0))));
    }))(p$6)));
    var wallColor = new $c_Ltrivalibs_graphics_math_cpu_Vec4(0.9, 0.9, 0.9, 0.0);
    var cam = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().oc(0.9, 1.0, 0.1, 100.0, 0.0, 0.0, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.7, 0.0));
    $m_Ltrivalibs_dev_devPreserve$().oj(cam, "camera");
    var mirror = $m_Lsketchlib_utils_mirror_GaussianMirrorReflection$().oi(p$6, cam, aboveGround, "vp", $m_Lsketches_rooms_canvases_Canvases$package$().aE, $m_Ltrivalibs_graphics_geometry_Plane$().ln, 5.0, 3.0, 0.0, 0.6, 0.5, 3.0, wallColor);
    var ul$proxy3 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$());
    var uv$proxy3 = ul$proxy3.ap;
    var buffer = new ArrayBuffer(8);
    var arr$proxy14 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
    var canvasRes = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy14.dv, 0), p$6.g, uv$proxy3);
    var build$proxy9 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$9) => {
      var body$proxy21 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$12) => {
        var $x_49 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
        var $x_48 = $m_sjsr_package$();
        var AssignTarget_this$9 = ctx$2$12.aV.X("uv");
        var value$proxy25 = ctx$2$12.ba.k("uv");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_47 = AssignTarget_this$9.R;
        var $x_46 = value$proxy25.f;
        var AssignTarget_this$2$3 = ctx$2$12.aV.hu;
        var value$proxy27 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().gW(ctx$2$12.ht.k("vp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fZ(), $m_Ltrivalibs_graphics_math_gpu_vec4$().ad(ctx$2$12.ba.k("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$());
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return $x_49.aY(new $c_sjsr_WrappedVarArgs($x_48.d(new ($d_T.r().C)([(((("  " + $x_47) + " = ") + $x_46) + ";"), (((("  " + AssignTarget_this$2$3.R) + " = ") + value$proxy27.f) + ";")]))));
      }));
      var ctx$9 = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$8 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$8 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$8;
      try {
        var $x_50 = body$proxy21.h(ctx$9);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$8;
      }
      program$3$9.aU = $x_50;
      $m_sjs_js_ArrayOps$().D(reg$8.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$17) => ((data$3$10) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$17, data$3$10);
      }))(program$3$9)));
      var body$proxy23 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$13) => {
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var base = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "base");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var refl = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "refl");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var mix = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "mix");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var falloff = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "falloff");
        var $x_61 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
        var $x_60 = $m_sjsr_package$();
        var $x_59 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$();
        var tex$3 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex");
        var uv$6 = ctx$2$13.a1.k("uv");
        var sampler$4 = ctx$2$13.K.k("samp");
        var $x_58 = base.W($x_59.g4($m_Ltrivalibs_graphics_math_gpu_expr$package$().aZ(tex$3, uv$6, sampler$4)));
        var tex$4 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "reflTex");
        var uv$7 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().oI($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gV(ctx$2$13.gO), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), ctx$2$13.K.k("res"));
        var sampler$5 = ctx$2$13.K.k("samp");
        var $x_57 = refl.W($m_Ltrivalibs_graphics_math_gpu_expr$package$().aZ(tex$4, uv$7, sampler$5));
        var e$proxy7 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().iS(refl), 0.4);
        var L$proxy15 = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().b1();
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_56 = falloff.W(L$proxy15.b5((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ax(1.0)) + " - ") + e$proxy7.f) + ")")));
        var $x_55 = mix.W($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S(falloff, 0.25));
        var AssignTarget_this$10 = ctx$2$13.aj.X("color");
        var $x_54 = $m_Ltrivalibs_graphics_math_gpu_vec4$();
        var $x_53 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$();
        var $x_52 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$();
        var $x_51 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$();
        var L$proxy17 = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().b1();
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var value$proxy29 = $x_54.ad($x_53.mY($x_52.b3(base, $x_51, L$proxy17.b5((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ax(1.0)) + " - ") + mix.f) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().b3($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().g4(refl), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), mix)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0));
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return $x_61.aY(new $c_sjsr_WrappedVarArgs($x_60.d(new ($d_T.r().C)([$x_58, $x_57, $x_56, $x_55, (((("  " + AssignTarget_this$10.R) + " = ") + value$proxy29.f) + ";")]))));
      }));
      var ctx$2$14 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$2$3 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$2$3 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$2$3;
      try {
        var $x_62 = body$proxy23.h(ctx$2$14);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$2$3;
      }
      program$3$9.aH = $x_62;
      $m_sjs_js_ArrayOps$().D(reg$2$3.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$18) => ((data$3$11) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$18, data$3$11);
      }))(program$3$9)));
    }));
    var program$9 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy9.h(program$9);
    var b$13 = program$9.aU;
    var b$14 = program$9.aH;
    var helperFns$proxy9 = program$9.ak();
    var id$9 = p$6.p;
    p$6.p = ((1 + p$6.p) | 0);
    var names$25 = $m_sjs_js_ArrayOpsCommon$().b(["vp"], $m_sjs_js_ArrayOpsCommon$().b(["samp"], $m_sjs_js_ArrayOpsCommon$().b(["res"], [])));
    var dict$17 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$22$1 = 0;
    while ((i$22$1 < (names$25.length | 0))) {
      dict$17[names$25[i$22$1]] = i$22$1;
      i$22$1 = ((1 + i$22$1) | 0);
    }
    var names$26 = $m_sjs_js_ArrayOpsCommon$().b(["tex"], $m_sjs_js_ArrayOpsCommon$().b(["reflTex"], []));
    var dict$18 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$23 = 0;
    while ((i$23 < (names$26.length | 0))) {
      dict$18[names$26[i$23]] = i$23;
      i$23 = ((1 + i$23) | 0);
    }
    var sd$9 = new $c_Ltrivalibs_graphics_shader_ShaderDef(b$13, b$14, helperFns$proxy9);
    var vertexInputStruct$9 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().b(["position"], $m_sjs_js_ArrayOpsCommon$().b(["uv"], $m_sjs_js_ArrayOpsCommon$().b(["normal"], []))), $m_sjs_js_ArrayOpsCommon$().b(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec3<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct$9 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().b(["uv"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$9 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().b(["color"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec4<f32>"], []), []);
    var groupDecls$9 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().b(["vp"], $m_sjs_js_ArrayOpsCommon$().b(["samp"], $m_sjs_js_ArrayOpsCommon$().b(["res"], []))), $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).bq.t()], $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).M.t()], $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$()).M.t()], []))));
    var fragBuiltinParams$9 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$9 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$9, vertexInputStruct$9, vertexOutputStruct$9, fragmentOutputStruct$9, groupDecls$9, sd$9.a6, sd$9.a5, fragBuiltinParams$9);
    var wgsl$9 = (baseWgsl$9 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;\n@group(1) @binding(1) var reflTex: texture_2d<f32>;");
    var args$proxy9 = $m_sr_ScalaRunTime$().am(new ($d_sjs_js_Any.r().C)([wgsl$9]));
    console.log(...$m_sjsr_Compat$().al(args$proxy9));
    var module$9 = p$6.g.createShaderModule($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("code", wgsl$9)])))));
    var formats$6 = $m_sjs_js_ArrayOpsCommon$().b(["float32x3"], $m_sjs_js_ArrayOpsCommon$().b(["float32x2"], $m_sjs_js_ArrayOpsCommon$().b(["float32x3"], [])));
    var sizes$6 = $m_sjs_js_ArrayOpsCommon$().b([12], $m_sjs_js_ArrayOpsCommon$().b([8], $m_sjs_js_ArrayOpsCommon$().b([12], [])));
    var offsets$6 = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes$6);
    var stride$7 = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes$6);
    var attributes$6 = [];
    var i$24 = 0;
    while ((i$24 < (formats$6.length | 0))) {
      attributes$6.push($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("shaderLocation", i$24), new $c_T2("offset", (offsets$6[i$24] | 0)), new $c_T2("format", formats$6[i$24])])))));
      i$24 = ((1 + i$24) | 0);
    }
    var vbl$6 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("arrayStride", stride$7), new $c_T2("attributes", attributes$6)]))));
    var descriptors$9 = $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 1), new $c_T2("buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 2), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], [])))], []);
    var result$9 = [];
    $m_sjs_js_ArrayOps$().D(descriptors$9, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$9) => ((entries$2$9) => (result$9.push(Painter_this$9.g.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("entries", entries$2$9)])))))) | 0)))(p$6)));
    var x47 = new $c_T2(result$9, $m_Ltrivalibs_graphics_shader_layouts$().L(p$6.g, result$9));
    var \u03b42$$7 = x47;
    var bgls$18 = \u03b42$$7.P;
    var entries$4 = $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], []));
    var panelBgl$9 = p$6.g.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("entries", entries$4)])))));
    if ((panelBgl$9 !== null)) {
      var other$proxy9 = [panelBgl$9];
      var allBgls$9 = bgls$18.concat(other$proxy9);
    } else {
      var allBgls$9 = bgls$18;
    }
    var pl$9 = $m_Ltrivalibs_graphics_shader_layouts$().L(p$6.g, allBgls$9);
    var floorShade = new $c_Ltrivalibs_graphics_painter_Shade(id$9, module$9, vbl$6, bgls$18[0], panelBgl$9, pl$9, false, dict$17, dict$18);
    var Bindable_this$4 = p$6.i2(floorForm, floorShade, "front", (void 0));
    var e1$proxy8 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var e2$proxy6 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", floorTex);
    var e3$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("reflTex", mirror.l6);
    var e4$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("res", canvasRes);
    var \u03b4scrutinee864 = e1$proxy8.r;
    var idx$3 = (Bindable_this$4.Y.E.samp | 0);
    while (((Bindable_this$4.U.length | 0) <= idx$3)) {
      Bindable_this$4.U.push(null);
    }
    Bindable_this$4.U[idx$3] = \u03b4scrutinee864;
    var \u03b4scrutinee882 = e2$proxy6.r;
    var idx$4 = (Bindable_this$4.Y.au.tex | 0);
    while (((Bindable_this$4.a9.length | 0) <= idx$4)) {
      Bindable_this$4.a9.push(null);
    }
    Bindable_this$4.a9[idx$4] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee882);
    var \u03b4scrutinee896 = e3$proxy2.r;
    var idx$5 = (Bindable_this$4.Y.au.reflTex | 0);
    while (((Bindable_this$4.a9.length | 0) <= idx$5)) {
      Bindable_this$4.a9.push(null);
    }
    Bindable_this$4.a9[idx$5] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee896);
    var \u03b4scrutinee904 = e4$proxy1.r;
    var idx$6 = (Bindable_this$4.Y.E.res | 0);
    while (((Bindable_this$4.U.length | 0) <= idx$6)) {
      Bindable_this$4.U.push(null);
    }
    Bindable_this$4.U[idx$6] = \u03b4scrutinee904;
    var ul$proxy4 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
    var uv$proxy4 = ul$proxy4.ap;
    var buffer$2 = new ArrayBuffer(64);
    var arr$proxy15 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
    var sceneVp = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy15.dv, 0), p$6.g, uv$proxy4);
    var clearColor$3 = $m_Ltrivalibs_graphics_math_cpu_Vec4$().p8().h(new $c_T4(0.5, 0.6, 0.7, 1.0));
    var shapes$3 = aboveGround.concat([Bindable_this$4]);
    var Panel_this = p$6.bt((void 0), (void 0), clearColor$3, true, true, (void 0), (void 0), "rgba16float", (void 0), (void 0), shapes$3, (void 0), (void 0));
    var e1$proxy9 = new $c_Ltrivalibs_graphics_painter_BindPair("vp", sceneVp);
    var \u03b4scrutinee913 = e1$proxy9.r;
    var dict$proxy1 = Panel_this.hq;
    dict$proxy1.vp = \u03b4scrutinee913;
    var bloom = $m_Lsketchlib_utils_bloom_Bloom$().oh(p$6, Panel_this, 0.002, 1.0, 4.0, 5, 1.0, 2.0);
    var input = $m_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$().pg(p$6.gH, true, 400.0, 5.0, true, (void 0), 90.0, 50.0);
    var controller = new $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController(cam, input, 2.5, 1.0);
    p$6.q9(new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((v1$2$3, v2$2) => {
      var w = (+v1$2$3);
      var h = (+v2$2);
      var aspect$2 = (w / h);
      var fov$1 = cam.bo;
      var near$1 = cam.gN;
      var far$1 = cam.gM;
      var rotH$2 = cam.aG;
      var rotV$2 = cam.bp;
      var pos$2 = cam.aq;
      cam.kd(fov$1, aspect$2, near$1, far$1, rotH$2, rotV$2, pos$2);
      var value$proxy32 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(w, h);
      canvasRes.A.w(canvasRes.j, value$proxy32);
      var $x_65 = canvasRes.z.queue;
      var $x_64 = canvasRes.y;
      var s$proxy11 = canvasRes.j;
      var $x_63 = s$proxy11.dv.buffer;
      $x_65.writeBuffer($x_64, 0.0, $x_63);
      mirror.qn(w, h);
    })));
    $m_Ltrivalibs_utils_animation_animate$package$().ob(((time, p$19) => ((arg1$2) => {
      var tpf = (+arg1$2);
      time.bl = (time.bl + tpf);
      $m_sjs_js_ArrayOps$().D(sways, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((t) => ((sw$3) => {
        var pt = sw$3.gA;
        var $x_66 = sw$3.gz;
        var p$proxy5 = ((t * sw$3.gC) + sw$3.gB);
        var s$7 = ($x_66 * (+Math.sin(p$proxy5)));
        var BufferBinding_this = pt.gt;
        var value$proxy33 = $m_Ltrivalibs_graphics_math_cpu_Mat4$().k7($f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a0(), pt.gs, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a0(), $m_Lsketches_rooms_canvases_Canvases$package$().gr, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), s$7)), $m_Ltrivalibs_graphics_math_cpu_Quat$().k6(pt.gu), new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0));
        BufferBinding_this.A.w(BufferBinding_this.j, value$proxy33);
        var $x_69 = BufferBinding_this.z.queue;
        var $x_68 = BufferBinding_this.y;
        var s$proxy12 = BufferBinding_this.j;
        var $x_67 = s$proxy12.dv.buffer;
        $x_69.writeBuffer($x_68, 0.0, $x_67);
        var BufferBinding_this$3 = pt.fC;
        var value$proxy34 = new $c_Ltrivalibs_graphics_math_cpu_Vec4(pt.bm.fI, (pt.bm.fJ - (s$7 / pt.gx)), pt.bm.fK, pt.bm.fH);
        BufferBinding_this$3.A.w(BufferBinding_this$3.j, value$proxy34);
        var $x_72 = BufferBinding_this$3.z.queue;
        var $x_71 = BufferBinding_this$3.y;
        var s$proxy13 = BufferBinding_this$3.j;
        var $x_70 = s$proxy13.dv.buffer;
        $x_72.writeBuffer($x_71, 0.0, $x_70);
      }))((time.bl / 1000.0))));
      $m_sjs_js_ArrayOps$().D(animatedPanels, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$4$3) => {
        $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$19, _$4$3);
      })));
      input.g2(tpf);
      controller.g2(tpf);
      var vp = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().gU(), cam.iD, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), cam.nP());
      sceneVp.A.w(sceneVp.j, vp);
      var $x_75 = sceneVp.z.queue;
      var $x_74 = sceneVp.y;
      var s$proxy14 = sceneVp.j;
      var $x_73 = s$proxy14.dv.buffer;
      $x_75.writeBuffer($x_74, 0.0, $x_73);
      mirror.qb(vp);
      $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$19, Panel_this);
      bloom.qc();
      p$19.qz(bloom.l0);
    }))(new $c_sr_DoubleRef(0.0), p$6));
  })));
});
var $d_Lsketches_rooms_canvases_Canvases$package$ = new $TypeData().i($c_Lsketches_rooms_canvases_Canvases$package$, "sketches.rooms.canvases.Canvases$package$", ({
  dg: 1
}));
var $n_Lsketches_rooms_canvases_Canvases$package$;
function $m_Lsketches_rooms_canvases_Canvases$package$() {
  if ((!$n_Lsketches_rooms_canvases_Canvases$package$)) {
    $n_Lsketches_rooms_canvases_Canvases$package$ = new $c_Lsketches_rooms_canvases_Canvases$package$();
  }
  return $n_Lsketches_rooms_canvases_Canvases$package$;
}
/** @constructor */
function $c_Lsketchlib_utils_bake_Bake$package$() {
}
$p = $c_Lsketchlib_utils_bake_Bake$package$.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_bake_Bake$package$;
/** @constructor */
function $h_Lsketchlib_utils_bake_Bake$package$() {
}
$h_Lsketchlib_utils_bake_Bake$package$.prototype = $p;
$p.k3 = (function(baker, form, width, height, transform, format, mips, clearColor) {
  var Painter_this = baker.h6;
  var value$proxy8 = ((transform === (void 0)) ? new $c_Ltrivalibs_graphics_math_cpu_Mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0) : transform);
  var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
  var uv$proxy1 = ul$proxy1.ap;
  var buffer = new ArrayBuffer(64);
  var arr$proxy1 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
  var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy1.dv, 0), Painter_this.g, uv$proxy1);
  b.A.w(b.j, value$proxy8);
  var $x_3 = b.z.queue;
  var $x_2 = b.y;
  var s$proxy1 = b.j;
  var $x_1 = s$proxy1.dv.buffer;
  $x_3.writeBuffer($x_2, 0.0, $x_1);
  var Bindable_this = baker.h6.i2(form, baker.kW, "none", (void 0));
  var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("model", b);
  var \u03b4scrutinee4 = e1$proxy1.r;
  var idx = (Bindable_this.Y.E.model | 0);
  while (((Bindable_this.U.length | 0) <= idx)) {
    Bindable_this.U.push(null);
  }
  Bindable_this.U[idx] = \u03b4scrutinee4;
  var format$1 = ((format === (void 0)) ? "rgba8unorm" : format);
  var panel = baker.h6.bt(width, height, clearColor, (void 0), (void 0), (void 0), mips, format$1, (void 0), Bindable_this, (void 0), (void 0), (void 0));
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(baker.h6, panel);
  return panel;
});
var $d_Lsketchlib_utils_bake_Bake$package$ = new $TypeData().i($c_Lsketchlib_utils_bake_Bake$package$, "sketchlib.utils.bake.Bake$package$", ({
  di: 1
}));
var $n_Lsketchlib_utils_bake_Bake$package$;
function $m_Lsketchlib_utils_bake_Bake$package$() {
  if ((!$n_Lsketchlib_utils_bake_Bake$package$)) {
    $n_Lsketchlib_utils_bake_Bake$package$ = new $c_Lsketchlib_utils_bake_Bake$package$();
  }
  return $n_Lsketchlib_utils_bake_Bake$package$;
}
/** @constructor */
function $c_Lsketchlib_utils_bake_TextureBaker(painter, shade) {
  this.h6 = null;
  this.kW = null;
  this.h6 = painter;
  this.kW = shade;
}
$p = $c_Lsketchlib_utils_bake_TextureBaker.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_bake_TextureBaker;
/** @constructor */
function $h_Lsketchlib_utils_bake_TextureBaker() {
}
$h_Lsketchlib_utils_bake_TextureBaker.prototype = $p;
var $d_Lsketchlib_utils_bake_TextureBaker = new $TypeData().i($c_Lsketchlib_utils_bake_TextureBaker, "sketchlib.utils.bake.TextureBaker", ({
  dj: 1
}));
function $p_Lsketchlib_utils_bake_TextureBaker$__buildVert__Ltrivalibs_graphics_shader_dsl_Program__V($thiz, program) {
  var ctx = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg;
  try {
    var uv = ctx.ba.k("uv");
    var AssignTarget_this = ctx.aV.X("worldPos");
    var value$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().g4($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().gW($thiz.j0, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fZ(), $m_Ltrivalibs_graphics_math_gpu_vec4$().ad(ctx.ba.k("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$()));
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var x0 = (((("  " + AssignTarget_this.R) + " = ") + value$proxy1.f) + ";");
    var AssignTarget_this$2 = ctx.aV.X("normal");
    var value$proxy3 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().q8($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().g4($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().gW($thiz.j0, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fZ(), $m_Ltrivalibs_graphics_math_gpu_vec4$().ad(ctx.ba.k("normal"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(0.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$())), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$());
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var x1 = (((("  " + AssignTarget_this$2.R) + " = ") + value$proxy3.f) + ";");
    var AssignTarget_this$3 = ctx.aV.X("uv");
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var x2 = (((("  " + AssignTarget_this$3.R) + " = ") + uv.f) + ";");
    var AssignTarget_this$4 = ctx.aV.hu;
    var $x_5 = $m_Ltrivalibs_graphics_math_gpu_vec4$();
    var $x_4 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$();
    var $x_3 = $m_Ltrivalibs_graphics_math_gpu_vec2$();
    var $x_2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().ar(uv);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var e$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().a3(uv);
    var value$proxy6 = $x_5.aZ($x_4.oZ($x_3.ad($x_2, $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().b1().b5((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ax(1.0)) + " - ") + e$proxy1.f) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$()), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0));
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var x3 = (((("  " + AssignTarget_this$4.R) + " = ") + value$proxy6.f) + ";");
    var array = [x0, x1, x2, x3];
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
  program.aU = $x_1;
  var array$1 = reg.Z;
  var len = (array$1.length | 0);
  var i$1 = 0;
  while ((i$1 < len)) {
    $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$1[i$1]);
    i$1 = ((1 + i$1) | 0);
  }
}
/** @constructor */
function $c_Lsketchlib_utils_bake_TextureBaker$() {
  this.j0 = null;
  $n_Lsketchlib_utils_bake_TextureBaker$ = this;
  this.j0 = ($m_Ltrivalibs_graphics_math_gpu_expr$package$(), $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "model"));
}
$p = $c_Lsketchlib_utils_bake_TextureBaker$.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_bake_TextureBaker$;
/** @constructor */
function $h_Lsketchlib_utils_bake_TextureBaker$() {
}
$h_Lsketchlib_utils_bake_TextureBaker$.prototype = $p;
var $d_Lsketchlib_utils_bake_TextureBaker$ = new $TypeData().i($c_Lsketchlib_utils_bake_TextureBaker$, "sketchlib.utils.bake.TextureBaker$", ({
  dk: 1
}));
var $n_Lsketchlib_utils_bake_TextureBaker$;
function $m_Lsketchlib_utils_bake_TextureBaker$() {
  if ((!$n_Lsketchlib_utils_bake_TextureBaker$)) {
    $n_Lsketchlib_utils_bake_TextureBaker$ = new $c_Lsketchlib_utils_bake_TextureBaker$();
  }
  return $n_Lsketchlib_utils_bake_TextureBaker$;
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
$p.oh = (function(p, scene, intensity, threshold, blurRadius, mipLevels, toneKnee, toneWhite) {
  if ((mipLevels < 2)) {
    var message$proxy1 = (("bloom mipLevels must be >= 2 (got " + mipLevels) + ")");
    throw new $c_sjs_js_JavaScriptException(Error(message$proxy1)).aD;
  }
  var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy1 = ul$proxy1.ap;
  var buffer = new ArrayBuffer(4);
  var arr$proxy1 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
  var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy1.dv, 0), p.g, uv$proxy1);
  b.A.w(b.j, blurRadius);
  var $x_3 = b.z.queue;
  var $x_2 = b.y;
  var s$proxy1 = b.j;
  var $x_1 = s$proxy1.dv.buffer;
  $x_3.writeBuffer($x_2, 0.0, $x_1);
  var ul$proxy2 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy2 = ul$proxy2.ap;
  var buffer$2 = new ArrayBuffer(4);
  var arr$proxy2 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
  var b$2 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy2.dv, 0), p.g, uv$proxy2);
  b$2.A.w(b$2.j, intensity);
  var $x_6 = b$2.z.queue;
  var $x_5 = b$2.y;
  var s$proxy2 = b$2.j;
  var $x_4 = s$proxy2.dv.buffer;
  $x_6.writeBuffer($x_5, 0.0, $x_4);
  var sampler = p.kb();
  var build$proxy1 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3) => {
    var body$proxy1 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2) => {
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var color = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "color");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var brightness = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "brightness");
      var $x_10 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
      var $x_9 = $m_sjsr_package$();
      var $x_8 = color.W($m_Ltrivalibs_graphics_math_gpu_expr$package$().iM($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "scene"), $m_Ltrivalibs_graphics_math_gpu_ivec2$().bP($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gV(ctx$2.gO))));
      var $x_7 = brightness.W($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().az($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().az($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().ar(color), 0.2126), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().a3(color), 0.7152)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().h0(color), 0.0722)));
      var AssignTarget_this = ctx$2.aj.X("color");
      var value$proxy1 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().qu($m_Ltrivalibs_graphics_math_gpu_vec4$().og($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0)), color, $m_Ltrivalibs_graphics_math_gpu_expr$package$().p1(brightness, ctx$2.K.k("threshold")));
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return $x_10.aY(new $c_sjsr_WrappedVarArgs($x_9.d(new ($d_T.r().C)([$x_8, $x_7, (((("  " + AssignTarget_this.R) + " = ") + value$proxy1.f) + ";")]))));
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
    program$3.a2 = $x_11;
    $m_sjs_js_ArrayOps$().D(reg.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$5) => ((data$3) => {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$5, data$3);
    }))(program$3)));
  }));
  var program = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  build$proxy1.h(program);
  var b$1 = program.a2;
  var helperFns$proxy1 = program.ak();
  var id = p.p;
  p.p = ((1 + p.p) | 0);
  var names = $m_sjs_js_ArrayOpsCommon$().b(["threshold"], []);
  var dict = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
  var i = 0;
  while ((i < (names.length | 0))) {
    dict[names[i]] = i;
    i = ((1 + i) | 0);
  }
  var names$2 = $m_sjs_js_ArrayOpsCommon$().b(["scene"], []);
  var dict$2 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
  var i$2 = 0;
  while ((i$2 < (names$2.length | 0))) {
    dict$2[names$2[i$2]] = i$2;
    i$2 = ((1 + i$2) | 0);
  }
  var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$1, helperFns$proxy1);
  var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().b(["uv"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().b(["color"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec4<f32>"], []), []);
  var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().b(["threshold"], []), $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).M.t()], []));
  var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.a6, sd.a5, fragBuiltinParams);
  var wgsl = (baseWgsl + "\n\n@group(1) @binding(0) var scene: texture_2d<f32>;");
  var args$proxy1 = $m_sr_ScalaRunTime$().am(new ($d_sjs_js_Any.r().C)([wgsl]));
  console.log(...$m_sjsr_Compat$().al(args$proxy1));
  var module = p.g.createShaderModule($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("code", wgsl)])))));
  var descriptors = $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], [])], []);
  var result = [];
  $m_sjs_js_ArrayOps$().D(descriptors, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((entries$2) => (result.push(p.g.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("entries", entries$2)])))))) | 0))));
  var x1 = new $c_T2(result, $m_Ltrivalibs_graphics_shader_layouts$().L(p.g, result));
  var \u03b46$ = x1;
  var bgls$2 = \u03b46$.P;
  var entries = $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], []);
  var panelBgl = p.g.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("entries", entries)])))));
  if ((panelBgl !== null)) {
    var other$proxy1 = [panelBgl];
    var allBgls = bgls$2.concat(other$proxy1);
  } else {
    var allBgls = bgls$2;
  }
  var pl = $m_Ltrivalibs_graphics_shader_layouts$().L(p.g, allBgls);
  var thresholdShade = new $c_Ltrivalibs_graphics_painter_Shade(id, module, null, bgls$2[0], panelBgl, pl, false, dict, dict$2);
  var build$proxy2 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$1) => {
    var body$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$1) => {
      var AssignTarget_this$1 = ctx$2$1.aj.X("color");
      var value$proxy3 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$().os($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex"), ctx$2$1.K.k("samp"), ctx$2$1.a1.k("uv"), ctx$2$1.K.k("blurRadius"), null);
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return (((("  " + AssignTarget_this$1.R) + " = ") + value$proxy3.f) + ";");
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
    program$3$1.a2 = $x_12;
    $m_sjs_js_ArrayOps$().D(reg$1.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$6) => ((data$3$1) => {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$6, data$3$1);
    }))(program$3$1)));
  }));
  var program$2 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  build$proxy2.h(program$2);
  var b$3 = program$2.a2;
  var helperFns$proxy2 = program$2.ak();
  var id$2 = p.p;
  p.p = ((1 + p.p) | 0);
  var names$4 = $m_sjs_js_ArrayOpsCommon$().b(["blurRadius"], $m_sjs_js_ArrayOpsCommon$().b(["samp"], []));
  var dict$3 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
  var i$3 = 0;
  while ((i$3 < (names$4.length | 0))) {
    dict$3[names$4[i$3]] = i$3;
    i$3 = ((1 + i$3) | 0);
  }
  var names$5 = $m_sjs_js_ArrayOpsCommon$().b(["tex"], []);
  var dict$4 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
  var i$4 = 0;
  while ((i$4 < (names$5.length | 0))) {
    dict$4[names$5[i$4]] = i$4;
    i$4 = ((1 + i$4) | 0);
  }
  var sd$2 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$3, helperFns$proxy2);
  var vertexInputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().b(["uv"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().b(["color"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec4<f32>"], []), []);
  var groupDecls$2 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().b(["blurRadius"], $m_sjs_js_ArrayOpsCommon$().b(["samp"], [])), $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).M.t()], $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).M.t()], [])));
  var fragBuiltinParams$2 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$2 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$2, vertexInputStruct$2, vertexOutputStruct$2, fragmentOutputStruct$2, groupDecls$2, sd$2.a6, sd$2.a5, fragBuiltinParams$2);
  var wgsl$2 = (baseWgsl$2 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
  var args$proxy2 = $m_sr_ScalaRunTime$().am(new ($d_sjs_js_Any.r().C)([wgsl$2]));
  console.log(...$m_sjsr_Compat$().al(args$proxy2));
  var module$2 = p.g.createShaderModule($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("code", wgsl$2)])))));
  var descriptors$2 = $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], []))], []);
  var result$2 = [];
  $m_sjs_js_ArrayOps$().D(descriptors$2, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((entries$2$1) => (result$2.push(p.g.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("entries", entries$2$1)])))))) | 0))));
  var x4 = new $c_T2(result$2, $m_Ltrivalibs_graphics_shader_layouts$().L(p.g, result$2));
  var \u03b46$$2 = x4;
  var bgls$4 = \u03b46$$2.P;
  var entries$2$2 = $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], []);
  var panelBgl$2 = p.g.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("entries", entries$2$2)])))));
  if ((panelBgl$2 !== null)) {
    var other$proxy2 = [panelBgl$2];
    var allBgls$2 = bgls$4.concat(other$proxy2);
  } else {
    var allBgls$2 = bgls$4;
  }
  var pl$2 = $m_Ltrivalibs_graphics_shader_layouts$().L(p.g, allBgls$2);
  var downsampleShade = new $c_Ltrivalibs_graphics_painter_Shade(id$2, module$2, null, bgls$4[0], panelBgl$2, pl$2, false, dict$3, dict$4);
  var build$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$2) => {
    var body$proxy5 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$2) => {
      var AssignTarget_this$2 = ctx$2$2.aj.X("color");
      var value$proxy5 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$().qH($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex"), ctx$2$2.K.k("samp"), ctx$2$2.a1.k("uv"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S(ctx$2$2.K.k("blurRadius"), 0.5), null);
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return (((("  " + AssignTarget_this$2.R) + " = ") + value$proxy5.f) + ";");
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
    program$3$2.a2 = $x_13;
    $m_sjs_js_ArrayOps$().D(reg$2.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$7) => ((data$3$2) => {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$7, data$3$2);
    }))(program$3$2)));
  }));
  var program$3$3 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  build$proxy3.h(program$3$3);
  var b$4 = program$3$3.a2;
  var helperFns$proxy3 = program$3$3.ak();
  var id$3 = p.p;
  p.p = ((1 + p.p) | 0);
  var names$7 = $m_sjs_js_ArrayOpsCommon$().b(["blurRadius"], $m_sjs_js_ArrayOpsCommon$().b(["samp"], []));
  var dict$5 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
  var i$5 = 0;
  while ((i$5 < (names$7.length | 0))) {
    dict$5[names$7[i$5]] = i$5;
    i$5 = ((1 + i$5) | 0);
  }
  var names$8 = $m_sjs_js_ArrayOpsCommon$().b(["tex"], []);
  var dict$6 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
  var i$6 = 0;
  while ((i$6 < (names$8.length | 0))) {
    dict$6[names$8[i$6]] = i$6;
    i$6 = ((1 + i$6) | 0);
  }
  var sd$3 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$4, helperFns$proxy3);
  var vertexInputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().b(["uv"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().b(["color"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec4<f32>"], []), []);
  var groupDecls$3 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().b(["blurRadius"], $m_sjs_js_ArrayOpsCommon$().b(["samp"], [])), $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).M.t()], $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).M.t()], [])));
  var fragBuiltinParams$3 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$3 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$3, vertexInputStruct$3, vertexOutputStruct$3, fragmentOutputStruct$3, groupDecls$3, sd$3.a6, sd$3.a5, fragBuiltinParams$3);
  var wgsl$3 = (baseWgsl$3 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
  var args$proxy3 = $m_sr_ScalaRunTime$().am(new ($d_sjs_js_Any.r().C)([wgsl$3]));
  console.log(...$m_sjsr_Compat$().al(args$proxy3));
  var module$3 = p.g.createShaderModule($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("code", wgsl$3)])))));
  var descriptors$3 = $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], []))], []);
  var result$3 = [];
  $m_sjs_js_ArrayOps$().D(descriptors$3, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((entries$2$3) => (result$3.push(p.g.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("entries", entries$2$3)])))))) | 0))));
  var x7 = new $c_T2(result$3, $m_Ltrivalibs_graphics_shader_layouts$().L(p.g, result$3));
  var \u03b46$$3 = x7;
  var bgls$6 = \u03b46$$3.P;
  var entries$3 = $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], []);
  var panelBgl$3 = p.g.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("entries", entries$3)])))));
  if ((panelBgl$3 !== null)) {
    var other$proxy3 = [panelBgl$3];
    var allBgls$3 = bgls$6.concat(other$proxy3);
  } else {
    var allBgls$3 = bgls$6;
  }
  var pl$3 = $m_Ltrivalibs_graphics_shader_layouts$().L(p.g, allBgls$3);
  var upsampleShade = new $c_Ltrivalibs_graphics_painter_Shade(id$3, module$3, null, bgls$6[0], panelBgl$3, pl$3, false, dict$5, dict$6);
  var layers = [];
  var Bindable_this = p.be(thresholdShade, (void 0), (void 0), (void 0));
  var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("scene", scene);
  var e2$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("threshold", threshold);
  var \u03b4scrutinee192 = e1$proxy1.r;
  var idx = (Bindable_this.v.au.scene | 0);
  while (((Bindable_this.Q.length | 0) <= idx)) {
    Bindable_this.Q.push(null);
  }
  Bindable_this.Q[idx] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee192);
  Bindable_this.J = null;
  var \u03b4scrutinee196 = (+e2$proxy1.r);
  var idx$2 = (Bindable_this.v.E.threshold | 0);
  var existing = ((idx$2 < (Bindable_this.i.length | 0)) ? Bindable_this.i[idx$2] : null);
  var device$proxy1 = Bindable_this.bM.g;
  if ((existing !== null)) {
    existing.A.w(existing.j, \u03b4scrutinee196);
    var $x_16 = existing.z.queue;
    var $x_15 = existing.y;
    var s$proxy3 = existing.j;
    var $x_14 = s$proxy3.dv.buffer;
    $x_16.writeBuffer($x_15, 0.0, $x_14);
    var bb = existing;
  } else {
    var uv$2 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
    var buffer$3 = new ArrayBuffer(4);
    var arr$proxy3 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$3), 1);
    var b$3$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy3.dv, 0), device$proxy1, uv$2);
    b$3$1.A.w(b$3$1.j, \u03b4scrutinee196);
    var $x_19 = b$3$1.z.queue;
    var $x_18 = b$3$1.y;
    var s$proxy4 = b$3$1.j;
    var $x_17 = s$proxy4.dv.buffer;
    $x_19.writeBuffer($x_18, 0.0, $x_17);
    var bb = b$3$1;
  }
  while (((Bindable_this.i.length | 0) <= idx$2)) {
    Bindable_this.i.push(null);
  }
  Bindable_this.i[idx$2] = bb;
  Bindable_this.J = null;
  layers.push(Bindable_this);
  var di = 0;
  while ((di < ((mipLevels - 1) | 0))) {
    var mipSource$1 = di;
    var mipTarget$1 = ((1 + di) | 0);
    var Bindable_this$5 = p.be(downsampleShade, (void 0), mipSource$1, mipTarget$1);
    var e1$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("blurRadius", b);
    var e2$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var \u03b4scrutinee212 = e1$proxy2.r;
    var idx$3 = (Bindable_this$5.v.E.blurRadius | 0);
    while (((Bindable_this$5.i.length | 0) <= idx$3)) {
      Bindable_this$5.i.push(null);
    }
    Bindable_this$5.i[idx$3] = \u03b4scrutinee212;
    Bindable_this$5.J = null;
    var \u03b4scrutinee225 = e2$proxy2.r;
    var idx$4 = (Bindable_this$5.v.E.samp | 0);
    while (((Bindable_this$5.i.length | 0) <= idx$4)) {
      Bindable_this$5.i.push(null);
    }
    Bindable_this$5.i[idx$4] = \u03b4scrutinee225;
    Bindable_this$5.J = null;
    layers.push(Bindable_this$5);
    di = ((1 + di) | 0);
  }
  var ui = ((mipLevels - 2) | 0);
  while ((ui >= 0)) {
    var Bindable_this$8 = p.be(upsampleShade, $m_Ltrivalibs_graphics_painter_BlendState$().lJ, ((1 + ui) | 0), ui);
    var e1$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("blurRadius", b);
    var e2$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var \u03b4scrutinee235 = e1$proxy3.r;
    var idx$5 = (Bindable_this$8.v.E.blurRadius | 0);
    while (((Bindable_this$8.i.length | 0) <= idx$5)) {
      Bindable_this$8.i.push(null);
    }
    Bindable_this$8.i[idx$5] = \u03b4scrutinee235;
    Bindable_this$8.J = null;
    var \u03b4scrutinee248 = e2$proxy3.r;
    var idx$6 = (Bindable_this$8.v.E.samp | 0);
    while (((Bindable_this$8.i.length | 0) <= idx$6)) {
      Bindable_this$8.i.push(null);
    }
    Bindable_this$8.i[idx$6] = \u03b4scrutinee248;
    Bindable_this$8.J = null;
    layers.push(Bindable_this$8);
    ui = ((ui - 1) | 0);
  }
  var bloomP = p.bt((void 0), (void 0), (void 0), (void 0), (void 0), mipLevels, (void 0), "rgba16float", (void 0), (void 0), (void 0), (void 0), layers);
  var toneOn = (toneWhite > toneKnee);
  var toneLift = (toneOn ? (1.0 - toneKnee) : 0.0);
  var toneFalloff = (toneOn ? ((-1.0) / (toneWhite - toneKnee)) : (-1.0));
  var build$proxy4 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$4) => {
    var body$proxy7 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$3) => {
      var coord = $m_Ltrivalibs_graphics_math_gpu_ivec2$().bP($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gV(ctx$2$3.gO));
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var c = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "c");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var low = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "low");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var over = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "over");
      var $x_24 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
      var $x_23 = $m_sjsr_package$();
      var $x_22 = c.W($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().g4($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().oa($m_Ltrivalibs_graphics_math_gpu_expr$package$().iM($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "scene"), coord), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().q2($m_Ltrivalibs_graphics_math_gpu_expr$package$().iM($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "bloom"), coord), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), ctx$2$3.K.k("intensity")))));
      var $x_21 = low.W($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().pY(c, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_vec3$().bP(ctx$2$3.K.k("knee"))));
      var $x_20 = over.W($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().nI(c, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), low));
      var AssignTarget_this$3 = ctx$2$3.aj.X("color");
      var value$proxy7 = $m_Ltrivalibs_graphics_math_gpu_vec4$().ad($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().mY(low, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().b3($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().nI($m_Ltrivalibs_graphics_math_gpu_vec3$().od(1.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().oT($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().b3(over, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), ctx$2$3.K.k("falloff")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$())), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), ctx$2$3.K.k("lift"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0));
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return $x_24.aY(new $c_sjsr_WrappedVarArgs($x_23.d(new ($d_T.r().C)([$x_22, $x_21, $x_20, (((("  " + AssignTarget_this$3.R) + " = ") + value$proxy7.f) + ";")]))));
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
    program$3$4.a2 = $x_25;
    $m_sjs_js_ArrayOps$().D(reg$3.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$8) => ((data$3$3) => {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$8, data$3$3);
    }))(program$3$4)));
  }));
  var program$4 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  build$proxy4.h(program$4);
  var b$5 = program$4.a2;
  var helperFns$proxy4 = program$4.ak();
  var id$4 = p.p;
  p.p = ((1 + p.p) | 0);
  var names$10 = $m_sjs_js_ArrayOpsCommon$().b(["intensity"], $m_sjs_js_ArrayOpsCommon$().b(["knee"], $m_sjs_js_ArrayOpsCommon$().b(["lift"], $m_sjs_js_ArrayOpsCommon$().b(["falloff"], []))));
  var dict$7 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
  var i$7 = 0;
  while ((i$7 < (names$10.length | 0))) {
    dict$7[names$10[i$7]] = i$7;
    i$7 = ((1 + i$7) | 0);
  }
  var names$11 = $m_sjs_js_ArrayOpsCommon$().b(["scene"], $m_sjs_js_ArrayOpsCommon$().b(["bloom"], []));
  var dict$8 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
  var i$8 = 0;
  while ((i$8 < (names$11.length | 0))) {
    dict$8[names$11[i$8]] = i$8;
    i$8 = ((1 + i$8) | 0);
  }
  var sd$4 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$5, helperFns$proxy4);
  var vertexInputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().b(["uv"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().b(["color"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec4<f32>"], []), []);
  var groupDecls$4 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().b(["intensity"], $m_sjs_js_ArrayOpsCommon$().b(["knee"], $m_sjs_js_ArrayOpsCommon$().b(["lift"], $m_sjs_js_ArrayOpsCommon$().b(["falloff"], [])))), $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).M.t()], $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).M.t()], $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).M.t()], $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).M.t()], [])))));
  var fragBuiltinParams$4 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$4 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$4, vertexInputStruct$4, vertexOutputStruct$4, fragmentOutputStruct$4, groupDecls$4, sd$4.a6, sd$4.a5, fragBuiltinParams$4);
  var wgsl$4 = (baseWgsl$4 + "\n\n@group(1) @binding(0) var scene: texture_2d<f32>;\n@group(1) @binding(1) var bloom: texture_2d<f32>;");
  var args$proxy4 = $m_sr_ScalaRunTime$().am(new ($d_sjs_js_Any.r().C)([wgsl$4]));
  console.log(...$m_sjsr_Compat$().al(args$proxy4));
  var module$4 = p.g.createShaderModule($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("code", wgsl$4)])))));
  var descriptors$4 = $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 2), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 3), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], []))))], []);
  var result$4 = [];
  $m_sjs_js_ArrayOps$().D(descriptors$4, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((entries$2$4) => (result$4.push(p.g.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("entries", entries$2$4)])))))) | 0))));
  var x10 = new $c_T2(result$4, $m_Ltrivalibs_graphics_shader_layouts$().L(p.g, result$4));
  var \u03b46$$4 = x10;
  var bgls$8 = \u03b46$$4.P;
  var entries$4 = $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], []));
  var panelBgl$4 = p.g.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("entries", entries$4)])))));
  if ((panelBgl$4 !== null)) {
    var other$proxy4 = [panelBgl$4];
    var allBgls$4 = bgls$8.concat(other$proxy4);
  } else {
    var allBgls$4 = bgls$8;
  }
  var pl$4 = $m_Ltrivalibs_graphics_shader_layouts$().L(p.g, allBgls$4);
  var compositeShade = new $c_Ltrivalibs_graphics_painter_Shade(id$4, module$4, null, bgls$8[0], panelBgl$4, pl$4, false, dict$7, dict$8);
  var Bindable_this$11 = p.be(compositeShade, (void 0), (void 0), (void 0));
  var e1$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("scene", scene);
  var e2$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("bloom", bloomP);
  var e3$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("intensity", b$2);
  var e4$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("knee", toneKnee);
  var e5$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("lift", toneLift);
  var e6$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("falloff", toneFalloff);
  var \u03b4scrutinee350 = e1$proxy4.r;
  var idx$7 = (Bindable_this$11.v.au.scene | 0);
  while (((Bindable_this$11.Q.length | 0) <= idx$7)) {
    Bindable_this$11.Q.push(null);
  }
  Bindable_this$11.Q[idx$7] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee350);
  Bindable_this$11.J = null;
  var \u03b4scrutinee366 = e2$proxy4.r;
  var idx$8 = (Bindable_this$11.v.au.bloom | 0);
  while (((Bindable_this$11.Q.length | 0) <= idx$8)) {
    Bindable_this$11.Q.push(null);
  }
  Bindable_this$11.Q[idx$8] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee366);
  Bindable_this$11.J = null;
  var \u03b4scrutinee370 = e3$proxy1.r;
  var idx$9 = (Bindable_this$11.v.E.intensity | 0);
  while (((Bindable_this$11.i.length | 0) <= idx$9)) {
    Bindable_this$11.i.push(null);
  }
  Bindable_this$11.i[idx$9] = \u03b4scrutinee370;
  Bindable_this$11.J = null;
  var \u03b4scrutinee383 = (+e4$proxy1.r);
  var idx$10 = (Bindable_this$11.v.E.knee | 0);
  var existing$2 = ((idx$10 < (Bindable_this$11.i.length | 0)) ? Bindable_this$11.i[idx$10] : null);
  var device$proxy2 = Bindable_this$11.bM.g;
  if ((existing$2 !== null)) {
    existing$2.A.w(existing$2.j, \u03b4scrutinee383);
    var $x_28 = existing$2.z.queue;
    var $x_27 = existing$2.y;
    var s$proxy5 = existing$2.j;
    var $x_26 = s$proxy5.dv.buffer;
    $x_28.writeBuffer($x_27, 0.0, $x_26);
    var bb$5 = existing$2;
  } else {
    var uv$2$1 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
    var buffer$4 = new ArrayBuffer(4);
    var arr$proxy4 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$4), 1);
    var b$4$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy4.dv, 0), device$proxy2, uv$2$1);
    b$4$1.A.w(b$4$1.j, \u03b4scrutinee383);
    var $x_31 = b$4$1.z.queue;
    var $x_30 = b$4$1.y;
    var s$proxy6 = b$4$1.j;
    var $x_29 = s$proxy6.dv.buffer;
    $x_31.writeBuffer($x_30, 0.0, $x_29);
    var bb$5 = b$4$1;
  }
  while (((Bindable_this$11.i.length | 0) <= idx$10)) {
    Bindable_this$11.i.push(null);
  }
  Bindable_this$11.i[idx$10] = bb$5;
  Bindable_this$11.J = null;
  var \u03b4scrutinee407 = (+e5$proxy1.r);
  var idx$11 = (Bindable_this$11.v.E.lift | 0);
  var existing$3 = ((idx$11 < (Bindable_this$11.i.length | 0)) ? Bindable_this$11.i[idx$11] : null);
  var device$proxy3 = Bindable_this$11.bM.g;
  if ((existing$3 !== null)) {
    existing$3.A.w(existing$3.j, \u03b4scrutinee407);
    var $x_34 = existing$3.z.queue;
    var $x_33 = existing$3.y;
    var s$proxy7 = existing$3.j;
    var $x_32 = s$proxy7.dv.buffer;
    $x_34.writeBuffer($x_33, 0.0, $x_32);
    var bb$6 = existing$3;
  } else {
    var uv$3 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
    var buffer$5 = new ArrayBuffer(4);
    var arr$proxy5 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$5), 1);
    var b$5$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy5.dv, 0), device$proxy3, uv$3);
    b$5$1.A.w(b$5$1.j, \u03b4scrutinee407);
    var $x_37 = b$5$1.z.queue;
    var $x_36 = b$5$1.y;
    var s$proxy8 = b$5$1.j;
    var $x_35 = s$proxy8.dv.buffer;
    $x_37.writeBuffer($x_36, 0.0, $x_35);
    var bb$6 = b$5$1;
  }
  while (((Bindable_this$11.i.length | 0) <= idx$11)) {
    Bindable_this$11.i.push(null);
  }
  Bindable_this$11.i[idx$11] = bb$6;
  Bindable_this$11.J = null;
  var \u03b4scrutinee437 = (+e6$proxy1.r);
  var idx$12 = (Bindable_this$11.v.E.falloff | 0);
  var existing$4 = ((idx$12 < (Bindable_this$11.i.length | 0)) ? Bindable_this$11.i[idx$12] : null);
  var device$proxy4 = Bindable_this$11.bM.g;
  if ((existing$4 !== null)) {
    existing$4.A.w(existing$4.j, \u03b4scrutinee437);
    var $x_40 = existing$4.z.queue;
    var $x_39 = existing$4.y;
    var s$proxy9 = existing$4.j;
    var $x_38 = s$proxy9.dv.buffer;
    $x_40.writeBuffer($x_39, 0.0, $x_38);
    var bb$7 = existing$4;
  } else {
    var uv$4 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
    var buffer$6 = new ArrayBuffer(4);
    var arr$proxy6 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$6), 1);
    var b$6 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy6.dv, 0), device$proxy4, uv$4);
    b$6.A.w(b$6.j, \u03b4scrutinee437);
    var $x_43 = b$6.z.queue;
    var $x_42 = b$6.y;
    var s$proxy10 = b$6.j;
    var $x_41 = s$proxy10.dv.buffer;
    $x_43.writeBuffer($x_42, 0.0, $x_41);
    var bb$7 = b$6;
  }
  while (((Bindable_this$11.i.length | 0) <= idx$12)) {
    Bindable_this$11.i.push(null);
  }
  Bindable_this$11.i[idx$12] = bb$7;
  Bindable_this$11.J = null;
  return new $c_Lsketchlib_utils_bloom_Bloom$$anon$1(bloomP, p.bt((void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), Bindable_this$11, (void 0)), p, b, b$2);
});
var $d_Lsketchlib_utils_bloom_Bloom$ = new $TypeData().i($c_Lsketchlib_utils_bloom_Bloom$, "sketchlib.utils.bloom.Bloom$", ({
  dm: 1
}));
var $n_Lsketchlib_utils_bloom_Bloom$;
function $m_Lsketchlib_utils_bloom_Bloom$() {
  if ((!$n_Lsketchlib_utils_bloom_Bloom$)) {
    $n_Lsketchlib_utils_bloom_Bloom$ = new $c_Lsketchlib_utils_bloom_Bloom$();
  }
  return $n_Lsketchlib_utils_bloom_Bloom$;
}
function $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$__blurShade$1__Ltrivalibs_graphics_painter_Painter__Z__Ltrivalibs_graphics_painter_Shade($thiz, p$1, vertical) {
  var build$proxy2 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3) => {
    var body$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2) => {
      var uv = ctx$2.a1.k("uv");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var a = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "a");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var dist = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "dist");
      var $x_4 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
      var $x_3 = $m_sjsr_package$();
      var $x_2 = a.W($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().iS($m_Ltrivalibs_graphics_math_gpu_expr$package$().nF($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex"), uv, ctx$2.K.k("samp"))));
      var $x_1 = dist.W($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().az($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bc($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bc($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bc(a, ctx$2.K.k("blurStrength")), ctx$2.K.k("visHeight")), ctx$2.K.k("passScale")), ctx$2.K.k("strengthOffset")));
      var AssignTarget_this = ctx$2.aj.X("color");
      var tex$proxy1 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex");
      var s$proxy6 = ctx$2.K.k("samp");
      var res$proxy1 = ctx$2.K.k("res");
      var dir$proxy1 = (vertical ? $m_Ltrivalibs_graphics_math_gpu_vec2$().ad($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bc(dist, ctx$2.K.k("ratioVertical"))) : $m_Ltrivalibs_graphics_math_gpu_vec2$().ad(dist, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(0.0)));
      var WgslFn$_this = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
      var fn$proxy1 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$().p5();
      var s$proxy7 = WgslFn$_this.iI(fn$proxy1, tex$proxy1, s$proxy6, uv, res$proxy1, dir$proxy1);
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var value$proxy5 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy7);
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return $x_4.aY(new $c_sjsr_WrappedVarArgs($x_3.d(new ($d_T.r().C)([$x_2, $x_1, (((("  " + AssignTarget_this.R) + " = ") + value$proxy5.f) + ";")]))));
    }));
    var ctx = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg;
    try {
      var $x_5 = body$proxy3.h(ctx);
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev;
    }
    program$3.a2 = $x_5;
    $m_sjs_js_ArrayOps$().D(reg.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$5) => ((data$3) => {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$5, data$3);
    }))(program$3)));
  }));
  var program = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  build$proxy2.h(program);
  var b = program.a2;
  var helperFns$proxy2 = program.ak();
  var id = p$1.p;
  p$1.p = ((1 + p$1.p) | 0);
  var names = $m_sjs_js_ArrayOpsCommon$().b(["blurStrength"], $m_sjs_js_ArrayOpsCommon$().b(["ratioVertical"], $m_sjs_js_ArrayOpsCommon$().b(["strengthOffset"], $m_sjs_js_ArrayOpsCommon$().b(["passScale"], $m_sjs_js_ArrayOpsCommon$().b(["res"], $m_sjs_js_ArrayOpsCommon$().b(["visHeight"], $m_sjs_js_ArrayOpsCommon$().b(["samp"], [])))))));
  var dict = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
  var i = 0;
  while ((i < (names.length | 0))) {
    dict[names[i]] = i;
    i = ((1 + i) | 0);
  }
  var names$2 = $m_sjs_js_ArrayOpsCommon$().b(["tex"], []);
  var dict$2 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
  var i$2 = 0;
  while ((i$2 < (names$2.length | 0))) {
    dict$2[names$2[i$2]] = i$2;
    i$2 = ((1 + i$2) | 0);
  }
  var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b, helperFns$proxy2);
  var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().b(["uv"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().b(["color"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec4<f32>"], []), []);
  var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().b(["blurStrength"], $m_sjs_js_ArrayOpsCommon$().b(["ratioVertical"], $m_sjs_js_ArrayOpsCommon$().b(["strengthOffset"], $m_sjs_js_ArrayOpsCommon$().b(["passScale"], $m_sjs_js_ArrayOpsCommon$().b(["res"], $m_sjs_js_ArrayOpsCommon$().b(["visHeight"], $m_sjs_js_ArrayOpsCommon$().b(["samp"], []))))))), $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).M.t()], $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).M.t()], $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).M.t()], $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).M.t()], $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$()).M.t()], $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).M.t()], $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).M.t()], []))))))));
  var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.a6, sd.a5, fragBuiltinParams);
  var wgsl = (baseWgsl + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
  var args$proxy2 = $m_sr_ScalaRunTime$().am(new ($d_sjs_js_Any.r().C)([wgsl]));
  console.log(...$m_sjsr_Compat$().al(args$proxy2));
  var module = p$1.g.createShaderModule($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("code", wgsl)])))));
  var descriptors = $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 2), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 3), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 4), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 5), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 6), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], [])))))))], []);
  var result = [];
  $m_sjs_js_ArrayOps$().D(descriptors, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((entries$2) => (result.push(p$1.g.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("entries", entries$2)])))))) | 0))));
  var x4 = new $c_T2(result, $m_Ltrivalibs_graphics_shader_layouts$().L(p$1.g, result));
  var \u03b46$ = x4;
  var bgls$2 = \u03b46$.P;
  var entries = $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], []);
  var panelBgl = p$1.g.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("entries", entries)])))));
  if ((panelBgl !== null)) {
    var other$proxy2 = [panelBgl];
    var allBgls = bgls$2.concat(other$proxy2);
  } else {
    var allBgls = bgls$2;
  }
  var pl = $m_Ltrivalibs_graphics_shader_layouts$().L(p$1.g, allBgls);
  return new $c_Ltrivalibs_graphics_painter_Shade(id, module, null, bgls$2[0], panelBgl, pl, false, dict, dict$2);
}
function $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$__blurLayer$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_painter_GPUSampler__Ltrivalibs_graphics_painter_Shade__D__Ltrivalibs_graphics_painter_Layer($thiz, p$2, uBlurStrength$1, uRatioVertical$1, uStrengthOffset$1, uRes$1, uVisHeight$1, sampler$1, shade, passScale) {
  var Bindable_this = p$2.be(shade, (void 0), (void 0), (void 0));
  var e1$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("blurStrength", uBlurStrength$1);
  var e2$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("ratioVertical", uRatioVertical$1);
  var e3$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("strengthOffset", uStrengthOffset$1);
  var e4$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("passScale", passScale);
  var e5$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("res", uRes$1);
  var e6$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("visHeight", uVisHeight$1);
  var e7$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler$1);
  var \u03b4scrutinee188 = e1$proxy2.r;
  var idx = (Bindable_this.v.E.blurStrength | 0);
  while (((Bindable_this.i.length | 0) <= idx)) {
    Bindable_this.i.push(null);
  }
  Bindable_this.i[idx] = \u03b4scrutinee188;
  Bindable_this.J = null;
  var \u03b4scrutinee201 = e2$proxy2.r;
  var idx$2 = (Bindable_this.v.E.ratioVertical | 0);
  while (((Bindable_this.i.length | 0) <= idx$2)) {
    Bindable_this.i.push(null);
  }
  Bindable_this.i[idx$2] = \u03b4scrutinee201;
  Bindable_this.J = null;
  var \u03b4scrutinee218 = e3$proxy2.r;
  var idx$3 = (Bindable_this.v.E.strengthOffset | 0);
  while (((Bindable_this.i.length | 0) <= idx$3)) {
    Bindable_this.i.push(null);
  }
  Bindable_this.i[idx$3] = \u03b4scrutinee218;
  Bindable_this.J = null;
  var \u03b4scrutinee239 = (+e4$proxy1.r);
  var idx$4 = (Bindable_this.v.E.passScale | 0);
  var existing = ((idx$4 < (Bindable_this.i.length | 0)) ? Bindable_this.i[idx$4] : null);
  var device$proxy1 = Bindable_this.bM.g;
  if ((existing !== null)) {
    existing.A.w(existing.j, \u03b4scrutinee239);
    var $x_3 = existing.z.queue;
    var $x_2 = existing.y;
    var s$proxy8 = existing.j;
    var $x_1 = s$proxy8.dv.buffer;
    $x_3.writeBuffer($x_2, 0.0, $x_1);
    var bb$4 = existing;
  } else {
    var uv = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
    var buffer = new ArrayBuffer(4);
    var arr$proxy9 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
    var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy9.dv, 0), device$proxy1, uv);
    b.A.w(b.j, \u03b4scrutinee239);
    var $x_6 = b.z.queue;
    var $x_5 = b.y;
    var s$proxy9 = b.j;
    var $x_4 = s$proxy9.dv.buffer;
    $x_6.writeBuffer($x_5, 0.0, $x_4);
    var bb$4 = b;
  }
  while (((Bindable_this.i.length | 0) <= idx$4)) {
    Bindable_this.i.push(null);
  }
  Bindable_this.i[idx$4] = bb$4;
  Bindable_this.J = null;
  var \u03b4scrutinee275 = e5$proxy1.r;
  var idx$5 = (Bindable_this.v.E.res | 0);
  while (((Bindable_this.i.length | 0) <= idx$5)) {
    Bindable_this.i.push(null);
  }
  Bindable_this.i[idx$5] = \u03b4scrutinee275;
  Bindable_this.J = null;
  var \u03b4scrutinee301 = e6$proxy1.r;
  var idx$6 = (Bindable_this.v.E.visHeight | 0);
  while (((Bindable_this.i.length | 0) <= idx$6)) {
    Bindable_this.i.push(null);
  }
  Bindable_this.i[idx$6] = \u03b4scrutinee301;
  Bindable_this.J = null;
  var \u03b4scrutinee334 = e7$proxy1.r;
  var idx$7 = (Bindable_this.v.E.samp | 0);
  while (((Bindable_this.i.length | 0) <= idx$7)) {
    Bindable_this.i.push(null);
  }
  Bindable_this.i[idx$7] = \u03b4scrutinee334;
  Bindable_this.J = null;
  return Bindable_this;
}
/** @constructor */
function $c_Lsketchlib_utils_mirror_GaussianMirrorReflection$() {
}
$p = $c_Lsketchlib_utils_mirror_GaussianMirrorReflection$.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_mirror_GaussianMirrorReflection$;
/** @constructor */
function $h_Lsketchlib_utils_mirror_GaussianMirrorReflection$() {
}
$h_Lsketchlib_utils_mirror_GaussianMirrorReflection$.prototype = $p;
$p.oi = (function(p, camera, shapes, vpName, alphaScale, mirror, blurStrength, blurRatioVertical, strengthOffset, scaleFactor, resolutionScale, overscan, clearColor) {
  if (((scaleFactor <= 0.0) || (scaleFactor >= 1.0))) {
    var message$proxy1 = (("GaussianMirrorReflection scaleFactor must be in (0, 1) " + ("(got " + scaleFactor)) + ")");
    throw new $c_sjs_js_JavaScriptException(Error(message$proxy1)).aD;
  }
  if ((resolutionScale <= 0.0)) {
    var message$proxy2 = (("GaussianMirrorReflection resolutionScale must be > 0 " + ("(got " + resolutionScale)) + ")");
    throw new $c_sjs_js_JavaScriptException(Error(message$proxy2)).aD;
  }
  if ((overscan < 0.0)) {
    var message$proxy3 = (("GaussianMirrorReflection overscan must be >= 0 (got " + overscan) + ")");
    throw new $c_sjs_js_JavaScriptException(Error(message$proxy3)).aD;
  }
  var p$proxy1 = (1.0 / (1.0 - (scaleFactor * scaleFactor)));
  var cascadeGain = (+Math.sqrt(p$proxy1));
  var sigmaPerDir = (1.64 * cascadeGain);
  var strengthScale = (0.01 / sigmaPerDir);
  var reflMat = mirror.qi();
  var pn = mirror.he;
  var pd = mirror.hd;
  var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
  var uv$proxy1 = ul$proxy1.ap;
  var buffer = new ArrayBuffer(64);
  var arr$proxy1 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
  var uVp = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy1.dv, 0), p.g, uv$proxy1);
  var ul$proxy2 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
  var uv$proxy2 = ul$proxy2.ap;
  var buffer$2 = new ArrayBuffer(64);
  var arr$proxy2 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
  var uInvVp = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy2.dv, 0), p.g, uv$proxy2);
  var value$proxy1 = (blurStrength * strengthScale);
  var ul$proxy3 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy3 = ul$proxy3.ap;
  var buffer$3 = new ArrayBuffer(4);
  var arr$proxy3 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$3), 1);
  var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy3.dv, 0), p.g, uv$proxy3);
  b.A.w(b.j, value$proxy1);
  var $x_3 = b.z.queue;
  var $x_2 = b.y;
  var s$proxy1 = b.j;
  var $x_1 = s$proxy1.dv.buffer;
  $x_3.writeBuffer($x_2, 0.0, $x_1);
  var ul$proxy4 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy4 = ul$proxy4.ap;
  var buffer$4 = new ArrayBuffer(4);
  var arr$proxy4 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$4), 1);
  var b$2 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy4.dv, 0), p.g, uv$proxy4);
  b$2.A.w(b$2.j, blurRatioVertical);
  var $x_6 = b$2.z.queue;
  var $x_5 = b$2.y;
  var s$proxy2 = b$2.j;
  var $x_4 = s$proxy2.dv.buffer;
  $x_6.writeBuffer($x_5, 0.0, $x_4);
  var ul$proxy5 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy5 = ul$proxy5.ap;
  var buffer$5 = new ArrayBuffer(4);
  var arr$proxy5 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$5), 1);
  var b$3 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy5.dv, 0), p.g, uv$proxy5);
  b$3.A.w(b$3.j, strengthOffset);
  var $x_9 = b$3.z.queue;
  var $x_8 = b$3.y;
  var s$proxy3 = b$3.j;
  var $x_7 = s$proxy3.dv.buffer;
  $x_9.writeBuffer($x_8, 0.0, $x_7);
  var ul$proxy6 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$());
  var uv$proxy6 = ul$proxy6.ap;
  var buffer$6 = new ArrayBuffer(8);
  var arr$proxy6 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$6), 1);
  var uRes = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy6.dv, 0), p.g, uv$proxy6);
  var ul$proxy7 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy7 = ul$proxy7.ap;
  var buffer$7 = new ArrayBuffer(4);
  var arr$proxy7 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$7), 1);
  var b$4 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy7.dv, 0), p.g, uv$proxy7);
  b$4.A.w(b$4.j, 0.0);
  var $x_12 = b$4.z.queue;
  var $x_11 = b$4.y;
  var s$proxy4 = b$4.j;
  var $x_10 = s$proxy4.dv.buffer;
  $x_12.writeBuffer($x_11, 0.0, $x_10);
  var value$proxy2 = new $c_Ltrivalibs_graphics_math_cpu_Vec4(1.0, 1.0, 0.0, 0.0);
  var ul$proxy8 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$());
  var uv$proxy8 = ul$proxy8.ap;
  var buffer$8 = new ArrayBuffer(16);
  var arr$proxy8 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$8), 1);
  var b$5 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy8.dv, 0), p.g, uv$proxy8);
  b$5.A.w(b$5.j, value$proxy2);
  var $x_15 = b$5.z.queue;
  var $x_14 = b$5.y;
  var s$proxy5 = b$5.j;
  var $x_13 = s$proxy5.dv.buffer;
  $x_15.writeBuffer($x_14, 0.0, $x_13);
  var sampler = p.kb();
  var mirrorPanel = p.bt((void 0), (void 0), clearColor, true, true, (void 0), (void 0), "rgba16float", (void 0), (void 0), shapes, (void 0), (void 0));
  var dict$proxy1 = mirrorPanel.hq;
  dict$proxy1[vpName] = uVp;
  var program = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  var ctx = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg;
  try {
    var uv$8 = ctx.a1.k("uv");
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var d = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "d");
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var ndc = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "ndc");
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var worldH = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "worldH");
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var worldPos = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "worldPos");
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var t = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "t");
    var x0 = d.W($m_Ltrivalibs_graphics_math_gpu_expr$package$().oE($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "depth"), $m_Ltrivalibs_graphics_math_gpu_ivec2$().bP($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gV(ctx.gO))));
    var $x_18 = $m_Ltrivalibs_graphics_math_gpu_vec3$();
    var $x_17 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().mW($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().ar(uv$8), 2.0), 1.0);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var e$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().a3(uv$8), 2.0);
    var x1 = ndc.W($x_18.aZ($x_17, $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().b1().b5((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ax(1.0)) + " - ") + e$proxy1.f) + ")")), d));
    var x2 = worldH.W($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().gW(ctx.K.k("invVp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fZ(), $m_Ltrivalibs_graphics_math_gpu_vec4$().ad(ndc, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$()));
    var x3 = worldPos.W($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().oH($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().g4(worldH), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().iS(worldH)));
    var x4 = t.W($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().oy($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().mV($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().mW($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().oL($m_Ltrivalibs_graphics_math_gpu_vec3$().aZ($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(pn.B), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(pn.G), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(pn.C)), worldPos), pd), alphaScale)));
    var AssignTarget_this = ctx.aj.X("color");
    var value$proxy3 = $m_Ltrivalibs_graphics_math_gpu_vec4$().ad($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().g4($m_Ltrivalibs_graphics_math_gpu_expr$package$().iM($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "col"), $m_Ltrivalibs_graphics_math_gpu_ivec2$().bP($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gV(ctx.gO)))), t);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var x5 = (((("  " + AssignTarget_this.R) + " = ") + value$proxy3.f) + ";");
    var array = [x0, x1, x2, x3, x4, x5];
    var out = [];
    var i = 0;
    while ((i < (array.length | 0))) {
      var idx = i;
      var p$1 = array[idx];
      if ((p$1.length > 0)) {
        out.push(p$1);
      }
      i = ((1 + i) | 0);
    }
    var $x_16 = out.join("\n");
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev;
  }
  program.a2 = $x_16;
  var array$1 = reg.Z;
  var len = (array$1.length | 0);
  var i$1 = 0;
  while ((i$1 < len)) {
    $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$1[i$1]);
    i$1 = ((1 + i$1) | 0);
  }
  var b$1 = program.a2;
  var helperFns$proxy1 = program.ak();
  var id = p.p;
  p.p = ((1 + p.p) | 0);
  var names = $m_sjs_js_ArrayOpsCommon$().b(["invVp"], []);
  var dict = ({});
  var i$2 = 0;
  while ((i$2 < (names.length | 0))) {
    dict[names[i$2]] = i$2;
    i$2 = ((1 + i$2) | 0);
  }
  var names$2 = $m_sjs_js_ArrayOpsCommon$().b(["col"], $m_sjs_js_ArrayOpsCommon$().b(["depth"], []));
  var dict$2 = ({});
  var i$2$1 = 0;
  while ((i$2$1 < (names$2.length | 0))) {
    dict$2[names$2[i$2$1]] = i$2$1;
    i$2$1 = ((1 + i$2$1) | 0);
  }
  var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$1, helperFns$proxy1);
  var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().b(["uv"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().b(["color"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec4<f32>"], []), []);
  var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().b(["invVp"], []), $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).M.t()], []));
  var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.a6, sd.a5, fragBuiltinParams);
  var wgsl = (baseWgsl + "\n\n@group(1) @binding(0) var col: texture_2d<f32>;\n@group(1) @binding(1) var depth: texture_depth_2d;");
  var args$proxy1 = $m_sr_ScalaRunTime$().am(new ($d_sjs_js_Any.r().C)([wgsl]));
  console.log(...$m_sjsr_Compat$().al(args$proxy1));
  var module = p.g.createShaderModule(({
    "code": wgsl
  }));
  var $x_20 = $m_sjs_js_ArrayOpsCommon$();
  var $x_19 = $m_sjs_js_ArrayOpsCommon$();
  var _2 = ({
    "type": "uniform"
  });
  var descriptors = $x_20.b([$x_19.b([({
    "binding": 0,
    "visibility": 2,
    "buffer": _2
  })], [])], []);
  var result = [];
  var len$1 = (descriptors.length | 0);
  var i$3 = 0;
  while ((i$3 < len$1)) {
    var x0$2 = descriptors[i$3];
    (result.push(p.g.createBindGroupLayout(({
      "entries": x0$2
    }))) | 0);
    i$3 = ((1 + i$3) | 0);
  }
  var \u03b46$___1 = result;
  var \u03b46$___2 = $m_Ltrivalibs_graphics_shader_layouts$().L(p.g, result);
  var bgls$2 = \u03b46$___1;
  var $x_22 = $m_sjs_js_ArrayOpsCommon$();
  var _2$1 = ({});
  var $x_21 = $m_sjs_js_ArrayOpsCommon$();
  var _2$2 = ({
    "sampleType": "depth"
  });
  var entries = $x_22.b([({
    "binding": 0,
    "visibility": 2,
    "texture": _2$1
  })], $x_21.b([({
    "binding": 1,
    "visibility": 2,
    "texture": _2$2
  })], []));
  var panelBgl = p.g.createBindGroupLayout(({
    "entries": entries
  }));
  if ((panelBgl !== null)) {
    var other$proxy1 = [panelBgl];
    var allBgls = bgls$2.concat(other$proxy1);
  } else {
    var allBgls = bgls$2;
  }
  var pl = $m_Ltrivalibs_graphics_shader_layouts$().L(p.g, allBgls);
  var bakeShade = new $c_Ltrivalibs_graphics_painter_Shade(id, module, null, bgls$2[0], panelBgl, pl, false, dict, dict$2);
  var blurShadeH = $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$__blurShade$1__Ltrivalibs_graphics_painter_Painter__Z__Ltrivalibs_graphics_painter_Shade(this, p, false);
  var blurShadeV = $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$__blurShade$1__Ltrivalibs_graphics_painter_Painter__Z__Ltrivalibs_graphics_painter_Shade(this, p, true);
  var Bindable_this = p.be(bakeShade, (void 0), (void 0), (void 0));
  var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("col", mirrorPanel);
  var e2$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("depth", mirrorPanel.op(0, (-1), true));
  var e3$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("invVp", uInvVp);
  var \u03b4scrutinee166 = e1$proxy1.r;
  var idx$1 = (Bindable_this.v.au.col | 0);
  while (((Bindable_this.Q.length | 0) <= idx$1)) {
    Bindable_this.Q.push(null);
  }
  Bindable_this.Q[idx$1] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee166);
  Bindable_this.J = null;
  var \u03b4scrutinee176 = e2$proxy1.r;
  var idx$2 = (Bindable_this.v.au.depth | 0);
  while (((Bindable_this.Q.length | 0) <= idx$2)) {
    Bindable_this.Q.push(null);
  }
  Bindable_this.Q[idx$2] = \u03b4scrutinee176;
  Bindable_this.J = null;
  var \u03b4scrutinee180 = e3$proxy1.r;
  var idx$3 = (Bindable_this.v.E.invVp | 0);
  while (((Bindable_this.i.length | 0) <= idx$3)) {
    Bindable_this.i.push(null);
  }
  Bindable_this.i[idx$3] = \u03b4scrutinee180;
  Bindable_this.J = null;
  var pairCache = [];
  var cachedScale = new $c_sr_DoubleRef(1.0);
  var blurPanel = p.bt((void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), "rgba16float", (void 0), (void 0), (void 0), (void 0), (void 0));
  var program$2 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  var ctx$1 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$1;
  try {
    var AssignTarget_this$1 = ctx$1.aj.X("color");
    var value$proxy8 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().nF($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().o9($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().q3(ctx$1.a1.k("uv"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gV(ctx$1.K.k("crop"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().r1(ctx$1.K.k("crop"))), ctx$1.K.k("samp"));
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var $x_23 = (((("  " + AssignTarget_this$1.R) + " = ") + value$proxy8.f) + ";");
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$1;
  }
  program$2.a2 = $x_23;
  var array$18 = reg$1.Z;
  var len$2 = (array$18.length | 0);
  var i$4 = 0;
  while ((i$4 < len$2)) {
    $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program$2, array$18[i$4]);
    i$4 = ((1 + i$4) | 0);
  }
  var b$6 = program$2.a2;
  var helperFns$proxy3 = program$2.ak();
  var id$2 = p.p;
  p.p = ((1 + p.p) | 0);
  var names$4 = $m_sjs_js_ArrayOpsCommon$().b(["crop"], $m_sjs_js_ArrayOpsCommon$().b(["samp"], []));
  var dict$3 = ({});
  var i$3$1 = 0;
  while ((i$3$1 < (names$4.length | 0))) {
    dict$3[names$4[i$3$1]] = i$3$1;
    i$3$1 = ((1 + i$3$1) | 0);
  }
  var names$5 = $m_sjs_js_ArrayOpsCommon$().b(["tex"], []);
  var dict$4 = ({});
  var i$4$1 = 0;
  while ((i$4$1 < (names$5.length | 0))) {
    dict$4[names$5[i$4$1]] = i$4$1;
    i$4$1 = ((1 + i$4$1) | 0);
  }
  var sd$2 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$6, helperFns$proxy3);
  var vertexInputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().b(["uv"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().b(["color"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec4<f32>"], []), []);
  var groupDecls$2 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().b(["crop"], $m_sjs_js_ArrayOpsCommon$().b(["samp"], [])), $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$()).M.t()], $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).M.t()], [])));
  var fragBuiltinParams$2 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$2 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$2, vertexInputStruct$2, vertexOutputStruct$2, fragmentOutputStruct$2, groupDecls$2, sd$2.a6, sd$2.a5, fragBuiltinParams$2);
  var wgsl$2 = (baseWgsl$2 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
  var args$proxy3 = $m_sr_ScalaRunTime$().am(new ($d_sjs_js_Any.r().C)([wgsl$2]));
  console.log(...$m_sjsr_Compat$().al(args$proxy3));
  var module$2 = p.g.createShaderModule(({
    "code": wgsl$2
  }));
  var $x_26 = $m_sjs_js_ArrayOpsCommon$();
  var $x_25 = $m_sjs_js_ArrayOpsCommon$();
  var _2$3 = ({
    "type": "uniform"
  });
  var $x_24 = $m_sjs_js_ArrayOpsCommon$();
  var _2$4 = ({});
  var descriptors$2 = $x_26.b([$x_25.b([({
    "binding": 0,
    "visibility": 2,
    "buffer": _2$3
  })], $x_24.b([({
    "binding": 1,
    "visibility": 2,
    "sampler": _2$4
  })], []))], []);
  var result$2 = [];
  var len$3 = (descriptors$2.length | 0);
  var i$5 = 0;
  while ((i$5 < len$3)) {
    var x0$4 = descriptors$2[i$5];
    (result$2.push(p.g.createBindGroupLayout(({
      "entries": x0$4
    }))) | 0);
    i$5 = ((1 + i$5) | 0);
  }
  var \u03b46$$2___1 = result$2;
  var \u03b46$$2___2 = $m_Ltrivalibs_graphics_shader_layouts$().L(p.g, result$2);
  var bgls$4 = \u03b46$$2___1;
  var $x_27 = $m_sjs_js_ArrayOpsCommon$();
  var _2$5 = ({});
  var entries$2 = $x_27.b([({
    "binding": 0,
    "visibility": 2,
    "texture": _2$5
  })], []);
  var panelBgl$2 = p.g.createBindGroupLayout(({
    "entries": entries$2
  }));
  if ((panelBgl$2 !== null)) {
    var other$proxy3 = [panelBgl$2];
    var allBgls$2 = bgls$4.concat(other$proxy3);
  } else {
    var allBgls$2 = bgls$4;
  }
  var pl$2 = $m_Ltrivalibs_graphics_shader_layouts$().L(p.g, allBgls$2);
  var cropShade = new $c_Ltrivalibs_graphics_painter_Shade(id$2, module$2, null, bgls$4[0], panelBgl$2, pl$2, false, dict$3, dict$4);
  if ((overscan > 0.0)) {
    var Bindable_this$5 = p.be(cropShade, (void 0), (void 0), (void 0));
    var e1$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", blurPanel);
    var e2$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("crop", b$5);
    var e3$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var \u03b4scrutinee423 = e1$proxy3.r;
    var idx$4 = (Bindable_this$5.v.au.tex | 0);
    while (((Bindable_this$5.Q.length | 0) <= idx$4)) {
      Bindable_this$5.Q.push(null);
    }
    Bindable_this$5.Q[idx$4] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee423);
    Bindable_this$5.J = null;
    var \u03b4scrutinee427 = e2$proxy3.r;
    var idx$5 = (Bindable_this$5.v.E.crop | 0);
    while (((Bindable_this$5.i.length | 0) <= idx$5)) {
      Bindable_this$5.i.push(null);
    }
    Bindable_this$5.i[idx$5] = \u03b4scrutinee427;
    Bindable_this$5.J = null;
    var \u03b4scrutinee437 = e3$proxy3.r;
    var idx$6 = (Bindable_this$5.v.E.samp | 0);
    while (((Bindable_this$5.i.length | 0) <= idx$6)) {
      Bindable_this$5.i.push(null);
    }
    Bindable_this$5.i[idx$6] = \u03b4scrutinee437;
    Bindable_this$5.J = null;
    var layers$3 = [Bindable_this$5];
    var $x_28 = p.bt((void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), "rgba16float", (void 0), (void 0), (void 0), (void 0), layers$3);
  } else {
    var $x_28 = null;
  }
  return new $c_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1(mirrorPanel, $x_28, blurPanel, camera, blurStrength, blurRatioVertical, Bindable_this, pairCache, overscan, uRes, b$4, b$5, resolutionScale, b, strengthScale, b$2, b$3, reflMat, uVp, uInvVp, p, scaleFactor, blurShadeH, cachedScale, blurShadeV, sampler);
});
$p.qB = (function(strengthScale$1, scaleFactor$1, subResHeight, strength, ratio) {
  var pairs = 1;
  var reach = (((strength * strengthScale$1) * subResHeight) * (+Math.max(ratio, 1.0)));
  while ((reach > 1.0)) {
    reach = (reach * scaleFactor$1);
    pairs = ((1 + pairs) | 0);
  }
  return pairs;
});
$p.qA = (function(pairCache$1, blurShadeH$1, cachedScale$1, blurShadeV$1, scaleFactor$2, p$3, uBlurStrength$2, uRatioVertical$2, uStrengthOffset$2, uRes$2, uVisHeight$2, sampler$2, n) {
  while (((pairCache$1.length | 0) < (n << 1))) {
    pairCache$1.push($p_Lsketchlib_utils_mirror_GaussianMirrorReflection$__blurLayer$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_painter_GPUSampler__Ltrivalibs_graphics_painter_Shade__D__Ltrivalibs_graphics_painter_Layer(this, p$3, uBlurStrength$2, uRatioVertical$2, uStrengthOffset$2, uRes$2, uVisHeight$2, sampler$2, blurShadeH$1, cachedScale$1.bl));
    pairCache$1.push($p_Lsketchlib_utils_mirror_GaussianMirrorReflection$__blurLayer$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_painter_GPUSampler__Ltrivalibs_graphics_painter_Shade__D__Ltrivalibs_graphics_painter_Layer(this, p$3, uBlurStrength$2, uRatioVertical$2, uStrengthOffset$2, uRes$2, uVisHeight$2, sampler$2, blurShadeV$1, cachedScale$1.bl));
    cachedScale$1.bl = (cachedScale$1.bl * scaleFactor$2);
  }
});
var $d_Lsketchlib_utils_mirror_GaussianMirrorReflection$ = new $TypeData().i($c_Lsketchlib_utils_mirror_GaussianMirrorReflection$, "sketchlib.utils.mirror.GaussianMirrorReflection$", ({
  dq: 1
}));
var $n_Lsketchlib_utils_mirror_GaussianMirrorReflection$;
function $m_Lsketchlib_utils_mirror_GaussianMirrorReflection$() {
  if ((!$n_Lsketchlib_utils_mirror_GaussianMirrorReflection$)) {
    $n_Lsketchlib_utils_mirror_GaussianMirrorReflection$ = new $c_Lsketchlib_utils_mirror_GaussianMirrorReflection$();
  }
  return $n_Lsketchlib_utils_mirror_GaussianMirrorReflection$;
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
  ds: 1
}));
/** @constructor */
function $c_Ltrivalibs_dev_dev$package$() {
  this.gE = null;
  this.j9 = false;
  $n_Ltrivalibs_dev_dev$package$ = this;
  this.gE = [];
  this.j9 = false;
}
$p = $c_Ltrivalibs_dev_dev$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_dev_dev$package$;
/** @constructor */
function $h_Ltrivalibs_dev_dev$package$() {
}
$h_Ltrivalibs_dev_dev$package$.prototype = $p;
$p.oF = (function() {
  return (import.meta.hot !== (void 0));
});
$p.pX = (function() {
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
$p.qD = (function(label) {
  return ((("trivalibs:dev:" + $m_Ltrivalibs_dev_dev$package$().pX()) + ":") + label);
});
$p.ke = (function() {
  return window.sessionStorage;
});
$p.qh = (function(key) {
  var raw = $m_Ltrivalibs_dev_dev$package$().ke().getItem(key);
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
$p.qY = (function(key, json) {
  $m_Ltrivalibs_dev_dev$package$().ke().setItem(key, JSON.stringify(json));
});
$p.qm = (function(key) {
  $m_Ltrivalibs_dev_dev$package$().ke().removeItem(key);
});
$p.oO = (function() {
  if ((!$m_Ltrivalibs_dev_dev$package$().j9)) {
    $m_Ltrivalibs_dev_dev$package$().j9 = true;
    window.addEventListener("pagehide", ((_$1$2) => {
      var i = 0;
      while ((i < ($m_Ltrivalibs_dev_dev$package$().gE.length | 0))) {
        $m_Ltrivalibs_dev_dev$package$().gE[i].hE();
        i = ((1 + i) | 0);
      }
    }));
  }
});
$p.qj = (function(flush) {
  $m_Ltrivalibs_dev_dev$package$().oO();
  $m_Ltrivalibs_dev_dev$package$().gE.push(flush);
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    var idx = $m_sjs_js_ArrayOps$().nf($m_Ltrivalibs_dev_dev$package$().gE, flush, 0);
    if ((idx >= 0)) {
      $m_Ltrivalibs_dev_dev$package$().gE.splice(idx, 1);
    }
  }));
});
var $d_Ltrivalibs_dev_dev$package$ = new $TypeData().i($c_Ltrivalibs_dev_dev$package$, "trivalibs.dev.dev$package$", ({
  dt: 1
}));
var $n_Ltrivalibs_dev_dev$package$;
function $m_Ltrivalibs_dev_dev$package$() {
  if ((!$n_Ltrivalibs_dev_dev$package$)) {
    $n_Ltrivalibs_dev_dev$package$ = new $c_Ltrivalibs_dev_dev$package$();
  }
  return $n_Ltrivalibs_dev_dev$package$;
}
function $p_Ltrivalibs_dev_devPreserve$__encodeCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any($thiz, cam) {
  return [cam.aq.B, cam.aq.G, cam.aq.C, cam.aG, cam.bp];
}
function $p_Ltrivalibs_dev_devPreserve$__applyCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any__V($thiz, cam, json) {
  if ((!(!Array.isArray(json)))) {
    if (((json.length | 0) >= 5)) {
      var pos$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((+json[0]), (+json[1]), (+json[2]));
      var rotH$1 = (+json[3]);
      var rotV$1 = (+json[4]);
      var fov$1 = cam.bo;
      var aspect$1 = cam.fT;
      var near$1 = cam.gN;
      var far$1 = cam.gM;
      cam.kd(fov$1, aspect$1, near$1, far$1, rotH$1, rotV$1, pos$1);
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
$p.oj = (function(cam, label) {
  if ((!$m_Ltrivalibs_dev_dev$package$().oF())) {
    return new $c_Ltrivalibs_dev_DevHandle(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => (void 0))));
  } else {
    var sk = $m_Ltrivalibs_dev_dev$package$().qD(label);
    var initPos = cam.aq;
    var initRotH = cam.aG;
    var initRotV = cam.bp;
    var stored = $m_Ltrivalibs_dev_dev$package$().qh(sk);
    if ((stored !== null)) {
      $p_Ltrivalibs_dev_devPreserve$__applyCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any__V(this, cam, stored);
    }
    return new $c_Ltrivalibs_dev_DevHandle(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(((unregister) => (() => {
      unregister.hE();
      $m_Ltrivalibs_dev_dev$package$().qm(sk);
      var fov$proxy1 = cam.bo;
      var aspect$proxy1 = cam.fT;
      var near$proxy1 = cam.gN;
      var far$proxy1 = cam.gM;
      cam.kd(fov$proxy1, aspect$proxy1, near$proxy1, far$proxy1, initRotH, initRotV, initPos);
    }))($m_Ltrivalibs_dev_dev$package$().qj(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
      $m_Ltrivalibs_dev_dev$package$().qY(sk, $p_Ltrivalibs_dev_devPreserve$__encodeCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any(this, cam));
    }))))));
  }
});
var $d_Ltrivalibs_dev_devPreserve$ = new $TypeData().i($c_Ltrivalibs_dev_devPreserve$, "trivalibs.dev.devPreserve$", ({
  du: 1
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
  this.z = null;
  this.A = null;
  this.y = null;
  this.j = buffer;
  this.z = device;
  this.A = uv;
  var b = (buffer.dv.byteLength | 0);
  var value = ((b < 16) ? 16 : b);
  var $x_1 = device.createBuffer(({
    "size": value,
    "usage": 72
  }));
  this.y = $x_1;
}
$p = $c_Ltrivalibs_graphics_buffers_BufferBinding.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_BufferBinding;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_BufferBinding() {
}
$h_Ltrivalibs_graphics_buffers_BufferBinding.prototype = $p;
function $isArrayOf_Ltrivalibs_graphics_buffers_BufferBinding(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aR)));
}
var $d_Ltrivalibs_graphics_buffers_BufferBinding = new $TypeData().i($c_Ltrivalibs_graphics_buffers_BufferBinding, "trivalibs.graphics.buffers.BufferBinding", ({
  aR: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Box(center, size, frontTopLeft, frontTopRight, frontBottomLeft, frontBottomRight, backTopLeft, backTopRight, backBottomLeft, backBottomRight) {
  this.ll = null;
  this.lm = null;
  this.lj = null;
  this.lk = null;
  this.lh = null;
  this.li = null;
  this.lf = null;
  this.lg = null;
  this.ll = frontTopLeft;
  this.lm = frontTopRight;
  this.lj = frontBottomLeft;
  this.lk = frontBottomRight;
  this.lh = backTopLeft;
  this.li = backTopRight;
  this.lf = backBottomLeft;
  this.lg = backBottomRight;
}
$p = $c_Ltrivalibs_graphics_geometry_Box.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Box;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Box() {
}
$h_Ltrivalibs_graphics_geometry_Box.prototype = $p;
$p.qM = (function(f) {
  return $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().br(f.bd(this.lh, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0)), f.bd(this.ll, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0)), f.bd(this.lm, new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 0.0)), f.bd(this.li, new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 1.0)));
});
$p.or = (function(f) {
  return $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().br(f.bd(this.lj, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0)), f.bd(this.lf, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0)), f.bd(this.lg, new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0)), f.bd(this.lk, new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0)));
});
var $d_Ltrivalibs_graphics_geometry_Box = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Box, "trivalibs.graphics.geometry.Box", ({
  dC: 1
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
$p.of = (function(center, width, height, depth) {
  var hw = (0.5 * width);
  var hh = (0.5 * height);
  var hd = (0.5 * depth);
  var cx = center.B;
  var cy = center.G;
  var cz = center.C;
  return new $c_Ltrivalibs_graphics_geometry_Box(center, new $c_Ltrivalibs_graphics_math_cpu_Vec3(width, height, depth), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy + hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy + hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy - hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy - hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy + hh), (cz - hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy + hh), (cz - hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy - hh), (cz - hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy - hh), (cz - hd)));
});
var $d_Ltrivalibs_graphics_geometry_Box$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Box$, "trivalibs.graphics.geometry.Box$", ({
  dD: 1
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
  this.ja = null;
  this.id = null;
  this.ja = vertices;
  this.id = indices;
}
$p = $c_Ltrivalibs_graphics_geometry_BufferedGeometry.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_BufferedGeometry;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_BufferedGeometry() {
}
$h_Ltrivalibs_graphics_geometry_BufferedGeometry.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_BufferedGeometry = new $TypeData().i($c_Ltrivalibs_graphics_geometry_BufferedGeometry, "trivalibs.graphics.geometry.BufferedGeometry", ({
  dE: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_FaceData(normal, section) {
  this.hb = null;
  this.nT = 0;
  this.hb = normal;
  this.nT = section;
}
$p = $c_Ltrivalibs_graphics_geometry_FaceData.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_FaceData;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_FaceData() {
}
$h_Ltrivalibs_graphics_geometry_FaceData.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_FaceData = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FaceData, "trivalibs.graphics.geometry.FaceData", ({
  dF: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Mesh(evidence$1) {
  this.hc = null;
  this.a8 = null;
  this.gF = null;
  this.ig = null;
  this.ie = null;
  this.hc = evidence$1;
  this.a8 = [];
  this.gF = [];
  this.ig = [];
  this.ie = ({});
}
$p = $c_Ltrivalibs_graphics_geometry_Mesh.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Mesh;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Mesh() {
}
$h_Ltrivalibs_graphics_geometry_Mesh.prototype = $p;
$p.o7 = (function(face, normal, section) {
  var faceIdx = (this.a8.length | 0);
  this.a8.push(face);
  this.gF.push(new $c_Ltrivalibs_graphics_geometry_FaceData(normal, section));
  var n = (face.length | 0);
  var slot = 0;
  while ((slot < n)) {
    var v = face[slot];
    var key = $m_Ltrivalibs_graphics_geometry_package$package$().qg(this.hc.bu(v));
    if ($m_sjs_js_Any$ObjectCompanionOps$().pa(Object, this.ie, key)) {
      var $x_2 = this.ig;
      var dict = this.ie;
      if ((!(!(!$m_sjs_js_WrappedDictionary$Cache$().kL.call(dict, key))))) {
        throw new $c_ju_NoSuchElementException(("key not found: " + key));
      }
      var $x_1 = $x_2[(dict[key] | 0)];
      $x_1.lq.push(new $c_Ltrivalibs_graphics_geometry_PositionFaceRef(faceIdx, slot));
    } else {
      var idx = (this.ig.length | 0);
      var dict$1 = this.ie;
      dict$1[key] = idx;
      this.ig.push(new $c_Ltrivalibs_graphics_geometry_VertexPosition(this.hc.bu(v), [new $c_Ltrivalibs_graphics_geometry_PositionFaceRef(faceIdx, slot)]));
    }
    slot = ((1 + slot) | 0);
  }
});
$p.oN = (function() {
  var hasQuads = false;
  var i = 0;
  while ((i < (this.a8.length | 0))) {
    var arr = this.a8[i];
    if ((this.gF[i].hb === null)) {
      var $x_2 = this.gF[i];
      if (((arr.length | 0) === 3)) {
        var $x_1 = $m_Ltrivalibs_graphics_geometry_polygon$package$Triangle$().ka(this.a8[i], this.hc);
      } else {
        hasQuads = true;
        var $x_1 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().ka(this.a8[i], this.hc);
      }
      $x_2.hb = $x_1;
    }
    i = ((1 + i) | 0);
  }
  return hasQuads;
});
var $d_Ltrivalibs_graphics_geometry_Mesh = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Mesh, "trivalibs.graphics.geometry.Mesh", ({
  dI: 1
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
$p.n0 = (function(faces, normal, section, evidence$1) {
  var m = new $c_Ltrivalibs_graphics_geometry_Mesh(evidence$1);
  $m_Ltrivalibs_graphics_geometry_mesh$package$().o8(m, faces, normal, section, evidence$1);
  return m;
});
var $d_Ltrivalibs_graphics_geometry_Mesh$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Mesh$, "trivalibs.graphics.geometry.Mesh$", ({
  dJ: 1
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
  this.he = null;
  this.hd = 0.0;
  this.he = normal;
  this.hd = d;
}
$p = $c_Ltrivalibs_graphics_geometry_Plane.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Plane;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Plane() {
}
$h_Ltrivalibs_graphics_geometry_Plane.prototype = $p;
$p.qi = (function() {
  var a = this.he.B;
  var b = this.he.G;
  var c = this.he.C;
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4((1.0 - ((2.0 * a) * a)), (((-2.0) * a) * b), (((-2.0) * a) * c), 0.0, (((-2.0) * a) * b), (1.0 - ((2.0 * b) * b)), (((-2.0) * b) * c), 0.0, (((-2.0) * a) * c), (((-2.0) * b) * c), (1.0 - ((2.0 * c) * c)), 0.0, ((2.0 * a) * this.hd), ((2.0 * b) * this.hd), ((2.0 * c) * this.hd), 1.0);
});
var $d_Ltrivalibs_graphics_geometry_Plane = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Plane, "trivalibs.graphics.geometry.Plane", ({
  dK: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Plane$() {
  this.ln = null;
  $n_Ltrivalibs_graphics_geometry_Plane$ = this;
  this.ln = new $c_Ltrivalibs_graphics_geometry_Plane(new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0), 0.0);
}
$p = $c_Ltrivalibs_graphics_geometry_Plane$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Plane$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Plane$() {
}
$h_Ltrivalibs_graphics_geometry_Plane$.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_Plane$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Plane$, "trivalibs.graphics.geometry.Plane$", ({
  dL: 1
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
  this.nU = 0;
  this.nV = 0;
  this.nU = faceIndex;
  this.nV = vertexSlot;
}
$p = $c_Ltrivalibs_graphics_geometry_PositionFaceRef.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_PositionFaceRef;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_PositionFaceRef() {
}
$h_Ltrivalibs_graphics_geometry_PositionFaceRef.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_PositionFaceRef = new $TypeData().i($c_Ltrivalibs_graphics_geometry_PositionFaceRef, "trivalibs.graphics.geometry.PositionFaceRef", ({
  dN: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexPosition(position, faces) {
  this.nW = null;
  this.lq = null;
  this.nW = position;
  this.lq = faces;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexPosition.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexPosition;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexPosition() {
}
$h_Ltrivalibs_graphics_geometry_VertexPosition.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_VertexPosition = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexPosition, "trivalibs.graphics.geometry.VertexPosition", ({
  dS: 1
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
$p.nx = (function(idxBuf, vertexCount) {
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
  dT: 1
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
$p.o8 = (function(m, faces, normal, section, evidence$1) {
  var i = 0;
  while ((i < (faces.length | 0))) {
    m.o7(faces[i], normal, section);
    i = ((1 + i) | 0);
  }
});
var $d_Ltrivalibs_graphics_geometry_mesh$package$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_mesh$package$, "trivalibs.graphics.geometry.mesh$package$", ({
  dU: 1
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
$p.qg = (function(v) {
  return (((($doubleToInt((10000.0 * v.B)) + ",") + $doubleToInt((10000.0 * v.G))) + ",") + $doubleToInt((10000.0 * v.C)));
});
var $d_Ltrivalibs_graphics_geometry_package$package$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_package$package$, "trivalibs.graphics.geometry.package$package$", ({
  dV: 1
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
$p.br = (function(tl, bl, br, tr) {
  return [tl, bl, br, tr];
});
$p.qK = (function(q, evidence$1) {
  return q[0];
});
$p.oq = (function(q, evidence$1) {
  return q[1];
});
$p.ov = (function(q, evidence$1) {
  return q[2];
});
$p.qN = (function(q, evidence$1) {
  return q[3];
});
$p.ka = (function(q, evidence$1) {
  var a = evidence$1.bu(this.qK(q, evidence$1));
  var b = evidence$1.bu(this.oq(q, evidence$1));
  var c = evidence$1.bu(this.ov(q, evidence$1));
  var d = evidence$1.bu(this.qN(q, evidence$1));
  var d1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((c.B - a.B), (c.G - a.G), (c.C - a.C));
  var d2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((d.B - b.B), (d.G - b.G), (d.C - b.C));
  return $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a0(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a0(), d1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), d2), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
});
var $d_Ltrivalibs_graphics_geometry_polygon$package$Quad$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_polygon$package$Quad$, "trivalibs.graphics.geometry.polygon$package$Quad$", ({
  dX: 1
}));
var $n_Ltrivalibs_graphics_geometry_polygon$package$Quad$;
function $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$() {
  if ((!$n_Ltrivalibs_graphics_geometry_polygon$package$Quad$)) {
    $n_Ltrivalibs_graphics_geometry_polygon$package$Quad$ = new $c_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  }
  return $n_Ltrivalibs_graphics_geometry_polygon$package$Quad$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_polygon$package$Triangle$() {
}
$p = $c_Ltrivalibs_graphics_geometry_polygon$package$Triangle$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_polygon$package$Triangle$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_polygon$package$Triangle$() {
}
$h_Ltrivalibs_graphics_geometry_polygon$package$Triangle$.prototype = $p;
$p.o5 = (function(tri, evidence$1) {
  return tri[0];
});
$p.on = (function(tri, evidence$1) {
  return tri[1];
});
$p.ow = (function(tri, evidence$1) {
  return tri[2];
});
$p.ka = (function(tri, evidence$1) {
  var pa = evidence$1.bu(this.o5(tri, evidence$1));
  var pb = evidence$1.bu(this.on(tri, evidence$1));
  var pc = evidence$1.bu(this.ow(tri, evidence$1));
  var e1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((pb.B - pa.B), (pb.G - pa.G), (pb.C - pa.C));
  var e2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((pc.B - pa.B), (pc.G - pa.G), (pc.C - pa.C));
  return $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a0(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a0(), e1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), e2), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
});
var $d_Ltrivalibs_graphics_geometry_polygon$package$Triangle$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_polygon$package$Triangle$, "trivalibs.graphics.geometry.polygon$package$Triangle$", ({
  dY: 1
}));
var $n_Ltrivalibs_graphics_geometry_polygon$package$Triangle$;
function $m_Ltrivalibs_graphics_geometry_polygon$package$Triangle$() {
  if ((!$n_Ltrivalibs_graphics_geometry_polygon$package$Triangle$)) {
    $n_Ltrivalibs_graphics_geometry_polygon$package$Triangle$ = new $c_Ltrivalibs_graphics_geometry_polygon$package$Triangle$();
  }
  return $n_Ltrivalibs_graphics_geometry_polygon$package$Triangle$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_lib_args$package$() {
}
$p = $c_Ltrivalibs_graphics_lib_args$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_lib_args$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_lib_args$package$() {
}
$h_Ltrivalibs_graphics_lib_args$package$.prototype = $p;
$p.nK = (function(x) {
  if ($isInt(x)) {
    var i = (x | 0);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), ("" + i));
  } else {
    return x;
  }
});
var $d_Ltrivalibs_graphics_lib_args$package$ = new $TypeData().i($c_Ltrivalibs_graphics_lib_args$package$, "trivalibs.graphics.lib.args$package$", ({
  dZ: 1
}));
var $n_Ltrivalibs_graphics_lib_args$package$;
function $m_Ltrivalibs_graphics_lib_args$package$() {
  if ((!$n_Ltrivalibs_graphics_lib_args$package$)) {
    $n_Ltrivalibs_graphics_lib_args$package$ = new $c_Ltrivalibs_graphics_lib_args$package$();
  }
  return $n_Ltrivalibs_graphics_lib_args$package$;
}
function $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($thiz, fovY, aspect, near, far) {
  var x = (0.5 * fovY);
  var f = (1.0 / (+Math.tan(x)));
  var rInv = (1.0 / (near - far));
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4((f / aspect), 0.0, 0.0, 0.0, 0.0, f, 0.0, 0.0, 0.0, 0.0, (far * rInv), (-1.0), 0.0, 0.0, ((near * far) * rInv), 0.0);
}
function $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($thiz, m, x$2, other) {
  var a00 = (+x$2.hI(m));
  var a01 = (+x$2.hJ(m));
  var a02 = (+x$2.hK(m));
  var a03 = (+x$2.hL(m));
  var a10 = (+x$2.hM(m));
  var a11 = (+x$2.hN(m));
  var a12 = (+x$2.hO(m));
  var a13 = (+x$2.hP(m));
  var a20 = (+x$2.hQ(m));
  var a21 = (+x$2.hR(m));
  var a22 = (+x$2.hS(m));
  var a23 = (+x$2.hT(m));
  var a30 = (+x$2.hU(m));
  var a31 = (+x$2.hV(m));
  var a32 = (+x$2.hW(m));
  var a33 = (+x$2.hX(m));
  var b00 = (+x$2.hI(other));
  var b01 = (+x$2.hJ(other));
  var b02 = (+x$2.hK(other));
  var b03 = (+x$2.hL(other));
  var b10 = (+x$2.hM(other));
  var b11 = (+x$2.hN(other));
  var b12 = (+x$2.hO(other));
  var b13 = (+x$2.hP(other));
  var b20 = (+x$2.hQ(other));
  var b21 = (+x$2.hR(other));
  var b22 = (+x$2.hS(other));
  var b23 = (+x$2.hT(other));
  var b30 = (+x$2.hU(other));
  var b31 = (+x$2.hV(other));
  var b32 = (+x$2.hW(other));
  var b33 = (+x$2.hX(other));
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4(((((a00 * b00) + (a10 * b01)) + (a20 * b02)) + (a30 * b03)), ((((a01 * b00) + (a11 * b01)) + (a21 * b02)) + (a31 * b03)), ((((a02 * b00) + (a12 * b01)) + (a22 * b02)) + (a32 * b03)), ((((a03 * b00) + (a13 * b01)) + (a23 * b02)) + (a33 * b03)), ((((a00 * b10) + (a10 * b11)) + (a20 * b12)) + (a30 * b13)), ((((a01 * b10) + (a11 * b11)) + (a21 * b12)) + (a31 * b13)), ((((a02 * b10) + (a12 * b11)) + (a22 * b12)) + (a32 * b13)), ((((a03 * b10) + (a13 * b11)) + (a23 * b12)) + (a33 * b13)), ((((a00 * b20) + (a10 * b21)) + (a20 * b22)) + (a30 * b23)), ((((a01 * b20) + (a11 * b21)) + (a21 * b22)) + (a31 * b23)), ((((a02 * b20) + (a12 * b21)) + (a22 * b22)) + (a32 * b23)), ((((a03 * b20) + (a13 * b21)) + (a23 * b22)) + (a33 * b23)), ((((a00 * b30) + (a10 * b31)) + (a20 * b32)) + (a30 * b33)), ((((a01 * b30) + (a11 * b31)) + (a21 * b32)) + (a31 * b33)), ((((a02 * b30) + (a12 * b31)) + (a22 * b32)) + (a32 * b33)), ((((a03 * b30) + (a13 * b31)) + (a23 * b32)) + (a33 * b33)));
}
function $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($thiz, m, x$2) {
  var a00 = (+x$2.hI(m));
  var a01 = (+x$2.hJ(m));
  var a02 = (+x$2.hK(m));
  var a03 = (+x$2.hL(m));
  var a10 = (+x$2.hM(m));
  var a11 = (+x$2.hN(m));
  var a12 = (+x$2.hO(m));
  var a13 = (+x$2.hP(m));
  var a20 = (+x$2.hQ(m));
  var a21 = (+x$2.hR(m));
  var a22 = (+x$2.hS(m));
  var a23 = (+x$2.hT(m));
  var a30 = (+x$2.hU(m));
  var a31 = (+x$2.hV(m));
  var a32 = (+x$2.hW(m));
  var a33 = (+x$2.hX(m));
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
  mb.nh(m, (+x$4.hI(other)));
  mb.ni(m, (+x$4.hJ(other)));
  mb.nj(m, (+x$4.hK(other)));
  mb.nk(m, (+x$4.hL(other)));
  mb.nl(m, (+x$4.hM(other)));
  mb.nm(m, (+x$4.hN(other)));
  mb.nn(m, (+x$4.hO(other)));
  mb.no(m, (+x$4.hP(other)));
  mb.np(m, (+x$4.hQ(other)));
  mb.nq(m, (+x$4.hR(other)));
  mb.nr(m, (+x$4.hS(other)));
  mb.ns(m, (+x$4.hT(other)));
  mb.nt(m, (+x$4.hU(other)));
  mb.nu(m, (+x$4.hV(other)));
  mb.nv(m, (+x$4.hW(other)));
  mb.nw(m, (+x$4.hX(other)));
}
function $f_Ltrivalibs_graphics_math_Vec2MutableOps__set__O__Ltrivalibs_graphics_math_Vec2Mutable__O__Ltrivalibs_graphics_math_Vec2Base__V($thiz, v, x$2, other, x$4) {
  x$2.gY(v, (+x$4.aA(other)));
  x$2.gZ(v, (+x$4.aB(other)));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.B + other.B), (v.G + other.G), (v.C + other.C));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, scalar) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.B * scalar), (v.G * scalar), (v.C * scalar));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__divScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, scalar) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.B / scalar), (v.G / scalar), (v.C / scalar));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3(((v.G * other.C) - (v.C * other.G)), ((v.C * other.B) - (v.B * other.C)), ((v.B * other.G) - (v.G * other.B)));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($thiz, v, x$2) {
  return $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__divScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, $f_Ltrivalibs_graphics_math_Vec3Base__length__O__D(x$2, v));
}
function $f_Ltrivalibs_graphics_math_Vec4MutableOps__set__O__Ltrivalibs_graphics_math_Vec4Mutable__O__Ltrivalibs_graphics_math_Vec4Base__V($thiz, v, x$2, other, x$4) {
  x$2.gY(v, (+x$4.aA(other)));
  x$2.gZ(v, (+x$4.aB(other)));
  x$2.ko(v, (+x$4.b6(other)));
  x$2.kj(v, (+x$4.b4(other)));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat4(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  this.jc = 0.0;
  this.jd = 0.0;
  this.je = 0.0;
  this.jf = 0.0;
  this.jg = 0.0;
  this.jh = 0.0;
  this.ji = 0.0;
  this.jj = 0.0;
  this.jk = 0.0;
  this.jl = 0.0;
  this.jm = 0.0;
  this.jn = 0.0;
  this.jo = 0.0;
  this.jp = 0.0;
  this.jq = 0.0;
  this.jr = 0.0;
  this.jc = m00;
  this.jd = m01;
  this.je = m02;
  this.jf = m03;
  this.jg = m10;
  this.jh = m11;
  this.ji = m12;
  this.jj = m13;
  this.jk = m20;
  this.jl = m21;
  this.jm = m22;
  this.jn = m23;
  this.jo = m30;
  this.jp = m31;
  this.jq = m32;
  this.jr = m33;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat4.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat4;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat4() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat4.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Mat4 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4, "trivalibs.graphics.math.cpu.Mat4", ({
  ec: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Quat(x, y, z, w) {
  this.ii = 0.0;
  this.ij = 0.0;
  this.ik = 0.0;
  this.ih = 0.0;
  this.ii = x;
  this.ij = y;
  this.ik = z;
  this.ih = w;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Quat.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Quat;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Quat() {
}
$h_Ltrivalibs_graphics_math_cpu_Quat.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Quat = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat, "trivalibs.graphics.math.cpu.Quat", ({
  ef: 1
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
$p.p4 = (function(angle) {
  var h = (0.5 * angle);
  return new $c_Ltrivalibs_graphics_math_cpu_Quat((+Math.sin(h)), 0.0, 0.0, (+Math.cos(h)));
});
$p.k6 = (function(angle) {
  var h = (0.5 * angle);
  return new $c_Ltrivalibs_graphics_math_cpu_Quat(0.0, (+Math.sin(h)), 0.0, (+Math.cos(h)));
});
var $d_Ltrivalibs_graphics_math_cpu_Quat$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat$, "trivalibs.graphics.math.cpu.Quat$", ({
  eg: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Quat$;
function $m_Ltrivalibs_graphics_math_cpu_Quat$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Quat$)) {
    $n_Ltrivalibs_graphics_math_cpu_Quat$ = new $c_Ltrivalibs_graphics_math_cpu_Quat$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Quat$;
}
function $f_Ltrivalibs_graphics_math_cpu_QuatImmutableOps__quatMul__O__Ltrivalibs_graphics_math_Vec4Base__O__O($thiz, q, x$2, p) {
  return new $c_Ltrivalibs_graphics_math_cpu_Quat((((((+x$2.b4(q)) * (+x$2.aA(p))) + ((+x$2.aA(q)) * (+x$2.b4(p)))) + ((+x$2.aB(q)) * (+x$2.b6(p)))) - ((+x$2.b6(q)) * (+x$2.aB(p)))), (((((+x$2.b4(q)) * (+x$2.aB(p))) - ((+x$2.aA(q)) * (+x$2.b6(p)))) + ((+x$2.aB(q)) * (+x$2.b4(p)))) + ((+x$2.b6(q)) * (+x$2.aA(p)))), (((((+x$2.b4(q)) * (+x$2.b6(p))) + ((+x$2.aA(q)) * (+x$2.aB(p)))) - ((+x$2.aB(q)) * (+x$2.aA(p)))) + ((+x$2.b6(q)) * (+x$2.b4(p)))), (((((+x$2.b4(q)) * (+x$2.b4(p))) - ((+x$2.aA(q)) * (+x$2.aA(p)))) - ((+x$2.aB(q)) * (+x$2.aB(p)))) - ((+x$2.b6(q)) * (+x$2.b6(p)))));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec2(x, y) {
  this.il = 0.0;
  this.im = 0.0;
  this.il = x;
  this.im = y;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec2.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec2;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec2() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec2.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec2 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec2, "trivalibs.graphics.math.cpu.Vec2", ({
  ek: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec3(x, y, z) {
  this.B = 0.0;
  this.G = 0.0;
  this.C = 0.0;
  this.B = x;
  this.G = y;
  this.C = z;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec3.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec3;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec3() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec3.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec3 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3, "trivalibs.graphics.math.cpu.Vec3", ({
  em: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec4(x, y, z, w) {
  this.fI = 0.0;
  this.fJ = 0.0;
  this.fK = 0.0;
  this.fH = 0.0;
  this.fI = x;
  this.fJ = y;
  this.fK = z;
  this.fH = w;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec4.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec4;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec4() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec4.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec4 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4, "trivalibs.graphics.math.cpu.Vec4", ({
  ep: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
  this.ly = null;
  this.lz = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$.prototype = $p;
$p.p9 = (function() {
  if ((!this.lz)) {
    this.ly = new $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18();
    this.lz = true;
  }
  return this.ly;
});
var $d_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$, "trivalibs.graphics.math.cpu.mat4$package$Mat4Buffer$", ({
  et: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$;
function $m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$)) {
    $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$ = new $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$() {
  this.lA = null;
  this.lB = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$.prototype = $p;
$p.qR = (function() {
  if ((!this.lB)) {
    this.lA = new $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$6();
    this.lB = true;
  }
  return this.lA;
});
var $d_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$, "trivalibs.graphics.math.cpu.vec2$package$Vec2Buffer$", ({
  ew: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$;
function $m_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$)) {
    $n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$ = new $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$() {
  this.lC = null;
  this.lD = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$.prototype = $p;
$p.qS = (function() {
  if ((!this.lD)) {
    this.lC = new $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$8();
    this.lD = true;
  }
  return this.lC;
});
var $d_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$, "trivalibs.graphics.math.cpu.vec4$package$Vec4Buffer$", ({
  ez: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$;
function $m_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$)) {
    $n_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$ = new $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$;
}
function $ct_Ltrivalibs_graphics_math_gpu_Expr__T__($thiz, wgsl) {
  $thiz.f = wgsl;
  return $thiz;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_Expr() {
  this.f = null;
}
$p = $c_Ltrivalibs_graphics_math_gpu_Expr.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_Expr;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_Expr() {
}
$h_Ltrivalibs_graphics_math_gpu_Expr.prototype = $p;
$p.o = (function() {
  return this.f;
});
var $d_Ltrivalibs_graphics_math_gpu_Expr = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_Expr, "trivalibs.graphics.math.gpu.Expr", ({
  a0: 1
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
$p.b1 = (function() {
  return new $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$13(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$10$2) => {
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), _$10$2);
  })));
});
var $d_Ltrivalibs_graphics_math_gpu_LeftScalar$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_LeftScalar$, "trivalibs.graphics.math.gpu.LeftScalar$", ({
  eD: 1
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
$p.g1 = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ax(v));
});
$p.i4 = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("vec3<f32>(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ax(v.B)) + ", ") + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ax(v.G)) + ", ") + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ax(v.C)) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$, "trivalibs.graphics.math.gpu.cpu_interop$package$", ({
  eG: 1
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
$p.nF = (function(tex, uv, sampler) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("textureSample(" + tex.f) + ", ") + sampler.f) + ", ") + uv.f) + ")"));
});
$p.aZ = (function(tex, uv, sampler) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("textureSample(" + tex.f) + ", ") + sampler.f) + ", ") + uv.f) + ")"));
});
$p.iM = (function(tex, coord) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("textureLoad(" + tex.f) + ", ") + coord.f) + ", 0)"));
});
$p.oE = (function(tex, coord) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("textureLoad(" + tex.f) + ", ") + coord.f) + ", 0)"));
});
$p.qu = (function(onFalse, onTrue, cond) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("select(" + onFalse.f) + ", ") + onTrue.f) + ", ") + cond.f) + ")"));
});
$p.p1 = (function(a, b) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.f) + " > ") + b.f) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_expr$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_expr$package$, "trivalibs.graphics.math.gpu.expr$package$", ({
  eH: 1
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
$p.aY = (function(parts) {
  var out = [];
  var i = 0;
  while ((i < parts.H())) {
    var p = parts.a7(i);
    if ((p.length > 0)) {
      out.push(p);
    }
    i = ((1 + i) | 0);
  }
  return out.join("\n");
});
var $d_Ltrivalibs_graphics_math_gpu_expr$package$Block$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_expr$package$Block$, "trivalibs.graphics.math.gpu.expr$package$Block$", ({
  eI: 1
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
  this.lF = null;
  this.lG = false;
  this.lH = null;
  this.lI = false;
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$.prototype = $p;
$p.ax = (function(v) {
  var s = ("" + v);
  return (((($f_T__indexOf__I__I(s, 46) >= 0) || ($f_T__indexOf__I__I(s, 69) >= 0)) || ($f_T__indexOf__I__I(s, 101) >= 0)) ? s : (s + ".0"));
});
$p.q = (function() {
  if ((!this.lG)) {
    this.lF = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1();
    this.lG = true;
  }
  return this.lF;
});
$p.fZ = (function() {
  if ((!this.lI)) {
    this.lH = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6();
    this.lI = true;
  }
  return this.lH;
});
$p.gV = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".xy"));
});
$p.r1 = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".zw"));
});
$p.g4 = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".xyz"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$, "trivalibs.graphics.math.gpu.float_expr$package$", ({
  eJ: 1
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
$p.bP = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("vec2<i32>(" + v.f) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_ivec2$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_ivec2$, "trivalibs.graphics.math.gpu.ivec2$", ({
  eV: 1
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
$p.ad = (function(x, y) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("vec2<f32>(" + x.f) + ", ") + y.f) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_vec2$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec2$, "trivalibs.graphics.math.gpu.vec2$", ({
  eW: 1
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
$p.aZ = (function(x, y, z) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("vec3<f32>(" + x.f) + ", ") + y.f) + ", ") + z.f) + ")"));
});
$p.bP = (function(scalar) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("vec3<f32>(" + scalar.f) + ")"));
});
$p.od = (function(scalar) {
  return this.bP($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(scalar));
});
var $d_Ltrivalibs_graphics_math_gpu_vec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec3$, "trivalibs.graphics.math.gpu.vec3$", ({
  eX: 1
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
$p.og = (function(x, y, z, w) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((((("vec4<f32>(" + x.f) + ", ") + y.f) + ", ") + z.f) + ", ") + w.f) + ")"));
});
$p.ad = (function(xyz, w) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("vec4<f32>(" + xyz.f) + ", ") + w.f) + ")"));
});
$p.aZ = (function(xy, z, w) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("vec4<f32>(" + xy.f) + ", ") + z.f) + ", ") + w.f) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_vec4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec4$, "trivalibs.graphics.math.gpu.vec4$", ({
  eY: 1
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
  this.r = null;
  this.r = value;
}
$p = $c_Ltrivalibs_graphics_painter_BindPair.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_BindPair;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_BindPair() {
}
$h_Ltrivalibs_graphics_painter_BindPair.prototype = $p;
var $d_Ltrivalibs_graphics_painter_BindPair = new $TypeData().i($c_Ltrivalibs_graphics_painter_BindPair, "trivalibs.graphics.painter.BindPair", ({
  eZ: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_BlendState$() {
  this.lJ = null;
  this.lK = null;
  $n_Ltrivalibs_graphics_painter_BlendState$ = this;
  new ($a_Ltrivalibs_graphics_painter_BlendState())(new ($a_Ltrivalibs_graphics_painter_BlendFn())("src-alpha", "one-minus-src-alpha"), new ($a_Ltrivalibs_graphics_painter_BlendFn())("one", "one-minus-src-alpha"));
  this.lJ = new ($a_Ltrivalibs_graphics_painter_BlendState())(new ($a_Ltrivalibs_graphics_painter_BlendFn())("src-alpha", "one"), new ($a_Ltrivalibs_graphics_painter_BlendFn())("one", "one"));
  this.lK = new ($a_Ltrivalibs_graphics_painter_BlendState())(new ($a_Ltrivalibs_graphics_painter_BlendFn())("dst", "zero"), new ($a_Ltrivalibs_graphics_painter_BlendFn())("dst-alpha", "zero"));
}
$p = $c_Ltrivalibs_graphics_painter_BlendState$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_BlendState$;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_BlendState$() {
}
$h_Ltrivalibs_graphics_painter_BlendState$.prototype = $p;
var $d_Ltrivalibs_graphics_painter_BlendState$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_BlendState$, "trivalibs.graphics.painter.BlendState$", ({
  f0: 1
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
  while ((i < $thiz.fM)) {
    var b = $thiz.fN[i];
    if (((format === null) && (b.bK > 0))) {
      format = b.fO;
    }
    i = ((1 + i) | 0);
  }
  $thiz.ju = format;
}
function $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V($thiz, index, verts, indices, widenTo32) {
  while ((($thiz.fN.length | 0) <= index)) {
    $thiz.fN.push(new $c_Ltrivalibs_graphics_painter_FormBuffers());
  }
  var b = $thiz.fN[index];
  $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_graphics_painter_FormBuffers__Ltrivalibs_bufferdata_BufferView__V($thiz, b, verts);
  if ((indices !== null)) {
    $p_Ltrivalibs_graphics_painter_Form__uploadIndices__Ltrivalibs_graphics_painter_FormBuffers__sjs_js_typedarray_TypedArray__Z__V($thiz, b, indices, widenTo32);
  } else {
    b.bK = 0;
    b.hg = 0;
  }
}
function $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_graphics_painter_FormBuffers__Ltrivalibs_bufferdata_BufferView__V($thiz, b, verts) {
  var data = verts.dv.buffer;
  var size = (data.byteLength | 0);
  var p = ((-4) & ((3 + size) | 0));
  var padded = ((p < 4) ? 4 : p);
  if (((b.bL === null) || (b.jx < padded))) {
    if ((b.bL !== null)) {
      b.bL.destroy();
    }
    b.bL = $thiz.hf.g.createBuffer(({
      "size": padded,
      "usage": 40
    }));
    b.jx = padded;
  }
  $thiz.hf.aN.writeBuffer(b.bL, 0.0, $p_Ltrivalibs_graphics_painter_Form__alignedData__sjs_js_typedarray_ArrayBuffer__sjs_js_typedarray_ArrayBuffer($thiz, data));
  b.io = size;
  b.gG = (verts.off | 0);
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
    b.fO = "uint32";
  } else if ((!(!(raw instanceof Uint16Array)))) {
    data = raw.buffer;
    count = (raw.length | 0);
    b.fO = "uint16";
  } else {
    data = raw.buffer;
    count = (raw.length | 0);
    b.fO = "uint32";
  }
  var size = (data.byteLength | 0);
  var p = ((-4) & ((3 + size) | 0));
  var padded = ((p < 4) ? 4 : p);
  if (((b.bJ === null) || (b.jw < padded))) {
    if ((b.bJ !== null)) {
      b.bJ.destroy();
    }
    b.bJ = $thiz.hf.g.createBuffer(({
      "size": padded,
      "usage": 24
    }));
    b.jw = padded;
  }
  $thiz.hf.aN.writeBuffer(b.bJ, 0.0, $p_Ltrivalibs_graphics_painter_Form__alignedData__sjs_js_typedarray_ArrayBuffer__sjs_js_typedarray_ArrayBuffer($thiz, data));
  b.hg = size;
  b.bK = count;
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
  this.hf = null;
  this.fN = null;
  this.fM = 0;
  this.jv = null;
  this.jt = null;
  this.ju = null;
  this.hf = painter;
  this.fN = [];
  this.fM = 0;
  this.jv = "triangle-list";
  this.jt = "ccw";
  this.ju = null;
}
$p = $c_Ltrivalibs_graphics_painter_Form.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Form;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Form() {
}
$h_Ltrivalibs_graphics_painter_Form.prototype = $p;
$p.qv = (function(geometry, vertices, geometries, verticesAll, topology, frontFace) {
  if ((topology !== (void 0))) {
    this.jv = topology;
  }
  if ((frontFace !== (void 0))) {
    this.jt = frontFace;
  }
  if ((geometry !== (void 0))) {
    $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V(this, 0, geometry.ja, geometry.id, false);
    this.fM = 1;
    $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V(this);
  }
  if ((vertices !== (void 0))) {
    $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V(this, 0, vertices, null, false);
    this.fM = 1;
    $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V(this);
  }
  if ((geometries !== (void 0))) {
    var use32 = false;
    var i = 0;
    while ((i < (geometries.length | 0))) {
      var idx = geometries[i].id;
      if (((idx !== null) && (!(!(idx instanceof Uint32Array))))) {
        use32 = true;
      }
      i = ((1 + i) | 0);
    }
    i = 0;
    while ((i < (geometries.length | 0))) {
      var geo = geometries[i];
      $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V(this, i, geo.ja, geo.id, use32);
      i = ((1 + i) | 0);
    }
    this.fM = (geometries.length | 0);
    $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V(this);
  }
  if ((verticesAll !== (void 0))) {
    var i$1 = 0;
    while ((i$1 < (verticesAll.length | 0))) {
      $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V(this, i$1, verticesAll[i$1], null, false);
      i$1 = ((1 + i$1) | 0);
    }
    this.fM = (verticesAll.length | 0);
    $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V(this);
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Form = new $TypeData().i($c_Ltrivalibs_graphics_painter_Form, "trivalibs.graphics.painter.Form", ({
  f1: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_FormBuffers() {
  this.bL = null;
  this.jx = 0;
  this.io = 0;
  this.gG = 0;
  this.bJ = null;
  this.jw = 0;
  this.hg = 0;
  this.bK = 0;
  this.fO = null;
  this.bL = null;
  this.jx = 0;
  this.io = 0;
  this.gG = 0;
  this.bJ = null;
  this.jw = 0;
  this.hg = 0;
  this.bK = 0;
  this.fO = "uint16";
}
$p = $c_Ltrivalibs_graphics_painter_FormBuffers.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_FormBuffers;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_FormBuffers() {
}
$h_Ltrivalibs_graphics_painter_FormBuffers.prototype = $p;
var $d_Ltrivalibs_graphics_painter_FormBuffers = new $TypeData().i($c_Ltrivalibs_graphics_painter_FormBuffers, "trivalibs.graphics.painter.FormBuffers", ({
  f2: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter) {
  this.lN = null;
  this.lM = null;
  this.fP = null;
  this.lN = shade;
  this.lM = painter;
  this.fP = [];
}
$p = $c_Ltrivalibs_graphics_painter_InstanceList.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_InstanceList;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_InstanceList() {
}
$h_Ltrivalibs_graphics_painter_InstanceList.prototype = $p;
$p.H = (function() {
  return (this.fP.length | 0);
});
$p.o6 = (function() {
  var inst = new $c_Ltrivalibs_graphics_painter_Instance(this.lN, this.lM);
  this.fP.push(inst);
  return (((this.fP.length | 0) - 1) | 0);
});
var $d_Ltrivalibs_graphics_painter_InstanceList = new $TypeData().i($c_Ltrivalibs_graphics_painter_InstanceList, "trivalibs.graphics.painter.InstanceList", ({
  f4: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_LayerBindCache(panelId, epoch, valueGroup, panelGroup) {
  this.lP = 0;
  this.lO = 0;
  this.jB = null;
  this.jA = null;
  this.lP = panelId;
  this.lO = epoch;
  this.jB = valueGroup;
  this.jA = panelGroup;
}
$p = $c_Ltrivalibs_graphics_painter_LayerBindCache.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_LayerBindCache;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_LayerBindCache() {
}
$h_Ltrivalibs_graphics_painter_LayerBindCache.prototype = $p;
var $d_Ltrivalibs_graphics_painter_LayerBindCache = new $TypeData().i($c_Ltrivalibs_graphics_painter_LayerBindCache, "trivalibs.graphics.painter.LayerBindCache", ({
  f6: 1
}));
function $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var w = ($thiz.gH.width | 0);
  var h = ($thiz.gH.height | 0);
  panel.oP(w, h);
  var msaa = panel.gL;
  var encoder = $thiz.g.createCommandEncoder();
  var panelFormats = panel.k5();
  var colorAttachments = [];
  var t = 0;
  while ((t < panel.qG())) {
    if ((panel.iw !== null)) {
      var opt$proxy2 = panel.iw;
      if (msaa) {
        var _2 = panel.nA(t);
        var TextureViewBundle_this = panel.a4[t];
        var _2$1 = TextureViewBundle_this.aO[0];
        var value = opt$proxy2.fI;
        var value$1 = opt$proxy2.fJ;
        var value$2 = opt$proxy2.fK;
        var value$3 = opt$proxy2.fH;
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
        var TextureViewBundle_this$2 = panel.a4[t];
        var _2$3 = TextureViewBundle_this$2.aO[0];
        var value$4 = opt$proxy2.fI;
        var value$5 = opt$proxy2.fJ;
        var value$6 = opt$proxy2.fK;
        var value$7 = opt$proxy2.fH;
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
      var _2$5 = panel.nA(t);
      var TextureViewBundle_this$3 = panel.a4[t];
      var _2$6 = TextureViewBundle_this$3.aO[0];
      var attachment = ({
        "view": _2$5,
        "resolveTarget": _2$6,
        "loadOp": "load",
        "storeOp": "store"
      });
    } else {
      var TextureViewBundle_this$4 = panel.a4[t];
      var _2$7 = TextureViewBundle_this$4.aO[0];
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
  if (panel.ho) {
    var _2$8 = panel.n7();
    passDesc.depthStencilAttachment = ({
      "view": _2$8,
      "depthLoadOp": "clear",
      "depthStoreOp": "store",
      "depthClearValue": 1.0
    });
  }
  var shapePass = encoder.beginRenderPass(passDesc);
  var i = 0;
  while ((i < (panel.ix.length | 0))) {
    $p_Ltrivalibs_graphics_painter_Painter__renderShapeOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shape__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_Panel__V($thiz, shapePass, panel.ix[i], panel.ho, msaa, panelFormats, panel);
    i = ((1 + i) | 0);
  }
  shapePass.end();
  $thiz.aN.submit([encoder.finish()]);
  if (panel.hl) {
    $p_Ltrivalibs_graphics_painter_Painter__resolvePanelDepth__Ltrivalibs_graphics_painter_Panel__V($thiz, panel);
  }
  var curEncoder = null;
  var curPass = null;
  var j = 0;
  while ((j < (panel.bN.length | 0))) {
    var layer = panel.bN[j];
    var needsPingPong = layer.n3();
    if ((layer.hh >= 0)) {
      if ((curPass !== null)) {
        curPass.end();
        $thiz.aN.submit([curEncoder.finish()]);
        curPass = null;
      }
      var mipDstView = panel.a4[0].aO[layer.hh];
      var mipSrcView = ((layer.ir >= 0) ? panel.a4[0].aO[layer.ir] : panel.iR());
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
      $thiz.aN.submit([enc.finish()]);
    } else if (needsPingPong) {
      if ((curPass !== null)) {
        curPass.end();
        $thiz.aN.submit([curEncoder.finish()]);
        curPass = null;
      }
      var enc$2 = $thiz.g.createCommandEncoder();
      var _2$10 = panel.qf();
      var _2$11 = [({
        "view": _2$10,
        "loadOp": "load",
        "storeOp": "store"
      })];
      var ppPass = enc$2.beginRenderPass(({
        "colorAttachments": _2$11
      }));
      $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V($thiz, ppPass, layer, false, false, panelFormats, panel.iR(), panel);
      ppPass.end();
      $thiz.aN.submit([enc$2.finish()]);
      panel.qE();
    } else {
      if ((curPass === null)) {
        curEncoder = $thiz.g.createCommandEncoder();
        var $x_1 = curEncoder;
        var _2$12 = panel.iR();
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
    $thiz.aN.submit([curEncoder.finish()]);
  }
  var hasMipTargetLayers = false;
  var mi = 0;
  while ((mi < (panel.bN.length | 0))) {
    if ((panel.bN[mi].hh >= 0)) {
      hasMipTargetLayers = true;
    }
    mi = ((1 + mi) | 0);
  }
  if (((panel.k9() > 1) && (!hasMipTargetLayers))) {
    $p_Ltrivalibs_graphics_painter_Painter__generateMipmaps__Ltrivalibs_graphics_painter_Panel__V($thiz, panel);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__blitSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz) {
  if ((!$thiz.lV)) {
    $thiz.lU = $thiz.g.createSampler(({
      "magFilter": "nearest",
      "minFilter": "nearest"
    }));
    $thiz.lV = true;
  }
  return $thiz.lU;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz) {
  if ((!$thiz.lR)) {
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
    $thiz.lQ = $x_1;
    $thiz.lR = true;
  }
  return $thiz.lQ;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitPipeline__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz) {
  if ((!$thiz.lT)) {
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
    var f$proxy4 = $thiz.gI;
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
    $thiz.lS = $x_2;
    $thiz.lT = true;
  }
  return $thiz.lS;
}
function $p_Ltrivalibs_graphics_painter_Painter__depthResolveBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz) {
  if ((!$thiz.lY)) {
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
    $thiz.lX = $x_1;
    $thiz.lY = true;
  }
  return $thiz.lX;
}
function $p_Ltrivalibs_graphics_painter_Painter__depthResolvePipeline__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz) {
  if ((!$thiz.m0)) {
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
    $thiz.lZ = $x_2;
    $thiz.m0 = true;
  }
  return $thiz.lZ;
}
function $p_Ltrivalibs_graphics_painter_Painter__resolvePanelDepth__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var encoder = $thiz.g.createCommandEncoder();
  var _2 = [];
  var _2$1 = panel.qo();
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
  var _2$4 = panel.n7();
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
  $thiz.aN.submit([encoder.finish()]);
}
function $p_Ltrivalibs_graphics_painter_Painter__mipBlitSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz) {
  if ((!$thiz.m2)) {
    $thiz.m1 = $thiz.g.createSampler(({
      "magFilter": "linear",
      "minFilter": "linear"
    }));
    $thiz.m2 = true;
  }
  return $thiz.m1;
}
function $p_Ltrivalibs_graphics_painter_Painter__getMipBlitPipeline__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, format) {
  if ((!(!(!(!$thiz.is.hasOwnProperty(format)))))) {
    return $thiz.is[format];
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
    $thiz.is[format] = p;
    return p;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__generateMipmaps__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var mipCount = panel.k9();
  if ((mipCount <= 1)) {
    return (void 0);
  }
  var fmt = (((panel.fR.length | 0) > 0) ? panel.fR[0] : $thiz.gI);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getMipBlitPipeline__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, fmt);
  var i = 1;
  while ((i < mipCount)) {
    var srcView = panel.a4[0].aO[((i - 1) | 0)];
    var dstView = panel.a4[0].aO[i];
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
    $thiz.aN.submit([encoder.finish()]);
    i = ((1 + i) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, bindings, panelBindings) {
  $thiz.aF.length = (bindings.length | 0);
  var i = 0;
  while ((i < (bindings.length | 0))) {
    $thiz.aF[i] = bindings[i];
    i = ((1 + i) | 0);
  }
  $thiz.ah.length = (panelBindings.length | 0);
  var j = 0;
  while ((j < (panelBindings.length | 0))) {
    $thiz.ah[j] = panelBindings[j];
    j = ((1 + j) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shade, workBindings, workPanelBindings) {
  var dict = panel.hq;
  var keys = Object.keys(dict);
  var i = 0;
  while ((i < (keys.length | 0))) {
    var name = keys[i];
    var value = dict[name];
    if ((!(!(!(!shade.E.hasOwnProperty(name)))))) {
      var idx = (shade.E[name] | 0);
      if (((idx >= (workBindings.length | 0)) || (workBindings[idx] === null))) {
        while (((workBindings.length | 0) <= idx)) {
          workBindings.push(null);
        }
        workBindings[idx] = value;
      }
    } else if ((!(!(!(!shade.au.hasOwnProperty(name)))))) {
      var idx$2 = (shade.au[name] | 0);
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
  while ((i < (inst.aM.length | 0))) {
    if ((inst.aM[i] !== null)) {
      while (((workBindings.length | 0) <= i)) {
        workBindings.push(null);
      }
      workBindings[i] = inst.aM[i];
    }
    i = ((1 + i) | 0);
  }
  var j = 0;
  while ((j < (inst.ip.length | 0))) {
    if ((inst.ip[j] !== null)) {
      while (((workPanelBindings.length | 0) <= j)) {
        workPanelBindings.push(null);
      }
      workPanelBindings[j] = inst.ip[j];
    }
    j = ((1 + j) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel) {
  return ((panel !== null) && ((Object.keys(panel.hq).length | 0) > 0));
}
function $p_Ltrivalibs_graphics_painter_Painter__buildValueBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, shade, bindings) {
  if ((((bindings.length | 0) > 0) && (shade.jE !== null))) {
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
    var _2 = shade.jE;
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
  if ((shade.iA !== null)) {
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
        var view = ((!(!pb.depth)) ? pb.panel.oD() : (((pb.mipLevel | 0) < 0) ? pb.panel.a4[(pb.index | 0)].m7 : pb.panel.a4[(pb.index | 0)].aO[(pb.mipLevel | 0)]));
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
      var _2 = shade.iA;
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
  var fmts = ((formats !== null) ? formats : [$thiz.gI]);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, shape.Y, shape.jG, fmts, depthTest, multisample, shape.hr.jv, shape.jH, shape.hr.jt, shape.hr.ju);
  pass.setPipeline(pipeline);
  var form = shape.hr;
  var bufferCount = form.fM;
  var instanceCount = shape.jI.H();
  var hasPanelBinds = $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel);
  if ((instanceCount === 0)) {
    if (hasPanelBinds) {
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, shape.U, shape.a9);
      $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shape.Y, $thiz.aF, $thiz.ah);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.Y, $thiz.aF);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.Y, $thiz.ah, null);
    } else {
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.Y, shape.U);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.Y, shape.a9, null);
    }
    var b = 0;
    while ((b < bufferCount)) {
      var buf = form.fN[b];
      if ((buf.gG > 0)) {
        pass.setVertexBuffer(0, buf.bL, 0.0, buf.io);
        if ((buf.bK > 0)) {
          pass.setIndexBuffer(buf.bJ, buf.fO, 0.0, buf.hg);
          pass.drawIndexed(buf.bK);
        } else {
          pass.draw(buf.gG);
        }
      }
      b = ((1 + b) | 0);
    }
  } else {
    var i = 0;
    while ((i < instanceCount)) {
      var inst = shape.jI.fP[i];
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, shape.U, shape.a9);
      if (hasPanelBinds) {
        $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shape.Y, $thiz.aF, $thiz.ah);
      }
      $p_Ltrivalibs_graphics_painter_Painter__applyInstanceBindings__Ltrivalibs_graphics_painter_Instance__sjs_js_Array__sjs_js_Array__V($thiz, inst, $thiz.aF, $thiz.ah);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.Y, $thiz.aF);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.Y, $thiz.ah, null);
      var b$2 = 0;
      while ((b$2 < bufferCount)) {
        var buf$2 = form.fN[b$2];
        if ((buf$2.gG > 0)) {
          pass.setVertexBuffer(0, buf$2.bL, 0.0, buf$2.io);
          if ((buf$2.bK > 0)) {
            pass.setIndexBuffer(buf$2.bJ, buf$2.fO, 0.0, buf$2.hg);
            pass.drawIndexed(buf$2.bK);
          } else {
            pass.draw(buf$2.gG);
          }
        }
        b$2 = ((1 + b$2) | 0);
      }
      i = ((1 + i) | 0);
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V($thiz, pass, layer, depthTest, multisample, formats, srcView, panel) {
  var fmts = ((formats !== null) ? formats : [$thiz.gI]);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, layer.v, layer.jz, fmts, depthTest, multisample, "triangle-list", "none", "ccw", null);
  pass.setPipeline(pipeline);
  var instanceCount = layer.iq.H();
  var hasPanelBinds = $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel);
  if ((instanceCount === 0)) {
    if (hasPanelBinds) {
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, layer.i, layer.Q);
      $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, layer.v, $thiz.aF, $thiz.ah);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, layer.v, $thiz.aF);
      var effectiveSrcView = (((($thiz.ah.length | 0) > 0) && ($thiz.ah[0] !== null)) ? null : srcView);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer.v, $thiz.ah, effectiveSrcView);
    } else {
      var c = layer.J;
      if (((((c !== null) && (panel !== null)) && (c.lP === panel.jD)) && (c.lO === panel.fQ))) {
        if ((c.jB !== null)) {
          pass.setBindGroup(0, c.jB);
        }
        if ((c.jA !== null)) {
          pass.setBindGroup(1, c.jA);
        }
      } else {
        var vg = $p_Ltrivalibs_graphics_painter_Painter__buildValueBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, layer.v, layer.i);
        var pg = $p_Ltrivalibs_graphics_painter_Painter__buildPanelBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, layer.v, layer.Q, srcView);
        if ((vg !== null)) {
          pass.setBindGroup(0, vg);
        }
        if ((pg !== null)) {
          pass.setBindGroup(1, pg);
        }
        layer.J = ((panel !== null) ? new $c_Ltrivalibs_graphics_painter_LayerBindCache(panel.jD, panel.fQ, vg, pg) : null);
      }
    }
    pass.draw(3);
  } else {
    var i = 0;
    while ((i < instanceCount)) {
      var inst = layer.iq.fP[i];
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, layer.i, layer.Q);
      if (hasPanelBinds) {
        $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, layer.v, $thiz.aF, $thiz.ah);
      }
      $p_Ltrivalibs_graphics_painter_Painter__applyInstanceBindings__Ltrivalibs_graphics_painter_Instance__sjs_js_Array__sjs_js_Array__V($thiz, inst, $thiz.aF, $thiz.ah);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, layer.v, $thiz.aF);
      var effectiveSrcView$2 = (((($thiz.ah.length | 0) > 0) && ($thiz.ah[0] !== null)) ? null : srcView);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer.v, $thiz.ah, effectiveSrcView$2);
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
  var key = (((((((((((((((shade.m5 + "|") + $p_Ltrivalibs_graphics_painter_Painter__blendKeyStr__Ltrivalibs_graphics_painter_BlendState__T($thiz, blendState)) + "|") + formats.join(",")) + "|") + depthTest) + "|") + multisample) + "|") + topology) + "|") + cullMode) + "|") + frontFace) + stripKey);
  var cached = $thiz.jC[key];
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
    if ((shade.jF !== null)) {
      var _2 = shade.iB;
      var _2$1 = [shade.jF];
      var vertexDescriptor = ({
        "module": _2,
        "entryPoint": "vs_main",
        "buffers": _2$1
      });
    } else {
      var _2$2 = shade.iB;
      var vertexDescriptor = ({
        "module": _2$2,
        "entryPoint": "vs_main"
      });
    }
    var _2$3 = shade.m6;
    var _2$4 = shade.iB;
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
    $thiz.jC[key] = p;
    return p;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__bindingEntry__I__O__sjs_js_Dynamic($thiz, i, b) {
  if ((b instanceof $c_Ltrivalibs_graphics_buffers_BufferBinding)) {
    var _2 = b.y;
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
  this.aN = null;
  this.gH = null;
  this.lW = null;
  this.gI = null;
  this.jC = null;
  this.p = 0;
  this.it = null;
  this.m3 = null;
  this.m4 = false;
  this.lU = null;
  this.lV = false;
  this.lQ = null;
  this.lR = false;
  this.lS = null;
  this.lT = false;
  this.lX = null;
  this.lY = false;
  this.lZ = null;
  this.m0 = false;
  this.m1 = null;
  this.m2 = false;
  this.is = null;
  this.aF = null;
  this.ah = null;
  this.g = device;
  this.aN = queue;
  this.gH = canvas;
  this.lW = context;
  this.gI = preferredFormat;
  this.jC = ({});
  this.p = 0;
  this.it = [];
  this.is = ({});
  this.aF = [];
  this.ah = [];
}
$p = $c_Ltrivalibs_graphics_painter_Painter.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Painter;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Painter() {
}
$h_Ltrivalibs_graphics_painter_Painter.prototype = $p;
$p.q9 = (function(cb) {
  this.it.push(cb);
  cb.bd((this.gH.width | 0), (this.gH.height | 0));
});
$p.oY = (function(w, h) {
  var k = 0;
  while ((k < (this.it.length | 0))) {
    this.it[k].bd(w, h);
    k = ((1 + k) | 0);
  }
});
$p.qq = (function(magFilter, minFilter, mipmapFilter, addressMode, addressModeU, addressModeV) {
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
$p.kb = (function() {
  if ((!this.m4)) {
    this.m3 = this.qq("linear", "linear", "linear", "clamp-to-edge", (void 0), (void 0));
    this.m4 = true;
  }
  return this.m3;
});
$p.nb = (function(geometry, vertices, geometries, verticesAll, topology, frontFace) {
  return new $c_Ltrivalibs_graphics_painter_Form(this).qv(geometry, vertices, geometries, verticesAll, topology, frontFace);
});
$p.i2 = (function(form, shade, cullMode, blendState) {
  return new $c_Ltrivalibs_graphics_painter_Shape(this, form, shade).qx(cullMode, blendState);
});
$p.be = (function(shade, blendState, mipSource, mipTarget) {
  return new $c_Ltrivalibs_graphics_painter_Layer(this, shade).qw(blendState, mipSource, mipTarget);
});
$p.bt = (function(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers) {
  return new $c_Ltrivalibs_graphics_painter_Panel(this).i1(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers);
});
$p.qz = (function(panel) {
  var encoder = this.g.createCommandEncoder();
  var swapChainView = this.lW.getCurrentTexture().createView();
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
  var _2$2 = panel.iR();
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
  this.aN.submit([encoder.finish()]);
});
var $d_Ltrivalibs_graphics_painter_Painter = new $TypeData().i($c_Ltrivalibs_graphics_painter_Painter, "trivalibs.graphics.painter.Painter", ({
  f7: 1
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
$p.pf = (function(canvas) {
  var maybeGpu = $m_Ltrivalibs_graphics_painter_WebGPU$().p7();
  if ((maybeGpu === (void 0))) {
    return Promise.reject(Error("WebGPU is not supported"));
  } else {
    var promise$proxy1 = maybeGpu.requestAdapter();
    var promise$proxy3 = promise$proxy1.then(((value$2) => {
      if ((value$2 === null)) {
        throw new $c_sjs_js_JavaScriptException(Error("Failed to get WebGPU adapter")).aD;
      } else {
        return value$2;
      }
    }));
    var f$proxy11 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((adapter$2) => {
      var promise$proxy2 = adapter$2.requestDevice();
      var f$proxy10 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((device$2) => {
        var queue = device$2.queue;
        var context = $m_Ltrivalibs_graphics_painter_WebGPU$().p6(canvas);
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
            painter.oY(rw, rh);
          }
        }));
        observer.observe(canvas);
        return painter;
      }));
      return promise$proxy2.then($m_sjs_js_Any$().hG(f$proxy10));
    }));
    return promise$proxy3.then($m_sjs_js_Any$().hG(f$proxy11));
  }
});
$p.pe = (function(canvas, setup) {
  var promise$proxy4 = this.pf(canvas);
  return promise$proxy4.then($m_sjs_js_Any$().hG(setup));
});
var $d_Ltrivalibs_graphics_painter_Painter$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_Painter$, "trivalibs.graphics.painter.Painter$", ({
  f8: 1
}));
var $n_Ltrivalibs_graphics_painter_Painter$;
function $m_Ltrivalibs_graphics_painter_Painter$() {
  if ((!$n_Ltrivalibs_graphics_painter_Painter$)) {
    $n_Ltrivalibs_graphics_painter_Painter$ = new $c_Ltrivalibs_graphics_painter_Painter$();
  }
  return $n_Ltrivalibs_graphics_painter_Painter$;
}
function $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V($thiz) {
  if (($thiz.hj !== null)) {
    $thiz.hj.destroy();
  }
  if (($thiz.hm !== null)) {
    $thiz.hm.destroy();
  }
  var depthUsage = ($thiz.hi ? 20 : 16);
  var $x_1 = $thiz.fS.g;
  var value = $thiz.gK;
  var value$1 = $thiz.gJ;
  var _2 = ({
    "width": value,
    "height": value$1
  });
  var _2$1 = ($thiz.gL ? 4 : 1);
  var depthTex = $x_1.createTexture(({
    "size": _2,
    "format": "depth24plus",
    "usage": depthUsage,
    "sampleCount": _2$1
  }));
  $thiz.hj = depthTex;
  $thiz.iu = depthTex.createView();
  if (($thiz.hi && $thiz.gL)) {
    var $x_2 = $thiz.fS.g;
    var value$2 = $thiz.gK;
    var value$3 = $thiz.gJ;
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
    $thiz.hm = resTex;
    $thiz.hn = resTex.createView();
    $thiz.hl = true;
  } else {
    $thiz.hm = null;
    $thiz.hn = null;
    $thiz.hl = false;
  }
}
function $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z($thiz) {
  var i = 0;
  while ((i < ($thiz.bN.length | 0))) {
    if ($thiz.bN[i].n3()) {
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
  this.fS = null;
  this.iz = 0;
  this.iy = 0;
  this.iw = null;
  this.ho = false;
  this.gL = false;
  this.hp = 0;
  this.fR = null;
  this.ix = null;
  this.bN = null;
  this.hq = null;
  this.jD = 0;
  this.fQ = 0;
  this.b9 = null;
  this.a4 = null;
  this.hj = null;
  this.iu = null;
  this.hi = false;
  this.hm = null;
  this.hn = null;
  this.hl = false;
  this.hk = null;
  this.iv = null;
  this.gK = 0;
  this.gJ = 0;
  this.fS = painter;
  this.iz = 0;
  this.iy = 0;
  this.iw = null;
  this.ho = false;
  this.gL = false;
  this.hp = 1;
  this.fR = [];
  this.ix = [];
  this.bN = [];
  this.hq = ({});
  $m_Ltrivalibs_graphics_painter_panel$package$().iC = ((1 + $m_Ltrivalibs_graphics_painter_panel$package$().iC) | 0);
  this.jD = $m_Ltrivalibs_graphics_painter_panel$package$().iC;
  this.fQ = 0;
  this.b9 = [];
  this.a4 = [];
  this.hj = null;
  this.iu = null;
  this.hi = false;
  this.hm = null;
  this.hn = null;
  this.hl = false;
  this.hk = [];
  this.iv = [];
  this.gK = 0;
  this.gJ = 0;
}
$p = $c_Ltrivalibs_graphics_painter_Panel.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Panel;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Panel() {
}
$h_Ltrivalibs_graphics_painter_Panel.prototype = $p;
$p.k9 = (function() {
  if ((this.hp === 0)) {
    var a = this.gK;
    var b = this.gJ;
    var maxDim = ((a > b) ? a : b);
    if ((maxDim <= 0)) {
      return 1;
    } else {
      var a$1 = maxDim;
      return ((1 + $doubleToInt(((+Math.log(a$1)) / (+Math.log(2.0))))) | 0);
    }
  } else {
    return this.hp;
  }
});
$p.k5 = (function() {
  return (((this.fR.length | 0) === 0) ? [this.fS.gI] : this.fR);
});
$p.qG = (function() {
  return (this.k5().length | 0);
});
$p.iR = (function() {
  var TextureViewBundle_this = this.a4[0];
  return TextureViewBundle_this.aO[0];
});
$p.qf = (function() {
  var TextureViewBundle_this = this.a4[1];
  return TextureViewBundle_this.aO[0];
});
$p.n7 = (function() {
  return this.iu;
});
$p.qo = (function() {
  return this.hn;
});
$p.nA = (function(index) {
  return this.iv[index];
});
$p.qE = (function() {
  var t = this.b9[0];
  this.b9[0] = this.b9[1];
  this.b9[1] = t;
  var sv = this.a4[0];
  this.a4[0] = this.a4[1];
  this.a4[1] = sv;
  this.fQ = ((1 + this.fQ) | 0);
});
$p.oD = (function() {
  if (((!this.hi) && (this.hj !== null))) {
    this.hi = true;
    $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V(this);
  }
  return (this.hl ? this.hn : this.iu);
});
$p.op = (function(index, mipLevel, depth) {
  return new ($a_Ltrivalibs_graphics_painter_PanelBinding())(this, index, mipLevel, depth);
});
$p.i1 = (function(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers) {
  if ((width !== (void 0))) {
    var v = (width | 0);
    this.iz = v;
  }
  if ((height !== (void 0))) {
    var v$1 = (height | 0);
    this.iy = v$1;
  }
  if ((clearColor !== (void 0))) {
    this.iw = ((clearColor === null) ? null : new $c_Ltrivalibs_graphics_math_cpu_Vec4(clearColor.fI, clearColor.fJ, clearColor.fK, clearColor.fH));
  }
  if ((depthTest !== (void 0))) {
    var v$2 = (!(!depthTest));
    this.ho = v$2;
  }
  if ((multisample !== (void 0))) {
    var v$3 = (!(!multisample));
    this.gL = v$3;
  }
  if ((mips !== (void 0))) {
    if ((!(!mips))) {
      this.hp = 0;
    }
  }
  if ((mipLevels !== (void 0))) {
    var v$5 = (mipLevels | 0);
    if ((v$5 > 0)) {
      this.hp = v$5;
    }
  }
  var x$1 = ((formats === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy1$1__O__O(this, format) : formats);
  if ((x$1 !== (void 0))) {
    this.fR = x$1;
  }
  var x$2 = ((shapes === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy2$1__O__O(this, shape) : shapes);
  if ((x$2 !== (void 0))) {
    this.ix = x$2;
  }
  var x$3 = ((layers === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy3$1__O__O(this, layer) : layers);
  if ((x$3 !== (void 0))) {
    this.bN = x$3;
  }
  if ((((this.fR.length | 0) > 1) && $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z(this))) {
    throw new $c_sjs_js_JavaScriptException(Error("Panel: MRT (multiple formats) cannot host auto-pong layers. Chain a single-format panel for post-processing instead.")).aD;
  }
  return this;
});
$p.oP = (function(canvasW, canvasH) {
  var targetW = ((this.iz === 0) ? canvasW : this.iz);
  var targetH = ((this.iy === 0) ? canvasH : this.iy);
  if (((targetW !== this.gK) || (targetH !== this.gJ))) {
    var d = 0;
    while ((d < (this.b9.length | 0))) {
      this.b9[d].destroy();
      d = ((1 + d) | 0);
    }
    d = 0;
    while ((d < (this.hk.length | 0))) {
      this.hk[d].destroy();
      d = ((1 + d) | 0);
    }
    this.gK = targetW;
    this.gJ = targetH;
    var mipCount = this.k9();
    var fmts = this.k5();
    var hasPong = $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z(this);
    this.b9 = [];
    this.a4 = [];
    this.hk = [];
    this.iv = [];
    var i = 0;
    while ((i < (fmts.length | 0))) {
      var fmt = fmts[i];
      var $x_1 = this.fS.g;
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
      this.b9.push(tex);
      this.a4.push($p_Ltrivalibs_graphics_painter_Panel__buildViews__Ltrivalibs_graphics_painter_GPUTexture__I__Ltrivalibs_graphics_painter_TextureViewBundle(this, tex, mipCount));
      if (this.gL) {
        var $x_2 = this.fS.g;
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
        this.hk.push(msaaTex);
        this.iv.push(msaaTex.createView());
      }
      i = ((1 + i) | 0);
    }
    if (hasPong) {
      var $x_3 = this.fS.g;
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
      this.b9.push(pongTex);
      this.a4.push($p_Ltrivalibs_graphics_painter_Panel__buildViews__Ltrivalibs_graphics_painter_GPUTexture__I__Ltrivalibs_graphics_painter_TextureViewBundle(this, pongTex, mipCount));
    }
    if (this.ho) {
      $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V(this);
    }
    this.fQ = ((1 + this.fQ) | 0);
  }
});
var $d_Ltrivalibs_graphics_painter_Panel = new $TypeData().i($c_Ltrivalibs_graphics_painter_Panel, "trivalibs.graphics.painter.Panel", ({
  f9: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Shade(id, shaderModule, vertexBufferLayout, valueBindGroupLayout, panelBindGroupLayout, pipelineLayout, isLayer, uniformIndices, panelIndices) {
  this.m5 = 0;
  this.iB = null;
  this.jF = null;
  this.jE = null;
  this.iA = null;
  this.m6 = null;
  this.E = null;
  this.au = null;
  this.m5 = id;
  this.iB = shaderModule;
  this.jF = vertexBufferLayout;
  this.jE = valueBindGroupLayout;
  this.iA = panelBindGroupLayout;
  this.m6 = pipelineLayout;
  this.E = uniformIndices;
  this.au = panelIndices;
}
$p = $c_Ltrivalibs_graphics_painter_Shade.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Shade;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Shade() {
}
$h_Ltrivalibs_graphics_painter_Shade.prototype = $p;
var $d_Ltrivalibs_graphics_painter_Shade = new $TypeData().i($c_Ltrivalibs_graphics_painter_Shade, "trivalibs.graphics.painter.Shade", ({
  fa: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_TextureViewBundle(perMip, sampling) {
  this.aO = null;
  this.m7 = null;
  this.aO = perMip;
  this.m7 = sampling;
}
$p = $c_Ltrivalibs_graphics_painter_TextureViewBundle.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_TextureViewBundle;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_TextureViewBundle() {
}
$h_Ltrivalibs_graphics_painter_TextureViewBundle.prototype = $p;
var $d_Ltrivalibs_graphics_painter_TextureViewBundle = new $TypeData().i($c_Ltrivalibs_graphics_painter_TextureViewBundle, "trivalibs.graphics.painter.TextureViewBundle", ({
  fc: 1
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
$p.p7 = (function() {
  return window.navigator.gpu;
});
$p.p6 = (function(canvas) {
  return canvas.getContext("webgpu");
});
var $d_Ltrivalibs_graphics_painter_WebGPU$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_WebGPU$, "trivalibs.graphics.painter.WebGPU$", ({
  fd: 1
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
  this.iC = 0;
  this.iC = 0;
}
$p = $c_Ltrivalibs_graphics_painter_panel$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_panel$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_panel$package$() {
}
$h_Ltrivalibs_graphics_painter_panel$package$.prototype = $p;
var $d_Ltrivalibs_graphics_painter_panel$package$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_panel$package$, "trivalibs.graphics.painter.panel$package$", ({
  fe: 1
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
  this.m8 = null;
  this.ai = null;
  this.jJ = 0.0;
  this.m9 = 0.0;
  this.m8 = cam;
  this.ai = in$1;
  this.jJ = sensitivity;
  this.m9 = speed;
}
$p = $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController() {
}
$h_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController.prototype = $p;
$p.g2 = (function(tpf) {
  var dist = ((this.m9 * tpf) / 1000.0);
  var forward = 0.0;
  if (((this.ai.av.b2("KeyW") || this.ai.av.b2("ArrowUp")) || (this.ai.jU.fW && (this.ai.av.nC() === 1)))) {
    forward = (forward + dist);
  }
  if ((((this.ai.av.b2("KeyS") || this.ai.av.b2("ArrowDown")) || this.ai.av.pi(2)) || (this.ai.av.nC() >= 2))) {
    forward = (forward - dist);
  }
  var left = 0.0;
  if ((this.ai.av.b2("KeyA") || this.ai.av.b2("ArrowLeft"))) {
    left = (left + dist);
  }
  if ((this.ai.av.b2("KeyD") || this.ai.av.b2("ArrowRight"))) {
    left = (left - dist);
  }
  var up = 0.0;
  if (this.ai.av.b2("Space")) {
    up = (up + dist);
  }
  if ((this.ai.av.b2("ShiftLeft") || this.ai.av.b2("ShiftRight"))) {
    up = (up - dist);
  }
  var drag = this.ai.jT.oC();
  var deltaH = (((+drag.P) * this.jJ) / 1000.0);
  var deltaV = (((+drag.as) * this.jJ) / 1000.0);
  this.m8.q1(forward, left, up, deltaH, deltaV);
});
var $d_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController = new $TypeData().i($c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController, "trivalibs.graphics.scene.BasicFirstPersonCameraController", ({
  ff: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_scene_PerspectiveCamera(fov, aspect, near, far, rotH, rotV, pos, proj) {
  this.bo = 0.0;
  this.fT = 0.0;
  this.gN = 0.0;
  this.gM = 0.0;
  this.aG = 0.0;
  this.bp = 0.0;
  this.aq = null;
  this.iD = null;
  this.bo = fov;
  this.fT = aspect;
  this.gN = near;
  this.gM = far;
  this.aG = rotH;
  this.bp = rotV;
  this.aq = pos;
  this.iD = proj;
}
$p = $c_Ltrivalibs_graphics_scene_PerspectiveCamera.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_PerspectiveCamera;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_PerspectiveCamera() {
}
$h_Ltrivalibs_graphics_scene_PerspectiveCamera.prototype = $p;
$p.kd = (function(fov, aspect, near, far, rotH, rotV, pos) {
  var needsProj = ((((fov !== this.bo) || (aspect !== this.fT)) || (near !== this.gN)) || (far !== this.gM));
  this.bo = fov;
  this.fT = aspect;
  this.gN = near;
  this.gM = far;
  if ((rotH !== this.aG)) {
    this.aG = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().ki(rotH);
  }
  if ((rotV !== this.bp)) {
    this.bp = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().kg(rotV);
  }
  this.aq = pos;
  if (needsProj) {
    this.iD = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($m_Ltrivalibs_graphics_math_cpu_Mat4$(), $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().kh(this.bo, this.fT), aspect, near, far);
  }
});
$p.q1 = (function(forward, left, up, deltaH, deltaV) {
  if ((deltaH !== 0.0)) {
    this.aG = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().ki((this.aG + deltaH));
  }
  if ((deltaV !== 0.0)) {
    this.bp = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().kg((this.bp + deltaV));
  }
  if ((up !== 0.0)) {
    this.aq = new $c_Ltrivalibs_graphics_math_cpu_Vec3(this.aq.B, (this.aq.G + up), this.aq.C);
  }
  if ((forward !== 0.0)) {
    var $x_5 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().a0();
    var $x_4 = this.aq;
    var $x_3 = $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$();
    var $x_2 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().a0();
    var p$proxy1 = this.aG;
    var $x_1 = Math.sin(p$proxy1);
    var p$proxy2 = this.aG;
    this.aq = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($x_5, $x_4, $x_3, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($x_2, new $c_Ltrivalibs_graphics_math_cpu_Vec3((-(+$x_1)), 0.0, (-(+Math.cos(p$proxy2)))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), forward));
  }
  if ((left !== 0.0)) {
    var $x_10 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().a0();
    var $x_9 = this.aq;
    var $x_8 = $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$();
    var $x_7 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().a0();
    var p$proxy3 = this.aG;
    var $x_6 = Math.cos(p$proxy3);
    var p$proxy4 = this.aG;
    this.aq = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($x_10, $x_9, $x_8, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($x_7, new $c_Ltrivalibs_graphics_math_cpu_Vec3((-(+$x_6)), 0.0, (+Math.sin(p$proxy4))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), left));
  }
});
$p.qO = (function() {
  return new $c_Ltrivalibs_graphics_scene_Transform(this.aq, $f_Ltrivalibs_graphics_math_cpu_QuatImmutableOps__quatMul__O__Ltrivalibs_graphics_math_Vec4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$(), $m_Ltrivalibs_graphics_math_cpu_Quat$().k6(this.aG), $m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$(), $m_Ltrivalibs_graphics_math_cpu_Quat$().p4(this.bp)), new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0));
});
$p.nP = (function() {
  var $x_1 = $m_Ltrivalibs_graphics_math_cpu_Mat4$().gU();
  var t = this.qO();
  return $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($x_1, $m_Ltrivalibs_graphics_math_cpu_Mat4$().k7(t.mc, t.ma, t.mb), $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
});
var $d_Ltrivalibs_graphics_scene_PerspectiveCamera = new $TypeData().i($c_Ltrivalibs_graphics_scene_PerspectiveCamera, "trivalibs.graphics.scene.PerspectiveCamera", ({
  fg: 1
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
$p.ki = (function(a) {
  var r = (a % 6.283185307179586);
  return ((r < 0.0) ? (r + 6.283185307179586) : r);
});
$p.kg = (function(a) {
  return ((a < (-1.5707963267948966)) ? (-1.5707963267948966) : ((a > 1.5707963267948966) ? 1.5707963267948966 : a));
});
$p.kh = (function(fov, aspect) {
  var p$proxy5 = (0.5 * fov);
  var p$proxy6 = ((+Math.tan(p$proxy5)) / (+Math.min(aspect, 1.0)));
  return (2.0 * (+Math.atan(p$proxy6)));
});
$p.oc = (function(fov, aspect, near, far, rotH, rotV, pos) {
  var proj = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($m_Ltrivalibs_graphics_math_cpu_Mat4$(), this.kh(fov, aspect), aspect, near, far);
  return new $c_Ltrivalibs_graphics_scene_PerspectiveCamera(fov, aspect, near, far, this.ki(rotH), this.kg(rotV), pos, proj);
});
var $d_Ltrivalibs_graphics_scene_PerspectiveCamera$ = new $TypeData().i($c_Ltrivalibs_graphics_scene_PerspectiveCamera$, "trivalibs.graphics.scene.PerspectiveCamera$", ({
  fh: 1
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
  this.mc = null;
  this.ma = null;
  this.mb = null;
  this.mc = translation;
  this.ma = rotation;
  this.mb = scale;
}
$p = $c_Ltrivalibs_graphics_scene_Transform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_Transform;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_Transform() {
}
$h_Ltrivalibs_graphics_scene_Transform.prototype = $p;
var $d_Ltrivalibs_graphics_scene_Transform = new $TypeData().i($c_Ltrivalibs_graphics_scene_Transform, "trivalibs.graphics.scene.Transform", ({
  fi: 1
}));
function $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($thiz, builtins) {
  var s = "";
  var i = 0;
  while ((i < (builtins.length | 0))) {
    var b = builtins[i];
    s = ((s + ((((", @builtin(" + b.bg) + ") ") + b.bv) + ": ")) + b.bh);
    i = ((1 + i) | 0);
  }
  return s;
}
function $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($thiz, structName, locNames, locTypes, builtins) {
  var array$1 = $m_sjs_js_ArrayOps$().nR($m_sjs_js_ArrayOps$().nQ(locNames, new $c_sjs_js_WrappedArray(locTypes)));
  var len = (array$1.length | 0);
  var res = new Array(len);
  var i = 0;
  while ((i < len)) {
    var $x_2 = i;
    var x0 = array$1[i];
    matchResult3: {
      var $x_1;
      if ((x0 !== null)) {
        var x11 = x0.P;
        if ((x11 !== null)) {
          var name = x11.P;
          var typ = x11.as;
          var $x_1 = (((((("  @location(" + (x0.as | 0)) + ") ") + name) + ": ") + typ) + ",");
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
        var name$1 = x0$1.bv;
        var builtin = x0$1.bg;
        var typ$1 = x0$1.bh;
        var $x_3 = (((((("  @builtin(" + builtin) + ") ") + name$1) + ": ") + typ$1) + ",");
        break matchResult4;
      }
      throw new $c_s_MatchError(x0$1);
    }
    res$1[$x_4] = $x_3;
    i$1 = ((1 + i$1) | 0);
  }
  var allFields = $m_sjs_js_ArrayOpsCommon$().b(res, res$1);
  return (((allFields.length | 0) === 0) ? "" : (((("struct " + structName) + " {\n") + allFields.join("\n")) + "\n}"));
}
function $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($thiz, groupIdx, names, types) {
  var array$1 = $m_sjs_js_ArrayOps$().nR($m_sjs_js_ArrayOps$().nQ(names, new $c_sjs_js_WrappedArray(types)));
  var len = (array$1.length | 0);
  var res = new Array(len);
  var i = 0;
  while ((i < len)) {
    var $x_3 = i;
    var x0 = array$1[i];
    matchResult5: {
      var $x_2;
      if ((x0 !== null)) {
        var x20 = x0.P;
        if ((x20 !== null)) {
          var name = x20.P;
          var typ = x20.as;
          var bindingIdx = (x0.as | 0);
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
  fl: 1
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
  this.R = null;
  this.R = target;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_AssignTarget.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_AssignTarget;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_AssignTarget() {
}
$h_Ltrivalibs_graphics_shader_dsl_AssignTarget.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_AssignTarget = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_AssignTarget, "trivalibs.graphics.shader.dsl.AssignTarget", ({
  fm: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_FnRegistry() {
  this.jK = null;
  this.Z = null;
  this.jK = ({});
  this.Z = [];
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FnRegistry() {
}
$h_Ltrivalibs_graphics_shader_dsl_FnRegistry.prototype = $p;
$p.nO = (function(d) {
  if ((!(!(!(!(!this.jK.hasOwnProperty(d.name))))))) {
    this.jK[d.name] = true;
    var array = d.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      this.nO(array[i]);
      i = ((1 + i) | 0);
    }
    this.Z.push(d);
  }
});
var $d_Ltrivalibs_graphics_shader_dsl_FnRegistry = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FnRegistry, "trivalibs.graphics.shader.dsl.FnRegistry", ({
  fn: 1
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
$p.nM = (function(d) {
  var r = this.l;
  if ((r !== null)) {
    r.nO(d);
  }
});
var $d_Ltrivalibs_graphics_shader_dsl_FnRegistry$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FnRegistry$, "trivalibs.graphics.shader.dsl.FnRegistry$", ({
  fo: 1
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
  this.a1 = null;
  this.aj = null;
  this.K = null;
  this.nX = null;
  this.gO = null;
  this.a1 = in$1;
  this.aj = out;
  this.K = bindings;
  this.nX = textures;
  this.gO = ($m_Ltrivalibs_graphics_math_gpu_expr$package$(), $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "in.position"));
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FragmentCtx() {
}
$h_Ltrivalibs_graphics_shader_dsl_FragmentCtx.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_FragmentCtx = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FragmentCtx, "trivalibs.graphics.shader.dsl.FragmentCtx", ({
  fp: 1
}));
function $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, data) {
  if ((!(!(!(!(!$thiz.jL.hasOwnProperty(data.name))))))) {
    var dict = $thiz.jL;
    var key = data.name;
    dict[key] = true;
    var array = data.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, array[i]);
      i = ((1 + i) | 0);
    }
    $thiz.jM.push(data.src);
  }
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_LayerProgram() {
  this.a2 = null;
  this.jM = null;
  this.jL = null;
  this.a2 = "";
  this.jM = [];
  this.jL = ({});
}
$p = $c_Ltrivalibs_graphics_shader_dsl_LayerProgram.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_LayerProgram;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_LayerProgram() {
}
$h_Ltrivalibs_graphics_shader_dsl_LayerProgram.prototype = $p;
$p.ak = (function() {
  return this.jM.join("\n\n");
});
var $d_Ltrivalibs_graphics_shader_dsl_LayerProgram = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_LayerProgram, "trivalibs.graphics.shader.dsl.LayerProgram", ({
  fq: 1
}));
function $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, data) {
  if ((!(!(!(!(!$thiz.jN.hasOwnProperty(data.name))))))) {
    var dict = $thiz.jN;
    var key = data.name;
    dict[key] = true;
    var array = data.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, array[i]);
      i = ((1 + i) | 0);
    }
    $thiz.jO.push(data.src);
  }
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_Program() {
  this.aU = null;
  this.aH = null;
  this.jO = null;
  this.jN = null;
  this.aU = "";
  this.aH = "";
  this.jO = [];
  this.jN = ({});
}
$p = $c_Ltrivalibs_graphics_shader_dsl_Program.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_Program;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_Program() {
}
$h_Ltrivalibs_graphics_shader_dsl_Program.prototype = $p;
$p.ak = (function() {
  return this.jO.join("\n\n");
});
var $d_Ltrivalibs_graphics_shader_dsl_Program = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_Program, "trivalibs.graphics.shader.dsl.Program", ({
  fr: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(in$1, out, bindings, textures) {
  this.ba = null;
  this.aV = null;
  this.ht = null;
  this.ba = in$1;
  this.aV = out;
  this.ht = bindings;
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
  fv: 1
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
$p.nZ = (function() {
  return [];
});
var $d_Ltrivalibs_graphics_shader_dsl_WgslFnData$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_WgslFnData$, "trivalibs.graphics.shader.dsl.WgslFnData$", ({
  fx: 1
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
$p.gX = (function(fn, ds) {
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
  ds.bs(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((d$3) => {
    if ((!(!(!(!(!seen.hasOwnProperty(d$3.name))))))) {
      seen[d$3.name] = true;
      merged.push(d$3);
    }
  })));
  return new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())(fn.name, fn.src, merged);
});
$p.k4 = (function(fn, a1, a2, a3, a4) {
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().nM(fn);
  return (((((((((fn.name + "(") + a1) + ", ") + a2) + ", ") + a3) + ", ") + a4) + ")");
});
$p.iI = (function(fn, a1, a2, a3, a4, a5) {
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().nM(fn);
  return (((((((((((fn.name + "(") + a1) + ", ") + a2) + ", ") + a3) + ", ") + a4) + ", ") + a5) + ")");
});
var $d_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$, "trivalibs.graphics.shader.dsl.fn$package$WgslFn$", ({
  fy: 1
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
$p.L = (function(device, bindGroupLayouts) {
  return device.createPipelineLayout(({
    "bindGroupLayouts": bindGroupLayouts
  }));
});
var $d_Ltrivalibs_graphics_shader_layouts$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_layouts$, "trivalibs.graphics.shader.layouts$", ({
  fz: 1
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
$p.os = (function(tex, s, uv, radius, res) {
  if ((res === null)) {
    var WgslFn$_this = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy1 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$().ou();
    var s$proxy1 = WgslFn$_this.k4(fn$proxy1, tex, s, uv, radius);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy1);
  } else {
    var WgslFn$_this$2 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy2 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$().ot();
    var s$proxy2 = WgslFn$_this$2.iI(fn$proxy2, tex, s, uv, res, radius);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy2);
  }
});
$p.qH = (function(tex, s, uv, radius, res) {
  if ((res === null)) {
    var WgslFn$_this = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy3 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$().qJ();
    var s$proxy3 = WgslFn$_this.k4(fn$proxy3, tex, s, uv, radius);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy3);
  } else {
    var WgslFn$_this$2 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy4 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$().qI();
    var s$proxy4 = WgslFn$_this$2.iI(fn$proxy4, tex, s, uv, res, radius);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy4);
  }
});
var $d_Ltrivalibs_graphics_shader_lib_blur_Blur$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_blur_Blur$, "trivalibs.graphics.shader.lib.blur.Blur$", ({
  fA: 1
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
  this.mi = null;
  this.mj = false;
  this.me = null;
  this.mh = false;
  this.mk = null;
  this.mn = false;
  this.mf = null;
  this.mg = false;
  this.ml = null;
  this.mm = false;
}
$p = $c_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$() {
}
$h_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$.prototype = $p;
$p.p5 = (function() {
  if ((!this.mj)) {
    this.mi = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("blur_gaussian_9", "fn blur_gaussian_9(tex: texture_2d<f32>, s: sampler, uv: vec2<f32>, res: vec2<f32>, dir: vec2<f32>) -> vec4<f32> {\n  let off1 = vec2<f32>(1.3846153846) * dir / res;\n    let off2 = vec2<f32>(3.2307692308) * dir / res;\n    var color = textureSample(tex, s, uv) * 0.2270270270;\n    color += textureSample(tex, s, uv + off1) * 0.3162162162;\n    color += textureSample(tex, s, uv - off1) * 0.3162162162;\n    color += textureSample(tex, s, uv + off2) * 0.0702702703;\n    color += textureSample(tex, s, uv - off2) * 0.0702702703;\n    return color;\n}");
    this.mj = true;
  }
  return this.mi;
});
$p.ot = (function() {
  if ((!this.mh)) {
    this.me = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("blur_box_2d", "fn blur_box_2d(tex: texture_2d<f32>, s: sampler, uv: vec2<f32>, res: vec2<f32>, radius: f32) -> vec4<f32> {\n  let o = vec2<f32>(radius) / res;\n    var color = textureSample(tex, s, uv - o);\n    color += textureSample(tex, s, uv + vec2<f32>(o.x, -o.y));\n    color += textureSample(tex, s, uv + vec2<f32>(-o.x, o.y));\n    color += textureSample(tex, s, uv + o);\n    return color * 0.25;\n}");
    this.mh = true;
  }
  return this.me;
});
$p.qI = (function() {
  if ((!this.mn)) {
    this.mk = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("blur_tent_2d", "fn blur_tent_2d(tex: texture_2d<f32>, s: sampler, uv: vec2<f32>, res: vec2<f32>, radius: f32) -> vec4<f32> {\n  let o = vec2<f32>(radius) / res;\n    var color = textureSample(tex, s, uv) * 0.25;\n    color += (textureSample(tex, s, uv + vec2<f32>(0.0, o.y)) + textureSample(tex, s, uv + vec2<f32>(0.0, -o.y)) + textureSample(tex, s, uv + vec2<f32>(o.x, 0.0)) + textureSample(tex, s, uv + vec2<f32>(-o.x, 0.0))) * 0.125;\n    color += (textureSample(tex, s, uv + o) + textureSample(tex, s, uv + vec2<f32>(-o.x, o.y)) + textureSample(tex, s, uv + vec2<f32>(o.x, -o.y)) + textureSample(tex, s, uv - o)) * 0.0625;\n    return color;\n}");
    this.mn = true;
  }
  return this.mk;
});
$p.ou = (function() {
  if ((!this.mg)) {
    this.mf = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("blur_box_2d_auto", "fn blur_box_2d_auto(tex: texture_2d<f32>, s: sampler, uv: vec2<f32>, radius: f32) -> vec4<f32> {\n  let o = vec2<f32>(radius) / vec2<f32>(textureDimensions(tex));\n    var color = textureSample(tex, s, uv - o);\n    color += textureSample(tex, s, uv + vec2<f32>(o.x, -o.y));\n    color += textureSample(tex, s, uv + vec2<f32>(-o.x, o.y));\n    color += textureSample(tex, s, uv + o);\n    return color * 0.25;\n}");
    this.mg = true;
  }
  return this.mf;
});
$p.qJ = (function() {
  if ((!this.mm)) {
    this.ml = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("blur_tent_2d_auto", "fn blur_tent_2d_auto(tex: texture_2d<f32>, s: sampler, uv: vec2<f32>, radius: f32) -> vec4<f32> {\n  let o = vec2<f32>(radius) / vec2<f32>(textureDimensions(tex));\n    var color = textureSample(tex, s, uv) * 0.25;\n    color += (textureSample(tex, s, uv + vec2<f32>(0.0, o.y)) + textureSample(tex, s, uv + vec2<f32>(0.0, -o.y)) + textureSample(tex, s, uv + vec2<f32>(o.x, 0.0)) + textureSample(tex, s, uv + vec2<f32>(-o.x, 0.0))) * 0.125;\n    color += (textureSample(tex, s, uv + o) + textureSample(tex, s, uv + vec2<f32>(-o.x, o.y)) + textureSample(tex, s, uv + vec2<f32>(o.x, -o.y)) + textureSample(tex, s, uv - o)) * 0.0625;\n    return color;\n}");
    this.mm = true;
  }
  return this.ml;
});
var $d_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$, "trivalibs.graphics.shader.lib.blur.Blur$wgsl$", ({
  fB: 1
}));
var $n_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$;
function $m_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$() {
  if ((!$n_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$)) {
    $n_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$ = new $c_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$();
  }
  return $n_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$() {
  this.mo = null;
  this.mp = false;
  this.mq = null;
  this.mr = false;
  this.ms = null;
  this.mt = false;
  this.mw = null;
  this.mx = false;
  this.mu = null;
  this.mv = false;
}
$p = $c_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$() {
}
$h_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$.prototype = $p;
$p.nz = (function() {
  if ((!this.mp)) {
    this.mo = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("noise_mod289_3", "fn noise_mod289_3(x: vec3<f32>) -> vec3<f32> {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}");
    this.mp = true;
  }
  return this.mo;
});
$p.q0 = (function() {
  if ((!this.mr)) {
    this.mq = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("noise_mod289_4", "fn noise_mod289_4(x: vec4<f32>) -> vec4<f32> {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}");
    this.mr = true;
  }
  return this.mq;
});
$p.nB = (function() {
  if ((!this.mt)) {
    this.ms = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$().gX(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("noise_permute_4", "fn noise_permute_4(x: vec4<f32>) -> vec4<f32> {\n  return noise_mod289_4(((x * 34.0) + 10.0) * x);\n}"), new $c_sjsr_WrappedVarArgs([this.q0()]));
    this.mt = true;
  }
  return this.ms;
});
$p.nJ = (function() {
  if ((!this.mx)) {
    this.mw = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("noise_taylor_inv_sqrt_4", "fn noise_taylor_inv_sqrt_4(r: vec4<f32>) -> vec4<f32> {\n  return 1.79284291400159 - 0.85373472095314 * r;\n}");
    this.mx = true;
  }
  return this.mw;
});
$p.qt = (function() {
  if ((!this.mv)) {
    this.mu = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$().gX(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("noise_seed_offsets", "fn noise_seed_offsets(seed: f32) -> vec2<f32> {\n  let h = hash1i(bitcast<u32>(seed));\n  return vec2<f32>(f32(h % 289u), f32((h / 289u) % 289u));\n}"), new $c_sjsr_WrappedVarArgs([$m_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$().pb()]));
    this.mv = true;
  }
  return this.mu;
});
var $d_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$, "trivalibs.graphics.shader.lib.noise.NoiseCommon$", ({
  fC: 1
}));
var $n_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$;
function $m_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$() {
  if ((!$n_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$)) {
    $n_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$ = new $c_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$();
  }
  return $n_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_lib_noise_Simplex$() {
}
$p = $c_Ltrivalibs_graphics_shader_lib_noise_Simplex$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_noise_Simplex$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_noise_Simplex$() {
}
$h_Ltrivalibs_graphics_shader_lib_noise_Simplex$.prototype = $p;
$p.na = (function(pos, octaves, lacunarity, gain, seed) {
  if ((seed === null)) {
    var WgslFn$_this = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy9 = $m_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$().oV();
    var a2$proxy6 = $m_Ltrivalibs_graphics_lib_args$package$().nK(octaves);
    var s$proxy9 = WgslFn$_this.k4(fn$proxy9, pos, a2$proxy6, lacunarity, gain);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy9);
  } else {
    var WgslFn$_this$2 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy10 = $m_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$().oW();
    var a2$proxy7 = $m_Ltrivalibs_graphics_lib_args$package$().nK(octaves);
    var s$proxy10 = WgslFn$_this$2.iI(fn$proxy10, pos, a2$proxy7, lacunarity, gain, seed);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy10);
  }
});
var $d_Ltrivalibs_graphics_shader_lib_noise_Simplex$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_noise_Simplex$, "trivalibs.graphics.shader.lib.noise.Simplex$", ({
  fD: 1
}));
var $n_Ltrivalibs_graphics_shader_lib_noise_Simplex$;
function $m_Ltrivalibs_graphics_shader_lib_noise_Simplex$() {
  if ((!$n_Ltrivalibs_graphics_shader_lib_noise_Simplex$)) {
    $n_Ltrivalibs_graphics_shader_lib_noise_Simplex$ = new $c_Ltrivalibs_graphics_shader_lib_noise_Simplex$();
  }
  return $n_Ltrivalibs_graphics_shader_lib_noise_Simplex$;
}
function $p_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$__body3__Z__T($thiz, seeded) {
  return (("  let C = vec2<f32>(1.0 / 6.0, 1.0 / 3.0);\n  let D = vec4<f32>(0.0, 0.5, 1.0, 2.0);\n  var i = floor(v + dot(v, C.yyy));\n  let x0 = v - i + dot(i, C.xxx);\n  let g = step(x0.yzx, x0.xyz);\n  let l = 1.0 - g;\n  let i1 = min(g.xyz, l.zxy);\n  let i2 = max(g.xyz, l.zxy);\n  let x1 = x0 - i1 + C.xxx;\n  let x2 = x0 - i2 + C.yyy;\n  let x3 = x0 - D.yyy;\n  i = noise_mod289_3(i);\n  var p = noise_permute_4(noise_permute_4(noise_permute_4(i.z + vec4<f32>(0.0, i1.z, i2.z, 1.0)) + i.y + vec4<f32>(0.0, i1.y, i2.y, 1.0)) + i.x + vec4<f32>(0.0, i1.x, i2.x, 1.0));\n" + $p_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$__seedStage__Z__T__T__T($thiz, seeded, "p", "noise_permute_4")) + "  let n_ = 0.142857142857;\n  let ns = n_ * D.wyz - D.xzx;\n  let j = p - 49.0 * floor(p * ns.z * ns.z);\n  let x_ = floor(j * ns.z);\n  let y_ = floor(j - 7.0 * x_);\n  let x = x_ * ns.x + ns.yyyy;\n  let y = y_ * ns.x + ns.yyyy;\n  let h = 1.0 - abs(x) - abs(y);\n  let b0 = vec4<f32>(x.xy, y.xy);\n  let b1 = vec4<f32>(x.zw, y.zw);\n  let s0 = floor(b0) * 2.0 + 1.0;\n  let s1 = floor(b1) * 2.0 + 1.0;\n  let sh = -step(h, vec4<f32>(0.0));\n  let a0 = b0.xzyw + s0.xzyw * sh.xxyy;\n  let a1 = b1.xzyw + s1.xzyw * sh.zzww;\n  var p0 = vec3<f32>(a0.xy, h.x);\n  var p1 = vec3<f32>(a0.zw, h.y);\n  var p2 = vec3<f32>(a1.xy, h.z);\n  var p3 = vec3<f32>(a1.zw, h.w);\n  let norm = noise_taylor_inv_sqrt_4(vec4<f32>(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));\n  p0 = p0 * norm.x;\n  p1 = p1 * norm.y;\n  p2 = p2 * norm.z;\n  p3 = p3 * norm.w;\n  var m = max(0.5 - vec4<f32>(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), vec4<f32>(0.0));\n  m = m * m;\n  return 105.0 * dot(m * m, vec4<f32>(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));");
}
function $p_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$__seedStage__Z__T__T__T($thiz, seeded, v, permute) {
  return (seeded ? (((((((("  " + v) + " = ") + permute) + "(") + permute) + "(") + v) + " + so.x) + so.y);\n") : "");
}
function $p_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$__fbmBody__T__Z__T($thiz, noise, seeded) {
  var sample = (seeded ? (noise + "(v * frequency, vec2<f32>((so.x + f32(i)) % 289.0, so.y))") : (noise + "(v * frequency)"));
  return ((((seeded ? "  let so = noise_seed_offsets(seed);\n" : "") + "  var sum = 0.0;\n  var amplitude = 1.0;\n  var total = 0.0;\n  var frequency = 1.0;\n  for (var i = 0; i < octaves; i += 1) {\n    sum += ") + sample) + " * amplitude;\n    total += amplitude;\n    amplitude *= gain;\n    frequency *= lacunarity;\n  }\n  return sum / total;");
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$() {
  this.mC = null;
  this.mF = false;
  this.mD = null;
  this.mE = false;
  this.my = null;
  this.mB = false;
  this.mz = null;
  this.mA = false;
}
$p = $c_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$() {
}
$h_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$.prototype = $p;
$p.q6 = (function() {
  if ((!this.mF)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy3 = $p_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$__body3__Z__T(this, false);
    var src = (("fn simplex_noise_3d(v: vec3<f32>) -> f32 {\n" + body$proxy3) + "\n}");
    this.mC = $x_1.gX(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("simplex_noise_3d", src), new $c_sjsr_WrappedVarArgs([$m_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$().nz(), $m_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$().nB(), $m_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$().nJ()]));
    this.mF = true;
  }
  return this.mC;
});
$p.q7 = (function() {
  if ((!this.mE)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy4 = $p_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$__body3__Z__T(this, true);
    var src = (("fn simplex_noise_3d_so(v: vec3<f32>, so: vec2<f32>) -> f32 {\n" + body$proxy4) + "\n}");
    this.mD = $x_1.gX(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("simplex_noise_3d_so", src), new $c_sjsr_WrappedVarArgs([$m_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$().nz(), $m_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$().nB(), $m_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$().nJ()]));
    this.mE = true;
  }
  return this.mD;
});
$p.oV = (function() {
  if ((!this.mB)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy9 = $p_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$__fbmBody__T__Z__T(this, "simplex_noise_3d", false);
    var src = (("fn simplex_fbm_3d(v: vec3<f32>, octaves: i32, lacunarity: f32, gain: f32) -> f32 {\n" + body$proxy9) + "\n}");
    this.my = $x_1.gX(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("simplex_fbm_3d", src), new $c_sjsr_WrappedVarArgs([this.q6()]));
    this.mB = true;
  }
  return this.my;
});
$p.oW = (function() {
  if ((!this.mA)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy10 = $p_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$__fbmBody__T__Z__T(this, "simplex_noise_3d_so", true);
    var src = (("fn simplex_fbm_3d_seeded(v: vec3<f32>, octaves: i32, lacunarity: f32, gain: f32, seed: f32) -> f32 {\n" + body$proxy10) + "\n}");
    this.mz = $x_1.gX(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("simplex_fbm_3d_seeded", src), new $c_sjsr_WrappedVarArgs([this.q7(), $m_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$().qt()]));
    this.mA = true;
  }
  return this.mz;
});
var $d_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$, "trivalibs.graphics.shader.lib.noise.Simplex$wgsl$", ({
  fE: 1
}));
var $n_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$;
function $m_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$() {
  if ((!$n_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$)) {
    $n_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$ = new $c_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$();
  }
  return $n_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$() {
  this.mG = null;
  this.mH = false;
}
$p = $c_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$() {
}
$h_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$.prototype = $p;
$p.pb = (function() {
  if ((!this.mH)) {
    this.mG = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("hash1i", "fn hash1i(x: u32) -> u32 {\n  var v = x;\n    v ^= v >> 16u;\n    v = v * 0x21f0aaadu;\n    v ^= v >> 15u;\n    v = v * 0xd35a2d97u;\n    return v ^ (v >> 15u);\n}");
    this.mH = true;
  }
  return this.mG;
});
var $d_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$, "trivalibs.graphics.shader.lib.random.Hash$wgsl$", ({
  fF: 1
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
  this.mI = null;
  this.jR = null;
  this.hv = 0;
  this.hw = 0.0;
  this.iE = 0.0;
  this.iF = 0.0;
  this.jS = false;
  this.mI = frame;
  this.jR = onFpsCallback;
  this.hv = 0;
  this.hw = 0.0;
  this.iE = 0.0;
  this.iF = (-1.0);
  this.jS = false;
}
$p = $c_Ltrivalibs_utils_animation_Animator.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_animation_Animator;
/** @constructor */
function $h_Ltrivalibs_utils_animation_Animator() {
}
$h_Ltrivalibs_utils_animation_Animator.prototype = $p;
$p.nE = (function(time) {
  this.hv = ((1 + this.hv) | 0);
  if ((this.hw === 0.0)) {
    this.hw = time;
    this.iE = time;
  }
  var fpsElapsed = (time - this.hw);
  if ((fpsElapsed >= 1000.0)) {
    var fps = ((1000.0 * this.hv) / fpsElapsed);
    if (((time - this.iE) >= 1000.0)) {
      var args$proxy1 = $m_sr_ScalaRunTime$().am(new ($d_sjs_js_Any.r().C)([(fps.toFixed(1) + " FPS")]));
      console.log(...$m_sjsr_Compat$().al(args$proxy1));
      this.iE = time;
      if ((this.jR !== null)) {
        (0, this.jR)(fps);
      }
    }
    this.hv = 0;
    this.hw = time;
  }
  var delta = ((this.iF < 0.0) ? 0.0 : (time - this.iF));
  this.iF = time;
  (0, this.mI)(delta);
  if (this.jS) {
    requestAnimationFrame($m_sjs_js_Any$().hG(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2) => {
      this.nE((+v1$2));
    }))));
  }
});
$p.qC = (function() {
  this.jS = true;
  return requestAnimationFrame($m_sjs_js_Any$().hG(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2) => {
    this.nE((+v1$2));
  }))));
});
var $d_Ltrivalibs_utils_animation_Animator = new $TypeData().i($c_Ltrivalibs_utils_animation_Animator, "trivalibs.utils.animation.Animator", ({
  fM: 1
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
$p.ob = (function(frame) {
  var animator = new $c_Ltrivalibs_utils_animation_Animator(frame, null);
  animator.qC();
  return animator;
});
var $d_Ltrivalibs_utils_animation_animate$package$ = new $TypeData().i($c_Ltrivalibs_utils_animation_animate$package$, "trivalibs.utils.animation.animate$package$", ({
  fN: 1
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
  this.av = null;
  this.jT = null;
  this.jU = null;
  this.av = input;
  this.jT = drag;
  this.jU = hold;
}
$p = $c_Ltrivalibs_utils_events_CanvasInput.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_CanvasInput;
/** @constructor */
function $h_Ltrivalibs_utils_events_CanvasInput() {
}
$h_Ltrivalibs_utils_events_CanvasInput.prototype = $p;
$p.g2 = (function(tpf) {
  this.jT.g2(tpf);
  this.jU.g2(tpf);
});
var $d_Ltrivalibs_utils_events_CanvasInput = new $TypeData().i($c_Ltrivalibs_utils_events_CanvasInput, "trivalibs.utils.events.CanvasInput", ({
  fO: 1
}));
function $ct_Ltrivalibs_utils_events_DragGesture__F0__D__D__($thiz, pointersOf, glideMinSpeed, glideHalfLife) {
  $thiz.mL = pointersOf;
  $thiz.mK = glideHalfLife;
  $thiz.gP = null;
  $thiz.jW = 0.0;
  $thiz.jX = 0.0;
  $thiz.fU = 0.0;
  $thiz.fV = 0.0;
  $thiz.aW = 0.0;
  $thiz.aX = 0.0;
  $thiz.jV = (glideHalfLife > 0.0);
  var s = (glideMinSpeed / 1000.0);
  $thiz.mJ = ((s < 0.001) ? 0.001 : s);
  return $thiz;
}
function $ct_Ltrivalibs_utils_events_DragGesture__Ltrivalibs_utils_events_InputState__D__D__($thiz, input, glideMinSpeed, glideHalfLife) {
  $ct_Ltrivalibs_utils_events_DragGesture__F0__D__D__($thiz, $ps_Ltrivalibs_utils_events_DragGesture__DragGesture$superArg$1__Ltrivalibs_utils_events_InputState__D__D__F0(input, glideMinSpeed, glideHalfLife), glideMinSpeed, glideHalfLife);
  return $thiz;
}
function $ps_Ltrivalibs_utils_events_DragGesture__DragGesture$superArg$1__Ltrivalibs_utils_events_InputState__D__D__F0(input, glideMinSpeed, glideHalfLife) {
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => input.aP));
}
/** @constructor */
function $c_Ltrivalibs_utils_events_DragGesture() {
  this.mL = null;
  this.mK = 0.0;
  this.gP = null;
  this.jW = 0.0;
  this.jX = 0.0;
  this.fU = 0.0;
  this.fV = 0.0;
  this.aW = 0.0;
  this.aX = 0.0;
  this.jV = false;
  this.mJ = 0.0;
}
$p = $c_Ltrivalibs_utils_events_DragGesture.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_DragGesture;
/** @constructor */
function $h_Ltrivalibs_utils_events_DragGesture() {
}
$h_Ltrivalibs_utils_events_DragGesture.prototype = $p;
$p.oC = (function() {
  return new $c_T2(this.fU, this.fV);
});
$p.g2 = (function(tpf) {
  var d = $m_Ltrivalibs_utils_events_gestures$package$().n8(this.mL.hE());
  if ((d === null)) {
    this.gP = null;
    if (this.jV) {
      var p$proxy1 = ((this.aW * this.aW) + (this.aX * this.aX));
      var $x_1 = ((+Math.sqrt(p$proxy1)) >= this.mJ);
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      var e$proxy1 = (tpf / this.mK);
      var f = (+Math.pow(0.5, e$proxy1));
      this.aW = (this.aW * f);
      this.aX = (this.aX * f);
      this.fU = (this.aW * tpf);
      this.fV = (this.aX * tpf);
    } else {
      this.aW = 0.0;
      this.aX = 0.0;
      this.fU = 0.0;
      this.fV = 0.0;
    }
  } else {
    if ((((this.gP !== null) && (d.bb !== null)) && ((+this.gP) === (+d.bb)))) {
      this.fU = (d.gR - this.jW);
      this.fV = (d.gS - this.jX);
      if ((this.jV && (tpf > 0.0))) {
        var e$proxy2 = (tpf / 40.0);
        var k = (1.0 - (+Math.pow(0.5, e$proxy2)));
        this.aW = (this.aW + (((this.fU / tpf) - this.aW) * k));
        this.aX = (this.aX + (((this.fV / tpf) - this.aX) * k));
      }
    } else {
      if ((this.gP === null)) {
        this.aW = 0.0;
        this.aX = 0.0;
      }
      this.fU = 0.0;
      this.fV = 0.0;
    }
    this.gP = d.bb;
    this.jW = d.gR;
    this.jX = d.gS;
  }
});
var $d_Ltrivalibs_utils_events_DragGesture = new $TypeData().i($c_Ltrivalibs_utils_events_DragGesture, "trivalibs.utils.events.DragGesture", ({
  fP: 1
}));
function $ct_Ltrivalibs_utils_events_HoldGesture__F0__D__D__($thiz, pointersOf, holdDelay, holdRadius) {
  $thiz.mO = pointersOf;
  $thiz.mM = holdDelay;
  $thiz.mN = holdRadius;
  $thiz.hy = null;
  $thiz.gQ = 0.0;
  $thiz.hz = false;
  $thiz.hx = false;
  $thiz.fW = false;
  return $thiz;
}
function $ct_Ltrivalibs_utils_events_HoldGesture__Ltrivalibs_utils_events_InputState__D__D__($thiz, input, holdDelay, holdRadius) {
  $ct_Ltrivalibs_utils_events_HoldGesture__F0__D__D__($thiz, $ps_Ltrivalibs_utils_events_HoldGesture__HoldGesture$superArg$1__Ltrivalibs_utils_events_InputState__D__D__F0(input, holdDelay, holdRadius), holdDelay, holdRadius);
  return $thiz;
}
function $ps_Ltrivalibs_utils_events_HoldGesture__HoldGesture$superArg$1__Ltrivalibs_utils_events_InputState__D__D__F0(input, holdDelay, holdRadius) {
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => input.aP));
}
/** @constructor */
function $c_Ltrivalibs_utils_events_HoldGesture() {
  this.mO = null;
  this.mM = 0.0;
  this.mN = 0.0;
  this.hy = null;
  this.gQ = 0.0;
  this.hz = false;
  this.hx = false;
  this.fW = false;
}
$p = $c_Ltrivalibs_utils_events_HoldGesture.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_HoldGesture;
/** @constructor */
function $h_Ltrivalibs_utils_events_HoldGesture() {
}
$h_Ltrivalibs_utils_events_HoldGesture.prototype = $p;
$p.g2 = (function(tpf) {
  var d = $m_Ltrivalibs_utils_events_gestures$package$().n8(this.mO.hE());
  if ((d === null)) {
    this.hy = null;
    this.gQ = 0.0;
    this.hz = false;
    this.hx = false;
    this.fW = false;
  } else {
    var pid = d.bb;
    if ((!(((this.hy !== null) && (pid !== null)) && ((+this.hy) === (+pid))))) {
      this.hy = pid;
      this.gQ = 0.0;
      this.hz = false;
      this.hx = false;
    }
    this.gQ = (this.gQ + tpf);
    if (this.hx) {
      this.fW = true;
    } else if ((this.gQ < this.mM)) {
      var dx = (d.gR - d.jZ);
      var dy = (d.gS - d.k0);
      var p$proxy2 = ((dx * dx) + (dy * dy));
      if (((+Math.sqrt(p$proxy2)) > this.mN)) {
        this.hz = true;
      }
      this.fW = false;
    } else if (this.hz) {
      this.fW = false;
    } else {
      this.hx = true;
      this.fW = true;
    }
  }
});
var $d_Ltrivalibs_utils_events_HoldGesture = new $TypeData().i($c_Ltrivalibs_utils_events_HoldGesture, "trivalibs.utils.events.HoldGesture", ({
  fQ: 1
}));
function $p_Ltrivalibs_utils_events_InputState__freeSlot__Ltrivalibs_utils_events_Pointer($thiz) {
  var i = 0;
  while ((i < ($thiz.hC.length | 0))) {
    if (($thiz.hC[i].bb === null)) {
      return $thiz.hC[i];
    }
    i = ((1 + i) | 0);
  }
  return null;
}
function $p_Ltrivalibs_utils_events_InputState__slotById__D__Ltrivalibs_utils_events_Pointer($thiz, id) {
  var i = 0;
  while ((i < ($thiz.aP.length | 0))) {
    var p = $thiz.aP[i];
    if (((p.bb !== null) && ((+p.bb) === id))) {
      return p;
    }
    i = ((1 + i) | 0);
  }
  return null;
}
function $p_Ltrivalibs_utils_events_InputState__removePointer__D__V($thiz, id) {
  var p = $p_Ltrivalibs_utils_events_InputState__slotById__D__Ltrivalibs_utils_events_Pointer($thiz, id);
  if ((p !== null)) {
    p.bb = null;
    var idx = $m_sjs_js_ArrayOps$().nf($thiz.aP, p, 0);
    if ((idx >= 0)) {
      $thiz.aP.splice(idx, 1);
    }
  }
}
function $p_Ltrivalibs_utils_events_InputState__install__V($thiz) {
  var i = 0;
  while ((i < $thiz.mT)) {
    $thiz.hC.push(new $c_Ltrivalibs_utils_events_Pointer());
    i = ((1 + i) | 0);
  }
  $m_Ltrivalibs_utils_events_keyboard$package$().pk($thiz.hA, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((k$3) => {
    if ((!(!(!(!(!$thiz.hB.hasOwnProperty(k$3))))))) {
      var value$proxy1 = (+Date.now());
      $thiz.hB[k$3] = value$proxy1;
      if ((!($thiz.aw === (void 0)))) {
        (0, $thiz.aw)();
      }
    }
  })), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((k$3$1) => {
    delete $thiz.hB[k$3$1];
    if ((!($thiz.aw === (void 0)))) {
      (0, $thiz.aw)();
    }
  })), false);
  $m_Ltrivalibs_utils_events_pointer$package$().qd($thiz.mQ, $m_Ltrivalibs_utils_events_pointer$package$().qe(), new $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078(((v1$2, v2$2, v3$2, v4$2, v5$2) => {
    var button = (v1$2 | 0);
    var id = (+v2$2);
    var x$1 = (+v3$2);
    var y = (+v4$2);
    if ($thiz.mS) {
      $thiz.hA.focus();
    }
    var key$proxy3 = ("" + button);
    var value$proxy2 = (+Date.now());
    $thiz.iG[key$proxy3] = value$proxy2;
    var slot = $p_Ltrivalibs_utils_events_InputState__freeSlot__Ltrivalibs_utils_events_Pointer($thiz);
    if ((slot !== null)) {
      slot.bb = id;
      slot.jY = button;
      (+Date.now());
      slot.jZ = x$1;
      slot.k0 = y;
      slot.gR = x$1;
      slot.gS = y;
      $thiz.aP.push(slot);
      ($thiz.aP.length | 0);
    }
    if ((!($thiz.aw === (void 0)))) {
      (0, $thiz.aw)();
    }
  })), new $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(((v1$2$1, v2$2$1, v3$2$1) => {
    var id$1 = (+v1$2$1);
    var x$2 = (+v2$2$1);
    var y$1 = (+v3$2$1);
    var p = $p_Ltrivalibs_utils_events_InputState__slotById__D__Ltrivalibs_utils_events_Pointer($thiz, id$1);
    if ((p !== null)) {
      p.gR = x$2;
      p.gS = y$1;
      if ((($thiz.aP.length | 0) > 0)) {
        $thiz.aP[0];
      }
    }
  })), new $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(((v1$2$2, v2$2$2, v3$2$2, v4$2$1) => {
    var button$1 = (v1$2$2 | 0);
    var id$2 = (+v2$2$2);
    delete $thiz.iG[("" + button$1)];
    $p_Ltrivalibs_utils_events_InputState__removePointer__D__V($thiz, id$2);
    if ((!($thiz.aw === (void 0)))) {
      (0, $thiz.aw)();
    }
  })), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2$3) => {
    $p_Ltrivalibs_utils_events_InputState__removePointer__D__V($thiz, (+v1$2$3));
    if ((!($thiz.aw === (void 0)))) {
      (0, $thiz.aw)();
    }
  })), $thiz.mU);
  $thiz.hA.addEventListener("focus", $thiz.mR);
  $thiz.hA.addEventListener("blur", $thiz.mP);
}
/** @constructor */
function $c_Ltrivalibs_utils_events_InputState(el, keyTarget, suppressContextMenu, onActivity, focusOnPointerDown, maxPointers) {
  this.mQ = null;
  this.hA = null;
  this.mU = false;
  this.aw = null;
  this.mS = false;
  this.mT = 0;
  this.hB = null;
  this.iG = null;
  this.hC = null;
  this.aP = null;
  this.mR = null;
  this.mP = null;
  this.mQ = el;
  this.hA = keyTarget;
  this.mU = suppressContextMenu;
  this.aw = onActivity;
  this.mS = focusOnPointerDown;
  this.mT = maxPointers;
  this.hB = ({});
  this.iG = ({});
  this.hC = [];
  this.aP = [];
  if ($m_sr_BoxesRunTime$().c(keyTarget, window)) {
    (!(!document.hasFocus()));
  } else {
    $m_sr_BoxesRunTime$().c(keyTarget, document.activeElement);
  }
  this.mR = ((_$1$3) => {
    if ((!(this.aw === (void 0)))) {
      (0, this.aw)();
    }
  });
  this.mP = ((_$2$3) => {
    if ((!(this.aw === (void 0)))) {
      (0, this.aw)();
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
$p.b2 = (function(key) {
  return (!(!(!(!this.hB.hasOwnProperty(key)))));
});
$p.pi = (function(button) {
  var key$proxy7 = ("" + button);
  return (!(!(!(!this.iG.hasOwnProperty(key$proxy7)))));
});
$p.nC = (function() {
  return (this.aP.length | 0);
});
var $d_Ltrivalibs_utils_events_InputState = new $TypeData().i($c_Ltrivalibs_utils_events_InputState, "trivalibs.utils.events.InputState", ({
  fR: 1
}));
/** @constructor */
function $c_Ltrivalibs_utils_events_Pointer() {
  this.bb = null;
  this.jY = 0;
  this.jZ = 0.0;
  this.k0 = 0.0;
  this.gR = 0.0;
  this.gS = 0.0;
  this.bb = null;
  this.jY = 0;
  this.jZ = 0.0;
  this.k0 = 0.0;
  this.gR = 0.0;
  this.gS = 0.0;
}
$p = $c_Ltrivalibs_utils_events_Pointer.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_Pointer;
/** @constructor */
function $h_Ltrivalibs_utils_events_Pointer() {
}
$h_Ltrivalibs_utils_events_Pointer.prototype = $p;
var $d_Ltrivalibs_utils_events_Pointer = new $TypeData().i($c_Ltrivalibs_utils_events_Pointer, "trivalibs.utils.events.Pointer", ({
  fS: 1
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
$p.n8 = (function(pointers) {
  var i = 0;
  while ((i < (pointers.length | 0))) {
    var p = pointers[i];
    if ((p.jY === 0)) {
      return p;
    }
    i = ((1 + i) | 0);
  }
  return null;
});
var $d_Ltrivalibs_utils_events_gestures$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_gestures$package$, "trivalibs.utils.events.gestures$package$", ({
  fT: 1
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
$p.pg = (function(canvas, initialFocus, holdDelay, holdRadius, suppressContextMenu, onActivity, dragGlideHalfLife, dragGlideMinSpeed) {
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
  fU: 1
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
$p.pk = (function(el, onDown, onUp, keepDefault) {
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
  fV: 1
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
$p.qd = (function(el, moveTarget, onDown, onMove, onUp, onCancel, suppressContextMenu) {
  var downFn = ((e$3) => {
    onDown.oe((e$3.button | 0), (+e$3.pointerId), (+e$3.clientX), (+e$3.clientY), (!(!e$3.isPrimary)));
  });
  var moveFn = ((e$3$1) => {
    onMove.k2((+e$3$1.pointerId), (+e$3$1.clientX), (+e$3$1.clientY));
  });
  var upFn = ((e$3$2) => {
    onUp.mZ((e$3$2.button | 0), (+e$3$2.pointerId), (+e$3$2.clientX), (+e$3$2.clientY));
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
$p.qe = (function() {
  return window;
});
var $d_Ltrivalibs_utils_events_pointer$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_pointer$package$, "trivalibs.utils.events.pointer$package$", ({
  fW: 1
}));
var $n_Ltrivalibs_utils_events_pointer$package$;
function $m_Ltrivalibs_utils_events_pointer$package$() {
  if ((!$n_Ltrivalibs_utils_events_pointer$package$)) {
    $n_Ltrivalibs_utils_events_pointer$package$ = new $c_Ltrivalibs_utils_events_pointer$package$();
  }
  return $n_Ltrivalibs_utils_events_pointer$package$;
}
/** @constructor */
function $c_Ltrivalibs_utils_random_random$package$() {
}
$p = $c_Ltrivalibs_utils_random_random$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_random_random$package$;
/** @constructor */
function $h_Ltrivalibs_utils_random_random$package$() {
}
$h_Ltrivalibs_utils_random_random$package$.prototype = $p;
$p.g0 = (function(min, max) {
  return (((+Math.random()) * (max - min)) + min);
});
var $d_Ltrivalibs_utils_random_random$package$ = new $TypeData().i($c_Ltrivalibs_utils_random_random$package$, "trivalibs.utils.random.random$package$", ({
  fZ: 1
}));
var $n_Ltrivalibs_utils_random_random$package$;
function $m_Ltrivalibs_utils_random_random$package$() {
  if ((!$n_Ltrivalibs_utils_random_random$package$)) {
    $n_Ltrivalibs_utils_random_random$package$ = new $c_Ltrivalibs_utils_random_random$package$();
  }
  return $n_Ltrivalibs_utils_random_random$package$;
}
/** @constructor */
function $c_jl_Character$() {
  this.iU = null;
  $n_jl_Character$ = this;
  this.iU = $constArrUDiffs_I(67, "1C]4m6m=c4]4]4]4]4]4]4]4]4]3g4]2m9]2m1Jm1m9s4g5mm6]3]4mm12>mEm1m6m1]3]=]DI]1<m24mIs4g2c4w9];]4]<]3m3m=m3mH]8]2m=mBHm3]4mK3{gggg2:g=m@]13]4E]");
}
$p = $c_jl_Character$.prototype = new $h_O();
$p.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
}
$h_jl_Character$.prototype = $p;
$p.qL = (function(codePoint) {
  if (((codePoint >>> 0) > 1114111)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return String.fromCodePoint(codePoint);
});
$p.oG = (function(codePoint, radix) {
  if ((codePoint < 256)) {
    var value = (((((codePoint - 48) | 0) >>> 0) <= 9) ? ((codePoint - 48) | 0) : (((((codePoint - 65) | 0) >>> 0) <= 25) ? ((codePoint - 55) | 0) : (((((codePoint - 97) | 0) >>> 0) <= 25) ? ((codePoint - 87) | 0) : (-1))));
  } else if (((((codePoint - 65313) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65303) | 0);
  } else if (((((codePoint - 65345) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65335) | 0);
  } else {
    var p = $m_ju_Arrays$().oo(this.iU, codePoint);
    var zeroCodePointIndex = ((p < 0) ? (((-2) - p) | 0) : p);
    if ((zeroCodePointIndex < 0)) {
      var value = (-1);
    } else {
      var v = ((codePoint - this.iU.a[zeroCodePointIndex]) | 0);
      var value = ((v > 9) ? (-1) : v);
    }
  }
  return ((value < radix) ? value : (-1));
});
var $d_jl_Character$ = new $TypeData().i($c_jl_Character$, "java.lang.Character$", ({
  b6: 1,
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
$p.hY = (function(s) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s) + "\""));
});
$p.pj = (function(s, radix, overflowBarrier) {
  if ((s === null)) {
    $m_jl_Integer$().hY(s);
  }
  var len = s.length;
  if ((len === 0)) {
    $m_jl_Integer$().hY(s);
  }
  var character = $m_jl_Character$();
  var firstChar = s.charCodeAt(0);
  var negative = (firstChar === 45);
  var sign = (negative ? (-1) : 0);
  var i = ((negative || (firstChar === 43)) | 0);
  if ((i >= len)) {
    $m_jl_Integer$().hY(s);
  }
  var java$lang$IntFloatBits$Int32Box$$value = 0;
  java$lang$IntFloatBits$Int32Box$$value = 0;
  while ((i !== len)) {
    var x = character.oG(s.charCodeAt(i), radix);
    if (((x < 0) || ((java$lang$IntFloatBits$Int32Box$$value >>> 0) > (overflowBarrier >>> 0)))) {
      $m_jl_Integer$().hY(s);
    }
    var x$2 = java$lang$IntFloatBits$Int32Box$$value;
    var x$3 = Math.imul(x$2, radix);
    var v = ((x$3 + x) | 0);
    java$lang$IntFloatBits$Int32Box$$value = v;
    i = ((1 + i) | 0);
  }
  if (((java$lang$IntFloatBits$Int32Box$$value >>> 0) > (((2147483647 - sign) | 0) >>> 0))) {
    $m_jl_Integer$().hY(s);
  }
  return (((java$lang$IntFloatBits$Int32Box$$value ^ sign) - sign) | 0);
});
var $d_jl_Integer$ = new $TypeData().i($c_jl_Integer$, "java.lang.Integer$", ({
  bb: 1,
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.u)));
}
function $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace) {
  $thiz.kq = s;
  if (writableStackTrace) {
    $thiz.oX();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.kq = null;
  }
  iK() {
    return this.kq;
  }
  oX() {
    var reference = ((this instanceof $c_sjs_js_JavaScriptException) ? this.aD : this);
    if ((Object.prototype.toString.call(reference) !== "[object Error]")) {
      if (((Error.captureStackTrace === (void 0)) || (!(!Object.isSealed(this))))) {
        new Error();
      } else {
        Error.captureStackTrace(this);
      }
    }
    return this;
  }
  o() {
    var className = $objectClassName(this);
    var message = this.iK();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  u() {
    return $c_O.prototype.u.call(this);
  }
  s(that) {
    return $c_O.prototype.s.call(this, that);
  }
  get "message"() {
    var m = this.iK();
    return ((m === null) ? "" : m);
  }
  get "name"() {
    return $objectClassName(this);
  }
  "toString"() {
    return this.o();
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
$p.o = (function() {
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
$p.qV = (function(xs) {
  if ((xs === null)) {
    return null;
  } else if ((xs.a.length === 0)) {
    var this$2 = $m_scm_ArraySeq$();
    $m_s_reflect_ManifestFactory$ObjectManifest$();
    return this$2.kC;
  } else {
    return new $c_scm_ArraySeq$ofRef(xs);
  }
});
function $p_sci_Range$__description__I__I__I__Z__T($thiz, start, end, step, isInclusive) {
  return ((((start + (isInclusive ? " to " : " until ")) + end) + " by ") + step);
}
/** @constructor */
function $c_sci_Range$() {
}
$p = $c_sci_Range$.prototype = new $h_O();
$p.constructor = $c_sci_Range$;
/** @constructor */
function $h_sci_Range$() {
}
$h_sci_Range$.prototype = $p;
$p.nG = (function(start, end, step, isInclusive) {
  throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ($p_sci_Range$__description__I__I__I__Z__T(this, start, end, step, isInclusive) + ": seqs cannot contain more than Int.MaxValue elements."));
});
$p.qr = (function(what) {
  return new $c_ju_NoSuchElementException((what + " on empty Range"));
});
var $d_sci_Range$ = new $TypeData().i($c_sci_Range$, "scala.collection.immutable.Range$", ({
  cp: 1,
  a: 1
}));
var $n_sci_Range$;
function $m_sci_Range$() {
  if ((!$n_sci_Range$)) {
    $n_sci_Range$ = new $c_sci_Range$();
  }
  return $n_sci_Range$;
}
/** @constructor */
function $c_sr_AbstractFunction0() {
}
$p = $c_sr_AbstractFunction0.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction0;
/** @constructor */
function $h_sr_AbstractFunction0() {
}
$h_sr_AbstractFunction0.prototype = $p;
$p.o = (function() {
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
$p.o = (function() {
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
$p.o = (function() {
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
$p.o = (function() {
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
$p.o = (function() {
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
$p.o = (function() {
  return "<function5>";
});
/** @constructor */
function $c_sr_DoubleRef(elem) {
  this.bl = 0.0;
  this.bl = elem;
}
$p = $c_sr_DoubleRef.prototype = new $h_O();
$p.constructor = $c_sr_DoubleRef;
/** @constructor */
function $h_sr_DoubleRef() {
}
$h_sr_DoubleRef.prototype = $p;
$p.o = (function() {
  return ("" + this.bl);
});
var $d_sr_DoubleRef = new $TypeData().i($c_sr_DoubleRef, "scala.runtime.DoubleRef", ({
  cV: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.fB = 0;
  this.kM = 0;
  this.nS = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.fB = $f_T__hashCode__I("Seq");
  this.kM = $f_T__hashCode__I("Map");
  $f_T__hashCode__I("Set");
  this.nS = this.qP($m_sci_Nil$(), this.kM);
}
$p = $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$p.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $p;
$p.kc = (function(xs) {
  return ($is_sc_IndexedSeq(xs) ? this.pd(xs, this.fB) : ((xs instanceof $c_sci_List) ? this.pm(xs, this.fB) : this.qa(xs, this.fB)));
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().i($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  df: 1,
  de: 1
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
  this.kY = null;
  this.kX = null;
  this.kZ = null;
  this.l0 = null;
  this.kY = p$1;
  this.kX = bloomP$1;
  this.kZ = resultP$1;
  this.l0 = resultP$1;
}
$p = $c_Lsketchlib_utils_bloom_Bloom$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_bloom_Bloom$$anon$1;
/** @constructor */
function $h_Lsketchlib_utils_bloom_Bloom$$anon$1() {
}
$h_Lsketchlib_utils_bloom_Bloom$$anon$1.prototype = $p;
$p.qc = (function() {
  var Painter_this = this.kY;
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.kX);
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.kZ);
});
var $d_Lsketchlib_utils_bloom_Bloom$$anon$1 = new $TypeData().i($c_Lsketchlib_utils_bloom_Bloom$$anon$1, "sketchlib.utils.bloom.Bloom$$anon$1", ({
  dn: 1,
  dl: 1
}));
function $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1__rebuildLayers__V($thiz) {
  if (($thiz.bI > 0.0)) {
    var pairs = $m_Lsketchlib_utils_mirror_GaussianMirrorReflection$().qB($thiz.l8, $thiz.j6, $thiz.h9, $thiz.j2, $thiz.j1);
    $m_Lsketchlib_utils_mirror_GaussianMirrorReflection$().qA($thiz.j4, $thiz.l2, $thiz.l4, $thiz.l3, $thiz.j6, $thiz.ic, $thiz.l9, $thiz.lc, $thiz.ld, $thiz.j7, $thiz.j8, $thiz.l7, pairs);
    var layers = [$thiz.l1];
    var i = 0;
    while ((i < (pairs << 1))) {
      layers.push($thiz.j4[i]);
      i = ((1 + i) | 0);
    }
    $thiz.h7.i1((void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), layers);
  }
}
function $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1__applySizing__V($thiz) {
  if (($thiz.bI > 0.0)) {
    var sigma = ((0.01 * $thiz.j2) * $thiz.h9);
    var p$proxy2 = ($thiz.j3 * sigma);
    var p$proxy3 = (+Math.ceil(p$proxy2));
    var other$proxy4 = (0.5 * $thiz.ha);
    var mx = (+Math.min(p$proxy3, other$proxy4));
    var $x_1 = $thiz.j3;
    var p$proxy4 = $thiz.j1;
    var p$proxy5 = (($x_1 * sigma) * (+Math.max(p$proxy4, 1.0)));
    var p$proxy6 = (+Math.ceil(p$proxy5));
    var other$proxy5 = (0.5 * $thiz.bI);
    var my = (+Math.min(p$proxy6, other$proxy5));
    var pw = $doubleToInt(($thiz.ha + (2.0 * mx)));
    var ph = $doubleToInt(($thiz.bI + (2.0 * my)));
    $thiz.ib.i1(pw, ph, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0));
    $thiz.h7.i1(pw, ph, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0));
    var BufferBinding_this = $thiz.j7;
    var value$proxy10 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(pw, ph);
    BufferBinding_this.A.w(BufferBinding_this.j, value$proxy10);
    var $x_4 = BufferBinding_this.z.queue;
    var $x_3 = BufferBinding_this.y;
    var s$proxy10 = BufferBinding_this.j;
    var $x_2 = s$proxy10.dv.buffer;
    $x_4.writeBuffer($x_3, 0.0, $x_2);
    var BufferBinding_this$3 = $thiz.j8;
    var value$proxy11 = $thiz.h9;
    BufferBinding_this$3.A.w(BufferBinding_this$3.j, value$proxy11);
    var $x_7 = BufferBinding_this$3.z.queue;
    var $x_6 = BufferBinding_this$3.y;
    var s$proxy11 = BufferBinding_this$3.j;
    var $x_5 = s$proxy11.dv.buffer;
    $x_7.writeBuffer($x_6, 0.0, $x_5);
    $thiz.i9 = ($thiz.ha / pw);
    $thiz.ia = ($thiz.bI / ph);
    var BufferBinding_this$5 = $thiz.la;
    var value$proxy12 = new $c_Ltrivalibs_graphics_math_cpu_Vec4($thiz.i9, $thiz.ia, (mx / pw), (my / ph));
    BufferBinding_this$5.A.w(BufferBinding_this$5.j, value$proxy12);
    var $x_10 = BufferBinding_this$5.z.queue;
    var $x_9 = BufferBinding_this$5.y;
    var s$proxy12 = BufferBinding_this$5.j;
    var $x_8 = s$proxy12.dv.buffer;
    $x_10.writeBuffer($x_9, 0.0, $x_8);
    $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1__rebuildLayers__V($thiz);
  }
}
function $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1__deriveRefH__V($thiz) {
  var $x_2 = $thiz.bI;
  var $x_1 = $thiz.i8.bo;
  var this$1 = $thiz.i8;
  $thiz.h9 = (($x_2 * $x_1) / $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().kh(this$1.bo, this$1.fT));
}
function $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1__default$proxy1$1__Ltrivalibs_graphics_math_cpu_Mat4($thiz) {
  var this$1 = $thiz.i8;
  return $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().gU(), this$1.iD, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), this$1.nP());
}
/** @constructor */
function $c_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1(mirrorPanel$1, cropPanel$1, blurPanel$1, camera$1, blurStrength$1, blurRatioVertical$1, bakeLayer$1, pairCache$2, overscan$1, uRes$3, uVisHeight$3, uCrop$1, resolutionScale$1, uBlurStrength$3, strengthScale$2, uRatioVertical$3, uStrengthOffset$3, reflMat$1, uVp$1, uInvVp$1, p$4, scaleFactor$3, blurShadeH$2, cachedScale$2, blurShadeV$2, sampler$3) {
  this.l1 = null;
  this.j4 = null;
  this.h7 = null;
  this.j3 = 0.0;
  this.ib = null;
  this.j7 = null;
  this.j8 = null;
  this.la = null;
  this.j5 = 0.0;
  this.h8 = null;
  this.l9 = null;
  this.l8 = 0.0;
  this.lc = null;
  this.ld = null;
  this.l5 = null;
  this.le = null;
  this.lb = null;
  this.ic = null;
  this.j6 = 0.0;
  this.l2 = null;
  this.l4 = null;
  this.l3 = null;
  this.l7 = null;
  this.l6 = null;
  this.i8 = null;
  this.j2 = 0.0;
  this.j1 = 0.0;
  this.ha = 0.0;
  this.bI = 0.0;
  this.h9 = 0.0;
  this.i9 = 0.0;
  this.ia = 0.0;
  this.l1 = bakeLayer$1;
  this.j4 = pairCache$2;
  this.h7 = blurPanel$1;
  this.j3 = overscan$1;
  this.ib = mirrorPanel$1;
  this.j7 = uRes$3;
  this.j8 = uVisHeight$3;
  this.la = uCrop$1;
  this.j5 = resolutionScale$1;
  this.h8 = cropPanel$1;
  this.l9 = uBlurStrength$3;
  this.l8 = strengthScale$2;
  this.lc = uRatioVertical$3;
  this.ld = uStrengthOffset$3;
  this.l5 = reflMat$1;
  this.le = uVp$1;
  this.lb = uInvVp$1;
  this.ic = p$4;
  this.j6 = scaleFactor$3;
  this.l2 = blurShadeH$2;
  this.l4 = cachedScale$2;
  this.l3 = blurShadeV$2;
  this.l7 = sampler$3;
  this.l6 = ((cropPanel$1 !== null) ? cropPanel$1 : blurPanel$1);
  this.i8 = camera$1;
  this.j2 = blurStrength$1;
  this.j1 = blurRatioVertical$1;
  this.ha = 0.0;
  this.bI = 0.0;
  this.h9 = 0.0;
  this.i9 = 1.0;
  this.ia = 1.0;
}
$p = $c_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1;
/** @constructor */
function $h_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1() {
}
$h_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1.prototype = $p;
$p.qn = (function(w, h) {
  var x = $doubleToInt((w * this.j5));
  var sw = ((x > 1) ? x : 1);
  var x$1 = $doubleToInt((h * this.j5));
  var sh = ((x$1 > 1) ? x$1 : 1);
  this.ha = sw;
  this.bI = sh;
  $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1__deriveRefH__V(this);
  if ((this.h8 !== null)) {
    this.h8.i1(sw, sh, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0));
  }
  $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1__applySizing__V(this);
});
$p.qb = (function(vp) {
  var cameraVP = ((vp === (void 0)) ? $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1__default$proxy1$1__Ltrivalibs_graphics_math_cpu_Mat4(this) : vp);
  var m$1 = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().gU(), new $c_Ltrivalibs_graphics_math_cpu_Mat4(this.i9, 0.0, 0.0, 0.0, 0.0, this.ia, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0), $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().gU(), cameraVP, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), this.l5));
  var BufferBinding_this = this.le;
  BufferBinding_this.A.w(BufferBinding_this.j, m$1);
  var $x_3 = BufferBinding_this.z.queue;
  var $x_2 = BufferBinding_this.y;
  var s$proxy16 = BufferBinding_this.j;
  var $x_1 = s$proxy16.dv.buffer;
  $x_3.writeBuffer($x_2, 0.0, $x_1);
  var BufferBinding_this$3 = this.lb;
  var value$proxy14 = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().gU(), m$1, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
  BufferBinding_this$3.A.w(BufferBinding_this$3.j, value$proxy14);
  var $x_6 = BufferBinding_this$3.z.queue;
  var $x_5 = BufferBinding_this$3.y;
  var s$proxy17 = BufferBinding_this$3.j;
  var $x_4 = s$proxy17.dv.buffer;
  $x_6.writeBuffer($x_5, 0.0, $x_4);
  if ((this.h8 !== null)) {
    var Painter_this = this.ic;
    var c$proxy1 = this.h8;
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.ib);
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.h7);
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, c$proxy1);
  } else {
    var Painter_this$2 = this.ic;
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this$2, this.ib);
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this$2, this.h7);
  }
});
var $d_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1 = new $TypeData().i($c_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1, "sketchlib.utils.mirror.GaussianMirrorReflection$$anon$1", ({
  dr: 1,
  dp: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT(uv) {
  this.ap = null;
  this.ap = uv;
}
$p = $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT() {
}
$h_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT.prototype = $p;
var $d_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT, "trivalibs.graphics.buffers.UniformLayout$given_UniformLayout_T", ({
  dw: 1,
  dv: 1
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
$p.qW = (function(ref, value) {
  var value$proxy1 = Math.fround(value);
  var offset$proxy3 = (ref.off | 0);
  ref.dv.setFloat32(offset$proxy3, value$proxy1, true);
});
$p.w = (function(ref, value) {
  this.qW(ref, (+value));
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Double_$times$colon$", ({
  dx: 1,
  E: 1
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
$p.w = (function(ref, value) {
  $f_Ltrivalibs_graphics_math_Mat4MutableOps__set__O__Ltrivalibs_graphics_math_Mat4Mutable__O__Ltrivalibs_graphics_math_Mat4Base__V($m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$().p9(), ref, $m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$(), value, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Mat4_Mat4Buffer$", ({
  dy: 1,
  E: 1
}));
var $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$;
function $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$() {
  if ((!$n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$)) {
    $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$ = new $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
  }
  return $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$() {
}
$p = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$() {
}
$h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$.prototype = $p;
$p.w = (function(ref, value) {
  $f_Ltrivalibs_graphics_math_Vec2MutableOps__set__O__Ltrivalibs_graphics_math_Vec2Mutable__O__Ltrivalibs_graphics_math_Vec2Base__V($m_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$().qR(), ref, $m_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$(), value, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$());
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Vec2_Vec2Buffer$", ({
  dz: 1,
  E: 1
}));
var $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$;
function $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$() {
  if ((!$n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$)) {
    $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$ = new $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$();
  }
  return $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$;
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
$p.qX = (function(ref, value) {
  var value$proxy2 = value.B;
  var value$proxy3 = Math.fround(value$proxy2);
  var offset$proxy5 = (ref.off | 0);
  ref.dv.setFloat32(offset$proxy5, value$proxy3, true);
  var value$proxy4 = value.G;
  var value$proxy5 = Math.fround(value$proxy4);
  var offset$proxy6 = ((4 + (ref.off | 0)) | 0);
  ref.dv.setFloat32(offset$proxy6, value$proxy5, true);
  var value$proxy6 = value.C;
  var value$proxy7 = Math.fround(value$proxy6);
  var offset$proxy7 = ((8 + (ref.off | 0)) | 0);
  ref.dv.setFloat32(offset$proxy7, value$proxy7, true);
});
$p.w = (function(ref, value) {
  this.qX(ref, value);
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Vec3_Vec4Buffer$", ({
  dA: 1,
  E: 1
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
$p.w = (function(ref, value) {
  $f_Ltrivalibs_graphics_math_Vec4MutableOps__set__O__Ltrivalibs_graphics_math_Vec4Mutable__O__Ltrivalibs_graphics_math_Vec4Base__V($m_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$().qS(), ref, $m_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$(), value, $m_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$());
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Vec4_Vec4Buffer$", ({
  dB: 1,
  E: 1
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
$p.g3 = (function(t) {
  return new $c_T2(t.il, t.im);
});
var $d_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$, "trivalibs.graphics.geometry.FieldWriter$vec2Writer$", ({
  dG: 1,
  aS: 1
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
$p.g3 = (function(t) {
  return new $c_T3(t.B, t.G, t.C);
});
var $d_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$, "trivalibs.graphics.geometry.FieldWriter$vec3Writer$", ({
  dH: 1,
  aS: 1
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
  this.jb = null;
  this.jb = x$1;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexLayout$named.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexLayout$named;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexLayout$named() {
}
$h_Ltrivalibs_graphics_geometry_VertexLayout$named.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_VertexLayout$named = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayout$named, "trivalibs.graphics.geometry.VertexLayout$named", ({
  dP: 1,
  dO: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons(x$1, x$2) {
  this.lo = null;
  this.lp = null;
  this.lo = x$1;
  this.lp = x$2;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons() {
}
$h_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons.prototype = $p;
$p.qQ = (function(t) {
  return $m_sr_Tuples$().n5(this.lo.g3(t.n(0)), this.lp.g3($m_sr_Tuples$().qF(t)));
});
$p.g3 = (function(t) {
  return this.qQ(t);
});
var $d_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons, "trivalibs.graphics.geometry.VertexLayoutHelper$cons", ({
  dQ: 1,
  aT: 1
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
$p.g3 = (function(t) {
  return $m_T$package$EmptyTuple$();
});
var $d_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$, "trivalibs.graphics.geometry.VertexLayoutHelper$nil$", ({
  dR: 1,
  aT: 1
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
  this.lr = 0;
  this.lr = idx$2;
}
$p = $c_Ltrivalibs_graphics_geometry_package$package$$anon$1.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_package$package$$anon$1;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_package$package$$anon$1() {
}
$h_Ltrivalibs_graphics_geometry_package$package$$anon$1.prototype = $p;
$p.bu = (function(t) {
  return t.n(this.lr);
});
var $d_Ltrivalibs_graphics_geometry_package$package$$anon$1 = new $TypeData().i($c_Ltrivalibs_graphics_geometry_package$package$$anon$1, "trivalibs.graphics.geometry.package$package$$anon$1", ({
  dW: 1,
  dM: 1
}));
function $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D($thiz, v, other) {
  return (((v.B * other.B) + (v.G * other.G)) + (v.C * other.C));
}
function $f_Ltrivalibs_graphics_math_Vec3Base__length__O__D($thiz, v) {
  var p$proxy1 = $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D($thiz, v, v);
  return (+Math.sqrt(p$proxy1));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat4$() {
  this.ls = null;
  this.lt = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat4$() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat4$.prototype = $p;
$p.gU = (function() {
  if ((!this.lt)) {
    this.ls = $m_Ltrivalibs_graphics_math_cpu_Mat4$();
    this.lt = true;
  }
  return this.ls;
});
$p.k7 = (function(t, r, s) {
  var x = r.ii;
  var y = r.ij;
  var z = r.ik;
  var w = r.ih;
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
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4(((1.0 - (yy + zz)) * s.B), ((xy + wz) * s.B), ((xz - wy) * s.B), 0.0, ((xy - wz) * s.G), ((1.0 - (xx + zz)) * s.G), ((yz + wx) * s.G), 0.0, ((xz + wy) * s.C), ((yz - wx) * s.C), ((1.0 - (xx + yy)) * s.C), 0.0, t.B, t.G, t.C, 1.0);
});
var $d_Ltrivalibs_graphics_math_cpu_Mat4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4$, "trivalibs.graphics.math.cpu.Mat4$", ({
  ed: 1,
  e0: 1
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
  eh: 1,
  ej: 1
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
  this.lu = null;
  this.lv = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec3$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec3$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec3$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec3$.prototype = $p;
$p.a0 = (function() {
  if ((!this.lv)) {
    this.lu = $m_Ltrivalibs_graphics_math_cpu_Vec3$();
    this.lv = true;
  }
  return this.lu;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3$, "trivalibs.graphics.math.cpu.Vec3$", ({
  en: 1,
  e6: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Vec3$;
function $m_Ltrivalibs_graphics_math_cpu_Vec3$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Vec3$)) {
    $n_Ltrivalibs_graphics_math_cpu_Vec3$ = new $c_Ltrivalibs_graphics_math_cpu_Vec3$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Vec3$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec4$() {
  this.lw = null;
  this.lx = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec4$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec4$.prototype = $p;
$p.p8 = (function() {
  if ((!this.lx)) {
    this.lw = new $c_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3();
    this.lx = true;
  }
  return this.lw;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4$, "trivalibs.graphics.math.cpu.Vec4$", ({
  eq: 1,
  e9: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Vec4$;
function $m_Ltrivalibs_graphics_math_cpu_Vec4$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Vec4$)) {
    $n_Ltrivalibs_graphics_math_cpu_Vec4$ = new $c_Ltrivalibs_graphics_math_cpu_Vec4$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Vec4$;
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
  eu: 1,
  e2: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$6() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$6.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$6;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$6() {
}
$h_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$6.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$6 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$6, "trivalibs.graphics.math.cpu.vec2$package$Vec2Buffer$$anon$6", ({
  ex: 1,
  e4: 1
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
  eA: 1,
  eb: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$13(f$2) {
  this.lE = null;
  this.lE = f$2;
}
$p = $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$13.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$13;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$13() {
}
$h_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$13.prototype = $p;
$p.b5 = (function(s) {
  return this.lE.h(s);
});
var $d_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$13 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$13, "trivalibs.graphics.math.gpu.LeftScalar$$anon$13", ({
  eE: 1,
  eC: 1
}));
function $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__($thiz, name) {
  $thiz.fL = name;
  $ct_Ltrivalibs_graphics_math_gpu_Expr__T__($thiz, name);
  return $thiz;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_LetExpr() {
  this.f = null;
  this.fL = null;
}
$p = $c_Ltrivalibs_graphics_math_gpu_LetExpr.prototype = new $h_Ltrivalibs_graphics_math_gpu_Expr();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_LetExpr;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_LetExpr() {
}
$h_Ltrivalibs_graphics_math_gpu_LetExpr.prototype = $p;
$p.W = (function(value) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return (((("  let " + this.fL) + " = ") + value.f) + ";");
});
var $d_Ltrivalibs_graphics_math_gpu_LetExpr = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_LetExpr, "trivalibs.graphics.math.gpu.LetExpr", ({
  aZ: 1,
  a0: 1
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
  eL: 1,
  W: 1
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
$p.pV = (function(m, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + m.f) + " * ") + other.f) + ")"));
});
$p.gW = (function(m, x$2, v, x$4, x$5) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + m.f) + " * ") + v.f) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Mat4ImmutableOpsG_FloatExpr_Mat4Expr$", ({
  eM: 1,
  e1: 1
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
$p.fX = (function(a) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("abs(" + a.f) + ")"));
});
$p.nc = (function(a) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("fract(" + a.f) + ")"));
});
$p.iN = (function(a, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("min(" + a.f) + ", ") + other.f) + ")"));
});
$p.pW = (function(a, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("max(" + a.f) + ", ") + other.f) + ")"));
});
$p.oy = (function(a) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("saturate(" + a.f) + ")"));
});
$p.p0 = (function(a) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(" + a.f) + " * 0.5 + 0.5)"));
});
$p.ny = (function(a, b, t) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("mix(" + a.f) + ", ") + b.f) + ", ") + t.f) + ")"));
});
$p.bf = (function(a, edge0, edge1) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("smoothstep(" + edge0.f) + ", ") + edge1.f) + ", ") + a.f) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$, "trivalibs.graphics.math.gpu.float_expr$package$given_NumExt_FloatExpr$", ({
  eN: 1,
  fX: 1
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
$p.az = (function(a, b) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.f) + " + ") + b.f) + ")"));
});
$p.bO = (function(a, b) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.f) + " - ") + b.f) + ")"));
});
$p.bc = (function(a, b) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.f) + " * ") + b.f) + ")"));
});
$p.nY = (function(a, b) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.f) + " / ") + b.f) + ")"));
});
$p.nN = (function(a) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(-" + a.f) + ")"));
});
$p.o1 = (function(a, b) {
  return this.az(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(b));
});
$p.mW = (function(a, b) {
  return this.bO(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(b));
});
$p.S = (function(a, b) {
  return this.bc(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(b));
});
$p.mV = (function(a, b) {
  return this.nY(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(b));
});
$p.oU = (function(a, v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.f) + " * ") + v.f) + ")"));
});
$p.o3 = (function(a, v) {
  return this.oU(a, $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().i4(v));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$, "trivalibs.graphics.math.gpu.float_expr$package$given_NumOps_FloatExpr$", ({
  eO: 1,
  fY: 1
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
$p.ar = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".x"));
});
$p.a3 = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".y"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec2BaseG_FloatExpr_Vec2Expr$", ({
  eP: 1,
  X: 1
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
$p.o9 = (function(v, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.f) + " + ") + other.f) + ")"));
});
$p.q3 = (function(v, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.f) + " * ") + other.f) + ")"));
});
$p.oI = (function(v, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.f) + " / ") + other.f) + ")"));
});
$p.oZ = (function(v, x$2) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(" + v.f) + " * 2.0 - 1.0)"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec2ImmutableOpsG_FloatExpr_Vec2Expr$", ({
  eQ: 1,
  e3: 1
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
$p.ar = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".x"));
});
$p.a3 = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".y"));
});
$p.h0 = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".z"));
});
$p.oL = (function(v, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("dot(" + v.f) + ", ") + other.f) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec3BaseG_FloatExpr_Vec3Expr$", ({
  eR: 1,
  aY: 1
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
$p.mY = (function(v, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.f) + " + ") + other.f) + ")"));
});
$p.nI = (function(v, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.f) + " - ") + other.f) + ")"));
});
$p.b3 = (function(v, x$2, scalar) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.f) + " * ") + scalar.f) + ")"));
});
$p.mX = (function(v, x$2, scalar) {
  return this.b3(v, x$2, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(scalar));
});
$p.oH = (function(v, x$2, scalar) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.f) + " / ") + scalar.f) + ")"));
});
$p.oB = (function(v, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("cross(" + v.f) + ", ") + other.f) + ")"));
});
$p.q8 = (function(v, x$2) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("normalize(" + v.f) + ")"));
});
$p.oT = (function(v, x$2) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("exp(" + v.f) + ")"));
});
$p.pY = (function(v, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("min(" + v.f) + ", ") + other.f) + ")"));
});
$p.pZ = (function(v, x$2, b, t) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("mix(" + v.f) + ", ") + b.f) + ", ") + t.f) + ")"));
});
$p.pl = (function(v, x$2, b, t) {
  return this.pZ(v, x$2, $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().i4(b), t);
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec3ImmutableOpsG_FloatExpr_Vec3Expr$", ({
  eS: 1,
  e7: 1
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
$p.ar = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".x"));
});
$p.a3 = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".y"));
});
$p.h0 = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".z"));
});
$p.iS = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".w"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec4BaseG_FloatExpr_Vec4Expr$", ({
  eT: 1,
  K: 1
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
$p.oa = (function(v, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.f) + " + ") + other.f) + ")"));
});
$p.q2 = (function(v, x$2, scalar) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.f) + " * ") + scalar.f) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec4ImmutableOpsG_FloatExpr_Vec4Expr$", ({
  eU: 1,
  ea: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Instance(shade, painter) {
  this.jy = null;
  this.lL = null;
  this.aM = null;
  this.ip = null;
  this.jy = shade;
  this.lL = painter;
  this.aM = [];
  this.ip = [];
}
$p = $c_Ltrivalibs_graphics_painter_Instance.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Instance;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Instance() {
}
$h_Ltrivalibs_graphics_painter_Instance.prototype = $p;
var $d_Ltrivalibs_graphics_painter_Instance = new $TypeData().i($c_Ltrivalibs_graphics_painter_Instance, "trivalibs.graphics.painter.Instance", ({
  f3: 1,
  a1: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Layer(painter, shade) {
  this.bM = null;
  this.v = null;
  this.jz = null;
  this.ir = 0;
  this.hh = 0;
  this.i = null;
  this.Q = null;
  this.J = null;
  this.iq = null;
  this.bM = painter;
  this.v = shade;
  this.jz = null;
  this.ir = (-1);
  this.hh = (-1);
  this.i = [];
  this.Q = [];
  this.J = null;
  this.iq = new $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter);
}
$p = $c_Ltrivalibs_graphics_painter_Layer.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Layer;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Layer() {
}
$h_Ltrivalibs_graphics_painter_Layer.prototype = $p;
$p.n3 = (function() {
  return ((this.v.iA !== null) && (((this.Q.length | 0) === 0) || (this.Q[0] === null)));
});
$p.qw = (function(blendState, mipSource, mipTarget) {
  if ((blendState !== (void 0))) {
    this.jz = blendState;
  }
  if ((mipSource !== (void 0))) {
    var v = (mipSource | 0);
    this.ir = v;
  }
  if ((mipTarget !== (void 0))) {
    var v$1 = (mipTarget | 0);
    this.hh = v$1;
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Layer = new $TypeData().i($c_Ltrivalibs_graphics_painter_Layer, "trivalibs.graphics.painter.Layer", ({
  f5: 1,
  a1: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Shape(painter, form, shade) {
  this.hr = null;
  this.Y = null;
  this.jH = null;
  this.jG = null;
  this.U = null;
  this.a9 = null;
  this.jI = null;
  this.hr = form;
  this.Y = shade;
  this.jH = "none";
  this.jG = null;
  this.U = [];
  this.a9 = [];
  this.jI = new $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter);
}
$p = $c_Ltrivalibs_graphics_painter_Shape.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Shape;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Shape() {
}
$h_Ltrivalibs_graphics_painter_Shape.prototype = $p;
$p.qx = (function(cullMode, blendState) {
  if ((cullMode !== (void 0))) {
    this.jH = cullMode;
  }
  if ((blendState !== (void 0))) {
    this.jG = blendState;
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Shape = new $TypeData().i($c_Ltrivalibs_graphics_painter_Shape, "trivalibs.graphics.painter.Shape", ({
  fb: 1,
  a1: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform(inner) {
  this.M = null;
  this.M = inner;
}
$p = $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform() {
}
$h_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform.prototype = $p;
$p.t = (function() {
  return this.M.t();
});
var $d_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform = new $TypeData().i($c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform, "trivalibs.graphics.shader.FragmentUniform$given_WGSLType_FragmentUniform", ({
  fj: 1,
  t: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform(inner) {
  this.bq = null;
  this.bq = inner;
}
$p = $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform() {
}
$h_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform.prototype = $p;
$p.t = (function() {
  return this.bq.t();
});
var $d_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform = new $TypeData().i($c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform, "trivalibs.graphics.shader.VertexUniform$given_WGSLType_VertexUniform", ({
  fk: 1,
  t: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor(prefix) {
  this.jP = null;
  this.jP = prefix;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor.prototype = $p;
$p.X = (function(name) {
  return new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget(((this.jP === "") ? name : ((this.jP + ".") + name)));
});
var $d_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor, "trivalibs.graphics.shader.dsl.TypedAssignAccessor", ({
  fs: 1,
  F: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(prefix) {
  this.jQ = null;
  this.jQ = prefix;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor.prototype = $p;
$p.k = (function(name) {
  return ((this.jQ === "") ? $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), name) : $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), ((this.jQ + ".") + name)));
});
var $d_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor, "trivalibs.graphics.shader.dsl.TypedExprAccessor", ({
  ft: 1,
  F: 1
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
  fu: 1,
  F: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_VertexOut(prefix) {
  this.md = null;
  this.hu = null;
  this.md = prefix;
  this.hu = new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget((prefix + ".position"));
}
$p = $c_Ltrivalibs_graphics_shader_dsl_VertexOut.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_VertexOut;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_VertexOut() {
}
$h_Ltrivalibs_graphics_shader_dsl_VertexOut.prototype = $p;
$p.X = (function(name) {
  return new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget(((this.md + ".") + name));
});
var $d_Ltrivalibs_graphics_shader_dsl_VertexOut = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_VertexOut, "trivalibs.graphics.shader.dsl.VertexOut", ({
  fw: 1,
  F: 1
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
$p.t = (function() {
  return "f32";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$, "trivalibs.graphics.shader.types$package$given_WGSLType_Float$", ({
  fG: 1,
  t: 1
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
$p.t = (function() {
  return "mat4x4<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$, "trivalibs.graphics.shader.types$package$given_WGSLType_Mat4$", ({
  fH: 1,
  t: 1
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
$p.t = (function() {
  return "sampler";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$, "trivalibs.graphics.shader.types$package$given_WGSLType_Sampler$", ({
  fI: 1,
  t: 1
}));
var $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$;
function $m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$() {
  if ((!$n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$)) {
    $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$ = new $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$();
  }
  return $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$() {
}
$p = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$() {
}
$h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$.prototype = $p;
$p.t = (function() {
  return "vec2<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$, "trivalibs.graphics.shader.types$package$given_WGSLType_Vec2$", ({
  fJ: 1,
  t: 1
}));
var $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$;
function $m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$() {
  if ((!$n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$)) {
    $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$ = new $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$();
  }
  return $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$;
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
$p.t = (function() {
  return "vec3<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$, "trivalibs.graphics.shader.types$package$given_WGSLType_Vec3$", ({
  fK: 1,
  t: 1
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
$p.t = (function() {
  return "vec4<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$, "trivalibs.graphics.shader.types$package$given_WGSLType_Vec4$", ({
  fL: 1,
  t: 1
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
  this.iT = $data;
}
$p = $c_jl_Class.prototype = new $h_O();
$p.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
}
$h_jl_Class.prototype = $p;
$p.o = (function() {
  return ((this.iT.Y ? "interface " : (this.iT.X ? "" : "class ")) + this.iT.N);
});
var $d_jl_Class = new $TypeData().i($c_jl_Class, "java.lang.Class", ({
  b7: 1,
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
  bz: 1,
  bw: 1,
  bx: 1
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
    return $thiz.g5;
  } else {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 0)"));
  }
}
function $f_s_Product10__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.g6;
      break;
    }
    case 1: {
      return $thiz.bT;
      break;
    }
    case 2: {
      return $thiz.bU;
      break;
    }
    case 3: {
      return $thiz.bV;
      break;
    }
    case 4: {
      return $thiz.bW;
      break;
    }
    case 5: {
      return $thiz.bX;
      break;
    }
    case 6: {
      return $thiz.bY;
      break;
    }
    case 7: {
      return $thiz.bZ;
      break;
    }
    case 8: {
      return $thiz.c0;
      break;
    }
    case 9: {
      return $thiz.bS;
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
      return $thiz.g7;
      break;
    }
    case 1: {
      return $thiz.c3;
      break;
    }
    case 2: {
      return $thiz.c4;
      break;
    }
    case 3: {
      return $thiz.c5;
      break;
    }
    case 4: {
      return $thiz.c6;
      break;
    }
    case 5: {
      return $thiz.c7;
      break;
    }
    case 6: {
      return $thiz.c8;
      break;
    }
    case 7: {
      return $thiz.c9;
      break;
    }
    case 8: {
      return $thiz.ca;
      break;
    }
    case 9: {
      return $thiz.c1;
      break;
    }
    case 10: {
      return $thiz.c2;
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
      return $thiz.g8;
      break;
    }
    case 1: {
      return $thiz.ce;
      break;
    }
    case 2: {
      return $thiz.cf;
      break;
    }
    case 3: {
      return $thiz.cg;
      break;
    }
    case 4: {
      return $thiz.ch;
      break;
    }
    case 5: {
      return $thiz.ci;
      break;
    }
    case 6: {
      return $thiz.cj;
      break;
    }
    case 7: {
      return $thiz.ck;
      break;
    }
    case 8: {
      return $thiz.cl;
      break;
    }
    case 9: {
      return $thiz.cb;
      break;
    }
    case 10: {
      return $thiz.cc;
      break;
    }
    case 11: {
      return $thiz.cd;
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
      return $thiz.g9;
      break;
    }
    case 1: {
      return $thiz.cq;
      break;
    }
    case 2: {
      return $thiz.cr;
      break;
    }
    case 3: {
      return $thiz.cs;
      break;
    }
    case 4: {
      return $thiz.ct;
      break;
    }
    case 5: {
      return $thiz.cu;
      break;
    }
    case 6: {
      return $thiz.cv;
      break;
    }
    case 7: {
      return $thiz.cw;
      break;
    }
    case 8: {
      return $thiz.cx;
      break;
    }
    case 9: {
      return $thiz.cm;
      break;
    }
    case 10: {
      return $thiz.cn;
      break;
    }
    case 11: {
      return $thiz.co;
      break;
    }
    case 12: {
      return $thiz.cp;
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
      return $thiz.ga;
      break;
    }
    case 1: {
      return $thiz.cD;
      break;
    }
    case 2: {
      return $thiz.cE;
      break;
    }
    case 3: {
      return $thiz.cF;
      break;
    }
    case 4: {
      return $thiz.cG;
      break;
    }
    case 5: {
      return $thiz.cH;
      break;
    }
    case 6: {
      return $thiz.cI;
      break;
    }
    case 7: {
      return $thiz.cJ;
      break;
    }
    case 8: {
      return $thiz.cK;
      break;
    }
    case 9: {
      return $thiz.cy;
      break;
    }
    case 10: {
      return $thiz.cz;
      break;
    }
    case 11: {
      return $thiz.cA;
      break;
    }
    case 12: {
      return $thiz.cB;
      break;
    }
    case 13: {
      return $thiz.cC;
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
      return $thiz.gb;
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
      return $thiz.cL;
      break;
    }
    case 10: {
      return $thiz.cM;
      break;
    }
    case 11: {
      return $thiz.cN;
      break;
    }
    case 12: {
      return $thiz.cO;
      break;
    }
    case 13: {
      return $thiz.cP;
      break;
    }
    case 14: {
      return $thiz.cQ;
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
      return $thiz.gc;
      break;
    }
    case 1: {
      return $thiz.d6;
      break;
    }
    case 2: {
      return $thiz.d7;
      break;
    }
    case 3: {
      return $thiz.d8;
      break;
    }
    case 4: {
      return $thiz.d9;
      break;
    }
    case 5: {
      return $thiz.da;
      break;
    }
    case 6: {
      return $thiz.db;
      break;
    }
    case 7: {
      return $thiz.dc;
      break;
    }
    case 8: {
      return $thiz.dd;
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
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 15)"));
    }
  }
}
function $f_s_Product17__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.gd;
      break;
    }
    case 1: {
      return $thiz.dm;
      break;
    }
    case 2: {
      return $thiz.dn;
      break;
    }
    case 3: {
      return $thiz.dp;
      break;
    }
    case 4: {
      return $thiz.dq;
      break;
    }
    case 5: {
      return $thiz.dr;
      break;
    }
    case 6: {
      return $thiz.ds;
      break;
    }
    case 7: {
      return $thiz.dt;
      break;
    }
    case 8: {
      return $thiz.du;
      break;
    }
    case 9: {
      return $thiz.de;
      break;
    }
    case 10: {
      return $thiz.df;
      break;
    }
    case 11: {
      return $thiz.dg;
      break;
    }
    case 12: {
      return $thiz.dh;
      break;
    }
    case 13: {
      return $thiz.di;
      break;
    }
    case 14: {
      return $thiz.dj;
      break;
    }
    case 15: {
      return $thiz.dk;
      break;
    }
    case 16: {
      return $thiz.dl;
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
      return $thiz.ge;
      break;
    }
    case 1: {
      return $thiz.dE;
      break;
    }
    case 2: {
      return $thiz.dF;
      break;
    }
    case 3: {
      return $thiz.dG;
      break;
    }
    case 4: {
      return $thiz.dH;
      break;
    }
    case 5: {
      return $thiz.dI;
      break;
    }
    case 6: {
      return $thiz.dJ;
      break;
    }
    case 7: {
      return $thiz.dK;
      break;
    }
    case 8: {
      return $thiz.dL;
      break;
    }
    case 9: {
      return $thiz.dv;
      break;
    }
    case 10: {
      return $thiz.dw;
      break;
    }
    case 11: {
      return $thiz.dx;
      break;
    }
    case 12: {
      return $thiz.dy;
      break;
    }
    case 13: {
      return $thiz.dz;
      break;
    }
    case 14: {
      return $thiz.dA;
      break;
    }
    case 15: {
      return $thiz.dB;
      break;
    }
    case 16: {
      return $thiz.dC;
      break;
    }
    case 17: {
      return $thiz.dD;
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
      return $thiz.gf;
      break;
    }
    case 1: {
      return $thiz.dW;
      break;
    }
    case 2: {
      return $thiz.dX;
      break;
    }
    case 3: {
      return $thiz.dY;
      break;
    }
    case 4: {
      return $thiz.dZ;
      break;
    }
    case 5: {
      return $thiz.e0;
      break;
    }
    case 6: {
      return $thiz.e1;
      break;
    }
    case 7: {
      return $thiz.e2;
      break;
    }
    case 8: {
      return $thiz.e3;
      break;
    }
    case 9: {
      return $thiz.dM;
      break;
    }
    case 10: {
      return $thiz.dN;
      break;
    }
    case 11: {
      return $thiz.dO;
      break;
    }
    case 12: {
      return $thiz.dP;
      break;
    }
    case 13: {
      return $thiz.dQ;
      break;
    }
    case 14: {
      return $thiz.dR;
      break;
    }
    case 15: {
      return $thiz.dS;
      break;
    }
    case 16: {
      return $thiz.dT;
      break;
    }
    case 17: {
      return $thiz.dU;
      break;
    }
    case 18: {
      return $thiz.dV;
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
      return $thiz.P;
      break;
    }
    case 1: {
      return $thiz.as;
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
      return $thiz.gg;
      break;
    }
    case 1: {
      return $thiz.ee;
      break;
    }
    case 2: {
      return $thiz.eg;
      break;
    }
    case 3: {
      return $thiz.eh;
      break;
    }
    case 4: {
      return $thiz.ei;
      break;
    }
    case 5: {
      return $thiz.ej;
      break;
    }
    case 6: {
      return $thiz.ek;
      break;
    }
    case 7: {
      return $thiz.el;
      break;
    }
    case 8: {
      return $thiz.em;
      break;
    }
    case 9: {
      return $thiz.e4;
      break;
    }
    case 10: {
      return $thiz.e5;
      break;
    }
    case 11: {
      return $thiz.e6;
      break;
    }
    case 12: {
      return $thiz.e7;
      break;
    }
    case 13: {
      return $thiz.e8;
      break;
    }
    case 14: {
      return $thiz.e9;
      break;
    }
    case 15: {
      return $thiz.ea;
      break;
    }
    case 16: {
      return $thiz.eb;
      break;
    }
    case 17: {
      return $thiz.ec;
      break;
    }
    case 18: {
      return $thiz.ed;
      break;
    }
    case 19: {
      return $thiz.ef;
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
      return $thiz.gh;
      break;
    }
    case 1: {
      return $thiz.ex;
      break;
    }
    case 2: {
      return $thiz.eA;
      break;
    }
    case 3: {
      return $thiz.eB;
      break;
    }
    case 4: {
      return $thiz.eC;
      break;
    }
    case 5: {
      return $thiz.eD;
      break;
    }
    case 6: {
      return $thiz.eE;
      break;
    }
    case 7: {
      return $thiz.eF;
      break;
    }
    case 8: {
      return $thiz.eG;
      break;
    }
    case 9: {
      return $thiz.en;
      break;
    }
    case 10: {
      return $thiz.eo;
      break;
    }
    case 11: {
      return $thiz.ep;
      break;
    }
    case 12: {
      return $thiz.eq;
      break;
    }
    case 13: {
      return $thiz.er;
      break;
    }
    case 14: {
      return $thiz.es;
      break;
    }
    case 15: {
      return $thiz.et;
      break;
    }
    case 16: {
      return $thiz.eu;
      break;
    }
    case 17: {
      return $thiz.ev;
      break;
    }
    case 18: {
      return $thiz.ew;
      break;
    }
    case 19: {
      return $thiz.ey;
      break;
    }
    case 20: {
      return $thiz.ez;
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
      return $thiz.gi;
      break;
    }
    case 1: {
      return $thiz.eR;
      break;
    }
    case 2: {
      return $thiz.eV;
      break;
    }
    case 3: {
      return $thiz.eW;
      break;
    }
    case 4: {
      return $thiz.eX;
      break;
    }
    case 5: {
      return $thiz.eY;
      break;
    }
    case 6: {
      return $thiz.eZ;
      break;
    }
    case 7: {
      return $thiz.f0;
      break;
    }
    case 8: {
      return $thiz.f1;
      break;
    }
    case 9: {
      return $thiz.eH;
      break;
    }
    case 10: {
      return $thiz.eI;
      break;
    }
    case 11: {
      return $thiz.eJ;
      break;
    }
    case 12: {
      return $thiz.eK;
      break;
    }
    case 13: {
      return $thiz.eL;
      break;
    }
    case 14: {
      return $thiz.eM;
      break;
    }
    case 15: {
      return $thiz.eN;
      break;
    }
    case 16: {
      return $thiz.eO;
      break;
    }
    case 17: {
      return $thiz.eP;
      break;
    }
    case 18: {
      return $thiz.eQ;
      break;
    }
    case 19: {
      return $thiz.eS;
      break;
    }
    case 20: {
      return $thiz.eT;
      break;
    }
    case 21: {
      return $thiz.eU;
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
      return $thiz.bv;
      break;
    }
    case 1: {
      return $thiz.bg;
      break;
    }
    case 2: {
      return $thiz.bh;
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
      return $thiz.f2;
      break;
    }
    case 1: {
      return $thiz.bw;
      break;
    }
    case 2: {
      return $thiz.bx;
      break;
    }
    case 3: {
      return $thiz.by;
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
      return $thiz.gj;
      break;
    }
    case 1: {
      return $thiz.f3;
      break;
    }
    case 2: {
      return $thiz.f4;
      break;
    }
    case 3: {
      return $thiz.f5;
      break;
    }
    case 4: {
      return $thiz.f6;
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
      return $thiz.gk;
      break;
    }
    case 1: {
      return $thiz.f7;
      break;
    }
    case 2: {
      return $thiz.f8;
      break;
    }
    case 3: {
      return $thiz.f9;
      break;
    }
    case 4: {
      return $thiz.fa;
      break;
    }
    case 5: {
      return $thiz.fb;
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
      return $thiz.gl;
      break;
    }
    case 1: {
      return $thiz.fc;
      break;
    }
    case 2: {
      return $thiz.fd;
      break;
    }
    case 3: {
      return $thiz.fe;
      break;
    }
    case 4: {
      return $thiz.ff;
      break;
    }
    case 5: {
      return $thiz.fg;
      break;
    }
    case 6: {
      return $thiz.fh;
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
      return $thiz.gm;
      break;
    }
    case 1: {
      return $thiz.fi;
      break;
    }
    case 2: {
      return $thiz.fj;
      break;
    }
    case 3: {
      return $thiz.fk;
      break;
    }
    case 4: {
      return $thiz.fl;
      break;
    }
    case 5: {
      return $thiz.fm;
      break;
    }
    case 6: {
      return $thiz.fn;
      break;
    }
    case 7: {
      return $thiz.fo;
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
      return $thiz.gn;
      break;
    }
    case 1: {
      return $thiz.fp;
      break;
    }
    case 2: {
      return $thiz.fq;
      break;
    }
    case 3: {
      return $thiz.fr;
      break;
    }
    case 4: {
      return $thiz.fs;
      break;
    }
    case 5: {
      return $thiz.ft;
      break;
    }
    case 6: {
      return $thiz.fu;
      break;
    }
    case 7: {
      return $thiz.fv;
      break;
    }
    case 8: {
      return $thiz.fw;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 8)"));
    }
  }
}
function $f_sc_Iterator__concat__F0__sc_Iterator($thiz, xs) {
  return new $c_sc_Iterator$ConcatIterator($thiz).oz(xs);
}
function $f_sc_Iterator__sliceIterator__I__I__sc_Iterator($thiz, from, until) {
  var lo = ((from > 0) ? from : 0);
  var rest = ((until < 0) ? (-1) : ((until <= lo) ? 0 : ((until - lo) | 0)));
  return ((rest === 0) ? $m_sc_Iterator$().b7 : new $c_sc_Iterator$SliceIterator($thiz, lo, rest));
}
function $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz, that) {
  var those = that.ab();
  while ($thiz.T()) {
    if ((!those.T())) {
      return false;
    }
    if ((!$m_sr_BoxesRunTime$().c($thiz.O(), those.O()))) {
      return false;
    }
  }
  return (!those.T());
}
/** @constructor */
function $c_sc_Iterator$() {
  this.b7 = null;
  $n_sc_Iterator$ = this;
  this.b7 = new $c_sc_Iterator$$anon$19();
}
$p = $c_sc_Iterator$.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
}
$h_sc_Iterator$.prototype = $p;
var $d_sc_Iterator$ = new $TypeData().i($c_sc_Iterator$, "scala.collection.Iterator$", ({
  c5: 1,
  a: 1,
  ax: 1
}));
var $n_sc_Iterator$;
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$();
  }
  return $n_sc_Iterator$;
}
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cA)));
}
/** @constructor */
function $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(f) {
  this.kD = null;
  this.kD = f;
}
$p = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = new $h_sr_AbstractFunction0();
$p.constructor = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c;
/** @constructor */
function $h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c() {
}
$h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = $p;
$p.hE = (function() {
  return (0, this.kD)();
});
var $d_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c = new $TypeData().i($c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c, "scala.runtime.AbstractFunction0.$$Lambda$07eded5776954a9c145e92c329afd52873ad179c", ({
  cJ: 1,
  cI: 1,
  br: 1
}));
/** @constructor */
function $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(f) {
  this.kE = null;
  this.kE = f;
}
$p = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919;
/** @constructor */
function $h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919() {
}
$h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = $p;
$p.h = (function(x0) {
  return (0, this.kE)(x0);
});
var $d_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919 = new $TypeData().i($c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919, "scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919", ({
  cL: 1,
  cK: 1,
  h: 1
}));
/** @constructor */
function $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(f) {
  this.kF = null;
  this.kF = f;
}
$p = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = new $h_sr_AbstractFunction2();
$p.constructor = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8;
/** @constructor */
function $h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8() {
}
$h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = $p;
$p.bd = (function(x0, x1) {
  return (0, this.kF)(x0, x1);
});
var $d_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8 = new $TypeData().i($c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8, "scala.runtime.AbstractFunction2.$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8", ({
  cN: 1,
  cM: 1,
  bs: 1
}));
/** @constructor */
function $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(f) {
  this.kG = null;
  this.kG = f;
}
$p = $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825.prototype = new $h_sr_AbstractFunction3();
$p.constructor = $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825;
/** @constructor */
function $h_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825() {
}
$h_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825.prototype = $p;
$p.k2 = (function(x0, x1, x2) {
  return (0, this.kG)(x0, x1, x2);
});
var $d_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825 = new $TypeData().i($c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825, "scala.runtime.AbstractFunction3.$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825", ({
  cP: 1,
  cO: 1,
  bt: 1
}));
/** @constructor */
function $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(f) {
  this.kH = null;
  this.kH = f;
}
$p = $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a.prototype = new $h_sr_AbstractFunction4();
$p.constructor = $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a;
/** @constructor */
function $h_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a() {
}
$h_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a.prototype = $p;
$p.mZ = (function(x0, x1, x2, x3) {
  return (0, this.kH)(x0, x1, x2, x3);
});
var $d_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a = new $TypeData().i($c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a, "scala.runtime.AbstractFunction4.$$Lambda$451042f443265710aa66de6985cba67480d9b00a", ({
  cR: 1,
  cQ: 1,
  bu: 1
}));
/** @constructor */
function $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078(f) {
  this.kI = null;
  this.kI = f;
}
$p = $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078.prototype = new $h_sr_AbstractFunction5();
$p.constructor = $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078;
/** @constructor */
function $h_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078() {
}
$h_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078.prototype = $p;
$p.oe = (function(x0, x1, x2, x3, x4) {
  return (0, this.kI)(x0, x1, x2, x3, x4);
});
var $d_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078 = new $TypeData().i($c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078, "scala.runtime.AbstractFunction5.$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078", ({
  cT: 1,
  cS: 1,
  bv: 1
}));
var $d_sr_Nothing$ = new $TypeData().i(0, "scala.runtime.Nothing$", ({
  cW: 1,
  f: 1,
  a: 1
}));
/** @constructor */
function $c_sr_TupleXXL(es) {
  this.ac = null;
  this.ac = es;
  if ((es.a.length <= 22)) {
    $m_sr_Scala3RunTime$().ol();
  }
}
$p = $c_sr_TupleXXL.prototype = new $h_O();
$p.constructor = $c_sr_TupleXXL;
/** @constructor */
function $h_sr_TupleXXL() {
}
$h_sr_TupleXXL.prototype = $p;
$p.I = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.n = (function(n) {
  return this.ac.a[n];
});
$p.x = (function() {
  return this.ac.a.length;
});
$p.F = (function() {
  return "Tuple";
});
$p.o = (function() {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($m_s_Predef$().qV(this.ac), "(", ",", ")");
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().ox(this, (-889275714), null);
});
$p.s = (function(that) {
  if ((that instanceof $c_sr_TupleXXL)) {
    if ((this.ac === that.ac)) {
      return true;
    } else {
      if ((this.ac.a.length !== that.ac.a.length)) {
        return false;
      }
      var i = 0;
      while ((i < this.ac.a.length)) {
        var $x_2 = $m_sr_BoxesRunTime$();
        var arr$3 = this.ac;
        var n = i;
        var $x_1 = arr$3.a[n];
        var arr$4 = that.ac;
        var n$1 = i;
        if ((!$x_2.c($x_1, arr$4.a[n$1]))) {
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aK)));
}
var $d_sr_TupleXXL = new $TypeData().i($c_sr_TupleXXL, "scala.runtime.TupleXXL", ({
  aK: 1,
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
$p.hG = (function(f) {
  return ((arg1$2) => f.h(arg1$2));
});
var $d_sjs_js_Any$ = new $TypeData().i($c_sjs_js_Any$, "scala.scalajs.js.Any$", ({
  d3: 1,
  d7: 1,
  d8: 1
}));
var $n_sjs_js_Any$;
function $m_sjs_js_Any$() {
  if ((!$n_sjs_js_Any$)) {
    $n_sjs_js_Any$ = new $c_sjs_js_Any$();
  }
  return $n_sjs_js_Any$;
}
/** @constructor */
function $c_Lsketches_rooms_canvases_Wall$() {
}
$p = $c_Lsketches_rooms_canvases_Wall$.prototype = new $h_O();
$p.constructor = $c_Lsketches_rooms_canvases_Wall$;
/** @constructor */
function $h_Lsketches_rooms_canvases_Wall$() {
}
$h_Lsketches_rooms_canvases_Wall$.prototype = $p;
$p.o = (function() {
  return "Wall";
});
$p.o0 = (function() {
  return [];
});
var $d_Lsketches_rooms_canvases_Wall$ = new $TypeData().i($c_Lsketches_rooms_canvases_Wall$, "sketches.rooms.canvases.Wall$", ({
  dh: 1,
  aI: 1,
  aJ: 1
}));
var $n_Lsketches_rooms_canvases_Wall$;
function $m_Lsketches_rooms_canvases_Wall$() {
  if ((!$n_Lsketches_rooms_canvases_Wall$)) {
    $n_Lsketches_rooms_canvases_Wall$ = new $c_Lsketches_rooms_canvases_Wall$();
  }
  return $n_Lsketches_rooms_canvases_Wall$;
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
function $c_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3.prototype = new $h_s_Conversion();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3.prototype = $p;
$p.h = (function(x) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec4((+x.f2), (+x.bw), (+x.bx), (+x.by));
});
var $d_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3, "trivalibs.graphics.math.cpu.Vec4$$anon$3", ({
  er: 1,
  a7: 1,
  h: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_VarExpr(name) {
  this.f = null;
  this.fL = null;
  this.js = false;
  $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(this, name);
  this.js = false;
}
$p = $c_Ltrivalibs_graphics_math_gpu_VarExpr.prototype = new $h_Ltrivalibs_graphics_math_gpu_LetExpr();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_VarExpr;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_VarExpr() {
}
$h_Ltrivalibs_graphics_math_gpu_VarExpr.prototype = $p;
$p.W = (function(value) {
  if ((!this.js)) {
    this.js = true;
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return (((("  var " + this.fL) + " = ") + value.f) + ";");
  } else {
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return (((("  " + this.fL) + " = ") + value.f) + ";");
  }
});
$p.o2 = (function(value) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return (((("  " + this.fL) + " += ") + value.f) + ";");
});
$p.o4 = (function(value) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return (((("  " + this.fL) + " *= ") + value.f) + ";");
});
var $d_Ltrivalibs_graphics_math_gpu_VarExpr = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_VarExpr, "trivalibs.graphics.math.gpu.VarExpr", ({
  eF: 1,
  aZ: 1,
  a0: 1
}));
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
  return $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().g1((+x));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1, "trivalibs.graphics.math.gpu.float_expr$package$$anon$1", ({
  eK: 1,
  a7: 1,
  h: 1
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
        deps = ((rest[0] === (void 0)) ? $m_Ltrivalibs_graphics_shader_dsl_WgslFnData$().nZ() : rest[0]);
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
  b3: 1,
  b8: 1,
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
  b4: 1,
  a: 1,
  i: 1,
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a2)));
}
var $d_jl_Character = new $TypeData().i(0, "java.lang.Character", ({
  a2: 1,
  a: 1,
  i: 1,
  g: 1
}), ((x) => (x instanceof $Char)));
class $c_jl_RuntimeException extends $c_jl_Exception {
}
/** @constructor */
function $c_jl_StringBuilder() {
  this.an = null;
  this.an = "";
}
$p = $c_jl_StringBuilder.prototype = new $h_O();
$p.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
}
$h_jl_StringBuilder.prototype = $p;
$p.o = (function() {
  return this.an;
});
$p.H = (function() {
  return this.an.length;
});
$p.n4 = (function(index) {
  return this.an.charCodeAt(index);
});
var $d_jl_StringBuilder = new $TypeData().i($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  bh: 1,
  L: 1,
  b1: 1,
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
$p.af = (function() {
  return (-1);
});
$p.n6 = (function(dest, start, n) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, dest, start, n);
});
$p.k1 = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.ab = (function() {
  return this;
});
$p.hF = (function(n) {
  return this.iQ(n, (-1));
});
$p.iQ = (function(from, until) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until);
});
$p.o = (function() {
  return "<iterator>";
});
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.bQ(0) === 0);
}
function $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  var thisKnownSize = $thiz.af();
  if ((thisKnownSize !== (-1))) {
    var thatKnownSize = that.af();
    if ((thatKnownSize !== (-1))) {
      if ((thisKnownSize !== thatKnownSize)) {
        return false;
      }
      if ((thisKnownSize === 0)) {
        return true;
      }
    }
  }
  return $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz.ab(), that);
}
/** @constructor */
function $c_Lsketches_rooms_canvases_Painting(model, shape, shadowRect, shadowFade, basePos, baseRect, rotY, wallHeight) {
  this.gt = null;
  this.gw = null;
  this.fC = null;
  this.gv = null;
  this.gs = null;
  this.bm = null;
  this.gu = 0.0;
  this.gx = 0.0;
  this.gt = model;
  this.gw = shape;
  this.fC = shadowRect;
  this.gv = shadowFade;
  this.gs = basePos;
  this.bm = baseRect;
  this.gu = rotY;
  this.gx = wallHeight;
}
$p = $c_Lsketches_rooms_canvases_Painting.prototype = new $h_O();
$p.constructor = $c_Lsketches_rooms_canvases_Painting;
/** @constructor */
function $h_Lsketches_rooms_canvases_Painting() {
}
$h_Lsketches_rooms_canvases_Painting.prototype = $p;
$p.I = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.u = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().m(acc, 990625508);
  acc = $m_sr_Statics$().m(acc, $m_sr_Statics$().N(this.gt));
  acc = $m_sr_Statics$().m(acc, $m_sr_Statics$().N(this.gw));
  acc = $m_sr_Statics$().m(acc, $m_sr_Statics$().N(this.fC));
  acc = $m_sr_Statics$().m(acc, $m_sr_Statics$().N(this.gv));
  acc = $m_sr_Statics$().m(acc, $m_sr_Statics$().N(this.gs));
  acc = $m_sr_Statics$().m(acc, $m_sr_Statics$().N(this.bm));
  acc = $m_sr_Statics$().m(acc, $m_sr_Statics$().aI(this.gu));
  acc = $m_sr_Statics$().m(acc, $m_sr_Statics$().aI(this.gx));
  return $m_sr_Statics$().ae(acc, 8);
});
$p.s = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lsketches_rooms_canvases_Painting)) {
    if (((this.gu === x$0.gu) && (this.gx === x$0.gx))) {
      var x = this.gt;
      var x$2 = x$0.gt;
      var $x_5 = ((x === null) ? (x$2 === null) : (x === x$2));
    } else {
      var $x_5 = false;
    }
    if ($x_5) {
      var x$3 = this.gw;
      var x$4 = x$0.gw;
      var $x_4 = ((x$3 === null) ? (x$4 === null) : (x$3 === x$4));
    } else {
      var $x_4 = false;
    }
    if ($x_4) {
      var x$5 = this.fC;
      var x$6 = x$0.fC;
      var $x_3 = ((x$5 === null) ? (x$6 === null) : (x$5 === x$6));
    } else {
      var $x_3 = false;
    }
    if ($x_3) {
      var x$7 = this.gv;
      var x$8 = x$0.gv;
      var $x_2 = ((x$7 === null) ? (x$8 === null) : (x$7 === x$8));
    } else {
      var $x_2 = false;
    }
    if ($x_2) {
      var x$9 = this.gs;
      var x$10 = x$0.gs;
      var $x_1 = ((x$9 === null) ? (x$10 === null) : (x$9 === x$10));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      var x$11 = this.bm;
      var x$12 = x$0.bm;
      return ((x$11 === null) ? (x$12 === null) : (x$11 === x$12));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.o = (function() {
  return $m_sr_ScalaRunTime$().hD(this);
});
$p.x = (function() {
  return 8;
});
$p.F = (function() {
  return "Painting";
});
$p.n = (function(n) {
  switch (n) {
    case 0: {
      return this.gt;
      break;
    }
    case 1: {
      return this.gw;
      break;
    }
    case 2: {
      return this.fC;
      break;
    }
    case 3: {
      return this.gv;
      break;
    }
    case 4: {
      return this.gs;
      break;
    }
    case 5: {
      return this.bm;
      break;
    }
    case 6: {
      return this.gu;
      break;
    }
    case 7: {
      return this.gx;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
    }
  }
});
function $isArrayOf_Lsketches_rooms_canvases_Painting(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aN)));
}
var $d_Lsketches_rooms_canvases_Painting = new $TypeData().i($c_Lsketches_rooms_canvases_Painting, "sketches.rooms.canvases.Painting", ({
  aN: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_Lsketches_rooms_canvases_PaintingSpec(width, height, depth, image, sideStretch) {
  this.bG = 0.0;
  this.bF = 0.0;
  this.bn = 0.0;
  this.gy = null;
  this.fD = 0.0;
  this.bG = width;
  this.bF = height;
  this.bn = depth;
  this.gy = image;
  this.fD = sideStretch;
}
$p = $c_Lsketches_rooms_canvases_PaintingSpec.prototype = new $h_O();
$p.constructor = $c_Lsketches_rooms_canvases_PaintingSpec;
/** @constructor */
function $h_Lsketches_rooms_canvases_PaintingSpec() {
}
$h_Lsketches_rooms_canvases_PaintingSpec.prototype = $p;
$p.I = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.u = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().m(acc, 1068570815);
  acc = $m_sr_Statics$().m(acc, $m_sr_Statics$().aI(this.bG));
  acc = $m_sr_Statics$().m(acc, $m_sr_Statics$().aI(this.bF));
  acc = $m_sr_Statics$().m(acc, $m_sr_Statics$().aI(this.bn));
  acc = $m_sr_Statics$().m(acc, $m_sr_Statics$().N(this.gy));
  acc = $m_sr_Statics$().m(acc, $m_sr_Statics$().aI(this.fD));
  return $m_sr_Statics$().ae(acc, 5);
});
$p.s = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lsketches_rooms_canvases_PaintingSpec)) {
    if (((((this.bG === x$0.bG) && (this.bF === x$0.bF)) && (this.bn === x$0.bn)) && (this.fD === x$0.fD))) {
      var x = this.gy;
      var x$2 = x$0.gy;
      return ((x === null) ? (x$2 === null) : (x === x$2));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.o = (function() {
  return $m_sr_ScalaRunTime$().hD(this);
});
$p.x = (function() {
  return 5;
});
$p.F = (function() {
  return "PaintingSpec";
});
$p.n = (function(n) {
  switch (n) {
    case 0: {
      return this.bG;
      break;
    }
    case 1: {
      return this.bF;
      break;
    }
    case 2: {
      return this.bn;
      break;
    }
    case 3: {
      return this.gy;
      break;
    }
    case 4: {
      return this.fD;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
    }
  }
});
function $isArrayOf_Lsketches_rooms_canvases_PaintingSpec(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aO)));
}
var $d_Lsketches_rooms_canvases_PaintingSpec = new $TypeData().i($c_Lsketches_rooms_canvases_PaintingSpec, "sketches.rooms.canvases.PaintingSpec", ({
  aO: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_Lsketches_rooms_canvases_Sway(painting, phase, speed, amp) {
  this.gA = null;
  this.gB = 0.0;
  this.gC = 0.0;
  this.gz = 0.0;
  this.gA = painting;
  this.gB = phase;
  this.gC = speed;
  this.gz = amp;
}
$p = $c_Lsketches_rooms_canvases_Sway.prototype = new $h_O();
$p.constructor = $c_Lsketches_rooms_canvases_Sway;
/** @constructor */
function $h_Lsketches_rooms_canvases_Sway() {
}
$h_Lsketches_rooms_canvases_Sway.prototype = $p;
$p.I = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.u = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().m(acc, 2590140);
  acc = $m_sr_Statics$().m(acc, $m_sr_Statics$().N(this.gA));
  acc = $m_sr_Statics$().m(acc, $m_sr_Statics$().aI(this.gB));
  acc = $m_sr_Statics$().m(acc, $m_sr_Statics$().aI(this.gC));
  acc = $m_sr_Statics$().m(acc, $m_sr_Statics$().aI(this.gz));
  return $m_sr_Statics$().ae(acc, 4);
});
$p.s = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lsketches_rooms_canvases_Sway)) {
    if ((((this.gB === x$0.gB) && (this.gC === x$0.gC)) && (this.gz === x$0.gz))) {
      var x = this.gA;
      var x$2 = x$0.gA;
      return ((x === null) ? (x$2 === null) : x.s(x$2));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.o = (function() {
  return $m_sr_ScalaRunTime$().hD(this);
});
$p.x = (function() {
  return 4;
});
$p.F = (function() {
  return "Sway";
});
$p.n = (function(n) {
  switch (n) {
    case 0: {
      return this.gA;
      break;
    }
    case 1: {
      return this.gB;
      break;
    }
    case 2: {
      return this.gC;
      break;
    }
    case 3: {
      return this.gz;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
    }
  }
});
function $isArrayOf_Lsketches_rooms_canvases_Sway(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aP)));
}
var $d_Lsketches_rooms_canvases_Sway = new $TypeData().i($c_Lsketches_rooms_canvases_Sway, "sketches.rooms.canvases.Sway", ({
  aP: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_Lsketches_rooms_canvases_Wall(center, width, height, rotY, inwardNormal, form, paintings) {
  this.gD = null;
  this.aT = 0.0;
  this.aS = 0.0;
  this.fG = 0.0;
  this.fF = null;
  this.fE = null;
  this.bH = null;
  this.gD = center;
  this.aT = width;
  this.aS = height;
  this.fG = rotY;
  this.fF = inwardNormal;
  this.fE = form;
  this.bH = paintings;
}
$p = $c_Lsketches_rooms_canvases_Wall.prototype = new $h_O();
$p.constructor = $c_Lsketches_rooms_canvases_Wall;
/** @constructor */
function $h_Lsketches_rooms_canvases_Wall() {
}
$h_Lsketches_rooms_canvases_Wall.prototype = $p;
$p.I = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.u = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().m(acc, 2688490);
  acc = $m_sr_Statics$().m(acc, $m_sr_Statics$().N(this.gD));
  acc = $m_sr_Statics$().m(acc, $m_sr_Statics$().aI(this.aT));
  acc = $m_sr_Statics$().m(acc, $m_sr_Statics$().aI(this.aS));
  acc = $m_sr_Statics$().m(acc, $m_sr_Statics$().aI(this.fG));
  acc = $m_sr_Statics$().m(acc, $m_sr_Statics$().N(this.fF));
  acc = $m_sr_Statics$().m(acc, $m_sr_Statics$().N(this.fE));
  acc = $m_sr_Statics$().m(acc, $m_sr_Statics$().N(this.bH));
  return $m_sr_Statics$().ae(acc, 7);
});
$p.s = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lsketches_rooms_canvases_Wall)) {
    if ((((this.aT === x$0.aT) && (this.aS === x$0.aS)) && (this.fG === x$0.fG))) {
      var x = this.gD;
      var x$2 = x$0.gD;
      var $x_3 = ((x === null) ? (x$2 === null) : (x === x$2));
    } else {
      var $x_3 = false;
    }
    if ($x_3) {
      var x$3 = this.fF;
      var x$4 = x$0.fF;
      var $x_2 = ((x$3 === null) ? (x$4 === null) : (x$3 === x$4));
    } else {
      var $x_2 = false;
    }
    if ($x_2) {
      var x$5 = this.fE;
      var x$6 = x$0.fE;
      var $x_1 = ((x$5 === null) ? (x$6 === null) : (x$5 === x$6));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      return $m_sr_BoxesRunTime$().c(this.bH, x$0.bH);
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.o = (function() {
  return $m_sr_ScalaRunTime$().hD(this);
});
$p.x = (function() {
  return 7;
});
$p.F = (function() {
  return "Wall";
});
$p.n = (function(n) {
  switch (n) {
    case 0: {
      return this.gD;
      break;
    }
    case 1: {
      return this.aT;
      break;
    }
    case 2: {
      return this.aS;
      break;
    }
    case 3: {
      return this.fG;
      break;
    }
    case 4: {
      return this.fF;
      break;
    }
    case 5: {
      return this.fE;
      break;
    }
    case 6: {
      return this.bH;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
    }
  }
});
function $isArrayOf_Lsketches_rooms_canvases_Wall(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aQ)));
}
var $d_Lsketches_rooms_canvases_Wall = new $TypeData().i($c_Lsketches_rooms_canvases_Wall, "sketches.rooms.canvases.Wall", ({
  aQ: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$.prototype = $p;
$p.hI = (function(m) {
  return m.jc;
});
$p.hJ = (function(m) {
  return m.jd;
});
$p.hK = (function(m) {
  return m.je;
});
$p.hL = (function(m) {
  return m.jf;
});
$p.hM = (function(m) {
  return m.jg;
});
$p.hN = (function(m) {
  return m.jh;
});
$p.hO = (function(m) {
  return m.ji;
});
$p.hP = (function(m) {
  return m.jj;
});
$p.hQ = (function(m) {
  return m.jk;
});
$p.hR = (function(m) {
  return m.jl;
});
$p.hS = (function(m) {
  return m.jm;
});
$p.hT = (function(m) {
  return m.jn;
});
$p.hU = (function(m) {
  return m.jo;
});
$p.hV = (function(m) {
  return m.jp;
});
$p.hW = (function(m) {
  return m.jq;
});
$p.hX = (function(m) {
  return m.jr;
});
$p.nh = (function(m, v) {
  m.jc = v;
});
$p.ni = (function(m, v) {
  m.jd = v;
});
$p.nj = (function(m, v) {
  m.je = v;
});
$p.nk = (function(m, v) {
  m.jf = v;
});
$p.nl = (function(m, v) {
  m.jg = v;
});
$p.nm = (function(m, v) {
  m.jh = v;
});
$p.nn = (function(m, v) {
  m.ji = v;
});
$p.no = (function(m, v) {
  m.jj = v;
});
$p.np = (function(m, v) {
  m.jk = v;
});
$p.nq = (function(m, v) {
  m.jl = v;
});
$p.nr = (function(m, v) {
  m.jm = v;
});
$p.ns = (function(m, v) {
  m.jn = v;
});
$p.nt = (function(m, v) {
  m.jo = v;
});
$p.nu = (function(m, v) {
  m.jp = v;
});
$p.nv = (function(m, v) {
  m.jq = v;
});
$p.nw = (function(m, v) {
  m.jr = v;
});
var $d_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$, "trivalibs.graphics.math.cpu.Mat4$given_Mat4Mutable_Mat4$", ({
  ee: 1,
  W: 1,
  aU: 1,
  aV: 1
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
$p.aA = (function(v) {
  return v.ii;
});
$p.aB = (function(v) {
  return v.ij;
});
$p.b6 = (function(v) {
  return v.ik;
});
$p.b4 = (function(v) {
  return v.ih;
});
$p.gY = (function(v, value) {
  v.ii = value;
});
$p.gZ = (function(v, value) {
  v.ij = value;
});
$p.ko = (function(v, value) {
  v.ik = value;
});
$p.kj = (function(v, value) {
  v.ih = value;
});
var $d_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$, "trivalibs.graphics.math.cpu.Quat$given_Vec4Mutable_Quat$", ({
  ei: 1,
  K: 1,
  Y: 1,
  Z: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$;
function $m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$)) {
    $n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$ = new $c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$.prototype = $p;
$p.aA = (function(v) {
  return v.il;
});
$p.aB = (function(v) {
  return v.im;
});
$p.gY = (function(v, value) {
  v.il = value;
});
$p.gZ = (function(v, value) {
  v.im = value;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$, "trivalibs.graphics.math.cpu.Vec2$given_Vec2Mutable_Vec2$", ({
  el: 1,
  X: 1,
  aW: 1,
  aX: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$;
function $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$)) {
    $n_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$ = new $c_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$;
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
  eo: 1,
  aY: 1,
  e5: 1,
  e8: 1
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
$p.aA = (function(v) {
  return v.fI;
});
$p.aB = (function(v) {
  return v.fJ;
});
$p.b6 = (function(v) {
  return v.fK;
});
$p.b4 = (function(v) {
  return v.fH;
});
$p.gY = (function(v, value) {
  v.fI = value;
});
$p.gZ = (function(v, value) {
  v.fJ = value;
});
$p.ko = (function(v, value) {
  v.fK = value;
});
$p.kj = (function(v, value) {
  v.fH = value;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$, "trivalibs.graphics.math.cpu.Vec4$given_Vec4Mutable_Vec4$", ({
  es: 1,
  K: 1,
  Y: 1,
  Z: 1
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
$p.po = (function(m) {
  var offset$proxy1 = (m.off | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy1, true));
});
$p.pq = (function(m) {
  var offset$proxy2 = ((4 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy2, true));
});
$p.ps = (function(m) {
  var offset$proxy3 = ((8 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy3, true));
});
$p.pu = (function(m) {
  var offset$proxy4 = ((12 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy4, true));
});
$p.pw = (function(m) {
  var offset$proxy5 = ((16 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy5, true));
});
$p.py = (function(m) {
  var offset$proxy6 = ((20 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy6, true));
});
$p.pA = (function(m) {
  var offset$proxy7 = ((24 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy7, true));
});
$p.pC = (function(m) {
  var offset$proxy8 = ((28 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy8, true));
});
$p.pE = (function(m) {
  var offset$proxy9 = ((32 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy9, true));
});
$p.pG = (function(m) {
  var offset$proxy10 = ((36 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy10, true));
});
$p.pI = (function(m) {
  var offset$proxy11 = ((40 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy11, true));
});
$p.pK = (function(m) {
  var offset$proxy12 = ((44 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy12, true));
});
$p.pM = (function(m) {
  var offset$proxy13 = ((48 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy13, true));
});
$p.pO = (function(m) {
  var offset$proxy14 = ((52 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy14, true));
});
$p.pQ = (function(m) {
  var offset$proxy15 = ((56 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy15, true));
});
$p.pS = (function(m) {
  var offset$proxy16 = ((60 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy16, true));
});
$p.pp = (function(m, v) {
  var value$proxy1 = Math.fround(v);
  var offset$proxy17 = (m.off | 0);
  m.dv.setFloat32(offset$proxy17, value$proxy1, true);
});
$p.pr = (function(m, v) {
  var value$proxy2 = Math.fround(v);
  var offset$proxy18 = ((4 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy18, value$proxy2, true);
});
$p.pt = (function(m, v) {
  var value$proxy3 = Math.fround(v);
  var offset$proxy19 = ((8 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy19, value$proxy3, true);
});
$p.pv = (function(m, v) {
  var value$proxy4 = Math.fround(v);
  var offset$proxy20 = ((12 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy20, value$proxy4, true);
});
$p.px = (function(m, v) {
  var value$proxy5 = Math.fround(v);
  var offset$proxy21 = ((16 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy21, value$proxy5, true);
});
$p.pz = (function(m, v) {
  var value$proxy6 = Math.fround(v);
  var offset$proxy22 = ((20 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy22, value$proxy6, true);
});
$p.pB = (function(m, v) {
  var value$proxy7 = Math.fround(v);
  var offset$proxy23 = ((24 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy23, value$proxy7, true);
});
$p.pD = (function(m, v) {
  var value$proxy8 = Math.fround(v);
  var offset$proxy24 = ((28 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy24, value$proxy8, true);
});
$p.pF = (function(m, v) {
  var value$proxy9 = Math.fround(v);
  var offset$proxy25 = ((32 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy25, value$proxy9, true);
});
$p.pH = (function(m, v) {
  var value$proxy10 = Math.fround(v);
  var offset$proxy26 = ((36 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy26, value$proxy10, true);
});
$p.pJ = (function(m, v) {
  var value$proxy11 = Math.fround(v);
  var offset$proxy27 = ((40 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy27, value$proxy11, true);
});
$p.pL = (function(m, v) {
  var value$proxy12 = Math.fround(v);
  var offset$proxy28 = ((44 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy28, value$proxy12, true);
});
$p.pN = (function(m, v) {
  var value$proxy13 = Math.fround(v);
  var offset$proxy29 = ((48 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy29, value$proxy13, true);
});
$p.pP = (function(m, v) {
  var value$proxy14 = Math.fround(v);
  var offset$proxy30 = ((52 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy30, value$proxy14, true);
});
$p.pR = (function(m, v) {
  var value$proxy15 = Math.fround(v);
  var offset$proxy31 = ((56 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy31, value$proxy15, true);
});
$p.pT = (function(m, v) {
  var value$proxy16 = Math.fround(v);
  var offset$proxy32 = ((60 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy32, value$proxy16, true);
});
$p.hI = (function(m) {
  return this.po(m);
});
$p.hJ = (function(m) {
  return this.pq(m);
});
$p.hK = (function(m) {
  return this.ps(m);
});
$p.hL = (function(m) {
  return this.pu(m);
});
$p.hM = (function(m) {
  return this.pw(m);
});
$p.hN = (function(m) {
  return this.py(m);
});
$p.hO = (function(m) {
  return this.pA(m);
});
$p.hP = (function(m) {
  return this.pC(m);
});
$p.hQ = (function(m) {
  return this.pE(m);
});
$p.hR = (function(m) {
  return this.pG(m);
});
$p.hS = (function(m) {
  return this.pI(m);
});
$p.hT = (function(m) {
  return this.pK(m);
});
$p.hU = (function(m) {
  return this.pM(m);
});
$p.hV = (function(m) {
  return this.pO(m);
});
$p.hW = (function(m) {
  return this.pQ(m);
});
$p.hX = (function(m) {
  return this.pS(m);
});
$p.nh = (function(m, v) {
  this.pp(m, v);
});
$p.ni = (function(m, v) {
  this.pr(m, v);
});
$p.nj = (function(m, v) {
  this.pt(m, v);
});
$p.nk = (function(m, v) {
  this.pv(m, v);
});
$p.nl = (function(m, v) {
  this.px(m, v);
});
$p.nm = (function(m, v) {
  this.pz(m, v);
});
$p.nn = (function(m, v) {
  this.pB(m, v);
});
$p.no = (function(m, v) {
  this.pD(m, v);
});
$p.np = (function(m, v) {
  this.pF(m, v);
});
$p.nq = (function(m, v) {
  this.pH(m, v);
});
$p.nr = (function(m, v) {
  this.pJ(m, v);
});
$p.ns = (function(m, v) {
  this.pL(m, v);
});
$p.nt = (function(m, v) {
  this.pN(m, v);
});
$p.nu = (function(m, v) {
  this.pP(m, v);
});
$p.nv = (function(m, v) {
  this.pR(m, v);
});
$p.nw = (function(m, v) {
  this.pT(m, v);
});
var $d_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$, "trivalibs.graphics.math.cpu.mat4$package$Mat4Buffer$given_Mat4Mutable_StructRef$", ({
  ev: 1,
  W: 1,
  aU: 1,
  aV: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$;
function $m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$)) {
    $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$ = new $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$.prototype = $p;
$p.kk = (function(v) {
  var offset$proxy1 = (v.off | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy1, true));
});
$p.km = (function(v) {
  var offset$proxy2 = ((4 + (v.off | 0)) | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy2, true));
});
$p.kl = (function(v, value) {
  var value$proxy1 = Math.fround(value);
  var offset$proxy3 = (v.off | 0);
  v.dv.setFloat32(offset$proxy3, value$proxy1, true);
});
$p.kn = (function(v, value) {
  var value$proxy2 = Math.fround(value);
  var offset$proxy4 = ((4 + (v.off | 0)) | 0);
  v.dv.setFloat32(offset$proxy4, value$proxy2, true);
});
$p.aA = (function(v) {
  return this.kk(v);
});
$p.aB = (function(v) {
  return this.km(v);
});
$p.gY = (function(v, value) {
  this.kl(v, value);
});
$p.gZ = (function(v, value) {
  this.kn(v, value);
});
var $d_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$, "trivalibs.graphics.math.cpu.vec2$package$Vec2Buffer$vec2MutableBuffer$", ({
  ey: 1,
  X: 1,
  aW: 1,
  aX: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$;
function $m_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$)) {
    $n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$ = new $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$;
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
$p.kk = (function(v) {
  var offset$proxy1 = (v.off | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy1, true));
});
$p.km = (function(v) {
  var offset$proxy2 = ((4 + (v.off | 0)) | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy2, true));
});
$p.qZ = (function(v) {
  var offset$proxy3 = ((8 + (v.off | 0)) | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy3, true));
});
$p.qT = (function(v) {
  var offset$proxy4 = ((12 + (v.off | 0)) | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy4, true));
});
$p.kl = (function(v, value) {
  var value$proxy1 = Math.fround(value);
  var offset$proxy5 = (v.off | 0);
  v.dv.setFloat32(offset$proxy5, value$proxy1, true);
});
$p.kn = (function(v, value) {
  var value$proxy2 = Math.fround(value);
  var offset$proxy6 = ((4 + (v.off | 0)) | 0);
  v.dv.setFloat32(offset$proxy6, value$proxy2, true);
});
$p.r0 = (function(v, value) {
  var value$proxy3 = Math.fround(value);
  var offset$proxy7 = ((8 + (v.off | 0)) | 0);
  v.dv.setFloat32(offset$proxy7, value$proxy3, true);
});
$p.qU = (function(v, value) {
  var value$proxy4 = Math.fround(value);
  var offset$proxy8 = ((12 + (v.off | 0)) | 0);
  v.dv.setFloat32(offset$proxy8, value$proxy4, true);
});
$p.aA = (function(v) {
  return this.kk(v);
});
$p.aB = (function(v) {
  return this.km(v);
});
$p.b6 = (function(v) {
  return this.qZ(v);
});
$p.b4 = (function(v) {
  return this.qT(v);
});
$p.gY = (function(v, value) {
  this.kl(v, value);
});
$p.gZ = (function(v, value) {
  this.kn(v, value);
});
$p.ko = (function(v, value) {
  this.r0(v, value);
});
$p.kj = (function(v, value) {
  this.qU(v, value);
});
var $d_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$, "trivalibs.graphics.math.cpu.vec4$package$Vec4Buffer$vec4MutableBuffer$", ({
  eB: 1,
  K: 1,
  Y: 1,
  Z: 1
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
  var all = [vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, uniformDecls, $thiz.hs, f$proxy1, g$proxy1];
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
  this.hs = null;
  this.a6 = vertexBody;
  this.a5 = fragmentBody;
  this.hs = helperFns;
}
$p = $c_Ltrivalibs_graphics_shader_ShaderDef.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_ShaderDef;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_ShaderDef() {
}
$h_Ltrivalibs_graphics_shader_ShaderDef.prototype = $p;
$p.I = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().V(this, (-1488826029), true);
});
$p.s = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_Ltrivalibs_graphics_shader_ShaderDef) && (((this.a6 === x$0.a6) && (this.a5 === x$0.a5)) && (this.hs === x$0.hs))));
});
$p.o = (function() {
  return $m_sr_ScalaRunTime$().hD(this);
});
$p.x = (function() {
  return 3;
});
$p.F = (function() {
  return "ShaderDef";
});
$p.n = (function(n) {
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
      return this.hs;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
    }
  }
});
function $isArrayOf_Ltrivalibs_graphics_shader_ShaderDef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.b0)));
}
var $d_Ltrivalibs_graphics_shader_ShaderDef = new $TypeData().i($c_Ltrivalibs_graphics_shader_ShaderDef, "trivalibs.graphics.shader.ShaderDef", ({
  b0: 1,
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
  b2: 1,
  k: 1,
  j: 1,
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
  b5: 1,
  u: 1,
  a: 1,
  i: 1,
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
  a4: 1,
  k: 1,
  j: 1,
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
  ba: 1,
  k: 1,
  j: 1,
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
  bc: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
function $isArrayOf_jl_SecurityException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.be)));
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
  bf: 1,
  u: 1,
  a: 1,
  i: 1,
  g: 1
}), ((x) => $isShort(x)));
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_UnsupportedOperationException = new $TypeData().i($c_jl_UnsupportedOperationException, "java.lang.UnsupportedOperationException", ({
  bj: 1,
  k: 1,
  j: 1,
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
  bo: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
function $p_s_MatchError__objString__T($thiz) {
  if ((!$thiz.kt)) {
    if (($thiz.i5 === null)) {
      var $x_1 = "null";
    } else {
      var this$1 = $thiz.i5;
      var cls = $objectGetClass(this$1);
      var ofClass = ((cls === null) ? "of a JS class" : ("of class " + cls.iT.N));
      try {
        var $x_1 = ((($thiz.i5 + " (") + ofClass) + ")");
      } catch (e) {
        var $x_1 = ("an instance " + ofClass);
      }
    }
    $thiz.ks = $x_1;
    $thiz.kt = true;
  }
  return $thiz.ks;
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.i5 = null;
    this.ks = null;
    this.kt = false;
    this.i5 = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  iK() {
    return $p_s_MatchError__objString__T(this);
  }
}
var $d_s_MatchError = new $TypeData().i($c_s_MatchError, "scala.MatchError", ({
  by: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.h1 = 0;
  this.kv = 0;
  this.ku = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.ku = outer;
  this.h1 = 0;
  this.kv = outer.x();
}
$p = $c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $p;
$p.T = (function() {
  return (this.h1 < this.kv);
});
$p.O = (function() {
  var result = this.ku.n(this.h1);
  this.h1 = ((1 + this.h1) | 0);
  return result;
});
var $d_s_Product$$anon$1 = new $TypeData().i($c_s_Product$$anon$1, "scala.Product$$anon$1", ({
  bA: 1,
  m: 1,
  d: 1,
  e: 1,
  r: 1
}));
/** @constructor */
function $c_T1(_1) {
  this.g5 = null;
  this.g5 = _1;
}
$p = $c_T1.prototype = new $h_O();
$p.constructor = $c_T1;
/** @constructor */
function $h_T1() {
}
$h_T1.prototype = $p;
$p.x = (function() {
  return 1;
});
$p.n = (function(n) {
  return $f_s_Product1__productElement__I__O(this, n);
});
$p.o = (function() {
  return (("(" + this.g5) + ")");
});
$p.F = (function() {
  return "Tuple1";
});
$p.I = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().V(this, 1228477340, true);
});
$p.s = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T1) && $m_sr_BoxesRunTime$().c(this.g5, x$1.g5)));
});
function $isArrayOf_T1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a8)));
}
var $d_T1 = new $TypeData().i($c_T1, "scala.Tuple1", ({
  a8: 1,
  bB: 1,
  c: 1,
  b: 1,
  a: 1
}));
/** @constructor */
function $c_T10(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10) {
  this.g6 = null;
  this.bT = null;
  this.bU = null;
  this.bV = null;
  this.bW = null;
  this.bX = null;
  this.bY = null;
  this.bZ = null;
  this.c0 = null;
  this.bS = null;
  this.g6 = _1;
  this.bT = _2;
  this.bU = _3;
  this.bV = _4;
  this.bW = _5;
  this.bX = _6;
  this.bY = _7;
  this.bZ = _8;
  this.c0 = _9;
  this.bS = _10;
}
$p = $c_T10.prototype = new $h_O();
$p.constructor = $c_T10;
/** @constructor */
function $h_T10() {
}
$h_T10.prototype = $p;
$p.I = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.x = (function() {
  return 10;
});
$p.n = (function(n) {
  return $f_s_Product10__productElement__I__O(this, n);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().V(this, 2104595240, true);
});
$p.s = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T10) && ((((((((($m_sr_BoxesRunTime$().c(this.g6, x$0.g6) && $m_sr_BoxesRunTime$().c(this.bT, x$0.bT)) && $m_sr_BoxesRunTime$().c(this.bU, x$0.bU)) && $m_sr_BoxesRunTime$().c(this.bV, x$0.bV)) && $m_sr_BoxesRunTime$().c(this.bW, x$0.bW)) && $m_sr_BoxesRunTime$().c(this.bX, x$0.bX)) && $m_sr_BoxesRunTime$().c(this.bY, x$0.bY)) && $m_sr_BoxesRunTime$().c(this.bZ, x$0.bZ)) && $m_sr_BoxesRunTime$().c(this.c0, x$0.c0)) && $m_sr_BoxesRunTime$().c(this.bS, x$0.bS))));
});
$p.F = (function() {
  return "Tuple10";
});
$p.o = (function() {
  return (((((((((((((((((((("(" + this.g6) + ",") + this.bT) + ",") + this.bU) + ",") + this.bV) + ",") + this.bW) + ",") + this.bX) + ",") + this.bY) + ",") + this.bZ) + ",") + this.c0) + ",") + this.bS) + ")");
});
function $isArrayOf_T10(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a9)));
}
var $d_T10 = new $TypeData().i($c_T10, "scala.Tuple10", ({
  a9: 1,
  b: 1,
  c: 1,
  bC: 1,
  a: 1
}));
/** @constructor */
function $c_T11(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11) {
  this.g7 = null;
  this.c3 = null;
  this.c4 = null;
  this.c5 = null;
  this.c6 = null;
  this.c7 = null;
  this.c8 = null;
  this.c9 = null;
  this.ca = null;
  this.c1 = null;
  this.c2 = null;
  this.g7 = _1;
  this.c3 = _2;
  this.c4 = _3;
  this.c5 = _4;
  this.c6 = _5;
  this.c7 = _6;
  this.c8 = _7;
  this.c9 = _8;
  this.ca = _9;
  this.c1 = _10;
  this.c2 = _11;
}
$p = $c_T11.prototype = new $h_O();
$p.constructor = $c_T11;
/** @constructor */
function $h_T11() {
}
$h_T11.prototype = $p;
$p.I = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.x = (function() {
  return 11;
});
$p.n = (function(n) {
  return $f_s_Product11__productElement__I__O(this, n);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().V(this, 838406606, true);
});
$p.s = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T11) && (((((((((($m_sr_BoxesRunTime$().c(this.g7, x$0.g7) && $m_sr_BoxesRunTime$().c(this.c3, x$0.c3)) && $m_sr_BoxesRunTime$().c(this.c4, x$0.c4)) && $m_sr_BoxesRunTime$().c(this.c5, x$0.c5)) && $m_sr_BoxesRunTime$().c(this.c6, x$0.c6)) && $m_sr_BoxesRunTime$().c(this.c7, x$0.c7)) && $m_sr_BoxesRunTime$().c(this.c8, x$0.c8)) && $m_sr_BoxesRunTime$().c(this.c9, x$0.c9)) && $m_sr_BoxesRunTime$().c(this.ca, x$0.ca)) && $m_sr_BoxesRunTime$().c(this.c1, x$0.c1)) && $m_sr_BoxesRunTime$().c(this.c2, x$0.c2))));
});
$p.F = (function() {
  return "Tuple11";
});
$p.o = (function() {
  return (((((((((((((((((((((("(" + this.g7) + ",") + this.c3) + ",") + this.c4) + ",") + this.c5) + ",") + this.c6) + ",") + this.c7) + ",") + this.c8) + ",") + this.c9) + ",") + this.ca) + ",") + this.c1) + ",") + this.c2) + ")");
});
function $isArrayOf_T11(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aa)));
}
var $d_T11 = new $TypeData().i($c_T11, "scala.Tuple11", ({
  aa: 1,
  b: 1,
  c: 1,
  bD: 1,
  a: 1
}));
/** @constructor */
function $c_T12(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12) {
  this.g8 = null;
  this.ce = null;
  this.cf = null;
  this.cg = null;
  this.ch = null;
  this.ci = null;
  this.cj = null;
  this.ck = null;
  this.cl = null;
  this.cb = null;
  this.cc = null;
  this.cd = null;
  this.g8 = _1;
  this.ce = _2;
  this.cf = _3;
  this.cg = _4;
  this.ch = _5;
  this.ci = _6;
  this.cj = _7;
  this.ck = _8;
  this.cl = _9;
  this.cb = _10;
  this.cc = _11;
  this.cd = _12;
}
$p = $c_T12.prototype = new $h_O();
$p.constructor = $c_T12;
/** @constructor */
function $h_T12() {
}
$h_T12.prototype = $p;
$p.I = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.x = (function() {
  return 12;
});
$p.n = (function(n) {
  return $f_s_Product12__productElement__I__O(this, n);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().V(this, (-1964145863), true);
});
$p.s = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T12) && ((((((((((($m_sr_BoxesRunTime$().c(this.g8, x$0.g8) && $m_sr_BoxesRunTime$().c(this.ce, x$0.ce)) && $m_sr_BoxesRunTime$().c(this.cf, x$0.cf)) && $m_sr_BoxesRunTime$().c(this.cg, x$0.cg)) && $m_sr_BoxesRunTime$().c(this.ch, x$0.ch)) && $m_sr_BoxesRunTime$().c(this.ci, x$0.ci)) && $m_sr_BoxesRunTime$().c(this.cj, x$0.cj)) && $m_sr_BoxesRunTime$().c(this.ck, x$0.ck)) && $m_sr_BoxesRunTime$().c(this.cl, x$0.cl)) && $m_sr_BoxesRunTime$().c(this.cb, x$0.cb)) && $m_sr_BoxesRunTime$().c(this.cc, x$0.cc)) && $m_sr_BoxesRunTime$().c(this.cd, x$0.cd))));
});
$p.F = (function() {
  return "Tuple12";
});
$p.o = (function() {
  return (((((((((((((((((((((((("(" + this.g8) + ",") + this.ce) + ",") + this.cf) + ",") + this.cg) + ",") + this.ch) + ",") + this.ci) + ",") + this.cj) + ",") + this.ck) + ",") + this.cl) + ",") + this.cb) + ",") + this.cc) + ",") + this.cd) + ")");
});
function $isArrayOf_T12(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ab)));
}
var $d_T12 = new $TypeData().i($c_T12, "scala.Tuple12", ({
  ab: 1,
  b: 1,
  c: 1,
  bE: 1,
  a: 1
}));
/** @constructor */
function $c_T13(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13) {
  this.g9 = null;
  this.cq = null;
  this.cr = null;
  this.cs = null;
  this.ct = null;
  this.cu = null;
  this.cv = null;
  this.cw = null;
  this.cx = null;
  this.cm = null;
  this.cn = null;
  this.co = null;
  this.cp = null;
  this.g9 = _1;
  this.cq = _2;
  this.cr = _3;
  this.cs = _4;
  this.ct = _5;
  this.cu = _6;
  this.cv = _7;
  this.cw = _8;
  this.cx = _9;
  this.cm = _10;
  this.cn = _11;
  this.co = _12;
  this.cp = _13;
}
$p = $c_T13.prototype = new $h_O();
$p.constructor = $c_T13;
/** @constructor */
function $h_T13() {
}
$h_T13.prototype = $p;
$p.I = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.x = (function() {
  return 13;
});
$p.n = (function(n) {
  return $f_s_Product13__productElement__I__O(this, n);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().V(this, 1224168367, true);
});
$p.s = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T13) && (((((((((((($m_sr_BoxesRunTime$().c(this.g9, x$0.g9) && $m_sr_BoxesRunTime$().c(this.cq, x$0.cq)) && $m_sr_BoxesRunTime$().c(this.cr, x$0.cr)) && $m_sr_BoxesRunTime$().c(this.cs, x$0.cs)) && $m_sr_BoxesRunTime$().c(this.ct, x$0.ct)) && $m_sr_BoxesRunTime$().c(this.cu, x$0.cu)) && $m_sr_BoxesRunTime$().c(this.cv, x$0.cv)) && $m_sr_BoxesRunTime$().c(this.cw, x$0.cw)) && $m_sr_BoxesRunTime$().c(this.cx, x$0.cx)) && $m_sr_BoxesRunTime$().c(this.cm, x$0.cm)) && $m_sr_BoxesRunTime$().c(this.cn, x$0.cn)) && $m_sr_BoxesRunTime$().c(this.co, x$0.co)) && $m_sr_BoxesRunTime$().c(this.cp, x$0.cp))));
});
$p.F = (function() {
  return "Tuple13";
});
$p.o = (function() {
  return (((((((((((((((((((((((((("(" + this.g9) + ",") + this.cq) + ",") + this.cr) + ",") + this.cs) + ",") + this.ct) + ",") + this.cu) + ",") + this.cv) + ",") + this.cw) + ",") + this.cx) + ",") + this.cm) + ",") + this.cn) + ",") + this.co) + ",") + this.cp) + ")");
});
function $isArrayOf_T13(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ac)));
}
var $d_T13 = new $TypeData().i($c_T13, "scala.Tuple13", ({
  ac: 1,
  b: 1,
  c: 1,
  bF: 1,
  a: 1
}));
/** @constructor */
function $c_T14(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14) {
  this.ga = null;
  this.cD = null;
  this.cE = null;
  this.cF = null;
  this.cG = null;
  this.cH = null;
  this.cI = null;
  this.cJ = null;
  this.cK = null;
  this.cy = null;
  this.cz = null;
  this.cA = null;
  this.cB = null;
  this.cC = null;
  this.ga = _1;
  this.cD = _2;
  this.cE = _3;
  this.cF = _4;
  this.cG = _5;
  this.cH = _6;
  this.cI = _7;
  this.cJ = _8;
  this.cK = _9;
  this.cy = _10;
  this.cz = _11;
  this.cA = _12;
  this.cB = _13;
  this.cC = _14;
}
$p = $c_T14.prototype = new $h_O();
$p.constructor = $c_T14;
/** @constructor */
function $h_T14() {
}
$h_T14.prototype = $p;
$p.I = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.x = (function() {
  return 14;
});
$p.n = (function(n) {
  return $f_s_Product14__productElement__I__O(this, n);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().V(this, 147759069, true);
});
$p.s = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T14) && ((((((((((((($m_sr_BoxesRunTime$().c(this.ga, x$0.ga) && $m_sr_BoxesRunTime$().c(this.cD, x$0.cD)) && $m_sr_BoxesRunTime$().c(this.cE, x$0.cE)) && $m_sr_BoxesRunTime$().c(this.cF, x$0.cF)) && $m_sr_BoxesRunTime$().c(this.cG, x$0.cG)) && $m_sr_BoxesRunTime$().c(this.cH, x$0.cH)) && $m_sr_BoxesRunTime$().c(this.cI, x$0.cI)) && $m_sr_BoxesRunTime$().c(this.cJ, x$0.cJ)) && $m_sr_BoxesRunTime$().c(this.cK, x$0.cK)) && $m_sr_BoxesRunTime$().c(this.cy, x$0.cy)) && $m_sr_BoxesRunTime$().c(this.cz, x$0.cz)) && $m_sr_BoxesRunTime$().c(this.cA, x$0.cA)) && $m_sr_BoxesRunTime$().c(this.cB, x$0.cB)) && $m_sr_BoxesRunTime$().c(this.cC, x$0.cC))));
});
$p.F = (function() {
  return "Tuple14";
});
$p.o = (function() {
  return (((((((((((((((((((((((((((("(" + this.ga) + ",") + this.cD) + ",") + this.cE) + ",") + this.cF) + ",") + this.cG) + ",") + this.cH) + ",") + this.cI) + ",") + this.cJ) + ",") + this.cK) + ",") + this.cy) + ",") + this.cz) + ",") + this.cA) + ",") + this.cB) + ",") + this.cC) + ")");
});
function $isArrayOf_T14(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ad)));
}
var $d_T14 = new $TypeData().i($c_T14, "scala.Tuple14", ({
  ad: 1,
  b: 1,
  c: 1,
  bG: 1,
  a: 1
}));
/** @constructor */
function $c_T15(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15) {
  this.gb = null;
  this.cR = null;
  this.cS = null;
  this.cT = null;
  this.cU = null;
  this.cV = null;
  this.cW = null;
  this.cX = null;
  this.cY = null;
  this.cL = null;
  this.cM = null;
  this.cN = null;
  this.cO = null;
  this.cP = null;
  this.cQ = null;
  this.gb = _1;
  this.cR = _2;
  this.cS = _3;
  this.cT = _4;
  this.cU = _5;
  this.cV = _6;
  this.cW = _7;
  this.cX = _8;
  this.cY = _9;
  this.cL = _10;
  this.cM = _11;
  this.cN = _12;
  this.cO = _13;
  this.cP = _14;
  this.cQ = _15;
}
$p = $c_T15.prototype = new $h_O();
$p.constructor = $c_T15;
/** @constructor */
function $h_T15() {
}
$h_T15.prototype = $p;
$p.I = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.x = (function() {
  return 15;
});
$p.n = (function(n) {
  return $f_s_Product15__productElement__I__O(this, n);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().V(this, 1834180931, true);
});
$p.s = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T15) && (((((((((((((($m_sr_BoxesRunTime$().c(this.gb, x$0.gb) && $m_sr_BoxesRunTime$().c(this.cR, x$0.cR)) && $m_sr_BoxesRunTime$().c(this.cS, x$0.cS)) && $m_sr_BoxesRunTime$().c(this.cT, x$0.cT)) && $m_sr_BoxesRunTime$().c(this.cU, x$0.cU)) && $m_sr_BoxesRunTime$().c(this.cV, x$0.cV)) && $m_sr_BoxesRunTime$().c(this.cW, x$0.cW)) && $m_sr_BoxesRunTime$().c(this.cX, x$0.cX)) && $m_sr_BoxesRunTime$().c(this.cY, x$0.cY)) && $m_sr_BoxesRunTime$().c(this.cL, x$0.cL)) && $m_sr_BoxesRunTime$().c(this.cM, x$0.cM)) && $m_sr_BoxesRunTime$().c(this.cN, x$0.cN)) && $m_sr_BoxesRunTime$().c(this.cO, x$0.cO)) && $m_sr_BoxesRunTime$().c(this.cP, x$0.cP)) && $m_sr_BoxesRunTime$().c(this.cQ, x$0.cQ))));
});
$p.F = (function() {
  return "Tuple15";
});
$p.o = (function() {
  return (((((((((((((((((((((((((((((("(" + this.gb) + ",") + this.cR) + ",") + this.cS) + ",") + this.cT) + ",") + this.cU) + ",") + this.cV) + ",") + this.cW) + ",") + this.cX) + ",") + this.cY) + ",") + this.cL) + ",") + this.cM) + ",") + this.cN) + ",") + this.cO) + ",") + this.cP) + ",") + this.cQ) + ")");
});
function $isArrayOf_T15(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ae)));
}
var $d_T15 = new $TypeData().i($c_T15, "scala.Tuple15", ({
  ae: 1,
  b: 1,
  c: 1,
  bH: 1,
  a: 1
}));
/** @constructor */
function $c_T16(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16) {
  this.gc = null;
  this.d6 = null;
  this.d7 = null;
  this.d8 = null;
  this.d9 = null;
  this.da = null;
  this.db = null;
  this.dc = null;
  this.dd = null;
  this.cZ = null;
  this.d0 = null;
  this.d1 = null;
  this.d2 = null;
  this.d3 = null;
  this.d4 = null;
  this.d5 = null;
  this.gc = _1;
  this.d6 = _2;
  this.d7 = _3;
  this.d8 = _4;
  this.d9 = _5;
  this.da = _6;
  this.db = _7;
  this.dc = _8;
  this.dd = _9;
  this.cZ = _10;
  this.d0 = _11;
  this.d1 = _12;
  this.d2 = _13;
  this.d3 = _14;
  this.d4 = _15;
  this.d5 = _16;
}
$p = $c_T16.prototype = new $h_O();
$p.constructor = $c_T16;
/** @constructor */
function $h_T16() {
}
$h_T16.prototype = $p;
$p.I = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.x = (function() {
  return 16;
});
$p.n = (function(n) {
  return $f_s_Product16__productElement__I__O(this, n);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().V(this, 499793902, true);
});
$p.s = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T16) && ((((((((((((((($m_sr_BoxesRunTime$().c(this.gc, x$0.gc) && $m_sr_BoxesRunTime$().c(this.d6, x$0.d6)) && $m_sr_BoxesRunTime$().c(this.d7, x$0.d7)) && $m_sr_BoxesRunTime$().c(this.d8, x$0.d8)) && $m_sr_BoxesRunTime$().c(this.d9, x$0.d9)) && $m_sr_BoxesRunTime$().c(this.da, x$0.da)) && $m_sr_BoxesRunTime$().c(this.db, x$0.db)) && $m_sr_BoxesRunTime$().c(this.dc, x$0.dc)) && $m_sr_BoxesRunTime$().c(this.dd, x$0.dd)) && $m_sr_BoxesRunTime$().c(this.cZ, x$0.cZ)) && $m_sr_BoxesRunTime$().c(this.d0, x$0.d0)) && $m_sr_BoxesRunTime$().c(this.d1, x$0.d1)) && $m_sr_BoxesRunTime$().c(this.d2, x$0.d2)) && $m_sr_BoxesRunTime$().c(this.d3, x$0.d3)) && $m_sr_BoxesRunTime$().c(this.d4, x$0.d4)) && $m_sr_BoxesRunTime$().c(this.d5, x$0.d5))));
});
$p.F = (function() {
  return "Tuple16";
});
$p.o = (function() {
  return (((((((((((((((((((((((((((((((("(" + this.gc) + ",") + this.d6) + ",") + this.d7) + ",") + this.d8) + ",") + this.d9) + ",") + this.da) + ",") + this.db) + ",") + this.dc) + ",") + this.dd) + ",") + this.cZ) + ",") + this.d0) + ",") + this.d1) + ",") + this.d2) + ",") + this.d3) + ",") + this.d4) + ",") + this.d5) + ")");
});
function $isArrayOf_T16(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.af)));
}
var $d_T16 = new $TypeData().i($c_T16, "scala.Tuple16", ({
  af: 1,
  b: 1,
  c: 1,
  bI: 1,
  a: 1
}));
/** @constructor */
function $c_T17(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17) {
  this.gd = null;
  this.dm = null;
  this.dn = null;
  this.dp = null;
  this.dq = null;
  this.dr = null;
  this.ds = null;
  this.dt = null;
  this.du = null;
  this.de = null;
  this.df = null;
  this.dg = null;
  this.dh = null;
  this.di = null;
  this.dj = null;
  this.dk = null;
  this.dl = null;
  this.gd = _1;
  this.dm = _2;
  this.dn = _3;
  this.dp = _4;
  this.dq = _5;
  this.dr = _6;
  this.ds = _7;
  this.dt = _8;
  this.du = _9;
  this.de = _10;
  this.df = _11;
  this.dg = _12;
  this.dh = _13;
  this.di = _14;
  this.dj = _15;
  this.dk = _16;
  this.dl = _17;
}
$p = $c_T17.prototype = new $h_O();
$p.constructor = $c_T17;
/** @constructor */
function $h_T17() {
}
$h_T17.prototype = $p;
$p.I = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.x = (function() {
  return 17;
});
$p.n = (function(n) {
  return $f_s_Product17__productElement__I__O(this, n);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().V(this, (-934366247), true);
});
$p.s = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T17) && (((((((((((((((($m_sr_BoxesRunTime$().c(this.gd, x$0.gd) && $m_sr_BoxesRunTime$().c(this.dm, x$0.dm)) && $m_sr_BoxesRunTime$().c(this.dn, x$0.dn)) && $m_sr_BoxesRunTime$().c(this.dp, x$0.dp)) && $m_sr_BoxesRunTime$().c(this.dq, x$0.dq)) && $m_sr_BoxesRunTime$().c(this.dr, x$0.dr)) && $m_sr_BoxesRunTime$().c(this.ds, x$0.ds)) && $m_sr_BoxesRunTime$().c(this.dt, x$0.dt)) && $m_sr_BoxesRunTime$().c(this.du, x$0.du)) && $m_sr_BoxesRunTime$().c(this.de, x$0.de)) && $m_sr_BoxesRunTime$().c(this.df, x$0.df)) && $m_sr_BoxesRunTime$().c(this.dg, x$0.dg)) && $m_sr_BoxesRunTime$().c(this.dh, x$0.dh)) && $m_sr_BoxesRunTime$().c(this.di, x$0.di)) && $m_sr_BoxesRunTime$().c(this.dj, x$0.dj)) && $m_sr_BoxesRunTime$().c(this.dk, x$0.dk)) && $m_sr_BoxesRunTime$().c(this.dl, x$0.dl))));
});
$p.F = (function() {
  return "Tuple17";
});
$p.o = (function() {
  return (((((((((((((((((((((((((((((((((("(" + this.gd) + ",") + this.dm) + ",") + this.dn) + ",") + this.dp) + ",") + this.dq) + ",") + this.dr) + ",") + this.ds) + ",") + this.dt) + ",") + this.du) + ",") + this.de) + ",") + this.df) + ",") + this.dg) + ",") + this.dh) + ",") + this.di) + ",") + this.dj) + ",") + this.dk) + ",") + this.dl) + ")");
});
function $isArrayOf_T17(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ag)));
}
var $d_T17 = new $TypeData().i($c_T17, "scala.Tuple17", ({
  ag: 1,
  b: 1,
  c: 1,
  bJ: 1,
  a: 1
}));
/** @constructor */
function $c_T18(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18) {
  this.ge = null;
  this.dE = null;
  this.dF = null;
  this.dG = null;
  this.dH = null;
  this.dI = null;
  this.dJ = null;
  this.dK = null;
  this.dL = null;
  this.dv = null;
  this.dw = null;
  this.dx = null;
  this.dy = null;
  this.dz = null;
  this.dA = null;
  this.dB = null;
  this.dC = null;
  this.dD = null;
  this.ge = _1;
  this.dE = _2;
  this.dF = _3;
  this.dG = _4;
  this.dH = _5;
  this.dI = _6;
  this.dJ = _7;
  this.dK = _8;
  this.dL = _9;
  this.dv = _10;
  this.dw = _11;
  this.dx = _12;
  this.dy = _13;
  this.dz = _14;
  this.dA = _15;
  this.dB = _16;
  this.dC = _17;
  this.dD = _18;
}
$p = $c_T18.prototype = new $h_O();
$p.constructor = $c_T18;
/** @constructor */
function $h_T18() {
}
$h_T18.prototype = $p;
$p.I = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.x = (function() {
  return 18;
});
$p.n = (function(n) {
  return $f_s_Product18__productElement__I__O(this, n);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().V(this, (-937041276), true);
});
$p.s = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T18) && ((((((((((((((((($m_sr_BoxesRunTime$().c(this.ge, x$0.ge) && $m_sr_BoxesRunTime$().c(this.dE, x$0.dE)) && $m_sr_BoxesRunTime$().c(this.dF, x$0.dF)) && $m_sr_BoxesRunTime$().c(this.dG, x$0.dG)) && $m_sr_BoxesRunTime$().c(this.dH, x$0.dH)) && $m_sr_BoxesRunTime$().c(this.dI, x$0.dI)) && $m_sr_BoxesRunTime$().c(this.dJ, x$0.dJ)) && $m_sr_BoxesRunTime$().c(this.dK, x$0.dK)) && $m_sr_BoxesRunTime$().c(this.dL, x$0.dL)) && $m_sr_BoxesRunTime$().c(this.dv, x$0.dv)) && $m_sr_BoxesRunTime$().c(this.dw, x$0.dw)) && $m_sr_BoxesRunTime$().c(this.dx, x$0.dx)) && $m_sr_BoxesRunTime$().c(this.dy, x$0.dy)) && $m_sr_BoxesRunTime$().c(this.dz, x$0.dz)) && $m_sr_BoxesRunTime$().c(this.dA, x$0.dA)) && $m_sr_BoxesRunTime$().c(this.dB, x$0.dB)) && $m_sr_BoxesRunTime$().c(this.dC, x$0.dC)) && $m_sr_BoxesRunTime$().c(this.dD, x$0.dD))));
});
$p.F = (function() {
  return "Tuple18";
});
$p.o = (function() {
  return (((((((((((((((((((((((((((((((((((("(" + this.ge) + ",") + this.dE) + ",") + this.dF) + ",") + this.dG) + ",") + this.dH) + ",") + this.dI) + ",") + this.dJ) + ",") + this.dK) + ",") + this.dL) + ",") + this.dv) + ",") + this.dw) + ",") + this.dx) + ",") + this.dy) + ",") + this.dz) + ",") + this.dA) + ",") + this.dB) + ",") + this.dC) + ",") + this.dD) + ")");
});
function $isArrayOf_T18(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ah)));
}
var $d_T18 = new $TypeData().i($c_T18, "scala.Tuple18", ({
  ah: 1,
  b: 1,
  c: 1,
  bK: 1,
  a: 1
}));
/** @constructor */
function $c_T19(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19) {
  this.gf = null;
  this.dW = null;
  this.dX = null;
  this.dY = null;
  this.dZ = null;
  this.e0 = null;
  this.e1 = null;
  this.e2 = null;
  this.e3 = null;
  this.dM = null;
  this.dN = null;
  this.dO = null;
  this.dP = null;
  this.dQ = null;
  this.dR = null;
  this.dS = null;
  this.dT = null;
  this.dU = null;
  this.dV = null;
  this.gf = _1;
  this.dW = _2;
  this.dX = _3;
  this.dY = _4;
  this.dZ = _5;
  this.e0 = _6;
  this.e1 = _7;
  this.e2 = _8;
  this.e3 = _9;
  this.dM = _10;
  this.dN = _11;
  this.dO = _12;
  this.dP = _13;
  this.dQ = _14;
  this.dR = _15;
  this.dS = _16;
  this.dT = _17;
  this.dU = _18;
  this.dV = _19;
}
$p = $c_T19.prototype = new $h_O();
$p.constructor = $c_T19;
/** @constructor */
function $h_T19() {
}
$h_T19.prototype = $p;
$p.I = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.x = (function() {
  return 19;
});
$p.n = (function(n) {
  return $f_s_Product19__productElement__I__O(this, n);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().V(this, (-1955940499), true);
});
$p.s = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T19) && (((((((((((((((((($m_sr_BoxesRunTime$().c(this.gf, x$0.gf) && $m_sr_BoxesRunTime$().c(this.dW, x$0.dW)) && $m_sr_BoxesRunTime$().c(this.dX, x$0.dX)) && $m_sr_BoxesRunTime$().c(this.dY, x$0.dY)) && $m_sr_BoxesRunTime$().c(this.dZ, x$0.dZ)) && $m_sr_BoxesRunTime$().c(this.e0, x$0.e0)) && $m_sr_BoxesRunTime$().c(this.e1, x$0.e1)) && $m_sr_BoxesRunTime$().c(this.e2, x$0.e2)) && $m_sr_BoxesRunTime$().c(this.e3, x$0.e3)) && $m_sr_BoxesRunTime$().c(this.dM, x$0.dM)) && $m_sr_BoxesRunTime$().c(this.dN, x$0.dN)) && $m_sr_BoxesRunTime$().c(this.dO, x$0.dO)) && $m_sr_BoxesRunTime$().c(this.dP, x$0.dP)) && $m_sr_BoxesRunTime$().c(this.dQ, x$0.dQ)) && $m_sr_BoxesRunTime$().c(this.dR, x$0.dR)) && $m_sr_BoxesRunTime$().c(this.dS, x$0.dS)) && $m_sr_BoxesRunTime$().c(this.dT, x$0.dT)) && $m_sr_BoxesRunTime$().c(this.dU, x$0.dU)) && $m_sr_BoxesRunTime$().c(this.dV, x$0.dV))));
});
$p.F = (function() {
  return "Tuple19";
});
$p.o = (function() {
  return (((((((((((((((((((((((((((((((((((((("(" + this.gf) + ",") + this.dW) + ",") + this.dX) + ",") + this.dY) + ",") + this.dZ) + ",") + this.e0) + ",") + this.e1) + ",") + this.e2) + ",") + this.e3) + ",") + this.dM) + ",") + this.dN) + ",") + this.dO) + ",") + this.dP) + ",") + this.dQ) + ",") + this.dR) + ",") + this.dS) + ",") + this.dT) + ",") + this.dU) + ",") + this.dV) + ")");
});
function $isArrayOf_T19(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ai)));
}
var $d_T19 = new $TypeData().i($c_T19, "scala.Tuple19", ({
  ai: 1,
  b: 1,
  c: 1,
  bL: 1,
  a: 1
}));
/** @constructor */
function $c_T2(_1, _2) {
  this.P = null;
  this.as = null;
  this.P = _1;
  this.as = _2;
}
$p = $c_T2.prototype = new $h_O();
$p.constructor = $c_T2;
/** @constructor */
function $h_T2() {
}
$h_T2.prototype = $p;
$p.x = (function() {
  return 2;
});
$p.n = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n);
});
$p.o = (function() {
  return (((("(" + this.P) + ",") + this.as) + ")");
});
$p.F = (function() {
  return "Tuple2";
});
$p.I = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().V(this, (-116390334), true);
});
$p.s = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T2) && ($m_sr_BoxesRunTime$().c(this.P, x$1.P) && $m_sr_BoxesRunTime$().c(this.as, x$1.as))));
});
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aj)));
}
var $d_T2 = new $TypeData().i($c_T2, "scala.Tuple2", ({
  aj: 1,
  bM: 1,
  c: 1,
  b: 1,
  a: 1
}));
/** @constructor */
function $c_T20(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20) {
  this.gg = null;
  this.ee = null;
  this.eg = null;
  this.eh = null;
  this.ei = null;
  this.ej = null;
  this.ek = null;
  this.el = null;
  this.em = null;
  this.e4 = null;
  this.e5 = null;
  this.e6 = null;
  this.e7 = null;
  this.e8 = null;
  this.e9 = null;
  this.ea = null;
  this.eb = null;
  this.ec = null;
  this.ed = null;
  this.ef = null;
  this.gg = _1;
  this.ee = _2;
  this.eg = _3;
  this.eh = _4;
  this.ei = _5;
  this.ej = _6;
  this.ek = _7;
  this.el = _8;
  this.em = _9;
  this.e4 = _10;
  this.e5 = _11;
  this.e6 = _12;
  this.e7 = _13;
  this.e8 = _14;
  this.e9 = _15;
  this.ea = _16;
  this.eb = _17;
  this.ec = _18;
  this.ed = _19;
  this.ef = _20;
}
$p = $c_T20.prototype = new $h_O();
$p.constructor = $c_T20;
/** @constructor */
function $h_T20() {
}
$h_T20.prototype = $p;
$p.I = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.x = (function() {
  return 20;
});
$p.n = (function(n) {
  return $f_s_Product20__productElement__I__O(this, n);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().V(this, 1328807075, true);
});
$p.s = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T20) && ((((((((((((((((((($m_sr_BoxesRunTime$().c(this.gg, x$0.gg) && $m_sr_BoxesRunTime$().c(this.ee, x$0.ee)) && $m_sr_BoxesRunTime$().c(this.eg, x$0.eg)) && $m_sr_BoxesRunTime$().c(this.eh, x$0.eh)) && $m_sr_BoxesRunTime$().c(this.ei, x$0.ei)) && $m_sr_BoxesRunTime$().c(this.ej, x$0.ej)) && $m_sr_BoxesRunTime$().c(this.ek, x$0.ek)) && $m_sr_BoxesRunTime$().c(this.el, x$0.el)) && $m_sr_BoxesRunTime$().c(this.em, x$0.em)) && $m_sr_BoxesRunTime$().c(this.e4, x$0.e4)) && $m_sr_BoxesRunTime$().c(this.e5, x$0.e5)) && $m_sr_BoxesRunTime$().c(this.e6, x$0.e6)) && $m_sr_BoxesRunTime$().c(this.e7, x$0.e7)) && $m_sr_BoxesRunTime$().c(this.e8, x$0.e8)) && $m_sr_BoxesRunTime$().c(this.e9, x$0.e9)) && $m_sr_BoxesRunTime$().c(this.ea, x$0.ea)) && $m_sr_BoxesRunTime$().c(this.eb, x$0.eb)) && $m_sr_BoxesRunTime$().c(this.ec, x$0.ec)) && $m_sr_BoxesRunTime$().c(this.ed, x$0.ed)) && $m_sr_BoxesRunTime$().c(this.ef, x$0.ef))));
});
$p.F = (function() {
  return "Tuple20";
});
$p.o = (function() {
  return (((((((((((((((((((((((((((((((((((((((("(" + this.gg) + ",") + this.ee) + ",") + this.eg) + ",") + this.eh) + ",") + this.ei) + ",") + this.ej) + ",") + this.ek) + ",") + this.el) + ",") + this.em) + ",") + this.e4) + ",") + this.e5) + ",") + this.e6) + ",") + this.e7) + ",") + this.e8) + ",") + this.e9) + ",") + this.ea) + ",") + this.eb) + ",") + this.ec) + ",") + this.ed) + ",") + this.ef) + ")");
});
function $isArrayOf_T20(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ak)));
}
var $d_T20 = new $TypeData().i($c_T20, "scala.Tuple20", ({
  ak: 1,
  b: 1,
  c: 1,
  bN: 1,
  a: 1
}));
/** @constructor */
function $c_T21(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21) {
  this.gh = null;
  this.ex = null;
  this.eA = null;
  this.eB = null;
  this.eC = null;
  this.eD = null;
  this.eE = null;
  this.eF = null;
  this.eG = null;
  this.en = null;
  this.eo = null;
  this.ep = null;
  this.eq = null;
  this.er = null;
  this.es = null;
  this.et = null;
  this.eu = null;
  this.ev = null;
  this.ew = null;
  this.ey = null;
  this.ez = null;
  this.gh = _1;
  this.ex = _2;
  this.eA = _3;
  this.eB = _4;
  this.eC = _5;
  this.eD = _6;
  this.eE = _7;
  this.eF = _8;
  this.eG = _9;
  this.en = _10;
  this.eo = _11;
  this.ep = _12;
  this.eq = _13;
  this.er = _14;
  this.es = _15;
  this.et = _16;
  this.eu = _17;
  this.ev = _18;
  this.ew = _19;
  this.ey = _20;
  this.ez = _21;
}
$p = $c_T21.prototype = new $h_O();
$p.constructor = $c_T21;
/** @constructor */
function $h_T21() {
}
$h_T21.prototype = $p;
$p.I = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.x = (function() {
  return 21;
});
$p.n = (function(n) {
  return $f_s_Product21__productElement__I__O(this, n);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().V(this, (-21288119), true);
});
$p.s = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T21) && (((((((((((((((((((($m_sr_BoxesRunTime$().c(this.gh, x$0.gh) && $m_sr_BoxesRunTime$().c(this.ex, x$0.ex)) && $m_sr_BoxesRunTime$().c(this.eA, x$0.eA)) && $m_sr_BoxesRunTime$().c(this.eB, x$0.eB)) && $m_sr_BoxesRunTime$().c(this.eC, x$0.eC)) && $m_sr_BoxesRunTime$().c(this.eD, x$0.eD)) && $m_sr_BoxesRunTime$().c(this.eE, x$0.eE)) && $m_sr_BoxesRunTime$().c(this.eF, x$0.eF)) && $m_sr_BoxesRunTime$().c(this.eG, x$0.eG)) && $m_sr_BoxesRunTime$().c(this.en, x$0.en)) && $m_sr_BoxesRunTime$().c(this.eo, x$0.eo)) && $m_sr_BoxesRunTime$().c(this.ep, x$0.ep)) && $m_sr_BoxesRunTime$().c(this.eq, x$0.eq)) && $m_sr_BoxesRunTime$().c(this.er, x$0.er)) && $m_sr_BoxesRunTime$().c(this.es, x$0.es)) && $m_sr_BoxesRunTime$().c(this.et, x$0.et)) && $m_sr_BoxesRunTime$().c(this.eu, x$0.eu)) && $m_sr_BoxesRunTime$().c(this.ev, x$0.ev)) && $m_sr_BoxesRunTime$().c(this.ew, x$0.ew)) && $m_sr_BoxesRunTime$().c(this.ey, x$0.ey)) && $m_sr_BoxesRunTime$().c(this.ez, x$0.ez))));
});
$p.F = (function() {
  return "Tuple21";
});
$p.o = (function() {
  return (((((((((((((((((((((((((((((((((((((((((("(" + this.gh) + ",") + this.ex) + ",") + this.eA) + ",") + this.eB) + ",") + this.eC) + ",") + this.eD) + ",") + this.eE) + ",") + this.eF) + ",") + this.eG) + ",") + this.en) + ",") + this.eo) + ",") + this.ep) + ",") + this.eq) + ",") + this.er) + ",") + this.es) + ",") + this.et) + ",") + this.eu) + ",") + this.ev) + ",") + this.ew) + ",") + this.ey) + ",") + this.ez) + ")");
});
function $isArrayOf_T21(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.al)));
}
var $d_T21 = new $TypeData().i($c_T21, "scala.Tuple21", ({
  al: 1,
  b: 1,
  c: 1,
  bO: 1,
  a: 1
}));
/** @constructor */
function $c_T22(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22) {
  this.gi = null;
  this.eR = null;
  this.eV = null;
  this.eW = null;
  this.eX = null;
  this.eY = null;
  this.eZ = null;
  this.f0 = null;
  this.f1 = null;
  this.eH = null;
  this.eI = null;
  this.eJ = null;
  this.eK = null;
  this.eL = null;
  this.eM = null;
  this.eN = null;
  this.eO = null;
  this.eP = null;
  this.eQ = null;
  this.eS = null;
  this.eT = null;
  this.eU = null;
  this.gi = _1;
  this.eR = _2;
  this.eV = _3;
  this.eW = _4;
  this.eX = _5;
  this.eY = _6;
  this.eZ = _7;
  this.f0 = _8;
  this.f1 = _9;
  this.eH = _10;
  this.eI = _11;
  this.eJ = _12;
  this.eK = _13;
  this.eL = _14;
  this.eM = _15;
  this.eN = _16;
  this.eO = _17;
  this.eP = _18;
  this.eQ = _19;
  this.eS = _20;
  this.eT = _21;
  this.eU = _22;
}
$p = $c_T22.prototype = new $h_O();
$p.constructor = $c_T22;
/** @constructor */
function $h_T22() {
}
$h_T22.prototype = $p;
$p.I = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.x = (function() {
  return 22;
});
$p.n = (function(n) {
  return $f_s_Product22__productElement__I__O(this, n);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().V(this, (-139445068), true);
});
$p.s = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T22) && ((((((((((((((((((((($m_sr_BoxesRunTime$().c(this.gi, x$0.gi) && $m_sr_BoxesRunTime$().c(this.eR, x$0.eR)) && $m_sr_BoxesRunTime$().c(this.eV, x$0.eV)) && $m_sr_BoxesRunTime$().c(this.eW, x$0.eW)) && $m_sr_BoxesRunTime$().c(this.eX, x$0.eX)) && $m_sr_BoxesRunTime$().c(this.eY, x$0.eY)) && $m_sr_BoxesRunTime$().c(this.eZ, x$0.eZ)) && $m_sr_BoxesRunTime$().c(this.f0, x$0.f0)) && $m_sr_BoxesRunTime$().c(this.f1, x$0.f1)) && $m_sr_BoxesRunTime$().c(this.eH, x$0.eH)) && $m_sr_BoxesRunTime$().c(this.eI, x$0.eI)) && $m_sr_BoxesRunTime$().c(this.eJ, x$0.eJ)) && $m_sr_BoxesRunTime$().c(this.eK, x$0.eK)) && $m_sr_BoxesRunTime$().c(this.eL, x$0.eL)) && $m_sr_BoxesRunTime$().c(this.eM, x$0.eM)) && $m_sr_BoxesRunTime$().c(this.eN, x$0.eN)) && $m_sr_BoxesRunTime$().c(this.eO, x$0.eO)) && $m_sr_BoxesRunTime$().c(this.eP, x$0.eP)) && $m_sr_BoxesRunTime$().c(this.eQ, x$0.eQ)) && $m_sr_BoxesRunTime$().c(this.eS, x$0.eS)) && $m_sr_BoxesRunTime$().c(this.eT, x$0.eT)) && $m_sr_BoxesRunTime$().c(this.eU, x$0.eU))));
});
$p.F = (function() {
  return "Tuple22";
});
$p.o = (function() {
  return (((((((((((((((((((((((((((((((((((((((((((("(" + this.gi) + ",") + this.eR) + ",") + this.eV) + ",") + this.eW) + ",") + this.eX) + ",") + this.eY) + ",") + this.eZ) + ",") + this.f0) + ",") + this.f1) + ",") + this.eH) + ",") + this.eI) + ",") + this.eJ) + ",") + this.eK) + ",") + this.eL) + ",") + this.eM) + ",") + this.eN) + ",") + this.eO) + ",") + this.eP) + ",") + this.eQ) + ",") + this.eS) + ",") + this.eT) + ",") + this.eU) + ")");
});
function $isArrayOf_T22(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.am)));
}
var $d_T22 = new $TypeData().i($c_T22, "scala.Tuple22", ({
  am: 1,
  b: 1,
  c: 1,
  bP: 1,
  a: 1
}));
/** @constructor */
function $c_T3(_1, _2, _3) {
  this.bv = null;
  this.bg = null;
  this.bh = null;
  this.bv = _1;
  this.bg = _2;
  this.bh = _3;
}
$p = $c_T3.prototype = new $h_O();
$p.constructor = $c_T3;
/** @constructor */
function $h_T3() {
}
$h_T3.prototype = $p;
$p.I = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.x = (function() {
  return 3;
});
$p.n = (function(n) {
  return $f_s_Product3__productElement__I__O(this, n);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().V(this, (-192629203), true);
});
$p.s = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T3) && (($m_sr_BoxesRunTime$().c(this.bv, x$0.bv) && $m_sr_BoxesRunTime$().c(this.bg, x$0.bg)) && $m_sr_BoxesRunTime$().c(this.bh, x$0.bh))));
});
$p.F = (function() {
  return "Tuple3";
});
$p.o = (function() {
  return (((((("(" + this.bv) + ",") + this.bg) + ",") + this.bh) + ")");
});
function $isArrayOf_T3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.an)));
}
var $d_T3 = new $TypeData().i($c_T3, "scala.Tuple3", ({
  an: 1,
  b: 1,
  c: 1,
  bQ: 1,
  a: 1
}));
/** @constructor */
function $c_T4(_1, _2, _3, _4) {
  this.f2 = null;
  this.bw = null;
  this.bx = null;
  this.by = null;
  this.f2 = _1;
  this.bw = _2;
  this.bx = _3;
  this.by = _4;
}
$p = $c_T4.prototype = new $h_O();
$p.constructor = $c_T4;
/** @constructor */
function $h_T4() {
}
$h_T4.prototype = $p;
$p.I = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.x = (function() {
  return 4;
});
$p.n = (function(n) {
  return $f_s_Product4__productElement__I__O(this, n);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().V(this, (-1542739752), true);
});
$p.s = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T4) && ((($m_sr_BoxesRunTime$().c(this.f2, x$0.f2) && $m_sr_BoxesRunTime$().c(this.bw, x$0.bw)) && $m_sr_BoxesRunTime$().c(this.bx, x$0.bx)) && $m_sr_BoxesRunTime$().c(this.by, x$0.by))));
});
$p.F = (function() {
  return "Tuple4";
});
$p.o = (function() {
  return (((((((("(" + this.f2) + ",") + this.bw) + ",") + this.bx) + ",") + this.by) + ")");
});
function $isArrayOf_T4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ao)));
}
var $d_T4 = new $TypeData().i($c_T4, "scala.Tuple4", ({
  ao: 1,
  b: 1,
  c: 1,
  bR: 1,
  a: 1
}));
/** @constructor */
function $c_T5(_1, _2, _3, _4, _5) {
  this.gj = null;
  this.f3 = null;
  this.f4 = null;
  this.f5 = null;
  this.f6 = null;
  this.gj = _1;
  this.f3 = _2;
  this.f4 = _3;
  this.f5 = _4;
  this.f6 = _5;
}
$p = $c_T5.prototype = new $h_O();
$p.constructor = $c_T5;
/** @constructor */
function $h_T5() {
}
$h_T5.prototype = $p;
$p.I = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.x = (function() {
  return 5;
});
$p.n = (function(n) {
  return $f_s_Product5__productElement__I__O(this, n);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().V(this, 417360321, true);
});
$p.s = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T5) && (((($m_sr_BoxesRunTime$().c(this.gj, x$0.gj) && $m_sr_BoxesRunTime$().c(this.f3, x$0.f3)) && $m_sr_BoxesRunTime$().c(this.f4, x$0.f4)) && $m_sr_BoxesRunTime$().c(this.f5, x$0.f5)) && $m_sr_BoxesRunTime$().c(this.f6, x$0.f6))));
});
$p.F = (function() {
  return "Tuple5";
});
$p.o = (function() {
  return (((((((((("(" + this.gj) + ",") + this.f3) + ",") + this.f4) + ",") + this.f5) + ",") + this.f6) + ")");
});
function $isArrayOf_T5(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ap)));
}
var $d_T5 = new $TypeData().i($c_T5, "scala.Tuple5", ({
  ap: 1,
  b: 1,
  c: 1,
  bS: 1,
  a: 1
}));
/** @constructor */
function $c_T6(_1, _2, _3, _4, _5, _6) {
  this.gk = null;
  this.f7 = null;
  this.f8 = null;
  this.f9 = null;
  this.fa = null;
  this.fb = null;
  this.gk = _1;
  this.f7 = _2;
  this.f8 = _3;
  this.f9 = _4;
  this.fa = _5;
  this.fb = _6;
}
$p = $c_T6.prototype = new $h_O();
$p.constructor = $c_T6;
/** @constructor */
function $h_T6() {
}
$h_T6.prototype = $p;
$p.I = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.x = (function() {
  return 6;
});
$p.n = (function(n) {
  return $f_s_Product6__productElement__I__O(this, n);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().V(this, (-1037607828), true);
});
$p.s = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T6) && ((((($m_sr_BoxesRunTime$().c(this.gk, x$0.gk) && $m_sr_BoxesRunTime$().c(this.f7, x$0.f7)) && $m_sr_BoxesRunTime$().c(this.f8, x$0.f8)) && $m_sr_BoxesRunTime$().c(this.f9, x$0.f9)) && $m_sr_BoxesRunTime$().c(this.fa, x$0.fa)) && $m_sr_BoxesRunTime$().c(this.fb, x$0.fb))));
});
$p.F = (function() {
  return "Tuple6";
});
$p.o = (function() {
  return (((((((((((("(" + this.gk) + ",") + this.f7) + ",") + this.f8) + ",") + this.f9) + ",") + this.fa) + ",") + this.fb) + ")");
});
function $isArrayOf_T6(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aq)));
}
var $d_T6 = new $TypeData().i($c_T6, "scala.Tuple6", ({
  aq: 1,
  b: 1,
  c: 1,
  bT: 1,
  a: 1
}));
/** @constructor */
function $c_T7(_1, _2, _3, _4, _5, _6, _7) {
  this.gl = null;
  this.fc = null;
  this.fd = null;
  this.fe = null;
  this.ff = null;
  this.fg = null;
  this.fh = null;
  this.gl = _1;
  this.fc = _2;
  this.fd = _3;
  this.fe = _4;
  this.ff = _5;
  this.fg = _6;
  this.fh = _7;
}
$p = $c_T7.prototype = new $h_O();
$p.constructor = $c_T7;
/** @constructor */
function $h_T7() {
}
$h_T7.prototype = $p;
$p.I = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.x = (function() {
  return 7;
});
$p.n = (function(n) {
  return $f_s_Product7__productElement__I__O(this, n);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().V(this, (-1050932777), true);
});
$p.s = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T7) && (((((($m_sr_BoxesRunTime$().c(this.gl, x$0.gl) && $m_sr_BoxesRunTime$().c(this.fc, x$0.fc)) && $m_sr_BoxesRunTime$().c(this.fd, x$0.fd)) && $m_sr_BoxesRunTime$().c(this.fe, x$0.fe)) && $m_sr_BoxesRunTime$().c(this.ff, x$0.ff)) && $m_sr_BoxesRunTime$().c(this.fg, x$0.fg)) && $m_sr_BoxesRunTime$().c(this.fh, x$0.fh))));
});
$p.F = (function() {
  return "Tuple7";
});
$p.o = (function() {
  return (((((((((((((("(" + this.gl) + ",") + this.fc) + ",") + this.fd) + ",") + this.fe) + ",") + this.ff) + ",") + this.fg) + ",") + this.fh) + ")");
});
function $isArrayOf_T7(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ar)));
}
var $d_T7 = new $TypeData().i($c_T7, "scala.Tuple7", ({
  ar: 1,
  b: 1,
  c: 1,
  bU: 1,
  a: 1
}));
/** @constructor */
function $c_T8(_1, _2, _3, _4, _5, _6, _7, _8) {
  this.gm = null;
  this.fi = null;
  this.fj = null;
  this.fk = null;
  this.fl = null;
  this.fm = null;
  this.fn = null;
  this.fo = null;
  this.gm = _1;
  this.fi = _2;
  this.fj = _3;
  this.fk = _4;
  this.fl = _5;
  this.fm = _6;
  this.fn = _7;
  this.fo = _8;
}
$p = $c_T8.prototype = new $h_O();
$p.constructor = $c_T8;
/** @constructor */
function $h_T8() {
}
$h_T8.prototype = $p;
$p.I = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.x = (function() {
  return 8;
});
$p.n = (function(n) {
  return $f_s_Product8__productElement__I__O(this, n);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().V(this, 1998822530, true);
});
$p.s = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T8) && ((((((($m_sr_BoxesRunTime$().c(this.gm, x$0.gm) && $m_sr_BoxesRunTime$().c(this.fi, x$0.fi)) && $m_sr_BoxesRunTime$().c(this.fj, x$0.fj)) && $m_sr_BoxesRunTime$().c(this.fk, x$0.fk)) && $m_sr_BoxesRunTime$().c(this.fl, x$0.fl)) && $m_sr_BoxesRunTime$().c(this.fm, x$0.fm)) && $m_sr_BoxesRunTime$().c(this.fn, x$0.fn)) && $m_sr_BoxesRunTime$().c(this.fo, x$0.fo))));
});
$p.F = (function() {
  return "Tuple8";
});
$p.o = (function() {
  return (((((((((((((((("(" + this.gm) + ",") + this.fi) + ",") + this.fj) + ",") + this.fk) + ",") + this.fl) + ",") + this.fm) + ",") + this.fn) + ",") + this.fo) + ")");
});
function $isArrayOf_T8(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.as)));
}
var $d_T8 = new $TypeData().i($c_T8, "scala.Tuple8", ({
  as: 1,
  b: 1,
  c: 1,
  bV: 1,
  a: 1
}));
/** @constructor */
function $c_T9(_1, _2, _3, _4, _5, _6, _7, _8, _9) {
  this.gn = null;
  this.fp = null;
  this.fq = null;
  this.fr = null;
  this.fs = null;
  this.ft = null;
  this.fu = null;
  this.fv = null;
  this.fw = null;
  this.gn = _1;
  this.fp = _2;
  this.fq = _3;
  this.fr = _4;
  this.fs = _5;
  this.ft = _6;
  this.fu = _7;
  this.fv = _8;
  this.fw = _9;
}
$p = $c_T9.prototype = new $h_O();
$p.constructor = $c_T9;
/** @constructor */
function $h_T9() {
}
$h_T9.prototype = $p;
$p.I = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.x = (function() {
  return 9;
});
$p.n = (function(n) {
  return $f_s_Product9__productElement__I__O(this, n);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().V(this, (-1807911176), true);
});
$p.s = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T9) && (((((((($m_sr_BoxesRunTime$().c(this.gn, x$0.gn) && $m_sr_BoxesRunTime$().c(this.fp, x$0.fp)) && $m_sr_BoxesRunTime$().c(this.fq, x$0.fq)) && $m_sr_BoxesRunTime$().c(this.fr, x$0.fr)) && $m_sr_BoxesRunTime$().c(this.fs, x$0.fs)) && $m_sr_BoxesRunTime$().c(this.ft, x$0.ft)) && $m_sr_BoxesRunTime$().c(this.fu, x$0.fu)) && $m_sr_BoxesRunTime$().c(this.fv, x$0.fv)) && $m_sr_BoxesRunTime$().c(this.fw, x$0.fw))));
});
$p.F = (function() {
  return "Tuple9";
});
$p.o = (function() {
  return (((((((((((((((((("(" + this.gn) + ",") + this.fp) + ",") + this.fq) + ",") + this.fr) + ",") + this.fs) + ",") + this.ft) + ",") + this.fu) + ",") + this.fv) + ",") + this.fw) + ")");
});
function $isArrayOf_T9(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.at)));
}
var $d_T9 = new $TypeData().i($c_T9, "scala.Tuple9", ({
  at: 1,
  b: 1,
  c: 1,
  bW: 1,
  a: 1
}));
function $f_sc_Iterable__toString__T($thiz) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, ($thiz.fY() + "("), ", ", ")");
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
$p.T = (function() {
  return false;
});
$p.q4 = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator");
});
$p.af = (function() {
  return 0;
});
$p.O = (function() {
  this.q4();
});
$p.iQ = (function(from, until) {
  return this;
});
var $d_sc_Iterator$$anon$19 = new $TypeData().i($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  c6: 1,
  m: 1,
  d: 1,
  e: 1,
  r: 1
}));
function $p_sc_Iterator$ConcatIterator__merge$1__V($thiz) {
  while (true) {
    if (($thiz.ay instanceof $c_sc_Iterator$ConcatIterator)) {
      var c = $thiz.ay;
      $thiz.ay = c.ay;
      $thiz.bA = c.bA;
      if ((c.aL !== null)) {
        if (($thiz.aK === null)) {
          $thiz.aK = c.aK;
        }
        var x$proxy10 = c.aK;
        if ((x$proxy10 === null)) {
          $m_sr_Scala3RunTime$().iP();
        }
        x$proxy10.h3 = $thiz.aL;
        $thiz.aL = c.aL;
      }
    } else {
      return (void 0);
    }
  }
}
function $p_sc_Iterator$ConcatIterator__advance$1__Z($thiz) {
  while (true) {
    if (($thiz.aL === null)) {
      $thiz.ay = null;
      $thiz.aK = null;
      return false;
    } else {
      $thiz.ay = $thiz.aL.pc();
      if (($thiz.aK === $thiz.aL)) {
        var x$proxy12 = $thiz.aK;
        if ((x$proxy12 === null)) {
          $m_sr_Scala3RunTime$().iP();
        }
        $thiz.aK = x$proxy12.h3;
      }
      $thiz.aL = $thiz.aL.h3;
      $p_sc_Iterator$ConcatIterator__merge$1__V($thiz);
      if ($thiz.bA) {
        return true;
      } else {
        if ((!(($thiz.ay !== null) && $thiz.ay.T()))) {
          continue;
        }
        $thiz.bA = true;
        return true;
      }
    }
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIterator(from) {
  this.ay = null;
  this.aL = null;
  this.aK = null;
  this.bA = false;
  this.ay = from;
  this.aL = null;
  this.aK = null;
  this.bA = false;
}
$p = $c_sc_Iterator$ConcatIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$ConcatIterator;
/** @constructor */
function $h_sc_Iterator$ConcatIterator() {
}
$h_sc_Iterator$ConcatIterator.prototype = $p;
$p.T = (function() {
  if (this.bA) {
    return true;
  } else if ((this.ay !== null)) {
    if (this.ay.T()) {
      this.bA = true;
      return true;
    } else {
      return $p_sc_Iterator$ConcatIterator__advance$1__Z(this);
    }
  } else {
    return false;
  }
});
$p.O = (function() {
  if (this.T()) {
    this.bA = false;
    var x$proxy13 = this.ay;
    if ((x$proxy13 === null)) {
      $m_sr_Scala3RunTime$().iP();
    }
    return x$proxy13.O();
  } else {
    return $m_sc_Iterator$().b7.O();
  }
});
$p.oz = (function(that) {
  var c = new $c_sc_Iterator$ConcatIteratorCell(that, null);
  if ((this.aL === null)) {
    this.aL = c;
    this.aK = c;
  } else {
    var x$proxy14 = this.aK;
    if ((x$proxy14 === null)) {
      $m_sr_Scala3RunTime$().iP();
    }
    x$proxy14.h3 = c;
    this.aK = c;
  }
  if ((this.ay === null)) {
    this.ay = $m_sc_Iterator$().b7;
  }
  return this;
});
function $isArrayOf_sc_Iterator$ConcatIterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ay)));
}
var $d_sc_Iterator$ConcatIterator = new $TypeData().i($c_sc_Iterator$ConcatIterator, "scala.collection.Iterator$ConcatIterator", ({
  ay: 1,
  m: 1,
  d: 1,
  e: 1,
  r: 1
}));
function $p_sc_Iterator$SliceIterator__skip__V($thiz) {
  while (($thiz.bj > 0)) {
    if ($thiz.bB.T()) {
      $thiz.bB.O();
      $thiz.bj = (($thiz.bj - 1) | 0);
    } else {
      $thiz.bj = 0;
    }
  }
}
function $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I($thiz, lo$1) {
  if (($thiz.aC < 0)) {
    return (-1);
  } else {
    var that = (($thiz.aC - lo$1) | 0);
    return ((that < 0) ? 0 : that);
  }
}
/** @constructor */
function $c_sc_Iterator$SliceIterator(underlying, start, limit) {
  this.bB = null;
  this.aC = 0;
  this.bj = 0;
  this.bB = underlying;
  this.aC = limit;
  this.bj = start;
}
$p = $c_sc_Iterator$SliceIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$SliceIterator;
/** @constructor */
function $h_sc_Iterator$SliceIterator() {
}
$h_sc_Iterator$SliceIterator.prototype = $p;
$p.af = (function() {
  var size = this.bB.af();
  if ((size < 0)) {
    return (-1);
  } else {
    var that = ((size - this.bj) | 0);
    var dropSize = ((that < 0) ? 0 : that);
    if ((this.aC < 0)) {
      return dropSize;
    } else {
      var x = this.aC;
      return ((x < dropSize) ? x : dropSize);
    }
  }
});
$p.T = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  return ((this.aC !== 0) && this.bB.T());
});
$p.O = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  if ((this.aC > 0)) {
    this.aC = ((this.aC - 1) | 0);
    return this.bB.O();
  } else {
    return ((this.aC < 0) ? this.bB.O() : $m_sc_Iterator$().b7.O());
  }
});
$p.iQ = (function(from, until) {
  var lo = ((from > 0) ? from : 0);
  if ((until < 0)) {
    var rest = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
  } else if ((until <= lo)) {
    var rest = 0;
  } else if ((this.aC < 0)) {
    var rest = ((until - lo) | 0);
  } else {
    var x = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
    var that = ((until - lo) | 0);
    var rest = ((x < that) ? x : that);
  }
  var sum = ((this.bj + lo) | 0);
  if ((rest === 0)) {
    return $m_sc_Iterator$().b7;
  } else if ((sum < 0)) {
    this.bj = 2147483647;
    this.aC = 0;
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => new $c_sc_Iterator$SliceIterator(this.bB, ((sum - 2147483647) | 0), rest))));
  } else {
    this.bj = sum;
    this.aC = rest;
    return this;
  }
});
var $d_sc_Iterator$SliceIterator = new $TypeData().i($c_sc_Iterator$SliceIterator, "scala.collection.Iterator$SliceIterator", ({
  c8: 1,
  m: 1,
  d: 1,
  e: 1,
  r: 1
}));
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  var skipped = $thiz.oM(n);
  if (skipped.aa()) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  return skipped.k8();
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
      if ((((!a$tailLocal1.aa()) && (!b$tailLocal1.aa())) && $m_sr_BoxesRunTime$().c(a$tailLocal1.k8(), b$tailLocal1.k8()))) {
        var a$tailLocal1$tmp1 = a$tailLocal1.kf();
        var b$tailLocal1$tmp1 = b$tailLocal1.kf();
        a$tailLocal1 = a$tailLocal1$tmp1;
        b$tailLocal1 = b$tailLocal1$tmp1;
        continue;
      }
      return (a$tailLocal1.aa() && b$tailLocal1.aa());
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
  cn: 1,
  a: 1,
  ax: 1,
  ca: 1,
  ce: 1
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
  this.kK = null;
  this.h5 = 0;
  this.kJ = 0;
  this.kK = x$1;
  this.h5 = 0;
  this.kJ = x$1.x();
}
$p = $c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $p;
$p.T = (function() {
  return (this.h5 < this.kJ);
});
$p.O = (function() {
  var result = this.kK.n(this.h5);
  this.h5 = ((1 + this.h5) | 0);
  return result;
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().i($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
  cZ: 1,
  m: 1,
  d: 1,
  e: 1,
  r: 1
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a3)));
}
var $d_jl_Double = new $TypeData().i(0, "java.lang.Double", ({
  a3: 1,
  u: 1,
  a: 1,
  i: 1,
  g: 1,
  C: 1
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
  b9: 1,
  u: 1,
  a: 1,
  i: 1,
  g: 1,
  C: 1
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
function $isArrayOf_jl_Integer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a5)));
}
var $d_jl_Integer = new $TypeData().i(0, "java.lang.Integer", ({
  a5: 1,
  u: 1,
  a: 1,
  i: 1,
  g: 1,
  C: 1
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
  return $m_RTLong$().nL($thiz, $thizhi);
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a6)));
}
var $d_jl_Long = new $TypeData().i(0, "java.lang.Long", ({
  a6: 1,
  u: 1,
  a: 1,
  i: 1,
  g: 1,
  C: 1
}), ((x) => (x instanceof $Long)));
class $c_jl_NumberFormatException extends $c_jl_IllegalArgumentException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_NumberFormatException = new $TypeData().i($c_jl_NumberFormatException, "java.lang.NumberFormatException", ({
  bd: 1,
  a4: 1,
  k: 1,
  j: 1,
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
  var str = $m_jl_Character$().qL(ch);
  return ($thiz.indexOf(str) | 0);
}
function $f_T__toString__T($thiz) {
  return $thiz;
}
var $d_T = new $TypeData().i(0, "java.lang.String", ({
  bg: 1,
  a: 1,
  i: 1,
  L: 1,
  g: 1,
  C: 1
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
$p.bs = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.k1 = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.fY = (function() {
  return this.bR();
});
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator(xs) {
  this.i6 = null;
  this.bi = 0;
  this.h2 = 0;
  this.i6 = xs;
  this.bi = 0;
  this.h2 = $m_jl_reflect_Array$().hH(this.i6);
}
$p = $c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
}
$h_sc_ArrayOps$ArrayIterator.prototype = $p;
$p.af = (function() {
  return ((this.h2 - this.bi) | 0);
});
$p.T = (function() {
  return (this.bi < this.h2);
});
$p.O = (function() {
  if ((this.bi >= $m_jl_reflect_Array$().hH(this.i6))) {
    $m_sc_Iterator$().b7.O();
  }
  var r = $m_sr_ScalaRunTime$().gT(this.i6, this.bi);
  this.bi = ((1 + this.bi) | 0);
  return r;
});
$p.hF = (function(n) {
  if ((n > 0)) {
    var newPos = ((this.bi + n) | 0);
    if ((newPos < 0)) {
      var $x_1 = this.h2;
    } else {
      var a = this.h2;
      var $x_1 = ((a < newPos) ? a : newPos);
    }
    this.bi = $x_1;
  }
  return this;
});
var $d_sc_ArrayOps$ArrayIterator = new $TypeData().i($c_sc_ArrayOps$ArrayIterator, "scala.collection.ArrayOps$ArrayIterator", ({
  c0: 1,
  m: 1,
  d: 1,
  e: 1,
  r: 1,
  a: 1
}));
function $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I($thiz, value) {
  return ((value < 0) ? 0 : ((value > $thiz.aQ) ? $thiz.aQ : value));
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator(self) {
  this.kw = null;
  this.bz = 0;
  this.aQ = 0;
  this.kw = self;
  this.bz = 0;
  this.aQ = self.H();
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $p;
$p.af = (function() {
  return this.aQ;
});
$p.T = (function() {
  return (this.aQ > 0);
});
$p.O = (function() {
  if ((this.aQ > 0)) {
    var r = this.kw.a7(this.bz);
    this.bz = ((1 + this.bz) | 0);
    this.aQ = ((this.aQ - 1) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().b7.O();
  }
});
$p.hF = (function(n) {
  if ((n > 0)) {
    this.bz = ((this.bz + n) | 0);
    var b = ((this.aQ - n) | 0);
    this.aQ = ((b < 0) ? 0 : b);
  }
  return this;
});
$p.iQ = (function(from, until) {
  var formatFrom = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, from);
  var formatUntil = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, until);
  var b = ((formatUntil - formatFrom) | 0);
  this.aQ = ((b < 0) ? 0 : b);
  this.bz = ((this.bz + formatFrom) | 0);
  return this;
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
  c4: 1,
  m: 1,
  d: 1,
  e: 1,
  r: 1,
  a: 1
}));
function $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($thiz) {
  if ((!$thiz.kA)) {
    $thiz.kz = new $c_sci_ArraySeq$ofRef(new ($d_sr_Nothing$.r().C)(0));
    $thiz.kA = true;
  }
  return $thiz.kz;
}
/** @constructor */
function $c_sci_ArraySeq$() {
  this.kz = null;
  this.kA = false;
}
$p = $c_sci_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_sci_ArraySeq$;
/** @constructor */
function $h_sci_ArraySeq$() {
}
$h_sci_ArraySeq$.prototype = $p;
var $d_sci_ArraySeq$ = new $TypeData().i($c_sci_ArraySeq$, "scala.collection.immutable.ArraySeq$", ({
  cj: 1,
  a: 1,
  aw: 1,
  au: 1,
  av: 1,
  az: 1
}));
var $n_sci_ArraySeq$;
function $m_sci_ArraySeq$() {
  if ((!$n_sci_ArraySeq$)) {
    $n_sci_ArraySeq$ = new $c_sci_ArraySeq$();
  }
  return $n_sci_ArraySeq$;
}
/** @constructor */
function $c_sci_RangeIterator(start, step, lastElement, initiallyEmpty) {
  this.gp = 0;
  this.fA = 0;
  this.fy = false;
  this.fz = 0;
  this.gp = step;
  this.fA = lastElement;
  this.fy = (!initiallyEmpty);
  this.fz = start;
}
$p = $c_sci_RangeIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_RangeIterator;
/** @constructor */
function $h_sci_RangeIterator() {
}
$h_sci_RangeIterator.prototype = $p;
$p.af = (function() {
  return (this.fy ? ((1 + ((((this.fA - this.fz) | 0) / $checkIntDivisor(this.gp)) | 0)) | 0) : 0);
});
$p.T = (function() {
  return this.fy;
});
$p.q5 = (function() {
  if ((!this.fy)) {
    $m_sc_Iterator$().b7.O();
  }
  var value = this.fz;
  this.fy = (value !== this.fA);
  this.fz = ((value + this.gp) | 0);
  return value;
});
$p.hF = (function(n) {
  if ((n > 0)) {
    var value = this.fz;
    var hi = (value >> 31);
    var value$1 = Math.imul(this.gp, n);
    var hi$1 = (value$1 >> 31);
    var lo = ((value + value$1) | 0);
    var hi$2 = ((((hi + hi$1) | 0) + (((lo >>> 0) < (value >>> 0)) | 0)) | 0);
    if ((this.gp > 0)) {
      var x = this.fA;
      var hi$3 = (x >> 31);
      if (((hi$3 === hi$2) ? ((x >>> 0) < (lo >>> 0)) : (hi$3 < hi$2))) {
        var $x_1_$_lo = x;
        var $x_1_$_hi = hi$3;
      } else {
        var $x_1_$_lo = lo;
        var $x_1_$_hi = hi$2;
      }
      this.fz = $x_1_$_lo;
      var value$2 = this.fA;
      var hi$4 = (value$2 >> 31);
      this.fy = ((hi$2 === hi$4) ? ((lo >>> 0) <= (value$2 >>> 0)) : (hi$2 < hi$4));
    } else if ((this.gp < 0)) {
      var x$2 = this.fA;
      var hi$5 = (x$2 >> 31);
      if (((hi$5 === hi$2) ? ((x$2 >>> 0) > (lo >>> 0)) : (hi$5 > hi$2))) {
        var $x_2_$_lo = x$2;
        var $x_2_$_hi = hi$5;
      } else {
        var $x_2_$_lo = lo;
        var $x_2_$_hi = hi$2;
      }
      this.fz = $x_2_$_lo;
      var value$3 = this.fA;
      var hi$6 = (value$3 >> 31);
      this.fy = ((hi$2 === hi$6) ? ((lo >>> 0) >= (value$3 >>> 0)) : (hi$2 > hi$6));
    }
  }
  return this;
});
$p.O = (function() {
  return this.q5();
});
var $d_sci_RangeIterator = new $TypeData().i($c_sci_RangeIterator, "scala.collection.immutable.RangeIterator", ({
  cr: 1,
  m: 1,
  d: 1,
  e: 1,
  r: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$() {
  this.kC = null;
  $n_scm_ArraySeq$ = this;
  this.kC = new $c_scm_ArraySeq$ofRef(new $ac_O(0));
}
$p = $c_scm_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_scm_ArraySeq$;
/** @constructor */
function $h_scm_ArraySeq$() {
}
$h_scm_ArraySeq$.prototype = $p;
var $d_scm_ArraySeq$ = new $TypeData().i($c_scm_ArraySeq$, "scala.collection.mutable.ArraySeq$", ({
  ct: 1,
  a: 1,
  aw: 1,
  au: 1,
  av: 1,
  az: 1
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
$p.I = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.u = (function() {
  return 924202651;
});
$p.x = (function() {
  return 0;
});
$p.F = (function() {
  return "EmptyTuple";
});
$p.n = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
});
$p.o = (function() {
  return "()";
});
var $d_T$package$EmptyTuple$ = new $TypeData().i($c_T$package$EmptyTuple$, "scala.Tuple$package$EmptyTuple$", ({
  bX: 1,
  b: 1,
  c: 1,
  a: 1,
  aI: 1,
  aJ: 1,
  cz: 1
}));
var $n_T$package$EmptyTuple$;
function $m_T$package$EmptyTuple$() {
  if ((!$n_T$package$EmptyTuple$)) {
    $n_T$package$EmptyTuple$ = new $c_T$package$EmptyTuple$();
  }
  return $n_T$package$EmptyTuple$;
}
function $f_sc_View__toString__T($thiz) {
  return ($thiz.bR() + "(<not computed>)");
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
    this.aD = null;
    this.aD = exception;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  iK() {
    return $dp_toString__T(this.aD);
  }
  F() {
    return "JavaScriptException";
  }
  x() {
    return 1;
  }
  n(x$1) {
    return ((x$1 === 0) ? this.aD : $m_sr_Statics$().ph(x$1));
  }
  I() {
    return new $c_sr_ScalaRunTime$$anon$1(this);
  }
  u() {
    return $m_s_util_hashing_MurmurHash3$().V(this, 1744042595, true);
  }
  s(x$1) {
    return ((this === x$1) || ((x$1 instanceof $c_sjs_js_JavaScriptException) && $m_sr_BoxesRunTime$().c(this.aD, x$1.aD)));
  }
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aL)));
}
var $d_sjs_js_JavaScriptException = new $TypeData().i($c_sjs_js_JavaScriptException, "scala.scalajs.js.JavaScriptException", ({
  aL: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1,
  c: 1,
  b: 1
}));
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  var s$tailLocal1 = s;
  var n$tailLocal1 = n;
  while (true) {
    if (((n$tailLocal1 <= 0) || s$tailLocal1.aa())) {
      return s$tailLocal1;
    } else {
      var n$tailLocal1$tmp1 = ((n$tailLocal1 - 1) | 0);
      var s$tailLocal1$tmp1 = s$tailLocal1.kf();
      n$tailLocal1 = n$tailLocal1$tmp1;
      s$tailLocal1 = s$tailLocal1$tmp1;
    }
  }
}
/** @constructor */
function $c_s_reflect_ManifestFactory$PhantomManifest() {
  this.iW = null;
}
$p = $c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$p.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
}
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $p;
$p.o = (function() {
  return this.iW;
});
$p.s = (function(that) {
  return (this === that);
});
$p.u = (function() {
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
$p.o = (function() {
  return $f_sc_View__toString__T(this);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ObjectManifest$() {
  this.iW = null;
  this.iW = "Object";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$ObjectManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ObjectManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ObjectManifest$() {
}
$h_s_reflect_ManifestFactory$ObjectManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ObjectManifest$, "scala.reflect.ManifestFactory$ObjectManifest$", ({
  cF: 1,
  cG: 1,
  cE: 1,
  a: 1,
  cH: 1,
  cB: 1,
  b: 1,
  cC: 1,
  cD: 1
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
      if (o.iJ($thiz)) {
        return $thiz.hZ(o);
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
$p.aa = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.hZ = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.iJ = (function(that) {
  return true;
});
$p.s = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().kc(this);
});
$p.o = (function() {
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
  return (!(!((obj && obj.$classData) && obj.$classData.n.n)));
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.n)));
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.M)));
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.M)));
}
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.h4 = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.h4 = null;
}
$p = $c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $p;
$p.a7 = (function(idx) {
  return this.h4.a7(idx);
});
$p.H = (function() {
  return this.h4.H();
});
$p.aa = (function() {
  return this.h4.aa();
});
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.h4 = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$p.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
}
$h_sc_IndexedSeqView$Id.prototype = $p;
$p.bQ = (function(len) {
  var x = this.H();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.af = (function() {
  return this.H();
});
$p.ab = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this);
});
$p.bR = (function() {
  return "IndexedSeqView";
});
var $d_sc_IndexedSeqView$Id = new $TypeData().i($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  c3: 1,
  cc: 1,
  bY: 1,
  bZ: 1,
  w: 1,
  d: 1,
  e: 1,
  q: 1,
  p: 1,
  o: 1,
  a: 1,
  cg: 1,
  s: 1,
  cb: 1,
  x: 1,
  c2: 1
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
  return ($is_sci_IndexedSeq(that) ? ($thiz.H() === that.H()) : true);
}
function $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z($thiz, o) {
  if ($is_sci_IndexedSeq(o)) {
    if (($thiz === o)) {
      return true;
    } else {
      var length = $thiz.H();
      var equal = (length === o.H());
      if (equal) {
        var index = 0;
        var a = $thiz.iH();
        var b = o.iH();
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
          equal = $m_sr_BoxesRunTime$().c($thiz.a7(index), o.a7(index));
          index = ((1 + index) | 0);
        }
        if (((index < length) && equal)) {
          var thisIt = $thiz.ab().hF(index);
          var thatIt = o.ab().hF(index);
          while ((equal && thisIt.T())) {
            equal = $m_sr_BoxesRunTime$().c(thisIt.O(), thatIt.O());
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
  return (!(!((obj && obj.$classData) && obj.$classData.n.D)));
}
function $isArrayOf_sci_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.D)));
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
  this.i7 = null;
  this.i7 = array;
}
$p = $c_sjsr_WrappedVarArgs.prototype = new $h_O();
$p.constructor = $c_sjsr_WrappedVarArgs;
/** @constructor */
function $h_sjsr_WrappedVarArgs() {
}
$h_sjsr_WrappedVarArgs.prototype = $p;
$p.iJ = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.hZ = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.iH = (function() {
  return $m_sci_IndexedSeqDefaults$().kB;
});
$p.ab = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.bQ = (function(len) {
  var x = this.H();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.af = (function() {
  return this.H();
});
$p.s = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().kc(this);
});
$p.o = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.aa = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.bs = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.k1 = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.H = (function() {
  return (this.i7.length | 0);
});
$p.a7 = (function(idx) {
  return this.i7[idx];
});
$p.fY = (function() {
  return "WrappedVarArgs";
});
$p.h = (function(v1) {
  return this.a7((v1 | 0));
});
function $isArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aM)));
}
var $d_sjsr_WrappedVarArgs = new $TypeData().i($c_sjsr_WrappedVarArgs, "scala.scalajs.runtime.WrappedVarArgs", ({
  aM: 1,
  D: 1,
  d: 1,
  e: 1,
  q: 1,
  p: 1,
  o: 1,
  G: 1,
  h: 1,
  v: 1,
  s: 1,
  b: 1,
  l: 1,
  I: 1,
  H: 1,
  x: 1,
  n: 1,
  O: 1,
  J: 1,
  z: 1,
  A: 1,
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
function $p_sci_Range__isInexact$1__Z($thiz) {
  return ((($thiz.fx + $thiz.ao) | 0) !== $thiz.go);
}
function $ct_sci_Range__I__I__I__($thiz, start, end, step) {
  $thiz.ag = start;
  $thiz.go = end;
  $thiz.ao = step;
  $thiz.at = ((step >= 0) ? (start >= end) : (start <= end));
  if ((step === 0)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "step cannot be 0.");
  }
  var stepSign = (step >> 31);
  var gap = (((((end - start) | 0) ^ stepSign) - stepSign) | 0);
  var absStep = (((step ^ stepSign) - stepSign) | 0);
  var div = (((gap >>> 0) / ($checkIntDivisor(absStep) >>> 0)) | 0);
  $thiz.bC = ((Math.imul(absStep, div) !== gap) ? ((1 + div) | 0) : div);
  if ((((-3) & ((1 + step) | 0)) === 0)) {
    var $x_1 = ((end - step) | 0);
  } else {
    var n = (($thiz.bC - 1) | 0);
    var $x_1 = (($thiz.ag + Math.imul($thiz.ao, n)) | 0);
  }
  $thiz.fx = $x_1;
  return $thiz;
}
/** @constructor */
function $c_sci_Range() {
  this.ag = 0;
  this.go = 0;
  this.ao = 0;
  this.at = false;
  this.bC = 0;
  this.fx = 0;
}
$p = $c_sci_Range.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_Range;
/** @constructor */
function $h_sci_Range() {
}
$h_sci_Range.prototype = $p;
$p.iJ = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.bR = (function() {
  return "IndexedSeq";
});
$p.bQ = (function(len) {
  var x = this.H();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.af = (function() {
  return this.H();
});
$p.ab = (function() {
  return new $c_sci_RangeIterator(this.ag, this.ao, this.fx, this.at);
});
$p.aa = (function() {
  return this.at;
});
$p.H = (function() {
  if (this.at) {
    return 0;
  } else {
    if ((this.bC <= 0)) {
      $m_sci_Range$().nG(this.ag, this.go, this.ao, false);
    }
    return this.bC;
  }
});
$p.ng = (function() {
  if (this.at) {
    var $x_1 = $m_sci_Range$().qr("last");
    throw (($x_1 instanceof $c_sjs_js_JavaScriptException) ? $x_1.aD : $x_1);
  } else {
    return this.fx;
  }
});
$p.qs = (function() {
  if (((this.bC <= 0) && (!this.at))) {
    $m_sci_Range$().nG(this.ag, this.go, this.ao, false);
  }
});
$p.bs = (function(f) {
  if ((!this.at)) {
    var i = this.ag;
    while (true) {
      f.h(i);
      if ((i === this.fx)) {
        return (void 0);
      }
      i = ((i + this.ao) | 0);
    }
  }
});
$p.hZ = (function(that) {
  if ((that instanceof $c_sci_Range)) {
    var x1$2 = this.H();
    switch (x1$2) {
      case 0: {
        return that.at;
        break;
      }
      case 1: {
        return ((that.H() === 1) && (this.ag === that.ag));
        break;
      }
      default: {
        return ((that.H() === x1$2) && ((this.ag === that.ag) && (this.ao === that.ao)));
      }
    }
  } else {
    return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, that);
  }
});
$p.iH = (function() {
  return 2147483647;
});
$p.s = (function(other) {
  if ((other instanceof $c_sci_Range)) {
    if (this.at) {
      return other.at;
    } else if (((!other.at) && (this.ag === other.ag))) {
      var l0 = this.ng();
      return ((l0 === other.ng()) && ((this.ag === l0) || (this.ao === other.ao)));
    } else {
      return false;
    }
  } else {
    return $f_sc_Seq__equals__O__Z(this, other);
  }
});
$p.u = (function() {
  if ((this.H() >= 2)) {
    var this$1 = $m_s_util_hashing_MurmurHash3$();
    return this$1.nD(this.ag, this.ao, this.fx, this$1.fB);
  } else {
    return $m_s_util_hashing_MurmurHash3$().kc(this);
  }
});
$p.o = (function() {
  var stepped = ((this.ao === 1) ? "" : (" by " + this.ao));
  return ((((((this.at ? "empty " : ($p_sci_Range__isInexact$1__Z(this) ? "inexact " : "")) + "Range ") + this.ag) + " until ") + this.go) + stepped);
});
$p.fY = (function() {
  return "Range";
});
$p.n1 = (function(idx) {
  if ((((idx < 0) || (idx >= this.bC)) || this.at)) {
    this.qs();
    var max = (this.at ? (-1) : ((this.bC - 1) | 0));
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((idx + " is out of bounds (min 0, max ") + max) + ")"));
  } else {
    return ((this.ag + Math.imul(this.ao, idx)) | 0);
  }
});
$p.h = (function(v1) {
  return this.n1((v1 | 0));
});
$p.a7 = (function(i) {
  return this.n1(i);
});
function $isArrayOf_sci_Range(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aC)));
}
/** @constructor */
function $c_sci_ArraySeq() {
}
$p = $c_sci_ArraySeq.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_ArraySeq;
/** @constructor */
function $h_sci_ArraySeq() {
}
$h_sci_ArraySeq.prototype = $p;
$p.bQ = (function(len) {
  var x = this.bk.a.length;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.af = (function() {
  return this.bk.a.length;
});
$p.bR = (function() {
  return "IndexedSeq";
});
$p.iJ = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.hZ = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.fY = (function() {
  return "ArraySeq";
});
$p.iH = (function() {
  return 2147483647;
});
/** @constructor */
function $c_sci_Range$Exclusive(start, end, step) {
  this.ag = 0;
  this.go = 0;
  this.ao = 0;
  this.at = false;
  this.bC = 0;
  this.fx = 0;
  $ct_sci_Range__I__I__I__(this, start, end, step);
}
$p = $c_sci_Range$Exclusive.prototype = new $h_sci_Range();
$p.constructor = $c_sci_Range$Exclusive;
/** @constructor */
function $h_sci_Range$Exclusive() {
}
$h_sci_Range$Exclusive.prototype = $p;
var $d_sci_Range$Exclusive = new $TypeData().i($c_sci_Range$Exclusive, "scala.collection.immutable.Range$Exclusive", ({
  cq: 1,
  aC: 1,
  N: 1,
  y: 1,
  w: 1,
  d: 1,
  e: 1,
  q: 1,
  p: 1,
  o: 1,
  h: 1,
  v: 1,
  s: 1,
  b: 1,
  l: 1,
  G: 1,
  I: 1,
  H: 1,
  D: 1,
  x: 1,
  n: 1,
  O: 1,
  J: 1,
  z: 1,
  A: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq() {
}
$p = $c_scm_ArraySeq.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_ArraySeq;
/** @constructor */
function $h_scm_ArraySeq() {
}
$h_scm_ArraySeq.prototype = $p;
$p.bQ = (function(len) {
  var x = this.aR.a.length;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.af = (function() {
  return this.aR.a.length;
});
$p.bR = (function() {
  return "IndexedSeq";
});
$p.fY = (function() {
  return "ArraySeq";
});
$p.s = (function(other) {
  if ((other instanceof $c_scm_ArraySeq)) {
    if ((this.aR.a.length !== other.aR.a.length)) {
      return false;
    }
  }
  return $f_sc_Seq__equals__O__Z(this, other);
});
function $isArrayOf_scm_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aD)));
}
/** @constructor */
function $c_sci_ArraySeq$ofRef(unsafeArray) {
  this.bk = null;
  this.bk = unsafeArray;
}
$p = $c_sci_ArraySeq$ofRef.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofRef;
/** @constructor */
function $h_sci_ArraySeq$ofRef() {
}
$h_sci_ArraySeq$ofRef.prototype = $p;
$p.H = (function() {
  return this.bk.a.length;
});
$p.a7 = (function(i) {
  return this.bk.a[i];
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.n2(this.bk, this$1.fB);
});
$p.s = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofRef) ? $m_s_Array$().n9(this.bk, that.bk) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.ab = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.bk);
});
$p.h = (function(v1) {
  return this.a7((v1 | 0));
});
function $isArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aA)));
}
var $d_sci_ArraySeq$ofRef = new $TypeData().i($c_sci_ArraySeq$ofRef, "scala.collection.immutable.ArraySeq$ofRef", ({
  aA: 1,
  ci: 1,
  N: 1,
  y: 1,
  w: 1,
  d: 1,
  e: 1,
  q: 1,
  p: 1,
  o: 1,
  h: 1,
  v: 1,
  s: 1,
  b: 1,
  l: 1,
  G: 1,
  I: 1,
  H: 1,
  x: 1,
  n: 1,
  O: 1,
  D: 1,
  z: 1,
  A: 1,
  J: 1,
  c1: 1,
  a: 1
}));
function $p_sci_List__loop$2__I__I__sci_List__I($thiz, len$1, i, xs) {
  var xs$tailLocal1 = xs;
  var i$tailLocal1 = i;
  while (true) {
    if ((i$tailLocal1 === len$1)) {
      return ((!xs$tailLocal1.aa()) | 0);
    } else {
      if ((!xs$tailLocal1.aa())) {
        xs$tailLocal1.i3();
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
      var aEmpty = a$tailLocal1.aa();
      var bEmpty = b$tailLocal1.aa();
      if ((!(aEmpty || bEmpty))) {
        a$tailLocal1.iL();
      }
      if (false) {
        a$tailLocal1.i3();
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
$p.a7 = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.hZ = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.bR = (function() {
  return "LinearSeq";
});
$p.aa = (function() {
  return (this === $m_sci_Nil$());
});
$p.bs = (function(f) {
  var these = this;
  while ((!these.aa())) {
    f.h(these.iL());
    these.i3();
  }
});
$p.H = (function() {
  var these = this;
  var len = 0;
  while ((!these.aa())) {
    len = ((1 + len) | 0);
    these.i3();
  }
  return len;
});
$p.bQ = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__I__sci_List__I(this, len, 0, this));
});
$p.fY = (function() {
  return "List";
});
$p.s = (function(o) {
  return ((o instanceof $c_sci_List) ? $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, o) : $f_sc_Seq__equals__O__Z(this, o));
});
$p.oM = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
$p.h = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aB)));
}
/** @constructor */
function $c_scm_ArraySeq$ofRef(array) {
  this.aR = null;
  this.aR = array;
}
$p = $c_scm_ArraySeq$ofRef.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofRef;
/** @constructor */
function $h_scm_ArraySeq$ofRef() {
}
$h_scm_ArraySeq$ofRef.prototype = $p;
$p.H = (function() {
  return this.aR.a.length;
});
$p.a7 = (function(index) {
  return this.aR.a[index];
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.n2(this.aR, this$1.fB);
});
$p.s = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofRef) ? $m_s_Array$().n9(this.aR, that.aR) : $c_scm_ArraySeq.prototype.s.call(this, that));
});
$p.ab = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.aR);
});
$p.h = (function(v1) {
  return this.a7((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aE)));
}
var $d_scm_ArraySeq$ofRef = new $TypeData().i($c_scm_ArraySeq$ofRef, "scala.collection.mutable.ArraySeq$ofRef", ({
  aE: 1,
  aD: 1,
  P: 1,
  y: 1,
  w: 1,
  d: 1,
  e: 1,
  q: 1,
  p: 1,
  o: 1,
  h: 1,
  v: 1,
  s: 1,
  b: 1,
  l: 1,
  T: 1,
  B: 1,
  Q: 1,
  V: 1,
  U: 1,
  x: 1,
  n: 1,
  S: 1,
  R: 1,
  z: 1,
  A: 1,
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
$p.I = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.x = (function() {
  return 0;
});
$p.F = (function() {
  return "Nil";
});
$p.n = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
});
$p.iL = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list");
});
$p.i3 = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$p.af = (function() {
  return 0;
});
$p.ab = (function() {
  return $m_sc_Iterator$().b7;
});
$p.k8 = (function() {
  this.iL();
});
$p.kf = (function() {
  this.i3();
});
var $d_sci_Nil$ = new $TypeData().i($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  co: 1,
  aB: 1,
  N: 1,
  y: 1,
  w: 1,
  d: 1,
  e: 1,
  q: 1,
  p: 1,
  o: 1,
  h: 1,
  v: 1,
  s: 1,
  b: 1,
  l: 1,
  G: 1,
  I: 1,
  H: 1,
  c9: 1,
  M: 1,
  cm: 1,
  cl: 1,
  z: 1,
  A: 1,
  cd: 1,
  J: 1,
  a: 1,
  ch: 1,
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
  $thiz.b8 = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, new $c_jl_StringBuilder());
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.b8 = null;
}
$p = $c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
}
$h_scm_StringBuilder.prototype = $p;
$p.ab = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.bQ = (function(len) {
  var x = this.b8.H();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.bR = (function() {
  return "IndexedSeq";
});
$p.H = (function() {
  return this.b8.H();
});
$p.af = (function() {
  return this.b8.H();
});
$p.o = (function() {
  return this.b8.an;
});
$p.aa = (function() {
  return (this.b8.H() === 0);
});
$p.a7 = (function(i) {
  return $bC(this.b8.n4(i));
});
$p.h = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.b8.n4(i));
});
var $d_scm_StringBuilder = new $TypeData().i($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
  cy: 1,
  P: 1,
  y: 1,
  w: 1,
  d: 1,
  e: 1,
  q: 1,
  p: 1,
  o: 1,
  h: 1,
  v: 1,
  s: 1,
  b: 1,
  l: 1,
  T: 1,
  B: 1,
  Q: 1,
  V: 1,
  U: 1,
  aG: 1,
  aH: 1,
  aF: 1,
  cw: 1,
  x: 1,
  n: 1,
  S: 1,
  R: 1,
  L: 1,
  a: 1
}));
/** @constructor */
function $c_sjs_js_WrappedArray(array) {
  this.gq = null;
  this.gq = array;
}
$p = $c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
}
$h_sjs_js_WrappedArray.prototype = $p;
$p.bR = (function() {
  return "IndexedSeq";
});
$p.ab = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.bQ = (function(len) {
  var x = (this.gq.length | 0);
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.a7 = (function(index) {
  return this.gq[index];
});
$p.H = (function() {
  return (this.gq.length | 0);
});
$p.af = (function() {
  return (this.gq.length | 0);
});
$p.fY = (function() {
  return "WrappedArray";
});
$p.h = (function(v1) {
  var index = (v1 | 0);
  return this.gq[index];
});
var $d_sjs_js_WrappedArray = new $TypeData().i($c_sjs_js_WrappedArray, "scala.scalajs.js.WrappedArray", ({
  d9: 1,
  cs: 1,
  P: 1,
  y: 1,
  w: 1,
  d: 1,
  e: 1,
  q: 1,
  p: 1,
  o: 1,
  h: 1,
  v: 1,
  s: 1,
  b: 1,
  l: 1,
  T: 1,
  B: 1,
  Q: 1,
  V: 1,
  U: 1,
  aG: 1,
  aH: 1,
  cx: 1,
  cu: 1,
  A: 1,
  z: 1,
  R: 1,
  x: 1,
  n: 1,
  S: 1,
  cv: 1,
  aF: 1,
  a: 1
}));
let $e_sketch = (function(arg) {
  $m_Lsketches_rooms_canvases_Canvases$package$().qp(arg);
});
export { $e_sketch as sketch };
