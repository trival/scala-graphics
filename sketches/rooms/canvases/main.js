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
  return (arg0.$classData.Z ? arg0.aW() : $objectClone(arg0));
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
        return null.q2();
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
        return instance.r(x0);
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__equals__O__Z(instance.l, instance.h, x0);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__equals__O__Z(instance.c, x0);
      } else {
        return $c_O.prototype.r.call(instance, x0);
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
        return instance.s();
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__hashCode__I(instance.l, instance.h);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I(instance.c);
      } else {
        return $c_O.prototype.s.call(instance);
      }
    }
  }
}
function $dp_indexOf__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__indexOf__I__I(instance, x0);
  } else {
    return instance.q3(x0);
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
$p.s = (function() {
  return $systemIdentityHashCode(this);
});
$p.r = (function(that) {
  return (this === that);
});
$p.n = (function() {
  var i = this.s();
  return (($objectClassName(this) + "@") + (i >>> 0.0).toString(16));
});
$p.toString = (function() {
  return this.n();
});
function $ac_O(arg) {
  if (((typeof arg) === "number")) {
    this.b = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.b[i] = null;
    }
  } else {
    this.b = arg;
  }
}
$p = $ac_O.prototype = new $h_O();
$p.constructor = $ac_O;
$p.aI = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.b, srcPos, dest.b, destPos, length);
});
$p.aW = (function() {
  return new $ac_O(this.b.slice());
});
function $ah_O() {
}
$ah_O.prototype = $p;
function $ac_Z(arg) {
  if (((typeof arg) === "number")) {
    this.b = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.b[i] = false;
    }
  } else {
    this.b = arg;
  }
}
$p = $ac_Z.prototype = new $h_O();
$p.constructor = $ac_Z;
$p.aI = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.b, srcPos, dest.b, destPos, length);
});
$p.aW = (function() {
  return new $ac_Z(this.b.slice());
});
function $ac_C(arg) {
  if (((typeof arg) === "number")) {
    this.b = new Uint16Array(arg);
  } else {
    this.b = arg;
  }
}
$p = $ac_C.prototype = new $h_O();
$p.constructor = $ac_C;
$p.aI = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aW = (function() {
  return new $ac_C(this.b.slice());
});
function $ac_B(arg) {
  if (((typeof arg) === "number")) {
    this.b = new Int8Array(arg);
  } else {
    this.b = arg;
  }
}
$p = $ac_B.prototype = new $h_O();
$p.constructor = $ac_B;
$p.aI = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aW = (function() {
  return new $ac_B(this.b.slice());
});
function $ac_S(arg) {
  if (((typeof arg) === "number")) {
    this.b = new Int16Array(arg);
  } else {
    this.b = arg;
  }
}
$p = $ac_S.prototype = new $h_O();
$p.constructor = $ac_S;
$p.aI = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aW = (function() {
  return new $ac_S(this.b.slice());
});
function $ac_I(arg) {
  if (((typeof arg) === "number")) {
    this.b = new Int32Array(arg);
  } else {
    this.b = arg;
  }
}
$p = $ac_I.prototype = new $h_O();
$p.constructor = $ac_I;
$p.aI = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aW = (function() {
  return new $ac_I(this.b.slice());
});
function $ac_J(arg) {
  if (((typeof arg) === "number")) {
    arg = (arg << 1);
    this.b = new Int32Array(arg);
  } else {
    this.b = arg;
  }
}
$p = $ac_J.prototype = new $h_O();
$p.constructor = $ac_J;
$p.aI = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray((srcPos << 1), (((srcPos + length) | 0) << 1)), (destPos << 1));
});
$p.aW = (function() {
  return new $ac_J(this.b.slice());
});
function $ac_F(arg) {
  if (((typeof arg) === "number")) {
    this.b = new Float32Array(arg);
  } else {
    this.b = arg;
  }
}
$p = $ac_F.prototype = new $h_O();
$p.constructor = $ac_F;
$p.aI = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aW = (function() {
  return new $ac_F(this.b.slice());
});
function $ac_D(arg) {
  if (((typeof arg) === "number")) {
    this.b = new Float64Array(arg);
  } else {
    this.b = arg;
  }
}
$p = $ac_D.prototype = new $h_O();
$p.constructor = $ac_D;
$p.aI = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aW = (function() {
  return new $ac_D(this.b.slice());
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
    var u = result.b;
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
      this.b = new Array(arg);
      for (var i = 0; (i < arg); (i++)) {
        this.b[i] = null;
      }
    } else {
      this.b = arg;
    }
  }
  var $p = ArrayClass.prototype = new $ah_O();
  $p.constructor = ArrayClass;
  $p.aI = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.b, srcPos, dest.b, destPos, length);
  });
  $p.aW = (function() {
    return new ArrayClass(this.b.slice());
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
/** @constructor */
function $c_jl_System$Streams$() {
  this.k3 = null;
  this.n8 = null;
  $n_jl_System$Streams$ = this;
  this.k3 = new $c_jl_JSConsoleBasedPrintStream(false);
  this.n8 = new $c_jl_JSConsoleBasedPrintStream(true);
}
$p = $c_jl_System$Streams$.prototype = new $h_O();
$p.constructor = $c_jl_System$Streams$;
/** @constructor */
function $h_jl_System$Streams$() {
}
$h_jl_System$Streams$.prototype = $p;
var $d_jl_System$Streams$ = new $TypeData().i($c_jl_System$Streams$, "java.lang.System$Streams$", ({
  bq: 1
}));
var $n_jl_System$Streams$;
function $m_jl_System$Streams$() {
  if ((!$n_jl_System$Streams$)) {
    $n_jl_System$Streams$ = new $c_jl_System$Streams$();
  }
  return $n_jl_System$Streams$;
}
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
  this.iy = null;
  this.k4 = null;
  $n_jl_System$SystemProperties$ = this;
  this.iy = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
  this.k4 = null;
}
$p = $c_jl_System$SystemProperties$.prototype = new $h_O();
$p.constructor = $c_jl_System$SystemProperties$;
/** @constructor */
function $h_jl_System$SystemProperties$() {
}
$h_jl_System$SystemProperties$.prototype = $p;
$p.mv = (function(key, default$1) {
  if ((this.iy !== null)) {
    var dict = this.iy;
    return ((!(!$m_jl_Utils$Cache$().k6.call(dict, key))) ? dict[key] : default$1);
  } else {
    return this.k4.mv(key, default$1);
  }
});
var $d_jl_System$SystemProperties$ = new $TypeData().i($c_jl_System$SystemProperties$, "java.lang.System$SystemProperties$", ({
  br: 1
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
  this.k6 = null;
  $n_jl_Utils$Cache$ = this;
  this.k6 = Object.prototype.hasOwnProperty;
}
$p = $c_jl_Utils$Cache$.prototype = new $h_O();
$p.constructor = $c_jl_Utils$Cache$;
/** @constructor */
function $h_jl_Utils$Cache$() {
}
$h_jl_Utils$Cache$.prototype = $p;
var $d_jl_Utils$Cache$ = new $TypeData().i($c_jl_Utils$Cache$, "java.lang.Utils$Cache$", ({
  bt: 1
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
  bu: 1
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
$p.ha = (function(array) {
  return ((array instanceof $ac_O) ? array.b.length : ((array instanceof $ac_Z) ? array.b.length : ((array instanceof $ac_C) ? array.b.length : ((array instanceof $ac_B) ? array.b.length : ((array instanceof $ac_S) ? array.b.length : ((array instanceof $ac_I) ? array.b.length : ((array instanceof $ac_J) ? ((array.b.length >>> 1) | 0) : ((array instanceof $ac_F) ? array.b.length : ((array instanceof $ac_D) ? array.b.length : $p_jl_reflect_Array$__mismatch__O__E(this, array))))))))));
});
var $d_jl_reflect_Array$ = new $TypeData().i($c_jl_reflect_Array$, "java.lang.reflect.Array$", ({
  bv: 1
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
$p.nC = (function(a, key) {
  var startIndex = 0;
  var endIndex = a.b.length;
  while (true) {
    if ((startIndex === endIndex)) {
      return (~startIndex);
    } else {
      var mid = ((((startIndex + endIndex) | 0) >>> 1) | 0);
      var elem = a.b[mid];
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
  bw: 1
}));
var $n_ju_Arrays$;
function $m_ju_Arrays$() {
  if ((!$n_ju_Arrays$)) {
    $n_ju_Arrays$ = new $c_ju_Arrays$();
  }
  return $n_ju_Arrays$;
}
function $s_RTLong__remainderUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().pn(alo, ahi, blo, bhi);
}
function $s_RTLong__remainder__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().pm(alo, ahi, blo, bhi);
}
function $s_RTLong__divideUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().nU(alo, ahi, blo, bhi);
}
function $s_RTLong__divide__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().nT(alo, ahi, blo, bhi);
}
function $s_RTLong__fromDoubleBits__D__O__J(value, fpBitsDataView) {
  fpBitsDataView.setFloat64(0, value, true);
  var lo = (fpBitsDataView.getInt32(0, true) | 0);
  var hi = (fpBitsDataView.getInt32(4, true) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__fromDouble__D__J(value) {
  return $m_RTLong$().jJ(value);
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
  return $m_RTLong$().n2(lo, hi);
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
$p.n2 = (function(lo, hi) {
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
$p.jJ = (function(value) {
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
$p.nT = (function(alo, ahi, blo, bhi) {
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
    var $x_1 = this.is(rlo, rhi, rlo$1, rhi$1, true);
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
$p.nU = (function(alo, ahi, blo, bhi) {
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
    return this.is(alo, ahi, blo, bhi, true);
  }
});
$p.pm = (function(alo, ahi, blo, bhi) {
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
    var $x_1 = this.is(rlo, rhi, rlo$1, rhi$1, false);
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
$p.pn = (function(alo, ahi, blo, bhi) {
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
    return this.is(alo, ahi, blo, bhi, false);
  }
});
$p.is = (function(alo, ahi, blo, bhi, askQuotient) {
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
  by: 1
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
$p.mp = (function(xs, ys) {
  if ((xs === ys)) {
    return true;
  }
  if ((xs.b.length !== ys.b.length)) {
    return false;
  }
  var len = xs.b.length;
  var i = 0;
  while ((i < len)) {
    if ((!$m_sr_BoxesRunTime$().c(xs.b[i], ys.b[i]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
var $d_s_Array$ = new $TypeData().i($c_s_Array$, "scala.Array$", ({
  bz: 1
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
  while (it.N()) {
    f.h(it.E());
  }
}
function $f_sc_IterableOnceOps__copyToArray__O__I__I__I($thiz, dest, start, n) {
  var it = $thiz.ac();
  var i = start;
  matchResult18: {
    var srclen;
    var x31 = $thiz.ah();
    if ((x31 === (-1))) {
      var srclen = $m_jl_reflect_Array$().ha(dest);
      break matchResult18;
    }
    var srclen = x31;
  }
  var destLen = $m_jl_reflect_Array$().ha(dest);
  var limit = ((n < srclen) ? n : srclen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var end = ((start + ((total < 0) ? 0 : total)) | 0);
  while (((i < end) && it.N())) {
    $m_sr_ScalaRunTime$().nw(dest, i, it.E());
    i = ((1 + i) | 0);
  }
  return ((i - start) | 0);
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  return (($thiz.ah() === 0) ? (("" + start) + end) : $thiz.jH($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end).b1.ao);
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = b.b1;
  if ((start.length !== 0)) {
    jsb.ao = (("" + jsb.ao) + start);
  }
  var it = $thiz.ac();
  if (it.N()) {
    var obj = it.E();
    jsb.ao = (("" + jsb.ao) + obj);
    while (it.N()) {
      if ((sep.length !== 0)) {
        jsb.ao = (("" + jsb.ao) + sep);
      }
      var obj$1 = it.E();
      jsb.ao = (("" + jsb.ao) + obj$1);
    }
  }
  if ((end.length !== 0)) {
    jsb.ao = (("" + jsb.ao) + end);
  }
  return b;
}
/** @constructor */
function $c_sc_Iterator$ConcatIteratorCell(head, tail) {
  this.kd = null;
  this.gv = null;
  this.kd = head;
  this.gv = tail;
}
$p = $c_sc_Iterator$ConcatIteratorCell.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$ConcatIteratorCell;
/** @constructor */
function $h_sc_Iterator$ConcatIteratorCell() {
}
$h_sc_Iterator$ConcatIteratorCell.prototype = $p;
$p.og = (function() {
  return this.kd.h7().ac();
});
var $d_sc_Iterator$ConcatIteratorCell = new $TypeData().i($c_sc_Iterator$ConcatIteratorCell, "scala.collection.Iterator$ConcatIteratorCell", ({
  ch: 1
}));
/** @constructor */
function $c_sc_StringOps$() {
  this.ke = null;
  $n_sc_StringOps$ = this;
  this.ke = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$2) => this.ke));
}
$p = $c_sc_StringOps$.prototype = new $h_O();
$p.constructor = $c_sc_StringOps$;
/** @constructor */
function $h_sc_StringOps$() {
}
$h_sc_StringOps$.prototype = $p;
var $d_sc_StringOps$ = new $TypeData().i($c_sc_StringOps$, "scala.collection.StringOps$", ({
  cp: 1
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
  this.kh = 0;
  $n_sci_IndexedSeqDefaults$ = this;
  try {
    $m_sc_StringOps$();
    var $x_1 = $m_jl_Integer$().on($m_jl_System$SystemProperties$().mv("scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength", "64"), 10, 214748364);
  } catch (e) {
    if (false) {
      var $x_1 = 64;
    } else {
      var $x_1;
      throw e;
    }
  }
  this.kh = $x_1;
}
$p = $c_sci_IndexedSeqDefaults$.prototype = new $h_O();
$p.constructor = $c_sci_IndexedSeqDefaults$;
/** @constructor */
function $h_sci_IndexedSeqDefaults$() {
}
$h_sci_IndexedSeqDefaults$.prototype = $p;
var $d_sci_IndexedSeqDefaults$ = new $TypeData().i($c_sci_IndexedSeqDefaults$, "scala.collection.immutable.IndexedSeqDefaults$", ({
  cu: 1
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
  return ((x === y) || ($is_jl_Number(x) ? this.o2(x, y) : ((x instanceof $Char) ? this.o0(x, y) : ((x === null) ? (y === null) : $dp_equals__O__Z(x, y)))));
});
$p.o2 = (function(xn, y) {
  if ($is_jl_Number(y)) {
    return this.o1(xn, y);
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
$p.o1 = (function(xn, yn) {
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
      return (false && yn.r(x2));
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
      return (false && yn.r($bL(x3$2_$_lo, x3$2_$_hi)));
    }
  } else {
    return ((xn === null) ? (yn === null) : $dp_equals__O__Z(xn, yn));
  }
});
$p.o0 = (function(xc, y) {
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
  d5: 1
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
$p.nx = (function() {
  throw new $c_jl_AssertionError("assertion failed");
});
$p.ir = (function() {
  throw $ct_jl_NullPointerException__T__(new $c_jl_NullPointerException(), "tried to cast away nullability, but value is null");
});
var $d_sr_Scala3RunTime$ = new $TypeData().i($c_sr_Scala3RunTime$, "scala.runtime.Scala3RunTime$", ({
  d7: 1
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
$p.gn = (function(xs, idx) {
  if ((xs instanceof $ac_O)) {
    return xs.b[idx];
  }
  if ((xs instanceof $ac_I)) {
    return xs.b[idx];
  }
  if ((xs instanceof $ac_D)) {
    return xs.b[idx];
  }
  if ((xs instanceof $ac_J)) {
    var $x_1 = xs.b;
    var $x_2 = (idx << 1);
    return $bL($x_1[$x_2], $x_1[(($x_2 + 1) | 0)]);
  }
  if ((xs instanceof $ac_F)) {
    return xs.b[idx];
  }
  if ((xs instanceof $ac_C)) {
    return $bC(xs.b[idx]);
  }
  if ((xs instanceof $ac_B)) {
    return xs.b[idx];
  }
  if ((xs instanceof $ac_S)) {
    return xs.b[idx];
  }
  if ((xs instanceof $ac_Z)) {
    return xs.b[idx];
  }
  if ((xs === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  throw new $c_s_MatchError(xs);
});
$p.nw = (function(xs, idx, value) {
  if ((xs instanceof $ac_O)) {
    xs.b[idx] = value;
    return (void 0);
  }
  if ((xs instanceof $ac_I)) {
    xs.b[idx] = (value | 0);
    return (void 0);
  }
  if ((xs instanceof $ac_D)) {
    xs.b[idx] = (+value);
    return (void 0);
  }
  if ((xs instanceof $ac_J)) {
    var $x_1 = $uJ(value);
    var $x_2 = xs.b;
    var $x_3 = (idx << 1);
    $x_2[$x_3] = $x_1.l;
    $x_2[(($x_3 + 1) | 0)] = $x_1.h;
    return (void 0);
  }
  if ((xs instanceof $ac_F)) {
    xs.b[idx] = Math.fround(value);
    return (void 0);
  }
  if ((xs instanceof $ac_C)) {
    xs.b[idx] = $uC(value);
    return (void 0);
  }
  if ((xs instanceof $ac_B)) {
    xs.b[idx] = (value | 0);
    return (void 0);
  }
  if ((xs instanceof $ac_S)) {
    xs.b[idx] = (value | 0);
    return (void 0);
  }
  if ((xs instanceof $ac_Z)) {
    xs.b[idx] = (!(!value));
    return (void 0);
  }
  if ((xs === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  throw new $c_s_MatchError(xs);
});
$p.ii = (function(x) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(x.D(), (x.A() + "("), ",", ")");
});
$p.at = (function(xs) {
  if ((xs === null)) {
    return null;
  } else if ((xs.b.length === 0)) {
    var this$2 = $m_sci_ArraySeq$();
    $m_s_reflect_ManifestFactory$ObjectManifest$();
    return $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef(this$2);
  } else {
    return new $c_sci_ArraySeq$ofRef(xs);
  }
});
var $d_sr_ScalaRunTime$ = new $TypeData().i($c_sr_ScalaRunTime$, "scala.runtime.ScalaRunTime$", ({
  d8: 1
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
$p.p = (function(hash, data) {
  var h = this.iq(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.iq = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.ar = (function(hash, length) {
  return this.ny((hash ^ length));
});
$p.ny = (function(h0) {
  var h = h0;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.os = (function(lv_$_lo, lv_$_hi) {
  return ((lv_$_hi === (lv_$_lo >> 31)) ? lv_$_lo : (lv_$_lo ^ lv_$_hi));
});
$p.bA = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var $x_1 = $m_RTLong$().jJ(dv);
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
$p.W = (function(x) {
  if ((x === null)) {
    return 0;
  } else if (((typeof x) === "number")) {
    return this.bA((+x));
  } else if ((x instanceof $Long)) {
    var $x_1 = $uJ(x);
    return this.os($x_1.l, $x_1.h);
  } else {
    return $dp_hashCode__I(x);
  }
});
$p.ol = (function(n) {
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
var $d_sr_Statics$ = new $TypeData().i($c_sr_Statics$, "scala.runtime.Statics$", ({
  da: 1
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
    return new $c_T2(x, self.fJ);
  }
  if ((self instanceof $c_T2)) {
    return new $c_T3(x, self.Z, self.au);
  }
  if ((self instanceof $c_T3)) {
    return new $c_T4(x, self.bl, self.ba, self.bb);
  }
  if ((self instanceof $c_T4)) {
    return new $c_T5(x, self.eQ, self.bm, self.bn, self.bo);
  }
  if ((self instanceof $c_T5)) {
    return new $c_T6(x, self.fX, self.eR, self.eS, self.eT, self.eU);
  }
  if ((self instanceof $c_T6)) {
    return new $c_T7(x, self.fY, self.eV, self.eW, self.eX, self.eY, self.eZ);
  }
  if ((self instanceof $c_T7)) {
    return new $c_T8(x, self.fZ, self.f0, self.f1, self.f2, self.f3, self.f4, self.f5);
  }
  if ((self instanceof $c_T8)) {
    return new $c_T9(x, self.g0, self.f6, self.f7, self.f8, self.f9, self.fa, self.fb, self.fc);
  }
  if ((self instanceof $c_T9)) {
    return new $c_T10(x, self.g1, self.fd, self.fe, self.ff, self.fg, self.fh, self.fi, self.fj, self.fk);
  }
  if ((self instanceof $c_T10)) {
    return new $c_T11(x, self.fK, self.bH, self.bI, self.bJ, self.bK, self.bL, self.bM, self.bN, self.bO, self.bG);
  }
  if ((self instanceof $c_T11)) {
    return new $c_T12(x, self.fL, self.bR, self.bS, self.bT, self.bU, self.bV, self.bW, self.bX, self.bY, self.bP, self.bQ);
  }
  if ((self instanceof $c_T12)) {
    return new $c_T13(x, self.fM, self.c2, self.c3, self.c4, self.c5, self.c6, self.c7, self.c8, self.c9, self.bZ, self.c0, self.c1);
  }
  if ((self instanceof $c_T13)) {
    return new $c_T14(x, self.fN, self.ce, self.cf, self.cg, self.ch, self.ci, self.cj, self.ck, self.cl, self.ca, self.cb, self.cc, self.cd);
  }
  if ((self instanceof $c_T14)) {
    return new $c_T15(x, self.fO, self.cr, self.cs, self.ct, self.cu, self.cv, self.cw, self.cx, self.cy, self.cm, self.cn, self.co, self.cp, self.cq);
  }
  if ((self instanceof $c_T15)) {
    return new $c_T16(x, self.fP, self.cF, self.cG, self.cH, self.cI, self.cJ, self.cK, self.cL, self.cM, self.cz, self.cA, self.cB, self.cC, self.cD, self.cE);
  }
  if ((self instanceof $c_T16)) {
    return new $c_T17(x, self.fQ, self.cU, self.cV, self.cW, self.cX, self.cY, self.cZ, self.d0, self.d1, self.cN, self.cO, self.cP, self.cQ, self.cR, self.cS, self.cT);
  }
  if ((self instanceof $c_T17)) {
    return new $c_T18(x, self.fR, self.da, self.db, self.dc, self.dd, self.de, self.df, self.dg, self.dh, self.d2, self.d3, self.d4, self.d5, self.d6, self.d7, self.d8, self.d9);
  }
  if ((self instanceof $c_T18)) {
    return new $c_T19(x, self.fS, self.ds, self.dt, self.du, self.dv, self.dw, self.dx, self.dy, self.dz, self.di, self.dj, self.dk, self.dl, self.dm, self.dn, self.dp, self.dq, self.dr);
  }
  if ((self instanceof $c_T19)) {
    return new $c_T20(x, self.fT, self.dK, self.dL, self.dM, self.dN, self.dO, self.dP, self.dQ, self.dR, self.dA, self.dB, self.dC, self.dD, self.dE, self.dF, self.dG, self.dH, self.dI, self.dJ);
  }
  if ((self instanceof $c_T20)) {
    return new $c_T21(x, self.fU, self.e2, self.e4, self.e5, self.e6, self.e7, self.e8, self.e9, self.ea, self.dS, self.dT, self.dU, self.dV, self.dW, self.dX, self.dY, self.dZ, self.e0, self.e1, self.e3);
  }
  if ((self instanceof $c_T21)) {
    return new $c_T22(x, self.fV, self.el, self.eo, self.ep, self.eq, self.er, self.es, self.et, self.eu, self.eb, self.ec, self.ed, self.ee, self.ef, self.eg, self.eh, self.ei, self.ej, self.ek, self.em, self.en);
  }
  if ((self instanceof $c_T22)) {
    return new $c_sr_TupleXXL(new $ac_O([x, self.fW, self.eF, self.eJ, self.eK, self.eL, self.eM, self.eN, self.eO, self.eP, self.ev, self.ew, self.ex, self.ey, self.ez, self.eA, self.eB, self.eC, self.eD, self.eE, self.eG, self.eH, self.eI]));
  }
  throw new $c_s_MatchError(self);
}
function $p_sr_Tuples$__xxlCons__O__sr_TupleXXL__sr_TupleXXL($thiz, x, xxl) {
  var arr = new $ac_O(((1 + xxl.u()) | 0));
  arr.b[0] = x;
  var src = xxl.ad;
  var length = xxl.u();
  src.aI(0, arr, 1, length);
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
      var $x_1 = new $c_T1(self.au);
      break matchResult34$1;
    }
    if ((self instanceof $c_T3)) {
      var $x_1 = new $c_T2(self.ba, self.bb);
      break matchResult34$1;
    }
    if ((self instanceof $c_T4)) {
      var $x_1 = new $c_T3(self.bm, self.bn, self.bo);
      break matchResult34$1;
    }
    if ((self instanceof $c_T5)) {
      var $x_1 = new $c_T4(self.eR, self.eS, self.eT, self.eU);
      break matchResult34$1;
    }
    if ((self instanceof $c_T6)) {
      var $x_1 = new $c_T5(self.eV, self.eW, self.eX, self.eY, self.eZ);
      break matchResult34$1;
    }
    if ((self instanceof $c_T7)) {
      var $x_1 = new $c_T6(self.f0, self.f1, self.f2, self.f3, self.f4, self.f5);
      break matchResult34$1;
    }
    if ((self instanceof $c_T8)) {
      var $x_1 = new $c_T7(self.f6, self.f7, self.f8, self.f9, self.fa, self.fb, self.fc);
      break matchResult34$1;
    }
    if ((self instanceof $c_T9)) {
      var $x_1 = new $c_T8(self.fd, self.fe, self.ff, self.fg, self.fh, self.fi, self.fj, self.fk);
      break matchResult34$1;
    }
    if ((self instanceof $c_T10)) {
      var $x_1 = new $c_T9(self.bH, self.bI, self.bJ, self.bK, self.bL, self.bM, self.bN, self.bO, self.bG);
      break matchResult34$1;
    }
    if ((self instanceof $c_T11)) {
      var $x_1 = new $c_T10(self.bR, self.bS, self.bT, self.bU, self.bV, self.bW, self.bX, self.bY, self.bP, self.bQ);
      break matchResult34$1;
    }
    if ((self instanceof $c_T12)) {
      var $x_1 = new $c_T11(self.c2, self.c3, self.c4, self.c5, self.c6, self.c7, self.c8, self.c9, self.bZ, self.c0, self.c1);
      break matchResult34$1;
    }
    if ((self instanceof $c_T13)) {
      var $x_1 = new $c_T12(self.ce, self.cf, self.cg, self.ch, self.ci, self.cj, self.ck, self.cl, self.ca, self.cb, self.cc, self.cd);
      break matchResult34$1;
    }
    if ((self instanceof $c_T14)) {
      var $x_1 = new $c_T13(self.cr, self.cs, self.ct, self.cu, self.cv, self.cw, self.cx, self.cy, self.cm, self.cn, self.co, self.cp, self.cq);
      break matchResult34$1;
    }
    if ((self instanceof $c_T15)) {
      var $x_1 = new $c_T14(self.cF, self.cG, self.cH, self.cI, self.cJ, self.cK, self.cL, self.cM, self.cz, self.cA, self.cB, self.cC, self.cD, self.cE);
      break matchResult34$1;
    }
    if ((self instanceof $c_T16)) {
      var $x_1 = new $c_T15(self.cU, self.cV, self.cW, self.cX, self.cY, self.cZ, self.d0, self.d1, self.cN, self.cO, self.cP, self.cQ, self.cR, self.cS, self.cT);
      break matchResult34$1;
    }
    if ((self instanceof $c_T17)) {
      var $x_1 = new $c_T16(self.da, self.db, self.dc, self.dd, self.de, self.df, self.dg, self.dh, self.d2, self.d3, self.d4, self.d5, self.d6, self.d7, self.d8, self.d9);
      break matchResult34$1;
    }
    if ((self instanceof $c_T18)) {
      var $x_1 = new $c_T17(self.ds, self.dt, self.du, self.dv, self.dw, self.dx, self.dy, self.dz, self.di, self.dj, self.dk, self.dl, self.dm, self.dn, self.dp, self.dq, self.dr);
      break matchResult34$1;
    }
    if ((self instanceof $c_T19)) {
      var $x_1 = new $c_T18(self.dK, self.dL, self.dM, self.dN, self.dO, self.dP, self.dQ, self.dR, self.dA, self.dB, self.dC, self.dD, self.dE, self.dF, self.dG, self.dH, self.dI, self.dJ);
      break matchResult34$1;
    }
    if ((self instanceof $c_T20)) {
      var $x_1 = new $c_T19(self.e2, self.e4, self.e5, self.e6, self.e7, self.e8, self.e9, self.ea, self.dS, self.dT, self.dU, self.dV, self.dW, self.dX, self.dY, self.dZ, self.e0, self.e1, self.e3);
      break matchResult34$1;
    }
    if ((self instanceof $c_T21)) {
      var $x_1 = new $c_T20(self.el, self.eo, self.ep, self.eq, self.er, self.es, self.et, self.eu, self.eb, self.ec, self.ed, self.ee, self.ef, self.eg, self.eh, self.ei, self.ej, self.ek, self.em, self.en);
      break matchResult34$1;
    }
    if ((self instanceof $c_T22)) {
      var $x_1 = new $c_T21(self.eF, self.eJ, self.eK, self.eL, self.eM, self.eN, self.eO, self.eP, self.ev, self.ew, self.ex, self.ey, self.ez, self.eA, self.eB, self.eC, self.eD, self.eE, self.eG, self.eH, self.eI);
      break matchResult34$1;
    }
    throw new $c_s_MatchError(self);
  }
  return $x_1;
}
function $p_sr_Tuples$__xxlTail__sr_TupleXXL__s_Product($thiz, xxl) {
  if ((xxl.u() === 23)) {
    var elems = xxl.ad;
    return new $c_T22(elems.b[1], elems.b[2], elems.b[3], elems.b[4], elems.b[5], elems.b[6], elems.b[7], elems.b[8], elems.b[9], elems.b[10], elems.b[11], elems.b[12], elems.b[13], elems.b[14], elems.b[15], elems.b[16], elems.b[17], elems.b[18], elems.b[19], elems.b[20], elems.b[21], elems.b[22]);
  } else {
    var arr$1 = new $ac_O(((xxl.ad.b.length - 1) | 0));
    var src = xxl.ad;
    var length = ((xxl.ad.b.length - 1) | 0);
    src.aI(1, arr$1, 0, length);
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
$p.o9 = (function(xs) {
  switch (xs.b.length) {
    case 0: {
      return $m_T$package$EmptyTuple$();
      break;
    }
    case 1: {
      return new $c_T1(xs.b[0]);
      break;
    }
    case 2: {
      return new $c_T2(xs.b[0], xs.b[1]);
      break;
    }
    case 3: {
      return new $c_T3(xs.b[0], xs.b[1], xs.b[2]);
      break;
    }
    case 4: {
      return new $c_T4(xs.b[0], xs.b[1], xs.b[2], xs.b[3]);
      break;
    }
    case 5: {
      return new $c_T5(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4]);
      break;
    }
    case 6: {
      return new $c_T6(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5]);
      break;
    }
    case 7: {
      return new $c_T7(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6]);
      break;
    }
    case 8: {
      return new $c_T8(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7]);
      break;
    }
    case 9: {
      return new $c_T9(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8]);
      break;
    }
    case 10: {
      return new $c_T10(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9]);
      break;
    }
    case 11: {
      return new $c_T11(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10]);
      break;
    }
    case 12: {
      return new $c_T12(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10], xs.b[11]);
      break;
    }
    case 13: {
      return new $c_T13(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10], xs.b[11], xs.b[12]);
      break;
    }
    case 14: {
      return new $c_T14(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10], xs.b[11], xs.b[12], xs.b[13]);
      break;
    }
    case 15: {
      return new $c_T15(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10], xs.b[11], xs.b[12], xs.b[13], xs.b[14]);
      break;
    }
    case 16: {
      return new $c_T16(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10], xs.b[11], xs.b[12], xs.b[13], xs.b[14], xs.b[15]);
      break;
    }
    case 17: {
      return new $c_T17(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10], xs.b[11], xs.b[12], xs.b[13], xs.b[14], xs.b[15], xs.b[16]);
      break;
    }
    case 18: {
      return new $c_T18(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10], xs.b[11], xs.b[12], xs.b[13], xs.b[14], xs.b[15], xs.b[16], xs.b[17]);
      break;
    }
    case 19: {
      return new $c_T19(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10], xs.b[11], xs.b[12], xs.b[13], xs.b[14], xs.b[15], xs.b[16], xs.b[17], xs.b[18]);
      break;
    }
    case 20: {
      return new $c_T20(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10], xs.b[11], xs.b[12], xs.b[13], xs.b[14], xs.b[15], xs.b[16], xs.b[17], xs.b[18], xs.b[19]);
      break;
    }
    case 21: {
      return new $c_T21(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10], xs.b[11], xs.b[12], xs.b[13], xs.b[14], xs.b[15], xs.b[16], xs.b[17], xs.b[18], xs.b[19], xs.b[20]);
      break;
    }
    case 22: {
      return new $c_T22(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10], xs.b[11], xs.b[12], xs.b[13], xs.b[14], xs.b[15], xs.b[16], xs.b[17], xs.b[18], xs.b[19], xs.b[20], xs.b[21]);
      break;
    }
    default: {
      return new $c_sr_TupleXXL(xs.aW());
    }
  }
});
$p.oa = (function(xs) {
  return ((xs.b.length <= 22) ? this.o9(xs) : new $c_sr_TupleXXL(xs));
});
$p.mk = (function(x, self) {
  return ((self instanceof $c_sr_TupleXXL) ? $p_sr_Tuples$__xxlCons__O__sr_TupleXXL__sr_TupleXXL(this, x, self) : $p_sr_Tuples$__specialCaseCons__O__s_Product__s_Product(this, x, self));
});
$p.nK = (function(self, that) {
  var selfSize = $m_sr_Tuples$().n1(self);
  if ((selfSize === 0)) {
    return that;
  }
  var thatSize = $m_sr_Tuples$().n1(that);
  if ((thatSize === 0)) {
    return self;
  }
  var arr = new $ac_O(((selfSize + thatSize) | 0));
  if ((self instanceof $c_sr_TupleXXL)) {
    var src = self.ad;
    src.aI(0, arr, 0, selfSize);
  } else {
    self.D().ml(arr, 0, selfSize);
  }
  if ((that instanceof $c_sr_TupleXXL)) {
    var src$1 = that.ad;
    src$1.aI(0, arr, selfSize, thatSize);
  } else {
    that.D().ml(arr, selfSize, thatSize);
  }
  return this.oa(arr);
});
$p.n1 = (function(self) {
  if (($m_T$package$EmptyTuple$() === self)) {
    return 0;
  }
  if ((self !== null)) {
    return self.u();
  }
  throw new $c_s_MatchError(self);
});
$p.pF = (function(self) {
  return ((self instanceof $c_sr_TupleXXL) ? $p_sr_Tuples$__xxlTail__sr_TupleXXL__s_Product(this, self) : $p_sr_Tuples$__specialCaseTail__s_Product__s_Product(this, self));
});
var $d_sr_Tuples$ = new $TypeData().i($c_sr_Tuples$, "scala.runtime.Tuples$", ({
  db: 1
}));
var $n_sr_Tuples$;
function $m_sr_Tuples$() {
  if ((!$n_sr_Tuples$)) {
    $n_sr_Tuples$ = new $c_sr_Tuples$();
  }
  return $n_sr_Tuples$;
}
var $d_sjs_js_Any = new $TypeData().i(2, "scala.scalajs.js.Any", ({
  aO: 1
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
$p.of = (function(this$, o, p) {
  return (!(!(p in o)));
});
var $d_sjs_js_Any$ObjectCompanionOps$ = new $TypeData().i($c_sjs_js_Any$ObjectCompanionOps$, "scala.scalajs.js.Any$ObjectCompanionOps$", ({
  dd: 1
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
$p.my = (function(this$, elem, from) {
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
$p.oZ = (function(this$, f) {
  var len = (this$.length | 0);
  var res = new Array(len);
  var i = 0;
  while ((i < len)) {
    res[i] = f.h(this$[i]);
    i = ((1 + i) | 0);
  }
  return res;
});
$p.n6 = (function(this$, that) {
  var b = [];
  var len = (this$.length | 0);
  var i = 0;
  var it = that.ac();
  while (((i < len) && it.N())) {
    b.push(new $c_T2(this$[i], it.E()));
    i = ((1 + i) | 0);
  }
  return b;
});
$p.n7 = (function(this$) {
  var len = (this$.length | 0);
  var b = new Array(len);
  var i = 0;
  while ((i < len)) {
    b[i] = new $c_T2(this$[i], i);
    i = ((1 + i) | 0);
  }
  return b;
});
$p.a2 = (function(this$, f) {
  var len = (this$.length | 0);
  var i = 0;
  while ((i < len)) {
    f.h(this$[i]);
    i = ((1 + i) | 0);
  }
});
var $d_sjs_js_ArrayOps$ = new $TypeData().i($c_sjs_js_ArrayOps$, "scala.scalajs.js.ArrayOps$", ({
  de: 1
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
  df: 1
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
  this.kr = null;
  $n_sjs_js_WrappedDictionary$Cache$ = this;
  this.kr = Object.prototype.hasOwnProperty;
}
$p = $c_sjs_js_WrappedDictionary$Cache$.prototype = new $h_O();
$p.constructor = $c_sjs_js_WrappedDictionary$Cache$;
/** @constructor */
function $h_sjs_js_WrappedDictionary$Cache$() {
}
$h_sjs_js_WrappedDictionary$Cache$.prototype = $p;
var $d_sjs_js_WrappedDictionary$Cache$ = new $TypeData().i($c_sjs_js_WrappedDictionary$Cache$, "scala.scalajs.js.WrappedDictionary$Cache$", ({
  dk: 1
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
$p.g = (function(properties) {
  var result = ({});
  properties.fD(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((pair$2$2) => {
    result[pair$2$2.Z] = pair$2$2.au;
  })));
  return result;
});
var $d_sjs_js_special_package$ = new $TypeData().i($c_sjs_js_special_package$, "scala.scalajs.js.special.package$", ({
  dl: 1
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
$p.as = (function(seq) {
  if ((seq instanceof $c_sjsr_WrappedVarArgs)) {
    return seq.hF;
  } else {
    var result = [];
    seq.fD(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2$2) => (result.push(x$2$2) | 0))));
    return result;
  }
});
var $d_sjsr_Compat$ = new $TypeData().i($c_sjsr_Compat$, "scala.scalajs.runtime.Compat$", ({
  dm: 1
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
$p.e = (function(array) {
  var len = array.b.length;
  var result = [];
  var i = 0;
  while ((i !== len)) {
    var x1 = i;
    result.push(array.b[x1]);
    i = ((1 + i) | 0);
  }
  return result;
});
var $d_sjsr_package$ = new $TypeData().i($c_sjsr_package$, "scala.scalajs.runtime.package$", ({
  dn: 1
}));
var $n_sjsr_package$;
function $m_sjsr_package$() {
  if ((!$n_sjsr_package$)) {
    $n_sjsr_package$ = new $c_sjsr_package$();
  }
  return $n_sjsr_package$;
}
/** @constructor */
function $c_s_util_CommandLineParser$() {
}
$p = $c_s_util_CommandLineParser$.prototype = new $h_O();
$p.constructor = $c_s_util_CommandLineParser$;
/** @constructor */
function $h_s_util_CommandLineParser$() {
}
$h_s_util_CommandLineParser$.prototype = $p;
$p.pB = (function(err) {
  var where = ((err.mx() === 0) ? "" : ((err.mx() === 1) ? " after first argument" : ((" after " + err.mx()) + " arguments")));
  var x = ((("Illegal command line" + where) + ": ") + err.q4());
  $m_s_Console$().pc().oo((x + "\n"));
});
var $d_s_util_CommandLineParser$ = new $TypeData().i($c_s_util_CommandLineParser$, "scala.util.CommandLineParser$", ({
  dp: 1
}));
var $n_s_util_CommandLineParser$;
function $m_s_util_CommandLineParser$() {
  if ((!$n_s_util_CommandLineParser$)) {
    $n_s_util_CommandLineParser$ = new $c_s_util_CommandLineParser$();
  }
  return $n_s_util_CommandLineParser$;
}
/** @constructor */
function $c_s_util_DynamicVariable(init) {
  this.iA = null;
  this.iA = init;
}
$p = $c_s_util_DynamicVariable.prototype = new $h_O();
$p.constructor = $c_s_util_DynamicVariable;
/** @constructor */
function $h_s_util_DynamicVariable() {
}
$h_s_util_DynamicVariable.prototype = $p;
$p.n = (function() {
  return (("DynamicVariable(" + this.iA) + ")");
});
var $d_s_util_DynamicVariable = new $TypeData().i($c_s_util_DynamicVariable, "scala.util.DynamicVariable", ({
  dr: 1
}));
/** @constructor */
function $c_s_util_hashing_MurmurHash3() {
}
$p = $c_s_util_hashing_MurmurHash3.prototype = new $h_O();
$p.constructor = $c_s_util_hashing_MurmurHash3;
/** @constructor */
function $h_s_util_hashing_MurmurHash3() {
}
$h_s_util_hashing_MurmurHash3.prototype = $p;
$p.p = (function(hash, data) {
  var h = this.iq(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.iq = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.ar = (function(hash, length) {
  return this.hw((hash ^ length));
});
$p.hw = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.T = (function(x, seed, ignorePrefix) {
  var arr = x.u();
  if ((arr === 0)) {
    return ((!ignorePrefix) ? $f_T__hashCode__I(x.A()) : seed);
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.p(h, $f_T__hashCode__I(x.A()));
    }
    var i = 0;
    while ((i < arr)) {
      h = this.p(h, $m_sr_Statics$().W(x.m(i)));
      i = ((1 + i) | 0);
    }
    return this.ar(h, arr);
  }
});
$p.nI = (function(x, seed, caseClassName) {
  var arr = x.u();
  var aye = $f_T__hashCode__I(((caseClassName !== null) ? caseClassName : x.A()));
  if ((arr === 0)) {
    return aye;
  } else {
    var h = seed;
    h = this.p(h, aye);
    var i = 0;
    while ((i < arr)) {
      h = this.p(h, $m_sr_Statics$().W(x.m(i)));
      i = ((1 + i) | 0);
    }
    return this.ar(h, arr);
  }
});
$p.pM = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = xs.ac();
  while (iterator.N()) {
    var x = iterator.E();
    var h = $m_sr_Statics$().W(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0);
  }
  var h$2 = seed;
  h$2 = this.p(h$2, a);
  h$2 = this.p(h$2, b);
  h$2 = this.iq(h$2, c);
  return this.ar(h$2, n);
});
$p.pb = (function(xs, seed) {
  var it = xs.ac();
  var h = seed;
  if ((!it.N())) {
    return this.ar(h, 0);
  }
  var x0 = it.E();
  if ((!it.N())) {
    return this.ar(this.p(h, $m_sr_Statics$().W(x0)), 1);
  }
  var x1 = it.E();
  var initial = $m_sr_Statics$().W(x0);
  h = this.p(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().W(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while (it.N()) {
    h = this.p(h, prev);
    var hash = $m_sr_Statics$().W(it.E());
    if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
      h = this.p(h, hash);
      i = ((1 + i) | 0);
      while (it.N()) {
        h = this.p(h, $m_sr_Statics$().W(it.E()));
        i = ((1 + i) | 0);
      }
      return this.ar(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.hw(this.p(this.p(h0, rangeDiff), prev));
});
$p.mf = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().ha(a);
  switch (l) {
    case 0: {
      return this.ar(h, 0);
      break;
    }
    case 1: {
      return this.ar(this.p(h, $m_sr_Statics$().W($m_sr_ScalaRunTime$().gn(a, 0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().W($m_sr_ScalaRunTime$().gn(a, 0));
      h = this.p(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().W($m_sr_ScalaRunTime$().gn(a, 1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.p(h, prev);
        var hash = $m_sr_Statics$().W($m_sr_ScalaRunTime$().gn(a, i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.p(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.p(h, $m_sr_Statics$().W($m_sr_ScalaRunTime$().gn(a, i)));
            i = ((1 + i) | 0);
          }
          return this.ar(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.hw(this.p(this.p(h0, rangeDiff), prev));
    }
  }
});
$p.mY = (function(start, step, last, seed) {
  return this.hw(this.p(this.p(this.p(seed, start), step), last));
});
$p.oh = (function(a, seed) {
  var h = seed;
  var l = a.C();
  switch (l) {
    case 0: {
      return this.ar(h, 0);
      break;
    }
    case 1: {
      return this.ar(this.p(h, $m_sr_Statics$().W(a.aa(0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().W(a.aa(0));
      h = this.p(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().W(a.aa(1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.p(h, prev);
        var hash = $m_sr_Statics$().W(a.aa(i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.p(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.p(h, $m_sr_Statics$().W(a.aa(i)));
            i = ((1 + i) | 0);
          }
          return this.ar(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.hw(this.p(this.p(h0, rangeDiff), prev));
    }
  }
});
$p.oq = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!elems.ab())) {
    elems.io();
  }
  return ((rangeState === 2) ? this.mY(initial, rangeDiff, prev, seed) : this.ar(h, n));
});
function $p_Lsketches_rooms_canvases_Canvases$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2($thiz, c, u, v) {
  return new $c_T2(c, new $c_Ltrivalibs_graphics_math_cpu_Vec2(u, v));
}
function $p_Lsketches_rooms_canvases_Canvases$package$__form$2__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form($thiz, p$1, faces) {
  var mesh$proxy1 = $m_Ltrivalibs_graphics_geometry_Mesh$().mb(faces, null, 0, new $c_Ltrivalibs_graphics_geometry_package$package$$anon$1(0));
  var vl = new $c_Ltrivalibs_graphics_geometry_VertexLayout$named(new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$(), new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$(), $m_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$())));
  var f = ((v$3, n$3, ref$3) => {
    var nVal = new $c_T3(n$3.w, n$3.z, n$3.x);
    var values$proxy1 = $m_sr_Tuples$().nK(vl.iL.fG(v$3), $m_sr_Tuples$().mk(nVal, $m_T$package$EmptyTuple$()));
    var baseOffset$proxy1 = (ref$3.off | 0);
    var nestedValues = values$proxy1.m(0);
    var value = nestedValues.m(0);
    ref$3.dv.setFloat32(baseOffset$proxy1, Math.fround(value), true);
    var tailOffset = ((4 + baseOffset$proxy1) | 0);
    var value$2 = nestedValues.m(1);
    ref$3.dv.setFloat32(tailOffset, Math.fround(value$2), true);
    var tailOffset$2 = ((4 + tailOffset) | 0);
    var value$3 = nestedValues.m(2);
    ref$3.dv.setFloat32(tailOffset$2, Math.fround(value$3), true);
    var tailOffset$4 = ((12 + baseOffset$proxy1) | 0);
    var nestedValues$2 = values$proxy1.m(1);
    var value$4 = nestedValues$2.m(0);
    ref$3.dv.setFloat32(tailOffset$4, Math.fround(value$4), true);
    var tailOffset$5 = ((4 + tailOffset$4) | 0);
    var value$5 = nestedValues$2.m(1);
    ref$3.dv.setFloat32(tailOffset$5, Math.fround(value$5), true);
    var tailOffset$7 = ((8 + tailOffset$4) | 0);
    var nestedValues$3 = values$proxy1.m(2);
    var value$6 = nestedValues$3.m(0);
    ref$3.dv.setFloat32(tailOffset$7, Math.fround(value$6), true);
    var tailOffset$8 = ((4 + tailOffset$7) | 0);
    var value$7 = nestedValues$3.m(1);
    ref$3.dv.setFloat32(tailOffset$8, Math.fround(value$7), true);
    var tailOffset$9 = ((4 + tailOffset$8) | 0);
    var value$8 = nestedValues$3.m(2);
    ref$3.dv.setFloat32(tailOffset$9, Math.fround(value$8), true);
  });
  var \u03b4proxy2 = $m_Ltrivalibs_graphics_geometry_buffers$package$();
  mesh$proxy1.nX();
  var vertexCount = 0;
  var hasQuads = false;
  var fi = 0;
  while ((fi < (mesh$proxy1.a7.length | 0))) {
    var n = (mesh$proxy1.a7[fi].length | 0);
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
    while ((fi < (mesh$proxy1.a7.length | 0))) {
      var arr = mesh$proxy1.a7[fi];
      var opt$proxy1 = mesh$proxy1.g9[fi].gE;
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
    while ((fi < (mesh$proxy1.a7.length | 0))) {
      var arr$2 = mesh$proxy1.a7[fi];
      var n$2 = (arr$2.length | 0);
      var opt$proxy2 = mesh$proxy1.g9[fi].gE;
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
    var $x_1 = new $c_Ltrivalibs_graphics_geometry_BufferedGeometry(verts, \u03b4proxy2.mQ(idxBuf, vertexCount));
  }
  return p$1.mr($x_1, (void 0), (void 0), (void 0));
}
function $p_Lsketches_rooms_canvases_Canvases$package$__roomNoise$1__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr($thiz, wp, normal) {
  var scaledWp = $m_Ltrivalibs_graphics_math_gpu_vec3$().az($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aV($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().Y().I(wp), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().a1($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().Y().B(wp), 0.2)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().a1($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().Y().B(wp), 0.3), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aV($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().a1($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().Y().an(wp), 0.8), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().a1($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().Y().B(wp), 0.2)));
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().p3($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(0.68), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(1.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().o7($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().jD($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aV($m_Lsketchlib_shaders_Noise$().mq($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().jG(scaledWp, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().Y(), 0.15), 3, 3.6, 0.12, $m_Ltrivalibs_graphics_math_gpu_vec3$().bz($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().mw().h(140))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().a1($m_Lsketchlib_shaders_Noise$().mq($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().jG($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().nL(scaledWp, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().Y(), normal), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().Y(), 0.2), 3, 2.1, 0.25, $m_Ltrivalibs_graphics_math_gpu_vec3$().bz($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().mw().h(70))), 0.3)), 1.3)));
}
function $p_Lsketches_rooms_canvases_Canvases$package$__texSize$1__D__D__T2($thiz, w, h) {
  return new $c_T2($doubleToInt((w * $m_Lsketches_rooms_canvases_Canvases$package$().iD)), $doubleToInt((h * $m_Lsketches_rooms_canvases_Canvases$package$().iD)));
}
function $p_Lsketches_rooms_canvases_Canvases$package$__v$1__D__D__D__D__D__T2($thiz, x, y, z, u, w) {
  return new $c_T2(new $c_Ltrivalibs_graphics_math_cpu_Vec3(x, y, z), new $c_Ltrivalibs_graphics_math_cpu_Vec2(u, w));
}
function $p_Lsketches_rooms_canvases_Canvases$package$__paintingForm$1__Ltrivalibs_graphics_painter_Painter__Lsketches_rooms_canvases_PaintingSpec__Ltrivalibs_graphics_painter_Form($thiz, p$2, spec) {
  var hw = (0.5 * spec.bu);
  var hh = (0.5 * spec.bt);
  var hd = (0.5 * spec.bf);
  var p$proxy1 = (spec.bf / (spec.fs * spec.bu));
  var mu = ((p$proxy1 < 0.0) ? 0.0 : ((p$proxy1 > 0.45) ? 0.45 : p$proxy1));
  var p$proxy2 = (spec.bf / (spec.fs * spec.bt));
  var mv = ((p$proxy2 < 0.0) ? 0.0 : ((p$proxy2 > 0.45) ? 0.45 : p$proxy2));
  var faces = [$m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().bi($p_Lsketches_rooms_canvases_Canvases$package$__v$1__D__D__D__D__D__T2($thiz, (-hw), hh, hd, mu, mv), $p_Lsketches_rooms_canvases_Canvases$package$__v$1__D__D__D__D__D__T2($thiz, (-hw), (-hh), hd, mu, (1.0 - mv)), $p_Lsketches_rooms_canvases_Canvases$package$__v$1__D__D__D__D__D__T2($thiz, hw, (-hh), hd, (1.0 - mu), (1.0 - mv)), $p_Lsketches_rooms_canvases_Canvases$package$__v$1__D__D__D__D__D__T2($thiz, hw, hh, hd, (1.0 - mu), mv)), $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().bi($p_Lsketches_rooms_canvases_Canvases$package$__v$1__D__D__D__D__D__T2($thiz, hw, hh, hd, (1.0 - mu), mv), $p_Lsketches_rooms_canvases_Canvases$package$__v$1__D__D__D__D__D__T2($thiz, hw, (-hh), hd, (1.0 - mu), (1.0 - mv)), $p_Lsketches_rooms_canvases_Canvases$package$__v$1__D__D__D__D__D__T2($thiz, hw, (-hh), (-hd), 1.0, (1.0 - mv)), $p_Lsketches_rooms_canvases_Canvases$package$__v$1__D__D__D__D__D__T2($thiz, hw, hh, (-hd), 1.0, mv)), $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().bi($p_Lsketches_rooms_canvases_Canvases$package$__v$1__D__D__D__D__D__T2($thiz, (-hw), hh, hd, mu, mv), $p_Lsketches_rooms_canvases_Canvases$package$__v$1__D__D__D__D__D__T2($thiz, (-hw), (-hh), hd, mu, (1.0 - mv)), $p_Lsketches_rooms_canvases_Canvases$package$__v$1__D__D__D__D__D__T2($thiz, (-hw), (-hh), (-hd), 0.0, (1.0 - mv)), $p_Lsketches_rooms_canvases_Canvases$package$__v$1__D__D__D__D__D__T2($thiz, (-hw), hh, (-hd), 0.0, mv)), $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().bi($p_Lsketches_rooms_canvases_Canvases$package$__v$1__D__D__D__D__D__T2($thiz, (-hw), hh, hd, mu, mv), $p_Lsketches_rooms_canvases_Canvases$package$__v$1__D__D__D__D__D__T2($thiz, hw, hh, hd, (1.0 - mu), mv), $p_Lsketches_rooms_canvases_Canvases$package$__v$1__D__D__D__D__D__T2($thiz, hw, hh, (-hd), (1.0 - mu), 0.0), $p_Lsketches_rooms_canvases_Canvases$package$__v$1__D__D__D__D__D__T2($thiz, (-hw), hh, (-hd), mu, 0.0)), $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().bi($p_Lsketches_rooms_canvases_Canvases$package$__v$1__D__D__D__D__D__T2($thiz, (-hw), (-hh), hd, mu, (1.0 - mv)), $p_Lsketches_rooms_canvases_Canvases$package$__v$1__D__D__D__D__D__T2($thiz, hw, (-hh), hd, (1.0 - mu), (1.0 - mv)), $p_Lsketches_rooms_canvases_Canvases$package$__v$1__D__D__D__D__D__T2($thiz, hw, (-hh), (-hd), (1.0 - mu), 1.0), $p_Lsketches_rooms_canvases_Canvases$package$__v$1__D__D__D__D__D__T2($thiz, (-hw), (-hh), (-hd), mu, 1.0)), $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().bi($p_Lsketches_rooms_canvases_Canvases$package$__v$1__D__D__D__D__D__T2($thiz, (-hw), hh, (-hd), 0.0, 0.0), $p_Lsketches_rooms_canvases_Canvases$package$__v$1__D__D__D__D__D__T2($thiz, (-hw), (-hh), (-hd), 0.0, 1.0), $p_Lsketches_rooms_canvases_Canvases$package$__v$1__D__D__D__D__D__T2($thiz, hw, (-hh), (-hd), 1.0, 1.0), $p_Lsketches_rooms_canvases_Canvases$package$__v$1__D__D__D__D__D__T2($thiz, hw, hh, (-hd), 1.0, 0.0))];
  var mesh$proxy2 = $m_Ltrivalibs_graphics_geometry_Mesh$().mb(faces, null, 0, new $c_Ltrivalibs_graphics_geometry_package$package$$anon$1(0));
  var vl = new $c_Ltrivalibs_graphics_geometry_VertexLayout$named(new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$(), new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$(), $m_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$())));
  var f = ((v$3, ref$3) => {
    var values$proxy2 = vl.iL.fG(v$3);
    var baseOffset$proxy5 = (ref$3.off | 0);
    var nestedValues = values$proxy2.m(0);
    var value = nestedValues.m(0);
    ref$3.dv.setFloat32(baseOffset$proxy5, Math.fround(value), true);
    var tailOffset = ((4 + baseOffset$proxy5) | 0);
    var value$2 = nestedValues.m(1);
    ref$3.dv.setFloat32(tailOffset, Math.fround(value$2), true);
    var tailOffset$2 = ((4 + tailOffset) | 0);
    var value$3 = nestedValues.m(2);
    ref$3.dv.setFloat32(tailOffset$2, Math.fround(value$3), true);
    var tailOffset$4 = ((12 + baseOffset$proxy5) | 0);
    var nestedValues$2 = values$proxy2.m(1);
    var value$4 = nestedValues$2.m(0);
    ref$3.dv.setFloat32(tailOffset$4, Math.fround(value$4), true);
    var tailOffset$5 = ((4 + tailOffset$4) | 0);
    var value$5 = nestedValues$2.m(1);
    ref$3.dv.setFloat32(tailOffset$5, Math.fround(value$5), true);
  });
  var \u03b4proxy6 = $m_Ltrivalibs_graphics_geometry_buffers$package$();
  var vertexCount = 0;
  var hasQuads = false;
  var fi = 0;
  while ((fi < (mesh$proxy2.a7.length | 0))) {
    var n = (mesh$proxy2.a7[fi].length | 0);
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
    while ((fi < (mesh$proxy2.a7.length | 0))) {
      var arr = mesh$proxy2.a7[fi];
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
    while ((fi < (mesh$proxy2.a7.length | 0))) {
      var arr$2 = mesh$proxy2.a7[fi];
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
    var $x_1 = new $c_Ltrivalibs_graphics_geometry_BufferedGeometry(verts, \u03b4proxy6.mQ(idxBuf, vertexCount));
  }
  return p$2.mr($x_1, (void 0), (void 0), (void 0));
}
function $p_Lsketches_rooms_canvases_Canvases$package$__corner$1__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__D__D__D__T2($thiz, center$2, right$1, width$4, height$4, su, sv, u, w) {
  return new $c_T2($f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a6(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a6(), center$2, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a6(), right$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), (0.5 * (su * width$4)))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a6(), $m_Lsketches_rooms_canvases_Canvases$package$().gy, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), (0.5 * (sv * height$4)))), new $c_Ltrivalibs_graphics_math_cpu_Vec2(u, w));
}
function $p_Lsketches_rooms_canvases_Canvases$package$__mkWall$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__Ltrivalibs_graphics_math_cpu_Vec3__Lsketches_rooms_canvases_Wall($thiz, p$10, center, width, height, rotY, inwardNormal) {
  var right = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a6(), $m_Lsketches_rooms_canvases_Canvases$package$().gy, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), inwardNormal);
  return new $c_Lsketches_rooms_canvases_Wall(center, width, height, rotY, inwardNormal, $p_Lsketches_rooms_canvases_Canvases$package$__form$2__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form($thiz, p$10, [$m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().bi($p_Lsketches_rooms_canvases_Canvases$package$__corner$1__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__D__D__D__T2($thiz, center, right, width, height, (-1.0), 1.0, 0.0, 0.0), $p_Lsketches_rooms_canvases_Canvases$package$__corner$1__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__D__D__D__T2($thiz, center, right, width, height, (-1.0), (-1.0), 0.0, 1.0), $p_Lsketches_rooms_canvases_Canvases$package$__corner$1__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__D__D__D__T2($thiz, center, right, width, height, 1.0, (-1.0), 1.0, 1.0), $p_Lsketches_rooms_canvases_Canvases$package$__corner$1__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__D__D__D__T2($thiz, center, right, width, height, 1.0, 1.0, 1.0, 0.0))]), $m_Lsketches_rooms_canvases_Wall$().ng());
}
function $p_Lsketches_rooms_canvases_Canvases$package$__hang$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_GPUSampler__Lsketches_rooms_canvases_Wall__Lsketches_rooms_canvases_PaintingSpec__D__D__Lsketches_rooms_canvases_Painting($thiz, p$3, paintingShade$1, sampler$1, wall, spec, u, v) {
  var right = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a6(), $m_Lsketches_rooms_canvases_Canvases$package$().gy, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), wall.fu);
  var hd = (0.5 * spec.bf);
  var pos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a6(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a6(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a6(), wall.g6, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a6(), right, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), (u - (0.5 * wall.aR)))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a6(), $m_Lsketches_rooms_canvases_Canvases$package$().gy, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), (v - (0.5 * wall.b2)))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a6(), wall.fu, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), (hd + 0.02)));
  var m = $m_Ltrivalibs_graphics_math_cpu_Mat4$().mu(pos, $m_Ltrivalibs_graphics_math_cpu_Quat$().mt(wall.g7), new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0));
  var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
  var uv$proxy1 = ul$proxy1.aF;
  var buffer = new ArrayBuffer(64);
  var arr$proxy9 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
  var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy9.dv, 0), p$3.f, uv$proxy1);
  b.P.H(b.o, m);
  var $x_2 = b.O.queue;
  var $x_1 = b.K;
  var s$proxy3 = b.o;
  $x_2.writeBuffer($x_1, 0.0, s$proxy3.dv.buffer);
  var Bindable_this = p$3.hx($p_Lsketches_rooms_canvases_Canvases$package$__paintingForm$1__Ltrivalibs_graphics_painter_Painter__Lsketches_rooms_canvases_PaintingSpec__Ltrivalibs_graphics_painter_Form($thiz, p$3, spec), paintingShade$1, "none", (void 0));
  var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("model", b);
  var e2$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler$1);
  var e3$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("img", spec.g5);
  var \u03b4scrutinee289 = e1$proxy1.t;
  var idx = (Bindable_this.a0.J.model | 0);
  while (((Bindable_this.Q.length | 0) <= idx)) {
    Bindable_this.Q.push(null);
  }
  Bindable_this.Q[idx] = \u03b4scrutinee289;
  var \u03b4scrutinee303 = e2$proxy1.t;
  var idx$2 = (Bindable_this.a0.J.samp | 0);
  while (((Bindable_this.Q.length | 0) <= idx$2)) {
    Bindable_this.Q.push(null);
  }
  Bindable_this.Q[idx$2] = \u03b4scrutinee303;
  var \u03b4scrutinee323 = e3$proxy1.t;
  var idx$3 = (Bindable_this.a0.aC.img | 0);
  while (((Bindable_this.a8.length | 0) <= idx$3)) {
    Bindable_this.a8.push(null);
  }
  Bindable_this.a8[idx$3] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee323);
  var painting = new $c_Lsketches_rooms_canvases_Painting(b, Bindable_this, new $c_Ltrivalibs_graphics_math_cpu_Vec4((u / wall.aR), (1.0 - (v / wall.b2)), ((0.5 * spec.bu) / wall.aR), ((0.5 * spec.bt) / wall.b2)), new $c_Ltrivalibs_graphics_math_cpu_Vec2(($m_Lsketches_rooms_canvases_Canvases$package$().iB / wall.aR), ($m_Lsketches_rooms_canvases_Canvases$package$().iB / wall.b2)));
  wall.bv.push(painting);
  return painting;
}
function $p_Lsketches_rooms_canvases_Canvases$package$__bakeWallTex$1__Lsketchlib_utils_bake_TextureBaker__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Shade__Lsketches_rooms_canvases_Wall__Ltrivalibs_graphics_painter_Panel($thiz, wallBaker$1, p$4, shadowLayerShade$1, wall) {
  matchResult14: {
    var \u03b44$;
    var x25 = $p_Lsketches_rooms_canvases_Canvases$package$__texSize$1__D__D__T2($thiz, wall.aR, wall.b2);
    if ((x25 !== null)) {
      var \u03b44$ = x25;
      break matchResult14;
    }
    throw new $c_s_MatchError(x25);
  }
  var ww$2 = (\u03b44$.Z | 0);
  var wh$2 = (\u03b44$.au | 0);
  var panel = wallBaker$1.mW(wall.ft, ww$2, wh$2, (void 0), (void 0), true);
  var painting = wall.bv[0];
  var Bindable_this = p$4.bj(shadowLayerShade$1, (void 0), (void 0), (void 0));
  var e1$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("rect", painting.gA);
  var e2$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("fade", painting.gz);
  var e3$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("strength", $m_Lsketches_rooms_canvases_Canvases$package$().ku);
  var \u03b4scrutinee327 = e1$proxy2.t;
  var idx = (Bindable_this.y.J.rect | 0);
  if (((idx < (Bindable_this.i.length | 0)) && (Bindable_this.i[idx] !== null))) {
    var BufferBinding_this = Bindable_this.i[idx];
    BufferBinding_this.P.H(BufferBinding_this.o, \u03b4scrutinee327);
    var $x_2 = BufferBinding_this.O.queue;
    var $x_1 = BufferBinding_this.K;
    var s$proxy4 = BufferBinding_this.o;
    $x_2.writeBuffer($x_1, 0.0, s$proxy4.dv.buffer);
  } else {
    var uv = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$();
    var device$proxy1 = Bindable_this.gb.f;
    var buffer = new ArrayBuffer(16);
    var arr$proxy10 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
    var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy10.dv, 0), device$proxy1, uv);
    b.P.H(b.o, \u03b4scrutinee327);
    var $x_4 = b.O.queue;
    var $x_3 = b.K;
    var s$proxy5 = b.o;
    $x_4.writeBuffer($x_3, 0.0, s$proxy5.dv.buffer);
    while (((Bindable_this.i.length | 0) <= idx)) {
      Bindable_this.i.push(null);
    }
    Bindable_this.i[idx] = b;
  }
  Bindable_this.L = null;
  var \u03b4scrutinee338 = e2$proxy2.t;
  var idx$2 = (Bindable_this.y.J.fade | 0);
  if (((idx$2 < (Bindable_this.i.length | 0)) && (Bindable_this.i[idx$2] !== null))) {
    var BufferBinding_this$5 = Bindable_this.i[idx$2];
    BufferBinding_this$5.P.H(BufferBinding_this$5.o, \u03b4scrutinee338);
    var $x_6 = BufferBinding_this$5.O.queue;
    var $x_5 = BufferBinding_this$5.K;
    var s$proxy6 = BufferBinding_this$5.o;
    $x_6.writeBuffer($x_5, 0.0, s$proxy6.dv.buffer);
  } else {
    var uv$2 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$();
    var device$proxy2 = Bindable_this.gb.f;
    var buffer$2 = new ArrayBuffer(8);
    var arr$proxy11 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
    var b$2 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy11.dv, 0), device$proxy2, uv$2);
    b$2.P.H(b$2.o, \u03b4scrutinee338);
    var $x_8 = b$2.O.queue;
    var $x_7 = b$2.K;
    var s$proxy7 = b$2.o;
    $x_8.writeBuffer($x_7, 0.0, s$proxy7.dv.buffer);
    while (((Bindable_this.i.length | 0) <= idx$2)) {
      Bindable_this.i.push(null);
    }
    Bindable_this.i[idx$2] = b$2;
  }
  Bindable_this.L = null;
  var \u03b4scrutinee353 = (+e3$proxy2.t);
  var idx$3 = (Bindable_this.y.J.strength | 0);
  if (((idx$3 < (Bindable_this.i.length | 0)) && (Bindable_this.i[idx$3] !== null))) {
    var BufferBinding_this$9 = Bindable_this.i[idx$3];
    BufferBinding_this$9.P.H(BufferBinding_this$9.o, \u03b4scrutinee353);
    var $x_10 = BufferBinding_this$9.O.queue;
    var $x_9 = BufferBinding_this$9.K;
    var s$proxy8 = BufferBinding_this$9.o;
    $x_10.writeBuffer($x_9, 0.0, s$proxy8.dv.buffer);
  } else {
    var uv$3 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
    var device$proxy3 = Bindable_this.gb.f;
    var buffer$3 = new ArrayBuffer(4);
    var arr$proxy12 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$3), 1);
    var b$3 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy12.dv, 0), device$proxy3, uv$3);
    b$3.P.H(b$3.o, \u03b4scrutinee353);
    var $x_12 = b$3.O.queue;
    var $x_11 = b$3.K;
    var s$proxy9 = b$3.o;
    $x_12.writeBuffer($x_11, 0.0, s$proxy9.dv.buffer);
    while (((Bindable_this.i.length | 0) <= idx$3)) {
      Bindable_this.i.push(null);
    }
    Bindable_this.i[idx$3] = b$3;
  }
  Bindable_this.L = null;
  panel.it((void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), Bindable_this, (void 0));
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$4, panel);
  return panel;
}
function $p_Lsketches_rooms_canvases_Canvases$package$__lineMask$1__D__D__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr($thiz, GridN$1, HalfWidth$1, t) {
  var f = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().ms($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().a1(t, GridN$1));
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().bE($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().mR(f, $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().b8().b9((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aX(1.0)) + " - ") + f.d) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(HalfWidth$1), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(0.0));
}
function $p_Lsketches_rooms_canvases_Canvases$package$__patternPanel$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_painter_Panel($thiz, p$5, imgShade$1, c) {
  var Bindable_this = p$5.bj(imgShade$1, (void 0), (void 0), (void 0));
  var e1$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("color", c);
  var \u03b4scrutinee417 = e1$proxy3.t;
  var idx = (Bindable_this.y.J.color | 0);
  if (((idx < (Bindable_this.i.length | 0)) && (Bindable_this.i[idx] !== null))) {
    var BufferBinding_this = Bindable_this.i[idx];
    BufferBinding_this.P.H(BufferBinding_this.o, \u03b4scrutinee417);
    var $x_2 = BufferBinding_this.O.queue;
    var $x_1 = BufferBinding_this.K;
    var s$proxy10 = BufferBinding_this.o;
    $x_2.writeBuffer($x_1, 0.0, s$proxy10.dv.buffer);
  } else {
    var uv = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$();
    var device$proxy4 = Bindable_this.gb.f;
    var buffer = new ArrayBuffer(16);
    var arr$proxy13 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
    var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy13.dv, 0), device$proxy4, uv);
    b.P.H(b.o, \u03b4scrutinee417);
    var $x_4 = b.O.queue;
    var $x_3 = b.K;
    var s$proxy11 = b.o;
    $x_4.writeBuffer($x_3, 0.0, s$proxy11.dv.buffer);
    while (((Bindable_this.i.length | 0) <= idx)) {
      Bindable_this.i.push(null);
    }
    Bindable_this.i[idx] = b;
  }
  Bindable_this.L = null;
  return p$5.bD(256, 256, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), Bindable_this, (void 0));
}
/** @constructor */
function $c_Lsketches_rooms_canvases_Canvases$package$() {
  this.fr = 0.0;
  this.aL = 0.0;
  this.fq = 0.0;
  this.iD = 0.0;
  this.gy = null;
  this.kv = 0.0;
  this.kt = 0.0;
  this.iC = 0.0;
  this.iB = 0.0;
  this.ku = 0.0;
  $n_Lsketches_rooms_canvases_Canvases$package$ = this;
  this.fr = 6.5;
  this.aL = 5.5;
  this.fq = 10.0;
  this.iD = 48.0;
  this.gy = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
  this.kv = 0.5;
  this.kt = 2.5;
  this.iC = 0.28;
  this.iB = 0.06;
  this.ku = 0.2;
}
$p = $c_Lsketches_rooms_canvases_Canvases$package$.prototype = new $h_O();
$p.constructor = $c_Lsketches_rooms_canvases_Canvases$package$;
/** @constructor */
function $h_Lsketches_rooms_canvases_Canvases$package$() {
}
$h_Lsketches_rooms_canvases_Canvases$package$.prototype = $p;
$p.pz = (function(uv, rect, fade) {
  var hx = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().M().an(rect);
  var hy = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().M().am(rect);
  var dx = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().h6($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().X().I(uv), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().M().I(rect));
  var dy = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().h6($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().X().B(uv), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().M().B(rect));
  var hMask = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().bE($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().m7(dx), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aV(hx, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().X().I(fade)), hx);
  var upper = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().bE(dy, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().h6($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().n3(hy), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().a1($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().X().B(fade), $m_Lsketches_rooms_canvases_Canvases$package$().kv)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().n3(hy));
  var lower = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().bE(dy, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aV(hy, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().a1($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().X().B(fade), $m_Lsketches_rooms_canvases_Canvases$package$().kt)), hy);
  var grad = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().mj($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().jE($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aV(dy, hy), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().jF($m_Ltrivalibs_graphics_math_gpu_LeftScalar$().b8().b9((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aX(2.0)) + " * ") + hy.d) + ")")), 1.0E-4)));
  var vert = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().jF($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().a1(grad, (1.0 - $m_Lsketches_rooms_canvases_Canvases$package$().iC)), $m_Lsketches_rooms_canvases_Canvases$package$().iC);
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bh($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bh($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bh(hMask, upper), lower), vert);
});
$p.pr = (function() {
  $m_Ltrivalibs_graphics_painter_Painter$().oi(document.getElementById("canvas"), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((p$6) => {
    var sampler = p$6.jN();
    var box = $m_Ltrivalibs_graphics_geometry_Box$().nq(new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, (0.5 * $m_Lsketches_rooms_canvases_Canvases$package$().aL), 0.0), $m_Lsketches_rooms_canvases_Canvases$package$().fr, $m_Lsketches_rooms_canvases_Canvases$package$().aL, $m_Lsketches_rooms_canvases_Canvases$package$().fq);
    var floorForm = $p_Lsketches_rooms_canvases_Canvases$package$__form$2__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$6, [box.nF(new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((c$2, uvw$2) => $p_Lsketches_rooms_canvases_Canvases$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2(this, c$2, uvw$2.w, uvw$2.x))))]);
    var ceilForm = $p_Lsketches_rooms_canvases_Canvases$package$__form$2__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$6, [box.pJ(new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((c$2$1, uvw$2$1) => $p_Lsketches_rooms_canvases_Canvases$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2(this, c$2$1, uvw$2$1.w, uvw$2$1.x))))]);
    matchResult10$1: {
      var \u03b42$;
      var x13 = $p_Lsketches_rooms_canvases_Canvases$package$__texSize$1__D__D__T2(this, $m_Lsketches_rooms_canvases_Canvases$package$().fr, $m_Lsketches_rooms_canvases_Canvases$package$().fq);
      if ((x13 !== null)) {
        var \u03b42$ = x13;
        break matchResult10$1;
      }
      throw new $c_s_MatchError(x13);
    }
    var rfw$2 = (\u03b42$.Z | 0);
    var rfh$2 = (\u03b42$.au | 0);
    var floorTex = $m_Lsketchlib_utils_bake_TextureBaker$().nA(p$6, floorForm, rfw$2, rfh$2, (void 0), (void 0), true, new $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(((wp$2, normal$2, _$1$2) => $m_Ltrivalibs_graphics_math_gpu_vec4$().ag($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().bC($m_Ltrivalibs_graphics_math_gpu_vec3$().az($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(0.8), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(0.78), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(0.75)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().Y(), $p_Lsketches_rooms_canvases_Canvases$package$__roomNoise$1__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr(this, wp$2, normal$2)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(1.0)))));
    var ceilTex = $m_Lsketchlib_utils_bake_TextureBaker$().nB(p$6, ceilForm, rfw$2, rfh$2, (void 0), "rgba16float", true, new $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(((wp$2$1, normal$2$1, uv$2, color$2) => {
      var col = new $c_Ltrivalibs_graphics_math_gpu_VarExpr("col");
      var s = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "s");
      var band = new $c_Ltrivalibs_graphics_math_gpu_VarExpr("band");
      var lf = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "lf");
      var halo = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "halo");
      var $x_11 = $m_sjsr_package$();
      var $x_10 = col.S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().bC($m_Ltrivalibs_graphics_math_gpu_vec3$().az($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(0.88), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(0.88), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(0.87)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().Y(), $p_Lsketches_rooms_canvases_Canvases$package$__roomNoise$1__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr(this, wp$2$1, normal$2$1)));
      var $x_9 = s.S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().ms($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().jF($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().a1($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().X().I(uv$2), 6.0), 0.5)));
      var $x_8 = band.S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().bE($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().m7(s), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(0.05), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(0.02)));
      var $x_7 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
      var $x_6 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().bE($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().X().B(uv$2), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(0.05), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(0.15));
      var $x_5 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
      var e$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().X().B(uv$2);
      var $x_4 = lf.S($x_7.bh($x_6, $x_5.bE($m_Ltrivalibs_graphics_math_gpu_LeftScalar$().b8().b9((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aX(1.0)) + " - ") + e$proxy1.d) + ")")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(0.05), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(0.15))));
      var $x_3 = band.ni(lf);
      var $x_2 = halo.S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().o3(band, $m_Ltrivalibs_graphics_math_gpu_vec3$().az($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(8.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(7.6), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(6.8))));
      var $x_1 = col.nh(halo);
      var value$proxy1 = $m_Ltrivalibs_graphics_math_gpu_vec4$().ag(col, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(1.0));
      return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_11.e(new ($d_T.r().C)([$x_10, $x_9, $x_8, $x_4, $x_3, $x_2, $x_1, (((("  " + color$2.R) + " = ") + value$proxy1.d) + ";")]))), "", "\n", "");
    })));
    var wallBaker = $m_Lsketchlib_utils_bake_TextureBaker$().md(p$6, new $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(((wp$2$2, normal$2$2, _$2$2) => {
      var $x_13 = $m_Ltrivalibs_graphics_math_gpu_vec4$();
      var $x_12 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$();
      var Vec3ImmutableOpsG_this = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$();
      var v$proxy1 = $m_Ltrivalibs_graphics_math_gpu_vec3$().az($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(0.96), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(0.96), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(0.95));
      var b$proxy1 = $m_Ltrivalibs_graphics_math_gpu_vec3$().az($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(0.89), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(0.89), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(0.88));
      var t$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().bE($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().Y().B(wp$2$2), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(4.7), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(5.5));
      return $x_13.ag($x_12.bC(Vec3ImmutableOpsG_this.p4(v$proxy1, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().Y(), b$proxy1, t$proxy1), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().Y(), $p_Lsketches_rooms_canvases_Canvases$package$__roomNoise$1__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr(this, wp$2$2, normal$2$2)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(1.0));
    })));
    var build$proxy1 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3) => {
      var body$proxy1 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2) => {
        var base = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "base");
        var sm = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "sm");
        var $x_20 = $m_sjsr_package$();
        var $x_19 = base.S($m_Ltrivalibs_graphics_math_gpu_expr$package$().hb($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "prev"), $m_Ltrivalibs_graphics_math_gpu_ivec2$().bz($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fH(ctx$2.fz))));
        var $x_18 = sm.S($m_Lsketches_rooms_canvases_Canvases$package$().pz(ctx$2.al.k("uv"), ctx$2.F.k("rect"), ctx$2.F.k("fade")));
        var AssignTarget_this = ctx$2.aw.a3("color");
        var $x_17 = $m_Ltrivalibs_graphics_math_gpu_vec4$();
        var $x_16 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$();
        var $x_15 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fI(base);
        var $x_14 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().Y();
        var e$proxy2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bh(ctx$2.F.k("strength"), sm);
        var value$proxy2 = $x_17.ag($x_16.bC($x_15, $x_14, $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().b8().b9((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aX(1.0)) + " - ") + e$proxy2.d) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().M().am(base));
        return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_20.e(new ($d_T.r().C)([$x_19, $x_18, (((("  " + AssignTarget_this.R) + " = ") + value$proxy2.d) + ";")]))), "", "\n", "");
      }));
      var d = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([]))));
      var ctx = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg;
      try {
        var $x_21 = body$proxy1.h(ctx);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev;
      }
      program$3.a9 = $x_21;
      $m_sjs_js_ArrayOps$().a2(reg.a5, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$3) => ((data$3) => {
        $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$3, data$3);
      }))(program$3)));
    }));
    var program = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
    build$proxy1.h(program);
    var b = program.a9;
    var helperFns$proxy1 = program.aA();
    var id = p$6.q;
    p$6.q = ((1 + p$6.q) | 0);
    var names = $m_sjs_js_ArrayOpsCommon$().a(["rect"], $m_sjs_js_ArrayOpsCommon$().a(["fade"], $m_sjs_js_ArrayOpsCommon$().a(["strength"], [])));
    var dict = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([]))));
    var i = 0;
    while ((i < (names.length | 0))) {
      dict[names[i]] = i;
      i = ((1 + i) | 0);
    }
    var names$2 = $m_sjs_js_ArrayOpsCommon$().a(["prev"], []);
    var dict$2 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([]))));
    var i$2 = 0;
    while ((i$2 < (names$2.length | 0))) {
      dict$2[names$2[i$2]] = i$2;
      i$2 = ((1 + i$2) | 0);
    }
    var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b, helperFns$proxy1);
    var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
    var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["rect"], $m_sjs_js_ArrayOpsCommon$().a(["fade"], $m_sjs_js_ArrayOpsCommon$().a(["strength"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$()).V.v()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$()).V.v()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).V.v()], []))));
    var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.af, sd.ae, fragBuiltinParams);
    var wgsl = (baseWgsl + "\n\n@group(1) @binding(0) var prev: texture_2d<f32>;");
    var args$proxy1 = $m_sr_ScalaRunTime$().at(new ($d_sjs_js_Any.r().C)([wgsl]));
    console.log(...$m_sjsr_Compat$().as(args$proxy1));
    var module = p$6.f.createShaderModule($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("code", wgsl)])))));
    var descriptors = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 2), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], [])))], []);
    var result = [];
    $m_sjs_js_ArrayOps$().a2(descriptors, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$1) => ((entries$2) => (result.push(Painter_this$1.f.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("entries", entries$2)])))))) | 0)))(p$6)));
    var x16 = new $c_T2(result, $m_Ltrivalibs_graphics_shader_layouts$().G(p$6.f, result));
    var \u03b46$ = x16;
    var bgls$2 = \u03b46$.Z;
    var entries = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([])))))]))))], []);
    var panelBgl = p$6.f.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("entries", entries)])))));
    if ((panelBgl !== null)) {
      var other$proxy1 = [panelBgl];
      var allBgls = bgls$2.concat(other$proxy1);
    } else {
      var allBgls = bgls$2;
    }
    var pl = $m_Ltrivalibs_graphics_shader_layouts$().G(p$6.f, allBgls);
    var shadowLayerShade = new $c_Ltrivalibs_graphics_painter_Shade(id, module, null, bgls$2[0], panelBgl, pl, false, dict, dict$2);
    var build$proxy2 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$1) => {
      var body$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$1) => {
        var $x_24 = $m_sjsr_package$();
        var AssignTarget_this$1 = ctx$2$1.aU.a3("uv");
        var value$proxy3 = ctx$2$1.b5.k("uv");
        var $x_23 = AssignTarget_this$1.R;
        var $x_22 = value$proxy3.d;
        var AssignTarget_this$2 = ctx$2$1.aU.gW;
        var value$proxy4 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().gp(ctx$2$1.fA.k("vp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fF(), $m_Ltrivalibs_graphics_math_gpu_vec4$().ag(ctx$2$1.b5.k("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().M(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$());
        return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_24.e(new ($d_T.r().C)([(((("  " + $x_23) + " = ") + $x_22) + ";"), (((("  " + AssignTarget_this$2.R) + " = ") + value$proxy4.d) + ";")]))), "", "\n", "");
      }));
      var d$1 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([]))));
      var ctx$1 = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$1), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$1;
      try {
        var $x_25 = body$proxy3.h(ctx$1);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$1;
      }
      program$3$1.b4 = $x_25;
      $m_sjs_js_ArrayOps$().a2(reg$1.a5, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$7) => ((data$3$1) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$7, data$3$1);
      }))(program$3$1)));
      var body$proxy5 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$2) => {
        var $x_26 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().fE();
        var AssignTarget_this$3 = ctx$2$2.aw.a3("color");
        var value$proxy5 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().az($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex"), ctx$2$2.al.k("uv"), ctx$2$2.F.k("samp"));
        return $x_26.h((((("  " + AssignTarget_this$3.R) + " = ") + value$proxy5.d) + ";"));
      }));
      var d$2 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([]))));
      var ctx$2$3 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$2), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$2;
      try {
        var $x_27 = body$proxy5.h(ctx$2$3);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$2;
      }
      program$3$1.aT = $x_27;
      $m_sjs_js_ArrayOps$().a2(reg$2.a5, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$8) => ((data$3$2) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$8, data$3$2);
      }))(program$3$1)));
    }));
    var program$2 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy2.h(program$2);
    var b$1 = program$2.b4;
    var b$2 = program$2.aT;
    var helperFns$proxy2 = program$2.aA();
    var id$2 = p$6.q;
    p$6.q = ((1 + p$6.q) | 0);
    var names$4 = $m_sjs_js_ArrayOpsCommon$().a(["vp"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []));
    var dict$3 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([]))));
    var i$3 = 0;
    while ((i$3 < (names$4.length | 0))) {
      dict$3[names$4[i$3]] = i$3;
      i$3 = ((1 + i$3) | 0);
    }
    var names$5 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], []);
    var dict$4 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([]))));
    var i$4 = 0;
    while ((i$4 < (names$5.length | 0))) {
      dict$4[names$5[i$4]] = i$4;
      i$4 = ((1 + i$4) | 0);
    }
    var sd$2 = new $c_Ltrivalibs_graphics_shader_ShaderDef(b$1, b$2, helperFns$proxy2);
    var vertexInputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().a(["position"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["normal"], []))), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$2 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["vp"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).by.v()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).V.v()], [])));
    var fragBuiltinParams$2 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$2 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$2, vertexInputStruct$2, vertexOutputStruct$2, fragmentOutputStruct$2, groupDecls$2, sd$2.af, sd$2.ae, fragBuiltinParams$2);
    var wgsl$2 = (baseWgsl$2 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
    var args$proxy2 = $m_sr_ScalaRunTime$().at(new ($d_sjs_js_Any.r().C)([wgsl$2]));
    console.log(...$m_sjsr_Compat$().as(args$proxy2));
    var module$2 = p$6.f.createShaderModule($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("code", wgsl$2)])))));
    var formats = $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], $m_sjs_js_ArrayOpsCommon$().a(["float32x2"], $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], [])));
    var sizes = $m_sjs_js_ArrayOpsCommon$().a([12], $m_sjs_js_ArrayOpsCommon$().a([8], $m_sjs_js_ArrayOpsCommon$().a([12], [])));
    var offsets = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes);
    var stride = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes);
    var attributes = [];
    var i$5 = 0;
    while ((i$5 < (formats.length | 0))) {
      attributes.push($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("shaderLocation", i$5), new $c_T2("offset", (offsets[i$5] | 0)), new $c_T2("format", formats[i$5])])))));
      i$5 = ((1 + i$5) | 0);
    }
    var vbl = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("arrayStride", stride), new $c_T2("attributes", attributes)]))));
    var descriptors$2 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 1), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([])))))]))))], []))], []);
    var result$2 = [];
    $m_sjs_js_ArrayOps$().a2(descriptors$2, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$2) => ((entries$2$1) => (result$2.push(Painter_this$2.f.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("entries", entries$2$1)])))))) | 0)))(p$6)));
    var x19 = new $c_T2(result$2, $m_Ltrivalibs_graphics_shader_layouts$().G(p$6.f, result$2));
    var \u03b42$$2 = x19;
    var bgls$4 = \u03b42$$2.Z;
    var entries$2$2 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([])))))]))))], []);
    var panelBgl$2 = p$6.f.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("entries", entries$2$2)])))));
    if ((panelBgl$2 !== null)) {
      var other$proxy2 = [panelBgl$2];
      var allBgls$2 = bgls$4.concat(other$proxy2);
    } else {
      var allBgls$2 = bgls$4;
    }
    var pl$2 = $m_Ltrivalibs_graphics_shader_layouts$().G(p$6.f, allBgls$2);
    var texturedShade = new $c_Ltrivalibs_graphics_painter_Shade(id$2, module$2, vbl, bgls$4[0], panelBgl$2, pl$2, false, dict$3, dict$4);
    var build$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$2) => {
      var body$proxy7 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$4) => {
        var $x_30 = $m_sjsr_package$();
        var AssignTarget_this$4 = ctx$2$4.aU.a3("uv");
        var value$proxy6 = ctx$2$4.b5.k("uv");
        var $x_29 = AssignTarget_this$4.R;
        var $x_28 = value$proxy6.d;
        var AssignTarget_this$2$1 = ctx$2$4.aU.gW;
        var value$proxy7 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().gp($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().p0(ctx$2$4.fA.k("vp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fF(), ctx$2$4.fA.k("model")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fF(), $m_Ltrivalibs_graphics_math_gpu_vec4$().ag(ctx$2$4.b5.k("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().M(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$());
        return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_30.e(new ($d_T.r().C)([(((("  " + $x_29) + " = ") + $x_28) + ";"), (((("  " + AssignTarget_this$2$1.R) + " = ") + value$proxy7.d) + ";")]))), "", "\n", "");
      }));
      var d$3 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([]))));
      var ctx$3 = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$3), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$3 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$3 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$3;
      try {
        var $x_31 = body$proxy7.h(ctx$3);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$3;
      }
      program$3$2.b4 = $x_31;
      $m_sjs_js_ArrayOps$().a2(reg$3.a5, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$9) => ((data$3$3) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$9, data$3$3);
      }))(program$3$2)));
      var body$proxy9 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$5) => {
        var $x_32 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().fE();
        var AssignTarget_this$5 = ctx$2$5.aw.a3("color");
        var value$proxy8 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().az($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "img"), ctx$2$5.al.k("uv"), ctx$2$5.F.k("samp"));
        return $x_32.h((((("  " + AssignTarget_this$5.R) + " = ") + value$proxy8.d) + ";"));
      }));
      var d$2$1 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([]))));
      var ctx$2$6 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$2$1), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$2$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$2$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$2$1;
      try {
        var $x_33 = body$proxy9.h(ctx$2$6);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$2$1;
      }
      program$3$2.aT = $x_33;
      $m_sjs_js_ArrayOps$().a2(reg$2$1.a5, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$10) => ((data$3$4) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$10, data$3$4);
      }))(program$3$2)));
    }));
    var program$3$3 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy3.h(program$3$3);
    var b$3 = program$3$3.b4;
    var b$4 = program$3$3.aT;
    var helperFns$proxy3 = program$3$3.aA();
    var id$3 = p$6.q;
    p$6.q = ((1 + p$6.q) | 0);
    var names$7 = $m_sjs_js_ArrayOpsCommon$().a(["vp"], $m_sjs_js_ArrayOpsCommon$().a(["model"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])));
    var dict$5 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([]))));
    var i$6 = 0;
    while ((i$6 < (names$7.length | 0))) {
      dict$5[names$7[i$6]] = i$6;
      i$6 = ((1 + i$6) | 0);
    }
    var names$8 = $m_sjs_js_ArrayOpsCommon$().a(["img"], []);
    var dict$6 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([]))));
    var i$7 = 0;
    while ((i$7 < (names$8.length | 0))) {
      dict$6[names$8[i$7]] = i$7;
      i$7 = ((1 + i$7) | 0);
    }
    var sd$3 = new $c_Ltrivalibs_graphics_shader_ShaderDef(b$3, b$4, helperFns$proxy3);
    var vertexInputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().a(["position"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], [])), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$3 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["vp"], $m_sjs_js_ArrayOpsCommon$().a(["model"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).by.v()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).by.v()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).V.v()], []))));
    var fragBuiltinParams$3 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$3 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$3, vertexInputStruct$3, vertexOutputStruct$3, fragmentOutputStruct$3, groupDecls$3, sd$3.af, sd$3.ae, fragBuiltinParams$3);
    var wgsl$3 = (baseWgsl$3 + "\n\n@group(1) @binding(0) var img: texture_2d<f32>;");
    var args$proxy3 = $m_sr_ScalaRunTime$().at(new ($d_sjs_js_Any.r().C)([wgsl$3]));
    console.log(...$m_sjsr_Compat$().as(args$proxy3));
    var module$3 = p$6.f.createShaderModule($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("code", wgsl$3)])))));
    var formats$2 = $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], $m_sjs_js_ArrayOpsCommon$().a(["float32x2"], []));
    var sizes$2 = $m_sjs_js_ArrayOpsCommon$().a([12], $m_sjs_js_ArrayOpsCommon$().a([8], []));
    var offsets$2 = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes$2);
    var stride$2 = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes$2);
    var attributes$2 = [];
    var i$8 = 0;
    while ((i$8 < (formats$2.length | 0))) {
      attributes$2.push($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("shaderLocation", i$8), new $c_T2("offset", (offsets$2[i$8] | 0)), new $c_T2("format", formats$2[i$8])])))));
      i$8 = ((1 + i$8) | 0);
    }
    var vbl$2 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("arrayStride", stride$2), new $c_T2("attributes", attributes$2)]))));
    var descriptors$3 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 1), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 1), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 2), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([])))))]))))], [])))], []);
    var result$3 = [];
    $m_sjs_js_ArrayOps$().a2(descriptors$3, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$3) => ((entries$2$3) => (result$3.push(Painter_this$3.f.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("entries", entries$2$3)])))))) | 0)))(p$6)));
    var x22 = new $c_T2(result$3, $m_Ltrivalibs_graphics_shader_layouts$().G(p$6.f, result$3));
    var \u03b42$$3 = x22;
    var bgls$6 = \u03b42$$3.Z;
    var entries$3 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([])))))]))))], []);
    var panelBgl$3 = p$6.f.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("entries", entries$3)])))));
    if ((panelBgl$3 !== null)) {
      var other$proxy3 = [panelBgl$3];
      var allBgls$3 = bgls$6.concat(other$proxy3);
    } else {
      var allBgls$3 = bgls$6;
    }
    var pl$3 = $m_Ltrivalibs_graphics_shader_layouts$().G(p$6.f, allBgls$3);
    var paintingShade = new $c_Ltrivalibs_graphics_painter_Shade(id$3, module$3, vbl$2, bgls$6[0], panelBgl$3, pl$3, false, dict$5, dict$6);
    var build$proxy4 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$4) => {
      var body$proxy11 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$7) => {
        var uv = ctx$2$7.al.k("uv");
        var m = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().p1($p_Lsketches_rooms_canvases_Canvases$package$__lineMask$1__D__D__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr(this, 6.0, 0.016, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aV($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().X().I(uv), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().X().B(uv))), $p_Lsketches_rooms_canvases_Canvases$package$__lineMask$1__D__D__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr(this, 6.0, 0.016, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().h6($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().X().I(uv), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().X().B(uv))));
        var $x_34 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().fE();
        var AssignTarget_this$6 = ctx$2$7.aw.a3("color");
        var value$proxy9 = $m_Ltrivalibs_graphics_math_gpu_vec4$().ag($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().bC(ctx$2$7.F.k("color"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().Y(), $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().b8().b9((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aX(1.0)) + " - ") + m.d) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(1.0));
        return $x_34.h((((("  " + AssignTarget_this$6.R) + " = ") + value$proxy9.d) + ";"));
      }));
      var d$4 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([]))));
      var ctx$4 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$4), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$4 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$4 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$4;
      try {
        var $x_35 = body$proxy11.h(ctx$4);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$4;
      }
      program$3$4.a9 = $x_35;
      $m_sjs_js_ArrayOps$().a2(reg$4.a5, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$4) => ((data$3$5) => {
        $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$4, data$3$5);
      }))(program$3$4)));
    }));
    var program$4 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
    build$proxy4.h(program$4);
    var b$5 = program$4.a9;
    var helperFns$proxy4 = program$4.aA();
    var id$4 = p$6.q;
    p$6.q = ((1 + p$6.q) | 0);
    var names$10 = $m_sjs_js_ArrayOpsCommon$().a(["color"], []);
    var dict$7 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([]))));
    var i$9 = 0;
    while ((i$9 < (names$10.length | 0))) {
      dict$7[names$10[i$9]] = i$9;
      i$9 = ((1 + i$9) | 0);
    }
    var names$11 = [];
    var dict$8 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([]))));
    var i$10 = 0;
    while ((i$10 < (names$11.length | 0))) {
      dict$8[names$11[i$10]] = i$10;
      i$10 = ((1 + i$10) | 0);
    }
    var sd$4 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$5, helperFns$proxy4);
    var vertexInputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
    var vertexOutputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$4 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$()).V.v()], []));
    var fragBuiltinParams$4 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$4 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$4, vertexInputStruct$4, vertexOutputStruct$4, fragmentOutputStruct$4, groupDecls$4, sd$4.af, sd$4.ae, fragBuiltinParams$4);
    var args$proxy4 = $m_sr_ScalaRunTime$().at(new ($d_sjs_js_Any.r().C)([baseWgsl$4]));
    console.log(...$m_sjsr_Compat$().as(args$proxy4));
    var module$4 = p$6.f.createShaderModule($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("code", baseWgsl$4)])))));
    var descriptors$4 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], [])], []);
    var result$4 = [];
    $m_sjs_js_ArrayOps$().a2(descriptors$4, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$4) => ((entries$2$4) => (result$4.push(Painter_this$4.f.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("entries", entries$2$4)])))))) | 0)))(p$6)));
    var x28 = new $c_T2(result$4, $m_Ltrivalibs_graphics_shader_layouts$().G(p$6.f, result$4));
    var \u03b46$$2 = x28;
    var bgls$8 = \u03b46$$2.Z;
    var pl$4 = $m_Ltrivalibs_graphics_shader_layouts$().G(p$6.f, bgls$8);
    var imgShade = new $c_Ltrivalibs_graphics_painter_Shade(id$4, module$4, null, bgls$8[0], null, pl$4, false, dict$7, dict$8);
    var wallFront = $p_Lsketches_rooms_canvases_Canvases$package$__mkWall$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__Ltrivalibs_graphics_math_cpu_Vec3__Lsketches_rooms_canvases_Wall(this, p$6, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, (0.5 * $m_Lsketches_rooms_canvases_Canvases$package$().aL), (0.5 * $m_Lsketches_rooms_canvases_Canvases$package$().fq)), $m_Lsketches_rooms_canvases_Canvases$package$().fr, $m_Lsketches_rooms_canvases_Canvases$package$().aL, 3.141592653589793, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, (-1.0)));
    var wallBack = $p_Lsketches_rooms_canvases_Canvases$package$__mkWall$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__Ltrivalibs_graphics_math_cpu_Vec3__Lsketches_rooms_canvases_Wall(this, p$6, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, (0.5 * $m_Lsketches_rooms_canvases_Canvases$package$().aL), (0.5 * (-$m_Lsketches_rooms_canvases_Canvases$package$().fq))), $m_Lsketches_rooms_canvases_Canvases$package$().fr, $m_Lsketches_rooms_canvases_Canvases$package$().aL, 0.0, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0));
    var wallLeft = $p_Lsketches_rooms_canvases_Canvases$package$__mkWall$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__Ltrivalibs_graphics_math_cpu_Vec3__Lsketches_rooms_canvases_Wall(this, p$6, new $c_Ltrivalibs_graphics_math_cpu_Vec3((0.5 * (-$m_Lsketches_rooms_canvases_Canvases$package$().fr)), (0.5 * $m_Lsketches_rooms_canvases_Canvases$package$().aL), 0.0), $m_Lsketches_rooms_canvases_Canvases$package$().fq, $m_Lsketches_rooms_canvases_Canvases$package$().aL, 1.5707963267948966, new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 0.0));
    var wallRight = $p_Lsketches_rooms_canvases_Canvases$package$__mkWall$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__Ltrivalibs_graphics_math_cpu_Vec3__Lsketches_rooms_canvases_Wall(this, p$6, new $c_Ltrivalibs_graphics_math_cpu_Vec3((0.5 * $m_Lsketches_rooms_canvases_Canvases$package$().fr), (0.5 * $m_Lsketches_rooms_canvases_Canvases$package$().aL), 0.0), $m_Lsketches_rooms_canvases_Canvases$package$().fq, $m_Lsketches_rooms_canvases_Canvases$package$().aL, (-1.5707963267948966), new $c_Ltrivalibs_graphics_math_cpu_Vec3((-1.0), 0.0, 0.0));
    var walls = [wallFront, wallBack, wallLeft, wallRight];
    var palette = [new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.78, 0.3, 0.28), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.3, 0.45, 0.7), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.4, 0.62, 0.42), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.82, 0.7, 0.34)];
    var imagePanels = $m_sjs_js_ArrayOps$().oZ(palette, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((p$11) => ((c$2$2) => $p_Lsketches_rooms_canvases_Canvases$package$__patternPanel$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_painter_Panel(this, p$11, imgShade, c$2$2)))(p$6)));
    $m_sjs_js_ArrayOps$().a2(imagePanels, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((p$12) => ((_$3$3) => {
      $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$12, _$3$3);
    }))(p$6)));
    new $c_sci_Range$Exclusive(0, (walls.length | 0), 1).fD(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((p$13) => ((i$3$1) => {
      var i$2$1 = (i$3$1 | 0);
      var wall = walls[i$2$1];
      var img = imagePanels[i$2$1];
      return $p_Lsketches_rooms_canvases_Canvases$package$__hang$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_GPUSampler__Lsketches_rooms_canvases_Wall__Lsketches_rooms_canvases_PaintingSpec__D__D__Lsketches_rooms_canvases_Painting(this, p$13, paintingShade, sampler, wall, new $c_Lsketches_rooms_canvases_PaintingSpec($m_Ltrivalibs_utils_random_random$package$().mX(0.9, 1.7), $m_Ltrivalibs_utils_random_random$package$().mX(0.7, 1.4), 0.05, img, 3.0), (0.5 * wall.aR), 1.7);
    }))(p$6)));
    var Bindable_this = p$6.hx(ceilForm, texturedShade, "none", (void 0));
    var e1$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var e2$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", ceilTex);
    var \u03b4scrutinee428 = e1$proxy4.t;
    var idx = (Bindable_this.a0.J.samp | 0);
    while (((Bindable_this.Q.length | 0) <= idx)) {
      Bindable_this.Q.push(null);
    }
    Bindable_this.Q[idx] = \u03b4scrutinee428;
    var \u03b4scrutinee444 = e2$proxy3.t;
    var idx$2 = (Bindable_this.a0.aC.tex | 0);
    while (((Bindable_this.a8.length | 0) <= idx$2)) {
      Bindable_this.a8.push(null);
    }
    Bindable_this.a8[idx$2] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee444);
    var aboveGround = [Bindable_this];
    $m_sjs_js_ArrayOps$().a2(walls, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((p$14) => ((wall$3) => {
      var wallTex = $p_Lsketches_rooms_canvases_Canvases$package$__bakeWallTex$1__Lsketchlib_utils_bake_TextureBaker__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Shade__Lsketches_rooms_canvases_Wall__Ltrivalibs_graphics_painter_Panel(this, wallBaker, p$14, shadowLayerShade, wall$3);
      var Bindable_this$1 = p$14.hx(wall$3.ft, texturedShade, "none", (void 0));
      var e1$proxy5 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
      var e2$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", wallTex);
      var \u03b4scrutinee450 = e1$proxy5.t;
      var idx$1 = (Bindable_this$1.a0.J.samp | 0);
      while (((Bindable_this$1.Q.length | 0) <= idx$1)) {
        Bindable_this$1.Q.push(null);
      }
      Bindable_this$1.Q[idx$1] = \u03b4scrutinee450;
      var \u03b4scrutinee466 = e2$proxy4.t;
      var idx$2$1 = (Bindable_this$1.a0.aC.tex | 0);
      while (((Bindable_this$1.a8.length | 0) <= idx$2$1)) {
        Bindable_this$1.a8.push(null);
      }
      Bindable_this$1.a8[idx$2$1] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee466);
      aboveGround.push(Bindable_this$1);
      $m_sjs_js_ArrayOps$().a2(wall$3.bv, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((painting$2) => (aboveGround.push(painting$2.gB) | 0))));
    }))(p$6)));
    var wallColor = new $c_T4(0.9, 0.9, 0.9, 0.0);
    var mirror = $m_Lsketchlib_utils_mirror_MirrorReflection$().nt(p$6, aboveGround, "vp", $m_Lsketches_rooms_canvases_Canvases$package$().aL, ($m_Lsketchlib_utils_mirror_MirrorReflection$(), null), ($m_Lsketchlib_utils_mirror_MirrorReflection$(), $m_Ltrivalibs_graphics_geometry_Plane$().kV), 5.0, 1.5, ($m_Lsketchlib_utils_mirror_MirrorReflection$(), 6), ($m_Lsketchlib_utils_mirror_MirrorReflection$(), 3.0), wallColor);
    var ul$proxy2 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$());
    var uv$proxy2 = ul$proxy2.aF;
    var buffer = new ArrayBuffer(8);
    var arr$proxy14 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
    var canvasRes = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy14.dv, 0), p$6.f, uv$proxy2);
    var build$proxy5 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$5) => {
      var body$proxy13 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$8) => {
        var $x_38 = $m_sjsr_package$();
        var AssignTarget_this$7 = ctx$2$8.aU.a3("uv");
        var value$proxy10 = ctx$2$8.b5.k("uv");
        var $x_37 = AssignTarget_this$7.R;
        var $x_36 = value$proxy10.d;
        var AssignTarget_this$2$2 = ctx$2$8.aU.gW;
        var value$proxy11 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().gp(ctx$2$8.fA.k("vp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fF(), $m_Ltrivalibs_graphics_math_gpu_vec4$().ag(ctx$2$8.b5.k("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().M(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$());
        return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_38.e(new ($d_T.r().C)([(((("  " + $x_37) + " = ") + $x_36) + ";"), (((("  " + AssignTarget_this$2$2.R) + " = ") + value$proxy11.d) + ";")]))), "", "\n", "");
      }));
      var d$5 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([]))));
      var ctx$5 = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$5), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$5 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$5 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$5;
      try {
        var $x_39 = body$proxy13.h(ctx$5);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$5;
      }
      program$3$5.b4 = $x_39;
      $m_sjs_js_ArrayOps$().a2(reg$5.a5, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$11) => ((data$3$6) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$11, data$3$6);
      }))(program$3$5)));
      var body$proxy15 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$9) => {
        var base$1 = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "base");
        var refl = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "refl");
        var mix = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "mix");
        var falloff = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "falloff");
        var $x_44 = $m_sjsr_package$();
        var $x_43 = base$1.S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fI($m_Ltrivalibs_graphics_math_gpu_expr$package$().az($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex"), ctx$2$9.al.k("uv"), ctx$2$9.F.k("samp"))));
        var $x_42 = refl.S($m_Ltrivalibs_graphics_math_gpu_expr$package$().az($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "reflTex"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().nS($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fH(ctx$2$9.fz), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().X(), ctx$2$9.F.k("res")), ctx$2$9.F.k("samp")));
        var e$proxy4 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().a1($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().M().am(refl), 0.4);
        var $x_41 = falloff.S($m_Ltrivalibs_graphics_math_gpu_LeftScalar$().b8().b9((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aX(1.0)) + " - ") + e$proxy4.d) + ")")));
        var $x_40 = mix.S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().a1(falloff, 0.35));
        var AssignTarget_this$8 = ctx$2$9.aw.a3("color");
        var value$proxy12 = $m_Ltrivalibs_graphics_math_gpu_vec4$().ag($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().m8($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().bC(base$1, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().Y(), $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().b8().b9((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aX(1.0)) + " - ") + mix.d) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().Y(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().bC($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fI(refl), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().Y(), mix)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(1.0));
        return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_44.e(new ($d_T.r().C)([$x_43, $x_42, $x_41, $x_40, (((("  " + AssignTarget_this$8.R) + " = ") + value$proxy12.d) + ";")]))), "", "\n", "");
      }));
      var d$2$2 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([]))));
      var ctx$2$10 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$2$2), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$2$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$2$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$2$2;
      try {
        var $x_45 = body$proxy15.h(ctx$2$10);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$2$2;
      }
      program$3$5.aT = $x_45;
      $m_sjs_js_ArrayOps$().a2(reg$2$2.a5, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$12) => ((data$3$7) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$12, data$3$7);
      }))(program$3$5)));
    }));
    var program$5 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy5.h(program$5);
    var b$6 = program$5.b4;
    var b$7 = program$5.aT;
    var helperFns$proxy5 = program$5.aA();
    var id$5 = p$6.q;
    p$6.q = ((1 + p$6.q) | 0);
    var names$13 = $m_sjs_js_ArrayOpsCommon$().a(["vp"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], $m_sjs_js_ArrayOpsCommon$().a(["res"], [])));
    var dict$9 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([]))));
    var i$11 = 0;
    while ((i$11 < (names$13.length | 0))) {
      dict$9[names$13[i$11]] = i$11;
      i$11 = ((1 + i$11) | 0);
    }
    var names$14 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], $m_sjs_js_ArrayOpsCommon$().a(["reflTex"], []));
    var dict$10 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([]))));
    var i$12 = 0;
    while ((i$12 < (names$14.length | 0))) {
      dict$10[names$14[i$12]] = i$12;
      i$12 = ((1 + i$12) | 0);
    }
    var sd$5 = new $c_Ltrivalibs_graphics_shader_ShaderDef(b$6, b$7, helperFns$proxy5);
    var vertexInputStruct$5 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().a(["position"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["normal"], []))), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct$5 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$5 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$5 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["vp"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], $m_sjs_js_ArrayOpsCommon$().a(["res"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).by.v()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).V.v()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$()).V.v()], []))));
    var fragBuiltinParams$5 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$5 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$5, vertexInputStruct$5, vertexOutputStruct$5, fragmentOutputStruct$5, groupDecls$5, sd$5.af, sd$5.ae, fragBuiltinParams$5);
    var wgsl$5 = (baseWgsl$5 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;\n@group(1) @binding(1) var reflTex: texture_2d<f32>;");
    var args$proxy5 = $m_sr_ScalaRunTime$().at(new ($d_sjs_js_Any.r().C)([wgsl$5]));
    console.log(...$m_sjsr_Compat$().as(args$proxy5));
    var module$5 = p$6.f.createShaderModule($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("code", wgsl$5)])))));
    var formats$3 = $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], $m_sjs_js_ArrayOpsCommon$().a(["float32x2"], $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], [])));
    var sizes$3 = $m_sjs_js_ArrayOpsCommon$().a([12], $m_sjs_js_ArrayOpsCommon$().a([8], $m_sjs_js_ArrayOpsCommon$().a([12], [])));
    var offsets$3 = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes$3);
    var stride$4 = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes$3);
    var attributes$3 = [];
    var i$13 = 0;
    while ((i$13 < (formats$3.length | 0))) {
      attributes$3.push($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("shaderLocation", i$13), new $c_T2("offset", (offsets$3[i$13] | 0)), new $c_T2("format", formats$3[i$13])])))));
      i$13 = ((1 + i$13) | 0);
    }
    var vbl$3 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("arrayStride", stride$4), new $c_T2("attributes", attributes$3)]))));
    var descriptors$5 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 1), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 2), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], [])))], []);
    var result$5 = [];
    $m_sjs_js_ArrayOps$().a2(descriptors$5, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$5) => ((entries$2$5) => (result$5.push(Painter_this$5.f.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("entries", entries$2$5)])))))) | 0)))(p$6)));
    var x31 = new $c_T2(result$5, $m_Ltrivalibs_graphics_shader_layouts$().G(p$6.f, result$5));
    var \u03b42$$4 = x31;
    var bgls$10 = \u03b42$$4.Z;
    var entries$4 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([])))))]))))], []));
    var panelBgl$5 = p$6.f.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("entries", entries$4)])))));
    if ((panelBgl$5 !== null)) {
      var other$proxy5 = [panelBgl$5];
      var allBgls$5 = bgls$10.concat(other$proxy5);
    } else {
      var allBgls$5 = bgls$10;
    }
    var pl$5 = $m_Ltrivalibs_graphics_shader_layouts$().G(p$6.f, allBgls$5);
    var floorShade = new $c_Ltrivalibs_graphics_painter_Shade(id$5, module$5, vbl$3, bgls$10[0], panelBgl$5, pl$5, false, dict$9, dict$10);
    var Bindable_this$4 = p$6.hx(floorForm, floorShade, "front", (void 0));
    var e1$proxy6 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var e2$proxy5 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", floorTex);
    var e3$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("reflTex", mirror.kH);
    var e4$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("res", canvasRes);
    var \u03b4scrutinee568 = e1$proxy6.t;
    var idx$3 = (Bindable_this$4.a0.J.samp | 0);
    while (((Bindable_this$4.Q.length | 0) <= idx$3)) {
      Bindable_this$4.Q.push(null);
    }
    Bindable_this$4.Q[idx$3] = \u03b4scrutinee568;
    var \u03b4scrutinee586 = e2$proxy5.t;
    var idx$4 = (Bindable_this$4.a0.aC.tex | 0);
    while (((Bindable_this$4.a8.length | 0) <= idx$4)) {
      Bindable_this$4.a8.push(null);
    }
    Bindable_this$4.a8[idx$4] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee586);
    var \u03b4scrutinee600 = e3$proxy3.t;
    var idx$5 = (Bindable_this$4.a0.aC.reflTex | 0);
    while (((Bindable_this$4.a8.length | 0) <= idx$5)) {
      Bindable_this$4.a8.push(null);
    }
    Bindable_this$4.a8[idx$5] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee600);
    var \u03b4scrutinee608 = e4$proxy1.t;
    var idx$6 = (Bindable_this$4.a0.J.res | 0);
    while (((Bindable_this$4.Q.length | 0) <= idx$6)) {
      Bindable_this$4.Q.push(null);
    }
    Bindable_this$4.Q[idx$6] = \u03b4scrutinee608;
    var ul$proxy3 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
    var uv$proxy3 = ul$proxy3.aF;
    var buffer$2 = new ArrayBuffer(64);
    var arr$proxy15 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
    var sceneVp = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy15.dv, 0), p$6.f, uv$proxy3);
    var clearColor$2 = new $c_T4(0.5, 0.6, 0.7, 1.0);
    var shapes$2 = aboveGround.concat([Bindable_this$4]);
    var Panel_this = p$6.bD((void 0), (void 0), clearColor$2, true, true, (void 0), (void 0), "rgba16float", (void 0), (void 0), shapes$2, (void 0), (void 0));
    var e1$proxy7 = new $c_Ltrivalibs_graphics_painter_BindPair("vp", sceneVp);
    var \u03b4scrutinee617 = e1$proxy7.t;
    var dict$proxy1 = Panel_this.gT;
    dict$proxy1.vp = \u03b4scrutinee617;
    var bloom = $m_Lsketchlib_utils_bloom_Bloom$().nu(p$6, Panel_this, 0.002, 1.0, 4.0, 5);
    var cam = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().no(0.9, 1.0, 0.1, 100.0, 0.0, 0.0, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.7, 0.0));
    $m_Ltrivalibs_dev_devPreserve$().nv(cam, "camera");
    var input = $m_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$().ok(p$6.gc, true, 400.0, 5.0, true, (void 0));
    var controller = new $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController(cam, input, 2.0, 1.0);
    p$6.pa(new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((v1$2, v2$2) => {
      var w = (+v1$2);
      var h = (+v2$2);
      var aspect$2 = (w / h);
      var fov$1 = cam.gi;
      var near$1 = cam.gj;
      var far$1 = cam.gh;
      var rotH$2 = cam.aH;
      var rotV$2 = cam.bg;
      var pos$4 = cam.aq;
      cam.jP(fov$1, aspect$2, near$1, far$1, rotH$2, rotV$2, pos$4);
      var value$proxy14 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(w, h);
      canvasRes.P.H(canvasRes.o, value$proxy14);
      var $x_47 = canvasRes.O.queue;
      var $x_46 = canvasRes.K;
      var s$proxy12 = canvasRes.o;
      $x_47.writeBuffer($x_46, 0.0, s$proxy12.dv.buffer);
      mirror.pp(w, h);
    })));
    $m_Ltrivalibs_utils_animation_animate$package$().nn(((p$15) => ((arg1$2) => {
      var tpf = (+arg1$2);
      input.hA(tpf);
      controller.hA(tpf);
      var vp = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().go(), cam.i7, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), cam.n5());
      sceneVp.P.H(sceneVp.o, vp);
      var $x_49 = sceneVp.O.queue;
      var $x_48 = sceneVp.K;
      var s$proxy13 = sceneVp.o;
      $x_49.writeBuffer($x_48, 0.0, s$proxy13.dv.buffer);
      mirror.pd(vp);
      $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$15, Panel_this);
      bloom.pe();
      p$15.pA(bloom.kA);
    }))(p$6));
  })));
});
var $d_Lsketches_rooms_canvases_Canvases$package$ = new $TypeData().i($c_Lsketches_rooms_canvases_Canvases$package$, "sketches.rooms.canvases.Canvases$package$", ({
  du: 1
}));
var $n_Lsketches_rooms_canvases_Canvases$package$;
function $m_Lsketches_rooms_canvases_Canvases$package$() {
  if ((!$n_Lsketches_rooms_canvases_Canvases$package$)) {
    $n_Lsketches_rooms_canvases_Canvases$package$ = new $c_Lsketches_rooms_canvases_Canvases$package$();
  }
  return $n_Lsketches_rooms_canvases_Canvases$package$;
}
function $s_Lsketches_rooms_canvases_roomsCanvases__main__AT__V(args) {
  try {
    $m_Lsketches_rooms_canvases_Canvases$package$().pr();
  } catch (e) {
    if (false) {
      $m_s_util_CommandLineParser$().pB(e);
    } else {
      throw e;
    }
  }
}
/** @constructor */
function $c_Lsketchlib_shaders_Noise$() {
}
$p = $c_Lsketchlib_shaders_Noise$.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_shaders_Noise$;
/** @constructor */
function $h_Lsketchlib_shaders_Noise$() {
}
$h_Lsketchlib_shaders_Noise$.prototype = $p;
$p.mq = (function(pos, octaves, freqMul, ampMul, seed) {
  var acc = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(0.0);
  var freq = 1.0;
  var amp = 1.0;
  var total = 0.0;
  var i = 0;
  while ((i < octaves)) {
    var $x_3 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
    var $x_2 = acc;
    var $x_1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
    var WgslFn$_this = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy1 = $m_Ltrivalibs_graphics_shader_lib_random_Simplex$().jt;
    var a1$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().m8($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().jG(pos, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().Y(), freq), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().Y(), seed);
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().hz(fn$proxy1);
    acc = $x_3.aV($x_2, $x_1.a1($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((WgslFn$_this.hs(fn$proxy1) + "(") + a1$proxy1) + ")")), amp));
    total = (total + amp);
    freq = (freq * freqMul);
    amp = (amp * ampMul);
    i = ((1 + i) | 0);
  }
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().jD(acc, total);
});
var $d_Lsketchlib_shaders_Noise$ = new $TypeData().i($c_Lsketchlib_shaders_Noise$, "sketchlib.shaders.Noise$", ({
  dw: 1
}));
var $n_Lsketchlib_shaders_Noise$;
function $m_Lsketchlib_shaders_Noise$() {
  if ((!$n_Lsketchlib_shaders_Noise$)) {
    $n_Lsketchlib_shaders_Noise$ = new $c_Lsketchlib_shaders_Noise$();
  }
  return $n_Lsketchlib_shaders_Noise$;
}
/** @constructor */
function $c_Lsketchlib_utils_bake_TextureBaker(p, shade) {
  this.gC = null;
  this.kw = null;
  this.gC = p;
  this.kw = shade;
}
$p = $c_Lsketchlib_utils_bake_TextureBaker.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_bake_TextureBaker;
/** @constructor */
function $h_Lsketchlib_utils_bake_TextureBaker() {
}
$h_Lsketchlib_utils_bake_TextureBaker.prototype = $p;
$p.mW = (function(form, width, height, transform, format, mips) {
  var Painter_this = this.gC;
  var value$proxy1 = ((transform === (void 0)) ? new $c_Ltrivalibs_graphics_math_cpu_Mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0) : transform);
  var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
  var uv$proxy1 = ul$proxy1.aF;
  var buffer = new ArrayBuffer(64);
  var arr$proxy1 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
  var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy1.dv, 0), Painter_this.f, uv$proxy1);
  b.P.H(b.o, value$proxy1);
  var $x_2 = b.O.queue;
  var $x_1 = b.K;
  var s$proxy1 = b.o;
  $x_2.writeBuffer($x_1, 0.0, s$proxy1.dv.buffer);
  var Bindable_this = this.gC.hx(form, this.kw, "none", (void 0));
  var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("model", b);
  var \u03b4scrutinee4 = e1$proxy1.t;
  var idx = (Bindable_this.a0.J.model | 0);
  while (((Bindable_this.Q.length | 0) <= idx)) {
    Bindable_this.Q.push(null);
  }
  Bindable_this.Q[idx] = \u03b4scrutinee4;
  var format$1 = ((format === (void 0)) ? "rgba8unorm" : format);
  return this.gC.bD(width, height, (void 0), (void 0), (void 0), (void 0), mips, format$1, (void 0), Bindable_this, (void 0), (void 0), (void 0));
});
$p.mc = (function(form, width, height, transform, format, mips) {
  var panel = this.mW(form, width, height, transform, format, mips);
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(this.gC, panel);
  return panel;
});
var $d_Lsketchlib_utils_bake_TextureBaker = new $TypeData().i($c_Lsketchlib_utils_bake_TextureBaker, "sketchlib.utils.bake.TextureBaker", ({
  dx: 1
}));
function $p_Lsketchlib_utils_bake_TextureBaker$__buildVert__Ltrivalibs_graphics_shader_dsl_Program__V($thiz, program) {
  var d = ({});
  var ctx = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg;
  try {
    var uv = ctx.b5.k("uv");
    var AssignTarget_this = ctx.aU.a3("worldPos");
    var value$proxy2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fI($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().gp(ctx.fA.k("model"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fF(), $m_Ltrivalibs_graphics_math_gpu_vec4$().ag(ctx.b5.k("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().M(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$()));
    var x0 = (((("  " + AssignTarget_this.R) + " = ") + value$proxy2.d) + ";");
    var AssignTarget_this$2 = ctx.aU.a3("normal");
    var value$proxy3 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().p9($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fI($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().gp(ctx.fA.k("model"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fF(), $m_Ltrivalibs_graphics_math_gpu_vec4$().ag(ctx.b5.k("normal"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(0.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().M(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$())), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().Y());
    var x1 = (((("  " + AssignTarget_this$2.R) + " = ") + value$proxy3.d) + ";");
    var AssignTarget_this$3 = ctx.aU.a3("uv");
    var x2 = (((("  " + AssignTarget_this$3.R) + " = ") + uv.d) + ";");
    var AssignTarget_this$4 = ctx.aU.gW;
    var $x_5 = $m_Ltrivalibs_graphics_math_gpu_vec4$();
    var $x_4 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$();
    var $x_3 = $m_Ltrivalibs_graphics_math_gpu_vec2$();
    var $x_2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().X().I(uv);
    var e$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().X().B(uv);
    var value$proxy4 = $x_5.az($x_4.o6($x_3.ag($x_2, $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().b8().b9((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aX(1.0)) + " - ") + e$proxy1.d) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().X()), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(1.0));
    var $x_1 = $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs([x0, x1, x2, (((("  " + AssignTarget_this$4.R) + " = ") + value$proxy4.d) + ";")]), "", "\n", "");
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev;
  }
  program.b4 = $x_1;
  var array$1 = reg.a5;
  var len = (array$1.length | 0);
  var i = 0;
  while ((i < len)) {
    $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$1[i]);
    i = ((1 + i) | 0);
  }
}
/** @constructor */
function $c_Lsketchlib_utils_bake_TextureBaker$() {
}
$p = $c_Lsketchlib_utils_bake_TextureBaker$.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_bake_TextureBaker$;
/** @constructor */
function $h_Lsketchlib_utils_bake_TextureBaker$() {
}
$h_Lsketchlib_utils_bake_TextureBaker$.prototype = $p;
$p.md = (function(p, frag) {
  var program = new $c_Ltrivalibs_graphics_shader_dsl_Program();
  $p_Lsketchlib_utils_bake_TextureBaker$__buildVert__Ltrivalibs_graphics_shader_dsl_Program__V(this, program);
  var d = ({});
  var ctx = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg;
  try {
    var AssignTarget_this = ctx.aw.a3("color");
    var value$proxy5 = frag.ma(ctx.al.k("worldPos"), ctx.al.k("normal"), ctx.al.k("uv"));
    var $x_1 = $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs([(((("  " + AssignTarget_this.R) + " = ") + value$proxy5.d) + ";")]), "", "\n", "");
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev;
  }
  program.aT = $x_1;
  var array$1 = reg.a5;
  var len = (array$1.length | 0);
  var i = 0;
  while ((i < len)) {
    $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$1[i]);
    i = ((1 + i) | 0);
  }
  var b = program.b4;
  var b$1 = program.aT;
  var helperFns$proxy1 = program.aA();
  var id = p.q;
  p.q = ((1 + p.q) | 0);
  var names = $m_sjs_js_ArrayOpsCommon$().a(["model"], []);
  var dict = ({});
  var i$1 = 0;
  while ((i$1 < (names.length | 0))) {
    dict[names[i$1]] = i$1;
    i$1 = ((1 + i$1) | 0);
  }
  var names$2 = [];
  var dict$2 = ({});
  var i$2 = 0;
  while ((i$2 < (names$2.length | 0))) {
    dict$2[names$2[i$2]] = i$2;
    i$2 = ((1 + i$2) | 0);
  }
  var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef(b, b$1, helperFns$proxy1);
  var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().a(["position"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["normal"], []))), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
  var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["worldPos"], $m_sjs_js_ArrayOpsCommon$().a(["normal"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], []))), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["model"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).by.v()], []));
  var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.af, sd.ae, fragBuiltinParams);
  var args$proxy1 = $m_sr_ScalaRunTime$().at(new ($d_sjs_js_Any.r().C)([baseWgsl]));
  console.log(...$m_sjsr_Compat$().as(args$proxy1));
  var module = p.f.createShaderModule(({
    "code": baseWgsl
  }));
  var formats = $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], $m_sjs_js_ArrayOpsCommon$().a(["float32x2"], $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], [])));
  var sizes = $m_sjs_js_ArrayOpsCommon$().a([12], $m_sjs_js_ArrayOpsCommon$().a([8], $m_sjs_js_ArrayOpsCommon$().a([12], [])));
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
  var $x_3 = $m_sjs_js_ArrayOpsCommon$();
  var $x_2 = $m_sjs_js_ArrayOpsCommon$();
  var _2 = ({
    "type": "uniform"
  });
  var descriptors = $x_3.a([$x_2.a([({
    "binding": 0,
    "visibility": 1,
    "buffer": _2
  })], [])], []);
  var result = [];
  var len$1 = (descriptors.length | 0);
  var i$4 = 0;
  while ((i$4 < len$1)) {
    var x0$2 = descriptors[i$4];
    (result.push(p.f.createBindGroupLayout(({
      "entries": x0$2
    }))) | 0);
    i$4 = ((1 + i$4) | 0);
  }
  var \u03b42$___1 = result;
  var \u03b42$___2 = $m_Ltrivalibs_graphics_shader_layouts$().G(p.f, result);
  var bgls$2 = \u03b42$___1;
  var pl = $m_Ltrivalibs_graphics_shader_layouts$().G(p.f, bgls$2);
  return new $c_Lsketchlib_utils_bake_TextureBaker(p, new $c_Ltrivalibs_graphics_painter_Shade(id, module, vbl, bgls$2[0], null, pl, false, dict, dict$2));
});
$p.ns = (function(p, frag) {
  var program = new $c_Ltrivalibs_graphics_shader_dsl_Program();
  $p_Lsketchlib_utils_bake_TextureBaker$__buildVert__Ltrivalibs_graphics_shader_dsl_Program__V(this, program);
  var d = ({});
  var ctx = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg;
  try {
    var $x_1 = frag.m9(ctx.al.k("worldPos"), ctx.al.k("normal"), ctx.al.k("uv"), ctx.aw.a3("color"));
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev;
  }
  program.aT = $x_1;
  var array = reg.a5;
  var len = (array.length | 0);
  var i = 0;
  while ((i < len)) {
    $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array[i]);
    i = ((1 + i) | 0);
  }
  var b = program.b4;
  var b$1 = program.aT;
  var helperFns$proxy2 = program.aA();
  var id = p.q;
  p.q = ((1 + p.q) | 0);
  var names = $m_sjs_js_ArrayOpsCommon$().a(["model"], []);
  var dict = ({});
  var i$1 = 0;
  while ((i$1 < (names.length | 0))) {
    dict[names[i$1]] = i$1;
    i$1 = ((1 + i$1) | 0);
  }
  var names$2 = [];
  var dict$2 = ({});
  var i$2 = 0;
  while ((i$2 < (names$2.length | 0))) {
    dict$2[names$2[i$2]] = i$2;
    i$2 = ((1 + i$2) | 0);
  }
  var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef(b, b$1, helperFns$proxy2);
  var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().a(["position"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["normal"], []))), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
  var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["worldPos"], $m_sjs_js_ArrayOpsCommon$().a(["normal"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], []))), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["model"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).by.v()], []));
  var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.af, sd.ae, fragBuiltinParams);
  var args$proxy2 = $m_sr_ScalaRunTime$().at(new ($d_sjs_js_Any.r().C)([baseWgsl]));
  console.log(...$m_sjsr_Compat$().as(args$proxy2));
  var module = p.f.createShaderModule(({
    "code": baseWgsl
  }));
  var formats = $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], $m_sjs_js_ArrayOpsCommon$().a(["float32x2"], $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], [])));
  var sizes = $m_sjs_js_ArrayOpsCommon$().a([12], $m_sjs_js_ArrayOpsCommon$().a([8], $m_sjs_js_ArrayOpsCommon$().a([12], [])));
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
  var $x_3 = $m_sjs_js_ArrayOpsCommon$();
  var $x_2 = $m_sjs_js_ArrayOpsCommon$();
  var _2 = ({
    "type": "uniform"
  });
  var descriptors = $x_3.a([$x_2.a([({
    "binding": 0,
    "visibility": 1,
    "buffer": _2
  })], [])], []);
  var result = [];
  var len$1 = (descriptors.length | 0);
  var i$4 = 0;
  while ((i$4 < len$1)) {
    var x0$1 = descriptors[i$4];
    (result.push(p.f.createBindGroupLayout(({
      "entries": x0$1
    }))) | 0);
    i$4 = ((1 + i$4) | 0);
  }
  var \u03b42$___1 = result;
  var \u03b42$___2 = $m_Ltrivalibs_graphics_shader_layouts$().G(p.f, result);
  var bgls$2 = \u03b42$___1;
  var pl = $m_Ltrivalibs_graphics_shader_layouts$().G(p.f, bgls$2);
  return new $c_Lsketchlib_utils_bake_TextureBaker(p, new $c_Ltrivalibs_graphics_painter_Shade(id, module, vbl, bgls$2[0], null, pl, false, dict, dict$2));
});
$p.nA = (function(p, form, width, height, transform, format, mips, frag) {
  return $m_Lsketchlib_utils_bake_TextureBaker$().md(p, frag).mc(form, width, height, transform, format, mips);
});
$p.nB = (function(p, form, width, height, transform, format, mips, frag) {
  return $m_Lsketchlib_utils_bake_TextureBaker$().ns(p, frag).mc(form, width, height, transform, format, mips);
});
var $d_Lsketchlib_utils_bake_TextureBaker$ = new $TypeData().i($c_Lsketchlib_utils_bake_TextureBaker$, "sketchlib.utils.bake.TextureBaker$", ({
  dy: 1
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
$p.nu = (function(p, scene, intensity, threshold, blurRadius, mipLevels) {
  if ((mipLevels < 2)) {
    var message$proxy1 = (("bloom mipLevels must be >= 2 (got " + mipLevels) + ")");
    throw new $c_sjs_js_JavaScriptException(Error(message$proxy1)).aE;
  }
  var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy1 = ul$proxy1.aF;
  var buffer = new ArrayBuffer(4);
  var arr$proxy1 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
  var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy1.dv, 0), p.f, uv$proxy1);
  b.P.H(b.o, blurRadius);
  var $x_2 = b.O.queue;
  var $x_1 = b.K;
  var s$proxy1 = b.o;
  $x_2.writeBuffer($x_1, 0.0, s$proxy1.dv.buffer);
  var ul$proxy2 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy2 = ul$proxy2.aF;
  var buffer$2 = new ArrayBuffer(4);
  var arr$proxy2 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
  var b$2 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy2.dv, 0), p.f, uv$proxy2);
  b$2.P.H(b$2.o, intensity);
  var $x_4 = b$2.O.queue;
  var $x_3 = b$2.K;
  var s$proxy2 = b$2.o;
  $x_4.writeBuffer($x_3, 0.0, s$proxy2.dv.buffer);
  var sampler = p.jN();
  var program = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  var d = ({});
  var ctx = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg;
  try {
    var color = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "color");
    var brightness = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "brightness");
    var x0 = color.S($m_Ltrivalibs_graphics_math_gpu_expr$package$().hb($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "scene"), $m_Ltrivalibs_graphics_math_gpu_ivec2$().bz($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fH(ctx.fz))));
    var x1 = brightness.S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aV($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aV($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().a1($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().M().I(color), 0.2126), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().a1($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().M().B(color), 0.7152)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().a1($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().M().an(color), 0.0722)));
    var AssignTarget_this = ctx.aw.a3("color");
    var value$proxy1 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().pv($m_Ltrivalibs_graphics_math_gpu_vec4$().nr($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(1.0)), color, $m_Ltrivalibs_graphics_math_gpu_expr$package$().o8(brightness, ctx.F.k("threshold")));
    var $x_5 = $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs([x0, x1, (((("  " + AssignTarget_this.R) + " = ") + value$proxy1.d) + ";")]), "", "\n", "");
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev;
  }
  program.a9 = $x_5;
  var array$1 = reg.a5;
  var len = (array$1.length | 0);
  var i = 0;
  while ((i < len)) {
    $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$1[i]);
    i = ((1 + i) | 0);
  }
  var b$1 = program.a9;
  var helperFns$proxy1 = program.aA();
  var id = p.q;
  p.q = ((1 + p.q) | 0);
  var names = $m_sjs_js_ArrayOpsCommon$().a(["threshold"], []);
  var dict = ({});
  var i$1 = 0;
  while ((i$1 < (names.length | 0))) {
    dict[names[i$1]] = i$1;
    i$1 = ((1 + i$1) | 0);
  }
  var names$2 = $m_sjs_js_ArrayOpsCommon$().a(["scene"], []);
  var dict$2 = ({});
  var i$2 = 0;
  while ((i$2 < (names$2.length | 0))) {
    dict$2[names$2[i$2]] = i$2;
    i$2 = ((1 + i$2) | 0);
  }
  var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$1, helperFns$proxy1);
  var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["threshold"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).V.v()], []));
  var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.af, sd.ae, fragBuiltinParams);
  var wgsl = (baseWgsl + "\n\n@group(1) @binding(0) var scene: texture_2d<f32>;");
  var args$proxy1 = $m_sr_ScalaRunTime$().at(new ($d_sjs_js_Any.r().C)([wgsl]));
  console.log(...$m_sjsr_Compat$().as(args$proxy1));
  var module = p.f.createShaderModule(({
    "code": wgsl
  }));
  var $x_7 = $m_sjs_js_ArrayOpsCommon$();
  var $x_6 = $m_sjs_js_ArrayOpsCommon$();
  var _2 = ({
    "type": "uniform"
  });
  var descriptors = $x_7.a([$x_6.a([({
    "binding": 0,
    "visibility": 2,
    "buffer": _2
  })], [])], []);
  var result = [];
  var len$1 = (descriptors.length | 0);
  var i$3 = 0;
  while ((i$3 < len$1)) {
    var x0$2 = descriptors[i$3];
    (result.push(p.f.createBindGroupLayout(({
      "entries": x0$2
    }))) | 0);
    i$3 = ((1 + i$3) | 0);
  }
  var \u03b46$___1 = result;
  var \u03b46$___2 = $m_Ltrivalibs_graphics_shader_layouts$().G(p.f, result);
  var bgls$2 = \u03b46$___1;
  var $x_8 = $m_sjs_js_ArrayOpsCommon$();
  var _2$1 = ({});
  var entries = $x_8.a([({
    "binding": 0,
    "visibility": 2,
    "texture": _2$1
  })], []);
  var panelBgl = p.f.createBindGroupLayout(({
    "entries": entries
  }));
  if ((panelBgl !== null)) {
    var other$proxy1 = [panelBgl];
    var allBgls = bgls$2.concat(other$proxy1);
  } else {
    var allBgls = bgls$2;
  }
  var pl = $m_Ltrivalibs_graphics_shader_layouts$().G(p.f, allBgls);
  var thresholdShade = new $c_Ltrivalibs_graphics_painter_Shade(id, module, null, bgls$2[0], panelBgl, pl, false, dict, dict$2);
  var program$2 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  var d$1 = ({});
  var ctx$1 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$1), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$1;
  try {
    var $x_10 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().fE();
    var AssignTarget_this$1 = ctx$1.aw.a3("color");
    var WgslFn$_this = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy1 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$().lQ;
    var a1$proxy1 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex");
    var a2$proxy1 = ctx$1.F.k("samp");
    var a3$proxy1 = ctx$1.al.k("uv");
    var a4$proxy1 = ctx$1.F.k("blurRadius");
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().hz(fn$proxy1);
    var value$proxy2 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((((((WgslFn$_this.hs(fn$proxy1) + "(") + a1$proxy1) + ", ") + a2$proxy1) + ", ") + a3$proxy1) + ", ") + a4$proxy1) + ")"));
    var $x_9 = $x_10.h((((("  " + AssignTarget_this$1.R) + " = ") + value$proxy2.d) + ";"));
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$1;
  }
  program$2.a9 = $x_9;
  var array$16 = reg$1.a5;
  var len$2 = (array$16.length | 0);
  var i$4 = 0;
  while ((i$4 < len$2)) {
    $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program$2, array$16[i$4]);
    i$4 = ((1 + i$4) | 0);
  }
  var b$3 = program$2.a9;
  var helperFns$proxy2 = program$2.aA();
  var id$2 = p.q;
  p.q = ((1 + p.q) | 0);
  var names$4 = $m_sjs_js_ArrayOpsCommon$().a(["blurRadius"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []));
  var dict$3 = ({});
  var i$3$1 = 0;
  while ((i$3$1 < (names$4.length | 0))) {
    dict$3[names$4[i$3$1]] = i$3$1;
    i$3$1 = ((1 + i$3$1) | 0);
  }
  var names$5 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], []);
  var dict$4 = ({});
  var i$4$1 = 0;
  while ((i$4$1 < (names$5.length | 0))) {
    dict$4[names$5[i$4$1]] = i$4$1;
    i$4$1 = ((1 + i$4$1) | 0);
  }
  var sd$2 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$3, helperFns$proxy2);
  var vertexInputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls$2 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["blurRadius"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).V.v()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).V.v()], [])));
  var fragBuiltinParams$2 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$2 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$2, vertexInputStruct$2, vertexOutputStruct$2, fragmentOutputStruct$2, groupDecls$2, sd$2.af, sd$2.ae, fragBuiltinParams$2);
  var wgsl$2 = (baseWgsl$2 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
  var args$proxy2 = $m_sr_ScalaRunTime$().at(new ($d_sjs_js_Any.r().C)([wgsl$2]));
  console.log(...$m_sjsr_Compat$().as(args$proxy2));
  var module$2 = p.f.createShaderModule(({
    "code": wgsl$2
  }));
  var $x_13 = $m_sjs_js_ArrayOpsCommon$();
  var $x_12 = $m_sjs_js_ArrayOpsCommon$();
  var _2$2 = ({
    "type": "uniform"
  });
  var $x_11 = $m_sjs_js_ArrayOpsCommon$();
  var _2$3 = ({});
  var descriptors$2 = $x_13.a([$x_12.a([({
    "binding": 0,
    "visibility": 2,
    "buffer": _2$2
  })], $x_11.a([({
    "binding": 1,
    "visibility": 2,
    "sampler": _2$3
  })], []))], []);
  var result$2 = [];
  var len$3 = (descriptors$2.length | 0);
  var i$5 = 0;
  while ((i$5 < len$3)) {
    var x0$4 = descriptors$2[i$5];
    (result$2.push(p.f.createBindGroupLayout(({
      "entries": x0$4
    }))) | 0);
    i$5 = ((1 + i$5) | 0);
  }
  var \u03b46$$2___1 = result$2;
  var \u03b46$$2___2 = $m_Ltrivalibs_graphics_shader_layouts$().G(p.f, result$2);
  var bgls$4 = \u03b46$$2___1;
  var $x_14 = $m_sjs_js_ArrayOpsCommon$();
  var _2$4 = ({});
  var entries$2 = $x_14.a([({
    "binding": 0,
    "visibility": 2,
    "texture": _2$4
  })], []);
  var panelBgl$2 = p.f.createBindGroupLayout(({
    "entries": entries$2
  }));
  if ((panelBgl$2 !== null)) {
    var other$proxy2 = [panelBgl$2];
    var allBgls$2 = bgls$4.concat(other$proxy2);
  } else {
    var allBgls$2 = bgls$4;
  }
  var pl$2 = $m_Ltrivalibs_graphics_shader_layouts$().G(p.f, allBgls$2);
  var downsampleShade = new $c_Ltrivalibs_graphics_painter_Shade(id$2, module$2, null, bgls$4[0], panelBgl$2, pl$2, false, dict$3, dict$4);
  var program$3 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  var d$2 = ({});
  var ctx$2 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$2), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$2;
  try {
    var $x_16 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().fE();
    var AssignTarget_this$2 = ctx$2.aw.a3("color");
    var WgslFn$_this$1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy2 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$().js;
    var a1$proxy2 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex");
    var a2$proxy2 = ctx$2.F.k("samp");
    var a3$proxy2 = ctx$2.al.k("uv");
    var a4$proxy2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().a1(ctx$2.F.k("blurRadius"), 0.5);
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().hz(fn$proxy2);
    var value$proxy3 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((((((WgslFn$_this$1.hs(fn$proxy2) + "(") + a1$proxy2) + ", ") + a2$proxy2) + ", ") + a3$proxy2) + ", ") + a4$proxy2) + ")"));
    var $x_15 = $x_16.h((((("  " + AssignTarget_this$2.R) + " = ") + value$proxy3.d) + ";"));
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$2;
  }
  program$3.a9 = $x_15;
  var array$35 = reg$2.a5;
  var len$4 = (array$35.length | 0);
  var i$6 = 0;
  while ((i$6 < len$4)) {
    $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program$3, array$35[i$6]);
    i$6 = ((1 + i$6) | 0);
  }
  var b$4 = program$3.a9;
  var helperFns$proxy3 = program$3.aA();
  var id$3 = p.q;
  p.q = ((1 + p.q) | 0);
  var names$7 = $m_sjs_js_ArrayOpsCommon$().a(["blurRadius"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []));
  var dict$5 = ({});
  var i$5$1 = 0;
  while ((i$5$1 < (names$7.length | 0))) {
    dict$5[names$7[i$5$1]] = i$5$1;
    i$5$1 = ((1 + i$5$1) | 0);
  }
  var names$8 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], []);
  var dict$6 = ({});
  var i$6$1 = 0;
  while ((i$6$1 < (names$8.length | 0))) {
    dict$6[names$8[i$6$1]] = i$6$1;
    i$6$1 = ((1 + i$6$1) | 0);
  }
  var sd$3 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$4, helperFns$proxy3);
  var vertexInputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls$3 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["blurRadius"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).V.v()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).V.v()], [])));
  var fragBuiltinParams$3 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$3 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$3, vertexInputStruct$3, vertexOutputStruct$3, fragmentOutputStruct$3, groupDecls$3, sd$3.af, sd$3.ae, fragBuiltinParams$3);
  var wgsl$3 = (baseWgsl$3 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
  var args$proxy3 = $m_sr_ScalaRunTime$().at(new ($d_sjs_js_Any.r().C)([wgsl$3]));
  console.log(...$m_sjsr_Compat$().as(args$proxy3));
  var module$3 = p.f.createShaderModule(({
    "code": wgsl$3
  }));
  var $x_19 = $m_sjs_js_ArrayOpsCommon$();
  var $x_18 = $m_sjs_js_ArrayOpsCommon$();
  var _2$5 = ({
    "type": "uniform"
  });
  var $x_17 = $m_sjs_js_ArrayOpsCommon$();
  var _2$6 = ({});
  var descriptors$3 = $x_19.a([$x_18.a([({
    "binding": 0,
    "visibility": 2,
    "buffer": _2$5
  })], $x_17.a([({
    "binding": 1,
    "visibility": 2,
    "sampler": _2$6
  })], []))], []);
  var result$3 = [];
  var len$5 = (descriptors$3.length | 0);
  var i$7 = 0;
  while ((i$7 < len$5)) {
    var x0$6 = descriptors$3[i$7];
    (result$3.push(p.f.createBindGroupLayout(({
      "entries": x0$6
    }))) | 0);
    i$7 = ((1 + i$7) | 0);
  }
  var \u03b46$$3___1 = result$3;
  var \u03b46$$3___2 = $m_Ltrivalibs_graphics_shader_layouts$().G(p.f, result$3);
  var bgls$6 = \u03b46$$3___1;
  var $x_20 = $m_sjs_js_ArrayOpsCommon$();
  var _2$7 = ({});
  var entries$3 = $x_20.a([({
    "binding": 0,
    "visibility": 2,
    "texture": _2$7
  })], []);
  var panelBgl$3 = p.f.createBindGroupLayout(({
    "entries": entries$3
  }));
  if ((panelBgl$3 !== null)) {
    var other$proxy3 = [panelBgl$3];
    var allBgls$3 = bgls$6.concat(other$proxy3);
  } else {
    var allBgls$3 = bgls$6;
  }
  var pl$3 = $m_Ltrivalibs_graphics_shader_layouts$().G(p.f, allBgls$3);
  var upsampleShade = new $c_Ltrivalibs_graphics_painter_Shade(id$3, module$3, null, bgls$6[0], panelBgl$3, pl$3, false, dict$5, dict$6);
  var layers = [];
  var Bindable_this = p.bj(thresholdShade, (void 0), (void 0), (void 0));
  var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("scene", scene);
  var e2$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("threshold", threshold);
  var \u03b4scrutinee197 = e1$proxy1.t;
  var idx = (Bindable_this.y.aC.scene | 0);
  while (((Bindable_this.U.length | 0) <= idx)) {
    Bindable_this.U.push(null);
  }
  Bindable_this.U[idx] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee197);
  Bindable_this.L = null;
  var \u03b4scrutinee201 = (+e2$proxy1.t);
  var idx$2 = (Bindable_this.y.J.threshold | 0);
  if (((idx$2 < (Bindable_this.i.length | 0)) && (Bindable_this.i[idx$2] !== null))) {
    var BufferBinding_this$5 = Bindable_this.i[idx$2];
    BufferBinding_this$5.P.H(BufferBinding_this$5.o, \u03b4scrutinee201);
    var $x_22 = BufferBinding_this$5.O.queue;
    var $x_21 = BufferBinding_this$5.K;
    var s$proxy5 = BufferBinding_this$5.o;
    $x_22.writeBuffer($x_21, 0.0, s$proxy5.dv.buffer);
  } else {
    var uv$2 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
    var device$proxy1 = Bindable_this.gb.f;
    var buffer$3 = new ArrayBuffer(4);
    var arr$proxy3 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$3), 1);
    var b$3$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy3.dv, 0), device$proxy1, uv$2);
    b$3$1.P.H(b$3$1.o, \u03b4scrutinee201);
    var $x_24 = b$3$1.O.queue;
    var $x_23 = b$3$1.K;
    var s$proxy6 = b$3$1.o;
    $x_24.writeBuffer($x_23, 0.0, s$proxy6.dv.buffer);
    while (((Bindable_this.i.length | 0) <= idx$2)) {
      Bindable_this.i.push(null);
    }
    Bindable_this.i[idx$2] = b$3$1;
  }
  Bindable_this.L = null;
  layers.push(Bindable_this);
  var di = 0;
  while ((di < ((mipLevels - 1) | 0))) {
    var mipSource$1 = di;
    var mipTarget$1 = ((1 + di) | 0);
    var Bindable_this$5 = p.bj(downsampleShade, (void 0), mipSource$1, mipTarget$1);
    var e1$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("blurRadius", b);
    var e2$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var \u03b4scrutinee212 = e1$proxy2.t;
    var idx$3 = (Bindable_this$5.y.J.blurRadius | 0);
    while (((Bindable_this$5.i.length | 0) <= idx$3)) {
      Bindable_this$5.i.push(null);
    }
    Bindable_this$5.i[idx$3] = \u03b4scrutinee212;
    Bindable_this$5.L = null;
    var \u03b4scrutinee224 = e2$proxy2.t;
    var idx$4 = (Bindable_this$5.y.J.samp | 0);
    while (((Bindable_this$5.i.length | 0) <= idx$4)) {
      Bindable_this$5.i.push(null);
    }
    Bindable_this$5.i[idx$4] = \u03b4scrutinee224;
    Bindable_this$5.L = null;
    layers.push(Bindable_this$5);
    di = ((1 + di) | 0);
  }
  var ui = ((mipLevels - 2) | 0);
  while ((ui >= 0)) {
    var Bindable_this$8 = p.bj(upsampleShade, $m_Ltrivalibs_graphics_painter_BlendState$().lp, ((1 + ui) | 0), ui);
    var e1$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("blurRadius", b);
    var e2$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var \u03b4scrutinee234 = e1$proxy3.t;
    var idx$5 = (Bindable_this$8.y.J.blurRadius | 0);
    while (((Bindable_this$8.i.length | 0) <= idx$5)) {
      Bindable_this$8.i.push(null);
    }
    Bindable_this$8.i[idx$5] = \u03b4scrutinee234;
    Bindable_this$8.L = null;
    var \u03b4scrutinee246 = e2$proxy3.t;
    var idx$6 = (Bindable_this$8.y.J.samp | 0);
    while (((Bindable_this$8.i.length | 0) <= idx$6)) {
      Bindable_this$8.i.push(null);
    }
    Bindable_this$8.i[idx$6] = \u03b4scrutinee246;
    Bindable_this$8.L = null;
    layers.push(Bindable_this$8);
    ui = ((ui - 1) | 0);
  }
  var bloomP = p.bD((void 0), (void 0), (void 0), (void 0), (void 0), mipLevels, (void 0), "rgba16float", (void 0), (void 0), (void 0), (void 0), layers);
  var program$4 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  var d$3 = ({});
  var ctx$3 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$3), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg$3 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev$3 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$3;
  try {
    var coord = $m_Ltrivalibs_graphics_math_gpu_ivec2$().bz($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fH(ctx$3.fz));
    var $x_26 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().fE();
    var AssignTarget_this$3 = ctx$3.aw.a3("color");
    var value$proxy4 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().ij($m_Ltrivalibs_graphics_math_gpu_expr$package$().hb($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "scene"), coord), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().M(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().mT($m_Ltrivalibs_graphics_math_gpu_expr$package$().hb($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "bloom"), coord), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().M(), ctx$3.F.k("intensity")));
    var $x_25 = $x_26.h((((("  " + AssignTarget_this$3.R) + " = ") + value$proxy4.d) + ";"));
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$3;
  }
  program$4.a9 = $x_25;
  var array$54 = reg$3.a5;
  var len$6 = (array$54.length | 0);
  var i$8 = 0;
  while ((i$8 < len$6)) {
    $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program$4, array$54[i$8]);
    i$8 = ((1 + i$8) | 0);
  }
  var b$5 = program$4.a9;
  var helperFns$proxy4 = program$4.aA();
  var id$4 = p.q;
  p.q = ((1 + p.q) | 0);
  var names$10 = $m_sjs_js_ArrayOpsCommon$().a(["intensity"], []);
  var dict$7 = ({});
  var i$7$1 = 0;
  while ((i$7$1 < (names$10.length | 0))) {
    dict$7[names$10[i$7$1]] = i$7$1;
    i$7$1 = ((1 + i$7$1) | 0);
  }
  var names$11 = $m_sjs_js_ArrayOpsCommon$().a(["scene"], $m_sjs_js_ArrayOpsCommon$().a(["bloom"], []));
  var dict$8 = ({});
  var i$8$1 = 0;
  while ((i$8$1 < (names$11.length | 0))) {
    dict$8[names$11[i$8$1]] = i$8$1;
    i$8$1 = ((1 + i$8$1) | 0);
  }
  var sd$4 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$5, helperFns$proxy4);
  var vertexInputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls$4 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["intensity"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).V.v()], []));
  var fragBuiltinParams$4 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$4 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$4, vertexInputStruct$4, vertexOutputStruct$4, fragmentOutputStruct$4, groupDecls$4, sd$4.af, sd$4.ae, fragBuiltinParams$4);
  var wgsl$4 = (baseWgsl$4 + "\n\n@group(1) @binding(0) var scene: texture_2d<f32>;\n@group(1) @binding(1) var bloom: texture_2d<f32>;");
  var args$proxy4 = $m_sr_ScalaRunTime$().at(new ($d_sjs_js_Any.r().C)([wgsl$4]));
  console.log(...$m_sjsr_Compat$().as(args$proxy4));
  var module$4 = p.f.createShaderModule(({
    "code": wgsl$4
  }));
  var $x_28 = $m_sjs_js_ArrayOpsCommon$();
  var $x_27 = $m_sjs_js_ArrayOpsCommon$();
  var _2$8 = ({
    "type": "uniform"
  });
  var descriptors$4 = $x_28.a([$x_27.a([({
    "binding": 0,
    "visibility": 2,
    "buffer": _2$8
  })], [])], []);
  var result$4 = [];
  var len$7 = (descriptors$4.length | 0);
  var i$9 = 0;
  while ((i$9 < len$7)) {
    var x0$8 = descriptors$4[i$9];
    (result$4.push(p.f.createBindGroupLayout(({
      "entries": x0$8
    }))) | 0);
    i$9 = ((1 + i$9) | 0);
  }
  var \u03b46$$4___1 = result$4;
  var \u03b46$$4___2 = $m_Ltrivalibs_graphics_shader_layouts$().G(p.f, result$4);
  var bgls$8 = \u03b46$$4___1;
  var $x_30 = $m_sjs_js_ArrayOpsCommon$();
  var _2$9 = ({});
  var $x_29 = $m_sjs_js_ArrayOpsCommon$();
  var _2$10 = ({});
  var entries$4 = $x_30.a([({
    "binding": 0,
    "visibility": 2,
    "texture": _2$9
  })], $x_29.a([({
    "binding": 1,
    "visibility": 2,
    "texture": _2$10
  })], []));
  var panelBgl$4 = p.f.createBindGroupLayout(({
    "entries": entries$4
  }));
  if ((panelBgl$4 !== null)) {
    var other$proxy4 = [panelBgl$4];
    var allBgls$4 = bgls$8.concat(other$proxy4);
  } else {
    var allBgls$4 = bgls$8;
  }
  var pl$4 = $m_Ltrivalibs_graphics_shader_layouts$().G(p.f, allBgls$4);
  var compositeShade = new $c_Ltrivalibs_graphics_painter_Shade(id$4, module$4, null, bgls$8[0], panelBgl$4, pl$4, false, dict$7, dict$8);
  var Bindable_this$11 = p.bj(compositeShade, (void 0), (void 0), (void 0));
  var e1$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("scene", scene);
  var e2$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("bloom", bloomP);
  var e3$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("intensity", b$2);
  var \u03b4scrutinee325 = e1$proxy4.t;
  var idx$7 = (Bindable_this$11.y.aC.scene | 0);
  while (((Bindable_this$11.U.length | 0) <= idx$7)) {
    Bindable_this$11.U.push(null);
  }
  Bindable_this$11.U[idx$7] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee325);
  Bindable_this$11.L = null;
  var \u03b4scrutinee335 = e2$proxy4.t;
  var idx$8 = (Bindable_this$11.y.aC.bloom | 0);
  while (((Bindable_this$11.U.length | 0) <= idx$8)) {
    Bindable_this$11.U.push(null);
  }
  Bindable_this$11.U[idx$8] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee335);
  Bindable_this$11.L = null;
  var \u03b4scrutinee339 = e3$proxy1.t;
  var idx$9 = (Bindable_this$11.y.J.intensity | 0);
  while (((Bindable_this$11.i.length | 0) <= idx$9)) {
    Bindable_this$11.i.push(null);
  }
  Bindable_this$11.i[idx$9] = \u03b4scrutinee339;
  Bindable_this$11.L = null;
  return new $c_Lsketchlib_utils_bloom_Bloom$$anon$1(bloomP, p.bD((void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), Bindable_this$11, (void 0)), p, b, b$2);
});
var $d_Lsketchlib_utils_bloom_Bloom$ = new $TypeData().i($c_Lsketchlib_utils_bloom_Bloom$, "sketchlib.utils.bloom.Bloom$", ({
  dA: 1
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
  this.iE = 0.0;
  this.kB = null;
  $n_Lsketchlib_utils_mirror_MirrorReflection$ = this;
  this.iE = 2.0;
  var names = $m_sjs_js_ArrayOpsCommon$().a(["tex"], []);
  var types = $m_sjs_js_ArrayOpsCommon$().a(["texture_2d<f32>"], []);
  var parts = [];
  var i = 0;
  while ((i < (names.length | 0))) {
    parts.push(((names[i] + ": ") + types[i]));
    i = ((1 + i) | 0);
  }
  var paramList = parts.join(", ");
  var src = (("fn mirror_tex_height(" + paramList) + ") -> f32 {\n  return f32(textureDimensions(tex).y);\n}");
  this.kB = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("mirror_tex_height", src);
}
$p = $c_Lsketchlib_utils_mirror_MirrorReflection$.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_mirror_MirrorReflection$;
/** @constructor */
function $h_Lsketchlib_utils_mirror_MirrorReflection$() {
}
$h_Lsketchlib_utils_mirror_MirrorReflection$.prototype = $p;
$p.nt = (function(p, shapes, vpName, alphaScale, camera, mirror, blurStrength, stretch, mipLevels, overscan, clearColor) {
  if ((mipLevels < 2)) {
    var message$proxy1 = (("MirrorReflection mipLevels must be >= 2 (got " + mipLevels) + ")");
    throw new $c_sjs_js_JavaScriptException(Error(message$proxy1)).aE;
  }
  if ((overscan < 0.0)) {
    var message$proxy2 = (("MirrorReflection overscan must be >= 0 (got " + overscan) + ")");
    throw new $c_sjs_js_JavaScriptException(Error(message$proxy2)).aE;
  }
  var reflMat = mirror.pk();
  var p$proxy1 = ((mipLevels - 1) | 0);
  var maxRadius = ((+Math.pow(2.0, p$proxy1)) - 1.0);
  if ((((0.0062499999999999995 * blurStrength) * p.ip()) > maxRadius)) {
    var $x_3 = $m_sr_ScalaRunTime$();
    var $x_2 = p.ip();
    var p$proxy2 = ((0.0062499999999999995 * blurStrength) * p.ip());
    var $x_1 = $m_RTLong$().jJ((+Math.round(p$proxy2)));
    var x_$_lo = $x_1.l;
    var x_$_hi = $x_1.h;
    var args$proxy1 = $x_3.at(new ($d_sjs_js_Any.r().C)([(((((((("MirrorReflection: blurStrength " + blurStrength) + "% of height ") + $x_2) + " ") + ("needs a " + ((4.294967296E9 * x_$_hi) + (x_$_lo >>> 0.0)))) + " px mip ") + ((("radius, beyond the reach of " + mipLevels) + " mip levels (") + maxRadius)) + " px) \u2014 the blur will saturate before alphaScale. Raise mipLevels.")]));
    console.log(...$m_sjsr_Compat$().as(args$proxy1));
  }
  var pn = mirror.gH;
  var pd = mirror.gG;
  var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
  var uv$proxy1 = ul$proxy1.aF;
  var buffer = new ArrayBuffer(64);
  var arr$proxy1 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
  var uVp = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy1.dv, 0), p.f, uv$proxy1);
  var ul$proxy2 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
  var uv$proxy2 = ul$proxy2.aF;
  var buffer$2 = new ArrayBuffer(64);
  var arr$proxy2 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
  var uInvVp = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy2.dv, 0), p.f, uv$proxy2);
  var value$proxy1 = (0.0062499999999999995 * blurStrength);
  var ul$proxy3 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy3 = ul$proxy3.aF;
  var buffer$3 = new ArrayBuffer(4);
  var arr$proxy3 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$3), 1);
  var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy3.dv, 0), p.f, uv$proxy3);
  b.P.H(b.o, value$proxy1);
  var $x_5 = b.O.queue;
  var $x_4 = b.K;
  var s$proxy1 = b.o;
  $x_5.writeBuffer($x_4, 0.0, s$proxy1.dv.buffer);
  var ul$proxy4 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy4 = ul$proxy4.aF;
  var buffer$4 = new ArrayBuffer(4);
  var arr$proxy4 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$4), 1);
  var b$2 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy4.dv, 0), p.f, uv$proxy4);
  b$2.P.H(b$2.o, stretch);
  var $x_7 = b$2.O.queue;
  var $x_6 = b$2.K;
  var s$proxy2 = b$2.o;
  $x_7.writeBuffer($x_6, 0.0, s$proxy2.dv.buffer);
  var ul$proxy5 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy5 = ul$proxy5.aF;
  var buffer$5 = new ArrayBuffer(4);
  var arr$proxy5 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$5), 1);
  var b$3 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy5.dv, 0), p.f, uv$proxy5);
  b$3.P.H(b$3.o, 0.0);
  var $x_9 = b$3.O.queue;
  var $x_8 = b$3.K;
  var s$proxy3 = b$3.o;
  $x_9.writeBuffer($x_8, 0.0, s$proxy3.dv.buffer);
  var value$proxy2 = new $c_Ltrivalibs_graphics_math_cpu_Vec4(1.0, 1.0, 0.0, 0.0);
  var ul$proxy6 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$());
  var uv$proxy6 = ul$proxy6.aF;
  var buffer$6 = new ArrayBuffer(16);
  var arr$proxy6 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$6), 1);
  var b$4 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy6.dv, 0), p.f, uv$proxy6);
  b$4.P.H(b$4.o, value$proxy2);
  var $x_11 = b$4.O.queue;
  var $x_10 = b$4.K;
  var s$proxy4 = b$4.o;
  $x_11.writeBuffer($x_10, 0.0, s$proxy4.dv.buffer);
  var sampler = p.jN();
  var mirrorPanel = p.bD((void 0), (void 0), clearColor, true, true, (void 0), (void 0), "rgba16float", (void 0), (void 0), shapes, (void 0), (void 0));
  var dict$proxy1 = mirrorPanel.gT;
  dict$proxy1[vpName] = uVp;
  var build$proxy1 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3) => {
    var body$proxy1 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2) => {
      var uv$6 = ctx$2.al.k("uv");
      var d = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "d");
      var ndc = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "ndc");
      var worldH = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "worldH");
      var worldPos = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "worldPos");
      var t = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "t");
      var $x_19 = $m_sjsr_package$();
      var $x_18 = d.S($m_Ltrivalibs_graphics_math_gpu_expr$package$().nO($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "depth"), $m_Ltrivalibs_graphics_math_gpu_ivec2$().bz($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fH(ctx$2.fz))));
      var $x_17 = $m_Ltrivalibs_graphics_math_gpu_vec3$();
      var $x_16 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().m6($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().a1($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().X().I(uv$6), 2.0), 1.0);
      var e$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().a1($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().X().B(uv$6), 2.0);
      var $x_15 = ndc.S($x_17.az($x_16, $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().b8().b9((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aX(1.0)) + " - ") + e$proxy1.d) + ")")), d));
      var $x_14 = worldH.S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().gp(ctx$2.F.k("invVp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fF(), $m_Ltrivalibs_graphics_math_gpu_vec4$().ag(ndc, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().M(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$()));
      var $x_13 = worldPos.S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().nR($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fI(worldH), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().Y(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().M().am(worldH)));
      var $x_12 = t.S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().mj($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().jD($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().m6($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().Y().mn($m_Ltrivalibs_graphics_math_gpu_vec3$().az($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(pn.w), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(pn.z), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(pn.x)), worldPos), pd), alphaScale)));
      var AssignTarget_this = ctx$2.aw.a3("color");
      var value$proxy3 = $m_Ltrivalibs_graphics_math_gpu_vec4$().ag($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fI($m_Ltrivalibs_graphics_math_gpu_expr$package$().hb($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "col"), $m_Ltrivalibs_graphics_math_gpu_ivec2$().bz($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fH(ctx$2.fz)))), t);
      return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_19.e(new ($d_T.r().C)([$x_18, $x_15, $x_14, $x_13, $x_12, (((("  " + AssignTarget_this.R) + " = ") + value$proxy3.d) + ";")]))), "", "\n", "");
    }));
    var d$1 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([]))));
    var ctx = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$1), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg;
    try {
      var $x_20 = body$proxy1.h(ctx);
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev;
    }
    program$3.a9 = $x_20;
    $m_sjs_js_ArrayOps$().a2(reg.a5, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$4) => ((data$3) => {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$4, data$3);
    }))(program$3)));
  }));
  var program = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  build$proxy1.h(program);
  var b$1 = program.a9;
  var helperFns$proxy1 = program.aA();
  var id = p.q;
  p.q = ((1 + p.q) | 0);
  var names = $m_sjs_js_ArrayOpsCommon$().a(["invVp"], []);
  var dict = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([]))));
  var i = 0;
  while ((i < (names.length | 0))) {
    dict[names[i]] = i;
    i = ((1 + i) | 0);
  }
  var names$2 = $m_sjs_js_ArrayOpsCommon$().a(["col"], $m_sjs_js_ArrayOpsCommon$().a(["depth"], []));
  var dict$2 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([]))));
  var i$2 = 0;
  while ((i$2 < (names$2.length | 0))) {
    dict$2[names$2[i$2]] = i$2;
    i$2 = ((1 + i$2) | 0);
  }
  var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$1, helperFns$proxy1);
  var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["invVp"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).V.v()], []));
  var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.af, sd.ae, fragBuiltinParams);
  var wgsl = (baseWgsl + "\n\n@group(1) @binding(0) var col: texture_2d<f32>;\n@group(1) @binding(1) var depth: texture_depth_2d;");
  var args$proxy2 = $m_sr_ScalaRunTime$().at(new ($d_sjs_js_Any.r().C)([wgsl]));
  console.log(...$m_sjsr_Compat$().as(args$proxy2));
  var module = p.f.createShaderModule($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("code", wgsl)])))));
  var descriptors = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], [])], []);
  var result = [];
  $m_sjs_js_ArrayOps$().a2(descriptors, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((entries$2) => (result.push(p.f.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("entries", entries$2)])))))) | 0))));
  var x1 = new $c_T2(result, $m_Ltrivalibs_graphics_shader_layouts$().G(p.f, result));
  var \u03b46$ = x1;
  var bgls$2 = \u03b46$.Z;
  var entries = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("sampleType", "depth")])))))]))))], []));
  var panelBgl = p.f.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("entries", entries)])))));
  if ((panelBgl !== null)) {
    var other$proxy1 = [panelBgl];
    var allBgls = bgls$2.concat(other$proxy1);
  } else {
    var allBgls = bgls$2;
  }
  var pl = $m_Ltrivalibs_graphics_shader_layouts$().G(p.f, allBgls);
  var bakeShade = new $c_Ltrivalibs_graphics_painter_Shade(id, module, null, bgls$2[0], panelBgl, pl, false, dict, dict$2);
  var build$proxy2 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$1) => {
    var body$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$1) => {
      var $x_21 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().fE();
      var AssignTarget_this$1 = ctx$2$1.aw.a3("color");
      var WgslFn$_this = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
      var fn$proxy1 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$().js;
      var a1$proxy1 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex");
      var a2$proxy1 = ctx$2$1.F.k("samp");
      var a3$proxy1 = ctx$2$1.al.k("uv");
      var a4$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(4.0);
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().hz(fn$proxy1);
      var value$proxy4 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((((((WgslFn$_this.hs(fn$proxy1) + "(") + a1$proxy1) + ", ") + a2$proxy1) + ", ") + a3$proxy1) + ", ") + a4$proxy1) + ")"));
      return $x_21.h((((("  " + AssignTarget_this$1.R) + " = ") + value$proxy4.d) + ";"));
    }));
    var d$2 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([]))));
    var ctx$1 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$2), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$1;
    try {
      var $x_22 = body$proxy3.h(ctx$1);
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$1;
    }
    program$3$1.a9 = $x_22;
    $m_sjs_js_ArrayOps$().a2(reg$1.a5, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$5) => ((data$3$1) => {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$5, data$3$1);
    }))(program$3$1)));
  }));
  var program$2 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  build$proxy2.h(program$2);
  var b$5 = program$2.a9;
  var helperFns$proxy2 = program$2.aA();
  var id$2 = p.q;
  p.q = ((1 + p.q) | 0);
  var names$4 = $m_sjs_js_ArrayOpsCommon$().a(["samp"], []);
  var dict$3 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([]))));
  var i$3 = 0;
  while ((i$3 < (names$4.length | 0))) {
    dict$3[names$4[i$3]] = i$3;
    i$3 = ((1 + i$3) | 0);
  }
  var names$5 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], []);
  var dict$4 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([]))));
  var i$4 = 0;
  while ((i$4 < (names$5.length | 0))) {
    dict$4[names$5[i$4]] = i$4;
    i$4 = ((1 + i$4) | 0);
  }
  var sd$2 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$5, helperFns$proxy2);
  var vertexInputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls$2 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["samp"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).V.v()], []));
  var fragBuiltinParams$2 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$2 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$2, vertexInputStruct$2, vertexOutputStruct$2, fragmentOutputStruct$2, groupDecls$2, sd$2.af, sd$2.ae, fragBuiltinParams$2);
  var wgsl$2 = (baseWgsl$2 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
  var args$proxy3 = $m_sr_ScalaRunTime$().at(new ($d_sjs_js_Any.r().C)([wgsl$2]));
  console.log(...$m_sjsr_Compat$().as(args$proxy3));
  var module$2 = p.f.createShaderModule($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("code", wgsl$2)])))));
  var descriptors$2 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([])))))]))))], [])], []);
  var result$2 = [];
  $m_sjs_js_ArrayOps$().a2(descriptors$2, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((entries$2$1) => (result$2.push(p.f.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("entries", entries$2$1)])))))) | 0))));
  var x4 = new $c_T2(result$2, $m_Ltrivalibs_graphics_shader_layouts$().G(p.f, result$2));
  var \u03b46$$2 = x4;
  var bgls$4 = \u03b46$$2.Z;
  var entries$2$2 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([])))))]))))], []);
  var panelBgl$2 = p.f.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("entries", entries$2$2)])))));
  if ((panelBgl$2 !== null)) {
    var other$proxy2 = [panelBgl$2];
    var allBgls$2 = bgls$4.concat(other$proxy2);
  } else {
    var allBgls$2 = bgls$4;
  }
  var pl$2 = $m_Ltrivalibs_graphics_shader_layouts$().G(p.f, allBgls$2);
  var downBlurShade = new $c_Ltrivalibs_graphics_painter_Shade(id$2, module$2, null, bgls$4[0], panelBgl$2, pl$2, false, dict$3, dict$4);
  var blurLayers = [];
  var Bindable_this = p.bj(bakeShade, (void 0), (void 0), (void 0));
  var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("col", mirrorPanel);
  var e2$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("depth", mirrorPanel.nD(0, (-1), true));
  var e3$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("invVp", uInvVp);
  var \u03b4scrutinee138 = e1$proxy1.t;
  var idx = (Bindable_this.y.aC.col | 0);
  while (((Bindable_this.U.length | 0) <= idx)) {
    Bindable_this.U.push(null);
  }
  Bindable_this.U[idx] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee138);
  Bindable_this.L = null;
  var \u03b4scrutinee148 = e2$proxy1.t;
  var idx$2 = (Bindable_this.y.aC.depth | 0);
  while (((Bindable_this.U.length | 0) <= idx$2)) {
    Bindable_this.U.push(null);
  }
  Bindable_this.U[idx$2] = \u03b4scrutinee148;
  Bindable_this.L = null;
  var \u03b4scrutinee152 = e3$proxy1.t;
  var idx$3 = (Bindable_this.y.J.invVp | 0);
  while (((Bindable_this.i.length | 0) <= idx$3)) {
    Bindable_this.i.push(null);
  }
  Bindable_this.i[idx$3] = \u03b4scrutinee152;
  Bindable_this.L = null;
  blurLayers.push(Bindable_this);
  var mi = 0;
  while ((mi < ((mipLevels - 1) | 0))) {
    var mipSource$1 = mi;
    var mipTarget$1 = ((1 + mi) | 0);
    var Bindable_this$5 = p.bj(downBlurShade, (void 0), mipSource$1, mipTarget$1);
    var e1$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var \u03b4scrutinee160 = e1$proxy2.t;
    var idx$4 = (Bindable_this$5.y.J.samp | 0);
    while (((Bindable_this$5.i.length | 0) <= idx$4)) {
      Bindable_this$5.i.push(null);
    }
    Bindable_this$5.i[idx$4] = \u03b4scrutinee160;
    Bindable_this$5.L = null;
    blurLayers.push(Bindable_this$5);
    mi = ((1 + mi) | 0);
  }
  var _blurPanel = p.bD((void 0), (void 0), (void 0), (void 0), (void 0), mipLevels, (void 0), "rgba16float", (void 0), (void 0), (void 0), (void 0), blurLayers);
  var build$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$2) => {
    var body$proxy5 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$2) => {
      var uv$7 = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "uv");
      var t$1 = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "t");
      var h = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "h");
      var radius = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "radius");
      var lod = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "lod");
      var s$1 = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "s");
      var $x_30 = $m_sjsr_package$();
      var $x_29 = uv$7.S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().nm($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().p6(ctx$2$2.al.k("uv"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().X(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fH(ctx$2$2.F.k("crop"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().X(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q1(ctx$2$2.F.k("crop"))));
      var WgslFn$_this$1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
      var fn$proxy2 = this.kB;
      var a1$proxy2 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "col");
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().hz(fn$proxy2);
      var $x_28 = h.S($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((WgslFn$_this$1.hs(fn$proxy2) + "(") + a1$proxy2) + ")")));
      var Vec4BaseG_this = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().M();
      var v$proxy1 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().hv($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "col"), uv$7, ctx$2$2.F.k("samp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(0.0));
      var $x_27 = t$1.S(Vec4BaseG_this.am(v$proxy1));
      var $x_26 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
      var e$proxy2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bh($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bh(t$1, ctx$2$2.F.k("blurStrength")), ctx$2$2.F.k("visHeight"));
      var $x_25 = radius.S($x_26.mR($m_Ltrivalibs_graphics_math_gpu_LeftScalar$().b8().b9((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aX(1.0)) + " + ") + e$proxy2.d) + ")")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(maxRadius)));
      var $x_24 = lod.S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().or(radius));
      var $x_23 = s$1.S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().jE($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bh($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().a1(ctx$2$2.F.k("stretch"), this.iE), radius), h));
      var AssignTarget_this$2 = ctx$2$2.aw.a3("color");
      var value$proxy6 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().ij($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().ij($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().ij($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().ih($m_Ltrivalibs_graphics_math_gpu_expr$package$().hv($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "col"), uv$7, ctx$2$2.F.k("samp"), lod), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().M(), 0.4), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().M(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().ih($m_Ltrivalibs_graphics_math_gpu_expr$package$().hv($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "col"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().jR(uv$7, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().X(), $m_Ltrivalibs_graphics_math_gpu_vec2$().ag($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(0.0), s$1)), ctx$2$2.F.k("samp"), lod), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().M(), 0.3)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().M(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().ih($m_Ltrivalibs_graphics_math_gpu_expr$package$().hv($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "col"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().jR(uv$7, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().X(), $m_Ltrivalibs_graphics_math_gpu_vec2$().ag($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().a1(s$1, 2.0))), ctx$2$2.F.k("samp"), lod), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().M(), 0.2)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().M(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().ih($m_Ltrivalibs_graphics_math_gpu_expr$package$().hv($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "col"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().jR(uv$7, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().X(), $m_Ltrivalibs_graphics_math_gpu_vec2$().ag($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().a1(s$1, 3.0))), ctx$2$2.F.k("samp"), lod), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().M(), 0.1));
      return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_30.e(new ($d_T.r().C)([$x_29, $x_28, $x_27, $x_25, $x_24, $x_23, (((("  " + AssignTarget_this$2.R) + " = ") + value$proxy6.d) + ";")]))), "", "\n", "");
    }));
    var d$3 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([]))));
    var ctx$3 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$3), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$2;
    try {
      var $x_31 = body$proxy5.h(ctx$3);
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$2;
    }
    program$3$2.a9 = $x_31;
    $m_sjs_js_ArrayOps$().a2(reg$2.a5, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$6) => ((data$3$2) => {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$6, data$3$2);
    }))(program$3$2)));
  }));
  var program$3$3 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  build$proxy3.h(program$3$3);
  var b$6 = program$3$3.a9;
  var helperFns$proxy3 = program$3$3.aA();
  var id$3 = p.q;
  p.q = ((1 + p.q) | 0);
  var names$7 = $m_sjs_js_ArrayOpsCommon$().a(["blurStrength"], $m_sjs_js_ArrayOpsCommon$().a(["stretch"], $m_sjs_js_ArrayOpsCommon$().a(["visHeight"], $m_sjs_js_ArrayOpsCommon$().a(["crop"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])))));
  var dict$5 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([]))));
  var i$5 = 0;
  while ((i$5 < (names$7.length | 0))) {
    dict$5[names$7[i$5]] = i$5;
    i$5 = ((1 + i$5) | 0);
  }
  var names$8 = $m_sjs_js_ArrayOpsCommon$().a(["col"], []);
  var dict$6 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([]))));
  var i$6 = 0;
  while ((i$6 < (names$8.length | 0))) {
    dict$6[names$8[i$6]] = i$6;
    i$6 = ((1 + i$6) | 0);
  }
  var sd$3 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$6, helperFns$proxy3);
  var vertexInputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls$3 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["blurStrength"], $m_sjs_js_ArrayOpsCommon$().a(["stretch"], $m_sjs_js_ArrayOpsCommon$().a(["visHeight"], $m_sjs_js_ArrayOpsCommon$().a(["crop"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []))))), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).V.v()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).V.v()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).V.v()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$()).V.v()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).V.v()], []))))));
  var fragBuiltinParams$3 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$3 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$3, vertexInputStruct$3, vertexOutputStruct$3, fragmentOutputStruct$3, groupDecls$3, sd$3.af, sd$3.ae, fragBuiltinParams$3);
  var wgsl$3 = (baseWgsl$3 + "\n\n@group(1) @binding(0) var col: texture_2d<f32>;");
  var args$proxy4 = $m_sr_ScalaRunTime$().at(new ($d_sjs_js_Any.r().C)([wgsl$3]));
  console.log(...$m_sjsr_Compat$().as(args$proxy4));
  var module$3 = p.f.createShaderModule($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("code", wgsl$3)])))));
  var descriptors$3 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 2), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 3), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 4), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([])))))]))))], [])))))], []);
  var result$3 = [];
  $m_sjs_js_ArrayOps$().a2(descriptors$3, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((entries$2$3) => (result$3.push(p.f.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("entries", entries$2$3)])))))) | 0))));
  var x7 = new $c_T2(result$3, $m_Ltrivalibs_graphics_shader_layouts$().G(p.f, result$3));
  var \u03b46$$3 = x7;
  var bgls$6 = \u03b46$$3.Z;
  var entries$3 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([])))))]))))], []);
  var panelBgl$3 = p.f.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("entries", entries$3)])))));
  if ((panelBgl$3 !== null)) {
    var other$proxy3 = [panelBgl$3];
    var allBgls$3 = bgls$6.concat(other$proxy3);
  } else {
    var allBgls$3 = bgls$6;
  }
  var pl$3 = $m_Ltrivalibs_graphics_shader_layouts$().G(p.f, allBgls$3);
  var resolveShade = new $c_Ltrivalibs_graphics_painter_Shade(id$3, module$3, null, bgls$6[0], panelBgl$3, pl$3, false, dict$5, dict$6);
  var Bindable_this$7 = p.bj(resolveShade, (void 0), (void 0), (void 0));
  var e1$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("col", _blurPanel);
  var e2$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("blurStrength", b);
  var e3$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("stretch", b$2);
  var e4$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("visHeight", b$3);
  var e5$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("crop", b$4);
  var e6$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
  var \u03b4scrutinee263 = e1$proxy3.t;
  var idx$5 = (Bindable_this$7.y.aC.col | 0);
  while (((Bindable_this$7.U.length | 0) <= idx$5)) {
    Bindable_this$7.U.push(null);
  }
  Bindable_this$7.U[idx$5] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee263);
  Bindable_this$7.L = null;
  var \u03b4scrutinee267 = e2$proxy2.t;
  var idx$6 = (Bindable_this$7.y.J.blurStrength | 0);
  while (((Bindable_this$7.i.length | 0) <= idx$6)) {
    Bindable_this$7.i.push(null);
  }
  Bindable_this$7.i[idx$6] = \u03b4scrutinee267;
  Bindable_this$7.L = null;
  var \u03b4scrutinee279 = e3$proxy2.t;
  var idx$7 = (Bindable_this$7.y.J.stretch | 0);
  while (((Bindable_this$7.i.length | 0) <= idx$7)) {
    Bindable_this$7.i.push(null);
  }
  Bindable_this$7.i[idx$7] = \u03b4scrutinee279;
  Bindable_this$7.L = null;
  var \u03b4scrutinee295 = e4$proxy1.t;
  var idx$8 = (Bindable_this$7.y.J.visHeight | 0);
  while (((Bindable_this$7.i.length | 0) <= idx$8)) {
    Bindable_this$7.i.push(null);
  }
  Bindable_this$7.i[idx$8] = \u03b4scrutinee295;
  Bindable_this$7.L = null;
  var \u03b4scrutinee315 = e5$proxy1.t;
  var idx$9 = (Bindable_this$7.y.J.crop | 0);
  while (((Bindable_this$7.i.length | 0) <= idx$9)) {
    Bindable_this$7.i.push(null);
  }
  Bindable_this$7.i[idx$9] = \u03b4scrutinee315;
  Bindable_this$7.L = null;
  var \u03b4scrutinee337 = e6$proxy1.t;
  var idx$10 = (Bindable_this$7.y.J.samp | 0);
  while (((Bindable_this$7.i.length | 0) <= idx$10)) {
    Bindable_this$7.i.push(null);
  }
  Bindable_this$7.i[idx$10] = \u03b4scrutinee337;
  Bindable_this$7.L = null;
  var layers$2 = [Bindable_this$7];
  return new $c_Lsketchlib_utils_mirror_MirrorReflection$$anon$1(mirrorPanel, p.bD((void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), "rgba16float", (void 0), (void 0), (void 0), (void 0), layers$2), blurStrength, stretch, overscan, _blurPanel, b$3, b$4, b, 0.0062499999999999995, b$2, camera, reflMat, uVp, uInvVp, p);
});
var $d_Lsketchlib_utils_mirror_MirrorReflection$ = new $TypeData().i($c_Lsketchlib_utils_mirror_MirrorReflection$, "sketchlib.utils.mirror.MirrorReflection$", ({
  dD: 1
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
  dF: 1
}));
/** @constructor */
function $c_Ltrivalibs_dev_dev$package$() {
  this.g8 = null;
  this.iJ = false;
  $n_Ltrivalibs_dev_dev$package$ = this;
  this.g8 = [];
  this.iJ = false;
}
$p = $c_Ltrivalibs_dev_dev$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_dev_dev$package$;
/** @constructor */
function $h_Ltrivalibs_dev_dev$package$() {
}
$h_Ltrivalibs_dev_dev$package$.prototype = $p;
$p.nP = (function() {
  return (import.meta.hot !== (void 0));
});
$p.p2 = (function() {
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
$p.pD = (function(label) {
  return ((("trivalibs:dev:" + $m_Ltrivalibs_dev_dev$package$().p2()) + ":") + label);
});
$p.jQ = (function() {
  return window.sessionStorage;
});
$p.pj = (function(key) {
  var raw = $m_Ltrivalibs_dev_dev$package$().jQ().getItem(key);
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
$p.pY = (function(key, json) {
  $m_Ltrivalibs_dev_dev$package$().jQ().setItem(key, JSON.stringify(json));
});
$p.po = (function(key) {
  $m_Ltrivalibs_dev_dev$package$().jQ().removeItem(key);
});
$p.nY = (function() {
  if ((!$m_Ltrivalibs_dev_dev$package$().iJ)) {
    $m_Ltrivalibs_dev_dev$package$().iJ = true;
    window.addEventListener("pagehide", ((_$1$2) => {
      var i = 0;
      while ((i < ($m_Ltrivalibs_dev_dev$package$().g8.length | 0))) {
        $m_Ltrivalibs_dev_dev$package$().g8[i].h7();
        i = ((1 + i) | 0);
      }
    }));
  }
});
$p.pl = (function(flush) {
  $m_Ltrivalibs_dev_dev$package$().nY();
  $m_Ltrivalibs_dev_dev$package$().g8.push(flush);
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    var idx = $m_sjs_js_ArrayOps$().my($m_Ltrivalibs_dev_dev$package$().g8, flush, 0);
    if ((idx >= 0)) {
      $m_Ltrivalibs_dev_dev$package$().g8.splice(idx, 1);
    }
  }));
});
var $d_Ltrivalibs_dev_dev$package$ = new $TypeData().i($c_Ltrivalibs_dev_dev$package$, "trivalibs.dev.dev$package$", ({
  dG: 1
}));
var $n_Ltrivalibs_dev_dev$package$;
function $m_Ltrivalibs_dev_dev$package$() {
  if ((!$n_Ltrivalibs_dev_dev$package$)) {
    $n_Ltrivalibs_dev_dev$package$ = new $c_Ltrivalibs_dev_dev$package$();
  }
  return $n_Ltrivalibs_dev_dev$package$;
}
function $p_Ltrivalibs_dev_devPreserve$__encodeCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any($thiz, cam) {
  return [cam.aq.w, cam.aq.z, cam.aq.x, cam.aH, cam.bg];
}
function $p_Ltrivalibs_dev_devPreserve$__applyCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any__V($thiz, cam, json) {
  if ((!(!Array.isArray(json)))) {
    if (((json.length | 0) >= 5)) {
      var pos$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((+json[0]), (+json[1]), (+json[2]));
      var rotH$1 = (+json[3]);
      var rotV$1 = (+json[4]);
      var fov$1 = cam.gi;
      var aspect$1 = cam.gU;
      var near$1 = cam.gj;
      var far$1 = cam.gh;
      cam.jP(fov$1, aspect$1, near$1, far$1, rotH$1, rotV$1, pos$1);
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
$p.nv = (function(cam, label) {
  if ((!$m_Ltrivalibs_dev_dev$package$().nP())) {
    return new $c_Ltrivalibs_dev_DevHandle(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => (void 0))));
  } else {
    var sk = $m_Ltrivalibs_dev_dev$package$().pD(label);
    var initPos = cam.aq;
    var initRotH = cam.aH;
    var initRotV = cam.bg;
    var stored = $m_Ltrivalibs_dev_dev$package$().pj(sk);
    if ((stored !== null)) {
      $p_Ltrivalibs_dev_devPreserve$__applyCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any__V(this, cam, stored);
    }
    return new $c_Ltrivalibs_dev_DevHandle(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(((unregister) => (() => {
      unregister.h7();
      $m_Ltrivalibs_dev_dev$package$().po(sk);
      var fov$proxy1 = cam.gi;
      var aspect$proxy1 = cam.gU;
      var near$proxy1 = cam.gj;
      var far$proxy1 = cam.gh;
      cam.jP(fov$proxy1, aspect$proxy1, near$proxy1, far$proxy1, initRotH, initRotV, initPos);
    }))($m_Ltrivalibs_dev_dev$package$().pl(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
      $m_Ltrivalibs_dev_dev$package$().pY(sk, $p_Ltrivalibs_dev_devPreserve$__encodeCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any(this, cam));
    }))))));
  }
});
var $d_Ltrivalibs_dev_devPreserve$ = new $TypeData().i($c_Ltrivalibs_dev_devPreserve$, "trivalibs.dev.devPreserve$", ({
  dH: 1
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
  this.o = null;
  this.O = null;
  this.P = null;
  this.K = null;
  this.o = buffer;
  this.O = device;
  this.P = uv;
  var b = (buffer.dv.byteLength | 0);
  var value = ((b < 16) ? 16 : b);
  var $x_1 = device.createBuffer(({
    "size": value,
    "usage": 72
  }));
  this.K = $x_1;
}
$p = $c_Ltrivalibs_graphics_buffers_BufferBinding.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_BufferBinding;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_BufferBinding() {
}
$h_Ltrivalibs_graphics_buffers_BufferBinding.prototype = $p;
function $isArrayOf_Ltrivalibs_graphics_buffers_BufferBinding(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aU)));
}
var $d_Ltrivalibs_graphics_buffers_BufferBinding = new $TypeData().i($c_Ltrivalibs_graphics_buffers_BufferBinding, "trivalibs.graphics.buffers.BufferBinding", ({
  aU: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Box(center, size, frontTopLeft, frontTopRight, frontBottomLeft, frontBottomRight, backTopLeft, backTopRight, backBottomLeft, backBottomRight) {
  this.kS = null;
  this.kT = null;
  this.kQ = null;
  this.kR = null;
  this.kO = null;
  this.kP = null;
  this.kM = null;
  this.kN = null;
  this.kS = frontTopLeft;
  this.kT = frontTopRight;
  this.kQ = frontBottomLeft;
  this.kR = frontBottomRight;
  this.kO = backTopLeft;
  this.kP = backTopRight;
  this.kM = backBottomLeft;
  this.kN = backBottomRight;
}
$p = $c_Ltrivalibs_graphics_geometry_Box.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Box;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Box() {
}
$h_Ltrivalibs_graphics_geometry_Box.prototype = $p;
$p.pJ = (function(f) {
  return $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().bi(f.b7(this.kO, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0)), f.b7(this.kS, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0)), f.b7(this.kT, new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 0.0)), f.b7(this.kP, new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 1.0)));
});
$p.nF = (function(f) {
  return $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().bi(f.b7(this.kQ, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0)), f.b7(this.kM, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0)), f.b7(this.kN, new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0)), f.b7(this.kR, new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0)));
});
var $d_Ltrivalibs_graphics_geometry_Box = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Box, "trivalibs.graphics.geometry.Box", ({
  dP: 1
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
$p.nq = (function(center, width, height, depth) {
  var hw = (0.5 * width);
  var hh = (0.5 * height);
  var hd = (0.5 * depth);
  var cx = center.w;
  var cy = center.z;
  var cz = center.x;
  return new $c_Ltrivalibs_graphics_geometry_Box(center, new $c_Ltrivalibs_graphics_math_cpu_Vec3(width, height, depth), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy + hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy + hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy - hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy - hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy + hh), (cz - hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy + hh), (cz - hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy - hh), (cz - hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy - hh), (cz - hd)));
});
var $d_Ltrivalibs_graphics_geometry_Box$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Box$, "trivalibs.graphics.geometry.Box$", ({
  dQ: 1
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
  this.kU = null;
  this.iK = null;
  this.kU = vertices;
  this.iK = indices;
}
$p = $c_Ltrivalibs_graphics_geometry_BufferedGeometry.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_BufferedGeometry;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_BufferedGeometry() {
}
$h_Ltrivalibs_graphics_geometry_BufferedGeometry.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_BufferedGeometry = new $TypeData().i($c_Ltrivalibs_graphics_geometry_BufferedGeometry, "trivalibs.graphics.geometry.BufferedGeometry", ({
  dR: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_FaceData(normal, section) {
  this.gE = null;
  this.na = 0;
  this.gE = normal;
  this.na = section;
}
$p = $c_Ltrivalibs_graphics_geometry_FaceData.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_FaceData;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_FaceData() {
}
$h_Ltrivalibs_graphics_geometry_FaceData.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_FaceData = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FaceData, "trivalibs.graphics.geometry.FaceData", ({
  dS: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Mesh(evidence$1) {
  this.gF = null;
  this.a7 = null;
  this.g9 = null;
  this.hK = null;
  this.hJ = null;
  this.gF = evidence$1;
  this.a7 = [];
  this.g9 = [];
  this.hK = [];
  this.hJ = ({});
}
$p = $c_Ltrivalibs_graphics_geometry_Mesh.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Mesh;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Mesh() {
}
$h_Ltrivalibs_graphics_geometry_Mesh.prototype = $p;
$p.nk = (function(face, normal, section) {
  var faceIdx = (this.a7.length | 0);
  this.a7.push(face);
  this.g9.push(new $c_Ltrivalibs_graphics_geometry_FaceData(normal, section));
  var n = (face.length | 0);
  var slot = 0;
  while ((slot < n)) {
    var v = face[slot];
    var key = $m_Ltrivalibs_graphics_geometry_package$package$().pi(this.gF.bk(v));
    if ($m_sjs_js_Any$ObjectCompanionOps$().of(Object, this.hJ, key)) {
      var $x_2 = this.hK;
      var dict = this.hJ;
      if ((!(!(!$m_sjs_js_WrappedDictionary$Cache$().kr.call(dict, key))))) {
        throw new $c_ju_NoSuchElementException(("key not found: " + key));
      }
      var $x_1 = $x_2[(dict[key] | 0)];
      $x_1.kY.push(new $c_Ltrivalibs_graphics_geometry_PositionFaceRef(faceIdx, slot));
    } else {
      var idx = (this.hK.length | 0);
      var dict$1 = this.hJ;
      dict$1[key] = idx;
      this.hK.push(new $c_Ltrivalibs_graphics_geometry_VertexPosition(this.gF.bk(v), [new $c_Ltrivalibs_graphics_geometry_PositionFaceRef(faceIdx, slot)]));
    }
    slot = ((1 + slot) | 0);
  }
});
$p.nX = (function() {
  var hasQuads = false;
  var i = 0;
  while ((i < (this.a7.length | 0))) {
    var arr = this.a7[i];
    if ((this.g9[i].gE === null)) {
      var $x_2 = this.g9[i];
      if (((arr.length | 0) === 3)) {
        var $x_1 = $m_Ltrivalibs_graphics_geometry_polygon$package$Triangle$().jM(this.a7[i], this.gF);
      } else {
        hasQuads = true;
        var $x_1 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().jM(this.a7[i], this.gF);
      }
      $x_2.gE = $x_1;
    }
    i = ((1 + i) | 0);
  }
  return hasQuads;
});
var $d_Ltrivalibs_graphics_geometry_Mesh = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Mesh, "trivalibs.graphics.geometry.Mesh", ({
  dV: 1
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
$p.mb = (function(faces, normal, section, evidence$1) {
  var m = new $c_Ltrivalibs_graphics_geometry_Mesh(evidence$1);
  $m_Ltrivalibs_graphics_geometry_mesh$package$().nl(m, faces, normal, section, evidence$1);
  return m;
});
var $d_Ltrivalibs_graphics_geometry_Mesh$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Mesh$, "trivalibs.graphics.geometry.Mesh$", ({
  dW: 1
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
  this.gH = null;
  this.gG = 0.0;
  this.gH = normal;
  this.gG = d;
}
$p = $c_Ltrivalibs_graphics_geometry_Plane.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Plane;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Plane() {
}
$h_Ltrivalibs_graphics_geometry_Plane.prototype = $p;
$p.pk = (function() {
  var a = this.gH.w;
  var b = this.gH.z;
  var c = this.gH.x;
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4((1.0 - ((2.0 * a) * a)), (((-2.0) * a) * b), (((-2.0) * a) * c), 0.0, (((-2.0) * a) * b), (1.0 - ((2.0 * b) * b)), (((-2.0) * b) * c), 0.0, (((-2.0) * a) * c), (((-2.0) * b) * c), (1.0 - ((2.0 * c) * c)), 0.0, ((2.0 * a) * this.gG), ((2.0 * b) * this.gG), ((2.0 * c) * this.gG), 1.0);
});
var $d_Ltrivalibs_graphics_geometry_Plane = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Plane, "trivalibs.graphics.geometry.Plane", ({
  dX: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Plane$() {
  this.kV = null;
  $n_Ltrivalibs_graphics_geometry_Plane$ = this;
  this.kV = new $c_Ltrivalibs_graphics_geometry_Plane(new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0), 0.0);
}
$p = $c_Ltrivalibs_graphics_geometry_Plane$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Plane$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Plane$() {
}
$h_Ltrivalibs_graphics_geometry_Plane$.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_Plane$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Plane$, "trivalibs.graphics.geometry.Plane$", ({
  dY: 1
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
  this.nb = 0;
  this.nc = 0;
  this.nb = faceIndex;
  this.nc = vertexSlot;
}
$p = $c_Ltrivalibs_graphics_geometry_PositionFaceRef.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_PositionFaceRef;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_PositionFaceRef() {
}
$h_Ltrivalibs_graphics_geometry_PositionFaceRef.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_PositionFaceRef = new $TypeData().i($c_Ltrivalibs_graphics_geometry_PositionFaceRef, "trivalibs.graphics.geometry.PositionFaceRef", ({
  e0: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexPosition(position, faces) {
  this.nd = null;
  this.kY = null;
  this.nd = position;
  this.kY = faces;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexPosition.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexPosition;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexPosition() {
}
$h_Ltrivalibs_graphics_geometry_VertexPosition.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_VertexPosition = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexPosition, "trivalibs.graphics.geometry.VertexPosition", ({
  e5: 1
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
$p.mQ = (function(idxBuf, vertexCount) {
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
  e6: 1
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
$p.nl = (function(m, faces, normal, section, evidence$1) {
  var i = 0;
  while ((i < (faces.length | 0))) {
    m.nk(faces[i], normal, section);
    i = ((1 + i) | 0);
  }
});
var $d_Ltrivalibs_graphics_geometry_mesh$package$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_mesh$package$, "trivalibs.graphics.geometry.mesh$package$", ({
  e7: 1
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
$p.pi = (function(v) {
  return (((($doubleToInt((10000.0 * v.w)) + ",") + $doubleToInt((10000.0 * v.z))) + ",") + $doubleToInt((10000.0 * v.x)));
});
var $d_Ltrivalibs_graphics_geometry_package$package$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_package$package$, "trivalibs.graphics.geometry.package$package$", ({
  e8: 1
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
$p.bi = (function(tl, bl, br, tr) {
  return [tl, bl, br, tr];
});
$p.pH = (function(q, evidence$1) {
  return q[0];
});
$p.nE = (function(q, evidence$1) {
  return q[1];
});
$p.nG = (function(q, evidence$1) {
  return q[2];
});
$p.pK = (function(q, evidence$1) {
  return q[3];
});
$p.jM = (function(q, evidence$1) {
  var a = evidence$1.bk(this.pH(q, evidence$1));
  var b = evidence$1.bk(this.nE(q, evidence$1));
  var c = evidence$1.bk(this.nG(q, evidence$1));
  var d = evidence$1.bk(this.pK(q, evidence$1));
  var d1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((c.w - a.w), (c.z - a.z), (c.x - a.x));
  var d2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((d.w - b.w), (d.z - b.z), (d.x - b.x));
  return $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a6(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a6(), d1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), d2), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
});
var $d_Ltrivalibs_graphics_geometry_polygon$package$Quad$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_polygon$package$Quad$, "trivalibs.graphics.geometry.polygon$package$Quad$", ({
  ea: 1
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
$p.nj = (function(tri, evidence$1) {
  return tri[0];
});
$p.nz = (function(tri, evidence$1) {
  return tri[1];
});
$p.nH = (function(tri, evidence$1) {
  return tri[2];
});
$p.jM = (function(tri, evidence$1) {
  var pa = evidence$1.bk(this.nj(tri, evidence$1));
  var pb = evidence$1.bk(this.nz(tri, evidence$1));
  var pc = evidence$1.bk(this.nH(tri, evidence$1));
  var e1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((pb.w - pa.w), (pb.z - pa.z), (pb.x - pa.x));
  var e2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((pc.w - pa.w), (pc.z - pa.z), (pc.x - pa.x));
  return $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a6(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a6(), e1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), e2), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
});
var $d_Ltrivalibs_graphics_geometry_polygon$package$Triangle$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_polygon$package$Triangle$, "trivalibs.graphics.geometry.polygon$package$Triangle$", ({
  eb: 1
}));
var $n_Ltrivalibs_graphics_geometry_polygon$package$Triangle$;
function $m_Ltrivalibs_graphics_geometry_polygon$package$Triangle$() {
  if ((!$n_Ltrivalibs_graphics_geometry_polygon$package$Triangle$)) {
    $n_Ltrivalibs_graphics_geometry_polygon$package$Triangle$ = new $c_Ltrivalibs_graphics_geometry_polygon$package$Triangle$();
  }
  return $n_Ltrivalibs_graphics_geometry_polygon$package$Triangle$;
}
function $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($thiz, fovY, aspect, near, far) {
  var x = (0.5 * fovY);
  var f = (1.0 / (+Math.tan(x)));
  var rInv = (1.0 / (near - far));
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4((f / aspect), 0.0, 0.0, 0.0, 0.0, f, 0.0, 0.0, 0.0, 0.0, (far * rInv), (-1.0), 0.0, 0.0, ((near * far) * rInv), 0.0);
}
function $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($thiz, m, x$2, other) {
  var a00 = (+x$2.hc(m));
  var a01 = (+x$2.hd(m));
  var a02 = (+x$2.he(m));
  var a03 = (+x$2.hf(m));
  var a10 = (+x$2.hg(m));
  var a11 = (+x$2.hh(m));
  var a12 = (+x$2.hi(m));
  var a13 = (+x$2.hj(m));
  var a20 = (+x$2.hk(m));
  var a21 = (+x$2.hl(m));
  var a22 = (+x$2.hm(m));
  var a23 = (+x$2.hn(m));
  var a30 = (+x$2.ho(m));
  var a31 = (+x$2.hp(m));
  var a32 = (+x$2.hq(m));
  var a33 = (+x$2.hr(m));
  var b00 = (+x$2.hc(other));
  var b01 = (+x$2.hd(other));
  var b02 = (+x$2.he(other));
  var b03 = (+x$2.hf(other));
  var b10 = (+x$2.hg(other));
  var b11 = (+x$2.hh(other));
  var b12 = (+x$2.hi(other));
  var b13 = (+x$2.hj(other));
  var b20 = (+x$2.hk(other));
  var b21 = (+x$2.hl(other));
  var b22 = (+x$2.hm(other));
  var b23 = (+x$2.hn(other));
  var b30 = (+x$2.ho(other));
  var b31 = (+x$2.hp(other));
  var b32 = (+x$2.hq(other));
  var b33 = (+x$2.hr(other));
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4(((((a00 * b00) + (a10 * b01)) + (a20 * b02)) + (a30 * b03)), ((((a01 * b00) + (a11 * b01)) + (a21 * b02)) + (a31 * b03)), ((((a02 * b00) + (a12 * b01)) + (a22 * b02)) + (a32 * b03)), ((((a03 * b00) + (a13 * b01)) + (a23 * b02)) + (a33 * b03)), ((((a00 * b10) + (a10 * b11)) + (a20 * b12)) + (a30 * b13)), ((((a01 * b10) + (a11 * b11)) + (a21 * b12)) + (a31 * b13)), ((((a02 * b10) + (a12 * b11)) + (a22 * b12)) + (a32 * b13)), ((((a03 * b10) + (a13 * b11)) + (a23 * b12)) + (a33 * b13)), ((((a00 * b20) + (a10 * b21)) + (a20 * b22)) + (a30 * b23)), ((((a01 * b20) + (a11 * b21)) + (a21 * b22)) + (a31 * b23)), ((((a02 * b20) + (a12 * b21)) + (a22 * b22)) + (a32 * b23)), ((((a03 * b20) + (a13 * b21)) + (a23 * b22)) + (a33 * b23)), ((((a00 * b30) + (a10 * b31)) + (a20 * b32)) + (a30 * b33)), ((((a01 * b30) + (a11 * b31)) + (a21 * b32)) + (a31 * b33)), ((((a02 * b30) + (a12 * b31)) + (a22 * b32)) + (a32 * b33)), ((((a03 * b30) + (a13 * b31)) + (a23 * b32)) + (a33 * b33)));
}
function $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($thiz, m, x$2) {
  var a00 = (+x$2.hc(m));
  var a01 = (+x$2.hd(m));
  var a02 = (+x$2.he(m));
  var a03 = (+x$2.hf(m));
  var a10 = (+x$2.hg(m));
  var a11 = (+x$2.hh(m));
  var a12 = (+x$2.hi(m));
  var a13 = (+x$2.hj(m));
  var a20 = (+x$2.hk(m));
  var a21 = (+x$2.hl(m));
  var a22 = (+x$2.hm(m));
  var a23 = (+x$2.hn(m));
  var a30 = (+x$2.ho(m));
  var a31 = (+x$2.hp(m));
  var a32 = (+x$2.hq(m));
  var a33 = (+x$2.hr(m));
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
  mb.mA(m, (+x$4.hc(other)));
  mb.mB(m, (+x$4.hd(other)));
  mb.mC(m, (+x$4.he(other)));
  mb.mD(m, (+x$4.hf(other)));
  mb.mE(m, (+x$4.hg(other)));
  mb.mF(m, (+x$4.hh(other)));
  mb.mG(m, (+x$4.hi(other)));
  mb.mH(m, (+x$4.hj(other)));
  mb.mI(m, (+x$4.hk(other)));
  mb.mJ(m, (+x$4.hl(other)));
  mb.mK(m, (+x$4.hm(other)));
  mb.mL(m, (+x$4.hn(other)));
  mb.mM(m, (+x$4.ho(other)));
  mb.mN(m, (+x$4.hp(other)));
  mb.mO(m, (+x$4.hq(other)));
  mb.mP(m, (+x$4.hr(other)));
}
function $f_Ltrivalibs_graphics_math_Vec2MutableOps__set__O__Ltrivalibs_graphics_math_Vec2Mutable__O__Ltrivalibs_graphics_math_Vec2Base__V($thiz, v, x$2, other, x$4) {
  x$2.gq(v, (+x$4.I(other)));
  x$2.gr(v, (+x$4.B(other)));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.w + other.w), (v.z + other.z), (v.x + other.x));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, scalar) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.w * scalar), (v.z * scalar), (v.x * scalar));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__divScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, scalar) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.w / scalar), (v.z / scalar), (v.x / scalar));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3(((v.z * other.x) - (v.x * other.z)), ((v.x * other.w) - (v.w * other.x)), ((v.w * other.z) - (v.z * other.w)));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($thiz, v, x$2) {
  return $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__divScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, $f_Ltrivalibs_graphics_math_Vec3Base__length__O__D(x$2, v));
}
function $f_Ltrivalibs_graphics_math_Vec4MutableOps__set__O__Ltrivalibs_graphics_math_Vec4Mutable__O__Ltrivalibs_graphics_math_Vec4Base__V($thiz, v, x$2, other, x$4) {
  x$2.gq(v, (+x$4.I(other)));
  x$2.gr(v, (+x$4.B(other)));
  x$2.k1(v, (+x$4.an(other)));
  x$2.jV(v, (+x$4.am(other)));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat4(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  this.iM = 0.0;
  this.iN = 0.0;
  this.iO = 0.0;
  this.iP = 0.0;
  this.iQ = 0.0;
  this.iR = 0.0;
  this.iS = 0.0;
  this.iT = 0.0;
  this.iU = 0.0;
  this.iV = 0.0;
  this.iW = 0.0;
  this.iX = 0.0;
  this.iY = 0.0;
  this.iZ = 0.0;
  this.j0 = 0.0;
  this.j1 = 0.0;
  this.iM = m00;
  this.iN = m01;
  this.iO = m02;
  this.iP = m03;
  this.iQ = m10;
  this.iR = m11;
  this.iS = m12;
  this.iT = m13;
  this.iU = m20;
  this.iV = m21;
  this.iW = m22;
  this.iX = m23;
  this.iY = m30;
  this.iZ = m31;
  this.j0 = m32;
  this.j1 = m33;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat4.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat4;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat4() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat4.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Mat4 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4, "trivalibs.graphics.math.cpu.Mat4", ({
  en: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Quat(x, y, z, w) {
  this.hM = 0.0;
  this.hN = 0.0;
  this.hO = 0.0;
  this.hL = 0.0;
  this.hM = x;
  this.hN = y;
  this.hO = z;
  this.hL = w;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Quat.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Quat;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Quat() {
}
$h_Ltrivalibs_graphics_math_cpu_Quat.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Quat = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat, "trivalibs.graphics.math.cpu.Quat", ({
  eq: 1
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
$p.ob = (function(angle) {
  var h = (0.5 * angle);
  return new $c_Ltrivalibs_graphics_math_cpu_Quat((+Math.sin(h)), 0.0, 0.0, (+Math.cos(h)));
});
$p.mt = (function(angle) {
  var h = (0.5 * angle);
  return new $c_Ltrivalibs_graphics_math_cpu_Quat(0.0, (+Math.sin(h)), 0.0, (+Math.cos(h)));
});
var $d_Ltrivalibs_graphics_math_cpu_Quat$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat$, "trivalibs.graphics.math.cpu.Quat$", ({
  er: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Quat$;
function $m_Ltrivalibs_graphics_math_cpu_Quat$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Quat$)) {
    $n_Ltrivalibs_graphics_math_cpu_Quat$ = new $c_Ltrivalibs_graphics_math_cpu_Quat$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Quat$;
}
function $f_Ltrivalibs_graphics_math_cpu_QuatImmutableOps__quatMul__O__Ltrivalibs_graphics_math_Vec4Base__O__O($thiz, q, x$2, p) {
  return new $c_Ltrivalibs_graphics_math_cpu_Quat((((((+x$2.am(q)) * (+x$2.I(p))) + ((+x$2.I(q)) * (+x$2.am(p)))) + ((+x$2.B(q)) * (+x$2.an(p)))) - ((+x$2.an(q)) * (+x$2.B(p)))), (((((+x$2.am(q)) * (+x$2.B(p))) - ((+x$2.I(q)) * (+x$2.an(p)))) + ((+x$2.B(q)) * (+x$2.am(p)))) + ((+x$2.an(q)) * (+x$2.I(p)))), (((((+x$2.am(q)) * (+x$2.an(p))) + ((+x$2.I(q)) * (+x$2.B(p)))) - ((+x$2.B(q)) * (+x$2.I(p)))) + ((+x$2.an(q)) * (+x$2.am(p)))), (((((+x$2.am(q)) * (+x$2.am(p))) - ((+x$2.I(q)) * (+x$2.I(p)))) - ((+x$2.B(q)) * (+x$2.B(p)))) - ((+x$2.an(q)) * (+x$2.an(p)))));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec2(x, y) {
  this.hP = 0.0;
  this.hQ = 0.0;
  this.hP = x;
  this.hQ = y;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec2.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec2;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec2() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec2.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec2 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec2, "trivalibs.graphics.math.cpu.Vec2", ({
  ev: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec3(x, y, z) {
  this.w = 0.0;
  this.z = 0.0;
  this.x = 0.0;
  this.w = x;
  this.z = y;
  this.x = z;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec3.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec3;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec3() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec3.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec3 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3, "trivalibs.graphics.math.cpu.Vec3", ({
  ex: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec4(x, y, z, w) {
  this.j3 = 0.0;
  this.j4 = 0.0;
  this.j5 = 0.0;
  this.j2 = 0.0;
  this.j3 = x;
  this.j4 = y;
  this.j5 = z;
  this.j2 = w;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec4.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec4;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec4() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec4.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec4 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4, "trivalibs.graphics.math.cpu.Vec4", ({
  eA: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
  this.l4 = null;
  this.l5 = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$.prototype = $p;
$p.oe = (function() {
  if ((!this.l5)) {
    this.l4 = new $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18();
    this.l5 = true;
  }
  return this.l4;
});
var $d_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$, "trivalibs.graphics.math.cpu.mat4$package$Mat4Buffer$", ({
  eC: 1
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
  this.l6 = null;
  this.l7 = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$.prototype = $p;
$p.pP = (function() {
  if ((!this.l7)) {
    this.l6 = new $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$4();
    this.l7 = true;
  }
  return this.l6;
});
var $d_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$, "trivalibs.graphics.math.cpu.vec2$package$Vec2Buffer$", ({
  eF: 1
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
  this.l8 = null;
  this.l9 = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$.prototype = $p;
$p.pQ = (function() {
  if ((!this.l9)) {
    this.l8 = new $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$6();
    this.l9 = true;
  }
  return this.l8;
});
var $d_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$, "trivalibs.graphics.math.cpu.vec4$package$Vec4Buffer$", ({
  eI: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$;
function $m_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$)) {
    $n_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$ = new $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$;
}
function $ct_Ltrivalibs_graphics_math_gpu_Expr__T__($thiz, wgsl) {
  $thiz.d = wgsl;
  return $thiz;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_Expr() {
  this.d = null;
}
$p = $c_Ltrivalibs_graphics_math_gpu_Expr.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_Expr;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_Expr() {
}
$h_Ltrivalibs_graphics_math_gpu_Expr.prototype = $p;
$p.n = (function() {
  return this.d;
});
var $d_Ltrivalibs_graphics_math_gpu_Expr = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_Expr, "trivalibs.graphics.math.gpu.Expr", ({
  a1: 1
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
$p.b8 = (function() {
  return new $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$2) => $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), _$1$2))));
});
var $d_Ltrivalibs_graphics_math_gpu_LeftScalar$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_LeftScalar$, "trivalibs.graphics.math.gpu.LeftScalar$", ({
  eM: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_LeftScalar$;
function $m_Ltrivalibs_graphics_math_gpu_LeftScalar$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_LeftScalar$)) {
    $n_Ltrivalibs_graphics_math_gpu_LeftScalar$ = new $c_Ltrivalibs_graphics_math_gpu_LeftScalar$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_LeftScalar$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_expr$package$() {
  this.lb = null;
  this.lc = false;
}
$p = $c_Ltrivalibs_graphics_math_gpu_expr$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_expr$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_expr$package$() {
}
$h_Ltrivalibs_graphics_math_gpu_expr$package$.prototype = $p;
$p.az = (function(tex, uv, sampler) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("textureSample(" + tex.d) + ", ") + sampler.d) + ", ") + uv.d) + ")"));
});
$p.hv = (function(tex, uv, sampler, level) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((((("textureSampleLevel(" + tex.d) + ", ") + sampler.d) + ", ") + uv.d) + ", ") + level.d) + ")"));
});
$p.hb = (function(tex, coord) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("textureLoad(" + tex.d) + ", ") + coord.d) + ", 0)"));
});
$p.nO = (function(tex, coord) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("textureLoad(" + tex.d) + ", ") + coord.d) + ", 0)"));
});
$p.fE = (function() {
  if ((!this.lc)) {
    this.lb = new $c_Ltrivalibs_graphics_math_gpu_expr$package$$anon$2();
    this.lc = true;
  }
  return this.lb;
});
$p.pv = (function(onFalse, onTrue, cond) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("select(" + onFalse.d) + ", ") + onTrue.d) + ", ") + cond.d) + ")"));
});
$p.o8 = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.d) + " > ") + b.d) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_expr$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_expr$package$, "trivalibs.graphics.math.gpu.expr$package$", ({
  eP: 1
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
  this.ld = null;
  this.le = false;
  this.lf = null;
  this.lg = false;
  this.lj = null;
  this.lk = false;
  this.ll = null;
  this.lm = false;
  this.ln = null;
  this.lo = false;
  this.lh = null;
  this.li = false;
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$.prototype = $p;
$p.aX = (function(v) {
  var s = ("" + v);
  return (((($f_T__indexOf__I__I(s, 46) >= 0) || ($f_T__indexOf__I__I(s, 69) >= 0)) || ($f_T__indexOf__I__I(s, 101) >= 0)) ? s : (s + ".0"));
});
$p.j = (function() {
  if ((!this.le)) {
    this.ld = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1();
    this.le = true;
  }
  return this.ld;
});
$p.mw = (function() {
  if ((!this.lg)) {
    this.lf = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3();
    this.lg = true;
  }
  return this.lf;
});
$p.X = (function() {
  if ((!this.lk)) {
    this.lj = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$4();
    this.lk = true;
  }
  return this.lj;
});
$p.Y = (function() {
  if ((!this.lm)) {
    this.ll = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5();
    this.lm = true;
  }
  return this.ll;
});
$p.M = (function() {
  if ((!this.lo)) {
    this.ln = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6();
    this.lo = true;
  }
  return this.ln;
});
$p.fF = (function() {
  if ((!this.li)) {
    this.lh = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$9();
    this.li = true;
  }
  return this.lh;
});
$p.fH = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.d + ".xy"));
});
$p.q1 = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.d + ".zw"));
});
$p.fI = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.d + ".xyz"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$, "trivalibs.graphics.math.gpu.float_expr$package$", ({
  eR: 1
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
$p.bz = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("vec2<i32>(" + v.d) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_ivec2$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_ivec2$, "trivalibs.graphics.math.gpu.ivec2$", ({
  f4: 1
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
$p.ag = (function(x, y) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("vec2<f32>(" + x.d) + ", ") + y.d) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_vec2$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec2$, "trivalibs.graphics.math.gpu.vec2$", ({
  f5: 1
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
$p.az = (function(x, y, z) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("vec3<f32>(" + x.d) + ", ") + y.d) + ", ") + z.d) + ")"));
});
$p.bz = (function(scalar) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("vec3<f32>(" + scalar.d) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_vec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec3$, "trivalibs.graphics.math.gpu.vec3$", ({
  f6: 1
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
$p.nr = (function(x, y, z, w) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((((("vec4<f32>(" + x.d) + ", ") + y.d) + ", ") + z.d) + ", ") + w.d) + ")"));
});
$p.ag = (function(xyz, w) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("vec4<f32>(" + xyz.d) + ", ") + w.d) + ")"));
});
$p.az = (function(xy, z, w) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("vec4<f32>(" + xy.d) + ", ") + z.d) + ", ") + w.d) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_vec4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec4$, "trivalibs.graphics.math.gpu.vec4$", ({
  f7: 1
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
  this.t = null;
  this.t = value;
}
$p = $c_Ltrivalibs_graphics_painter_BindPair.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_BindPair;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_BindPair() {
}
$h_Ltrivalibs_graphics_painter_BindPair.prototype = $p;
var $d_Ltrivalibs_graphics_painter_BindPair = new $TypeData().i($c_Ltrivalibs_graphics_painter_BindPair, "trivalibs.graphics.painter.BindPair", ({
  f8: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_BlendState$() {
  this.lp = null;
  $n_Ltrivalibs_graphics_painter_BlendState$ = this;
  new ($a_Ltrivalibs_graphics_painter_BlendState())(new ($a_Ltrivalibs_graphics_painter_BlendFn())("src-alpha", "one-minus-src-alpha"), new ($a_Ltrivalibs_graphics_painter_BlendFn())("one", "one-minus-src-alpha"));
  this.lp = new ($a_Ltrivalibs_graphics_painter_BlendState())(new ($a_Ltrivalibs_graphics_painter_BlendFn())("src-alpha", "one"), new ($a_Ltrivalibs_graphics_painter_BlendFn())("one", "one"));
  new ($a_Ltrivalibs_graphics_painter_BlendState())(new ($a_Ltrivalibs_graphics_painter_BlendFn())("dst", "zero"), new ($a_Ltrivalibs_graphics_painter_BlendFn())("dst-alpha", "zero"));
}
$p = $c_Ltrivalibs_graphics_painter_BlendState$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_BlendState$;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_BlendState$() {
}
$h_Ltrivalibs_graphics_painter_BlendState$.prototype = $p;
var $d_Ltrivalibs_graphics_painter_BlendState$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_BlendState$, "trivalibs.graphics.painter.BlendState$", ({
  f9: 1
}));
var $n_Ltrivalibs_graphics_painter_BlendState$;
function $m_Ltrivalibs_graphics_painter_BlendState$() {
  if ((!$n_Ltrivalibs_graphics_painter_BlendState$)) {
    $n_Ltrivalibs_graphics_painter_BlendState$ = new $c_Ltrivalibs_graphics_painter_BlendState$();
  }
  return $n_Ltrivalibs_graphics_painter_BlendState$;
}
function $p_Ltrivalibs_graphics_painter_Form__uploadIndices__sjs_js_typedarray_TypedArray__V($thiz, raw) {
  if ((!(!(raw instanceof Uint16Array)))) {
    var \u03b41$___1 = raw.buffer;
    var \u03b41$___2 = (raw.length | 0);
    var \u03b41$___3 = "uint16";
  } else {
    var \u03b41$___1 = raw.buffer;
    var \u03b41$___2 = (raw.length | 0);
    var \u03b41$___3 = "uint32";
  }
  var ab = \u03b41$___1;
  var count = (\u03b41$___2 | 0);
  var fmt = \u03b41$___3;
  var $x_1 = $thiz.gI.f;
  var value = (ab.byteLength | 0);
  var buf = $x_1.createBuffer(({
    "size": value,
    "usage": 24
  }));
  $thiz.gI.aM.writeBuffer(buf, 0.0, ab);
  if (($thiz.ga !== null)) {
    var opt$proxy2 = $thiz.ga;
    opt$proxy2.destroy();
  }
  $thiz.ga = buf;
  $thiz.hR = count;
  $thiz.j8 = fmt;
}
function $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_bufferdata_BufferView__V($thiz, verts) {
  var $x_1 = $thiz.gI.f;
  var value = (verts.dv.buffer.byteLength | 0);
  var buf = $x_1.createBuffer(({
    "size": value,
    "usage": 40
  }));
  $thiz.gI.aM.writeBuffer(buf, 0.0, verts.dv.buffer);
  if (($thiz.gJ !== null)) {
    var opt$proxy4 = $thiz.gJ;
    opt$proxy4.destroy();
  }
  $thiz.gJ = buf;
  $thiz.hS = (verts.off | 0);
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Form(painter) {
  this.gI = null;
  this.gJ = null;
  this.hS = 0;
  this.ga = null;
  this.hR = 0;
  this.j8 = null;
  this.j9 = null;
  this.j7 = null;
  this.gI = painter;
  this.gJ = null;
  this.hS = 0;
  this.ga = null;
  this.hR = 0;
  this.j8 = "uint16";
  this.j9 = "triangle-list";
  this.j7 = "ccw";
}
$p = $c_Ltrivalibs_graphics_painter_Form.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Form;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Form() {
}
$h_Ltrivalibs_graphics_painter_Form.prototype = $p;
$p.pw = (function(geometry, vertices, topology, frontFace) {
  if ((topology !== (void 0))) {
    this.j9 = topology;
  }
  if ((frontFace !== (void 0))) {
    this.j7 = frontFace;
  }
  if ((geometry !== (void 0))) {
    $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_bufferdata_BufferView__V(this, geometry.kU);
    if ((geometry.iK !== null)) {
      $p_Ltrivalibs_graphics_painter_Form__uploadIndices__sjs_js_typedarray_TypedArray__V(this, geometry.iK);
    }
  }
  if ((vertices !== (void 0))) {
    $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_bufferdata_BufferView__V(this, vertices);
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Form = new $TypeData().i($c_Ltrivalibs_graphics_painter_Form, "trivalibs.graphics.painter.Form", ({
  fa: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter) {
  this.hT = null;
  this.hT = [];
}
$p = $c_Ltrivalibs_graphics_painter_InstanceList.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_InstanceList;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_InstanceList() {
}
$h_Ltrivalibs_graphics_painter_InstanceList.prototype = $p;
$p.C = (function() {
  return (this.hT.length | 0);
});
var $d_Ltrivalibs_graphics_painter_InstanceList = new $TypeData().i($c_Ltrivalibs_graphics_painter_InstanceList, "trivalibs.graphics.painter.InstanceList", ({
  fb: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_LayerBindCache(panelId, epoch, valueGroup, panelGroup) {
  this.lr = 0;
  this.lq = 0;
  this.jd = null;
  this.jc = null;
  this.lr = panelId;
  this.lq = epoch;
  this.jd = valueGroup;
  this.jc = panelGroup;
}
$p = $c_Ltrivalibs_graphics_painter_LayerBindCache.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_LayerBindCache;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_LayerBindCache() {
}
$h_Ltrivalibs_graphics_painter_LayerBindCache.prototype = $p;
var $d_Ltrivalibs_graphics_painter_LayerBindCache = new $TypeData().i($c_Ltrivalibs_graphics_painter_LayerBindCache, "trivalibs.graphics.painter.LayerBindCache", ({
  fd: 1
}));
function $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var w = $thiz.pU();
  var h = $thiz.ip();
  panel.nZ(w, h);
  var msaa = panel.gg;
  var encoder = $thiz.f.createCommandEncoder();
  var panelFormats = panel.jI();
  var colorAttachments = [];
  var t = 0;
  while ((t < panel.pG())) {
    if ((panel.i0 !== null)) {
      matchResult6: {
        var \u03b412$;
        var x18 = panel.i0;
        if ((x18 !== null)) {
          var x19 = $f_s_Product4__productElement__I__O(x18, 0);
          var x20 = $f_s_Product4__productElement__I__O(x18, 1);
          var x21 = $f_s_Product4__productElement__I__O(x18, 2);
          var x22 = $f_s_Product4__productElement__I__O(x18, 3);
          var \u03b412$ = x18;
          break matchResult6;
        }
        throw new $c_s_MatchError(x18);
      }
      var r$2 = (+\u03b412$.eQ);
      var g$2 = (+\u03b412$.bm);
      var b$2 = (+\u03b412$.bn);
      var a$2 = (+\u03b412$.bo);
      if (msaa) {
        var _2 = panel.mS(t);
        var TextureViewBundle_this = panel.a4[t];
        var _2$1 = TextureViewBundle_this.aN[0];
        var _2$2 = ({
          "r": r$2,
          "g": g$2,
          "b": b$2,
          "a": a$2
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
        var _2$3 = TextureViewBundle_this$2.aN[0];
        var _2$4 = ({
          "r": r$2,
          "g": g$2,
          "b": b$2,
          "a": a$2
        });
        var attachment = ({
          "view": _2$3,
          "loadOp": "clear",
          "storeOp": "store",
          "clearValue": _2$4
        });
      }
    } else if (msaa) {
      var _2$5 = panel.mS(t);
      var TextureViewBundle_this$3 = panel.a4[t];
      var _2$6 = TextureViewBundle_this$3.aN[0];
      var attachment = ({
        "view": _2$5,
        "resolveTarget": _2$6,
        "loadOp": "load",
        "storeOp": "store"
      });
    } else {
      var TextureViewBundle_this$4 = panel.a4[t];
      var _2$7 = TextureViewBundle_this$4.aN[0];
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
  if (panel.gR) {
    var _2$8 = panel.mm();
    passDesc.depthStencilAttachment = ({
      "view": _2$8,
      "depthLoadOp": "clear",
      "depthStoreOp": "store",
      "depthClearValue": 1.0
    });
  }
  var shapePass = encoder.beginRenderPass(passDesc);
  var i = 0;
  while ((i < (panel.i1.length | 0))) {
    $p_Ltrivalibs_graphics_painter_Painter__renderShapeOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shape__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_Panel__V($thiz, shapePass, panel.i1[i], panel.gR, msaa, panelFormats, panel);
    i = ((1 + i) | 0);
  }
  shapePass.end();
  $thiz.aM.submit([encoder.finish()]);
  if (panel.gO) {
    $p_Ltrivalibs_graphics_painter_Painter__resolvePanelDepth__Ltrivalibs_graphics_painter_Panel__V($thiz, panel);
  }
  var curEncoder = null;
  var curPass = null;
  var j = 0;
  while ((j < (panel.bx.length | 0))) {
    var layer = panel.bx[j];
    var needsPingPong = layer.mg();
    if ((layer.gK >= 0)) {
      if ((curPass !== null)) {
        curPass.end();
        $thiz.aM.submit([curEncoder.finish()]);
        curPass = null;
      }
      var mipDstView = panel.a4[0].aN[layer.gK];
      var mipSrcView = ((layer.hU >= 0) ? panel.a4[0].aN[layer.hU] : panel.iv());
      var enc = $thiz.f.createCommandEncoder();
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
      $thiz.aM.submit([enc.finish()]);
    } else if (needsPingPong) {
      if ((curPass !== null)) {
        curPass.end();
        $thiz.aM.submit([curEncoder.finish()]);
        curPass = null;
      }
      var enc$2 = $thiz.f.createCommandEncoder();
      var _2$10 = panel.ph();
      var _2$11 = [({
        "view": _2$10,
        "loadOp": "load",
        "storeOp": "store"
      })];
      var ppPass = enc$2.beginRenderPass(({
        "colorAttachments": _2$11
      }));
      $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V($thiz, ppPass, layer, false, false, panelFormats, panel.iv(), panel);
      ppPass.end();
      $thiz.aM.submit([enc$2.finish()]);
      panel.pE();
    } else {
      if ((curPass === null)) {
        curEncoder = $thiz.f.createCommandEncoder();
        var $x_1 = curEncoder;
        var _2$12 = panel.iv();
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
    $thiz.aM.submit([curEncoder.finish()]);
  }
  var hasMipTargetLayers = false;
  var mi = 0;
  while ((mi < (panel.bx.length | 0))) {
    if ((panel.bx[mi].gK >= 0)) {
      hasMipTargetLayers = true;
    }
    mi = ((1 + mi) | 0);
  }
  if (((panel.jL() > 1) && (!hasMipTargetLayers))) {
    $p_Ltrivalibs_graphics_painter_Painter__generateMipmaps__Ltrivalibs_graphics_painter_Panel__V($thiz, panel);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__blitSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz) {
  if ((!$thiz.lx)) {
    $thiz.lw = $thiz.f.createSampler(({
      "magFilter": "nearest",
      "minFilter": "nearest"
    }));
    $thiz.lx = true;
  }
  return $thiz.lw;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz) {
  if ((!$thiz.lt)) {
    var $x_2 = $thiz.f;
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
    $thiz.ls = $x_1;
    $thiz.lt = true;
  }
  return $thiz.ls;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitPipeline__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz) {
  if ((!$thiz.lv)) {
    var module = $thiz.f.createShaderModule(({
      "code": "\nstruct VsOut {\n  @builtin(position) pos: vec4f,\n  @location(0) uv: vec2f,\n}\n\n@vertex\nfn vs_main(@builtin(vertex_index) vi: u32) -> VsOut {\n  let x = f32((vi << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(vi & 2u) * 2.0 - 1.0;\n  var out: VsOut;\n  out.pos = vec4f(x, y, 0.0, 1.0);\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  return out;\n}\n\n@group(0) @binding(0) var blit_texture: texture_2d<f32>;\n@group(0) @binding(1) var blit_sampler: sampler;\n\n@fragment\nfn fs_main(in: VsOut) -> @location(0) vec4f {\n  return textureSample(blit_texture, blit_sampler, in.uv);\n}\n"
    }));
    var $x_1 = $thiz.f;
    var _2 = [$p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz)];
    var pipelineLayout = $x_1.createPipelineLayout(({
      "bindGroupLayouts": _2
    }));
    var $x_3 = $thiz.f;
    var _2$1 = ({
      "module": module,
      "entryPoint": "vs_main"
    });
    var f$proxy4 = $thiz.gd;
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
    $thiz.lu = $x_2;
    $thiz.lv = true;
  }
  return $thiz.lu;
}
function $p_Ltrivalibs_graphics_painter_Painter__depthResolveBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz) {
  if ((!$thiz.lA)) {
    var $x_2 = $thiz.f;
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
    $thiz.lz = $x_1;
    $thiz.lA = true;
  }
  return $thiz.lz;
}
function $p_Ltrivalibs_graphics_painter_Painter__depthResolvePipeline__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz) {
  if ((!$thiz.lC)) {
    var module = $thiz.f.createShaderModule(({
      "code": "\n@group(0) @binding(0) var ms_depth: texture_depth_multisampled_2d;\n\n@vertex\nfn vs_main(@builtin(vertex_index) vi: u32) -> @builtin(position) vec4f {\n  let x = f32((vi << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(vi & 2u) * 2.0 - 1.0;\n  return vec4f(x, y, 0.0, 1.0);\n}\n\n@fragment\nfn fs_main(@builtin(position) pos: vec4f) -> @builtin(frag_depth) f32 {\n  return textureLoad(ms_depth, vec2i(pos.xy), 0);\n}\n"
    }));
    var $x_1 = $thiz.f;
    var _2 = [$p_Ltrivalibs_graphics_painter_Painter__depthResolveBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz)];
    var pl = $x_1.createPipelineLayout(({
      "bindGroupLayouts": _2
    }));
    var $x_3 = $thiz.f;
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
    $thiz.lB = $x_2;
    $thiz.lC = true;
  }
  return $thiz.lB;
}
function $p_Ltrivalibs_graphics_painter_Painter__resolvePanelDepth__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var encoder = $thiz.f.createCommandEncoder();
  var _2 = [];
  var _2$1 = panel.pq();
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
  var $x_1 = $thiz.f;
  var _2$3 = $p_Ltrivalibs_graphics_painter_Painter__depthResolveBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz);
  var _2$4 = panel.mm();
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
  $thiz.aM.submit([encoder.finish()]);
}
function $p_Ltrivalibs_graphics_painter_Painter__mipBlitSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz) {
  if ((!$thiz.lE)) {
    $thiz.lD = $thiz.f.createSampler(({
      "magFilter": "linear",
      "minFilter": "linear"
    }));
    $thiz.lE = true;
  }
  return $thiz.lD;
}
function $p_Ltrivalibs_graphics_painter_Painter__getMipBlitPipeline__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, format) {
  if ((!(!(!(!$thiz.hV.hasOwnProperty(format)))))) {
    return $thiz.hV[format];
  } else {
    var module = $thiz.f.createShaderModule(({
      "code": "\nstruct VsOut {\n  @builtin(position) pos: vec4f,\n  @location(0) uv: vec2f,\n}\n\n@vertex\nfn vs_main(@builtin(vertex_index) vi: u32) -> VsOut {\n  let x = f32((vi << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(vi & 2u) * 2.0 - 1.0;\n  var out: VsOut;\n  out.pos = vec4f(x, y, 0.0, 1.0);\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  return out;\n}\n\n@group(0) @binding(0) var blit_texture: texture_2d<f32>;\n@group(0) @binding(1) var blit_sampler: sampler;\n\n@fragment\nfn fs_main(in: VsOut) -> @location(0) vec4f {\n  return textureSample(blit_texture, blit_sampler, in.uv);\n}\n"
    }));
    var $x_1 = $thiz.f;
    var _2 = [$p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz)];
    var pl = $x_1.createPipelineLayout(({
      "bindGroupLayouts": _2
    }));
    var $x_2 = $thiz.f;
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
    $thiz.hV[format] = p;
    return p;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__generateMipmaps__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var mipCount = panel.jL();
  if ((mipCount <= 1)) {
    return (void 0);
  }
  var fmt = (((panel.fx.length | 0) > 0) ? panel.fx[0] : $thiz.gd);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getMipBlitPipeline__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, fmt);
  var i = 1;
  while ((i < mipCount)) {
    var srcView = panel.a4[0].aN[((i - 1) | 0)];
    var dstView = panel.a4[0].aN[i];
    var encoder = $thiz.f.createCommandEncoder();
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
    var $x_1 = $thiz.f;
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
    $thiz.aM.submit([encoder.finish()]);
    i = ((1 + i) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, bindings, panelBindings) {
  $thiz.aG.length = (bindings.length | 0);
  var i = 0;
  while ((i < (bindings.length | 0))) {
    $thiz.aG[i] = bindings[i];
    i = ((1 + i) | 0);
  }
  $thiz.aj.length = (panelBindings.length | 0);
  var j = 0;
  while ((j < (panelBindings.length | 0))) {
    $thiz.aj[j] = panelBindings[j];
    j = ((1 + j) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shade, workBindings, workPanelBindings) {
  var dict = panel.gT;
  var keys = Object.keys(dict);
  var i = 0;
  while ((i < (keys.length | 0))) {
    var name = keys[i];
    var value = dict[name];
    if ((!(!(!(!shade.J.hasOwnProperty(name)))))) {
      var idx = (shade.J[name] | 0);
      if (((idx >= (workBindings.length | 0)) || (workBindings[idx] === null))) {
        while (((workBindings.length | 0) <= idx)) {
          workBindings.push(null);
        }
        workBindings[idx] = value;
      }
    } else if ((!(!(!(!shade.aC.hasOwnProperty(name)))))) {
      var idx$2 = (shade.aC[name] | 0);
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
  while ((i < (inst.mh().length | 0))) {
    if ((inst.mh()[i] !== null)) {
      while (((workBindings.length | 0) <= i)) {
        workBindings.push(null);
      }
      workBindings[i] = inst.mh()[i];
    }
    i = ((1 + i) | 0);
  }
  var j = 0;
  while ((j < (inst.mU().length | 0))) {
    if ((inst.mU()[j] !== null)) {
      while (((workPanelBindings.length | 0) <= j)) {
        workPanelBindings.push(null);
      }
      workPanelBindings[j] = inst.mU()[j];
    }
    j = ((1 + j) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel) {
  return ((panel !== null) && ((Object.keys(panel.gT).length | 0) > 0));
}
function $p_Ltrivalibs_graphics_painter_Painter__buildValueBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, shade, bindings) {
  if ((((bindings.length | 0) > 0) && (shade.jf !== null))) {
    var entries = [];
    var i = 0;
    while ((i < (bindings.length | 0))) {
      var b = bindings[i];
      if ((b !== null)) {
        entries.push($p_Ltrivalibs_graphics_painter_Painter__bindingEntry__I__O__sjs_js_Dynamic($thiz, i, b));
      }
      i = ((1 + i) | 0);
    }
    var $x_1 = $thiz.f;
    var _2 = shade.jf;
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
  if ((shade.i4 !== null)) {
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
        var view = ((!(!pb.depth)) ? pb.panel.nN() : (((pb.mipLevel | 0) < 0) ? pb.panel.a4[(pb.index | 0)].lJ : pb.panel.a4[(pb.index | 0)].aN[(pb.mipLevel | 0)]));
        var value = k;
        entries.push(({
          "binding": value,
          "resource": view
        }));
      }
      k = ((1 + k) | 0);
    }
    if (((entries.length | 0) > 0)) {
      var $x_1 = $thiz.f;
      var _2 = shade.i4;
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
  var fmts = ((formats !== null) ? formats : [$thiz.gd]);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, shape.a0, shape.jh, fmts, depthTest, multisample, shape.aS.j9, shape.ji, shape.aS.j7);
  pass.setPipeline(pipeline);
  pass.setVertexBuffer(0, shape.aS.gJ);
  var opt$proxy8 = shape.aS.ga;
  var hasIndex = (opt$proxy8 !== null);
  if (hasIndex) {
    pass.setIndexBuffer(shape.aS.ga, shape.aS.j8);
  }
  var instanceCount = shape.jj.C();
  var hasPanelBinds = $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel);
  if ((instanceCount === 0)) {
    if (hasPanelBinds) {
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, shape.Q, shape.a8);
      $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shape.a0, $thiz.aG, $thiz.aj);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.a0, $thiz.aG);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.a0, $thiz.aj, null);
    } else {
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.a0, shape.Q);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.a0, shape.a8, null);
    }
    if (hasIndex) {
      pass.drawIndexed(shape.aS.hR);
    } else {
      pass.draw(shape.aS.hS);
    }
  } else {
    var i = 0;
    while ((i < instanceCount)) {
      var inst = shape.jj.hT[i];
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, shape.Q, shape.a8);
      if (hasPanelBinds) {
        $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shape.a0, $thiz.aG, $thiz.aj);
      }
      $p_Ltrivalibs_graphics_painter_Painter__applyInstanceBindings__Ltrivalibs_graphics_painter_Instance__sjs_js_Array__sjs_js_Array__V($thiz, inst, $thiz.aG, $thiz.aj);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.a0, $thiz.aG);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.a0, $thiz.aj, null);
      if (hasIndex) {
        pass.drawIndexed(shape.aS.hR);
      } else {
        pass.draw(shape.aS.hS);
      }
      i = ((1 + i) | 0);
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V($thiz, pass, layer, depthTest, multisample, formats, srcView, panel) {
  var fmts = ((formats !== null) ? formats : [$thiz.gd]);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, layer.y, layer.ja, fmts, depthTest, multisample, "triangle-list", "none", "ccw");
  pass.setPipeline(pipeline);
  var instanceCount = layer.jb.C();
  var hasPanelBinds = $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel);
  if ((instanceCount === 0)) {
    if (hasPanelBinds) {
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, layer.i, layer.U);
      $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, layer.y, $thiz.aG, $thiz.aj);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, layer.y, $thiz.aG);
      var effectiveSrcView = (((($thiz.aj.length | 0) > 0) && ($thiz.aj[0] !== null)) ? null : srcView);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer.y, $thiz.aj, effectiveSrcView);
    } else {
      var c = layer.L;
      if (((((c !== null) && (panel !== null)) && (c.lr === panel.je)) && (c.lq === panel.fw))) {
        if ((c.jd !== null)) {
          pass.setBindGroup(0, c.jd);
        }
        if ((c.jc !== null)) {
          pass.setBindGroup(1, c.jc);
        }
      } else {
        var vg = $p_Ltrivalibs_graphics_painter_Painter__buildValueBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, layer.y, layer.i);
        var pg = $p_Ltrivalibs_graphics_painter_Painter__buildPanelBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, layer.y, layer.U, srcView);
        if ((vg !== null)) {
          pass.setBindGroup(0, vg);
        }
        if ((pg !== null)) {
          pass.setBindGroup(1, pg);
        }
        layer.L = ((panel !== null) ? new $c_Ltrivalibs_graphics_painter_LayerBindCache(panel.je, panel.fw, vg, pg) : null);
      }
    }
    pass.draw(3);
  } else {
    var i = 0;
    while ((i < instanceCount)) {
      var inst = layer.jb.hT[i];
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, layer.i, layer.U);
      if (hasPanelBinds) {
        $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, layer.y, $thiz.aG, $thiz.aj);
      }
      $p_Ltrivalibs_graphics_painter_Painter__applyInstanceBindings__Ltrivalibs_graphics_painter_Instance__sjs_js_Array__sjs_js_Array__V($thiz, inst, $thiz.aG, $thiz.aj);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, layer.y, $thiz.aG);
      var effectiveSrcView$2 = (((($thiz.aj.length | 0) > 0) && ($thiz.aj[0] !== null)) ? null : srcView);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer.y, $thiz.aj, effectiveSrcView$2);
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
function $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, shade, blendState, formats, depthTest, multisample, topology, cullMode, frontFace) {
  var key = ((((((((((((((shade.lH + "|") + $p_Ltrivalibs_graphics_painter_Painter__blendKeyStr__Ltrivalibs_graphics_painter_BlendState__T($thiz, blendState)) + "|") + formats.join(",")) + "|") + depthTest) + "|") + multisample) + "|") + topology) + "|") + cullMode) + "|") + frontFace);
  if ((!(!(!(!$thiz.hW.hasOwnProperty(key)))))) {
    return $thiz.hW[key];
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
    if ((shade.jg !== null)) {
      var _2 = shade.i5;
      var _2$1 = [shade.jg];
      var vertexDescriptor = ({
        "module": _2,
        "entryPoint": "vs_main",
        "buffers": _2$1
      });
    } else {
      var _2$2 = shade.i5;
      var vertexDescriptor = ({
        "module": _2$2,
        "entryPoint": "vs_main"
      });
    }
    var _2$3 = shade.lI;
    var _2$4 = shade.i5;
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
    var p = $thiz.f.createRenderPipeline(desc);
    $thiz.hW[key] = p;
    return p;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__bindingEntry__I__O__sjs_js_Dynamic($thiz, i, b) {
  if ((b instanceof $c_Ltrivalibs_graphics_buffers_BufferBinding)) {
    var _2 = b.K;
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
  this.f = null;
  this.aM = null;
  this.gc = null;
  this.ly = null;
  this.gd = null;
  this.hW = null;
  this.q = 0;
  this.hX = null;
  this.lF = null;
  this.lG = false;
  this.lw = null;
  this.lx = false;
  this.ls = null;
  this.lt = false;
  this.lu = null;
  this.lv = false;
  this.lz = null;
  this.lA = false;
  this.lB = null;
  this.lC = false;
  this.lD = null;
  this.lE = false;
  this.hV = null;
  this.aG = null;
  this.aj = null;
  this.f = device;
  this.aM = queue;
  this.gc = canvas;
  this.ly = context;
  this.gd = preferredFormat;
  this.hW = ({});
  this.q = 0;
  this.hX = [];
  this.hV = ({});
  this.aG = [];
  this.aj = [];
}
$p = $c_Ltrivalibs_graphics_painter_Painter.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Painter;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Painter() {
}
$h_Ltrivalibs_graphics_painter_Painter.prototype = $p;
$p.pa = (function(cb) {
  this.hX.push(cb);
  cb.b7((this.gc.width | 0), (this.gc.height | 0));
});
$p.o5 = (function(w, h) {
  var k = 0;
  while ((k < (this.hX.length | 0))) {
    this.hX[k].b7(w, h);
    k = ((1 + k) | 0);
  }
});
$p.pU = (function() {
  return (this.gc.width | 0);
});
$p.ip = (function() {
  return (this.gc.height | 0);
});
$p.ps = (function(magFilter, minFilter, mipmapFilter, addressMode, addressModeU, addressModeV) {
  var $x_1 = this.f;
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
$p.jN = (function() {
  if ((!this.lG)) {
    this.lF = this.ps("linear", "linear", "linear", "clamp-to-edge", (void 0), (void 0));
    this.lG = true;
  }
  return this.lF;
});
$p.mr = (function(geometry, vertices, topology, frontFace) {
  return new $c_Ltrivalibs_graphics_painter_Form(this).pw(geometry, vertices, topology, frontFace);
});
$p.hx = (function(form, shade, cullMode, blendState) {
  return new $c_Ltrivalibs_graphics_painter_Shape(this, form, shade).py(cullMode, blendState);
});
$p.bj = (function(shade, blendState, mipSource, mipTarget) {
  return new $c_Ltrivalibs_graphics_painter_Layer(this, shade).px(blendState, mipSource, mipTarget);
});
$p.bD = (function(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers) {
  return new $c_Ltrivalibs_graphics_painter_Panel(this).it(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers);
});
$p.pA = (function(panel) {
  var encoder = this.f.createCommandEncoder();
  var swapChainView = this.ly.getCurrentTexture().createView();
  var _2 = [({
    "view": swapChainView,
    "loadOp": "load",
    "storeOp": "store"
  })];
  var pass = encoder.beginRenderPass(({
    "colorAttachments": _2
  }));
  var $x_1 = this.f;
  var _2$1 = $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout(this);
  var _2$2 = panel.iv();
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
  this.aM.submit([encoder.finish()]);
});
var $d_Ltrivalibs_graphics_painter_Painter = new $TypeData().i($c_Ltrivalibs_graphics_painter_Painter, "trivalibs.graphics.painter.Painter", ({
  fe: 1
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
$p.oj = (function(canvas) {
  var maybeGpu = $m_Ltrivalibs_graphics_painter_WebGPU$().od();
  if ((maybeGpu === (void 0))) {
    return Promise.reject(Error("WebGPU is not supported"));
  } else {
    var promise$proxy1 = maybeGpu.requestAdapter();
    var promise$proxy3 = promise$proxy1.then(((value$2) => {
      if ((value$2 === null)) {
        throw new $c_sjs_js_JavaScriptException(Error("Failed to get WebGPU adapter")).aE;
      } else {
        return value$2;
      }
    }));
    var f$proxy11 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((adapter$2) => {
      var promise$proxy2 = adapter$2.requestDevice();
      var f$proxy10 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((device$2) => {
        var queue = device$2.queue;
        var context = $m_Ltrivalibs_graphics_painter_WebGPU$().oc(canvas);
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
            painter.o5(rw, rh);
          }
        }));
        observer.observe(canvas);
        return painter;
      }));
      return promise$proxy2.then($m_sjs_js_Any$().h9(f$proxy10));
    }));
    return promise$proxy3.then($m_sjs_js_Any$().h9(f$proxy11));
  }
});
$p.oi = (function(canvas, setup) {
  var promise$proxy4 = this.oj(canvas);
  return promise$proxy4.then($m_sjs_js_Any$().h9(setup));
});
var $d_Ltrivalibs_graphics_painter_Painter$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_Painter$, "trivalibs.graphics.painter.Painter$", ({
  ff: 1
}));
var $n_Ltrivalibs_graphics_painter_Painter$;
function $m_Ltrivalibs_graphics_painter_Painter$() {
  if ((!$n_Ltrivalibs_graphics_painter_Painter$)) {
    $n_Ltrivalibs_graphics_painter_Painter$ = new $c_Ltrivalibs_graphics_painter_Painter$();
  }
  return $n_Ltrivalibs_graphics_painter_Painter$;
}
function $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V($thiz) {
  if (($thiz.gM !== null)) {
    var opt$proxy4 = $thiz.gM;
    opt$proxy4.destroy();
  }
  if (($thiz.gP !== null)) {
    var opt$proxy6 = $thiz.gP;
    opt$proxy6.destroy();
  }
  var depthUsage = ($thiz.gL ? 20 : 16);
  var $x_1 = $thiz.fy.f;
  var value = $thiz.gf;
  var value$1 = $thiz.ge;
  var _2 = ({
    "width": value,
    "height": value$1
  });
  var _2$1 = ($thiz.gg ? 4 : 1);
  var depthTex = $x_1.createTexture(({
    "size": _2,
    "format": "depth24plus",
    "usage": depthUsage,
    "sampleCount": _2$1
  }));
  $thiz.gM = depthTex;
  $thiz.hY = depthTex.createView();
  if (($thiz.gL && $thiz.gg)) {
    var $x_2 = $thiz.fy.f;
    var value$2 = $thiz.gf;
    var value$3 = $thiz.ge;
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
    $thiz.gP = resTex;
    $thiz.gQ = resTex.createView();
    $thiz.gO = true;
  } else {
    $thiz.gP = null;
    $thiz.gQ = null;
    $thiz.gO = false;
  }
}
function $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z($thiz) {
  var i = 0;
  while ((i < ($thiz.bx.length | 0))) {
    if ($thiz.bx[i].mg()) {
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
  this.fy = null;
  this.i3 = 0;
  this.i2 = 0;
  this.i0 = null;
  this.gR = false;
  this.gg = false;
  this.gS = 0;
  this.fx = null;
  this.i1 = null;
  this.bx = null;
  this.gT = null;
  this.je = 0;
  this.fw = 0;
  this.b3 = null;
  this.a4 = null;
  this.gM = null;
  this.hY = null;
  this.gL = false;
  this.gP = null;
  this.gQ = null;
  this.gO = false;
  this.gN = null;
  this.hZ = null;
  this.gf = 0;
  this.ge = 0;
  this.fy = painter;
  this.i3 = 0;
  this.i2 = 0;
  this.i0 = null;
  this.gR = false;
  this.gg = false;
  this.gS = 1;
  this.fx = [];
  this.i1 = [];
  this.bx = [];
  this.gT = ({});
  $m_Ltrivalibs_graphics_painter_panel$package$().i6 = ((1 + $m_Ltrivalibs_graphics_painter_panel$package$().i6) | 0);
  this.je = $m_Ltrivalibs_graphics_painter_panel$package$().i6;
  this.fw = 0;
  this.b3 = [];
  this.a4 = [];
  this.gM = null;
  this.hY = null;
  this.gL = false;
  this.gP = null;
  this.gQ = null;
  this.gO = false;
  this.gN = [];
  this.hZ = [];
  this.gf = 0;
  this.ge = 0;
}
$p = $c_Ltrivalibs_graphics_painter_Panel.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Panel;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Panel() {
}
$h_Ltrivalibs_graphics_painter_Panel.prototype = $p;
$p.jL = (function() {
  if ((this.gS === 0)) {
    var a = this.gf;
    var b = this.ge;
    var maxDim = ((a > b) ? a : b);
    if ((maxDim <= 0)) {
      return 1;
    } else {
      var a$1 = maxDim;
      return ((1 + $doubleToInt(((+Math.log(a$1)) / (+Math.log(2.0))))) | 0);
    }
  } else {
    return this.gS;
  }
});
$p.jI = (function() {
  return (((this.fx.length | 0) === 0) ? [this.fy.gd] : this.fx);
});
$p.pG = (function() {
  return (this.jI().length | 0);
});
$p.iv = (function() {
  var TextureViewBundle_this = this.a4[0];
  return TextureViewBundle_this.aN[0];
});
$p.ph = (function() {
  var TextureViewBundle_this = this.a4[1];
  return TextureViewBundle_this.aN[0];
});
$p.mm = (function() {
  return this.hY;
});
$p.pq = (function() {
  return this.gQ;
});
$p.mS = (function(index) {
  return this.hZ[index];
});
$p.pE = (function() {
  var t = this.b3[0];
  this.b3[0] = this.b3[1];
  this.b3[1] = t;
  var sv = this.a4[0];
  this.a4[0] = this.a4[1];
  this.a4[1] = sv;
  this.fw = ((1 + this.fw) | 0);
});
$p.nN = (function() {
  if (((!this.gL) && (this.gM !== null))) {
    this.gL = true;
    $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V(this);
  }
  return (this.gO ? this.gQ : this.hY);
});
$p.nD = (function(index, mipLevel, depth) {
  return new ($a_Ltrivalibs_graphics_painter_PanelBinding())(this, index, mipLevel, depth);
});
$p.it = (function(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers) {
  if ((width !== (void 0))) {
    var v = (width | 0);
    this.i3 = v;
  }
  if ((height !== (void 0))) {
    var v$1 = (height | 0);
    this.i2 = v$1;
  }
  if ((clearColor !== (void 0))) {
    this.i0 = clearColor;
  }
  if ((depthTest !== (void 0))) {
    var v$2 = (!(!depthTest));
    this.gR = v$2;
  }
  if ((multisample !== (void 0))) {
    var v$3 = (!(!multisample));
    this.gg = v$3;
  }
  if ((mips !== (void 0))) {
    if ((!(!mips))) {
      this.gS = 0;
    }
  }
  if ((mipLevels !== (void 0))) {
    var v$5 = (mipLevels | 0);
    if ((v$5 > 0)) {
      this.gS = v$5;
    }
  }
  var x = ((formats === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy1$1__O__O(this, format) : formats);
  if ((x !== (void 0))) {
    this.fx = x;
  }
  var x$1 = ((shapes === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy2$1__O__O(this, shape) : shapes);
  if ((x$1 !== (void 0))) {
    this.i1 = x$1;
  }
  var x$2 = ((layers === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy3$1__O__O(this, layer) : layers);
  if ((x$2 !== (void 0))) {
    this.bx = x$2;
  }
  if ((((this.fx.length | 0) > 1) && $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z(this))) {
    throw new $c_sjs_js_JavaScriptException(Error("Panel: MRT (multiple formats) cannot host auto-pong layers. Chain a single-format panel for post-processing instead.")).aE;
  }
  return this;
});
$p.nZ = (function(canvasW, canvasH) {
  var targetW = ((this.i3 === 0) ? canvasW : this.i3);
  var targetH = ((this.i2 === 0) ? canvasH : this.i2);
  if (((targetW !== this.gf) || (targetH !== this.ge))) {
    var d = 0;
    while ((d < (this.b3.length | 0))) {
      this.b3[d].destroy();
      d = ((1 + d) | 0);
    }
    d = 0;
    while ((d < (this.gN.length | 0))) {
      this.gN[d].destroy();
      d = ((1 + d) | 0);
    }
    this.gf = targetW;
    this.ge = targetH;
    var mipCount = this.jL();
    var fmts = this.jI();
    var hasPong = $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z(this);
    this.b3 = [];
    this.a4 = [];
    this.gN = [];
    this.hZ = [];
    var i = 0;
    while ((i < (fmts.length | 0))) {
      var fmt = fmts[i];
      var $x_1 = this.fy.f;
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
      this.b3.push(tex);
      this.a4.push($p_Ltrivalibs_graphics_painter_Panel__buildViews__Ltrivalibs_graphics_painter_GPUTexture__I__Ltrivalibs_graphics_painter_TextureViewBundle(this, tex, mipCount));
      if (this.gg) {
        var $x_2 = this.fy.f;
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
        this.gN.push(msaaTex);
        this.hZ.push(msaaTex.createView());
      }
      i = ((1 + i) | 0);
    }
    if (hasPong) {
      var $x_3 = this.fy.f;
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
      this.b3.push(pongTex);
      this.a4.push($p_Ltrivalibs_graphics_painter_Panel__buildViews__Ltrivalibs_graphics_painter_GPUTexture__I__Ltrivalibs_graphics_painter_TextureViewBundle(this, pongTex, mipCount));
    }
    if (this.gR) {
      $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V(this);
    }
    this.fw = ((1 + this.fw) | 0);
  }
});
var $d_Ltrivalibs_graphics_painter_Panel = new $TypeData().i($c_Ltrivalibs_graphics_painter_Panel, "trivalibs.graphics.painter.Panel", ({
  fg: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Shade(id, shaderModule, vertexBufferLayout, valueBindGroupLayout, panelBindGroupLayout, pipelineLayout, isLayer, uniformIndices, panelIndices) {
  this.lH = 0;
  this.i5 = null;
  this.jg = null;
  this.jf = null;
  this.i4 = null;
  this.lI = null;
  this.J = null;
  this.aC = null;
  this.lH = id;
  this.i5 = shaderModule;
  this.jg = vertexBufferLayout;
  this.jf = valueBindGroupLayout;
  this.i4 = panelBindGroupLayout;
  this.lI = pipelineLayout;
  this.J = uniformIndices;
  this.aC = panelIndices;
}
$p = $c_Ltrivalibs_graphics_painter_Shade.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Shade;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Shade() {
}
$h_Ltrivalibs_graphics_painter_Shade.prototype = $p;
var $d_Ltrivalibs_graphics_painter_Shade = new $TypeData().i($c_Ltrivalibs_graphics_painter_Shade, "trivalibs.graphics.painter.Shade", ({
  fh: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_TextureViewBundle(perMip, sampling) {
  this.aN = null;
  this.lJ = null;
  this.aN = perMip;
  this.lJ = sampling;
}
$p = $c_Ltrivalibs_graphics_painter_TextureViewBundle.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_TextureViewBundle;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_TextureViewBundle() {
}
$h_Ltrivalibs_graphics_painter_TextureViewBundle.prototype = $p;
var $d_Ltrivalibs_graphics_painter_TextureViewBundle = new $TypeData().i($c_Ltrivalibs_graphics_painter_TextureViewBundle, "trivalibs.graphics.painter.TextureViewBundle", ({
  fj: 1
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
$p.od = (function() {
  return window.navigator.gpu;
});
$p.oc = (function(canvas) {
  return canvas.getContext("webgpu");
});
var $d_Ltrivalibs_graphics_painter_WebGPU$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_WebGPU$, "trivalibs.graphics.painter.WebGPU$", ({
  fk: 1
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
  this.i6 = 0;
  this.i6 = 0;
}
$p = $c_Ltrivalibs_graphics_painter_panel$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_panel$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_panel$package$() {
}
$h_Ltrivalibs_graphics_painter_panel$package$.prototype = $p;
var $d_Ltrivalibs_graphics_painter_panel$package$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_panel$package$, "trivalibs.graphics.painter.panel$package$", ({
  fl: 1
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
  this.lK = null;
  this.ak = null;
  this.jk = 0.0;
  this.lL = 0.0;
  this.lK = cam;
  this.ak = in$1;
  this.jk = sensitivity;
  this.lL = speed;
}
$p = $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController() {
}
$h_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController.prototype = $p;
$p.hA = (function(tpf) {
  var dist = ((this.lL * tpf) / 1000.0);
  var forward = 0.0;
  if (((this.ak.ax.aY("KeyW") || this.ak.ax.aY("ArrowUp")) || (this.ak.jx.fB && (this.ak.ax.mV() === 1)))) {
    forward = (forward + dist);
  }
  if ((((this.ak.ax.aY("KeyS") || this.ak.ax.aY("ArrowDown")) || this.ak.ax.om(2)) || (this.ak.ax.mV() >= 2))) {
    forward = (forward - dist);
  }
  var left = 0.0;
  if ((this.ak.ax.aY("KeyA") || this.ak.ax.aY("ArrowLeft"))) {
    left = (left + dist);
  }
  if ((this.ak.ax.aY("KeyD") || this.ak.ax.aY("ArrowRight"))) {
    left = (left - dist);
  }
  var up = 0.0;
  if (this.ak.ax.aY("Space")) {
    up = (up + dist);
  }
  if ((this.ak.ax.aY("ShiftLeft") || this.ak.ax.aY("ShiftRight"))) {
    up = (up - dist);
  }
  var drag = this.ak.jw.nM();
  var deltaH = (((-(+drag.Z)) * this.jk) / 1000.0);
  var deltaV = (((-(+drag.au)) * this.jk) / 1000.0);
  this.lK.p5(forward, left, up, deltaH, deltaV);
});
var $d_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController = new $TypeData().i($c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController, "trivalibs.graphics.scene.BasicFirstPersonCameraController", ({
  fm: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_scene_PerspectiveCamera(fov, aspect, near, far, rotH, rotV, pos, proj) {
  this.gi = 0.0;
  this.gU = 0.0;
  this.gj = 0.0;
  this.gh = 0.0;
  this.aH = 0.0;
  this.bg = 0.0;
  this.aq = null;
  this.i7 = null;
  this.gi = fov;
  this.gU = aspect;
  this.gj = near;
  this.gh = far;
  this.aH = rotH;
  this.bg = rotV;
  this.aq = pos;
  this.i7 = proj;
}
$p = $c_Ltrivalibs_graphics_scene_PerspectiveCamera.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_PerspectiveCamera;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_PerspectiveCamera() {
}
$h_Ltrivalibs_graphics_scene_PerspectiveCamera.prototype = $p;
$p.jP = (function(fov, aspect, near, far, rotH, rotV, pos) {
  var needsProj = ((((fov !== this.gi) || (aspect !== this.gU)) || (near !== this.gj)) || (far !== this.gh));
  this.gi = fov;
  this.gU = aspect;
  this.gj = near;
  this.gh = far;
  if ((rotH !== this.aH)) {
    this.aH = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().jU(rotH);
  }
  if ((rotV !== this.bg)) {
    this.bg = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().jT(rotV);
  }
  this.aq = pos;
  if (needsProj) {
    this.i7 = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($m_Ltrivalibs_graphics_math_cpu_Mat4$(), fov, aspect, near, far);
  }
});
$p.p5 = (function(forward, left, up, deltaH, deltaV) {
  if ((deltaH !== 0.0)) {
    this.aH = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().jU((this.aH + deltaH));
  }
  if ((deltaV !== 0.0)) {
    this.bg = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().jT((this.bg + deltaV));
  }
  if ((up !== 0.0)) {
    this.aq = new $c_Ltrivalibs_graphics_math_cpu_Vec3(this.aq.w, (this.aq.z + up), this.aq.x);
  }
  if ((forward !== 0.0)) {
    var $x_4 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().a6();
    var $x_3 = this.aq;
    var $x_2 = $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$();
    var $x_1 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().a6();
    var p$proxy1 = this.aH;
    var x$1 = (-(+Math.sin(p$proxy1)));
    var p$proxy2 = this.aH;
    this.aq = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($x_4, $x_3, $x_2, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($x_1, new $c_Ltrivalibs_graphics_math_cpu_Vec3(x$1, 0.0, (-(+Math.cos(p$proxy2)))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), forward));
  }
  if ((left !== 0.0)) {
    var $x_9 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().a6();
    var $x_8 = this.aq;
    var $x_7 = $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$();
    var $x_6 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().a6();
    var p$proxy3 = this.aH;
    var $x_5 = Math.cos(p$proxy3);
    var p$proxy4 = this.aH;
    this.aq = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($x_9, $x_8, $x_7, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($x_6, new $c_Ltrivalibs_graphics_math_cpu_Vec3((-(+$x_5)), 0.0, (+Math.sin(p$proxy4))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), left));
  }
});
$p.pL = (function() {
  return new $c_Ltrivalibs_graphics_scene_Transform(this.aq, $f_Ltrivalibs_graphics_math_cpu_QuatImmutableOps__quatMul__O__Ltrivalibs_graphics_math_Vec4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$(), $m_Ltrivalibs_graphics_math_cpu_Quat$().mt(this.aH), $m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$(), $m_Ltrivalibs_graphics_math_cpu_Quat$().ob(this.bg)), new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0));
});
$p.n5 = (function() {
  var $x_1 = $m_Ltrivalibs_graphics_math_cpu_Mat4$().go();
  var t = this.pL();
  return $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($x_1, $m_Ltrivalibs_graphics_math_cpu_Mat4$().mu(t.lO, t.lM, t.lN), $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
});
var $d_Ltrivalibs_graphics_scene_PerspectiveCamera = new $TypeData().i($c_Ltrivalibs_graphics_scene_PerspectiveCamera, "trivalibs.graphics.scene.PerspectiveCamera", ({
  fn: 1
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
$p.jU = (function(a) {
  var r = (a % 6.283185307179586);
  return ((r < 0.0) ? (r + 6.283185307179586) : r);
});
$p.jT = (function(a) {
  return ((a < (-1.5707963267948966)) ? (-1.5707963267948966) : ((a > 1.5707963267948966) ? 1.5707963267948966 : a));
});
$p.no = (function(fov, aspect, near, far, rotH, rotV, pos) {
  var proj = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($m_Ltrivalibs_graphics_math_cpu_Mat4$(), fov, aspect, near, far);
  return new $c_Ltrivalibs_graphics_scene_PerspectiveCamera(fov, aspect, near, far, this.jU(rotH), this.jT(rotV), pos, proj);
});
var $d_Ltrivalibs_graphics_scene_PerspectiveCamera$ = new $TypeData().i($c_Ltrivalibs_graphics_scene_PerspectiveCamera$, "trivalibs.graphics.scene.PerspectiveCamera$", ({
  fo: 1
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
  this.lO = null;
  this.lM = null;
  this.lN = null;
  this.lO = translation;
  this.lM = rotation;
  this.lN = scale;
}
$p = $c_Ltrivalibs_graphics_scene_Transform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_Transform;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_Transform() {
}
$h_Ltrivalibs_graphics_scene_Transform.prototype = $p;
var $d_Ltrivalibs_graphics_scene_Transform = new $TypeData().i($c_Ltrivalibs_graphics_scene_Transform, "trivalibs.graphics.scene.Transform", ({
  fp: 1
}));
function $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($thiz, builtins) {
  var s = "";
  var i = 0;
  while ((i < (builtins.length | 0))) {
    var b = builtins[i];
    s = ((s + ((((", @builtin(" + b.ba) + ") ") + b.bl) + ": ")) + b.bb);
    i = ((1 + i) | 0);
  }
  return s;
}
function $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($thiz, structName, locNames, locTypes, builtins) {
  var array$1 = $m_sjs_js_ArrayOps$().n7($m_sjs_js_ArrayOps$().n6(locNames, new $c_sjs_js_WrappedArray(locTypes)));
  var len = (array$1.length | 0);
  var res = new Array(len);
  var i = 0;
  while ((i < len)) {
    var $x_2 = i;
    var x0 = array$1[i];
    matchResult3: {
      var $x_1;
      if ((x0 !== null)) {
        var x11 = x0.Z;
        if ((x11 !== null)) {
          var name = x11.Z;
          var typ = x11.au;
          var $x_1 = (((((("  @location(" + (x0.au | 0)) + ") ") + name) + ": ") + typ) + ",");
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
        var name$1 = x0$1.bl;
        var builtin = x0$1.ba;
        var typ$1 = x0$1.bb;
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
  var array$1 = $m_sjs_js_ArrayOps$().n7($m_sjs_js_ArrayOps$().n6(names, new $c_sjs_js_WrappedArray(types)));
  var len = (array$1.length | 0);
  var res = new Array(len);
  var i = 0;
  while ((i < len)) {
    var $x_3 = i;
    var x0 = array$1[i];
    matchResult5: {
      var $x_2;
      if ((x0 !== null)) {
        var x20 = x0.Z;
        if ((x20 !== null)) {
          var name = x20.Z;
          var typ = x20.au;
          var bindingIdx = (x0.au | 0);
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
  fs: 1
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
  ft: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_FnRegistry() {
  this.jl = null;
  this.a5 = null;
  this.jl = ({});
  this.a5 = [];
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FnRegistry() {
}
$h_Ltrivalibs_graphics_shader_dsl_FnRegistry.prototype = $p;
$p.n4 = (function(d) {
  if ((!(!(!(!(!this.jl.hasOwnProperty(d.name))))))) {
    this.jl[d.name] = true;
    var array = d.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      this.n4(array[i]);
      i = ((1 + i) | 0);
    }
    this.a5.push(d);
  }
});
var $d_Ltrivalibs_graphics_shader_dsl_FnRegistry = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FnRegistry, "trivalibs.graphics.shader.dsl.FnRegistry", ({
  fu: 1
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
$p.hz = (function(d) {
  var r = this.l;
  if ((r !== null)) {
    r.n4(d);
  }
});
var $d_Ltrivalibs_graphics_shader_dsl_FnRegistry$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FnRegistry$, "trivalibs.graphics.shader.dsl.FnRegistry$", ({
  fv: 1
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
  this.al = null;
  this.aw = null;
  this.F = null;
  this.ne = null;
  this.fz = null;
  this.al = in$1;
  this.aw = out;
  this.F = bindings;
  this.ne = textures;
  this.fz = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "in.position");
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FragmentCtx() {
}
$h_Ltrivalibs_graphics_shader_dsl_FragmentCtx.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_FragmentCtx = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FragmentCtx, "trivalibs.graphics.shader.dsl.FragmentCtx", ({
  fw: 1
}));
function $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, data) {
  if ((!(!(!(!(!$thiz.jm.hasOwnProperty(data.name))))))) {
    var dict = $thiz.jm;
    var key = data.name;
    dict[key] = true;
    var array = data.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, array[i]);
      i = ((1 + i) | 0);
    }
    $thiz.jn.push(data.src);
  }
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_LayerProgram() {
  this.a9 = null;
  this.jn = null;
  this.jm = null;
  this.a9 = "";
  this.jn = [];
  this.jm = ({});
}
$p = $c_Ltrivalibs_graphics_shader_dsl_LayerProgram.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_LayerProgram;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_LayerProgram() {
}
$h_Ltrivalibs_graphics_shader_dsl_LayerProgram.prototype = $p;
$p.aA = (function() {
  return this.jn.join("\n\n");
});
var $d_Ltrivalibs_graphics_shader_dsl_LayerProgram = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_LayerProgram, "trivalibs.graphics.shader.dsl.LayerProgram", ({
  fx: 1
}));
function $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, data) {
  if ((!(!(!(!(!$thiz.jo.hasOwnProperty(data.name))))))) {
    var dict = $thiz.jo;
    var key = data.name;
    dict[key] = true;
    var array = data.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, array[i]);
      i = ((1 + i) | 0);
    }
    $thiz.jp.push(data.src);
  }
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_Program() {
  this.b4 = null;
  this.aT = null;
  this.jp = null;
  this.jo = null;
  this.b4 = "";
  this.aT = "";
  this.jp = [];
  this.jo = ({});
}
$p = $c_Ltrivalibs_graphics_shader_dsl_Program.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_Program;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_Program() {
}
$h_Ltrivalibs_graphics_shader_dsl_Program.prototype = $p;
$p.aA = (function() {
  return this.jp.join("\n\n");
});
var $d_Ltrivalibs_graphics_shader_dsl_Program = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_Program, "trivalibs.graphics.shader.dsl.Program", ({
  fy: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(in$1, out, bindings, locals, textures) {
  this.b5 = null;
  this.aU = null;
  this.fA = null;
  this.b5 = in$1;
  this.aU = out;
  this.fA = bindings;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_VertexCtx.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_VertexCtx;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_VertexCtx() {
}
$h_Ltrivalibs_graphics_shader_dsl_VertexCtx.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_VertexCtx = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_VertexCtx, "trivalibs.graphics.shader.dsl.VertexCtx", ({
  fD: 1
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
$p.nf = (function() {
  return [];
});
var $d_Ltrivalibs_graphics_shader_dsl_WgslFnData$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_WgslFnData$, "trivalibs.graphics.shader.dsl.WgslFnData$", ({
  fG: 1
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
$p.hs = (function(fn) {
  return fn.name;
});
$p.aZ = (function(fn, ds) {
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
  ds.fD(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((d$3) => {
    if ((!(!(!(!(!seen.hasOwnProperty(d$3.name))))))) {
      seen[d$3.name] = true;
      merged.push(d$3);
    }
  })));
  return new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())(fn.name, fn.src, merged);
});
var $d_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$, "trivalibs.graphics.shader.dsl.fn$package$WgslFn$", ({
  fH: 1
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
$p.G = (function(device, bindGroupLayouts) {
  return device.createPipelineLayout(({
    "bindGroupLayouts": bindGroupLayouts
  }));
});
var $d_Ltrivalibs_graphics_shader_layouts$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_layouts$, "trivalibs.graphics.shader.layouts$", ({
  fI: 1
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
  this.lQ = null;
  this.js = null;
  $n_Ltrivalibs_graphics_shader_lib_blur_Blur$ = this;
  var names = $m_sjs_js_ArrayOpsCommon$().a(["tex"], $m_sjs_js_ArrayOpsCommon$().a(["s"], $m_sjs_js_ArrayOpsCommon$().a(["diameter"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["res"], $m_sjs_js_ArrayOpsCommon$().a(["dir"], []))))));
  var types = $m_sjs_js_ArrayOpsCommon$().a(["texture_2d<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["sampler"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []))))));
  var parts = [];
  var i = 0;
  while ((i < (names.length | 0))) {
    parts.push(((names[i] + ": ") + types[i]));
    i = ((1 + i) | 0);
  }
  var paramList = parts.join(", ");
  var src = (("fn gaussian_blur(" + paramList) + ") -> vec4<f32> {\n  let sigma = diameter * 0.25;\n  let support: i32 = i32(ceil(sigma * 1.5));\n  let offset = dir / res;\n  let exp_factor = -1.0 / (2.0 * sigma * sigma);\n  var sum = textureSample(tex, s, uv);\n  var weight_sum = 1.0;\n  var i: i32 = 1;\n  while (i <= support) {\n    let j = f32(i);\n    let w0 = exp(exp_factor * j * j);\n    let w1 = exp(exp_factor * (j + 1.0) * (j + 1.0));\n    let uv_offset = offset * (j + w1 / (w0 + w1));\n    let weight = w0 + w1;\n    sum += (textureSample(tex, s, uv + uv_offset) + textureSample(tex, s, uv - uv_offset)) * weight;\n    weight_sum += weight * 2.0;\n    i = i + 2;\n  }\n  return sum / weight_sum;\n}");
  new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("gaussian_blur", src);
  var names$2 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], $m_sjs_js_ArrayOpsCommon$().a(["s"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["res"], $m_sjs_js_ArrayOpsCommon$().a(["dir"], [])))));
  var types$2 = $m_sjs_js_ArrayOpsCommon$().a(["texture_2d<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["sampler"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], [])))));
  var parts$2 = [];
  var i$2 = 0;
  while ((i$2 < (names$2.length | 0))) {
    parts$2.push(((names$2[i$2] + ": ") + types$2[i$2]));
    i$2 = ((1 + i$2) | 0);
  }
  var paramList$2 = parts$2.join(", ");
  var src$2 = (("fn gaussian_blur_5(" + paramList$2) + ") -> vec4<f32> {\n  let off1 = vec2<f32>(1.3333333333333333) * dir / res;\n  var color = textureSample(tex, s, uv) * 0.29411764705882354;\n  color += textureSample(tex, s, uv + off1) * 0.35294117647058826;\n  color += textureSample(tex, s, uv - off1) * 0.35294117647058826;\n  return color;\n}");
  new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("gaussian_blur_5", src$2);
  var names$3 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], $m_sjs_js_ArrayOpsCommon$().a(["s"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["res"], $m_sjs_js_ArrayOpsCommon$().a(["dir"], [])))));
  var types$3 = $m_sjs_js_ArrayOpsCommon$().a(["texture_2d<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["sampler"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], [])))));
  var parts$3 = [];
  var i$3 = 0;
  while ((i$3 < (names$3.length | 0))) {
    parts$3.push(((names$3[i$3] + ": ") + types$3[i$3]));
    i$3 = ((1 + i$3) | 0);
  }
  var paramList$3 = parts$3.join(", ");
  var src$3 = (("fn gaussian_blur_9(" + paramList$3) + ") -> vec4<f32> {\n  let off1 = vec2<f32>(1.3846153846) * dir / res;\n  let off2 = vec2<f32>(3.2307692308) * dir / res;\n  var color = textureSample(tex, s, uv) * 0.2270270270;\n  color += textureSample(tex, s, uv + off1) * 0.3162162162;\n  color += textureSample(tex, s, uv - off1) * 0.3162162162;\n  color += textureSample(tex, s, uv + off2) * 0.0702702703;\n  color += textureSample(tex, s, uv - off2) * 0.0702702703;\n  return color;\n}");
  new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("gaussian_blur_9", src$3);
  var names$4 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], $m_sjs_js_ArrayOpsCommon$().a(["s"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["res"], $m_sjs_js_ArrayOpsCommon$().a(["dir"], [])))));
  var types$4 = $m_sjs_js_ArrayOpsCommon$().a(["texture_2d<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["sampler"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], [])))));
  var parts$4 = [];
  var i$4 = 0;
  while ((i$4 < (names$4.length | 0))) {
    parts$4.push(((names$4[i$4] + ": ") + types$4[i$4]));
    i$4 = ((1 + i$4) | 0);
  }
  var paramList$4 = parts$4.join(", ");
  var src$4 = (("fn gaussian_blur_13(" + paramList$4) + ") -> vec4<f32> {\n  let off1 = vec2<f32>(1.411764705882353) * dir / res;\n  let off2 = vec2<f32>(3.2941176470588234) * dir / res;\n  let off3 = vec2<f32>(5.176470588235294) * dir / res;\n  var color = textureSample(tex, s, uv) * 0.1964825501511404;\n  color += textureSample(tex, s, uv + off1) * 0.2969069646728344;\n  color += textureSample(tex, s, uv - off1) * 0.2969069646728344;\n  color += textureSample(tex, s, uv + off2) * 0.09447039785044732;\n  color += textureSample(tex, s, uv - off2) * 0.09447039785044732;\n  color += textureSample(tex, s, uv + off3) * 0.010381362401148057;\n  color += textureSample(tex, s, uv - off3) * 0.010381362401148057;\n  return color;\n}");
  new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("gaussian_blur_13", src$4);
  var names$5 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], $m_sjs_js_ArrayOpsCommon$().a(["s"], $m_sjs_js_ArrayOpsCommon$().a(["diameter"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["res"], $m_sjs_js_ArrayOpsCommon$().a(["dir"], []))))));
  var types$5 = $m_sjs_js_ArrayOpsCommon$().a(["texture_2d<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["sampler"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []))))));
  var parts$5 = [];
  var i$5 = 0;
  while ((i$5 < (names$5.length | 0))) {
    parts$5.push(((names$5[i$5] + ": ") + types$5[i$5]));
    i$5 = ((1 + i$5) | 0);
  }
  var paramList$5 = parts$5.join(", ");
  var src$5 = (("fn box_blur(" + paramList$5) + ") -> vec4<f32> {\n  let support: i32 = i32(floor(diameter * 0.5));\n  let offset = dir / res;\n  var sum = textureSample(tex, s, uv);\n  var i: i32 = 1;\n  while (i <= support) {\n    sum += textureSample(tex, s, uv + offset * f32(i)) + textureSample(tex, s, uv - offset * f32(i));\n    i = i + 1;\n  }\n  return sum / (1.0 + f32(support) * 2.0);\n}");
  new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("box_blur", src$5);
  var names$6 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], $m_sjs_js_ArrayOpsCommon$().a(["s"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["res"], $m_sjs_js_ArrayOpsCommon$().a(["radius"], [])))));
  var types$6 = $m_sjs_js_ArrayOpsCommon$().a(["texture_2d<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["sampler"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], [])))));
  var parts$6 = [];
  var i$6 = 0;
  while ((i$6 < (names$6.length | 0))) {
    parts$6.push(((names$6[i$6] + ": ") + types$6[i$6]));
    i$6 = ((1 + i$6) | 0);
  }
  var paramList$6 = parts$6.join(", ");
  var src$6 = (("fn box_blur_2d(" + paramList$6) + ") -> vec4<f32> {\n  let o = vec2<f32>(radius) / res;\n  var color = textureSample(tex, s, uv - o);\n  color += textureSample(tex, s, uv + vec2<f32>(o.x, -o.y));\n  color += textureSample(tex, s, uv + vec2<f32>(-o.x, o.y));\n  color += textureSample(tex, s, uv + o);\n  return color * 0.25;\n}");
  new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("box_blur_2d", src$6);
  var names$7 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], $m_sjs_js_ArrayOpsCommon$().a(["s"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["res"], $m_sjs_js_ArrayOpsCommon$().a(["radius"], [])))));
  var types$7 = $m_sjs_js_ArrayOpsCommon$().a(["texture_2d<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["sampler"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], [])))));
  var parts$7 = [];
  var i$7 = 0;
  while ((i$7 < (names$7.length | 0))) {
    parts$7.push(((names$7[i$7] + ": ") + types$7[i$7]));
    i$7 = ((1 + i$7) | 0);
  }
  var paramList$7 = parts$7.join(", ");
  var src$7 = (("fn tent_blur_2d(" + paramList$7) + ") -> vec4<f32> {\n  let o = vec2<f32>(radius) / res;\n  var color = textureSample(tex, s, uv) * 0.25;\n  color += (textureSample(tex, s, uv + vec2<f32>(0.0, o.y)) + textureSample(tex, s, uv + vec2<f32>(0.0, -o.y)) + textureSample(tex, s, uv + vec2<f32>(o.x, 0.0)) + textureSample(tex, s, uv + vec2<f32>(-o.x, 0.0))) * 0.125;\n  color += (textureSample(tex, s, uv + o) + textureSample(tex, s, uv + vec2<f32>(-o.x, o.y)) + textureSample(tex, s, uv + vec2<f32>(o.x, -o.y)) + textureSample(tex, s, uv - o)) * 0.0625;\n  return color;\n}");
  new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("tent_blur_2d", src$7);
  var names$8 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], $m_sjs_js_ArrayOpsCommon$().a(["s"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["radius"], []))));
  var types$8 = $m_sjs_js_ArrayOpsCommon$().a(["texture_2d<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["sampler"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], []))));
  var parts$8 = [];
  var i$8 = 0;
  while ((i$8 < (names$8.length | 0))) {
    parts$8.push(((names$8[i$8] + ": ") + types$8[i$8]));
    i$8 = ((1 + i$8) | 0);
  }
  var paramList$8 = parts$8.join(", ");
  var src$8 = (("fn box_blur_2d_auto(" + paramList$8) + ") -> vec4<f32> {\n  let o = vec2<f32>(radius) / vec2<f32>(textureDimensions(tex));\n  var color = textureSample(tex, s, uv - o);\n  color += textureSample(tex, s, uv + vec2<f32>(o.x, -o.y));\n  color += textureSample(tex, s, uv + vec2<f32>(-o.x, o.y));\n  color += textureSample(tex, s, uv + o);\n  return color * 0.25;\n}");
  this.lQ = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("box_blur_2d_auto", src$8);
  var names$9 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], $m_sjs_js_ArrayOpsCommon$().a(["s"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["radius"], []))));
  var types$9 = $m_sjs_js_ArrayOpsCommon$().a(["texture_2d<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["sampler"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], []))));
  var parts$9 = [];
  var i$9 = 0;
  while ((i$9 < (names$9.length | 0))) {
    parts$9.push(((names$9[i$9] + ": ") + types$9[i$9]));
    i$9 = ((1 + i$9) | 0);
  }
  var paramList$9 = parts$9.join(", ");
  var src$9 = (("fn tent_blur_2d_auto(" + paramList$9) + ") -> vec4<f32> {\n  let o = vec2<f32>(radius) / vec2<f32>(textureDimensions(tex));\n  var color = textureSample(tex, s, uv) * 0.25;\n  color += (textureSample(tex, s, uv + vec2<f32>(0.0, o.y)) + textureSample(tex, s, uv + vec2<f32>(0.0, -o.y)) + textureSample(tex, s, uv + vec2<f32>(o.x, 0.0)) + textureSample(tex, s, uv + vec2<f32>(-o.x, 0.0))) * 0.125;\n  color += (textureSample(tex, s, uv + o) + textureSample(tex, s, uv + vec2<f32>(-o.x, o.y)) + textureSample(tex, s, uv + vec2<f32>(o.x, -o.y)) + textureSample(tex, s, uv - o)) * 0.0625;\n  return color;\n}");
  this.js = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("tent_blur_2d_auto", src$9);
}
$p = $c_Ltrivalibs_graphics_shader_lib_blur_Blur$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_blur_Blur$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_blur_Blur$() {
}
$h_Ltrivalibs_graphics_shader_lib_blur_Blur$.prototype = $p;
var $d_Ltrivalibs_graphics_shader_lib_blur_Blur$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_blur_Blur$, "trivalibs.graphics.shader.lib.blur.Blur$", ({
  fJ: 1
}));
var $n_Ltrivalibs_graphics_shader_lib_blur_Blur$;
function $m_Ltrivalibs_graphics_shader_lib_blur_Blur$() {
  if ((!$n_Ltrivalibs_graphics_shader_lib_blur_Blur$)) {
    $n_Ltrivalibs_graphics_shader_lib_blur_Blur$ = new $c_Ltrivalibs_graphics_shader_lib_blur_Blur$();
  }
  return $n_Ltrivalibs_graphics_shader_lib_blur_Blur$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_lib_random_Simplex$() {
  this.i8 = null;
  this.i9 = null;
  this.ia = null;
  this.lR = null;
  this.lS = null;
  this.jt = null;
  this.lT = null;
  this.lU = null;
  $n_Ltrivalibs_graphics_shader_lib_random_Simplex$ = this;
  var names = $m_sjs_js_ArrayOpsCommon$().a(["x"], []);
  var types = $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], []);
  var parts = [];
  var i = 0;
  while ((i < (names.length | 0))) {
    parts.push(((names[i] + ": ") + types[i]));
    i = ((1 + i) | 0);
  }
  var paramList = parts.join(", ");
  var src = (("fn permute_3_(" + paramList) + ") -> vec3<f32> {\n  return (((x * 34.) + 1.) * x) % vec3(289.);\n}");
  this.i8 = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("permute_3_", src);
  var names$2 = $m_sjs_js_ArrayOpsCommon$().a(["x"], []);
  var types$2 = $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []);
  var parts$2 = [];
  var i$2 = 0;
  while ((i$2 < (names$2.length | 0))) {
    parts$2.push(((names$2[i$2] + ": ") + types$2[i$2]));
    i$2 = ((1 + i$2) | 0);
  }
  var paramList$2 = parts$2.join(", ");
  var src$2 = (("fn permute_4_(" + paramList$2) + ") -> vec4<f32> {\n  return ((x * 34. + 1.) * x) % vec4<f32>(289.);\n}");
  this.i9 = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("permute_4_", src$2);
  var names$3 = $m_sjs_js_ArrayOpsCommon$().a(["r"], []);
  var types$3 = $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []);
  var parts$3 = [];
  var i$3 = 0;
  while ((i$3 < (names$3.length | 0))) {
    parts$3.push(((names$3[i$3] + ": ") + types$3[i$3]));
    i$3 = ((1 + i$3) | 0);
  }
  var paramList$3 = parts$3.join(", ");
  var src$3 = (("fn taylor_inv_sqrt_4_(" + paramList$3) + ") -> vec4<f32> {\n  return 1.79284291400159 - 0.85373472095314 * r;\n}");
  this.ia = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("taylor_inv_sqrt_4_", src$3);
  var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$4 = $m_sjs_js_ArrayOpsCommon$().a(["v"], []);
  var types$4 = $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []);
  var parts$4 = [];
  var i$4 = 0;
  while ((i$4 < (names$4.length | 0))) {
    parts$4.push(((names$4[i$4] + ": ") + types$4[i$4]));
    i$4 = ((1 + i$4) | 0);
  }
  var paramList$4 = parts$4.join(", ");
  var src$4 = (("fn simplex_noise_2d(" + paramList$4) + ") -> f32 {\n\n    let C = vec4(\n        0.211324865405187,\n        0.366025403784439,\n        -0.577350269189626,\n        0.024390243902439\n    );\n    // first corner\n    var i = floor(v + dot(v, C.yy));\n    let x0 = v - i + dot(i, C.xx);\n    // other corners\n    var i1 = select(vec2(0., 1.), vec2(1., 0.), x0.x > x0.y);\n    var x12 = x0.xyxy + C.xxzz - vec4(i1, 0., 0.);\n    // permutations\n    i = i % vec2(289.);\n    let p = permute_3_(permute_3_(i.y + vec3(0., i1.y, 1.)) + i.x + vec3(0., i1.x, 1.));\n    var m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), vec3(0.));\n    m *= m;\n    m *= m;\n    // gradients: 41 points uniformly over a line, mapped onto a diamond\n    let x = 2. * fract(p * C.www) - 1.;\n    let h = abs(x) - 0.5;\n    let ox = floor(x + 0.5);\n    let a0 = x - ox;\n    m = m * (1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h));\n    let g = vec3(a0.x * x0.x + h.x * x0.y, a0.yz * x12.xz + h.yz * x12.yw);\n    return 130. * dot(m, g);\n}");
  this.lR = $x_1.aZ(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("simplex_noise_2d", src$4), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.i8]))));
  var $x_2 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$5 = $m_sjs_js_ArrayOpsCommon$().a(["v"], $m_sjs_js_ArrayOpsCommon$().a(["seed"], []));
  var types$5 = $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], []));
  var parts$5 = [];
  var i$5 = 0;
  while ((i$5 < (names$5.length | 0))) {
    parts$5.push(((names$5[i$5] + ": ") + types$5[i$5]));
    i$5 = ((1 + i$5) | 0);
  }
  var paramList$5 = parts$5.join(", ");
  var src$5 = (("fn simplex_noise_2d_seeded(" + paramList$5) + ") -> f32 {\n\n    let C = vec4(\n        0.211324865405187,\n        0.366025403784439,\n        -0.577350269189626,\n        0.024390243902439\n    );\n    // first corner\n    var i = floor(v + dot(v, C.yy));\n    let x0 = v - i + dot(i, C.xx);\n    // other corners\n    var i1 = select(vec2(0., 1.), vec2(1., 0.), x0.x > x0.y);\n    var x12 = x0.xyxy + C.xxzz - vec4(i1, 0., 0.);\n    // permutations\n    i = i % vec2(289.);\n    var p = permute_3_(permute_3_(i.y + vec3(0., i1.y, 1.)) + i.x + vec3(0., i1.x, 1.));\n    p = permute_3_(p + vec3(seed));\n    var m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), vec3(0.));\n    m *= m;\n    m *= m;\n    let x = 2. * fract(p * C.www) - 1.;\n    let h = abs(x) - 0.5;\n    let ox = floor(x + 0.5);\n    let a0 = x - ox;\n    m = m * (1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h));\n    let g = vec3(a0.x * x0.x + h.x * x0.y, a0.yz * x12.xz + h.yz * x12.yw);\n    return 130. * dot(m, g);\n}");
  this.lS = $x_2.aZ(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("simplex_noise_2d_seeded", src$5), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.i8]))));
  var $x_3 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$6 = $m_sjs_js_ArrayOpsCommon$().a(["v"], []);
  var types$6 = $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], []);
  var parts$6 = [];
  var i$6 = 0;
  while ((i$6 < (names$6.length | 0))) {
    parts$6.push(((names$6[i$6] + ": ") + types$6[i$6]));
    i$6 = ((1 + i$6) | 0);
  }
  var paramList$6 = parts$6.join(", ");
  var src$6 = (("fn simplex_noise_3d(" + paramList$6) + ") -> f32 {\n\n    let C = vec2(1. / 6., 1. / 3.);\n    let D = vec4(0., 0.5, 1., 2.);\n    // first corner\n    var i = floor(v + dot(v, C.yyy));\n    let x0 = v - i + dot(i, C.xxx);\n    // other corners\n    let g = step(x0.yzx, x0.xyz);\n    let l = 1. - g;\n    let i1 = min(g.xyz, l.zxy);\n    let i2 = max(g.xyz, l.zxy);\n    let x1 = x0 - i1 + 1. * C.xxx;\n    let x2 = x0 - i2 + 2. * C.xxx;\n    let x3 = x0 - 1. + 3. * C.xxx;\n    // permutations\n    i = i % vec3(289.);\n    let p = permute_4_(permute_4_(permute_4_(\n        i.z + vec4(0., i1.z, i2.z, 1.)) +\n        i.y + vec4(0., i1.y, i2.y, 1.)) +\n        i.x + vec4(0., i1.x, i2.x, 1.)\n    );\n    // gradients (NxN points uniformly over a square, mapped onto an octahedron)\n    let n_ = 1. / 7.;\n    let ns = n_ * D.wyz - D.xzx;\n    let j = p - 49. * floor(p * ns.z * ns.z);\n    let x_ = floor(j * ns.z);\n    let y_ = floor(j - 7. * x_);\n    let x = x_ * ns.x + ns.yyyy;\n    let y = y_ * ns.x + ns.yyyy;\n    let h = 1. - abs(x) - abs(y);\n    let b0 = vec4(x.xy, y.xy);\n    let b1 = vec4(x.zw, y.zw);\n    let s0 = floor(b0) * 2. + 1.;\n    let s1 = floor(b1) * 2. + 1.;\n    let sh = -step(h, vec4(0.));\n    let a0 = b0.xzyw + s0.xzyw * sh.xxyy;\n    let a1 = b1.xzyw + s1.xzyw * sh.zzww;\n    var p0 = vec3(a0.xy, h.x);\n    var p1 = vec3(a0.zw, h.y);\n    var p2 = vec3(a1.xy, h.z);\n    var p3 = vec3(a1.zw, h.w);\n    // normalize gradients\n    let norm = taylor_inv_sqrt_4_(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));\n    p0 = p0 * norm.x;\n    p1 = p1 * norm.y;\n    p2 = p2 * norm.z;\n    p3 = p3 * norm.w;\n    // mix final noise value\n    var m = 0.5 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3));\n    m = max(m, vec4(0.));\n    m *= m;\n    return 105. * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));\n}");
  this.jt = $x_3.aZ(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("simplex_noise_3d", src$6), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.i9, this.ia]))));
  var $x_4 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$7 = $m_sjs_js_ArrayOpsCommon$().a(["v"], $m_sjs_js_ArrayOpsCommon$().a(["seed"], []));
  var types$7 = $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], []));
  var parts$7 = [];
  var i$7 = 0;
  while ((i$7 < (names$7.length | 0))) {
    parts$7.push(((names$7[i$7] + ": ") + types$7[i$7]));
    i$7 = ((1 + i$7) | 0);
  }
  var paramList$7 = parts$7.join(", ");
  var src$7 = (("fn simplex_noise_3d_seeded(" + paramList$7) + ") -> f32 {\n\n    let C = vec2(1. / 6., 1. / 3.);\n    let D = vec4(0., 0.5, 1., 2.);\n    // first corner\n    var i = floor(v + dot(v, C.yyy));\n    let x0 = v - i + dot(i, C.xxx);\n    // other corners\n    let g = step(x0.yzx, x0.xyz);\n    let l = 1. - g;\n    let i1 = min(g.xyz, l.zxy);\n    let i2 = max(g.xyz, l.zxy);\n    let x1 = x0 - i1 + 1. * C.xxx;\n    let x2 = x0 - i2 + 2. * C.xxx;\n    let x3 = x0 - 1. + 3. * C.xxx;\n    // permutations\n    i = i % vec3(289.);\n    let s = floor(seed + vec3(0.5));\n    let p = permute_4_(permute_4_(permute_4_(\n        i.z + vec4(0., i1.z, i2.z, 1.) + s.z) +\n        i.y + vec4(0., i1.y, i2.y, 1.) + s.y) +\n        i.x + vec4(0., i1.x, i2.x, 1.) + s.x\n    );\n    // gradients (NxN points uniformly over a square, mapped onto an octahedron)\n    let n_ = 1. / 7.;\n    let ns = n_ * D.wyz - D.xzx;\n    let j = p - 49. * floor(p * ns.z * ns.z);\n    let x_ = floor(j * ns.z);\n    let y_ = floor(j - 7. * x_);\n    let x = x_ * ns.x + ns.yyyy;\n    let y = y_ * ns.x + ns.yyyy;\n    let h = 1. - abs(x) - abs(y);\n    let b0 = vec4(x.xy, y.xy);\n    let b1 = vec4(x.zw, y.zw);\n    let s0 = floor(b0) * 2. + 1.;\n    let s1 = floor(b1) * 2. + 1.;\n    let sh = -step(h, vec4(0.));\n    let a0 = b0.xzyw + s0.xzyw * sh.xxyy;\n    let a1 = b1.xzyw + s1.xzyw * sh.zzww;\n    var p0 = vec3(a0.xy, h.x);\n    var p1 = vec3(a0.zw, h.y);\n    var p2 = vec3(a1.xy, h.z);\n    var p3 = vec3(a1.zw, h.w);\n    // normalize gradients\n    let norm = taylor_inv_sqrt_4_(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));\n    p0 = p0 * norm.x;\n    p1 = p1 * norm.y;\n    p2 = p2 * norm.z;\n    p3 = p3 * norm.w;\n    // mix final noise value\n    var m = 0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3));\n    m = max(m, vec4(0.));\n    m *= m;\n    return 42. * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));\n}");
  this.lT = $x_4.aZ(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("simplex_noise_3d_seeded", src$7), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.i9, this.ia]))));
  var $x_5 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$8 = $m_sjs_js_ArrayOpsCommon$().a(["pos"], $m_sjs_js_ArrayOpsCommon$().a(["octaves"], $m_sjs_js_ArrayOpsCommon$().a(["lacunarity"], $m_sjs_js_ArrayOpsCommon$().a(["gain"], []))));
  var types$8 = $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["i32"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], []))));
  var parts$8 = [];
  var i$8 = 0;
  while ((i$8 < (names$8.length | 0))) {
    parts$8.push(((names$8[i$8] + ": ") + types$8[i$8]));
    i$8 = ((1 + i$8) | 0);
  }
  var paramList$8 = parts$8.join(", ");
  var src$8 = (("fn fbm_simplex_2d(" + paramList$8) + ") -> f32 {\n\n    var sum = 0.;\n    var amplitude = 1.;\n    var frequency = 1.;\n    for (var i = 0; i < octaves; i += 1) {\n        sum += simplex_noise_2d(pos * frequency) * amplitude;\n        amplitude *= gain;\n        frequency *= lacunarity;\n    }\n    return sum;\n}");
  $x_5.aZ(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("fbm_simplex_2d", src$8), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.lR]))));
  var $x_6 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$9 = $m_sjs_js_ArrayOpsCommon$().a(["pos"], $m_sjs_js_ArrayOpsCommon$().a(["octaves"], $m_sjs_js_ArrayOpsCommon$().a(["lacunarity"], $m_sjs_js_ArrayOpsCommon$().a(["gain"], $m_sjs_js_ArrayOpsCommon$().a(["seed"], [])))));
  var types$9 = $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["i32"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], [])))));
  var parts$9 = [];
  var i$9 = 0;
  while ((i$9 < (names$9.length | 0))) {
    parts$9.push(((names$9[i$9] + ": ") + types$9[i$9]));
    i$9 = ((1 + i$9) | 0);
  }
  var paramList$9 = parts$9.join(", ");
  var src$9 = (("fn fbm_simplex_2d_seeded(" + paramList$9) + ") -> f32 {\n\n    var sum = 0.;\n    var amplitude = 1.;\n    var frequency = 1.;\n    for (var i = 0; i < octaves; i += 1) {\n        sum += simplex_noise_2d_seeded(pos * frequency, seed) * amplitude;\n        amplitude *= gain;\n        frequency *= lacunarity;\n    }\n    return sum;\n}");
  $x_6.aZ(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("fbm_simplex_2d_seeded", src$9), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.lS]))));
  var $x_7 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$10 = $m_sjs_js_ArrayOpsCommon$().a(["pos"], $m_sjs_js_ArrayOpsCommon$().a(["octaves"], $m_sjs_js_ArrayOpsCommon$().a(["lacunarity"], $m_sjs_js_ArrayOpsCommon$().a(["gain"], []))));
  var types$10 = $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["i32"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], []))));
  var parts$10 = [];
  var i$10 = 0;
  while ((i$10 < (names$10.length | 0))) {
    parts$10.push(((names$10[i$10] + ": ") + types$10[i$10]));
    i$10 = ((1 + i$10) | 0);
  }
  var paramList$10 = parts$10.join(", ");
  var src$10 = (("fn fbm_simplex_3d(" + paramList$10) + ") -> f32 {\n\n    var sum = 0.;\n    var amplitude = 1.;\n    var frequency = 1.;\n    for (var i = 0; i < octaves; i += 1) {\n        sum += simplex_noise_3d(pos * frequency) * amplitude;\n        amplitude *= gain;\n        frequency *= lacunarity;\n    }\n    return sum;\n}");
  $x_7.aZ(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("fbm_simplex_3d", src$10), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.jt]))));
  var $x_8 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$11 = $m_sjs_js_ArrayOpsCommon$().a(["pos"], $m_sjs_js_ArrayOpsCommon$().a(["octaves"], $m_sjs_js_ArrayOpsCommon$().a(["lacunarity"], $m_sjs_js_ArrayOpsCommon$().a(["gain"], $m_sjs_js_ArrayOpsCommon$().a(["seed"], [])))));
  var types$11 = $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["i32"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], [])))));
  var parts$11 = [];
  var i$11 = 0;
  while ((i$11 < (names$11.length | 0))) {
    parts$11.push(((names$11[i$11] + ": ") + types$11[i$11]));
    i$11 = ((1 + i$11) | 0);
  }
  var paramList$11 = parts$11.join(", ");
  var src$11 = (("fn fbm_simplex_3d_seeded(" + paramList$11) + ") -> f32 {\n\n    var sum = 0.;\n    var amplitude = 1.;\n    var frequency = 1.;\n    for (var i = 0; i < octaves; i += 1) {\n        sum += simplex_noise_3d_seeded(pos * frequency, seed) * amplitude;\n        amplitude *= gain;\n        frequency *= lacunarity;\n    }\n    return sum;\n}");
  $x_8.aZ(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("fbm_simplex_3d_seeded", src$11), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.lT]))));
  var $x_9 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$12 = $m_sjs_js_ArrayOpsCommon$().a(["pos"], $m_sjs_js_ArrayOpsCommon$().a(["jitter"], []));
  var types$12 = $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], []));
  var parts$12 = [];
  var i$12 = 0;
  while ((i$12 < (names$12.length | 0))) {
    parts$12.push(((names$12[i$12] + ": ") + types$12[i$12]));
    i$12 = ((1 + i$12) | 0);
  }
  var paramList$12 = parts$12.join(", ");
  var src$12 = (("fn worley_2d(" + paramList$12) + ") -> vec2<f32> {\n\n    let k = 0.142857142857;\n    let ko = 0.428571428571;\n    let pi = floor(pos);\n    let pf = fract(pos);\n    let oi = vec3(-1.0, 0.0, 1.0);\n    let of_ = vec3(-0.5, 0.5, 1.5);\n    let px = permute_3_(pi.x + oi);\n    var p = permute_3_(px.x + pi.y + oi);\n    var ox = fract(p * k) - ko;\n    var oy = (floor(p * k) % 7.0) * k - ko;\n    var dx = pf.x + 0.5 + jitter * ox;\n    var dy = pf.y - of_ + jitter * oy;\n    var d1 = dx * dx + dy * dy;\n    p = permute_3_(px.y + pi.y + oi);\n    ox = fract(p * k) - ko;\n    oy = (floor(p * k) % 7.0) * k - ko;\n    dx = pf.x - 0.5 + jitter * ox;\n    dy = pf.y - of_ + jitter * oy;\n    var d2 = dx * dx + dy * dy;\n    p = permute_3_(px.z + pi.y + oi);\n    ox = fract(p * k) - ko;\n    oy = (floor(p * k) % 7.0) * k - ko;\n    dx = pf.x - 1.5 + jitter * ox;\n    dy = pf.y - of_ + jitter * oy;\n    let d3 = dx * dx + dy * dy;\n    let d1a = min(d1, d2);\n    d2 = max(d1, d2);\n    d2 = min(d2, d3);\n    d1 = min(d1a, d2);\n    d2 = max(d1a, d2);\n    if d1.x > d1.y {\n        let tmp = d1.x;\n        d1.x = d1.y;\n        d1.y = tmp;\n    }\n    if d1.x > d1.z {\n        let tmp = d1.x;\n        d1.x = d1.z;\n        d1.z = tmp;\n    }\n    d1.y = min(d1.y, d2.y);\n    d1.z = min(d1.z, d2.z);\n    d1.y = min(d1.y, d1.z);\n    d1.y = min(d1.y, d2.x);\n    return sqrt(d1.xy);\n}");
  $x_9.aZ(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("worley_2d", src$12), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.i8]))));
  var names$13 = $m_sjs_js_ArrayOpsCommon$().a(["x"], []);
  var types$13 = $m_sjs_js_ArrayOpsCommon$().a(["f32"], []);
  var parts$13 = [];
  var i$13 = 0;
  while ((i$13 < (names$13.length | 0))) {
    parts$13.push(((names$13[i$13] + ": ") + types$13[i$13]));
    i$13 = ((1 + i$13) | 0);
  }
  var paramList$13 = parts$13.join(", ");
  var src$13 = (("fn permute_1_(" + paramList$13) + ") -> f32 {\n  return ((x * 34.0) + 1.0) * x % 289.0;\n}");
  var permute1 = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("permute_1_", src$13);
  var names$14 = $m_sjs_js_ArrayOpsCommon$().a(["r"], []);
  var types$14 = $m_sjs_js_ArrayOpsCommon$().a(["f32"], []);
  var parts$14 = [];
  var i$14 = 0;
  while ((i$14 < (names$14.length | 0))) {
    parts$14.push(((names$14[i$14] + ": ") + types$14[i$14]));
    i$14 = ((1 + i$14) | 0);
  }
  var paramList$14 = parts$14.join(", ");
  var src$14 = (("fn taylor_inv_sqrt_1_(" + paramList$14) + ") -> f32 {\n  return 1.79284291400159 - 0.85373472095314 * r;\n}");
  var taylorInvSqrt1 = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("taylor_inv_sqrt_1_", src$14);
  var names$15 = $m_sjs_js_ArrayOpsCommon$().a(["j"], $m_sjs_js_ArrayOpsCommon$().a(["ip"], []));
  var types$15 = $m_sjs_js_ArrayOpsCommon$().a(["f32"], $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []));
  var parts$15 = [];
  var i$15 = 0;
  while ((i$15 < (names$15.length | 0))) {
    parts$15.push(((names$15[i$15] + ": ") + types$15[i$15]));
    i$15 = ((1 + i$15) | 0);
  }
  var paramList$15 = parts$15.join(", ");
  var src$15 = (("fn grad_4_(" + paramList$15) + ") -> vec4<f32> {\n\n    let gj = floor(fract(j * ip.xyz) * 7.0) * ip.z - 1.0;\n    var p = vec4<f32>(gj.x, gj.y, gj.z, 1.5 - dot(abs(gj), vec3<f32>(1.0, 1.0, 1.0)));\n    // s = (p < 0) ? 1 : 0  \u2014 canonical Stegu lessThan(p, 0)\n    let s = vec4<f32>(1.0) - step(vec4<f32>(0.0, 0.0, 0.0, 0.0), p);\n    let dp = (s.xyz * 2.0 - 1.0) * s.www;\n    p.x = p.x + dp.x;\n    p.y = p.y + dp.y;\n    p.z = p.z + dp.z;\n    return p;\n}");
  var grad4 = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("grad_4_", src$15);
  var $x_10 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$16 = $m_sjs_js_ArrayOpsCommon$().a(["pos"], []);
  var types$16 = $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []);
  var parts$16 = [];
  var i$16 = 0;
  while ((i$16 < (names$16.length | 0))) {
    parts$16.push(((names$16[i$16] + ": ") + types$16[i$16]));
    i$16 = ((1 + i$16) | 0);
  }
  var paramList$16 = parts$16.join(", ");
  var src$16 = (("fn simplex_noise_4d(" + paramList$16) + ") -> f32 {\n\n    let c = vec4<f32>(\n        0.138196601125011,\n        0.276393202250021,\n        0.414589803375032,\n        -0.447213595499958\n    );\n    let F4 = 0.309016994374947451;\n    var i = floor(pos + dot(pos, vec4<f32>(F4, F4, F4, F4)));\n    let x0 = pos - i + dot(i, c.xxxx);\n    let is_x = step(x0.yzw, x0.xxx);\n    let is_yz = step(x0.zww, x0.yyz);\n    var i0 = vec4<f32>(is_x.x + is_x.y + is_x.z, 1.0 - is_x.x, 1.0 - is_x.y, 1.0 - is_x.z);\n    i0.y = i0.y + is_yz.x + is_yz.y;\n    i0.z = i0.z + (1.0 - is_yz.x) + is_yz.z;\n    i0.w = i0.w + (1.0 - is_yz.y) + (1.0 - is_yz.z);\n    let i3 = clamp(i0, vec4<f32>(0.0, 0.0, 0.0, 0.0), vec4<f32>(1.0, 1.0, 1.0, 1.0));\n    let i2 = clamp(i0 - 1.0, vec4<f32>(0.0, 0.0, 0.0, 0.0), vec4<f32>(1.0, 1.0, 1.0, 1.0));\n    let i1 = clamp(i0 - 2.0, vec4<f32>(0.0, 0.0, 0.0, 0.0), vec4<f32>(1.0, 1.0, 1.0, 1.0));\n    let x1 = x0 - i1 + c.xxxx;\n    let x2 = x0 - i2 + c.yyyy;\n    let x3 = x0 - i3 + c.zzzz;\n    let x4 = x0 + c.wwww;\n    i = i % vec4<f32>(289.0, 289.0, 289.0, 289.0);\n    let j0 = permute_1_(permute_1_(permute_1_(permute_1_(i.w) + i.z) + i.y) + i.x);\n    let j1 = permute_4_(\n        permute_4_(\n            permute_4_(\n                permute_4_(i.w + vec4<f32>(i1.w, i2.w, i3.w, 1.0)) + i.z + vec4<f32>(i1.z, i2.z, i3.z, 1.0)\n            ) + i.y + vec4<f32>(i1.y, i2.y, i3.y, 1.0)\n        ) + i.x + vec4<f32>(i1.x, i2.x, i3.x, 1.0)\n    );\n    let ip = vec4<f32>(1.0 / 294.0, 1.0 / 49.0, 1.0 / 7.0, 0.0);\n    var p0 = grad_4_(j0, ip);\n    var p1 = grad_4_(j1.x, ip);\n    var p2 = grad_4_(j1.y, ip);\n    var p3 = grad_4_(j1.z, ip);\n    var p4 = grad_4_(j1.w, ip);\n    let norm = taylor_inv_sqrt_4_(vec4<f32>(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));\n    p0 = p0 * norm.x;\n    p1 = p1 * norm.y;\n    p2 = p2 * norm.z;\n    p3 = p3 * norm.w;\n    p4 = p4 * taylor_inv_sqrt_1_(dot(p4, p4));\n    var m0 = max(0.6 - vec3<f32>(dot(x0, x0), dot(x1, x1), dot(x2, x2)), vec3<f32>(0.0, 0.0, 0.0));\n    var m1 = max(0.6 - vec2<f32>(dot(x3, x3), dot(x4, x4)), vec2<f32>(0.0, 0.0));\n    m0 = m0 * m0;\n    m1 = m1 * m1;\n    return 49.0 * (dot(m0 * m0, vec3<f32>(dot(p0, x0), dot(p1, x1), dot(p2, x2))) + dot(m1 * m1, vec2<f32>(dot(p3, x3), dot(p4, x4))));\n}");
  this.lU = $x_10.aZ(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("simplex_noise_4d", src$16), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([permute1, this.i9, taylorInvSqrt1, this.ia, grad4]))));
  var $x_11 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$17 = $m_sjs_js_ArrayOpsCommon$().a(["pos"], $m_sjs_js_ArrayOpsCommon$().a(["scale"], []));
  var types$17 = $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], []));
  var parts$17 = [];
  var i$17 = 0;
  while ((i$17 < (names$17.length | 0))) {
    parts$17.push(((names$17[i$17] + ": ") + types$17[i$17]));
    i$17 = ((1 + i$17) | 0);
  }
  var paramList$17 = parts$17.join(", ");
  var src$17 = (("fn tiling_simplex_noise_2d(" + paramList$17) + ") -> f32 {\n\n    let angle_x = pos.x * 6.28318530718;\n    let angle_y = pos.y * 6.28318530718;\n    let nx = cos(angle_x) * scale;\n    let ny = sin(angle_x) * scale;\n    let nz = cos(angle_y) * scale;\n    let nw = sin(angle_y) * scale;\n    return simplex_noise_4d(vec4<f32>(nx, ny, nz, nw));\n}");
  $x_11.aZ(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("tiling_simplex_noise_2d", src$17), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.lU]))));
}
$p = $c_Ltrivalibs_graphics_shader_lib_random_Simplex$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_random_Simplex$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_random_Simplex$() {
}
$h_Ltrivalibs_graphics_shader_lib_random_Simplex$.prototype = $p;
var $d_Ltrivalibs_graphics_shader_lib_random_Simplex$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_random_Simplex$, "trivalibs.graphics.shader.lib.random.Simplex$", ({
  fK: 1
}));
var $n_Ltrivalibs_graphics_shader_lib_random_Simplex$;
function $m_Ltrivalibs_graphics_shader_lib_random_Simplex$() {
  if ((!$n_Ltrivalibs_graphics_shader_lib_random_Simplex$)) {
    $n_Ltrivalibs_graphics_shader_lib_random_Simplex$ = new $c_Ltrivalibs_graphics_shader_lib_random_Simplex$();
  }
  return $n_Ltrivalibs_graphics_shader_lib_random_Simplex$;
}
/** @constructor */
function $c_Ltrivalibs_utils_animation_Animator(frame, onFpsCallback) {
  this.lV = null;
  this.ju = null;
  this.gX = 0;
  this.gY = 0.0;
  this.ib = 0.0;
  this.ic = 0.0;
  this.jv = false;
  this.lV = frame;
  this.ju = onFpsCallback;
  this.gX = 0;
  this.gY = 0.0;
  this.ib = 0.0;
  this.ic = (-1.0);
  this.jv = false;
}
$p = $c_Ltrivalibs_utils_animation_Animator.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_animation_Animator;
/** @constructor */
function $h_Ltrivalibs_utils_animation_Animator() {
}
$h_Ltrivalibs_utils_animation_Animator.prototype = $p;
$p.mZ = (function(time) {
  this.gX = ((1 + this.gX) | 0);
  if ((this.gY === 0.0)) {
    this.gY = time;
    this.ib = time;
  }
  var fpsElapsed = (time - this.gY);
  if ((fpsElapsed >= 1000.0)) {
    var fps = ((1000.0 * this.gX) / fpsElapsed);
    if (((time - this.ib) >= 1000.0)) {
      var args$proxy1 = $m_sr_ScalaRunTime$().at(new ($d_sjs_js_Any.r().C)([(fps.toFixed(1) + " FPS")]));
      console.log(...$m_sjsr_Compat$().as(args$proxy1));
      this.ib = time;
      if ((this.ju !== null)) {
        (0, this.ju)(fps);
      }
    }
    this.gX = 0;
    this.gY = time;
  }
  var delta = ((this.ic < 0.0) ? 0.0 : (time - this.ic));
  this.ic = time;
  (0, this.lV)(delta);
  if (this.jv) {
    requestAnimationFrame($m_sjs_js_Any$().h9(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2) => {
      this.mZ((+v1$2));
    }))));
  }
});
$p.pC = (function() {
  this.jv = true;
  return requestAnimationFrame($m_sjs_js_Any$().h9(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2) => {
    this.mZ((+v1$2));
  }))));
});
var $d_Ltrivalibs_utils_animation_Animator = new $TypeData().i($c_Ltrivalibs_utils_animation_Animator, "trivalibs.utils.animation.Animator", ({
  fR: 1
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
$p.nn = (function(frame) {
  var animator = new $c_Ltrivalibs_utils_animation_Animator(frame, null);
  animator.pC();
  return animator;
});
var $d_Ltrivalibs_utils_animation_animate$package$ = new $TypeData().i($c_Ltrivalibs_utils_animation_animate$package$, "trivalibs.utils.animation.animate$package$", ({
  fS: 1
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
  this.ax = null;
  this.jw = null;
  this.jx = null;
  this.ax = input;
  this.jw = drag;
  this.jx = hold;
}
$p = $c_Ltrivalibs_utils_events_CanvasInput.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_CanvasInput;
/** @constructor */
function $h_Ltrivalibs_utils_events_CanvasInput() {
}
$h_Ltrivalibs_utils_events_CanvasInput.prototype = $p;
$p.hA = (function(tpf) {
  this.jw.pN();
  this.jx.hA(tpf);
});
var $d_Ltrivalibs_utils_events_CanvasInput = new $TypeData().i($c_Ltrivalibs_utils_events_CanvasInput, "trivalibs.utils.events.CanvasInput", ({
  fT: 1
}));
function $ct_Ltrivalibs_utils_events_DragGesture__F0__($thiz, pointersOf) {
  $thiz.lW = pointersOf;
  $thiz.gZ = null;
  $thiz.jy = 0.0;
  $thiz.jz = 0.0;
  $thiz.id = 0.0;
  $thiz.ie = 0.0;
  return $thiz;
}
function $ct_Ltrivalibs_utils_events_DragGesture__Ltrivalibs_utils_events_InputState__($thiz, input) {
  $ct_Ltrivalibs_utils_events_DragGesture__F0__($thiz, $ps_Ltrivalibs_utils_events_DragGesture__DragGesture$superArg$1__Ltrivalibs_utils_events_InputState__F0(input));
  return $thiz;
}
function $ps_Ltrivalibs_utils_events_DragGesture__DragGesture$superArg$1__Ltrivalibs_utils_events_InputState__F0(input) {
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => input.aO));
}
/** @constructor */
function $c_Ltrivalibs_utils_events_DragGesture() {
  this.lW = null;
  this.gZ = null;
  this.jy = 0.0;
  this.jz = 0.0;
  this.id = 0.0;
  this.ie = 0.0;
}
$p = $c_Ltrivalibs_utils_events_DragGesture.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_DragGesture;
/** @constructor */
function $h_Ltrivalibs_utils_events_DragGesture() {
}
$h_Ltrivalibs_utils_events_DragGesture.prototype = $p;
$p.nM = (function() {
  return new $c_T2(this.id, this.ie);
});
$p.pN = (function() {
  var d = $m_Ltrivalibs_utils_events_gestures$package$().mo(this.lW.h7());
  if ((d === null)) {
    this.gZ = null;
    this.id = 0.0;
    this.ie = 0.0;
  } else {
    var opt$proxy2 = this.gZ;
    var sameDriver = (((opt$proxy2 !== null) && (d.b6 !== null)) && ((+this.gZ) === (+d.b6)));
    this.id = (sameDriver ? (d.gl - this.jy) : 0.0);
    this.ie = (sameDriver ? (d.gm - this.jz) : 0.0);
    this.gZ = d.b6;
    this.jy = d.gl;
    this.jz = d.gm;
  }
});
var $d_Ltrivalibs_utils_events_DragGesture = new $TypeData().i($c_Ltrivalibs_utils_events_DragGesture, "trivalibs.utils.events.DragGesture", ({
  fU: 1
}));
function $ct_Ltrivalibs_utils_events_HoldGesture__F0__D__D__($thiz, pointersOf, holdDelay, holdRadius) {
  $thiz.lZ = pointersOf;
  $thiz.lX = holdDelay;
  $thiz.lY = holdRadius;
  $thiz.h1 = null;
  $thiz.gk = 0.0;
  $thiz.h2 = false;
  $thiz.h0 = false;
  $thiz.fB = false;
  return $thiz;
}
function $ct_Ltrivalibs_utils_events_HoldGesture__Ltrivalibs_utils_events_InputState__D__D__($thiz, input, holdDelay, holdRadius) {
  $ct_Ltrivalibs_utils_events_HoldGesture__F0__D__D__($thiz, $ps_Ltrivalibs_utils_events_HoldGesture__HoldGesture$superArg$1__Ltrivalibs_utils_events_InputState__D__D__F0(input, holdDelay, holdRadius), holdDelay, holdRadius);
  return $thiz;
}
function $ps_Ltrivalibs_utils_events_HoldGesture__HoldGesture$superArg$1__Ltrivalibs_utils_events_InputState__D__D__F0(input, holdDelay, holdRadius) {
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => input.aO));
}
/** @constructor */
function $c_Ltrivalibs_utils_events_HoldGesture() {
  this.lZ = null;
  this.lX = 0.0;
  this.lY = 0.0;
  this.h1 = null;
  this.gk = 0.0;
  this.h2 = false;
  this.h0 = false;
  this.fB = false;
}
$p = $c_Ltrivalibs_utils_events_HoldGesture.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_HoldGesture;
/** @constructor */
function $h_Ltrivalibs_utils_events_HoldGesture() {
}
$h_Ltrivalibs_utils_events_HoldGesture.prototype = $p;
$p.hA = (function(tpf) {
  var d = $m_Ltrivalibs_utils_events_gestures$package$().mo(this.lZ.h7());
  if ((d === null)) {
    this.h1 = null;
    this.gk = 0.0;
    this.h2 = false;
    this.h0 = false;
    this.fB = false;
  } else {
    var pid = d.b6;
    if ((!(((this.h1 !== null) && (pid !== null)) && ((+this.h1) === (+pid))))) {
      this.h1 = pid;
      this.gk = 0.0;
      this.h2 = false;
      this.h0 = false;
    }
    this.gk = (this.gk + tpf);
    if (this.h0) {
      this.fB = true;
    } else if ((this.gk < this.lX)) {
      var dx = (d.gl - d.jB);
      var dy = (d.gm - d.jC);
      var p$proxy1 = ((dx * dx) + (dy * dy));
      if (((+Math.sqrt(p$proxy1)) > this.lY)) {
        this.h2 = true;
      }
      this.fB = false;
    } else if (this.h2) {
      this.fB = false;
    } else {
      this.h0 = true;
      this.fB = true;
    }
  }
});
var $d_Ltrivalibs_utils_events_HoldGesture = new $TypeData().i($c_Ltrivalibs_utils_events_HoldGesture, "trivalibs.utils.events.HoldGesture", ({
  fV: 1
}));
function $p_Ltrivalibs_utils_events_InputState__freeSlot__Ltrivalibs_utils_events_Pointer($thiz) {
  var i = 0;
  while ((i < ($thiz.h5.length | 0))) {
    if (($thiz.h5[i].b6 === null)) {
      return $thiz.h5[i];
    }
    i = ((1 + i) | 0);
  }
  return null;
}
function $p_Ltrivalibs_utils_events_InputState__slotById__D__Ltrivalibs_utils_events_Pointer($thiz, id) {
  var i = 0;
  while ((i < ($thiz.aO.length | 0))) {
    var p = $thiz.aO[i];
    if (((p.b6 !== null) && ((+p.b6) === id))) {
      return p;
    }
    i = ((1 + i) | 0);
  }
  return null;
}
function $p_Ltrivalibs_utils_events_InputState__removePointer__D__V($thiz, id) {
  var p = $p_Ltrivalibs_utils_events_InputState__slotById__D__Ltrivalibs_utils_events_Pointer($thiz, id);
  if ((p !== null)) {
    p.b6 = null;
    var idx = $m_sjs_js_ArrayOps$().my($thiz.aO, p, 0);
    if ((idx >= 0)) {
      $thiz.aO.splice(idx, 1);
    }
  }
}
function $p_Ltrivalibs_utils_events_InputState__install__V($thiz) {
  var i = 0;
  while ((i < $thiz.m4)) {
    $thiz.h5.push(new $c_Ltrivalibs_utils_events_Pointer());
    i = ((1 + i) | 0);
  }
  $m_Ltrivalibs_utils_events_keyboard$package$().op($thiz.h3, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((k$3) => {
    if ((!(!(!(!(!$thiz.h4.hasOwnProperty(k$3))))))) {
      var value$proxy1 = (+Date.now());
      $thiz.h4[k$3] = value$proxy1;
      if ((!($thiz.ay === (void 0)))) {
        var m$proxy3 = $thiz.ay;
        m$proxy3();
      }
    }
  })), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((k$3$1) => {
    delete $thiz.h4[k$3$1];
    if ((!($thiz.ay === (void 0)))) {
      var m$proxy4 = $thiz.ay;
      m$proxy4();
    }
  })), false);
  $m_Ltrivalibs_utils_events_pointer$package$().pf($thiz.m1, $m_Ltrivalibs_utils_events_pointer$package$().pg(), new $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078(((v1$2, v2$2, v3$2, v4$2, v5$2) => {
    var button = (v1$2 | 0);
    var id = (+v2$2);
    var x$1 = (+v3$2);
    var y = (+v4$2);
    if ($thiz.m3) {
      $thiz.h3.focus();
    }
    var key$proxy3 = ("" + button);
    var value$proxy2 = (+Date.now());
    $thiz.ig[key$proxy3] = value$proxy2;
    var slot = $p_Ltrivalibs_utils_events_InputState__freeSlot__Ltrivalibs_utils_events_Pointer($thiz);
    if ((slot !== null)) {
      slot.b6 = id;
      slot.jA = button;
      (+Date.now());
      slot.jB = x$1;
      slot.jC = y;
      slot.gl = x$1;
      slot.gm = y;
      $thiz.aO.push(slot);
      ($thiz.aO.length | 0);
    }
    if ((!($thiz.ay === (void 0)))) {
      var m$proxy5 = $thiz.ay;
      m$proxy5();
    }
  })), new $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(((v1$2$1, v2$2$1, v3$2$1) => {
    var id$1 = (+v1$2$1);
    var x$2 = (+v2$2$1);
    var y$1 = (+v3$2$1);
    var p = $p_Ltrivalibs_utils_events_InputState__slotById__D__Ltrivalibs_utils_events_Pointer($thiz, id$1);
    if ((p !== null)) {
      p.gl = x$2;
      p.gm = y$1;
      if ((($thiz.aO.length | 0) > 0)) {
        $thiz.aO[0];
      }
    }
  })), new $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(((v1$2$2, v2$2$2, v3$2$2, v4$2$1) => {
    var button$1 = (v1$2$2 | 0);
    var id$2 = (+v2$2$2);
    delete $thiz.ig[("" + button$1)];
    $p_Ltrivalibs_utils_events_InputState__removePointer__D__V($thiz, id$2);
    if ((!($thiz.ay === (void 0)))) {
      var m$proxy6 = $thiz.ay;
      m$proxy6();
    }
  })), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2$3) => {
    $p_Ltrivalibs_utils_events_InputState__removePointer__D__V($thiz, (+v1$2$3));
    if ((!($thiz.ay === (void 0)))) {
      var m$proxy7 = $thiz.ay;
      m$proxy7();
    }
  })), $thiz.m5);
  $thiz.h3.addEventListener("focus", $thiz.m2);
  $thiz.h3.addEventListener("blur", $thiz.m0);
}
/** @constructor */
function $c_Ltrivalibs_utils_events_InputState(el, keyTarget, suppressContextMenu, onActivity, focusOnPointerDown, maxPointers) {
  this.m1 = null;
  this.h3 = null;
  this.m5 = false;
  this.ay = null;
  this.m3 = false;
  this.m4 = 0;
  this.h4 = null;
  this.ig = null;
  this.h5 = null;
  this.aO = null;
  this.m2 = null;
  this.m0 = null;
  this.m1 = el;
  this.h3 = keyTarget;
  this.m5 = suppressContextMenu;
  this.ay = onActivity;
  this.m3 = focusOnPointerDown;
  this.m4 = maxPointers;
  this.h4 = ({});
  this.ig = ({});
  this.h5 = [];
  this.aO = [];
  if ($m_sr_BoxesRunTime$().c(keyTarget, window)) {
    (!(!document.hasFocus()));
  } else {
    $m_sr_BoxesRunTime$().c(keyTarget, document.activeElement);
  }
  this.m2 = ((_$1$3) => {
    if ((!(this.ay === (void 0)))) {
      var m$proxy1 = this.ay;
      m$proxy1();
    }
  });
  this.m0 = ((_$2$3) => {
    if ((!(this.ay === (void 0)))) {
      var m$proxy2 = this.ay;
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
$p.aY = (function(key) {
  return (!(!(!(!this.h4.hasOwnProperty(key)))));
});
$p.om = (function(button) {
  var key$proxy7 = ("" + button);
  return (!(!(!(!this.ig.hasOwnProperty(key$proxy7)))));
});
$p.mV = (function() {
  return (this.aO.length | 0);
});
var $d_Ltrivalibs_utils_events_InputState = new $TypeData().i($c_Ltrivalibs_utils_events_InputState, "trivalibs.utils.events.InputState", ({
  fW: 1
}));
/** @constructor */
function $c_Ltrivalibs_utils_events_Pointer() {
  this.b6 = null;
  this.jA = 0;
  this.jB = 0.0;
  this.jC = 0.0;
  this.gl = 0.0;
  this.gm = 0.0;
  this.b6 = null;
  this.jA = 0;
  this.jB = 0.0;
  this.jC = 0.0;
  this.gl = 0.0;
  this.gm = 0.0;
}
$p = $c_Ltrivalibs_utils_events_Pointer.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_Pointer;
/** @constructor */
function $h_Ltrivalibs_utils_events_Pointer() {
}
$h_Ltrivalibs_utils_events_Pointer.prototype = $p;
var $d_Ltrivalibs_utils_events_Pointer = new $TypeData().i($c_Ltrivalibs_utils_events_Pointer, "trivalibs.utils.events.Pointer", ({
  fX: 1
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
$p.mo = (function(pointers) {
  var i = 0;
  while ((i < (pointers.length | 0))) {
    var p = pointers[i];
    if ((p.jA === 0)) {
      return p;
    }
    i = ((1 + i) | 0);
  }
  return null;
});
var $d_Ltrivalibs_utils_events_gestures$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_gestures$package$, "trivalibs.utils.events.gestures$package$", ({
  fY: 1
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
$p.ok = (function(canvas, initialFocus, holdDelay, holdRadius, suppressContextMenu, onActivity) {
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
  return new $c_Ltrivalibs_utils_events_CanvasInput(input, $ct_Ltrivalibs_utils_events_DragGesture__Ltrivalibs_utils_events_InputState__(new $c_Ltrivalibs_utils_events_DragGesture(), input), $ct_Ltrivalibs_utils_events_HoldGesture__Ltrivalibs_utils_events_InputState__D__D__(new $c_Ltrivalibs_utils_events_HoldGesture(), input, holdDelay, holdRadius));
});
var $d_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$, "trivalibs.utils.events.interactive_canvas$package$", ({
  fZ: 1
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
$p.op = (function(el, onDown, onUp, keepDefault) {
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
  g0: 1
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
$p.pf = (function(el, moveTarget, onDown, onMove, onUp, onCancel, suppressContextMenu) {
  var downFn = ((e$3) => {
    onDown.np((e$3.button | 0), (+e$3.pointerId), (+e$3.clientX), (+e$3.clientY), (!(!e$3.isPrimary)));
  });
  var moveFn = ((e$3$1) => {
    onMove.ma((+e$3$1.pointerId), (+e$3$1.clientX), (+e$3$1.clientY));
  });
  var upFn = ((e$3$2) => {
    onUp.m9((e$3$2.button | 0), (+e$3$2.pointerId), (+e$3$2.clientX), (+e$3$2.clientY));
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
$p.pg = (function() {
  return window;
});
var $d_Ltrivalibs_utils_events_pointer$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_pointer$package$, "trivalibs.utils.events.pointer$package$", ({
  g1: 1
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
$p.mX = (function(min, max) {
  return (((+Math.random()) * (max - min)) + min);
});
var $d_Ltrivalibs_utils_random_random$package$ = new $TypeData().i($c_Ltrivalibs_utils_random_random$package$, "trivalibs.utils.random.random$package$", ({
  g4: 1
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
  this.ix = null;
  $n_jl_Character$ = this;
  this.ix = new $ac_I(new Int32Array([1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3558, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43504, 43600, 44016, 65296, 66720, 68912, 69734, 69872, 69942, 70096, 70384, 70736, 70864, 71248, 71360, 71472, 71904, 72016, 72784, 73040, 73120, 73552, 92768, 92864, 93008, 120782, 120792, 120802, 120812, 120822, 123200, 123632, 124144, 125264, 130032]));
}
$p = $c_jl_Character$.prototype = new $h_O();
$p.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
}
$h_jl_Character$.prototype = $p;
$p.pI = (function(codePoint) {
  if (((codePoint >>> 0) > 1114111)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return String.fromCodePoint(codePoint);
});
$p.nQ = (function(codePoint, radix) {
  if ((codePoint < 256)) {
    var value = (((((codePoint - 48) | 0) >>> 0) <= 9) ? ((codePoint - 48) | 0) : (((((codePoint - 65) | 0) >>> 0) <= 25) ? ((codePoint - 55) | 0) : (((((codePoint - 97) | 0) >>> 0) <= 25) ? ((codePoint - 87) | 0) : (-1))));
  } else if (((((codePoint - 65313) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65303) | 0);
  } else if (((((codePoint - 65345) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65335) | 0);
  } else {
    var p = $m_ju_Arrays$().nC(this.ix, codePoint);
    var zeroCodePointIndex = ((p < 0) ? (((-2) - p) | 0) : p);
    if ((zeroCodePointIndex < 0)) {
      var value = (-1);
    } else {
      var v = ((codePoint - this.ix.b[zeroCodePointIndex]) | 0);
      var value = ((v > 9) ? (-1) : v);
    }
  }
  return ((value < radix) ? value : (-1));
});
var $d_jl_Character$ = new $TypeData().i($c_jl_Character$, "java.lang.Character$", ({
  bb: 1,
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
$p.ht = (function(s) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s) + "\""));
});
$p.on = (function(s, radix, overflowBarrier) {
  if ((s === null)) {
    $m_jl_Integer$().ht(s);
  }
  var len = s.length;
  if ((len === 0)) {
    $m_jl_Integer$().ht(s);
  }
  var character = $m_jl_Character$();
  var firstChar = s.charCodeAt(0);
  var negative = (firstChar === 45);
  var sign = (negative ? (-1) : 0);
  var i = ((negative || (firstChar === 43)) ? 1 : 0);
  if ((i >= len)) {
    $m_jl_Integer$().ht(s);
  }
  var java$lang$IntFloatBits$Int32Box$$value = 0;
  java$lang$IntFloatBits$Int32Box$$value = 0;
  while ((i !== len)) {
    var x = character.nQ(s.charCodeAt(i), radix);
    if (((x < 0) || ((java$lang$IntFloatBits$Int32Box$$value >>> 0) > (overflowBarrier >>> 0)))) {
      $m_jl_Integer$().ht(s);
    }
    var x$2 = java$lang$IntFloatBits$Int32Box$$value;
    var x$3 = Math.imul(x$2, radix);
    var v = ((x$3 + x) | 0);
    java$lang$IntFloatBits$Int32Box$$value = v;
    i = ((1 + i) | 0);
  }
  if (((java$lang$IntFloatBits$Int32Box$$value >>> 0) > (((2147483647 - sign) | 0) >>> 0))) {
    $m_jl_Integer$().ht(s);
  }
  return (((java$lang$IntFloatBits$Int32Box$$value ^ sign) - sign) | 0);
});
var $d_jl_Integer$ = new $TypeData().i($c_jl_Integer$, "java.lang.Integer$", ({
  bh: 1,
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
  $thiz.k5 = s;
  if (writableStackTrace) {
    $thiz.o4();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.k5 = null;
  }
  im() {
    return this.k5;
  }
  o4() {
    var reference = ((this instanceof $c_sjs_js_JavaScriptException) ? this.aE : this);
    if ((Object.prototype.toString.call(reference) !== "[object Error]")) {
      if (((Error.captureStackTrace === (void 0)) || (!(!Object.isSealed(this))))) {
        new Error();
      } else {
        Error.captureStackTrace(this);
      }
    }
    return this;
  }
  n() {
    var className = $objectClassName(this);
    var message = this.im();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  s() {
    return $c_O.prototype.s.call(this);
  }
  r(that) {
    return $c_O.prototype.r.call(this, that);
  }
  get "message"() {
    var m = this.im();
    return ((m === null) ? "" : m);
  }
  get "name"() {
    return $objectClassName(this);
  }
  "toString"() {
    return this.n();
  }
}
function $isArrayOf_jl_Throwable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.f)));
}
/** @constructor */
function $c_s_Console$() {
  this.k7 = null;
  $n_s_Console$ = this;
  this.k7 = new $c_s_util_DynamicVariable($m_jl_System$Streams$().k3);
}
$p = $c_s_Console$.prototype = new $h_O();
$p.constructor = $c_s_Console$;
/** @constructor */
function $h_s_Console$() {
}
$h_s_Console$.prototype = $p;
$p.pc = (function() {
  return this.k7.iA;
});
var $d_s_Console$ = new $TypeData().i($c_s_Console$, "scala.Console$", ({
  bA: 1,
  cK: 1
}));
var $n_s_Console$;
function $m_s_Console$() {
  if ((!$n_s_Console$)) {
    $n_s_Console$ = new $c_s_Console$();
  }
  return $n_s_Console$;
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
$p.n = (function() {
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
$p.pV = (function(xs) {
  if ((xs === null)) {
    return null;
  } else if ((xs.b.length === 0)) {
    var this$2 = $m_scm_ArraySeq$();
    $m_s_reflect_ManifestFactory$ObjectManifest$();
    return this$2.ki;
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
$p.n0 = (function(start, end, step, isInclusive) {
  throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ($p_sci_Range$__description__I__I__I__Z__T(this, start, end, step, isInclusive) + ": seqs cannot contain more than Int.MaxValue elements."));
});
$p.pt = (function(what) {
  return new $c_ju_NoSuchElementException((what + " on empty Range"));
});
var $d_sci_Range$ = new $TypeData().i($c_sci_Range$, "scala.collection.immutable.Range$", ({
  cz: 1,
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
$p.n = (function() {
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
$p.n = (function() {
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
$p.n = (function() {
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
$p.n = (function() {
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
$p.n = (function() {
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
$p.n = (function() {
  return "<function5>";
});
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.fp = 0;
  this.ks = 0;
  this.n9 = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.fp = $f_T__hashCode__I("Seq");
  this.ks = $f_T__hashCode__I("Map");
  $f_T__hashCode__I("Set");
  this.n9 = this.pM($m_sci_Nil$(), this.ks);
}
$p = $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$p.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $p;
$p.jO = (function(xs) {
  return ($is_sc_IndexedSeq(xs) ? this.oh(xs, this.fp) : ((xs instanceof $c_sci_List) ? this.oq(xs, this.fp) : this.pb(xs, this.fp)));
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().i($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  dt: 1,
  ds: 1
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
  this.ky = null;
  this.kx = null;
  this.kz = null;
  this.kA = null;
  this.ky = p$1;
  this.kx = bloomP$1;
  this.kz = resultP$1;
  this.kA = resultP$1;
}
$p = $c_Lsketchlib_utils_bloom_Bloom$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_bloom_Bloom$$anon$1;
/** @constructor */
function $h_Lsketchlib_utils_bloom_Bloom$$anon$1() {
}
$h_Lsketchlib_utils_bloom_Bloom$$anon$1.prototype = $p;
$p.pe = (function() {
  var Painter_this = this.ky;
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.kx);
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.kz);
});
var $d_Lsketchlib_utils_bloom_Bloom$$anon$1 = new $TypeData().i($c_Lsketchlib_utils_bloom_Bloom$$anon$1, "sketchlib.utils.bloom.Bloom$$anon$1", ({
  dB: 1,
  dz: 1
}));
function $p_Lsketchlib_utils_mirror_MirrorReflection$$anon$1__applySizing__V($thiz) {
  if (($thiz.bw > 0.0)) {
    var sigma = ((0.01 * $thiz.kC) * $thiz.bw);
    var vRatio = (1.0 + ($thiz.kD * $m_Lsketchlib_utils_mirror_MirrorReflection$().iE));
    var p$proxy3 = ($thiz.iI * sigma);
    var p$proxy4 = (+Math.ceil(p$proxy3));
    var other$proxy4 = (0.5 * $thiz.gD);
    var mx = (+Math.min(p$proxy4, other$proxy4));
    var p$proxy5 = (($thiz.iI * sigma) * vRatio);
    var p$proxy6 = (+Math.ceil(p$proxy5));
    var other$proxy5 = (0.5 * $thiz.bw);
    var my = (+Math.min(p$proxy6, other$proxy5));
    var pw = $doubleToInt(($thiz.gD + (2.0 * mx)));
    var ph = $doubleToInt(($thiz.bw + (2.0 * my)));
    $thiz.iH.it(pw, ph, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0));
    $thiz.iF.it(pw, ph, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0));
    var BufferBinding_this = $thiz.kK;
    var value$proxy7 = $thiz.bw;
    BufferBinding_this.P.H(BufferBinding_this.o, value$proxy7);
    var $x_2 = BufferBinding_this.O.queue;
    var $x_1 = BufferBinding_this.K;
    var s$proxy7 = BufferBinding_this.o;
    $x_2.writeBuffer($x_1, 0.0, s$proxy7.dv.buffer);
    $thiz.hH = ($thiz.gD / pw);
    $thiz.hI = ($thiz.bw / ph);
    var BufferBinding_this$3 = $thiz.kI;
    var value$proxy8 = new $c_Ltrivalibs_graphics_math_cpu_Vec4($thiz.hH, $thiz.hI, (mx / pw), (my / ph));
    BufferBinding_this$3.P.H(BufferBinding_this$3.o, value$proxy8);
    var $x_4 = BufferBinding_this$3.O.queue;
    var $x_3 = BufferBinding_this$3.K;
    var s$proxy8 = BufferBinding_this$3.o;
    $x_4.writeBuffer($x_3, 0.0, s$proxy8.dv.buffer);
  }
}
function $p_Lsketchlib_utils_mirror_MirrorReflection$$anon$1__default$proxy1$1__Ltrivalibs_graphics_scene_PerspectiveCamera($thiz) {
  throw new $c_sjs_js_JavaScriptException(Error("MirrorReflection.paint needs a camera (construct with `camera = \u2026`) or an explicit `vp` argument")).aE;
}
function $p_Lsketchlib_utils_mirror_MirrorReflection$$anon$1__default$proxy2$1__Ltrivalibs_graphics_math_cpu_Mat4($thiz) {
  var this$1 = (($thiz.iG !== null) ? $thiz.iG : $p_Lsketchlib_utils_mirror_MirrorReflection$$anon$1__default$proxy1$1__Ltrivalibs_graphics_scene_PerspectiveCamera($thiz));
  return $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().go(), this$1.i7, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), this$1.n5());
}
/** @constructor */
function $c_Lsketchlib_utils_mirror_MirrorReflection$$anon$1(mirrorPanel$1, resolvePanel$1, blurStrength$1, stretch$1, overscan$1, _blurPanel$1, uVisHeight$1, uCrop$1, uBlurStrength$1, strengthScale$1, uStretch$1, camera$1, reflMat$1, uVp$1, uInvVp$1, p$1) {
  this.iI = 0.0;
  this.iH = null;
  this.iF = null;
  this.kK = null;
  this.kI = null;
  this.iG = null;
  this.kF = null;
  this.kL = null;
  this.kJ = null;
  this.kE = null;
  this.kG = null;
  this.kH = null;
  this.gD = 0.0;
  this.bw = 0.0;
  this.kC = 0.0;
  this.kD = 0.0;
  this.hH = 0.0;
  this.hI = 0.0;
  this.iI = overscan$1;
  this.iH = mirrorPanel$1;
  this.iF = _blurPanel$1;
  this.kK = uVisHeight$1;
  this.kI = uCrop$1;
  this.iG = camera$1;
  this.kF = reflMat$1;
  this.kL = uVp$1;
  this.kJ = uInvVp$1;
  this.kE = p$1;
  this.kG = resolvePanel$1;
  this.kH = resolvePanel$1;
  this.gD = 0.0;
  this.bw = 0.0;
  this.kC = blurStrength$1;
  this.kD = stretch$1;
  this.hH = 1.0;
  this.hI = 1.0;
}
$p = $c_Lsketchlib_utils_mirror_MirrorReflection$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_mirror_MirrorReflection$$anon$1;
/** @constructor */
function $h_Lsketchlib_utils_mirror_MirrorReflection$$anon$1() {
}
$h_Lsketchlib_utils_mirror_MirrorReflection$$anon$1.prototype = $p;
$p.pp = (function(w, h) {
  var x = $doubleToInt(w);
  this.gD = ((x > 1) ? x : 1);
  var x$1 = $doubleToInt(h);
  this.bw = ((x$1 > 1) ? x$1 : 1);
  $p_Lsketchlib_utils_mirror_MirrorReflection$$anon$1__applySizing__V(this);
});
$p.pd = (function(vp) {
  var cameraVP = ((vp === (void 0)) ? $p_Lsketchlib_utils_mirror_MirrorReflection$$anon$1__default$proxy2$1__Ltrivalibs_graphics_math_cpu_Mat4(this) : vp);
  var m$1 = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().go(), new $c_Ltrivalibs_graphics_math_cpu_Mat4(this.hH, 0.0, 0.0, 0.0, 0.0, this.hI, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0), $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().go(), cameraVP, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), this.kF));
  var BufferBinding_this = this.kL;
  BufferBinding_this.P.H(BufferBinding_this.o, m$1);
  var $x_2 = BufferBinding_this.O.queue;
  var $x_1 = BufferBinding_this.K;
  var s$proxy11 = BufferBinding_this.o;
  $x_2.writeBuffer($x_1, 0.0, s$proxy11.dv.buffer);
  var BufferBinding_this$3 = this.kJ;
  var value$proxy10 = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().go(), m$1, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
  BufferBinding_this$3.P.H(BufferBinding_this$3.o, value$proxy10);
  var $x_4 = BufferBinding_this$3.O.queue;
  var $x_3 = BufferBinding_this$3.K;
  var s$proxy12 = BufferBinding_this$3.o;
  $x_4.writeBuffer($x_3, 0.0, s$proxy12.dv.buffer);
  var Painter_this = this.kE;
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.iH);
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.iF);
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.kG);
});
var $d_Lsketchlib_utils_mirror_MirrorReflection$$anon$1 = new $TypeData().i($c_Lsketchlib_utils_mirror_MirrorReflection$$anon$1, "sketchlib.utils.mirror.MirrorReflection$$anon$1", ({
  dE: 1,
  dC: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT(uv) {
  this.aF = null;
  this.aF = uv;
}
$p = $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT() {
}
$h_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT.prototype = $p;
var $d_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT, "trivalibs.graphics.buffers.UniformLayout$given_UniformLayout_T", ({
  dJ: 1,
  dI: 1
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
$p.pW = (function(ref, value) {
  var value$proxy1 = Math.fround(value);
  var offset$proxy3 = (ref.off | 0);
  ref.dv.setFloat32(offset$proxy3, value$proxy1, true);
});
$p.H = (function(ref, value) {
  this.pW(ref, (+value));
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Double_$times$colon$", ({
  dK: 1,
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
$p.H = (function(ref, value) {
  $f_Ltrivalibs_graphics_math_Mat4MutableOps__set__O__Ltrivalibs_graphics_math_Mat4Mutable__O__Ltrivalibs_graphics_math_Mat4Base__V($m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$().oe(), ref, $m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$(), value, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Mat4_Mat4Buffer$", ({
  dL: 1,
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
function $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$() {
}
$p = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$() {
}
$h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$.prototype = $p;
$p.H = (function(ref, value) {
  $f_Ltrivalibs_graphics_math_Vec2MutableOps__set__O__Ltrivalibs_graphics_math_Vec2Mutable__O__Ltrivalibs_graphics_math_Vec2Base__V($m_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$().pP(), ref, $m_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$(), value, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$());
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Vec2_Vec2Buffer$", ({
  dM: 1,
  F: 1
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
$p.pX = (function(ref, value) {
  var value$proxy2 = value.w;
  var value$proxy3 = Math.fround(value$proxy2);
  var offset$proxy5 = (ref.off | 0);
  ref.dv.setFloat32(offset$proxy5, value$proxy3, true);
  var value$proxy4 = value.z;
  var value$proxy5 = Math.fround(value$proxy4);
  var offset$proxy6 = ((4 + (ref.off | 0)) | 0);
  ref.dv.setFloat32(offset$proxy6, value$proxy5, true);
  var value$proxy6 = value.x;
  var value$proxy7 = Math.fround(value$proxy6);
  var offset$proxy7 = ((8 + (ref.off | 0)) | 0);
  ref.dv.setFloat32(offset$proxy7, value$proxy7, true);
});
$p.H = (function(ref, value) {
  this.pX(ref, value);
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Vec3_Vec4Buffer$", ({
  dN: 1,
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
$p.H = (function(ref, value) {
  $f_Ltrivalibs_graphics_math_Vec4MutableOps__set__O__Ltrivalibs_graphics_math_Vec4Mutable__O__Ltrivalibs_graphics_math_Vec4Base__V($m_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$().pQ(), ref, $m_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$(), value, $m_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$());
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Vec4_Vec4Buffer$", ({
  dO: 1,
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
$p.fG = (function(t) {
  return new $c_T2(t.hP, t.hQ);
});
var $d_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$, "trivalibs.graphics.geometry.FieldWriter$vec2Writer$", ({
  dT: 1,
  aV: 1
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
$p.fG = (function(t) {
  return new $c_T3(t.w, t.z, t.x);
});
var $d_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$, "trivalibs.graphics.geometry.FieldWriter$vec3Writer$", ({
  dU: 1,
  aV: 1
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
  this.iL = null;
  this.iL = x$1;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexLayout$named.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexLayout$named;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexLayout$named() {
}
$h_Ltrivalibs_graphics_geometry_VertexLayout$named.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_VertexLayout$named = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayout$named, "trivalibs.graphics.geometry.VertexLayout$named", ({
  e2: 1,
  e1: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons(x$1, x$2) {
  this.kW = null;
  this.kX = null;
  this.kW = x$1;
  this.kX = x$2;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons() {
}
$h_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons.prototype = $p;
$p.pO = (function(t) {
  return $m_sr_Tuples$().mk(this.kW.fG(t.m(0)), this.kX.fG($m_sr_Tuples$().pF(t)));
});
$p.fG = (function(t) {
  return this.pO(t);
});
var $d_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons, "trivalibs.graphics.geometry.VertexLayoutHelper$cons", ({
  e3: 1,
  aW: 1
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
$p.fG = (function(t) {
  return $m_T$package$EmptyTuple$();
});
var $d_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$, "trivalibs.graphics.geometry.VertexLayoutHelper$nil$", ({
  e4: 1,
  aW: 1
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
  this.kZ = 0;
  this.kZ = idx$2;
}
$p = $c_Ltrivalibs_graphics_geometry_package$package$$anon$1.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_package$package$$anon$1;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_package$package$$anon$1() {
}
$h_Ltrivalibs_graphics_geometry_package$package$$anon$1.prototype = $p;
$p.bk = (function(t) {
  return t.m(this.kZ);
});
var $d_Ltrivalibs_graphics_geometry_package$package$$anon$1 = new $TypeData().i($c_Ltrivalibs_graphics_geometry_package$package$$anon$1, "trivalibs.graphics.geometry.package$package$$anon$1", ({
  e9: 1,
  dZ: 1
}));
function $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D($thiz, v, other) {
  return (((v.w * other.w) + (v.z * other.z)) + (v.x * other.x));
}
function $f_Ltrivalibs_graphics_math_Vec3Base__length__O__D($thiz, v) {
  var p$proxy1 = $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D($thiz, v, v);
  return (+Math.sqrt(p$proxy1));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat4$() {
  this.l0 = null;
  this.l1 = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat4$() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat4$.prototype = $p;
$p.go = (function() {
  if ((!this.l1)) {
    this.l0 = $m_Ltrivalibs_graphics_math_cpu_Mat4$();
    this.l1 = true;
  }
  return this.l0;
});
$p.mu = (function(t, r, s) {
  var x = r.hM;
  var y = r.hN;
  var z = r.hO;
  var w = r.hL;
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
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4(((1.0 - (yy + zz)) * s.w), ((xy + wz) * s.w), ((xz - wy) * s.w), 0.0, ((xy - wz) * s.z), ((1.0 - (xx + zz)) * s.z), ((yz + wx) * s.z), 0.0, ((xz + wy) * s.x), ((yz - wx) * s.x), ((1.0 - (xx + yy)) * s.x), 0.0, t.w, t.z, t.x, 1.0);
});
var $d_Ltrivalibs_graphics_math_cpu_Mat4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4$, "trivalibs.graphics.math.cpu.Mat4$", ({
  eo: 1,
  ec: 1
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
  es: 1,
  eu: 1
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
  this.l2 = null;
  this.l3 = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec3$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec3$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec3$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec3$.prototype = $p;
$p.a6 = (function() {
  if ((!this.l3)) {
    this.l2 = $m_Ltrivalibs_graphics_math_cpu_Vec3$();
    this.l3 = true;
  }
  return this.l2;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3$, "trivalibs.graphics.math.cpu.Vec3$", ({
  ey: 1,
  ei: 1
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
  eD: 1,
  ee: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$4() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$4.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$4;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$4() {
}
$h_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$4.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$4 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$4, "trivalibs.graphics.math.cpu.vec2$package$Vec2Buffer$$anon$4", ({
  eG: 1,
  eg: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$6() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$6.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$6;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$6() {
}
$h_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$6.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$6 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$6, "trivalibs.graphics.math.cpu.vec4$package$Vec4Buffer$$anon$6", ({
  eJ: 1,
  em: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1(f$2) {
  this.la = null;
  this.la = f$2;
}
$p = $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1() {
}
$h_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1.prototype = $p;
$p.b9 = (function(s) {
  return this.la.h(s);
});
var $d_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1, "trivalibs.graphics.math.gpu.LeftScalar$$anon$1", ({
  eN: 1,
  eL: 1
}));
function $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__($thiz, name) {
  $thiz.fv = name;
  $ct_Ltrivalibs_graphics_math_gpu_Expr__T__($thiz, name);
  return $thiz;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_LetExpr() {
  this.d = null;
  this.fv = null;
}
$p = $c_Ltrivalibs_graphics_math_gpu_LetExpr.prototype = new $h_Ltrivalibs_graphics_math_gpu_Expr();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_LetExpr;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_LetExpr() {
}
$h_Ltrivalibs_graphics_math_gpu_LetExpr.prototype = $p;
$p.S = (function(value) {
  return (((("  let " + this.fv) + " = ") + value.d) + ";");
});
var $d_Ltrivalibs_graphics_math_gpu_LetExpr = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_LetExpr, "trivalibs.graphics.math.gpu.LetExpr", ({
  b2: 1,
  a1: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$4() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$4.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$4;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$4() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$4.prototype = $p;
$p.hB = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.d + ".x"));
});
$p.hC = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.d + ".y"));
});
$p.I = (function(v) {
  return this.hB(v);
});
$p.B = (function(v) {
  return this.hC(v);
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$4 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$4, "trivalibs.graphics.math.gpu.float_expr$package$$anon$4", ({
  eU: 1,
  Y: 1
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
$p.hB = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.d + ".x"));
});
$p.hC = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.d + ".y"));
});
$p.k0 = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.d + ".z"));
});
$p.nV = (function(v, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("dot(" + v.d) + ", ") + other.d) + ")"));
});
$p.I = (function(v) {
  return this.hB(v);
});
$p.B = (function(v) {
  return this.hC(v);
});
$p.an = (function(v) {
  return this.k0(v);
});
$p.mn = (function(v, other) {
  return this.nV(v, other);
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5, "trivalibs.graphics.math.gpu.float_expr$package$$anon$5", ({
  eV: 1,
  b1: 1
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
$p.hB = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.d + ".x"));
});
$p.hC = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.d + ".y"));
});
$p.k0 = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.d + ".z"));
});
$p.pS = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.d + ".w"));
});
$p.I = (function(v) {
  return this.hB(v);
});
$p.B = (function(v) {
  return this.hC(v);
});
$p.an = (function(v) {
  return this.k0(v);
});
$p.am = (function(v) {
  return this.pS(v);
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6, "trivalibs.graphics.math.gpu.float_expr$package$$anon$6", ({
  eW: 1,
  K: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$9() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$9.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$9;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$9() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$9.prototype = $p;
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$9 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$9, "trivalibs.graphics.math.gpu.float_expr$package$$anon$9", ({
  eX: 1,
  X: 1
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
$p.p0 = (function(m, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + m.d) + " * ") + other.d) + ")"));
});
$p.gp = (function(m, x$2, v, x$4, x$5) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + m.d) + " * ") + v.d) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Mat4ImmutableOpsG_FloatExpr_Mat4Expr$", ({
  eY: 1,
  ed: 1
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
$p.m7 = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("abs(" + a.d) + ")"));
});
$p.ms = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("fract(" + a.d) + ")"));
});
$p.or = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("log2(" + a.d) + ")"));
});
$p.mR = (function(a, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("min(" + a.d) + ", ") + other.d) + ")"));
});
$p.p1 = (function(a, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("max(" + a.d) + ", ") + other.d) + ")"));
});
$p.mj = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("saturate(" + a.d) + ")"));
});
$p.o7 = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(" + a.d) + " * 0.5 + 0.5)"));
});
$p.p3 = (function(a, b, t) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("mix(" + a.d) + ", ") + b.d) + ", ") + t.d) + ")"));
});
$p.bE = (function(a, edge0, edge1) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("smoothstep(" + edge0.d) + ", ") + edge1.d) + ", ") + a.d) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$, "trivalibs.graphics.math.gpu.float_expr$package$given_NumExt_FloatExpr$", ({
  eZ: 1,
  g2: 1
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
$p.aV = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.d) + " + ") + b.d) + ")"));
});
$p.h6 = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.d) + " - ") + b.d) + ")"));
});
$p.bh = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.d) + " * ") + b.d) + ")"));
});
$p.jE = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.d) + " / ") + b.d) + ")"));
});
$p.n3 = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(-" + a.d) + ")"));
});
$p.jF = (function(a, b) {
  return this.aV(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(b));
});
$p.m6 = (function(a, b) {
  return this.h6(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(b));
});
$p.a1 = (function(a, b) {
  return this.bh(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(b));
});
$p.jD = (function(a, b) {
  return this.jE(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(b));
});
$p.o3 = (function(a, v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.d) + " * ") + v.d) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$, "trivalibs.graphics.math.gpu.float_expr$package$given_NumOps_FloatExpr$", ({
  f0: 1,
  g3: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$;
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
$p.nm = (function(v, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.d) + " + ") + other.d) + ")"));
});
$p.jR = (function(v, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.d) + " - ") + other.d) + ")"));
});
$p.p6 = (function(v, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.d) + " * ") + other.d) + ")"));
});
$p.nS = (function(v, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.d) + " / ") + other.d) + ")"));
});
$p.o6 = (function(v, x$2) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(" + v.d) + " * 2.0 - 1.0)"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec2ImmutableOpsG_FloatExpr_Vec2Expr$", ({
  f1: 1,
  ef: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$;
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
$p.m8 = (function(v, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.d) + " + ") + other.d) + ")"));
});
$p.bC = (function(v, x$2, scalar) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.d) + " * ") + scalar.d) + ")"));
});
$p.jG = (function(v, x$2, scalar) {
  return this.bC(v, x$2, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(scalar));
});
$p.nR = (function(v, x$2, scalar) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.d) + " / ") + scalar.d) + ")"));
});
$p.nL = (function(v, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("cross(" + v.d) + ", ") + other.d) + ")"));
});
$p.p9 = (function(v, x$2) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("normalize(" + v.d) + ")"));
});
$p.p4 = (function(v, x$2, b, t) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("mix(" + v.d) + ", ") + b.d) + ", ") + t.d) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec3ImmutableOpsG_FloatExpr_Vec3Expr$", ({
  f2: 1,
  ej: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$;
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
$p.ij = (function(v, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.d) + " + ") + other.d) + ")"));
});
$p.mT = (function(v, x$2, scalar) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.d) + " * ") + scalar.d) + ")"));
});
$p.ih = (function(v, x$2, scalar) {
  return this.mT(v, x$2, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().h(scalar));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec4ImmutableOpsG_FloatExpr_Vec4Expr$", ({
  f3: 1,
  el: 1
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
  this.gb = null;
  this.y = null;
  this.ja = null;
  this.hU = 0;
  this.gK = 0;
  this.i = null;
  this.U = null;
  this.L = null;
  this.jb = null;
  this.gb = painter;
  this.y = shade;
  this.ja = null;
  this.hU = (-1);
  this.gK = (-1);
  this.i = [];
  this.U = [];
  this.L = null;
  this.jb = new $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter);
}
$p = $c_Ltrivalibs_graphics_painter_Layer.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Layer;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Layer() {
}
$h_Ltrivalibs_graphics_painter_Layer.prototype = $p;
$p.mg = (function() {
  return ((this.y.i4 !== null) && (((this.U.length | 0) === 0) || (this.U[0] === null)));
});
$p.px = (function(blendState, mipSource, mipTarget) {
  if ((blendState !== (void 0))) {
    this.ja = blendState;
  }
  if ((mipSource !== (void 0))) {
    var v = (mipSource | 0);
    this.hU = v;
  }
  if ((mipTarget !== (void 0))) {
    var v$1 = (mipTarget | 0);
    this.gK = v$1;
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Layer = new $TypeData().i($c_Ltrivalibs_graphics_painter_Layer, "trivalibs.graphics.painter.Layer", ({
  fc: 1,
  b3: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Shape(painter, form, shade) {
  this.aS = null;
  this.a0 = null;
  this.ji = null;
  this.jh = null;
  this.Q = null;
  this.a8 = null;
  this.jj = null;
  this.aS = form;
  this.a0 = shade;
  this.ji = "none";
  this.jh = null;
  this.Q = [];
  this.a8 = [];
  this.jj = new $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter);
}
$p = $c_Ltrivalibs_graphics_painter_Shape.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Shape;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Shape() {
}
$h_Ltrivalibs_graphics_painter_Shape.prototype = $p;
$p.py = (function(cullMode, blendState) {
  if ((cullMode !== (void 0))) {
    this.ji = cullMode;
  }
  if ((blendState !== (void 0))) {
    this.jh = blendState;
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Shape = new $TypeData().i($c_Ltrivalibs_graphics_painter_Shape, "trivalibs.graphics.painter.Shape", ({
  fi: 1,
  b3: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform(inner) {
  this.V = null;
  this.V = inner;
}
$p = $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform() {
}
$h_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform.prototype = $p;
$p.v = (function() {
  return this.V.v();
});
var $d_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform = new $TypeData().i($c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform, "trivalibs.graphics.shader.FragmentUniform$given_WGSLType_FragmentUniform", ({
  fq: 1,
  t: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform(inner) {
  this.by = null;
  this.by = inner;
}
$p = $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform() {
}
$h_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform.prototype = $p;
$p.v = (function() {
  return this.by.v();
});
var $d_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform = new $TypeData().i($c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform, "trivalibs.graphics.shader.VertexUniform$given_WGSLType_VertexUniform", ({
  fr: 1,
  t: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor(prefix) {
  this.jq = null;
  this.jq = prefix;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor.prototype = $p;
$p.a3 = (function(name) {
  return new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget(((this.jq === "") ? name : ((this.jq + ".") + name)));
});
var $d_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor, "trivalibs.graphics.shader.dsl.TypedAssignAccessor", ({
  fz: 1,
  D: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(prefix) {
  this.jr = null;
  this.jr = prefix;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor.prototype = $p;
$p.k = (function(name) {
  return ((this.jr === "") ? $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), name) : $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), ((this.jr + ".") + name)));
});
var $d_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor, "trivalibs.graphics.shader.dsl.TypedExprAccessor", ({
  fA: 1,
  D: 1
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
  fB: 1,
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
  fC: 1,
  D: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_VertexOut(prefix) {
  this.lP = null;
  this.gW = null;
  this.lP = prefix;
  this.gW = new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget((prefix + ".position"));
}
$p = $c_Ltrivalibs_graphics_shader_dsl_VertexOut.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_VertexOut;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_VertexOut() {
}
$h_Ltrivalibs_graphics_shader_dsl_VertexOut.prototype = $p;
$p.a3 = (function(name) {
  return new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget(((this.lP + ".") + name));
});
var $d_Ltrivalibs_graphics_shader_dsl_VertexOut = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_VertexOut, "trivalibs.graphics.shader.dsl.VertexOut", ({
  fE: 1,
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
$p.v = (function() {
  return "f32";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$, "trivalibs.graphics.shader.types$package$given_WGSLType_Float$", ({
  fL: 1,
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
$p.v = (function() {
  return "mat4x4<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$, "trivalibs.graphics.shader.types$package$given_WGSLType_Mat4$", ({
  fM: 1,
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
$p.v = (function() {
  return "sampler";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$, "trivalibs.graphics.shader.types$package$given_WGSLType_Sampler$", ({
  fN: 1,
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
$p.v = (function() {
  return "vec2<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$, "trivalibs.graphics.shader.types$package$given_WGSLType_Vec2$", ({
  fO: 1,
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
$p.v = (function() {
  return "vec3<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$, "trivalibs.graphics.shader.types$package$given_WGSLType_Vec3$", ({
  fP: 1,
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
$p.v = (function() {
  return "vec4<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$, "trivalibs.graphics.shader.types$package$given_WGSLType_Vec4$", ({
  fQ: 1,
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
  this.iw = $data;
}
$p = $c_jl_Class.prototype = new $h_O();
$p.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
}
$h_jl_Class.prototype = $p;
$p.n = (function() {
  return ((this.iw.Y ? "interface " : (this.iw.X ? "" : "class ")) + this.iw.N);
});
var $d_jl_Class = new $TypeData().i($c_jl_Class, "java.lang.Class", ({
  bc: 1,
  a: 1,
  h: 1
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
  bJ: 1,
  bG: 1,
  bH: 1
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
    return $thiz.fJ;
  } else {
    throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 0)"));
  }
}
function $f_s_Product10__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fK;
      break;
    }
    case 1: {
      return $thiz.bH;
      break;
    }
    case 2: {
      return $thiz.bI;
      break;
    }
    case 3: {
      return $thiz.bJ;
      break;
    }
    case 4: {
      return $thiz.bK;
      break;
    }
    case 5: {
      return $thiz.bL;
      break;
    }
    case 6: {
      return $thiz.bM;
      break;
    }
    case 7: {
      return $thiz.bN;
      break;
    }
    case 8: {
      return $thiz.bO;
      break;
    }
    case 9: {
      return $thiz.bG;
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
      return $thiz.fL;
      break;
    }
    case 1: {
      return $thiz.bR;
      break;
    }
    case 2: {
      return $thiz.bS;
      break;
    }
    case 3: {
      return $thiz.bT;
      break;
    }
    case 4: {
      return $thiz.bU;
      break;
    }
    case 5: {
      return $thiz.bV;
      break;
    }
    case 6: {
      return $thiz.bW;
      break;
    }
    case 7: {
      return $thiz.bX;
      break;
    }
    case 8: {
      return $thiz.bY;
      break;
    }
    case 9: {
      return $thiz.bP;
      break;
    }
    case 10: {
      return $thiz.bQ;
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
      return $thiz.fM;
      break;
    }
    case 1: {
      return $thiz.c2;
      break;
    }
    case 2: {
      return $thiz.c3;
      break;
    }
    case 3: {
      return $thiz.c4;
      break;
    }
    case 4: {
      return $thiz.c5;
      break;
    }
    case 5: {
      return $thiz.c6;
      break;
    }
    case 6: {
      return $thiz.c7;
      break;
    }
    case 7: {
      return $thiz.c8;
      break;
    }
    case 8: {
      return $thiz.c9;
      break;
    }
    case 9: {
      return $thiz.bZ;
      break;
    }
    case 10: {
      return $thiz.c0;
      break;
    }
    case 11: {
      return $thiz.c1;
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
      return $thiz.fN;
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
      return $thiz.ca;
      break;
    }
    case 10: {
      return $thiz.cb;
      break;
    }
    case 11: {
      return $thiz.cc;
      break;
    }
    case 12: {
      return $thiz.cd;
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
      return $thiz.fO;
      break;
    }
    case 1: {
      return $thiz.cr;
      break;
    }
    case 2: {
      return $thiz.cs;
      break;
    }
    case 3: {
      return $thiz.ct;
      break;
    }
    case 4: {
      return $thiz.cu;
      break;
    }
    case 5: {
      return $thiz.cv;
      break;
    }
    case 6: {
      return $thiz.cw;
      break;
    }
    case 7: {
      return $thiz.cx;
      break;
    }
    case 8: {
      return $thiz.cy;
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
    case 13: {
      return $thiz.cq;
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
      return $thiz.fP;
      break;
    }
    case 1: {
      return $thiz.cF;
      break;
    }
    case 2: {
      return $thiz.cG;
      break;
    }
    case 3: {
      return $thiz.cH;
      break;
    }
    case 4: {
      return $thiz.cI;
      break;
    }
    case 5: {
      return $thiz.cJ;
      break;
    }
    case 6: {
      return $thiz.cK;
      break;
    }
    case 7: {
      return $thiz.cL;
      break;
    }
    case 8: {
      return $thiz.cM;
      break;
    }
    case 9: {
      return $thiz.cz;
      break;
    }
    case 10: {
      return $thiz.cA;
      break;
    }
    case 11: {
      return $thiz.cB;
      break;
    }
    case 12: {
      return $thiz.cC;
      break;
    }
    case 13: {
      return $thiz.cD;
      break;
    }
    case 14: {
      return $thiz.cE;
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
      return $thiz.fQ;
      break;
    }
    case 1: {
      return $thiz.cU;
      break;
    }
    case 2: {
      return $thiz.cV;
      break;
    }
    case 3: {
      return $thiz.cW;
      break;
    }
    case 4: {
      return $thiz.cX;
      break;
    }
    case 5: {
      return $thiz.cY;
      break;
    }
    case 6: {
      return $thiz.cZ;
      break;
    }
    case 7: {
      return $thiz.d0;
      break;
    }
    case 8: {
      return $thiz.d1;
      break;
    }
    case 9: {
      return $thiz.cN;
      break;
    }
    case 10: {
      return $thiz.cO;
      break;
    }
    case 11: {
      return $thiz.cP;
      break;
    }
    case 12: {
      return $thiz.cQ;
      break;
    }
    case 13: {
      return $thiz.cR;
      break;
    }
    case 14: {
      return $thiz.cS;
      break;
    }
    case 15: {
      return $thiz.cT;
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
      return $thiz.fR;
      break;
    }
    case 1: {
      return $thiz.da;
      break;
    }
    case 2: {
      return $thiz.db;
      break;
    }
    case 3: {
      return $thiz.dc;
      break;
    }
    case 4: {
      return $thiz.dd;
      break;
    }
    case 5: {
      return $thiz.de;
      break;
    }
    case 6: {
      return $thiz.df;
      break;
    }
    case 7: {
      return $thiz.dg;
      break;
    }
    case 8: {
      return $thiz.dh;
      break;
    }
    case 9: {
      return $thiz.d2;
      break;
    }
    case 10: {
      return $thiz.d3;
      break;
    }
    case 11: {
      return $thiz.d4;
      break;
    }
    case 12: {
      return $thiz.d5;
      break;
    }
    case 13: {
      return $thiz.d6;
      break;
    }
    case 14: {
      return $thiz.d7;
      break;
    }
    case 15: {
      return $thiz.d8;
      break;
    }
    case 16: {
      return $thiz.d9;
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
      return $thiz.fS;
      break;
    }
    case 1: {
      return $thiz.ds;
      break;
    }
    case 2: {
      return $thiz.dt;
      break;
    }
    case 3: {
      return $thiz.du;
      break;
    }
    case 4: {
      return $thiz.dv;
      break;
    }
    case 5: {
      return $thiz.dw;
      break;
    }
    case 6: {
      return $thiz.dx;
      break;
    }
    case 7: {
      return $thiz.dy;
      break;
    }
    case 8: {
      return $thiz.dz;
      break;
    }
    case 9: {
      return $thiz.di;
      break;
    }
    case 10: {
      return $thiz.dj;
      break;
    }
    case 11: {
      return $thiz.dk;
      break;
    }
    case 12: {
      return $thiz.dl;
      break;
    }
    case 13: {
      return $thiz.dm;
      break;
    }
    case 14: {
      return $thiz.dn;
      break;
    }
    case 15: {
      return $thiz.dp;
      break;
    }
    case 16: {
      return $thiz.dq;
      break;
    }
    case 17: {
      return $thiz.dr;
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
      return $thiz.fT;
      break;
    }
    case 1: {
      return $thiz.dK;
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
      return $thiz.dA;
      break;
    }
    case 10: {
      return $thiz.dB;
      break;
    }
    case 11: {
      return $thiz.dC;
      break;
    }
    case 12: {
      return $thiz.dD;
      break;
    }
    case 13: {
      return $thiz.dE;
      break;
    }
    case 14: {
      return $thiz.dF;
      break;
    }
    case 15: {
      return $thiz.dG;
      break;
    }
    case 16: {
      return $thiz.dH;
      break;
    }
    case 17: {
      return $thiz.dI;
      break;
    }
    case 18: {
      return $thiz.dJ;
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
      return $thiz.Z;
      break;
    }
    case 1: {
      return $thiz.au;
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
      return $thiz.fU;
      break;
    }
    case 1: {
      return $thiz.e2;
      break;
    }
    case 2: {
      return $thiz.e4;
      break;
    }
    case 3: {
      return $thiz.e5;
      break;
    }
    case 4: {
      return $thiz.e6;
      break;
    }
    case 5: {
      return $thiz.e7;
      break;
    }
    case 6: {
      return $thiz.e8;
      break;
    }
    case 7: {
      return $thiz.e9;
      break;
    }
    case 8: {
      return $thiz.ea;
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
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 19)"));
    }
  }
}
function $f_s_Product21__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fV;
      break;
    }
    case 1: {
      return $thiz.el;
      break;
    }
    case 2: {
      return $thiz.eo;
      break;
    }
    case 3: {
      return $thiz.ep;
      break;
    }
    case 4: {
      return $thiz.eq;
      break;
    }
    case 5: {
      return $thiz.er;
      break;
    }
    case 6: {
      return $thiz.es;
      break;
    }
    case 7: {
      return $thiz.et;
      break;
    }
    case 8: {
      return $thiz.eu;
      break;
    }
    case 9: {
      return $thiz.eb;
      break;
    }
    case 10: {
      return $thiz.ec;
      break;
    }
    case 11: {
      return $thiz.ed;
      break;
    }
    case 12: {
      return $thiz.ee;
      break;
    }
    case 13: {
      return $thiz.ef;
      break;
    }
    case 14: {
      return $thiz.eg;
      break;
    }
    case 15: {
      return $thiz.eh;
      break;
    }
    case 16: {
      return $thiz.ei;
      break;
    }
    case 17: {
      return $thiz.ej;
      break;
    }
    case 18: {
      return $thiz.ek;
      break;
    }
    case 19: {
      return $thiz.em;
      break;
    }
    case 20: {
      return $thiz.en;
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
      return $thiz.fW;
      break;
    }
    case 1: {
      return $thiz.eF;
      break;
    }
    case 2: {
      return $thiz.eJ;
      break;
    }
    case 3: {
      return $thiz.eK;
      break;
    }
    case 4: {
      return $thiz.eL;
      break;
    }
    case 5: {
      return $thiz.eM;
      break;
    }
    case 6: {
      return $thiz.eN;
      break;
    }
    case 7: {
      return $thiz.eO;
      break;
    }
    case 8: {
      return $thiz.eP;
      break;
    }
    case 9: {
      return $thiz.ev;
      break;
    }
    case 10: {
      return $thiz.ew;
      break;
    }
    case 11: {
      return $thiz.ex;
      break;
    }
    case 12: {
      return $thiz.ey;
      break;
    }
    case 13: {
      return $thiz.ez;
      break;
    }
    case 14: {
      return $thiz.eA;
      break;
    }
    case 15: {
      return $thiz.eB;
      break;
    }
    case 16: {
      return $thiz.eC;
      break;
    }
    case 17: {
      return $thiz.eD;
      break;
    }
    case 18: {
      return $thiz.eE;
      break;
    }
    case 19: {
      return $thiz.eG;
      break;
    }
    case 20: {
      return $thiz.eH;
      break;
    }
    case 21: {
      return $thiz.eI;
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
      return $thiz.bl;
      break;
    }
    case 1: {
      return $thiz.ba;
      break;
    }
    case 2: {
      return $thiz.bb;
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
      return $thiz.eQ;
      break;
    }
    case 1: {
      return $thiz.bm;
      break;
    }
    case 2: {
      return $thiz.bn;
      break;
    }
    case 3: {
      return $thiz.bo;
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
      return $thiz.fX;
      break;
    }
    case 1: {
      return $thiz.eR;
      break;
    }
    case 2: {
      return $thiz.eS;
      break;
    }
    case 3: {
      return $thiz.eT;
      break;
    }
    case 4: {
      return $thiz.eU;
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
      return $thiz.fY;
      break;
    }
    case 1: {
      return $thiz.eV;
      break;
    }
    case 2: {
      return $thiz.eW;
      break;
    }
    case 3: {
      return $thiz.eX;
      break;
    }
    case 4: {
      return $thiz.eY;
      break;
    }
    case 5: {
      return $thiz.eZ;
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
      return $thiz.fZ;
      break;
    }
    case 1: {
      return $thiz.f0;
      break;
    }
    case 2: {
      return $thiz.f1;
      break;
    }
    case 3: {
      return $thiz.f2;
      break;
    }
    case 4: {
      return $thiz.f3;
      break;
    }
    case 5: {
      return $thiz.f4;
      break;
    }
    case 6: {
      return $thiz.f5;
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
      return $thiz.g0;
      break;
    }
    case 1: {
      return $thiz.f6;
      break;
    }
    case 2: {
      return $thiz.f7;
      break;
    }
    case 3: {
      return $thiz.f8;
      break;
    }
    case 4: {
      return $thiz.f9;
      break;
    }
    case 5: {
      return $thiz.fa;
      break;
    }
    case 6: {
      return $thiz.fb;
      break;
    }
    case 7: {
      return $thiz.fc;
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
      return $thiz.g1;
      break;
    }
    case 1: {
      return $thiz.fd;
      break;
    }
    case 2: {
      return $thiz.fe;
      break;
    }
    case 3: {
      return $thiz.ff;
      break;
    }
    case 4: {
      return $thiz.fg;
      break;
    }
    case 5: {
      return $thiz.fh;
      break;
    }
    case 6: {
      return $thiz.fi;
      break;
    }
    case 7: {
      return $thiz.fj;
      break;
    }
    case 8: {
      return $thiz.fk;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 8)"));
    }
  }
}
function $f_sc_Iterator__concat__F0__sc_Iterator($thiz, xs) {
  return new $c_sc_Iterator$ConcatIterator($thiz).nJ(xs);
}
function $f_sc_Iterator__sliceIterator__I__I__sc_Iterator($thiz, from, until) {
  var lo = ((from > 0) ? from : 0);
  var rest = ((until < 0) ? (-1) : ((until <= lo) ? 0 : ((until - lo) | 0)));
  return ((rest === 0) ? $m_sc_Iterator$().b0 : new $c_sc_Iterator$SliceIterator($thiz, lo, rest));
}
function $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz, that) {
  var those = that.ac();
  while ($thiz.N()) {
    if ((!those.N())) {
      return false;
    }
    if ((!$m_sr_BoxesRunTime$().c($thiz.E(), those.E()))) {
      return false;
    }
  }
  return (!those.N());
}
/** @constructor */
function $c_sc_Iterator$() {
  this.b0 = null;
  $n_sc_Iterator$ = this;
  this.b0 = new $c_sc_Iterator$$anon$19();
}
$p = $c_sc_Iterator$.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
}
$h_sc_Iterator$.prototype = $p;
var $d_sc_Iterator$ = new $TypeData().i($c_sc_Iterator$, "scala.collection.Iterator$", ({
  cf: 1,
  a: 1,
  aA: 1
}));
var $n_sc_Iterator$;
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$();
  }
  return $n_sc_Iterator$;
}
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cL)));
}
/** @constructor */
function $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(f) {
  this.kj = null;
  this.kj = f;
}
$p = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = new $h_sr_AbstractFunction0();
$p.constructor = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c;
/** @constructor */
function $h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c() {
}
$h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = $p;
$p.h7 = (function() {
  return (0, this.kj)();
});
var $d_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c = new $TypeData().i($c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c, "scala.runtime.AbstractFunction0.$$Lambda$07eded5776954a9c145e92c329afd52873ad179c", ({
  cU: 1,
  cT: 1,
  bB: 1
}));
/** @constructor */
function $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(f) {
  this.kk = null;
  this.kk = f;
}
$p = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919;
/** @constructor */
function $h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919() {
}
$h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = $p;
$p.h = (function(x0) {
  return (0, this.kk)(x0);
});
var $d_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919 = new $TypeData().i($c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919, "scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919", ({
  cW: 1,
  cV: 1,
  g: 1
}));
/** @constructor */
function $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(f) {
  this.kl = null;
  this.kl = f;
}
$p = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = new $h_sr_AbstractFunction2();
$p.constructor = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8;
/** @constructor */
function $h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8() {
}
$h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = $p;
$p.b7 = (function(x0, x1) {
  return (0, this.kl)(x0, x1);
});
var $d_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8 = new $TypeData().i($c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8, "scala.runtime.AbstractFunction2.$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8", ({
  cY: 1,
  cX: 1,
  bC: 1
}));
/** @constructor */
function $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(f) {
  this.km = null;
  this.km = f;
}
$p = $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825.prototype = new $h_sr_AbstractFunction3();
$p.constructor = $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825;
/** @constructor */
function $h_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825() {
}
$h_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825.prototype = $p;
$p.ma = (function(x0, x1, x2) {
  return (0, this.km)(x0, x1, x2);
});
var $d_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825 = new $TypeData().i($c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825, "scala.runtime.AbstractFunction3.$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825", ({
  d0: 1,
  cZ: 1,
  bD: 1
}));
/** @constructor */
function $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(f) {
  this.kn = null;
  this.kn = f;
}
$p = $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a.prototype = new $h_sr_AbstractFunction4();
$p.constructor = $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a;
/** @constructor */
function $h_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a() {
}
$h_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a.prototype = $p;
$p.m9 = (function(x0, x1, x2, x3) {
  return (0, this.kn)(x0, x1, x2, x3);
});
var $d_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a = new $TypeData().i($c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a, "scala.runtime.AbstractFunction4.$$Lambda$451042f443265710aa66de6985cba67480d9b00a", ({
  d2: 1,
  d1: 1,
  bE: 1
}));
/** @constructor */
function $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078(f) {
  this.ko = null;
  this.ko = f;
}
$p = $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078.prototype = new $h_sr_AbstractFunction5();
$p.constructor = $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078;
/** @constructor */
function $h_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078() {
}
$h_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078.prototype = $p;
$p.np = (function(x0, x1, x2, x3, x4) {
  return (0, this.ko)(x0, x1, x2, x3, x4);
});
var $d_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078 = new $TypeData().i($c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078, "scala.runtime.AbstractFunction5.$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078", ({
  d4: 1,
  d3: 1,
  bF: 1
}));
var $d_sr_Nothing$ = new $TypeData().i(0, "scala.runtime.Nothing$", ({
  d6: 1,
  f: 1,
  a: 1
}));
/** @constructor */
function $c_sr_TupleXXL(es) {
  this.ad = null;
  this.ad = es;
  if ((es.b.length <= 22)) {
    $m_sr_Scala3RunTime$().nx();
  }
}
$p = $c_sr_TupleXXL.prototype = new $h_O();
$p.constructor = $c_sr_TupleXXL;
/** @constructor */
function $h_sr_TupleXXL() {
}
$h_sr_TupleXXL.prototype = $p;
$p.D = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.m = (function(n) {
  return this.ad.b[n];
});
$p.u = (function() {
  return this.ad.b.length;
});
$p.A = (function() {
  return "Tuple";
});
$p.n = (function() {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($m_s_Predef$().pV(this.ad), "(", ",", ")");
});
$p.s = (function() {
  return $m_s_util_hashing_MurmurHash3$().nI(this, (-889275714), null);
});
$p.r = (function(that) {
  if ((that instanceof $c_sr_TupleXXL)) {
    if ((this.ad === that.ad)) {
      return true;
    } else {
      if ((this.ad.b.length !== that.ad.b.length)) {
        return false;
      }
      var i = 0;
      while ((i < this.ad.b.length)) {
        var $x_2 = $m_sr_BoxesRunTime$();
        var arr$3 = this.ad;
        var n = i;
        var $x_1 = arr$3.b[n];
        var arr$4 = that.ad;
        var n$1 = i;
        if ((!$x_2.c($x_1, arr$4.b[n$1]))) {
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aN)));
}
var $d_sr_TupleXXL = new $TypeData().i($c_sr_TupleXXL, "scala.runtime.TupleXXL", ({
  aN: 1,
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
$p.h9 = (function(f) {
  return ((arg1$2) => f.h(arg1$2));
});
var $d_sjs_js_Any$ = new $TypeData().i($c_sjs_js_Any$, "scala.scalajs.js.Any$", ({
  dc: 1,
  dg: 1,
  dh: 1
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
$p.n = (function() {
  return "Wall";
});
$p.ng = (function() {
  return [];
});
var $d_Lsketches_rooms_canvases_Wall$ = new $TypeData().i($c_Lsketches_rooms_canvases_Wall$, "sketches.rooms.canvases.Wall$", ({
  dv: 1,
  aL: 1,
  aM: 1
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
function $c_Ltrivalibs_graphics_math_gpu_VarExpr(name) {
  this.d = null;
  this.fv = null;
  this.j6 = false;
  $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(this, name);
  this.j6 = false;
}
$p = $c_Ltrivalibs_graphics_math_gpu_VarExpr.prototype = new $h_Ltrivalibs_graphics_math_gpu_LetExpr();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_VarExpr;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_VarExpr() {
}
$h_Ltrivalibs_graphics_math_gpu_VarExpr.prototype = $p;
$p.S = (function(value) {
  if ((!this.j6)) {
    this.j6 = true;
    return (((("  var " + this.fv) + " = ") + value.d) + ";");
  } else {
    return (((("  " + this.fv) + " = ") + value.d) + ";");
  }
});
$p.nh = (function(value) {
  return (((("  " + this.fv) + " += ") + value.d) + ";");
});
$p.ni = (function(value) {
  return (((("  " + this.fv) + " *= ") + value.d) + ";");
});
var $d_Ltrivalibs_graphics_math_gpu_VarExpr = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_VarExpr, "trivalibs.graphics.math.gpu.VarExpr", ({
  eO: 1,
  b2: 1,
  a1: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_expr$package$$anon$2() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_expr$package$$anon$2.prototype = new $h_s_Conversion();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_expr$package$$anon$2;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_expr$package$$anon$2() {
}
$h_Ltrivalibs_graphics_math_gpu_expr$package$$anon$2.prototype = $p;
$p.h = (function(x) {
  return x;
});
var $d_Ltrivalibs_graphics_math_gpu_expr$package$$anon$2 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_expr$package$$anon$2, "trivalibs.graphics.math.gpu.expr$package$$anon$2", ({
  eQ: 1,
  M: 1,
  g: 1
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
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aX((+x)));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1, "trivalibs.graphics.math.gpu.float_expr$package$$anon$1", ({
  eS: 1,
  M: 1,
  g: 1
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
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("f32(" + (x | 0)) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3, "trivalibs.graphics.math.gpu.float_expr$package$$anon$3", ({
  eT: 1,
  M: 1,
  g: 1
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
        deps = ((rest[0] === (void 0)) ? $m_Ltrivalibs_graphics_shader_dsl_WgslFnData$().nf() : rest[0]);
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
var $d_Ltrivalibs_graphics_shader_dsl_WgslFnData = new $TypeData().i(2, "trivalibs.graphics.shader.dsl.WgslFnData", ({
  fF: 1,
  di: 1,
  aO: 1
}), ((x) => (x instanceof $a_Ltrivalibs_graphics_shader_dsl_WgslFnData())));
/** @constructor */
function $c_Ljava_io_OutputStream() {
}
$p = $c_Ljava_io_OutputStream.prototype = new $h_O();
$p.constructor = $c_Ljava_io_OutputStream;
/** @constructor */
function $h_Ljava_io_OutputStream() {
}
$h_Ljava_io_OutputStream.prototype = $p;
class $c_jl_AssertionError extends $c_jl_Error {
  constructor(detailMessage) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ("" + detailMessage), ((detailMessage instanceof $c_jl_Throwable) ? detailMessage : null), true, true);
  }
}
var $d_jl_AssertionError = new $TypeData().i($c_jl_AssertionError, "java.lang.AssertionError", ({
  b8: 1,
  bd: 1,
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
  b9: 1,
  a: 1,
  i: 1,
  h: 1
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a7)));
}
var $d_jl_Character = new $TypeData().i(0, "java.lang.Character", ({
  a7: 1,
  a: 1,
  i: 1,
  h: 1
}), ((x) => (x instanceof $Char)));
class $c_jl_RuntimeException extends $c_jl_Exception {
}
/** @constructor */
function $c_jl_StringBuilder() {
  this.ao = null;
  this.ao = "";
}
$p = $c_jl_StringBuilder.prototype = new $h_O();
$p.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
}
$h_jl_StringBuilder.prototype = $p;
$p.n = (function() {
  return this.ao;
});
$p.C = (function() {
  return this.ao.length;
});
$p.mi = (function(index) {
  return this.ao.charCodeAt(index);
});
var $d_jl_StringBuilder = new $TypeData().i($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  bp: 1,
  L: 1,
  a5: 1,
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
$p.ah = (function() {
  return (-1);
});
$p.ml = (function(dest, start, n) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, dest, start, n);
});
$p.jH = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.ac = (function() {
  return this;
});
$p.h8 = (function(n) {
  return this.iu(n, (-1));
});
$p.iu = (function(from, until) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until);
});
$p.n = (function() {
  return "<iterator>";
});
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.bB(0) === 0);
}
function $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  var thisKnownSize = $thiz.ah();
  if ((thisKnownSize !== (-1))) {
    var thatKnownSize = that.ah();
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
function $isArrayOf_s_util_CommandLineParser$ParseError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.dq)));
}
/** @constructor */
function $c_Lsketches_rooms_canvases_Painting(model, shape, shadowRect, shadowFade) {
  this.hG = null;
  this.gB = null;
  this.gA = null;
  this.gz = null;
  this.hG = model;
  this.gB = shape;
  this.gA = shadowRect;
  this.gz = shadowFade;
}
$p = $c_Lsketches_rooms_canvases_Painting.prototype = new $h_O();
$p.constructor = $c_Lsketches_rooms_canvases_Painting;
/** @constructor */
function $h_Lsketches_rooms_canvases_Painting() {
}
$h_Lsketches_rooms_canvases_Painting.prototype = $p;
$p.D = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return $m_s_util_hashing_MurmurHash3$().T(this, 2001930596, true);
});
$p.r = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lsketches_rooms_canvases_Painting)) {
    var x = this.hG;
    var x$2 = x$0.hG;
    if (((x === null) ? (x$2 === null) : (x === x$2))) {
      var x$3 = this.gB;
      var x$4 = x$0.gB;
      var $x_2 = ((x$3 === null) ? (x$4 === null) : (x$3 === x$4));
    } else {
      var $x_2 = false;
    }
    if ($x_2) {
      var x$5 = this.gA;
      var x$6 = x$0.gA;
      var $x_1 = ((x$5 === null) ? (x$6 === null) : (x$5 === x$6));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      var x$7 = this.gz;
      var x$8 = x$0.gz;
      return ((x$7 === null) ? (x$8 === null) : (x$7 === x$8));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.n = (function() {
  return $m_sr_ScalaRunTime$().ii(this);
});
$p.u = (function() {
  return 4;
});
$p.A = (function() {
  return "Painting";
});
$p.m = (function(n) {
  switch (n) {
    case 0: {
      return this.hG;
      break;
    }
    case 1: {
      return this.gB;
      break;
    }
    case 2: {
      return this.gA;
      break;
    }
    case 3: {
      return this.gz;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException(("" + n));
    }
  }
});
function $isArrayOf_Lsketches_rooms_canvases_Painting(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aR)));
}
var $d_Lsketches_rooms_canvases_Painting = new $TypeData().i($c_Lsketches_rooms_canvases_Painting, "sketches.rooms.canvases.Painting", ({
  aR: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_Lsketches_rooms_canvases_PaintingSpec(width, height, depth, image, sideStretch) {
  this.bu = 0.0;
  this.bt = 0.0;
  this.bf = 0.0;
  this.g5 = null;
  this.fs = 0.0;
  this.bu = width;
  this.bt = height;
  this.bf = depth;
  this.g5 = image;
  this.fs = sideStretch;
}
$p = $c_Lsketches_rooms_canvases_PaintingSpec.prototype = new $h_O();
$p.constructor = $c_Lsketches_rooms_canvases_PaintingSpec;
/** @constructor */
function $h_Lsketches_rooms_canvases_PaintingSpec() {
}
$h_Lsketches_rooms_canvases_PaintingSpec.prototype = $p;
$p.D = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().p(acc, 1068570815);
  acc = $m_sr_Statics$().p(acc, $m_sr_Statics$().bA(this.bu));
  acc = $m_sr_Statics$().p(acc, $m_sr_Statics$().bA(this.bt));
  acc = $m_sr_Statics$().p(acc, $m_sr_Statics$().bA(this.bf));
  acc = $m_sr_Statics$().p(acc, $m_sr_Statics$().W(this.g5));
  acc = $m_sr_Statics$().p(acc, $m_sr_Statics$().bA(this.fs));
  return $m_sr_Statics$().ar(acc, 5);
});
$p.r = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lsketches_rooms_canvases_PaintingSpec)) {
    if (((((this.bu === x$0.bu) && (this.bt === x$0.bt)) && (this.bf === x$0.bf)) && (this.fs === x$0.fs))) {
      var x = this.g5;
      var x$2 = x$0.g5;
      return ((x === null) ? (x$2 === null) : (x === x$2));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.n = (function() {
  return $m_sr_ScalaRunTime$().ii(this);
});
$p.u = (function() {
  return 5;
});
$p.A = (function() {
  return "PaintingSpec";
});
$p.m = (function(n) {
  switch (n) {
    case 0: {
      return this.bu;
      break;
    }
    case 1: {
      return this.bt;
      break;
    }
    case 2: {
      return this.bf;
      break;
    }
    case 3: {
      return this.g5;
      break;
    }
    case 4: {
      return this.fs;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException(("" + n));
    }
  }
});
function $isArrayOf_Lsketches_rooms_canvases_PaintingSpec(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aS)));
}
var $d_Lsketches_rooms_canvases_PaintingSpec = new $TypeData().i($c_Lsketches_rooms_canvases_PaintingSpec, "sketches.rooms.canvases.PaintingSpec", ({
  aS: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_Lsketches_rooms_canvases_Wall(center, width, height, rotY, inwardNormal, form, paintings) {
  this.g6 = null;
  this.aR = 0.0;
  this.b2 = 0.0;
  this.g7 = 0.0;
  this.fu = null;
  this.ft = null;
  this.bv = null;
  this.g6 = center;
  this.aR = width;
  this.b2 = height;
  this.g7 = rotY;
  this.fu = inwardNormal;
  this.ft = form;
  this.bv = paintings;
}
$p = $c_Lsketches_rooms_canvases_Wall.prototype = new $h_O();
$p.constructor = $c_Lsketches_rooms_canvases_Wall;
/** @constructor */
function $h_Lsketches_rooms_canvases_Wall() {
}
$h_Lsketches_rooms_canvases_Wall.prototype = $p;
$p.D = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().p(acc, 2688490);
  acc = $m_sr_Statics$().p(acc, $m_sr_Statics$().W(this.g6));
  acc = $m_sr_Statics$().p(acc, $m_sr_Statics$().bA(this.aR));
  acc = $m_sr_Statics$().p(acc, $m_sr_Statics$().bA(this.b2));
  acc = $m_sr_Statics$().p(acc, $m_sr_Statics$().bA(this.g7));
  acc = $m_sr_Statics$().p(acc, $m_sr_Statics$().W(this.fu));
  acc = $m_sr_Statics$().p(acc, $m_sr_Statics$().W(this.ft));
  acc = $m_sr_Statics$().p(acc, $m_sr_Statics$().W(this.bv));
  return $m_sr_Statics$().ar(acc, 7);
});
$p.r = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lsketches_rooms_canvases_Wall)) {
    if ((((this.aR === x$0.aR) && (this.b2 === x$0.b2)) && (this.g7 === x$0.g7))) {
      var x = this.g6;
      var x$2 = x$0.g6;
      var $x_3 = ((x === null) ? (x$2 === null) : (x === x$2));
    } else {
      var $x_3 = false;
    }
    if ($x_3) {
      var x$3 = this.fu;
      var x$4 = x$0.fu;
      var $x_2 = ((x$3 === null) ? (x$4 === null) : (x$3 === x$4));
    } else {
      var $x_2 = false;
    }
    if ($x_2) {
      var x$5 = this.ft;
      var x$6 = x$0.ft;
      var $x_1 = ((x$5 === null) ? (x$6 === null) : (x$5 === x$6));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      return $m_sr_BoxesRunTime$().c(this.bv, x$0.bv);
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.n = (function() {
  return $m_sr_ScalaRunTime$().ii(this);
});
$p.u = (function() {
  return 7;
});
$p.A = (function() {
  return "Wall";
});
$p.m = (function(n) {
  switch (n) {
    case 0: {
      return this.g6;
      break;
    }
    case 1: {
      return this.aR;
      break;
    }
    case 2: {
      return this.b2;
      break;
    }
    case 3: {
      return this.g7;
      break;
    }
    case 4: {
      return this.fu;
      break;
    }
    case 5: {
      return this.ft;
      break;
    }
    case 6: {
      return this.bv;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException(("" + n));
    }
  }
});
function $isArrayOf_Lsketches_rooms_canvases_Wall(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aT)));
}
var $d_Lsketches_rooms_canvases_Wall = new $TypeData().i($c_Lsketches_rooms_canvases_Wall, "sketches.rooms.canvases.Wall", ({
  aT: 1,
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
$p.hc = (function(m) {
  return m.iM;
});
$p.hd = (function(m) {
  return m.iN;
});
$p.he = (function(m) {
  return m.iO;
});
$p.hf = (function(m) {
  return m.iP;
});
$p.hg = (function(m) {
  return m.iQ;
});
$p.hh = (function(m) {
  return m.iR;
});
$p.hi = (function(m) {
  return m.iS;
});
$p.hj = (function(m) {
  return m.iT;
});
$p.hk = (function(m) {
  return m.iU;
});
$p.hl = (function(m) {
  return m.iV;
});
$p.hm = (function(m) {
  return m.iW;
});
$p.hn = (function(m) {
  return m.iX;
});
$p.ho = (function(m) {
  return m.iY;
});
$p.hp = (function(m) {
  return m.iZ;
});
$p.hq = (function(m) {
  return m.j0;
});
$p.hr = (function(m) {
  return m.j1;
});
$p.mA = (function(m, v) {
  m.iM = v;
});
$p.mB = (function(m, v) {
  m.iN = v;
});
$p.mC = (function(m, v) {
  m.iO = v;
});
$p.mD = (function(m, v) {
  m.iP = v;
});
$p.mE = (function(m, v) {
  m.iQ = v;
});
$p.mF = (function(m, v) {
  m.iR = v;
});
$p.mG = (function(m, v) {
  m.iS = v;
});
$p.mH = (function(m, v) {
  m.iT = v;
});
$p.mI = (function(m, v) {
  m.iU = v;
});
$p.mJ = (function(m, v) {
  m.iV = v;
});
$p.mK = (function(m, v) {
  m.iW = v;
});
$p.mL = (function(m, v) {
  m.iX = v;
});
$p.mM = (function(m, v) {
  m.iY = v;
});
$p.mN = (function(m, v) {
  m.iZ = v;
});
$p.mO = (function(m, v) {
  m.j0 = v;
});
$p.mP = (function(m, v) {
  m.j1 = v;
});
var $d_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$, "trivalibs.graphics.math.cpu.Mat4$given_Mat4Mutable_Mat4$", ({
  ep: 1,
  X: 1,
  aX: 1,
  aY: 1
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
$p.I = (function(v) {
  return v.hM;
});
$p.B = (function(v) {
  return v.hN;
});
$p.an = (function(v) {
  return v.hO;
});
$p.am = (function(v) {
  return v.hL;
});
$p.gq = (function(v, value) {
  v.hM = value;
});
$p.gr = (function(v, value) {
  v.hN = value;
});
$p.k1 = (function(v, value) {
  v.hO = value;
});
$p.jV = (function(v, value) {
  v.hL = value;
});
var $d_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$, "trivalibs.graphics.math.cpu.Quat$given_Vec4Mutable_Quat$", ({
  et: 1,
  K: 1,
  Z: 1,
  a0: 1
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
$p.I = (function(v) {
  return v.hP;
});
$p.B = (function(v) {
  return v.hQ;
});
$p.gq = (function(v, value) {
  v.hP = value;
});
$p.gr = (function(v, value) {
  v.hQ = value;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$, "trivalibs.graphics.math.cpu.Vec2$given_Vec2Mutable_Vec2$", ({
  ew: 1,
  Y: 1,
  aZ: 1,
  b0: 1
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
$p.I = (function(v) {
  return v.w;
});
$p.B = (function(v) {
  return v.z;
});
$p.an = (function(v) {
  return v.x;
});
$p.mn = (function(v, other) {
  return $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D(this, v, other);
});
var $d_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$, "trivalibs.graphics.math.cpu.Vec3$given_Vec3Mutable_Vec3$", ({
  ez: 1,
  b1: 1,
  eh: 1,
  ek: 1
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
$p.I = (function(v) {
  return v.j3;
});
$p.B = (function(v) {
  return v.j4;
});
$p.an = (function(v) {
  return v.j5;
});
$p.am = (function(v) {
  return v.j2;
});
$p.gq = (function(v, value) {
  v.j3 = value;
});
$p.gr = (function(v, value) {
  v.j4 = value;
});
$p.k1 = (function(v, value) {
  v.j5 = value;
});
$p.jV = (function(v, value) {
  v.j2 = value;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$, "trivalibs.graphics.math.cpu.Vec4$given_Vec4Mutable_Vec4$", ({
  eB: 1,
  K: 1,
  Z: 1,
  a0: 1
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
$p.ot = (function(m) {
  var offset$proxy1 = (m.off | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy1, true));
});
$p.ov = (function(m) {
  var offset$proxy2 = ((4 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy2, true));
});
$p.ox = (function(m) {
  var offset$proxy3 = ((8 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy3, true));
});
$p.oz = (function(m) {
  var offset$proxy4 = ((12 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy4, true));
});
$p.oB = (function(m) {
  var offset$proxy5 = ((16 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy5, true));
});
$p.oD = (function(m) {
  var offset$proxy6 = ((20 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy6, true));
});
$p.oF = (function(m) {
  var offset$proxy7 = ((24 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy7, true));
});
$p.oH = (function(m) {
  var offset$proxy8 = ((28 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy8, true));
});
$p.oJ = (function(m) {
  var offset$proxy9 = ((32 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy9, true));
});
$p.oL = (function(m) {
  var offset$proxy10 = ((36 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy10, true));
});
$p.oN = (function(m) {
  var offset$proxy11 = ((40 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy11, true));
});
$p.oP = (function(m) {
  var offset$proxy12 = ((44 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy12, true));
});
$p.oR = (function(m) {
  var offset$proxy13 = ((48 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy13, true));
});
$p.oT = (function(m) {
  var offset$proxy14 = ((52 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy14, true));
});
$p.oV = (function(m) {
  var offset$proxy15 = ((56 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy15, true));
});
$p.oX = (function(m) {
  var offset$proxy16 = ((60 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy16, true));
});
$p.ou = (function(m, v) {
  var value$proxy1 = Math.fround(v);
  var offset$proxy17 = (m.off | 0);
  m.dv.setFloat32(offset$proxy17, value$proxy1, true);
});
$p.ow = (function(m, v) {
  var value$proxy2 = Math.fround(v);
  var offset$proxy18 = ((4 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy18, value$proxy2, true);
});
$p.oy = (function(m, v) {
  var value$proxy3 = Math.fround(v);
  var offset$proxy19 = ((8 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy19, value$proxy3, true);
});
$p.oA = (function(m, v) {
  var value$proxy4 = Math.fround(v);
  var offset$proxy20 = ((12 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy20, value$proxy4, true);
});
$p.oC = (function(m, v) {
  var value$proxy5 = Math.fround(v);
  var offset$proxy21 = ((16 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy21, value$proxy5, true);
});
$p.oE = (function(m, v) {
  var value$proxy6 = Math.fround(v);
  var offset$proxy22 = ((20 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy22, value$proxy6, true);
});
$p.oG = (function(m, v) {
  var value$proxy7 = Math.fround(v);
  var offset$proxy23 = ((24 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy23, value$proxy7, true);
});
$p.oI = (function(m, v) {
  var value$proxy8 = Math.fround(v);
  var offset$proxy24 = ((28 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy24, value$proxy8, true);
});
$p.oK = (function(m, v) {
  var value$proxy9 = Math.fround(v);
  var offset$proxy25 = ((32 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy25, value$proxy9, true);
});
$p.oM = (function(m, v) {
  var value$proxy10 = Math.fround(v);
  var offset$proxy26 = ((36 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy26, value$proxy10, true);
});
$p.oO = (function(m, v) {
  var value$proxy11 = Math.fround(v);
  var offset$proxy27 = ((40 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy27, value$proxy11, true);
});
$p.oQ = (function(m, v) {
  var value$proxy12 = Math.fround(v);
  var offset$proxy28 = ((44 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy28, value$proxy12, true);
});
$p.oS = (function(m, v) {
  var value$proxy13 = Math.fround(v);
  var offset$proxy29 = ((48 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy29, value$proxy13, true);
});
$p.oU = (function(m, v) {
  var value$proxy14 = Math.fround(v);
  var offset$proxy30 = ((52 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy30, value$proxy14, true);
});
$p.oW = (function(m, v) {
  var value$proxy15 = Math.fround(v);
  var offset$proxy31 = ((56 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy31, value$proxy15, true);
});
$p.oY = (function(m, v) {
  var value$proxy16 = Math.fround(v);
  var offset$proxy32 = ((60 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy32, value$proxy16, true);
});
$p.hc = (function(m) {
  return this.ot(m);
});
$p.hd = (function(m) {
  return this.ov(m);
});
$p.he = (function(m) {
  return this.ox(m);
});
$p.hf = (function(m) {
  return this.oz(m);
});
$p.hg = (function(m) {
  return this.oB(m);
});
$p.hh = (function(m) {
  return this.oD(m);
});
$p.hi = (function(m) {
  return this.oF(m);
});
$p.hj = (function(m) {
  return this.oH(m);
});
$p.hk = (function(m) {
  return this.oJ(m);
});
$p.hl = (function(m) {
  return this.oL(m);
});
$p.hm = (function(m) {
  return this.oN(m);
});
$p.hn = (function(m) {
  return this.oP(m);
});
$p.ho = (function(m) {
  return this.oR(m);
});
$p.hp = (function(m) {
  return this.oT(m);
});
$p.hq = (function(m) {
  return this.oV(m);
});
$p.hr = (function(m) {
  return this.oX(m);
});
$p.mA = (function(m, v) {
  this.ou(m, v);
});
$p.mB = (function(m, v) {
  this.ow(m, v);
});
$p.mC = (function(m, v) {
  this.oy(m, v);
});
$p.mD = (function(m, v) {
  this.oA(m, v);
});
$p.mE = (function(m, v) {
  this.oC(m, v);
});
$p.mF = (function(m, v) {
  this.oE(m, v);
});
$p.mG = (function(m, v) {
  this.oG(m, v);
});
$p.mH = (function(m, v) {
  this.oI(m, v);
});
$p.mI = (function(m, v) {
  this.oK(m, v);
});
$p.mJ = (function(m, v) {
  this.oM(m, v);
});
$p.mK = (function(m, v) {
  this.oO(m, v);
});
$p.mL = (function(m, v) {
  this.oQ(m, v);
});
$p.mM = (function(m, v) {
  this.oS(m, v);
});
$p.mN = (function(m, v) {
  this.oU(m, v);
});
$p.mO = (function(m, v) {
  this.oW(m, v);
});
$p.mP = (function(m, v) {
  this.oY(m, v);
});
var $d_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$, "trivalibs.graphics.math.cpu.mat4$package$Mat4Buffer$given_Mat4Mutable_StructRef$", ({
  eE: 1,
  X: 1,
  aX: 1,
  aY: 1
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
$p.jW = (function(v) {
  var offset$proxy1 = (v.off | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy1, true));
});
$p.jY = (function(v) {
  var offset$proxy2 = ((4 + (v.off | 0)) | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy2, true));
});
$p.jX = (function(v, value) {
  var value$proxy1 = Math.fround(value);
  var offset$proxy3 = (v.off | 0);
  v.dv.setFloat32(offset$proxy3, value$proxy1, true);
});
$p.jZ = (function(v, value) {
  var value$proxy2 = Math.fround(value);
  var offset$proxy4 = ((4 + (v.off | 0)) | 0);
  v.dv.setFloat32(offset$proxy4, value$proxy2, true);
});
$p.I = (function(v) {
  return this.jW(v);
});
$p.B = (function(v) {
  return this.jY(v);
});
$p.gq = (function(v, value) {
  this.jX(v, value);
});
$p.gr = (function(v, value) {
  this.jZ(v, value);
});
var $d_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$, "trivalibs.graphics.math.cpu.vec2$package$Vec2Buffer$vec2MutableBuffer$", ({
  eH: 1,
  Y: 1,
  aZ: 1,
  b0: 1
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
$p.jW = (function(v) {
  var offset$proxy1 = (v.off | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy1, true));
});
$p.jY = (function(v) {
  var offset$proxy2 = ((4 + (v.off | 0)) | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy2, true));
});
$p.pZ = (function(v) {
  var offset$proxy3 = ((8 + (v.off | 0)) | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy3, true));
});
$p.pR = (function(v) {
  var offset$proxy4 = ((12 + (v.off | 0)) | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy4, true));
});
$p.jX = (function(v, value) {
  var value$proxy1 = Math.fround(value);
  var offset$proxy5 = (v.off | 0);
  v.dv.setFloat32(offset$proxy5, value$proxy1, true);
});
$p.jZ = (function(v, value) {
  var value$proxy2 = Math.fround(value);
  var offset$proxy6 = ((4 + (v.off | 0)) | 0);
  v.dv.setFloat32(offset$proxy6, value$proxy2, true);
});
$p.q0 = (function(v, value) {
  var value$proxy3 = Math.fround(value);
  var offset$proxy7 = ((8 + (v.off | 0)) | 0);
  v.dv.setFloat32(offset$proxy7, value$proxy3, true);
});
$p.pT = (function(v, value) {
  var value$proxy4 = Math.fround(value);
  var offset$proxy8 = ((12 + (v.off | 0)) | 0);
  v.dv.setFloat32(offset$proxy8, value$proxy4, true);
});
$p.I = (function(v) {
  return this.jW(v);
});
$p.B = (function(v) {
  return this.jY(v);
});
$p.an = (function(v) {
  return this.pZ(v);
});
$p.am = (function(v) {
  return this.pR(v);
});
$p.gq = (function(v, value) {
  this.jX(v, value);
});
$p.gr = (function(v, value) {
  this.jZ(v, value);
});
$p.k1 = (function(v, value) {
  this.q0(v, value);
});
$p.jV = (function(v, value) {
  this.pT(v, value);
});
var $d_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$, "trivalibs.graphics.math.cpu.vec4$package$Vec4Buffer$vec4MutableBuffer$", ({
  eK: 1,
  K: 1,
  Z: 1,
  a0: 1
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
  var all = [vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, uniformDecls, $thiz.gV, f$proxy1, g$proxy1];
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
  this.af = null;
  this.ae = null;
  this.gV = null;
  this.af = vertexBody;
  this.ae = fragmentBody;
  this.gV = helperFns;
}
$p = $c_Ltrivalibs_graphics_shader_ShaderDef.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_ShaderDef;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_ShaderDef() {
}
$h_Ltrivalibs_graphics_shader_ShaderDef.prototype = $p;
$p.D = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return $m_s_util_hashing_MurmurHash3$().T(this, (-1488826029), true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_Ltrivalibs_graphics_shader_ShaderDef) && (((this.af === x$0.af) && (this.ae === x$0.ae)) && (this.gV === x$0.gV))));
});
$p.n = (function() {
  return $m_sr_ScalaRunTime$().ii(this);
});
$p.u = (function() {
  return 3;
});
$p.A = (function() {
  return "ShaderDef";
});
$p.m = (function(n) {
  switch (n) {
    case 0: {
      return this.af;
      break;
    }
    case 1: {
      return this.ae;
      break;
    }
    case 2: {
      return this.gV;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException(("" + n));
    }
  }
});
function $isArrayOf_Ltrivalibs_graphics_shader_ShaderDef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.b4)));
}
var $d_Ltrivalibs_graphics_shader_ShaderDef = new $TypeData().i($c_Ltrivalibs_graphics_shader_ShaderDef, "trivalibs.graphics.shader.ShaderDef", ({
  b4: 1,
  b: 1,
  c: 1,
  a: 1
}));
function $ct_Ljava_io_FilterOutputStream__Ljava_io_OutputStream__($thiz, out) {
  return $thiz;
}
/** @constructor */
function $c_Ljava_io_FilterOutputStream() {
}
$p = $c_Ljava_io_FilterOutputStream.prototype = new $h_Ljava_io_OutputStream();
$p.constructor = $c_Ljava_io_FilterOutputStream;
/** @constructor */
function $h_Ljava_io_FilterOutputStream() {
}
$h_Ljava_io_FilterOutputStream.prototype = $p;
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_ArithmeticException = new $TypeData().i($c_jl_ArithmeticException, "java.lang.ArithmeticException", ({
  b7: 1,
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
  ba: 1,
  u: 1,
  a: 1,
  i: 1,
  h: 1
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
  a9: 1,
  k: 1,
  j: 1,
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
  bf: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream$DummyOutputStream() {
}
$p = $c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype = new $h_Ljava_io_OutputStream();
$p.constructor = $c_jl_JSConsoleBasedPrintStream$DummyOutputStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream$DummyOutputStream() {
}
$h_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype = $p;
var $d_jl_JSConsoleBasedPrintStream$DummyOutputStream = new $TypeData().i($c_jl_JSConsoleBasedPrintStream$DummyOutputStream, "java.lang.JSConsoleBasedPrintStream$DummyOutputStream", ({
  bj: 1,
  a4: 1,
  a2: 1,
  a6: 1,
  a3: 1
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
  bk: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
function $isArrayOf_jl_SecurityException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bm)));
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
  bn: 1,
  u: 1,
  a: 1,
  i: 1,
  h: 1
}), ((x) => $isShort(x)));
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_UnsupportedOperationException = new $TypeData().i($c_jl_UnsupportedOperationException, "java.lang.UnsupportedOperationException", ({
  bs: 1,
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
  bx: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
function $p_s_MatchError__objString__T($thiz) {
  if ((!$thiz.k9)) {
    if (($thiz.hD === null)) {
      var $x_1 = "null";
    } else {
      var this$1 = $thiz.hD;
      var cls = $objectGetClass(this$1);
      var ofClass = ((cls === null) ? "of a JS class" : ("of class " + cls.iw.N));
      try {
        var $x_1 = ((($thiz.hD + " (") + ofClass) + ")");
      } catch (e) {
        var $x_1 = ("an instance " + ofClass);
      }
    }
    $thiz.k8 = $x_1;
    $thiz.k9 = true;
  }
  return $thiz.k8;
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.hD = null;
    this.k8 = null;
    this.k9 = false;
    this.hD = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  im() {
    return $p_s_MatchError__objString__T(this);
  }
}
var $d_s_MatchError = new $TypeData().i($c_s_MatchError, "scala.MatchError", ({
  bI: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.gt = 0;
  this.kb = 0;
  this.ka = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.ka = outer;
  this.gt = 0;
  this.kb = outer.u();
}
$p = $c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $p;
$p.N = (function() {
  return (this.gt < this.kb);
});
$p.E = (function() {
  var result = this.ka.m(this.gt);
  this.gt = ((1 + this.gt) | 0);
  return result;
});
var $d_s_Product$$anon$1 = new $TypeData().i($c_s_Product$$anon$1, "scala.Product$$anon$1", ({
  bK: 1,
  m: 1,
  d: 1,
  e: 1,
  r: 1
}));
/** @constructor */
function $c_T1(_1) {
  this.fJ = null;
  this.fJ = _1;
}
$p = $c_T1.prototype = new $h_O();
$p.constructor = $c_T1;
/** @constructor */
function $h_T1() {
}
$h_T1.prototype = $p;
$p.u = (function() {
  return 1;
});
$p.m = (function(n) {
  return $f_s_Product1__productElement__I__O(this, n);
});
$p.n = (function() {
  return (("(" + this.fJ) + ")");
});
$p.A = (function() {
  return "Tuple1";
});
$p.D = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.s = (function() {
  return $m_s_util_hashing_MurmurHash3$().T(this, 1228477340, true);
});
$p.r = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T1) && $m_sr_BoxesRunTime$().c(this.fJ, x$1.fJ)));
});
function $isArrayOf_T1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ab)));
}
var $d_T1 = new $TypeData().i($c_T1, "scala.Tuple1", ({
  ab: 1,
  bL: 1,
  c: 1,
  b: 1,
  a: 1
}));
/** @constructor */
function $c_T10(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10) {
  this.fK = null;
  this.bH = null;
  this.bI = null;
  this.bJ = null;
  this.bK = null;
  this.bL = null;
  this.bM = null;
  this.bN = null;
  this.bO = null;
  this.bG = null;
  this.fK = _1;
  this.bH = _2;
  this.bI = _3;
  this.bJ = _4;
  this.bK = _5;
  this.bL = _6;
  this.bM = _7;
  this.bN = _8;
  this.bO = _9;
  this.bG = _10;
}
$p = $c_T10.prototype = new $h_O();
$p.constructor = $c_T10;
/** @constructor */
function $h_T10() {
}
$h_T10.prototype = $p;
$p.D = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.u = (function() {
  return 10;
});
$p.m = (function(n) {
  return $f_s_Product10__productElement__I__O(this, n);
});
$p.s = (function() {
  return $m_s_util_hashing_MurmurHash3$().T(this, 2104595240, true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T10) && ((((((((($m_sr_BoxesRunTime$().c(this.fK, x$0.fK) && $m_sr_BoxesRunTime$().c(this.bH, x$0.bH)) && $m_sr_BoxesRunTime$().c(this.bI, x$0.bI)) && $m_sr_BoxesRunTime$().c(this.bJ, x$0.bJ)) && $m_sr_BoxesRunTime$().c(this.bK, x$0.bK)) && $m_sr_BoxesRunTime$().c(this.bL, x$0.bL)) && $m_sr_BoxesRunTime$().c(this.bM, x$0.bM)) && $m_sr_BoxesRunTime$().c(this.bN, x$0.bN)) && $m_sr_BoxesRunTime$().c(this.bO, x$0.bO)) && $m_sr_BoxesRunTime$().c(this.bG, x$0.bG))));
});
$p.A = (function() {
  return "Tuple10";
});
$p.n = (function() {
  return (((((((((((((((((((("(" + this.fK) + ",") + this.bH) + ",") + this.bI) + ",") + this.bJ) + ",") + this.bK) + ",") + this.bL) + ",") + this.bM) + ",") + this.bN) + ",") + this.bO) + ",") + this.bG) + ")");
});
function $isArrayOf_T10(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ac)));
}
var $d_T10 = new $TypeData().i($c_T10, "scala.Tuple10", ({
  ac: 1,
  b: 1,
  c: 1,
  bM: 1,
  a: 1
}));
/** @constructor */
function $c_T11(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11) {
  this.fL = null;
  this.bR = null;
  this.bS = null;
  this.bT = null;
  this.bU = null;
  this.bV = null;
  this.bW = null;
  this.bX = null;
  this.bY = null;
  this.bP = null;
  this.bQ = null;
  this.fL = _1;
  this.bR = _2;
  this.bS = _3;
  this.bT = _4;
  this.bU = _5;
  this.bV = _6;
  this.bW = _7;
  this.bX = _8;
  this.bY = _9;
  this.bP = _10;
  this.bQ = _11;
}
$p = $c_T11.prototype = new $h_O();
$p.constructor = $c_T11;
/** @constructor */
function $h_T11() {
}
$h_T11.prototype = $p;
$p.D = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.u = (function() {
  return 11;
});
$p.m = (function(n) {
  return $f_s_Product11__productElement__I__O(this, n);
});
$p.s = (function() {
  return $m_s_util_hashing_MurmurHash3$().T(this, 838406606, true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T11) && (((((((((($m_sr_BoxesRunTime$().c(this.fL, x$0.fL) && $m_sr_BoxesRunTime$().c(this.bR, x$0.bR)) && $m_sr_BoxesRunTime$().c(this.bS, x$0.bS)) && $m_sr_BoxesRunTime$().c(this.bT, x$0.bT)) && $m_sr_BoxesRunTime$().c(this.bU, x$0.bU)) && $m_sr_BoxesRunTime$().c(this.bV, x$0.bV)) && $m_sr_BoxesRunTime$().c(this.bW, x$0.bW)) && $m_sr_BoxesRunTime$().c(this.bX, x$0.bX)) && $m_sr_BoxesRunTime$().c(this.bY, x$0.bY)) && $m_sr_BoxesRunTime$().c(this.bP, x$0.bP)) && $m_sr_BoxesRunTime$().c(this.bQ, x$0.bQ))));
});
$p.A = (function() {
  return "Tuple11";
});
$p.n = (function() {
  return (((((((((((((((((((((("(" + this.fL) + ",") + this.bR) + ",") + this.bS) + ",") + this.bT) + ",") + this.bU) + ",") + this.bV) + ",") + this.bW) + ",") + this.bX) + ",") + this.bY) + ",") + this.bP) + ",") + this.bQ) + ")");
});
function $isArrayOf_T11(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ad)));
}
var $d_T11 = new $TypeData().i($c_T11, "scala.Tuple11", ({
  ad: 1,
  b: 1,
  c: 1,
  bN: 1,
  a: 1
}));
/** @constructor */
function $c_T12(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12) {
  this.fM = null;
  this.c2 = null;
  this.c3 = null;
  this.c4 = null;
  this.c5 = null;
  this.c6 = null;
  this.c7 = null;
  this.c8 = null;
  this.c9 = null;
  this.bZ = null;
  this.c0 = null;
  this.c1 = null;
  this.fM = _1;
  this.c2 = _2;
  this.c3 = _3;
  this.c4 = _4;
  this.c5 = _5;
  this.c6 = _6;
  this.c7 = _7;
  this.c8 = _8;
  this.c9 = _9;
  this.bZ = _10;
  this.c0 = _11;
  this.c1 = _12;
}
$p = $c_T12.prototype = new $h_O();
$p.constructor = $c_T12;
/** @constructor */
function $h_T12() {
}
$h_T12.prototype = $p;
$p.D = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.u = (function() {
  return 12;
});
$p.m = (function(n) {
  return $f_s_Product12__productElement__I__O(this, n);
});
$p.s = (function() {
  return $m_s_util_hashing_MurmurHash3$().T(this, (-1964145863), true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T12) && ((((((((((($m_sr_BoxesRunTime$().c(this.fM, x$0.fM) && $m_sr_BoxesRunTime$().c(this.c2, x$0.c2)) && $m_sr_BoxesRunTime$().c(this.c3, x$0.c3)) && $m_sr_BoxesRunTime$().c(this.c4, x$0.c4)) && $m_sr_BoxesRunTime$().c(this.c5, x$0.c5)) && $m_sr_BoxesRunTime$().c(this.c6, x$0.c6)) && $m_sr_BoxesRunTime$().c(this.c7, x$0.c7)) && $m_sr_BoxesRunTime$().c(this.c8, x$0.c8)) && $m_sr_BoxesRunTime$().c(this.c9, x$0.c9)) && $m_sr_BoxesRunTime$().c(this.bZ, x$0.bZ)) && $m_sr_BoxesRunTime$().c(this.c0, x$0.c0)) && $m_sr_BoxesRunTime$().c(this.c1, x$0.c1))));
});
$p.A = (function() {
  return "Tuple12";
});
$p.n = (function() {
  return (((((((((((((((((((((((("(" + this.fM) + ",") + this.c2) + ",") + this.c3) + ",") + this.c4) + ",") + this.c5) + ",") + this.c6) + ",") + this.c7) + ",") + this.c8) + ",") + this.c9) + ",") + this.bZ) + ",") + this.c0) + ",") + this.c1) + ")");
});
function $isArrayOf_T12(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ae)));
}
var $d_T12 = new $TypeData().i($c_T12, "scala.Tuple12", ({
  ae: 1,
  b: 1,
  c: 1,
  bO: 1,
  a: 1
}));
/** @constructor */
function $c_T13(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13) {
  this.fN = null;
  this.ce = null;
  this.cf = null;
  this.cg = null;
  this.ch = null;
  this.ci = null;
  this.cj = null;
  this.ck = null;
  this.cl = null;
  this.ca = null;
  this.cb = null;
  this.cc = null;
  this.cd = null;
  this.fN = _1;
  this.ce = _2;
  this.cf = _3;
  this.cg = _4;
  this.ch = _5;
  this.ci = _6;
  this.cj = _7;
  this.ck = _8;
  this.cl = _9;
  this.ca = _10;
  this.cb = _11;
  this.cc = _12;
  this.cd = _13;
}
$p = $c_T13.prototype = new $h_O();
$p.constructor = $c_T13;
/** @constructor */
function $h_T13() {
}
$h_T13.prototype = $p;
$p.D = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.u = (function() {
  return 13;
});
$p.m = (function(n) {
  return $f_s_Product13__productElement__I__O(this, n);
});
$p.s = (function() {
  return $m_s_util_hashing_MurmurHash3$().T(this, 1224168367, true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T13) && (((((((((((($m_sr_BoxesRunTime$().c(this.fN, x$0.fN) && $m_sr_BoxesRunTime$().c(this.ce, x$0.ce)) && $m_sr_BoxesRunTime$().c(this.cf, x$0.cf)) && $m_sr_BoxesRunTime$().c(this.cg, x$0.cg)) && $m_sr_BoxesRunTime$().c(this.ch, x$0.ch)) && $m_sr_BoxesRunTime$().c(this.ci, x$0.ci)) && $m_sr_BoxesRunTime$().c(this.cj, x$0.cj)) && $m_sr_BoxesRunTime$().c(this.ck, x$0.ck)) && $m_sr_BoxesRunTime$().c(this.cl, x$0.cl)) && $m_sr_BoxesRunTime$().c(this.ca, x$0.ca)) && $m_sr_BoxesRunTime$().c(this.cb, x$0.cb)) && $m_sr_BoxesRunTime$().c(this.cc, x$0.cc)) && $m_sr_BoxesRunTime$().c(this.cd, x$0.cd))));
});
$p.A = (function() {
  return "Tuple13";
});
$p.n = (function() {
  return (((((((((((((((((((((((((("(" + this.fN) + ",") + this.ce) + ",") + this.cf) + ",") + this.cg) + ",") + this.ch) + ",") + this.ci) + ",") + this.cj) + ",") + this.ck) + ",") + this.cl) + ",") + this.ca) + ",") + this.cb) + ",") + this.cc) + ",") + this.cd) + ")");
});
function $isArrayOf_T13(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.af)));
}
var $d_T13 = new $TypeData().i($c_T13, "scala.Tuple13", ({
  af: 1,
  b: 1,
  c: 1,
  bP: 1,
  a: 1
}));
/** @constructor */
function $c_T14(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14) {
  this.fO = null;
  this.cr = null;
  this.cs = null;
  this.ct = null;
  this.cu = null;
  this.cv = null;
  this.cw = null;
  this.cx = null;
  this.cy = null;
  this.cm = null;
  this.cn = null;
  this.co = null;
  this.cp = null;
  this.cq = null;
  this.fO = _1;
  this.cr = _2;
  this.cs = _3;
  this.ct = _4;
  this.cu = _5;
  this.cv = _6;
  this.cw = _7;
  this.cx = _8;
  this.cy = _9;
  this.cm = _10;
  this.cn = _11;
  this.co = _12;
  this.cp = _13;
  this.cq = _14;
}
$p = $c_T14.prototype = new $h_O();
$p.constructor = $c_T14;
/** @constructor */
function $h_T14() {
}
$h_T14.prototype = $p;
$p.D = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.u = (function() {
  return 14;
});
$p.m = (function(n) {
  return $f_s_Product14__productElement__I__O(this, n);
});
$p.s = (function() {
  return $m_s_util_hashing_MurmurHash3$().T(this, 147759069, true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T14) && ((((((((((((($m_sr_BoxesRunTime$().c(this.fO, x$0.fO) && $m_sr_BoxesRunTime$().c(this.cr, x$0.cr)) && $m_sr_BoxesRunTime$().c(this.cs, x$0.cs)) && $m_sr_BoxesRunTime$().c(this.ct, x$0.ct)) && $m_sr_BoxesRunTime$().c(this.cu, x$0.cu)) && $m_sr_BoxesRunTime$().c(this.cv, x$0.cv)) && $m_sr_BoxesRunTime$().c(this.cw, x$0.cw)) && $m_sr_BoxesRunTime$().c(this.cx, x$0.cx)) && $m_sr_BoxesRunTime$().c(this.cy, x$0.cy)) && $m_sr_BoxesRunTime$().c(this.cm, x$0.cm)) && $m_sr_BoxesRunTime$().c(this.cn, x$0.cn)) && $m_sr_BoxesRunTime$().c(this.co, x$0.co)) && $m_sr_BoxesRunTime$().c(this.cp, x$0.cp)) && $m_sr_BoxesRunTime$().c(this.cq, x$0.cq))));
});
$p.A = (function() {
  return "Tuple14";
});
$p.n = (function() {
  return (((((((((((((((((((((((((((("(" + this.fO) + ",") + this.cr) + ",") + this.cs) + ",") + this.ct) + ",") + this.cu) + ",") + this.cv) + ",") + this.cw) + ",") + this.cx) + ",") + this.cy) + ",") + this.cm) + ",") + this.cn) + ",") + this.co) + ",") + this.cp) + ",") + this.cq) + ")");
});
function $isArrayOf_T14(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ag)));
}
var $d_T14 = new $TypeData().i($c_T14, "scala.Tuple14", ({
  ag: 1,
  b: 1,
  c: 1,
  bQ: 1,
  a: 1
}));
/** @constructor */
function $c_T15(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15) {
  this.fP = null;
  this.cF = null;
  this.cG = null;
  this.cH = null;
  this.cI = null;
  this.cJ = null;
  this.cK = null;
  this.cL = null;
  this.cM = null;
  this.cz = null;
  this.cA = null;
  this.cB = null;
  this.cC = null;
  this.cD = null;
  this.cE = null;
  this.fP = _1;
  this.cF = _2;
  this.cG = _3;
  this.cH = _4;
  this.cI = _5;
  this.cJ = _6;
  this.cK = _7;
  this.cL = _8;
  this.cM = _9;
  this.cz = _10;
  this.cA = _11;
  this.cB = _12;
  this.cC = _13;
  this.cD = _14;
  this.cE = _15;
}
$p = $c_T15.prototype = new $h_O();
$p.constructor = $c_T15;
/** @constructor */
function $h_T15() {
}
$h_T15.prototype = $p;
$p.D = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.u = (function() {
  return 15;
});
$p.m = (function(n) {
  return $f_s_Product15__productElement__I__O(this, n);
});
$p.s = (function() {
  return $m_s_util_hashing_MurmurHash3$().T(this, 1834180931, true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T15) && (((((((((((((($m_sr_BoxesRunTime$().c(this.fP, x$0.fP) && $m_sr_BoxesRunTime$().c(this.cF, x$0.cF)) && $m_sr_BoxesRunTime$().c(this.cG, x$0.cG)) && $m_sr_BoxesRunTime$().c(this.cH, x$0.cH)) && $m_sr_BoxesRunTime$().c(this.cI, x$0.cI)) && $m_sr_BoxesRunTime$().c(this.cJ, x$0.cJ)) && $m_sr_BoxesRunTime$().c(this.cK, x$0.cK)) && $m_sr_BoxesRunTime$().c(this.cL, x$0.cL)) && $m_sr_BoxesRunTime$().c(this.cM, x$0.cM)) && $m_sr_BoxesRunTime$().c(this.cz, x$0.cz)) && $m_sr_BoxesRunTime$().c(this.cA, x$0.cA)) && $m_sr_BoxesRunTime$().c(this.cB, x$0.cB)) && $m_sr_BoxesRunTime$().c(this.cC, x$0.cC)) && $m_sr_BoxesRunTime$().c(this.cD, x$0.cD)) && $m_sr_BoxesRunTime$().c(this.cE, x$0.cE))));
});
$p.A = (function() {
  return "Tuple15";
});
$p.n = (function() {
  return (((((((((((((((((((((((((((((("(" + this.fP) + ",") + this.cF) + ",") + this.cG) + ",") + this.cH) + ",") + this.cI) + ",") + this.cJ) + ",") + this.cK) + ",") + this.cL) + ",") + this.cM) + ",") + this.cz) + ",") + this.cA) + ",") + this.cB) + ",") + this.cC) + ",") + this.cD) + ",") + this.cE) + ")");
});
function $isArrayOf_T15(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ah)));
}
var $d_T15 = new $TypeData().i($c_T15, "scala.Tuple15", ({
  ah: 1,
  b: 1,
  c: 1,
  bR: 1,
  a: 1
}));
/** @constructor */
function $c_T16(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16) {
  this.fQ = null;
  this.cU = null;
  this.cV = null;
  this.cW = null;
  this.cX = null;
  this.cY = null;
  this.cZ = null;
  this.d0 = null;
  this.d1 = null;
  this.cN = null;
  this.cO = null;
  this.cP = null;
  this.cQ = null;
  this.cR = null;
  this.cS = null;
  this.cT = null;
  this.fQ = _1;
  this.cU = _2;
  this.cV = _3;
  this.cW = _4;
  this.cX = _5;
  this.cY = _6;
  this.cZ = _7;
  this.d0 = _8;
  this.d1 = _9;
  this.cN = _10;
  this.cO = _11;
  this.cP = _12;
  this.cQ = _13;
  this.cR = _14;
  this.cS = _15;
  this.cT = _16;
}
$p = $c_T16.prototype = new $h_O();
$p.constructor = $c_T16;
/** @constructor */
function $h_T16() {
}
$h_T16.prototype = $p;
$p.D = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.u = (function() {
  return 16;
});
$p.m = (function(n) {
  return $f_s_Product16__productElement__I__O(this, n);
});
$p.s = (function() {
  return $m_s_util_hashing_MurmurHash3$().T(this, 499793902, true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T16) && ((((((((((((((($m_sr_BoxesRunTime$().c(this.fQ, x$0.fQ) && $m_sr_BoxesRunTime$().c(this.cU, x$0.cU)) && $m_sr_BoxesRunTime$().c(this.cV, x$0.cV)) && $m_sr_BoxesRunTime$().c(this.cW, x$0.cW)) && $m_sr_BoxesRunTime$().c(this.cX, x$0.cX)) && $m_sr_BoxesRunTime$().c(this.cY, x$0.cY)) && $m_sr_BoxesRunTime$().c(this.cZ, x$0.cZ)) && $m_sr_BoxesRunTime$().c(this.d0, x$0.d0)) && $m_sr_BoxesRunTime$().c(this.d1, x$0.d1)) && $m_sr_BoxesRunTime$().c(this.cN, x$0.cN)) && $m_sr_BoxesRunTime$().c(this.cO, x$0.cO)) && $m_sr_BoxesRunTime$().c(this.cP, x$0.cP)) && $m_sr_BoxesRunTime$().c(this.cQ, x$0.cQ)) && $m_sr_BoxesRunTime$().c(this.cR, x$0.cR)) && $m_sr_BoxesRunTime$().c(this.cS, x$0.cS)) && $m_sr_BoxesRunTime$().c(this.cT, x$0.cT))));
});
$p.A = (function() {
  return "Tuple16";
});
$p.n = (function() {
  return (((((((((((((((((((((((((((((((("(" + this.fQ) + ",") + this.cU) + ",") + this.cV) + ",") + this.cW) + ",") + this.cX) + ",") + this.cY) + ",") + this.cZ) + ",") + this.d0) + ",") + this.d1) + ",") + this.cN) + ",") + this.cO) + ",") + this.cP) + ",") + this.cQ) + ",") + this.cR) + ",") + this.cS) + ",") + this.cT) + ")");
});
function $isArrayOf_T16(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ai)));
}
var $d_T16 = new $TypeData().i($c_T16, "scala.Tuple16", ({
  ai: 1,
  b: 1,
  c: 1,
  bS: 1,
  a: 1
}));
/** @constructor */
function $c_T17(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17) {
  this.fR = null;
  this.da = null;
  this.db = null;
  this.dc = null;
  this.dd = null;
  this.de = null;
  this.df = null;
  this.dg = null;
  this.dh = null;
  this.d2 = null;
  this.d3 = null;
  this.d4 = null;
  this.d5 = null;
  this.d6 = null;
  this.d7 = null;
  this.d8 = null;
  this.d9 = null;
  this.fR = _1;
  this.da = _2;
  this.db = _3;
  this.dc = _4;
  this.dd = _5;
  this.de = _6;
  this.df = _7;
  this.dg = _8;
  this.dh = _9;
  this.d2 = _10;
  this.d3 = _11;
  this.d4 = _12;
  this.d5 = _13;
  this.d6 = _14;
  this.d7 = _15;
  this.d8 = _16;
  this.d9 = _17;
}
$p = $c_T17.prototype = new $h_O();
$p.constructor = $c_T17;
/** @constructor */
function $h_T17() {
}
$h_T17.prototype = $p;
$p.D = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.u = (function() {
  return 17;
});
$p.m = (function(n) {
  return $f_s_Product17__productElement__I__O(this, n);
});
$p.s = (function() {
  return $m_s_util_hashing_MurmurHash3$().T(this, (-934366247), true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T17) && (((((((((((((((($m_sr_BoxesRunTime$().c(this.fR, x$0.fR) && $m_sr_BoxesRunTime$().c(this.da, x$0.da)) && $m_sr_BoxesRunTime$().c(this.db, x$0.db)) && $m_sr_BoxesRunTime$().c(this.dc, x$0.dc)) && $m_sr_BoxesRunTime$().c(this.dd, x$0.dd)) && $m_sr_BoxesRunTime$().c(this.de, x$0.de)) && $m_sr_BoxesRunTime$().c(this.df, x$0.df)) && $m_sr_BoxesRunTime$().c(this.dg, x$0.dg)) && $m_sr_BoxesRunTime$().c(this.dh, x$0.dh)) && $m_sr_BoxesRunTime$().c(this.d2, x$0.d2)) && $m_sr_BoxesRunTime$().c(this.d3, x$0.d3)) && $m_sr_BoxesRunTime$().c(this.d4, x$0.d4)) && $m_sr_BoxesRunTime$().c(this.d5, x$0.d5)) && $m_sr_BoxesRunTime$().c(this.d6, x$0.d6)) && $m_sr_BoxesRunTime$().c(this.d7, x$0.d7)) && $m_sr_BoxesRunTime$().c(this.d8, x$0.d8)) && $m_sr_BoxesRunTime$().c(this.d9, x$0.d9))));
});
$p.A = (function() {
  return "Tuple17";
});
$p.n = (function() {
  return (((((((((((((((((((((((((((((((((("(" + this.fR) + ",") + this.da) + ",") + this.db) + ",") + this.dc) + ",") + this.dd) + ",") + this.de) + ",") + this.df) + ",") + this.dg) + ",") + this.dh) + ",") + this.d2) + ",") + this.d3) + ",") + this.d4) + ",") + this.d5) + ",") + this.d6) + ",") + this.d7) + ",") + this.d8) + ",") + this.d9) + ")");
});
function $isArrayOf_T17(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aj)));
}
var $d_T17 = new $TypeData().i($c_T17, "scala.Tuple17", ({
  aj: 1,
  b: 1,
  c: 1,
  bT: 1,
  a: 1
}));
/** @constructor */
function $c_T18(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18) {
  this.fS = null;
  this.ds = null;
  this.dt = null;
  this.du = null;
  this.dv = null;
  this.dw = null;
  this.dx = null;
  this.dy = null;
  this.dz = null;
  this.di = null;
  this.dj = null;
  this.dk = null;
  this.dl = null;
  this.dm = null;
  this.dn = null;
  this.dp = null;
  this.dq = null;
  this.dr = null;
  this.fS = _1;
  this.ds = _2;
  this.dt = _3;
  this.du = _4;
  this.dv = _5;
  this.dw = _6;
  this.dx = _7;
  this.dy = _8;
  this.dz = _9;
  this.di = _10;
  this.dj = _11;
  this.dk = _12;
  this.dl = _13;
  this.dm = _14;
  this.dn = _15;
  this.dp = _16;
  this.dq = _17;
  this.dr = _18;
}
$p = $c_T18.prototype = new $h_O();
$p.constructor = $c_T18;
/** @constructor */
function $h_T18() {
}
$h_T18.prototype = $p;
$p.D = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.u = (function() {
  return 18;
});
$p.m = (function(n) {
  return $f_s_Product18__productElement__I__O(this, n);
});
$p.s = (function() {
  return $m_s_util_hashing_MurmurHash3$().T(this, (-937041276), true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T18) && ((((((((((((((((($m_sr_BoxesRunTime$().c(this.fS, x$0.fS) && $m_sr_BoxesRunTime$().c(this.ds, x$0.ds)) && $m_sr_BoxesRunTime$().c(this.dt, x$0.dt)) && $m_sr_BoxesRunTime$().c(this.du, x$0.du)) && $m_sr_BoxesRunTime$().c(this.dv, x$0.dv)) && $m_sr_BoxesRunTime$().c(this.dw, x$0.dw)) && $m_sr_BoxesRunTime$().c(this.dx, x$0.dx)) && $m_sr_BoxesRunTime$().c(this.dy, x$0.dy)) && $m_sr_BoxesRunTime$().c(this.dz, x$0.dz)) && $m_sr_BoxesRunTime$().c(this.di, x$0.di)) && $m_sr_BoxesRunTime$().c(this.dj, x$0.dj)) && $m_sr_BoxesRunTime$().c(this.dk, x$0.dk)) && $m_sr_BoxesRunTime$().c(this.dl, x$0.dl)) && $m_sr_BoxesRunTime$().c(this.dm, x$0.dm)) && $m_sr_BoxesRunTime$().c(this.dn, x$0.dn)) && $m_sr_BoxesRunTime$().c(this.dp, x$0.dp)) && $m_sr_BoxesRunTime$().c(this.dq, x$0.dq)) && $m_sr_BoxesRunTime$().c(this.dr, x$0.dr))));
});
$p.A = (function() {
  return "Tuple18";
});
$p.n = (function() {
  return (((((((((((((((((((((((((((((((((((("(" + this.fS) + ",") + this.ds) + ",") + this.dt) + ",") + this.du) + ",") + this.dv) + ",") + this.dw) + ",") + this.dx) + ",") + this.dy) + ",") + this.dz) + ",") + this.di) + ",") + this.dj) + ",") + this.dk) + ",") + this.dl) + ",") + this.dm) + ",") + this.dn) + ",") + this.dp) + ",") + this.dq) + ",") + this.dr) + ")");
});
function $isArrayOf_T18(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ak)));
}
var $d_T18 = new $TypeData().i($c_T18, "scala.Tuple18", ({
  ak: 1,
  b: 1,
  c: 1,
  bU: 1,
  a: 1
}));
/** @constructor */
function $c_T19(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19) {
  this.fT = null;
  this.dK = null;
  this.dL = null;
  this.dM = null;
  this.dN = null;
  this.dO = null;
  this.dP = null;
  this.dQ = null;
  this.dR = null;
  this.dA = null;
  this.dB = null;
  this.dC = null;
  this.dD = null;
  this.dE = null;
  this.dF = null;
  this.dG = null;
  this.dH = null;
  this.dI = null;
  this.dJ = null;
  this.fT = _1;
  this.dK = _2;
  this.dL = _3;
  this.dM = _4;
  this.dN = _5;
  this.dO = _6;
  this.dP = _7;
  this.dQ = _8;
  this.dR = _9;
  this.dA = _10;
  this.dB = _11;
  this.dC = _12;
  this.dD = _13;
  this.dE = _14;
  this.dF = _15;
  this.dG = _16;
  this.dH = _17;
  this.dI = _18;
  this.dJ = _19;
}
$p = $c_T19.prototype = new $h_O();
$p.constructor = $c_T19;
/** @constructor */
function $h_T19() {
}
$h_T19.prototype = $p;
$p.D = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.u = (function() {
  return 19;
});
$p.m = (function(n) {
  return $f_s_Product19__productElement__I__O(this, n);
});
$p.s = (function() {
  return $m_s_util_hashing_MurmurHash3$().T(this, (-1955940499), true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T19) && (((((((((((((((((($m_sr_BoxesRunTime$().c(this.fT, x$0.fT) && $m_sr_BoxesRunTime$().c(this.dK, x$0.dK)) && $m_sr_BoxesRunTime$().c(this.dL, x$0.dL)) && $m_sr_BoxesRunTime$().c(this.dM, x$0.dM)) && $m_sr_BoxesRunTime$().c(this.dN, x$0.dN)) && $m_sr_BoxesRunTime$().c(this.dO, x$0.dO)) && $m_sr_BoxesRunTime$().c(this.dP, x$0.dP)) && $m_sr_BoxesRunTime$().c(this.dQ, x$0.dQ)) && $m_sr_BoxesRunTime$().c(this.dR, x$0.dR)) && $m_sr_BoxesRunTime$().c(this.dA, x$0.dA)) && $m_sr_BoxesRunTime$().c(this.dB, x$0.dB)) && $m_sr_BoxesRunTime$().c(this.dC, x$0.dC)) && $m_sr_BoxesRunTime$().c(this.dD, x$0.dD)) && $m_sr_BoxesRunTime$().c(this.dE, x$0.dE)) && $m_sr_BoxesRunTime$().c(this.dF, x$0.dF)) && $m_sr_BoxesRunTime$().c(this.dG, x$0.dG)) && $m_sr_BoxesRunTime$().c(this.dH, x$0.dH)) && $m_sr_BoxesRunTime$().c(this.dI, x$0.dI)) && $m_sr_BoxesRunTime$().c(this.dJ, x$0.dJ))));
});
$p.A = (function() {
  return "Tuple19";
});
$p.n = (function() {
  return (((((((((((((((((((((((((((((((((((((("(" + this.fT) + ",") + this.dK) + ",") + this.dL) + ",") + this.dM) + ",") + this.dN) + ",") + this.dO) + ",") + this.dP) + ",") + this.dQ) + ",") + this.dR) + ",") + this.dA) + ",") + this.dB) + ",") + this.dC) + ",") + this.dD) + ",") + this.dE) + ",") + this.dF) + ",") + this.dG) + ",") + this.dH) + ",") + this.dI) + ",") + this.dJ) + ")");
});
function $isArrayOf_T19(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.al)));
}
var $d_T19 = new $TypeData().i($c_T19, "scala.Tuple19", ({
  al: 1,
  b: 1,
  c: 1,
  bV: 1,
  a: 1
}));
/** @constructor */
function $c_T2(_1, _2) {
  this.Z = null;
  this.au = null;
  this.Z = _1;
  this.au = _2;
}
$p = $c_T2.prototype = new $h_O();
$p.constructor = $c_T2;
/** @constructor */
function $h_T2() {
}
$h_T2.prototype = $p;
$p.u = (function() {
  return 2;
});
$p.m = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n);
});
$p.n = (function() {
  return (((("(" + this.Z) + ",") + this.au) + ")");
});
$p.A = (function() {
  return "Tuple2";
});
$p.D = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.s = (function() {
  return $m_s_util_hashing_MurmurHash3$().T(this, (-116390334), true);
});
$p.r = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T2) && ($m_sr_BoxesRunTime$().c(this.Z, x$1.Z) && $m_sr_BoxesRunTime$().c(this.au, x$1.au))));
});
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.am)));
}
var $d_T2 = new $TypeData().i($c_T2, "scala.Tuple2", ({
  am: 1,
  bW: 1,
  c: 1,
  b: 1,
  a: 1
}));
/** @constructor */
function $c_T20(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20) {
  this.fU = null;
  this.e2 = null;
  this.e4 = null;
  this.e5 = null;
  this.e6 = null;
  this.e7 = null;
  this.e8 = null;
  this.e9 = null;
  this.ea = null;
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
  this.fU = _1;
  this.e2 = _2;
  this.e4 = _3;
  this.e5 = _4;
  this.e6 = _5;
  this.e7 = _6;
  this.e8 = _7;
  this.e9 = _8;
  this.ea = _9;
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
}
$p = $c_T20.prototype = new $h_O();
$p.constructor = $c_T20;
/** @constructor */
function $h_T20() {
}
$h_T20.prototype = $p;
$p.D = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.u = (function() {
  return 20;
});
$p.m = (function(n) {
  return $f_s_Product20__productElement__I__O(this, n);
});
$p.s = (function() {
  return $m_s_util_hashing_MurmurHash3$().T(this, 1328807075, true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T20) && ((((((((((((((((((($m_sr_BoxesRunTime$().c(this.fU, x$0.fU) && $m_sr_BoxesRunTime$().c(this.e2, x$0.e2)) && $m_sr_BoxesRunTime$().c(this.e4, x$0.e4)) && $m_sr_BoxesRunTime$().c(this.e5, x$0.e5)) && $m_sr_BoxesRunTime$().c(this.e6, x$0.e6)) && $m_sr_BoxesRunTime$().c(this.e7, x$0.e7)) && $m_sr_BoxesRunTime$().c(this.e8, x$0.e8)) && $m_sr_BoxesRunTime$().c(this.e9, x$0.e9)) && $m_sr_BoxesRunTime$().c(this.ea, x$0.ea)) && $m_sr_BoxesRunTime$().c(this.dS, x$0.dS)) && $m_sr_BoxesRunTime$().c(this.dT, x$0.dT)) && $m_sr_BoxesRunTime$().c(this.dU, x$0.dU)) && $m_sr_BoxesRunTime$().c(this.dV, x$0.dV)) && $m_sr_BoxesRunTime$().c(this.dW, x$0.dW)) && $m_sr_BoxesRunTime$().c(this.dX, x$0.dX)) && $m_sr_BoxesRunTime$().c(this.dY, x$0.dY)) && $m_sr_BoxesRunTime$().c(this.dZ, x$0.dZ)) && $m_sr_BoxesRunTime$().c(this.e0, x$0.e0)) && $m_sr_BoxesRunTime$().c(this.e1, x$0.e1)) && $m_sr_BoxesRunTime$().c(this.e3, x$0.e3))));
});
$p.A = (function() {
  return "Tuple20";
});
$p.n = (function() {
  return (((((((((((((((((((((((((((((((((((((((("(" + this.fU) + ",") + this.e2) + ",") + this.e4) + ",") + this.e5) + ",") + this.e6) + ",") + this.e7) + ",") + this.e8) + ",") + this.e9) + ",") + this.ea) + ",") + this.dS) + ",") + this.dT) + ",") + this.dU) + ",") + this.dV) + ",") + this.dW) + ",") + this.dX) + ",") + this.dY) + ",") + this.dZ) + ",") + this.e0) + ",") + this.e1) + ",") + this.e3) + ")");
});
function $isArrayOf_T20(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.an)));
}
var $d_T20 = new $TypeData().i($c_T20, "scala.Tuple20", ({
  an: 1,
  b: 1,
  c: 1,
  bX: 1,
  a: 1
}));
/** @constructor */
function $c_T21(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21) {
  this.fV = null;
  this.el = null;
  this.eo = null;
  this.ep = null;
  this.eq = null;
  this.er = null;
  this.es = null;
  this.et = null;
  this.eu = null;
  this.eb = null;
  this.ec = null;
  this.ed = null;
  this.ee = null;
  this.ef = null;
  this.eg = null;
  this.eh = null;
  this.ei = null;
  this.ej = null;
  this.ek = null;
  this.em = null;
  this.en = null;
  this.fV = _1;
  this.el = _2;
  this.eo = _3;
  this.ep = _4;
  this.eq = _5;
  this.er = _6;
  this.es = _7;
  this.et = _8;
  this.eu = _9;
  this.eb = _10;
  this.ec = _11;
  this.ed = _12;
  this.ee = _13;
  this.ef = _14;
  this.eg = _15;
  this.eh = _16;
  this.ei = _17;
  this.ej = _18;
  this.ek = _19;
  this.em = _20;
  this.en = _21;
}
$p = $c_T21.prototype = new $h_O();
$p.constructor = $c_T21;
/** @constructor */
function $h_T21() {
}
$h_T21.prototype = $p;
$p.D = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.u = (function() {
  return 21;
});
$p.m = (function(n) {
  return $f_s_Product21__productElement__I__O(this, n);
});
$p.s = (function() {
  return $m_s_util_hashing_MurmurHash3$().T(this, (-21288119), true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T21) && (((((((((((((((((((($m_sr_BoxesRunTime$().c(this.fV, x$0.fV) && $m_sr_BoxesRunTime$().c(this.el, x$0.el)) && $m_sr_BoxesRunTime$().c(this.eo, x$0.eo)) && $m_sr_BoxesRunTime$().c(this.ep, x$0.ep)) && $m_sr_BoxesRunTime$().c(this.eq, x$0.eq)) && $m_sr_BoxesRunTime$().c(this.er, x$0.er)) && $m_sr_BoxesRunTime$().c(this.es, x$0.es)) && $m_sr_BoxesRunTime$().c(this.et, x$0.et)) && $m_sr_BoxesRunTime$().c(this.eu, x$0.eu)) && $m_sr_BoxesRunTime$().c(this.eb, x$0.eb)) && $m_sr_BoxesRunTime$().c(this.ec, x$0.ec)) && $m_sr_BoxesRunTime$().c(this.ed, x$0.ed)) && $m_sr_BoxesRunTime$().c(this.ee, x$0.ee)) && $m_sr_BoxesRunTime$().c(this.ef, x$0.ef)) && $m_sr_BoxesRunTime$().c(this.eg, x$0.eg)) && $m_sr_BoxesRunTime$().c(this.eh, x$0.eh)) && $m_sr_BoxesRunTime$().c(this.ei, x$0.ei)) && $m_sr_BoxesRunTime$().c(this.ej, x$0.ej)) && $m_sr_BoxesRunTime$().c(this.ek, x$0.ek)) && $m_sr_BoxesRunTime$().c(this.em, x$0.em)) && $m_sr_BoxesRunTime$().c(this.en, x$0.en))));
});
$p.A = (function() {
  return "Tuple21";
});
$p.n = (function() {
  return (((((((((((((((((((((((((((((((((((((((((("(" + this.fV) + ",") + this.el) + ",") + this.eo) + ",") + this.ep) + ",") + this.eq) + ",") + this.er) + ",") + this.es) + ",") + this.et) + ",") + this.eu) + ",") + this.eb) + ",") + this.ec) + ",") + this.ed) + ",") + this.ee) + ",") + this.ef) + ",") + this.eg) + ",") + this.eh) + ",") + this.ei) + ",") + this.ej) + ",") + this.ek) + ",") + this.em) + ",") + this.en) + ")");
});
function $isArrayOf_T21(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ao)));
}
var $d_T21 = new $TypeData().i($c_T21, "scala.Tuple21", ({
  ao: 1,
  b: 1,
  c: 1,
  bY: 1,
  a: 1
}));
/** @constructor */
function $c_T22(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22) {
  this.fW = null;
  this.eF = null;
  this.eJ = null;
  this.eK = null;
  this.eL = null;
  this.eM = null;
  this.eN = null;
  this.eO = null;
  this.eP = null;
  this.ev = null;
  this.ew = null;
  this.ex = null;
  this.ey = null;
  this.ez = null;
  this.eA = null;
  this.eB = null;
  this.eC = null;
  this.eD = null;
  this.eE = null;
  this.eG = null;
  this.eH = null;
  this.eI = null;
  this.fW = _1;
  this.eF = _2;
  this.eJ = _3;
  this.eK = _4;
  this.eL = _5;
  this.eM = _6;
  this.eN = _7;
  this.eO = _8;
  this.eP = _9;
  this.ev = _10;
  this.ew = _11;
  this.ex = _12;
  this.ey = _13;
  this.ez = _14;
  this.eA = _15;
  this.eB = _16;
  this.eC = _17;
  this.eD = _18;
  this.eE = _19;
  this.eG = _20;
  this.eH = _21;
  this.eI = _22;
}
$p = $c_T22.prototype = new $h_O();
$p.constructor = $c_T22;
/** @constructor */
function $h_T22() {
}
$h_T22.prototype = $p;
$p.D = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.u = (function() {
  return 22;
});
$p.m = (function(n) {
  return $f_s_Product22__productElement__I__O(this, n);
});
$p.s = (function() {
  return $m_s_util_hashing_MurmurHash3$().T(this, (-139445068), true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T22) && ((((((((((((((((((((($m_sr_BoxesRunTime$().c(this.fW, x$0.fW) && $m_sr_BoxesRunTime$().c(this.eF, x$0.eF)) && $m_sr_BoxesRunTime$().c(this.eJ, x$0.eJ)) && $m_sr_BoxesRunTime$().c(this.eK, x$0.eK)) && $m_sr_BoxesRunTime$().c(this.eL, x$0.eL)) && $m_sr_BoxesRunTime$().c(this.eM, x$0.eM)) && $m_sr_BoxesRunTime$().c(this.eN, x$0.eN)) && $m_sr_BoxesRunTime$().c(this.eO, x$0.eO)) && $m_sr_BoxesRunTime$().c(this.eP, x$0.eP)) && $m_sr_BoxesRunTime$().c(this.ev, x$0.ev)) && $m_sr_BoxesRunTime$().c(this.ew, x$0.ew)) && $m_sr_BoxesRunTime$().c(this.ex, x$0.ex)) && $m_sr_BoxesRunTime$().c(this.ey, x$0.ey)) && $m_sr_BoxesRunTime$().c(this.ez, x$0.ez)) && $m_sr_BoxesRunTime$().c(this.eA, x$0.eA)) && $m_sr_BoxesRunTime$().c(this.eB, x$0.eB)) && $m_sr_BoxesRunTime$().c(this.eC, x$0.eC)) && $m_sr_BoxesRunTime$().c(this.eD, x$0.eD)) && $m_sr_BoxesRunTime$().c(this.eE, x$0.eE)) && $m_sr_BoxesRunTime$().c(this.eG, x$0.eG)) && $m_sr_BoxesRunTime$().c(this.eH, x$0.eH)) && $m_sr_BoxesRunTime$().c(this.eI, x$0.eI))));
});
$p.A = (function() {
  return "Tuple22";
});
$p.n = (function() {
  return (((((((((((((((((((((((((((((((((((((((((((("(" + this.fW) + ",") + this.eF) + ",") + this.eJ) + ",") + this.eK) + ",") + this.eL) + ",") + this.eM) + ",") + this.eN) + ",") + this.eO) + ",") + this.eP) + ",") + this.ev) + ",") + this.ew) + ",") + this.ex) + ",") + this.ey) + ",") + this.ez) + ",") + this.eA) + ",") + this.eB) + ",") + this.eC) + ",") + this.eD) + ",") + this.eE) + ",") + this.eG) + ",") + this.eH) + ",") + this.eI) + ")");
});
function $isArrayOf_T22(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ap)));
}
var $d_T22 = new $TypeData().i($c_T22, "scala.Tuple22", ({
  ap: 1,
  b: 1,
  c: 1,
  bZ: 1,
  a: 1
}));
/** @constructor */
function $c_T3(_1, _2, _3) {
  this.bl = null;
  this.ba = null;
  this.bb = null;
  this.bl = _1;
  this.ba = _2;
  this.bb = _3;
}
$p = $c_T3.prototype = new $h_O();
$p.constructor = $c_T3;
/** @constructor */
function $h_T3() {
}
$h_T3.prototype = $p;
$p.D = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.u = (function() {
  return 3;
});
$p.m = (function(n) {
  return $f_s_Product3__productElement__I__O(this, n);
});
$p.s = (function() {
  return $m_s_util_hashing_MurmurHash3$().T(this, (-192629203), true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T3) && (($m_sr_BoxesRunTime$().c(this.bl, x$0.bl) && $m_sr_BoxesRunTime$().c(this.ba, x$0.ba)) && $m_sr_BoxesRunTime$().c(this.bb, x$0.bb))));
});
$p.A = (function() {
  return "Tuple3";
});
$p.n = (function() {
  return (((((("(" + this.bl) + ",") + this.ba) + ",") + this.bb) + ")");
});
function $isArrayOf_T3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aq)));
}
var $d_T3 = new $TypeData().i($c_T3, "scala.Tuple3", ({
  aq: 1,
  b: 1,
  c: 1,
  c0: 1,
  a: 1
}));
/** @constructor */
function $c_T4(_1, _2, _3, _4) {
  this.eQ = null;
  this.bm = null;
  this.bn = null;
  this.bo = null;
  this.eQ = _1;
  this.bm = _2;
  this.bn = _3;
  this.bo = _4;
}
$p = $c_T4.prototype = new $h_O();
$p.constructor = $c_T4;
/** @constructor */
function $h_T4() {
}
$h_T4.prototype = $p;
$p.D = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.u = (function() {
  return 4;
});
$p.m = (function(n) {
  return $f_s_Product4__productElement__I__O(this, n);
});
$p.s = (function() {
  return $m_s_util_hashing_MurmurHash3$().T(this, (-1542739752), true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T4) && ((($m_sr_BoxesRunTime$().c(this.eQ, x$0.eQ) && $m_sr_BoxesRunTime$().c(this.bm, x$0.bm)) && $m_sr_BoxesRunTime$().c(this.bn, x$0.bn)) && $m_sr_BoxesRunTime$().c(this.bo, x$0.bo))));
});
$p.A = (function() {
  return "Tuple4";
});
$p.n = (function() {
  return (((((((("(" + this.eQ) + ",") + this.bm) + ",") + this.bn) + ",") + this.bo) + ")");
});
function $isArrayOf_T4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ar)));
}
var $d_T4 = new $TypeData().i($c_T4, "scala.Tuple4", ({
  ar: 1,
  b: 1,
  c: 1,
  c1: 1,
  a: 1
}));
/** @constructor */
function $c_T5(_1, _2, _3, _4, _5) {
  this.fX = null;
  this.eR = null;
  this.eS = null;
  this.eT = null;
  this.eU = null;
  this.fX = _1;
  this.eR = _2;
  this.eS = _3;
  this.eT = _4;
  this.eU = _5;
}
$p = $c_T5.prototype = new $h_O();
$p.constructor = $c_T5;
/** @constructor */
function $h_T5() {
}
$h_T5.prototype = $p;
$p.D = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.u = (function() {
  return 5;
});
$p.m = (function(n) {
  return $f_s_Product5__productElement__I__O(this, n);
});
$p.s = (function() {
  return $m_s_util_hashing_MurmurHash3$().T(this, 417360321, true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T5) && (((($m_sr_BoxesRunTime$().c(this.fX, x$0.fX) && $m_sr_BoxesRunTime$().c(this.eR, x$0.eR)) && $m_sr_BoxesRunTime$().c(this.eS, x$0.eS)) && $m_sr_BoxesRunTime$().c(this.eT, x$0.eT)) && $m_sr_BoxesRunTime$().c(this.eU, x$0.eU))));
});
$p.A = (function() {
  return "Tuple5";
});
$p.n = (function() {
  return (((((((((("(" + this.fX) + ",") + this.eR) + ",") + this.eS) + ",") + this.eT) + ",") + this.eU) + ")");
});
function $isArrayOf_T5(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.as)));
}
var $d_T5 = new $TypeData().i($c_T5, "scala.Tuple5", ({
  as: 1,
  b: 1,
  c: 1,
  c2: 1,
  a: 1
}));
/** @constructor */
function $c_T6(_1, _2, _3, _4, _5, _6) {
  this.fY = null;
  this.eV = null;
  this.eW = null;
  this.eX = null;
  this.eY = null;
  this.eZ = null;
  this.fY = _1;
  this.eV = _2;
  this.eW = _3;
  this.eX = _4;
  this.eY = _5;
  this.eZ = _6;
}
$p = $c_T6.prototype = new $h_O();
$p.constructor = $c_T6;
/** @constructor */
function $h_T6() {
}
$h_T6.prototype = $p;
$p.D = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.u = (function() {
  return 6;
});
$p.m = (function(n) {
  return $f_s_Product6__productElement__I__O(this, n);
});
$p.s = (function() {
  return $m_s_util_hashing_MurmurHash3$().T(this, (-1037607828), true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T6) && ((((($m_sr_BoxesRunTime$().c(this.fY, x$0.fY) && $m_sr_BoxesRunTime$().c(this.eV, x$0.eV)) && $m_sr_BoxesRunTime$().c(this.eW, x$0.eW)) && $m_sr_BoxesRunTime$().c(this.eX, x$0.eX)) && $m_sr_BoxesRunTime$().c(this.eY, x$0.eY)) && $m_sr_BoxesRunTime$().c(this.eZ, x$0.eZ))));
});
$p.A = (function() {
  return "Tuple6";
});
$p.n = (function() {
  return (((((((((((("(" + this.fY) + ",") + this.eV) + ",") + this.eW) + ",") + this.eX) + ",") + this.eY) + ",") + this.eZ) + ")");
});
function $isArrayOf_T6(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.at)));
}
var $d_T6 = new $TypeData().i($c_T6, "scala.Tuple6", ({
  at: 1,
  b: 1,
  c: 1,
  c3: 1,
  a: 1
}));
/** @constructor */
function $c_T7(_1, _2, _3, _4, _5, _6, _7) {
  this.fZ = null;
  this.f0 = null;
  this.f1 = null;
  this.f2 = null;
  this.f3 = null;
  this.f4 = null;
  this.f5 = null;
  this.fZ = _1;
  this.f0 = _2;
  this.f1 = _3;
  this.f2 = _4;
  this.f3 = _5;
  this.f4 = _6;
  this.f5 = _7;
}
$p = $c_T7.prototype = new $h_O();
$p.constructor = $c_T7;
/** @constructor */
function $h_T7() {
}
$h_T7.prototype = $p;
$p.D = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.u = (function() {
  return 7;
});
$p.m = (function(n) {
  return $f_s_Product7__productElement__I__O(this, n);
});
$p.s = (function() {
  return $m_s_util_hashing_MurmurHash3$().T(this, (-1050932777), true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T7) && (((((($m_sr_BoxesRunTime$().c(this.fZ, x$0.fZ) && $m_sr_BoxesRunTime$().c(this.f0, x$0.f0)) && $m_sr_BoxesRunTime$().c(this.f1, x$0.f1)) && $m_sr_BoxesRunTime$().c(this.f2, x$0.f2)) && $m_sr_BoxesRunTime$().c(this.f3, x$0.f3)) && $m_sr_BoxesRunTime$().c(this.f4, x$0.f4)) && $m_sr_BoxesRunTime$().c(this.f5, x$0.f5))));
});
$p.A = (function() {
  return "Tuple7";
});
$p.n = (function() {
  return (((((((((((((("(" + this.fZ) + ",") + this.f0) + ",") + this.f1) + ",") + this.f2) + ",") + this.f3) + ",") + this.f4) + ",") + this.f5) + ")");
});
function $isArrayOf_T7(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.au)));
}
var $d_T7 = new $TypeData().i($c_T7, "scala.Tuple7", ({
  au: 1,
  b: 1,
  c: 1,
  c4: 1,
  a: 1
}));
/** @constructor */
function $c_T8(_1, _2, _3, _4, _5, _6, _7, _8) {
  this.g0 = null;
  this.f6 = null;
  this.f7 = null;
  this.f8 = null;
  this.f9 = null;
  this.fa = null;
  this.fb = null;
  this.fc = null;
  this.g0 = _1;
  this.f6 = _2;
  this.f7 = _3;
  this.f8 = _4;
  this.f9 = _5;
  this.fa = _6;
  this.fb = _7;
  this.fc = _8;
}
$p = $c_T8.prototype = new $h_O();
$p.constructor = $c_T8;
/** @constructor */
function $h_T8() {
}
$h_T8.prototype = $p;
$p.D = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.u = (function() {
  return 8;
});
$p.m = (function(n) {
  return $f_s_Product8__productElement__I__O(this, n);
});
$p.s = (function() {
  return $m_s_util_hashing_MurmurHash3$().T(this, 1998822530, true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T8) && ((((((($m_sr_BoxesRunTime$().c(this.g0, x$0.g0) && $m_sr_BoxesRunTime$().c(this.f6, x$0.f6)) && $m_sr_BoxesRunTime$().c(this.f7, x$0.f7)) && $m_sr_BoxesRunTime$().c(this.f8, x$0.f8)) && $m_sr_BoxesRunTime$().c(this.f9, x$0.f9)) && $m_sr_BoxesRunTime$().c(this.fa, x$0.fa)) && $m_sr_BoxesRunTime$().c(this.fb, x$0.fb)) && $m_sr_BoxesRunTime$().c(this.fc, x$0.fc))));
});
$p.A = (function() {
  return "Tuple8";
});
$p.n = (function() {
  return (((((((((((((((("(" + this.g0) + ",") + this.f6) + ",") + this.f7) + ",") + this.f8) + ",") + this.f9) + ",") + this.fa) + ",") + this.fb) + ",") + this.fc) + ")");
});
function $isArrayOf_T8(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.av)));
}
var $d_T8 = new $TypeData().i($c_T8, "scala.Tuple8", ({
  av: 1,
  b: 1,
  c: 1,
  c5: 1,
  a: 1
}));
/** @constructor */
function $c_T9(_1, _2, _3, _4, _5, _6, _7, _8, _9) {
  this.g1 = null;
  this.fd = null;
  this.fe = null;
  this.ff = null;
  this.fg = null;
  this.fh = null;
  this.fi = null;
  this.fj = null;
  this.fk = null;
  this.g1 = _1;
  this.fd = _2;
  this.fe = _3;
  this.ff = _4;
  this.fg = _5;
  this.fh = _6;
  this.fi = _7;
  this.fj = _8;
  this.fk = _9;
}
$p = $c_T9.prototype = new $h_O();
$p.constructor = $c_T9;
/** @constructor */
function $h_T9() {
}
$h_T9.prototype = $p;
$p.D = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.u = (function() {
  return 9;
});
$p.m = (function(n) {
  return $f_s_Product9__productElement__I__O(this, n);
});
$p.s = (function() {
  return $m_s_util_hashing_MurmurHash3$().T(this, (-1807911176), true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T9) && (((((((($m_sr_BoxesRunTime$().c(this.g1, x$0.g1) && $m_sr_BoxesRunTime$().c(this.fd, x$0.fd)) && $m_sr_BoxesRunTime$().c(this.fe, x$0.fe)) && $m_sr_BoxesRunTime$().c(this.ff, x$0.ff)) && $m_sr_BoxesRunTime$().c(this.fg, x$0.fg)) && $m_sr_BoxesRunTime$().c(this.fh, x$0.fh)) && $m_sr_BoxesRunTime$().c(this.fi, x$0.fi)) && $m_sr_BoxesRunTime$().c(this.fj, x$0.fj)) && $m_sr_BoxesRunTime$().c(this.fk, x$0.fk))));
});
$p.A = (function() {
  return "Tuple9";
});
$p.n = (function() {
  return (((((((((((((((((("(" + this.g1) + ",") + this.fd) + ",") + this.fe) + ",") + this.ff) + ",") + this.fg) + ",") + this.fh) + ",") + this.fi) + ",") + this.fj) + ",") + this.fk) + ")");
});
function $isArrayOf_T9(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aw)));
}
var $d_T9 = new $TypeData().i($c_T9, "scala.Tuple9", ({
  aw: 1,
  b: 1,
  c: 1,
  c6: 1,
  a: 1
}));
function $f_sc_Iterable__toString__T($thiz) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, ($thiz.fC() + "("), ", ", ")");
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
$p.N = (function() {
  return false;
});
$p.p7 = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator");
});
$p.ah = (function() {
  return 0;
});
$p.E = (function() {
  this.p7();
});
$p.iu = (function(from, until) {
  return this;
});
var $d_sc_Iterator$$anon$19 = new $TypeData().i($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  cg: 1,
  m: 1,
  d: 1,
  e: 1,
  r: 1
}));
function $p_sc_Iterator$ConcatIterator__merge$1__V($thiz) {
  while (true) {
    if (($thiz.aB instanceof $c_sc_Iterator$ConcatIterator)) {
      var c = $thiz.aB;
      $thiz.aB = c.aB;
      $thiz.bq = c.bq;
      if ((c.aK !== null)) {
        if (($thiz.aJ === null)) {
          $thiz.aJ = c.aJ;
        }
        var x$proxy10 = c.aJ;
        if ((x$proxy10 === null)) {
          $m_sr_Scala3RunTime$().ir();
        }
        x$proxy10.gv = $thiz.aK;
        $thiz.aK = c.aK;
      }
    } else {
      return (void 0);
    }
  }
}
function $p_sc_Iterator$ConcatIterator__advance$1__Z($thiz) {
  while (true) {
    if (($thiz.aK === null)) {
      $thiz.aB = null;
      $thiz.aJ = null;
      return false;
    } else {
      $thiz.aB = $thiz.aK.og();
      if (($thiz.aJ === $thiz.aK)) {
        var x$proxy12 = $thiz.aJ;
        if ((x$proxy12 === null)) {
          $m_sr_Scala3RunTime$().ir();
        }
        $thiz.aJ = x$proxy12.gv;
      }
      $thiz.aK = $thiz.aK.gv;
      $p_sc_Iterator$ConcatIterator__merge$1__V($thiz);
      if ($thiz.bq) {
        return true;
      } else {
        if ((!(($thiz.aB !== null) && $thiz.aB.N()))) {
          continue;
        }
        $thiz.bq = true;
        return true;
      }
    }
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIterator(from) {
  this.aB = null;
  this.aK = null;
  this.aJ = null;
  this.bq = false;
  this.aB = from;
  this.aK = null;
  this.aJ = null;
  this.bq = false;
}
$p = $c_sc_Iterator$ConcatIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$ConcatIterator;
/** @constructor */
function $h_sc_Iterator$ConcatIterator() {
}
$h_sc_Iterator$ConcatIterator.prototype = $p;
$p.N = (function() {
  if (this.bq) {
    return true;
  } else if ((this.aB !== null)) {
    if (this.aB.N()) {
      this.bq = true;
      return true;
    } else {
      return $p_sc_Iterator$ConcatIterator__advance$1__Z(this);
    }
  } else {
    return false;
  }
});
$p.E = (function() {
  if (this.N()) {
    this.bq = false;
    var x$proxy13 = this.aB;
    if ((x$proxy13 === null)) {
      $m_sr_Scala3RunTime$().ir();
    }
    return x$proxy13.E();
  } else {
    return $m_sc_Iterator$().b0.E();
  }
});
$p.nJ = (function(that) {
  var c = new $c_sc_Iterator$ConcatIteratorCell(that, null);
  if ((this.aK === null)) {
    this.aK = c;
    this.aJ = c;
  } else {
    var x$proxy14 = this.aJ;
    if ((x$proxy14 === null)) {
      $m_sr_Scala3RunTime$().ir();
    }
    x$proxy14.gv = c;
    this.aJ = c;
  }
  if ((this.aB === null)) {
    this.aB = $m_sc_Iterator$().b0;
  }
  return this;
});
function $isArrayOf_sc_Iterator$ConcatIterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aB)));
}
var $d_sc_Iterator$ConcatIterator = new $TypeData().i($c_sc_Iterator$ConcatIterator, "scala.collection.Iterator$ConcatIterator", ({
  aB: 1,
  m: 1,
  d: 1,
  e: 1,
  r: 1
}));
function $p_sc_Iterator$SliceIterator__skip__V($thiz) {
  while (($thiz.bd > 0)) {
    if ($thiz.br.N()) {
      $thiz.br.E();
      $thiz.bd = (($thiz.bd - 1) | 0);
    } else {
      $thiz.bd = 0;
    }
  }
}
function $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I($thiz, lo$1) {
  if (($thiz.aD < 0)) {
    return (-1);
  } else {
    var that = (($thiz.aD - lo$1) | 0);
    return ((that < 0) ? 0 : that);
  }
}
/** @constructor */
function $c_sc_Iterator$SliceIterator(underlying, start, limit) {
  this.br = null;
  this.aD = 0;
  this.bd = 0;
  this.br = underlying;
  this.aD = limit;
  this.bd = start;
}
$p = $c_sc_Iterator$SliceIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$SliceIterator;
/** @constructor */
function $h_sc_Iterator$SliceIterator() {
}
$h_sc_Iterator$SliceIterator.prototype = $p;
$p.ah = (function() {
  var size = this.br.ah();
  if ((size < 0)) {
    return (-1);
  } else {
    var that = ((size - this.bd) | 0);
    var dropSize = ((that < 0) ? 0 : that);
    if ((this.aD < 0)) {
      return dropSize;
    } else {
      var x = this.aD;
      return ((x < dropSize) ? x : dropSize);
    }
  }
});
$p.N = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  return ((this.aD !== 0) && this.br.N());
});
$p.E = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  if ((this.aD > 0)) {
    this.aD = ((this.aD - 1) | 0);
    return this.br.E();
  } else {
    return ((this.aD < 0) ? this.br.E() : $m_sc_Iterator$().b0.E());
  }
});
$p.iu = (function(from, until) {
  var lo = ((from > 0) ? from : 0);
  if ((until < 0)) {
    var rest = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
  } else if ((until <= lo)) {
    var rest = 0;
  } else if ((this.aD < 0)) {
    var rest = ((until - lo) | 0);
  } else {
    var x = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
    var that = ((until - lo) | 0);
    var rest = ((x < that) ? x : that);
  }
  var sum = ((this.bd + lo) | 0);
  if ((rest === 0)) {
    return $m_sc_Iterator$().b0;
  } else if ((sum < 0)) {
    this.bd = 2147483647;
    this.aD = 0;
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => new $c_sc_Iterator$SliceIterator(this.br, ((sum - 2147483647) | 0), rest))));
  } else {
    this.bd = sum;
    this.aD = rest;
    return this;
  }
});
var $d_sc_Iterator$SliceIterator = new $TypeData().i($c_sc_Iterator$SliceIterator, "scala.collection.Iterator$SliceIterator", ({
  ci: 1,
  m: 1,
  d: 1,
  e: 1,
  r: 1
}));
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw new $c_jl_IndexOutOfBoundsException(("" + n));
  }
  var skipped = $thiz.nW(n);
  if (skipped.ab()) {
    throw new $c_jl_IndexOutOfBoundsException(("" + n));
  }
  return skipped.jK();
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
      if ((((!a$tailLocal1.ab()) && (!b$tailLocal1.ab())) && $m_sr_BoxesRunTime$().c(a$tailLocal1.jK(), b$tailLocal1.jK()))) {
        var a$tailLocal1$tmp1 = a$tailLocal1.jS();
        var b$tailLocal1$tmp1 = b$tailLocal1.jS();
        a$tailLocal1 = a$tailLocal1$tmp1;
        b$tailLocal1 = b$tailLocal1$tmp1;
        continue;
      }
      return (a$tailLocal1.ab() && b$tailLocal1.ab());
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
  cx: 1,
  a: 1,
  aA: 1,
  ck: 1,
  co: 1
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
  this.kq = null;
  this.gx = 0;
  this.kp = 0;
  this.kq = x$1;
  this.gx = 0;
  this.kp = x$1.u();
}
$p = $c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $p;
$p.N = (function() {
  return (this.gx < this.kp);
});
$p.E = (function() {
  var result = this.kq.m(this.gx);
  this.gx = ((1 + this.gx) | 0);
  return result;
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().i($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
  d9: 1,
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a8)));
}
var $d_jl_Double = new $TypeData().i(0, "java.lang.Double", ({
  a8: 1,
  u: 1,
  a: 1,
  i: 1,
  h: 1,
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
  be: 1,
  u: 1,
  a: 1,
  i: 1,
  h: 1,
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
var $d_jl_Integer = new $TypeData().i(0, "java.lang.Integer", ({
  bg: 1,
  u: 1,
  a: 1,
  i: 1,
  h: 1,
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
  return $m_RTLong$().n2($thiz, $thizhi);
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aa)));
}
var $d_jl_Long = new $TypeData().i(0, "java.lang.Long", ({
  aa: 1,
  u: 1,
  a: 1,
  i: 1,
  h: 1,
  C: 1
}), ((x) => (x instanceof $Long)));
class $c_jl_NumberFormatException extends $c_jl_IllegalArgumentException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_NumberFormatException = new $TypeData().i($c_jl_NumberFormatException, "java.lang.NumberFormatException", ({
  bl: 1,
  a9: 1,
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
  var str = $m_jl_Character$().pI(ch);
  return ($thiz.indexOf(str) | 0);
}
function $f_T__toString__T($thiz) {
  return $thiz;
}
var $d_T = new $TypeData().i(0, "java.lang.String", ({
  bo: 1,
  a: 1,
  i: 1,
  L: 1,
  h: 1,
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
$p.fD = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.jH = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.fC = (function() {
  return this.bF();
});
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator(xs) {
  this.hE = null;
  this.bc = 0;
  this.gu = 0;
  this.hE = xs;
  this.bc = 0;
  this.gu = $m_jl_reflect_Array$().ha(this.hE);
}
$p = $c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
}
$h_sc_ArrayOps$ArrayIterator.prototype = $p;
$p.ah = (function() {
  return ((this.gu - this.bc) | 0);
});
$p.N = (function() {
  return (this.bc < this.gu);
});
$p.E = (function() {
  if ((this.bc >= $m_jl_reflect_Array$().ha(this.hE))) {
    $m_sc_Iterator$().b0.E();
  }
  var r = $m_sr_ScalaRunTime$().gn(this.hE, this.bc);
  this.bc = ((1 + this.bc) | 0);
  return r;
});
$p.h8 = (function(n) {
  if ((n > 0)) {
    var newPos = ((this.bc + n) | 0);
    if ((newPos < 0)) {
      var $x_1 = this.gu;
    } else {
      var a = this.gu;
      var $x_1 = ((a < newPos) ? a : newPos);
    }
    this.bc = $x_1;
  }
  return this;
});
var $d_sc_ArrayOps$ArrayIterator = new $TypeData().i($c_sc_ArrayOps$ArrayIterator, "scala.collection.ArrayOps$ArrayIterator", ({
  ca: 1,
  m: 1,
  d: 1,
  e: 1,
  r: 1,
  a: 1
}));
function $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I($thiz, value) {
  return ((value < 0) ? 0 : ((value > $thiz.aP) ? $thiz.aP : value));
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator(self) {
  this.kc = null;
  this.bp = 0;
  this.aP = 0;
  this.kc = self;
  this.bp = 0;
  this.aP = self.C();
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $p;
$p.ah = (function() {
  return this.aP;
});
$p.N = (function() {
  return (this.aP > 0);
});
$p.E = (function() {
  if ((this.aP > 0)) {
    var r = this.kc.aa(this.bp);
    this.bp = ((1 + this.bp) | 0);
    this.aP = ((this.aP - 1) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().b0.E();
  }
});
$p.h8 = (function(n) {
  if ((n > 0)) {
    this.bp = ((this.bp + n) | 0);
    var b = ((this.aP - n) | 0);
    this.aP = ((b < 0) ? 0 : b);
  }
  return this;
});
$p.iu = (function(from, until) {
  var formatFrom = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, from);
  var formatUntil = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, until);
  var b = ((formatUntil - formatFrom) | 0);
  this.aP = ((b < 0) ? 0 : b);
  this.bp = ((this.bp + formatFrom) | 0);
  return this;
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
  ce: 1,
  m: 1,
  d: 1,
  e: 1,
  r: 1,
  a: 1
}));
function $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($thiz) {
  if ((!$thiz.kg)) {
    $thiz.kf = new $c_sci_ArraySeq$ofRef(new ($d_sr_Nothing$.r().C)(0));
    $thiz.kg = true;
  }
  return $thiz.kf;
}
/** @constructor */
function $c_sci_ArraySeq$() {
  this.kf = null;
  this.kg = false;
}
$p = $c_sci_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_sci_ArraySeq$;
/** @constructor */
function $h_sci_ArraySeq$() {
}
$h_sci_ArraySeq$.prototype = $p;
var $d_sci_ArraySeq$ = new $TypeData().i($c_sci_ArraySeq$, "scala.collection.immutable.ArraySeq$", ({
  ct: 1,
  a: 1,
  az: 1,
  ax: 1,
  ay: 1,
  aC: 1
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
  this.g3 = 0;
  this.fo = 0;
  this.fm = false;
  this.fn = 0;
  this.g3 = step;
  this.fo = lastElement;
  this.fm = (!initiallyEmpty);
  this.fn = start;
}
$p = $c_sci_RangeIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_RangeIterator;
/** @constructor */
function $h_sci_RangeIterator() {
}
$h_sci_RangeIterator.prototype = $p;
$p.ah = (function() {
  return (this.fm ? ((1 + ((((this.fo - this.fn) | 0) / $checkIntDivisor(this.g3)) | 0)) | 0) : 0);
});
$p.N = (function() {
  return this.fm;
});
$p.p8 = (function() {
  if ((!this.fm)) {
    $m_sc_Iterator$().b0.E();
  }
  var value = this.fn;
  this.fm = (value !== this.fo);
  this.fn = ((value + this.g3) | 0);
  return value;
});
$p.h8 = (function(n) {
  if ((n > 0)) {
    var value = this.fn;
    var hi = (value >> 31);
    var value$1 = Math.imul(this.g3, n);
    var hi$1 = (value$1 >> 31);
    var lo = ((value + value$1) | 0);
    var hi$2 = ((((hi + hi$1) | 0) + ((((value & value$1) | ((value | value$1) & (~lo))) >>> 31) | 0)) | 0);
    if ((this.g3 > 0)) {
      var x = this.fo;
      var hi$3 = (x >> 31);
      if (((hi$3 === hi$2) ? ((x >>> 0) < (lo >>> 0)) : (hi$3 < hi$2))) {
        var $x_1_$_lo = x;
        var $x_1_$_hi = hi$3;
      } else {
        var $x_1_$_lo = lo;
        var $x_1_$_hi = hi$2;
      }
      this.fn = $x_1_$_lo;
      var value$2 = this.fo;
      var hi$4 = (value$2 >> 31);
      this.fm = ((hi$2 === hi$4) ? ((lo >>> 0) <= (value$2 >>> 0)) : (hi$2 < hi$4));
    } else if ((this.g3 < 0)) {
      var x$2 = this.fo;
      var hi$5 = (x$2 >> 31);
      if (((hi$5 === hi$2) ? ((x$2 >>> 0) > (lo >>> 0)) : (hi$5 > hi$2))) {
        var $x_2_$_lo = x$2;
        var $x_2_$_hi = hi$5;
      } else {
        var $x_2_$_lo = lo;
        var $x_2_$_hi = hi$2;
      }
      this.fn = $x_2_$_lo;
      var value$3 = this.fo;
      var hi$6 = (value$3 >> 31);
      this.fm = ((hi$2 === hi$6) ? ((lo >>> 0) >= (value$3 >>> 0)) : (hi$2 > hi$6));
    }
  }
  return this;
});
$p.E = (function() {
  return this.p8();
});
var $d_sci_RangeIterator = new $TypeData().i($c_sci_RangeIterator, "scala.collection.immutable.RangeIterator", ({
  cB: 1,
  m: 1,
  d: 1,
  e: 1,
  r: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$() {
  this.ki = null;
  $n_scm_ArraySeq$ = this;
  this.ki = new $c_scm_ArraySeq$ofRef(new $ac_O(0));
}
$p = $c_scm_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_scm_ArraySeq$;
/** @constructor */
function $h_scm_ArraySeq$() {
}
$h_scm_ArraySeq$.prototype = $p;
var $d_scm_ArraySeq$ = new $TypeData().i($c_scm_ArraySeq$, "scala.collection.mutable.ArraySeq$", ({
  cD: 1,
  a: 1,
  az: 1,
  ax: 1,
  ay: 1,
  aC: 1
}));
var $n_scm_ArraySeq$;
function $m_scm_ArraySeq$() {
  if ((!$n_scm_ArraySeq$)) {
    $n_scm_ArraySeq$ = new $c_scm_ArraySeq$();
  }
  return $n_scm_ArraySeq$;
}
function $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__($thiz, _out, autoFlush, charset) {
  $ct_Ljava_io_FilterOutputStream__Ljava_io_OutputStream__($thiz, _out);
  return $thiz;
}
/** @constructor */
function $c_Ljava_io_PrintStream() {
}
$p = $c_Ljava_io_PrintStream.prototype = new $h_Ljava_io_FilterOutputStream();
$p.constructor = $c_Ljava_io_PrintStream;
/** @constructor */
function $h_Ljava_io_PrintStream() {
}
$h_Ljava_io_PrintStream.prototype = $p;
/** @constructor */
function $c_T$package$EmptyTuple$() {
}
$p = $c_T$package$EmptyTuple$.prototype = new $h_O();
$p.constructor = $c_T$package$EmptyTuple$;
/** @constructor */
function $h_T$package$EmptyTuple$() {
}
$h_T$package$EmptyTuple$.prototype = $p;
$p.D = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 924202651;
});
$p.u = (function() {
  return 0;
});
$p.A = (function() {
  return "EmptyTuple";
});
$p.m = (function(n) {
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
$p.n = (function() {
  return "()";
});
var $d_T$package$EmptyTuple$ = new $TypeData().i($c_T$package$EmptyTuple$, "scala.Tuple$package$EmptyTuple$", ({
  c7: 1,
  b: 1,
  c: 1,
  a: 1,
  aL: 1,
  aM: 1,
  cJ: 1
}));
var $n_T$package$EmptyTuple$;
function $m_T$package$EmptyTuple$() {
  if ((!$n_T$package$EmptyTuple$)) {
    $n_T$package$EmptyTuple$ = new $c_T$package$EmptyTuple$();
  }
  return $n_T$package$EmptyTuple$;
}
function $f_sc_View__toString__T($thiz) {
  return ($thiz.bF() + "(<not computed>)");
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
    this.aE = null;
    this.aE = exception;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  im() {
    return $dp_toString__T(this.aE);
  }
  A() {
    return "JavaScriptException";
  }
  u() {
    return 1;
  }
  m(x$1) {
    return ((x$1 === 0) ? this.aE : $m_sr_Statics$().ol(x$1));
  }
  D() {
    return new $c_sr_ScalaRunTime$$anon$1(this);
  }
  s() {
    return $m_s_util_hashing_MurmurHash3$().T(this, 1744042595, true);
  }
  r(x$1) {
    return ((this === x$1) || ((x$1 instanceof $c_sjs_js_JavaScriptException) && $m_sr_BoxesRunTime$().c(this.aE, x$1.aE)));
  }
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aP)));
}
var $d_sjs_js_JavaScriptException = new $TypeData().i($c_sjs_js_JavaScriptException, "scala.scalajs.js.JavaScriptException", ({
  aP: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1,
  c: 1,
  b: 1
}));
function $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V($thiz, line) {
  if (((typeof console) !== "undefined")) {
    if (($thiz.k2 && (!(!(!(!console.error)))))) {
      console.error(line);
    } else {
      console.log(line);
    }
  }
}
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream(isErr) {
  this.k2 = false;
  this.gs = null;
  this.k2 = isErr;
  $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__(this, new $c_jl_JSConsoleBasedPrintStream$DummyOutputStream(), false, null);
  this.gs = "";
}
$p = $c_jl_JSConsoleBasedPrintStream.prototype = new $h_Ljava_io_PrintStream();
$p.constructor = $c_jl_JSConsoleBasedPrintStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream() {
}
$h_jl_JSConsoleBasedPrintStream.prototype = $p;
$p.oo = (function(s) {
  var rest = s;
  while ((rest !== "")) {
    var this$1 = rest;
    var nlPos = (this$1.indexOf("\n") | 0);
    if ((nlPos < 0)) {
      this.gs = (("" + this.gs) + rest);
      rest = "";
    } else {
      var $x_1 = this.gs;
      var this$2 = rest;
      $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V(this, (("" + $x_1) + this$2.substring(0, nlPos)));
      this.gs = "";
      var this$3 = rest;
      var beginIndex = ((1 + nlPos) | 0);
      rest = this$3.substring(beginIndex);
    }
  }
});
var $d_jl_JSConsoleBasedPrintStream = new $TypeData().i($c_jl_JSConsoleBasedPrintStream, "java.lang.JSConsoleBasedPrintStream", ({
  bi: 1,
  b6: 1,
  b5: 1,
  a4: 1,
  a2: 1,
  a6: 1,
  a3: 1,
  a5: 1
}));
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  var s$tailLocal1 = s;
  var n$tailLocal1 = n;
  while (true) {
    if (((n$tailLocal1 <= 0) || s$tailLocal1.ab())) {
      return s$tailLocal1;
    } else {
      var n$tailLocal1$tmp1 = ((n$tailLocal1 - 1) | 0);
      var s$tailLocal1$tmp1 = s$tailLocal1.jS();
      n$tailLocal1 = n$tailLocal1$tmp1;
      s$tailLocal1 = s$tailLocal1$tmp1;
    }
  }
}
/** @constructor */
function $c_s_reflect_ManifestFactory$PhantomManifest() {
  this.iz = null;
}
$p = $c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$p.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
}
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $p;
$p.n = (function() {
  return this.iz;
});
$p.r = (function(that) {
  return (this === that);
});
$p.s = (function() {
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
$p.n = (function() {
  return $f_sc_View__toString__T(this);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ObjectManifest$() {
  this.iz = null;
  this.iz = "Object";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$ObjectManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ObjectManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ObjectManifest$() {
}
$h_s_reflect_ManifestFactory$ObjectManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ObjectManifest$, "scala.reflect.ManifestFactory$ObjectManifest$", ({
  cQ: 1,
  cR: 1,
  cP: 1,
  a: 1,
  cS: 1,
  cM: 1,
  b: 1,
  cN: 1,
  cO: 1
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
      if (o.il($thiz)) {
        return $thiz.hu(o);
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
$p.ab = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.hu = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.il = (function(that) {
  return true;
});
$p.r = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.s = (function() {
  return $m_s_util_hashing_MurmurHash3$().jO(this);
});
$p.n = (function() {
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
  return (!(!((obj && obj.$classData) && obj.$classData.n.N)));
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.N)));
}
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.gw = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.gw = null;
}
$p = $c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $p;
$p.aa = (function(idx) {
  return this.gw.aa(idx);
});
$p.C = (function() {
  return this.gw.C();
});
$p.ab = (function() {
  return this.gw.ab();
});
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.gw = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$p.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
}
$h_sc_IndexedSeqView$Id.prototype = $p;
$p.bB = (function(len) {
  var x = this.C();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.ah = (function() {
  return this.C();
});
$p.ac = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this);
});
$p.bF = (function() {
  return "IndexedSeqView";
});
var $d_sc_IndexedSeqView$Id = new $TypeData().i($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  cd: 1,
  cm: 1,
  c8: 1,
  c9: 1,
  w: 1,
  d: 1,
  e: 1,
  q: 1,
  p: 1,
  o: 1,
  a: 1,
  cq: 1,
  s: 1,
  cl: 1,
  x: 1,
  cc: 1
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
  return ($is_sci_IndexedSeq(that) ? ($thiz.C() === that.C()) : true);
}
function $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z($thiz, o) {
  if ($is_sci_IndexedSeq(o)) {
    if (($thiz === o)) {
      return true;
    } else {
      var length = $thiz.C();
      var equal = (length === o.C());
      if (equal) {
        var index = 0;
        var a = $thiz.ik();
        var b = o.ik();
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
          equal = $m_sr_BoxesRunTime$().c($thiz.aa(index), o.aa(index));
          index = ((1 + index) | 0);
        }
        if (((index < length) && equal)) {
          var thisIt = $thiz.ac().h8(index);
          var thatIt = o.ac().h8(index);
          while ((equal && thisIt.N())) {
            equal = $m_sr_BoxesRunTime$().c(thisIt.E(), thatIt.E());
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
  this.hF = null;
  this.hF = array;
}
$p = $c_sjsr_WrappedVarArgs.prototype = new $h_O();
$p.constructor = $c_sjsr_WrappedVarArgs;
/** @constructor */
function $h_sjsr_WrappedVarArgs() {
}
$h_sjsr_WrappedVarArgs.prototype = $p;
$p.il = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.hu = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.ik = (function() {
  return $m_sci_IndexedSeqDefaults$().kh;
});
$p.ac = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.bB = (function(len) {
  var x = this.C();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.ah = (function() {
  return this.C();
});
$p.r = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.s = (function() {
  return $m_s_util_hashing_MurmurHash3$().jO(this);
});
$p.n = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.ab = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.fD = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.jH = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.C = (function() {
  return (this.hF.length | 0);
});
$p.aa = (function(idx) {
  return this.hF[idx];
});
$p.fC = (function() {
  return "WrappedVarArgs";
});
$p.h = (function(v1) {
  return this.aa((v1 | 0));
});
function $isArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aQ)));
}
var $d_sjsr_WrappedVarArgs = new $TypeData().i($c_sjsr_WrappedVarArgs, "scala.scalajs.runtime.WrappedVarArgs", ({
  aQ: 1,
  E: 1,
  d: 1,
  e: 1,
  q: 1,
  p: 1,
  o: 1,
  G: 1,
  g: 1,
  v: 1,
  s: 1,
  b: 1,
  l: 1,
  I: 1,
  H: 1,
  x: 1,
  n: 1,
  P: 1,
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
  return ((($thiz.fl + $thiz.ap) | 0) !== $thiz.g2);
}
function $ct_sci_Range__I__I__I__($thiz, start, end, step) {
  $thiz.ai = start;
  $thiz.g2 = end;
  $thiz.ap = step;
  $thiz.av = ((step >= 0) ? (start >= end) : (start <= end));
  if ((step === 0)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "step cannot be 0.");
  }
  var stepSign = (step >> 31);
  var gap = (((((end - start) | 0) ^ stepSign) - stepSign) | 0);
  var absStep = (((step ^ stepSign) - stepSign) | 0);
  var div = (((gap >>> 0) / ($checkIntDivisor(absStep) >>> 0)) | 0);
  $thiz.bs = ((Math.imul(absStep, div) !== gap) ? ((1 + div) | 0) : div);
  if ((((-3) & ((1 + step) | 0)) === 0)) {
    var $x_1 = ((end - step) | 0);
  } else {
    var n = (($thiz.bs - 1) | 0);
    var $x_1 = (($thiz.ai + Math.imul($thiz.ap, n)) | 0);
  }
  $thiz.fl = $x_1;
  return $thiz;
}
/** @constructor */
function $c_sci_Range() {
  this.ai = 0;
  this.g2 = 0;
  this.ap = 0;
  this.av = false;
  this.bs = 0;
  this.fl = 0;
}
$p = $c_sci_Range.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_Range;
/** @constructor */
function $h_sci_Range() {
}
$h_sci_Range.prototype = $p;
$p.il = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.bF = (function() {
  return "IndexedSeq";
});
$p.bB = (function(len) {
  var x = this.C();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.ah = (function() {
  return this.C();
});
$p.ac = (function() {
  return new $c_sci_RangeIterator(this.ai, this.ap, this.fl, this.av);
});
$p.ab = (function() {
  return this.av;
});
$p.C = (function() {
  return (this.av ? 0 : ((this.bs > 0) ? this.bs : $m_sci_Range$().n0(this.ai, this.g2, this.ap, false)));
});
$p.mz = (function() {
  if (this.av) {
    var $x_1 = $m_sci_Range$().pt("last");
    throw (($x_1 instanceof $c_sjs_js_JavaScriptException) ? $x_1.aE : $x_1);
  } else {
    return this.fl;
  }
});
$p.pu = (function() {
  if (((this.bs <= 0) && (!this.av))) {
    $m_sci_Range$().n0(this.ai, this.g2, this.ap, false);
  }
});
$p.fD = (function(f) {
  if ((!this.av)) {
    var i = this.ai;
    while (true) {
      f.h(i);
      if ((i === this.fl)) {
        return (void 0);
      }
      i = ((i + this.ap) | 0);
    }
  }
});
$p.hu = (function(that) {
  if ((that instanceof $c_sci_Range)) {
    var x1$2 = this.C();
    switch (x1$2) {
      case 0: {
        return that.av;
        break;
      }
      case 1: {
        return ((that.C() === 1) && (this.ai === that.ai));
        break;
      }
      default: {
        return ((that.C() === x1$2) && ((this.ai === that.ai) && (this.ap === that.ap)));
      }
    }
  } else {
    return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, that);
  }
});
$p.ik = (function() {
  return 2147483647;
});
$p.r = (function(other) {
  if ((other instanceof $c_sci_Range)) {
    if (this.av) {
      return other.av;
    } else if (((!other.av) && (this.ai === other.ai))) {
      var l0 = this.mz();
      return ((l0 === other.mz()) && ((this.ai === l0) || (this.ap === other.ap)));
    } else {
      return false;
    }
  } else {
    return $f_sc_Seq__equals__O__Z(this, other);
  }
});
$p.s = (function() {
  if ((this.C() >= 2)) {
    var this$1 = $m_s_util_hashing_MurmurHash3$();
    return this$1.mY(this.ai, this.ap, this.fl, this$1.fp);
  } else {
    return $m_s_util_hashing_MurmurHash3$().jO(this);
  }
});
$p.n = (function() {
  var stepped = ((this.ap === 1) ? "" : (" by " + this.ap));
  return ((((((this.av ? "empty " : ($p_sci_Range__isInexact$1__Z(this) ? "inexact " : "")) + "Range ") + this.ai) + " until ") + this.g2) + stepped);
});
$p.fC = (function() {
  return "Range";
});
$p.me = (function(idx) {
  if ((((idx < 0) || (idx >= this.bs)) || this.av)) {
    this.pu();
    var max = (this.av ? (-1) : ((this.bs - 1) | 0));
    throw new $c_jl_IndexOutOfBoundsException((((idx + " is out of bounds (min 0, max ") + max) + ")"));
  } else {
    return ((this.ai + Math.imul(this.ap, idx)) | 0);
  }
});
$p.h = (function(v1) {
  return this.me((v1 | 0));
});
$p.aa = (function(i) {
  return this.me(i);
});
function $isArrayOf_sci_Range(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aF)));
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
$p.bB = (function(len) {
  var x = this.be.b.length;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.ah = (function() {
  return this.be.b.length;
});
$p.bF = (function() {
  return "IndexedSeq";
});
$p.il = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.hu = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.fC = (function() {
  return "ArraySeq";
});
$p.ik = (function() {
  return 2147483647;
});
/** @constructor */
function $c_sci_Range$Exclusive(start, end, step) {
  this.ai = 0;
  this.g2 = 0;
  this.ap = 0;
  this.av = false;
  this.bs = 0;
  this.fl = 0;
  $ct_sci_Range__I__I__I__(this, start, end, step);
}
$p = $c_sci_Range$Exclusive.prototype = new $h_sci_Range();
$p.constructor = $c_sci_Range$Exclusive;
/** @constructor */
function $h_sci_Range$Exclusive() {
}
$h_sci_Range$Exclusive.prototype = $p;
var $d_sci_Range$Exclusive = new $TypeData().i($c_sci_Range$Exclusive, "scala.collection.immutable.Range$Exclusive", ({
  cA: 1,
  aF: 1,
  O: 1,
  y: 1,
  w: 1,
  d: 1,
  e: 1,
  q: 1,
  p: 1,
  o: 1,
  g: 1,
  v: 1,
  s: 1,
  b: 1,
  l: 1,
  G: 1,
  I: 1,
  H: 1,
  E: 1,
  x: 1,
  n: 1,
  P: 1,
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
$p.bB = (function(len) {
  var x = this.aQ.b.length;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.ah = (function() {
  return this.aQ.b.length;
});
$p.bF = (function() {
  return "IndexedSeq";
});
$p.fC = (function() {
  return "ArraySeq";
});
$p.r = (function(other) {
  if ((other instanceof $c_scm_ArraySeq)) {
    if ((this.aQ.b.length !== other.aQ.b.length)) {
      return false;
    }
  }
  return $f_sc_Seq__equals__O__Z(this, other);
});
function $isArrayOf_scm_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aG)));
}
/** @constructor */
function $c_sci_ArraySeq$ofRef(unsafeArray) {
  this.be = null;
  this.be = unsafeArray;
}
$p = $c_sci_ArraySeq$ofRef.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofRef;
/** @constructor */
function $h_sci_ArraySeq$ofRef() {
}
$h_sci_ArraySeq$ofRef.prototype = $p;
$p.C = (function() {
  return this.be.b.length;
});
$p.aa = (function(i) {
  return this.be.b[i];
});
$p.s = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.mf(this.be, this$1.fp);
});
$p.r = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofRef) ? $m_s_Array$().mp(this.be, that.be) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.ac = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.be);
});
$p.h = (function(v1) {
  return this.aa((v1 | 0));
});
function $isArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aD)));
}
var $d_sci_ArraySeq$ofRef = new $TypeData().i($c_sci_ArraySeq$ofRef, "scala.collection.immutable.ArraySeq$ofRef", ({
  aD: 1,
  cs: 1,
  O: 1,
  y: 1,
  w: 1,
  d: 1,
  e: 1,
  q: 1,
  p: 1,
  o: 1,
  g: 1,
  v: 1,
  s: 1,
  b: 1,
  l: 1,
  G: 1,
  I: 1,
  H: 1,
  x: 1,
  n: 1,
  P: 1,
  E: 1,
  z: 1,
  A: 1,
  J: 1,
  cb: 1,
  a: 1
}));
function $p_sci_List__loop$2__I__I__sci_List__I($thiz, len$1, i, xs) {
  var xs$tailLocal1 = xs;
  var i$tailLocal1 = i;
  while (true) {
    return ((i$tailLocal1 === len$1) ? (xs$tailLocal1.ab() ? 0 : 1) : (xs$tailLocal1.ab() ? (-1) : xs$tailLocal1.hy()));
  }
}
function $p_sci_List__listEq$1__sci_List__sci_List__Z($thiz, a, b) {
  var b$tailLocal1 = b;
  var a$tailLocal1 = a;
  while (true) {
    if ((a$tailLocal1 === b$tailLocal1)) {
      return true;
    } else {
      var aEmpty = a$tailLocal1.ab();
      var bEmpty = b$tailLocal1.ab();
      if ((!(aEmpty || bEmpty))) {
        a$tailLocal1.io();
      }
      if (false) {
        a$tailLocal1.hy();
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
$p.aa = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.hu = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.bF = (function() {
  return "LinearSeq";
});
$p.ab = (function() {
  return (this === $m_sci_Nil$());
});
$p.fD = (function(f) {
  var these = this;
  while ((!these.ab())) {
    f.h(these.io());
    these.hy();
  }
});
$p.C = (function() {
  var these = this;
  var len = 0;
  while ((!these.ab())) {
    len = ((1 + len) | 0);
    these.hy();
  }
  return len;
});
$p.bB = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__I__sci_List__I(this, len, 0, this));
});
$p.fC = (function() {
  return "List";
});
$p.r = (function(o) {
  return ((o instanceof $c_sci_List) ? $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, o) : $f_sc_Seq__equals__O__Z(this, o));
});
$p.nW = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
$p.h = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aE)));
}
/** @constructor */
function $c_scm_ArraySeq$ofRef(array) {
  this.aQ = null;
  this.aQ = array;
}
$p = $c_scm_ArraySeq$ofRef.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofRef;
/** @constructor */
function $h_scm_ArraySeq$ofRef() {
}
$h_scm_ArraySeq$ofRef.prototype = $p;
$p.C = (function() {
  return this.aQ.b.length;
});
$p.aa = (function(index) {
  return this.aQ.b[index];
});
$p.s = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.mf(this.aQ, this$1.fp);
});
$p.r = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofRef) ? $m_s_Array$().mp(this.aQ, that.aQ) : $c_scm_ArraySeq.prototype.r.call(this, that));
});
$p.ac = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.aQ);
});
$p.h = (function(v1) {
  return this.aa((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aH)));
}
var $d_scm_ArraySeq$ofRef = new $TypeData().i($c_scm_ArraySeq$ofRef, "scala.collection.mutable.ArraySeq$ofRef", ({
  aH: 1,
  aG: 1,
  Q: 1,
  y: 1,
  w: 1,
  d: 1,
  e: 1,
  q: 1,
  p: 1,
  o: 1,
  g: 1,
  v: 1,
  s: 1,
  b: 1,
  l: 1,
  U: 1,
  B: 1,
  R: 1,
  W: 1,
  V: 1,
  x: 1,
  n: 1,
  T: 1,
  S: 1,
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
$p.D = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.u = (function() {
  return 0;
});
$p.A = (function() {
  return "Nil";
});
$p.m = (function(n) {
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
$p.io = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list");
});
$p.hy = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$p.ah = (function() {
  return 0;
});
$p.ac = (function() {
  return $m_sc_Iterator$().b0;
});
$p.jK = (function() {
  this.io();
});
$p.jS = (function() {
  this.hy();
});
var $d_sci_Nil$ = new $TypeData().i($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  cy: 1,
  aE: 1,
  O: 1,
  y: 1,
  w: 1,
  d: 1,
  e: 1,
  q: 1,
  p: 1,
  o: 1,
  g: 1,
  v: 1,
  s: 1,
  b: 1,
  l: 1,
  G: 1,
  I: 1,
  H: 1,
  cj: 1,
  N: 1,
  cw: 1,
  cv: 1,
  z: 1,
  A: 1,
  cn: 1,
  J: 1,
  a: 1,
  cr: 1,
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
  $thiz.b1 = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, new $c_jl_StringBuilder());
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.b1 = null;
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
$p.bB = (function(len) {
  var x = this.b1.C();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.bF = (function() {
  return "IndexedSeq";
});
$p.C = (function() {
  return this.b1.C();
});
$p.ah = (function() {
  return this.b1.C();
});
$p.n = (function() {
  return this.b1.ao;
});
$p.ab = (function() {
  return (this.b1.C() === 0);
});
$p.aa = (function(i) {
  return $bC(this.b1.mi(i));
});
$p.h = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.b1.mi(i));
});
var $d_scm_StringBuilder = new $TypeData().i($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
  cI: 1,
  Q: 1,
  y: 1,
  w: 1,
  d: 1,
  e: 1,
  q: 1,
  p: 1,
  o: 1,
  g: 1,
  v: 1,
  s: 1,
  b: 1,
  l: 1,
  U: 1,
  B: 1,
  R: 1,
  W: 1,
  V: 1,
  aJ: 1,
  aK: 1,
  aI: 1,
  cG: 1,
  x: 1,
  n: 1,
  T: 1,
  S: 1,
  L: 1,
  a: 1
}));
/** @constructor */
function $c_sjs_js_WrappedArray(array) {
  this.g4 = null;
  this.g4 = array;
}
$p = $c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
}
$h_sjs_js_WrappedArray.prototype = $p;
$p.bF = (function() {
  return "IndexedSeq";
});
$p.ac = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.bB = (function(len) {
  var x = (this.g4.length | 0);
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.aa = (function(index) {
  return this.g4[index];
});
$p.C = (function() {
  return (this.g4.length | 0);
});
$p.ah = (function() {
  return (this.g4.length | 0);
});
$p.fC = (function() {
  return "WrappedArray";
});
$p.h = (function(v1) {
  var index = (v1 | 0);
  return this.g4[index];
});
var $d_sjs_js_WrappedArray = new $TypeData().i($c_sjs_js_WrappedArray, "scala.scalajs.js.WrappedArray", ({
  dj: 1,
  cC: 1,
  Q: 1,
  y: 1,
  w: 1,
  d: 1,
  e: 1,
  q: 1,
  p: 1,
  o: 1,
  g: 1,
  v: 1,
  s: 1,
  b: 1,
  l: 1,
  U: 1,
  B: 1,
  R: 1,
  W: 1,
  V: 1,
  aJ: 1,
  aK: 1,
  cH: 1,
  cE: 1,
  A: 1,
  z: 1,
  S: 1,
  x: 1,
  n: 1,
  T: 1,
  cF: 1,
  aI: 1,
  a: 1
}));
$s_Lsketches_rooms_canvases_roomsCanvases__main__AT__V(new ($d_T.r().C)([]));
