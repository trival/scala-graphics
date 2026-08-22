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
  return (arg0.$classData.Z ? arg0.ak() : $objectClone(arg0));
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
        return null.nf();
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
        return instance.n(x0);
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__equals__O__Z(instance.l, instance.h, x0);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__equals__O__Z(instance.c, x0);
      } else {
        return $c_O.prototype.n.call(instance, x0);
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
        return instance.q();
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__hashCode__I(instance.l, instance.h);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I(instance.c);
      } else {
        return $c_O.prototype.q.call(instance);
      }
    }
  }
}
function $dp_indexOf__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__indexOf__I__I(instance, x0);
  } else {
    return instance.ng(x0);
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
$p.q = (function() {
  return $systemIdentityHashCode(this);
});
$p.n = (function(that) {
  return (this === that);
});
$p.k = (function() {
  var i = this.q();
  return (($objectClassName(this) + "@") + (i >>> 0.0).toString(16));
});
$p.toString = (function() {
  return this.k();
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
$p.a7 = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
});
$p.ak = (function() {
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
$p.a7 = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
});
$p.ak = (function() {
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
$p.a7 = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.ak = (function() {
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
$p.a7 = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.ak = (function() {
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
$p.a7 = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.ak = (function() {
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
$p.a7 = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.ak = (function() {
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
$p.a7 = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray((srcPos << 1), (((srcPos + length) | 0) << 1)), (destPos << 1));
});
$p.ak = (function() {
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
$p.a7 = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.ak = (function() {
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
$p.a7 = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.ak = (function() {
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
    x: 1,
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
  $p.a7 = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
  });
  $p.ak = (function() {
    return new ArrayClass(this.a.slice());
  });
  $p.$classData = this;
  var arrayBase = (componentData.B || componentData);
  var arrayDepth = (componentData.D + 1);
  var name = ("[" + componentData.E);
  this.C = ArrayClass;
  this.n = ({
    x: 1,
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
function $p_jl_System$SystemProperties$__loadSystemProperties__O($thiz) {
  var result = ({});
  result["java.version"] = "1.8";
  result["java.vm.specification.version"] = "1.8";
  result["java.vm.specification.vendor"] = "Oracle Corporation";
  result["java.vm.specification.name"] = "Java Virtual Machine Specification";
  result["java.vm.name"] = "Scala.js";
  result["java.vm.version"] = "1.21.0";
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
  this.hw = null;
  this.iX = null;
  $n_jl_System$SystemProperties$ = this;
  this.hw = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
  this.iX = null;
}
$p = $c_jl_System$SystemProperties$.prototype = new $h_O();
$p.constructor = $c_jl_System$SystemProperties$;
/** @constructor */
function $h_jl_System$SystemProperties$() {
}
$h_jl_System$SystemProperties$.prototype = $p;
$p.kB = (function(key, default$1) {
  if ((this.hw !== null)) {
    var dict = this.hw;
    return ((!(!$m_jl_Utils$Cache$().iZ.call(dict, key))) ? dict[key] : default$1);
  } else {
    return this.iX.kB(key, default$1);
  }
});
var $d_jl_System$SystemProperties$ = new $TypeData().i($c_jl_System$SystemProperties$, "java.lang.System$SystemProperties$", ({
  b8: 1
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
  this.iZ = null;
  $n_jl_Utils$Cache$ = this;
  this.iZ = Object.prototype.hasOwnProperty;
}
$p = $c_jl_Utils$Cache$.prototype = new $h_O();
$p.constructor = $c_jl_Utils$Cache$;
/** @constructor */
function $h_jl_Utils$Cache$() {
}
$h_jl_Utils$Cache$.prototype = $p;
var $d_jl_Utils$Cache$ = new $TypeData().i($c_jl_Utils$Cache$, "java.lang.Utils$Cache$", ({
  ba: 1
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
  bb: 1
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
$p.gi = (function(array) {
  return ((array instanceof $ac_O) ? array.a.length : ((array instanceof $ac_Z) ? array.a.length : ((array instanceof $ac_C) ? array.a.length : ((array instanceof $ac_B) ? array.a.length : ((array instanceof $ac_S) ? array.a.length : ((array instanceof $ac_I) ? array.a.length : ((array instanceof $ac_J) ? ((array.a.length >>> 1) | 0) : ((array instanceof $ac_F) ? array.a.length : ((array instanceof $ac_D) ? array.a.length : $p_jl_reflect_Array$__mismatch__O__E(this, array))))))))));
});
var $d_jl_reflect_Array$ = new $TypeData().i($c_jl_reflect_Array$, "java.lang.reflect.Array$", ({
  bc: 1
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
$p.lp = (function(a, key) {
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
      } else if ((cmp === 0)) {
        return mid;
      } else {
        startIndex = ((1 + mid) | 0);
      }
    }
  }
});
var $d_ju_Arrays$ = new $TypeData().i($c_ju_Arrays$, "java.util.Arrays$", ({
  bd: 1
}));
var $n_ju_Arrays$;
function $m_ju_Arrays$() {
  if ((!$n_ju_Arrays$)) {
    $n_ju_Arrays$ = new $c_ju_Arrays$();
  }
  return $n_ju_Arrays$;
}
function $s_RTLong__remainderUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().mM(alo, ahi, blo, bhi);
}
function $s_RTLong__remainder__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().mL(alo, ahi, blo, bhi);
}
function $s_RTLong__divideUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().lC(alo, ahi, blo, bhi);
}
function $s_RTLong__divide__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().lB(alo, ahi, blo, bhi);
}
function $s_RTLong__fromDoubleBits__D__O__J(value, fpBitsDataView) {
  fpBitsDataView.setFloat64(0, value, true);
  var lo = (fpBitsDataView.getInt32(0, true) | 0);
  var hi = (fpBitsDataView.getInt32(4, true) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__fromDouble__D__J(value) {
  return $m_RTLong$().kA(value);
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
  return $m_RTLong$().kW(lo, hi);
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
  var hi = ((((ahi - bhi) | 0) + ((((~alo) & blo) | ((~(alo ^ blo)) & lo)) >> 31)) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__add__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = ((alo + blo) | 0);
  var hi = ((((ahi + bhi) | 0) + ((((alo & blo) | ((alo | blo) & (~lo))) >>> 31) | 0)) | 0);
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
$p.kW = (function(lo, hi) {
  if ((hi === (lo >> 31))) {
    return ("" + lo);
  } else if ((((-2097152) & (hi ^ (hi >> 10))) === 0)) {
    return ("" + ((4.294967296E9 * hi) + (lo >>> 0.0)));
  } else {
    var sign = (hi >> 31);
    var xlo = (lo ^ sign);
    var rlo = ((xlo - sign) | 0);
    var rhi = (((hi ^ sign) + (((xlo & (~rlo)) >>> 31) | 0)) | 0);
    var approxNum = ((4.294967296E9 * (rhi >>> 0.0)) + (rlo >>> 0.0));
    var approxQuot = (+Math.floor((1.0E-9 * approxNum)));
    var approxRem = ((rlo - Math.imul(1000000000, (approxQuot | 0.0))) | 0);
    if ((approxRem < 0)) {
      approxQuot = (approxQuot - 1.0);
      approxRem = ((1000000000 + approxRem) | 0);
    } else if ((approxRem >= 1000000000)) {
      approxQuot = (approxQuot + 1.0);
      approxRem = ((approxRem - 1000000000) | 0);
    }
    var this$7 = approxRem;
    var remStr = ("" + this$7);
    var $x_1 = approxQuot;
    var start = remStr.length;
    var s = ((("" + $x_1) + "000000000".substring(start)) + remStr);
    return ((hi < 0) ? ("-" + s) : s);
  }
});
$p.kA = (function(value) {
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
$p.lB = (function(alo, ahi, blo, bhi) {
  var sign = (ahi >> 31);
  var xlo = (alo ^ sign);
  var rlo = ((xlo - sign) | 0);
  var rhi = (((ahi ^ sign) + (((xlo & (~rlo)) >>> 31) | 0)) | 0);
  var sign$1 = (bhi >> 31);
  var xlo$1 = (blo ^ sign$1);
  var rlo$1 = ((xlo$1 - sign$1) | 0);
  var rhi$1 = (((bhi ^ sign$1) + (((xlo$1 & (~rlo$1)) >>> 31) | 0)) | 0);
  if (((rhi$1 | ((-2097152) & rlo$1)) === 0)) {
    var quotHi = (((rhi >>> 0) / ($checkIntDivisor(rlo$1) >>> 0)) | 0);
    var k = ((rhi - Math.imul(rlo$1, quotHi)) | 0);
    var quotLo = ((((4.294967296E9 * k) + (rlo >>> 0.0)) / rlo$1) | 0.0);
    var absR_$_lo = quotLo;
    var absR_$_hi = quotHi;
  } else if ((((-1073741824) & rhi$1) === 0)) {
    var aHat = ((4.294967296E9 * (rhi >>> 0.0)) + (rlo >>> 0.0));
    var bHat = ((4.294967296E9 * (rhi$1 >>> 0.0)) + (rlo$1 >>> 0.0));
    var x$1 = (aHat / bHat);
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
    var hi$2 = ((((rhi - hi$1) | 0) + ((((~rlo) & lo$1) | ((~(rlo ^ lo$1)) & lo$2)) >> 31)) | 0);
    if ((hi$2 < 0)) {
      var lo$3 = ((lo - 1) | 0);
      var hi$3 = ((((hi - 1) | 0) + (((lo | (~lo$3)) >>> 31) | 0)) | 0);
      var absR_$_lo = lo$3;
      var absR_$_hi = hi$3;
    } else if (((hi$2 === rhi$1) ? ((lo$2 >>> 0) >= (rlo$1 >>> 0)) : ((hi$2 >>> 0) > (rhi$1 >>> 0)))) {
      var lo$4 = ((1 + lo) | 0);
      var hi$4 = ((hi + (((lo & (~lo$4)) >>> 31) | 0)) | 0);
      var absR_$_lo = lo$4;
      var absR_$_hi = hi$4;
    } else {
      var absR_$_lo = lo;
      var absR_$_hi = hi;
    }
  } else {
    var $x_1 = this.ho(rlo, rhi, rlo$1, rhi$1, true);
    var absR_$_lo = $x_1.l;
    var absR_$_hi = $x_1.h;
  }
  if (((ahi ^ bhi) >= 0)) {
    return $bL(absR_$_lo, absR_$_hi);
  } else {
    var lo$5 = ((-absR_$_lo) | 0);
    var hi$5 = ((((-absR_$_hi) | 0) + ((absR_$_lo | lo$5) >> 31)) | 0);
    return $bL(lo$5, hi$5);
  }
});
$p.lC = (function(alo, ahi, blo, bhi) {
  if (((bhi | ((-2097152) & blo)) === 0)) {
    var quotHi = (((ahi >>> 0) / ($checkIntDivisor(blo) >>> 0)) | 0);
    var k = ((ahi - Math.imul(blo, quotHi)) | 0);
    var quotLo = ((((4.294967296E9 * k) + (alo >>> 0.0)) / blo) | 0.0);
    return $bL(quotLo, quotHi);
  } else if ((((-1073741824) & bhi) === 0)) {
    var aHat = ((4.294967296E9 * (ahi >>> 0.0)) + (alo >>> 0.0));
    var bHat = ((4.294967296E9 * (bhi >>> 0.0)) + (blo >>> 0.0));
    var x$1 = (aHat / bHat);
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
    var hi$2 = ((((ahi - hi$1) | 0) + ((((~alo) & lo$1) | ((~(alo ^ lo$1)) & lo$2)) >> 31)) | 0);
    if ((hi$2 < 0)) {
      var lo$3 = ((lo - 1) | 0);
      var hi$3 = ((((hi - 1) | 0) + (((lo | (~lo$3)) >>> 31) | 0)) | 0);
      return $bL(lo$3, hi$3);
    } else if (((hi$2 === bhi) ? ((lo$2 >>> 0) >= (blo >>> 0)) : ((hi$2 >>> 0) > (bhi >>> 0)))) {
      var lo$4 = ((1 + lo) | 0);
      var hi$4 = ((hi + (((lo & (~lo$4)) >>> 31) | 0)) | 0);
      return $bL(lo$4, hi$4);
    } else {
      return $bL(lo, hi);
    }
  } else {
    return this.ho(alo, ahi, blo, bhi, true);
  }
});
$p.mL = (function(alo, ahi, blo, bhi) {
  var sign = (ahi >> 31);
  var xlo = (alo ^ sign);
  var rlo = ((xlo - sign) | 0);
  var rhi = (((ahi ^ sign) + (((xlo & (~rlo)) >>> 31) | 0)) | 0);
  var sign$1 = (bhi >> 31);
  var xlo$1 = (blo ^ sign$1);
  var rlo$1 = ((xlo$1 - sign$1) | 0);
  var rhi$1 = (((bhi ^ sign$1) + (((xlo$1 & (~rlo$1)) >>> 31) | 0)) | 0);
  if (((rhi$1 | ((-2097152) & rlo$1)) === 0)) {
    var k$2 = (((rhi >>> 0) % ($checkIntDivisor(rlo$1) >>> 0)) | 0);
    var quotLo$2 = ((((4.294967296E9 * k$2) + (rlo >>> 0.0)) / rlo$1) | 0.0);
    var remLo = ((rlo - Math.imul(rlo$1, quotLo$2)) | 0);
    var absR_$_lo = remLo;
    var absR_$_hi = 0;
  } else if ((((-1073741824) & rhi$1) === 0)) {
    var aHat = ((4.294967296E9 * (rhi >>> 0.0)) + (rlo >>> 0.0));
    var bHat = ((4.294967296E9 * (rhi$1 >>> 0.0)) + (rlo$1 >>> 0.0));
    var x$1 = (aHat / bHat);
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
    var hi$2 = ((((rhi - hi$1) | 0) + ((((~rlo) & lo$1) | ((~(rlo ^ lo$1)) & lo$2)) >> 31)) | 0);
    if ((hi$2 < 0)) {
      var lo$3 = ((lo$2 + rlo$1) | 0);
      var hi$3 = ((((hi$2 + rhi$1) | 0) + ((((lo$2 & rlo$1) | ((lo$2 | rlo$1) & (~lo$3))) >>> 31) | 0)) | 0);
      var absR_$_lo = lo$3;
      var absR_$_hi = hi$3;
    } else if (((hi$2 === rhi$1) ? ((lo$2 >>> 0) >= (rlo$1 >>> 0)) : ((hi$2 >>> 0) > (rhi$1 >>> 0)))) {
      var lo$4 = ((lo$2 - rlo$1) | 0);
      var hi$4 = ((((hi$2 - rhi$1) | 0) + ((((~lo$2) & rlo$1) | ((~(lo$2 ^ rlo$1)) & lo$4)) >> 31)) | 0);
      var absR_$_lo = lo$4;
      var absR_$_hi = hi$4;
    } else {
      var absR_$_lo = lo$2;
      var absR_$_hi = hi$2;
    }
  } else {
    var $x_1 = this.ho(rlo, rhi, rlo$1, rhi$1, false);
    var absR_$_lo = $x_1.l;
    var absR_$_hi = $x_1.h;
  }
  if ((ahi < 0)) {
    var lo$5 = ((-absR_$_lo) | 0);
    var hi$5 = ((((-absR_$_hi) | 0) + ((absR_$_lo | lo$5) >> 31)) | 0);
    return $bL(lo$5, hi$5);
  } else {
    return $bL(absR_$_lo, absR_$_hi);
  }
});
$p.mM = (function(alo, ahi, blo, bhi) {
  if (((bhi | ((-2097152) & blo)) === 0)) {
    var k$2 = (((ahi >>> 0) % ($checkIntDivisor(blo) >>> 0)) | 0);
    var quotLo$2 = ((((4.294967296E9 * k$2) + (alo >>> 0.0)) / blo) | 0.0);
    var remLo = ((alo - Math.imul(blo, quotLo$2)) | 0);
    return $bL(remLo, 0);
  } else if ((((-1073741824) & bhi) === 0)) {
    var aHat = ((4.294967296E9 * (ahi >>> 0.0)) + (alo >>> 0.0));
    var bHat = ((4.294967296E9 * (bhi >>> 0.0)) + (blo >>> 0.0));
    var x$1 = (aHat / bHat);
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
    var hi$2 = ((((ahi - hi$1) | 0) + ((((~alo) & lo$1) | ((~(alo ^ lo$1)) & lo$2)) >> 31)) | 0);
    if ((hi$2 < 0)) {
      var lo$3 = ((lo$2 + blo) | 0);
      var hi$3 = ((((hi$2 + bhi) | 0) + ((((lo$2 & blo) | ((lo$2 | blo) & (~lo$3))) >>> 31) | 0)) | 0);
      return $bL(lo$3, hi$3);
    } else if (((hi$2 === bhi) ? ((lo$2 >>> 0) >= (blo >>> 0)) : ((hi$2 >>> 0) > (bhi >>> 0)))) {
      var lo$4 = ((lo$2 - blo) | 0);
      var hi$4 = ((((hi$2 - bhi) | 0) + ((((~lo$2) & blo) | ((~(lo$2 ^ blo)) & lo$4)) >> 31)) | 0);
      return $bL(lo$4, hi$4);
    } else {
      return $bL(lo$2, hi$2);
    }
  } else {
    return this.ho(alo, ahi, blo, bhi, false);
  }
});
$p.ho = (function(alo, ahi, blo, bhi, askQuotient) {
  var quot1 = 0;
  if ((bhi >= 0)) {
    var lo = (blo << 1);
    var hi = (((blo >>> 31) | 0) | (bhi << 1));
    if (((ahi === hi) ? ((alo >>> 0) >= (lo >>> 0)) : ((ahi >>> 0) > (hi >>> 0)))) {
      quot1 = 2;
      var lo$1 = ((alo - lo) | 0);
      var hi$1 = ((((ahi - hi) | 0) + ((((~alo) & lo) | ((~(alo ^ lo)) & lo$1)) >> 31)) | 0);
      var rem1_$_lo = lo$1;
      var rem1_$_hi = hi$1;
    } else {
      var rem1_$_lo = alo;
      var rem1_$_hi = ahi;
    }
  } else {
    var rem1_$_lo = alo;
    var rem1_$_hi = ahi;
  }
  var rem1LTUb = ((rem1_$_hi === bhi) ? ((rem1_$_lo >>> 0) < (blo >>> 0)) : ((rem1_$_hi >>> 0) < (bhi >>> 0)));
  if (askQuotient) {
    if (rem1LTUb) {
      var lo$2 = quot1;
      return $bL(lo$2, 0);
    } else {
      var lo$3 = ((1 + quot1) | 0);
      return $bL(lo$3, 0);
    }
  } else if (rem1LTUb) {
    return $bL(rem1_$_lo, rem1_$_hi);
  } else {
    var lo$4 = ((rem1_$_lo - blo) | 0);
    var hi$2 = ((((rem1_$_hi - bhi) | 0) + ((((~rem1_$_lo) & blo) | ((~(rem1_$_lo ^ blo)) & lo$4)) >> 31)) | 0);
    return $bL(lo$4, hi$2);
  }
});
var $d_RTLong$ = new $TypeData().i($c_RTLong$, "org.scalajs.linker.runtime.RuntimeLong$", ({
  bf: 1
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
$p.ky = (function(xs, ys) {
  if ((xs === ys)) {
    return true;
  }
  if ((xs.a.length !== ys.a.length)) {
    return false;
  }
  var len = xs.a.length;
  var i = 0;
  while ((i < len)) {
    if ((!$m_sr_BoxesRunTime$().b(xs.a[i], ys.a[i]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
var $d_s_Array$ = new $TypeData().i($c_s_Array$, "scala.Array$", ({
  bg: 1
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
  var it = $thiz.N();
  while (it.C()) {
    f.F(it.B());
  }
}
function $f_sc_IterableOnceOps__copyToArray__O__I__I__I($thiz, dest, start, n) {
  var it = $thiz.N();
  var i = start;
  matchResult18: {
    var srclen;
    var x31 = $thiz.U();
    if ((x31 === (-1))) {
      var srclen = $m_jl_reflect_Array$().gi(dest);
      break matchResult18;
    }
    var srclen = x31;
  }
  var destLen = $m_jl_reflect_Array$().gi(dest);
  var limit = ((n < srclen) ? n : srclen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var end = ((start + ((total < 0) ? 0 : total)) | 0);
  while (((i < end) && it.C())) {
    $m_sr_ScalaRunTime$().ll(dest, i, it.B());
    i = ((1 + i) | 0);
  }
  return ((i - start) | 0);
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  return (($thiz.U() === 0) ? (("" + start) + end) : $thiz.is($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end).am.R);
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = b.am;
  if ((start.length !== 0)) {
    jsb.R = (("" + jsb.R) + start);
  }
  var it = $thiz.N();
  if (it.C()) {
    var obj = it.B();
    jsb.R = (("" + jsb.R) + obj);
    while (it.C()) {
      if ((sep.length !== 0)) {
        jsb.R = (("" + jsb.R) + sep);
      }
      var obj$1 = it.B();
      jsb.R = (("" + jsb.R) + obj$1);
    }
  }
  if ((end.length !== 0)) {
    jsb.R = (("" + jsb.R) + end);
  }
  return b;
}
/** @constructor */
function $c_sc_Iterator$ConcatIteratorCell(head, tail) {
  this.j5 = null;
  this.fG = null;
  this.j5 = head;
  this.fG = tail;
}
$p = $c_sc_Iterator$ConcatIteratorCell.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$ConcatIteratorCell;
/** @constructor */
function $h_sc_Iterator$ConcatIteratorCell() {
}
$h_sc_Iterator$ConcatIteratorCell.prototype = $p;
$p.m1 = (function() {
  return this.j5.gf().N();
});
var $d_sc_Iterator$ConcatIteratorCell = new $TypeData().i($c_sc_Iterator$ConcatIteratorCell, "scala.collection.Iterator$ConcatIteratorCell", ({
  bX: 1
}));
/** @constructor */
function $c_sc_StringOps$() {
  this.j6 = null;
  $n_sc_StringOps$ = this;
  this.j6 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$2) => this.j6));
}
$p = $c_sc_StringOps$.prototype = new $h_O();
$p.constructor = $c_sc_StringOps$;
/** @constructor */
function $h_sc_StringOps$() {
}
$h_sc_StringOps$.prototype = $p;
var $d_sc_StringOps$ = new $TypeData().i($c_sc_StringOps$, "scala.collection.StringOps$", ({
  c5: 1
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
  this.j9 = 0;
  $n_sci_IndexedSeqDefaults$ = this;
  try {
    $m_sc_StringOps$();
    var $x_1 = $m_jl_Integer$().mb($m_jl_System$SystemProperties$().kB("scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength", "64"), 10, 214748364);
  } catch (e) {
    if (false) {
      var $x_1 = 64;
    } else {
      var $x_1;
      throw e;
    }
  }
  this.j9 = $x_1;
}
$p = $c_sci_IndexedSeqDefaults$.prototype = new $h_O();
$p.constructor = $c_sci_IndexedSeqDefaults$;
/** @constructor */
function $h_sci_IndexedSeqDefaults$() {
}
$h_sci_IndexedSeqDefaults$.prototype = $p;
var $d_sci_IndexedSeqDefaults$ = new $TypeData().i($c_sci_IndexedSeqDefaults$, "scala.collection.immutable.IndexedSeqDefaults$", ({
  ca: 1
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
  return ((x === y) || ($is_jl_Number(x) ? this.lK(x, y) : ((x instanceof $Char) ? this.lI(x, y) : ((x === null) ? (y === null) : $dp_equals__O__Z(x, y)))));
});
$p.lK = (function(xn, y) {
  if ($is_jl_Number(y)) {
    return this.lJ(xn, y);
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
$p.lJ = (function(xn, yn) {
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
      return (false && yn.n(x2));
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
      return (false && yn.n($bL(x3$2_$_lo, x3$2_$_hi)));
    }
  } else {
    return ((xn === null) ? (yn === null) : $dp_equals__O__Z(xn, yn));
  }
});
$p.lI = (function(xc, y) {
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
  cJ: 1
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
$p.lm = (function() {
  throw new $c_jl_AssertionError("assertion failed");
});
$p.hn = (function() {
  throw $ct_jl_NullPointerException__T__(new $c_jl_NullPointerException(), "tried to cast away nullability, but value is null");
});
var $d_sr_Scala3RunTime$ = new $TypeData().i($c_sr_Scala3RunTime$, "scala.runtime.Scala3RunTime$", ({
  cL: 1
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
$p.fz = (function(xs, idx) {
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
$p.ll = (function(xs, idx, value) {
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
$p.l9 = (function(x) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(x.A(), (x.x() + "("), ",", ")");
});
$p.kY = (function(xs) {
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
  cM: 1
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
$p.me = (function(lv_$_lo, lv_$_hi) {
  return ((lv_$_hi === (lv_$_lo >> 31)) ? lv_$_lo : (lv_$_lo ^ lv_$_hi));
});
$p.lD = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var $x_1 = $m_RTLong$().kA(dv);
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
$p.K = (function(x) {
  if ((x === null)) {
    return 0;
  } else if (((typeof x) === "number")) {
    return this.lD((+x));
  } else if ((x instanceof $Long)) {
    var $x_1 = $uJ(x);
    return this.me($x_1.l, $x_1.h);
  } else {
    return $dp_hashCode__I(x);
  }
});
$p.m9 = (function(n) {
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
var $d_sr_Statics$ = new $TypeData().i($c_sr_Statics$, "scala.runtime.Statics$", ({
  cO: 1
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
    return new $c_T2(x, self.eW);
  }
  if ((self instanceof $c_T2)) {
    return new $c_T3(x, self.af, self.a8);
  }
  if ((self instanceof $c_T3)) {
    return new $c_T4(x, self.aM, self.aD, self.aE);
  }
  if ((self instanceof $c_T4)) {
    return new $c_T5(x, self.ec, self.aN, self.aO, self.aP);
  }
  if ((self instanceof $c_T5)) {
    return new $c_T6(x, self.fa, self.ed, self.ee, self.ef, self.eg);
  }
  if ((self instanceof $c_T6)) {
    return new $c_T7(x, self.fb, self.eh, self.ei, self.ej, self.ek, self.el);
  }
  if ((self instanceof $c_T7)) {
    return new $c_T8(x, self.fc, self.em, self.en, self.eo, self.ep, self.eq, self.er);
  }
  if ((self instanceof $c_T8)) {
    return new $c_T9(x, self.fd, self.es, self.et, self.eu, self.ev, self.ew, self.ex, self.ey);
  }
  if ((self instanceof $c_T9)) {
    return new $c_T10(x, self.fe, self.ez, self.eA, self.eB, self.eC, self.eD, self.eE, self.eF, self.eG);
  }
  if ((self instanceof $c_T10)) {
    return new $c_T11(x, self.eX, self.b3, self.b4, self.b5, self.b6, self.b7, self.b8, self.b9, self.ba, self.b2);
  }
  if ((self instanceof $c_T11)) {
    return new $c_T12(x, self.eY, self.bd, self.be, self.bf, self.bg, self.bh, self.bi, self.bj, self.bk, self.bb, self.bc);
  }
  if ((self instanceof $c_T12)) {
    return new $c_T13(x, self.eZ, self.bo, self.bp, self.bq, self.br, self.bs, self.bt, self.bu, self.bv, self.bl, self.bm, self.bn);
  }
  if ((self instanceof $c_T13)) {
    return new $c_T14(x, self.f0, self.bA, self.bB, self.bC, self.bD, self.bE, self.bF, self.bG, self.bH, self.bw, self.bx, self.by, self.bz);
  }
  if ((self instanceof $c_T14)) {
    return new $c_T15(x, self.f1, self.bN, self.bO, self.bP, self.bQ, self.bR, self.bS, self.bT, self.bU, self.bI, self.bJ, self.bK, self.bL, self.bM);
  }
  if ((self instanceof $c_T15)) {
    return new $c_T16(x, self.f2, self.c1, self.c2, self.c3, self.c4, self.c5, self.c6, self.c7, self.c8, self.bV, self.bW, self.bX, self.bY, self.bZ, self.c0);
  }
  if ((self instanceof $c_T16)) {
    return new $c_T17(x, self.f3, self.cg, self.ch, self.ci, self.cj, self.ck, self.cl, self.cm, self.cn, self.c9, self.ca, self.cb, self.cc, self.cd, self.ce, self.cf);
  }
  if ((self instanceof $c_T17)) {
    return new $c_T18(x, self.f4, self.cw, self.cx, self.cy, self.cz, self.cA, self.cB, self.cC, self.cD, self.co, self.cp, self.cq, self.cr, self.cs, self.ct, self.cu, self.cv);
  }
  if ((self instanceof $c_T18)) {
    return new $c_T19(x, self.f5, self.cN, self.cO, self.cP, self.cQ, self.cR, self.cS, self.cT, self.cU, self.cE, self.cF, self.cG, self.cH, self.cI, self.cJ, self.cK, self.cL, self.cM);
  }
  if ((self instanceof $c_T19)) {
    return new $c_T20(x, self.f6, self.d5, self.d6, self.d7, self.d8, self.d9, self.da, self.db, self.dc, self.cV, self.cW, self.cX, self.cY, self.cZ, self.d0, self.d1, self.d2, self.d3, self.d4);
  }
  if ((self instanceof $c_T20)) {
    return new $c_T21(x, self.f7, self.dn, self.dq, self.dr, self.ds, self.dt, self.du, self.dv, self.dw, self.dd, self.de, self.df, self.dg, self.dh, self.di, self.dj, self.dk, self.dl, self.dm, self.dp);
  }
  if ((self instanceof $c_T21)) {
    return new $c_T22(x, self.f8, self.dH, self.dK, self.dL, self.dM, self.dN, self.dO, self.dP, self.dQ, self.dx, self.dy, self.dz, self.dA, self.dB, self.dC, self.dD, self.dE, self.dF, self.dG, self.dI, self.dJ);
  }
  if ((self instanceof $c_T22)) {
    return new $c_sr_TupleXXL(new $ac_O([x, self.f9, self.e1, self.e5, self.e6, self.e7, self.e8, self.e9, self.ea, self.eb, self.dR, self.dS, self.dT, self.dU, self.dV, self.dW, self.dX, self.dY, self.dZ, self.e0, self.e2, self.e3, self.e4]));
  }
  throw new $c_s_MatchError(self);
}
function $p_sr_Tuples$__xxlCons__O__sr_TupleXXL__sr_TupleXXL($thiz, x, xxl) {
  var arr = new $ac_O(((1 + xxl.s()) | 0));
  arr.a[0] = x;
  var src = xxl.J;
  var length = xxl.s();
  src.a7(0, arr, 1, length);
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
      var $x_1 = new $c_T1(self.a8);
      break matchResult34$1;
    }
    if ((self instanceof $c_T3)) {
      var $x_1 = new $c_T2(self.aD, self.aE);
      break matchResult34$1;
    }
    if ((self instanceof $c_T4)) {
      var $x_1 = new $c_T3(self.aN, self.aO, self.aP);
      break matchResult34$1;
    }
    if ((self instanceof $c_T5)) {
      var $x_1 = new $c_T4(self.ed, self.ee, self.ef, self.eg);
      break matchResult34$1;
    }
    if ((self instanceof $c_T6)) {
      var $x_1 = new $c_T5(self.eh, self.ei, self.ej, self.ek, self.el);
      break matchResult34$1;
    }
    if ((self instanceof $c_T7)) {
      var $x_1 = new $c_T6(self.em, self.en, self.eo, self.ep, self.eq, self.er);
      break matchResult34$1;
    }
    if ((self instanceof $c_T8)) {
      var $x_1 = new $c_T7(self.es, self.et, self.eu, self.ev, self.ew, self.ex, self.ey);
      break matchResult34$1;
    }
    if ((self instanceof $c_T9)) {
      var $x_1 = new $c_T8(self.ez, self.eA, self.eB, self.eC, self.eD, self.eE, self.eF, self.eG);
      break matchResult34$1;
    }
    if ((self instanceof $c_T10)) {
      var $x_1 = new $c_T9(self.b3, self.b4, self.b5, self.b6, self.b7, self.b8, self.b9, self.ba, self.b2);
      break matchResult34$1;
    }
    if ((self instanceof $c_T11)) {
      var $x_1 = new $c_T10(self.bd, self.be, self.bf, self.bg, self.bh, self.bi, self.bj, self.bk, self.bb, self.bc);
      break matchResult34$1;
    }
    if ((self instanceof $c_T12)) {
      var $x_1 = new $c_T11(self.bo, self.bp, self.bq, self.br, self.bs, self.bt, self.bu, self.bv, self.bl, self.bm, self.bn);
      break matchResult34$1;
    }
    if ((self instanceof $c_T13)) {
      var $x_1 = new $c_T12(self.bA, self.bB, self.bC, self.bD, self.bE, self.bF, self.bG, self.bH, self.bw, self.bx, self.by, self.bz);
      break matchResult34$1;
    }
    if ((self instanceof $c_T14)) {
      var $x_1 = new $c_T13(self.bN, self.bO, self.bP, self.bQ, self.bR, self.bS, self.bT, self.bU, self.bI, self.bJ, self.bK, self.bL, self.bM);
      break matchResult34$1;
    }
    if ((self instanceof $c_T15)) {
      var $x_1 = new $c_T14(self.c1, self.c2, self.c3, self.c4, self.c5, self.c6, self.c7, self.c8, self.bV, self.bW, self.bX, self.bY, self.bZ, self.c0);
      break matchResult34$1;
    }
    if ((self instanceof $c_T16)) {
      var $x_1 = new $c_T15(self.cg, self.ch, self.ci, self.cj, self.ck, self.cl, self.cm, self.cn, self.c9, self.ca, self.cb, self.cc, self.cd, self.ce, self.cf);
      break matchResult34$1;
    }
    if ((self instanceof $c_T17)) {
      var $x_1 = new $c_T16(self.cw, self.cx, self.cy, self.cz, self.cA, self.cB, self.cC, self.cD, self.co, self.cp, self.cq, self.cr, self.cs, self.ct, self.cu, self.cv);
      break matchResult34$1;
    }
    if ((self instanceof $c_T18)) {
      var $x_1 = new $c_T17(self.cN, self.cO, self.cP, self.cQ, self.cR, self.cS, self.cT, self.cU, self.cE, self.cF, self.cG, self.cH, self.cI, self.cJ, self.cK, self.cL, self.cM);
      break matchResult34$1;
    }
    if ((self instanceof $c_T19)) {
      var $x_1 = new $c_T18(self.d5, self.d6, self.d7, self.d8, self.d9, self.da, self.db, self.dc, self.cV, self.cW, self.cX, self.cY, self.cZ, self.d0, self.d1, self.d2, self.d3, self.d4);
      break matchResult34$1;
    }
    if ((self instanceof $c_T20)) {
      var $x_1 = new $c_T19(self.dn, self.dq, self.dr, self.ds, self.dt, self.du, self.dv, self.dw, self.dd, self.de, self.df, self.dg, self.dh, self.di, self.dj, self.dk, self.dl, self.dm, self.dp);
      break matchResult34$1;
    }
    if ((self instanceof $c_T21)) {
      var $x_1 = new $c_T20(self.dH, self.dK, self.dL, self.dM, self.dN, self.dO, self.dP, self.dQ, self.dx, self.dy, self.dz, self.dA, self.dB, self.dC, self.dD, self.dE, self.dF, self.dG, self.dI, self.dJ);
      break matchResult34$1;
    }
    if ((self instanceof $c_T22)) {
      var $x_1 = new $c_T21(self.e1, self.e5, self.e6, self.e7, self.e8, self.e9, self.ea, self.eb, self.dR, self.dS, self.dT, self.dU, self.dV, self.dW, self.dX, self.dY, self.dZ, self.e0, self.e2, self.e3, self.e4);
      break matchResult34$1;
    }
    throw new $c_s_MatchError(self);
  }
  return $x_1;
}
function $p_sr_Tuples$__xxlTail__sr_TupleXXL__s_Product($thiz, xxl) {
  if ((xxl.s() === 23)) {
    var elems = xxl.J;
    return new $c_T22(elems.a[1], elems.a[2], elems.a[3], elems.a[4], elems.a[5], elems.a[6], elems.a[7], elems.a[8], elems.a[9], elems.a[10], elems.a[11], elems.a[12], elems.a[13], elems.a[14], elems.a[15], elems.a[16], elems.a[17], elems.a[18], elems.a[19], elems.a[20], elems.a[21], elems.a[22]);
  } else {
    var arr$1 = new $ac_O(((xxl.J.a.length - 1) | 0));
    var src = xxl.J;
    var length = ((xxl.J.a.length - 1) | 0);
    src.a7(1, arr$1, 0, length);
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
$p.lR = (function(xs) {
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
      return new $c_sr_TupleXXL(xs.ak());
    }
  }
});
$p.lS = (function(xs) {
  return ((xs.a.length <= 22) ? this.lR(xs) : new $c_sr_TupleXXL(xs));
});
$p.kt = (function(x, self) {
  return ((self instanceof $c_sr_TupleXXL) ? $p_sr_Tuples$__xxlCons__O__sr_TupleXXL__sr_TupleXXL(this, x, self) : $p_sr_Tuples$__specialCaseCons__O__s_Product__s_Product(this, x, self));
});
$p.lw = (function(self, that) {
  var selfSize = $m_sr_Tuples$().kU(self);
  if ((selfSize === 0)) {
    return that;
  }
  var thatSize = $m_sr_Tuples$().kU(that);
  if ((thatSize === 0)) {
    return self;
  }
  var arr = new $ac_O(((selfSize + thatSize) | 0));
  if ((self instanceof $c_sr_TupleXXL)) {
    var src = self.J;
    src.a7(0, arr, 0, selfSize);
  } else {
    self.A().ku(arr, 0, selfSize);
  }
  if ((that instanceof $c_sr_TupleXXL)) {
    var src$1 = that.J;
    src$1.a7(0, arr, selfSize, thatSize);
  } else {
    that.A().ku(arr, selfSize, thatSize);
  }
  return this.lS(arr);
});
$p.kU = (function(self) {
  if (($m_T$package$EmptyTuple$() === self)) {
    return 0;
  }
  if ((self !== null)) {
    return self.s();
  }
  throw new $c_s_MatchError(self);
});
$p.mY = (function(self) {
  return ((self instanceof $c_sr_TupleXXL) ? $p_sr_Tuples$__xxlTail__sr_TupleXXL__s_Product(this, self) : $p_sr_Tuples$__specialCaseTail__s_Product__s_Product(this, self));
});
var $d_sr_Tuples$ = new $TypeData().i($c_sr_Tuples$, "scala.runtime.Tuples$", ({
  cP: 1
}));
var $n_sr_Tuples$;
function $m_sr_Tuples$() {
  if ((!$n_sr_Tuples$)) {
    $n_sr_Tuples$ = new $c_sr_Tuples$();
  }
  return $n_sr_Tuples$;
}
var $d_sjs_js_Any = new $TypeData().i(2, "scala.scalajs.js.Any", ({
  cQ: 1
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
$p.m0 = (function(this$, o, p) {
  return (!(!(p in o)));
});
var $d_sjs_js_Any$ObjectCompanionOps$ = new $TypeData().i($c_sjs_js_Any$ObjectCompanionOps$, "scala.scalajs.js.Any$ObjectCompanionOps$", ({
  cS: 1
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
$p.kF = (function(this$, elem, from) {
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
$p.l1 = (function(this$, that) {
  var b = [];
  var len = (this$.length | 0);
  var i = 0;
  var it = that.N();
  while (((i < len) && it.C())) {
    b.push(new $c_T2(this$[i], it.B()));
    i = ((1 + i) | 0);
  }
  return b;
});
$p.l2 = (function(this$) {
  var len = (this$.length | 0);
  var b = new Array(len);
  var i = 0;
  while ((i < len)) {
    b[i] = new $c_T2(this$[i], i);
    i = ((1 + i) | 0);
  }
  return b;
});
var $d_sjs_js_ArrayOps$ = new $TypeData().i($c_sjs_js_ArrayOps$, "scala.scalajs.js.ArrayOps$", ({
  cT: 1
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
$p.p = (function(left, right) {
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
  cU: 1
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
  this.jj = null;
  $n_sjs_js_WrappedDictionary$Cache$ = this;
  this.jj = Object.prototype.hasOwnProperty;
}
$p = $c_sjs_js_WrappedDictionary$Cache$.prototype = new $h_O();
$p.constructor = $c_sjs_js_WrappedDictionary$Cache$;
/** @constructor */
function $h_sjs_js_WrappedDictionary$Cache$() {
}
$h_sjs_js_WrappedDictionary$Cache$.prototype = $p;
var $d_sjs_js_WrappedDictionary$Cache$ = new $TypeData().i($c_sjs_js_WrappedDictionary$Cache$, "scala.scalajs.js.WrappedDictionary$Cache$", ({
  cY: 1
}));
var $n_sjs_js_WrappedDictionary$Cache$;
function $m_sjs_js_WrappedDictionary$Cache$() {
  if ((!$n_sjs_js_WrappedDictionary$Cache$)) {
    $n_sjs_js_WrappedDictionary$Cache$ = new $c_sjs_js_WrappedDictionary$Cache$();
  }
  return $n_sjs_js_WrappedDictionary$Cache$;
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
$p.kV = (function(seq) {
  if ((seq instanceof $c_sjsr_WrappedVarArgs)) {
    return seq.gE;
  } else {
    var result = [];
    seq.iw(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2$2) => (result.push(x$2$2) | 0))));
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
function $c_s_util_hashing_MurmurHash3() {
}
$p = $c_s_util_hashing_MurmurHash3.prototype = new $h_O();
$p.constructor = $c_s_util_hashing_MurmurHash3;
/** @constructor */
function $h_s_util_hashing_MurmurHash3() {
}
$h_s_util_hashing_MurmurHash3.prototype = $p;
$p.w = (function(hash, data) {
  var h = this.kO(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.kO = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.a6 = (function(hash, length) {
  return this.gA((hash ^ length));
});
$p.gA = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.E = (function(x, seed, ignorePrefix) {
  var arr = x.s();
  if ((arr === 0)) {
    return ((!ignorePrefix) ? $f_T__hashCode__I(x.x()) : seed);
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.w(h, $f_T__hashCode__I(x.x()));
    }
    var i = 0;
    while ((i < arr)) {
      h = this.w(h, $m_sr_Statics$().K(x.l(i)));
      i = ((1 + i) | 0);
    }
    return this.a6(h, arr);
  }
});
$p.lu = (function(x, seed, caseClassName) {
  var arr = x.s();
  var aye = $f_T__hashCode__I(((caseClassName !== null) ? caseClassName : x.x()));
  if ((arr === 0)) {
    return aye;
  } else {
    var h = seed;
    h = this.w(h, aye);
    var i = 0;
    while ((i < arr)) {
      h = this.w(h, $m_sr_Statics$().K(x.l(i)));
      i = ((1 + i) | 0);
    }
    return this.a6(h, arr);
  }
});
$p.n4 = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = xs.N();
  while (iterator.C()) {
    var x = iterator.B();
    var h = $m_sr_Statics$().K(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0);
  }
  var h$2 = seed;
  h$2 = this.w(h$2, a);
  h$2 = this.w(h$2, b);
  h$2 = this.kO(h$2, c);
  return this.a6(h$2, n);
});
$p.mC = (function(xs, seed) {
  var it = xs.N();
  var h = seed;
  if ((!it.C())) {
    return this.a6(h, 0);
  }
  var x0 = it.B();
  if ((!it.C())) {
    return this.a6(this.w(h, $m_sr_Statics$().K(x0)), 1);
  }
  var x1 = it.B();
  var initial = $m_sr_Statics$().K(x0);
  h = this.w(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().K(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while (it.C()) {
    h = this.w(h, prev);
    var hash = $m_sr_Statics$().K(it.B());
    if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
      h = this.w(h, hash);
      i = ((1 + i) | 0);
      while (it.C()) {
        h = this.w(h, $m_sr_Statics$().K(it.B()));
        i = ((1 + i) | 0);
      }
      return this.a6(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.gA(this.w(this.w(h0, rangeDiff), prev));
});
$p.kq = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().gi(a);
  switch (l) {
    case 0: {
      return this.a6(h, 0);
      break;
    }
    case 1: {
      return this.a6(this.w(h, $m_sr_Statics$().K($m_sr_ScalaRunTime$().fz(a, 0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().K($m_sr_ScalaRunTime$().fz(a, 0));
      h = this.w(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().K($m_sr_ScalaRunTime$().fz(a, 1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.w(h, prev);
        var hash = $m_sr_Statics$().K($m_sr_ScalaRunTime$().fz(a, i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.w(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.w(h, $m_sr_Statics$().K($m_sr_ScalaRunTime$().fz(a, i)));
            i = ((1 + i) | 0);
          }
          return this.a6(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.gA(this.w(this.w(h0, rangeDiff), prev));
    }
  }
});
$p.mI = (function(start, step, last, seed) {
  return this.gA(this.w(this.w(this.w(seed, start), step), last));
});
$p.m4 = (function(a, seed) {
  var h = seed;
  var l = a.D();
  switch (l) {
    case 0: {
      return this.a6(h, 0);
      break;
    }
    case 1: {
      return this.a6(this.w(h, $m_sr_Statics$().K(a.L(0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().K(a.L(0));
      h = this.w(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().K(a.L(1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.w(h, prev);
        var hash = $m_sr_Statics$().K(a.L(i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.w(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.w(h, $m_sr_Statics$().K(a.L(i)));
            i = ((1 + i) | 0);
          }
          return this.a6(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.gA(this.w(this.w(h0, rangeDiff), prev));
    }
  }
});
$p.md = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!elems.M())) {
    elems.hm();
  }
  return ((rangeState === 2) ? this.mI(initial, rangeDiff, prev, seed) : this.a6(h, n));
});
function $p_Lsketches_rooms_columns_Columns$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2($thiz, c, u, v) {
  return new $c_T2(c, new $c_Ltrivalibs_graphics_math_cpu_Vec2(u, v));
}
function $p_Lsketches_rooms_columns_Columns$package$__columnFaces$1__sjs_js_Array($thiz) {
  var box = $m_Ltrivalibs_graphics_geometry_Box$().ko(new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0), $m_Lsketches_rooms_columns_Columns$package$().fJ, $m_Lsketches_rooms_columns_Columns$package$().fh, $m_Lsketches_rooms_columns_Columns$package$().fJ);
  var f = ((c$2, uvw$2) => $p_Lsketches_rooms_columns_Columns$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2($thiz, c$2, uvw$2.r, uvw$2.m));
  var $x_19 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0 = box.gH;
  var x1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0);
  var $x_18 = f(x0, x1);
  var x0$1 = box.fM;
  var x1$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
  var $x_17 = f(x0$1, x1$1);
  var x0$2 = box.fN;
  var x1$2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0);
  var $x_16 = f(x0$2, x1$2);
  var x0$3 = box.gI;
  var x1$3 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 0.0);
  var $x_15 = $x_19.aK($x_18, $x_17, $x_16, f(x0$3, x1$3));
  var f$1 = ((c$2$1, uvw$2$1) => $p_Lsketches_rooms_columns_Columns$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2($thiz, c$2$1, (1.0 - uvw$2$1.r), uvw$2$1.m));
  var $x_14 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0$4 = box.gG;
  var x1$4 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 1.0);
  var $x_13 = f$1(x0$4, x1$4);
  var x0$5 = box.fL;
  var x1$5 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0);
  var $x_12 = f$1(x0$5, x1$5);
  var x0$6 = box.fK;
  var x1$6 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0);
  var $x_11 = f$1(x0$6, x1$6);
  var x0$7 = box.gF;
  var x1$7 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0);
  var $x_10 = $x_14.aK($x_13, $x_12, $x_11, f$1(x0$7, x1$7));
  var f$2 = ((c$2$2, uvw$2$2) => $p_Lsketches_rooms_columns_Columns$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2($thiz, c$2$2, (1.0 - uvw$2$2.o), uvw$2$2.m));
  var $x_9 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0$8 = box.gF;
  var x1$8 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0);
  var $x_8 = f$2(x0$8, x1$8);
  var x0$9 = box.fK;
  var x1$9 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0);
  var $x_7 = f$2(x0$9, x1$9);
  var x0$10 = box.fM;
  var x1$10 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
  var $x_6 = f$2(x0$10, x1$10);
  var x0$11 = box.gH;
  var x1$11 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0);
  var $x_5 = $x_9.aK($x_8, $x_7, $x_6, f$2(x0$11, x1$11));
  var f$3 = ((c$2$3, uvw$2$3) => $p_Lsketches_rooms_columns_Columns$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2($thiz, c$2$3, uvw$2$3.o, uvw$2$3.m));
  var $x_4 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0$12 = box.gI;
  var x1$12 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 0.0);
  var $x_3 = f$3(x0$12, x1$12);
  var x0$13 = box.fN;
  var x1$13 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0);
  var $x_2 = f$3(x0$13, x1$13);
  var x0$14 = box.fL;
  var x1$14 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0);
  var $x_1 = f$3(x0$14, x1$14);
  var x0$15 = box.gG;
  var x1$15 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 1.0);
  return [$x_15, $x_10, $x_5, $x_4.aK($x_3, $x_2, $x_1, f$3(x0$15, x1$15))];
}
function $p_Lsketches_rooms_columns_Columns$package$__balkFaces$1__sjs_js_Array($thiz) {
  var box = $m_Ltrivalibs_graphics_geometry_Box$().ko(new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0), $m_Lsketches_rooms_columns_Columns$package$().fJ, $m_Lsketches_rooms_columns_Columns$package$().hy, $m_Lsketches_rooms_columns_Columns$package$().I);
  var f = ((c$2, uvw$2) => $p_Lsketches_rooms_columns_Columns$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2($thiz, c$2, (1.0 - uvw$2.o), uvw$2.m));
  var $x_14 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0 = box.gF;
  var x1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0);
  var $x_13 = f(x0, x1);
  var x0$1 = box.fK;
  var x1$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0);
  var $x_12 = f(x0$1, x1$1);
  var x0$2 = box.fM;
  var x1$2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
  var $x_11 = f(x0$2, x1$2);
  var x0$3 = box.gH;
  var x1$3 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0);
  var $x_10 = $x_14.aK($x_13, $x_12, $x_11, f(x0$3, x1$3));
  var f$1 = ((c$2$1, uvw$2$1) => $p_Lsketches_rooms_columns_Columns$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2($thiz, c$2$1, uvw$2$1.o, uvw$2$1.m));
  var $x_9 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0$4 = box.gI;
  var x1$4 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 0.0);
  var $x_8 = f$1(x0$4, x1$4);
  var x0$5 = box.fN;
  var x1$5 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0);
  var $x_7 = f$1(x0$5, x1$5);
  var x0$6 = box.fL;
  var x1$6 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0);
  var $x_6 = f$1(x0$6, x1$6);
  var x0$7 = box.gG;
  var x1$7 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 1.0);
  var $x_5 = $x_9.aK($x_8, $x_7, $x_6, f$1(x0$7, x1$7));
  var f$2 = ((c$2$2, uvw$2$2) => $p_Lsketches_rooms_columns_Columns$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2($thiz, c$2$2, uvw$2$2.r, uvw$2$2.o));
  var $x_4 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0$8 = box.fM;
  var x1$8 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
  var $x_3 = f$2(x0$8, x1$8);
  var x0$9 = box.fK;
  var x1$9 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0);
  var $x_2 = f$2(x0$9, x1$9);
  var x0$10 = box.fL;
  var x1$10 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0);
  var $x_1 = f$2(x0$10, x1$10);
  var x0$11 = box.fN;
  var x1$11 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0);
  return [$x_10, $x_5, $x_4.aK($x_3, $x_2, $x_1, f$2(x0$11, x1$11))];
}
function $p_Lsketches_rooms_columns_Columns$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form($thiz, p$1, faces) {
  var mesh$proxy1 = $m_Ltrivalibs_graphics_geometry_Mesh$().li(faces, null, 0, new $c_Ltrivalibs_graphics_geometry_package$package$$anon$1(0));
  var vl = new $c_Ltrivalibs_graphics_geometry_VertexLayout$named(new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$(), new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$(), $m_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$())));
  var f = ((v$3, n$3, ref$3) => {
    var nVal = new $c_T3(n$3.r, n$3.m, n$3.o);
    var values$proxy1 = $m_sr_Tuples$().lw(vl.jm.fC(v$3), $m_sr_Tuples$().kt(nVal, $m_T$package$EmptyTuple$()));
    var baseOffset$proxy1 = (ref$3.off | 0);
    var nestedValues = values$proxy1.l(0);
    var value = nestedValues.l(0);
    ref$3.dv.setFloat32(baseOffset$proxy1, Math.fround(value), true);
    var tailOffset = ((4 + baseOffset$proxy1) | 0);
    var value$2 = nestedValues.l(1);
    ref$3.dv.setFloat32(tailOffset, Math.fround(value$2), true);
    var tailOffset$2 = ((4 + tailOffset) | 0);
    var value$3 = nestedValues.l(2);
    ref$3.dv.setFloat32(tailOffset$2, Math.fround(value$3), true);
    var tailOffset$4 = ((12 + baseOffset$proxy1) | 0);
    var nestedValues$2 = values$proxy1.l(1);
    var value$4 = nestedValues$2.l(0);
    ref$3.dv.setFloat32(tailOffset$4, Math.fround(value$4), true);
    var tailOffset$5 = ((4 + tailOffset$4) | 0);
    var value$5 = nestedValues$2.l(1);
    ref$3.dv.setFloat32(tailOffset$5, Math.fround(value$5), true);
    var tailOffset$7 = ((8 + tailOffset$4) | 0);
    var nestedValues$3 = values$proxy1.l(2);
    var value$6 = nestedValues$3.l(0);
    ref$3.dv.setFloat32(tailOffset$7, Math.fround(value$6), true);
    var tailOffset$8 = ((4 + tailOffset$7) | 0);
    var value$7 = nestedValues$3.l(1);
    ref$3.dv.setFloat32(tailOffset$8, Math.fround(value$7), true);
    var tailOffset$9 = ((4 + tailOffset$8) | 0);
    var value$8 = nestedValues$3.l(2);
    ref$3.dv.setFloat32(tailOffset$9, Math.fround(value$8), true);
  });
  var \u03b4proxy2 = $m_Ltrivalibs_graphics_geometry_buffers$package$();
  mesh$proxy1.lF();
  var vertexCount = 0;
  var hasQuads = false;
  var fi = 0;
  while ((fi < (mesh$proxy1.a3.length | 0))) {
    var n = (mesh$proxy1.a3[fi].length | 0);
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
    while ((fi < (mesh$proxy1.a3.length | 0))) {
      var arr = mesh$proxy1.a3[fi];
      var opt$proxy1 = mesh$proxy1.fj[fi].fO;
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
    while ((fi < (mesh$proxy1.a3.length | 0))) {
      var arr$2 = mesh$proxy1.a3[fi];
      var n$2 = (arr$2.length | 0);
      var opt$proxy2 = mesh$proxy1.fj[fi].fO;
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
    var $x_1 = new $c_Ltrivalibs_graphics_geometry_BufferedGeometry(verts, \u03b4proxy2.mt(idxBuf, vertexCount));
  }
  return p$1.lP($x_1, (void 0), (void 0), (void 0), (void 0), (void 0));
}
/** @constructor */
function $c_Lsketches_rooms_columns_Columns$package$() {
  this.I = 0.0;
  this.fh = 0.0;
  this.fJ = 0.0;
  this.hy = 0.0;
  this.a0 = 0;
  this.Z = 0;
  $n_Lsketches_rooms_columns_Columns$package$ = this;
  this.I = 12.0;
  this.fh = 40.0;
  this.fJ = 2.0;
  this.hy = (3.4 * $m_Lsketches_rooms_columns_Columns$package$().fJ);
  this.a0 = 8;
  this.Z = 4;
}
$p = $c_Lsketches_rooms_columns_Columns$package$.prototype = new $h_O();
$p.constructor = $c_Lsketches_rooms_columns_Columns$package$;
/** @constructor */
function $h_Lsketches_rooms_columns_Columns$package$() {
}
$h_Lsketches_rooms_columns_Columns$package$.prototype = $p;
$p.mP = (function(canvas) {
  $m_Ltrivalibs_graphics_painter_Painter$().m5(canvas, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((p$3) => {
    var n$proxy1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
    var center$proxy1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0);
    var f = ((pos$2, uv$2) => $p_Lsketches_rooms_columns_Columns$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2(this, pos$2, uv$2.fk, uv$2.fl));
    var uvAtPivot = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.5, 0.5);
    var n = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), n$proxy1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
    var x = n.m;
    if (((+Math.abs(x)) > 0.999)) {
      var up = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
    } else {
      var up = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
    }
    var tangent = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), up, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), n);
    var n$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), n, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
    var uDir = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), tangent, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), n$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D($m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), n$1, tangent))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
    var uVec = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), uDir, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), 200.0);
    var vVec = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), n$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uDir), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$()), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), 200.0);
    var tlPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), center$proxy1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), uVec, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uvAtPivot.fk)), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), vVec, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uvAtPivot.fl));
    var trPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), tlPos, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uVec);
    var blPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), tlPos, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), vVec);
    var brPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), blPos, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uVec);
    var $x_4 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
    var x1 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 0.0);
    var $x_3 = f(tlPos, x1);
    var x1$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 1.0);
    var $x_2 = f(blPos, x1$1);
    var x1$2 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(1.0, 1.0);
    var $x_1 = f(brPos, x1$2);
    var x1$3 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(1.0, 0.0);
    var groundFaces = [$x_4.aK($x_3, $x_2, $x_1, f(trPos, x1$3))];
    var n$proxy2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0);
    var center$proxy2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, (0.5 * $m_Lsketches_rooms_columns_Columns$package$().fh), 0.0);
    var f$1 = ((pos$2$1, uv$2$1) => $p_Lsketches_rooms_columns_Columns$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2(this, pos$2$1, uv$2$1.fk, uv$2$1.fl));
    var width = $m_Lsketches_rooms_columns_Columns$package$().I;
    var height = $m_Lsketches_rooms_columns_Columns$package$().fh;
    var uvAtPivot$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.5, 0.5);
    var n$2 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), n$proxy2, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
    var x$1 = n$2.m;
    if (((+Math.abs(x$1)) > 0.999)) {
      var up$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
    } else {
      var up$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
    }
    var tangent$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), up$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), n$2);
    var n$3 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), n$2, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
    var uDir$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), tangent$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), n$3, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D($m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), n$3, tangent$1))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
    var uVec$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), uDir$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), width);
    var vVec$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), n$3, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uDir$1), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$()), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), height);
    var tlPos$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), center$proxy2, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), uVec$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uvAtPivot$1.fk)), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), vVec$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uvAtPivot$1.fl));
    var trPos$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), tlPos$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uVec$1);
    var blPos$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), tlPos$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), vVec$1);
    var brPos$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), blPos$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uVec$1);
    var $x_8 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
    var x1$4 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 0.0);
    var $x_7 = f$1(tlPos$1, x1$4);
    var x1$5 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 1.0);
    var $x_6 = f$1(blPos$1, x1$5);
    var x1$6 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(1.0, 1.0);
    var $x_5 = f$1(brPos$1, x1$6);
    var x1$7 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(1.0, 0.0);
    var wallFaces = [$x_8.aK($x_7, $x_6, $x_5, f$1(trPos$1, x1$7))];
    var groundForm = $p_Lsketches_rooms_columns_Columns$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$3, groundFaces);
    var wallForm = $p_Lsketches_rooms_columns_Columns$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$3, wallFaces);
    var columnForm = $p_Lsketches_rooms_columns_Columns$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$3, $p_Lsketches_rooms_columns_Columns$package$__columnFaces$1__sjs_js_Array(this));
    var balkForm = $p_Lsketches_rooms_columns_Columns$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$3, $p_Lsketches_rooms_columns_Columns$package$__balkFaces$1__sjs_js_Array(this));
    var program = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    var d = ({});
    var ctx = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().eO;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().eO = reg;
    try {
      var AssignTarget_this = ctx.hg.k7;
      var value$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().n7($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().mv(ctx.he.aC("viewProj"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().kD(), ctx.he.aC("model")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().kD(), $m_Ltrivalibs_graphics_math_gpu_vec4$().kp(ctx.hf.aC("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fB().F(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$());
      var x0 = (((("  " + AssignTarget_this.g5) + " = ") + value$proxy1.u) + ";");
      var AssignTarget_this$2 = ctx.hg.hq("normal");
      var value$proxy2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$().n6(ctx.he.aC("normalMat"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().lY(), ctx.hf.aC("normal"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$());
      var x1$8 = (((("  " + AssignTarget_this$2.g5) + " = ") + value$proxy2.u) + ";");
      var AssignTarget_this$3 = ctx.hg.hq("uv");
      var value$proxy3 = ctx.hf.aC("uv");
      var $x_9 = $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs([x0, x1$8, (((("  " + AssignTarget_this$3.g5) + " = ") + value$proxy3.u) + ";")]), "", "\n", "");
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().eO = prev;
    }
    program.id = $x_9;
    var array$1 = reg.i9;
    var len = (array$1.length | 0);
    var i = 0;
    while ((i < len)) {
      $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$1[i]);
      i = ((1 + i) | 0);
    }
    var d$2 = ({});
    var ctx$2 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$2), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().eO;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().eO = reg$2;
    try {
      var uv = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("uv");
      var col = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("col");
      var x0$2 = uv.km($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().lQ($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().l8(ctx$2.g6.aC("uv"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), 40.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$()));
      var x1$9 = col.km($m_Ltrivalibs_graphics_math_gpu_expr$package$().mQ($m_Ltrivalibs_graphics_math_gpu_vec3$().lj($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().kZ(ctx$2.g6.aC("uv")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().l0(ctx$2.g6.aC("uv")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fB().F(0.5)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().lN(ctx$2.g6.aC("normal"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$()), $m_Ltrivalibs_graphics_math_gpu_expr$package$().lr($m_Ltrivalibs_graphics_math_gpu_expr$package$().kz($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().kZ(uv), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fB().F(0.2)), $m_Ltrivalibs_graphics_math_gpu_expr$package$().kz($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().l0(uv), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fB().F(0.2)))));
      var AssignTarget_this$1 = ctx$2.k6.hq("color");
      var value$proxy4 = $m_Ltrivalibs_graphics_math_gpu_vec4$().kp(col, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fB().F(1.0));
      var $x_10 = $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs([x0$2, x1$9, (((("  " + AssignTarget_this$1.g5) + " = ") + value$proxy4.u) + ";")]), "", "\n", "");
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().eO = prev$2;
    }
    program.ic = $x_10;
    var array$3 = reg$2.i9;
    var len$1 = (array$3.length | 0);
    var i$1 = 0;
    while ((i$1 < len$1)) {
      $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$3[i$1]);
      i$1 = ((1 + i$1) | 0);
    }
    var b$2 = program.id;
    var b$3 = program.ic;
    var helperFns$proxy1 = program.m3();
    var id = p$3.h2;
    p$3.h2 = ((1 + p$3.h2) | 0);
    var names = $m_sjs_js_ArrayOpsCommon$().p(["model"], $m_sjs_js_ArrayOpsCommon$().p(["normalMat"], $m_sjs_js_ArrayOpsCommon$().p(["viewProj"], [])));
    var dict = ({});
    var i$2 = 0;
    while ((i$2 < (names.length | 0))) {
      dict[names[i$2]] = i$2;
      i$2 = ((1 + i$2) | 0);
    }
    var names$2 = [];
    var dict$2 = ({});
    var i$2$1 = 0;
    while ((i$2$1 < (names$2.length | 0))) {
      dict$2[names$2[i$2$1]] = i$2$1;
      i$2$1 = ((1 + i$2$1) | 0);
    }
    var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef(b$2, b$3, helperFns$proxy1);
    var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().p(["position"], $m_sjs_js_ArrayOpsCommon$().p(["uv"], $m_sjs_js_ArrayOpsCommon$().p(["normal"], []))), $m_sjs_js_ArrayOpsCommon$().p(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().p(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().p(["vec3<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().p([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().p([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().p(["uv"], $m_sjs_js_ArrayOpsCommon$().p(["normal"], [])), $m_sjs_js_ArrayOpsCommon$().p(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().p(["vec3<f32>"], [])), $m_sjs_js_ArrayOpsCommon$().p([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().p(["color"], []), $m_sjs_js_ArrayOpsCommon$().p(["vec4<f32>"], []), []);
    var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().p(["model"], $m_sjs_js_ArrayOpsCommon$().p(["normalMat"], $m_sjs_js_ArrayOpsCommon$().p(["viewProj"], []))), $m_sjs_js_ArrayOpsCommon$().p([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).g4.fD()], $m_sjs_js_ArrayOpsCommon$().p([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$()).g4.fD()], $m_sjs_js_ArrayOpsCommon$().p([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).g4.fD()], []))));
    var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().p([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.g3, sd.g1, fragBuiltinParams);
    var args$proxy1 = $m_sr_ScalaRunTime$().kY(new ($d_sjs_js_Any.r().C)([baseWgsl]));
    console.log(...$m_sjsr_Compat$().kV(args$proxy1));
    var module = p$3.e.createShaderModule(({
      "code": baseWgsl
    }));
    var formats = $m_sjs_js_ArrayOpsCommon$().p(["float32x3"], $m_sjs_js_ArrayOpsCommon$().p(["float32x2"], $m_sjs_js_ArrayOpsCommon$().p(["float32x3"], [])));
    var sizes = $m_sjs_js_ArrayOpsCommon$().p([12], $m_sjs_js_ArrayOpsCommon$().p([8], $m_sjs_js_ArrayOpsCommon$().p([12], [])));
    var offsets = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes);
    var stride = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes);
    var attributes = [];
    var i$3 = 0;
    while ((i$3 < (formats.length | 0))) {
      var value$2 = i$3;
      var value$3 = (offsets[i$3] | 0);
      var s = formats[i$3];
      attributes.push(({
        "shaderLocation": value$2,
        "offset": value$3,
        "format": s
      }));
      i$3 = ((1 + i$3) | 0);
    }
    var vbl = ({
      "arrayStride": stride,
      "attributes": attributes
    });
    var $x_14 = $m_sjs_js_ArrayOpsCommon$();
    var $x_13 = $m_sjs_js_ArrayOpsCommon$();
    var _2 = ({
      "type": "uniform"
    });
    var $x_12 = $m_sjs_js_ArrayOpsCommon$();
    var _2$1 = ({
      "type": "uniform"
    });
    var $x_11 = $m_sjs_js_ArrayOpsCommon$();
    var _2$2 = ({
      "type": "uniform"
    });
    var descriptors = $x_14.p([$x_13.p([({
      "binding": 0,
      "visibility": 1,
      "buffer": _2
    })], $x_12.p([({
      "binding": 1,
      "visibility": 1,
      "buffer": _2$1
    })], $x_11.p([({
      "binding": 2,
      "visibility": 1,
      "buffer": _2$2
    })], [])))], []);
    var result = [];
    var len$2 = (descriptors.length | 0);
    var i$4 = 0;
    while ((i$4 < len$2)) {
      var x0$4 = descriptors[i$4];
      (result.push(p$3.e.createBindGroupLayout(({
        "entries": x0$4
      }))) | 0);
      i$4 = ((1 + i$4) | 0);
    }
    var \u03b42$___1 = result;
    var \u03b42$___2 = $m_Ltrivalibs_graphics_shader_layouts$().kv(p$3.e, result);
    var bgls$2 = \u03b42$___1;
    var pl = $m_Ltrivalibs_graphics_shader_layouts$().kv(p$3.e, bgls$2);
    var shade = new $c_Ltrivalibs_graphics_painter_Shade(id, module, vbl, bgls$2[0], null, pl, false, dict, dict$2);
    var identityMat = new $c_Ltrivalibs_graphics_math_cpu_Mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0);
    var identityN = $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().X(identityMat);
    var Bindable_this = p$3.hr(groundForm, shade, (void 0), (void 0));
    var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("model", identityMat);
    var e2$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", identityN);
    var \u03b4scrutinee112 = e1$proxy1.v;
    var idx = (Bindable_this.ac.t.model | 0);
    if (((idx < (Bindable_this.S.length | 0)) && (Bindable_this.S[idx] !== null))) {
      var BufferBinding_this = Bindable_this.S[idx];
      BufferBinding_this.h.i(BufferBinding_this.d, \u03b4scrutinee112);
      var $x_16 = BufferBinding_this.g.queue;
      var $x_15 = BufferBinding_this.f;
      var s$proxy2 = BufferBinding_this.d;
      $x_16.writeBuffer($x_15, 0.0, s$proxy2.dv.buffer);
    } else {
      var uv$1 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
      var device$proxy1 = Bindable_this.i6.e;
      var buffer = new ArrayBuffer(64);
      var arr$proxy6 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
      var b$4 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy6.dv, 0), device$proxy1, uv$1);
      b$4.h.i(b$4.d, \u03b4scrutinee112);
      var $x_18 = b$4.g.queue;
      var $x_17 = b$4.f;
      var s$proxy3 = b$4.d;
      $x_18.writeBuffer($x_17, 0.0, s$proxy3.dv.buffer);
      while (((Bindable_this.S.length | 0) <= idx)) {
        Bindable_this.S.push(null);
      }
      Bindable_this.S[idx] = b$4;
    }
    var \u03b4scrutinee123 = e2$proxy1.v;
    var idx$2 = (Bindable_this.ac.t.normalMat | 0);
    if (((idx$2 < (Bindable_this.S.length | 0)) && (Bindable_this.S[idx$2] !== null))) {
      var BufferBinding_this$5 = Bindable_this.S[idx$2];
      BufferBinding_this$5.h.i(BufferBinding_this$5.d, \u03b4scrutinee123);
      var $x_20 = BufferBinding_this$5.g.queue;
      var $x_19 = BufferBinding_this$5.f;
      var s$proxy4 = BufferBinding_this$5.d;
      $x_20.writeBuffer($x_19, 0.0, s$proxy4.dv.buffer);
    } else {
      var uv$2$2 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
      var device$proxy2 = Bindable_this.i6.e;
      var buffer$2 = new ArrayBuffer(48);
      var arr$proxy7 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
      var b$2$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy7.dv, 0), device$proxy2, uv$2$2);
      b$2$1.h.i(b$2$1.d, \u03b4scrutinee123);
      var $x_22 = b$2$1.g.queue;
      var $x_21 = b$2$1.f;
      var s$proxy5 = b$2$1.d;
      $x_22.writeBuffer($x_21, 0.0, s$proxy5.dv.buffer);
      while (((Bindable_this.S.length | 0) <= idx$2)) {
        Bindable_this.S.push(null);
      }
      Bindable_this.S[idx$2] = b$2$1;
    }
    var columnShape = p$3.hr(columnForm, shade, (void 0), (void 0));
    var balkShape = p$3.hr(balkForm, shade, (void 0), (void 0));
    var wallShape = p$3.hr(wallForm, shade, (void 0), (void 0));
    var colY = (0.5 * $m_Lsketches_rooms_columns_Columns$package$().fh);
    var iz = ((-$m_Lsketches_rooms_columns_Columns$package$().a0) | 0);
    while ((iz <= $m_Lsketches_rooms_columns_Columns$package$().a0)) {
      var z = (iz * $m_Lsketches_rooms_columns_Columns$package$().I);
      var x$proxy2 = (((-$m_Lsketches_rooms_columns_Columns$package$().Z) | 0) * $m_Lsketches_rooms_columns_Columns$package$().I);
      var m = new $c_Ltrivalibs_graphics_math_cpu_Mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, x$proxy2, colY, z, 1.0);
      var InstanceList_this = columnShape.P;
      var e1$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m);
      var e2$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().X(m));
      var i$4$1 = InstanceList_this.a1();
      var Bindable_this$6 = InstanceList_this.G[i$4$1];
      var \u03b4scrutinee134 = e1$proxy2.v;
      var idx$3 = (Bindable_this$6.z.t.model | 0);
      if (((idx$3 < (Bindable_this$6.c.length | 0)) && (Bindable_this$6.c[idx$3] !== null))) {
        var BufferBinding_this$9 = Bindable_this$6.c[idx$3];
        BufferBinding_this$9.h.i(BufferBinding_this$9.d, \u03b4scrutinee134);
        var $x_24 = BufferBinding_this$9.g.queue;
        var $x_23 = BufferBinding_this$9.f;
        var s$proxy6 = BufferBinding_this$9.d;
        $x_24.writeBuffer($x_23, 0.0, s$proxy6.dv.buffer);
      } else {
        var uv$3 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
        var device$proxy3 = Bindable_this$6.y.e;
        var buffer$3 = new ArrayBuffer(64);
        var arr$proxy8 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$3), 1);
        var b$3$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy8.dv, 0), device$proxy3, uv$3);
        b$3$1.h.i(b$3$1.d, \u03b4scrutinee134);
        var $x_26 = b$3$1.g.queue;
        var $x_25 = b$3$1.f;
        var s$proxy7 = b$3$1.d;
        $x_26.writeBuffer($x_25, 0.0, s$proxy7.dv.buffer);
        while (((Bindable_this$6.c.length | 0) <= idx$3)) {
          Bindable_this$6.c.push(null);
        }
        Bindable_this$6.c[idx$3] = b$3$1;
      }
      var \u03b4scrutinee145 = e2$proxy2.v;
      var idx$4 = (Bindable_this$6.z.t.normalMat | 0);
      if (((idx$4 < (Bindable_this$6.c.length | 0)) && (Bindable_this$6.c[idx$4] !== null))) {
        var BufferBinding_this$13 = Bindable_this$6.c[idx$4];
        BufferBinding_this$13.h.i(BufferBinding_this$13.d, \u03b4scrutinee145);
        var $x_28 = BufferBinding_this$13.g.queue;
        var $x_27 = BufferBinding_this$13.f;
        var s$proxy8 = BufferBinding_this$13.d;
        $x_28.writeBuffer($x_27, 0.0, s$proxy8.dv.buffer);
      } else {
        var uv$4 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
        var device$proxy4 = Bindable_this$6.y.e;
        var buffer$4 = new ArrayBuffer(48);
        var arr$proxy9 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$4), 1);
        var b$4$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy9.dv, 0), device$proxy4, uv$4);
        b$4$1.h.i(b$4$1.d, \u03b4scrutinee145);
        var $x_30 = b$4$1.g.queue;
        var $x_29 = b$4$1.f;
        var s$proxy9 = b$4$1.d;
        $x_30.writeBuffer($x_29, 0.0, s$proxy9.dv.buffer);
        while (((Bindable_this$6.c.length | 0) <= idx$4)) {
          Bindable_this$6.c.push(null);
        }
        Bindable_this$6.c[idx$4] = b$4$1;
      }
      var x$proxy3 = ($m_Lsketches_rooms_columns_Columns$package$().Z * $m_Lsketches_rooms_columns_Columns$package$().I);
      var m$2 = new $c_Ltrivalibs_graphics_math_cpu_Mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, x$proxy3, colY, z, 1.0);
      var InstanceList_this$2 = columnShape.P;
      var e1$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$2);
      var e2$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().X(m$2));
      var i$5 = InstanceList_this$2.a1();
      var Bindable_this$11 = InstanceList_this$2.G[i$5];
      var \u03b4scrutinee156 = e1$proxy3.v;
      var idx$5 = (Bindable_this$11.z.t.model | 0);
      if (((idx$5 < (Bindable_this$11.c.length | 0)) && (Bindable_this$11.c[idx$5] !== null))) {
        var BufferBinding_this$17 = Bindable_this$11.c[idx$5];
        BufferBinding_this$17.h.i(BufferBinding_this$17.d, \u03b4scrutinee156);
        var $x_32 = BufferBinding_this$17.g.queue;
        var $x_31 = BufferBinding_this$17.f;
        var s$proxy10 = BufferBinding_this$17.d;
        $x_32.writeBuffer($x_31, 0.0, s$proxy10.dv.buffer);
      } else {
        var uv$5 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
        var device$proxy5 = Bindable_this$11.y.e;
        var buffer$5 = new ArrayBuffer(64);
        var arr$proxy10 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$5), 1);
        var b$5 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy10.dv, 0), device$proxy5, uv$5);
        b$5.h.i(b$5.d, \u03b4scrutinee156);
        var $x_34 = b$5.g.queue;
        var $x_33 = b$5.f;
        var s$proxy11 = b$5.d;
        $x_34.writeBuffer($x_33, 0.0, s$proxy11.dv.buffer);
        while (((Bindable_this$11.c.length | 0) <= idx$5)) {
          Bindable_this$11.c.push(null);
        }
        Bindable_this$11.c[idx$5] = b$5;
      }
      var \u03b4scrutinee167 = e2$proxy3.v;
      var idx$6 = (Bindable_this$11.z.t.normalMat | 0);
      if (((idx$6 < (Bindable_this$11.c.length | 0)) && (Bindable_this$11.c[idx$6] !== null))) {
        var BufferBinding_this$21 = Bindable_this$11.c[idx$6];
        BufferBinding_this$21.h.i(BufferBinding_this$21.d, \u03b4scrutinee167);
        var $x_36 = BufferBinding_this$21.g.queue;
        var $x_35 = BufferBinding_this$21.f;
        var s$proxy12 = BufferBinding_this$21.d;
        $x_36.writeBuffer($x_35, 0.0, s$proxy12.dv.buffer);
      } else {
        var uv$6 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
        var device$proxy6 = Bindable_this$11.y.e;
        var buffer$6 = new ArrayBuffer(48);
        var arr$proxy11 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$6), 1);
        var b$6 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy11.dv, 0), device$proxy6, uv$6);
        b$6.h.i(b$6.d, \u03b4scrutinee167);
        var $x_38 = b$6.g.queue;
        var $x_37 = b$6.f;
        var s$proxy13 = b$6.d;
        $x_38.writeBuffer($x_37, 0.0, s$proxy13.dv.buffer);
        while (((Bindable_this$11.c.length | 0) <= idx$6)) {
          Bindable_this$11.c.push(null);
        }
        Bindable_this$11.c[idx$6] = b$6;
      }
      var x$proxy4 = (((1 - $m_Lsketches_rooms_columns_Columns$package$().Z) | 0) * $m_Lsketches_rooms_columns_Columns$package$().I);
      var m$3 = new $c_Ltrivalibs_graphics_math_cpu_Mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, x$proxy4, colY, z, 1.0);
      var InstanceList_this$3 = columnShape.P;
      var e1$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$3);
      var e2$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().X(m$3));
      var i$6 = InstanceList_this$3.a1();
      var Bindable_this$16 = InstanceList_this$3.G[i$6];
      var \u03b4scrutinee178 = e1$proxy4.v;
      var idx$7 = (Bindable_this$16.z.t.model | 0);
      if (((idx$7 < (Bindable_this$16.c.length | 0)) && (Bindable_this$16.c[idx$7] !== null))) {
        var BufferBinding_this$25 = Bindable_this$16.c[idx$7];
        BufferBinding_this$25.h.i(BufferBinding_this$25.d, \u03b4scrutinee178);
        var $x_40 = BufferBinding_this$25.g.queue;
        var $x_39 = BufferBinding_this$25.f;
        var s$proxy14 = BufferBinding_this$25.d;
        $x_40.writeBuffer($x_39, 0.0, s$proxy14.dv.buffer);
      } else {
        var uv$7 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
        var device$proxy7 = Bindable_this$16.y.e;
        var buffer$7 = new ArrayBuffer(64);
        var arr$proxy12 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$7), 1);
        var b$7 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy12.dv, 0), device$proxy7, uv$7);
        b$7.h.i(b$7.d, \u03b4scrutinee178);
        var $x_42 = b$7.g.queue;
        var $x_41 = b$7.f;
        var s$proxy15 = b$7.d;
        $x_42.writeBuffer($x_41, 0.0, s$proxy15.dv.buffer);
        while (((Bindable_this$16.c.length | 0) <= idx$7)) {
          Bindable_this$16.c.push(null);
        }
        Bindable_this$16.c[idx$7] = b$7;
      }
      var \u03b4scrutinee189 = e2$proxy4.v;
      var idx$8 = (Bindable_this$16.z.t.normalMat | 0);
      if (((idx$8 < (Bindable_this$16.c.length | 0)) && (Bindable_this$16.c[idx$8] !== null))) {
        var BufferBinding_this$29 = Bindable_this$16.c[idx$8];
        BufferBinding_this$29.h.i(BufferBinding_this$29.d, \u03b4scrutinee189);
        var $x_44 = BufferBinding_this$29.g.queue;
        var $x_43 = BufferBinding_this$29.f;
        var s$proxy16 = BufferBinding_this$29.d;
        $x_44.writeBuffer($x_43, 0.0, s$proxy16.dv.buffer);
      } else {
        var uv$8 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
        var device$proxy8 = Bindable_this$16.y.e;
        var buffer$8 = new ArrayBuffer(48);
        var arr$proxy13 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$8), 1);
        var b$8 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy13.dv, 0), device$proxy8, uv$8);
        b$8.h.i(b$8.d, \u03b4scrutinee189);
        var $x_46 = b$8.g.queue;
        var $x_45 = b$8.f;
        var s$proxy17 = b$8.d;
        $x_46.writeBuffer($x_45, 0.0, s$proxy17.dv.buffer);
        while (((Bindable_this$16.c.length | 0) <= idx$8)) {
          Bindable_this$16.c.push(null);
        }
        Bindable_this$16.c[idx$8] = b$8;
      }
      var x$proxy5 = ((($m_Lsketches_rooms_columns_Columns$package$().Z - 1) | 0) * $m_Lsketches_rooms_columns_Columns$package$().I);
      var m$4 = new $c_Ltrivalibs_graphics_math_cpu_Mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, x$proxy5, colY, z, 1.0);
      var InstanceList_this$4 = columnShape.P;
      var e1$proxy5 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$4);
      var e2$proxy5 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().X(m$4));
      var i$7 = InstanceList_this$4.a1();
      var Bindable_this$21 = InstanceList_this$4.G[i$7];
      var \u03b4scrutinee200 = e1$proxy5.v;
      var idx$9 = (Bindable_this$21.z.t.model | 0);
      if (((idx$9 < (Bindable_this$21.c.length | 0)) && (Bindable_this$21.c[idx$9] !== null))) {
        var BufferBinding_this$33 = Bindable_this$21.c[idx$9];
        BufferBinding_this$33.h.i(BufferBinding_this$33.d, \u03b4scrutinee200);
        var $x_48 = BufferBinding_this$33.g.queue;
        var $x_47 = BufferBinding_this$33.f;
        var s$proxy18 = BufferBinding_this$33.d;
        $x_48.writeBuffer($x_47, 0.0, s$proxy18.dv.buffer);
      } else {
        var uv$9 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
        var device$proxy9 = Bindable_this$21.y.e;
        var buffer$9 = new ArrayBuffer(64);
        var arr$proxy14 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$9), 1);
        var b$9 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy14.dv, 0), device$proxy9, uv$9);
        b$9.h.i(b$9.d, \u03b4scrutinee200);
        var $x_50 = b$9.g.queue;
        var $x_49 = b$9.f;
        var s$proxy19 = b$9.d;
        $x_50.writeBuffer($x_49, 0.0, s$proxy19.dv.buffer);
        while (((Bindable_this$21.c.length | 0) <= idx$9)) {
          Bindable_this$21.c.push(null);
        }
        Bindable_this$21.c[idx$9] = b$9;
      }
      var \u03b4scrutinee211 = e2$proxy5.v;
      var idx$10 = (Bindable_this$21.z.t.normalMat | 0);
      if (((idx$10 < (Bindable_this$21.c.length | 0)) && (Bindable_this$21.c[idx$10] !== null))) {
        var BufferBinding_this$37 = Bindable_this$21.c[idx$10];
        BufferBinding_this$37.h.i(BufferBinding_this$37.d, \u03b4scrutinee211);
        var $x_52 = BufferBinding_this$37.g.queue;
        var $x_51 = BufferBinding_this$37.f;
        var s$proxy20 = BufferBinding_this$37.d;
        $x_52.writeBuffer($x_51, 0.0, s$proxy20.dv.buffer);
      } else {
        var uv$10 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
        var device$proxy10 = Bindable_this$21.y.e;
        var buffer$10 = new ArrayBuffer(48);
        var arr$proxy15 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$10), 1);
        var b$10 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy15.dv, 0), device$proxy10, uv$10);
        b$10.h.i(b$10.d, \u03b4scrutinee211);
        var $x_54 = b$10.g.queue;
        var $x_53 = b$10.f;
        var s$proxy21 = b$10.d;
        $x_54.writeBuffer($x_53, 0.0, s$proxy21.dv.buffer);
        while (((Bindable_this$21.c.length | 0) <= idx$10)) {
          Bindable_this$21.c.push(null);
        }
        Bindable_this$21.c[idx$10] = b$10;
      }
      iz = ((1 + iz) | 0);
    }
    var ix = ((-$m_Lsketches_rooms_columns_Columns$package$().Z) | 0);
    while ((ix <= $m_Lsketches_rooms_columns_Columns$package$().Z)) {
      var x$3 = (ix * $m_Lsketches_rooms_columns_Columns$package$().I);
      var z$proxy1 = (((-$m_Lsketches_rooms_columns_Columns$package$().a0) | 0) * $m_Lsketches_rooms_columns_Columns$package$().I);
      var m$5 = new $c_Ltrivalibs_graphics_math_cpu_Mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, x$3, colY, z$proxy1, 1.0);
      var InstanceList_this$5 = columnShape.P;
      var e1$proxy6 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$5);
      var e2$proxy6 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().X(m$5));
      var i$8 = InstanceList_this$5.a1();
      var Bindable_this$26 = InstanceList_this$5.G[i$8];
      var \u03b4scrutinee222 = e1$proxy6.v;
      var idx$11 = (Bindable_this$26.z.t.model | 0);
      if (((idx$11 < (Bindable_this$26.c.length | 0)) && (Bindable_this$26.c[idx$11] !== null))) {
        var BufferBinding_this$41 = Bindable_this$26.c[idx$11];
        BufferBinding_this$41.h.i(BufferBinding_this$41.d, \u03b4scrutinee222);
        var $x_56 = BufferBinding_this$41.g.queue;
        var $x_55 = BufferBinding_this$41.f;
        var s$proxy22 = BufferBinding_this$41.d;
        $x_56.writeBuffer($x_55, 0.0, s$proxy22.dv.buffer);
      } else {
        var uv$11 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
        var device$proxy11 = Bindable_this$26.y.e;
        var buffer$11 = new ArrayBuffer(64);
        var arr$proxy16 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$11), 1);
        var b$11 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy16.dv, 0), device$proxy11, uv$11);
        b$11.h.i(b$11.d, \u03b4scrutinee222);
        var $x_58 = b$11.g.queue;
        var $x_57 = b$11.f;
        var s$proxy23 = b$11.d;
        $x_58.writeBuffer($x_57, 0.0, s$proxy23.dv.buffer);
        while (((Bindable_this$26.c.length | 0) <= idx$11)) {
          Bindable_this$26.c.push(null);
        }
        Bindable_this$26.c[idx$11] = b$11;
      }
      var \u03b4scrutinee233 = e2$proxy6.v;
      var idx$12 = (Bindable_this$26.z.t.normalMat | 0);
      if (((idx$12 < (Bindable_this$26.c.length | 0)) && (Bindable_this$26.c[idx$12] !== null))) {
        var BufferBinding_this$45 = Bindable_this$26.c[idx$12];
        BufferBinding_this$45.h.i(BufferBinding_this$45.d, \u03b4scrutinee233);
        var $x_60 = BufferBinding_this$45.g.queue;
        var $x_59 = BufferBinding_this$45.f;
        var s$proxy24 = BufferBinding_this$45.d;
        $x_60.writeBuffer($x_59, 0.0, s$proxy24.dv.buffer);
      } else {
        var uv$12 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
        var device$proxy12 = Bindable_this$26.y.e;
        var buffer$12 = new ArrayBuffer(48);
        var arr$proxy17 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$12), 1);
        var b$12 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy17.dv, 0), device$proxy12, uv$12);
        b$12.h.i(b$12.d, \u03b4scrutinee233);
        var $x_62 = b$12.g.queue;
        var $x_61 = b$12.f;
        var s$proxy25 = b$12.d;
        $x_62.writeBuffer($x_61, 0.0, s$proxy25.dv.buffer);
        while (((Bindable_this$26.c.length | 0) <= idx$12)) {
          Bindable_this$26.c.push(null);
        }
        Bindable_this$26.c[idx$12] = b$12;
      }
      var z$proxy2 = ($m_Lsketches_rooms_columns_Columns$package$().a0 * $m_Lsketches_rooms_columns_Columns$package$().I);
      var m$6 = new $c_Ltrivalibs_graphics_math_cpu_Mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, x$3, colY, z$proxy2, 1.0);
      var InstanceList_this$6 = columnShape.P;
      var e1$proxy7 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$6);
      var e2$proxy7 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().X(m$6));
      var i$9 = InstanceList_this$6.a1();
      var Bindable_this$31 = InstanceList_this$6.G[i$9];
      var \u03b4scrutinee244 = e1$proxy7.v;
      var idx$13 = (Bindable_this$31.z.t.model | 0);
      if (((idx$13 < (Bindable_this$31.c.length | 0)) && (Bindable_this$31.c[idx$13] !== null))) {
        var BufferBinding_this$49 = Bindable_this$31.c[idx$13];
        BufferBinding_this$49.h.i(BufferBinding_this$49.d, \u03b4scrutinee244);
        var $x_64 = BufferBinding_this$49.g.queue;
        var $x_63 = BufferBinding_this$49.f;
        var s$proxy26 = BufferBinding_this$49.d;
        $x_64.writeBuffer($x_63, 0.0, s$proxy26.dv.buffer);
      } else {
        var uv$13 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
        var device$proxy13 = Bindable_this$31.y.e;
        var buffer$13 = new ArrayBuffer(64);
        var arr$proxy18 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$13), 1);
        var b$13 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy18.dv, 0), device$proxy13, uv$13);
        b$13.h.i(b$13.d, \u03b4scrutinee244);
        var $x_66 = b$13.g.queue;
        var $x_65 = b$13.f;
        var s$proxy27 = b$13.d;
        $x_66.writeBuffer($x_65, 0.0, s$proxy27.dv.buffer);
        while (((Bindable_this$31.c.length | 0) <= idx$13)) {
          Bindable_this$31.c.push(null);
        }
        Bindable_this$31.c[idx$13] = b$13;
      }
      var \u03b4scrutinee255 = e2$proxy7.v;
      var idx$14 = (Bindable_this$31.z.t.normalMat | 0);
      if (((idx$14 < (Bindable_this$31.c.length | 0)) && (Bindable_this$31.c[idx$14] !== null))) {
        var BufferBinding_this$53 = Bindable_this$31.c[idx$14];
        BufferBinding_this$53.h.i(BufferBinding_this$53.d, \u03b4scrutinee255);
        var $x_68 = BufferBinding_this$53.g.queue;
        var $x_67 = BufferBinding_this$53.f;
        var s$proxy28 = BufferBinding_this$53.d;
        $x_68.writeBuffer($x_67, 0.0, s$proxy28.dv.buffer);
      } else {
        var uv$14 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
        var device$proxy14 = Bindable_this$31.y.e;
        var buffer$14 = new ArrayBuffer(48);
        var arr$proxy19 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$14), 1);
        var b$14 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy19.dv, 0), device$proxy14, uv$14);
        b$14.h.i(b$14.d, \u03b4scrutinee255);
        var $x_70 = b$14.g.queue;
        var $x_69 = b$14.f;
        var s$proxy29 = b$14.d;
        $x_70.writeBuffer($x_69, 0.0, s$proxy29.dv.buffer);
        while (((Bindable_this$31.c.length | 0) <= idx$14)) {
          Bindable_this$31.c.push(null);
        }
        Bindable_this$31.c[idx$14] = b$14;
      }
      var z$proxy3 = (((1 - $m_Lsketches_rooms_columns_Columns$package$().a0) | 0) * $m_Lsketches_rooms_columns_Columns$package$().I);
      var m$7 = new $c_Ltrivalibs_graphics_math_cpu_Mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, x$3, colY, z$proxy3, 1.0);
      var InstanceList_this$7 = columnShape.P;
      var e1$proxy8 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$7);
      var e2$proxy8 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().X(m$7));
      var i$10 = InstanceList_this$7.a1();
      var Bindable_this$36 = InstanceList_this$7.G[i$10];
      var \u03b4scrutinee266 = e1$proxy8.v;
      var idx$15 = (Bindable_this$36.z.t.model | 0);
      if (((idx$15 < (Bindable_this$36.c.length | 0)) && (Bindable_this$36.c[idx$15] !== null))) {
        var BufferBinding_this$57 = Bindable_this$36.c[idx$15];
        BufferBinding_this$57.h.i(BufferBinding_this$57.d, \u03b4scrutinee266);
        var $x_72 = BufferBinding_this$57.g.queue;
        var $x_71 = BufferBinding_this$57.f;
        var s$proxy30 = BufferBinding_this$57.d;
        $x_72.writeBuffer($x_71, 0.0, s$proxy30.dv.buffer);
      } else {
        var uv$15 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
        var device$proxy15 = Bindable_this$36.y.e;
        var buffer$15 = new ArrayBuffer(64);
        var arr$proxy20 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$15), 1);
        var b$15 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy20.dv, 0), device$proxy15, uv$15);
        b$15.h.i(b$15.d, \u03b4scrutinee266);
        var $x_74 = b$15.g.queue;
        var $x_73 = b$15.f;
        var s$proxy31 = b$15.d;
        $x_74.writeBuffer($x_73, 0.0, s$proxy31.dv.buffer);
        while (((Bindable_this$36.c.length | 0) <= idx$15)) {
          Bindable_this$36.c.push(null);
        }
        Bindable_this$36.c[idx$15] = b$15;
      }
      var \u03b4scrutinee277 = e2$proxy8.v;
      var idx$16 = (Bindable_this$36.z.t.normalMat | 0);
      if (((idx$16 < (Bindable_this$36.c.length | 0)) && (Bindable_this$36.c[idx$16] !== null))) {
        var BufferBinding_this$61 = Bindable_this$36.c[idx$16];
        BufferBinding_this$61.h.i(BufferBinding_this$61.d, \u03b4scrutinee277);
        var $x_76 = BufferBinding_this$61.g.queue;
        var $x_75 = BufferBinding_this$61.f;
        var s$proxy32 = BufferBinding_this$61.d;
        $x_76.writeBuffer($x_75, 0.0, s$proxy32.dv.buffer);
      } else {
        var uv$16 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
        var device$proxy16 = Bindable_this$36.y.e;
        var buffer$16 = new ArrayBuffer(48);
        var arr$proxy21 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$16), 1);
        var b$16 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy21.dv, 0), device$proxy16, uv$16);
        b$16.h.i(b$16.d, \u03b4scrutinee277);
        var $x_78 = b$16.g.queue;
        var $x_77 = b$16.f;
        var s$proxy33 = b$16.d;
        $x_78.writeBuffer($x_77, 0.0, s$proxy33.dv.buffer);
        while (((Bindable_this$36.c.length | 0) <= idx$16)) {
          Bindable_this$36.c.push(null);
        }
        Bindable_this$36.c[idx$16] = b$16;
      }
      var z$proxy4 = ((($m_Lsketches_rooms_columns_Columns$package$().a0 - 1) | 0) * $m_Lsketches_rooms_columns_Columns$package$().I);
      var m$8 = new $c_Ltrivalibs_graphics_math_cpu_Mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, x$3, colY, z$proxy4, 1.0);
      var InstanceList_this$8 = columnShape.P;
      var e1$proxy9 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$8);
      var e2$proxy9 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().X(m$8));
      var i$11 = InstanceList_this$8.a1();
      var Bindable_this$41 = InstanceList_this$8.G[i$11];
      var \u03b4scrutinee288 = e1$proxy9.v;
      var idx$17 = (Bindable_this$41.z.t.model | 0);
      if (((idx$17 < (Bindable_this$41.c.length | 0)) && (Bindable_this$41.c[idx$17] !== null))) {
        var BufferBinding_this$65 = Bindable_this$41.c[idx$17];
        BufferBinding_this$65.h.i(BufferBinding_this$65.d, \u03b4scrutinee288);
        var $x_80 = BufferBinding_this$65.g.queue;
        var $x_79 = BufferBinding_this$65.f;
        var s$proxy34 = BufferBinding_this$65.d;
        $x_80.writeBuffer($x_79, 0.0, s$proxy34.dv.buffer);
      } else {
        var uv$17 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
        var device$proxy17 = Bindable_this$41.y.e;
        var buffer$17 = new ArrayBuffer(64);
        var arr$proxy22 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$17), 1);
        var b$17 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy22.dv, 0), device$proxy17, uv$17);
        b$17.h.i(b$17.d, \u03b4scrutinee288);
        var $x_82 = b$17.g.queue;
        var $x_81 = b$17.f;
        var s$proxy35 = b$17.d;
        $x_82.writeBuffer($x_81, 0.0, s$proxy35.dv.buffer);
        while (((Bindable_this$41.c.length | 0) <= idx$17)) {
          Bindable_this$41.c.push(null);
        }
        Bindable_this$41.c[idx$17] = b$17;
      }
      var \u03b4scrutinee299 = e2$proxy9.v;
      var idx$18 = (Bindable_this$41.z.t.normalMat | 0);
      if (((idx$18 < (Bindable_this$41.c.length | 0)) && (Bindable_this$41.c[idx$18] !== null))) {
        var BufferBinding_this$69 = Bindable_this$41.c[idx$18];
        BufferBinding_this$69.h.i(BufferBinding_this$69.d, \u03b4scrutinee299);
        var $x_84 = BufferBinding_this$69.g.queue;
        var $x_83 = BufferBinding_this$69.f;
        var s$proxy36 = BufferBinding_this$69.d;
        $x_84.writeBuffer($x_83, 0.0, s$proxy36.dv.buffer);
      } else {
        var uv$18 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
        var device$proxy18 = Bindable_this$41.y.e;
        var buffer$18 = new ArrayBuffer(48);
        var arr$proxy23 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$18), 1);
        var b$18 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy23.dv, 0), device$proxy18, uv$18);
        b$18.h.i(b$18.d, \u03b4scrutinee299);
        var $x_86 = b$18.g.queue;
        var $x_85 = b$18.f;
        var s$proxy37 = b$18.d;
        $x_86.writeBuffer($x_85, 0.0, s$proxy37.dv.buffer);
        while (((Bindable_this$41.c.length | 0) <= idx$18)) {
          Bindable_this$41.c.push(null);
        }
        Bindable_this$41.c[idx$18] = b$18;
      }
      ix = ((1 + ix) | 0);
    }
    var balkY = ($m_Lsketches_rooms_columns_Columns$package$().fh - (0.5 * $m_Lsketches_rooms_columns_Columns$package$().hy));
    ix = ((-$m_Lsketches_rooms_columns_Columns$package$().Z) | 0);
    while ((ix <= $m_Lsketches_rooms_columns_Columns$package$().Z)) {
      var t$proxy1 = new $c_Ltrivalibs_graphics_scene_Transform(new $c_Ltrivalibs_graphics_math_cpu_Vec3((ix * $m_Lsketches_rooms_columns_Columns$package$().I), balkY, 0.0), new $c_Ltrivalibs_graphics_math_cpu_Quat(0.0, 0.0, 0.0, 1.0), new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, (2.0 * $m_Lsketches_rooms_columns_Columns$package$().a0)));
      var m$9 = $m_Ltrivalibs_graphics_math_cpu_Mat4$().eS(t$proxy1.b0, t$proxy1.aY, t$proxy1.aZ);
      var InstanceList_this$9 = balkShape.P;
      var e1$proxy10 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$9);
      var e2$proxy10 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().X(m$9));
      var i$12 = InstanceList_this$9.a1();
      var Bindable_this$46 = InstanceList_this$9.G[i$12];
      var \u03b4scrutinee310 = e1$proxy10.v;
      var idx$19 = (Bindable_this$46.z.t.model | 0);
      if (((idx$19 < (Bindable_this$46.c.length | 0)) && (Bindable_this$46.c[idx$19] !== null))) {
        var BufferBinding_this$73 = Bindable_this$46.c[idx$19];
        BufferBinding_this$73.h.i(BufferBinding_this$73.d, \u03b4scrutinee310);
        var $x_88 = BufferBinding_this$73.g.queue;
        var $x_87 = BufferBinding_this$73.f;
        var s$proxy38 = BufferBinding_this$73.d;
        $x_88.writeBuffer($x_87, 0.0, s$proxy38.dv.buffer);
      } else {
        var uv$19 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
        var device$proxy19 = Bindable_this$46.y.e;
        var buffer$19 = new ArrayBuffer(64);
        var arr$proxy24 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$19), 1);
        var b$19 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy24.dv, 0), device$proxy19, uv$19);
        b$19.h.i(b$19.d, \u03b4scrutinee310);
        var $x_90 = b$19.g.queue;
        var $x_89 = b$19.f;
        var s$proxy39 = b$19.d;
        $x_90.writeBuffer($x_89, 0.0, s$proxy39.dv.buffer);
        while (((Bindable_this$46.c.length | 0) <= idx$19)) {
          Bindable_this$46.c.push(null);
        }
        Bindable_this$46.c[idx$19] = b$19;
      }
      var \u03b4scrutinee321 = e2$proxy10.v;
      var idx$20 = (Bindable_this$46.z.t.normalMat | 0);
      if (((idx$20 < (Bindable_this$46.c.length | 0)) && (Bindable_this$46.c[idx$20] !== null))) {
        var BufferBinding_this$77 = Bindable_this$46.c[idx$20];
        BufferBinding_this$77.h.i(BufferBinding_this$77.d, \u03b4scrutinee321);
        var $x_92 = BufferBinding_this$77.g.queue;
        var $x_91 = BufferBinding_this$77.f;
        var s$proxy40 = BufferBinding_this$77.d;
        $x_92.writeBuffer($x_91, 0.0, s$proxy40.dv.buffer);
      } else {
        var uv$20 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
        var device$proxy20 = Bindable_this$46.y.e;
        var buffer$20 = new ArrayBuffer(48);
        var arr$proxy25 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$20), 1);
        var b$20 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy25.dv, 0), device$proxy20, uv$20);
        b$20.h.i(b$20.d, \u03b4scrutinee321);
        var $x_94 = b$20.g.queue;
        var $x_93 = b$20.f;
        var s$proxy41 = b$20.d;
        $x_94.writeBuffer($x_93, 0.0, s$proxy41.dv.buffer);
        while (((Bindable_this$46.c.length | 0) <= idx$20)) {
          Bindable_this$46.c.push(null);
        }
        Bindable_this$46.c[idx$20] = b$20;
      }
      ix = ((1 + ix) | 0);
    }
    iz = ((-$m_Lsketches_rooms_columns_Columns$package$().a0) | 0);
    while ((iz <= $m_Lsketches_rooms_columns_Columns$package$().a0)) {
      var t$proxy2 = new $c_Ltrivalibs_graphics_scene_Transform(new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, balkY, (iz * $m_Lsketches_rooms_columns_Columns$package$().I)), $m_Ltrivalibs_graphics_math_cpu_Quat$().gh(1.5707963267948966), new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, (2.0 * $m_Lsketches_rooms_columns_Columns$package$().Z)));
      var m$10 = $m_Ltrivalibs_graphics_math_cpu_Mat4$().eS(t$proxy2.b0, t$proxy2.aY, t$proxy2.aZ);
      var InstanceList_this$10 = balkShape.P;
      var e1$proxy11 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$10);
      var e2$proxy11 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().X(m$10));
      var i$13 = InstanceList_this$10.a1();
      var Bindable_this$51 = InstanceList_this$10.G[i$13];
      var \u03b4scrutinee332 = e1$proxy11.v;
      var idx$21 = (Bindable_this$51.z.t.model | 0);
      if (((idx$21 < (Bindable_this$51.c.length | 0)) && (Bindable_this$51.c[idx$21] !== null))) {
        var BufferBinding_this$81 = Bindable_this$51.c[idx$21];
        BufferBinding_this$81.h.i(BufferBinding_this$81.d, \u03b4scrutinee332);
        var $x_96 = BufferBinding_this$81.g.queue;
        var $x_95 = BufferBinding_this$81.f;
        var s$proxy42 = BufferBinding_this$81.d;
        $x_96.writeBuffer($x_95, 0.0, s$proxy42.dv.buffer);
      } else {
        var uv$21 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
        var device$proxy21 = Bindable_this$51.y.e;
        var buffer$21 = new ArrayBuffer(64);
        var arr$proxy26 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$21), 1);
        var b$21 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy26.dv, 0), device$proxy21, uv$21);
        b$21.h.i(b$21.d, \u03b4scrutinee332);
        var $x_98 = b$21.g.queue;
        var $x_97 = b$21.f;
        var s$proxy43 = b$21.d;
        $x_98.writeBuffer($x_97, 0.0, s$proxy43.dv.buffer);
        while (((Bindable_this$51.c.length | 0) <= idx$21)) {
          Bindable_this$51.c.push(null);
        }
        Bindable_this$51.c[idx$21] = b$21;
      }
      var \u03b4scrutinee343 = e2$proxy11.v;
      var idx$22 = (Bindable_this$51.z.t.normalMat | 0);
      if (((idx$22 < (Bindable_this$51.c.length | 0)) && (Bindable_this$51.c[idx$22] !== null))) {
        var BufferBinding_this$85 = Bindable_this$51.c[idx$22];
        BufferBinding_this$85.h.i(BufferBinding_this$85.d, \u03b4scrutinee343);
        var $x_100 = BufferBinding_this$85.g.queue;
        var $x_99 = BufferBinding_this$85.f;
        var s$proxy44 = BufferBinding_this$85.d;
        $x_100.writeBuffer($x_99, 0.0, s$proxy44.dv.buffer);
      } else {
        var uv$22 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
        var device$proxy22 = Bindable_this$51.y.e;
        var buffer$22 = new ArrayBuffer(48);
        var arr$proxy27 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$22), 1);
        var b$22 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy27.dv, 0), device$proxy22, uv$22);
        b$22.h.i(b$22.d, \u03b4scrutinee343);
        var $x_102 = b$22.g.queue;
        var $x_101 = b$22.f;
        var s$proxy45 = b$22.d;
        $x_102.writeBuffer($x_101, 0.0, s$proxy45.dv.buffer);
        while (((Bindable_this$51.c.length | 0) <= idx$22)) {
          Bindable_this$51.c.push(null);
        }
        Bindable_this$51.c[idx$22] = b$22;
      }
      iz = ((1 + iz) | 0);
    }
    var t$proxy3 = new $c_Ltrivalibs_graphics_scene_Transform(new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, (((-$m_Lsketches_rooms_columns_Columns$package$().a0) | 0) * $m_Lsketches_rooms_columns_Columns$package$().I)), new $c_Ltrivalibs_graphics_math_cpu_Quat(0.0, 0.0, 0.0, 1.0), new $c_Ltrivalibs_graphics_math_cpu_Vec3(((2.0 * $m_Lsketches_rooms_columns_Columns$package$().Z) + 2.0), 1.0, 1.0));
    var m$11 = $m_Ltrivalibs_graphics_math_cpu_Mat4$().eS(t$proxy3.b0, t$proxy3.aY, t$proxy3.aZ);
    var InstanceList_this$11 = wallShape.P;
    var e1$proxy12 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$11);
    var e2$proxy12 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().X(m$11));
    var i$14 = InstanceList_this$11.a1();
    var Bindable_this$56 = InstanceList_this$11.G[i$14];
    var \u03b4scrutinee354 = e1$proxy12.v;
    var idx$23 = (Bindable_this$56.z.t.model | 0);
    if (((idx$23 < (Bindable_this$56.c.length | 0)) && (Bindable_this$56.c[idx$23] !== null))) {
      var BufferBinding_this$89 = Bindable_this$56.c[idx$23];
      BufferBinding_this$89.h.i(BufferBinding_this$89.d, \u03b4scrutinee354);
      var $x_104 = BufferBinding_this$89.g.queue;
      var $x_103 = BufferBinding_this$89.f;
      var s$proxy46 = BufferBinding_this$89.d;
      $x_104.writeBuffer($x_103, 0.0, s$proxy46.dv.buffer);
    } else {
      var uv$23 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
      var device$proxy23 = Bindable_this$56.y.e;
      var buffer$23 = new ArrayBuffer(64);
      var arr$proxy28 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$23), 1);
      var b$23 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy28.dv, 0), device$proxy23, uv$23);
      b$23.h.i(b$23.d, \u03b4scrutinee354);
      var $x_106 = b$23.g.queue;
      var $x_105 = b$23.f;
      var s$proxy47 = b$23.d;
      $x_106.writeBuffer($x_105, 0.0, s$proxy47.dv.buffer);
      while (((Bindable_this$56.c.length | 0) <= idx$23)) {
        Bindable_this$56.c.push(null);
      }
      Bindable_this$56.c[idx$23] = b$23;
    }
    var \u03b4scrutinee365 = e2$proxy12.v;
    var idx$24 = (Bindable_this$56.z.t.normalMat | 0);
    if (((idx$24 < (Bindable_this$56.c.length | 0)) && (Bindable_this$56.c[idx$24] !== null))) {
      var BufferBinding_this$93 = Bindable_this$56.c[idx$24];
      BufferBinding_this$93.h.i(BufferBinding_this$93.d, \u03b4scrutinee365);
      var $x_108 = BufferBinding_this$93.g.queue;
      var $x_107 = BufferBinding_this$93.f;
      var s$proxy48 = BufferBinding_this$93.d;
      $x_108.writeBuffer($x_107, 0.0, s$proxy48.dv.buffer);
    } else {
      var uv$24 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
      var device$proxy24 = Bindable_this$56.y.e;
      var buffer$24 = new ArrayBuffer(48);
      var arr$proxy29 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$24), 1);
      var b$24 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy29.dv, 0), device$proxy24, uv$24);
      b$24.h.i(b$24.d, \u03b4scrutinee365);
      var $x_110 = b$24.g.queue;
      var $x_109 = b$24.f;
      var s$proxy49 = b$24.d;
      $x_110.writeBuffer($x_109, 0.0, s$proxy49.dv.buffer);
      while (((Bindable_this$56.c.length | 0) <= idx$24)) {
        Bindable_this$56.c.push(null);
      }
      Bindable_this$56.c[idx$24] = b$24;
    }
    var t$proxy4 = new $c_Ltrivalibs_graphics_scene_Transform(new $c_Ltrivalibs_graphics_math_cpu_Vec3((((-$m_Lsketches_rooms_columns_Columns$package$().Z) | 0) * $m_Lsketches_rooms_columns_Columns$package$().I), 0.0, 0.0), $m_Ltrivalibs_graphics_math_cpu_Quat$().gh(1.5707963267948966), new $c_Ltrivalibs_graphics_math_cpu_Vec3(((2.0 * $m_Lsketches_rooms_columns_Columns$package$().a0) + 2.0), 1.0, 1.0));
    var m$12 = $m_Ltrivalibs_graphics_math_cpu_Mat4$().eS(t$proxy4.b0, t$proxy4.aY, t$proxy4.aZ);
    var InstanceList_this$12 = wallShape.P;
    var e1$proxy13 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$12);
    var e2$proxy13 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().X(m$12));
    var i$15 = InstanceList_this$12.a1();
    var Bindable_this$61 = InstanceList_this$12.G[i$15];
    var \u03b4scrutinee376 = e1$proxy13.v;
    var idx$25 = (Bindable_this$61.z.t.model | 0);
    if (((idx$25 < (Bindable_this$61.c.length | 0)) && (Bindable_this$61.c[idx$25] !== null))) {
      var BufferBinding_this$97 = Bindable_this$61.c[idx$25];
      BufferBinding_this$97.h.i(BufferBinding_this$97.d, \u03b4scrutinee376);
      var $x_112 = BufferBinding_this$97.g.queue;
      var $x_111 = BufferBinding_this$97.f;
      var s$proxy50 = BufferBinding_this$97.d;
      $x_112.writeBuffer($x_111, 0.0, s$proxy50.dv.buffer);
    } else {
      var uv$25 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
      var device$proxy25 = Bindable_this$61.y.e;
      var buffer$25 = new ArrayBuffer(64);
      var arr$proxy30 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$25), 1);
      var b$25 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy30.dv, 0), device$proxy25, uv$25);
      b$25.h.i(b$25.d, \u03b4scrutinee376);
      var $x_114 = b$25.g.queue;
      var $x_113 = b$25.f;
      var s$proxy51 = b$25.d;
      $x_114.writeBuffer($x_113, 0.0, s$proxy51.dv.buffer);
      while (((Bindable_this$61.c.length | 0) <= idx$25)) {
        Bindable_this$61.c.push(null);
      }
      Bindable_this$61.c[idx$25] = b$25;
    }
    var \u03b4scrutinee387 = e2$proxy13.v;
    var idx$26 = (Bindable_this$61.z.t.normalMat | 0);
    if (((idx$26 < (Bindable_this$61.c.length | 0)) && (Bindable_this$61.c[idx$26] !== null))) {
      var BufferBinding_this$101 = Bindable_this$61.c[idx$26];
      BufferBinding_this$101.h.i(BufferBinding_this$101.d, \u03b4scrutinee387);
      var $x_116 = BufferBinding_this$101.g.queue;
      var $x_115 = BufferBinding_this$101.f;
      var s$proxy52 = BufferBinding_this$101.d;
      $x_116.writeBuffer($x_115, 0.0, s$proxy52.dv.buffer);
    } else {
      var uv$26 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
      var device$proxy26 = Bindable_this$61.y.e;
      var buffer$26 = new ArrayBuffer(48);
      var arr$proxy31 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$26), 1);
      var b$26 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy31.dv, 0), device$proxy26, uv$26);
      b$26.h.i(b$26.d, \u03b4scrutinee387);
      var $x_118 = b$26.g.queue;
      var $x_117 = b$26.f;
      var s$proxy53 = b$26.d;
      $x_118.writeBuffer($x_117, 0.0, s$proxy53.dv.buffer);
      while (((Bindable_this$61.c.length | 0) <= idx$26)) {
        Bindable_this$61.c.push(null);
      }
      Bindable_this$61.c[idx$26] = b$26;
    }
    var t$proxy5 = new $c_Ltrivalibs_graphics_scene_Transform(new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, ($m_Lsketches_rooms_columns_Columns$package$().a0 * $m_Lsketches_rooms_columns_Columns$package$().I)), $m_Ltrivalibs_graphics_math_cpu_Quat$().gh(3.141592653589793), new $c_Ltrivalibs_graphics_math_cpu_Vec3(((2.0 * $m_Lsketches_rooms_columns_Columns$package$().Z) + 2.0), 1.0, 1.0));
    var m$13 = $m_Ltrivalibs_graphics_math_cpu_Mat4$().eS(t$proxy5.b0, t$proxy5.aY, t$proxy5.aZ);
    var InstanceList_this$13 = wallShape.P;
    var e1$proxy14 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$13);
    var e2$proxy14 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().X(m$13));
    var i$16 = InstanceList_this$13.a1();
    var Bindable_this$66 = InstanceList_this$13.G[i$16];
    var \u03b4scrutinee398 = e1$proxy14.v;
    var idx$27 = (Bindable_this$66.z.t.model | 0);
    if (((idx$27 < (Bindable_this$66.c.length | 0)) && (Bindable_this$66.c[idx$27] !== null))) {
      var BufferBinding_this$105 = Bindable_this$66.c[idx$27];
      BufferBinding_this$105.h.i(BufferBinding_this$105.d, \u03b4scrutinee398);
      var $x_120 = BufferBinding_this$105.g.queue;
      var $x_119 = BufferBinding_this$105.f;
      var s$proxy54 = BufferBinding_this$105.d;
      $x_120.writeBuffer($x_119, 0.0, s$proxy54.dv.buffer);
    } else {
      var uv$27 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
      var device$proxy27 = Bindable_this$66.y.e;
      var buffer$27 = new ArrayBuffer(64);
      var arr$proxy32 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$27), 1);
      var b$27 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy32.dv, 0), device$proxy27, uv$27);
      b$27.h.i(b$27.d, \u03b4scrutinee398);
      var $x_122 = b$27.g.queue;
      var $x_121 = b$27.f;
      var s$proxy55 = b$27.d;
      $x_122.writeBuffer($x_121, 0.0, s$proxy55.dv.buffer);
      while (((Bindable_this$66.c.length | 0) <= idx$27)) {
        Bindable_this$66.c.push(null);
      }
      Bindable_this$66.c[idx$27] = b$27;
    }
    var \u03b4scrutinee409 = e2$proxy14.v;
    var idx$28 = (Bindable_this$66.z.t.normalMat | 0);
    if (((idx$28 < (Bindable_this$66.c.length | 0)) && (Bindable_this$66.c[idx$28] !== null))) {
      var BufferBinding_this$109 = Bindable_this$66.c[idx$28];
      BufferBinding_this$109.h.i(BufferBinding_this$109.d, \u03b4scrutinee409);
      var $x_124 = BufferBinding_this$109.g.queue;
      var $x_123 = BufferBinding_this$109.f;
      var s$proxy56 = BufferBinding_this$109.d;
      $x_124.writeBuffer($x_123, 0.0, s$proxy56.dv.buffer);
    } else {
      var uv$28 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
      var device$proxy28 = Bindable_this$66.y.e;
      var buffer$28 = new ArrayBuffer(48);
      var arr$proxy33 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$28), 1);
      var b$28 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy33.dv, 0), device$proxy28, uv$28);
      b$28.h.i(b$28.d, \u03b4scrutinee409);
      var $x_126 = b$28.g.queue;
      var $x_125 = b$28.f;
      var s$proxy57 = b$28.d;
      $x_126.writeBuffer($x_125, 0.0, s$proxy57.dv.buffer);
      while (((Bindable_this$66.c.length | 0) <= idx$28)) {
        Bindable_this$66.c.push(null);
      }
      Bindable_this$66.c[idx$28] = b$28;
    }
    var t$proxy6 = new $c_Ltrivalibs_graphics_scene_Transform(new $c_Ltrivalibs_graphics_math_cpu_Vec3(($m_Lsketches_rooms_columns_Columns$package$().Z * $m_Lsketches_rooms_columns_Columns$package$().I), 0.0, 0.0), $m_Ltrivalibs_graphics_math_cpu_Quat$().gh(4.71238898038469), new $c_Ltrivalibs_graphics_math_cpu_Vec3(((2.0 * $m_Lsketches_rooms_columns_Columns$package$().a0) + 2.0), 1.0, 1.0));
    var m$14 = $m_Ltrivalibs_graphics_math_cpu_Mat4$().eS(t$proxy6.b0, t$proxy6.aY, t$proxy6.aZ);
    var InstanceList_this$14 = wallShape.P;
    var e1$proxy15 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$14);
    var e2$proxy15 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().X(m$14));
    var i$17 = InstanceList_this$14.a1();
    var Bindable_this$71 = InstanceList_this$14.G[i$17];
    var \u03b4scrutinee420 = e1$proxy15.v;
    var idx$29 = (Bindable_this$71.z.t.model | 0);
    if (((idx$29 < (Bindable_this$71.c.length | 0)) && (Bindable_this$71.c[idx$29] !== null))) {
      var BufferBinding_this$113 = Bindable_this$71.c[idx$29];
      BufferBinding_this$113.h.i(BufferBinding_this$113.d, \u03b4scrutinee420);
      var $x_128 = BufferBinding_this$113.g.queue;
      var $x_127 = BufferBinding_this$113.f;
      var s$proxy58 = BufferBinding_this$113.d;
      $x_128.writeBuffer($x_127, 0.0, s$proxy58.dv.buffer);
    } else {
      var uv$29 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
      var device$proxy29 = Bindable_this$71.y.e;
      var buffer$29 = new ArrayBuffer(64);
      var arr$proxy34 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$29), 1);
      var b$29 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy34.dv, 0), device$proxy29, uv$29);
      b$29.h.i(b$29.d, \u03b4scrutinee420);
      var $x_130 = b$29.g.queue;
      var $x_129 = b$29.f;
      var s$proxy59 = b$29.d;
      $x_130.writeBuffer($x_129, 0.0, s$proxy59.dv.buffer);
      while (((Bindable_this$71.c.length | 0) <= idx$29)) {
        Bindable_this$71.c.push(null);
      }
      Bindable_this$71.c[idx$29] = b$29;
    }
    var \u03b4scrutinee431 = e2$proxy15.v;
    var idx$30 = (Bindable_this$71.z.t.normalMat | 0);
    if (((idx$30 < (Bindable_this$71.c.length | 0)) && (Bindable_this$71.c[idx$30] !== null))) {
      var BufferBinding_this$117 = Bindable_this$71.c[idx$30];
      BufferBinding_this$117.h.i(BufferBinding_this$117.d, \u03b4scrutinee431);
      var $x_132 = BufferBinding_this$117.g.queue;
      var $x_131 = BufferBinding_this$117.f;
      var s$proxy60 = BufferBinding_this$117.d;
      $x_132.writeBuffer($x_131, 0.0, s$proxy60.dv.buffer);
    } else {
      var uv$30 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
      var device$proxy30 = Bindable_this$71.y.e;
      var buffer$30 = new ArrayBuffer(48);
      var arr$proxy35 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$30), 1);
      var b$30 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy35.dv, 0), device$proxy30, uv$30);
      b$30.h.i(b$30.d, \u03b4scrutinee431);
      var $x_134 = b$30.g.queue;
      var $x_133 = b$30.f;
      var s$proxy61 = b$30.d;
      $x_134.writeBuffer($x_133, 0.0, s$proxy61.dv.buffer);
      while (((Bindable_this$71.c.length | 0) <= idx$30)) {
        Bindable_this$71.c.push(null);
      }
      Bindable_this$71.c[idx$30] = b$30;
    }
    var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
    var uv$proxy1 = ul$proxy1.jl;
    var buffer$31 = new ArrayBuffer(64);
    var arr$proxy36 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$31), 1);
    var viewProj = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy36.dv, 0), p$3.e, uv$proxy1);
    var clearColor$1 = $m_Ltrivalibs_graphics_math_cpu_Vec4$().lX().F(new $c_T4(0.9, 0.95, 0.99, 1.0));
    var shapes$1 = [Bindable_this, columnShape, balkShape, wallShape];
    var Panel_this = p$3.mD((void 0), (void 0), clearColor$1, true, true, (void 0), (void 0), (void 0), (void 0), (void 0), shapes$1, (void 0), (void 0));
    var e1$proxy16 = new $c_Ltrivalibs_graphics_painter_BindPair("viewProj", viewProj);
    var \u03b4scrutinee439 = e1$proxy16.v;
    var dict$proxy1 = Panel_this.h7;
    dict$proxy1.viewProj = \u03b4scrutinee439;
    var cam = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().le(0.6, 1.0, 0.1, 200.0, 0.0, 0.0, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 3.0, 15.0));
    $m_Ltrivalibs_dev_devPreserve$().lk(cam, "camera");
    var input = $m_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$().m8(p$3.fn, true, 400.0, 5.0, true, (void 0), 90.0, 50.0);
    var controller = new $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController(cam, input, 3.0, 4.0);
    p$3.mB(new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((v1$2, v2$2) => {
      var cw = (+v1$2);
      var ch = (+v2$2);
      var aspect$2 = (cw / ch);
      var fov$1 = cam.eN;
      var near$1 = cam.fu;
      var far$1 = cam.ft;
      var rotH$2 = cam.a5;
      var rotV$2 = cam.aJ;
      var pos$2$2 = cam.T;
      cam.iS(fov$1, aspect$2, near$1, far$1, rotH$2, rotV$2, pos$2$2);
    })));
    $m_Ltrivalibs_utils_animation_animate$package$().ld(((p$3$1) => ((arg1$2) => {
      var tpf = (+arg1$2);
      input.eV(tpf);
      controller.eV(tpf);
      var value$proxy19 = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().kE(), cam.i8, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), cam.n8());
      viewProj.h.i(viewProj.d, value$proxy19);
      var $x_136 = viewProj.g.queue;
      var $x_135 = viewProj.f;
      var s$proxy62 = viewProj.d;
      $x_136.writeBuffer($x_135, 0.0, s$proxy62.dv.buffer);
      $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$3$1, Panel_this);
      p$3$1.mU(Panel_this);
    }))(p$3));
  })));
});
var $d_Lsketches_rooms_columns_Columns$package$ = new $TypeData().i($c_Lsketches_rooms_columns_Columns$package$, "sketches.rooms.columns.Columns$package$", ({
  d2: 1
}));
var $n_Lsketches_rooms_columns_Columns$package$;
function $m_Lsketches_rooms_columns_Columns$package$() {
  if ((!$n_Lsketches_rooms_columns_Columns$package$)) {
    $n_Lsketches_rooms_columns_Columns$package$ = new $c_Lsketches_rooms_columns_Columns$package$();
  }
  return $n_Lsketches_rooms_columns_Columns$package$;
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
  d3: 1
}));
/** @constructor */
function $c_Ltrivalibs_dev_dev$package$() {
  this.fi = null;
  this.hz = false;
  $n_Ltrivalibs_dev_dev$package$ = this;
  this.fi = [];
  this.hz = false;
}
$p = $c_Ltrivalibs_dev_dev$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_dev_dev$package$;
/** @constructor */
function $h_Ltrivalibs_dev_dev$package$() {
}
$h_Ltrivalibs_dev_dev$package$.prototype = $p;
$p.lz = (function() {
  return (import.meta.hot !== (void 0));
});
$p.mw = (function() {
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
$p.mW = (function(label) {
  return ((("trivalibs:dev:" + $m_Ltrivalibs_dev_dev$package$().mw()) + ":") + label);
});
$p.iT = (function() {
  return window.sessionStorage;
});
$p.mJ = (function(key) {
  var raw = $m_Ltrivalibs_dev_dev$package$().iT().getItem(key);
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
$p.nb = (function(key, json) {
  $m_Ltrivalibs_dev_dev$package$().iT().setItem(key, JSON.stringify(json));
});
$p.mN = (function(key) {
  $m_Ltrivalibs_dev_dev$package$().iT().removeItem(key);
});
$p.lG = (function() {
  if ((!$m_Ltrivalibs_dev_dev$package$().hz)) {
    $m_Ltrivalibs_dev_dev$package$().hz = true;
    window.addEventListener("pagehide", ((_$1$2) => {
      var i = 0;
      while ((i < ($m_Ltrivalibs_dev_dev$package$().fi.length | 0))) {
        $m_Ltrivalibs_dev_dev$package$().fi[i].gf();
        i = ((1 + i) | 0);
      }
    }));
  }
});
$p.mK = (function(flush) {
  $m_Ltrivalibs_dev_dev$package$().lG();
  $m_Ltrivalibs_dev_dev$package$().fi.push(flush);
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    var idx = $m_sjs_js_ArrayOps$().kF($m_Ltrivalibs_dev_dev$package$().fi, flush, 0);
    if ((idx >= 0)) {
      $m_Ltrivalibs_dev_dev$package$().fi.splice(idx, 1);
    }
  }));
});
var $d_Ltrivalibs_dev_dev$package$ = new $TypeData().i($c_Ltrivalibs_dev_dev$package$, "trivalibs.dev.dev$package$", ({
  d4: 1
}));
var $n_Ltrivalibs_dev_dev$package$;
function $m_Ltrivalibs_dev_dev$package$() {
  if ((!$n_Ltrivalibs_dev_dev$package$)) {
    $n_Ltrivalibs_dev_dev$package$ = new $c_Ltrivalibs_dev_dev$package$();
  }
  return $n_Ltrivalibs_dev_dev$package$;
}
function $p_Ltrivalibs_dev_devPreserve$__encodeCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any($thiz, cam) {
  return [cam.T.r, cam.T.m, cam.T.o, cam.a5, cam.aJ];
}
function $p_Ltrivalibs_dev_devPreserve$__applyCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any__V($thiz, cam, json) {
  if ((!(!Array.isArray(json)))) {
    if (((json.length | 0) >= 5)) {
      var pos$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((+json[0]), (+json[1]), (+json[2]));
      var rotH$1 = (+json[3]);
      var rotV$1 = (+json[4]);
      var fov$1 = cam.eN;
      var aspect$1 = cam.fs;
      var near$1 = cam.fu;
      var far$1 = cam.ft;
      cam.iS(fov$1, aspect$1, near$1, far$1, rotH$1, rotV$1, pos$1);
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
$p.lk = (function(cam, label) {
  if ((!$m_Ltrivalibs_dev_dev$package$().lz())) {
    return new $c_Ltrivalibs_dev_DevHandle(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => (void 0))));
  } else {
    var sk = $m_Ltrivalibs_dev_dev$package$().mW(label);
    var initPos = cam.T;
    var initRotH = cam.a5;
    var initRotV = cam.aJ;
    var stored = $m_Ltrivalibs_dev_dev$package$().mJ(sk);
    if ((stored !== null)) {
      $p_Ltrivalibs_dev_devPreserve$__applyCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any__V(this, cam, stored);
    }
    return new $c_Ltrivalibs_dev_DevHandle(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(((unregister) => (() => {
      unregister.gf();
      $m_Ltrivalibs_dev_dev$package$().mN(sk);
      var fov$proxy1 = cam.eN;
      var aspect$proxy1 = cam.fs;
      var near$proxy1 = cam.fu;
      var far$proxy1 = cam.ft;
      cam.iS(fov$proxy1, aspect$proxy1, near$proxy1, far$proxy1, initRotH, initRotV, initPos);
    }))($m_Ltrivalibs_dev_dev$package$().mK(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
      $m_Ltrivalibs_dev_dev$package$().nb(sk, $p_Ltrivalibs_dev_devPreserve$__encodeCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any(this, cam));
    }))))));
  }
});
var $d_Ltrivalibs_dev_devPreserve$ = new $TypeData().i($c_Ltrivalibs_dev_devPreserve$, "trivalibs.dev.devPreserve$", ({
  d5: 1
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
  this.d = null;
  this.g = null;
  this.h = null;
  this.f = null;
  this.d = buffer;
  this.g = device;
  this.h = uv;
  var b = (buffer.dv.byteLength | 0);
  var value = ((b < 16) ? 16 : b);
  var $x_1 = device.createBuffer(({
    "size": value,
    "usage": 72
  }));
  this.f = $x_1;
}
$p = $c_Ltrivalibs_graphics_buffers_BufferBinding.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_BufferBinding;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_BufferBinding() {
}
$h_Ltrivalibs_graphics_buffers_BufferBinding.prototype = $p;
function $isArrayOf_Ltrivalibs_graphics_buffers_BufferBinding(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aD)));
}
var $d_Ltrivalibs_graphics_buffers_BufferBinding = new $TypeData().i($c_Ltrivalibs_graphics_buffers_BufferBinding, "trivalibs.graphics.buffers.BufferBinding", ({
  aD: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Box(center, size, frontTopLeft, frontTopRight, frontBottomLeft, frontBottomRight, backTopLeft, backTopRight, backBottomLeft, backBottomRight) {
  this.gH = null;
  this.gI = null;
  this.fM = null;
  this.fN = null;
  this.gF = null;
  this.gG = null;
  this.fK = null;
  this.fL = null;
  this.gH = frontTopLeft;
  this.gI = frontTopRight;
  this.fM = frontBottomLeft;
  this.fN = frontBottomRight;
  this.gF = backTopLeft;
  this.gG = backTopRight;
  this.fK = backBottomLeft;
  this.fL = backBottomRight;
}
$p = $c_Ltrivalibs_graphics_geometry_Box.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Box;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Box() {
}
$h_Ltrivalibs_graphics_geometry_Box.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_Box = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Box, "trivalibs.graphics.geometry.Box", ({
  da: 1
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
$p.ko = (function(center, width, height, depth) {
  var hw = (0.5 * width);
  var hh = (0.5 * height);
  var hd = (0.5 * depth);
  var cx = center.r;
  var cy = center.m;
  var cz = center.o;
  return new $c_Ltrivalibs_graphics_geometry_Box(center, new $c_Ltrivalibs_graphics_math_cpu_Vec3(width, height, depth), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy + hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy + hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy - hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy - hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy + hh), (cz - hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy + hh), (cz - hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy - hh), (cz - hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy - hh), (cz - hd)));
});
var $d_Ltrivalibs_graphics_geometry_Box$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Box$, "trivalibs.graphics.geometry.Box$", ({
  db: 1
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
  this.hA = null;
  this.gJ = null;
  this.hA = vertices;
  this.gJ = indices;
}
$p = $c_Ltrivalibs_graphics_geometry_BufferedGeometry.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_BufferedGeometry;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_BufferedGeometry() {
}
$h_Ltrivalibs_graphics_geometry_BufferedGeometry.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_BufferedGeometry = new $TypeData().i($c_Ltrivalibs_graphics_geometry_BufferedGeometry, "trivalibs.graphics.geometry.BufferedGeometry", ({
  dc: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_FaceData(normal, section) {
  this.fO = null;
  this.l4 = 0;
  this.fO = normal;
  this.l4 = section;
}
$p = $c_Ltrivalibs_graphics_geometry_FaceData.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_FaceData;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_FaceData() {
}
$h_Ltrivalibs_graphics_geometry_FaceData.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_FaceData = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FaceData, "trivalibs.graphics.geometry.FaceData", ({
  dd: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Mesh(evidence$1) {
  this.fP = null;
  this.a3 = null;
  this.fj = null;
  this.gL = null;
  this.gK = null;
  this.fP = evidence$1;
  this.a3 = [];
  this.fj = [];
  this.gL = [];
  this.gK = ({});
}
$p = $c_Ltrivalibs_graphics_geometry_Mesh.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Mesh;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Mesh() {
}
$h_Ltrivalibs_graphics_geometry_Mesh.prototype = $p;
$p.lb = (function(face, normal, section) {
  var faceIdx = (this.a3.length | 0);
  this.a3.push(face);
  this.fj.push(new $c_Ltrivalibs_graphics_geometry_FaceData(normal, section));
  var n = (face.length | 0);
  var slot = 0;
  while ((slot < n)) {
    var v = face[slot];
    var key = $m_Ltrivalibs_graphics_geometry_package$package$().mH(this.fP.aL(v));
    if ($m_sjs_js_Any$ObjectCompanionOps$().m0(Object, this.gK, key)) {
      var $x_2 = this.gL;
      var dict = this.gK;
      if ((!(!(!$m_sjs_js_WrappedDictionary$Cache$().jj.call(dict, key))))) {
        throw new $c_ju_NoSuchElementException(("key not found: " + key));
      }
      var $x_1 = $x_2[(dict[key] | 0)];
      $x_1.jp.push(new $c_Ltrivalibs_graphics_geometry_PositionFaceRef(faceIdx, slot));
    } else {
      var idx = (this.gL.length | 0);
      var dict$1 = this.gK;
      dict$1[key] = idx;
      this.gL.push(new $c_Ltrivalibs_graphics_geometry_VertexPosition(this.fP.aL(v), [new $c_Ltrivalibs_graphics_geometry_PositionFaceRef(faceIdx, slot)]));
    }
    slot = ((1 + slot) | 0);
  }
});
$p.lF = (function() {
  var hasQuads = false;
  var i = 0;
  while ((i < (this.a3.length | 0))) {
    var arr = this.a3[i];
    if ((this.fj[i].fO === null)) {
      var $x_2 = this.fj[i];
      if (((arr.length | 0) === 3)) {
        var $x_1 = $m_Ltrivalibs_graphics_geometry_polygon$package$Triangle$().iR(this.a3[i], this.fP);
      } else {
        hasQuads = true;
        var $x_1 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().iR(this.a3[i], this.fP);
      }
      $x_2.fO = $x_1;
    }
    i = ((1 + i) | 0);
  }
  return hasQuads;
});
var $d_Ltrivalibs_graphics_geometry_Mesh = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Mesh, "trivalibs.graphics.geometry.Mesh", ({
  dg: 1
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
$p.li = (function(faces, normal, section, evidence$1) {
  var m = new $c_Ltrivalibs_graphics_geometry_Mesh(evidence$1);
  $m_Ltrivalibs_graphics_geometry_mesh$package$().lc(m, faces, normal, section, evidence$1);
  return m;
});
var $d_Ltrivalibs_graphics_geometry_Mesh$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Mesh$, "trivalibs.graphics.geometry.Mesh$", ({
  dh: 1
}));
var $n_Ltrivalibs_graphics_geometry_Mesh$;
function $m_Ltrivalibs_graphics_geometry_Mesh$() {
  if ((!$n_Ltrivalibs_graphics_geometry_Mesh$)) {
    $n_Ltrivalibs_graphics_geometry_Mesh$ = new $c_Ltrivalibs_graphics_geometry_Mesh$();
  }
  return $n_Ltrivalibs_graphics_geometry_Mesh$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_PositionFaceRef(faceIndex, vertexSlot) {
  this.l5 = 0;
  this.l6 = 0;
  this.l5 = faceIndex;
  this.l6 = vertexSlot;
}
$p = $c_Ltrivalibs_graphics_geometry_PositionFaceRef.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_PositionFaceRef;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_PositionFaceRef() {
}
$h_Ltrivalibs_graphics_geometry_PositionFaceRef.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_PositionFaceRef = new $TypeData().i($c_Ltrivalibs_graphics_geometry_PositionFaceRef, "trivalibs.graphics.geometry.PositionFaceRef", ({
  dj: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexPosition(position, faces) {
  this.l7 = null;
  this.jp = null;
  this.l7 = position;
  this.jp = faces;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexPosition.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexPosition;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexPosition() {
}
$h_Ltrivalibs_graphics_geometry_VertexPosition.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_VertexPosition = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexPosition, "trivalibs.graphics.geometry.VertexPosition", ({
  dp: 1
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
$p.mt = (function(idxBuf, vertexCount) {
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
  dq: 1
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
$p.lc = (function(m, faces, normal, section, evidence$1) {
  var i = 0;
  while ((i < (faces.length | 0))) {
    m.lb(faces[i], normal, section);
    i = ((1 + i) | 0);
  }
});
var $d_Ltrivalibs_graphics_geometry_mesh$package$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_mesh$package$, "trivalibs.graphics.geometry.mesh$package$", ({
  dr: 1
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
$p.mH = (function(v) {
  return (((($doubleToInt((10000.0 * v.r)) + ",") + $doubleToInt((10000.0 * v.m))) + ",") + $doubleToInt((10000.0 * v.o)));
});
var $d_Ltrivalibs_graphics_geometry_package$package$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_package$package$, "trivalibs.graphics.geometry.package$package$", ({
  ds: 1
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
$p.aK = (function(tl, bl, br, tr) {
  return [tl, bl, br, tr];
});
$p.n0 = (function(q, evidence$1) {
  return q[0];
});
$p.lq = (function(q, evidence$1) {
  return q[1];
});
$p.ls = (function(q, evidence$1) {
  return q[2];
});
$p.n2 = (function(q, evidence$1) {
  return q[3];
});
$p.iR = (function(q, evidence$1) {
  var a = evidence$1.aL(this.n0(q, evidence$1));
  var b = evidence$1.aL(this.lq(q, evidence$1));
  var c = evidence$1.aL(this.ls(q, evidence$1));
  var d = evidence$1.aL(this.n2(q, evidence$1));
  var d1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((c.r - a.r), (c.m - a.m), (c.o - a.o));
  var d2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((d.r - b.r), (d.m - b.m), (d.o - b.o));
  return $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), d1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), d2), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
});
var $d_Ltrivalibs_graphics_geometry_polygon$package$Quad$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_polygon$package$Quad$, "trivalibs.graphics.geometry.polygon$package$Quad$", ({
  du: 1
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
$p.la = (function(tri, evidence$1) {
  return tri[0];
});
$p.lo = (function(tri, evidence$1) {
  return tri[1];
});
$p.lt = (function(tri, evidence$1) {
  return tri[2];
});
$p.iR = (function(tri, evidence$1) {
  var pa = evidence$1.aL(this.la(tri, evidence$1));
  var pb = evidence$1.aL(this.lo(tri, evidence$1));
  var pc = evidence$1.aL(this.lt(tri, evidence$1));
  var e1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((pb.r - pa.r), (pb.m - pa.m), (pb.o - pa.o));
  var e2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((pc.r - pa.r), (pc.m - pa.m), (pc.o - pa.o));
  return $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), e1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), e2), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
});
var $d_Ltrivalibs_graphics_geometry_polygon$package$Triangle$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_polygon$package$Triangle$, "trivalibs.graphics.geometry.polygon$package$Triangle$", ({
  dv: 1
}));
var $n_Ltrivalibs_graphics_geometry_polygon$package$Triangle$;
function $m_Ltrivalibs_graphics_geometry_polygon$package$Triangle$() {
  if ((!$n_Ltrivalibs_graphics_geometry_polygon$package$Triangle$)) {
    $n_Ltrivalibs_graphics_geometry_polygon$package$Triangle$ = new $c_Ltrivalibs_graphics_geometry_polygon$package$Triangle$();
  }
  return $n_Ltrivalibs_graphics_geometry_polygon$package$Triangle$;
}
function $f_Ltrivalibs_graphics_math_Mat3ImmutableOps__transpose__O__Ltrivalibs_graphics_math_Mat3Base__O($thiz, m, x$2) {
  return new $c_Ltrivalibs_graphics_math_cpu_Mat3((+x$2.at(m)), (+x$2.aw(m)), (+x$2.az(m)), (+x$2.au(m)), (+x$2.ax(m)), (+x$2.aA(m)), (+x$2.av(m)), (+x$2.ay(m)), (+x$2.aB(m)));
}
function $f_Ltrivalibs_graphics_math_Mat3ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat3Base__O($thiz, m, x$2) {
  var a00 = (+x$2.at(m));
  var a01 = (+x$2.au(m));
  var a02 = (+x$2.av(m));
  var a10 = (+x$2.aw(m));
  var a11 = (+x$2.ax(m));
  var a12 = (+x$2.ay(m));
  var a20 = (+x$2.az(m));
  var a21 = (+x$2.aA(m));
  var a22 = (+x$2.aB(m));
  var c00 = ((a11 * a22) - (a12 * a21));
  var c01 = (-((a10 * a22) - (a12 * a20)));
  var c02 = ((a10 * a21) - (a11 * a20));
  var c10 = (-((a01 * a22) - (a02 * a21)));
  var c11 = ((a00 * a22) - (a02 * a20));
  var c12 = (-((a00 * a21) - (a01 * a20)));
  var c20 = ((a01 * a12) - (a02 * a11));
  var c21 = (-((a00 * a12) - (a02 * a10)));
  var c22 = ((a00 * a11) - (a01 * a10));
  var det = (((a00 * c00) + (a10 * c10)) + (a20 * c20));
  var invDet = (1.0 / det);
  return new $c_Ltrivalibs_graphics_math_cpu_Mat3((c00 * invDet), (c10 * invDet), (c20 * invDet), (c01 * invDet), (c11 * invDet), (c21 * invDet), (c02 * invDet), (c12 * invDet), (c22 * invDet));
}
function $f_Ltrivalibs_graphics_math_Mat3MutableOps__set__O__Ltrivalibs_graphics_math_Mat3Mutable__O__Ltrivalibs_graphics_math_Mat3Base__V($thiz, m, mb, other, x$4) {
  mb.gj(m, (+x$4.at(other)));
  mb.gk(m, (+x$4.au(other)));
  mb.gl(m, (+x$4.av(other)));
  mb.gn(m, (+x$4.aw(other)));
  mb.go(m, (+x$4.ax(other)));
  mb.gp(m, (+x$4.ay(other)));
  mb.gr(m, (+x$4.az(other)));
  mb.gs(m, (+x$4.aA(other)));
  mb.gt(m, (+x$4.aB(other)));
}
function $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($thiz, fovY, aspect, near, far) {
  var x = (0.5 * fovY);
  var f = (1.0 / (+Math.tan(x)));
  var rInv = (1.0 / (near - far));
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4((f / aspect), 0.0, 0.0, 0.0, 0.0, f, 0.0, 0.0, 0.0, 0.0, (far * rInv), (-1.0), 0.0, 0.0, ((near * far) * rInv), 0.0);
}
function $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($thiz, m, x$2, other) {
  var a00 = (+x$2.at(m));
  var a01 = (+x$2.au(m));
  var a02 = (+x$2.av(m));
  var a03 = (+x$2.gm(m));
  var a10 = (+x$2.aw(m));
  var a11 = (+x$2.ax(m));
  var a12 = (+x$2.ay(m));
  var a13 = (+x$2.gq(m));
  var a20 = (+x$2.az(m));
  var a21 = (+x$2.aA(m));
  var a22 = (+x$2.aB(m));
  var a23 = (+x$2.gu(m));
  var a30 = (+x$2.gv(m));
  var a31 = (+x$2.gw(m));
  var a32 = (+x$2.gx(m));
  var a33 = (+x$2.gy(m));
  var b00 = (+x$2.at(other));
  var b01 = (+x$2.au(other));
  var b02 = (+x$2.av(other));
  var b03 = (+x$2.gm(other));
  var b10 = (+x$2.aw(other));
  var b11 = (+x$2.ax(other));
  var b12 = (+x$2.ay(other));
  var b13 = (+x$2.gq(other));
  var b20 = (+x$2.az(other));
  var b21 = (+x$2.aA(other));
  var b22 = (+x$2.aB(other));
  var b23 = (+x$2.gu(other));
  var b30 = (+x$2.gv(other));
  var b31 = (+x$2.gw(other));
  var b32 = (+x$2.gx(other));
  var b33 = (+x$2.gy(other));
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4(((((a00 * b00) + (a10 * b01)) + (a20 * b02)) + (a30 * b03)), ((((a01 * b00) + (a11 * b01)) + (a21 * b02)) + (a31 * b03)), ((((a02 * b00) + (a12 * b01)) + (a22 * b02)) + (a32 * b03)), ((((a03 * b00) + (a13 * b01)) + (a23 * b02)) + (a33 * b03)), ((((a00 * b10) + (a10 * b11)) + (a20 * b12)) + (a30 * b13)), ((((a01 * b10) + (a11 * b11)) + (a21 * b12)) + (a31 * b13)), ((((a02 * b10) + (a12 * b11)) + (a22 * b12)) + (a32 * b13)), ((((a03 * b10) + (a13 * b11)) + (a23 * b12)) + (a33 * b13)), ((((a00 * b20) + (a10 * b21)) + (a20 * b22)) + (a30 * b23)), ((((a01 * b20) + (a11 * b21)) + (a21 * b22)) + (a31 * b23)), ((((a02 * b20) + (a12 * b21)) + (a22 * b22)) + (a32 * b23)), ((((a03 * b20) + (a13 * b21)) + (a23 * b22)) + (a33 * b23)), ((((a00 * b30) + (a10 * b31)) + (a20 * b32)) + (a30 * b33)), ((((a01 * b30) + (a11 * b31)) + (a21 * b32)) + (a31 * b33)), ((((a02 * b30) + (a12 * b31)) + (a22 * b32)) + (a32 * b33)), ((((a03 * b30) + (a13 * b31)) + (a23 * b32)) + (a33 * b33)));
}
function $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($thiz, m, x$2) {
  var a00 = (+x$2.at(m));
  var a01 = (+x$2.au(m));
  var a02 = (+x$2.av(m));
  var a03 = (+x$2.gm(m));
  var a10 = (+x$2.aw(m));
  var a11 = (+x$2.ax(m));
  var a12 = (+x$2.ay(m));
  var a13 = (+x$2.gq(m));
  var a20 = (+x$2.az(m));
  var a21 = (+x$2.aA(m));
  var a22 = (+x$2.aB(m));
  var a23 = (+x$2.gu(m));
  var a30 = (+x$2.gv(m));
  var a31 = (+x$2.gw(m));
  var a32 = (+x$2.gx(m));
  var a33 = (+x$2.gy(m));
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
  mb.gj(m, (+x$4.at(other)));
  mb.gk(m, (+x$4.au(other)));
  mb.gl(m, (+x$4.av(other)));
  mb.kG(m, (+x$4.gm(other)));
  mb.gn(m, (+x$4.aw(other)));
  mb.go(m, (+x$4.ax(other)));
  mb.gp(m, (+x$4.ay(other)));
  mb.kH(m, (+x$4.gq(other)));
  mb.gr(m, (+x$4.az(other)));
  mb.gs(m, (+x$4.aA(other)));
  mb.gt(m, (+x$4.aB(other)));
  mb.kI(m, (+x$4.gu(other)));
  mb.kJ(m, (+x$4.gv(other)));
  mb.kK(m, (+x$4.gw(other)));
  mb.kL(m, (+x$4.gx(other)));
  mb.kM(m, (+x$4.gy(other)));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.r + other.r), (v.m + other.m), (v.o + other.o));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($thiz, v, x$2) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((-v.r), (-v.m), (-v.o));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.r - other.r), (v.m - other.m), (v.o - other.o));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, scalar) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.r * scalar), (v.m * scalar), (v.o * scalar));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__divScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, scalar) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.r / scalar), (v.m / scalar), (v.o / scalar));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3(((v.m * other.o) - (v.o * other.m)), ((v.o * other.r) - (v.r * other.o)), ((v.r * other.m) - (v.m * other.r)));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($thiz, v, x$2) {
  return $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__divScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, $f_Ltrivalibs_graphics_math_Vec3Base__length__O__D(x$2, v));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat3(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  this.hB = 0.0;
  this.hC = 0.0;
  this.hD = 0.0;
  this.hE = 0.0;
  this.hF = 0.0;
  this.hG = 0.0;
  this.hH = 0.0;
  this.hI = 0.0;
  this.hJ = 0.0;
  this.hB = m00;
  this.hC = m01;
  this.hD = m02;
  this.hE = m10;
  this.hF = m11;
  this.hG = m12;
  this.hH = m20;
  this.hI = m21;
  this.hJ = m22;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat3.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat3;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat3() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat3.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Mat3 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat3, "trivalibs.graphics.math.cpu.Mat3", ({
  dM: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat4(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  this.gM = 0.0;
  this.gN = 0.0;
  this.gO = 0.0;
  this.hK = 0.0;
  this.gP = 0.0;
  this.gQ = 0.0;
  this.gR = 0.0;
  this.hL = 0.0;
  this.gS = 0.0;
  this.gT = 0.0;
  this.gU = 0.0;
  this.hM = 0.0;
  this.hN = 0.0;
  this.hO = 0.0;
  this.hP = 0.0;
  this.hQ = 0.0;
  this.gM = m00;
  this.gN = m01;
  this.gO = m02;
  this.hK = m03;
  this.gP = m10;
  this.gQ = m11;
  this.gR = m12;
  this.hL = m13;
  this.gS = m20;
  this.gT = m21;
  this.gU = m22;
  this.hM = m23;
  this.hN = m30;
  this.hO = m31;
  this.hP = m32;
  this.hQ = m33;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat4.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat4;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat4() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat4.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Mat4 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4, "trivalibs.graphics.math.cpu.Mat4", ({
  dP: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Quat(x, y, z, w) {
  this.ao = 0.0;
  this.ap = 0.0;
  this.aq = 0.0;
  this.an = 0.0;
  this.ao = x;
  this.ap = y;
  this.aq = z;
  this.an = w;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Quat.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Quat;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Quat() {
}
$h_Ltrivalibs_graphics_math_cpu_Quat.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Quat = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat, "trivalibs.graphics.math.cpu.Quat", ({
  dS: 1
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
$p.lT = (function(angle) {
  var h = (0.5 * angle);
  return new $c_Ltrivalibs_graphics_math_cpu_Quat((+Math.sin(h)), 0.0, 0.0, (+Math.cos(h)));
});
$p.gh = (function(angle) {
  var h = (0.5 * angle);
  return new $c_Ltrivalibs_graphics_math_cpu_Quat(0.0, (+Math.sin(h)), 0.0, (+Math.cos(h)));
});
var $d_Ltrivalibs_graphics_math_cpu_Quat$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat$, "trivalibs.graphics.math.cpu.Quat$", ({
  dT: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Quat$;
function $m_Ltrivalibs_graphics_math_cpu_Quat$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Quat$)) {
    $n_Ltrivalibs_graphics_math_cpu_Quat$ = new $c_Ltrivalibs_graphics_math_cpu_Quat$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Quat$;
}
function $f_Ltrivalibs_graphics_math_cpu_QuatImmutableOps__quatMul__O__Ltrivalibs_graphics_math_Vec4Base__O__O($thiz, q, x$2, p) {
  return new $c_Ltrivalibs_graphics_math_cpu_Quat(((((q.an * p.ao) + (q.ao * p.an)) + (q.ap * p.aq)) - (q.aq * p.ap)), ((((q.an * p.ap) - (q.ao * p.aq)) + (q.ap * p.an)) + (q.aq * p.ao)), ((((q.an * p.aq) + (q.ao * p.ap)) - (q.ap * p.ao)) + (q.aq * p.an)), ((((q.an * p.an) - (q.ao * p.ao)) - (q.ap * p.ap)) - (q.aq * p.aq)));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec2(x, y) {
  this.fk = 0.0;
  this.fl = 0.0;
  this.fk = x;
  this.fl = y;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec2.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec2;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec2() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec2.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec2 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec2, "trivalibs.graphics.math.cpu.Vec2", ({
  dX: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec3(x, y, z) {
  this.r = 0.0;
  this.m = 0.0;
  this.o = 0.0;
  this.r = x;
  this.m = y;
  this.o = z;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec3.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec3;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec3() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec3.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec3 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3, "trivalibs.graphics.math.cpu.Vec3", ({
  dY: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec4(x, y, z, w) {
  this.gW = 0.0;
  this.gX = 0.0;
  this.gY = 0.0;
  this.gV = 0.0;
  this.gW = x;
  this.gX = y;
  this.gY = z;
  this.gV = w;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec4.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec4;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec4() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec4.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec4 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4, "trivalibs.graphics.math.cpu.Vec4", ({
  e1: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$() {
  this.jz = null;
  this.jA = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$.prototype = $p;
$p.mu = (function() {
  if ((!this.jA)) {
    this.jz = new $c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$$anon$21();
    this.jA = true;
  }
  return this.jz;
});
var $d_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$, "trivalibs.graphics.math.cpu.mat3$package$Mat3PaddedBuffer$", ({
  e4: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$;
function $m_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$)) {
    $n_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$ = new $c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
  this.jB = null;
  this.jC = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$.prototype = $p;
$p.lZ = (function() {
  if ((!this.jC)) {
    this.jB = new $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18();
    this.jC = true;
  }
  return this.jB;
});
var $d_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$, "trivalibs.graphics.math.cpu.mat4$package$Mat4Buffer$", ({
  e7: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$;
function $m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$)) {
    $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$ = new $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$;
}
function $ct_Ltrivalibs_graphics_math_gpu_Expr__T__($thiz, wgsl) {
  $thiz.u = wgsl;
  return $thiz;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_Expr() {
  this.u = null;
}
$p = $c_Ltrivalibs_graphics_math_gpu_Expr.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_Expr;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_Expr() {
}
$h_Ltrivalibs_graphics_math_gpu_Expr.prototype = $p;
$p.k = (function() {
  return this.u;
});
var $d_Ltrivalibs_graphics_math_gpu_Expr = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_Expr, "trivalibs.graphics.math.gpu.Expr", ({
  aN: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_expr$package$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_expr$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_expr$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_expr$package$() {
}
$h_Ltrivalibs_graphics_math_gpu_expr$package$.prototype = $p;
$p.mQ = (function(onFalse, onTrue, cond) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("select(" + onFalse.u) + ", ") + onTrue.u) + ", ") + cond.u) + ")"));
});
$p.lr = (function(cond, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + cond.u) + " || ") + other.u) + ")"));
});
$p.kz = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.u) + " < ") + b.u) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_expr$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_expr$package$, "trivalibs.graphics.math.gpu.expr$package$", ({
  eb: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_expr$package$;
function $m_Ltrivalibs_graphics_math_gpu_expr$package$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_expr$package$)) {
    $n_Ltrivalibs_graphics_math_gpu_expr$package$ = new $c_Ltrivalibs_graphics_math_gpu_expr$package$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_expr$package$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$() {
  this.jE = null;
  this.jF = false;
  this.jG = null;
  this.jH = false;
  this.jI = null;
  this.jJ = false;
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$.prototype = $p;
$p.lO = (function(v) {
  var s = ("" + v);
  return (((($f_T__indexOf__I__I(s, 46) >= 0) || ($f_T__indexOf__I__I(s, 69) >= 0)) || ($f_T__indexOf__I__I(s, 101) >= 0)) ? s : (s + ".0"));
});
$p.fB = (function() {
  if ((!this.jF)) {
    this.jE = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1();
    this.jF = true;
  }
  return this.jE;
});
$p.lY = (function() {
  if ((!this.jH)) {
    this.jG = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5();
    this.jH = true;
  }
  return this.jG;
});
$p.kD = (function() {
  if ((!this.jJ)) {
    this.jI = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6();
    this.jJ = true;
  }
  return this.jI;
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$, "trivalibs.graphics.math.gpu.float_expr$package$", ({
  ec: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$;
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
$p.lj = (function(x, y, z) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("vec3<f32>(" + x.u) + ", ") + y.u) + ", ") + z.u) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_vec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec3$, "trivalibs.graphics.math.gpu.vec3$", ({
  eo: 1
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
$p.kp = (function(xyz, w) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("vec4<f32>(" + xyz.u) + ", ") + w.u) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_vec4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec4$, "trivalibs.graphics.math.gpu.vec4$", ({
  ep: 1
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
  this.v = null;
  this.v = value;
}
$p = $c_Ltrivalibs_graphics_painter_BindPair.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_BindPair;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_BindPair() {
}
$h_Ltrivalibs_graphics_painter_BindPair.prototype = $p;
var $d_Ltrivalibs_graphics_painter_BindPair = new $TypeData().i($c_Ltrivalibs_graphics_painter_BindPair, "trivalibs.graphics.painter.BindPair", ({
  eq: 1
}));
function $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V($thiz) {
  var format = null;
  var i = 0;
  while ((i < $thiz.eH)) {
    var b = $thiz.eI[i];
    if (((format === null) && (b.aV > 0))) {
      format = b.eJ;
    }
    i = ((1 + i) | 0);
  }
  $thiz.hS = format;
}
function $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V($thiz, index, verts, indices, widenTo32) {
  while ((($thiz.eI.length | 0) <= index)) {
    $thiz.eI.push(new $c_Ltrivalibs_graphics_painter_FormBuffers());
  }
  var b = $thiz.eI[index];
  $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_graphics_painter_FormBuffers__Ltrivalibs_bufferdata_BufferView__V($thiz, b, verts);
  if ((indices !== null)) {
    $p_Ltrivalibs_graphics_painter_Form__uploadIndices__Ltrivalibs_graphics_painter_FormBuffers__sjs_js_typedarray_TypedArray__Z__V($thiz, b, indices, widenTo32);
  } else {
    b.aV = 0;
    b.fR = 0;
  }
}
function $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_graphics_painter_FormBuffers__Ltrivalibs_bufferdata_BufferView__V($thiz, b, verts) {
  var data = verts.dv.buffer;
  var size = (data.byteLength | 0);
  var p = ((-4) & ((3 + size) | 0));
  var padded = ((p < 4) ? 4 : p);
  if (((b.aW === null) || (b.hV < padded))) {
    if ((b.aW !== null)) {
      var opt$proxy4 = b.aW;
      opt$proxy4.destroy();
    }
    b.aW = $thiz.fQ.e.createBuffer(({
      "size": padded,
      "usage": 40
    }));
    b.hV = padded;
  }
  $thiz.fQ.ab.writeBuffer(b.aW, 0.0, $p_Ltrivalibs_graphics_painter_Form__alignedData__sjs_js_typedarray_ArrayBuffer__sjs_js_typedarray_ArrayBuffer($thiz, data));
  b.gZ = size;
  b.fm = (verts.off | 0);
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
    b.eJ = "uint32";
  } else if ((!(!(raw instanceof Uint16Array)))) {
    data = raw.buffer;
    count = (raw.length | 0);
    b.eJ = "uint16";
  } else {
    data = raw.buffer;
    count = (raw.length | 0);
    b.eJ = "uint32";
  }
  var size = (data.byteLength | 0);
  var p = ((-4) & ((3 + size) | 0));
  var padded = ((p < 4) ? 4 : p);
  if (((b.aU === null) || (b.hU < padded))) {
    if ((b.aU !== null)) {
      var opt$proxy8 = b.aU;
      opt$proxy8.destroy();
    }
    b.aU = $thiz.fQ.e.createBuffer(({
      "size": padded,
      "usage": 24
    }));
    b.hU = padded;
  }
  $thiz.fQ.ab.writeBuffer(b.aU, 0.0, $p_Ltrivalibs_graphics_painter_Form__alignedData__sjs_js_typedarray_ArrayBuffer__sjs_js_typedarray_ArrayBuffer($thiz, data));
  b.fR = size;
  b.aV = count;
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
  this.fQ = null;
  this.eI = null;
  this.eH = 0;
  this.hT = null;
  this.hR = null;
  this.hS = null;
  this.fQ = painter;
  this.eI = [];
  this.eH = 0;
  this.hT = "triangle-list";
  this.hR = "ccw";
  this.hS = null;
}
$p = $c_Ltrivalibs_graphics_painter_Form.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Form;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Form() {
}
$h_Ltrivalibs_graphics_painter_Form.prototype = $p;
$p.mS = (function(geometry, vertices, geometries, verticesAll, topology, frontFace) {
  if ((topology !== (void 0))) {
    this.hT = topology;
  }
  if ((frontFace !== (void 0))) {
    this.hR = frontFace;
  }
  if ((geometry !== (void 0))) {
    $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V(this, 0, geometry.hA, geometry.gJ, false);
    this.eH = 1;
    $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V(this);
  }
  if ((vertices !== (void 0))) {
    $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V(this, 0, vertices, null, false);
    this.eH = 1;
    $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V(this);
  }
  if ((geometries !== (void 0))) {
    var use32 = false;
    var i = 0;
    while ((i < (geometries.length | 0))) {
      var idx = geometries[i].gJ;
      if (((idx !== null) && (!(!(idx instanceof Uint32Array))))) {
        use32 = true;
      }
      i = ((1 + i) | 0);
    }
    i = 0;
    while ((i < (geometries.length | 0))) {
      var geo = geometries[i];
      $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V(this, i, geo.hA, geo.gJ, use32);
      i = ((1 + i) | 0);
    }
    this.eH = (geometries.length | 0);
    $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V(this);
  }
  if ((verticesAll !== (void 0))) {
    var i$1 = 0;
    while ((i$1 < (verticesAll.length | 0))) {
      $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V(this, i$1, verticesAll[i$1], null, false);
      i$1 = ((1 + i$1) | 0);
    }
    this.eH = (verticesAll.length | 0);
    $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V(this);
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Form = new $TypeData().i($c_Ltrivalibs_graphics_painter_Form, "trivalibs.graphics.painter.Form", ({
  er: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_FormBuffers() {
  this.aW = null;
  this.hV = 0;
  this.gZ = 0;
  this.fm = 0;
  this.aU = null;
  this.hU = 0;
  this.fR = 0;
  this.aV = 0;
  this.eJ = null;
  this.aW = null;
  this.hV = 0;
  this.gZ = 0;
  this.fm = 0;
  this.aU = null;
  this.hU = 0;
  this.fR = 0;
  this.aV = 0;
  this.eJ = "uint16";
}
$p = $c_Ltrivalibs_graphics_painter_FormBuffers.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_FormBuffers;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_FormBuffers() {
}
$h_Ltrivalibs_graphics_painter_FormBuffers.prototype = $p;
var $d_Ltrivalibs_graphics_painter_FormBuffers = new $TypeData().i($c_Ltrivalibs_graphics_painter_FormBuffers, "trivalibs.graphics.painter.FormBuffers", ({
  es: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter) {
  this.jL = null;
  this.jK = null;
  this.G = null;
  this.jL = shade;
  this.jK = painter;
  this.G = [];
}
$p = $c_Ltrivalibs_graphics_painter_InstanceList.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_InstanceList;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_InstanceList() {
}
$h_Ltrivalibs_graphics_painter_InstanceList.prototype = $p;
$p.D = (function() {
  return (this.G.length | 0);
});
$p.a1 = (function() {
  var inst = new $c_Ltrivalibs_graphics_painter_Instance(this.jL, this.jK);
  this.G.push(inst);
  return (((this.G.length | 0) - 1) | 0);
});
var $d_Ltrivalibs_graphics_painter_InstanceList = new $TypeData().i($c_Ltrivalibs_graphics_painter_InstanceList, "trivalibs.graphics.painter.InstanceList", ({
  eu: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_LayerBindCache(panelId, epoch, valueGroup, panelGroup) {
  this.jN = 0;
  this.jM = 0;
  this.hX = null;
  this.hW = null;
  this.jN = panelId;
  this.jM = epoch;
  this.hX = valueGroup;
  this.hW = panelGroup;
}
$p = $c_Ltrivalibs_graphics_painter_LayerBindCache.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_LayerBindCache;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_LayerBindCache() {
}
$h_Ltrivalibs_graphics_painter_LayerBindCache.prototype = $p;
var $d_Ltrivalibs_graphics_painter_LayerBindCache = new $TypeData().i($c_Ltrivalibs_graphics_painter_LayerBindCache, "trivalibs.graphics.painter.LayerBindCache", ({
  ev: 1
}));
function $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var w = $thiz.n9();
  var h = $thiz.m2();
  panel.lH(w, h);
  var msaa = panel.fr;
  var encoder = $thiz.e.createCommandEncoder();
  var panelFormats = panel.iv();
  var colorAttachments = [];
  var t = 0;
  while ((t < panel.mZ())) {
    if ((panel.h6 !== null)) {
      var opt$proxy2 = panel.h6;
      if (msaa) {
        var _2 = panel.kP(t);
        var TextureViewBundle_this = panel.H[t];
        var _2$1 = TextureViewBundle_this.ad[0];
        var value = opt$proxy2.gW;
        var value$1 = opt$proxy2.gX;
        var value$2 = opt$proxy2.gY;
        var value$3 = opt$proxy2.gV;
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
        var TextureViewBundle_this$2 = panel.H[t];
        var _2$3 = TextureViewBundle_this$2.ad[0];
        var value$4 = opt$proxy2.gW;
        var value$5 = opt$proxy2.gX;
        var value$6 = opt$proxy2.gY;
        var value$7 = opt$proxy2.gV;
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
      var _2$5 = panel.kP(t);
      var TextureViewBundle_this$3 = panel.H[t];
      var _2$6 = TextureViewBundle_this$3.ad[0];
      var attachment = ({
        "view": _2$5,
        "resolveTarget": _2$6,
        "loadOp": "load",
        "storeOp": "store"
      });
    } else {
      var TextureViewBundle_this$4 = panel.H[t];
      var _2$7 = TextureViewBundle_this$4.ad[0];
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
  if (panel.fY) {
    var _2$8 = panel.kw();
    passDesc.depthStencilAttachment = ({
      "view": _2$8,
      "depthLoadOp": "clear",
      "depthStoreOp": "store",
      "depthClearValue": 1.0
    });
  }
  var shapePass = encoder.beginRenderPass(passDesc);
  var i = 0;
  while ((i < (panel.h8.length | 0))) {
    $p_Ltrivalibs_graphics_painter_Painter__renderShapeOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shape__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_Panel__V($thiz, shapePass, panel.h8[i], panel.fY, msaa, panelFormats, panel);
    i = ((1 + i) | 0);
  }
  shapePass.end();
  $thiz.ab.submit([encoder.finish()]);
  if (panel.fV) {
    $p_Ltrivalibs_graphics_painter_Painter__resolvePanelDepth__Ltrivalibs_graphics_painter_Panel__V($thiz, panel);
  }
  var curEncoder = null;
  var curPass = null;
  var j = 0;
  while ((j < (panel.aX.length | 0))) {
    var layer = panel.aX[j];
    var needsPingPong = layer.ln();
    if ((layer.kN() >= 0)) {
      if ((curPass !== null)) {
        curPass.end();
        $thiz.ab.submit([curEncoder.finish()]);
        curPass = null;
      }
      var mipDstView = panel.H[0].ad[layer.kN()];
      var mipSrcView = ((layer.mx() >= 0) ? panel.H[0].ad[layer.mx()] : panel.ht());
      var enc = $thiz.e.createCommandEncoder();
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
      $thiz.ab.submit([enc.finish()]);
    } else if (needsPingPong) {
      if ((curPass !== null)) {
        curPass.end();
        $thiz.ab.submit([curEncoder.finish()]);
        curPass = null;
      }
      var enc$2 = $thiz.e.createCommandEncoder();
      var _2$10 = panel.mG();
      var _2$11 = [({
        "view": _2$10,
        "loadOp": "load",
        "storeOp": "store"
      })];
      var ppPass = enc$2.beginRenderPass(({
        "colorAttachments": _2$11
      }));
      $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V($thiz, ppPass, layer, false, false, panelFormats, panel.ht(), panel);
      ppPass.end();
      $thiz.ab.submit([enc$2.finish()]);
      panel.mX();
    } else {
      if ((curPass === null)) {
        curEncoder = $thiz.e.createCommandEncoder();
        var $x_1 = curEncoder;
        var _2$12 = panel.ht();
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
    $thiz.ab.submit([curEncoder.finish()]);
  }
  var hasMipTargetLayers = false;
  var mi = 0;
  while ((mi < (panel.aX.length | 0))) {
    if ((panel.aX[mi].kN() >= 0)) {
      hasMipTargetLayers = true;
    }
    mi = ((1 + mi) | 0);
  }
  if (((panel.iQ() > 1) && (!hasMipTargetLayers))) {
    $p_Ltrivalibs_graphics_painter_Painter__generateMipmaps__Ltrivalibs_graphics_painter_Panel__V($thiz, panel);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__blitSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz) {
  if ((!$thiz.jT)) {
    $thiz.jS = $thiz.e.createSampler(({
      "magFilter": "nearest",
      "minFilter": "nearest"
    }));
    $thiz.jT = true;
  }
  return $thiz.jS;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz) {
  if ((!$thiz.jP)) {
    var $x_2 = $thiz.e;
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
    $thiz.jO = $x_1;
    $thiz.jP = true;
  }
  return $thiz.jO;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitPipeline__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz) {
  if ((!$thiz.jR)) {
    var module = $thiz.e.createShaderModule(({
      "code": "\nstruct VsOut {\n  @builtin(position) pos: vec4f,\n  @location(0) uv: vec2f,\n}\n\n@vertex\nfn vs_main(@builtin(vertex_index) vi: u32) -> VsOut {\n  let x = f32((vi << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(vi & 2u) * 2.0 - 1.0;\n  var out: VsOut;\n  out.pos = vec4f(x, y, 0.0, 1.0);\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  return out;\n}\n\n@group(0) @binding(0) var blit_texture: texture_2d<f32>;\n@group(0) @binding(1) var blit_sampler: sampler;\n\n@fragment\nfn fs_main(in: VsOut) -> @location(0) vec4f {\n  return textureSample(blit_texture, blit_sampler, in.uv);\n}\n"
    }));
    var $x_1 = $thiz.e;
    var _2 = [$p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz)];
    var pipelineLayout = $x_1.createPipelineLayout(({
      "bindGroupLayouts": _2
    }));
    var $x_3 = $thiz.e;
    var _2$1 = ({
      "module": module,
      "entryPoint": "vs_main"
    });
    var f$proxy4 = $thiz.fo;
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
    $thiz.jQ = $x_2;
    $thiz.jR = true;
  }
  return $thiz.jQ;
}
function $p_Ltrivalibs_graphics_painter_Painter__depthResolveBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz) {
  if ((!$thiz.jW)) {
    var $x_2 = $thiz.e;
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
    $thiz.jV = $x_1;
    $thiz.jW = true;
  }
  return $thiz.jV;
}
function $p_Ltrivalibs_graphics_painter_Painter__depthResolvePipeline__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz) {
  if ((!$thiz.jY)) {
    var module = $thiz.e.createShaderModule(({
      "code": "\n@group(0) @binding(0) var ms_depth: texture_depth_multisampled_2d;\n\n@vertex\nfn vs_main(@builtin(vertex_index) vi: u32) -> @builtin(position) vec4f {\n  let x = f32((vi << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(vi & 2u) * 2.0 - 1.0;\n  return vec4f(x, y, 0.0, 1.0);\n}\n\n@fragment\nfn fs_main(@builtin(position) pos: vec4f) -> @builtin(frag_depth) f32 {\n  return textureLoad(ms_depth, vec2i(pos.xy), 0);\n}\n"
    }));
    var $x_1 = $thiz.e;
    var _2 = [$p_Ltrivalibs_graphics_painter_Painter__depthResolveBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz)];
    var pl = $x_1.createPipelineLayout(({
      "bindGroupLayouts": _2
    }));
    var $x_3 = $thiz.e;
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
    $thiz.jX = $x_2;
    $thiz.jY = true;
  }
  return $thiz.jX;
}
function $p_Ltrivalibs_graphics_painter_Painter__resolvePanelDepth__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var encoder = $thiz.e.createCommandEncoder();
  var _2 = [];
  var _2$1 = panel.mO();
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
  var $x_1 = $thiz.e;
  var _2$3 = $p_Ltrivalibs_graphics_painter_Painter__depthResolveBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz);
  var _2$4 = panel.kw();
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
  $thiz.ab.submit([encoder.finish()]);
}
function $p_Ltrivalibs_graphics_painter_Painter__mipBlitSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz) {
  if ((!$thiz.k0)) {
    $thiz.jZ = $thiz.e.createSampler(({
      "magFilter": "linear",
      "minFilter": "linear"
    }));
    $thiz.k0 = true;
  }
  return $thiz.jZ;
}
function $p_Ltrivalibs_graphics_painter_Painter__getMipBlitPipeline__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, format) {
  if ((!(!(!(!$thiz.h1.hasOwnProperty(format)))))) {
    return $thiz.h1[format];
  } else {
    var module = $thiz.e.createShaderModule(({
      "code": "\nstruct VsOut {\n  @builtin(position) pos: vec4f,\n  @location(0) uv: vec2f,\n}\n\n@vertex\nfn vs_main(@builtin(vertex_index) vi: u32) -> VsOut {\n  let x = f32((vi << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(vi & 2u) * 2.0 - 1.0;\n  var out: VsOut;\n  out.pos = vec4f(x, y, 0.0, 1.0);\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  return out;\n}\n\n@group(0) @binding(0) var blit_texture: texture_2d<f32>;\n@group(0) @binding(1) var blit_sampler: sampler;\n\n@fragment\nfn fs_main(in: VsOut) -> @location(0) vec4f {\n  return textureSample(blit_texture, blit_sampler, in.uv);\n}\n"
    }));
    var $x_1 = $thiz.e;
    var _2 = [$p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz)];
    var pl = $x_1.createPipelineLayout(({
      "bindGroupLayouts": _2
    }));
    var $x_2 = $thiz.e;
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
    $thiz.h1[format] = p;
    return p;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__generateMipmaps__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var mipCount = panel.iQ();
  if ((mipCount <= 1)) {
    return (void 0);
  }
  var fmt = (((panel.eL.length | 0) > 0) ? panel.eL[0] : $thiz.fo);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getMipBlitPipeline__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, fmt);
  var i = 1;
  while ((i < mipCount)) {
    var srcView = panel.H[0].ad[((i - 1) | 0)];
    var dstView = panel.H[0].ad[i];
    var encoder = $thiz.e.createCommandEncoder();
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
    var $x_1 = $thiz.e;
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
    $thiz.ab.submit([encoder.finish()]);
    i = ((1 + i) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, bindings, panelBindings) {
  $thiz.a4.length = (bindings.length | 0);
  var i = 0;
  while ((i < (bindings.length | 0))) {
    $thiz.a4[i] = bindings[i];
    i = ((1 + i) | 0);
  }
  $thiz.O.length = (panelBindings.length | 0);
  var j = 0;
  while ((j < (panelBindings.length | 0))) {
    $thiz.O[j] = panelBindings[j];
    j = ((1 + j) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shade, workBindings, workPanelBindings) {
  var dict = panel.h7;
  var keys = Object.keys(dict);
  var i = 0;
  while ((i < (keys.length | 0))) {
    var name = keys[i];
    var value = dict[name];
    if ((!(!(!(!shade.t.hasOwnProperty(name)))))) {
      var idx = (shade.t[name] | 0);
      if (((idx >= (workBindings.length | 0)) || (workBindings[idx] === null))) {
        while (((workBindings.length | 0) <= idx)) {
          workBindings.push(null);
        }
        workBindings[idx] = value;
      }
    } else if ((!(!(!(!shade.i1.hasOwnProperty(name)))))) {
      var idx$2 = (shade.i1[name] | 0);
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
  while ((i < (inst.c.length | 0))) {
    if ((inst.c[i] !== null)) {
      while (((workBindings.length | 0) <= i)) {
        workBindings.push(null);
      }
      workBindings[i] = inst.c[i];
    }
    i = ((1 + i) | 0);
  }
  var j = 0;
  while ((j < (inst.h0.length | 0))) {
    if ((inst.h0[j] !== null)) {
      while (((workPanelBindings.length | 0) <= j)) {
        workPanelBindings.push(null);
      }
      workPanelBindings[j] = inst.h0[j];
    }
    j = ((1 + j) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel) {
  return ((panel !== null) && ((Object.keys(panel.h7).length | 0) > 0));
}
function $p_Ltrivalibs_graphics_painter_Painter__buildValueBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, shade, bindings) {
  if ((((bindings.length | 0) > 0) && (shade.i2 !== null))) {
    var entries = [];
    var i = 0;
    while ((i < (bindings.length | 0))) {
      var b = bindings[i];
      if ((b !== null)) {
        entries.push($p_Ltrivalibs_graphics_painter_Painter__bindingEntry__I__O__sjs_js_Dynamic($thiz, i, b));
      }
      i = ((1 + i) | 0);
    }
    var $x_1 = $thiz.e;
    var _2 = shade.i2;
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
  if ((shade.i0 !== null)) {
    var entries = [];
    if ((srcView !== null)) {
      entries.push(({
        "binding": 0,
        "resource": srcView
      }));
    }
    var startIdx = ((srcView !== null) ? 1 : 0);
    var k = startIdx;
    while ((k < (panelBindings.length | 0))) {
      var pb = panelBindings[k];
      if ((pb !== null)) {
        var view = ((!(!pb.depth)) ? pb.panel.ly() : (((pb.mipLevel | 0) < 0) ? pb.panel.H[(pb.index | 0)].k3 : pb.panel.H[(pb.index | 0)].ad[(pb.mipLevel | 0)]));
        var value = k;
        entries.push(({
          "binding": value,
          "resource": view
        }));
      }
      k = ((1 + k) | 0);
    }
    if (((entries.length | 0) > 0)) {
      var $x_1 = $thiz.e;
      var _2 = shade.i0;
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
  var fmts = ((formats !== null) ? formats : [$thiz.fo]);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, shape.ac, shape.i4, fmts, depthTest, multisample, shape.g0.hT, shape.i5, shape.g0.hR, shape.g0.hS);
  pass.setPipeline(pipeline);
  var form = shape.g0;
  var bufferCount = form.eH;
  var instanceCount = shape.P.D();
  var hasPanelBinds = $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel);
  if ((instanceCount === 0)) {
    if (hasPanelBinds) {
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, shape.S, shape.hc);
      $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shape.ac, $thiz.a4, $thiz.O);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.ac, $thiz.a4);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.ac, $thiz.O, null);
    } else {
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.ac, shape.S);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.ac, shape.hc, null);
    }
    var b = 0;
    while ((b < bufferCount)) {
      var buf = form.eI[b];
      if ((buf.fm > 0)) {
        pass.setVertexBuffer(0, buf.aW, 0.0, buf.gZ);
        if ((buf.aV > 0)) {
          pass.setIndexBuffer(buf.aU, buf.eJ, 0.0, buf.fR);
          pass.drawIndexed(buf.aV);
        } else {
          pass.draw(buf.fm);
        }
      }
      b = ((1 + b) | 0);
    }
  } else {
    var i = 0;
    while ((i < instanceCount)) {
      var inst = shape.P.G[i];
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, shape.S, shape.hc);
      if (hasPanelBinds) {
        $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shape.ac, $thiz.a4, $thiz.O);
      }
      $p_Ltrivalibs_graphics_painter_Painter__applyInstanceBindings__Ltrivalibs_graphics_painter_Instance__sjs_js_Array__sjs_js_Array__V($thiz, inst, $thiz.a4, $thiz.O);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.ac, $thiz.a4);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.ac, $thiz.O, null);
      var b$2 = 0;
      while ((b$2 < bufferCount)) {
        var buf$2 = form.eI[b$2];
        if ((buf$2.fm > 0)) {
          pass.setVertexBuffer(0, buf$2.aW, 0.0, buf$2.gZ);
          if ((buf$2.aV > 0)) {
            pass.setIndexBuffer(buf$2.aU, buf$2.eJ, 0.0, buf$2.fR);
            pass.drawIndexed(buf$2.aV);
          } else {
            pass.draw(buf$2.fm);
          }
        }
        b$2 = ((1 + b$2) | 0);
      }
      i = ((1 + i) | 0);
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V($thiz, pass, layer, depthTest, multisample, formats, srcView, panel) {
  var fmts = ((formats !== null) ? formats : [$thiz.fo]);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, layer.b1(), layer.nc(), fmts, depthTest, multisample, "triangle-list", "none", "ccw", null);
  pass.setPipeline(pipeline);
  var instanceCount = layer.m7().D();
  var hasPanelBinds = $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel);
  if ((instanceCount === 0)) {
    if (hasPanelBinds) {
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, layer.kr(), layer.kQ());
      $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, layer.b1(), $thiz.a4, $thiz.O);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, layer.b1(), $thiz.a4);
      var effectiveSrcView = (((($thiz.O.length | 0) > 0) && ($thiz.O[0] !== null)) ? null : srcView);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer.b1(), $thiz.O, effectiveSrcView);
    } else {
      var c = layer.nd();
      if (((((c !== null) && (panel !== null)) && (c.jN === panel.hZ)) && (c.jM === panel.eK))) {
        if ((c.hX !== null)) {
          pass.setBindGroup(0, c.hX);
        }
        if ((c.hW !== null)) {
          pass.setBindGroup(1, c.hW);
        }
      } else {
        var vg = $p_Ltrivalibs_graphics_painter_Painter__buildValueBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, layer.b1(), layer.kr());
        var pg = $p_Ltrivalibs_graphics_painter_Painter__buildPanelBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, layer.b1(), layer.kQ(), srcView);
        if ((vg !== null)) {
          pass.setBindGroup(0, vg);
        }
        if ((pg !== null)) {
          pass.setBindGroup(1, pg);
        }
        layer.ne(((panel !== null) ? new $c_Ltrivalibs_graphics_painter_LayerBindCache(panel.hZ, panel.eK, vg, pg) : null));
      }
    }
    pass.draw(3);
  } else {
    var i = 0;
    while ((i < instanceCount)) {
      var inst = layer.m7().G[i];
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, layer.kr(), layer.kQ());
      if (hasPanelBinds) {
        $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, layer.b1(), $thiz.a4, $thiz.O);
      }
      $p_Ltrivalibs_graphics_painter_Painter__applyInstanceBindings__Ltrivalibs_graphics_painter_Instance__sjs_js_Array__sjs_js_Array__V($thiz, inst, $thiz.a4, $thiz.O);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, layer.b1(), $thiz.a4);
      var effectiveSrcView$2 = (((($thiz.O.length | 0) > 0) && ($thiz.O[0] !== null)) ? null : srcView);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer.b1(), $thiz.O, effectiveSrcView$2);
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
  var key = (((((((((((((((shade.k1 + "|") + $p_Ltrivalibs_graphics_painter_Painter__blendKeyStr__Ltrivalibs_graphics_painter_BlendState__T($thiz, blendState)) + "|") + formats.join(",")) + "|") + depthTest) + "|") + multisample) + "|") + topology) + "|") + cullMode) + "|") + frontFace) + stripKey);
  var cached = $thiz.hY[key];
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
    if ((shade.i3 !== null)) {
      var _2 = shade.hb;
      var _2$1 = [shade.i3];
      var vertexDescriptor = ({
        "module": _2,
        "entryPoint": "vs_main",
        "buffers": _2$1
      });
    } else {
      var _2$2 = shade.hb;
      var vertexDescriptor = ({
        "module": _2$2,
        "entryPoint": "vs_main"
      });
    }
    var _2$3 = shade.k2;
    var _2$4 = shade.hb;
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
    var p = $thiz.e.createRenderPipeline(desc);
    $thiz.hY[key] = p;
    return p;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__bindingEntry__I__O__sjs_js_Dynamic($thiz, i, b) {
  if ((b instanceof $c_Ltrivalibs_graphics_buffers_BufferBinding)) {
    var _2 = b.f;
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
  this.e = null;
  this.ab = null;
  this.fn = null;
  this.jU = null;
  this.fo = null;
  this.hY = null;
  this.h2 = 0;
  this.h3 = null;
  this.jS = null;
  this.jT = false;
  this.jO = null;
  this.jP = false;
  this.jQ = null;
  this.jR = false;
  this.jV = null;
  this.jW = false;
  this.jX = null;
  this.jY = false;
  this.jZ = null;
  this.k0 = false;
  this.h1 = null;
  this.a4 = null;
  this.O = null;
  this.e = device;
  this.ab = queue;
  this.fn = canvas;
  this.jU = context;
  this.fo = preferredFormat;
  this.hY = ({});
  this.h2 = 0;
  this.h3 = [];
  this.h1 = ({});
  this.a4 = [];
  this.O = [];
}
$p = $c_Ltrivalibs_graphics_painter_Painter.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Painter;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Painter() {
}
$h_Ltrivalibs_graphics_painter_Painter.prototype = $p;
$p.mB = (function(cb) {
  this.h3.push(cb);
  cb.kn((this.fn.width | 0), (this.fn.height | 0));
});
$p.lM = (function(w, h) {
  var k = 0;
  while ((k < (this.h3.length | 0))) {
    this.h3[k].kn(w, h);
    k = ((1 + k) | 0);
  }
});
$p.n9 = (function() {
  return (this.fn.width | 0);
});
$p.m2 = (function() {
  return (this.fn.height | 0);
});
$p.lP = (function(geometry, vertices, geometries, verticesAll, topology, frontFace) {
  return new $c_Ltrivalibs_graphics_painter_Form(this).mS(geometry, vertices, geometries, verticesAll, topology, frontFace);
});
$p.hr = (function(form, shade, cullMode, blendState) {
  return new $c_Ltrivalibs_graphics_painter_Shape(this, form, shade).mT(cullMode, blendState);
});
$p.mD = (function(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers) {
  return new $c_Ltrivalibs_graphics_painter_Panel(this).mR(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers);
});
$p.mU = (function(panel) {
  var encoder = this.e.createCommandEncoder();
  var swapChainView = this.jU.getCurrentTexture().createView();
  var _2 = [({
    "view": swapChainView,
    "loadOp": "load",
    "storeOp": "store"
  })];
  var pass = encoder.beginRenderPass(({
    "colorAttachments": _2
  }));
  var $x_1 = this.e;
  var _2$1 = $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout(this);
  var _2$2 = panel.ht();
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
  this.ab.submit([encoder.finish()]);
});
var $d_Ltrivalibs_graphics_painter_Painter = new $TypeData().i($c_Ltrivalibs_graphics_painter_Painter, "trivalibs.graphics.painter.Painter", ({
  ew: 1
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
$p.m6 = (function(canvas) {
  var maybeGpu = $m_Ltrivalibs_graphics_painter_WebGPU$().lW();
  if ((maybeGpu === (void 0))) {
    return Promise.reject(Error("WebGPU is not supported"));
  } else {
    var promise$proxy1 = maybeGpu.requestAdapter();
    var promise$proxy3 = promise$proxy1.then(((value$2) => {
      if ((value$2 === null)) {
        throw new $c_sjs_js_JavaScriptException(Error("Failed to get WebGPU adapter")).aT;
      } else {
        return value$2;
      }
    }));
    var f$proxy11 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((adapter$2) => {
      var promise$proxy2 = adapter$2.requestDevice();
      var f$proxy10 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((device$2) => {
        var queue = device$2.queue;
        var context = $m_Ltrivalibs_graphics_painter_WebGPU$().lV(canvas);
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
            painter.lM(rw, rh);
          }
        }));
        observer.observe(canvas);
        return painter;
      }));
      return promise$proxy2.then($m_sjs_js_Any$().gg(f$proxy10));
    }));
    return promise$proxy3.then($m_sjs_js_Any$().gg(f$proxy11));
  }
});
$p.m5 = (function(canvas, setup) {
  var promise$proxy4 = this.m6(canvas);
  return promise$proxy4.then($m_sjs_js_Any$().gg(setup));
});
var $d_Ltrivalibs_graphics_painter_Painter$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_Painter$, "trivalibs.graphics.painter.Painter$", ({
  ex: 1
}));
var $n_Ltrivalibs_graphics_painter_Painter$;
function $m_Ltrivalibs_graphics_painter_Painter$() {
  if ((!$n_Ltrivalibs_graphics_painter_Painter$)) {
    $n_Ltrivalibs_graphics_painter_Painter$ = new $c_Ltrivalibs_graphics_painter_Painter$();
  }
  return $n_Ltrivalibs_graphics_painter_Painter$;
}
function $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V($thiz) {
  if (($thiz.fT !== null)) {
    var opt$proxy4 = $thiz.fT;
    opt$proxy4.destroy();
  }
  if (($thiz.fW !== null)) {
    var opt$proxy6 = $thiz.fW;
    opt$proxy6.destroy();
  }
  var depthUsage = ($thiz.fS ? 20 : 16);
  var $x_1 = $thiz.eM.e;
  var value = $thiz.fq;
  var value$1 = $thiz.fp;
  var _2 = ({
    "width": value,
    "height": value$1
  });
  var _2$1 = ($thiz.fr ? 4 : 1);
  var depthTex = $x_1.createTexture(({
    "size": _2,
    "format": "depth24plus",
    "usage": depthUsage,
    "sampleCount": _2$1
  }));
  $thiz.fT = depthTex;
  $thiz.h4 = depthTex.createView();
  if (($thiz.fS && $thiz.fr)) {
    var $x_2 = $thiz.eM.e;
    var value$2 = $thiz.fq;
    var value$3 = $thiz.fp;
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
    $thiz.fW = resTex;
    $thiz.fX = resTex.createView();
    $thiz.fV = true;
  } else {
    $thiz.fW = null;
    $thiz.fX = null;
    $thiz.fV = false;
  }
}
function $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z($thiz) {
  var i = 0;
  while ((i < ($thiz.aX.length | 0))) {
    if ($thiz.aX[i].ln()) {
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
  this.eM = null;
  this.ha = 0;
  this.h9 = 0;
  this.h6 = null;
  this.fY = false;
  this.fr = false;
  this.fZ = 0;
  this.eL = null;
  this.h8 = null;
  this.aX = null;
  this.h7 = null;
  this.hZ = 0;
  this.eK = 0;
  this.ar = null;
  this.H = null;
  this.fT = null;
  this.h4 = null;
  this.fS = false;
  this.fW = null;
  this.fX = null;
  this.fV = false;
  this.fU = null;
  this.h5 = null;
  this.fq = 0;
  this.fp = 0;
  this.eM = painter;
  this.ha = 0;
  this.h9 = 0;
  this.h6 = null;
  this.fY = false;
  this.fr = false;
  this.fZ = 1;
  this.eL = [];
  this.h8 = [];
  this.aX = [];
  this.h7 = ({});
  $m_Ltrivalibs_graphics_painter_panel$package$().hd = ((1 + $m_Ltrivalibs_graphics_painter_panel$package$().hd) | 0);
  this.hZ = $m_Ltrivalibs_graphics_painter_panel$package$().hd;
  this.eK = 0;
  this.ar = [];
  this.H = [];
  this.fT = null;
  this.h4 = null;
  this.fS = false;
  this.fW = null;
  this.fX = null;
  this.fV = false;
  this.fU = [];
  this.h5 = [];
  this.fq = 0;
  this.fp = 0;
}
$p = $c_Ltrivalibs_graphics_painter_Panel.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Panel;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Panel() {
}
$h_Ltrivalibs_graphics_painter_Panel.prototype = $p;
$p.iQ = (function() {
  if ((this.fZ === 0)) {
    var a = this.fq;
    var b = this.fp;
    var maxDim = ((a > b) ? a : b);
    if ((maxDim <= 0)) {
      return 1;
    } else {
      var a$1 = maxDim;
      return ((1 + $doubleToInt(((+Math.log(a$1)) / (+Math.log(2.0))))) | 0);
    }
  } else {
    return this.fZ;
  }
});
$p.iv = (function() {
  return (((this.eL.length | 0) === 0) ? [this.eM.fo] : this.eL);
});
$p.mZ = (function() {
  return (this.iv().length | 0);
});
$p.ht = (function() {
  var TextureViewBundle_this = this.H[0];
  return TextureViewBundle_this.ad[0];
});
$p.mG = (function() {
  var TextureViewBundle_this = this.H[1];
  return TextureViewBundle_this.ad[0];
});
$p.kw = (function() {
  return this.h4;
});
$p.mO = (function() {
  return this.fX;
});
$p.kP = (function(index) {
  return this.h5[index];
});
$p.mX = (function() {
  var t = this.ar[0];
  this.ar[0] = this.ar[1];
  this.ar[1] = t;
  var sv = this.H[0];
  this.H[0] = this.H[1];
  this.H[1] = sv;
  this.eK = ((1 + this.eK) | 0);
});
$p.ly = (function() {
  if (((!this.fS) && (this.fT !== null))) {
    this.fS = true;
    $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V(this);
  }
  return (this.fV ? this.fX : this.h4);
});
$p.mR = (function(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers) {
  if ((width !== (void 0))) {
    var v = (width | 0);
    this.ha = v;
  }
  if ((height !== (void 0))) {
    var v$1 = (height | 0);
    this.h9 = v$1;
  }
  if ((clearColor !== (void 0))) {
    this.h6 = ((clearColor === null) ? null : new $c_Ltrivalibs_graphics_math_cpu_Vec4(clearColor.gW, clearColor.gX, clearColor.gY, clearColor.gV));
  }
  if ((depthTest !== (void 0))) {
    var v$2 = (!(!depthTest));
    this.fY = v$2;
  }
  if ((multisample !== (void 0))) {
    var v$3 = (!(!multisample));
    this.fr = v$3;
  }
  if ((mips !== (void 0))) {
    if ((!(!mips))) {
      this.fZ = 0;
    }
  }
  if ((mipLevels !== (void 0))) {
    var v$5 = (mipLevels | 0);
    if ((v$5 > 0)) {
      this.fZ = v$5;
    }
  }
  var x$1 = ((formats === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy1$1__O__O(this, format) : formats);
  if ((x$1 !== (void 0))) {
    this.eL = x$1;
  }
  var x$2 = ((shapes === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy2$1__O__O(this, shape) : shapes);
  if ((x$2 !== (void 0))) {
    this.h8 = x$2;
  }
  var x$3 = ((layers === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy3$1__O__O(this, layer) : layers);
  if ((x$3 !== (void 0))) {
    this.aX = x$3;
  }
  if ((((this.eL.length | 0) > 1) && $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z(this))) {
    throw new $c_sjs_js_JavaScriptException(Error("Panel: MRT (multiple formats) cannot host auto-pong layers. Chain a single-format panel for post-processing instead.")).aT;
  }
  return this;
});
$p.lH = (function(canvasW, canvasH) {
  var targetW = ((this.ha === 0) ? canvasW : this.ha);
  var targetH = ((this.h9 === 0) ? canvasH : this.h9);
  if (((targetW !== this.fq) || (targetH !== this.fp))) {
    var d = 0;
    while ((d < (this.ar.length | 0))) {
      this.ar[d].destroy();
      d = ((1 + d) | 0);
    }
    d = 0;
    while ((d < (this.fU.length | 0))) {
      this.fU[d].destroy();
      d = ((1 + d) | 0);
    }
    this.fq = targetW;
    this.fp = targetH;
    var mipCount = this.iQ();
    var fmts = this.iv();
    var hasPong = $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z(this);
    this.ar = [];
    this.H = [];
    this.fU = [];
    this.h5 = [];
    var i = 0;
    while ((i < (fmts.length | 0))) {
      var fmt = fmts[i];
      var $x_1 = this.eM.e;
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
      this.ar.push(tex);
      this.H.push($p_Ltrivalibs_graphics_painter_Panel__buildViews__Ltrivalibs_graphics_painter_GPUTexture__I__Ltrivalibs_graphics_painter_TextureViewBundle(this, tex, mipCount));
      if (this.fr) {
        var $x_2 = this.eM.e;
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
        this.fU.push(msaaTex);
        this.h5.push(msaaTex.createView());
      }
      i = ((1 + i) | 0);
    }
    if (hasPong) {
      var $x_3 = this.eM.e;
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
      this.ar.push(pongTex);
      this.H.push($p_Ltrivalibs_graphics_painter_Panel__buildViews__Ltrivalibs_graphics_painter_GPUTexture__I__Ltrivalibs_graphics_painter_TextureViewBundle(this, pongTex, mipCount));
    }
    if (this.fY) {
      $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V(this);
    }
    this.eK = ((1 + this.eK) | 0);
  }
});
var $d_Ltrivalibs_graphics_painter_Panel = new $TypeData().i($c_Ltrivalibs_graphics_painter_Panel, "trivalibs.graphics.painter.Panel", ({
  ey: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Shade(id, shaderModule, vertexBufferLayout, valueBindGroupLayout, panelBindGroupLayout, pipelineLayout, isLayer, uniformIndices, panelIndices) {
  this.k1 = 0;
  this.hb = null;
  this.i3 = null;
  this.i2 = null;
  this.i0 = null;
  this.k2 = null;
  this.t = null;
  this.i1 = null;
  this.k1 = id;
  this.hb = shaderModule;
  this.i3 = vertexBufferLayout;
  this.i2 = valueBindGroupLayout;
  this.i0 = panelBindGroupLayout;
  this.k2 = pipelineLayout;
  this.t = uniformIndices;
  this.i1 = panelIndices;
}
$p = $c_Ltrivalibs_graphics_painter_Shade.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Shade;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Shade() {
}
$h_Ltrivalibs_graphics_painter_Shade.prototype = $p;
var $d_Ltrivalibs_graphics_painter_Shade = new $TypeData().i($c_Ltrivalibs_graphics_painter_Shade, "trivalibs.graphics.painter.Shade", ({
  ez: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_TextureViewBundle(perMip, sampling) {
  this.ad = null;
  this.k3 = null;
  this.ad = perMip;
  this.k3 = sampling;
}
$p = $c_Ltrivalibs_graphics_painter_TextureViewBundle.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_TextureViewBundle;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_TextureViewBundle() {
}
$h_Ltrivalibs_graphics_painter_TextureViewBundle.prototype = $p;
var $d_Ltrivalibs_graphics_painter_TextureViewBundle = new $TypeData().i($c_Ltrivalibs_graphics_painter_TextureViewBundle, "trivalibs.graphics.painter.TextureViewBundle", ({
  eB: 1
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
$p.lW = (function() {
  return window.navigator.gpu;
});
$p.lV = (function(canvas) {
  return canvas.getContext("webgpu");
});
var $d_Ltrivalibs_graphics_painter_WebGPU$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_WebGPU$, "trivalibs.graphics.painter.WebGPU$", ({
  eC: 1
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
  this.hd = 0;
  this.hd = 0;
}
$p = $c_Ltrivalibs_graphics_painter_panel$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_panel$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_panel$package$() {
}
$h_Ltrivalibs_graphics_painter_panel$package$.prototype = $p;
var $d_Ltrivalibs_graphics_painter_panel$package$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_panel$package$, "trivalibs.graphics.painter.panel$package$", ({
  eD: 1
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
  this.k4 = null;
  this.Q = null;
  this.i7 = 0.0;
  this.k5 = 0.0;
  this.k4 = cam;
  this.Q = in$1;
  this.i7 = sensitivity;
  this.k5 = speed;
}
$p = $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController() {
}
$h_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController.prototype = $p;
$p.eV = (function(tpf) {
  var dist = ((this.k5 * tpf) / 1000.0);
  var forward = 0.0;
  if (((this.Q.V.al("KeyW") || this.Q.V.al("ArrowUp")) || (this.Q.ik.eR && (this.Q.V.kR() === 1)))) {
    forward = (forward + dist);
  }
  if ((((this.Q.V.al("KeyS") || this.Q.V.al("ArrowDown")) || this.Q.V.ma(2)) || (this.Q.V.kR() >= 2))) {
    forward = (forward - dist);
  }
  var left = 0.0;
  if ((this.Q.V.al("KeyA") || this.Q.V.al("ArrowLeft"))) {
    left = (left + dist);
  }
  if ((this.Q.V.al("KeyD") || this.Q.V.al("ArrowRight"))) {
    left = (left - dist);
  }
  var up = 0.0;
  if (this.Q.V.al("Space")) {
    up = (up + dist);
  }
  if ((this.Q.V.al("ShiftLeft") || this.Q.V.al("ShiftRight"))) {
    up = (up - dist);
  }
  var drag = this.Q.ij.lx();
  var deltaH = (((+drag.af) * this.i7) / 1000.0);
  var deltaV = (((+drag.a8) * this.i7) / 1000.0);
  this.k4.my(forward, left, up, deltaH, deltaV);
});
var $d_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController = new $TypeData().i($c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController, "trivalibs.graphics.scene.BasicFirstPersonCameraController", ({
  eE: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_scene_PerspectiveCamera(fov, aspect, near, far, rotH, rotV, pos, proj) {
  this.eN = 0.0;
  this.fs = 0.0;
  this.fu = 0.0;
  this.ft = 0.0;
  this.a5 = 0.0;
  this.aJ = 0.0;
  this.T = null;
  this.i8 = null;
  this.eN = fov;
  this.fs = aspect;
  this.fu = near;
  this.ft = far;
  this.a5 = rotH;
  this.aJ = rotV;
  this.T = pos;
  this.i8 = proj;
}
$p = $c_Ltrivalibs_graphics_scene_PerspectiveCamera.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_PerspectiveCamera;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_PerspectiveCamera() {
}
$h_Ltrivalibs_graphics_scene_PerspectiveCamera.prototype = $p;
$p.iS = (function(fov, aspect, near, far, rotH, rotV, pos) {
  var needsProj = ((((fov !== this.eN) || (aspect !== this.fs)) || (near !== this.fu)) || (far !== this.ft));
  this.eN = fov;
  this.fs = aspect;
  this.fu = near;
  this.ft = far;
  if ((rotH !== this.a5)) {
    this.a5 = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().iW(rotH);
  }
  if ((rotV !== this.aJ)) {
    this.aJ = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().iV(rotV);
  }
  this.T = pos;
  if (needsProj) {
    this.i8 = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($m_Ltrivalibs_graphics_math_cpu_Mat4$(), $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().kX(this.eN, this.fs), aspect, near, far);
  }
});
$p.my = (function(forward, left, up, deltaH, deltaV) {
  if ((deltaH !== 0.0)) {
    this.a5 = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().iW((this.a5 + deltaH));
  }
  if ((deltaV !== 0.0)) {
    this.aJ = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().iV((this.aJ + deltaV));
  }
  if ((up !== 0.0)) {
    this.T = new $c_Ltrivalibs_graphics_math_cpu_Vec3(this.T.r, (this.T.m + up), this.T.o);
  }
  if ((forward !== 0.0)) {
    var $x_4 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().j();
    var $x_3 = this.T;
    var $x_2 = $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$();
    var $x_1 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().j();
    var p$proxy1 = this.a5;
    var x$1 = (-(+Math.sin(p$proxy1)));
    var p$proxy2 = this.a5;
    this.T = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($x_4, $x_3, $x_2, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($x_1, new $c_Ltrivalibs_graphics_math_cpu_Vec3(x$1, 0.0, (-(+Math.cos(p$proxy2)))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), forward));
  }
  if ((left !== 0.0)) {
    var $x_9 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().j();
    var $x_8 = this.T;
    var $x_7 = $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$();
    var $x_6 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().j();
    var p$proxy3 = this.a5;
    var $x_5 = Math.cos(p$proxy3);
    var p$proxy4 = this.a5;
    this.T = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($x_9, $x_8, $x_7, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($x_6, new $c_Ltrivalibs_graphics_math_cpu_Vec3((-(+$x_5)), 0.0, (+Math.sin(p$proxy4))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), left));
  }
});
$p.n3 = (function() {
  return new $c_Ltrivalibs_graphics_scene_Transform(this.T, $f_Ltrivalibs_graphics_math_cpu_QuatImmutableOps__quatMul__O__Ltrivalibs_graphics_math_Vec4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$(), $m_Ltrivalibs_graphics_math_cpu_Quat$().gh(this.a5), $m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$(), $m_Ltrivalibs_graphics_math_cpu_Quat$().lT(this.aJ)), new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0));
});
$p.n8 = (function() {
  var $x_1 = $m_Ltrivalibs_graphics_math_cpu_Mat4$().kE();
  var t = this.n3();
  return $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($x_1, $m_Ltrivalibs_graphics_math_cpu_Mat4$().eS(t.b0, t.aY, t.aZ), $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
});
var $d_Ltrivalibs_graphics_scene_PerspectiveCamera = new $TypeData().i($c_Ltrivalibs_graphics_scene_PerspectiveCamera, "trivalibs.graphics.scene.PerspectiveCamera", ({
  eF: 1
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
$p.iW = (function(a) {
  var r = (a % 6.283185307179586);
  return ((r < 0.0) ? (r + 6.283185307179586) : r);
});
$p.iV = (function(a) {
  return ((a < (-1.5707963267948966)) ? (-1.5707963267948966) : ((a > 1.5707963267948966) ? 1.5707963267948966 : a));
});
$p.kX = (function(fov, aspect) {
  var p$proxy5 = (0.5 * fov);
  var p$proxy6 = ((+Math.tan(p$proxy5)) / (+Math.min(aspect, 1.0)));
  return (2.0 * (+Math.atan(p$proxy6)));
});
$p.le = (function(fov, aspect, near, far, rotH, rotV, pos) {
  var proj = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($m_Ltrivalibs_graphics_math_cpu_Mat4$(), this.kX(fov, aspect), aspect, near, far);
  return new $c_Ltrivalibs_graphics_scene_PerspectiveCamera(fov, aspect, near, far, this.iW(rotH), this.iV(rotV), pos, proj);
});
var $d_Ltrivalibs_graphics_scene_PerspectiveCamera$ = new $TypeData().i($c_Ltrivalibs_graphics_scene_PerspectiveCamera$, "trivalibs.graphics.scene.PerspectiveCamera$", ({
  eG: 1
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
  this.b0 = null;
  this.aY = null;
  this.aZ = null;
  this.b0 = translation;
  this.aY = rotation;
  this.aZ = scale;
}
$p = $c_Ltrivalibs_graphics_scene_Transform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_Transform;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_Transform() {
}
$h_Ltrivalibs_graphics_scene_Transform.prototype = $p;
var $d_Ltrivalibs_graphics_scene_Transform = new $TypeData().i($c_Ltrivalibs_graphics_scene_Transform, "trivalibs.graphics.scene.Transform", ({
  eH: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_scene_scene\uff3fobject$package$() {
}
$p = $c_Ltrivalibs_graphics_scene_scene\uff3fobject$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_scene\uff3fobject$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_scene\uff3fobject$package$() {
}
$h_Ltrivalibs_graphics_scene_scene\uff3fobject$package$.prototype = $p;
$p.X = (function(m) {
  return $f_Ltrivalibs_graphics_math_Mat3ImmutableOps__transpose__O__Ltrivalibs_graphics_math_Mat3Base__O($m_Ltrivalibs_graphics_math_cpu_Mat3$().kC(), $f_Ltrivalibs_graphics_math_Mat3ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat3Base__O($m_Ltrivalibs_graphics_math_cpu_Mat3$().kC(), $m_Ltrivalibs_graphics_math_cpu_Mat3$().lU(m), $m_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$()), $m_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$());
});
var $d_Ltrivalibs_graphics_scene_scene\uff3fobject$package$ = new $TypeData().i($c_Ltrivalibs_graphics_scene_scene\uff3fobject$package$, "trivalibs.graphics.scene.scene_object$package$", ({
  eI: 1
}));
var $n_Ltrivalibs_graphics_scene_scene\uff3fobject$package$;
function $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$() {
  if ((!$n_Ltrivalibs_graphics_scene_scene\uff3fobject$package$)) {
    $n_Ltrivalibs_graphics_scene_scene\uff3fobject$package$ = new $c_Ltrivalibs_graphics_scene_scene\uff3fobject$package$();
  }
  return $n_Ltrivalibs_graphics_scene_scene\uff3fobject$package$;
}
function $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($thiz, builtins) {
  var s = "";
  var i = 0;
  while ((i < (builtins.length | 0))) {
    var b = builtins[i];
    s = ((s + ((((", @builtin(" + b.aD) + ") ") + b.aM) + ": ")) + b.aE);
    i = ((1 + i) | 0);
  }
  return s;
}
function $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($thiz, structName, locNames, locTypes, builtins) {
  var array$1 = $m_sjs_js_ArrayOps$().l2($m_sjs_js_ArrayOps$().l1(locNames, new $c_sjs_js_WrappedArray(locTypes)));
  var len = (array$1.length | 0);
  var res = new Array(len);
  var i = 0;
  while ((i < len)) {
    var $x_2 = i;
    var x0 = array$1[i];
    matchResult3: {
      var $x_1;
      if ((x0 !== null)) {
        var x11 = x0.af;
        if ((x11 !== null)) {
          var name = x11.af;
          var typ = x11.a8;
          var $x_1 = (((((("  @location(" + (x0.a8 | 0)) + ") ") + name) + ": ") + typ) + ",");
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
        var name$1 = x0$1.aM;
        var builtin = x0$1.aD;
        var typ$1 = x0$1.aE;
        var $x_3 = (((((("  @builtin(" + builtin) + ") ") + name$1) + ": ") + typ$1) + ",");
        break matchResult4;
      }
      throw new $c_s_MatchError(x0$1);
    }
    res$1[$x_4] = $x_3;
    i$1 = ((1 + i$1) | 0);
  }
  var allFields = $m_sjs_js_ArrayOpsCommon$().p(res, res$1);
  return (((allFields.length | 0) === 0) ? "" : (((("struct " + structName) + " {\n") + allFields.join("\n")) + "\n}"));
}
function $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($thiz, groupIdx, names, types) {
  var array$1 = $m_sjs_js_ArrayOps$().l2($m_sjs_js_ArrayOps$().l1(names, new $c_sjs_js_WrappedArray(types)));
  var len = (array$1.length | 0);
  var res = new Array(len);
  var i = 0;
  while ((i < len)) {
    var $x_3 = i;
    var x0 = array$1[i];
    matchResult5: {
      var $x_2;
      if ((x0 !== null)) {
        var x20 = x0.af;
        if ((x20 !== null)) {
          var name = x20.af;
          var typ = x20.a8;
          var bindingIdx = (x0.a8 | 0);
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
  eK: 1
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
  this.g5 = null;
  this.g5 = target;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_AssignTarget.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_AssignTarget;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_AssignTarget() {
}
$h_Ltrivalibs_graphics_shader_dsl_AssignTarget.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_AssignTarget = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_AssignTarget, "trivalibs.graphics.shader.dsl.AssignTarget", ({
  eL: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_FnRegistry() {
  this.i9 = null;
  this.i9 = [];
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FnRegistry() {
}
$h_Ltrivalibs_graphics_shader_dsl_FnRegistry.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_FnRegistry = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FnRegistry, "trivalibs.graphics.shader.dsl.FnRegistry", ({
  eM: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$() {
  this.eO = null;
  this.eO = null;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FnRegistry$() {
}
$h_Ltrivalibs_graphics_shader_dsl_FnRegistry$.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_FnRegistry$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FnRegistry$, "trivalibs.graphics.shader.dsl.FnRegistry$", ({
  eN: 1
}));
var $n_Ltrivalibs_graphics_shader_dsl_FnRegistry$;
function $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$() {
  if ((!$n_Ltrivalibs_graphics_shader_dsl_FnRegistry$)) {
    $n_Ltrivalibs_graphics_shader_dsl_FnRegistry$ = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$();
  }
  return $n_Ltrivalibs_graphics_shader_dsl_FnRegistry$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(in$1, out, bindings, locals, textures) {
  this.g6 = null;
  this.k6 = null;
  this.g6 = in$1;
  this.k6 = out;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FragmentCtx() {
}
$h_Ltrivalibs_graphics_shader_dsl_FragmentCtx.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_FragmentCtx = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FragmentCtx, "trivalibs.graphics.shader.dsl.FragmentCtx", ({
  eO: 1
}));
function $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, data) {
  if ((!(!(!(!(!$thiz.ia.hasOwnProperty(data.name))))))) {
    var dict = $thiz.ia;
    var key = data.name;
    dict[key] = true;
    var array = data.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, array[i]);
      i = ((1 + i) | 0);
    }
    $thiz.ib.push(data.src);
  }
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_Program() {
  this.id = null;
  this.ic = null;
  this.ib = null;
  this.ia = null;
  this.id = "";
  this.ic = "";
  this.ib = [];
  this.ia = ({});
}
$p = $c_Ltrivalibs_graphics_shader_dsl_Program.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_Program;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_Program() {
}
$h_Ltrivalibs_graphics_shader_dsl_Program.prototype = $p;
$p.m3 = (function() {
  return this.ib.join("\n\n");
});
var $d_Ltrivalibs_graphics_shader_dsl_Program = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_Program, "trivalibs.graphics.shader.dsl.Program", ({
  eP: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(in$1, out, bindings, locals, textures) {
  this.hf = null;
  this.hg = null;
  this.he = null;
  this.hf = in$1;
  this.hg = out;
  this.he = bindings;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_VertexCtx.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_VertexCtx;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_VertexCtx() {
}
$h_Ltrivalibs_graphics_shader_dsl_VertexCtx.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_VertexCtx = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_VertexCtx, "trivalibs.graphics.shader.dsl.VertexCtx", ({
  eU: 1
}));
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
$p.kv = (function(device, bindGroupLayouts) {
  return device.createPipelineLayout(({
    "bindGroupLayouts": bindGroupLayouts
  }));
});
var $d_Ltrivalibs_graphics_shader_layouts$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_layouts$, "trivalibs.graphics.shader.layouts$", ({
  eW: 1
}));
var $n_Ltrivalibs_graphics_shader_layouts$;
function $m_Ltrivalibs_graphics_shader_layouts$() {
  if ((!$n_Ltrivalibs_graphics_shader_layouts$)) {
    $n_Ltrivalibs_graphics_shader_layouts$ = new $c_Ltrivalibs_graphics_shader_layouts$();
  }
  return $n_Ltrivalibs_graphics_shader_layouts$;
}
/** @constructor */
function $c_Ltrivalibs_utils_animation_Animator(frame, onFpsCallback) {
  this.k9 = null;
  this.ih = null;
  this.g7 = 0;
  this.g8 = 0.0;
  this.hh = 0.0;
  this.hi = 0.0;
  this.ii = false;
  this.k9 = frame;
  this.ih = onFpsCallback;
  this.g7 = 0;
  this.g8 = 0.0;
  this.hh = 0.0;
  this.hi = (-1.0);
  this.ii = false;
}
$p = $c_Ltrivalibs_utils_animation_Animator.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_animation_Animator;
/** @constructor */
function $h_Ltrivalibs_utils_animation_Animator() {
}
$h_Ltrivalibs_utils_animation_Animator.prototype = $p;
$p.kS = (function(time) {
  this.g7 = ((1 + this.g7) | 0);
  if ((this.g8 === 0.0)) {
    this.g8 = time;
    this.hh = time;
  }
  var fpsElapsed = (time - this.g8);
  if ((fpsElapsed >= 1000.0)) {
    var fps = ((1000.0 * this.g7) / fpsElapsed);
    if (((time - this.hh) >= 1000.0)) {
      var args$proxy1 = $m_sr_ScalaRunTime$().kY(new ($d_sjs_js_Any.r().C)([(fps.toFixed(1) + " FPS")]));
      console.log(...$m_sjsr_Compat$().kV(args$proxy1));
      this.hh = time;
      if ((this.ih !== null)) {
        (0, this.ih)(fps);
      }
    }
    this.g7 = 0;
    this.g8 = time;
  }
  var delta = ((this.hi < 0.0) ? 0.0 : (time - this.hi));
  this.hi = time;
  (0, this.k9)(delta);
  if (this.ii) {
    requestAnimationFrame($m_sjs_js_Any$().gg(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2) => {
      this.kS((+v1$2));
    }))));
  }
});
$p.mV = (function() {
  this.ii = true;
  return requestAnimationFrame($m_sjs_js_Any$().gg(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2) => {
    this.kS((+v1$2));
  }))));
});
var $d_Ltrivalibs_utils_animation_Animator = new $TypeData().i($c_Ltrivalibs_utils_animation_Animator, "trivalibs.utils.animation.Animator", ({
  eZ: 1
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
$p.ld = (function(frame) {
  var animator = new $c_Ltrivalibs_utils_animation_Animator(frame, null);
  animator.mV();
  return animator;
});
var $d_Ltrivalibs_utils_animation_animate$package$ = new $TypeData().i($c_Ltrivalibs_utils_animation_animate$package$, "trivalibs.utils.animation.animate$package$", ({
  f0: 1
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
  this.V = null;
  this.ij = null;
  this.ik = null;
  this.V = input;
  this.ij = drag;
  this.ik = hold;
}
$p = $c_Ltrivalibs_utils_events_CanvasInput.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_CanvasInput;
/** @constructor */
function $h_Ltrivalibs_utils_events_CanvasInput() {
}
$h_Ltrivalibs_utils_events_CanvasInput.prototype = $p;
$p.eV = (function(tpf) {
  this.ij.eV(tpf);
  this.ik.eV(tpf);
});
var $d_Ltrivalibs_utils_events_CanvasInput = new $TypeData().i($c_Ltrivalibs_utils_events_CanvasInput, "trivalibs.utils.events.CanvasInput", ({
  f1: 1
}));
function $ct_Ltrivalibs_utils_events_DragGesture__F0__D__D__($thiz, pointersOf, glideMinSpeed, glideHalfLife) {
  $thiz.kc = pointersOf;
  $thiz.kb = glideHalfLife;
  $thiz.fv = null;
  $thiz.im = 0.0;
  $thiz.io = 0.0;
  $thiz.eP = 0.0;
  $thiz.eQ = 0.0;
  $thiz.ai = 0.0;
  $thiz.aj = 0.0;
  $thiz.il = (glideHalfLife > 0.0);
  var s = (glideMinSpeed / 1000.0);
  $thiz.ka = ((s < 0.001) ? 0.001 : s);
  return $thiz;
}
function $ct_Ltrivalibs_utils_events_DragGesture__Ltrivalibs_utils_events_InputState__D__D__($thiz, input, glideMinSpeed, glideHalfLife) {
  $ct_Ltrivalibs_utils_events_DragGesture__F0__D__D__($thiz, $ps_Ltrivalibs_utils_events_DragGesture__DragGesture$superArg$1__Ltrivalibs_utils_events_InputState__D__D__F0(input, glideMinSpeed, glideHalfLife), glideMinSpeed, glideHalfLife);
  return $thiz;
}
function $ps_Ltrivalibs_utils_events_DragGesture__DragGesture$superArg$1__Ltrivalibs_utils_events_InputState__D__D__F0(input, glideMinSpeed, glideHalfLife) {
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => input.ae));
}
/** @constructor */
function $c_Ltrivalibs_utils_events_DragGesture() {
  this.kc = null;
  this.kb = 0.0;
  this.fv = null;
  this.im = 0.0;
  this.io = 0.0;
  this.eP = 0.0;
  this.eQ = 0.0;
  this.ai = 0.0;
  this.aj = 0.0;
  this.il = false;
  this.ka = 0.0;
}
$p = $c_Ltrivalibs_utils_events_DragGesture.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_DragGesture;
/** @constructor */
function $h_Ltrivalibs_utils_events_DragGesture() {
}
$h_Ltrivalibs_utils_events_DragGesture.prototype = $p;
$p.lx = (function() {
  return new $c_T2(this.eP, this.eQ);
});
$p.eV = (function(tpf) {
  var d = $m_Ltrivalibs_utils_events_gestures$package$().kx(this.kc.gf());
  if ((d === null)) {
    this.fv = null;
    if (this.il) {
      var p$proxy1 = ((this.ai * this.ai) + (this.aj * this.aj));
      var $x_1 = ((+Math.sqrt(p$proxy1)) >= this.ka);
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      var e$proxy1 = (tpf / this.kb);
      var f = (+Math.pow(0.5, e$proxy1));
      this.ai = (this.ai * f);
      this.aj = (this.aj * f);
      this.eP = (this.ai * tpf);
      this.eQ = (this.aj * tpf);
    } else {
      this.ai = 0.0;
      this.aj = 0.0;
      this.eP = 0.0;
      this.eQ = 0.0;
    }
  } else {
    if ((((this.fv !== null) && (d.as !== null)) && ((+this.fv) === (+d.as)))) {
      this.eP = (d.fx - this.im);
      this.eQ = (d.fy - this.io);
      if ((this.il && (tpf > 0.0))) {
        var e$proxy2 = (tpf / 40.0);
        var k = (1.0 - (+Math.pow(0.5, e$proxy2)));
        this.ai = (this.ai + (((this.eP / tpf) - this.ai) * k));
        this.aj = (this.aj + (((this.eQ / tpf) - this.aj) * k));
      }
    } else {
      if ((this.fv === null)) {
        this.ai = 0.0;
        this.aj = 0.0;
      }
      this.eP = 0.0;
      this.eQ = 0.0;
    }
    this.fv = d.as;
    this.im = d.fx;
    this.io = d.fy;
  }
});
var $d_Ltrivalibs_utils_events_DragGesture = new $TypeData().i($c_Ltrivalibs_utils_events_DragGesture, "trivalibs.utils.events.DragGesture", ({
  f2: 1
}));
function $ct_Ltrivalibs_utils_events_HoldGesture__F0__D__D__($thiz, pointersOf, holdDelay, holdRadius) {
  $thiz.kf = pointersOf;
  $thiz.kd = holdDelay;
  $thiz.ke = holdRadius;
  $thiz.ga = null;
  $thiz.fw = 0.0;
  $thiz.gb = false;
  $thiz.g9 = false;
  $thiz.eR = false;
  return $thiz;
}
function $ct_Ltrivalibs_utils_events_HoldGesture__Ltrivalibs_utils_events_InputState__D__D__($thiz, input, holdDelay, holdRadius) {
  $ct_Ltrivalibs_utils_events_HoldGesture__F0__D__D__($thiz, $ps_Ltrivalibs_utils_events_HoldGesture__HoldGesture$superArg$1__Ltrivalibs_utils_events_InputState__D__D__F0(input, holdDelay, holdRadius), holdDelay, holdRadius);
  return $thiz;
}
function $ps_Ltrivalibs_utils_events_HoldGesture__HoldGesture$superArg$1__Ltrivalibs_utils_events_InputState__D__D__F0(input, holdDelay, holdRadius) {
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => input.ae));
}
/** @constructor */
function $c_Ltrivalibs_utils_events_HoldGesture() {
  this.kf = null;
  this.kd = 0.0;
  this.ke = 0.0;
  this.ga = null;
  this.fw = 0.0;
  this.gb = false;
  this.g9 = false;
  this.eR = false;
}
$p = $c_Ltrivalibs_utils_events_HoldGesture.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_HoldGesture;
/** @constructor */
function $h_Ltrivalibs_utils_events_HoldGesture() {
}
$h_Ltrivalibs_utils_events_HoldGesture.prototype = $p;
$p.eV = (function(tpf) {
  var d = $m_Ltrivalibs_utils_events_gestures$package$().kx(this.kf.gf());
  if ((d === null)) {
    this.ga = null;
    this.fw = 0.0;
    this.gb = false;
    this.g9 = false;
    this.eR = false;
  } else {
    var pid = d.as;
    if ((!(((this.ga !== null) && (pid !== null)) && ((+this.ga) === (+pid))))) {
      this.ga = pid;
      this.fw = 0.0;
      this.gb = false;
      this.g9 = false;
    }
    this.fw = (this.fw + tpf);
    if (this.g9) {
      this.eR = true;
    } else if ((this.fw < this.kd)) {
      var dx = (d.fx - d.iq);
      var dy = (d.fy - d.ir);
      var p$proxy2 = ((dx * dx) + (dy * dy));
      if (((+Math.sqrt(p$proxy2)) > this.ke)) {
        this.gb = true;
      }
      this.eR = false;
    } else if (this.gb) {
      this.eR = false;
    } else {
      this.g9 = true;
      this.eR = true;
    }
  }
});
var $d_Ltrivalibs_utils_events_HoldGesture = new $TypeData().i($c_Ltrivalibs_utils_events_HoldGesture, "trivalibs.utils.events.HoldGesture", ({
  f3: 1
}));
function $p_Ltrivalibs_utils_events_InputState__freeSlot__Ltrivalibs_utils_events_Pointer($thiz) {
  var i = 0;
  while ((i < ($thiz.ge.length | 0))) {
    if (($thiz.ge[i].as === null)) {
      return $thiz.ge[i];
    }
    i = ((1 + i) | 0);
  }
  return null;
}
function $p_Ltrivalibs_utils_events_InputState__slotById__D__Ltrivalibs_utils_events_Pointer($thiz, id) {
  var i = 0;
  while ((i < ($thiz.ae.length | 0))) {
    var p = $thiz.ae[i];
    if (((p.as !== null) && ((+p.as) === id))) {
      return p;
    }
    i = ((1 + i) | 0);
  }
  return null;
}
function $p_Ltrivalibs_utils_events_InputState__removePointer__D__V($thiz, id) {
  var p = $p_Ltrivalibs_utils_events_InputState__slotById__D__Ltrivalibs_utils_events_Pointer($thiz, id);
  if ((p !== null)) {
    p.as = null;
    var idx = $m_sjs_js_ArrayOps$().kF($thiz.ae, p, 0);
    if ((idx >= 0)) {
      $thiz.ae.splice(idx, 1);
    }
  }
}
function $p_Ltrivalibs_utils_events_InputState__install__V($thiz) {
  var i = 0;
  while ((i < $thiz.kk)) {
    $thiz.ge.push(new $c_Ltrivalibs_utils_events_Pointer());
    i = ((1 + i) | 0);
  }
  $m_Ltrivalibs_utils_events_keyboard$package$().mc($thiz.gc, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((k$3) => {
    if ((!(!(!(!(!$thiz.gd.hasOwnProperty(k$3))))))) {
      var value$proxy1 = (+Date.now());
      $thiz.gd[k$3] = value$proxy1;
      if ((!($thiz.W === (void 0)))) {
        var m$proxy3 = $thiz.W;
        m$proxy3();
      }
    }
  })), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((k$3$1) => {
    delete $thiz.gd[k$3$1];
    if ((!($thiz.W === (void 0)))) {
      var m$proxy4 = $thiz.W;
      m$proxy4();
    }
  })), false);
  $m_Ltrivalibs_utils_events_pointer$package$().mE($thiz.kh, $m_Ltrivalibs_utils_events_pointer$package$().mF(), new $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078(((v1$2, v2$2, v3$2, v4$2, v5$2) => {
    var button = (v1$2 | 0);
    var id = (+v2$2);
    var x$1 = (+v3$2);
    var y = (+v4$2);
    if ($thiz.kj) {
      $thiz.gc.focus();
    }
    var key$proxy3 = ("" + button);
    var value$proxy2 = (+Date.now());
    $thiz.hj[key$proxy3] = value$proxy2;
    var slot = $p_Ltrivalibs_utils_events_InputState__freeSlot__Ltrivalibs_utils_events_Pointer($thiz);
    if ((slot !== null)) {
      slot.as = id;
      slot.ip = button;
      (+Date.now());
      slot.iq = x$1;
      slot.ir = y;
      slot.fx = x$1;
      slot.fy = y;
      $thiz.ae.push(slot);
      ($thiz.ae.length | 0);
    }
    if ((!($thiz.W === (void 0)))) {
      var m$proxy5 = $thiz.W;
      m$proxy5();
    }
  })), new $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(((v1$2$1, v2$2$1, v3$2$1) => {
    var id$1 = (+v1$2$1);
    var x$2 = (+v2$2$1);
    var y$1 = (+v3$2$1);
    var p = $p_Ltrivalibs_utils_events_InputState__slotById__D__Ltrivalibs_utils_events_Pointer($thiz, id$1);
    if ((p !== null)) {
      p.fx = x$2;
      p.fy = y$1;
      if ((($thiz.ae.length | 0) > 0)) {
        $thiz.ae[0];
      }
    }
  })), new $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(((v1$2$2, v2$2$2, v3$2$2, v4$2$1) => {
    var button$1 = (v1$2$2 | 0);
    var id$2 = (+v2$2$2);
    delete $thiz.hj[("" + button$1)];
    $p_Ltrivalibs_utils_events_InputState__removePointer__D__V($thiz, id$2);
    if ((!($thiz.W === (void 0)))) {
      var m$proxy6 = $thiz.W;
      m$proxy6();
    }
  })), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2$3) => {
    $p_Ltrivalibs_utils_events_InputState__removePointer__D__V($thiz, (+v1$2$3));
    if ((!($thiz.W === (void 0)))) {
      var m$proxy7 = $thiz.W;
      m$proxy7();
    }
  })), $thiz.kl);
  $thiz.gc.addEventListener("focus", $thiz.ki);
  $thiz.gc.addEventListener("blur", $thiz.kg);
}
/** @constructor */
function $c_Ltrivalibs_utils_events_InputState(el, keyTarget, suppressContextMenu, onActivity, focusOnPointerDown, maxPointers) {
  this.kh = null;
  this.gc = null;
  this.kl = false;
  this.W = null;
  this.kj = false;
  this.kk = 0;
  this.gd = null;
  this.hj = null;
  this.ge = null;
  this.ae = null;
  this.ki = null;
  this.kg = null;
  this.kh = el;
  this.gc = keyTarget;
  this.kl = suppressContextMenu;
  this.W = onActivity;
  this.kj = focusOnPointerDown;
  this.kk = maxPointers;
  this.gd = ({});
  this.hj = ({});
  this.ge = [];
  this.ae = [];
  if ($m_sr_BoxesRunTime$().b(keyTarget, window)) {
    (!(!document.hasFocus()));
  } else {
    $m_sr_BoxesRunTime$().b(keyTarget, document.activeElement);
  }
  this.ki = ((_$1$3) => {
    if ((!(this.W === (void 0)))) {
      var m$proxy1 = this.W;
      m$proxy1();
    }
  });
  this.kg = ((_$2$3) => {
    if ((!(this.W === (void 0)))) {
      var m$proxy2 = this.W;
      m$proxy2();
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
$p.al = (function(key) {
  return (!(!(!(!this.gd.hasOwnProperty(key)))));
});
$p.ma = (function(button) {
  var key$proxy7 = ("" + button);
  return (!(!(!(!this.hj.hasOwnProperty(key$proxy7)))));
});
$p.kR = (function() {
  return (this.ae.length | 0);
});
var $d_Ltrivalibs_utils_events_InputState = new $TypeData().i($c_Ltrivalibs_utils_events_InputState, "trivalibs.utils.events.InputState", ({
  f4: 1
}));
/** @constructor */
function $c_Ltrivalibs_utils_events_Pointer() {
  this.as = null;
  this.ip = 0;
  this.iq = 0.0;
  this.ir = 0.0;
  this.fx = 0.0;
  this.fy = 0.0;
  this.as = null;
  this.ip = 0;
  this.iq = 0.0;
  this.ir = 0.0;
  this.fx = 0.0;
  this.fy = 0.0;
}
$p = $c_Ltrivalibs_utils_events_Pointer.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_Pointer;
/** @constructor */
function $h_Ltrivalibs_utils_events_Pointer() {
}
$h_Ltrivalibs_utils_events_Pointer.prototype = $p;
var $d_Ltrivalibs_utils_events_Pointer = new $TypeData().i($c_Ltrivalibs_utils_events_Pointer, "trivalibs.utils.events.Pointer", ({
  f5: 1
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
$p.kx = (function(pointers) {
  var i = 0;
  while ((i < (pointers.length | 0))) {
    var p = pointers[i];
    if ((p.ip === 0)) {
      return p;
    }
    i = ((1 + i) | 0);
  }
  return null;
});
var $d_Ltrivalibs_utils_events_gestures$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_gestures$package$, "trivalibs.utils.events.gestures$package$", ({
  f6: 1
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
$p.m8 = (function(canvas, initialFocus, holdDelay, holdRadius, suppressContextMenu, onActivity, dragGlideHalfLife, dragGlideMinSpeed) {
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
  f7: 1
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
$p.mc = (function(el, onDown, onUp, keepDefault) {
  var down = ((e$3) => {
    var isTab = (e$3.code === "Tab");
    if (((!keepDefault) && (!isTab))) {
      e$3.preventDefault();
    }
    if ((!(!(!e$3.repeat)))) {
      onDown.F(e$3.code);
    }
  });
  var up = ((e$3$1) => {
    onUp.F(e$3$1.code);
  });
  el.addEventListener("keydown", down);
  el.addEventListener("keyup", up);
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    el.removeEventListener("keydown", down);
    el.removeEventListener("keyup", up);
  }));
});
var $d_Ltrivalibs_utils_events_keyboard$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_keyboard$package$, "trivalibs.utils.events.keyboard$package$", ({
  f8: 1
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
$p.mE = (function(el, moveTarget, onDown, onMove, onUp, onCancel, suppressContextMenu) {
  var downFn = ((e$3) => {
    onDown.lf((e$3.button | 0), (+e$3.pointerId), (+e$3.clientX), (+e$3.clientY), (!(!e$3.isPrimary)));
  });
  var moveFn = ((e$3$1) => {
    onMove.lh((+e$3$1.pointerId), (+e$3$1.clientX), (+e$3$1.clientY));
  });
  var upFn = ((e$3$2) => {
    onUp.lg((e$3$2.button | 0), (+e$3$2.pointerId), (+e$3$2.clientX), (+e$3$2.clientY));
  });
  var cancelFn = ((e$3$3) => {
    onCancel.F((+e$3$3.pointerId));
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
$p.mF = (function() {
  return window;
});
var $d_Ltrivalibs_utils_events_pointer$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_pointer$package$, "trivalibs.utils.events.pointer$package$", ({
  f9: 1
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
  this.hv = null;
  $n_jl_Character$ = this;
  this.hv = new $ac_I(new Int32Array([1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3558, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43504, 43600, 44016, 65296, 66720, 68912, 69734, 69872, 69942, 70096, 70384, 70736, 70864, 71248, 71360, 71472, 71904, 72016, 72784, 73040, 73120, 73552, 92768, 92864, 93008, 120782, 120792, 120802, 120812, 120822, 123200, 123632, 124144, 125264, 130032]));
}
$p = $c_jl_Character$.prototype = new $h_O();
$p.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
}
$h_jl_Character$.prototype = $p;
$p.n1 = (function(codePoint) {
  if (((codePoint >>> 0) > 1114111)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return String.fromCodePoint(codePoint);
});
$p.lA = (function(codePoint, radix) {
  if ((codePoint < 256)) {
    var value = (((((codePoint - 48) | 0) >>> 0) <= 9) ? ((codePoint - 48) | 0) : (((((codePoint - 65) | 0) >>> 0) <= 25) ? ((codePoint - 55) | 0) : (((((codePoint - 97) | 0) >>> 0) <= 25) ? ((codePoint - 87) | 0) : (-1))));
  } else if (((((codePoint - 65313) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65303) | 0);
  } else if (((((codePoint - 65345) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65335) | 0);
  } else {
    var p = $m_ju_Arrays$().lp(this.hv, codePoint);
    var zeroCodePointIndex = ((p < 0) ? (((-2) - p) | 0) : p);
    if ((zeroCodePointIndex < 0)) {
      var value = (-1);
    } else {
      var v = ((codePoint - this.hv.a[zeroCodePointIndex]) | 0);
      var value = ((v > 9) ? (-1) : v);
    }
  }
  return ((value < radix) ? value : (-1));
});
var $d_jl_Character$ = new $TypeData().i($c_jl_Character$, "java.lang.Character$", ({
  aV: 1,
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
$p.gz = (function(s) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s) + "\""));
});
$p.mb = (function(s, radix, overflowBarrier) {
  if ((s === null)) {
    $m_jl_Integer$().gz(s);
  }
  var len = s.length;
  if ((len === 0)) {
    $m_jl_Integer$().gz(s);
  }
  var character = $m_jl_Character$();
  var firstChar = s.charCodeAt(0);
  var negative = (firstChar === 45);
  var sign = (negative ? (-1) : 0);
  var i = ((negative || (firstChar === 43)) ? 1 : 0);
  if ((i >= len)) {
    $m_jl_Integer$().gz(s);
  }
  var java$lang$IntFloatBits$Int32Box$$value = 0;
  java$lang$IntFloatBits$Int32Box$$value = 0;
  while ((i !== len)) {
    var x = character.lA(s.charCodeAt(i), radix);
    if (((x < 0) || ((java$lang$IntFloatBits$Int32Box$$value >>> 0) > (overflowBarrier >>> 0)))) {
      $m_jl_Integer$().gz(s);
    }
    var x$2 = java$lang$IntFloatBits$Int32Box$$value;
    var x$3 = Math.imul(x$2, radix);
    var v = ((x$3 + x) | 0);
    java$lang$IntFloatBits$Int32Box$$value = v;
    i = ((1 + i) | 0);
  }
  if (((java$lang$IntFloatBits$Int32Box$$value >>> 0) > (((2147483647 - sign) | 0) >>> 0))) {
    $m_jl_Integer$().gz(s);
  }
  return (((java$lang$IntFloatBits$Int32Box$$value ^ sign) - sign) | 0);
});
var $d_jl_Integer$ = new $TypeData().i($c_jl_Integer$, "java.lang.Integer$", ({
  b1: 1,
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
  $thiz.iY = s;
  if (writableStackTrace) {
    $thiz.lL();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.iY = null;
  }
  hl() {
    return this.iY;
  }
  lL() {
    var reference = ((this instanceof $c_sjs_js_JavaScriptException) ? this.aT : this);
    if ((Object.prototype.toString.call(reference) !== "[object Error]")) {
      if (((Error.captureStackTrace === (void 0)) || (!(!Object.isSealed(this))))) {
        new Error();
      } else {
        Error.captureStackTrace(this);
      }
    }
    return this;
  }
  k() {
    var className = $objectClassName(this);
    var message = this.hl();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  q() {
    return $c_O.prototype.q.call(this);
  }
  n(that) {
    return $c_O.prototype.n.call(this, that);
  }
  get "message"() {
    var m = this.hl();
    return ((m === null) ? "" : m);
  }
  get "name"() {
    return $objectClassName(this);
  }
  "toString"() {
    return this.k();
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
$p.k = (function() {
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
$p.na = (function(xs) {
  if ((xs === null)) {
    return null;
  } else if ((xs.a.length === 0)) {
    var this$2 = $m_scm_ArraySeq$();
    $m_s_reflect_ManifestFactory$ObjectManifest$();
    return this$2.ja;
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
$p.k = (function() {
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
$p.k = (function() {
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
$p.k = (function() {
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
$p.k = (function() {
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
$p.k = (function() {
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
$p.k = (function() {
  return "<function5>";
});
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.fg = 0;
  this.jk = 0;
  this.l3 = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.fg = $f_T__hashCode__I("Seq");
  this.jk = $f_T__hashCode__I("Map");
  $f_T__hashCode__I("Set");
  this.l3 = this.n4($m_sci_Nil$(), this.jk);
}
$p = $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$p.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $p;
$p.kT = (function(xs) {
  return ($is_sc_IndexedSeq(xs) ? this.m4(xs, this.fg) : ((xs instanceof $c_sci_List) ? this.md(xs, this.fg) : this.mC(xs, this.fg)));
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().i($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  d1: 1,
  d0: 1
}));
var $n_s_util_hashing_MurmurHash3$;
function $m_s_util_hashing_MurmurHash3$() {
  if ((!$n_s_util_hashing_MurmurHash3$)) {
    $n_s_util_hashing_MurmurHash3$ = new $c_s_util_hashing_MurmurHash3$();
  }
  return $n_s_util_hashing_MurmurHash3$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT(uv) {
  this.jl = null;
  this.jl = uv;
}
$p = $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT() {
}
$h_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT.prototype = $p;
var $d_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT, "trivalibs.graphics.buffers.UniformLayout$given_UniformLayout_T", ({
  d7: 1,
  d6: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$() {
}
$p = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$() {
}
$h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$.prototype = $p;
$p.i = (function(ref, value) {
  $f_Ltrivalibs_graphics_math_Mat3MutableOps__set__O__Ltrivalibs_graphics_math_Mat3Mutable__O__Ltrivalibs_graphics_math_Mat3Base__V($m_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$().mu(), ref, $m_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$(), value, $m_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$());
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Mat3_Mat3PaddedBuffer$", ({
  d8: 1,
  aE: 1
}));
var $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$;
function $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$() {
  if ((!$n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$)) {
    $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$ = new $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
  }
  return $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$;
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
$p.i = (function(ref, value) {
  $f_Ltrivalibs_graphics_math_Mat4MutableOps__set__O__Ltrivalibs_graphics_math_Mat4Mutable__O__Ltrivalibs_graphics_math_Mat4Base__V($m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$().lZ(), ref, $m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$(), value, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Mat4_Mat4Buffer$", ({
  d9: 1,
  aE: 1
}));
var $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$;
function $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$() {
  if ((!$n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$)) {
    $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$ = new $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
  }
  return $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$;
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
$p.fC = (function(t) {
  return new $c_T2(t.fk, t.fl);
});
var $d_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$, "trivalibs.graphics.geometry.FieldWriter$vec2Writer$", ({
  de: 1,
  aF: 1
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
$p.fC = (function(t) {
  return new $c_T3(t.r, t.m, t.o);
});
var $d_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$, "trivalibs.graphics.geometry.FieldWriter$vec3Writer$", ({
  df: 1,
  aF: 1
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
  this.jm = null;
  this.jm = x$1;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexLayout$named.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexLayout$named;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexLayout$named() {
}
$h_Ltrivalibs_graphics_geometry_VertexLayout$named.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_VertexLayout$named = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayout$named, "trivalibs.graphics.geometry.VertexLayout$named", ({
  dl: 1,
  dk: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons(x$1, x$2) {
  this.jn = null;
  this.jo = null;
  this.jn = x$1;
  this.jo = x$2;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons() {
}
$h_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons.prototype = $p;
$p.n5 = (function(t) {
  return $m_sr_Tuples$().kt(this.jn.fC(t.l(0)), this.jo.fC($m_sr_Tuples$().mY(t)));
});
$p.fC = (function(t) {
  return this.n5(t);
});
var $d_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons, "trivalibs.graphics.geometry.VertexLayoutHelper$cons", ({
  dm: 1,
  aG: 1
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
$p.fC = (function(t) {
  return $m_T$package$EmptyTuple$();
});
var $d_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$, "trivalibs.graphics.geometry.VertexLayoutHelper$nil$", ({
  dn: 1,
  aG: 1
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
  this.jq = 0;
  this.jq = idx$2;
}
$p = $c_Ltrivalibs_graphics_geometry_package$package$$anon$1.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_package$package$$anon$1;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_package$package$$anon$1() {
}
$h_Ltrivalibs_graphics_geometry_package$package$$anon$1.prototype = $p;
$p.aL = (function(t) {
  return t.l(this.jq);
});
var $d_Ltrivalibs_graphics_geometry_package$package$$anon$1 = new $TypeData().i($c_Ltrivalibs_graphics_geometry_package$package$$anon$1, "trivalibs.graphics.geometry.package$package$$anon$1", ({
  dt: 1,
  di: 1
}));
function $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D($thiz, v, other) {
  return (((v.r * other.r) + (v.m * other.m)) + (v.o * other.o));
}
function $f_Ltrivalibs_graphics_math_Vec3Base__length__O__D($thiz, v) {
  var p$proxy1 = $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D($thiz, v, v);
  return (+Math.sqrt(p$proxy1));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat3$() {
  this.jr = null;
  this.js = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat3$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat3$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat3$() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat3$.prototype = $p;
$p.kC = (function() {
  if ((!this.js)) {
    this.jr = $m_Ltrivalibs_graphics_math_cpu_Mat3$();
    this.js = true;
  }
  return this.jr;
});
$p.lU = (function(m) {
  return new $c_Ltrivalibs_graphics_math_cpu_Mat3(m.gM, m.gN, m.gO, m.gP, m.gQ, m.gR, m.gS, m.gT, m.gU);
});
var $d_Ltrivalibs_graphics_math_cpu_Mat3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat3$, "trivalibs.graphics.math.cpu.Mat3$", ({
  dN: 1,
  dw: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Mat3$;
function $m_Ltrivalibs_graphics_math_cpu_Mat3$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Mat3$)) {
    $n_Ltrivalibs_graphics_math_cpu_Mat3$ = new $c_Ltrivalibs_graphics_math_cpu_Mat3$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Mat3$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat4$() {
  this.jt = null;
  this.ju = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat4$() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat4$.prototype = $p;
$p.kE = (function() {
  if ((!this.ju)) {
    this.jt = $m_Ltrivalibs_graphics_math_cpu_Mat4$();
    this.ju = true;
  }
  return this.jt;
});
$p.eS = (function(t, r, s) {
  var x = r.ao;
  var y = r.ap;
  var z = r.aq;
  var w = r.an;
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
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4(((1.0 - (yy + zz)) * s.r), ((xy + wz) * s.r), ((xz - wy) * s.r), 0.0, ((xy - wz) * s.m), ((1.0 - (xx + zz)) * s.m), ((yz + wx) * s.m), 0.0, ((xz + wy) * s.o), ((yz - wx) * s.o), ((1.0 - (xx + yy)) * s.o), 0.0, t.r, t.m, t.o, 1.0);
});
var $d_Ltrivalibs_graphics_math_cpu_Mat4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4$, "trivalibs.graphics.math.cpu.Mat4$", ({
  dQ: 1,
  dz: 1
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
  dU: 1,
  dW: 1
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
  this.jv = null;
  this.jw = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec3$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec3$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec3$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec3$.prototype = $p;
$p.j = (function() {
  if ((!this.jw)) {
    this.jv = $m_Ltrivalibs_graphics_math_cpu_Vec3$();
    this.jw = true;
  }
  return this.jv;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3$, "trivalibs.graphics.math.cpu.Vec3$", ({
  dZ: 1,
  dF: 1
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
  this.jx = null;
  this.jy = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec4$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec4$.prototype = $p;
$p.lX = (function() {
  if ((!this.jy)) {
    this.jx = new $c_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3();
    this.jy = true;
  }
  return this.jx;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4$, "trivalibs.graphics.math.cpu.Vec4$", ({
  e2: 1,
  dJ: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Vec4$;
function $m_Ltrivalibs_graphics_math_cpu_Vec4$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Vec4$)) {
    $n_Ltrivalibs_graphics_math_cpu_Vec4$ = new $c_Ltrivalibs_graphics_math_cpu_Vec4$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Vec4$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$$anon$21() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$$anon$21.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$$anon$21;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$$anon$21() {
}
$h_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$$anon$21.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$$anon$21 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$$anon$21, "trivalibs.graphics.math.cpu.mat3$package$Mat3PaddedBuffer$$anon$21", ({
  e5: 1,
  dy: 1
}));
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
  e8: 1,
  dB: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_LetExpr(name) {
  this.u = null;
  this.jD = null;
  this.jD = name;
  $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(this, name);
}
$p = $c_Ltrivalibs_graphics_math_gpu_LetExpr.prototype = new $h_Ltrivalibs_graphics_math_gpu_Expr();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_LetExpr;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_LetExpr() {
}
$h_Ltrivalibs_graphics_math_gpu_LetExpr.prototype = $p;
$p.km = (function(value) {
  return (((("  let " + this.jD) + " = ") + value.u) + ";");
});
var $d_Ltrivalibs_graphics_math_gpu_LetExpr = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_LetExpr, "trivalibs.graphics.math.gpu.LetExpr", ({
  ea: 1,
  aN: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5.prototype = $p;
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5, "trivalibs.graphics.math.gpu.float_expr$package$$anon$5", ({
  ee: 1,
  R: 1
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
  ef: 1,
  S: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$.prototype = $p;
$p.n6 = (function(m, x$2, v, x$4, x$5) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + m.u) + " * ") + v.u) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Mat3ImmutableOpsG_FloatExpr_Mat3Expr$", ({
  eg: 1,
  dx: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$.prototype = $p;
$p.mv = (function(m, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + m.u) + " * ") + other.u) + ")"));
});
$p.n7 = (function(m, x$2, v, x$4, x$5) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + m.u) + " * ") + v.u) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Mat4ImmutableOpsG_FloatExpr_Mat4Expr$", ({
  eh: 1,
  dA: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$;
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
$p.kZ = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.u + ".x"));
});
$p.l0 = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.u + ".y"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec2BaseG_FloatExpr_Vec2Expr$", ({
  ei: 1,
  dC: 1
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
$p.mz = (function(v, x$2, scalar) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.u) + " * ") + scalar.u) + ")"));
});
$p.l8 = (function(v, x$2, scalar) {
  return this.mz(v, x$2, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fB().F(scalar));
});
$p.lQ = (function(v, x$2) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("fract(" + v.u) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec2ImmutableOpsG_FloatExpr_Vec2Expr$", ({
  ej: 1,
  dD: 1
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
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec3BaseG_FloatExpr_Vec3Expr$", ({
  ek: 1,
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
$p.lN = (function(v, x$2) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(" + v.u) + " * 0.5 + 0.5)"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec3ImmutableOpsG_FloatExpr_Vec3Expr$", ({
  el: 1,
  dG: 1
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
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec4BaseG_FloatExpr_Vec4Expr$", ({
  em: 1,
  aM: 1
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
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec4ImmutableOpsG_FloatExpr_Vec4Expr$", ({
  en: 1,
  dK: 1
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
  this.z = null;
  this.y = null;
  this.c = null;
  this.h0 = null;
  this.z = shade;
  this.y = painter;
  this.c = [];
  this.h0 = [];
}
$p = $c_Ltrivalibs_graphics_painter_Instance.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Instance;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Instance() {
}
$h_Ltrivalibs_graphics_painter_Instance.prototype = $p;
var $d_Ltrivalibs_graphics_painter_Instance = new $TypeData().i($c_Ltrivalibs_graphics_painter_Instance, "trivalibs.graphics.painter.Instance", ({
  et: 1,
  aO: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Shape(painter, form, shade) {
  this.i6 = null;
  this.g0 = null;
  this.ac = null;
  this.i5 = null;
  this.i4 = null;
  this.S = null;
  this.hc = null;
  this.P = null;
  this.i6 = painter;
  this.g0 = form;
  this.ac = shade;
  this.i5 = "none";
  this.i4 = null;
  this.S = [];
  this.hc = [];
  this.P = new $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter);
}
$p = $c_Ltrivalibs_graphics_painter_Shape.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Shape;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Shape() {
}
$h_Ltrivalibs_graphics_painter_Shape.prototype = $p;
$p.mT = (function(cullMode, blendState) {
  if ((cullMode !== (void 0))) {
    this.i5 = cullMode;
  }
  if ((blendState !== (void 0))) {
    this.i4 = blendState;
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Shape = new $TypeData().i($c_Ltrivalibs_graphics_painter_Shape, "trivalibs.graphics.painter.Shape", ({
  eA: 1,
  aO: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform(inner) {
  this.g4 = null;
  this.g4 = inner;
}
$p = $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform() {
}
$h_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform.prototype = $p;
$p.fD = (function() {
  return this.g4.fD();
});
var $d_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform = new $TypeData().i($c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform, "trivalibs.graphics.shader.VertexUniform$given_WGSLType_VertexUniform", ({
  eJ: 1,
  T: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor(prefix) {
  this.ie = null;
  this.ie = prefix;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor.prototype = $p;
$p.hq = (function(name) {
  return new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget(((this.ie === "") ? name : ((this.ie + ".") + name)));
});
var $d_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor, "trivalibs.graphics.shader.dsl.TypedAssignAccessor", ({
  eQ: 1,
  z: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(prefix) {
  this.ig = null;
  this.ig = prefix;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor.prototype = $p;
$p.aC = (function(name) {
  return ((this.ig === "") ? $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), name) : $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), ((this.ig + ".") + name)));
});
var $d_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor, "trivalibs.graphics.shader.dsl.TypedExprAccessor", ({
  eR: 1,
  z: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(kinds) {
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor, "trivalibs.graphics.shader.dsl.TypedLocalAccessor", ({
  eS: 1,
  z: 1
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
  eT: 1,
  z: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_VertexOut(prefix) {
  this.k8 = null;
  this.k7 = null;
  this.k8 = prefix;
  this.k7 = new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget((prefix + ".position"));
}
$p = $c_Ltrivalibs_graphics_shader_dsl_VertexOut.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_VertexOut;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_VertexOut() {
}
$h_Ltrivalibs_graphics_shader_dsl_VertexOut.prototype = $p;
$p.hq = (function(name) {
  return new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget(((this.k8 + ".") + name));
});
var $d_Ltrivalibs_graphics_shader_dsl_VertexOut = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_VertexOut, "trivalibs.graphics.shader.dsl.VertexOut", ({
  eV: 1,
  z: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$() {
}
$p = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$() {
}
$h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$.prototype = $p;
$p.fD = (function() {
  return "mat3x3<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$, "trivalibs.graphics.shader.types$package$given_WGSLType_Mat3$", ({
  eX: 1,
  T: 1
}));
var $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$;
function $m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$() {
  if ((!$n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$)) {
    $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$ = new $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$();
  }
  return $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$;
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
$p.fD = (function() {
  return "mat4x4<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$, "trivalibs.graphics.shader.types$package$given_WGSLType_Mat4$", ({
  eY: 1,
  T: 1
}));
var $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$;
function $m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$() {
  if ((!$n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$)) {
    $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$ = new $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$();
  }
  return $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$;
}
/** @constructor */
function $c_jl_Class($data) {
  this.hu = $data;
}
$p = $c_jl_Class.prototype = new $h_O();
$p.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
}
$h_jl_Class.prototype = $p;
$p.k = (function() {
  return ((this.hu.Y ? "interface " : (this.hu.X ? "" : "class ")) + this.hu.N);
});
var $d_jl_Class = new $TypeData().i($c_jl_Class, "java.lang.Class", ({
  aW: 1,
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
  bp: 1,
  bm: 1,
  bn: 1
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
    return $thiz.eW;
  } else {
    throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 0)"));
  }
}
function $f_s_Product10__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.eX;
      break;
    }
    case 1: {
      return $thiz.b3;
      break;
    }
    case 2: {
      return $thiz.b4;
      break;
    }
    case 3: {
      return $thiz.b5;
      break;
    }
    case 4: {
      return $thiz.b6;
      break;
    }
    case 5: {
      return $thiz.b7;
      break;
    }
    case 6: {
      return $thiz.b8;
      break;
    }
    case 7: {
      return $thiz.b9;
      break;
    }
    case 8: {
      return $thiz.ba;
      break;
    }
    case 9: {
      return $thiz.b2;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 9)"));
    }
  }
}
function $f_s_Product11__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.eY;
      break;
    }
    case 1: {
      return $thiz.bd;
      break;
    }
    case 2: {
      return $thiz.be;
      break;
    }
    case 3: {
      return $thiz.bf;
      break;
    }
    case 4: {
      return $thiz.bg;
      break;
    }
    case 5: {
      return $thiz.bh;
      break;
    }
    case 6: {
      return $thiz.bi;
      break;
    }
    case 7: {
      return $thiz.bj;
      break;
    }
    case 8: {
      return $thiz.bk;
      break;
    }
    case 9: {
      return $thiz.bb;
      break;
    }
    case 10: {
      return $thiz.bc;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 10)"));
    }
  }
}
function $f_s_Product12__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.eZ;
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
      return $thiz.bl;
      break;
    }
    case 10: {
      return $thiz.bm;
      break;
    }
    case 11: {
      return $thiz.bn;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 11)"));
    }
  }
}
function $f_s_Product13__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.f0;
      break;
    }
    case 1: {
      return $thiz.bA;
      break;
    }
    case 2: {
      return $thiz.bB;
      break;
    }
    case 3: {
      return $thiz.bC;
      break;
    }
    case 4: {
      return $thiz.bD;
      break;
    }
    case 5: {
      return $thiz.bE;
      break;
    }
    case 6: {
      return $thiz.bF;
      break;
    }
    case 7: {
      return $thiz.bG;
      break;
    }
    case 8: {
      return $thiz.bH;
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
    case 11: {
      return $thiz.by;
      break;
    }
    case 12: {
      return $thiz.bz;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 12)"));
    }
  }
}
function $f_s_Product14__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.f1;
      break;
    }
    case 1: {
      return $thiz.bN;
      break;
    }
    case 2: {
      return $thiz.bO;
      break;
    }
    case 3: {
      return $thiz.bP;
      break;
    }
    case 4: {
      return $thiz.bQ;
      break;
    }
    case 5: {
      return $thiz.bR;
      break;
    }
    case 6: {
      return $thiz.bS;
      break;
    }
    case 7: {
      return $thiz.bT;
      break;
    }
    case 8: {
      return $thiz.bU;
      break;
    }
    case 9: {
      return $thiz.bI;
      break;
    }
    case 10: {
      return $thiz.bJ;
      break;
    }
    case 11: {
      return $thiz.bK;
      break;
    }
    case 12: {
      return $thiz.bL;
      break;
    }
    case 13: {
      return $thiz.bM;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 13)"));
    }
  }
}
function $f_s_Product15__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.f2;
      break;
    }
    case 1: {
      return $thiz.c1;
      break;
    }
    case 2: {
      return $thiz.c2;
      break;
    }
    case 3: {
      return $thiz.c3;
      break;
    }
    case 4: {
      return $thiz.c4;
      break;
    }
    case 5: {
      return $thiz.c5;
      break;
    }
    case 6: {
      return $thiz.c6;
      break;
    }
    case 7: {
      return $thiz.c7;
      break;
    }
    case 8: {
      return $thiz.c8;
      break;
    }
    case 9: {
      return $thiz.bV;
      break;
    }
    case 10: {
      return $thiz.bW;
      break;
    }
    case 11: {
      return $thiz.bX;
      break;
    }
    case 12: {
      return $thiz.bY;
      break;
    }
    case 13: {
      return $thiz.bZ;
      break;
    }
    case 14: {
      return $thiz.c0;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 14)"));
    }
  }
}
function $f_s_Product16__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.f3;
      break;
    }
    case 1: {
      return $thiz.cg;
      break;
    }
    case 2: {
      return $thiz.ch;
      break;
    }
    case 3: {
      return $thiz.ci;
      break;
    }
    case 4: {
      return $thiz.cj;
      break;
    }
    case 5: {
      return $thiz.ck;
      break;
    }
    case 6: {
      return $thiz.cl;
      break;
    }
    case 7: {
      return $thiz.cm;
      break;
    }
    case 8: {
      return $thiz.cn;
      break;
    }
    case 9: {
      return $thiz.c9;
      break;
    }
    case 10: {
      return $thiz.ca;
      break;
    }
    case 11: {
      return $thiz.cb;
      break;
    }
    case 12: {
      return $thiz.cc;
      break;
    }
    case 13: {
      return $thiz.cd;
      break;
    }
    case 14: {
      return $thiz.ce;
      break;
    }
    case 15: {
      return $thiz.cf;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 15)"));
    }
  }
}
function $f_s_Product17__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.f4;
      break;
    }
    case 1: {
      return $thiz.cw;
      break;
    }
    case 2: {
      return $thiz.cx;
      break;
    }
    case 3: {
      return $thiz.cy;
      break;
    }
    case 4: {
      return $thiz.cz;
      break;
    }
    case 5: {
      return $thiz.cA;
      break;
    }
    case 6: {
      return $thiz.cB;
      break;
    }
    case 7: {
      return $thiz.cC;
      break;
    }
    case 8: {
      return $thiz.cD;
      break;
    }
    case 9: {
      return $thiz.co;
      break;
    }
    case 10: {
      return $thiz.cp;
      break;
    }
    case 11: {
      return $thiz.cq;
      break;
    }
    case 12: {
      return $thiz.cr;
      break;
    }
    case 13: {
      return $thiz.cs;
      break;
    }
    case 14: {
      return $thiz.ct;
      break;
    }
    case 15: {
      return $thiz.cu;
      break;
    }
    case 16: {
      return $thiz.cv;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 16)"));
    }
  }
}
function $f_s_Product18__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.f5;
      break;
    }
    case 1: {
      return $thiz.cN;
      break;
    }
    case 2: {
      return $thiz.cO;
      break;
    }
    case 3: {
      return $thiz.cP;
      break;
    }
    case 4: {
      return $thiz.cQ;
      break;
    }
    case 5: {
      return $thiz.cR;
      break;
    }
    case 6: {
      return $thiz.cS;
      break;
    }
    case 7: {
      return $thiz.cT;
      break;
    }
    case 8: {
      return $thiz.cU;
      break;
    }
    case 9: {
      return $thiz.cE;
      break;
    }
    case 10: {
      return $thiz.cF;
      break;
    }
    case 11: {
      return $thiz.cG;
      break;
    }
    case 12: {
      return $thiz.cH;
      break;
    }
    case 13: {
      return $thiz.cI;
      break;
    }
    case 14: {
      return $thiz.cJ;
      break;
    }
    case 15: {
      return $thiz.cK;
      break;
    }
    case 16: {
      return $thiz.cL;
      break;
    }
    case 17: {
      return $thiz.cM;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 17)"));
    }
  }
}
function $f_s_Product19__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.f6;
      break;
    }
    case 1: {
      return $thiz.d5;
      break;
    }
    case 2: {
      return $thiz.d6;
      break;
    }
    case 3: {
      return $thiz.d7;
      break;
    }
    case 4: {
      return $thiz.d8;
      break;
    }
    case 5: {
      return $thiz.d9;
      break;
    }
    case 6: {
      return $thiz.da;
      break;
    }
    case 7: {
      return $thiz.db;
      break;
    }
    case 8: {
      return $thiz.dc;
      break;
    }
    case 9: {
      return $thiz.cV;
      break;
    }
    case 10: {
      return $thiz.cW;
      break;
    }
    case 11: {
      return $thiz.cX;
      break;
    }
    case 12: {
      return $thiz.cY;
      break;
    }
    case 13: {
      return $thiz.cZ;
      break;
    }
    case 14: {
      return $thiz.d0;
      break;
    }
    case 15: {
      return $thiz.d1;
      break;
    }
    case 16: {
      return $thiz.d2;
      break;
    }
    case 17: {
      return $thiz.d3;
      break;
    }
    case 18: {
      return $thiz.d4;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 18)"));
    }
  }
}
function $f_s_Product2__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.af;
      break;
    }
    case 1: {
      return $thiz.a8;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 1)"));
    }
  }
}
function $f_s_Product20__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.f7;
      break;
    }
    case 1: {
      return $thiz.dn;
      break;
    }
    case 2: {
      return $thiz.dq;
      break;
    }
    case 3: {
      return $thiz.dr;
      break;
    }
    case 4: {
      return $thiz.ds;
      break;
    }
    case 5: {
      return $thiz.dt;
      break;
    }
    case 6: {
      return $thiz.du;
      break;
    }
    case 7: {
      return $thiz.dv;
      break;
    }
    case 8: {
      return $thiz.dw;
      break;
    }
    case 9: {
      return $thiz.dd;
      break;
    }
    case 10: {
      return $thiz.de;
      break;
    }
    case 11: {
      return $thiz.df;
      break;
    }
    case 12: {
      return $thiz.dg;
      break;
    }
    case 13: {
      return $thiz.dh;
      break;
    }
    case 14: {
      return $thiz.di;
      break;
    }
    case 15: {
      return $thiz.dj;
      break;
    }
    case 16: {
      return $thiz.dk;
      break;
    }
    case 17: {
      return $thiz.dl;
      break;
    }
    case 18: {
      return $thiz.dm;
      break;
    }
    case 19: {
      return $thiz.dp;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 19)"));
    }
  }
}
function $f_s_Product21__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.f8;
      break;
    }
    case 1: {
      return $thiz.dH;
      break;
    }
    case 2: {
      return $thiz.dK;
      break;
    }
    case 3: {
      return $thiz.dL;
      break;
    }
    case 4: {
      return $thiz.dM;
      break;
    }
    case 5: {
      return $thiz.dN;
      break;
    }
    case 6: {
      return $thiz.dO;
      break;
    }
    case 7: {
      return $thiz.dP;
      break;
    }
    case 8: {
      return $thiz.dQ;
      break;
    }
    case 9: {
      return $thiz.dx;
      break;
    }
    case 10: {
      return $thiz.dy;
      break;
    }
    case 11: {
      return $thiz.dz;
      break;
    }
    case 12: {
      return $thiz.dA;
      break;
    }
    case 13: {
      return $thiz.dB;
      break;
    }
    case 14: {
      return $thiz.dC;
      break;
    }
    case 15: {
      return $thiz.dD;
      break;
    }
    case 16: {
      return $thiz.dE;
      break;
    }
    case 17: {
      return $thiz.dF;
      break;
    }
    case 18: {
      return $thiz.dG;
      break;
    }
    case 19: {
      return $thiz.dI;
      break;
    }
    case 20: {
      return $thiz.dJ;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 20)"));
    }
  }
}
function $f_s_Product22__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.f9;
      break;
    }
    case 1: {
      return $thiz.e1;
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
      return $thiz.dR;
      break;
    }
    case 10: {
      return $thiz.dS;
      break;
    }
    case 11: {
      return $thiz.dT;
      break;
    }
    case 12: {
      return $thiz.dU;
      break;
    }
    case 13: {
      return $thiz.dV;
      break;
    }
    case 14: {
      return $thiz.dW;
      break;
    }
    case 15: {
      return $thiz.dX;
      break;
    }
    case 16: {
      return $thiz.dY;
      break;
    }
    case 17: {
      return $thiz.dZ;
      break;
    }
    case 18: {
      return $thiz.e0;
      break;
    }
    case 19: {
      return $thiz.e2;
      break;
    }
    case 20: {
      return $thiz.e3;
      break;
    }
    case 21: {
      return $thiz.e4;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 21)"));
    }
  }
}
function $f_s_Product3__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.aM;
      break;
    }
    case 1: {
      return $thiz.aD;
      break;
    }
    case 2: {
      return $thiz.aE;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 2)"));
    }
  }
}
function $f_s_Product4__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.ec;
      break;
    }
    case 1: {
      return $thiz.aN;
      break;
    }
    case 2: {
      return $thiz.aO;
      break;
    }
    case 3: {
      return $thiz.aP;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 3)"));
    }
  }
}
function $f_s_Product5__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fa;
      break;
    }
    case 1: {
      return $thiz.ed;
      break;
    }
    case 2: {
      return $thiz.ee;
      break;
    }
    case 3: {
      return $thiz.ef;
      break;
    }
    case 4: {
      return $thiz.eg;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 4)"));
    }
  }
}
function $f_s_Product6__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fb;
      break;
    }
    case 1: {
      return $thiz.eh;
      break;
    }
    case 2: {
      return $thiz.ei;
      break;
    }
    case 3: {
      return $thiz.ej;
      break;
    }
    case 4: {
      return $thiz.ek;
      break;
    }
    case 5: {
      return $thiz.el;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 5)"));
    }
  }
}
function $f_s_Product7__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fc;
      break;
    }
    case 1: {
      return $thiz.em;
      break;
    }
    case 2: {
      return $thiz.en;
      break;
    }
    case 3: {
      return $thiz.eo;
      break;
    }
    case 4: {
      return $thiz.ep;
      break;
    }
    case 5: {
      return $thiz.eq;
      break;
    }
    case 6: {
      return $thiz.er;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 6)"));
    }
  }
}
function $f_s_Product8__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fd;
      break;
    }
    case 1: {
      return $thiz.es;
      break;
    }
    case 2: {
      return $thiz.et;
      break;
    }
    case 3: {
      return $thiz.eu;
      break;
    }
    case 4: {
      return $thiz.ev;
      break;
    }
    case 5: {
      return $thiz.ew;
      break;
    }
    case 6: {
      return $thiz.ex;
      break;
    }
    case 7: {
      return $thiz.ey;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 7)"));
    }
  }
}
function $f_s_Product9__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fe;
      break;
    }
    case 1: {
      return $thiz.ez;
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
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 8)"));
    }
  }
}
function $f_sc_Iterator__concat__F0__sc_Iterator($thiz, xs) {
  return new $c_sc_Iterator$ConcatIterator($thiz).lv(xs);
}
function $f_sc_Iterator__sliceIterator__I__I__sc_Iterator($thiz, from, until) {
  var lo = ((from > 0) ? from : 0);
  var rest = ((until < 0) ? (-1) : ((until <= lo) ? 0 : ((until - lo) | 0)));
  return ((rest === 0) ? $m_sc_Iterator$().aG : new $c_sc_Iterator$SliceIterator($thiz, lo, rest));
}
function $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz, that) {
  var those = that.N();
  while ($thiz.C()) {
    if ((!those.C())) {
      return false;
    }
    if ((!$m_sr_BoxesRunTime$().b($thiz.B(), those.B()))) {
      return false;
    }
  }
  return (!those.C());
}
/** @constructor */
function $c_sc_Iterator$() {
  this.aG = null;
  $n_sc_Iterator$ = this;
  this.aG = new $c_sc_Iterator$$anon$19();
}
$p = $c_sc_Iterator$.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
}
$h_sc_Iterator$.prototype = $p;
var $d_sc_Iterator$ = new $TypeData().i($c_sc_Iterator$, "scala.collection.Iterator$", ({
  bV: 1,
  a: 1,
  ao: 1
}));
var $n_sc_Iterator$;
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$();
  }
  return $n_sc_Iterator$;
}
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cp)));
}
/** @constructor */
function $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(f) {
  this.jb = null;
  this.jb = f;
}
$p = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = new $h_sr_AbstractFunction0();
$p.constructor = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c;
/** @constructor */
function $h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c() {
}
$h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = $p;
$p.gf = (function() {
  return (0, this.jb)();
});
var $d_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c = new $TypeData().i($c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c, "scala.runtime.AbstractFunction0.$$Lambda$07eded5776954a9c145e92c329afd52873ad179c", ({
  cy: 1,
  cx: 1,
  bh: 1
}));
/** @constructor */
function $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(f) {
  this.jc = null;
  this.jc = f;
}
$p = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919;
/** @constructor */
function $h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919() {
}
$h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = $p;
$p.F = (function(x0) {
  return (0, this.jc)(x0);
});
var $d_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919 = new $TypeData().i($c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919, "scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919", ({
  cA: 1,
  cz: 1,
  k: 1
}));
/** @constructor */
function $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(f) {
  this.jd = null;
  this.jd = f;
}
$p = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = new $h_sr_AbstractFunction2();
$p.constructor = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8;
/** @constructor */
function $h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8() {
}
$h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = $p;
$p.kn = (function(x0, x1) {
  return (0, this.jd)(x0, x1);
});
var $d_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8 = new $TypeData().i($c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8, "scala.runtime.AbstractFunction2.$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8", ({
  cC: 1,
  cB: 1,
  bi: 1
}));
/** @constructor */
function $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(f) {
  this.je = null;
  this.je = f;
}
$p = $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825.prototype = new $h_sr_AbstractFunction3();
$p.constructor = $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825;
/** @constructor */
function $h_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825() {
}
$h_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825.prototype = $p;
$p.lh = (function(x0, x1, x2) {
  return (0, this.je)(x0, x1, x2);
});
var $d_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825 = new $TypeData().i($c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825, "scala.runtime.AbstractFunction3.$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825", ({
  cE: 1,
  cD: 1,
  bj: 1
}));
/** @constructor */
function $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(f) {
  this.jf = null;
  this.jf = f;
}
$p = $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a.prototype = new $h_sr_AbstractFunction4();
$p.constructor = $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a;
/** @constructor */
function $h_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a() {
}
$h_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a.prototype = $p;
$p.lg = (function(x0, x1, x2, x3) {
  return (0, this.jf)(x0, x1, x2, x3);
});
var $d_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a = new $TypeData().i($c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a, "scala.runtime.AbstractFunction4.$$Lambda$451042f443265710aa66de6985cba67480d9b00a", ({
  cG: 1,
  cF: 1,
  bk: 1
}));
/** @constructor */
function $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078(f) {
  this.jg = null;
  this.jg = f;
}
$p = $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078.prototype = new $h_sr_AbstractFunction5();
$p.constructor = $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078;
/** @constructor */
function $h_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078() {
}
$h_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078.prototype = $p;
$p.lf = (function(x0, x1, x2, x3, x4) {
  return (0, this.jg)(x0, x1, x2, x3, x4);
});
var $d_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078 = new $TypeData().i($c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078, "scala.runtime.AbstractFunction5.$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078", ({
  cI: 1,
  cH: 1,
  bl: 1
}));
var $d_sr_Nothing$ = new $TypeData().i(0, "scala.runtime.Nothing$", ({
  cK: 1,
  f: 1,
  a: 1
}));
/** @constructor */
function $c_sr_TupleXXL(es) {
  this.J = null;
  this.J = es;
  if ((es.a.length <= 22)) {
    $m_sr_Scala3RunTime$().lm();
  }
}
$p = $c_sr_TupleXXL.prototype = new $h_O();
$p.constructor = $c_sr_TupleXXL;
/** @constructor */
function $h_sr_TupleXXL() {
}
$h_sr_TupleXXL.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.l = (function(n) {
  return this.J.a[n];
});
$p.s = (function() {
  return this.J.a.length;
});
$p.x = (function() {
  return "Tuple";
});
$p.k = (function() {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($m_s_Predef$().na(this.J), "(", ",", ")");
});
$p.q = (function() {
  return $m_s_util_hashing_MurmurHash3$().lu(this, (-889275714), null);
});
$p.n = (function(that) {
  if ((that instanceof $c_sr_TupleXXL)) {
    if ((this.J === that.J)) {
      return true;
    } else {
      if ((this.J.a.length !== that.J.a.length)) {
        return false;
      }
      var i = 0;
      while ((i < this.J.a.length)) {
        var $x_2 = $m_sr_BoxesRunTime$();
        var arr$3 = this.J;
        var n = i;
        var $x_1 = arr$3.a[n];
        var arr$4 = that.J;
        var n$1 = i;
        if ((!$x_2.b($x_1, arr$4.a[n$1]))) {
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aA)));
}
var $d_sr_TupleXXL = new $TypeData().i($c_sr_TupleXXL, "scala.runtime.TupleXXL", ({
  aA: 1,
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
$p.gg = (function(f) {
  return ((arg1$2) => f.F(arg1$2));
});
var $d_sjs_js_Any$ = new $TypeData().i($c_sjs_js_Any$, "scala.scalajs.js.Any$", ({
  cR: 1,
  cV: 1,
  cW: 1
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
function $c_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3.prototype = new $h_s_Conversion();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3.prototype = $p;
$p.F = (function(x) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec4((+x.ec), (+x.aN), (+x.aO), (+x.aP));
});
var $d_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3, "trivalibs.graphics.math.cpu.Vec4$$anon$3", ({
  e3: 1,
  Y: 1,
  k: 1
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
$p.F = (function(x) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().lO((+x)));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1, "trivalibs.graphics.math.gpu.float_expr$package$$anon$1", ({
  ed: 1,
  Y: 1,
  k: 1
}));
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
class $c_jl_AssertionError extends $c_jl_Error {
  constructor(detailMessage) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ("" + detailMessage), ((detailMessage instanceof $c_jl_Throwable) ? detailMessage : null), true, true);
  }
}
var $d_jl_AssertionError = new $TypeData().i($c_jl_AssertionError, "java.lang.AssertionError", ({
  aS: 1,
  aX: 1,
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
  aT: 1,
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.U)));
}
var $d_jl_Character = new $TypeData().i(0, "java.lang.Character", ({
  U: 1,
  a: 1,
  h: 1,
  g: 1
}), ((x) => (x instanceof $Char)));
class $c_jl_RuntimeException extends $c_jl_Exception {
}
/** @constructor */
function $c_jl_StringBuilder() {
  this.R = null;
  this.R = "";
}
$p = $c_jl_StringBuilder.prototype = new $h_O();
$p.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
}
$h_jl_StringBuilder.prototype = $p;
$p.k = (function() {
  return this.R;
});
$p.D = (function() {
  return this.R.length;
});
$p.ks = (function(index) {
  return this.R.charCodeAt(index);
});
var $d_jl_StringBuilder = new $TypeData().i($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  b7: 1,
  E: 1,
  aQ: 1,
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
$p.U = (function() {
  return (-1);
});
$p.ku = (function(dest, start, n) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, dest, start, n);
});
$p.is = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.N = (function() {
  return this;
});
$p.hk = (function(n) {
  return this.hs(n, (-1));
});
$p.hs = (function(from, until) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until);
});
$p.k = (function() {
  return "<iterator>";
});
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.eT(0) === 0);
}
function $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  var thisKnownSize = $thiz.U();
  if ((thisKnownSize !== (-1))) {
    var thatKnownSize = that.U();
    if ((thatKnownSize !== (-1))) {
      if ((thisKnownSize !== thatKnownSize)) {
        return false;
      }
      if ((thisKnownSize === 0)) {
        return true;
      }
    }
  }
  return $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz.N(), that);
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$.prototype = $p;
$p.at = (function(m) {
  return m.hB;
});
$p.au = (function(m) {
  return m.hC;
});
$p.av = (function(m) {
  return m.hD;
});
$p.aw = (function(m) {
  return m.hE;
});
$p.ax = (function(m) {
  return m.hF;
});
$p.ay = (function(m) {
  return m.hG;
});
$p.az = (function(m) {
  return m.hH;
});
$p.aA = (function(m) {
  return m.hI;
});
$p.aB = (function(m) {
  return m.hJ;
});
$p.gj = (function(m, v) {
  m.hB = v;
});
$p.gk = (function(m, v) {
  m.hC = v;
});
$p.gl = (function(m, v) {
  m.hD = v;
});
$p.gn = (function(m, v) {
  m.hE = v;
});
$p.go = (function(m, v) {
  m.hF = v;
});
$p.gp = (function(m, v) {
  m.hG = v;
});
$p.gr = (function(m, v) {
  m.hH = v;
});
$p.gs = (function(m, v) {
  m.hI = v;
});
$p.gt = (function(m, v) {
  m.hJ = v;
});
var $d_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$, "trivalibs.graphics.math.cpu.Mat3$given_Mat3Mutable_Mat3$", ({
  dO: 1,
  R: 1,
  aH: 1,
  aI: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$;
function $m_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$)) {
    $n_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$ = new $c_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$;
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
$p.at = (function(m) {
  return m.gM;
});
$p.au = (function(m) {
  return m.gN;
});
$p.av = (function(m) {
  return m.gO;
});
$p.gm = (function(m) {
  return m.hK;
});
$p.aw = (function(m) {
  return m.gP;
});
$p.ax = (function(m) {
  return m.gQ;
});
$p.ay = (function(m) {
  return m.gR;
});
$p.gq = (function(m) {
  return m.hL;
});
$p.az = (function(m) {
  return m.gS;
});
$p.aA = (function(m) {
  return m.gT;
});
$p.aB = (function(m) {
  return m.gU;
});
$p.gu = (function(m) {
  return m.hM;
});
$p.gv = (function(m) {
  return m.hN;
});
$p.gw = (function(m) {
  return m.hO;
});
$p.gx = (function(m) {
  return m.hP;
});
$p.gy = (function(m) {
  return m.hQ;
});
$p.gj = (function(m, v) {
  m.gM = v;
});
$p.gk = (function(m, v) {
  m.gN = v;
});
$p.gl = (function(m, v) {
  m.gO = v;
});
$p.kG = (function(m, v) {
  m.hK = v;
});
$p.gn = (function(m, v) {
  m.gP = v;
});
$p.go = (function(m, v) {
  m.gQ = v;
});
$p.gp = (function(m, v) {
  m.gR = v;
});
$p.kH = (function(m, v) {
  m.hL = v;
});
$p.gr = (function(m, v) {
  m.gS = v;
});
$p.gs = (function(m, v) {
  m.gT = v;
});
$p.gt = (function(m, v) {
  m.gU = v;
});
$p.kI = (function(m, v) {
  m.hM = v;
});
$p.kJ = (function(m, v) {
  m.hN = v;
});
$p.kK = (function(m, v) {
  m.hO = v;
});
$p.kL = (function(m, v) {
  m.hP = v;
});
$p.kM = (function(m, v) {
  m.hQ = v;
});
var $d_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$, "trivalibs.graphics.math.cpu.Mat4$given_Mat4Mutable_Mat4$", ({
  dR: 1,
  S: 1,
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
var $d_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$, "trivalibs.graphics.math.cpu.Quat$given_Vec4Mutable_Quat$", ({
  dV: 1,
  aM: 1,
  dI: 1,
  dL: 1
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
  e0: 1,
  aL: 1,
  dE: 1,
  dH: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$;
function $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$)) {
    $n_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$ = new $c_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$.prototype = $p;
$p.iy = (function(m) {
  var offset$proxy19 = (m.off | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy19, true));
});
$p.iA = (function(m) {
  var offset$proxy20 = ((4 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy20, true));
});
$p.iC = (function(m) {
  var offset$proxy21 = ((8 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy21, true));
});
$p.iE = (function(m) {
  var offset$proxy22 = ((16 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy22, true));
});
$p.iG = (function(m) {
  var offset$proxy23 = ((20 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy23, true));
});
$p.iI = (function(m) {
  var offset$proxy24 = ((24 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy24, true));
});
$p.iK = (function(m) {
  var offset$proxy25 = ((32 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy25, true));
});
$p.iM = (function(m) {
  var offset$proxy26 = ((36 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy26, true));
});
$p.iO = (function(m) {
  var offset$proxy27 = ((40 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy27, true));
});
$p.iz = (function(m, v) {
  var value$proxy10 = Math.fround(v);
  var offset$proxy28 = (m.off | 0);
  m.dv.setFloat32(offset$proxy28, value$proxy10, true);
});
$p.iB = (function(m, v) {
  var value$proxy11 = Math.fround(v);
  var offset$proxy29 = ((4 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy29, value$proxy11, true);
});
$p.iD = (function(m, v) {
  var value$proxy12 = Math.fround(v);
  var offset$proxy30 = ((8 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy30, value$proxy12, true);
});
$p.iF = (function(m, v) {
  var value$proxy13 = Math.fround(v);
  var offset$proxy31 = ((16 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy31, value$proxy13, true);
});
$p.iH = (function(m, v) {
  var value$proxy14 = Math.fround(v);
  var offset$proxy32 = ((20 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy32, value$proxy14, true);
});
$p.iJ = (function(m, v) {
  var value$proxy15 = Math.fround(v);
  var offset$proxy33 = ((24 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy33, value$proxy15, true);
});
$p.iL = (function(m, v) {
  var value$proxy16 = Math.fround(v);
  var offset$proxy34 = ((32 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy34, value$proxy16, true);
});
$p.iN = (function(m, v) {
  var value$proxy17 = Math.fround(v);
  var offset$proxy35 = ((36 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy35, value$proxy17, true);
});
$p.iP = (function(m, v) {
  var value$proxy18 = Math.fround(v);
  var offset$proxy36 = ((40 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy36, value$proxy18, true);
});
$p.at = (function(m) {
  return this.iy(m);
});
$p.au = (function(m) {
  return this.iA(m);
});
$p.av = (function(m) {
  return this.iC(m);
});
$p.aw = (function(m) {
  return this.iE(m);
});
$p.ax = (function(m) {
  return this.iG(m);
});
$p.ay = (function(m) {
  return this.iI(m);
});
$p.az = (function(m) {
  return this.iK(m);
});
$p.aA = (function(m) {
  return this.iM(m);
});
$p.aB = (function(m) {
  return this.iO(m);
});
$p.gj = (function(m, v) {
  this.iz(m, v);
});
$p.gk = (function(m, v) {
  this.iB(m, v);
});
$p.gl = (function(m, v) {
  this.iD(m, v);
});
$p.gn = (function(m, v) {
  this.iF(m, v);
});
$p.go = (function(m, v) {
  this.iH(m, v);
});
$p.gp = (function(m, v) {
  this.iJ(m, v);
});
$p.gr = (function(m, v) {
  this.iL(m, v);
});
$p.gs = (function(m, v) {
  this.iN(m, v);
});
$p.gt = (function(m, v) {
  this.iP(m, v);
});
var $d_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$, "trivalibs.graphics.math.cpu.mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$", ({
  e6: 1,
  R: 1,
  aH: 1,
  aI: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$;
function $m_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$)) {
    $n_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$ = new $c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$;
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
$p.iy = (function(m) {
  var offset$proxy1 = (m.off | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy1, true));
});
$p.iA = (function(m) {
  var offset$proxy2 = ((4 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy2, true));
});
$p.iC = (function(m) {
  var offset$proxy3 = ((8 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy3, true));
});
$p.mf = (function(m) {
  var offset$proxy4 = ((12 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy4, true));
});
$p.iE = (function(m) {
  var offset$proxy5 = ((16 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy5, true));
});
$p.iG = (function(m) {
  var offset$proxy6 = ((20 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy6, true));
});
$p.iI = (function(m) {
  var offset$proxy7 = ((24 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy7, true));
});
$p.mh = (function(m) {
  var offset$proxy8 = ((28 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy8, true));
});
$p.iK = (function(m) {
  var offset$proxy9 = ((32 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy9, true));
});
$p.iM = (function(m) {
  var offset$proxy10 = ((36 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy10, true));
});
$p.iO = (function(m) {
  var offset$proxy11 = ((40 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy11, true));
});
$p.mj = (function(m) {
  var offset$proxy12 = ((44 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy12, true));
});
$p.ml = (function(m) {
  var offset$proxy13 = ((48 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy13, true));
});
$p.mn = (function(m) {
  var offset$proxy14 = ((52 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy14, true));
});
$p.mp = (function(m) {
  var offset$proxy15 = ((56 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy15, true));
});
$p.mr = (function(m) {
  var offset$proxy16 = ((60 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy16, true));
});
$p.iz = (function(m, v) {
  var value$proxy1 = Math.fround(v);
  var offset$proxy17 = (m.off | 0);
  m.dv.setFloat32(offset$proxy17, value$proxy1, true);
});
$p.iB = (function(m, v) {
  var value$proxy2 = Math.fround(v);
  var offset$proxy18 = ((4 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy18, value$proxy2, true);
});
$p.iD = (function(m, v) {
  var value$proxy3 = Math.fround(v);
  var offset$proxy19 = ((8 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy19, value$proxy3, true);
});
$p.mg = (function(m, v) {
  var value$proxy4 = Math.fround(v);
  var offset$proxy20 = ((12 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy20, value$proxy4, true);
});
$p.iF = (function(m, v) {
  var value$proxy5 = Math.fround(v);
  var offset$proxy21 = ((16 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy21, value$proxy5, true);
});
$p.iH = (function(m, v) {
  var value$proxy6 = Math.fround(v);
  var offset$proxy22 = ((20 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy22, value$proxy6, true);
});
$p.iJ = (function(m, v) {
  var value$proxy7 = Math.fround(v);
  var offset$proxy23 = ((24 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy23, value$proxy7, true);
});
$p.mi = (function(m, v) {
  var value$proxy8 = Math.fround(v);
  var offset$proxy24 = ((28 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy24, value$proxy8, true);
});
$p.iL = (function(m, v) {
  var value$proxy9 = Math.fround(v);
  var offset$proxy25 = ((32 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy25, value$proxy9, true);
});
$p.iN = (function(m, v) {
  var value$proxy10 = Math.fround(v);
  var offset$proxy26 = ((36 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy26, value$proxy10, true);
});
$p.iP = (function(m, v) {
  var value$proxy11 = Math.fround(v);
  var offset$proxy27 = ((40 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy27, value$proxy11, true);
});
$p.mk = (function(m, v) {
  var value$proxy12 = Math.fround(v);
  var offset$proxy28 = ((44 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy28, value$proxy12, true);
});
$p.mm = (function(m, v) {
  var value$proxy13 = Math.fround(v);
  var offset$proxy29 = ((48 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy29, value$proxy13, true);
});
$p.mo = (function(m, v) {
  var value$proxy14 = Math.fround(v);
  var offset$proxy30 = ((52 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy30, value$proxy14, true);
});
$p.mq = (function(m, v) {
  var value$proxy15 = Math.fround(v);
  var offset$proxy31 = ((56 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy31, value$proxy15, true);
});
$p.ms = (function(m, v) {
  var value$proxy16 = Math.fround(v);
  var offset$proxy32 = ((60 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy32, value$proxy16, true);
});
$p.at = (function(m) {
  return this.iy(m);
});
$p.au = (function(m) {
  return this.iA(m);
});
$p.av = (function(m) {
  return this.iC(m);
});
$p.gm = (function(m) {
  return this.mf(m);
});
$p.aw = (function(m) {
  return this.iE(m);
});
$p.ax = (function(m) {
  return this.iG(m);
});
$p.ay = (function(m) {
  return this.iI(m);
});
$p.gq = (function(m) {
  return this.mh(m);
});
$p.az = (function(m) {
  return this.iK(m);
});
$p.aA = (function(m) {
  return this.iM(m);
});
$p.aB = (function(m) {
  return this.iO(m);
});
$p.gu = (function(m) {
  return this.mj(m);
});
$p.gv = (function(m) {
  return this.ml(m);
});
$p.gw = (function(m) {
  return this.mn(m);
});
$p.gx = (function(m) {
  return this.mp(m);
});
$p.gy = (function(m) {
  return this.mr(m);
});
$p.gj = (function(m, v) {
  this.iz(m, v);
});
$p.gk = (function(m, v) {
  this.iB(m, v);
});
$p.gl = (function(m, v) {
  this.iD(m, v);
});
$p.kG = (function(m, v) {
  this.mg(m, v);
});
$p.gn = (function(m, v) {
  this.iF(m, v);
});
$p.go = (function(m, v) {
  this.iH(m, v);
});
$p.gp = (function(m, v) {
  this.iJ(m, v);
});
$p.kH = (function(m, v) {
  this.mi(m, v);
});
$p.gr = (function(m, v) {
  this.iL(m, v);
});
$p.gs = (function(m, v) {
  this.iN(m, v);
});
$p.gt = (function(m, v) {
  this.iP(m, v);
});
$p.kI = (function(m, v) {
  this.mk(m, v);
});
$p.kJ = (function(m, v) {
  this.mm(m, v);
});
$p.kK = (function(m, v) {
  this.mo(m, v);
});
$p.kL = (function(m, v) {
  this.mq(m, v);
});
$p.kM = (function(m, v) {
  this.ms(m, v);
});
var $d_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$, "trivalibs.graphics.math.cpu.mat4$package$Mat4Buffer$given_Mat4Mutable_StructRef$", ({
  e9: 1,
  S: 1,
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
function $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T($thiz, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, uniformDecls, vertexBody, fragmentBody, fragBuiltinParams) {
  var f$proxy1 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildVertexMain__T__T($thiz, vertexBody);
  var g$proxy1 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildFragmentMain__T__T__T($thiz, fragmentBody, fragBuiltinParams);
  var all = [vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, uniformDecls, $thiz.g2, f$proxy1, g$proxy1];
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
  this.g3 = null;
  this.g1 = null;
  this.g2 = null;
  this.g3 = vertexBody;
  this.g1 = fragmentBody;
  this.g2 = helperFns;
}
$p = $c_Ltrivalibs_graphics_shader_ShaderDef.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_ShaderDef;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_ShaderDef() {
}
$h_Ltrivalibs_graphics_shader_ShaderDef.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.q = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, (-1488826029), true);
});
$p.n = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_Ltrivalibs_graphics_shader_ShaderDef) && (((this.g3 === x$0.g3) && (this.g1 === x$0.g1)) && (this.g2 === x$0.g2))));
});
$p.k = (function() {
  return $m_sr_ScalaRunTime$().l9(this);
});
$p.s = (function() {
  return 3;
});
$p.x = (function() {
  return "ShaderDef";
});
$p.l = (function(n) {
  switch (n) {
    case 0: {
      return this.g3;
      break;
    }
    case 1: {
      return this.g1;
      break;
    }
    case 2: {
      return this.g2;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException(("" + n));
    }
  }
});
function $isArrayOf_Ltrivalibs_graphics_shader_ShaderDef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aP)));
}
var $d_Ltrivalibs_graphics_shader_ShaderDef = new $TypeData().i($c_Ltrivalibs_graphics_shader_ShaderDef, "trivalibs.graphics.shader.ShaderDef", ({
  aP: 1,
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
  aR: 1,
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
  aU: 1,
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
  W: 1,
  j: 1,
  i: 1,
  f: 1,
  a: 1
}));
class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_IndexOutOfBoundsException = new $TypeData().i($c_jl_IndexOutOfBoundsException, "java.lang.IndexOutOfBoundsException", ({
  aZ: 1,
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
  b2: 1,
  j: 1,
  i: 1,
  f: 1,
  a: 1
}));
function $isArrayOf_jl_SecurityException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.b4)));
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
  b5: 1,
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
  b9: 1,
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
  be: 1,
  j: 1,
  i: 1,
  f: 1,
  a: 1
}));
function $p_s_MatchError__objString__T($thiz) {
  if ((!$thiz.j1)) {
    if (($thiz.gC === null)) {
      var $x_1 = "null";
    } else {
      var this$1 = $thiz.gC;
      var cls = $objectGetClass(this$1);
      var ofClass = ((cls === null) ? "of a JS class" : ("of class " + cls.hu.N));
      try {
        var $x_1 = ((($thiz.gC + " (") + ofClass) + ")");
      } catch (e) {
        var $x_1 = ("an instance " + ofClass);
      }
    }
    $thiz.j0 = $x_1;
    $thiz.j1 = true;
  }
  return $thiz.j0;
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.gC = null;
    this.j0 = null;
    this.j1 = false;
    this.gC = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  hl() {
    return $p_s_MatchError__objString__T(this);
  }
}
var $d_s_MatchError = new $TypeData().i($c_s_MatchError, "scala.MatchError", ({
  bo: 1,
  j: 1,
  i: 1,
  f: 1,
  a: 1
}));
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.fE = 0;
  this.j3 = 0;
  this.j2 = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.j2 = outer;
  this.fE = 0;
  this.j3 = outer.s();
}
$p = $c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $p;
$p.C = (function() {
  return (this.fE < this.j3);
});
$p.B = (function() {
  var result = this.j2.l(this.fE);
  this.fE = ((1 + this.fE) | 0);
  return result;
});
var $d_s_Product$$anon$1 = new $TypeData().i($c_s_Product$$anon$1, "scala.Product$$anon$1", ({
  bq: 1,
  n: 1,
  d: 1,
  e: 1,
  s: 1
}));
/** @constructor */
function $c_T1(_1) {
  this.eW = null;
  this.eW = _1;
}
$p = $c_T1.prototype = new $h_O();
$p.constructor = $c_T1;
/** @constructor */
function $h_T1() {
}
$h_T1.prototype = $p;
$p.s = (function() {
  return 1;
});
$p.l = (function(n) {
  return $f_s_Product1__productElement__I__O(this, n);
});
$p.k = (function() {
  return (("(" + this.eW) + ")");
});
$p.x = (function() {
  return "Tuple1";
});
$p.A = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.q = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, 1228477340, true);
});
$p.n = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T1) && $m_sr_BoxesRunTime$().b(this.eW, x$1.eW)));
});
function $isArrayOf_T1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.Z)));
}
var $d_T1 = new $TypeData().i($c_T1, "scala.Tuple1", ({
  Z: 1,
  br: 1,
  c: 1,
  b: 1,
  a: 1
}));
/** @constructor */
function $c_T10(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10) {
  this.eX = null;
  this.b3 = null;
  this.b4 = null;
  this.b5 = null;
  this.b6 = null;
  this.b7 = null;
  this.b8 = null;
  this.b9 = null;
  this.ba = null;
  this.b2 = null;
  this.eX = _1;
  this.b3 = _2;
  this.b4 = _3;
  this.b5 = _4;
  this.b6 = _5;
  this.b7 = _6;
  this.b8 = _7;
  this.b9 = _8;
  this.ba = _9;
  this.b2 = _10;
}
$p = $c_T10.prototype = new $h_O();
$p.constructor = $c_T10;
/** @constructor */
function $h_T10() {
}
$h_T10.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 10;
});
$p.l = (function(n) {
  return $f_s_Product10__productElement__I__O(this, n);
});
$p.q = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, 2104595240, true);
});
$p.n = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T10) && ((((((((($m_sr_BoxesRunTime$().b(this.eX, x$0.eX) && $m_sr_BoxesRunTime$().b(this.b3, x$0.b3)) && $m_sr_BoxesRunTime$().b(this.b4, x$0.b4)) && $m_sr_BoxesRunTime$().b(this.b5, x$0.b5)) && $m_sr_BoxesRunTime$().b(this.b6, x$0.b6)) && $m_sr_BoxesRunTime$().b(this.b7, x$0.b7)) && $m_sr_BoxesRunTime$().b(this.b8, x$0.b8)) && $m_sr_BoxesRunTime$().b(this.b9, x$0.b9)) && $m_sr_BoxesRunTime$().b(this.ba, x$0.ba)) && $m_sr_BoxesRunTime$().b(this.b2, x$0.b2))));
});
$p.x = (function() {
  return "Tuple10";
});
$p.k = (function() {
  return (((((((((((((((((((("(" + this.eX) + ",") + this.b3) + ",") + this.b4) + ",") + this.b5) + ",") + this.b6) + ",") + this.b7) + ",") + this.b8) + ",") + this.b9) + ",") + this.ba) + ",") + this.b2) + ")");
});
function $isArrayOf_T10(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a0)));
}
var $d_T10 = new $TypeData().i($c_T10, "scala.Tuple10", ({
  a0: 1,
  b: 1,
  c: 1,
  bs: 1,
  a: 1
}));
/** @constructor */
function $c_T11(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11) {
  this.eY = null;
  this.bd = null;
  this.be = null;
  this.bf = null;
  this.bg = null;
  this.bh = null;
  this.bi = null;
  this.bj = null;
  this.bk = null;
  this.bb = null;
  this.bc = null;
  this.eY = _1;
  this.bd = _2;
  this.be = _3;
  this.bf = _4;
  this.bg = _5;
  this.bh = _6;
  this.bi = _7;
  this.bj = _8;
  this.bk = _9;
  this.bb = _10;
  this.bc = _11;
}
$p = $c_T11.prototype = new $h_O();
$p.constructor = $c_T11;
/** @constructor */
function $h_T11() {
}
$h_T11.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 11;
});
$p.l = (function(n) {
  return $f_s_Product11__productElement__I__O(this, n);
});
$p.q = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, 838406606, true);
});
$p.n = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T11) && (((((((((($m_sr_BoxesRunTime$().b(this.eY, x$0.eY) && $m_sr_BoxesRunTime$().b(this.bd, x$0.bd)) && $m_sr_BoxesRunTime$().b(this.be, x$0.be)) && $m_sr_BoxesRunTime$().b(this.bf, x$0.bf)) && $m_sr_BoxesRunTime$().b(this.bg, x$0.bg)) && $m_sr_BoxesRunTime$().b(this.bh, x$0.bh)) && $m_sr_BoxesRunTime$().b(this.bi, x$0.bi)) && $m_sr_BoxesRunTime$().b(this.bj, x$0.bj)) && $m_sr_BoxesRunTime$().b(this.bk, x$0.bk)) && $m_sr_BoxesRunTime$().b(this.bb, x$0.bb)) && $m_sr_BoxesRunTime$().b(this.bc, x$0.bc))));
});
$p.x = (function() {
  return "Tuple11";
});
$p.k = (function() {
  return (((((((((((((((((((((("(" + this.eY) + ",") + this.bd) + ",") + this.be) + ",") + this.bf) + ",") + this.bg) + ",") + this.bh) + ",") + this.bi) + ",") + this.bj) + ",") + this.bk) + ",") + this.bb) + ",") + this.bc) + ")");
});
function $isArrayOf_T11(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a1)));
}
var $d_T11 = new $TypeData().i($c_T11, "scala.Tuple11", ({
  a1: 1,
  b: 1,
  c: 1,
  bt: 1,
  a: 1
}));
/** @constructor */
function $c_T12(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12) {
  this.eZ = null;
  this.bo = null;
  this.bp = null;
  this.bq = null;
  this.br = null;
  this.bs = null;
  this.bt = null;
  this.bu = null;
  this.bv = null;
  this.bl = null;
  this.bm = null;
  this.bn = null;
  this.eZ = _1;
  this.bo = _2;
  this.bp = _3;
  this.bq = _4;
  this.br = _5;
  this.bs = _6;
  this.bt = _7;
  this.bu = _8;
  this.bv = _9;
  this.bl = _10;
  this.bm = _11;
  this.bn = _12;
}
$p = $c_T12.prototype = new $h_O();
$p.constructor = $c_T12;
/** @constructor */
function $h_T12() {
}
$h_T12.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 12;
});
$p.l = (function(n) {
  return $f_s_Product12__productElement__I__O(this, n);
});
$p.q = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, (-1964145863), true);
});
$p.n = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T12) && ((((((((((($m_sr_BoxesRunTime$().b(this.eZ, x$0.eZ) && $m_sr_BoxesRunTime$().b(this.bo, x$0.bo)) && $m_sr_BoxesRunTime$().b(this.bp, x$0.bp)) && $m_sr_BoxesRunTime$().b(this.bq, x$0.bq)) && $m_sr_BoxesRunTime$().b(this.br, x$0.br)) && $m_sr_BoxesRunTime$().b(this.bs, x$0.bs)) && $m_sr_BoxesRunTime$().b(this.bt, x$0.bt)) && $m_sr_BoxesRunTime$().b(this.bu, x$0.bu)) && $m_sr_BoxesRunTime$().b(this.bv, x$0.bv)) && $m_sr_BoxesRunTime$().b(this.bl, x$0.bl)) && $m_sr_BoxesRunTime$().b(this.bm, x$0.bm)) && $m_sr_BoxesRunTime$().b(this.bn, x$0.bn))));
});
$p.x = (function() {
  return "Tuple12";
});
$p.k = (function() {
  return (((((((((((((((((((((((("(" + this.eZ) + ",") + this.bo) + ",") + this.bp) + ",") + this.bq) + ",") + this.br) + ",") + this.bs) + ",") + this.bt) + ",") + this.bu) + ",") + this.bv) + ",") + this.bl) + ",") + this.bm) + ",") + this.bn) + ")");
});
function $isArrayOf_T12(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a2)));
}
var $d_T12 = new $TypeData().i($c_T12, "scala.Tuple12", ({
  a2: 1,
  b: 1,
  c: 1,
  bu: 1,
  a: 1
}));
/** @constructor */
function $c_T13(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13) {
  this.f0 = null;
  this.bA = null;
  this.bB = null;
  this.bC = null;
  this.bD = null;
  this.bE = null;
  this.bF = null;
  this.bG = null;
  this.bH = null;
  this.bw = null;
  this.bx = null;
  this.by = null;
  this.bz = null;
  this.f0 = _1;
  this.bA = _2;
  this.bB = _3;
  this.bC = _4;
  this.bD = _5;
  this.bE = _6;
  this.bF = _7;
  this.bG = _8;
  this.bH = _9;
  this.bw = _10;
  this.bx = _11;
  this.by = _12;
  this.bz = _13;
}
$p = $c_T13.prototype = new $h_O();
$p.constructor = $c_T13;
/** @constructor */
function $h_T13() {
}
$h_T13.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 13;
});
$p.l = (function(n) {
  return $f_s_Product13__productElement__I__O(this, n);
});
$p.q = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, 1224168367, true);
});
$p.n = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T13) && (((((((((((($m_sr_BoxesRunTime$().b(this.f0, x$0.f0) && $m_sr_BoxesRunTime$().b(this.bA, x$0.bA)) && $m_sr_BoxesRunTime$().b(this.bB, x$0.bB)) && $m_sr_BoxesRunTime$().b(this.bC, x$0.bC)) && $m_sr_BoxesRunTime$().b(this.bD, x$0.bD)) && $m_sr_BoxesRunTime$().b(this.bE, x$0.bE)) && $m_sr_BoxesRunTime$().b(this.bF, x$0.bF)) && $m_sr_BoxesRunTime$().b(this.bG, x$0.bG)) && $m_sr_BoxesRunTime$().b(this.bH, x$0.bH)) && $m_sr_BoxesRunTime$().b(this.bw, x$0.bw)) && $m_sr_BoxesRunTime$().b(this.bx, x$0.bx)) && $m_sr_BoxesRunTime$().b(this.by, x$0.by)) && $m_sr_BoxesRunTime$().b(this.bz, x$0.bz))));
});
$p.x = (function() {
  return "Tuple13";
});
$p.k = (function() {
  return (((((((((((((((((((((((((("(" + this.f0) + ",") + this.bA) + ",") + this.bB) + ",") + this.bC) + ",") + this.bD) + ",") + this.bE) + ",") + this.bF) + ",") + this.bG) + ",") + this.bH) + ",") + this.bw) + ",") + this.bx) + ",") + this.by) + ",") + this.bz) + ")");
});
function $isArrayOf_T13(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a3)));
}
var $d_T13 = new $TypeData().i($c_T13, "scala.Tuple13", ({
  a3: 1,
  b: 1,
  c: 1,
  bv: 1,
  a: 1
}));
/** @constructor */
function $c_T14(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14) {
  this.f1 = null;
  this.bN = null;
  this.bO = null;
  this.bP = null;
  this.bQ = null;
  this.bR = null;
  this.bS = null;
  this.bT = null;
  this.bU = null;
  this.bI = null;
  this.bJ = null;
  this.bK = null;
  this.bL = null;
  this.bM = null;
  this.f1 = _1;
  this.bN = _2;
  this.bO = _3;
  this.bP = _4;
  this.bQ = _5;
  this.bR = _6;
  this.bS = _7;
  this.bT = _8;
  this.bU = _9;
  this.bI = _10;
  this.bJ = _11;
  this.bK = _12;
  this.bL = _13;
  this.bM = _14;
}
$p = $c_T14.prototype = new $h_O();
$p.constructor = $c_T14;
/** @constructor */
function $h_T14() {
}
$h_T14.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 14;
});
$p.l = (function(n) {
  return $f_s_Product14__productElement__I__O(this, n);
});
$p.q = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, 147759069, true);
});
$p.n = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T14) && ((((((((((((($m_sr_BoxesRunTime$().b(this.f1, x$0.f1) && $m_sr_BoxesRunTime$().b(this.bN, x$0.bN)) && $m_sr_BoxesRunTime$().b(this.bO, x$0.bO)) && $m_sr_BoxesRunTime$().b(this.bP, x$0.bP)) && $m_sr_BoxesRunTime$().b(this.bQ, x$0.bQ)) && $m_sr_BoxesRunTime$().b(this.bR, x$0.bR)) && $m_sr_BoxesRunTime$().b(this.bS, x$0.bS)) && $m_sr_BoxesRunTime$().b(this.bT, x$0.bT)) && $m_sr_BoxesRunTime$().b(this.bU, x$0.bU)) && $m_sr_BoxesRunTime$().b(this.bI, x$0.bI)) && $m_sr_BoxesRunTime$().b(this.bJ, x$0.bJ)) && $m_sr_BoxesRunTime$().b(this.bK, x$0.bK)) && $m_sr_BoxesRunTime$().b(this.bL, x$0.bL)) && $m_sr_BoxesRunTime$().b(this.bM, x$0.bM))));
});
$p.x = (function() {
  return "Tuple14";
});
$p.k = (function() {
  return (((((((((((((((((((((((((((("(" + this.f1) + ",") + this.bN) + ",") + this.bO) + ",") + this.bP) + ",") + this.bQ) + ",") + this.bR) + ",") + this.bS) + ",") + this.bT) + ",") + this.bU) + ",") + this.bI) + ",") + this.bJ) + ",") + this.bK) + ",") + this.bL) + ",") + this.bM) + ")");
});
function $isArrayOf_T14(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a4)));
}
var $d_T14 = new $TypeData().i($c_T14, "scala.Tuple14", ({
  a4: 1,
  b: 1,
  c: 1,
  bw: 1,
  a: 1
}));
/** @constructor */
function $c_T15(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15) {
  this.f2 = null;
  this.c1 = null;
  this.c2 = null;
  this.c3 = null;
  this.c4 = null;
  this.c5 = null;
  this.c6 = null;
  this.c7 = null;
  this.c8 = null;
  this.bV = null;
  this.bW = null;
  this.bX = null;
  this.bY = null;
  this.bZ = null;
  this.c0 = null;
  this.f2 = _1;
  this.c1 = _2;
  this.c2 = _3;
  this.c3 = _4;
  this.c4 = _5;
  this.c5 = _6;
  this.c6 = _7;
  this.c7 = _8;
  this.c8 = _9;
  this.bV = _10;
  this.bW = _11;
  this.bX = _12;
  this.bY = _13;
  this.bZ = _14;
  this.c0 = _15;
}
$p = $c_T15.prototype = new $h_O();
$p.constructor = $c_T15;
/** @constructor */
function $h_T15() {
}
$h_T15.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 15;
});
$p.l = (function(n) {
  return $f_s_Product15__productElement__I__O(this, n);
});
$p.q = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, 1834180931, true);
});
$p.n = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T15) && (((((((((((((($m_sr_BoxesRunTime$().b(this.f2, x$0.f2) && $m_sr_BoxesRunTime$().b(this.c1, x$0.c1)) && $m_sr_BoxesRunTime$().b(this.c2, x$0.c2)) && $m_sr_BoxesRunTime$().b(this.c3, x$0.c3)) && $m_sr_BoxesRunTime$().b(this.c4, x$0.c4)) && $m_sr_BoxesRunTime$().b(this.c5, x$0.c5)) && $m_sr_BoxesRunTime$().b(this.c6, x$0.c6)) && $m_sr_BoxesRunTime$().b(this.c7, x$0.c7)) && $m_sr_BoxesRunTime$().b(this.c8, x$0.c8)) && $m_sr_BoxesRunTime$().b(this.bV, x$0.bV)) && $m_sr_BoxesRunTime$().b(this.bW, x$0.bW)) && $m_sr_BoxesRunTime$().b(this.bX, x$0.bX)) && $m_sr_BoxesRunTime$().b(this.bY, x$0.bY)) && $m_sr_BoxesRunTime$().b(this.bZ, x$0.bZ)) && $m_sr_BoxesRunTime$().b(this.c0, x$0.c0))));
});
$p.x = (function() {
  return "Tuple15";
});
$p.k = (function() {
  return (((((((((((((((((((((((((((((("(" + this.f2) + ",") + this.c1) + ",") + this.c2) + ",") + this.c3) + ",") + this.c4) + ",") + this.c5) + ",") + this.c6) + ",") + this.c7) + ",") + this.c8) + ",") + this.bV) + ",") + this.bW) + ",") + this.bX) + ",") + this.bY) + ",") + this.bZ) + ",") + this.c0) + ")");
});
function $isArrayOf_T15(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a5)));
}
var $d_T15 = new $TypeData().i($c_T15, "scala.Tuple15", ({
  a5: 1,
  b: 1,
  c: 1,
  bx: 1,
  a: 1
}));
/** @constructor */
function $c_T16(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16) {
  this.f3 = null;
  this.cg = null;
  this.ch = null;
  this.ci = null;
  this.cj = null;
  this.ck = null;
  this.cl = null;
  this.cm = null;
  this.cn = null;
  this.c9 = null;
  this.ca = null;
  this.cb = null;
  this.cc = null;
  this.cd = null;
  this.ce = null;
  this.cf = null;
  this.f3 = _1;
  this.cg = _2;
  this.ch = _3;
  this.ci = _4;
  this.cj = _5;
  this.ck = _6;
  this.cl = _7;
  this.cm = _8;
  this.cn = _9;
  this.c9 = _10;
  this.ca = _11;
  this.cb = _12;
  this.cc = _13;
  this.cd = _14;
  this.ce = _15;
  this.cf = _16;
}
$p = $c_T16.prototype = new $h_O();
$p.constructor = $c_T16;
/** @constructor */
function $h_T16() {
}
$h_T16.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 16;
});
$p.l = (function(n) {
  return $f_s_Product16__productElement__I__O(this, n);
});
$p.q = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, 499793902, true);
});
$p.n = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T16) && ((((((((((((((($m_sr_BoxesRunTime$().b(this.f3, x$0.f3) && $m_sr_BoxesRunTime$().b(this.cg, x$0.cg)) && $m_sr_BoxesRunTime$().b(this.ch, x$0.ch)) && $m_sr_BoxesRunTime$().b(this.ci, x$0.ci)) && $m_sr_BoxesRunTime$().b(this.cj, x$0.cj)) && $m_sr_BoxesRunTime$().b(this.ck, x$0.ck)) && $m_sr_BoxesRunTime$().b(this.cl, x$0.cl)) && $m_sr_BoxesRunTime$().b(this.cm, x$0.cm)) && $m_sr_BoxesRunTime$().b(this.cn, x$0.cn)) && $m_sr_BoxesRunTime$().b(this.c9, x$0.c9)) && $m_sr_BoxesRunTime$().b(this.ca, x$0.ca)) && $m_sr_BoxesRunTime$().b(this.cb, x$0.cb)) && $m_sr_BoxesRunTime$().b(this.cc, x$0.cc)) && $m_sr_BoxesRunTime$().b(this.cd, x$0.cd)) && $m_sr_BoxesRunTime$().b(this.ce, x$0.ce)) && $m_sr_BoxesRunTime$().b(this.cf, x$0.cf))));
});
$p.x = (function() {
  return "Tuple16";
});
$p.k = (function() {
  return (((((((((((((((((((((((((((((((("(" + this.f3) + ",") + this.cg) + ",") + this.ch) + ",") + this.ci) + ",") + this.cj) + ",") + this.ck) + ",") + this.cl) + ",") + this.cm) + ",") + this.cn) + ",") + this.c9) + ",") + this.ca) + ",") + this.cb) + ",") + this.cc) + ",") + this.cd) + ",") + this.ce) + ",") + this.cf) + ")");
});
function $isArrayOf_T16(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a6)));
}
var $d_T16 = new $TypeData().i($c_T16, "scala.Tuple16", ({
  a6: 1,
  b: 1,
  c: 1,
  by: 1,
  a: 1
}));
/** @constructor */
function $c_T17(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17) {
  this.f4 = null;
  this.cw = null;
  this.cx = null;
  this.cy = null;
  this.cz = null;
  this.cA = null;
  this.cB = null;
  this.cC = null;
  this.cD = null;
  this.co = null;
  this.cp = null;
  this.cq = null;
  this.cr = null;
  this.cs = null;
  this.ct = null;
  this.cu = null;
  this.cv = null;
  this.f4 = _1;
  this.cw = _2;
  this.cx = _3;
  this.cy = _4;
  this.cz = _5;
  this.cA = _6;
  this.cB = _7;
  this.cC = _8;
  this.cD = _9;
  this.co = _10;
  this.cp = _11;
  this.cq = _12;
  this.cr = _13;
  this.cs = _14;
  this.ct = _15;
  this.cu = _16;
  this.cv = _17;
}
$p = $c_T17.prototype = new $h_O();
$p.constructor = $c_T17;
/** @constructor */
function $h_T17() {
}
$h_T17.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 17;
});
$p.l = (function(n) {
  return $f_s_Product17__productElement__I__O(this, n);
});
$p.q = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, (-934366247), true);
});
$p.n = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T17) && (((((((((((((((($m_sr_BoxesRunTime$().b(this.f4, x$0.f4) && $m_sr_BoxesRunTime$().b(this.cw, x$0.cw)) && $m_sr_BoxesRunTime$().b(this.cx, x$0.cx)) && $m_sr_BoxesRunTime$().b(this.cy, x$0.cy)) && $m_sr_BoxesRunTime$().b(this.cz, x$0.cz)) && $m_sr_BoxesRunTime$().b(this.cA, x$0.cA)) && $m_sr_BoxesRunTime$().b(this.cB, x$0.cB)) && $m_sr_BoxesRunTime$().b(this.cC, x$0.cC)) && $m_sr_BoxesRunTime$().b(this.cD, x$0.cD)) && $m_sr_BoxesRunTime$().b(this.co, x$0.co)) && $m_sr_BoxesRunTime$().b(this.cp, x$0.cp)) && $m_sr_BoxesRunTime$().b(this.cq, x$0.cq)) && $m_sr_BoxesRunTime$().b(this.cr, x$0.cr)) && $m_sr_BoxesRunTime$().b(this.cs, x$0.cs)) && $m_sr_BoxesRunTime$().b(this.ct, x$0.ct)) && $m_sr_BoxesRunTime$().b(this.cu, x$0.cu)) && $m_sr_BoxesRunTime$().b(this.cv, x$0.cv))));
});
$p.x = (function() {
  return "Tuple17";
});
$p.k = (function() {
  return (((((((((((((((((((((((((((((((((("(" + this.f4) + ",") + this.cw) + ",") + this.cx) + ",") + this.cy) + ",") + this.cz) + ",") + this.cA) + ",") + this.cB) + ",") + this.cC) + ",") + this.cD) + ",") + this.co) + ",") + this.cp) + ",") + this.cq) + ",") + this.cr) + ",") + this.cs) + ",") + this.ct) + ",") + this.cu) + ",") + this.cv) + ")");
});
function $isArrayOf_T17(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a7)));
}
var $d_T17 = new $TypeData().i($c_T17, "scala.Tuple17", ({
  a7: 1,
  b: 1,
  c: 1,
  bz: 1,
  a: 1
}));
/** @constructor */
function $c_T18(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18) {
  this.f5 = null;
  this.cN = null;
  this.cO = null;
  this.cP = null;
  this.cQ = null;
  this.cR = null;
  this.cS = null;
  this.cT = null;
  this.cU = null;
  this.cE = null;
  this.cF = null;
  this.cG = null;
  this.cH = null;
  this.cI = null;
  this.cJ = null;
  this.cK = null;
  this.cL = null;
  this.cM = null;
  this.f5 = _1;
  this.cN = _2;
  this.cO = _3;
  this.cP = _4;
  this.cQ = _5;
  this.cR = _6;
  this.cS = _7;
  this.cT = _8;
  this.cU = _9;
  this.cE = _10;
  this.cF = _11;
  this.cG = _12;
  this.cH = _13;
  this.cI = _14;
  this.cJ = _15;
  this.cK = _16;
  this.cL = _17;
  this.cM = _18;
}
$p = $c_T18.prototype = new $h_O();
$p.constructor = $c_T18;
/** @constructor */
function $h_T18() {
}
$h_T18.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 18;
});
$p.l = (function(n) {
  return $f_s_Product18__productElement__I__O(this, n);
});
$p.q = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, (-937041276), true);
});
$p.n = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T18) && ((((((((((((((((($m_sr_BoxesRunTime$().b(this.f5, x$0.f5) && $m_sr_BoxesRunTime$().b(this.cN, x$0.cN)) && $m_sr_BoxesRunTime$().b(this.cO, x$0.cO)) && $m_sr_BoxesRunTime$().b(this.cP, x$0.cP)) && $m_sr_BoxesRunTime$().b(this.cQ, x$0.cQ)) && $m_sr_BoxesRunTime$().b(this.cR, x$0.cR)) && $m_sr_BoxesRunTime$().b(this.cS, x$0.cS)) && $m_sr_BoxesRunTime$().b(this.cT, x$0.cT)) && $m_sr_BoxesRunTime$().b(this.cU, x$0.cU)) && $m_sr_BoxesRunTime$().b(this.cE, x$0.cE)) && $m_sr_BoxesRunTime$().b(this.cF, x$0.cF)) && $m_sr_BoxesRunTime$().b(this.cG, x$0.cG)) && $m_sr_BoxesRunTime$().b(this.cH, x$0.cH)) && $m_sr_BoxesRunTime$().b(this.cI, x$0.cI)) && $m_sr_BoxesRunTime$().b(this.cJ, x$0.cJ)) && $m_sr_BoxesRunTime$().b(this.cK, x$0.cK)) && $m_sr_BoxesRunTime$().b(this.cL, x$0.cL)) && $m_sr_BoxesRunTime$().b(this.cM, x$0.cM))));
});
$p.x = (function() {
  return "Tuple18";
});
$p.k = (function() {
  return (((((((((((((((((((((((((((((((((((("(" + this.f5) + ",") + this.cN) + ",") + this.cO) + ",") + this.cP) + ",") + this.cQ) + ",") + this.cR) + ",") + this.cS) + ",") + this.cT) + ",") + this.cU) + ",") + this.cE) + ",") + this.cF) + ",") + this.cG) + ",") + this.cH) + ",") + this.cI) + ",") + this.cJ) + ",") + this.cK) + ",") + this.cL) + ",") + this.cM) + ")");
});
function $isArrayOf_T18(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a8)));
}
var $d_T18 = new $TypeData().i($c_T18, "scala.Tuple18", ({
  a8: 1,
  b: 1,
  c: 1,
  bA: 1,
  a: 1
}));
/** @constructor */
function $c_T19(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19) {
  this.f6 = null;
  this.d5 = null;
  this.d6 = null;
  this.d7 = null;
  this.d8 = null;
  this.d9 = null;
  this.da = null;
  this.db = null;
  this.dc = null;
  this.cV = null;
  this.cW = null;
  this.cX = null;
  this.cY = null;
  this.cZ = null;
  this.d0 = null;
  this.d1 = null;
  this.d2 = null;
  this.d3 = null;
  this.d4 = null;
  this.f6 = _1;
  this.d5 = _2;
  this.d6 = _3;
  this.d7 = _4;
  this.d8 = _5;
  this.d9 = _6;
  this.da = _7;
  this.db = _8;
  this.dc = _9;
  this.cV = _10;
  this.cW = _11;
  this.cX = _12;
  this.cY = _13;
  this.cZ = _14;
  this.d0 = _15;
  this.d1 = _16;
  this.d2 = _17;
  this.d3 = _18;
  this.d4 = _19;
}
$p = $c_T19.prototype = new $h_O();
$p.constructor = $c_T19;
/** @constructor */
function $h_T19() {
}
$h_T19.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 19;
});
$p.l = (function(n) {
  return $f_s_Product19__productElement__I__O(this, n);
});
$p.q = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, (-1955940499), true);
});
$p.n = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T19) && (((((((((((((((((($m_sr_BoxesRunTime$().b(this.f6, x$0.f6) && $m_sr_BoxesRunTime$().b(this.d5, x$0.d5)) && $m_sr_BoxesRunTime$().b(this.d6, x$0.d6)) && $m_sr_BoxesRunTime$().b(this.d7, x$0.d7)) && $m_sr_BoxesRunTime$().b(this.d8, x$0.d8)) && $m_sr_BoxesRunTime$().b(this.d9, x$0.d9)) && $m_sr_BoxesRunTime$().b(this.da, x$0.da)) && $m_sr_BoxesRunTime$().b(this.db, x$0.db)) && $m_sr_BoxesRunTime$().b(this.dc, x$0.dc)) && $m_sr_BoxesRunTime$().b(this.cV, x$0.cV)) && $m_sr_BoxesRunTime$().b(this.cW, x$0.cW)) && $m_sr_BoxesRunTime$().b(this.cX, x$0.cX)) && $m_sr_BoxesRunTime$().b(this.cY, x$0.cY)) && $m_sr_BoxesRunTime$().b(this.cZ, x$0.cZ)) && $m_sr_BoxesRunTime$().b(this.d0, x$0.d0)) && $m_sr_BoxesRunTime$().b(this.d1, x$0.d1)) && $m_sr_BoxesRunTime$().b(this.d2, x$0.d2)) && $m_sr_BoxesRunTime$().b(this.d3, x$0.d3)) && $m_sr_BoxesRunTime$().b(this.d4, x$0.d4))));
});
$p.x = (function() {
  return "Tuple19";
});
$p.k = (function() {
  return (((((((((((((((((((((((((((((((((((((("(" + this.f6) + ",") + this.d5) + ",") + this.d6) + ",") + this.d7) + ",") + this.d8) + ",") + this.d9) + ",") + this.da) + ",") + this.db) + ",") + this.dc) + ",") + this.cV) + ",") + this.cW) + ",") + this.cX) + ",") + this.cY) + ",") + this.cZ) + ",") + this.d0) + ",") + this.d1) + ",") + this.d2) + ",") + this.d3) + ",") + this.d4) + ")");
});
function $isArrayOf_T19(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a9)));
}
var $d_T19 = new $TypeData().i($c_T19, "scala.Tuple19", ({
  a9: 1,
  b: 1,
  c: 1,
  bB: 1,
  a: 1
}));
/** @constructor */
function $c_T2(_1, _2) {
  this.af = null;
  this.a8 = null;
  this.af = _1;
  this.a8 = _2;
}
$p = $c_T2.prototype = new $h_O();
$p.constructor = $c_T2;
/** @constructor */
function $h_T2() {
}
$h_T2.prototype = $p;
$p.s = (function() {
  return 2;
});
$p.l = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n);
});
$p.k = (function() {
  return (((("(" + this.af) + ",") + this.a8) + ")");
});
$p.x = (function() {
  return "Tuple2";
});
$p.A = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.q = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, (-116390334), true);
});
$p.n = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T2) && ($m_sr_BoxesRunTime$().b(this.af, x$1.af) && $m_sr_BoxesRunTime$().b(this.a8, x$1.a8))));
});
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aa)));
}
var $d_T2 = new $TypeData().i($c_T2, "scala.Tuple2", ({
  aa: 1,
  bC: 1,
  c: 1,
  b: 1,
  a: 1
}));
/** @constructor */
function $c_T20(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20) {
  this.f7 = null;
  this.dn = null;
  this.dq = null;
  this.dr = null;
  this.ds = null;
  this.dt = null;
  this.du = null;
  this.dv = null;
  this.dw = null;
  this.dd = null;
  this.de = null;
  this.df = null;
  this.dg = null;
  this.dh = null;
  this.di = null;
  this.dj = null;
  this.dk = null;
  this.dl = null;
  this.dm = null;
  this.dp = null;
  this.f7 = _1;
  this.dn = _2;
  this.dq = _3;
  this.dr = _4;
  this.ds = _5;
  this.dt = _6;
  this.du = _7;
  this.dv = _8;
  this.dw = _9;
  this.dd = _10;
  this.de = _11;
  this.df = _12;
  this.dg = _13;
  this.dh = _14;
  this.di = _15;
  this.dj = _16;
  this.dk = _17;
  this.dl = _18;
  this.dm = _19;
  this.dp = _20;
}
$p = $c_T20.prototype = new $h_O();
$p.constructor = $c_T20;
/** @constructor */
function $h_T20() {
}
$h_T20.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 20;
});
$p.l = (function(n) {
  return $f_s_Product20__productElement__I__O(this, n);
});
$p.q = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, 1328807075, true);
});
$p.n = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T20) && ((((((((((((((((((($m_sr_BoxesRunTime$().b(this.f7, x$0.f7) && $m_sr_BoxesRunTime$().b(this.dn, x$0.dn)) && $m_sr_BoxesRunTime$().b(this.dq, x$0.dq)) && $m_sr_BoxesRunTime$().b(this.dr, x$0.dr)) && $m_sr_BoxesRunTime$().b(this.ds, x$0.ds)) && $m_sr_BoxesRunTime$().b(this.dt, x$0.dt)) && $m_sr_BoxesRunTime$().b(this.du, x$0.du)) && $m_sr_BoxesRunTime$().b(this.dv, x$0.dv)) && $m_sr_BoxesRunTime$().b(this.dw, x$0.dw)) && $m_sr_BoxesRunTime$().b(this.dd, x$0.dd)) && $m_sr_BoxesRunTime$().b(this.de, x$0.de)) && $m_sr_BoxesRunTime$().b(this.df, x$0.df)) && $m_sr_BoxesRunTime$().b(this.dg, x$0.dg)) && $m_sr_BoxesRunTime$().b(this.dh, x$0.dh)) && $m_sr_BoxesRunTime$().b(this.di, x$0.di)) && $m_sr_BoxesRunTime$().b(this.dj, x$0.dj)) && $m_sr_BoxesRunTime$().b(this.dk, x$0.dk)) && $m_sr_BoxesRunTime$().b(this.dl, x$0.dl)) && $m_sr_BoxesRunTime$().b(this.dm, x$0.dm)) && $m_sr_BoxesRunTime$().b(this.dp, x$0.dp))));
});
$p.x = (function() {
  return "Tuple20";
});
$p.k = (function() {
  return (((((((((((((((((((((((((((((((((((((((("(" + this.f7) + ",") + this.dn) + ",") + this.dq) + ",") + this.dr) + ",") + this.ds) + ",") + this.dt) + ",") + this.du) + ",") + this.dv) + ",") + this.dw) + ",") + this.dd) + ",") + this.de) + ",") + this.df) + ",") + this.dg) + ",") + this.dh) + ",") + this.di) + ",") + this.dj) + ",") + this.dk) + ",") + this.dl) + ",") + this.dm) + ",") + this.dp) + ")");
});
function $isArrayOf_T20(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ab)));
}
var $d_T20 = new $TypeData().i($c_T20, "scala.Tuple20", ({
  ab: 1,
  b: 1,
  c: 1,
  bD: 1,
  a: 1
}));
/** @constructor */
function $c_T21(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21) {
  this.f8 = null;
  this.dH = null;
  this.dK = null;
  this.dL = null;
  this.dM = null;
  this.dN = null;
  this.dO = null;
  this.dP = null;
  this.dQ = null;
  this.dx = null;
  this.dy = null;
  this.dz = null;
  this.dA = null;
  this.dB = null;
  this.dC = null;
  this.dD = null;
  this.dE = null;
  this.dF = null;
  this.dG = null;
  this.dI = null;
  this.dJ = null;
  this.f8 = _1;
  this.dH = _2;
  this.dK = _3;
  this.dL = _4;
  this.dM = _5;
  this.dN = _6;
  this.dO = _7;
  this.dP = _8;
  this.dQ = _9;
  this.dx = _10;
  this.dy = _11;
  this.dz = _12;
  this.dA = _13;
  this.dB = _14;
  this.dC = _15;
  this.dD = _16;
  this.dE = _17;
  this.dF = _18;
  this.dG = _19;
  this.dI = _20;
  this.dJ = _21;
}
$p = $c_T21.prototype = new $h_O();
$p.constructor = $c_T21;
/** @constructor */
function $h_T21() {
}
$h_T21.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 21;
});
$p.l = (function(n) {
  return $f_s_Product21__productElement__I__O(this, n);
});
$p.q = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, (-21288119), true);
});
$p.n = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T21) && (((((((((((((((((((($m_sr_BoxesRunTime$().b(this.f8, x$0.f8) && $m_sr_BoxesRunTime$().b(this.dH, x$0.dH)) && $m_sr_BoxesRunTime$().b(this.dK, x$0.dK)) && $m_sr_BoxesRunTime$().b(this.dL, x$0.dL)) && $m_sr_BoxesRunTime$().b(this.dM, x$0.dM)) && $m_sr_BoxesRunTime$().b(this.dN, x$0.dN)) && $m_sr_BoxesRunTime$().b(this.dO, x$0.dO)) && $m_sr_BoxesRunTime$().b(this.dP, x$0.dP)) && $m_sr_BoxesRunTime$().b(this.dQ, x$0.dQ)) && $m_sr_BoxesRunTime$().b(this.dx, x$0.dx)) && $m_sr_BoxesRunTime$().b(this.dy, x$0.dy)) && $m_sr_BoxesRunTime$().b(this.dz, x$0.dz)) && $m_sr_BoxesRunTime$().b(this.dA, x$0.dA)) && $m_sr_BoxesRunTime$().b(this.dB, x$0.dB)) && $m_sr_BoxesRunTime$().b(this.dC, x$0.dC)) && $m_sr_BoxesRunTime$().b(this.dD, x$0.dD)) && $m_sr_BoxesRunTime$().b(this.dE, x$0.dE)) && $m_sr_BoxesRunTime$().b(this.dF, x$0.dF)) && $m_sr_BoxesRunTime$().b(this.dG, x$0.dG)) && $m_sr_BoxesRunTime$().b(this.dI, x$0.dI)) && $m_sr_BoxesRunTime$().b(this.dJ, x$0.dJ))));
});
$p.x = (function() {
  return "Tuple21";
});
$p.k = (function() {
  return (((((((((((((((((((((((((((((((((((((((((("(" + this.f8) + ",") + this.dH) + ",") + this.dK) + ",") + this.dL) + ",") + this.dM) + ",") + this.dN) + ",") + this.dO) + ",") + this.dP) + ",") + this.dQ) + ",") + this.dx) + ",") + this.dy) + ",") + this.dz) + ",") + this.dA) + ",") + this.dB) + ",") + this.dC) + ",") + this.dD) + ",") + this.dE) + ",") + this.dF) + ",") + this.dG) + ",") + this.dI) + ",") + this.dJ) + ")");
});
function $isArrayOf_T21(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ac)));
}
var $d_T21 = new $TypeData().i($c_T21, "scala.Tuple21", ({
  ac: 1,
  b: 1,
  c: 1,
  bE: 1,
  a: 1
}));
/** @constructor */
function $c_T22(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22) {
  this.f9 = null;
  this.e1 = null;
  this.e5 = null;
  this.e6 = null;
  this.e7 = null;
  this.e8 = null;
  this.e9 = null;
  this.ea = null;
  this.eb = null;
  this.dR = null;
  this.dS = null;
  this.dT = null;
  this.dU = null;
  this.dV = null;
  this.dW = null;
  this.dX = null;
  this.dY = null;
  this.dZ = null;
  this.e0 = null;
  this.e2 = null;
  this.e3 = null;
  this.e4 = null;
  this.f9 = _1;
  this.e1 = _2;
  this.e5 = _3;
  this.e6 = _4;
  this.e7 = _5;
  this.e8 = _6;
  this.e9 = _7;
  this.ea = _8;
  this.eb = _9;
  this.dR = _10;
  this.dS = _11;
  this.dT = _12;
  this.dU = _13;
  this.dV = _14;
  this.dW = _15;
  this.dX = _16;
  this.dY = _17;
  this.dZ = _18;
  this.e0 = _19;
  this.e2 = _20;
  this.e3 = _21;
  this.e4 = _22;
}
$p = $c_T22.prototype = new $h_O();
$p.constructor = $c_T22;
/** @constructor */
function $h_T22() {
}
$h_T22.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 22;
});
$p.l = (function(n) {
  return $f_s_Product22__productElement__I__O(this, n);
});
$p.q = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, (-139445068), true);
});
$p.n = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T22) && ((((((((((((((((((((($m_sr_BoxesRunTime$().b(this.f9, x$0.f9) && $m_sr_BoxesRunTime$().b(this.e1, x$0.e1)) && $m_sr_BoxesRunTime$().b(this.e5, x$0.e5)) && $m_sr_BoxesRunTime$().b(this.e6, x$0.e6)) && $m_sr_BoxesRunTime$().b(this.e7, x$0.e7)) && $m_sr_BoxesRunTime$().b(this.e8, x$0.e8)) && $m_sr_BoxesRunTime$().b(this.e9, x$0.e9)) && $m_sr_BoxesRunTime$().b(this.ea, x$0.ea)) && $m_sr_BoxesRunTime$().b(this.eb, x$0.eb)) && $m_sr_BoxesRunTime$().b(this.dR, x$0.dR)) && $m_sr_BoxesRunTime$().b(this.dS, x$0.dS)) && $m_sr_BoxesRunTime$().b(this.dT, x$0.dT)) && $m_sr_BoxesRunTime$().b(this.dU, x$0.dU)) && $m_sr_BoxesRunTime$().b(this.dV, x$0.dV)) && $m_sr_BoxesRunTime$().b(this.dW, x$0.dW)) && $m_sr_BoxesRunTime$().b(this.dX, x$0.dX)) && $m_sr_BoxesRunTime$().b(this.dY, x$0.dY)) && $m_sr_BoxesRunTime$().b(this.dZ, x$0.dZ)) && $m_sr_BoxesRunTime$().b(this.e0, x$0.e0)) && $m_sr_BoxesRunTime$().b(this.e2, x$0.e2)) && $m_sr_BoxesRunTime$().b(this.e3, x$0.e3)) && $m_sr_BoxesRunTime$().b(this.e4, x$0.e4))));
});
$p.x = (function() {
  return "Tuple22";
});
$p.k = (function() {
  return (((((((((((((((((((((((((((((((((((((((((((("(" + this.f9) + ",") + this.e1) + ",") + this.e5) + ",") + this.e6) + ",") + this.e7) + ",") + this.e8) + ",") + this.e9) + ",") + this.ea) + ",") + this.eb) + ",") + this.dR) + ",") + this.dS) + ",") + this.dT) + ",") + this.dU) + ",") + this.dV) + ",") + this.dW) + ",") + this.dX) + ",") + this.dY) + ",") + this.dZ) + ",") + this.e0) + ",") + this.e2) + ",") + this.e3) + ",") + this.e4) + ")");
});
function $isArrayOf_T22(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ad)));
}
var $d_T22 = new $TypeData().i($c_T22, "scala.Tuple22", ({
  ad: 1,
  b: 1,
  c: 1,
  bF: 1,
  a: 1
}));
/** @constructor */
function $c_T3(_1, _2, _3) {
  this.aM = null;
  this.aD = null;
  this.aE = null;
  this.aM = _1;
  this.aD = _2;
  this.aE = _3;
}
$p = $c_T3.prototype = new $h_O();
$p.constructor = $c_T3;
/** @constructor */
function $h_T3() {
}
$h_T3.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 3;
});
$p.l = (function(n) {
  return $f_s_Product3__productElement__I__O(this, n);
});
$p.q = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, (-192629203), true);
});
$p.n = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T3) && (($m_sr_BoxesRunTime$().b(this.aM, x$0.aM) && $m_sr_BoxesRunTime$().b(this.aD, x$0.aD)) && $m_sr_BoxesRunTime$().b(this.aE, x$0.aE))));
});
$p.x = (function() {
  return "Tuple3";
});
$p.k = (function() {
  return (((((("(" + this.aM) + ",") + this.aD) + ",") + this.aE) + ")");
});
function $isArrayOf_T3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ae)));
}
var $d_T3 = new $TypeData().i($c_T3, "scala.Tuple3", ({
  ae: 1,
  b: 1,
  c: 1,
  bG: 1,
  a: 1
}));
/** @constructor */
function $c_T4(_1, _2, _3, _4) {
  this.ec = null;
  this.aN = null;
  this.aO = null;
  this.aP = null;
  this.ec = _1;
  this.aN = _2;
  this.aO = _3;
  this.aP = _4;
}
$p = $c_T4.prototype = new $h_O();
$p.constructor = $c_T4;
/** @constructor */
function $h_T4() {
}
$h_T4.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 4;
});
$p.l = (function(n) {
  return $f_s_Product4__productElement__I__O(this, n);
});
$p.q = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, (-1542739752), true);
});
$p.n = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T4) && ((($m_sr_BoxesRunTime$().b(this.ec, x$0.ec) && $m_sr_BoxesRunTime$().b(this.aN, x$0.aN)) && $m_sr_BoxesRunTime$().b(this.aO, x$0.aO)) && $m_sr_BoxesRunTime$().b(this.aP, x$0.aP))));
});
$p.x = (function() {
  return "Tuple4";
});
$p.k = (function() {
  return (((((((("(" + this.ec) + ",") + this.aN) + ",") + this.aO) + ",") + this.aP) + ")");
});
function $isArrayOf_T4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.af)));
}
var $d_T4 = new $TypeData().i($c_T4, "scala.Tuple4", ({
  af: 1,
  b: 1,
  c: 1,
  bH: 1,
  a: 1
}));
/** @constructor */
function $c_T5(_1, _2, _3, _4, _5) {
  this.fa = null;
  this.ed = null;
  this.ee = null;
  this.ef = null;
  this.eg = null;
  this.fa = _1;
  this.ed = _2;
  this.ee = _3;
  this.ef = _4;
  this.eg = _5;
}
$p = $c_T5.prototype = new $h_O();
$p.constructor = $c_T5;
/** @constructor */
function $h_T5() {
}
$h_T5.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 5;
});
$p.l = (function(n) {
  return $f_s_Product5__productElement__I__O(this, n);
});
$p.q = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, 417360321, true);
});
$p.n = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T5) && (((($m_sr_BoxesRunTime$().b(this.fa, x$0.fa) && $m_sr_BoxesRunTime$().b(this.ed, x$0.ed)) && $m_sr_BoxesRunTime$().b(this.ee, x$0.ee)) && $m_sr_BoxesRunTime$().b(this.ef, x$0.ef)) && $m_sr_BoxesRunTime$().b(this.eg, x$0.eg))));
});
$p.x = (function() {
  return "Tuple5";
});
$p.k = (function() {
  return (((((((((("(" + this.fa) + ",") + this.ed) + ",") + this.ee) + ",") + this.ef) + ",") + this.eg) + ")");
});
function $isArrayOf_T5(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ag)));
}
var $d_T5 = new $TypeData().i($c_T5, "scala.Tuple5", ({
  ag: 1,
  b: 1,
  c: 1,
  bI: 1,
  a: 1
}));
/** @constructor */
function $c_T6(_1, _2, _3, _4, _5, _6) {
  this.fb = null;
  this.eh = null;
  this.ei = null;
  this.ej = null;
  this.ek = null;
  this.el = null;
  this.fb = _1;
  this.eh = _2;
  this.ei = _3;
  this.ej = _4;
  this.ek = _5;
  this.el = _6;
}
$p = $c_T6.prototype = new $h_O();
$p.constructor = $c_T6;
/** @constructor */
function $h_T6() {
}
$h_T6.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 6;
});
$p.l = (function(n) {
  return $f_s_Product6__productElement__I__O(this, n);
});
$p.q = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, (-1037607828), true);
});
$p.n = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T6) && ((((($m_sr_BoxesRunTime$().b(this.fb, x$0.fb) && $m_sr_BoxesRunTime$().b(this.eh, x$0.eh)) && $m_sr_BoxesRunTime$().b(this.ei, x$0.ei)) && $m_sr_BoxesRunTime$().b(this.ej, x$0.ej)) && $m_sr_BoxesRunTime$().b(this.ek, x$0.ek)) && $m_sr_BoxesRunTime$().b(this.el, x$0.el))));
});
$p.x = (function() {
  return "Tuple6";
});
$p.k = (function() {
  return (((((((((((("(" + this.fb) + ",") + this.eh) + ",") + this.ei) + ",") + this.ej) + ",") + this.ek) + ",") + this.el) + ")");
});
function $isArrayOf_T6(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ah)));
}
var $d_T6 = new $TypeData().i($c_T6, "scala.Tuple6", ({
  ah: 1,
  b: 1,
  c: 1,
  bJ: 1,
  a: 1
}));
/** @constructor */
function $c_T7(_1, _2, _3, _4, _5, _6, _7) {
  this.fc = null;
  this.em = null;
  this.en = null;
  this.eo = null;
  this.ep = null;
  this.eq = null;
  this.er = null;
  this.fc = _1;
  this.em = _2;
  this.en = _3;
  this.eo = _4;
  this.ep = _5;
  this.eq = _6;
  this.er = _7;
}
$p = $c_T7.prototype = new $h_O();
$p.constructor = $c_T7;
/** @constructor */
function $h_T7() {
}
$h_T7.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 7;
});
$p.l = (function(n) {
  return $f_s_Product7__productElement__I__O(this, n);
});
$p.q = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, (-1050932777), true);
});
$p.n = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T7) && (((((($m_sr_BoxesRunTime$().b(this.fc, x$0.fc) && $m_sr_BoxesRunTime$().b(this.em, x$0.em)) && $m_sr_BoxesRunTime$().b(this.en, x$0.en)) && $m_sr_BoxesRunTime$().b(this.eo, x$0.eo)) && $m_sr_BoxesRunTime$().b(this.ep, x$0.ep)) && $m_sr_BoxesRunTime$().b(this.eq, x$0.eq)) && $m_sr_BoxesRunTime$().b(this.er, x$0.er))));
});
$p.x = (function() {
  return "Tuple7";
});
$p.k = (function() {
  return (((((((((((((("(" + this.fc) + ",") + this.em) + ",") + this.en) + ",") + this.eo) + ",") + this.ep) + ",") + this.eq) + ",") + this.er) + ")");
});
function $isArrayOf_T7(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ai)));
}
var $d_T7 = new $TypeData().i($c_T7, "scala.Tuple7", ({
  ai: 1,
  b: 1,
  c: 1,
  bK: 1,
  a: 1
}));
/** @constructor */
function $c_T8(_1, _2, _3, _4, _5, _6, _7, _8) {
  this.fd = null;
  this.es = null;
  this.et = null;
  this.eu = null;
  this.ev = null;
  this.ew = null;
  this.ex = null;
  this.ey = null;
  this.fd = _1;
  this.es = _2;
  this.et = _3;
  this.eu = _4;
  this.ev = _5;
  this.ew = _6;
  this.ex = _7;
  this.ey = _8;
}
$p = $c_T8.prototype = new $h_O();
$p.constructor = $c_T8;
/** @constructor */
function $h_T8() {
}
$h_T8.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 8;
});
$p.l = (function(n) {
  return $f_s_Product8__productElement__I__O(this, n);
});
$p.q = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, 1998822530, true);
});
$p.n = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T8) && ((((((($m_sr_BoxesRunTime$().b(this.fd, x$0.fd) && $m_sr_BoxesRunTime$().b(this.es, x$0.es)) && $m_sr_BoxesRunTime$().b(this.et, x$0.et)) && $m_sr_BoxesRunTime$().b(this.eu, x$0.eu)) && $m_sr_BoxesRunTime$().b(this.ev, x$0.ev)) && $m_sr_BoxesRunTime$().b(this.ew, x$0.ew)) && $m_sr_BoxesRunTime$().b(this.ex, x$0.ex)) && $m_sr_BoxesRunTime$().b(this.ey, x$0.ey))));
});
$p.x = (function() {
  return "Tuple8";
});
$p.k = (function() {
  return (((((((((((((((("(" + this.fd) + ",") + this.es) + ",") + this.et) + ",") + this.eu) + ",") + this.ev) + ",") + this.ew) + ",") + this.ex) + ",") + this.ey) + ")");
});
function $isArrayOf_T8(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aj)));
}
var $d_T8 = new $TypeData().i($c_T8, "scala.Tuple8", ({
  aj: 1,
  b: 1,
  c: 1,
  bL: 1,
  a: 1
}));
/** @constructor */
function $c_T9(_1, _2, _3, _4, _5, _6, _7, _8, _9) {
  this.fe = null;
  this.ez = null;
  this.eA = null;
  this.eB = null;
  this.eC = null;
  this.eD = null;
  this.eE = null;
  this.eF = null;
  this.eG = null;
  this.fe = _1;
  this.ez = _2;
  this.eA = _3;
  this.eB = _4;
  this.eC = _5;
  this.eD = _6;
  this.eE = _7;
  this.eF = _8;
  this.eG = _9;
}
$p = $c_T9.prototype = new $h_O();
$p.constructor = $c_T9;
/** @constructor */
function $h_T9() {
}
$h_T9.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 9;
});
$p.l = (function(n) {
  return $f_s_Product9__productElement__I__O(this, n);
});
$p.q = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, (-1807911176), true);
});
$p.n = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T9) && (((((((($m_sr_BoxesRunTime$().b(this.fe, x$0.fe) && $m_sr_BoxesRunTime$().b(this.ez, x$0.ez)) && $m_sr_BoxesRunTime$().b(this.eA, x$0.eA)) && $m_sr_BoxesRunTime$().b(this.eB, x$0.eB)) && $m_sr_BoxesRunTime$().b(this.eC, x$0.eC)) && $m_sr_BoxesRunTime$().b(this.eD, x$0.eD)) && $m_sr_BoxesRunTime$().b(this.eE, x$0.eE)) && $m_sr_BoxesRunTime$().b(this.eF, x$0.eF)) && $m_sr_BoxesRunTime$().b(this.eG, x$0.eG))));
});
$p.x = (function() {
  return "Tuple9";
});
$p.k = (function() {
  return (((((((((((((((((("(" + this.fe) + ",") + this.ez) + ",") + this.eA) + ",") + this.eB) + ",") + this.eC) + ",") + this.eD) + ",") + this.eE) + ",") + this.eF) + ",") + this.eG) + ")");
});
function $isArrayOf_T9(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ak)));
}
var $d_T9 = new $TypeData().i($c_T9, "scala.Tuple9", ({
  ak: 1,
  b: 1,
  c: 1,
  bM: 1,
  a: 1
}));
function $f_sc_Iterable__toString__T($thiz) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, ($thiz.fA() + "("), ", ", ")");
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
$p.C = (function() {
  return false;
});
$p.mA = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator");
});
$p.U = (function() {
  return 0;
});
$p.B = (function() {
  this.mA();
});
$p.hs = (function(from, until) {
  return this;
});
var $d_sc_Iterator$$anon$19 = new $TypeData().i($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  bW: 1,
  n: 1,
  d: 1,
  e: 1,
  s: 1
}));
function $p_sc_Iterator$ConcatIterator__merge$1__V($thiz) {
  while (true) {
    if (($thiz.Y instanceof $c_sc_Iterator$ConcatIterator)) {
      var c = $thiz.Y;
      $thiz.Y = c.Y;
      $thiz.aR = c.aR;
      if ((c.aa !== null)) {
        if (($thiz.a9 === null)) {
          $thiz.a9 = c.a9;
        }
        var x$proxy10 = c.a9;
        if ((x$proxy10 === null)) {
          $m_sr_Scala3RunTime$().hn();
        }
        x$proxy10.fG = $thiz.aa;
        $thiz.aa = c.aa;
      }
    } else {
      return (void 0);
    }
  }
}
function $p_sc_Iterator$ConcatIterator__advance$1__Z($thiz) {
  while (true) {
    if (($thiz.aa === null)) {
      $thiz.Y = null;
      $thiz.a9 = null;
      return false;
    } else {
      $thiz.Y = $thiz.aa.m1();
      if (($thiz.a9 === $thiz.aa)) {
        var x$proxy12 = $thiz.a9;
        if ((x$proxy12 === null)) {
          $m_sr_Scala3RunTime$().hn();
        }
        $thiz.a9 = x$proxy12.fG;
      }
      $thiz.aa = $thiz.aa.fG;
      $p_sc_Iterator$ConcatIterator__merge$1__V($thiz);
      if ($thiz.aR) {
        return true;
      } else {
        if ((!(($thiz.Y !== null) && $thiz.Y.C()))) {
          continue;
        }
        $thiz.aR = true;
        return true;
      }
    }
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIterator(from) {
  this.Y = null;
  this.aa = null;
  this.a9 = null;
  this.aR = false;
  this.Y = from;
  this.aa = null;
  this.a9 = null;
  this.aR = false;
}
$p = $c_sc_Iterator$ConcatIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$ConcatIterator;
/** @constructor */
function $h_sc_Iterator$ConcatIterator() {
}
$h_sc_Iterator$ConcatIterator.prototype = $p;
$p.C = (function() {
  if (this.aR) {
    return true;
  } else if ((this.Y !== null)) {
    if (this.Y.C()) {
      this.aR = true;
      return true;
    } else {
      return $p_sc_Iterator$ConcatIterator__advance$1__Z(this);
    }
  } else {
    return false;
  }
});
$p.B = (function() {
  if (this.C()) {
    this.aR = false;
    var x$proxy13 = this.Y;
    if ((x$proxy13 === null)) {
      $m_sr_Scala3RunTime$().hn();
    }
    return x$proxy13.B();
  } else {
    return $m_sc_Iterator$().aG.B();
  }
});
$p.lv = (function(that) {
  var c = new $c_sc_Iterator$ConcatIteratorCell(that, null);
  if ((this.aa === null)) {
    this.aa = c;
    this.a9 = c;
  } else {
    var x$proxy14 = this.a9;
    if ((x$proxy14 === null)) {
      $m_sr_Scala3RunTime$().hn();
    }
    x$proxy14.fG = c;
    this.a9 = c;
  }
  if ((this.Y === null)) {
    this.Y = $m_sc_Iterator$().aG;
  }
  return this;
});
function $isArrayOf_sc_Iterator$ConcatIterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ap)));
}
var $d_sc_Iterator$ConcatIterator = new $TypeData().i($c_sc_Iterator$ConcatIterator, "scala.collection.Iterator$ConcatIterator", ({
  ap: 1,
  n: 1,
  d: 1,
  e: 1,
  s: 1
}));
function $p_sc_Iterator$SliceIterator__skip__V($thiz) {
  while (($thiz.aH > 0)) {
    if ($thiz.aS.C()) {
      $thiz.aS.B();
      $thiz.aH = (($thiz.aH - 1) | 0);
    } else {
      $thiz.aH = 0;
    }
  }
}
function $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I($thiz, lo$1) {
  if (($thiz.a2 < 0)) {
    return (-1);
  } else {
    var that = (($thiz.a2 - lo$1) | 0);
    return ((that < 0) ? 0 : that);
  }
}
/** @constructor */
function $c_sc_Iterator$SliceIterator(underlying, start, limit) {
  this.aS = null;
  this.a2 = 0;
  this.aH = 0;
  this.aS = underlying;
  this.a2 = limit;
  this.aH = start;
}
$p = $c_sc_Iterator$SliceIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$SliceIterator;
/** @constructor */
function $h_sc_Iterator$SliceIterator() {
}
$h_sc_Iterator$SliceIterator.prototype = $p;
$p.U = (function() {
  var size = this.aS.U();
  if ((size < 0)) {
    return (-1);
  } else {
    var that = ((size - this.aH) | 0);
    var dropSize = ((that < 0) ? 0 : that);
    if ((this.a2 < 0)) {
      return dropSize;
    } else {
      var x = this.a2;
      return ((x < dropSize) ? x : dropSize);
    }
  }
});
$p.C = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  return ((this.a2 !== 0) && this.aS.C());
});
$p.B = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  if ((this.a2 > 0)) {
    this.a2 = ((this.a2 - 1) | 0);
    return this.aS.B();
  } else {
    return ((this.a2 < 0) ? this.aS.B() : $m_sc_Iterator$().aG.B());
  }
});
$p.hs = (function(from, until) {
  var lo = ((from > 0) ? from : 0);
  if ((until < 0)) {
    var rest = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
  } else if ((until <= lo)) {
    var rest = 0;
  } else if ((this.a2 < 0)) {
    var rest = ((until - lo) | 0);
  } else {
    var x = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
    var that = ((until - lo) | 0);
    var rest = ((x < that) ? x : that);
  }
  var sum = ((this.aH + lo) | 0);
  if ((rest === 0)) {
    return $m_sc_Iterator$().aG;
  } else if ((sum < 0)) {
    this.aH = 2147483647;
    this.a2 = 0;
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => new $c_sc_Iterator$SliceIterator(this.aS, ((sum - 2147483647) | 0), rest))));
  } else {
    this.aH = sum;
    this.a2 = rest;
    return this;
  }
});
var $d_sc_Iterator$SliceIterator = new $TypeData().i($c_sc_Iterator$SliceIterator, "scala.collection.Iterator$SliceIterator", ({
  bY: 1,
  n: 1,
  d: 1,
  e: 1,
  s: 1
}));
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw new $c_jl_IndexOutOfBoundsException(("" + n));
  }
  var skipped = $thiz.lE(n);
  if (skipped.M()) {
    throw new $c_jl_IndexOutOfBoundsException(("" + n));
  }
  return skipped.ix();
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
      if ((((!a$tailLocal1.M()) && (!b$tailLocal1.M())) && $m_sr_BoxesRunTime$().b(a$tailLocal1.ix(), b$tailLocal1.ix()))) {
        var a$tailLocal1$tmp1 = a$tailLocal1.iU();
        var b$tailLocal1$tmp1 = b$tailLocal1.iU();
        a$tailLocal1 = a$tailLocal1$tmp1;
        b$tailLocal1 = b$tailLocal1$tmp1;
        continue;
      }
      return (a$tailLocal1.M() && b$tailLocal1.M());
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
  cd: 1,
  a: 1,
  ao: 1,
  c0: 1,
  c4: 1
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
  this.ji = null;
  this.fI = 0;
  this.jh = 0;
  this.ji = x$1;
  this.fI = 0;
  this.jh = x$1.s();
}
$p = $c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $p;
$p.C = (function() {
  return (this.fI < this.jh);
});
$p.B = (function() {
  var result = this.ji.l(this.fI);
  this.fI = ((1 + this.fI) | 0);
  return result;
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().i($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
  cN: 1,
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.V)));
}
var $d_jl_Double = new $TypeData().i(0, "java.lang.Double", ({
  V: 1,
  m: 1,
  a: 1,
  h: 1,
  g: 1,
  y: 1
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
  aY: 1,
  m: 1,
  a: 1,
  h: 1,
  g: 1,
  y: 1
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
  b0: 1,
  m: 1,
  a: 1,
  h: 1,
  g: 1,
  y: 1
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
  return $m_RTLong$().kW($thiz, $thizhi);
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.X)));
}
var $d_jl_Long = new $TypeData().i(0, "java.lang.Long", ({
  X: 1,
  m: 1,
  a: 1,
  h: 1,
  g: 1,
  y: 1
}), ((x) => (x instanceof $Long)));
class $c_jl_NumberFormatException extends $c_jl_IllegalArgumentException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_NumberFormatException = new $TypeData().i($c_jl_NumberFormatException, "java.lang.NumberFormatException", ({
  b3: 1,
  W: 1,
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
  var str = $m_jl_Character$().n1(ch);
  return ($thiz.indexOf(str) | 0);
}
function $f_T__toString__T($thiz) {
  return $thiz;
}
var $d_T = new $TypeData().i(0, "java.lang.String", ({
  b6: 1,
  a: 1,
  h: 1,
  E: 1,
  g: 1,
  y: 1
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
$p.iw = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.is = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.fA = (function() {
  return this.eU();
});
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator(xs) {
  this.gD = null;
  this.aF = 0;
  this.fF = 0;
  this.gD = xs;
  this.aF = 0;
  this.fF = $m_jl_reflect_Array$().gi(this.gD);
}
$p = $c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
}
$h_sc_ArrayOps$ArrayIterator.prototype = $p;
$p.U = (function() {
  return ((this.fF - this.aF) | 0);
});
$p.C = (function() {
  return (this.aF < this.fF);
});
$p.B = (function() {
  if ((this.aF >= $m_jl_reflect_Array$().gi(this.gD))) {
    $m_sc_Iterator$().aG.B();
  }
  var r = $m_sr_ScalaRunTime$().fz(this.gD, this.aF);
  this.aF = ((1 + this.aF) | 0);
  return r;
});
$p.hk = (function(n) {
  if ((n > 0)) {
    var newPos = ((this.aF + n) | 0);
    if ((newPos < 0)) {
      var $x_1 = this.fF;
    } else {
      var a = this.fF;
      var $x_1 = ((a < newPos) ? a : newPos);
    }
    this.aF = $x_1;
  }
  return this;
});
var $d_sc_ArrayOps$ArrayIterator = new $TypeData().i($c_sc_ArrayOps$ArrayIterator, "scala.collection.ArrayOps$ArrayIterator", ({
  bQ: 1,
  n: 1,
  d: 1,
  e: 1,
  s: 1,
  a: 1
}));
function $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I($thiz, value) {
  return ((value < 0) ? 0 : ((value > $thiz.ag) ? $thiz.ag : value));
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator(self) {
  this.j4 = null;
  this.aQ = 0;
  this.ag = 0;
  this.j4 = self;
  this.aQ = 0;
  this.ag = self.D();
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $p;
$p.U = (function() {
  return this.ag;
});
$p.C = (function() {
  return (this.ag > 0);
});
$p.B = (function() {
  if ((this.ag > 0)) {
    var r = this.j4.L(this.aQ);
    this.aQ = ((1 + this.aQ) | 0);
    this.ag = ((this.ag - 1) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().aG.B();
  }
});
$p.hk = (function(n) {
  if ((n > 0)) {
    this.aQ = ((this.aQ + n) | 0);
    var b = ((this.ag - n) | 0);
    this.ag = ((b < 0) ? 0 : b);
  }
  return this;
});
$p.hs = (function(from, until) {
  var formatFrom = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, from);
  var formatUntil = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, until);
  var b = ((formatUntil - formatFrom) | 0);
  this.ag = ((b < 0) ? 0 : b);
  this.aQ = ((this.aQ + formatFrom) | 0);
  return this;
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
  bU: 1,
  n: 1,
  d: 1,
  e: 1,
  s: 1,
  a: 1
}));
function $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($thiz) {
  if ((!$thiz.j8)) {
    $thiz.j7 = new $c_sci_ArraySeq$ofRef(new ($d_sr_Nothing$.r().C)(0));
    $thiz.j8 = true;
  }
  return $thiz.j7;
}
/** @constructor */
function $c_sci_ArraySeq$() {
  this.j7 = null;
  this.j8 = false;
}
$p = $c_sci_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_sci_ArraySeq$;
/** @constructor */
function $h_sci_ArraySeq$() {
}
$h_sci_ArraySeq$.prototype = $p;
var $d_sci_ArraySeq$ = new $TypeData().i($c_sci_ArraySeq$, "scala.collection.immutable.ArraySeq$", ({
  c9: 1,
  a: 1,
  an: 1,
  al: 1,
  am: 1,
  aq: 1
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
  this.ja = null;
  $n_scm_ArraySeq$ = this;
  this.ja = new $c_scm_ArraySeq$ofRef(new $ac_O(0));
}
$p = $c_scm_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_scm_ArraySeq$;
/** @constructor */
function $h_scm_ArraySeq$() {
}
$h_scm_ArraySeq$.prototype = $p;
var $d_scm_ArraySeq$ = new $TypeData().i($c_scm_ArraySeq$, "scala.collection.mutable.ArraySeq$", ({
  cg: 1,
  a: 1,
  an: 1,
  al: 1,
  am: 1,
  aq: 1
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
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.q = (function() {
  return 924202651;
});
$p.s = (function() {
  return 0;
});
$p.x = (function() {
  return "EmptyTuple";
});
$p.l = (function(n) {
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
$p.k = (function() {
  return "()";
});
var $d_T$package$EmptyTuple$ = new $TypeData().i($c_T$package$EmptyTuple$, "scala.Tuple$package$EmptyTuple$", ({
  bN: 1,
  b: 1,
  c: 1,
  a: 1,
  cm: 1,
  cn: 1,
  co: 1
}));
var $n_T$package$EmptyTuple$;
function $m_T$package$EmptyTuple$() {
  if ((!$n_T$package$EmptyTuple$)) {
    $n_T$package$EmptyTuple$ = new $c_T$package$EmptyTuple$();
  }
  return $n_T$package$EmptyTuple$;
}
function $f_sc_View__toString__T($thiz) {
  return ($thiz.eU() + "(<not computed>)");
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
    this.aT = null;
    this.aT = exception;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  hl() {
    return $dp_toString__T(this.aT);
  }
  x() {
    return "JavaScriptException";
  }
  s() {
    return 1;
  }
  l(x$1) {
    return ((x$1 === 0) ? this.aT : $m_sr_Statics$().m9(x$1));
  }
  A() {
    return new $c_sr_ScalaRunTime$$anon$1(this);
  }
  q() {
    return $m_s_util_hashing_MurmurHash3$().E(this, 1744042595, true);
  }
  n(x$1) {
    return ((this === x$1) || ((x$1 instanceof $c_sjs_js_JavaScriptException) && $m_sr_BoxesRunTime$().b(this.aT, x$1.aT)));
  }
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aB)));
}
var $d_sjs_js_JavaScriptException = new $TypeData().i($c_sjs_js_JavaScriptException, "scala.scalajs.js.JavaScriptException", ({
  aB: 1,
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
    if (((n$tailLocal1 <= 0) || s$tailLocal1.M())) {
      return s$tailLocal1;
    } else {
      var n$tailLocal1$tmp1 = ((n$tailLocal1 - 1) | 0);
      var s$tailLocal1$tmp1 = s$tailLocal1.iU();
      n$tailLocal1 = n$tailLocal1$tmp1;
      s$tailLocal1 = s$tailLocal1$tmp1;
    }
  }
}
/** @constructor */
function $c_s_reflect_ManifestFactory$PhantomManifest() {
  this.hx = null;
}
$p = $c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$p.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
}
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $p;
$p.k = (function() {
  return this.hx;
});
$p.n = (function(that) {
  return (this === that);
});
$p.q = (function() {
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
$p.k = (function() {
  return $f_sc_View__toString__T(this);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ObjectManifest$() {
  this.hx = null;
  this.hx = "Object";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$ObjectManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ObjectManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ObjectManifest$() {
}
$h_s_reflect_ManifestFactory$ObjectManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ObjectManifest$, "scala.reflect.ManifestFactory$ObjectManifest$", ({
  cu: 1,
  cv: 1,
  ct: 1,
  a: 1,
  cw: 1,
  cq: 1,
  b: 1,
  cr: 1,
  cs: 1
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
      if (o.iu($thiz)) {
        return $thiz.hp(o);
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
$p.M = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.hp = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.iu = (function(that) {
  return true;
});
$p.n = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.q = (function() {
  return $m_s_util_hashing_MurmurHash3$().kT(this);
});
$p.k = (function() {
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
  return (!(!((obj && obj.$classData) && obj.$classData.n.F)));
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.F)));
}
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.fH = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.fH = null;
}
$p = $c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $p;
$p.L = (function(idx) {
  return this.fH.L(idx);
});
$p.D = (function() {
  return this.fH.D();
});
$p.M = (function() {
  return this.fH.M();
});
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.fH = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$p.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
}
$h_sc_IndexedSeqView$Id.prototype = $p;
$p.eT = (function(len) {
  var x = this.D();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.U = (function() {
  return this.D();
});
$p.N = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this);
});
$p.eU = (function() {
  return "IndexedSeqView";
});
var $d_sc_IndexedSeqView$Id = new $TypeData().i($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  bT: 1,
  c2: 1,
  bO: 1,
  bP: 1,
  v: 1,
  d: 1,
  e: 1,
  r: 1,
  q: 1,
  p: 1,
  a: 1,
  c6: 1,
  t: 1,
  c1: 1,
  w: 1,
  bS: 1
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
  return ($is_sci_IndexedSeq(that) ? ($thiz.D() === that.D()) : true);
}
function $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z($thiz, o) {
  if ($is_sci_IndexedSeq(o)) {
    if (($thiz === o)) {
      return true;
    } else {
      var length = $thiz.D();
      var equal = (length === o.D());
      if (equal) {
        var index = 0;
        var a = $thiz.it();
        var b = o.it();
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
          equal = $m_sr_BoxesRunTime$().b($thiz.L(index), o.L(index));
          index = ((1 + index) | 0);
        }
        if (((index < length) && equal)) {
          var thisIt = $thiz.N().hk(index);
          var thatIt = o.N().hk(index);
          while ((equal && thisIt.C())) {
            equal = $m_sr_BoxesRunTime$().b(thisIt.B(), thatIt.B());
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
  this.gE = null;
  this.gE = array;
}
$p = $c_sjsr_WrappedVarArgs.prototype = new $h_O();
$p.constructor = $c_sjsr_WrappedVarArgs;
/** @constructor */
function $h_sjsr_WrappedVarArgs() {
}
$h_sjsr_WrappedVarArgs.prototype = $p;
$p.iu = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.hp = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.it = (function() {
  return $m_sci_IndexedSeqDefaults$().j9;
});
$p.N = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.eT = (function(len) {
  var x = this.D();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.U = (function() {
  return this.D();
});
$p.n = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.q = (function() {
  return $m_s_util_hashing_MurmurHash3$().kT(this);
});
$p.k = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.M = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.iw = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.is = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.D = (function() {
  return (this.gE.length | 0);
});
$p.L = (function(idx) {
  return this.gE[idx];
});
$p.fA = (function() {
  return "WrappedVarArgs";
});
$p.F = (function(v1) {
  return this.L((v1 | 0));
});
function $isArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aC)));
}
var $d_sjsr_WrappedVarArgs = new $TypeData().i($c_sjsr_WrappedVarArgs, "scala.scalajs.runtime.WrappedVarArgs", ({
  aC: 1,
  D: 1,
  d: 1,
  e: 1,
  r: 1,
  q: 1,
  p: 1,
  G: 1,
  k: 1,
  u: 1,
  t: 1,
  b: 1,
  l: 1,
  I: 1,
  H: 1,
  w: 1,
  o: 1,
  at: 1,
  J: 1,
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
$p.eT = (function(len) {
  var x = this.aI.a.length;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.U = (function() {
  return this.aI.a.length;
});
$p.eU = (function() {
  return "IndexedSeq";
});
$p.iu = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.hp = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.fA = (function() {
  return "ArraySeq";
});
$p.it = (function() {
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
$p.eT = (function(len) {
  var x = this.ah.a.length;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.U = (function() {
  return this.ah.a.length;
});
$p.eU = (function() {
  return "IndexedSeq";
});
$p.fA = (function() {
  return "ArraySeq";
});
$p.n = (function(other) {
  if ((other instanceof $c_scm_ArraySeq)) {
    if ((this.ah.a.length !== other.ah.a.length)) {
      return false;
    }
  }
  return $f_sc_Seq__equals__O__Z(this, other);
});
function $isArrayOf_scm_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.av)));
}
/** @constructor */
function $c_sci_ArraySeq$ofRef(unsafeArray) {
  this.aI = null;
  this.aI = unsafeArray;
}
$p = $c_sci_ArraySeq$ofRef.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofRef;
/** @constructor */
function $h_sci_ArraySeq$ofRef() {
}
$h_sci_ArraySeq$ofRef.prototype = $p;
$p.D = (function() {
  return this.aI.a.length;
});
$p.L = (function(i) {
  return this.aI.a[i];
});
$p.q = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.kq(this.aI, this$1.fg);
});
$p.n = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofRef) ? $m_s_Array$().ky(this.aI, that.aI) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.N = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.aI);
});
$p.F = (function(v1) {
  return this.L((v1 | 0));
});
function $isArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.as)));
}
var $d_sci_ArraySeq$ofRef = new $TypeData().i($c_sci_ArraySeq$ofRef, "scala.collection.immutable.ArraySeq$ofRef", ({
  as: 1,
  c8: 1,
  ar: 1,
  A: 1,
  v: 1,
  d: 1,
  e: 1,
  r: 1,
  q: 1,
  p: 1,
  k: 1,
  u: 1,
  t: 1,
  b: 1,
  l: 1,
  G: 1,
  I: 1,
  H: 1,
  w: 1,
  o: 1,
  at: 1,
  D: 1,
  B: 1,
  C: 1,
  J: 1,
  bR: 1,
  a: 1
}));
function $p_sci_List__loop$2__I__I__sci_List__I($thiz, len$1, i, xs) {
  var xs$tailLocal1 = xs;
  var i$tailLocal1 = i;
  while (true) {
    return ((i$tailLocal1 === len$1) ? (xs$tailLocal1.M() ? 0 : 1) : (xs$tailLocal1.M() ? (-1) : xs$tailLocal1.gB()));
  }
}
function $p_sci_List__listEq$1__sci_List__sci_List__Z($thiz, a, b) {
  var b$tailLocal1 = b;
  var a$tailLocal1 = a;
  while (true) {
    if ((a$tailLocal1 === b$tailLocal1)) {
      return true;
    } else {
      var aEmpty = a$tailLocal1.M();
      var bEmpty = b$tailLocal1.M();
      if ((!(aEmpty || bEmpty))) {
        a$tailLocal1.hm();
      }
      if (false) {
        a$tailLocal1.gB();
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
$p.L = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.hp = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.eU = (function() {
  return "LinearSeq";
});
$p.M = (function() {
  return (this === $m_sci_Nil$());
});
$p.iw = (function(f) {
  var these = this;
  while ((!these.M())) {
    f.F(these.hm());
    these.gB();
  }
});
$p.D = (function() {
  var these = this;
  var len = 0;
  while ((!these.M())) {
    len = ((1 + len) | 0);
    these.gB();
  }
  return len;
});
$p.eT = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__I__sci_List__I(this, len, 0, this));
});
$p.fA = (function() {
  return "List";
});
$p.n = (function(o) {
  return ((o instanceof $c_sci_List) ? $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, o) : $f_sc_Seq__equals__O__Z(this, o));
});
$p.lE = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
$p.F = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.au)));
}
/** @constructor */
function $c_scm_ArraySeq$ofRef(array) {
  this.ah = null;
  this.ah = array;
}
$p = $c_scm_ArraySeq$ofRef.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofRef;
/** @constructor */
function $h_scm_ArraySeq$ofRef() {
}
$h_scm_ArraySeq$ofRef.prototype = $p;
$p.D = (function() {
  return this.ah.a.length;
});
$p.L = (function(index) {
  return this.ah.a[index];
});
$p.q = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.kq(this.ah, this$1.fg);
});
$p.n = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofRef) ? $m_s_Array$().ky(this.ah, that.ah) : $c_scm_ArraySeq.prototype.n.call(this, that));
});
$p.N = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.ah);
});
$p.F = (function(v1) {
  return this.L((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aw)));
}
var $d_scm_ArraySeq$ofRef = new $TypeData().i($c_scm_ArraySeq$ofRef, "scala.collection.mutable.ArraySeq$ofRef", ({
  aw: 1,
  av: 1,
  K: 1,
  A: 1,
  v: 1,
  d: 1,
  e: 1,
  r: 1,
  q: 1,
  p: 1,
  k: 1,
  u: 1,
  t: 1,
  b: 1,
  l: 1,
  O: 1,
  x: 1,
  L: 1,
  Q: 1,
  P: 1,
  w: 1,
  o: 1,
  N: 1,
  M: 1,
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
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 0;
});
$p.x = (function() {
  return "Nil";
});
$p.l = (function(n) {
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
$p.hm = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list");
});
$p.gB = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$p.U = (function() {
  return 0;
});
$p.N = (function() {
  return $m_sc_Iterator$().aG;
});
$p.ix = (function() {
  this.hm();
});
$p.iU = (function() {
  this.gB();
});
var $d_sci_Nil$ = new $TypeData().i($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  ce: 1,
  au: 1,
  ar: 1,
  A: 1,
  v: 1,
  d: 1,
  e: 1,
  r: 1,
  q: 1,
  p: 1,
  k: 1,
  u: 1,
  t: 1,
  b: 1,
  l: 1,
  G: 1,
  I: 1,
  H: 1,
  bZ: 1,
  F: 1,
  cc: 1,
  cb: 1,
  B: 1,
  C: 1,
  c3: 1,
  J: 1,
  a: 1,
  c7: 1,
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
  $thiz.am = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, new $c_jl_StringBuilder());
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.am = null;
}
$p = $c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
}
$h_scm_StringBuilder.prototype = $p;
$p.N = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.eT = (function(len) {
  var x = this.am.D();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.eU = (function() {
  return "IndexedSeq";
});
$p.D = (function() {
  return this.am.D();
});
$p.U = (function() {
  return this.am.D();
});
$p.k = (function() {
  return this.am.R;
});
$p.M = (function() {
  return (this.am.D() === 0);
});
$p.L = (function(i) {
  return $bC(this.am.ks(i));
});
$p.F = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.am.ks(i));
});
var $d_scm_StringBuilder = new $TypeData().i($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
  cl: 1,
  K: 1,
  A: 1,
  v: 1,
  d: 1,
  e: 1,
  r: 1,
  q: 1,
  p: 1,
  k: 1,
  u: 1,
  t: 1,
  b: 1,
  l: 1,
  O: 1,
  x: 1,
  L: 1,
  Q: 1,
  P: 1,
  ay: 1,
  az: 1,
  ax: 1,
  cj: 1,
  w: 1,
  o: 1,
  N: 1,
  M: 1,
  E: 1,
  a: 1
}));
/** @constructor */
function $c_sjs_js_WrappedArray(array) {
  this.ff = null;
  this.ff = array;
}
$p = $c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
}
$h_sjs_js_WrappedArray.prototype = $p;
$p.eU = (function() {
  return "IndexedSeq";
});
$p.N = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.eT = (function(len) {
  var x = (this.ff.length | 0);
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.L = (function(index) {
  return this.ff[index];
});
$p.D = (function() {
  return (this.ff.length | 0);
});
$p.U = (function() {
  return (this.ff.length | 0);
});
$p.fA = (function() {
  return "WrappedArray";
});
$p.F = (function(v1) {
  var index = (v1 | 0);
  return this.ff[index];
});
var $d_sjs_js_WrappedArray = new $TypeData().i($c_sjs_js_WrappedArray, "scala.scalajs.js.WrappedArray", ({
  cX: 1,
  cf: 1,
  K: 1,
  A: 1,
  v: 1,
  d: 1,
  e: 1,
  r: 1,
  q: 1,
  p: 1,
  k: 1,
  u: 1,
  t: 1,
  b: 1,
  l: 1,
  O: 1,
  x: 1,
  L: 1,
  Q: 1,
  P: 1,
  ay: 1,
  az: 1,
  ck: 1,
  ch: 1,
  C: 1,
  B: 1,
  M: 1,
  w: 1,
  o: 1,
  N: 1,
  ci: 1,
  ax: 1,
  a: 1
}));
let $e_sketch = (function(arg) {
  $m_Lsketches_rooms_columns_Columns$package$().mP(arg);
});
export { $e_sketch as sketch };
