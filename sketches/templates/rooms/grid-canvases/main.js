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
  return (arg0.$classData.Z ? arg0.aZ() : $objectClone(arg0));
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
        return null.qH();
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
        return instance.t();
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__hashCode__I(instance.l, instance.h);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I(instance.c);
      } else {
        return $c_O.prototype.t.call(instance);
      }
    }
  }
}
function $dp_indexOf__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__indexOf__I__I(instance, x0);
  } else {
    return instance.qI(x0);
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
$p.t = (function() {
  return $systemIdentityHashCode(this);
});
$p.r = (function(that) {
  return (this === that);
});
$p.o = (function() {
  var i = this.t();
  return (($objectClassName(this) + "@") + (i >>> 0.0).toString(16));
});
$p.toString = (function() {
  return this.o();
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
$p.aM = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.b, srcPos, dest.b, destPos, length);
});
$p.aZ = (function() {
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
$p.aM = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.b, srcPos, dest.b, destPos, length);
});
$p.aZ = (function() {
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
$p.aM = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aZ = (function() {
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
$p.aM = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aZ = (function() {
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
$p.aM = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aZ = (function() {
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
$p.aM = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aZ = (function() {
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
$p.aM = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray((srcPos << 1), (((srcPos + length) | 0) << 1)), (destPos << 1));
});
$p.aZ = (function() {
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
$p.aM = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aZ = (function() {
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
$p.aM = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aZ = (function() {
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
  $p.aM = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.b, srcPos, dest.b, destPos, length);
  });
  $p.aZ = (function() {
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
  this.kt = null;
  this.nE = null;
  $n_jl_System$Streams$ = this;
  this.kt = new $c_jl_JSConsoleBasedPrintStream(false);
  this.nE = new $c_jl_JSConsoleBasedPrintStream(true);
}
$p = $c_jl_System$Streams$.prototype = new $h_O();
$p.constructor = $c_jl_System$Streams$;
/** @constructor */
function $h_jl_System$Streams$() {
}
$h_jl_System$Streams$.prototype = $p;
var $d_jl_System$Streams$ = new $TypeData().i($c_jl_System$Streams$, "java.lang.System$Streams$", ({
  br: 1
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
  this.iX = null;
  this.ku = null;
  $n_jl_System$SystemProperties$ = this;
  this.iX = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
  this.ku = null;
}
$p = $c_jl_System$SystemProperties$.prototype = new $h_O();
$p.constructor = $c_jl_System$SystemProperties$;
/** @constructor */
function $h_jl_System$SystemProperties$() {
}
$h_jl_System$SystemProperties$.prototype = $p;
$p.n5 = (function(key, default$1) {
  if ((this.iX !== null)) {
    var dict = this.iX;
    return ((!(!$m_jl_Utils$Cache$().kw.call(dict, key))) ? dict[key] : default$1);
  } else {
    return this.ku.n5(key, default$1);
  }
});
var $d_jl_System$SystemProperties$ = new $TypeData().i($c_jl_System$SystemProperties$, "java.lang.System$SystemProperties$", ({
  bs: 1
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
  this.kw = null;
  $n_jl_Utils$Cache$ = this;
  this.kw = Object.prototype.hasOwnProperty;
}
$p = $c_jl_Utils$Cache$.prototype = new $h_O();
$p.constructor = $c_jl_Utils$Cache$;
/** @constructor */
function $h_jl_Utils$Cache$() {
}
$h_jl_Utils$Cache$.prototype = $p;
var $d_jl_Utils$Cache$ = new $TypeData().i($c_jl_Utils$Cache$, "java.lang.Utils$Cache$", ({
  bu: 1
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
  bv: 1
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
$p.hB = (function(array) {
  return ((array instanceof $ac_O) ? array.b.length : ((array instanceof $ac_Z) ? array.b.length : ((array instanceof $ac_C) ? array.b.length : ((array instanceof $ac_B) ? array.b.length : ((array instanceof $ac_S) ? array.b.length : ((array instanceof $ac_I) ? array.b.length : ((array instanceof $ac_J) ? ((array.b.length >>> 1) | 0) : ((array instanceof $ac_F) ? array.b.length : ((array instanceof $ac_D) ? array.b.length : $p_jl_reflect_Array$__mismatch__O__E(this, array))))))))));
});
var $d_jl_reflect_Array$ = new $TypeData().i($c_jl_reflect_Array$, "java.lang.reflect.Array$", ({
  bw: 1
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
$p.oc = (function(a, key) {
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
  bx: 1
}));
var $n_ju_Arrays$;
function $m_ju_Arrays$() {
  if ((!$n_ju_Arrays$)) {
    $n_ju_Arrays$ = new $c_ju_Arrays$();
  }
  return $n_ju_Arrays$;
}
function $s_RTLong__remainderUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().q0(alo, ahi, blo, bhi);
}
function $s_RTLong__remainder__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().pZ(alo, ahi, blo, bhi);
}
function $s_RTLong__divideUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().ov(alo, ahi, blo, bhi);
}
function $s_RTLong__divide__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().ou(alo, ahi, blo, bhi);
}
function $s_RTLong__fromDoubleBits__D__O__J(value, fpBitsDataView) {
  fpBitsDataView.setFloat64(0, value, true);
  var lo = (fpBitsDataView.getInt32(0, true) | 0);
  var hi = (fpBitsDataView.getInt32(4, true) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__fromDouble__D__J(value) {
  return $m_RTLong$().n4(value);
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
  return $m_RTLong$().ny(lo, hi);
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
$p.ny = (function(lo, hi) {
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
$p.n4 = (function(value) {
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
$p.ou = (function(alo, ahi, blo, bhi) {
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
    var $x_1 = this.iR(rlo, rhi, rlo$1, rhi$1, true);
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
$p.ov = (function(alo, ahi, blo, bhi) {
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
    return this.iR(alo, ahi, blo, bhi, true);
  }
});
$p.pZ = (function(alo, ahi, blo, bhi) {
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
    var $x_1 = this.iR(rlo, rhi, rlo$1, rhi$1, false);
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
$p.q0 = (function(alo, ahi, blo, bhi) {
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
    return this.iR(alo, ahi, blo, bhi, false);
  }
});
$p.iR = (function(alo, ahi, blo, bhi, askQuotient) {
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
  bz: 1
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
$p.n0 = (function(xs, ys) {
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
  bA: 1
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
  var it = $thiz.ad();
  while (it.U()) {
    f.h(it.N());
  }
}
function $f_sc_IterableOnceOps__copyToArray__O__I__I__I($thiz, dest, start, n) {
  var it = $thiz.ad();
  var i = start;
  matchResult18: {
    var srclen;
    var x31 = $thiz.aj();
    if ((x31 === (-1))) {
      var srclen = $m_jl_reflect_Array$().hB(dest);
      break matchResult18;
    }
    var srclen = x31;
  }
  var destLen = $m_jl_reflect_Array$().hB(dest);
  var limit = ((n < srclen) ? n : srclen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var end = ((start + ((total < 0) ? 0 : total)) | 0);
  while (((i < end) && it.U())) {
    $m_sr_ScalaRunTime$().o6(dest, i, it.N());
    i = ((1 + i) | 0);
  }
  return ((i - start) | 0);
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  return (($thiz.aj() === 0) ? (("" + start) + end) : $thiz.k6($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end).b5.ao);
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = b.b5;
  if ((start.length !== 0)) {
    jsb.ao = (("" + jsb.ao) + start);
  }
  var it = $thiz.ad();
  if (it.U()) {
    var obj = it.N();
    jsb.ao = (("" + jsb.ao) + obj);
    while (it.U()) {
      if ((sep.length !== 0)) {
        jsb.ao = (("" + jsb.ao) + sep);
      }
      var obj$1 = it.N();
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
  this.kD = null;
  this.gW = null;
  this.kD = head;
  this.gW = tail;
}
$p = $c_sc_Iterator$ConcatIteratorCell.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$ConcatIteratorCell;
/** @constructor */
function $h_sc_Iterator$ConcatIteratorCell() {
}
$h_sc_Iterator$ConcatIteratorCell.prototype = $p;
$p.oS = (function() {
  return this.kD.hy().ad();
});
var $d_sc_Iterator$ConcatIteratorCell = new $TypeData().i($c_sc_Iterator$ConcatIteratorCell, "scala.collection.Iterator$ConcatIteratorCell", ({
  ci: 1
}));
/** @constructor */
function $c_sc_StringOps$() {
  this.kE = null;
  $n_sc_StringOps$ = this;
  this.kE = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$2) => this.kE));
}
$p = $c_sc_StringOps$.prototype = new $h_O();
$p.constructor = $c_sc_StringOps$;
/** @constructor */
function $h_sc_StringOps$() {
}
$h_sc_StringOps$.prototype = $p;
var $d_sc_StringOps$ = new $TypeData().i($c_sc_StringOps$, "scala.collection.StringOps$", ({
  cq: 1
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
  this.kH = 0;
  $n_sci_IndexedSeqDefaults$ = this;
  try {
    $m_sc_StringOps$();
    var $x_1 = $m_jl_Integer$().p0($m_jl_System$SystemProperties$().n5("scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength", "64"), 10, 214748364);
  } catch (e) {
    if (false) {
      var $x_1 = 64;
    } else {
      var $x_1;
      throw e;
    }
  }
  this.kH = $x_1;
}
$p = $c_sci_IndexedSeqDefaults$.prototype = new $h_O();
$p.constructor = $c_sci_IndexedSeqDefaults$;
/** @constructor */
function $h_sci_IndexedSeqDefaults$() {
}
$h_sci_IndexedSeqDefaults$.prototype = $p;
var $d_sci_IndexedSeqDefaults$ = new $TypeData().i($c_sci_IndexedSeqDefaults$, "scala.collection.immutable.IndexedSeqDefaults$", ({
  cv: 1
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
  return ((x === y) || ($is_jl_Number(x) ? this.oD(x, y) : ((x instanceof $Char) ? this.oB(x, y) : ((x === null) ? (y === null) : $dp_equals__O__Z(x, y)))));
});
$p.oD = (function(xn, y) {
  if ($is_jl_Number(y)) {
    return this.oC(xn, y);
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
$p.oC = (function(xn, yn) {
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
$p.oB = (function(xc, y) {
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
  d6: 1
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
$p.o7 = (function() {
  throw new $c_jl_AssertionError("assertion failed");
});
$p.iQ = (function() {
  throw $ct_jl_NullPointerException__T__(new $c_jl_NullPointerException(), "tried to cast away nullability, but value is null");
});
var $d_sr_Scala3RunTime$ = new $TypeData().i($c_sr_Scala3RunTime$, "scala.runtime.Scala3RunTime$", ({
  d9: 1
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
$p.gM = (function(xs, idx) {
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
$p.o6 = (function(xs, idx, value) {
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
$p.hx = (function(x) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(x.C(), (x.B() + "("), ",", ")");
});
$p.aw = (function(xs) {
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
  da: 1
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
$p.ah = (function(hash, length) {
  return this.o8((hash ^ length));
});
$p.o8 = (function(h0) {
  var h = h0;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.p4 = (function(lv_$_lo, lv_$_hi) {
  return ((lv_$_hi === (lv_$_lo >> 31)) ? lv_$_lo : (lv_$_lo ^ lv_$_hi));
});
$p.aL = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var $x_1 = $m_RTLong$().n4(dv);
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
$p.L = (function(x) {
  if ((x === null)) {
    return 0;
  } else if (((typeof x) === "number")) {
    return this.aL((+x));
  } else if ((x instanceof $Long)) {
    var $x_1 = $uJ(x);
    return this.p4($x_1.l, $x_1.h);
  } else {
    return $dp_hashCode__I(x);
  }
});
$p.oY = (function(n) {
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
var $d_sr_Statics$ = new $TypeData().i($c_sr_Statics$, "scala.runtime.Statics$", ({
  dc: 1
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
    return new $c_T2(x, self.fY);
  }
  if ((self instanceof $c_T2)) {
    return new $c_T3(x, self.a1, self.ax);
  }
  if ((self instanceof $c_T3)) {
    return new $c_T4(x, self.bt, self.bf, self.bg);
  }
  if ((self instanceof $c_T4)) {
    return new $c_T5(x, self.eZ, self.bu, self.bv, self.bw);
  }
  if ((self instanceof $c_T5)) {
    return new $c_T6(x, self.gc, self.f0, self.f1, self.f2, self.f3);
  }
  if ((self instanceof $c_T6)) {
    return new $c_T7(x, self.gd, self.f4, self.f5, self.f6, self.f7, self.f8);
  }
  if ((self instanceof $c_T7)) {
    return new $c_T8(x, self.ge, self.f9, self.fa, self.fb, self.fc, self.fd, self.fe);
  }
  if ((self instanceof $c_T8)) {
    return new $c_T9(x, self.gf, self.ff, self.fg, self.fh, self.fi, self.fj, self.fk, self.fl);
  }
  if ((self instanceof $c_T9)) {
    return new $c_T10(x, self.gg, self.fm, self.fn, self.fo, self.fp, self.fq, self.fr, self.fs, self.ft);
  }
  if ((self instanceof $c_T10)) {
    return new $c_T11(x, self.fZ, self.bQ, self.bR, self.bS, self.bT, self.bU, self.bV, self.bW, self.bX, self.bP);
  }
  if ((self instanceof $c_T11)) {
    return new $c_T12(x, self.g0, self.c0, self.c1, self.c2, self.c3, self.c4, self.c5, self.c6, self.c7, self.bY, self.bZ);
  }
  if ((self instanceof $c_T12)) {
    return new $c_T13(x, self.g1, self.cb, self.cc, self.cd, self.ce, self.cf, self.cg, self.ch, self.ci, self.c8, self.c9, self.ca);
  }
  if ((self instanceof $c_T13)) {
    return new $c_T14(x, self.g2, self.cn, self.co, self.cp, self.cq, self.cr, self.cs, self.ct, self.cu, self.cj, self.ck, self.cl, self.cm);
  }
  if ((self instanceof $c_T14)) {
    return new $c_T15(x, self.g3, self.cA, self.cB, self.cC, self.cD, self.cE, self.cF, self.cG, self.cH, self.cv, self.cw, self.cx, self.cy, self.cz);
  }
  if ((self instanceof $c_T15)) {
    return new $c_T16(x, self.g4, self.cO, self.cP, self.cQ, self.cR, self.cS, self.cT, self.cU, self.cV, self.cI, self.cJ, self.cK, self.cL, self.cM, self.cN);
  }
  if ((self instanceof $c_T16)) {
    return new $c_T17(x, self.g5, self.d3, self.d4, self.d5, self.d6, self.d7, self.d8, self.d9, self.da, self.cW, self.cX, self.cY, self.cZ, self.d0, self.d1, self.d2);
  }
  if ((self instanceof $c_T17)) {
    return new $c_T18(x, self.g6, self.dj, self.dk, self.dl, self.dm, self.dn, self.dp, self.dq, self.dr, self.db, self.dc, self.dd, self.de, self.df, self.dg, self.dh, self.di);
  }
  if ((self instanceof $c_T18)) {
    return new $c_T19(x, self.g7, self.dB, self.dC, self.dD, self.dE, self.dF, self.dG, self.dH, self.dI, self.ds, self.dt, self.du, self.dv, self.dw, self.dx, self.dy, self.dz, self.dA);
  }
  if ((self instanceof $c_T19)) {
    return new $c_T20(x, self.g8, self.dT, self.dU, self.dV, self.dW, self.dX, self.dY, self.dZ, self.e0, self.dJ, self.dK, self.dL, self.dM, self.dN, self.dO, self.dP, self.dQ, self.dR, self.dS);
  }
  if ((self instanceof $c_T20)) {
    return new $c_T21(x, self.g9, self.eb, self.ed, self.ee, self.ef, self.eg, self.eh, self.ei, self.ej, self.e1, self.e2, self.e3, self.e4, self.e5, self.e6, self.e7, self.e8, self.e9, self.ea, self.ec);
  }
  if ((self instanceof $c_T21)) {
    return new $c_T22(x, self.ga, self.eu, self.ex, self.ey, self.ez, self.eA, self.eB, self.eC, self.eD, self.ek, self.el, self.em, self.en, self.eo, self.ep, self.eq, self.er, self.es, self.et, self.ev, self.ew);
  }
  if ((self instanceof $c_T22)) {
    return new $c_sr_TupleXXL(new $ac_O([x, self.gb, self.eO, self.eS, self.eT, self.eU, self.eV, self.eW, self.eX, self.eY, self.eE, self.eF, self.eG, self.eH, self.eI, self.eJ, self.eK, self.eL, self.eM, self.eN, self.eP, self.eQ, self.eR]));
  }
  throw new $c_s_MatchError(self);
}
function $p_sr_Tuples$__xxlCons__O__sr_TupleXXL__sr_TupleXXL($thiz, x, xxl) {
  var arr = new $ac_O(((1 + xxl.v()) | 0));
  arr.b[0] = x;
  var src = xxl.af;
  var length = xxl.v();
  src.aM(0, arr, 1, length);
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
      var $x_1 = new $c_T1(self.ax);
      break matchResult34$1;
    }
    if ((self instanceof $c_T3)) {
      var $x_1 = new $c_T2(self.bf, self.bg);
      break matchResult34$1;
    }
    if ((self instanceof $c_T4)) {
      var $x_1 = new $c_T3(self.bu, self.bv, self.bw);
      break matchResult34$1;
    }
    if ((self instanceof $c_T5)) {
      var $x_1 = new $c_T4(self.f0, self.f1, self.f2, self.f3);
      break matchResult34$1;
    }
    if ((self instanceof $c_T6)) {
      var $x_1 = new $c_T5(self.f4, self.f5, self.f6, self.f7, self.f8);
      break matchResult34$1;
    }
    if ((self instanceof $c_T7)) {
      var $x_1 = new $c_T6(self.f9, self.fa, self.fb, self.fc, self.fd, self.fe);
      break matchResult34$1;
    }
    if ((self instanceof $c_T8)) {
      var $x_1 = new $c_T7(self.ff, self.fg, self.fh, self.fi, self.fj, self.fk, self.fl);
      break matchResult34$1;
    }
    if ((self instanceof $c_T9)) {
      var $x_1 = new $c_T8(self.fm, self.fn, self.fo, self.fp, self.fq, self.fr, self.fs, self.ft);
      break matchResult34$1;
    }
    if ((self instanceof $c_T10)) {
      var $x_1 = new $c_T9(self.bQ, self.bR, self.bS, self.bT, self.bU, self.bV, self.bW, self.bX, self.bP);
      break matchResult34$1;
    }
    if ((self instanceof $c_T11)) {
      var $x_1 = new $c_T10(self.c0, self.c1, self.c2, self.c3, self.c4, self.c5, self.c6, self.c7, self.bY, self.bZ);
      break matchResult34$1;
    }
    if ((self instanceof $c_T12)) {
      var $x_1 = new $c_T11(self.cb, self.cc, self.cd, self.ce, self.cf, self.cg, self.ch, self.ci, self.c8, self.c9, self.ca);
      break matchResult34$1;
    }
    if ((self instanceof $c_T13)) {
      var $x_1 = new $c_T12(self.cn, self.co, self.cp, self.cq, self.cr, self.cs, self.ct, self.cu, self.cj, self.ck, self.cl, self.cm);
      break matchResult34$1;
    }
    if ((self instanceof $c_T14)) {
      var $x_1 = new $c_T13(self.cA, self.cB, self.cC, self.cD, self.cE, self.cF, self.cG, self.cH, self.cv, self.cw, self.cx, self.cy, self.cz);
      break matchResult34$1;
    }
    if ((self instanceof $c_T15)) {
      var $x_1 = new $c_T14(self.cO, self.cP, self.cQ, self.cR, self.cS, self.cT, self.cU, self.cV, self.cI, self.cJ, self.cK, self.cL, self.cM, self.cN);
      break matchResult34$1;
    }
    if ((self instanceof $c_T16)) {
      var $x_1 = new $c_T15(self.d3, self.d4, self.d5, self.d6, self.d7, self.d8, self.d9, self.da, self.cW, self.cX, self.cY, self.cZ, self.d0, self.d1, self.d2);
      break matchResult34$1;
    }
    if ((self instanceof $c_T17)) {
      var $x_1 = new $c_T16(self.dj, self.dk, self.dl, self.dm, self.dn, self.dp, self.dq, self.dr, self.db, self.dc, self.dd, self.de, self.df, self.dg, self.dh, self.di);
      break matchResult34$1;
    }
    if ((self instanceof $c_T18)) {
      var $x_1 = new $c_T17(self.dB, self.dC, self.dD, self.dE, self.dF, self.dG, self.dH, self.dI, self.ds, self.dt, self.du, self.dv, self.dw, self.dx, self.dy, self.dz, self.dA);
      break matchResult34$1;
    }
    if ((self instanceof $c_T19)) {
      var $x_1 = new $c_T18(self.dT, self.dU, self.dV, self.dW, self.dX, self.dY, self.dZ, self.e0, self.dJ, self.dK, self.dL, self.dM, self.dN, self.dO, self.dP, self.dQ, self.dR, self.dS);
      break matchResult34$1;
    }
    if ((self instanceof $c_T20)) {
      var $x_1 = new $c_T19(self.eb, self.ed, self.ee, self.ef, self.eg, self.eh, self.ei, self.ej, self.e1, self.e2, self.e3, self.e4, self.e5, self.e6, self.e7, self.e8, self.e9, self.ea, self.ec);
      break matchResult34$1;
    }
    if ((self instanceof $c_T21)) {
      var $x_1 = new $c_T20(self.eu, self.ex, self.ey, self.ez, self.eA, self.eB, self.eC, self.eD, self.ek, self.el, self.em, self.en, self.eo, self.ep, self.eq, self.er, self.es, self.et, self.ev, self.ew);
      break matchResult34$1;
    }
    if ((self instanceof $c_T22)) {
      var $x_1 = new $c_T21(self.eO, self.eS, self.eT, self.eU, self.eV, self.eW, self.eX, self.eY, self.eE, self.eF, self.eG, self.eH, self.eI, self.eJ, self.eK, self.eL, self.eM, self.eN, self.eP, self.eQ, self.eR);
      break matchResult34$1;
    }
    throw new $c_s_MatchError(self);
  }
  return $x_1;
}
function $p_sr_Tuples$__xxlTail__sr_TupleXXL__s_Product($thiz, xxl) {
  if ((xxl.v() === 23)) {
    var elems = xxl.af;
    return new $c_T22(elems.b[1], elems.b[2], elems.b[3], elems.b[4], elems.b[5], elems.b[6], elems.b[7], elems.b[8], elems.b[9], elems.b[10], elems.b[11], elems.b[12], elems.b[13], elems.b[14], elems.b[15], elems.b[16], elems.b[17], elems.b[18], elems.b[19], elems.b[20], elems.b[21], elems.b[22]);
  } else {
    var arr$1 = new $ac_O(((xxl.af.b.length - 1) | 0));
    var src = xxl.af;
    var length = ((xxl.af.b.length - 1) | 0);
    src.aM(1, arr$1, 0, length);
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
$p.oK = (function(xs) {
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
      return new $c_sr_TupleXXL(xs.aZ());
    }
  }
});
$p.oL = (function(xs) {
  return ((xs.b.length <= 22) ? this.oK(xs) : new $c_sr_TupleXXL(xs));
});
$p.mV = (function(x, self) {
  return ((self instanceof $c_sr_TupleXXL) ? $p_sr_Tuples$__xxlCons__O__sr_TupleXXL__sr_TupleXXL(this, x, self) : $p_sr_Tuples$__specialCaseCons__O__s_Product__s_Product(this, x, self));
});
$p.ol = (function(self, that) {
  var selfSize = $m_sr_Tuples$().nx(self);
  if ((selfSize === 0)) {
    return that;
  }
  var thatSize = $m_sr_Tuples$().nx(that);
  if ((thatSize === 0)) {
    return self;
  }
  var arr = new $ac_O(((selfSize + thatSize) | 0));
  if ((self instanceof $c_sr_TupleXXL)) {
    var src = self.af;
    src.aM(0, arr, 0, selfSize);
  } else {
    self.C().mW(arr, 0, selfSize);
  }
  if ((that instanceof $c_sr_TupleXXL)) {
    var src$1 = that.af;
    src$1.aM(0, arr, selfSize, thatSize);
  } else {
    that.C().mW(arr, selfSize, thatSize);
  }
  return this.oL(arr);
});
$p.nx = (function(self) {
  if (($m_T$package$EmptyTuple$() === self)) {
    return 0;
  }
  if ((self !== null)) {
    return self.v();
  }
  throw new $c_s_MatchError(self);
});
$p.qk = (function(self) {
  return ((self instanceof $c_sr_TupleXXL) ? $p_sr_Tuples$__xxlTail__sr_TupleXXL__s_Product(this, self) : $p_sr_Tuples$__specialCaseTail__s_Product__s_Product(this, self));
});
var $d_sr_Tuples$ = new $TypeData().i($c_sr_Tuples$, "scala.runtime.Tuples$", ({
  dd: 1
}));
var $n_sr_Tuples$;
function $m_sr_Tuples$() {
  if ((!$n_sr_Tuples$)) {
    $n_sr_Tuples$ = new $c_sr_Tuples$();
  }
  return $n_sr_Tuples$;
}
var $d_sjs_js_Any = new $TypeData().i(2, "scala.scalajs.js.Any", ({
  aP: 1
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
$p.oR = (function(this$, o, p) {
  return (!(!(p in o)));
});
var $d_sjs_js_Any$ObjectCompanionOps$ = new $TypeData().i($c_sjs_js_Any$ObjectCompanionOps$, "scala.scalajs.js.Any$ObjectCompanionOps$", ({
  df: 1
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
$p.n7 = (function(this$, elem, from) {
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
$p.pB = (function(this$, f) {
  var len = (this$.length | 0);
  var res = new Array(len);
  var i = 0;
  while ((i < len)) {
    res[i] = f.h(this$[i]);
    i = ((1 + i) | 0);
  }
  return res;
});
$p.nC = (function(this$, that) {
  var b = [];
  var len = (this$.length | 0);
  var i = 0;
  var it = that.ad();
  while (((i < len) && it.U())) {
    b.push(new $c_T2(this$[i], it.N()));
    i = ((1 + i) | 0);
  }
  return b;
});
$p.nD = (function(this$) {
  var len = (this$.length | 0);
  var b = new Array(len);
  var i = 0;
  while ((i < len)) {
    b[i] = new $c_T2(this$[i], i);
    i = ((1 + i) | 0);
  }
  return b;
});
$p.a4 = (function(this$, f) {
  var len = (this$.length | 0);
  var i = 0;
  while ((i < len)) {
    f.h(this$[i]);
    i = ((1 + i) | 0);
  }
});
var $d_sjs_js_ArrayOps$ = new $TypeData().i($c_sjs_js_ArrayOps$, "scala.scalajs.js.ArrayOps$", ({
  dg: 1
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
  dh: 1
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
  this.kR = null;
  $n_sjs_js_WrappedDictionary$Cache$ = this;
  this.kR = Object.prototype.hasOwnProperty;
}
$p = $c_sjs_js_WrappedDictionary$Cache$.prototype = new $h_O();
$p.constructor = $c_sjs_js_WrappedDictionary$Cache$;
/** @constructor */
function $h_sjs_js_WrappedDictionary$Cache$() {
}
$h_sjs_js_WrappedDictionary$Cache$.prototype = $p;
var $d_sjs_js_WrappedDictionary$Cache$ = new $TypeData().i($c_sjs_js_WrappedDictionary$Cache$, "scala.scalajs.js.WrappedDictionary$Cache$", ({
  dm: 1
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
  properties.bp(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((pair$2$2) => {
    result[pair$2$2.a1] = pair$2$2.ax;
  })));
  return result;
});
var $d_sjs_js_special_package$ = new $TypeData().i($c_sjs_js_special_package$, "scala.scalajs.js.special.package$", ({
  dn: 1
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
$p.au = (function(seq) {
  if ((seq instanceof $c_sjsr_WrappedVarArgs)) {
    return seq.i4;
  } else {
    var result = [];
    seq.bp(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2$2) => (result.push(x$2$2) | 0))));
    return result;
  }
});
var $d_sjsr_Compat$ = new $TypeData().i($c_sjsr_Compat$, "scala.scalajs.runtime.Compat$", ({
  dp: 1
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
$p.f = (function(array) {
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
  dq: 1
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
$p.qe = (function(err) {
  var where = ((err.n6() === 0) ? "" : ((err.n6() === 1) ? " after first argument" : ((" after " + err.n6()) + " arguments")));
  var x = ((("Illegal command line" + where) + ": ") + err.qJ());
  $m_s_Console$().pO().p1((x + "\n"));
});
var $d_s_util_CommandLineParser$ = new $TypeData().i($c_s_util_CommandLineParser$, "scala.util.CommandLineParser$", ({
  dr: 1
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
  this.iZ = null;
  this.iZ = init;
}
$p = $c_s_util_DynamicVariable.prototype = new $h_O();
$p.constructor = $c_s_util_DynamicVariable;
/** @constructor */
function $h_s_util_DynamicVariable() {
}
$h_s_util_DynamicVariable.prototype = $p;
$p.o = (function() {
  return (("DynamicVariable(" + this.iZ) + ")");
});
var $d_s_util_DynamicVariable = new $TypeData().i($c_s_util_DynamicVariable, "scala.util.DynamicVariable", ({
  dt: 1
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
$p.ah = (function(hash, length) {
  return this.hU((hash ^ length));
});
$p.hU = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.W = (function(x, seed, ignorePrefix) {
  var arr = x.v();
  if ((arr === 0)) {
    return ((!ignorePrefix) ? $f_T__hashCode__I(x.B()) : seed);
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.m(h, $f_T__hashCode__I(x.B()));
    }
    var i = 0;
    while ((i < arr)) {
      h = this.m(h, $m_sr_Statics$().L(x.n(i)));
      i = ((1 + i) | 0);
    }
    return this.ah(h, arr);
  }
});
$p.oi = (function(x, seed, caseClassName) {
  var arr = x.v();
  var aye = $f_T__hashCode__I(((caseClassName !== null) ? caseClassName : x.B()));
  if ((arr === 0)) {
    return aye;
  } else {
    var h = seed;
    h = this.m(h, aye);
    var i = 0;
    while ((i < arr)) {
      h = this.m(h, $m_sr_Statics$().L(x.n(i)));
      i = ((1 + i) | 0);
    }
    return this.ah(h, arr);
  }
});
$p.qr = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = xs.ad();
  while (iterator.U()) {
    var x = iterator.N();
    var h = $m_sr_Statics$().L(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0);
  }
  var h$2 = seed;
  h$2 = this.m(h$2, a);
  h$2 = this.m(h$2, b);
  h$2 = this.iO(h$2, c);
  return this.ah(h$2, n);
});
$p.pN = (function(xs, seed) {
  var it = xs.ad();
  var h = seed;
  if ((!it.U())) {
    return this.ah(h, 0);
  }
  var x0 = it.N();
  if ((!it.U())) {
    return this.ah(this.m(h, $m_sr_Statics$().L(x0)), 1);
  }
  var x1 = it.N();
  var initial = $m_sr_Statics$().L(x0);
  h = this.m(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().L(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while (it.U()) {
    h = this.m(h, prev);
    var hash = $m_sr_Statics$().L(it.N());
    if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
      h = this.m(h, hash);
      i = ((1 + i) | 0);
      while (it.U()) {
        h = this.m(h, $m_sr_Statics$().L(it.N()));
        i = ((1 + i) | 0);
      }
      return this.ah(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.hU(this.m(this.m(h0, rangeDiff), prev));
});
$p.mS = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().hB(a);
  switch (l) {
    case 0: {
      return this.ah(h, 0);
      break;
    }
    case 1: {
      return this.ah(this.m(h, $m_sr_Statics$().L($m_sr_ScalaRunTime$().gM(a, 0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().L($m_sr_ScalaRunTime$().gM(a, 0));
      h = this.m(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().L($m_sr_ScalaRunTime$().gM(a, 1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.m(h, prev);
        var hash = $m_sr_Statics$().L($m_sr_ScalaRunTime$().gM(a, i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.m(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.m(h, $m_sr_Statics$().L($m_sr_ScalaRunTime$().gM(a, i)));
            i = ((1 + i) | 0);
          }
          return this.ah(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.hU(this.m(this.m(h0, rangeDiff), prev));
    }
  }
});
$p.nt = (function(start, step, last, seed) {
  return this.hU(this.m(this.m(this.m(seed, start), step), last));
});
$p.oU = (function(a, seed) {
  var h = seed;
  var l = a.F();
  switch (l) {
    case 0: {
      return this.ah(h, 0);
      break;
    }
    case 1: {
      return this.ah(this.m(h, $m_sr_Statics$().L(a.ab(0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().L(a.ab(0));
      h = this.m(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().L(a.ab(1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.m(h, prev);
        var hash = $m_sr_Statics$().L(a.ab(i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.m(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.m(h, $m_sr_Statics$().L(a.ab(i)));
            i = ((1 + i) | 0);
          }
          return this.ah(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.hU(this.m(this.m(h0, rangeDiff), prev));
    }
  }
});
$p.p3 = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!elems.ac())) {
    elems.iL();
  }
  return ((rangeState === 2) ? this.nt(initial, rangeDiff, prev, seed) : this.ah(h, n));
});
function $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2($thiz, c, u, v) {
  return new $c_T2(c, new $c_Ltrivalibs_graphics_math_cpu_Vec2(u, v));
}
function $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__form$2__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form($thiz, p$1, faces) {
  var mesh$proxy1 = $m_Ltrivalibs_graphics_geometry_Mesh$().mP(faces, null, 0, new $c_Ltrivalibs_graphics_geometry_package$package$$anon$1(0));
  var vl = new $c_Ltrivalibs_graphics_geometry_VertexLayout$named(new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$(), new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$(), $m_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$())));
  var f = ((v$3, n$3, ref$3) => {
    var nVal = new $c_T3(n$3.y, n$3.A, n$3.z);
    var values$proxy1 = $m_sr_Tuples$().ol(vl.je.fX(v$3), $m_sr_Tuples$().mV(nVal, $m_T$package$EmptyTuple$()));
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
  mesh$proxy1.oy();
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
      var opt$proxy1 = mesh$proxy1.gy[fi].h3;
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
      var opt$proxy2 = mesh$proxy1.gy[fi].h3;
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
    var $x_1 = new $c_Ltrivalibs_graphics_geometry_BufferedGeometry(verts, \u03b4proxy2.np(idxBuf, vertexCount));
  }
  return p$1.n2($x_1, (void 0), (void 0), (void 0), (void 0), (void 0));
}
function $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__edgeDist$1__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr($thiz, wp, normal) {
  var $x_1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
  var d$proxy1 = (0.5 * $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().bC);
  var e$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().fS($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().E().G(wp));
  var dx = $x_1.aC($m_Ltrivalibs_graphics_math_gpu_LeftScalar$().b0().b3((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aD(d$proxy1)) + " - ") + e$proxy1.d) + ")")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().fS($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().E().G(normal)), 1000.0));
  var $x_4 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
  var $x_3 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
  var $x_2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().E().x(wp);
  var e$proxy2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().E().x(wp);
  var dy = $x_4.aC($x_3.iN($x_2, $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().b0().b3((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aD($m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().aH)) + " - ") + e$proxy2.d) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().fS($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().E().x(normal)), 1000.0));
  var $x_5 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
  var d$proxy2 = (0.5 * $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().bB);
  var e$proxy3 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().fS($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().E().ae(wp));
  var dz = $x_5.aC($m_Ltrivalibs_graphics_math_gpu_LeftScalar$().b0().b3((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aD(d$proxy2)) + " - ") + e$proxy3.d) + ")")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().fS($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().E().ae(normal)), 1000.0));
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().iN($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().iN(dx, dy), dz);
}
function $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__contact$1__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr($thiz, dist) {
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().nq($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().p().h($m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().kU), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().p().h(1.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().be(dist, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().p().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().p().h($m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().j0)));
}
function $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__roomNoise$1__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr($thiz, wp, normal) {
  var scaledWp = $m_Ltrivalibs_graphics_math_gpu_vec3$().aY($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aC($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().E().G(wp), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().E().x(wp), 0.2)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().E().x(wp), 0.3), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aC($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().E().ae(wp), 0.8), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().E().x(wp), 0.2)));
  var edge = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().be($p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__edgeDist$1__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr($thiz, wp, normal), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().p().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().p().h($m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().j0));
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().nq($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().p().h(0.68), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().p().h(1.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().oI($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().k4($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aC($m_Lsketchlib_shaders_Noise$().n1($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().k5(scaledWp, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().E(), 0.1), 3, 3.6, 0.12, $m_Ltrivalibs_graphics_math_gpu_vec3$().mM(120.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bb($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S($m_Lsketchlib_shaders_Noise$().n1($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().k5($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().om(scaledWp, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().E(), normal), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().E(), 0.15), 3, 2.1, 0.25, $m_Ltrivalibs_graphics_math_gpu_vec3$().mM(70.0)), 0.3), edge)), 1.3)));
}
function $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__texSize$1__D__D__T2($thiz, w, h) {
  return new $c_T2($doubleToInt((w * $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().j2)), $doubleToInt((h * $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().j2)));
}
function $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__v$1__D__D__D__D__D__T2($thiz, x, y, z, u, w) {
  return new $c_T2(new $c_Ltrivalibs_graphics_math_cpu_Vec3(x, y, z), new $c_Ltrivalibs_graphics_math_cpu_Vec2(u, w));
}
function $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__paintingForm$1__Ltrivalibs_graphics_painter_Painter__Lsketches_templates_rooms_gridcanvases_PaintingSpec__Ltrivalibs_graphics_painter_Form($thiz, p$2, spec) {
  var hw = (0.5 * spec.bE);
  var hh = (0.5 * spec.bD);
  var hd = (0.5 * spec.bm);
  var p$proxy1 = (spec.bm / (spec.fA * spec.bE));
  var mu = ((p$proxy1 < 0.0) ? 0.0 : ((p$proxy1 > 0.45) ? 0.45 : p$proxy1));
  var p$proxy2 = (spec.bm / (spec.fA * spec.bD));
  var mv = ((p$proxy2 < 0.0) ? 0.0 : ((p$proxy2 > 0.45) ? 0.45 : p$proxy2));
  var faces = [$m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().bo($p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__v$1__D__D__D__D__D__T2($thiz, (-hw), hh, hd, mu, mv), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__v$1__D__D__D__D__D__T2($thiz, (-hw), (-hh), hd, mu, (1.0 - mv)), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__v$1__D__D__D__D__D__T2($thiz, hw, (-hh), hd, (1.0 - mu), (1.0 - mv)), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__v$1__D__D__D__D__D__T2($thiz, hw, hh, hd, (1.0 - mu), mv)), $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().bo($p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__v$1__D__D__D__D__D__T2($thiz, hw, hh, hd, (1.0 - mu), mv), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__v$1__D__D__D__D__D__T2($thiz, hw, (-hh), hd, (1.0 - mu), (1.0 - mv)), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__v$1__D__D__D__D__D__T2($thiz, hw, (-hh), (-hd), 1.0, (1.0 - mv)), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__v$1__D__D__D__D__D__T2($thiz, hw, hh, (-hd), 1.0, mv)), $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().bo($p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__v$1__D__D__D__D__D__T2($thiz, (-hw), hh, hd, mu, mv), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__v$1__D__D__D__D__D__T2($thiz, (-hw), (-hh), hd, mu, (1.0 - mv)), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__v$1__D__D__D__D__D__T2($thiz, (-hw), (-hh), (-hd), 0.0, (1.0 - mv)), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__v$1__D__D__D__D__D__T2($thiz, (-hw), hh, (-hd), 0.0, mv)), $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().bo($p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__v$1__D__D__D__D__D__T2($thiz, (-hw), hh, hd, mu, mv), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__v$1__D__D__D__D__D__T2($thiz, hw, hh, hd, (1.0 - mu), mv), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__v$1__D__D__D__D__D__T2($thiz, hw, hh, (-hd), (1.0 - mu), 0.0), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__v$1__D__D__D__D__D__T2($thiz, (-hw), hh, (-hd), mu, 0.0)), $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().bo($p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__v$1__D__D__D__D__D__T2($thiz, (-hw), (-hh), hd, mu, (1.0 - mv)), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__v$1__D__D__D__D__D__T2($thiz, hw, (-hh), hd, (1.0 - mu), (1.0 - mv)), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__v$1__D__D__D__D__D__T2($thiz, hw, (-hh), (-hd), (1.0 - mu), 1.0), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__v$1__D__D__D__D__D__T2($thiz, (-hw), (-hh), (-hd), mu, 1.0)), $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().bo($p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__v$1__D__D__D__D__D__T2($thiz, (-hw), hh, (-hd), 0.0, 0.0), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__v$1__D__D__D__D__D__T2($thiz, (-hw), (-hh), (-hd), 0.0, 1.0), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__v$1__D__D__D__D__D__T2($thiz, hw, (-hh), (-hd), 1.0, 1.0), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__v$1__D__D__D__D__D__T2($thiz, hw, hh, (-hd), 1.0, 0.0))];
  var mesh$proxy2 = $m_Ltrivalibs_graphics_geometry_Mesh$().mP(faces, null, 0, new $c_Ltrivalibs_graphics_geometry_package$package$$anon$1(0));
  var vl = new $c_Ltrivalibs_graphics_geometry_VertexLayout$named(new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$(), new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$(), $m_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$())));
  var f = ((v$3, ref$3) => {
    var values$proxy2 = vl.je.fX(v$3);
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
    var $x_1 = new $c_Ltrivalibs_graphics_geometry_BufferedGeometry(verts, \u03b4proxy6.np(idxBuf, vertexCount));
  }
  return p$2.n2($x_1, (void 0), (void 0), (void 0), (void 0), (void 0));
}
function $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__corner$1__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__D__D__D__T2($thiz, center$2, right$1, width$4, height$4, su, sv, u, w) {
  return new $c_T2($f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Z(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Z(), center$2, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Z(), right$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), (0.5 * (su * width$4)))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Z(), $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().gk, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), (0.5 * (sv * height$4)))), new $c_Ltrivalibs_graphics_math_cpu_Vec2(u, w));
}
function $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__mkWall$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__Ltrivalibs_graphics_math_cpu_Vec3__Lsketches_templates_rooms_gridcanvases_Wall($thiz, p$12, center, width, height, rotY, inwardNormal) {
  var right = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Z(), $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().gk, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), inwardNormal);
  return new $c_Lsketches_templates_rooms_gridcanvases_Wall(center, width, height, rotY, inwardNormal, $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__form$2__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form($thiz, p$12, [$m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().bo($p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__corner$1__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__D__D__D__T2($thiz, center, right, width, height, (-1.0), 1.0, 0.0, 0.0), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__corner$1__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__D__D__D__T2($thiz, center, right, width, height, (-1.0), (-1.0), 0.0, 1.0), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__corner$1__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__D__D__D__T2($thiz, center, right, width, height, 1.0, (-1.0), 1.0, 1.0), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__corner$1__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__D__D__D__T2($thiz, center, right, width, height, 1.0, 1.0, 1.0, 0.0))]), $m_Lsketches_templates_rooms_gridcanvases_Wall$().nN());
}
function $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__hang$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_GPUSampler__Lsketches_templates_rooms_gridcanvases_Wall__Lsketches_templates_rooms_gridcanvases_PaintingSpec__D__D__Lsketches_templates_rooms_gridcanvases_Painting($thiz, p$3, paintingShade$1, sampler$1, wall, spec, u, v) {
  var right = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Z(), $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().gk, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), wall.fC);
  var hd = (0.5 * spec.bm);
  var pos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Z(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Z(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Z(), wall.gw, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Z(), right, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), (u - (0.5 * wall.aV)))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Z(), $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().gk, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), (v - (0.5 * wall.aU)))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Z(), wall.fC, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), (hd + 0.02)));
  var m = $m_Ltrivalibs_graphics_math_cpu_Mat4$().ka(pos, $m_Ltrivalibs_graphics_math_cpu_Quat$().k9(wall.fD), new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0));
  var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
  var uv$proxy1 = ul$proxy1.aq;
  var buffer = new ArrayBuffer(64);
  var arr$proxy9 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
  var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy9.dv, 0), p$3.e, uv$proxy1);
  b.K.D(b.k, m);
  var $x_2 = b.J.queue;
  var $x_1 = b.H;
  var s$proxy3 = b.k;
  $x_2.writeBuffer($x_1, 0.0, s$proxy3.dv.buffer);
  var Bindable_this = p$3.hW($p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__paintingForm$1__Ltrivalibs_graphics_painter_Painter__Lsketches_templates_rooms_gridcanvases_PaintingSpec__Ltrivalibs_graphics_painter_Form($thiz, p$3, spec), paintingShade$1, "none", (void 0));
  var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("model", b);
  var e2$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler$1);
  var e3$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("img", spec.gr);
  var \u03b4scrutinee337 = e1$proxy1.s;
  var idx = (Bindable_this.X.I.model | 0);
  while (((Bindable_this.V.length | 0) <= idx)) {
    Bindable_this.V.push(null);
  }
  Bindable_this.V[idx] = \u03b4scrutinee337;
  var \u03b4scrutinee351 = e2$proxy1.s;
  var idx$2 = (Bindable_this.X.I.samp | 0);
  while (((Bindable_this.V.length | 0) <= idx$2)) {
    Bindable_this.V.push(null);
  }
  Bindable_this.V[idx$2] = \u03b4scrutinee351;
  var \u03b4scrutinee371 = e3$proxy1.s;
  var idx$3 = (Bindable_this.X.az.img | 0);
  while (((Bindable_this.a8.length | 0) <= idx$3)) {
    Bindable_this.a8.push(null);
  }
  Bindable_this.a8[idx$3] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee371);
  var baseRect = new $c_Ltrivalibs_graphics_math_cpu_Vec4((u / wall.aV), (1.0 - (v / wall.aU)), ((0.5 * spec.bE) / wall.aV), ((0.5 * spec.bD) / wall.aU));
  var ul$proxy2 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$());
  var uv$proxy2 = ul$proxy2.aq;
  var buffer$2 = new ArrayBuffer(16);
  var arr$proxy10 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
  var b$2 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy10.dv, 0), p$3.e, uv$proxy2);
  b$2.K.D(b$2.k, baseRect);
  var $x_4 = b$2.J.queue;
  var $x_3 = b$2.H;
  var s$proxy4 = b$2.k;
  $x_4.writeBuffer($x_3, 0.0, s$proxy4.dv.buffer);
  var painting = new $c_Lsketches_templates_rooms_gridcanvases_Painting(b, Bindable_this, b$2, new $c_Ltrivalibs_graphics_math_cpu_Vec2(($m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().j1 / wall.aV), ($m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().j1 / wall.aU)), pos, baseRect, wall.fD, wall.aU);
  wall.bF.push(painting);
  return painting;
}
function $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__compositeWallTex$1__Lsketchlib_utils_bake_TextureBaker__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_GPUSampler__Ltrivalibs_graphics_painter_Shade__Lsketches_templates_rooms_gridcanvases_Wall__Ltrivalibs_graphics_painter_Panel($thiz, wallBaker$1, p$4, copyShade$1, sampler$2, shadowShade$1, wall) {
  matchResult18: {
    var \u03b44$;
    var x32 = $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__texSize$1__D__D__T2($thiz, wall.aV, wall.aU);
    if ((x32 !== null)) {
      var \u03b44$ = x32;
      break matchResult18;
    }
    throw new $c_s_MatchError(x32);
  }
  var ww$2 = (\u03b44$.a1 | 0);
  var wh$2 = (\u03b44$.ax | 0);
  var noiseTex = wallBaker$1.k7(wall.fB, ww$2, wh$2, (void 0), (void 0), true);
  var Bindable_this = p$4.bd(copyShade$1, (void 0), (void 0), (void 0));
  var e1$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler$2);
  var e2$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", noiseTex);
  var \u03b4scrutinee375 = e1$proxy2.s;
  var idx = (Bindable_this.w.I.samp | 0);
  while (((Bindable_this.i.length | 0) <= idx)) {
    Bindable_this.i.push(null);
  }
  Bindable_this.i[idx] = \u03b4scrutinee375;
  Bindable_this.O = null;
  var \u03b4scrutinee387 = e2$proxy2.s;
  var idx$2 = (Bindable_this.w.az.tex | 0);
  while (((Bindable_this.Q.length | 0) <= idx$2)) {
    Bindable_this.Q.push(null);
  }
  Bindable_this.Q[idx$2] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee387);
  Bindable_this.O = null;
  var Bindable_this$4 = p$4.bd(shadowShade$1, $m_Ltrivalibs_graphics_painter_BlendState$().lY, (void 0), (void 0));
  var e1$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("strength", $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().kZ);
  var \u03b4scrutinee395 = (+e1$proxy3.s);
  var idx$3 = (Bindable_this$4.w.I.strength | 0);
  if (((idx$3 < (Bindable_this$4.i.length | 0)) && (Bindable_this$4.i[idx$3] !== null))) {
    var BufferBinding_this = Bindable_this$4.i[idx$3];
    BufferBinding_this.K.D(BufferBinding_this.k, \u03b4scrutinee395);
    var $x_2 = BufferBinding_this.J.queue;
    var $x_1 = BufferBinding_this.H;
    var s$proxy5 = BufferBinding_this.k;
    $x_2.writeBuffer($x_1, 0.0, s$proxy5.dv.buffer);
  } else {
    var uv = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
    var device$proxy1 = Bindable_this$4.ha.e;
    var buffer = new ArrayBuffer(4);
    var arr$proxy11 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
    var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy11.dv, 0), device$proxy1, uv);
    b.K.D(b.k, \u03b4scrutinee395);
    var $x_4 = b.J.queue;
    var $x_3 = b.H;
    var s$proxy6 = b.k;
    $x_4.writeBuffer($x_3, 0.0, s$proxy6.dv.buffer);
    while (((Bindable_this$4.i.length | 0) <= idx$3)) {
      Bindable_this$4.i.push(null);
    }
    Bindable_this$4.i[idx$3] = b;
  }
  Bindable_this$4.O = null;
  var array = wall.bF;
  var len = (array.length | 0);
  var i = 0;
  while ((i < len)) {
    var x0 = array[i];
    var InstanceList_this = Bindable_this$4.il;
    var e1$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("rect", x0.fz);
    var e2$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("fade", x0.go);
    var i$1 = InstanceList_this.nS();
    var Bindable_this$1 = InstanceList_this.fM[i$1];
    var \u03b4scrutinee410 = e1$proxy4.s;
    var idx$1 = (Bindable_this$1.jB.I.rect | 0);
    while (((Bindable_this$1.aI.length | 0) <= idx$1)) {
      Bindable_this$1.aI.push(null);
    }
    Bindable_this$1.aI[idx$1] = \u03b4scrutinee410;
    var \u03b4scrutinee420 = e2$proxy3.s;
    var idx$2$1 = (Bindable_this$1.jB.I.fade | 0);
    if (((idx$2$1 < (Bindable_this$1.aI.length | 0)) && (Bindable_this$1.aI[idx$2$1] !== null))) {
      var BufferBinding_this$1 = Bindable_this$1.aI[idx$2$1];
      BufferBinding_this$1.K.D(BufferBinding_this$1.k, \u03b4scrutinee420);
      var $x_6 = BufferBinding_this$1.J.queue;
      var $x_5 = BufferBinding_this$1.H;
      var s$proxy7 = BufferBinding_this$1.k;
      $x_6.writeBuffer($x_5, 0.0, s$proxy7.dv.buffer);
    } else {
      var uv$1 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$();
      var device$proxy2 = Bindable_this$1.lZ.e;
      var buffer$1 = new ArrayBuffer(8);
      var arr$proxy12 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$1), 1);
      var b$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy12.dv, 0), device$proxy2, uv$1);
      b$1.K.D(b$1.k, \u03b4scrutinee420);
      var $x_8 = b$1.J.queue;
      var $x_7 = b$1.H;
      var s$proxy8 = b$1.k;
      $x_8.writeBuffer($x_7, 0.0, s$proxy8.dv.buffer);
      while (((Bindable_this$1.aI.length | 0) <= idx$2$1)) {
        Bindable_this$1.aI.push(null);
      }
      Bindable_this$1.aI[idx$2$1] = b$1;
    }
    i = ((1 + i) | 0);
  }
  var layers$1 = [Bindable_this, Bindable_this$4];
  var panel = p$4.br(ww$2, wh$2, (void 0), (void 0), (void 0), (void 0), true, (void 0), (void 0), (void 0), (void 0), (void 0), layers$1);
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$4, panel);
  return panel;
}
function $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__lineMask$1__D__D__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr($thiz, GridN$1, HalfWidth$1, t) {
  var f = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().n3($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S(t, GridN$1));
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().be($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().iN(f, $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().b0().b3((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aD(1.0)) + " - ") + f.d) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().p().h(HalfWidth$1), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().p().h(0.0));
}
function $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__patternPanel$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_painter_Panel($thiz, p$5, imgShade$1, c) {
  var Bindable_this = p$5.bd(imgShade$1, (void 0), (void 0), (void 0));
  var e1$proxy5 = new $c_Ltrivalibs_graphics_painter_BindPair("color", c);
  var \u03b4scrutinee480 = e1$proxy5.s;
  var idx = (Bindable_this.w.I.color | 0);
  if (((idx < (Bindable_this.i.length | 0)) && (Bindable_this.i[idx] !== null))) {
    var BufferBinding_this = Bindable_this.i[idx];
    BufferBinding_this.K.D(BufferBinding_this.k, \u03b4scrutinee480);
    var $x_2 = BufferBinding_this.J.queue;
    var $x_1 = BufferBinding_this.H;
    var s$proxy9 = BufferBinding_this.k;
    $x_2.writeBuffer($x_1, 0.0, s$proxy9.dv.buffer);
  } else {
    var uv = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$();
    var device$proxy3 = Bindable_this.ha.e;
    var buffer = new ArrayBuffer(16);
    var arr$proxy13 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
    var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy13.dv, 0), device$proxy3, uv);
    b.K.D(b.k, \u03b4scrutinee480);
    var $x_4 = b.J.queue;
    var $x_3 = b.H;
    var s$proxy10 = b.k;
    $x_4.writeBuffer($x_3, 0.0, s$proxy10.dv.buffer);
    while (((Bindable_this.i.length | 0) <= idx)) {
      Bindable_this.i.push(null);
    }
    Bindable_this.i[idx] = b;
  }
  Bindable_this.O = null;
  return p$5.br(256, 256, (void 0), (void 0), (void 0), (void 0), true, (void 0), (void 0), (void 0), (void 0), Bindable_this, (void 0));
}
function $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__isAnimated$1__I__Z($thiz, wallIndex) {
  return (wallIndex >= 2);
}
/** @constructor */
function $c_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$() {
  this.bC = 0.0;
  this.aH = 0.0;
  this.bB = 0.0;
  this.j2 = 0.0;
  this.gk = null;
  this.j0 = 0.0;
  this.kU = 0.0;
  this.kX = 0.0;
  this.kY = 0.0;
  this.j1 = 0.0;
  this.kZ = 0.0;
  this.kV = null;
  this.kT = null;
  this.l1 = null;
  this.l0 = null;
  this.kW = null;
  $n_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$ = this;
  this.bC = 6.5;
  this.aH = 5.5;
  this.bB = 10.0;
  this.j2 = 48.0;
  this.gk = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
  this.j0 = 0.08;
  this.kU = 0.93;
  this.kX = 2.7;
  this.kY = 0.25;
  this.j1 = 0.1;
  this.kZ = 0.44;
  this.kV = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.8, 0.78, 0.75);
  this.kT = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.86, 0.86, 0.85);
  this.l1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.97, 0.97, 0.96);
  this.l0 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.88, 0.88, 0.87);
  this.kW = new $c_Ltrivalibs_graphics_math_cpu_Vec3(8.0, 7.6, 6.8);
}
$p = $c_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$.prototype = new $h_O();
$p.constructor = $c_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$;
/** @constructor */
function $h_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$() {
}
$h_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$.prototype = $p;
$p.qc = (function(uv, rect, fade) {
  var hx = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ai().ae(rect);
  var hy = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ai().av(rect);
  var dx = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bL($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().Y().G(uv), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ai().G(rect));
  var dy = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bL($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bL($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().Y().x(uv), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ai().x(rect)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().Y().x(fade), $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().kY));
  var hMask = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().be($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().fS(dx), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aC(hx, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().Y().G(fade), 0.5)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bL(hx, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().Y().G(fade), 0.5)));
  var upperFade = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().Y().G(fade);
  var lowerFade = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().Y().x(fade), $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().kX);
  var upper = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().be(dy, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bL($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().nz(hy), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S(upperFade, 0.5)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aC($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().nz(hy), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S(upperFade, 0.5)));
  var lower = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().be(dy, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aC(hy, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S(lowerFade, 0.5)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bL(hy, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S(lowerFade, 0.5)));
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bb($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bb(hMask, upper), lower);
});
$p.q4 = (function() {
  $m_Ltrivalibs_graphics_painter_Painter$().oV(document.getElementById("canvas"), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((p$6) => {
    var sampler = p$6.ke();
    var box = $m_Ltrivalibs_graphics_geometry_Box$().o0(new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, (0.5 * $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().aH), 0.0), $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().bC, $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().aH, $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().bB);
    var floorForm = $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__form$2__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$6, [box.of(new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((c$2, uvw$2) => $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2(this, c$2, uvw$2.y, uvw$2.z))))]);
    var ceilForm = $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__form$2__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$6, [box.qo(new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((c$2$1, uvw$2$1) => $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2(this, c$2$1, uvw$2$1.y, uvw$2$1.z))))]);
    matchResult13$1: {
      var \u03b42$;
      var x17 = $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__texSize$1__D__D__T2(this, $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().bC, $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().bB);
      if ((x17 !== null)) {
        var \u03b42$ = x17;
        break matchResult13$1;
      }
      throw new $c_s_MatchError(x17);
    }
    var rfw$2 = (\u03b42$.a1 | 0);
    var rfh$2 = (\u03b42$.ax | 0);
    var floorTex = $m_Lsketchlib_utils_bake_TextureBaker$().oa(p$6, floorForm, rfw$2, rfh$2, (void 0), (void 0), true, new $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(((wp$2, normal$2, _$1$2) => $m_Ltrivalibs_graphics_math_gpu_vec4$().an($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().bq($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().bq($m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().hY($m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().kV), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().E(), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__roomNoise$1__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr(this, wp$2, normal$2)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().E(), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__contact$1__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr(this, $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__edgeDist$1__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr(this, wp$2, normal$2))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().p().h(1.0)))));
    var ceilTex = $m_Lsketchlib_utils_bake_TextureBaker$().ob(p$6, ceilForm, rfw$2, rfh$2, (void 0), "rgba16float", true, new $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(((wp$2$1, normal$2$1, uv$2, color$2) => {
      var col = new $c_Ltrivalibs_graphics_math_gpu_VarExpr("col");
      var s = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "s");
      var band = new $c_Ltrivalibs_graphics_math_gpu_VarExpr("band");
      var lf = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "lf");
      var halo = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "halo");
      var $x_11 = $m_sjsr_package$();
      var $x_10 = col.a6($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().bq($m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().hY($m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().kT), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().E(), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__roomNoise$1__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr(this, wp$2$1, normal$2$1)));
      var $x_9 = s.a6($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().n3($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().nO($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().Y().G(uv$2), 6.0), 0.5)));
      var $x_8 = band.a6($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().be($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().fS(s), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().p().h(0.05), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().p().h(0.02)));
      var $x_7 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
      var $x_6 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().be($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().Y().x(uv$2), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().p().h(0.05), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().p().h(0.15));
      var $x_5 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
      var e$proxy4 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().Y().x(uv$2);
      var $x_4 = lf.a6($x_7.bb($x_6, $x_5.be($m_Ltrivalibs_graphics_math_gpu_LeftScalar$().b0().b3((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aD(1.0)) + " - ") + e$proxy4.d) + ")")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().p().h(0.05), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().p().h(0.15))));
      var $x_3 = band.nQ(lf);
      var $x_2 = halo.a6($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().oE(band, $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().hY($m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().kW)));
      var $x_1 = col.nP(halo);
      var value$proxy1 = $m_Ltrivalibs_graphics_math_gpu_vec4$().an(col, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().p().h(1.0));
      return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_11.f(new ($d_T.r().C)([$x_10, $x_9, $x_8, $x_4, $x_3, $x_2, $x_1, (((("  " + color$2.T) + " = ") + value$proxy1.d) + ";")]))), "", "\n", "");
    })));
    var wallBaker = $m_Lsketchlib_utils_bake_TextureBaker$().mQ(p$6, new $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(((wp$2$2, normal$2$2, _$2$2) => {
      var $x_14 = $m_Ltrivalibs_graphics_math_gpu_vec4$();
      var $x_13 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$();
      var $x_12 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$();
      var Vec3ImmutableOpsG_this = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$();
      var v$proxy1 = $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().hY($m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().l1);
      var b$proxy1 = $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().hY($m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().l0);
      var t$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().be($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().E().x(wp$2$2), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().p().h(4.6), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().p().h(5.5));
      return $x_14.an($x_13.bq($x_12.bq(Vec3ImmutableOpsG_this.pF(v$proxy1, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().E(), b$proxy1, t$proxy1), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().E(), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__roomNoise$1__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr(this, wp$2$2, normal$2$2)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().E(), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__contact$1__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr(this, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().E().x(wp$2$2))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().p().h(1.0));
    })));
    var build$proxy1 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3) => {
      var body$proxy1 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2) => {
        var $x_15 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().bM();
        var AssignTarget_this = ctx$2.as.a0("color");
        var value$proxy2 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().aY($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex"), ctx$2.ag.j("uv"), ctx$2.P.j("samp"));
        return $x_15.h((((("  " + AssignTarget_this.T) + " = ") + value$proxy2.d) + ";"));
      }));
      var d = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
      var ctx = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg;
      try {
        var $x_16 = body$proxy1.h(ctx);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev;
      }
      program$3.a3 = $x_16;
      $m_sjs_js_ArrayOps$().a4(reg.a2, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$4) => ((data$3) => {
        $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$4, data$3);
      }))(program$3)));
    }));
    var program = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
    build$proxy1.h(program);
    var b = program.a3;
    var helperFns$proxy1 = program.at();
    var id = p$6.q;
    p$6.q = ((1 + p$6.q) | 0);
    var names = $m_sjs_js_ArrayOpsCommon$().a(["samp"], []);
    var dict = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
    var i = 0;
    while ((i < (names.length | 0))) {
      dict[names[i]] = i;
      i = ((1 + i) | 0);
    }
    var names$2 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], []);
    var dict$2 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
    var i$2 = 0;
    while ((i$2 < (names$2.length | 0))) {
      dict$2[names$2[i$2]] = i$2;
      i$2 = ((1 + i$2) | 0);
    }
    var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b, helperFns$proxy1);
    var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
    var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["samp"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).R.u()], []));
    var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.aa, sd.a9, fragBuiltinParams);
    var wgsl = (baseWgsl + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
    var args$proxy1 = $m_sr_ScalaRunTime$().aw(new ($d_sjs_js_Any.r().C)([wgsl]));
    console.log(...$m_sjsr_Compat$().au(args$proxy1));
    var module = p$6.e.createShaderModule($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("code", wgsl)])))));
    var descriptors = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([])))))]))))], [])], []);
    var result = [];
    $m_sjs_js_ArrayOps$().a4(descriptors, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$1) => ((entries$2) => (result.push(Painter_this$1.e.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("entries", entries$2)])))))) | 0)))(p$6)));
    var x20 = new $c_T2(result, $m_Ltrivalibs_graphics_shader_layouts$().M(p$6.e, result));
    var \u03b46$ = x20;
    var bgls$2 = \u03b46$.a1;
    var entries = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([])))))]))))], []);
    var panelBgl = p$6.e.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("entries", entries)])))));
    if ((panelBgl !== null)) {
      var other$proxy1 = [panelBgl];
      var allBgls = bgls$2.concat(other$proxy1);
    } else {
      var allBgls = bgls$2;
    }
    var pl = $m_Ltrivalibs_graphics_shader_layouts$().M(p$6.e, allBgls);
    var copyShade = new $c_Ltrivalibs_graphics_painter_Shade(id, module, null, bgls$2[0], panelBgl, pl, false, dict, dict$2);
    var build$proxy2 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$1) => {
      var body$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$1) => {
        var sm = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "sm");
        var $x_20 = $m_sjsr_package$();
        var $x_19 = sm.a6($m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().qc(ctx$2$1.ag.j("uv"), ctx$2$1.P.j("rect"), ctx$2$1.P.j("fade")));
        var AssignTarget_this$1 = ctx$2$1.as.a0("color");
        var $x_18 = $m_Ltrivalibs_graphics_math_gpu_vec4$();
        var $x_17 = $m_Ltrivalibs_graphics_math_gpu_vec3$();
        var e$proxy5 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bb(ctx$2$1.P.j("strength"), sm);
        var value$proxy3 = $x_18.an($x_17.fT($m_Ltrivalibs_graphics_math_gpu_LeftScalar$().b0().b3((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aD(1.0)) + " - ") + e$proxy5.d) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().p().h(1.0));
        return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_20.f(new ($d_T.r().C)([$x_19, (((("  " + AssignTarget_this$1.T) + " = ") + value$proxy3.d) + ";")]))), "", "\n", "");
      }));
      var d$1 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
      var ctx$1 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$1), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$1;
      try {
        var $x_21 = body$proxy3.h(ctx$1);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$1;
      }
      program$3$1.a3 = $x_21;
      $m_sjs_js_ArrayOps$().a4(reg$1.a2, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$5) => ((data$3$1) => {
        $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$5, data$3$1);
      }))(program$3$1)));
    }));
    var program$2 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
    build$proxy2.h(program$2);
    var b$1 = program$2.a3;
    var helperFns$proxy2 = program$2.at();
    var id$2 = p$6.q;
    p$6.q = ((1 + p$6.q) | 0);
    var names$4 = $m_sjs_js_ArrayOpsCommon$().a(["rect"], $m_sjs_js_ArrayOpsCommon$().a(["fade"], $m_sjs_js_ArrayOpsCommon$().a(["strength"], [])));
    var dict$3 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
    var i$3 = 0;
    while ((i$3 < (names$4.length | 0))) {
      dict$3[names$4[i$3]] = i$3;
      i$3 = ((1 + i$3) | 0);
    }
    var names$5 = [];
    var dict$4 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
    var i$4 = 0;
    while ((i$4 < (names$5.length | 0))) {
      dict$4[names$5[i$4]] = i$4;
      i$4 = ((1 + i$4) | 0);
    }
    var sd$2 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$1, helperFns$proxy2);
    var vertexInputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
    var vertexOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$2 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["rect"], $m_sjs_js_ArrayOpsCommon$().a(["fade"], $m_sjs_js_ArrayOpsCommon$().a(["strength"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$()).R.u()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$()).R.u()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).R.u()], []))));
    var fragBuiltinParams$2 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$2 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$2, vertexInputStruct$2, vertexOutputStruct$2, fragmentOutputStruct$2, groupDecls$2, sd$2.aa, sd$2.a9, fragBuiltinParams$2);
    var args$proxy2 = $m_sr_ScalaRunTime$().aw(new ($d_sjs_js_Any.r().C)([baseWgsl$2]));
    console.log(...$m_sjsr_Compat$().au(args$proxy2));
    var module$2 = p$6.e.createShaderModule($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("code", baseWgsl$2)])))));
    var descriptors$2 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 2), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], [])))], []);
    var result$2 = [];
    $m_sjs_js_ArrayOps$().a4(descriptors$2, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$2) => ((entries$2$1) => (result$2.push(Painter_this$2.e.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("entries", entries$2$1)])))))) | 0)))(p$6)));
    var x23 = new $c_T2(result$2, $m_Ltrivalibs_graphics_shader_layouts$().M(p$6.e, result$2));
    var \u03b46$$2 = x23;
    var bgls$4 = \u03b46$$2.a1;
    var pl$2 = $m_Ltrivalibs_graphics_shader_layouts$().M(p$6.e, bgls$4);
    var shadowShade = new $c_Ltrivalibs_graphics_painter_Shade(id$2, module$2, null, bgls$4[0], null, pl$2, false, dict$3, dict$4);
    var build$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$2) => {
      var body$proxy5 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$2) => {
        var $x_24 = $m_sjsr_package$();
        var AssignTarget_this$2 = ctx$2$2.aX.a0("uv");
        var value$proxy4 = ctx$2$2.b9.j("uv");
        var $x_23 = AssignTarget_this$2.T;
        var $x_22 = value$proxy4.d;
        var AssignTarget_this$2$1 = ctx$2$2.aX.hn;
        var value$proxy5 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().gP(ctx$2$2.fQ.j("vp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fV(), $m_Ltrivalibs_graphics_math_gpu_vec4$().an(ctx$2$2.b9.j("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().p().h(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ai(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$());
        return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_24.f(new ($d_T.r().C)([(((("  " + $x_23) + " = ") + $x_22) + ";"), (((("  " + AssignTarget_this$2$1.T) + " = ") + value$proxy5.d) + ";")]))), "", "\n", "");
      }));
      var d$2 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
      var ctx$3 = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$2), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$2;
      try {
        var $x_25 = body$proxy5.h(ctx$3);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$2;
      }
      program$3$2.b8 = $x_25;
      $m_sjs_js_ArrayOps$().a4(reg$2.a2, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$7) => ((data$3$2) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$7, data$3$2);
      }))(program$3$2)));
      var body$proxy7 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$3) => {
        var $x_26 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().bM();
        var AssignTarget_this$3 = ctx$2$3.as.a0("color");
        var value$proxy6 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().aY($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex"), ctx$2$3.ag.j("uv"), ctx$2$3.P.j("samp"));
        return $x_26.h((((("  " + AssignTarget_this$3.T) + " = ") + value$proxy6.d) + ";"));
      }));
      var d$2$1 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
      var ctx$2$4 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$2$1), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$2$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$2$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$2$1;
      try {
        var $x_27 = body$proxy7.h(ctx$2$4);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$2$1;
      }
      program$3$2.aW = $x_27;
      $m_sjs_js_ArrayOps$().a4(reg$2$1.a2, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$8) => ((data$3$3) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$8, data$3$3);
      }))(program$3$2)));
    }));
    var program$3$3 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy3.h(program$3$3);
    var b$2 = program$3$3.b8;
    var b$3 = program$3$3.aW;
    var helperFns$proxy3 = program$3$3.at();
    var id$3 = p$6.q;
    p$6.q = ((1 + p$6.q) | 0);
    var names$7 = $m_sjs_js_ArrayOpsCommon$().a(["vp"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []));
    var dict$5 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
    var i$5 = 0;
    while ((i$5 < (names$7.length | 0))) {
      dict$5[names$7[i$5]] = i$5;
      i$5 = ((1 + i$5) | 0);
    }
    var names$8 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], []);
    var dict$6 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
    var i$6 = 0;
    while ((i$6 < (names$8.length | 0))) {
      dict$6[names$8[i$6]] = i$6;
      i$6 = ((1 + i$6) | 0);
    }
    var sd$3 = new $c_Ltrivalibs_graphics_shader_ShaderDef(b$2, b$3, helperFns$proxy3);
    var vertexInputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().a(["position"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["normal"], []))), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$3 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["vp"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).bK.u()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).R.u()], [])));
    var fragBuiltinParams$3 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$3 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$3, vertexInputStruct$3, vertexOutputStruct$3, fragmentOutputStruct$3, groupDecls$3, sd$3.aa, sd$3.a9, fragBuiltinParams$3);
    var wgsl$3 = (baseWgsl$3 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
    var args$proxy3 = $m_sr_ScalaRunTime$().aw(new ($d_sjs_js_Any.r().C)([wgsl$3]));
    console.log(...$m_sjsr_Compat$().au(args$proxy3));
    var module$3 = p$6.e.createShaderModule($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("code", wgsl$3)])))));
    var formats = $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], $m_sjs_js_ArrayOpsCommon$().a(["float32x2"], $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], [])));
    var sizes = $m_sjs_js_ArrayOpsCommon$().a([12], $m_sjs_js_ArrayOpsCommon$().a([8], $m_sjs_js_ArrayOpsCommon$().a([12], [])));
    var offsets = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes);
    var stride = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes);
    var attributes = [];
    var i$7 = 0;
    while ((i$7 < (formats.length | 0))) {
      attributes.push($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("shaderLocation", i$7), new $c_T2("offset", (offsets[i$7] | 0)), new $c_T2("format", formats[i$7])])))));
      i$7 = ((1 + i$7) | 0);
    }
    var vbl = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("arrayStride", stride), new $c_T2("attributes", attributes)]))));
    var descriptors$3 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 1), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([])))))]))))], []))], []);
    var result$3 = [];
    $m_sjs_js_ArrayOps$().a4(descriptors$3, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$3) => ((entries$2$2) => (result$3.push(Painter_this$3.e.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("entries", entries$2$2)])))))) | 0)))(p$6)));
    var x26 = new $c_T2(result$3, $m_Ltrivalibs_graphics_shader_layouts$().M(p$6.e, result$3));
    var \u03b42$$2 = x26;
    var bgls$6 = \u03b42$$2.a1;
    var entries$2$3 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([])))))]))))], []);
    var panelBgl$3 = p$6.e.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("entries", entries$2$3)])))));
    if ((panelBgl$3 !== null)) {
      var other$proxy3 = [panelBgl$3];
      var allBgls$3 = bgls$6.concat(other$proxy3);
    } else {
      var allBgls$3 = bgls$6;
    }
    var pl$3 = $m_Ltrivalibs_graphics_shader_layouts$().M(p$6.e, allBgls$3);
    var texturedShade = new $c_Ltrivalibs_graphics_painter_Shade(id$3, module$3, vbl, bgls$6[0], panelBgl$3, pl$3, false, dict$5, dict$6);
    var build$proxy4 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$4) => {
      var body$proxy9 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$5) => {
        var $x_30 = $m_sjsr_package$();
        var AssignTarget_this$4 = ctx$2$5.aX.a0("uv");
        var value$proxy7 = ctx$2$5.b9.j("uv");
        var $x_29 = AssignTarget_this$4.T;
        var $x_28 = value$proxy7.d;
        var AssignTarget_this$2$2 = ctx$2$5.aX.hn;
        var value$proxy8 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().gP($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().pC(ctx$2$5.fQ.j("vp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fV(), ctx$2$5.fQ.j("model")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fV(), $m_Ltrivalibs_graphics_math_gpu_vec4$().an(ctx$2$5.b9.j("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().p().h(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ai(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$());
        return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_30.f(new ($d_T.r().C)([(((("  " + $x_29) + " = ") + $x_28) + ";"), (((("  " + AssignTarget_this$2$2.T) + " = ") + value$proxy8.d) + ";")]))), "", "\n", "");
      }));
      var d$3 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
      var ctx$4 = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$3), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$3 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$3 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$3;
      try {
        var $x_31 = body$proxy9.h(ctx$4);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$3;
      }
      program$3$4.b8 = $x_31;
      $m_sjs_js_ArrayOps$().a4(reg$3.a2, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$9) => ((data$3$4) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$9, data$3$4);
      }))(program$3$4)));
      var body$proxy11 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$6) => {
        var $x_32 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().bM();
        var AssignTarget_this$5 = ctx$2$6.as.a0("color");
        var value$proxy9 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().aY($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "img"), ctx$2$6.ag.j("uv"), ctx$2$6.P.j("samp"));
        return $x_32.h((((("  " + AssignTarget_this$5.T) + " = ") + value$proxy9.d) + ";"));
      }));
      var d$2$2 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
      var ctx$2$7 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$2$2), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$2$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$2$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$2$2;
      try {
        var $x_33 = body$proxy11.h(ctx$2$7);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$2$2;
      }
      program$3$4.aW = $x_33;
      $m_sjs_js_ArrayOps$().a4(reg$2$2.a2, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$10) => ((data$3$5) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$10, data$3$5);
      }))(program$3$4)));
    }));
    var program$4 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy4.h(program$4);
    var b$4 = program$4.b8;
    var b$5 = program$4.aW;
    var helperFns$proxy4 = program$4.at();
    var id$4 = p$6.q;
    p$6.q = ((1 + p$6.q) | 0);
    var names$10 = $m_sjs_js_ArrayOpsCommon$().a(["vp"], $m_sjs_js_ArrayOpsCommon$().a(["model"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])));
    var dict$7 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
    var i$8 = 0;
    while ((i$8 < (names$10.length | 0))) {
      dict$7[names$10[i$8]] = i$8;
      i$8 = ((1 + i$8) | 0);
    }
    var names$11 = $m_sjs_js_ArrayOpsCommon$().a(["img"], []);
    var dict$8 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
    var i$9 = 0;
    while ((i$9 < (names$11.length | 0))) {
      dict$8[names$11[i$9]] = i$9;
      i$9 = ((1 + i$9) | 0);
    }
    var sd$4 = new $c_Ltrivalibs_graphics_shader_ShaderDef(b$4, b$5, helperFns$proxy4);
    var vertexInputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().a(["position"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], [])), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$4 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["vp"], $m_sjs_js_ArrayOpsCommon$().a(["model"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).bK.u()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).bK.u()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).R.u()], []))));
    var fragBuiltinParams$4 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$4 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$4, vertexInputStruct$4, vertexOutputStruct$4, fragmentOutputStruct$4, groupDecls$4, sd$4.aa, sd$4.a9, fragBuiltinParams$4);
    var wgsl$4 = (baseWgsl$4 + "\n\n@group(1) @binding(0) var img: texture_2d<f32>;");
    var args$proxy4 = $m_sr_ScalaRunTime$().aw(new ($d_sjs_js_Any.r().C)([wgsl$4]));
    console.log(...$m_sjsr_Compat$().au(args$proxy4));
    var module$4 = p$6.e.createShaderModule($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("code", wgsl$4)])))));
    var formats$2 = $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], $m_sjs_js_ArrayOpsCommon$().a(["float32x2"], []));
    var sizes$2 = $m_sjs_js_ArrayOpsCommon$().a([12], $m_sjs_js_ArrayOpsCommon$().a([8], []));
    var offsets$2 = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes$2);
    var stride$2 = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes$2);
    var attributes$2 = [];
    var i$10 = 0;
    while ((i$10 < (formats$2.length | 0))) {
      attributes$2.push($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("shaderLocation", i$10), new $c_T2("offset", (offsets$2[i$10] | 0)), new $c_T2("format", formats$2[i$10])])))));
      i$10 = ((1 + i$10) | 0);
    }
    var vbl$2 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("arrayStride", stride$2), new $c_T2("attributes", attributes$2)]))));
    var descriptors$4 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 1), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 1), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 2), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([])))))]))))], [])))], []);
    var result$4 = [];
    $m_sjs_js_ArrayOps$().a4(descriptors$4, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$4) => ((entries$2$4) => (result$4.push(Painter_this$4.e.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("entries", entries$2$4)])))))) | 0)))(p$6)));
    var x29 = new $c_T2(result$4, $m_Ltrivalibs_graphics_shader_layouts$().M(p$6.e, result$4));
    var \u03b42$$3 = x29;
    var bgls$8 = \u03b42$$3.a1;
    var entries$3 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([])))))]))))], []);
    var panelBgl$4 = p$6.e.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("entries", entries$3)])))));
    if ((panelBgl$4 !== null)) {
      var other$proxy4 = [panelBgl$4];
      var allBgls$4 = bgls$8.concat(other$proxy4);
    } else {
      var allBgls$4 = bgls$8;
    }
    var pl$4 = $m_Ltrivalibs_graphics_shader_layouts$().M(p$6.e, allBgls$4);
    var paintingShade = new $c_Ltrivalibs_graphics_painter_Shade(id$4, module$4, vbl$2, bgls$8[0], panelBgl$4, pl$4, false, dict$7, dict$8);
    var build$proxy5 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$5) => {
      var body$proxy13 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$8) => {
        var uv = ctx$2$8.ag.j("uv");
        var m = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().pD($p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__lineMask$1__D__D__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr(this, 6.0, 0.016, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aC($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().Y().G(uv), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().Y().x(uv))), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__lineMask$1__D__D__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr(this, 6.0, 0.016, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bL($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().Y().G(uv), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().Y().x(uv))));
        var $x_34 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().bM();
        var AssignTarget_this$6 = ctx$2$8.as.a0("color");
        var value$proxy10 = $m_Ltrivalibs_graphics_math_gpu_vec4$().an($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().bq(ctx$2$8.P.j("color"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().E(), $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().b0().b3((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aD(1.0)) + " - ") + m.d) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().p().h(1.0));
        return $x_34.h((((("  " + AssignTarget_this$6.T) + " = ") + value$proxy10.d) + ";"));
      }));
      var d$4 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
      var ctx$5 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$4), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$4 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$4 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$4;
      try {
        var $x_35 = body$proxy13.h(ctx$5);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$4;
      }
      program$3$5.a3 = $x_35;
      $m_sjs_js_ArrayOps$().a4(reg$4.a2, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$6) => ((data$3$6) => {
        $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$6, data$3$6);
      }))(program$3$5)));
    }));
    var program$5 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
    build$proxy5.h(program$5);
    var b$6 = program$5.a3;
    var helperFns$proxy5 = program$5.at();
    var id$5 = p$6.q;
    p$6.q = ((1 + p$6.q) | 0);
    var names$13 = $m_sjs_js_ArrayOpsCommon$().a(["color"], []);
    var dict$9 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
    var i$11 = 0;
    while ((i$11 < (names$13.length | 0))) {
      dict$9[names$13[i$11]] = i$11;
      i$11 = ((1 + i$11) | 0);
    }
    var names$14 = [];
    var dict$10 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
    var i$12 = 0;
    while ((i$12 < (names$14.length | 0))) {
      dict$10[names$14[i$12]] = i$12;
      i$12 = ((1 + i$12) | 0);
    }
    var sd$5 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$6, helperFns$proxy5);
    var vertexInputStruct$5 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
    var vertexOutputStruct$5 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$5 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$5 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$()).R.u()], []));
    var fragBuiltinParams$5 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$5 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$5, vertexInputStruct$5, vertexOutputStruct$5, fragmentOutputStruct$5, groupDecls$5, sd$5.aa, sd$5.a9, fragBuiltinParams$5);
    var args$proxy5 = $m_sr_ScalaRunTime$().aw(new ($d_sjs_js_Any.r().C)([baseWgsl$5]));
    console.log(...$m_sjsr_Compat$().au(args$proxy5));
    var module$5 = p$6.e.createShaderModule($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("code", baseWgsl$5)])))));
    var descriptors$5 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], [])], []);
    var result$5 = [];
    $m_sjs_js_ArrayOps$().a4(descriptors$5, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$5) => ((entries$2$5) => (result$5.push(Painter_this$5.e.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("entries", entries$2$5)])))))) | 0)))(p$6)));
    var x35 = new $c_T2(result$5, $m_Ltrivalibs_graphics_shader_layouts$().M(p$6.e, result$5));
    var \u03b46$$3 = x35;
    var bgls$10 = \u03b46$$3.a1;
    var pl$5 = $m_Ltrivalibs_graphics_shader_layouts$().M(p$6.e, bgls$10);
    var imgShade = new $c_Ltrivalibs_graphics_painter_Shade(id$5, module$5, null, bgls$10[0], null, pl$5, false, dict$9, dict$10);
    var wallFront = $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__mkWall$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__Ltrivalibs_graphics_math_cpu_Vec3__Lsketches_templates_rooms_gridcanvases_Wall(this, p$6, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, (0.5 * $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().aH), (0.5 * $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().bB)), $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().bC, $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().aH, 3.141592653589793, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, (-1.0)));
    var wallBack = $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__mkWall$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__Ltrivalibs_graphics_math_cpu_Vec3__Lsketches_templates_rooms_gridcanvases_Wall(this, p$6, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, (0.5 * $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().aH), (0.5 * (-$m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().bB))), $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().bC, $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().aH, 0.0, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0));
    var wallLeft = $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__mkWall$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__Ltrivalibs_graphics_math_cpu_Vec3__Lsketches_templates_rooms_gridcanvases_Wall(this, p$6, new $c_Ltrivalibs_graphics_math_cpu_Vec3((0.5 * (-$m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().bC)), (0.5 * $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().aH), 0.0), $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().bB, $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().aH, 1.5707963267948966, new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 0.0));
    var wallRight = $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__mkWall$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__Ltrivalibs_graphics_math_cpu_Vec3__Lsketches_templates_rooms_gridcanvases_Wall(this, p$6, new $c_Ltrivalibs_graphics_math_cpu_Vec3((0.5 * $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().bC), (0.5 * $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().aH), 0.0), $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().bB, $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().aH, (-1.5707963267948966), new $c_Ltrivalibs_graphics_math_cpu_Vec3((-1.0), 0.0, 0.0));
    var walls = [wallFront, wallBack, wallLeft, wallRight];
    var palette = [new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.78, 0.3, 0.28), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.3, 0.45, 0.7), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.4, 0.62, 0.42), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.82, 0.7, 0.34)];
    var imagePanels = $m_sjs_js_ArrayOps$().pB(palette, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((p$13) => ((c$2$2) => $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__patternPanel$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_painter_Panel(this, p$13, imgShade, c$2$2)))(p$6)));
    $m_sjs_js_ArrayOps$().a4(imagePanels, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((p$14) => ((_$3$3) => {
      $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$14, _$3$3);
    }))(p$6)));
    var counts = [3, 3, 4, 4];
    var sways = [];
    new $c_sci_Range$Exclusive(0, (walls.length | 0), 1).bp(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((p$16) => ((v1$2) => {
      var i$1 = (v1$2 | 0);
      var wall = walls[i$1];
      var img = imagePanels[i$1];
      var count = (counts[i$1] | 0);
      var span = (wall.aV - 1.0);
      new $c_sci_Range$Exclusive(0, count, 1).bp(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2$1) => {
        var j = (v1$2$1 | 0);
        var pw = $m_Ltrivalibs_utils_random_random$package$().fW(0.9, 1.7);
        var ph = $m_Ltrivalibs_utils_random_random$package$().fW(0.7, 1.4);
        var slot = (0.5 + ((span * (j + 0.5)) / count));
        var u = (slot + $m_Ltrivalibs_utils_random_random$package$().fW((-0.12), 0.12));
        var v$5 = (1.75 + $m_Ltrivalibs_utils_random_random$package$().fW((-0.18), 0.18));
        var painting = $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__hang$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_GPUSampler__Lsketches_templates_rooms_gridcanvases_Wall__Lsketches_templates_rooms_gridcanvases_PaintingSpec__D__D__Lsketches_templates_rooms_gridcanvases_Painting(this, p$16, paintingShade, sampler, wall, new $c_Lsketches_templates_rooms_gridcanvases_PaintingSpec(pw, ph, 0.05, img, 3.0), u, v$5);
        if ($p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__isAnimated$1__I__Z(this, i$1)) {
          sways.push(new $c_Lsketches_templates_rooms_gridcanvases_Sway(painting, $m_Ltrivalibs_utils_random_random$package$().fW(0.0, 6.283185307179586), $m_Ltrivalibs_utils_random_random$package$().fW(0.6, 1.0), $m_Ltrivalibs_utils_random_random$package$().fW(0.14, 0.22)));
        }
      })));
    }))(p$6)));
    var Bindable_this = p$6.hW(ceilForm, texturedShade, "none", (void 0));
    var e1$proxy6 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var e2$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", ceilTex);
    var \u03b4scrutinee491 = e1$proxy6.s;
    var idx = (Bindable_this.X.I.samp | 0);
    while (((Bindable_this.V.length | 0) <= idx)) {
      Bindable_this.V.push(null);
    }
    Bindable_this.V[idx] = \u03b4scrutinee491;
    var \u03b4scrutinee507 = e2$proxy4.s;
    var idx$2 = (Bindable_this.X.az.tex | 0);
    while (((Bindable_this.a8.length | 0) <= idx$2)) {
      Bindable_this.a8.push(null);
    }
    Bindable_this.a8[idx$2] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee507);
    var aboveGround = [Bindable_this];
    var animatedPanels = [];
    new $c_sci_Range$Exclusive(0, (walls.length | 0), 1).bp(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((p$17) => ((v1$2$2) => {
      var i$13 = (v1$2$2 | 0);
      var wall$1 = walls[i$13];
      var wallTex = $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__compositeWallTex$1__Lsketchlib_utils_bake_TextureBaker__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_GPUSampler__Ltrivalibs_graphics_painter_Shade__Lsketches_templates_rooms_gridcanvases_Wall__Ltrivalibs_graphics_painter_Panel(this, wallBaker, p$17, copyShade, sampler, shadowShade, wall$1);
      if ($p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__isAnimated$1__I__Z(this, i$13)) {
        animatedPanels.push(wallTex);
      }
      var Bindable_this$1 = p$17.hW(wall$1.fB, texturedShade, "none", (void 0));
      var e1$proxy7 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
      var e2$proxy5 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", wallTex);
      var \u03b4scrutinee513 = e1$proxy7.s;
      var idx$1 = (Bindable_this$1.X.I.samp | 0);
      while (((Bindable_this$1.V.length | 0) <= idx$1)) {
        Bindable_this$1.V.push(null);
      }
      Bindable_this$1.V[idx$1] = \u03b4scrutinee513;
      var \u03b4scrutinee529 = e2$proxy5.s;
      var idx$2$1 = (Bindable_this$1.X.az.tex | 0);
      while (((Bindable_this$1.a8.length | 0) <= idx$2$1)) {
        Bindable_this$1.a8.push(null);
      }
      Bindable_this$1.a8[idx$2$1] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee529);
      aboveGround.push(Bindable_this$1);
      $m_sjs_js_ArrayOps$().a4(wall$1.bF, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((painting$2) => (aboveGround.push(painting$2.gp) | 0))));
    }))(p$6)));
    var wallColor = new $c_Ltrivalibs_graphics_math_cpu_Vec4(0.9, 0.9, 0.9, 0.0);
    var mirror = $m_Lsketchlib_utils_mirror_GaussianMirrorReflection$().o3(p$6, aboveGround, "vp", $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().aH, null, $m_Ltrivalibs_graphics_geometry_Plane$().lt, 5.0, 3.0, 0.0, 0.6, 0.5, 3.0, wallColor);
    var ul$proxy3 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$());
    var uv$proxy3 = ul$proxy3.aq;
    var buffer = new ArrayBuffer(8);
    var arr$proxy14 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
    var canvasRes = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy14.dv, 0), p$6.e, uv$proxy3);
    var build$proxy6 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$6) => {
      var body$proxy15 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$9) => {
        var $x_38 = $m_sjsr_package$();
        var AssignTarget_this$7 = ctx$2$9.aX.a0("uv");
        var value$proxy11 = ctx$2$9.b9.j("uv");
        var $x_37 = AssignTarget_this$7.T;
        var $x_36 = value$proxy11.d;
        var AssignTarget_this$2$3 = ctx$2$9.aX.hn;
        var value$proxy12 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().gP(ctx$2$9.fQ.j("vp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fV(), $m_Ltrivalibs_graphics_math_gpu_vec4$().an(ctx$2$9.b9.j("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().p().h(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ai(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$());
        return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_38.f(new ($d_T.r().C)([(((("  " + $x_37) + " = ") + $x_36) + ";"), (((("  " + AssignTarget_this$2$3.T) + " = ") + value$proxy12.d) + ";")]))), "", "\n", "");
      }));
      var d$5 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
      var ctx$6 = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$5), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$5 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$5 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$5;
      try {
        var $x_39 = body$proxy15.h(ctx$6);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$5;
      }
      program$3$6.b8 = $x_39;
      $m_sjs_js_ArrayOps$().a4(reg$5.a2, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$11) => ((data$3$7) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$11, data$3$7);
      }))(program$3$6)));
      var body$proxy17 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$10) => {
        var base = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "base");
        var refl = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "refl");
        var mix = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "mix");
        var falloff = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "falloff");
        var $x_44 = $m_sjsr_package$();
        var $x_43 = base.a6($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gR($m_Ltrivalibs_graphics_math_gpu_expr$package$().aY($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex"), ctx$2$10.ag.j("uv"), ctx$2$10.P.j("samp"))));
        var $x_42 = refl.a6($m_Ltrivalibs_graphics_math_gpu_expr$package$().aY($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "reflTex"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().ot($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gO(ctx$2$10.gI), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().Y(), ctx$2$10.P.j("res")), ctx$2$10.P.j("samp")));
        var e$proxy7 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ai().av(refl), 0.4);
        var $x_41 = falloff.a6($m_Ltrivalibs_graphics_math_gpu_LeftScalar$().b0().b3((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aD(1.0)) + " - ") + e$proxy7.d) + ")")));
        var $x_40 = mix.a6($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S(falloff, 0.25));
        var AssignTarget_this$8 = ctx$2$10.as.a0("color");
        var value$proxy13 = $m_Ltrivalibs_graphics_math_gpu_vec4$().an($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().mL($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().bq(base, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().E(), $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().b0().b3((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aD(1.0)) + " - ") + mix.d) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().E(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().bq($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gR(refl), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().E(), mix)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().p().h(1.0));
        return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_44.f(new ($d_T.r().C)([$x_43, $x_42, $x_41, $x_40, (((("  " + AssignTarget_this$8.T) + " = ") + value$proxy13.d) + ";")]))), "", "\n", "");
      }));
      var d$2$3 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
      var ctx$2$11 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$2$3), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$2$3 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$2$3 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$2$3;
      try {
        var $x_45 = body$proxy17.h(ctx$2$11);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$2$3;
      }
      program$3$6.aW = $x_45;
      $m_sjs_js_ArrayOps$().a4(reg$2$3.a2, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$12) => ((data$3$8) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$12, data$3$8);
      }))(program$3$6)));
    }));
    var program$6 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy6.h(program$6);
    var b$7 = program$6.b8;
    var b$8 = program$6.aW;
    var helperFns$proxy6 = program$6.at();
    var id$6 = p$6.q;
    p$6.q = ((1 + p$6.q) | 0);
    var names$16 = $m_sjs_js_ArrayOpsCommon$().a(["vp"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], $m_sjs_js_ArrayOpsCommon$().a(["res"], [])));
    var dict$11 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
    var i$13$1 = 0;
    while ((i$13$1 < (names$16.length | 0))) {
      dict$11[names$16[i$13$1]] = i$13$1;
      i$13$1 = ((1 + i$13$1) | 0);
    }
    var names$17 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], $m_sjs_js_ArrayOpsCommon$().a(["reflTex"], []));
    var dict$12 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
    var i$14 = 0;
    while ((i$14 < (names$17.length | 0))) {
      dict$12[names$17[i$14]] = i$14;
      i$14 = ((1 + i$14) | 0);
    }
    var sd$6 = new $c_Ltrivalibs_graphics_shader_ShaderDef(b$7, b$8, helperFns$proxy6);
    var vertexInputStruct$6 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().a(["position"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["normal"], []))), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct$6 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$6 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$6 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["vp"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], $m_sjs_js_ArrayOpsCommon$().a(["res"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).bK.u()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).R.u()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$()).R.u()], []))));
    var fragBuiltinParams$6 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$6 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$6, vertexInputStruct$6, vertexOutputStruct$6, fragmentOutputStruct$6, groupDecls$6, sd$6.aa, sd$6.a9, fragBuiltinParams$6);
    var wgsl$6 = (baseWgsl$6 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;\n@group(1) @binding(1) var reflTex: texture_2d<f32>;");
    var args$proxy6 = $m_sr_ScalaRunTime$().aw(new ($d_sjs_js_Any.r().C)([wgsl$6]));
    console.log(...$m_sjsr_Compat$().au(args$proxy6));
    var module$6 = p$6.e.createShaderModule($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("code", wgsl$6)])))));
    var formats$3 = $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], $m_sjs_js_ArrayOpsCommon$().a(["float32x2"], $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], [])));
    var sizes$3 = $m_sjs_js_ArrayOpsCommon$().a([12], $m_sjs_js_ArrayOpsCommon$().a([8], $m_sjs_js_ArrayOpsCommon$().a([12], [])));
    var offsets$3 = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes$3);
    var stride$4 = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes$3);
    var attributes$3 = [];
    var i$15 = 0;
    while ((i$15 < (formats$3.length | 0))) {
      attributes$3.push($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("shaderLocation", i$15), new $c_T2("offset", (offsets$3[i$15] | 0)), new $c_T2("format", formats$3[i$15])])))));
      i$15 = ((1 + i$15) | 0);
    }
    var vbl$3 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("arrayStride", stride$4), new $c_T2("attributes", attributes$3)]))));
    var descriptors$6 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 1), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 2), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], [])))], []);
    var result$6 = [];
    $m_sjs_js_ArrayOps$().a4(descriptors$6, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$6) => ((entries$2$6) => (result$6.push(Painter_this$6.e.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("entries", entries$2$6)])))))) | 0)))(p$6)));
    var x38 = new $c_T2(result$6, $m_Ltrivalibs_graphics_shader_layouts$().M(p$6.e, result$6));
    var \u03b42$$4 = x38;
    var bgls$12 = \u03b42$$4.a1;
    var entries$4 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([])))))]))))], []));
    var panelBgl$6 = p$6.e.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("entries", entries$4)])))));
    if ((panelBgl$6 !== null)) {
      var other$proxy6 = [panelBgl$6];
      var allBgls$6 = bgls$12.concat(other$proxy6);
    } else {
      var allBgls$6 = bgls$12;
    }
    var pl$6 = $m_Ltrivalibs_graphics_shader_layouts$().M(p$6.e, allBgls$6);
    var floorShade = new $c_Ltrivalibs_graphics_painter_Shade(id$6, module$6, vbl$3, bgls$12[0], panelBgl$6, pl$6, false, dict$11, dict$12);
    var Bindable_this$4 = p$6.hW(floorForm, floorShade, "front", (void 0));
    var e1$proxy8 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var e2$proxy6 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", floorTex);
    var e3$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("reflTex", mirror.lc);
    var e4$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("res", canvasRes);
    var \u03b4scrutinee631 = e1$proxy8.s;
    var idx$3 = (Bindable_this$4.X.I.samp | 0);
    while (((Bindable_this$4.V.length | 0) <= idx$3)) {
      Bindable_this$4.V.push(null);
    }
    Bindable_this$4.V[idx$3] = \u03b4scrutinee631;
    var \u03b4scrutinee649 = e2$proxy6.s;
    var idx$4 = (Bindable_this$4.X.az.tex | 0);
    while (((Bindable_this$4.a8.length | 0) <= idx$4)) {
      Bindable_this$4.a8.push(null);
    }
    Bindable_this$4.a8[idx$4] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee649);
    var \u03b4scrutinee663 = e3$proxy2.s;
    var idx$5 = (Bindable_this$4.X.az.reflTex | 0);
    while (((Bindable_this$4.a8.length | 0) <= idx$5)) {
      Bindable_this$4.a8.push(null);
    }
    Bindable_this$4.a8[idx$5] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee663);
    var \u03b4scrutinee671 = e4$proxy1.s;
    var idx$6 = (Bindable_this$4.X.I.res | 0);
    while (((Bindable_this$4.V.length | 0) <= idx$6)) {
      Bindable_this$4.V.push(null);
    }
    Bindable_this$4.V[idx$6] = \u03b4scrutinee671;
    var ul$proxy4 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
    var uv$proxy4 = ul$proxy4.aq;
    var buffer$2 = new ArrayBuffer(64);
    var arr$proxy15 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
    var sceneVp = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy15.dv, 0), p$6.e, uv$proxy4);
    var clearColor$3 = $m_Ltrivalibs_graphics_math_cpu_Vec4$().oP().h(new $c_T4(0.5, 0.6, 0.7, 1.0));
    var shapes$3 = aboveGround.concat([Bindable_this$4]);
    var Panel_this = p$6.br((void 0), (void 0), clearColor$3, true, true, (void 0), (void 0), "rgba16float", (void 0), (void 0), shapes$3, (void 0), (void 0));
    var e1$proxy9 = new $c_Ltrivalibs_graphics_painter_BindPair("vp", sceneVp);
    var \u03b4scrutinee680 = e1$proxy9.s;
    var dict$proxy1 = Panel_this.hj;
    dict$proxy1.vp = \u03b4scrutinee680;
    var bloom = $m_Lsketchlib_utils_bloom_Bloom$().o4(p$6, Panel_this, 0.002, 1.0, 4.0, 5);
    var cam = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().nY(0.9, 1.0, 0.1, 100.0, 0.0, 0.0, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.7, 0.0));
    $m_Ltrivalibs_dev_devPreserve$().o5(cam, "camera");
    var input = $m_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$().oX(p$6.gA, true, 400.0, 5.0, true, (void 0));
    var controller = new $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController(cam, input, 2.0, 1.0);
    p$6.pM(new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((v1$2$3, v2$2) => {
      var w = (+v1$2$3);
      var h = (+v2$2);
      var aspect$2 = (w / h);
      var fov$1 = cam.gG;
      var near$1 = cam.gH;
      var far$1 = cam.gF;
      var rotH$2 = cam.aK;
      var rotV$2 = cam.bn;
      var pos$4 = cam.ar;
      cam.kg(fov$1, aspect$2, near$1, far$1, rotH$2, rotV$2, pos$4);
      var value$proxy15 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(w, h);
      canvasRes.K.D(canvasRes.k, value$proxy15);
      var $x_47 = canvasRes.J.queue;
      var $x_46 = canvasRes.H;
      var s$proxy11 = canvasRes.k;
      $x_47.writeBuffer($x_46, 0.0, s$proxy11.dv.buffer);
      mirror.q2(w, h);
    })));
    $m_Ltrivalibs_utils_animation_animate$package$().nX(((time, p$19) => ((arg1$2) => {
      var tpf = (+arg1$2);
      time.bk = (time.bk + tpf);
      $m_sjs_js_ArrayOps$().a4(sways, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((t) => ((sw$3) => {
        var pt = sw$3.gt;
        var $x_48 = sw$3.gs;
        var p$proxy3 = ((t * sw$3.gv) + sw$3.gu);
        var s$4 = ($x_48 * (+Math.sin(p$proxy3)));
        var BufferBinding_this = pt.gm;
        var value$proxy16 = $m_Ltrivalibs_graphics_math_cpu_Mat4$().ka($f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Z(), pt.gl, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Z(), $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().gk, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), s$4)), $m_Ltrivalibs_graphics_math_cpu_Quat$().k9(pt.gn), new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0));
        BufferBinding_this.K.D(BufferBinding_this.k, value$proxy16);
        var $x_50 = BufferBinding_this.J.queue;
        var $x_49 = BufferBinding_this.H;
        var s$proxy12 = BufferBinding_this.k;
        $x_50.writeBuffer($x_49, 0.0, s$proxy12.dv.buffer);
        var BufferBinding_this$3 = pt.fz;
        var value$proxy17 = new $c_Ltrivalibs_graphics_math_cpu_Vec4(pt.bl.fF, (pt.bl.fG - (s$4 / pt.gq)), pt.bl.fH, pt.bl.fE);
        BufferBinding_this$3.K.D(BufferBinding_this$3.k, value$proxy17);
        var $x_52 = BufferBinding_this$3.J.queue;
        var $x_51 = BufferBinding_this$3.H;
        var s$proxy13 = BufferBinding_this$3.k;
        $x_52.writeBuffer($x_51, 0.0, s$proxy13.dv.buffer);
      }))((time.bk / 1000.0))));
      $m_sjs_js_ArrayOps$().a4(animatedPanels, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$4$3) => {
        $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$19, _$4$3);
      })));
      input.hZ(tpf);
      controller.hZ(tpf);
      var vp = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().gN(), cam.iz, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), cam.nB());
      sceneVp.K.D(sceneVp.k, vp);
      var $x_54 = sceneVp.J.queue;
      var $x_53 = sceneVp.H;
      var s$proxy14 = sceneVp.k;
      $x_54.writeBuffer($x_53, 0.0, s$proxy14.dv.buffer);
      mirror.pP(vp);
      $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$19, Panel_this);
      bloom.pQ();
      p$19.qd(bloom.l6);
    }))(new $c_sr_DoubleRef(0.0), p$6));
  })));
});
var $d_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$ = new $TypeData().i($c_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$, "sketches.templates.rooms.gridcanvases.GridCanvases$package$", ({
  dw: 1
}));
var $n_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$;
function $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$() {
  if ((!$n_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$)) {
    $n_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$ = new $c_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$();
  }
  return $n_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$;
}
function $s_Lsketches_templates_rooms_gridcanvases_roomsGridCanvases__main__AT__V(args) {
  try {
    $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().q4();
  } catch (e) {
    if (false) {
      $m_s_util_CommandLineParser$().qe(e);
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
$p.n1 = (function(pos, octaves, freqMul, ampMul, seed) {
  var acc = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().p().h(0.0);
  var freq = 1.0;
  var amp = 1.0;
  var total = 0.0;
  var i = 0;
  while ((i < octaves)) {
    var $x_3 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
    var $x_2 = acc;
    var $x_1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
    var WgslFn$_this = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy1 = $m_Ltrivalibs_graphics_shader_lib_random_Simplex$().jU;
    var a1$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().mL($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().k5(pos, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().E(), freq), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().E(), seed);
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().iU(fn$proxy1);
    acc = $x_3.aC($x_2, $x_1.S($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((WgslFn$_this.iP(fn$proxy1) + "(") + a1$proxy1) + ")")), amp));
    total = (total + amp);
    freq = (freq * freqMul);
    amp = (amp * ampMul);
    i = ((1 + i) | 0);
  }
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().k4(acc, total);
});
var $d_Lsketchlib_shaders_Noise$ = new $TypeData().i($c_Lsketchlib_shaders_Noise$, "sketchlib.shaders.Noise$", ({
  dy: 1
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
  this.gZ = null;
  this.l2 = null;
  this.gZ = p;
  this.l2 = shade;
}
$p = $c_Lsketchlib_utils_bake_TextureBaker.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_bake_TextureBaker;
/** @constructor */
function $h_Lsketchlib_utils_bake_TextureBaker() {
}
$h_Lsketchlib_utils_bake_TextureBaker.prototype = $p;
$p.pV = (function(form, width, height, transform, format, mips) {
  var Painter_this = this.gZ;
  var value$proxy1 = ((transform === (void 0)) ? new $c_Ltrivalibs_graphics_math_cpu_Mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0) : transform);
  var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
  var uv$proxy1 = ul$proxy1.aq;
  var buffer = new ArrayBuffer(64);
  var arr$proxy1 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
  var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy1.dv, 0), Painter_this.e, uv$proxy1);
  b.K.D(b.k, value$proxy1);
  var $x_2 = b.J.queue;
  var $x_1 = b.H;
  var s$proxy1 = b.k;
  $x_2.writeBuffer($x_1, 0.0, s$proxy1.dv.buffer);
  var Bindable_this = this.gZ.hW(form, this.l2, "none", (void 0));
  var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("model", b);
  var \u03b4scrutinee4 = e1$proxy1.s;
  var idx = (Bindable_this.X.I.model | 0);
  while (((Bindable_this.V.length | 0) <= idx)) {
    Bindable_this.V.push(null);
  }
  Bindable_this.V[idx] = \u03b4scrutinee4;
  var format$1 = ((format === (void 0)) ? "rgba8unorm" : format);
  return this.gZ.br(width, height, (void 0), (void 0), (void 0), (void 0), mips, format$1, (void 0), Bindable_this, (void 0), (void 0), (void 0));
});
$p.k7 = (function(form, width, height, transform, format, mips) {
  var panel = this.pV(form, width, height, transform, format, mips);
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(this.gZ, panel);
  return panel;
});
var $d_Lsketchlib_utils_bake_TextureBaker = new $TypeData().i($c_Lsketchlib_utils_bake_TextureBaker, "sketchlib.utils.bake.TextureBaker", ({
  dz: 1
}));
function $p_Lsketchlib_utils_bake_TextureBaker$__buildVert__Ltrivalibs_graphics_shader_dsl_Program__V($thiz, program) {
  var d = ({});
  var ctx = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg;
  try {
    var uv = ctx.b9.j("uv");
    var AssignTarget_this = ctx.aX.a0("worldPos");
    var value$proxy2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gR($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().gP(ctx.fQ.j("model"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fV(), $m_Ltrivalibs_graphics_math_gpu_vec4$().an(ctx.b9.j("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().p().h(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ai(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$()));
    var x0 = (((("  " + AssignTarget_this.T) + " = ") + value$proxy2.d) + ";");
    var AssignTarget_this$2 = ctx.aX.a0("normal");
    var value$proxy3 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().pL($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gR($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().gP(ctx.fQ.j("model"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fV(), $m_Ltrivalibs_graphics_math_gpu_vec4$().an(ctx.b9.j("normal"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().p().h(0.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ai(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$())), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().E());
    var x1 = (((("  " + AssignTarget_this$2.T) + " = ") + value$proxy3.d) + ";");
    var AssignTarget_this$3 = ctx.aX.a0("uv");
    var x2 = (((("  " + AssignTarget_this$3.T) + " = ") + uv.d) + ";");
    var AssignTarget_this$4 = ctx.aX.hn;
    var $x_5 = $m_Ltrivalibs_graphics_math_gpu_vec4$();
    var $x_4 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$();
    var $x_3 = $m_Ltrivalibs_graphics_math_gpu_vec2$();
    var $x_2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().Y().G(uv);
    var e$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().Y().x(uv);
    var value$proxy4 = $x_5.aY($x_4.oH($x_3.an($x_2, $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().b0().b3((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aD(1.0)) + " - ") + e$proxy1.d) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().Y()), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().p().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().p().h(1.0));
    var $x_1 = $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs([x0, x1, x2, (((("  " + AssignTarget_this$4.T) + " = ") + value$proxy4.d) + ";")]), "", "\n", "");
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev;
  }
  program.b8 = $x_1;
  var array$1 = reg.a2;
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
$p.mQ = (function(p, frag) {
  var program = new $c_Ltrivalibs_graphics_shader_dsl_Program();
  $p_Lsketchlib_utils_bake_TextureBaker$__buildVert__Ltrivalibs_graphics_shader_dsl_Program__V(this, program);
  var d = ({});
  var ctx = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg;
  try {
    var AssignTarget_this = ctx.as.a0("color");
    var value$proxy5 = frag.mO(ctx.ag.j("worldPos"), ctx.ag.j("normal"), ctx.ag.j("uv"));
    var $x_1 = $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs([(((("  " + AssignTarget_this.T) + " = ") + value$proxy5.d) + ";")]), "", "\n", "");
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev;
  }
  program.aW = $x_1;
  var array$1 = reg.a2;
  var len = (array$1.length | 0);
  var i = 0;
  while ((i < len)) {
    $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$1[i]);
    i = ((1 + i) | 0);
  }
  var b = program.b8;
  var b$1 = program.aW;
  var helperFns$proxy1 = program.at();
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
  var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["model"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).bK.u()], []));
  var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.aa, sd.a9, fragBuiltinParams);
  var args$proxy1 = $m_sr_ScalaRunTime$().aw(new ($d_sjs_js_Any.r().C)([baseWgsl]));
  console.log(...$m_sjsr_Compat$().au(args$proxy1));
  var module = p.e.createShaderModule(({
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
    (result.push(p.e.createBindGroupLayout(({
      "entries": x0$2
    }))) | 0);
    i$4 = ((1 + i$4) | 0);
  }
  var \u03b42$___1 = result;
  var \u03b42$___2 = $m_Ltrivalibs_graphics_shader_layouts$().M(p.e, result);
  var bgls$2 = \u03b42$___1;
  var pl = $m_Ltrivalibs_graphics_shader_layouts$().M(p.e, bgls$2);
  return new $c_Lsketchlib_utils_bake_TextureBaker(p, new $c_Ltrivalibs_graphics_painter_Shade(id, module, vbl, bgls$2[0], null, pl, false, dict, dict$2));
});
$p.o2 = (function(p, frag) {
  var program = new $c_Ltrivalibs_graphics_shader_dsl_Program();
  $p_Lsketchlib_utils_bake_TextureBaker$__buildVert__Ltrivalibs_graphics_shader_dsl_Program__V(this, program);
  var d = ({});
  var ctx = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg;
  try {
    var $x_1 = frag.mN(ctx.ag.j("worldPos"), ctx.ag.j("normal"), ctx.ag.j("uv"), ctx.as.a0("color"));
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev;
  }
  program.aW = $x_1;
  var array = reg.a2;
  var len = (array.length | 0);
  var i = 0;
  while ((i < len)) {
    $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array[i]);
    i = ((1 + i) | 0);
  }
  var b = program.b8;
  var b$1 = program.aW;
  var helperFns$proxy2 = program.at();
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
  var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["model"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).bK.u()], []));
  var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.aa, sd.a9, fragBuiltinParams);
  var args$proxy2 = $m_sr_ScalaRunTime$().aw(new ($d_sjs_js_Any.r().C)([baseWgsl]));
  console.log(...$m_sjsr_Compat$().au(args$proxy2));
  var module = p.e.createShaderModule(({
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
    (result.push(p.e.createBindGroupLayout(({
      "entries": x0$1
    }))) | 0);
    i$4 = ((1 + i$4) | 0);
  }
  var \u03b42$___1 = result;
  var \u03b42$___2 = $m_Ltrivalibs_graphics_shader_layouts$().M(p.e, result);
  var bgls$2 = \u03b42$___1;
  var pl = $m_Ltrivalibs_graphics_shader_layouts$().M(p.e, bgls$2);
  return new $c_Lsketchlib_utils_bake_TextureBaker(p, new $c_Ltrivalibs_graphics_painter_Shade(id, module, vbl, bgls$2[0], null, pl, false, dict, dict$2));
});
$p.oa = (function(p, form, width, height, transform, format, mips, frag) {
  return $m_Lsketchlib_utils_bake_TextureBaker$().mQ(p, frag).k7(form, width, height, transform, format, mips);
});
$p.ob = (function(p, form, width, height, transform, format, mips, frag) {
  return $m_Lsketchlib_utils_bake_TextureBaker$().o2(p, frag).k7(form, width, height, transform, format, mips);
});
var $d_Lsketchlib_utils_bake_TextureBaker$ = new $TypeData().i($c_Lsketchlib_utils_bake_TextureBaker$, "sketchlib.utils.bake.TextureBaker$", ({
  dA: 1
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
$p.o4 = (function(p, scene, intensity, threshold, blurRadius, mipLevels) {
  if ((mipLevels < 2)) {
    var message$proxy1 = (("bloom mipLevels must be >= 2 (got " + mipLevels) + ")");
    throw new $c_sjs_js_JavaScriptException(Error(message$proxy1)).aF;
  }
  var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy1 = ul$proxy1.aq;
  var buffer = new ArrayBuffer(4);
  var arr$proxy1 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
  var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy1.dv, 0), p.e, uv$proxy1);
  b.K.D(b.k, blurRadius);
  var $x_2 = b.J.queue;
  var $x_1 = b.H;
  var s$proxy1 = b.k;
  $x_2.writeBuffer($x_1, 0.0, s$proxy1.dv.buffer);
  var ul$proxy2 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy2 = ul$proxy2.aq;
  var buffer$2 = new ArrayBuffer(4);
  var arr$proxy2 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
  var b$2 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy2.dv, 0), p.e, uv$proxy2);
  b$2.K.D(b$2.k, intensity);
  var $x_4 = b$2.J.queue;
  var $x_3 = b$2.H;
  var s$proxy2 = b$2.k;
  $x_4.writeBuffer($x_3, 0.0, s$proxy2.dv.buffer);
  var sampler = p.ke();
  var program = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  var d = ({});
  var ctx = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg;
  try {
    var color = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "color");
    var brightness = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "brightness");
    var x0 = color.a6($m_Ltrivalibs_graphics_math_gpu_expr$package$().iM($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "scene"), $m_Ltrivalibs_graphics_math_gpu_ivec2$().fT($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gO(ctx.gI))));
    var x1 = brightness.a6($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aC($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aC($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ai().G(color), 0.2126), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ai().x(color), 0.7152)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ai().ae(color), 0.0722)));
    var AssignTarget_this = ctx.as.a0("color");
    var value$proxy1 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().q8($m_Ltrivalibs_graphics_math_gpu_vec4$().o1($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().p().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().p().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().p().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().p().h(1.0)), color, $m_Ltrivalibs_graphics_math_gpu_expr$package$().oJ(brightness, ctx.P.j("threshold")));
    var $x_5 = $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs([x0, x1, (((("  " + AssignTarget_this.T) + " = ") + value$proxy1.d) + ";")]), "", "\n", "");
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev;
  }
  program.a3 = $x_5;
  var array$1 = reg.a2;
  var len = (array$1.length | 0);
  var i = 0;
  while ((i < len)) {
    $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$1[i]);
    i = ((1 + i) | 0);
  }
  var b$1 = program.a3;
  var helperFns$proxy1 = program.at();
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
  var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["threshold"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).R.u()], []));
  var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.aa, sd.a9, fragBuiltinParams);
  var wgsl = (baseWgsl + "\n\n@group(1) @binding(0) var scene: texture_2d<f32>;");
  var args$proxy1 = $m_sr_ScalaRunTime$().aw(new ($d_sjs_js_Any.r().C)([wgsl]));
  console.log(...$m_sjsr_Compat$().au(args$proxy1));
  var module = p.e.createShaderModule(({
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
    (result.push(p.e.createBindGroupLayout(({
      "entries": x0$2
    }))) | 0);
    i$3 = ((1 + i$3) | 0);
  }
  var \u03b46$___1 = result;
  var \u03b46$___2 = $m_Ltrivalibs_graphics_shader_layouts$().M(p.e, result);
  var bgls$2 = \u03b46$___1;
  var $x_8 = $m_sjs_js_ArrayOpsCommon$();
  var _2$1 = ({});
  var entries = $x_8.a([({
    "binding": 0,
    "visibility": 2,
    "texture": _2$1
  })], []);
  var panelBgl = p.e.createBindGroupLayout(({
    "entries": entries
  }));
  if ((panelBgl !== null)) {
    var other$proxy1 = [panelBgl];
    var allBgls = bgls$2.concat(other$proxy1);
  } else {
    var allBgls = bgls$2;
  }
  var pl = $m_Ltrivalibs_graphics_shader_layouts$().M(p.e, allBgls);
  var thresholdShade = new $c_Ltrivalibs_graphics_painter_Shade(id, module, null, bgls$2[0], panelBgl, pl, false, dict, dict$2);
  var program$2 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  var d$1 = ({});
  var ctx$1 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$1), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$1;
  try {
    var $x_10 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().bM();
    var AssignTarget_this$1 = ctx$1.as.a0("color");
    var WgslFn$_this = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy1 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$().ms;
    var a1$proxy1 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex");
    var a2$proxy1 = ctx$1.P.j("samp");
    var a3$proxy1 = ctx$1.ag.j("uv");
    var a4$proxy1 = ctx$1.P.j("blurRadius");
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().iU(fn$proxy1);
    var value$proxy2 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((((((WgslFn$_this.iP(fn$proxy1) + "(") + a1$proxy1) + ", ") + a2$proxy1) + ", ") + a3$proxy1) + ", ") + a4$proxy1) + ")"));
    var $x_9 = $x_10.h((((("  " + AssignTarget_this$1.T) + " = ") + value$proxy2.d) + ";"));
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$1;
  }
  program$2.a3 = $x_9;
  var array$16 = reg$1.a2;
  var len$2 = (array$16.length | 0);
  var i$4 = 0;
  while ((i$4 < len$2)) {
    $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program$2, array$16[i$4]);
    i$4 = ((1 + i$4) | 0);
  }
  var b$3 = program$2.a3;
  var helperFns$proxy2 = program$2.at();
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
  var groupDecls$2 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["blurRadius"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).R.u()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).R.u()], [])));
  var fragBuiltinParams$2 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$2 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$2, vertexInputStruct$2, vertexOutputStruct$2, fragmentOutputStruct$2, groupDecls$2, sd$2.aa, sd$2.a9, fragBuiltinParams$2);
  var wgsl$2 = (baseWgsl$2 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
  var args$proxy2 = $m_sr_ScalaRunTime$().aw(new ($d_sjs_js_Any.r().C)([wgsl$2]));
  console.log(...$m_sjsr_Compat$().au(args$proxy2));
  var module$2 = p.e.createShaderModule(({
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
    (result$2.push(p.e.createBindGroupLayout(({
      "entries": x0$4
    }))) | 0);
    i$5 = ((1 + i$5) | 0);
  }
  var \u03b46$$2___1 = result$2;
  var \u03b46$$2___2 = $m_Ltrivalibs_graphics_shader_layouts$().M(p.e, result$2);
  var bgls$4 = \u03b46$$2___1;
  var $x_14 = $m_sjs_js_ArrayOpsCommon$();
  var _2$4 = ({});
  var entries$2 = $x_14.a([({
    "binding": 0,
    "visibility": 2,
    "texture": _2$4
  })], []);
  var panelBgl$2 = p.e.createBindGroupLayout(({
    "entries": entries$2
  }));
  if ((panelBgl$2 !== null)) {
    var other$proxy2 = [panelBgl$2];
    var allBgls$2 = bgls$4.concat(other$proxy2);
  } else {
    var allBgls$2 = bgls$4;
  }
  var pl$2 = $m_Ltrivalibs_graphics_shader_layouts$().M(p.e, allBgls$2);
  var downsampleShade = new $c_Ltrivalibs_graphics_painter_Shade(id$2, module$2, null, bgls$4[0], panelBgl$2, pl$2, false, dict$3, dict$4);
  var program$3 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  var d$2 = ({});
  var ctx$2 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$2), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$2;
  try {
    var $x_16 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().bM();
    var AssignTarget_this$2 = ctx$2.as.a0("color");
    var WgslFn$_this$1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy2 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$().mu;
    var a1$proxy2 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex");
    var a2$proxy2 = ctx$2.P.j("samp");
    var a3$proxy2 = ctx$2.ag.j("uv");
    var a4$proxy2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S(ctx$2.P.j("blurRadius"), 0.5);
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().iU(fn$proxy2);
    var value$proxy3 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((((((WgslFn$_this$1.iP(fn$proxy2) + "(") + a1$proxy2) + ", ") + a2$proxy2) + ", ") + a3$proxy2) + ", ") + a4$proxy2) + ")"));
    var $x_15 = $x_16.h((((("  " + AssignTarget_this$2.T) + " = ") + value$proxy3.d) + ";"));
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$2;
  }
  program$3.a3 = $x_15;
  var array$35 = reg$2.a2;
  var len$4 = (array$35.length | 0);
  var i$6 = 0;
  while ((i$6 < len$4)) {
    $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program$3, array$35[i$6]);
    i$6 = ((1 + i$6) | 0);
  }
  var b$4 = program$3.a3;
  var helperFns$proxy3 = program$3.at();
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
  var groupDecls$3 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["blurRadius"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).R.u()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).R.u()], [])));
  var fragBuiltinParams$3 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$3 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$3, vertexInputStruct$3, vertexOutputStruct$3, fragmentOutputStruct$3, groupDecls$3, sd$3.aa, sd$3.a9, fragBuiltinParams$3);
  var wgsl$3 = (baseWgsl$3 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
  var args$proxy3 = $m_sr_ScalaRunTime$().aw(new ($d_sjs_js_Any.r().C)([wgsl$3]));
  console.log(...$m_sjsr_Compat$().au(args$proxy3));
  var module$3 = p.e.createShaderModule(({
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
    (result$3.push(p.e.createBindGroupLayout(({
      "entries": x0$6
    }))) | 0);
    i$7 = ((1 + i$7) | 0);
  }
  var \u03b46$$3___1 = result$3;
  var \u03b46$$3___2 = $m_Ltrivalibs_graphics_shader_layouts$().M(p.e, result$3);
  var bgls$6 = \u03b46$$3___1;
  var $x_20 = $m_sjs_js_ArrayOpsCommon$();
  var _2$7 = ({});
  var entries$3 = $x_20.a([({
    "binding": 0,
    "visibility": 2,
    "texture": _2$7
  })], []);
  var panelBgl$3 = p.e.createBindGroupLayout(({
    "entries": entries$3
  }));
  if ((panelBgl$3 !== null)) {
    var other$proxy3 = [panelBgl$3];
    var allBgls$3 = bgls$6.concat(other$proxy3);
  } else {
    var allBgls$3 = bgls$6;
  }
  var pl$3 = $m_Ltrivalibs_graphics_shader_layouts$().M(p.e, allBgls$3);
  var upsampleShade = new $c_Ltrivalibs_graphics_painter_Shade(id$3, module$3, null, bgls$6[0], panelBgl$3, pl$3, false, dict$5, dict$6);
  var layers = [];
  var Bindable_this = p.bd(thresholdShade, (void 0), (void 0), (void 0));
  var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("scene", scene);
  var e2$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("threshold", threshold);
  var \u03b4scrutinee197 = e1$proxy1.s;
  var idx = (Bindable_this.w.az.scene | 0);
  while (((Bindable_this.Q.length | 0) <= idx)) {
    Bindable_this.Q.push(null);
  }
  Bindable_this.Q[idx] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee197);
  Bindable_this.O = null;
  var \u03b4scrutinee201 = (+e2$proxy1.s);
  var idx$2 = (Bindable_this.w.I.threshold | 0);
  if (((idx$2 < (Bindable_this.i.length | 0)) && (Bindable_this.i[idx$2] !== null))) {
    var BufferBinding_this$5 = Bindable_this.i[idx$2];
    BufferBinding_this$5.K.D(BufferBinding_this$5.k, \u03b4scrutinee201);
    var $x_22 = BufferBinding_this$5.J.queue;
    var $x_21 = BufferBinding_this$5.H;
    var s$proxy5 = BufferBinding_this$5.k;
    $x_22.writeBuffer($x_21, 0.0, s$proxy5.dv.buffer);
  } else {
    var uv$2 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
    var device$proxy1 = Bindable_this.ha.e;
    var buffer$3 = new ArrayBuffer(4);
    var arr$proxy3 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$3), 1);
    var b$3$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy3.dv, 0), device$proxy1, uv$2);
    b$3$1.K.D(b$3$1.k, \u03b4scrutinee201);
    var $x_24 = b$3$1.J.queue;
    var $x_23 = b$3$1.H;
    var s$proxy6 = b$3$1.k;
    $x_24.writeBuffer($x_23, 0.0, s$proxy6.dv.buffer);
    while (((Bindable_this.i.length | 0) <= idx$2)) {
      Bindable_this.i.push(null);
    }
    Bindable_this.i[idx$2] = b$3$1;
  }
  Bindable_this.O = null;
  layers.push(Bindable_this);
  var di = 0;
  while ((di < ((mipLevels - 1) | 0))) {
    var mipSource$1 = di;
    var mipTarget$1 = ((1 + di) | 0);
    var Bindable_this$5 = p.bd(downsampleShade, (void 0), mipSource$1, mipTarget$1);
    var e1$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("blurRadius", b);
    var e2$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var \u03b4scrutinee212 = e1$proxy2.s;
    var idx$3 = (Bindable_this$5.w.I.blurRadius | 0);
    while (((Bindable_this$5.i.length | 0) <= idx$3)) {
      Bindable_this$5.i.push(null);
    }
    Bindable_this$5.i[idx$3] = \u03b4scrutinee212;
    Bindable_this$5.O = null;
    var \u03b4scrutinee224 = e2$proxy2.s;
    var idx$4 = (Bindable_this$5.w.I.samp | 0);
    while (((Bindable_this$5.i.length | 0) <= idx$4)) {
      Bindable_this$5.i.push(null);
    }
    Bindable_this$5.i[idx$4] = \u03b4scrutinee224;
    Bindable_this$5.O = null;
    layers.push(Bindable_this$5);
    di = ((1 + di) | 0);
  }
  var ui = ((mipLevels - 2) | 0);
  while ((ui >= 0)) {
    var Bindable_this$8 = p.bd(upsampleShade, $m_Ltrivalibs_graphics_painter_BlendState$().lX, ((1 + ui) | 0), ui);
    var e1$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("blurRadius", b);
    var e2$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var \u03b4scrutinee234 = e1$proxy3.s;
    var idx$5 = (Bindable_this$8.w.I.blurRadius | 0);
    while (((Bindable_this$8.i.length | 0) <= idx$5)) {
      Bindable_this$8.i.push(null);
    }
    Bindable_this$8.i[idx$5] = \u03b4scrutinee234;
    Bindable_this$8.O = null;
    var \u03b4scrutinee246 = e2$proxy3.s;
    var idx$6 = (Bindable_this$8.w.I.samp | 0);
    while (((Bindable_this$8.i.length | 0) <= idx$6)) {
      Bindable_this$8.i.push(null);
    }
    Bindable_this$8.i[idx$6] = \u03b4scrutinee246;
    Bindable_this$8.O = null;
    layers.push(Bindable_this$8);
    ui = ((ui - 1) | 0);
  }
  var bloomP = p.br((void 0), (void 0), (void 0), (void 0), (void 0), mipLevels, (void 0), "rgba16float", (void 0), (void 0), (void 0), (void 0), layers);
  var program$4 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  var d$3 = ({});
  var ctx$3 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$3), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg$3 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev$3 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$3;
  try {
    var coord = $m_Ltrivalibs_graphics_math_gpu_ivec2$().fT($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gO(ctx$3.gI));
    var $x_26 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().bM();
    var AssignTarget_this$3 = ctx$3.as.a0("color");
    var value$proxy4 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().nW($m_Ltrivalibs_graphics_math_gpu_expr$package$().iM($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "scene"), coord), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ai(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().pH($m_Ltrivalibs_graphics_math_gpu_expr$package$().iM($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "bloom"), coord), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ai(), ctx$3.P.j("intensity")));
    var $x_25 = $x_26.h((((("  " + AssignTarget_this$3.T) + " = ") + value$proxy4.d) + ";"));
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$3;
  }
  program$4.a3 = $x_25;
  var array$54 = reg$3.a2;
  var len$6 = (array$54.length | 0);
  var i$8 = 0;
  while ((i$8 < len$6)) {
    $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program$4, array$54[i$8]);
    i$8 = ((1 + i$8) | 0);
  }
  var b$5 = program$4.a3;
  var helperFns$proxy4 = program$4.at();
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
  var groupDecls$4 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["intensity"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).R.u()], []));
  var fragBuiltinParams$4 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$4 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$4, vertexInputStruct$4, vertexOutputStruct$4, fragmentOutputStruct$4, groupDecls$4, sd$4.aa, sd$4.a9, fragBuiltinParams$4);
  var wgsl$4 = (baseWgsl$4 + "\n\n@group(1) @binding(0) var scene: texture_2d<f32>;\n@group(1) @binding(1) var bloom: texture_2d<f32>;");
  var args$proxy4 = $m_sr_ScalaRunTime$().aw(new ($d_sjs_js_Any.r().C)([wgsl$4]));
  console.log(...$m_sjsr_Compat$().au(args$proxy4));
  var module$4 = p.e.createShaderModule(({
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
    (result$4.push(p.e.createBindGroupLayout(({
      "entries": x0$8
    }))) | 0);
    i$9 = ((1 + i$9) | 0);
  }
  var \u03b46$$4___1 = result$4;
  var \u03b46$$4___2 = $m_Ltrivalibs_graphics_shader_layouts$().M(p.e, result$4);
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
  var panelBgl$4 = p.e.createBindGroupLayout(({
    "entries": entries$4
  }));
  if ((panelBgl$4 !== null)) {
    var other$proxy4 = [panelBgl$4];
    var allBgls$4 = bgls$8.concat(other$proxy4);
  } else {
    var allBgls$4 = bgls$8;
  }
  var pl$4 = $m_Ltrivalibs_graphics_shader_layouts$().M(p.e, allBgls$4);
  var compositeShade = new $c_Ltrivalibs_graphics_painter_Shade(id$4, module$4, null, bgls$8[0], panelBgl$4, pl$4, false, dict$7, dict$8);
  var Bindable_this$11 = p.bd(compositeShade, (void 0), (void 0), (void 0));
  var e1$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("scene", scene);
  var e2$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("bloom", bloomP);
  var e3$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("intensity", b$2);
  var \u03b4scrutinee325 = e1$proxy4.s;
  var idx$7 = (Bindable_this$11.w.az.scene | 0);
  while (((Bindable_this$11.Q.length | 0) <= idx$7)) {
    Bindable_this$11.Q.push(null);
  }
  Bindable_this$11.Q[idx$7] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee325);
  Bindable_this$11.O = null;
  var \u03b4scrutinee335 = e2$proxy4.s;
  var idx$8 = (Bindable_this$11.w.az.bloom | 0);
  while (((Bindable_this$11.Q.length | 0) <= idx$8)) {
    Bindable_this$11.Q.push(null);
  }
  Bindable_this$11.Q[idx$8] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee335);
  Bindable_this$11.O = null;
  var \u03b4scrutinee339 = e3$proxy1.s;
  var idx$9 = (Bindable_this$11.w.I.intensity | 0);
  while (((Bindable_this$11.i.length | 0) <= idx$9)) {
    Bindable_this$11.i.push(null);
  }
  Bindable_this$11.i[idx$9] = \u03b4scrutinee339;
  Bindable_this$11.O = null;
  return new $c_Lsketchlib_utils_bloom_Bloom$$anon$1(bloomP, p.br((void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), Bindable_this$11, (void 0)), p, b, b$2);
});
var $d_Lsketchlib_utils_bloom_Bloom$ = new $TypeData().i($c_Lsketchlib_utils_bloom_Bloom$, "sketchlib.utils.bloom.Bloom$", ({
  dC: 1
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
      var uv = ctx$2.ag.j("uv");
      var a = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "a");
      var dist = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "dist");
      var $x_3 = $m_sjsr_package$();
      var Vec4BaseG_this = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ai();
      var v$proxy2 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().nv($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex"), uv, ctx$2.P.j("samp"));
      var $x_2 = a.a6(Vec4BaseG_this.av(v$proxy2));
      var $x_1 = dist.a6($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aC($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bb($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bb($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bb(a, ctx$2.P.j("blurStrength")), ctx$2.P.j("visHeight")), ctx$2.P.j("passScale")), ctx$2.P.j("strengthOffset")));
      var AssignTarget_this = ctx$2.as.a0("color");
      var WgslFn$_this = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
      var fn$proxy1 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$().mt;
      var a1$proxy1 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex");
      var a2$proxy1 = ctx$2.P.j("samp");
      var a4$proxy1 = ctx$2.P.j("res");
      var a5$proxy1 = (vertical ? $m_Ltrivalibs_graphics_math_gpu_vec2$().an($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().p().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bb(dist, ctx$2.P.j("ratioVertical"))) : $m_Ltrivalibs_graphics_math_gpu_vec2$().an(dist, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().p().h(0.0)));
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().iU(fn$proxy1);
      var value$proxy4 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((((((((WgslFn$_this.iP(fn$proxy1) + "(") + a1$proxy1) + ", ") + a2$proxy1) + ", ") + uv) + ", ") + a4$proxy1) + ", ") + a5$proxy1) + ")"));
      return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_3.f(new ($d_T.r().C)([$x_2, $x_1, (((("  " + AssignTarget_this.T) + " = ") + value$proxy4.d) + ";")]))), "", "\n", "");
    }));
    var d = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
    var ctx = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg;
    try {
      var $x_4 = body$proxy3.h(ctx);
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev;
    }
    program$3.a3 = $x_4;
    $m_sjs_js_ArrayOps$().a4(reg.a2, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$5) => ((data$3) => {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$5, data$3);
    }))(program$3)));
  }));
  var program = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  build$proxy2.h(program);
  var b = program.a3;
  var helperFns$proxy2 = program.at();
  var id = p$1.q;
  p$1.q = ((1 + p$1.q) | 0);
  var names = $m_sjs_js_ArrayOpsCommon$().a(["blurStrength"], $m_sjs_js_ArrayOpsCommon$().a(["ratioVertical"], $m_sjs_js_ArrayOpsCommon$().a(["strengthOffset"], $m_sjs_js_ArrayOpsCommon$().a(["passScale"], $m_sjs_js_ArrayOpsCommon$().a(["res"], $m_sjs_js_ArrayOpsCommon$().a(["visHeight"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])))))));
  var dict = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
  var i = 0;
  while ((i < (names.length | 0))) {
    dict[names[i]] = i;
    i = ((1 + i) | 0);
  }
  var names$2 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], []);
  var dict$2 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
  var i$2 = 0;
  while ((i$2 < (names$2.length | 0))) {
    dict$2[names$2[i$2]] = i$2;
    i$2 = ((1 + i$2) | 0);
  }
  var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b, helperFns$proxy2);
  var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["blurStrength"], $m_sjs_js_ArrayOpsCommon$().a(["ratioVertical"], $m_sjs_js_ArrayOpsCommon$().a(["strengthOffset"], $m_sjs_js_ArrayOpsCommon$().a(["passScale"], $m_sjs_js_ArrayOpsCommon$().a(["res"], $m_sjs_js_ArrayOpsCommon$().a(["visHeight"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []))))))), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).R.u()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).R.u()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).R.u()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).R.u()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$()).R.u()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).R.u()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).R.u()], []))))))));
  var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.aa, sd.a9, fragBuiltinParams);
  var wgsl = (baseWgsl + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
  var args$proxy2 = $m_sr_ScalaRunTime$().aw(new ($d_sjs_js_Any.r().C)([wgsl]));
  console.log(...$m_sjsr_Compat$().au(args$proxy2));
  var module = p$1.e.createShaderModule($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("code", wgsl)])))));
  var descriptors = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 2), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 3), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 4), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 5), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 6), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([])))))]))))], [])))))))], []);
  var result = [];
  $m_sjs_js_ArrayOps$().a4(descriptors, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((entries$2) => (result.push(p$1.e.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("entries", entries$2)])))))) | 0))));
  var x4 = new $c_T2(result, $m_Ltrivalibs_graphics_shader_layouts$().M(p$1.e, result));
  var \u03b46$ = x4;
  var bgls$2 = \u03b46$.a1;
  var entries = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([])))))]))))], []);
  var panelBgl = p$1.e.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("entries", entries)])))));
  if ((panelBgl !== null)) {
    var other$proxy2 = [panelBgl];
    var allBgls = bgls$2.concat(other$proxy2);
  } else {
    var allBgls = bgls$2;
  }
  var pl = $m_Ltrivalibs_graphics_shader_layouts$().M(p$1.e, allBgls);
  return new $c_Ltrivalibs_graphics_painter_Shade(id, module, null, bgls$2[0], panelBgl, pl, false, dict, dict$2);
}
function $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$__blurLayer$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_painter_GPUSampler__Ltrivalibs_graphics_painter_Shade__D__Ltrivalibs_graphics_painter_Layer($thiz, p$2, uBlurStrength$1, uRatioVertical$1, uStrengthOffset$1, uRes$1, uVisHeight$1, sampler$1, shade, passScale) {
  var Bindable_this = p$2.bd(shade, (void 0), (void 0), (void 0));
  var e1$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("blurStrength", uBlurStrength$1);
  var e2$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("ratioVertical", uRatioVertical$1);
  var e3$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("strengthOffset", uStrengthOffset$1);
  var e4$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("passScale", passScale);
  var e5$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("res", uRes$1);
  var e6$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("visHeight", uVisHeight$1);
  var e7$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler$1);
  var \u03b4scrutinee190 = e1$proxy2.s;
  var idx = (Bindable_this.w.I.blurStrength | 0);
  while (((Bindable_this.i.length | 0) <= idx)) {
    Bindable_this.i.push(null);
  }
  Bindable_this.i[idx] = \u03b4scrutinee190;
  Bindable_this.O = null;
  var \u03b4scrutinee202 = e2$proxy2.s;
  var idx$2 = (Bindable_this.w.I.ratioVertical | 0);
  while (((Bindable_this.i.length | 0) <= idx$2)) {
    Bindable_this.i.push(null);
  }
  Bindable_this.i[idx$2] = \u03b4scrutinee202;
  Bindable_this.O = null;
  var \u03b4scrutinee218 = e3$proxy2.s;
  var idx$3 = (Bindable_this.w.I.strengthOffset | 0);
  while (((Bindable_this.i.length | 0) <= idx$3)) {
    Bindable_this.i.push(null);
  }
  Bindable_this.i[idx$3] = \u03b4scrutinee218;
  Bindable_this.O = null;
  var \u03b4scrutinee238 = (+e4$proxy1.s);
  var idx$4 = (Bindable_this.w.I.passScale | 0);
  if (((idx$4 < (Bindable_this.i.length | 0)) && (Bindable_this.i[idx$4] !== null))) {
    var BufferBinding_this = Bindable_this.i[idx$4];
    BufferBinding_this.K.D(BufferBinding_this.k, \u03b4scrutinee238);
    var $x_2 = BufferBinding_this.J.queue;
    var $x_1 = BufferBinding_this.H;
    var s$proxy7 = BufferBinding_this.k;
    $x_2.writeBuffer($x_1, 0.0, s$proxy7.dv.buffer);
  } else {
    var uv = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
    var device$proxy1 = Bindable_this.ha.e;
    var buffer = new ArrayBuffer(4);
    var arr$proxy9 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
    var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy9.dv, 0), device$proxy1, uv);
    b.K.D(b.k, \u03b4scrutinee238);
    var $x_4 = b.J.queue;
    var $x_3 = b.H;
    var s$proxy8 = b.k;
    $x_4.writeBuffer($x_3, 0.0, s$proxy8.dv.buffer);
    while (((Bindable_this.i.length | 0) <= idx$4)) {
      Bindable_this.i.push(null);
    }
    Bindable_this.i[idx$4] = b;
  }
  Bindable_this.O = null;
  var \u03b4scrutinee263 = e5$proxy1.s;
  var idx$5 = (Bindable_this.w.I.res | 0);
  while (((Bindable_this.i.length | 0) <= idx$5)) {
    Bindable_this.i.push(null);
  }
  Bindable_this.i[idx$5] = \u03b4scrutinee263;
  Bindable_this.O = null;
  var \u03b4scrutinee289 = e6$proxy1.s;
  var idx$6 = (Bindable_this.w.I.visHeight | 0);
  while (((Bindable_this.i.length | 0) <= idx$6)) {
    Bindable_this.i.push(null);
  }
  Bindable_this.i[idx$6] = \u03b4scrutinee289;
  Bindable_this.O = null;
  var \u03b4scrutinee321 = e7$proxy1.s;
  var idx$7 = (Bindable_this.w.I.samp | 0);
  while (((Bindable_this.i.length | 0) <= idx$7)) {
    Bindable_this.i.push(null);
  }
  Bindable_this.i[idx$7] = \u03b4scrutinee321;
  Bindable_this.O = null;
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
$p.o3 = (function(p, shapes, vpName, alphaScale, camera, mirror, blurStrength, blurRatioVertical, strengthOffset, scaleFactor, resolutionScale, overscan, clearColor) {
  if (((scaleFactor <= 0.0) || (scaleFactor >= 1.0))) {
    var message$proxy1 = (("GaussianMirrorReflection scaleFactor must be in (0, 1) " + ("(got " + scaleFactor)) + ")");
    throw new $c_sjs_js_JavaScriptException(Error(message$proxy1)).aF;
  }
  if ((resolutionScale <= 0.0)) {
    var message$proxy2 = (("GaussianMirrorReflection resolutionScale must be > 0 " + ("(got " + resolutionScale)) + ")");
    throw new $c_sjs_js_JavaScriptException(Error(message$proxy2)).aF;
  }
  if ((overscan < 0.0)) {
    var message$proxy3 = (("GaussianMirrorReflection overscan must be >= 0 (got " + overscan) + ")");
    throw new $c_sjs_js_JavaScriptException(Error(message$proxy3)).aF;
  }
  var p$proxy1 = (1.0 / (1.0 - (scaleFactor * scaleFactor)));
  var cascadeGain = (+Math.sqrt(p$proxy1));
  var sigmaPerDir = (1.64 * cascadeGain);
  var strengthScale = (0.01 / sigmaPerDir);
  var reflMat = mirror.pX();
  var pn = mirror.h6;
  var pd = mirror.h5;
  var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
  var uv$proxy1 = ul$proxy1.aq;
  var buffer = new ArrayBuffer(64);
  var arr$proxy1 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
  var uVp = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy1.dv, 0), p.e, uv$proxy1);
  var ul$proxy2 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
  var uv$proxy2 = ul$proxy2.aq;
  var buffer$2 = new ArrayBuffer(64);
  var arr$proxy2 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
  var uInvVp = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy2.dv, 0), p.e, uv$proxy2);
  var value$proxy1 = (blurStrength * strengthScale);
  var ul$proxy3 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy3 = ul$proxy3.aq;
  var buffer$3 = new ArrayBuffer(4);
  var arr$proxy3 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$3), 1);
  var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy3.dv, 0), p.e, uv$proxy3);
  b.K.D(b.k, value$proxy1);
  var $x_2 = b.J.queue;
  var $x_1 = b.H;
  var s$proxy1 = b.k;
  $x_2.writeBuffer($x_1, 0.0, s$proxy1.dv.buffer);
  var ul$proxy4 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy4 = ul$proxy4.aq;
  var buffer$4 = new ArrayBuffer(4);
  var arr$proxy4 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$4), 1);
  var b$2 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy4.dv, 0), p.e, uv$proxy4);
  b$2.K.D(b$2.k, blurRatioVertical);
  var $x_4 = b$2.J.queue;
  var $x_3 = b$2.H;
  var s$proxy2 = b$2.k;
  $x_4.writeBuffer($x_3, 0.0, s$proxy2.dv.buffer);
  var ul$proxy5 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy5 = ul$proxy5.aq;
  var buffer$5 = new ArrayBuffer(4);
  var arr$proxy5 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$5), 1);
  var b$3 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy5.dv, 0), p.e, uv$proxy5);
  b$3.K.D(b$3.k, strengthOffset);
  var $x_6 = b$3.J.queue;
  var $x_5 = b$3.H;
  var s$proxy3 = b$3.k;
  $x_6.writeBuffer($x_5, 0.0, s$proxy3.dv.buffer);
  var ul$proxy6 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$());
  var uv$proxy6 = ul$proxy6.aq;
  var buffer$6 = new ArrayBuffer(8);
  var arr$proxy6 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$6), 1);
  var uRes = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy6.dv, 0), p.e, uv$proxy6);
  var ul$proxy7 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy7 = ul$proxy7.aq;
  var buffer$7 = new ArrayBuffer(4);
  var arr$proxy7 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$7), 1);
  var b$4 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy7.dv, 0), p.e, uv$proxy7);
  b$4.K.D(b$4.k, 0.0);
  var $x_8 = b$4.J.queue;
  var $x_7 = b$4.H;
  var s$proxy4 = b$4.k;
  $x_8.writeBuffer($x_7, 0.0, s$proxy4.dv.buffer);
  var value$proxy2 = new $c_Ltrivalibs_graphics_math_cpu_Vec4(1.0, 1.0, 0.0, 0.0);
  var ul$proxy8 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$());
  var uv$proxy8 = ul$proxy8.aq;
  var buffer$8 = new ArrayBuffer(16);
  var arr$proxy8 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$8), 1);
  var b$5 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy8.dv, 0), p.e, uv$proxy8);
  b$5.K.D(b$5.k, value$proxy2);
  var $x_10 = b$5.J.queue;
  var $x_9 = b$5.H;
  var s$proxy5 = b$5.k;
  $x_10.writeBuffer($x_9, 0.0, s$proxy5.dv.buffer);
  var sampler = p.ke();
  var mirrorPanel = p.br((void 0), (void 0), clearColor, true, true, (void 0), (void 0), "rgba16float", (void 0), (void 0), shapes, (void 0), (void 0));
  var dict$proxy1 = mirrorPanel.hj;
  dict$proxy1[vpName] = uVp;
  var program = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  var d = ({});
  var ctx = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg;
  try {
    var uv$8 = ctx.ag.j("uv");
    var d$1 = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "d");
    var ndc = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "ndc");
    var worldH = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "worldH");
    var worldPos = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "worldPos");
    var t = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "t");
    var x0 = d$1.a6($m_Ltrivalibs_graphics_math_gpu_expr$package$().op($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "depth"), $m_Ltrivalibs_graphics_math_gpu_ivec2$().fT($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gO(ctx.gI))));
    var $x_13 = $m_Ltrivalibs_graphics_math_gpu_vec3$();
    var $x_12 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().mK($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().Y().G(uv$8), 2.0), 1.0);
    var e$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().Y().x(uv$8), 2.0);
    var x1 = ndc.a6($x_13.aY($x_12, $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().b0().b3((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aD(1.0)) + " - ") + e$proxy1.d) + ")")), d$1));
    var x2 = worldH.a6($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().gP(ctx.P.j("invVp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fV(), $m_Ltrivalibs_graphics_math_gpu_vec4$().an(ndc, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().p().h(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ai(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$()));
    var x3 = worldPos.a6($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().os($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gR(worldH), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().E(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ai().av(worldH)));
    var x4 = t.a6($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().oj($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().k4($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().mK($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().E().mY($m_Ltrivalibs_graphics_math_gpu_vec3$().aY($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().p().h(pn.y), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().p().h(pn.A), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().p().h(pn.z)), worldPos), pd), alphaScale)));
    var AssignTarget_this = ctx.as.a0("color");
    var value$proxy3 = $m_Ltrivalibs_graphics_math_gpu_vec4$().an($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gR($m_Ltrivalibs_graphics_math_gpu_expr$package$().iM($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "col"), $m_Ltrivalibs_graphics_math_gpu_ivec2$().fT($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gO(ctx.gI)))), t);
    var $x_11 = $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs([x0, x1, x2, x3, x4, (((("  " + AssignTarget_this.T) + " = ") + value$proxy3.d) + ";")]), "", "\n", "");
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev;
  }
  program.a3 = $x_11;
  var array$1 = reg.a2;
  var len = (array$1.length | 0);
  var i = 0;
  while ((i < len)) {
    $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$1[i]);
    i = ((1 + i) | 0);
  }
  var b$1 = program.a3;
  var helperFns$proxy1 = program.at();
  var id = p.q;
  p.q = ((1 + p.q) | 0);
  var names = $m_sjs_js_ArrayOpsCommon$().a(["invVp"], []);
  var dict = ({});
  var i$1 = 0;
  while ((i$1 < (names.length | 0))) {
    dict[names[i$1]] = i$1;
    i$1 = ((1 + i$1) | 0);
  }
  var names$2 = $m_sjs_js_ArrayOpsCommon$().a(["col"], $m_sjs_js_ArrayOpsCommon$().a(["depth"], []));
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
  var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["invVp"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).R.u()], []));
  var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.aa, sd.a9, fragBuiltinParams);
  var wgsl = (baseWgsl + "\n\n@group(1) @binding(0) var col: texture_2d<f32>;\n@group(1) @binding(1) var depth: texture_depth_2d;");
  var args$proxy1 = $m_sr_ScalaRunTime$().aw(new ($d_sjs_js_Any.r().C)([wgsl]));
  console.log(...$m_sjsr_Compat$().au(args$proxy1));
  var module = p.e.createShaderModule(({
    "code": wgsl
  }));
  var $x_15 = $m_sjs_js_ArrayOpsCommon$();
  var $x_14 = $m_sjs_js_ArrayOpsCommon$();
  var _2 = ({
    "type": "uniform"
  });
  var descriptors = $x_15.a([$x_14.a([({
    "binding": 0,
    "visibility": 2,
    "buffer": _2
  })], [])], []);
  var result = [];
  var len$1 = (descriptors.length | 0);
  var i$3 = 0;
  while ((i$3 < len$1)) {
    var x0$2 = descriptors[i$3];
    (result.push(p.e.createBindGroupLayout(({
      "entries": x0$2
    }))) | 0);
    i$3 = ((1 + i$3) | 0);
  }
  var \u03b46$___1 = result;
  var \u03b46$___2 = $m_Ltrivalibs_graphics_shader_layouts$().M(p.e, result);
  var bgls$2 = \u03b46$___1;
  var $x_17 = $m_sjs_js_ArrayOpsCommon$();
  var _2$1 = ({});
  var $x_16 = $m_sjs_js_ArrayOpsCommon$();
  var _2$2 = ({
    "sampleType": "depth"
  });
  var entries = $x_17.a([({
    "binding": 0,
    "visibility": 2,
    "texture": _2$1
  })], $x_16.a([({
    "binding": 1,
    "visibility": 2,
    "texture": _2$2
  })], []));
  var panelBgl = p.e.createBindGroupLayout(({
    "entries": entries
  }));
  if ((panelBgl !== null)) {
    var other$proxy1 = [panelBgl];
    var allBgls = bgls$2.concat(other$proxy1);
  } else {
    var allBgls = bgls$2;
  }
  var pl = $m_Ltrivalibs_graphics_shader_layouts$().M(p.e, allBgls);
  var bakeShade = new $c_Ltrivalibs_graphics_painter_Shade(id, module, null, bgls$2[0], panelBgl, pl, false, dict, dict$2);
  var blurShadeH = $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$__blurShade$1__Ltrivalibs_graphics_painter_Painter__Z__Ltrivalibs_graphics_painter_Shade(this, p, false);
  var blurShadeV = $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$__blurShade$1__Ltrivalibs_graphics_painter_Painter__Z__Ltrivalibs_graphics_painter_Shade(this, p, true);
  var Bindable_this = p.bd(bakeShade, (void 0), (void 0), (void 0));
  var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("col", mirrorPanel);
  var e2$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("depth", mirrorPanel.od(0, (-1), true));
  var e3$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("invVp", uInvVp);
  var \u03b4scrutinee168 = e1$proxy1.s;
  var idx = (Bindable_this.w.az.col | 0);
  while (((Bindable_this.Q.length | 0) <= idx)) {
    Bindable_this.Q.push(null);
  }
  Bindable_this.Q[idx] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee168);
  Bindable_this.O = null;
  var \u03b4scrutinee178 = e2$proxy1.s;
  var idx$2 = (Bindable_this.w.az.depth | 0);
  while (((Bindable_this.Q.length | 0) <= idx$2)) {
    Bindable_this.Q.push(null);
  }
  Bindable_this.Q[idx$2] = \u03b4scrutinee178;
  Bindable_this.O = null;
  var \u03b4scrutinee182 = e3$proxy1.s;
  var idx$3 = (Bindable_this.w.I.invVp | 0);
  while (((Bindable_this.i.length | 0) <= idx$3)) {
    Bindable_this.i.push(null);
  }
  Bindable_this.i[idx$3] = \u03b4scrutinee182;
  Bindable_this.O = null;
  var pairCache = [];
  var cachedScale = new $c_sr_DoubleRef(1.0);
  var blurPanel = p.br((void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), "rgba16float", (void 0), (void 0), (void 0), (void 0), (void 0));
  var program$2 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  var d$2 = ({});
  var ctx$1 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$2), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$1;
  try {
    var $x_19 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().bM();
    var AssignTarget_this$1 = ctx$1.as.a0("color");
    var value$proxy6 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().nv($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().nV($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().pI(ctx$1.ag.j("uv"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().Y(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gO(ctx$1.P.j("crop"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().Y(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().qG(ctx$1.P.j("crop"))), ctx$1.P.j("samp"));
    var $x_18 = $x_19.h((((("  " + AssignTarget_this$1.T) + " = ") + value$proxy6.d) + ";"));
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$1;
  }
  program$2.a3 = $x_18;
  var array$18 = reg$1.a2;
  var len$2 = (array$18.length | 0);
  var i$4 = 0;
  while ((i$4 < len$2)) {
    $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program$2, array$18[i$4]);
    i$4 = ((1 + i$4) | 0);
  }
  var b$6 = program$2.a3;
  var helperFns$proxy3 = program$2.at();
  var id$2 = p.q;
  p.q = ((1 + p.q) | 0);
  var names$4 = $m_sjs_js_ArrayOpsCommon$().a(["crop"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []));
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
  var sd$2 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$6, helperFns$proxy3);
  var vertexInputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls$2 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["crop"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$()).R.u()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).R.u()], [])));
  var fragBuiltinParams$2 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$2 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$2, vertexInputStruct$2, vertexOutputStruct$2, fragmentOutputStruct$2, groupDecls$2, sd$2.aa, sd$2.a9, fragBuiltinParams$2);
  var wgsl$2 = (baseWgsl$2 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
  var args$proxy3 = $m_sr_ScalaRunTime$().aw(new ($d_sjs_js_Any.r().C)([wgsl$2]));
  console.log(...$m_sjsr_Compat$().au(args$proxy3));
  var module$2 = p.e.createShaderModule(({
    "code": wgsl$2
  }));
  var $x_22 = $m_sjs_js_ArrayOpsCommon$();
  var $x_21 = $m_sjs_js_ArrayOpsCommon$();
  var _2$3 = ({
    "type": "uniform"
  });
  var $x_20 = $m_sjs_js_ArrayOpsCommon$();
  var _2$4 = ({});
  var descriptors$2 = $x_22.a([$x_21.a([({
    "binding": 0,
    "visibility": 2,
    "buffer": _2$3
  })], $x_20.a([({
    "binding": 1,
    "visibility": 2,
    "sampler": _2$4
  })], []))], []);
  var result$2 = [];
  var len$3 = (descriptors$2.length | 0);
  var i$5 = 0;
  while ((i$5 < len$3)) {
    var x0$4 = descriptors$2[i$5];
    (result$2.push(p.e.createBindGroupLayout(({
      "entries": x0$4
    }))) | 0);
    i$5 = ((1 + i$5) | 0);
  }
  var \u03b46$$2___1 = result$2;
  var \u03b46$$2___2 = $m_Ltrivalibs_graphics_shader_layouts$().M(p.e, result$2);
  var bgls$4 = \u03b46$$2___1;
  var $x_23 = $m_sjs_js_ArrayOpsCommon$();
  var _2$5 = ({});
  var entries$2 = $x_23.a([({
    "binding": 0,
    "visibility": 2,
    "texture": _2$5
  })], []);
  var panelBgl$2 = p.e.createBindGroupLayout(({
    "entries": entries$2
  }));
  if ((panelBgl$2 !== null)) {
    var other$proxy3 = [panelBgl$2];
    var allBgls$2 = bgls$4.concat(other$proxy3);
  } else {
    var allBgls$2 = bgls$4;
  }
  var pl$2 = $m_Ltrivalibs_graphics_shader_layouts$().M(p.e, allBgls$2);
  var cropShade = new $c_Ltrivalibs_graphics_painter_Shade(id$2, module$2, null, bgls$4[0], panelBgl$2, pl$2, false, dict$3, dict$4);
  if ((overscan > 0.0)) {
    var Bindable_this$5 = p.bd(cropShade, (void 0), (void 0), (void 0));
    var e1$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", blurPanel);
    var e2$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("crop", b$5);
    var e3$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var \u03b4scrutinee411 = e1$proxy3.s;
    var idx$4 = (Bindable_this$5.w.az.tex | 0);
    while (((Bindable_this$5.Q.length | 0) <= idx$4)) {
      Bindable_this$5.Q.push(null);
    }
    Bindable_this$5.Q[idx$4] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee411);
    Bindable_this$5.O = null;
    var \u03b4scrutinee415 = e2$proxy3.s;
    var idx$5 = (Bindable_this$5.w.I.crop | 0);
    while (((Bindable_this$5.i.length | 0) <= idx$5)) {
      Bindable_this$5.i.push(null);
    }
    Bindable_this$5.i[idx$5] = \u03b4scrutinee415;
    Bindable_this$5.O = null;
    var \u03b4scrutinee425 = e3$proxy3.s;
    var idx$6 = (Bindable_this$5.w.I.samp | 0);
    while (((Bindable_this$5.i.length | 0) <= idx$6)) {
      Bindable_this$5.i.push(null);
    }
    Bindable_this$5.i[idx$6] = \u03b4scrutinee425;
    Bindable_this$5.O = null;
    var layers$3 = [Bindable_this$5];
    var $x_24 = p.br((void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), "rgba16float", (void 0), (void 0), (void 0), (void 0), layers$3);
  } else {
    var $x_24 = null;
  }
  return new $c_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1(mirrorPanel, $x_24, blurPanel, blurStrength, blurRatioVertical, Bindable_this, pairCache, overscan, uRes, b$4, b$5, resolutionScale, b, strengthScale, b$2, b$3, camera, reflMat, uVp, uInvVp, p, scaleFactor, blurShadeH, cachedScale, blurShadeV, sampler);
});
$p.qg = (function(strengthScale$1, scaleFactor$1, subResHeight, strength, ratio) {
  var pairs = 1;
  var reach = (((strength * strengthScale$1) * subResHeight) * (+Math.max(ratio, 1.0)));
  while ((reach > 1.0)) {
    reach = (reach * scaleFactor$1);
    pairs = ((1 + pairs) | 0);
  }
  return pairs;
});
$p.qf = (function(pairCache$1, blurShadeH$1, cachedScale$1, blurShadeV$1, scaleFactor$2, p$3, uBlurStrength$2, uRatioVertical$2, uStrengthOffset$2, uRes$2, uVisHeight$2, sampler$2, n) {
  while (((pairCache$1.length | 0) < (n << 1))) {
    pairCache$1.push($p_Lsketchlib_utils_mirror_GaussianMirrorReflection$__blurLayer$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_painter_GPUSampler__Ltrivalibs_graphics_painter_Shade__D__Ltrivalibs_graphics_painter_Layer(this, p$3, uBlurStrength$2, uRatioVertical$2, uStrengthOffset$2, uRes$2, uVisHeight$2, sampler$2, blurShadeH$1, cachedScale$1.bk));
    pairCache$1.push($p_Lsketchlib_utils_mirror_GaussianMirrorReflection$__blurLayer$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_painter_GPUSampler__Ltrivalibs_graphics_painter_Shade__D__Ltrivalibs_graphics_painter_Layer(this, p$3, uBlurStrength$2, uRatioVertical$2, uStrengthOffset$2, uRes$2, uVisHeight$2, sampler$2, blurShadeV$1, cachedScale$1.bk));
    cachedScale$1.bk = (cachedScale$1.bk * scaleFactor$2);
  }
});
var $d_Lsketchlib_utils_mirror_GaussianMirrorReflection$ = new $TypeData().i($c_Lsketchlib_utils_mirror_GaussianMirrorReflection$, "sketchlib.utils.mirror.GaussianMirrorReflection$", ({
  dF: 1
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
  dH: 1
}));
/** @constructor */
function $c_Ltrivalibs_dev_dev$package$() {
  this.gx = null;
  this.jc = false;
  $n_Ltrivalibs_dev_dev$package$ = this;
  this.gx = [];
  this.jc = false;
}
$p = $c_Ltrivalibs_dev_dev$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_dev_dev$package$;
/** @constructor */
function $h_Ltrivalibs_dev_dev$package$() {
}
$h_Ltrivalibs_dev_dev$package$.prototype = $p;
$p.oq = (function() {
  return (import.meta.hot !== (void 0));
});
$p.pE = (function() {
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
$p.qi = (function(label) {
  return ((("trivalibs:dev:" + $m_Ltrivalibs_dev_dev$package$().pE()) + ":") + label);
});
$p.kh = (function() {
  return window.sessionStorage;
});
$p.pW = (function(key) {
  var raw = $m_Ltrivalibs_dev_dev$package$().kh().getItem(key);
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
$p.qD = (function(key, json) {
  $m_Ltrivalibs_dev_dev$package$().kh().setItem(key, JSON.stringify(json));
});
$p.q1 = (function(key) {
  $m_Ltrivalibs_dev_dev$package$().kh().removeItem(key);
});
$p.oz = (function() {
  if ((!$m_Ltrivalibs_dev_dev$package$().jc)) {
    $m_Ltrivalibs_dev_dev$package$().jc = true;
    window.addEventListener("pagehide", ((_$1$2) => {
      var i = 0;
      while ((i < ($m_Ltrivalibs_dev_dev$package$().gx.length | 0))) {
        $m_Ltrivalibs_dev_dev$package$().gx[i].hy();
        i = ((1 + i) | 0);
      }
    }));
  }
});
$p.pY = (function(flush) {
  $m_Ltrivalibs_dev_dev$package$().oz();
  $m_Ltrivalibs_dev_dev$package$().gx.push(flush);
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    var idx = $m_sjs_js_ArrayOps$().n7($m_Ltrivalibs_dev_dev$package$().gx, flush, 0);
    if ((idx >= 0)) {
      $m_Ltrivalibs_dev_dev$package$().gx.splice(idx, 1);
    }
  }));
});
var $d_Ltrivalibs_dev_dev$package$ = new $TypeData().i($c_Ltrivalibs_dev_dev$package$, "trivalibs.dev.dev$package$", ({
  dI: 1
}));
var $n_Ltrivalibs_dev_dev$package$;
function $m_Ltrivalibs_dev_dev$package$() {
  if ((!$n_Ltrivalibs_dev_dev$package$)) {
    $n_Ltrivalibs_dev_dev$package$ = new $c_Ltrivalibs_dev_dev$package$();
  }
  return $n_Ltrivalibs_dev_dev$package$;
}
function $p_Ltrivalibs_dev_devPreserve$__encodeCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any($thiz, cam) {
  return [cam.ar.y, cam.ar.A, cam.ar.z, cam.aK, cam.bn];
}
function $p_Ltrivalibs_dev_devPreserve$__applyCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any__V($thiz, cam, json) {
  if ((!(!Array.isArray(json)))) {
    if (((json.length | 0) >= 5)) {
      var pos$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((+json[0]), (+json[1]), (+json[2]));
      var rotH$1 = (+json[3]);
      var rotV$1 = (+json[4]);
      var fov$1 = cam.gG;
      var aspect$1 = cam.hl;
      var near$1 = cam.gH;
      var far$1 = cam.gF;
      cam.kg(fov$1, aspect$1, near$1, far$1, rotH$1, rotV$1, pos$1);
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
$p.o5 = (function(cam, label) {
  if ((!$m_Ltrivalibs_dev_dev$package$().oq())) {
    return new $c_Ltrivalibs_dev_DevHandle(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => (void 0))));
  } else {
    var sk = $m_Ltrivalibs_dev_dev$package$().qi(label);
    var initPos = cam.ar;
    var initRotH = cam.aK;
    var initRotV = cam.bn;
    var stored = $m_Ltrivalibs_dev_dev$package$().pW(sk);
    if ((stored !== null)) {
      $p_Ltrivalibs_dev_devPreserve$__applyCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any__V(this, cam, stored);
    }
    return new $c_Ltrivalibs_dev_DevHandle(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(((unregister) => (() => {
      unregister.hy();
      $m_Ltrivalibs_dev_dev$package$().q1(sk);
      var fov$proxy1 = cam.gG;
      var aspect$proxy1 = cam.hl;
      var near$proxy1 = cam.gH;
      var far$proxy1 = cam.gF;
      cam.kg(fov$proxy1, aspect$proxy1, near$proxy1, far$proxy1, initRotH, initRotV, initPos);
    }))($m_Ltrivalibs_dev_dev$package$().pY(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
      $m_Ltrivalibs_dev_dev$package$().qD(sk, $p_Ltrivalibs_dev_devPreserve$__encodeCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any(this, cam));
    }))))));
  }
});
var $d_Ltrivalibs_dev_devPreserve$ = new $TypeData().i($c_Ltrivalibs_dev_devPreserve$, "trivalibs.dev.devPreserve$", ({
  dJ: 1
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
  this.k = null;
  this.J = null;
  this.K = null;
  this.H = null;
  this.k = buffer;
  this.J = device;
  this.K = uv;
  var b = (buffer.dv.byteLength | 0);
  var value = ((b < 16) ? 16 : b);
  var $x_1 = device.createBuffer(({
    "size": value,
    "usage": 72
  }));
  this.H = $x_1;
}
$p = $c_Ltrivalibs_graphics_buffers_BufferBinding.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_BufferBinding;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_BufferBinding() {
}
$h_Ltrivalibs_graphics_buffers_BufferBinding.prototype = $p;
function $isArrayOf_Ltrivalibs_graphics_buffers_BufferBinding(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aW)));
}
var $d_Ltrivalibs_graphics_buffers_BufferBinding = new $TypeData().i($c_Ltrivalibs_graphics_buffers_BufferBinding, "trivalibs.graphics.buffers.BufferBinding", ({
  aW: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Box(center, size, frontTopLeft, frontTopRight, frontBottomLeft, frontBottomRight, backTopLeft, backTopRight, backBottomLeft, backBottomRight) {
  this.lr = null;
  this.ls = null;
  this.lp = null;
  this.lq = null;
  this.ln = null;
  this.lo = null;
  this.ll = null;
  this.lm = null;
  this.lr = frontTopLeft;
  this.ls = frontTopRight;
  this.lp = frontBottomLeft;
  this.lq = frontBottomRight;
  this.ln = backTopLeft;
  this.lo = backTopRight;
  this.ll = backBottomLeft;
  this.lm = backBottomRight;
}
$p = $c_Ltrivalibs_graphics_geometry_Box.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Box;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Box() {
}
$h_Ltrivalibs_graphics_geometry_Box.prototype = $p;
$p.qo = (function(f) {
  return $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().bo(f.bc(this.ln, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0)), f.bc(this.lr, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0)), f.bc(this.ls, new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 0.0)), f.bc(this.lo, new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 1.0)));
});
$p.of = (function(f) {
  return $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().bo(f.bc(this.lp, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0)), f.bc(this.ll, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0)), f.bc(this.lm, new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0)), f.bc(this.lq, new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0)));
});
var $d_Ltrivalibs_graphics_geometry_Box = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Box, "trivalibs.graphics.geometry.Box", ({
  dR: 1
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
$p.o0 = (function(center, width, height, depth) {
  var hw = (0.5 * width);
  var hh = (0.5 * height);
  var hd = (0.5 * depth);
  var cx = center.y;
  var cy = center.A;
  var cz = center.z;
  return new $c_Ltrivalibs_graphics_geometry_Box(center, new $c_Ltrivalibs_graphics_math_cpu_Vec3(width, height, depth), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy + hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy + hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy - hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy - hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy + hh), (cz - hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy + hh), (cz - hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy - hh), (cz - hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy - hh), (cz - hd)));
});
var $d_Ltrivalibs_graphics_geometry_Box$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Box$, "trivalibs.graphics.geometry.Box$", ({
  dS: 1
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
  this.jd = null;
  this.i9 = null;
  this.jd = vertices;
  this.i9 = indices;
}
$p = $c_Ltrivalibs_graphics_geometry_BufferedGeometry.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_BufferedGeometry;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_BufferedGeometry() {
}
$h_Ltrivalibs_graphics_geometry_BufferedGeometry.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_BufferedGeometry = new $TypeData().i($c_Ltrivalibs_graphics_geometry_BufferedGeometry, "trivalibs.graphics.geometry.BufferedGeometry", ({
  dT: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_FaceData(normal, section) {
  this.h3 = null;
  this.nG = 0;
  this.h3 = normal;
  this.nG = section;
}
$p = $c_Ltrivalibs_graphics_geometry_FaceData.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_FaceData;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_FaceData() {
}
$h_Ltrivalibs_graphics_geometry_FaceData.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_FaceData = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FaceData, "trivalibs.graphics.geometry.FaceData", ({
  dU: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Mesh(evidence$1) {
  this.h4 = null;
  this.a7 = null;
  this.gy = null;
  this.ib = null;
  this.ia = null;
  this.h4 = evidence$1;
  this.a7 = [];
  this.gy = [];
  this.ib = [];
  this.ia = ({});
}
$p = $c_Ltrivalibs_graphics_geometry_Mesh.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Mesh;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Mesh() {
}
$h_Ltrivalibs_graphics_geometry_Mesh.prototype = $p;
$p.nT = (function(face, normal, section) {
  var faceIdx = (this.a7.length | 0);
  this.a7.push(face);
  this.gy.push(new $c_Ltrivalibs_graphics_geometry_FaceData(normal, section));
  var n = (face.length | 0);
  var slot = 0;
  while ((slot < n)) {
    var v = face[slot];
    var key = $m_Ltrivalibs_graphics_geometry_package$package$().pU(this.h4.bs(v));
    if ($m_sjs_js_Any$ObjectCompanionOps$().oR(Object, this.ia, key)) {
      var $x_2 = this.ib;
      var dict = this.ia;
      if ((!(!(!$m_sjs_js_WrappedDictionary$Cache$().kR.call(dict, key))))) {
        throw new $c_ju_NoSuchElementException(("key not found: " + key));
      }
      var $x_1 = $x_2[(dict[key] | 0)];
      $x_1.lw.push(new $c_Ltrivalibs_graphics_geometry_PositionFaceRef(faceIdx, slot));
    } else {
      var idx = (this.ib.length | 0);
      var dict$1 = this.ia;
      dict$1[key] = idx;
      this.ib.push(new $c_Ltrivalibs_graphics_geometry_VertexPosition(this.h4.bs(v), [new $c_Ltrivalibs_graphics_geometry_PositionFaceRef(faceIdx, slot)]));
    }
    slot = ((1 + slot) | 0);
  }
});
$p.oy = (function() {
  var hasQuads = false;
  var i = 0;
  while ((i < (this.a7.length | 0))) {
    var arr = this.a7[i];
    if ((this.gy[i].h3 === null)) {
      var $x_2 = this.gy[i];
      if (((arr.length | 0) === 3)) {
        var $x_1 = $m_Ltrivalibs_graphics_geometry_polygon$package$Triangle$().kd(this.a7[i], this.h4);
      } else {
        hasQuads = true;
        var $x_1 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().kd(this.a7[i], this.h4);
      }
      $x_2.h3 = $x_1;
    }
    i = ((1 + i) | 0);
  }
  return hasQuads;
});
var $d_Ltrivalibs_graphics_geometry_Mesh = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Mesh, "trivalibs.graphics.geometry.Mesh", ({
  dX: 1
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
$p.mP = (function(faces, normal, section, evidence$1) {
  var m = new $c_Ltrivalibs_graphics_geometry_Mesh(evidence$1);
  $m_Ltrivalibs_graphics_geometry_mesh$package$().nU(m, faces, normal, section, evidence$1);
  return m;
});
var $d_Ltrivalibs_graphics_geometry_Mesh$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Mesh$, "trivalibs.graphics.geometry.Mesh$", ({
  dY: 1
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
  this.h6 = null;
  this.h5 = 0.0;
  this.h6 = normal;
  this.h5 = d;
}
$p = $c_Ltrivalibs_graphics_geometry_Plane.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Plane;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Plane() {
}
$h_Ltrivalibs_graphics_geometry_Plane.prototype = $p;
$p.pX = (function() {
  var a = this.h6.y;
  var b = this.h6.A;
  var c = this.h6.z;
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4((1.0 - ((2.0 * a) * a)), (((-2.0) * a) * b), (((-2.0) * a) * c), 0.0, (((-2.0) * a) * b), (1.0 - ((2.0 * b) * b)), (((-2.0) * b) * c), 0.0, (((-2.0) * a) * c), (((-2.0) * b) * c), (1.0 - ((2.0 * c) * c)), 0.0, ((2.0 * a) * this.h5), ((2.0 * b) * this.h5), ((2.0 * c) * this.h5), 1.0);
});
var $d_Ltrivalibs_graphics_geometry_Plane = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Plane, "trivalibs.graphics.geometry.Plane", ({
  dZ: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Plane$() {
  this.lt = null;
  $n_Ltrivalibs_graphics_geometry_Plane$ = this;
  this.lt = new $c_Ltrivalibs_graphics_geometry_Plane(new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0), 0.0);
}
$p = $c_Ltrivalibs_graphics_geometry_Plane$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Plane$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Plane$() {
}
$h_Ltrivalibs_graphics_geometry_Plane$.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_Plane$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Plane$, "trivalibs.graphics.geometry.Plane$", ({
  e0: 1
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
  this.nH = 0;
  this.nI = 0;
  this.nH = faceIndex;
  this.nI = vertexSlot;
}
$p = $c_Ltrivalibs_graphics_geometry_PositionFaceRef.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_PositionFaceRef;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_PositionFaceRef() {
}
$h_Ltrivalibs_graphics_geometry_PositionFaceRef.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_PositionFaceRef = new $TypeData().i($c_Ltrivalibs_graphics_geometry_PositionFaceRef, "trivalibs.graphics.geometry.PositionFaceRef", ({
  e2: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexPosition(position, faces) {
  this.nJ = null;
  this.lw = null;
  this.nJ = position;
  this.lw = faces;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexPosition.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexPosition;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexPosition() {
}
$h_Ltrivalibs_graphics_geometry_VertexPosition.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_VertexPosition = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexPosition, "trivalibs.graphics.geometry.VertexPosition", ({
  e7: 1
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
$p.np = (function(idxBuf, vertexCount) {
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
  e8: 1
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
$p.nU = (function(m, faces, normal, section, evidence$1) {
  var i = 0;
  while ((i < (faces.length | 0))) {
    m.nT(faces[i], normal, section);
    i = ((1 + i) | 0);
  }
});
var $d_Ltrivalibs_graphics_geometry_mesh$package$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_mesh$package$, "trivalibs.graphics.geometry.mesh$package$", ({
  e9: 1
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
$p.pU = (function(v) {
  return (((($doubleToInt((10000.0 * v.y)) + ",") + $doubleToInt((10000.0 * v.A))) + ",") + $doubleToInt((10000.0 * v.z)));
});
var $d_Ltrivalibs_graphics_geometry_package$package$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_package$package$, "trivalibs.graphics.geometry.package$package$", ({
  ea: 1
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
$p.bo = (function(tl, bl, br, tr) {
  return [tl, bl, br, tr];
});
$p.qm = (function(q, evidence$1) {
  return q[0];
});
$p.oe = (function(q, evidence$1) {
  return q[1];
});
$p.og = (function(q, evidence$1) {
  return q[2];
});
$p.qp = (function(q, evidence$1) {
  return q[3];
});
$p.kd = (function(q, evidence$1) {
  var a = evidence$1.bs(this.qm(q, evidence$1));
  var b = evidence$1.bs(this.oe(q, evidence$1));
  var c = evidence$1.bs(this.og(q, evidence$1));
  var d = evidence$1.bs(this.qp(q, evidence$1));
  var d1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((c.y - a.y), (c.A - a.A), (c.z - a.z));
  var d2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((d.y - b.y), (d.A - b.A), (d.z - b.z));
  return $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Z(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Z(), d1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), d2), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
});
var $d_Ltrivalibs_graphics_geometry_polygon$package$Quad$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_polygon$package$Quad$, "trivalibs.graphics.geometry.polygon$package$Quad$", ({
  ec: 1
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
$p.nR = (function(tri, evidence$1) {
  return tri[0];
});
$p.o9 = (function(tri, evidence$1) {
  return tri[1];
});
$p.oh = (function(tri, evidence$1) {
  return tri[2];
});
$p.kd = (function(tri, evidence$1) {
  var pa = evidence$1.bs(this.nR(tri, evidence$1));
  var pb = evidence$1.bs(this.o9(tri, evidence$1));
  var pc = evidence$1.bs(this.oh(tri, evidence$1));
  var e1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((pb.y - pa.y), (pb.A - pa.A), (pb.z - pa.z));
  var e2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((pc.y - pa.y), (pc.A - pa.A), (pc.z - pa.z));
  return $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Z(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Z(), e1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), e2), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
});
var $d_Ltrivalibs_graphics_geometry_polygon$package$Triangle$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_polygon$package$Triangle$, "trivalibs.graphics.geometry.polygon$package$Triangle$", ({
  ed: 1
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
  var a00 = (+x$2.hC(m));
  var a01 = (+x$2.hD(m));
  var a02 = (+x$2.hE(m));
  var a03 = (+x$2.hF(m));
  var a10 = (+x$2.hG(m));
  var a11 = (+x$2.hH(m));
  var a12 = (+x$2.hI(m));
  var a13 = (+x$2.hJ(m));
  var a20 = (+x$2.hK(m));
  var a21 = (+x$2.hL(m));
  var a22 = (+x$2.hM(m));
  var a23 = (+x$2.hN(m));
  var a30 = (+x$2.hO(m));
  var a31 = (+x$2.hP(m));
  var a32 = (+x$2.hQ(m));
  var a33 = (+x$2.hR(m));
  var b00 = (+x$2.hC(other));
  var b01 = (+x$2.hD(other));
  var b02 = (+x$2.hE(other));
  var b03 = (+x$2.hF(other));
  var b10 = (+x$2.hG(other));
  var b11 = (+x$2.hH(other));
  var b12 = (+x$2.hI(other));
  var b13 = (+x$2.hJ(other));
  var b20 = (+x$2.hK(other));
  var b21 = (+x$2.hL(other));
  var b22 = (+x$2.hM(other));
  var b23 = (+x$2.hN(other));
  var b30 = (+x$2.hO(other));
  var b31 = (+x$2.hP(other));
  var b32 = (+x$2.hQ(other));
  var b33 = (+x$2.hR(other));
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4(((((a00 * b00) + (a10 * b01)) + (a20 * b02)) + (a30 * b03)), ((((a01 * b00) + (a11 * b01)) + (a21 * b02)) + (a31 * b03)), ((((a02 * b00) + (a12 * b01)) + (a22 * b02)) + (a32 * b03)), ((((a03 * b00) + (a13 * b01)) + (a23 * b02)) + (a33 * b03)), ((((a00 * b10) + (a10 * b11)) + (a20 * b12)) + (a30 * b13)), ((((a01 * b10) + (a11 * b11)) + (a21 * b12)) + (a31 * b13)), ((((a02 * b10) + (a12 * b11)) + (a22 * b12)) + (a32 * b13)), ((((a03 * b10) + (a13 * b11)) + (a23 * b12)) + (a33 * b13)), ((((a00 * b20) + (a10 * b21)) + (a20 * b22)) + (a30 * b23)), ((((a01 * b20) + (a11 * b21)) + (a21 * b22)) + (a31 * b23)), ((((a02 * b20) + (a12 * b21)) + (a22 * b22)) + (a32 * b23)), ((((a03 * b20) + (a13 * b21)) + (a23 * b22)) + (a33 * b23)), ((((a00 * b30) + (a10 * b31)) + (a20 * b32)) + (a30 * b33)), ((((a01 * b30) + (a11 * b31)) + (a21 * b32)) + (a31 * b33)), ((((a02 * b30) + (a12 * b31)) + (a22 * b32)) + (a32 * b33)), ((((a03 * b30) + (a13 * b31)) + (a23 * b32)) + (a33 * b33)));
}
function $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($thiz, m, x$2) {
  var a00 = (+x$2.hC(m));
  var a01 = (+x$2.hD(m));
  var a02 = (+x$2.hE(m));
  var a03 = (+x$2.hF(m));
  var a10 = (+x$2.hG(m));
  var a11 = (+x$2.hH(m));
  var a12 = (+x$2.hI(m));
  var a13 = (+x$2.hJ(m));
  var a20 = (+x$2.hK(m));
  var a21 = (+x$2.hL(m));
  var a22 = (+x$2.hM(m));
  var a23 = (+x$2.hN(m));
  var a30 = (+x$2.hO(m));
  var a31 = (+x$2.hP(m));
  var a32 = (+x$2.hQ(m));
  var a33 = (+x$2.hR(m));
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
  mb.n9(m, (+x$4.hC(other)));
  mb.na(m, (+x$4.hD(other)));
  mb.nb(m, (+x$4.hE(other)));
  mb.nc(m, (+x$4.hF(other)));
  mb.nd(m, (+x$4.hG(other)));
  mb.ne(m, (+x$4.hH(other)));
  mb.nf(m, (+x$4.hI(other)));
  mb.ng(m, (+x$4.hJ(other)));
  mb.nh(m, (+x$4.hK(other)));
  mb.ni(m, (+x$4.hL(other)));
  mb.nj(m, (+x$4.hM(other)));
  mb.nk(m, (+x$4.hN(other)));
  mb.nl(m, (+x$4.hO(other)));
  mb.nm(m, (+x$4.hP(other)));
  mb.nn(m, (+x$4.hQ(other)));
  mb.no(m, (+x$4.hR(other)));
}
function $f_Ltrivalibs_graphics_math_Vec2MutableOps__set__O__Ltrivalibs_graphics_math_Vec2Mutable__O__Ltrivalibs_graphics_math_Vec2Base__V($thiz, v, x$2, other, x$4) {
  x$2.gQ(v, (+x$4.G(other)));
  x$2.gS(v, (+x$4.x(other)));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.y + other.y), (v.A + other.A), (v.z + other.z));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, scalar) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.y * scalar), (v.A * scalar), (v.z * scalar));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__divScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, scalar) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.y / scalar), (v.A / scalar), (v.z / scalar));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3(((v.A * other.z) - (v.z * other.A)), ((v.z * other.y) - (v.y * other.z)), ((v.y * other.A) - (v.A * other.y)));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($thiz, v, x$2) {
  return $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__divScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, $f_Ltrivalibs_graphics_math_Vec3Base__length__O__D(x$2, v));
}
function $f_Ltrivalibs_graphics_math_Vec4MutableOps__set__O__Ltrivalibs_graphics_math_Vec4Mutable__O__Ltrivalibs_graphics_math_Vec4Base__V($thiz, v, x$2, other, x$4) {
  x$2.gQ(v, (+x$4.G(other)));
  x$2.gS(v, (+x$4.x(other)));
  x$2.kr(v, (+x$4.ae(other)));
  x$2.kl(v, (+x$4.av(other)));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat4(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
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
  this.js = 0.0;
  this.jt = 0.0;
  this.ju = 0.0;
  this.jf = m00;
  this.jg = m01;
  this.jh = m02;
  this.ji = m03;
  this.jj = m10;
  this.jk = m11;
  this.jl = m12;
  this.jm = m13;
  this.jn = m20;
  this.jo = m21;
  this.jp = m22;
  this.jq = m23;
  this.jr = m30;
  this.js = m31;
  this.jt = m32;
  this.ju = m33;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat4.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat4;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat4() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat4.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Mat4 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4, "trivalibs.graphics.math.cpu.Mat4", ({
  eq: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Quat(x, y, z, w) {
  this.id = 0.0;
  this.ie = 0.0;
  this.ig = 0.0;
  this.ic = 0.0;
  this.id = x;
  this.ie = y;
  this.ig = z;
  this.ic = w;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Quat.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Quat;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Quat() {
}
$h_Ltrivalibs_graphics_math_cpu_Quat.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Quat = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat, "trivalibs.graphics.math.cpu.Quat", ({
  et: 1
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
$p.oM = (function(angle) {
  var h = (0.5 * angle);
  return new $c_Ltrivalibs_graphics_math_cpu_Quat((+Math.sin(h)), 0.0, 0.0, (+Math.cos(h)));
});
$p.k9 = (function(angle) {
  var h = (0.5 * angle);
  return new $c_Ltrivalibs_graphics_math_cpu_Quat(0.0, (+Math.sin(h)), 0.0, (+Math.cos(h)));
});
var $d_Ltrivalibs_graphics_math_cpu_Quat$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat$, "trivalibs.graphics.math.cpu.Quat$", ({
  eu: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Quat$;
function $m_Ltrivalibs_graphics_math_cpu_Quat$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Quat$)) {
    $n_Ltrivalibs_graphics_math_cpu_Quat$ = new $c_Ltrivalibs_graphics_math_cpu_Quat$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Quat$;
}
function $f_Ltrivalibs_graphics_math_cpu_QuatImmutableOps__quatMul__O__Ltrivalibs_graphics_math_Vec4Base__O__O($thiz, q, x$2, p) {
  return new $c_Ltrivalibs_graphics_math_cpu_Quat((((((+x$2.av(q)) * (+x$2.G(p))) + ((+x$2.G(q)) * (+x$2.av(p)))) + ((+x$2.x(q)) * (+x$2.ae(p)))) - ((+x$2.ae(q)) * (+x$2.x(p)))), (((((+x$2.av(q)) * (+x$2.x(p))) - ((+x$2.G(q)) * (+x$2.ae(p)))) + ((+x$2.x(q)) * (+x$2.av(p)))) + ((+x$2.ae(q)) * (+x$2.G(p)))), (((((+x$2.av(q)) * (+x$2.ae(p))) + ((+x$2.G(q)) * (+x$2.x(p)))) - ((+x$2.x(q)) * (+x$2.G(p)))) + ((+x$2.ae(q)) * (+x$2.av(p)))), (((((+x$2.av(q)) * (+x$2.av(p))) - ((+x$2.G(q)) * (+x$2.G(p)))) - ((+x$2.x(q)) * (+x$2.x(p)))) - ((+x$2.ae(q)) * (+x$2.ae(p)))));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec2(x, y) {
  this.ih = 0.0;
  this.ii = 0.0;
  this.ih = x;
  this.ii = y;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec2.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec2;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec2() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec2.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec2 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec2, "trivalibs.graphics.math.cpu.Vec2", ({
  ey: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec3(x, y, z) {
  this.y = 0.0;
  this.A = 0.0;
  this.z = 0.0;
  this.y = x;
  this.A = y;
  this.z = z;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec3.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec3;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec3() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec3.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec3 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3, "trivalibs.graphics.math.cpu.Vec3", ({
  eA: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec4(x, y, z, w) {
  this.fF = 0.0;
  this.fG = 0.0;
  this.fH = 0.0;
  this.fE = 0.0;
  this.fF = x;
  this.fG = y;
  this.fH = z;
  this.fE = w;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec4.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec4;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec4() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec4.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec4 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4, "trivalibs.graphics.math.cpu.Vec4", ({
  eD: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
  this.lE = null;
  this.lF = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$.prototype = $p;
$p.oQ = (function() {
  if ((!this.lF)) {
    this.lE = new $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18();
    this.lF = true;
  }
  return this.lE;
});
var $d_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$, "trivalibs.graphics.math.cpu.mat4$package$Mat4Buffer$", ({
  eH: 1
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
  this.lG = null;
  this.lH = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$.prototype = $p;
$p.qu = (function() {
  if ((!this.lH)) {
    this.lG = new $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$6();
    this.lH = true;
  }
  return this.lG;
});
var $d_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$, "trivalibs.graphics.math.cpu.vec2$package$Vec2Buffer$", ({
  eK: 1
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
  this.lI = null;
  this.lJ = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$.prototype = $p;
$p.qv = (function() {
  if ((!this.lJ)) {
    this.lI = new $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$8();
    this.lJ = true;
  }
  return this.lI;
});
var $d_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$, "trivalibs.graphics.math.cpu.vec4$package$Vec4Buffer$", ({
  eN: 1
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
$p.o = (function() {
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
$p.b0 = (function() {
  return new $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$2) => $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), _$1$2))));
});
var $d_Ltrivalibs_graphics_math_gpu_LeftScalar$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_LeftScalar$, "trivalibs.graphics.math.gpu.LeftScalar$", ({
  eR: 1
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
$p.hY = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("vec3<f32>(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aD(v.y)) + ", ") + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aD(v.A)) + ", ") + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aD(v.z)) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$, "trivalibs.graphics.math.gpu.cpu_interop$package$", ({
  eU: 1
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
  this.lL = null;
  this.lM = false;
}
$p = $c_Ltrivalibs_graphics_math_gpu_expr$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_expr$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_expr$package$() {
}
$h_Ltrivalibs_graphics_math_gpu_expr$package$.prototype = $p;
$p.nv = (function(tex, uv, sampler) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("textureSample(" + tex.d) + ", ") + sampler.d) + ", ") + uv.d) + ")"));
});
$p.aY = (function(tex, uv, sampler) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("textureSample(" + tex.d) + ", ") + sampler.d) + ", ") + uv.d) + ")"));
});
$p.iM = (function(tex, coord) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("textureLoad(" + tex.d) + ", ") + coord.d) + ", 0)"));
});
$p.op = (function(tex, coord) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("textureLoad(" + tex.d) + ", ") + coord.d) + ", 0)"));
});
$p.bM = (function() {
  if ((!this.lM)) {
    this.lL = new $c_Ltrivalibs_graphics_math_gpu_expr$package$$anon$2();
    this.lM = true;
  }
  return this.lL;
});
$p.q8 = (function(onFalse, onTrue, cond) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("select(" + onFalse.d) + ", ") + onTrue.d) + ", ") + cond.d) + ")"));
});
$p.oJ = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.d) + " > ") + b.d) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_expr$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_expr$package$, "trivalibs.graphics.math.gpu.expr$package$", ({
  eV: 1
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
  this.lN = null;
  this.lO = false;
  this.lR = null;
  this.lS = false;
  this.lT = null;
  this.lU = false;
  this.lV = null;
  this.lW = false;
  this.lP = null;
  this.lQ = false;
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$.prototype = $p;
$p.aD = (function(v) {
  var s = ("" + v);
  return (((($f_T__indexOf__I__I(s, 46) >= 0) || ($f_T__indexOf__I__I(s, 69) >= 0)) || ($f_T__indexOf__I__I(s, 101) >= 0)) ? s : (s + ".0"));
});
$p.p = (function() {
  if ((!this.lO)) {
    this.lN = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1();
    this.lO = true;
  }
  return this.lN;
});
$p.Y = (function() {
  if ((!this.lS)) {
    this.lR = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$4();
    this.lS = true;
  }
  return this.lR;
});
$p.E = (function() {
  if ((!this.lU)) {
    this.lT = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5();
    this.lU = true;
  }
  return this.lT;
});
$p.ai = (function() {
  if ((!this.lW)) {
    this.lV = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6();
    this.lW = true;
  }
  return this.lV;
});
$p.fV = (function() {
  if ((!this.lQ)) {
    this.lP = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$9();
    this.lQ = true;
  }
  return this.lP;
});
$p.gO = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.d + ".xy"));
});
$p.qG = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.d + ".zw"));
});
$p.gR = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.d + ".xyz"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$, "trivalibs.graphics.math.gpu.float_expr$package$", ({
  eX: 1
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
$p.fT = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("vec2<i32>(" + v.d) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_ivec2$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_ivec2$, "trivalibs.graphics.math.gpu.ivec2$", ({
  f9: 1
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
$p.an = (function(x, y) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("vec2<f32>(" + x.d) + ", ") + y.d) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_vec2$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec2$, "trivalibs.graphics.math.gpu.vec2$", ({
  fa: 1
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
$p.aY = (function(x, y, z) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("vec3<f32>(" + x.d) + ", ") + y.d) + ", ") + z.d) + ")"));
});
$p.fT = (function(scalar) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("vec3<f32>(" + scalar.d) + ")"));
});
$p.mM = (function(scalar) {
  return this.fT($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().p().h(scalar));
});
var $d_Ltrivalibs_graphics_math_gpu_vec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec3$, "trivalibs.graphics.math.gpu.vec3$", ({
  fb: 1
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
$p.o1 = (function(x, y, z, w) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((((("vec4<f32>(" + x.d) + ", ") + y.d) + ", ") + z.d) + ", ") + w.d) + ")"));
});
$p.an = (function(xyz, w) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("vec4<f32>(" + xyz.d) + ", ") + w.d) + ")"));
});
$p.aY = (function(xy, z, w) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("vec4<f32>(" + xy.d) + ", ") + z.d) + ", ") + w.d) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_vec4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec4$, "trivalibs.graphics.math.gpu.vec4$", ({
  fc: 1
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
  this.s = null;
  this.s = value;
}
$p = $c_Ltrivalibs_graphics_painter_BindPair.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_BindPair;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_BindPair() {
}
$h_Ltrivalibs_graphics_painter_BindPair.prototype = $p;
var $d_Ltrivalibs_graphics_painter_BindPair = new $TypeData().i($c_Ltrivalibs_graphics_painter_BindPair, "trivalibs.graphics.painter.BindPair", ({
  fd: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_BlendState$() {
  this.lX = null;
  this.lY = null;
  $n_Ltrivalibs_graphics_painter_BlendState$ = this;
  new ($a_Ltrivalibs_graphics_painter_BlendState())(new ($a_Ltrivalibs_graphics_painter_BlendFn())("src-alpha", "one-minus-src-alpha"), new ($a_Ltrivalibs_graphics_painter_BlendFn())("one", "one-minus-src-alpha"));
  this.lX = new ($a_Ltrivalibs_graphics_painter_BlendState())(new ($a_Ltrivalibs_graphics_painter_BlendFn())("src-alpha", "one"), new ($a_Ltrivalibs_graphics_painter_BlendFn())("one", "one"));
  this.lY = new ($a_Ltrivalibs_graphics_painter_BlendState())(new ($a_Ltrivalibs_graphics_painter_BlendFn())("dst", "zero"), new ($a_Ltrivalibs_graphics_painter_BlendFn())("dst-alpha", "zero"));
}
$p = $c_Ltrivalibs_graphics_painter_BlendState$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_BlendState$;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_BlendState$() {
}
$h_Ltrivalibs_graphics_painter_BlendState$.prototype = $p;
var $d_Ltrivalibs_graphics_painter_BlendState$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_BlendState$, "trivalibs.graphics.painter.BlendState$", ({
  fe: 1
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
  while ((i < $thiz.fJ)) {
    var b = $thiz.fK[i];
    if (((format === null) && (b.bH > 0))) {
      format = b.fL;
    }
    i = ((1 + i) | 0);
  }
  $thiz.jx = format;
}
function $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V($thiz, index, verts, indices, widenTo32) {
  while ((($thiz.fK.length | 0) <= index)) {
    $thiz.fK.push(new $c_Ltrivalibs_graphics_painter_FormBuffers());
  }
  var b = $thiz.fK[index];
  $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_graphics_painter_FormBuffers__Ltrivalibs_bufferdata_BufferView__V($thiz, b, verts);
  if ((indices !== null)) {
    $p_Ltrivalibs_graphics_painter_Form__uploadIndices__Ltrivalibs_graphics_painter_FormBuffers__sjs_js_typedarray_TypedArray__Z__V($thiz, b, indices, widenTo32);
  } else {
    b.bH = 0;
    b.h8 = 0;
  }
}
function $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_graphics_painter_FormBuffers__Ltrivalibs_bufferdata_BufferView__V($thiz, b, verts) {
  var data = verts.dv.buffer;
  var size = (data.byteLength | 0);
  var p = ((-4) & ((3 + size) | 0));
  var padded = ((p < 4) ? 4 : p);
  if (((b.bI === null) || (b.jA < padded))) {
    if ((b.bI !== null)) {
      var opt$proxy4 = b.bI;
      opt$proxy4.destroy();
    }
    b.bI = $thiz.h7.e.createBuffer(({
      "size": padded,
      "usage": 40
    }));
    b.jA = padded;
  }
  $thiz.h7.aP.writeBuffer(b.bI, 0.0, $p_Ltrivalibs_graphics_painter_Form__alignedData__sjs_js_typedarray_ArrayBuffer__sjs_js_typedarray_ArrayBuffer($thiz, data));
  b.ij = size;
  b.gz = (verts.off | 0);
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
    b.fL = "uint32";
  } else if ((!(!(raw instanceof Uint16Array)))) {
    data = raw.buffer;
    count = (raw.length | 0);
    b.fL = "uint16";
  } else {
    data = raw.buffer;
    count = (raw.length | 0);
    b.fL = "uint32";
  }
  var size = (data.byteLength | 0);
  var p = ((-4) & ((3 + size) | 0));
  var padded = ((p < 4) ? 4 : p);
  if (((b.bG === null) || (b.jz < padded))) {
    if ((b.bG !== null)) {
      var opt$proxy8 = b.bG;
      opt$proxy8.destroy();
    }
    b.bG = $thiz.h7.e.createBuffer(({
      "size": padded,
      "usage": 24
    }));
    b.jz = padded;
  }
  $thiz.h7.aP.writeBuffer(b.bG, 0.0, $p_Ltrivalibs_graphics_painter_Form__alignedData__sjs_js_typedarray_ArrayBuffer__sjs_js_typedarray_ArrayBuffer($thiz, data));
  b.h8 = size;
  b.bH = count;
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
  this.h7 = null;
  this.fK = null;
  this.fJ = 0;
  this.jy = null;
  this.jw = null;
  this.jx = null;
  this.h7 = painter;
  this.fK = [];
  this.fJ = 0;
  this.jy = "triangle-list";
  this.jw = "ccw";
  this.jx = null;
}
$p = $c_Ltrivalibs_graphics_painter_Form.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Form;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Form() {
}
$h_Ltrivalibs_graphics_painter_Form.prototype = $p;
$p.q9 = (function(geometry, vertices, geometries, verticesAll, topology, frontFace) {
  if ((topology !== (void 0))) {
    this.jy = topology;
  }
  if ((frontFace !== (void 0))) {
    this.jw = frontFace;
  }
  if ((geometry !== (void 0))) {
    $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V(this, 0, geometry.jd, geometry.i9, false);
    this.fJ = 1;
    $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V(this);
  }
  if ((vertices !== (void 0))) {
    $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V(this, 0, vertices, null, false);
    this.fJ = 1;
    $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V(this);
  }
  if ((geometries !== (void 0))) {
    var use32 = false;
    var i = 0;
    while ((i < (geometries.length | 0))) {
      var idx = geometries[i].i9;
      if (((idx !== null) && (!(!(idx instanceof Uint32Array))))) {
        use32 = true;
      }
      i = ((1 + i) | 0);
    }
    i = 0;
    while ((i < (geometries.length | 0))) {
      var geo = geometries[i];
      $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V(this, i, geo.jd, geo.i9, use32);
      i = ((1 + i) | 0);
    }
    this.fJ = (geometries.length | 0);
    $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V(this);
  }
  if ((verticesAll !== (void 0))) {
    var i$1 = 0;
    while ((i$1 < (verticesAll.length | 0))) {
      $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V(this, i$1, verticesAll[i$1], null, false);
      i$1 = ((1 + i$1) | 0);
    }
    this.fJ = (verticesAll.length | 0);
    $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V(this);
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Form = new $TypeData().i($c_Ltrivalibs_graphics_painter_Form, "trivalibs.graphics.painter.Form", ({
  ff: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_FormBuffers() {
  this.bI = null;
  this.jA = 0;
  this.ij = 0;
  this.gz = 0;
  this.bG = null;
  this.jz = 0;
  this.h8 = 0;
  this.bH = 0;
  this.fL = null;
  this.bI = null;
  this.jA = 0;
  this.ij = 0;
  this.gz = 0;
  this.bG = null;
  this.jz = 0;
  this.h8 = 0;
  this.bH = 0;
  this.fL = "uint16";
}
$p = $c_Ltrivalibs_graphics_painter_FormBuffers.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_FormBuffers;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_FormBuffers() {
}
$h_Ltrivalibs_graphics_painter_FormBuffers.prototype = $p;
var $d_Ltrivalibs_graphics_painter_FormBuffers = new $TypeData().i($c_Ltrivalibs_graphics_painter_FormBuffers, "trivalibs.graphics.painter.FormBuffers", ({
  fg: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter) {
  this.m1 = null;
  this.m0 = null;
  this.fM = null;
  this.m1 = shade;
  this.m0 = painter;
  this.fM = [];
}
$p = $c_Ltrivalibs_graphics_painter_InstanceList.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_InstanceList;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_InstanceList() {
}
$h_Ltrivalibs_graphics_painter_InstanceList.prototype = $p;
$p.F = (function() {
  return (this.fM.length | 0);
});
$p.nS = (function() {
  var inst = new $c_Ltrivalibs_graphics_painter_Instance(this.m1, this.m0);
  this.fM.push(inst);
  return (((this.fM.length | 0) - 1) | 0);
});
var $d_Ltrivalibs_graphics_painter_InstanceList = new $TypeData().i($c_Ltrivalibs_graphics_painter_InstanceList, "trivalibs.graphics.painter.InstanceList", ({
  fi: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_LayerBindCache(panelId, epoch, valueGroup, panelGroup) {
  this.m3 = 0;
  this.m2 = 0;
  this.jE = null;
  this.jD = null;
  this.m3 = panelId;
  this.m2 = epoch;
  this.jE = valueGroup;
  this.jD = panelGroup;
}
$p = $c_Ltrivalibs_graphics_painter_LayerBindCache.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_LayerBindCache;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_LayerBindCache() {
}
$h_Ltrivalibs_graphics_painter_LayerBindCache.prototype = $p;
var $d_Ltrivalibs_graphics_painter_LayerBindCache = new $TypeData().i($c_Ltrivalibs_graphics_painter_LayerBindCache, "trivalibs.graphics.painter.LayerBindCache", ({
  fk: 1
}));
function $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var w = $thiz.qz();
  var h = $thiz.oT();
  panel.oA(w, h);
  var msaa = panel.gE;
  var encoder = $thiz.e.createCommandEncoder();
  var panelFormats = panel.k8();
  var colorAttachments = [];
  var t = 0;
  while ((t < panel.ql())) {
    if ((panel.is !== null)) {
      var opt$proxy2 = panel.is;
      if (msaa) {
        var _2 = panel.nr(t);
        var TextureViewBundle_this = panel.a5[t];
        var _2$1 = TextureViewBundle_this.aQ[0];
        var value = opt$proxy2.fF;
        var value$1 = opt$proxy2.fG;
        var value$2 = opt$proxy2.fH;
        var value$3 = opt$proxy2.fE;
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
        var TextureViewBundle_this$2 = panel.a5[t];
        var _2$3 = TextureViewBundle_this$2.aQ[0];
        var value$4 = opt$proxy2.fF;
        var value$5 = opt$proxy2.fG;
        var value$6 = opt$proxy2.fH;
        var value$7 = opt$proxy2.fE;
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
      var _2$5 = panel.nr(t);
      var TextureViewBundle_this$3 = panel.a5[t];
      var _2$6 = TextureViewBundle_this$3.aQ[0];
      var attachment = ({
        "view": _2$5,
        "resolveTarget": _2$6,
        "loadOp": "load",
        "storeOp": "store"
      });
    } else {
      var TextureViewBundle_this$4 = panel.a5[t];
      var _2$7 = TextureViewBundle_this$4.aQ[0];
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
  if (panel.hh) {
    var _2$8 = panel.mX();
    passDesc.depthStencilAttachment = ({
      "view": _2$8,
      "depthLoadOp": "clear",
      "depthStoreOp": "store",
      "depthClearValue": 1.0
    });
  }
  var shapePass = encoder.beginRenderPass(passDesc);
  var i = 0;
  while ((i < (panel.it.length | 0))) {
    $p_Ltrivalibs_graphics_painter_Painter__renderShapeOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shape__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_Panel__V($thiz, shapePass, panel.it[i], panel.hh, msaa, panelFormats, panel);
    i = ((1 + i) | 0);
  }
  shapePass.end();
  $thiz.aP.submit([encoder.finish()]);
  if (panel.he) {
    $p_Ltrivalibs_graphics_painter_Painter__resolvePanelDepth__Ltrivalibs_graphics_painter_Panel__V($thiz, panel);
  }
  var curEncoder = null;
  var curPass = null;
  var j = 0;
  while ((j < (panel.bJ.length | 0))) {
    var layer = panel.bJ[j];
    var needsPingPong = layer.mT();
    if ((layer.h9 >= 0)) {
      if ((curPass !== null)) {
        curPass.end();
        $thiz.aP.submit([curEncoder.finish()]);
        curPass = null;
      }
      var mipDstView = panel.a5[0].aQ[layer.h9];
      var mipSrcView = ((layer.im >= 0) ? panel.a5[0].aQ[layer.im] : panel.iT());
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
      $thiz.aP.submit([enc.finish()]);
    } else if (needsPingPong) {
      if ((curPass !== null)) {
        curPass.end();
        $thiz.aP.submit([curEncoder.finish()]);
        curPass = null;
      }
      var enc$2 = $thiz.e.createCommandEncoder();
      var _2$10 = panel.pT();
      var _2$11 = [({
        "view": _2$10,
        "loadOp": "load",
        "storeOp": "store"
      })];
      var ppPass = enc$2.beginRenderPass(({
        "colorAttachments": _2$11
      }));
      $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V($thiz, ppPass, layer, false, false, panelFormats, panel.iT(), panel);
      ppPass.end();
      $thiz.aP.submit([enc$2.finish()]);
      panel.qj();
    } else {
      if ((curPass === null)) {
        curEncoder = $thiz.e.createCommandEncoder();
        var $x_1 = curEncoder;
        var _2$12 = panel.iT();
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
    $thiz.aP.submit([curEncoder.finish()]);
  }
  var hasMipTargetLayers = false;
  var mi = 0;
  while ((mi < (panel.bJ.length | 0))) {
    if ((panel.bJ[mi].h9 >= 0)) {
      hasMipTargetLayers = true;
    }
    mi = ((1 + mi) | 0);
  }
  if (((panel.kc() > 1) && (!hasMipTargetLayers))) {
    $p_Ltrivalibs_graphics_painter_Painter__generateMipmaps__Ltrivalibs_graphics_painter_Panel__V($thiz, panel);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__blitSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz) {
  if ((!$thiz.m9)) {
    $thiz.m8 = $thiz.e.createSampler(({
      "magFilter": "nearest",
      "minFilter": "nearest"
    }));
    $thiz.m9 = true;
  }
  return $thiz.m8;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz) {
  if ((!$thiz.m5)) {
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
    $thiz.m4 = $x_1;
    $thiz.m5 = true;
  }
  return $thiz.m4;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitPipeline__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz) {
  if ((!$thiz.m7)) {
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
    var f$proxy4 = $thiz.gB;
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
    $thiz.m6 = $x_2;
    $thiz.m7 = true;
  }
  return $thiz.m6;
}
function $p_Ltrivalibs_graphics_painter_Painter__depthResolveBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz) {
  if ((!$thiz.mc)) {
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
    $thiz.mb = $x_1;
    $thiz.mc = true;
  }
  return $thiz.mb;
}
function $p_Ltrivalibs_graphics_painter_Painter__depthResolvePipeline__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz) {
  if ((!$thiz.me)) {
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
    $thiz.md = $x_2;
    $thiz.me = true;
  }
  return $thiz.md;
}
function $p_Ltrivalibs_graphics_painter_Painter__resolvePanelDepth__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var encoder = $thiz.e.createCommandEncoder();
  var _2 = [];
  var _2$1 = panel.q3();
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
  var _2$4 = panel.mX();
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
  $thiz.aP.submit([encoder.finish()]);
}
function $p_Ltrivalibs_graphics_painter_Painter__mipBlitSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz) {
  if ((!$thiz.mg)) {
    $thiz.mf = $thiz.e.createSampler(({
      "magFilter": "linear",
      "minFilter": "linear"
    }));
    $thiz.mg = true;
  }
  return $thiz.mf;
}
function $p_Ltrivalibs_graphics_painter_Painter__getMipBlitPipeline__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, format) {
  if ((!(!(!(!$thiz.io.hasOwnProperty(format)))))) {
    return $thiz.io[format];
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
    $thiz.io[format] = p;
    return p;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__generateMipmaps__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var mipCount = panel.kc();
  if ((mipCount <= 1)) {
    return (void 0);
  }
  var fmt = (((panel.fO.length | 0) > 0) ? panel.fO[0] : $thiz.gB);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getMipBlitPipeline__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, fmt);
  var i = 1;
  while ((i < mipCount)) {
    var srcView = panel.a5[0].aQ[((i - 1) | 0)];
    var dstView = panel.a5[0].aQ[i];
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
    $thiz.aP.submit([encoder.finish()]);
    i = ((1 + i) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, bindings, panelBindings) {
  $thiz.aJ.length = (bindings.length | 0);
  var i = 0;
  while ((i < (bindings.length | 0))) {
    $thiz.aJ[i] = bindings[i];
    i = ((1 + i) | 0);
  }
  $thiz.al.length = (panelBindings.length | 0);
  var j = 0;
  while ((j < (panelBindings.length | 0))) {
    $thiz.al[j] = panelBindings[j];
    j = ((1 + j) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shade, workBindings, workPanelBindings) {
  var dict = panel.hj;
  var keys = Object.keys(dict);
  var i = 0;
  while ((i < (keys.length | 0))) {
    var name = keys[i];
    var value = dict[name];
    if ((!(!(!(!shade.I.hasOwnProperty(name)))))) {
      var idx = (shade.I[name] | 0);
      if (((idx >= (workBindings.length | 0)) || (workBindings[idx] === null))) {
        while (((workBindings.length | 0) <= idx)) {
          workBindings.push(null);
        }
        workBindings[idx] = value;
      }
    } else if ((!(!(!(!shade.az.hasOwnProperty(name)))))) {
      var idx$2 = (shade.az[name] | 0);
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
  while ((i < (inst.aI.length | 0))) {
    if ((inst.aI[i] !== null)) {
      while (((workBindings.length | 0) <= i)) {
        workBindings.push(null);
      }
      workBindings[i] = inst.aI[i];
    }
    i = ((1 + i) | 0);
  }
  var j = 0;
  while ((j < (inst.ik.length | 0))) {
    if ((inst.ik[j] !== null)) {
      while (((workPanelBindings.length | 0) <= j)) {
        workPanelBindings.push(null);
      }
      workPanelBindings[j] = inst.ik[j];
    }
    j = ((1 + j) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel) {
  return ((panel !== null) && ((Object.keys(panel.hj).length | 0) > 0));
}
function $p_Ltrivalibs_graphics_painter_Painter__buildValueBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, shade, bindings) {
  if ((((bindings.length | 0) > 0) && (shade.jH !== null))) {
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
    var _2 = shade.jH;
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
  if ((shade.iw !== null)) {
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
        var view = ((!(!pb.depth)) ? pb.panel.oo() : (((pb.mipLevel | 0) < 0) ? pb.panel.a5[(pb.index | 0)].ml : pb.panel.a5[(pb.index | 0)].aQ[(pb.mipLevel | 0)]));
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
      var _2 = shade.iw;
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
  var fmts = ((formats !== null) ? formats : [$thiz.gB]);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, shape.X, shape.jJ, fmts, depthTest, multisample, shape.hk.jy, shape.jK, shape.hk.jw, shape.hk.jx);
  pass.setPipeline(pipeline);
  var form = shape.hk;
  var bufferCount = form.fJ;
  var instanceCount = shape.jL.F();
  var hasPanelBinds = $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel);
  if ((instanceCount === 0)) {
    if (hasPanelBinds) {
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, shape.V, shape.a8);
      $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shape.X, $thiz.aJ, $thiz.al);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.X, $thiz.aJ);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.X, $thiz.al, null);
    } else {
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.X, shape.V);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.X, shape.a8, null);
    }
    var b = 0;
    while ((b < bufferCount)) {
      var buf = form.fK[b];
      if ((buf.gz > 0)) {
        pass.setVertexBuffer(0, buf.bI, 0.0, buf.ij);
        if ((buf.bH > 0)) {
          pass.setIndexBuffer(buf.bG, buf.fL, 0.0, buf.h8);
          pass.drawIndexed(buf.bH);
        } else {
          pass.draw(buf.gz);
        }
      }
      b = ((1 + b) | 0);
    }
  } else {
    var i = 0;
    while ((i < instanceCount)) {
      var inst = shape.jL.fM[i];
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, shape.V, shape.a8);
      if (hasPanelBinds) {
        $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shape.X, $thiz.aJ, $thiz.al);
      }
      $p_Ltrivalibs_graphics_painter_Painter__applyInstanceBindings__Ltrivalibs_graphics_painter_Instance__sjs_js_Array__sjs_js_Array__V($thiz, inst, $thiz.aJ, $thiz.al);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.X, $thiz.aJ);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.X, $thiz.al, null);
      var b$2 = 0;
      while ((b$2 < bufferCount)) {
        var buf$2 = form.fK[b$2];
        if ((buf$2.gz > 0)) {
          pass.setVertexBuffer(0, buf$2.bI, 0.0, buf$2.ij);
          if ((buf$2.bH > 0)) {
            pass.setIndexBuffer(buf$2.bG, buf$2.fL, 0.0, buf$2.h8);
            pass.drawIndexed(buf$2.bH);
          } else {
            pass.draw(buf$2.gz);
          }
        }
        b$2 = ((1 + b$2) | 0);
      }
      i = ((1 + i) | 0);
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V($thiz, pass, layer, depthTest, multisample, formats, srcView, panel) {
  var fmts = ((formats !== null) ? formats : [$thiz.gB]);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, layer.w, layer.jC, fmts, depthTest, multisample, "triangle-list", "none", "ccw", null);
  pass.setPipeline(pipeline);
  var instanceCount = layer.il.F();
  var hasPanelBinds = $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel);
  if ((instanceCount === 0)) {
    if (hasPanelBinds) {
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, layer.i, layer.Q);
      $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, layer.w, $thiz.aJ, $thiz.al);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, layer.w, $thiz.aJ);
      var effectiveSrcView = (((($thiz.al.length | 0) > 0) && ($thiz.al[0] !== null)) ? null : srcView);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer.w, $thiz.al, effectiveSrcView);
    } else {
      var c = layer.O;
      if (((((c !== null) && (panel !== null)) && (c.m3 === panel.jG)) && (c.m2 === panel.fN))) {
        if ((c.jE !== null)) {
          pass.setBindGroup(0, c.jE);
        }
        if ((c.jD !== null)) {
          pass.setBindGroup(1, c.jD);
        }
      } else {
        var vg = $p_Ltrivalibs_graphics_painter_Painter__buildValueBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, layer.w, layer.i);
        var pg = $p_Ltrivalibs_graphics_painter_Painter__buildPanelBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, layer.w, layer.Q, srcView);
        if ((vg !== null)) {
          pass.setBindGroup(0, vg);
        }
        if ((pg !== null)) {
          pass.setBindGroup(1, pg);
        }
        layer.O = ((panel !== null) ? new $c_Ltrivalibs_graphics_painter_LayerBindCache(panel.jG, panel.fN, vg, pg) : null);
      }
    }
    pass.draw(3);
  } else {
    var i = 0;
    while ((i < instanceCount)) {
      var inst = layer.il.fM[i];
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, layer.i, layer.Q);
      if (hasPanelBinds) {
        $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, layer.w, $thiz.aJ, $thiz.al);
      }
      $p_Ltrivalibs_graphics_painter_Painter__applyInstanceBindings__Ltrivalibs_graphics_painter_Instance__sjs_js_Array__sjs_js_Array__V($thiz, inst, $thiz.aJ, $thiz.al);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, layer.w, $thiz.aJ);
      var effectiveSrcView$2 = (((($thiz.al.length | 0) > 0) && ($thiz.al[0] !== null)) ? null : srcView);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer.w, $thiz.al, effectiveSrcView$2);
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
  var key = (((((((((((((((shade.mj + "|") + $p_Ltrivalibs_graphics_painter_Painter__blendKeyStr__Ltrivalibs_graphics_painter_BlendState__T($thiz, blendState)) + "|") + formats.join(",")) + "|") + depthTest) + "|") + multisample) + "|") + topology) + "|") + cullMode) + "|") + frontFace) + stripKey);
  var cached = $thiz.jF[key];
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
    if ((shade.jI !== null)) {
      var _2 = shade.ix;
      var _2$1 = [shade.jI];
      var vertexDescriptor = ({
        "module": _2,
        "entryPoint": "vs_main",
        "buffers": _2$1
      });
    } else {
      var _2$2 = shade.ix;
      var vertexDescriptor = ({
        "module": _2$2,
        "entryPoint": "vs_main"
      });
    }
    var _2$3 = shade.mk;
    var _2$4 = shade.ix;
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
    $thiz.jF[key] = p;
    return p;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__bindingEntry__I__O__sjs_js_Dynamic($thiz, i, b) {
  if ((b instanceof $c_Ltrivalibs_graphics_buffers_BufferBinding)) {
    var _2 = b.H;
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
  this.aP = null;
  this.gA = null;
  this.ma = null;
  this.gB = null;
  this.jF = null;
  this.q = 0;
  this.ip = null;
  this.mh = null;
  this.mi = false;
  this.m8 = null;
  this.m9 = false;
  this.m4 = null;
  this.m5 = false;
  this.m6 = null;
  this.m7 = false;
  this.mb = null;
  this.mc = false;
  this.md = null;
  this.me = false;
  this.mf = null;
  this.mg = false;
  this.io = null;
  this.aJ = null;
  this.al = null;
  this.e = device;
  this.aP = queue;
  this.gA = canvas;
  this.ma = context;
  this.gB = preferredFormat;
  this.jF = ({});
  this.q = 0;
  this.ip = [];
  this.io = ({});
  this.aJ = [];
  this.al = [];
}
$p = $c_Ltrivalibs_graphics_painter_Painter.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Painter;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Painter() {
}
$h_Ltrivalibs_graphics_painter_Painter.prototype = $p;
$p.pM = (function(cb) {
  this.ip.push(cb);
  cb.bc((this.gA.width | 0), (this.gA.height | 0));
});
$p.oG = (function(w, h) {
  var k = 0;
  while ((k < (this.ip.length | 0))) {
    this.ip[k].bc(w, h);
    k = ((1 + k) | 0);
  }
});
$p.qz = (function() {
  return (this.gA.width | 0);
});
$p.oT = (function() {
  return (this.gA.height | 0);
});
$p.q5 = (function(magFilter, minFilter, mipmapFilter, addressMode, addressModeU, addressModeV) {
  var $x_1 = this.e;
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
$p.ke = (function() {
  if ((!this.mi)) {
    this.mh = this.q5("linear", "linear", "linear", "clamp-to-edge", (void 0), (void 0));
    this.mi = true;
  }
  return this.mh;
});
$p.n2 = (function(geometry, vertices, geometries, verticesAll, topology, frontFace) {
  return new $c_Ltrivalibs_graphics_painter_Form(this).q9(geometry, vertices, geometries, verticesAll, topology, frontFace);
});
$p.hW = (function(form, shade, cullMode, blendState) {
  return new $c_Ltrivalibs_graphics_painter_Shape(this, form, shade).qb(cullMode, blendState);
});
$p.bd = (function(shade, blendState, mipSource, mipTarget) {
  return new $c_Ltrivalibs_graphics_painter_Layer(this, shade).qa(blendState, mipSource, mipTarget);
});
$p.br = (function(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers) {
  return new $c_Ltrivalibs_graphics_painter_Panel(this).hV(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers);
});
$p.qd = (function(panel) {
  var encoder = this.e.createCommandEncoder();
  var swapChainView = this.ma.getCurrentTexture().createView();
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
  var _2$2 = panel.iT();
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
  this.aP.submit([encoder.finish()]);
});
var $d_Ltrivalibs_graphics_painter_Painter = new $TypeData().i($c_Ltrivalibs_graphics_painter_Painter, "trivalibs.graphics.painter.Painter", ({
  fl: 1
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
$p.oW = (function(canvas) {
  var maybeGpu = $m_Ltrivalibs_graphics_painter_WebGPU$().oO();
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
        var context = $m_Ltrivalibs_graphics_painter_WebGPU$().oN(canvas);
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
            painter.oG(rw, rh);
          }
        }));
        observer.observe(canvas);
        return painter;
      }));
      return promise$proxy2.then($m_sjs_js_Any$().hA(f$proxy10));
    }));
    return promise$proxy3.then($m_sjs_js_Any$().hA(f$proxy11));
  }
});
$p.oV = (function(canvas, setup) {
  var promise$proxy4 = this.oW(canvas);
  return promise$proxy4.then($m_sjs_js_Any$().hA(setup));
});
var $d_Ltrivalibs_graphics_painter_Painter$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_Painter$, "trivalibs.graphics.painter.Painter$", ({
  fm: 1
}));
var $n_Ltrivalibs_graphics_painter_Painter$;
function $m_Ltrivalibs_graphics_painter_Painter$() {
  if ((!$n_Ltrivalibs_graphics_painter_Painter$)) {
    $n_Ltrivalibs_graphics_painter_Painter$ = new $c_Ltrivalibs_graphics_painter_Painter$();
  }
  return $n_Ltrivalibs_graphics_painter_Painter$;
}
function $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V($thiz) {
  if (($thiz.hc !== null)) {
    var opt$proxy4 = $thiz.hc;
    opt$proxy4.destroy();
  }
  if (($thiz.hf !== null)) {
    var opt$proxy6 = $thiz.hf;
    opt$proxy6.destroy();
  }
  var depthUsage = ($thiz.hb ? 20 : 16);
  var $x_1 = $thiz.fP.e;
  var value = $thiz.gD;
  var value$1 = $thiz.gC;
  var _2 = ({
    "width": value,
    "height": value$1
  });
  var _2$1 = ($thiz.gE ? 4 : 1);
  var depthTex = $x_1.createTexture(({
    "size": _2,
    "format": "depth24plus",
    "usage": depthUsage,
    "sampleCount": _2$1
  }));
  $thiz.hc = depthTex;
  $thiz.iq = depthTex.createView();
  if (($thiz.hb && $thiz.gE)) {
    var $x_2 = $thiz.fP.e;
    var value$2 = $thiz.gD;
    var value$3 = $thiz.gC;
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
    $thiz.hf = resTex;
    $thiz.hg = resTex.createView();
    $thiz.he = true;
  } else {
    $thiz.hf = null;
    $thiz.hg = null;
    $thiz.he = false;
  }
}
function $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z($thiz) {
  var i = 0;
  while ((i < ($thiz.bJ.length | 0))) {
    if ($thiz.bJ[i].mT()) {
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
  this.fP = null;
  this.iv = 0;
  this.iu = 0;
  this.is = null;
  this.hh = false;
  this.gE = false;
  this.hi = 0;
  this.fO = null;
  this.it = null;
  this.bJ = null;
  this.hj = null;
  this.jG = 0;
  this.fN = 0;
  this.b7 = null;
  this.a5 = null;
  this.hc = null;
  this.iq = null;
  this.hb = false;
  this.hf = null;
  this.hg = null;
  this.he = false;
  this.hd = null;
  this.ir = null;
  this.gD = 0;
  this.gC = 0;
  this.fP = painter;
  this.iv = 0;
  this.iu = 0;
  this.is = null;
  this.hh = false;
  this.gE = false;
  this.hi = 1;
  this.fO = [];
  this.it = [];
  this.bJ = [];
  this.hj = ({});
  $m_Ltrivalibs_graphics_painter_panel$package$().iy = ((1 + $m_Ltrivalibs_graphics_painter_panel$package$().iy) | 0);
  this.jG = $m_Ltrivalibs_graphics_painter_panel$package$().iy;
  this.fN = 0;
  this.b7 = [];
  this.a5 = [];
  this.hc = null;
  this.iq = null;
  this.hb = false;
  this.hf = null;
  this.hg = null;
  this.he = false;
  this.hd = [];
  this.ir = [];
  this.gD = 0;
  this.gC = 0;
}
$p = $c_Ltrivalibs_graphics_painter_Panel.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Panel;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Panel() {
}
$h_Ltrivalibs_graphics_painter_Panel.prototype = $p;
$p.kc = (function() {
  if ((this.hi === 0)) {
    var a = this.gD;
    var b = this.gC;
    var maxDim = ((a > b) ? a : b);
    if ((maxDim <= 0)) {
      return 1;
    } else {
      var a$1 = maxDim;
      return ((1 + $doubleToInt(((+Math.log(a$1)) / (+Math.log(2.0))))) | 0);
    }
  } else {
    return this.hi;
  }
});
$p.k8 = (function() {
  return (((this.fO.length | 0) === 0) ? [this.fP.gB] : this.fO);
});
$p.ql = (function() {
  return (this.k8().length | 0);
});
$p.iT = (function() {
  var TextureViewBundle_this = this.a5[0];
  return TextureViewBundle_this.aQ[0];
});
$p.pT = (function() {
  var TextureViewBundle_this = this.a5[1];
  return TextureViewBundle_this.aQ[0];
});
$p.mX = (function() {
  return this.iq;
});
$p.q3 = (function() {
  return this.hg;
});
$p.nr = (function(index) {
  return this.ir[index];
});
$p.qj = (function() {
  var t = this.b7[0];
  this.b7[0] = this.b7[1];
  this.b7[1] = t;
  var sv = this.a5[0];
  this.a5[0] = this.a5[1];
  this.a5[1] = sv;
  this.fN = ((1 + this.fN) | 0);
});
$p.oo = (function() {
  if (((!this.hb) && (this.hc !== null))) {
    this.hb = true;
    $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V(this);
  }
  return (this.he ? this.hg : this.iq);
});
$p.od = (function(index, mipLevel, depth) {
  return new ($a_Ltrivalibs_graphics_painter_PanelBinding())(this, index, mipLevel, depth);
});
$p.hV = (function(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers) {
  if ((width !== (void 0))) {
    var v = (width | 0);
    this.iv = v;
  }
  if ((height !== (void 0))) {
    var v$1 = (height | 0);
    this.iu = v$1;
  }
  if ((clearColor !== (void 0))) {
    this.is = ((clearColor === null) ? null : new $c_Ltrivalibs_graphics_math_cpu_Vec4(clearColor.fF, clearColor.fG, clearColor.fH, clearColor.fE));
  }
  if ((depthTest !== (void 0))) {
    var v$2 = (!(!depthTest));
    this.hh = v$2;
  }
  if ((multisample !== (void 0))) {
    var v$3 = (!(!multisample));
    this.gE = v$3;
  }
  if ((mips !== (void 0))) {
    if ((!(!mips))) {
      this.hi = 0;
    }
  }
  if ((mipLevels !== (void 0))) {
    var v$5 = (mipLevels | 0);
    if ((v$5 > 0)) {
      this.hi = v$5;
    }
  }
  var x$1 = ((formats === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy1$1__O__O(this, format) : formats);
  if ((x$1 !== (void 0))) {
    this.fO = x$1;
  }
  var x$2 = ((shapes === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy2$1__O__O(this, shape) : shapes);
  if ((x$2 !== (void 0))) {
    this.it = x$2;
  }
  var x$3 = ((layers === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy3$1__O__O(this, layer) : layers);
  if ((x$3 !== (void 0))) {
    this.bJ = x$3;
  }
  if ((((this.fO.length | 0) > 1) && $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z(this))) {
    throw new $c_sjs_js_JavaScriptException(Error("Panel: MRT (multiple formats) cannot host auto-pong layers. Chain a single-format panel for post-processing instead.")).aF;
  }
  return this;
});
$p.oA = (function(canvasW, canvasH) {
  var targetW = ((this.iv === 0) ? canvasW : this.iv);
  var targetH = ((this.iu === 0) ? canvasH : this.iu);
  if (((targetW !== this.gD) || (targetH !== this.gC))) {
    var d = 0;
    while ((d < (this.b7.length | 0))) {
      this.b7[d].destroy();
      d = ((1 + d) | 0);
    }
    d = 0;
    while ((d < (this.hd.length | 0))) {
      this.hd[d].destroy();
      d = ((1 + d) | 0);
    }
    this.gD = targetW;
    this.gC = targetH;
    var mipCount = this.kc();
    var fmts = this.k8();
    var hasPong = $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z(this);
    this.b7 = [];
    this.a5 = [];
    this.hd = [];
    this.ir = [];
    var i = 0;
    while ((i < (fmts.length | 0))) {
      var fmt = fmts[i];
      var $x_1 = this.fP.e;
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
      this.b7.push(tex);
      this.a5.push($p_Ltrivalibs_graphics_painter_Panel__buildViews__Ltrivalibs_graphics_painter_GPUTexture__I__Ltrivalibs_graphics_painter_TextureViewBundle(this, tex, mipCount));
      if (this.gE) {
        var $x_2 = this.fP.e;
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
        this.hd.push(msaaTex);
        this.ir.push(msaaTex.createView());
      }
      i = ((1 + i) | 0);
    }
    if (hasPong) {
      var $x_3 = this.fP.e;
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
      this.b7.push(pongTex);
      this.a5.push($p_Ltrivalibs_graphics_painter_Panel__buildViews__Ltrivalibs_graphics_painter_GPUTexture__I__Ltrivalibs_graphics_painter_TextureViewBundle(this, pongTex, mipCount));
    }
    if (this.hh) {
      $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V(this);
    }
    this.fN = ((1 + this.fN) | 0);
  }
});
var $d_Ltrivalibs_graphics_painter_Panel = new $TypeData().i($c_Ltrivalibs_graphics_painter_Panel, "trivalibs.graphics.painter.Panel", ({
  fn: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Shade(id, shaderModule, vertexBufferLayout, valueBindGroupLayout, panelBindGroupLayout, pipelineLayout, isLayer, uniformIndices, panelIndices) {
  this.mj = 0;
  this.ix = null;
  this.jI = null;
  this.jH = null;
  this.iw = null;
  this.mk = null;
  this.I = null;
  this.az = null;
  this.mj = id;
  this.ix = shaderModule;
  this.jI = vertexBufferLayout;
  this.jH = valueBindGroupLayout;
  this.iw = panelBindGroupLayout;
  this.mk = pipelineLayout;
  this.I = uniformIndices;
  this.az = panelIndices;
}
$p = $c_Ltrivalibs_graphics_painter_Shade.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Shade;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Shade() {
}
$h_Ltrivalibs_graphics_painter_Shade.prototype = $p;
var $d_Ltrivalibs_graphics_painter_Shade = new $TypeData().i($c_Ltrivalibs_graphics_painter_Shade, "trivalibs.graphics.painter.Shade", ({
  fo: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_TextureViewBundle(perMip, sampling) {
  this.aQ = null;
  this.ml = null;
  this.aQ = perMip;
  this.ml = sampling;
}
$p = $c_Ltrivalibs_graphics_painter_TextureViewBundle.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_TextureViewBundle;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_TextureViewBundle() {
}
$h_Ltrivalibs_graphics_painter_TextureViewBundle.prototype = $p;
var $d_Ltrivalibs_graphics_painter_TextureViewBundle = new $TypeData().i($c_Ltrivalibs_graphics_painter_TextureViewBundle, "trivalibs.graphics.painter.TextureViewBundle", ({
  fq: 1
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
$p.oO = (function() {
  return window.navigator.gpu;
});
$p.oN = (function(canvas) {
  return canvas.getContext("webgpu");
});
var $d_Ltrivalibs_graphics_painter_WebGPU$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_WebGPU$, "trivalibs.graphics.painter.WebGPU$", ({
  fr: 1
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
  this.iy = 0;
  this.iy = 0;
}
$p = $c_Ltrivalibs_graphics_painter_panel$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_panel$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_panel$package$() {
}
$h_Ltrivalibs_graphics_painter_panel$package$.prototype = $p;
var $d_Ltrivalibs_graphics_painter_panel$package$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_panel$package$, "trivalibs.graphics.painter.panel$package$", ({
  fs: 1
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
  this.mm = null;
  this.am = null;
  this.jM = 0.0;
  this.mn = 0.0;
  this.mm = cam;
  this.am = in$1;
  this.jM = sensitivity;
  this.mn = speed;
}
$p = $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController() {
}
$h_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController.prototype = $p;
$p.hZ = (function(tpf) {
  var dist = ((this.mn * tpf) / 1000.0);
  var forward = 0.0;
  if (((this.am.aA.b1("KeyW") || this.am.aA.b1("ArrowUp")) || (this.am.jY.fR && (this.am.aA.ns() === 1)))) {
    forward = (forward + dist);
  }
  if ((((this.am.aA.b1("KeyS") || this.am.aA.b1("ArrowDown")) || this.am.aA.oZ(2)) || (this.am.aA.ns() >= 2))) {
    forward = (forward - dist);
  }
  var left = 0.0;
  if ((this.am.aA.b1("KeyA") || this.am.aA.b1("ArrowLeft"))) {
    left = (left + dist);
  }
  if ((this.am.aA.b1("KeyD") || this.am.aA.b1("ArrowRight"))) {
    left = (left - dist);
  }
  var up = 0.0;
  if (this.am.aA.b1("Space")) {
    up = (up + dist);
  }
  if ((this.am.aA.b1("ShiftLeft") || this.am.aA.b1("ShiftRight"))) {
    up = (up - dist);
  }
  var drag = this.am.jX.on();
  var deltaH = (((-(+drag.a1)) * this.jM) / 1000.0);
  var deltaV = (((-(+drag.ax)) * this.jM) / 1000.0);
  this.mm.pG(forward, left, up, deltaH, deltaV);
});
var $d_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController = new $TypeData().i($c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController, "trivalibs.graphics.scene.BasicFirstPersonCameraController", ({
  ft: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_scene_PerspectiveCamera(fov, aspect, near, far, rotH, rotV, pos, proj) {
  this.gG = 0.0;
  this.hl = 0.0;
  this.gH = 0.0;
  this.gF = 0.0;
  this.aK = 0.0;
  this.bn = 0.0;
  this.ar = null;
  this.iz = null;
  this.gG = fov;
  this.hl = aspect;
  this.gH = near;
  this.gF = far;
  this.aK = rotH;
  this.bn = rotV;
  this.ar = pos;
  this.iz = proj;
}
$p = $c_Ltrivalibs_graphics_scene_PerspectiveCamera.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_PerspectiveCamera;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_PerspectiveCamera() {
}
$h_Ltrivalibs_graphics_scene_PerspectiveCamera.prototype = $p;
$p.kg = (function(fov, aspect, near, far, rotH, rotV, pos) {
  var needsProj = ((((fov !== this.gG) || (aspect !== this.hl)) || (near !== this.gH)) || (far !== this.gF));
  this.gG = fov;
  this.hl = aspect;
  this.gH = near;
  this.gF = far;
  if ((rotH !== this.aK)) {
    this.aK = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().kk(rotH);
  }
  if ((rotV !== this.bn)) {
    this.bn = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().kj(rotV);
  }
  this.ar = pos;
  if (needsProj) {
    this.iz = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($m_Ltrivalibs_graphics_math_cpu_Mat4$(), fov, aspect, near, far);
  }
});
$p.pG = (function(forward, left, up, deltaH, deltaV) {
  if ((deltaH !== 0.0)) {
    this.aK = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().kk((this.aK + deltaH));
  }
  if ((deltaV !== 0.0)) {
    this.bn = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().kj((this.bn + deltaV));
  }
  if ((up !== 0.0)) {
    this.ar = new $c_Ltrivalibs_graphics_math_cpu_Vec3(this.ar.y, (this.ar.A + up), this.ar.z);
  }
  if ((forward !== 0.0)) {
    var $x_4 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().Z();
    var $x_3 = this.ar;
    var $x_2 = $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$();
    var $x_1 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().Z();
    var p$proxy1 = this.aK;
    var x$1 = (-(+Math.sin(p$proxy1)));
    var p$proxy2 = this.aK;
    this.ar = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($x_4, $x_3, $x_2, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($x_1, new $c_Ltrivalibs_graphics_math_cpu_Vec3(x$1, 0.0, (-(+Math.cos(p$proxy2)))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), forward));
  }
  if ((left !== 0.0)) {
    var $x_9 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().Z();
    var $x_8 = this.ar;
    var $x_7 = $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$();
    var $x_6 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().Z();
    var p$proxy3 = this.aK;
    var $x_5 = Math.cos(p$proxy3);
    var p$proxy4 = this.aK;
    this.ar = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($x_9, $x_8, $x_7, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($x_6, new $c_Ltrivalibs_graphics_math_cpu_Vec3((-(+$x_5)), 0.0, (+Math.sin(p$proxy4))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), left));
  }
});
$p.qq = (function() {
  return new $c_Ltrivalibs_graphics_scene_Transform(this.ar, $f_Ltrivalibs_graphics_math_cpu_QuatImmutableOps__quatMul__O__Ltrivalibs_graphics_math_Vec4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$(), $m_Ltrivalibs_graphics_math_cpu_Quat$().k9(this.aK), $m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$(), $m_Ltrivalibs_graphics_math_cpu_Quat$().oM(this.bn)), new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0));
});
$p.nB = (function() {
  var $x_1 = $m_Ltrivalibs_graphics_math_cpu_Mat4$().gN();
  var t = this.qq();
  return $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($x_1, $m_Ltrivalibs_graphics_math_cpu_Mat4$().ka(t.mq, t.mo, t.mp), $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
});
var $d_Ltrivalibs_graphics_scene_PerspectiveCamera = new $TypeData().i($c_Ltrivalibs_graphics_scene_PerspectiveCamera, "trivalibs.graphics.scene.PerspectiveCamera", ({
  fu: 1
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
$p.kk = (function(a) {
  var r = (a % 6.283185307179586);
  return ((r < 0.0) ? (r + 6.283185307179586) : r);
});
$p.kj = (function(a) {
  return ((a < (-1.5707963267948966)) ? (-1.5707963267948966) : ((a > 1.5707963267948966) ? 1.5707963267948966 : a));
});
$p.nY = (function(fov, aspect, near, far, rotH, rotV, pos) {
  var proj = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($m_Ltrivalibs_graphics_math_cpu_Mat4$(), fov, aspect, near, far);
  return new $c_Ltrivalibs_graphics_scene_PerspectiveCamera(fov, aspect, near, far, this.kk(rotH), this.kj(rotV), pos, proj);
});
var $d_Ltrivalibs_graphics_scene_PerspectiveCamera$ = new $TypeData().i($c_Ltrivalibs_graphics_scene_PerspectiveCamera$, "trivalibs.graphics.scene.PerspectiveCamera$", ({
  fv: 1
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
  this.mq = null;
  this.mo = null;
  this.mp = null;
  this.mq = translation;
  this.mo = rotation;
  this.mp = scale;
}
$p = $c_Ltrivalibs_graphics_scene_Transform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_Transform;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_Transform() {
}
$h_Ltrivalibs_graphics_scene_Transform.prototype = $p;
var $d_Ltrivalibs_graphics_scene_Transform = new $TypeData().i($c_Ltrivalibs_graphics_scene_Transform, "trivalibs.graphics.scene.Transform", ({
  fw: 1
}));
function $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($thiz, builtins) {
  var s = "";
  var i = 0;
  while ((i < (builtins.length | 0))) {
    var b = builtins[i];
    s = ((s + ((((", @builtin(" + b.bf) + ") ") + b.bt) + ": ")) + b.bg);
    i = ((1 + i) | 0);
  }
  return s;
}
function $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($thiz, structName, locNames, locTypes, builtins) {
  var array$1 = $m_sjs_js_ArrayOps$().nD($m_sjs_js_ArrayOps$().nC(locNames, new $c_sjs_js_WrappedArray(locTypes)));
  var len = (array$1.length | 0);
  var res = new Array(len);
  var i = 0;
  while ((i < len)) {
    var $x_2 = i;
    var x0 = array$1[i];
    matchResult3: {
      var $x_1;
      if ((x0 !== null)) {
        var x11 = x0.a1;
        if ((x11 !== null)) {
          var name = x11.a1;
          var typ = x11.ax;
          var $x_1 = (((((("  @location(" + (x0.ax | 0)) + ") ") + name) + ": ") + typ) + ",");
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
        var name$1 = x0$1.bt;
        var builtin = x0$1.bf;
        var typ$1 = x0$1.bg;
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
  var array$1 = $m_sjs_js_ArrayOps$().nD($m_sjs_js_ArrayOps$().nC(names, new $c_sjs_js_WrappedArray(types)));
  var len = (array$1.length | 0);
  var res = new Array(len);
  var i = 0;
  while ((i < len)) {
    var $x_3 = i;
    var x0 = array$1[i];
    matchResult5: {
      var $x_2;
      if ((x0 !== null)) {
        var x20 = x0.a1;
        if ((x20 !== null)) {
          var name = x20.a1;
          var typ = x20.ax;
          var bindingIdx = (x0.ax | 0);
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
  fz: 1
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
  this.T = null;
  this.T = target;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_AssignTarget.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_AssignTarget;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_AssignTarget() {
}
$h_Ltrivalibs_graphics_shader_dsl_AssignTarget.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_AssignTarget = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_AssignTarget, "trivalibs.graphics.shader.dsl.AssignTarget", ({
  fA: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_FnRegistry() {
  this.jN = null;
  this.a2 = null;
  this.jN = ({});
  this.a2 = [];
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FnRegistry() {
}
$h_Ltrivalibs_graphics_shader_dsl_FnRegistry.prototype = $p;
$p.nA = (function(d) {
  if ((!(!(!(!(!this.jN.hasOwnProperty(d.name))))))) {
    this.jN[d.name] = true;
    var array = d.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      this.nA(array[i]);
      i = ((1 + i) | 0);
    }
    this.a2.push(d);
  }
});
var $d_Ltrivalibs_graphics_shader_dsl_FnRegistry = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FnRegistry, "trivalibs.graphics.shader.dsl.FnRegistry", ({
  fB: 1
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
$p.iU = (function(d) {
  var r = this.l;
  if ((r !== null)) {
    r.nA(d);
  }
});
var $d_Ltrivalibs_graphics_shader_dsl_FnRegistry$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FnRegistry$, "trivalibs.graphics.shader.dsl.FnRegistry$", ({
  fC: 1
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
  this.ag = null;
  this.as = null;
  this.P = null;
  this.nK = null;
  this.gI = null;
  this.ag = in$1;
  this.as = out;
  this.P = bindings;
  this.nK = textures;
  this.gI = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "in.position");
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FragmentCtx() {
}
$h_Ltrivalibs_graphics_shader_dsl_FragmentCtx.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_FragmentCtx = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FragmentCtx, "trivalibs.graphics.shader.dsl.FragmentCtx", ({
  fD: 1
}));
function $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, data) {
  if ((!(!(!(!(!$thiz.jO.hasOwnProperty(data.name))))))) {
    var dict = $thiz.jO;
    var key = data.name;
    dict[key] = true;
    var array = data.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, array[i]);
      i = ((1 + i) | 0);
    }
    $thiz.jP.push(data.src);
  }
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_LayerProgram() {
  this.a3 = null;
  this.jP = null;
  this.jO = null;
  this.a3 = "";
  this.jP = [];
  this.jO = ({});
}
$p = $c_Ltrivalibs_graphics_shader_dsl_LayerProgram.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_LayerProgram;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_LayerProgram() {
}
$h_Ltrivalibs_graphics_shader_dsl_LayerProgram.prototype = $p;
$p.at = (function() {
  return this.jP.join("\n\n");
});
var $d_Ltrivalibs_graphics_shader_dsl_LayerProgram = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_LayerProgram, "trivalibs.graphics.shader.dsl.LayerProgram", ({
  fE: 1
}));
function $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, data) {
  if ((!(!(!(!(!$thiz.jQ.hasOwnProperty(data.name))))))) {
    var dict = $thiz.jQ;
    var key = data.name;
    dict[key] = true;
    var array = data.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, array[i]);
      i = ((1 + i) | 0);
    }
    $thiz.jR.push(data.src);
  }
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_Program() {
  this.b8 = null;
  this.aW = null;
  this.jR = null;
  this.jQ = null;
  this.b8 = "";
  this.aW = "";
  this.jR = [];
  this.jQ = ({});
}
$p = $c_Ltrivalibs_graphics_shader_dsl_Program.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_Program;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_Program() {
}
$h_Ltrivalibs_graphics_shader_dsl_Program.prototype = $p;
$p.at = (function() {
  return this.jR.join("\n\n");
});
var $d_Ltrivalibs_graphics_shader_dsl_Program = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_Program, "trivalibs.graphics.shader.dsl.Program", ({
  fF: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(in$1, out, bindings, locals, textures) {
  this.b9 = null;
  this.aX = null;
  this.fQ = null;
  this.b9 = in$1;
  this.aX = out;
  this.fQ = bindings;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_VertexCtx.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_VertexCtx;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_VertexCtx() {
}
$h_Ltrivalibs_graphics_shader_dsl_VertexCtx.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_VertexCtx = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_VertexCtx, "trivalibs.graphics.shader.dsl.VertexCtx", ({
  fK: 1
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
$p.nM = (function() {
  return [];
});
var $d_Ltrivalibs_graphics_shader_dsl_WgslFnData$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_WgslFnData$, "trivalibs.graphics.shader.dsl.WgslFnData$", ({
  fN: 1
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
$p.iP = (function(fn) {
  return fn.name;
});
$p.b2 = (function(fn, ds) {
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
  ds.bp(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((d$3) => {
    if ((!(!(!(!(!seen.hasOwnProperty(d$3.name))))))) {
      seen[d$3.name] = true;
      merged.push(d$3);
    }
  })));
  return new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())(fn.name, fn.src, merged);
});
var $d_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$, "trivalibs.graphics.shader.dsl.fn$package$WgslFn$", ({
  fO: 1
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
$p.M = (function(device, bindGroupLayouts) {
  return device.createPipelineLayout(({
    "bindGroupLayouts": bindGroupLayouts
  }));
});
var $d_Ltrivalibs_graphics_shader_layouts$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_layouts$, "trivalibs.graphics.shader.layouts$", ({
  fP: 1
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
  this.mt = null;
  this.ms = null;
  this.mu = null;
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
  this.mt = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("gaussian_blur_9", src$3);
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
  this.ms = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("box_blur_2d_auto", src$8);
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
  this.mu = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("tent_blur_2d_auto", src$9);
}
$p = $c_Ltrivalibs_graphics_shader_lib_blur_Blur$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_blur_Blur$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_blur_Blur$() {
}
$h_Ltrivalibs_graphics_shader_lib_blur_Blur$.prototype = $p;
var $d_Ltrivalibs_graphics_shader_lib_blur_Blur$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_blur_Blur$, "trivalibs.graphics.shader.lib.blur.Blur$", ({
  fQ: 1
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
  this.iA = null;
  this.iB = null;
  this.iC = null;
  this.mv = null;
  this.mw = null;
  this.jU = null;
  this.mx = null;
  this.my = null;
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
  this.iA = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("permute_3_", src);
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
  this.iB = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("permute_4_", src$2);
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
  this.iC = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("taylor_inv_sqrt_4_", src$3);
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
  this.mv = $x_1.b2(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("simplex_noise_2d", src$4), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.iA]))));
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
  this.mw = $x_2.b2(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("simplex_noise_2d_seeded", src$5), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.iA]))));
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
  this.jU = $x_3.b2(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("simplex_noise_3d", src$6), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.iB, this.iC]))));
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
  this.mx = $x_4.b2(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("simplex_noise_3d_seeded", src$7), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.iB, this.iC]))));
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
  $x_5.b2(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("fbm_simplex_2d", src$8), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.mv]))));
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
  $x_6.b2(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("fbm_simplex_2d_seeded", src$9), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.mw]))));
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
  $x_7.b2(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("fbm_simplex_3d", src$10), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.jU]))));
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
  $x_8.b2(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("fbm_simplex_3d_seeded", src$11), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.mx]))));
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
  $x_9.b2(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("worley_2d", src$12), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.iA]))));
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
  this.my = $x_10.b2(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("simplex_noise_4d", src$16), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([permute1, this.iB, taylorInvSqrt1, this.iC, grad4]))));
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
  $x_11.b2(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("tiling_simplex_noise_2d", src$17), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.my]))));
}
$p = $c_Ltrivalibs_graphics_shader_lib_random_Simplex$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_random_Simplex$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_random_Simplex$() {
}
$h_Ltrivalibs_graphics_shader_lib_random_Simplex$.prototype = $p;
var $d_Ltrivalibs_graphics_shader_lib_random_Simplex$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_random_Simplex$, "trivalibs.graphics.shader.lib.random.Simplex$", ({
  fR: 1
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
  this.mz = null;
  this.jV = null;
  this.ho = 0;
  this.hp = 0.0;
  this.iD = 0.0;
  this.iE = 0.0;
  this.jW = false;
  this.mz = frame;
  this.jV = onFpsCallback;
  this.ho = 0;
  this.hp = 0.0;
  this.iD = 0.0;
  this.iE = (-1.0);
  this.jW = false;
}
$p = $c_Ltrivalibs_utils_animation_Animator.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_animation_Animator;
/** @constructor */
function $h_Ltrivalibs_utils_animation_Animator() {
}
$h_Ltrivalibs_utils_animation_Animator.prototype = $p;
$p.nu = (function(time) {
  this.ho = ((1 + this.ho) | 0);
  if ((this.hp === 0.0)) {
    this.hp = time;
    this.iD = time;
  }
  var fpsElapsed = (time - this.hp);
  if ((fpsElapsed >= 1000.0)) {
    var fps = ((1000.0 * this.ho) / fpsElapsed);
    if (((time - this.iD) >= 1000.0)) {
      var args$proxy1 = $m_sr_ScalaRunTime$().aw(new ($d_sjs_js_Any.r().C)([(fps.toFixed(1) + " FPS")]));
      console.log(...$m_sjsr_Compat$().au(args$proxy1));
      this.iD = time;
      if ((this.jV !== null)) {
        (0, this.jV)(fps);
      }
    }
    this.ho = 0;
    this.hp = time;
  }
  var delta = ((this.iE < 0.0) ? 0.0 : (time - this.iE));
  this.iE = time;
  (0, this.mz)(delta);
  if (this.jW) {
    requestAnimationFrame($m_sjs_js_Any$().hA(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2) => {
      this.nu((+v1$2));
    }))));
  }
});
$p.qh = (function() {
  this.jW = true;
  return requestAnimationFrame($m_sjs_js_Any$().hA(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2) => {
    this.nu((+v1$2));
  }))));
});
var $d_Ltrivalibs_utils_animation_Animator = new $TypeData().i($c_Ltrivalibs_utils_animation_Animator, "trivalibs.utils.animation.Animator", ({
  fY: 1
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
$p.nX = (function(frame) {
  var animator = new $c_Ltrivalibs_utils_animation_Animator(frame, null);
  animator.qh();
  return animator;
});
var $d_Ltrivalibs_utils_animation_animate$package$ = new $TypeData().i($c_Ltrivalibs_utils_animation_animate$package$, "trivalibs.utils.animation.animate$package$", ({
  fZ: 1
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
  this.aA = null;
  this.jX = null;
  this.jY = null;
  this.aA = input;
  this.jX = drag;
  this.jY = hold;
}
$p = $c_Ltrivalibs_utils_events_CanvasInput.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_CanvasInput;
/** @constructor */
function $h_Ltrivalibs_utils_events_CanvasInput() {
}
$h_Ltrivalibs_utils_events_CanvasInput.prototype = $p;
$p.hZ = (function(tpf) {
  this.jX.qs();
  this.jY.hZ(tpf);
});
var $d_Ltrivalibs_utils_events_CanvasInput = new $TypeData().i($c_Ltrivalibs_utils_events_CanvasInput, "trivalibs.utils.events.CanvasInput", ({
  g0: 1
}));
function $ct_Ltrivalibs_utils_events_DragGesture__F0__($thiz, pointersOf) {
  $thiz.mA = pointersOf;
  $thiz.hq = null;
  $thiz.jZ = 0.0;
  $thiz.k0 = 0.0;
  $thiz.iF = 0.0;
  $thiz.iG = 0.0;
  return $thiz;
}
function $ct_Ltrivalibs_utils_events_DragGesture__Ltrivalibs_utils_events_InputState__($thiz, input) {
  $ct_Ltrivalibs_utils_events_DragGesture__F0__($thiz, $ps_Ltrivalibs_utils_events_DragGesture__DragGesture$superArg$1__Ltrivalibs_utils_events_InputState__F0(input));
  return $thiz;
}
function $ps_Ltrivalibs_utils_events_DragGesture__DragGesture$superArg$1__Ltrivalibs_utils_events_InputState__F0(input) {
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => input.aR));
}
/** @constructor */
function $c_Ltrivalibs_utils_events_DragGesture() {
  this.mA = null;
  this.hq = null;
  this.jZ = 0.0;
  this.k0 = 0.0;
  this.iF = 0.0;
  this.iG = 0.0;
}
$p = $c_Ltrivalibs_utils_events_DragGesture.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_DragGesture;
/** @constructor */
function $h_Ltrivalibs_utils_events_DragGesture() {
}
$h_Ltrivalibs_utils_events_DragGesture.prototype = $p;
$p.on = (function() {
  return new $c_T2(this.iF, this.iG);
});
$p.qs = (function() {
  var d = $m_Ltrivalibs_utils_events_gestures$package$().mZ(this.mA.hy());
  if ((d === null)) {
    this.hq = null;
    this.iF = 0.0;
    this.iG = 0.0;
  } else {
    var opt$proxy2 = this.hq;
    var sameDriver = (((opt$proxy2 !== null) && (d.ba !== null)) && ((+this.hq) === (+d.ba)));
    this.iF = (sameDriver ? (d.gK - this.jZ) : 0.0);
    this.iG = (sameDriver ? (d.gL - this.k0) : 0.0);
    this.hq = d.ba;
    this.jZ = d.gK;
    this.k0 = d.gL;
  }
});
var $d_Ltrivalibs_utils_events_DragGesture = new $TypeData().i($c_Ltrivalibs_utils_events_DragGesture, "trivalibs.utils.events.DragGesture", ({
  g1: 1
}));
function $ct_Ltrivalibs_utils_events_HoldGesture__F0__D__D__($thiz, pointersOf, holdDelay, holdRadius) {
  $thiz.mD = pointersOf;
  $thiz.mB = holdDelay;
  $thiz.mC = holdRadius;
  $thiz.hs = null;
  $thiz.gJ = 0.0;
  $thiz.ht = false;
  $thiz.hr = false;
  $thiz.fR = false;
  return $thiz;
}
function $ct_Ltrivalibs_utils_events_HoldGesture__Ltrivalibs_utils_events_InputState__D__D__($thiz, input, holdDelay, holdRadius) {
  $ct_Ltrivalibs_utils_events_HoldGesture__F0__D__D__($thiz, $ps_Ltrivalibs_utils_events_HoldGesture__HoldGesture$superArg$1__Ltrivalibs_utils_events_InputState__D__D__F0(input, holdDelay, holdRadius), holdDelay, holdRadius);
  return $thiz;
}
function $ps_Ltrivalibs_utils_events_HoldGesture__HoldGesture$superArg$1__Ltrivalibs_utils_events_InputState__D__D__F0(input, holdDelay, holdRadius) {
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => input.aR));
}
/** @constructor */
function $c_Ltrivalibs_utils_events_HoldGesture() {
  this.mD = null;
  this.mB = 0.0;
  this.mC = 0.0;
  this.hs = null;
  this.gJ = 0.0;
  this.ht = false;
  this.hr = false;
  this.fR = false;
}
$p = $c_Ltrivalibs_utils_events_HoldGesture.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_HoldGesture;
/** @constructor */
function $h_Ltrivalibs_utils_events_HoldGesture() {
}
$h_Ltrivalibs_utils_events_HoldGesture.prototype = $p;
$p.hZ = (function(tpf) {
  var d = $m_Ltrivalibs_utils_events_gestures$package$().mZ(this.mD.hy());
  if ((d === null)) {
    this.hs = null;
    this.gJ = 0.0;
    this.ht = false;
    this.hr = false;
    this.fR = false;
  } else {
    var pid = d.ba;
    if ((!(((this.hs !== null) && (pid !== null)) && ((+this.hs) === (+pid))))) {
      this.hs = pid;
      this.gJ = 0.0;
      this.ht = false;
      this.hr = false;
    }
    this.gJ = (this.gJ + tpf);
    if (this.hr) {
      this.fR = true;
    } else if ((this.gJ < this.mB)) {
      var dx = (d.gK - d.k2);
      var dy = (d.gL - d.k3);
      var p$proxy1 = ((dx * dx) + (dy * dy));
      if (((+Math.sqrt(p$proxy1)) > this.mC)) {
        this.ht = true;
      }
      this.fR = false;
    } else if (this.ht) {
      this.fR = false;
    } else {
      this.hr = true;
      this.fR = true;
    }
  }
});
var $d_Ltrivalibs_utils_events_HoldGesture = new $TypeData().i($c_Ltrivalibs_utils_events_HoldGesture, "trivalibs.utils.events.HoldGesture", ({
  g2: 1
}));
function $p_Ltrivalibs_utils_events_InputState__freeSlot__Ltrivalibs_utils_events_Pointer($thiz) {
  var i = 0;
  while ((i < ($thiz.hw.length | 0))) {
    if (($thiz.hw[i].ba === null)) {
      return $thiz.hw[i];
    }
    i = ((1 + i) | 0);
  }
  return null;
}
function $p_Ltrivalibs_utils_events_InputState__slotById__D__Ltrivalibs_utils_events_Pointer($thiz, id) {
  var i = 0;
  while ((i < ($thiz.aR.length | 0))) {
    var p = $thiz.aR[i];
    if (((p.ba !== null) && ((+p.ba) === id))) {
      return p;
    }
    i = ((1 + i) | 0);
  }
  return null;
}
function $p_Ltrivalibs_utils_events_InputState__removePointer__D__V($thiz, id) {
  var p = $p_Ltrivalibs_utils_events_InputState__slotById__D__Ltrivalibs_utils_events_Pointer($thiz, id);
  if ((p !== null)) {
    p.ba = null;
    var idx = $m_sjs_js_ArrayOps$().n7($thiz.aR, p, 0);
    if ((idx >= 0)) {
      $thiz.aR.splice(idx, 1);
    }
  }
}
function $p_Ltrivalibs_utils_events_InputState__install__V($thiz) {
  var i = 0;
  while ((i < $thiz.mI)) {
    $thiz.hw.push(new $c_Ltrivalibs_utils_events_Pointer());
    i = ((1 + i) | 0);
  }
  $m_Ltrivalibs_utils_events_keyboard$package$().p2($thiz.hu, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((k$3) => {
    if ((!(!(!(!(!$thiz.hv.hasOwnProperty(k$3))))))) {
      var value$proxy1 = (+Date.now());
      $thiz.hv[k$3] = value$proxy1;
      if ((!($thiz.aB === (void 0)))) {
        var m$proxy3 = $thiz.aB;
        m$proxy3();
      }
    }
  })), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((k$3$1) => {
    delete $thiz.hv[k$3$1];
    if ((!($thiz.aB === (void 0)))) {
      var m$proxy4 = $thiz.aB;
      m$proxy4();
    }
  })), false);
  $m_Ltrivalibs_utils_events_pointer$package$().pR($thiz.mF, $m_Ltrivalibs_utils_events_pointer$package$().pS(), new $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078(((v1$2, v2$2, v3$2, v4$2, v5$2) => {
    var button = (v1$2 | 0);
    var id = (+v2$2);
    var x$1 = (+v3$2);
    var y = (+v4$2);
    if ($thiz.mH) {
      $thiz.hu.focus();
    }
    var key$proxy3 = ("" + button);
    var value$proxy2 = (+Date.now());
    $thiz.iH[key$proxy3] = value$proxy2;
    var slot = $p_Ltrivalibs_utils_events_InputState__freeSlot__Ltrivalibs_utils_events_Pointer($thiz);
    if ((slot !== null)) {
      slot.ba = id;
      slot.k1 = button;
      (+Date.now());
      slot.k2 = x$1;
      slot.k3 = y;
      slot.gK = x$1;
      slot.gL = y;
      $thiz.aR.push(slot);
      ($thiz.aR.length | 0);
    }
    if ((!($thiz.aB === (void 0)))) {
      var m$proxy5 = $thiz.aB;
      m$proxy5();
    }
  })), new $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(((v1$2$1, v2$2$1, v3$2$1) => {
    var id$1 = (+v1$2$1);
    var x$2 = (+v2$2$1);
    var y$1 = (+v3$2$1);
    var p = $p_Ltrivalibs_utils_events_InputState__slotById__D__Ltrivalibs_utils_events_Pointer($thiz, id$1);
    if ((p !== null)) {
      p.gK = x$2;
      p.gL = y$1;
      if ((($thiz.aR.length | 0) > 0)) {
        $thiz.aR[0];
      }
    }
  })), new $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(((v1$2$2, v2$2$2, v3$2$2, v4$2$1) => {
    var button$1 = (v1$2$2 | 0);
    var id$2 = (+v2$2$2);
    delete $thiz.iH[("" + button$1)];
    $p_Ltrivalibs_utils_events_InputState__removePointer__D__V($thiz, id$2);
    if ((!($thiz.aB === (void 0)))) {
      var m$proxy6 = $thiz.aB;
      m$proxy6();
    }
  })), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2$3) => {
    $p_Ltrivalibs_utils_events_InputState__removePointer__D__V($thiz, (+v1$2$3));
    if ((!($thiz.aB === (void 0)))) {
      var m$proxy7 = $thiz.aB;
      m$proxy7();
    }
  })), $thiz.mJ);
  $thiz.hu.addEventListener("focus", $thiz.mG);
  $thiz.hu.addEventListener("blur", $thiz.mE);
}
/** @constructor */
function $c_Ltrivalibs_utils_events_InputState(el, keyTarget, suppressContextMenu, onActivity, focusOnPointerDown, maxPointers) {
  this.mF = null;
  this.hu = null;
  this.mJ = false;
  this.aB = null;
  this.mH = false;
  this.mI = 0;
  this.hv = null;
  this.iH = null;
  this.hw = null;
  this.aR = null;
  this.mG = null;
  this.mE = null;
  this.mF = el;
  this.hu = keyTarget;
  this.mJ = suppressContextMenu;
  this.aB = onActivity;
  this.mH = focusOnPointerDown;
  this.mI = maxPointers;
  this.hv = ({});
  this.iH = ({});
  this.hw = [];
  this.aR = [];
  if ($m_sr_BoxesRunTime$().c(keyTarget, window)) {
    (!(!document.hasFocus()));
  } else {
    $m_sr_BoxesRunTime$().c(keyTarget, document.activeElement);
  }
  this.mG = ((_$1$3) => {
    if ((!(this.aB === (void 0)))) {
      var m$proxy1 = this.aB;
      m$proxy1();
    }
  });
  this.mE = ((_$2$3) => {
    if ((!(this.aB === (void 0)))) {
      var m$proxy2 = this.aB;
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
$p.b1 = (function(key) {
  return (!(!(!(!this.hv.hasOwnProperty(key)))));
});
$p.oZ = (function(button) {
  var key$proxy7 = ("" + button);
  return (!(!(!(!this.iH.hasOwnProperty(key$proxy7)))));
});
$p.ns = (function() {
  return (this.aR.length | 0);
});
var $d_Ltrivalibs_utils_events_InputState = new $TypeData().i($c_Ltrivalibs_utils_events_InputState, "trivalibs.utils.events.InputState", ({
  g3: 1
}));
/** @constructor */
function $c_Ltrivalibs_utils_events_Pointer() {
  this.ba = null;
  this.k1 = 0;
  this.k2 = 0.0;
  this.k3 = 0.0;
  this.gK = 0.0;
  this.gL = 0.0;
  this.ba = null;
  this.k1 = 0;
  this.k2 = 0.0;
  this.k3 = 0.0;
  this.gK = 0.0;
  this.gL = 0.0;
}
$p = $c_Ltrivalibs_utils_events_Pointer.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_Pointer;
/** @constructor */
function $h_Ltrivalibs_utils_events_Pointer() {
}
$h_Ltrivalibs_utils_events_Pointer.prototype = $p;
var $d_Ltrivalibs_utils_events_Pointer = new $TypeData().i($c_Ltrivalibs_utils_events_Pointer, "trivalibs.utils.events.Pointer", ({
  g4: 1
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
$p.mZ = (function(pointers) {
  var i = 0;
  while ((i < (pointers.length | 0))) {
    var p = pointers[i];
    if ((p.k1 === 0)) {
      return p;
    }
    i = ((1 + i) | 0);
  }
  return null;
});
var $d_Ltrivalibs_utils_events_gestures$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_gestures$package$, "trivalibs.utils.events.gestures$package$", ({
  g5: 1
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
$p.oX = (function(canvas, initialFocus, holdDelay, holdRadius, suppressContextMenu, onActivity) {
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
  g6: 1
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
$p.p2 = (function(el, onDown, onUp, keepDefault) {
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
  g7: 1
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
$p.pR = (function(el, moveTarget, onDown, onMove, onUp, onCancel, suppressContextMenu) {
  var downFn = ((e$3) => {
    onDown.nZ((e$3.button | 0), (+e$3.pointerId), (+e$3.clientX), (+e$3.clientY), (!(!e$3.isPrimary)));
  });
  var moveFn = ((e$3$1) => {
    onMove.mO((+e$3$1.pointerId), (+e$3$1.clientX), (+e$3$1.clientY));
  });
  var upFn = ((e$3$2) => {
    onUp.mN((e$3$2.button | 0), (+e$3$2.pointerId), (+e$3$2.clientX), (+e$3$2.clientY));
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
$p.pS = (function() {
  return window;
});
var $d_Ltrivalibs_utils_events_pointer$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_pointer$package$, "trivalibs.utils.events.pointer$package$", ({
  g8: 1
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
$p.fW = (function(min, max) {
  return (((+Math.random()) * (max - min)) + min);
});
var $d_Ltrivalibs_utils_random_random$package$ = new $TypeData().i($c_Ltrivalibs_utils_random_random$package$, "trivalibs.utils.random.random$package$", ({
  gb: 1
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
  this.iW = null;
  $n_jl_Character$ = this;
  this.iW = new $ac_I(new Int32Array([1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3558, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43504, 43600, 44016, 65296, 66720, 68912, 69734, 69872, 69942, 70096, 70384, 70736, 70864, 71248, 71360, 71472, 71904, 72016, 72784, 73040, 73120, 73552, 92768, 92864, 93008, 120782, 120792, 120802, 120812, 120822, 123200, 123632, 124144, 125264, 130032]));
}
$p = $c_jl_Character$.prototype = new $h_O();
$p.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
}
$h_jl_Character$.prototype = $p;
$p.qn = (function(codePoint) {
  if (((codePoint >>> 0) > 1114111)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return String.fromCodePoint(codePoint);
});
$p.or = (function(codePoint, radix) {
  if ((codePoint < 256)) {
    var value = (((((codePoint - 48) | 0) >>> 0) <= 9) ? ((codePoint - 48) | 0) : (((((codePoint - 65) | 0) >>> 0) <= 25) ? ((codePoint - 55) | 0) : (((((codePoint - 97) | 0) >>> 0) <= 25) ? ((codePoint - 87) | 0) : (-1))));
  } else if (((((codePoint - 65313) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65303) | 0);
  } else if (((((codePoint - 65345) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65335) | 0);
  } else {
    var p = $m_ju_Arrays$().oc(this.iW, codePoint);
    var zeroCodePointIndex = ((p < 0) ? (((-2) - p) | 0) : p);
    if ((zeroCodePointIndex < 0)) {
      var value = (-1);
    } else {
      var v = ((codePoint - this.iW.b[zeroCodePointIndex]) | 0);
      var value = ((v > 9) ? (-1) : v);
    }
  }
  return ((value < radix) ? value : (-1));
});
var $d_jl_Character$ = new $TypeData().i($c_jl_Character$, "java.lang.Character$", ({
  bc: 1,
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
$p.hS = (function(s) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s) + "\""));
});
$p.p0 = (function(s, radix, overflowBarrier) {
  if ((s === null)) {
    $m_jl_Integer$().hS(s);
  }
  var len = s.length;
  if ((len === 0)) {
    $m_jl_Integer$().hS(s);
  }
  var character = $m_jl_Character$();
  var firstChar = s.charCodeAt(0);
  var negative = (firstChar === 45);
  var sign = (negative ? (-1) : 0);
  var i = ((negative || (firstChar === 43)) ? 1 : 0);
  if ((i >= len)) {
    $m_jl_Integer$().hS(s);
  }
  var java$lang$IntFloatBits$Int32Box$$value = 0;
  java$lang$IntFloatBits$Int32Box$$value = 0;
  while ((i !== len)) {
    var x = character.or(s.charCodeAt(i), radix);
    if (((x < 0) || ((java$lang$IntFloatBits$Int32Box$$value >>> 0) > (overflowBarrier >>> 0)))) {
      $m_jl_Integer$().hS(s);
    }
    var x$2 = java$lang$IntFloatBits$Int32Box$$value;
    var x$3 = Math.imul(x$2, radix);
    var v = ((x$3 + x) | 0);
    java$lang$IntFloatBits$Int32Box$$value = v;
    i = ((1 + i) | 0);
  }
  if (((java$lang$IntFloatBits$Int32Box$$value >>> 0) > (((2147483647 - sign) | 0) >>> 0))) {
    $m_jl_Integer$().hS(s);
  }
  return (((java$lang$IntFloatBits$Int32Box$$value ^ sign) - sign) | 0);
});
var $d_jl_Integer$ = new $TypeData().i($c_jl_Integer$, "java.lang.Integer$", ({
  bi: 1,
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
  $thiz.kv = s;
  if (writableStackTrace) {
    $thiz.oF();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.kv = null;
  }
  iK() {
    return this.kv;
  }
  oF() {
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
  o() {
    var className = $objectClassName(this);
    var message = this.iK();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  t() {
    return $c_O.prototype.t.call(this);
  }
  r(that) {
    return $c_O.prototype.r.call(this, that);
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
function $c_s_Console$() {
  this.kx = null;
  $n_s_Console$ = this;
  this.kx = new $c_s_util_DynamicVariable($m_jl_System$Streams$().kt);
}
$p = $c_s_Console$.prototype = new $h_O();
$p.constructor = $c_s_Console$;
/** @constructor */
function $h_s_Console$() {
}
$h_s_Console$.prototype = $p;
$p.pO = (function() {
  return this.kx.iZ;
});
var $d_s_Console$ = new $TypeData().i($c_s_Console$, "scala.Console$", ({
  bB: 1,
  cL: 1
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
$p.qA = (function(xs) {
  if ((xs === null)) {
    return null;
  } else if ((xs.b.length === 0)) {
    var this$2 = $m_scm_ArraySeq$();
    $m_s_reflect_ManifestFactory$ObjectManifest$();
    return this$2.kI;
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
$p.nw = (function(start, end, step, isInclusive) {
  throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ($p_sci_Range$__description__I__I__I__Z__T(this, start, end, step, isInclusive) + ": seqs cannot contain more than Int.MaxValue elements."));
});
$p.q6 = (function(what) {
  return new $c_ju_NoSuchElementException((what + " on empty Range"));
});
var $d_sci_Range$ = new $TypeData().i($c_sci_Range$, "scala.collection.immutable.Range$", ({
  cA: 1,
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
  this.bk = 0.0;
  this.bk = elem;
}
$p = $c_sr_DoubleRef.prototype = new $h_O();
$p.constructor = $c_sr_DoubleRef;
/** @constructor */
function $h_sr_DoubleRef() {
}
$h_sr_DoubleRef.prototype = $p;
$p.o = (function() {
  return ("" + this.bk);
});
var $d_sr_DoubleRef = new $TypeData().i($c_sr_DoubleRef, "scala.runtime.DoubleRef", ({
  d7: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.fy = 0;
  this.kS = 0;
  this.nF = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.fy = $f_T__hashCode__I("Seq");
  this.kS = $f_T__hashCode__I("Map");
  $f_T__hashCode__I("Set");
  this.nF = this.qr($m_sci_Nil$(), this.kS);
}
$p = $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$p.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $p;
$p.kf = (function(xs) {
  return ($is_sc_IndexedSeq(xs) ? this.oU(xs, this.fy) : ((xs instanceof $c_sci_List) ? this.p3(xs, this.fy) : this.pN(xs, this.fy)));
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().i($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  dv: 1,
  du: 1
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
  this.l4 = null;
  this.l3 = null;
  this.l5 = null;
  this.l6 = null;
  this.l4 = p$1;
  this.l3 = bloomP$1;
  this.l5 = resultP$1;
  this.l6 = resultP$1;
}
$p = $c_Lsketchlib_utils_bloom_Bloom$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_bloom_Bloom$$anon$1;
/** @constructor */
function $h_Lsketchlib_utils_bloom_Bloom$$anon$1() {
}
$h_Lsketchlib_utils_bloom_Bloom$$anon$1.prototype = $p;
$p.pQ = (function() {
  var Painter_this = this.l4;
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.l3);
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.l5);
});
var $d_Lsketchlib_utils_bloom_Bloom$$anon$1 = new $TypeData().i($c_Lsketchlib_utils_bloom_Bloom$$anon$1, "sketchlib.utils.bloom.Bloom$$anon$1", ({
  dD: 1,
  dB: 1
}));
function $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1__rebuildLayers__V($thiz) {
  if (($thiz.b6 > 0.0)) {
    var pairs = $m_Lsketchlib_utils_mirror_GaussianMirrorReflection$().qg($thiz.le, $thiz.j9, $thiz.b6, $thiz.j5, $thiz.j4);
    $m_Lsketchlib_utils_mirror_GaussianMirrorReflection$().qf($thiz.j7, $thiz.l8, $thiz.la, $thiz.l9, $thiz.j9, $thiz.i8, $thiz.lf, $thiz.li, $thiz.lj, $thiz.ja, $thiz.jb, $thiz.ld, pairs);
    var layers = [$thiz.l7];
    var i = 0;
    while ((i < (pairs << 1))) {
      layers.push($thiz.j7[i]);
      i = ((1 + i) | 0);
    }
    $thiz.h0.hV((void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), layers);
  }
}
function $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1__applySizing__V($thiz) {
  if (($thiz.b6 > 0.0)) {
    var sigma = ((0.01 * $thiz.j5) * $thiz.b6);
    var p$proxy2 = ($thiz.j6 * sigma);
    var p$proxy3 = (+Math.ceil(p$proxy2));
    var other$proxy4 = (0.5 * $thiz.h2);
    var mx = (+Math.min(p$proxy3, other$proxy4));
    var $x_1 = $thiz.j6;
    var p$proxy4 = $thiz.j4;
    var p$proxy5 = (($x_1 * sigma) * (+Math.max(p$proxy4, 1.0)));
    var p$proxy6 = (+Math.ceil(p$proxy5));
    var other$proxy5 = (0.5 * $thiz.b6);
    var my = (+Math.min(p$proxy6, other$proxy5));
    var pw = $doubleToInt(($thiz.h2 + (2.0 * mx)));
    var ph = $doubleToInt(($thiz.b6 + (2.0 * my)));
    $thiz.i7.hV(pw, ph, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0));
    $thiz.h0.hV(pw, ph, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0));
    var BufferBinding_this = $thiz.ja;
    var value$proxy7 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(pw, ph);
    BufferBinding_this.K.D(BufferBinding_this.k, value$proxy7);
    var $x_3 = BufferBinding_this.J.queue;
    var $x_2 = BufferBinding_this.H;
    var s$proxy9 = BufferBinding_this.k;
    $x_3.writeBuffer($x_2, 0.0, s$proxy9.dv.buffer);
    var BufferBinding_this$3 = $thiz.jb;
    var value$proxy8 = $thiz.b6;
    BufferBinding_this$3.K.D(BufferBinding_this$3.k, value$proxy8);
    var $x_5 = BufferBinding_this$3.J.queue;
    var $x_4 = BufferBinding_this$3.H;
    var s$proxy10 = BufferBinding_this$3.k;
    $x_5.writeBuffer($x_4, 0.0, s$proxy10.dv.buffer);
    $thiz.i5 = ($thiz.h2 / pw);
    $thiz.i6 = ($thiz.b6 / ph);
    var BufferBinding_this$5 = $thiz.lg;
    var value$proxy9 = new $c_Ltrivalibs_graphics_math_cpu_Vec4($thiz.i5, $thiz.i6, (mx / pw), (my / ph));
    BufferBinding_this$5.K.D(BufferBinding_this$5.k, value$proxy9);
    var $x_7 = BufferBinding_this$5.J.queue;
    var $x_6 = BufferBinding_this$5.H;
    var s$proxy11 = BufferBinding_this$5.k;
    $x_7.writeBuffer($x_6, 0.0, s$proxy11.dv.buffer);
    $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1__rebuildLayers__V($thiz);
  }
}
function $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1__default$proxy1$1__Ltrivalibs_graphics_scene_PerspectiveCamera($thiz) {
  throw new $c_sjs_js_JavaScriptException(Error("GaussianMirrorReflection.paint needs a camera (construct with `camera = \u2026`) or an explicit `vp` argument")).aF;
}
function $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1__default$proxy2$1__Ltrivalibs_graphics_math_cpu_Mat4($thiz) {
  var this$1 = (($thiz.j3 !== null) ? $thiz.j3 : $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1__default$proxy1$1__Ltrivalibs_graphics_scene_PerspectiveCamera($thiz));
  return $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().gN(), this$1.iz, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), this$1.nB());
}
/** @constructor */
function $c_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1(mirrorPanel$1, cropPanel$1, blurPanel$1, blurStrength$1, blurRatioVertical$1, bakeLayer$1, pairCache$2, overscan$1, uRes$3, uVisHeight$3, uCrop$1, resolutionScale$1, uBlurStrength$3, strengthScale$2, uRatioVertical$3, uStrengthOffset$3, camera$1, reflMat$1, uVp$1, uInvVp$1, p$4, scaleFactor$3, blurShadeH$2, cachedScale$2, blurShadeV$2, sampler$3) {
  this.l7 = null;
  this.j7 = null;
  this.h0 = null;
  this.j6 = 0.0;
  this.i7 = null;
  this.ja = null;
  this.jb = null;
  this.lg = null;
  this.j8 = 0.0;
  this.h1 = null;
  this.lf = null;
  this.le = 0.0;
  this.li = null;
  this.lj = null;
  this.j3 = null;
  this.lb = null;
  this.lk = null;
  this.lh = null;
  this.i8 = null;
  this.j9 = 0.0;
  this.l8 = null;
  this.la = null;
  this.l9 = null;
  this.ld = null;
  this.lc = null;
  this.j5 = 0.0;
  this.j4 = 0.0;
  this.h2 = 0.0;
  this.b6 = 0.0;
  this.i5 = 0.0;
  this.i6 = 0.0;
  this.l7 = bakeLayer$1;
  this.j7 = pairCache$2;
  this.h0 = blurPanel$1;
  this.j6 = overscan$1;
  this.i7 = mirrorPanel$1;
  this.ja = uRes$3;
  this.jb = uVisHeight$3;
  this.lg = uCrop$1;
  this.j8 = resolutionScale$1;
  this.h1 = cropPanel$1;
  this.lf = uBlurStrength$3;
  this.le = strengthScale$2;
  this.li = uRatioVertical$3;
  this.lj = uStrengthOffset$3;
  this.j3 = camera$1;
  this.lb = reflMat$1;
  this.lk = uVp$1;
  this.lh = uInvVp$1;
  this.i8 = p$4;
  this.j9 = scaleFactor$3;
  this.l8 = blurShadeH$2;
  this.la = cachedScale$2;
  this.l9 = blurShadeV$2;
  this.ld = sampler$3;
  this.lc = ((cropPanel$1 !== null) ? cropPanel$1 : blurPanel$1);
  this.j5 = blurStrength$1;
  this.j4 = blurRatioVertical$1;
  this.h2 = 0.0;
  this.b6 = 0.0;
  this.i5 = 1.0;
  this.i6 = 1.0;
}
$p = $c_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1;
/** @constructor */
function $h_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1() {
}
$h_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1.prototype = $p;
$p.q2 = (function(w, h) {
  var x = $doubleToInt((w * this.j8));
  var sw = ((x > 1) ? x : 1);
  var x$1 = $doubleToInt((h * this.j8));
  var sh = ((x$1 > 1) ? x$1 : 1);
  this.h2 = sw;
  this.b6 = sh;
  if ((this.h1 !== null)) {
    this.h1.hV(sw, sh, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0));
  }
  $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1__applySizing__V(this);
});
$p.pP = (function(vp) {
  var cameraVP = ((vp === (void 0)) ? $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1__default$proxy2$1__Ltrivalibs_graphics_math_cpu_Mat4(this) : vp);
  var m$1 = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().gN(), new $c_Ltrivalibs_graphics_math_cpu_Mat4(this.i5, 0.0, 0.0, 0.0, 0.0, this.i6, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0), $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().gN(), cameraVP, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), this.lb));
  var BufferBinding_this = this.lk;
  BufferBinding_this.K.D(BufferBinding_this.k, m$1);
  var $x_2 = BufferBinding_this.J.queue;
  var $x_1 = BufferBinding_this.H;
  var s$proxy15 = BufferBinding_this.k;
  $x_2.writeBuffer($x_1, 0.0, s$proxy15.dv.buffer);
  var BufferBinding_this$3 = this.lh;
  var value$proxy11 = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().gN(), m$1, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
  BufferBinding_this$3.K.D(BufferBinding_this$3.k, value$proxy11);
  var $x_4 = BufferBinding_this$3.J.queue;
  var $x_3 = BufferBinding_this$3.H;
  var s$proxy16 = BufferBinding_this$3.k;
  $x_4.writeBuffer($x_3, 0.0, s$proxy16.dv.buffer);
  if ((this.h1 !== null)) {
    var Painter_this = this.i8;
    var c$proxy1 = this.h1;
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.i7);
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.h0);
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, c$proxy1);
  } else {
    var Painter_this$2 = this.i8;
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this$2, this.i7);
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this$2, this.h0);
  }
});
var $d_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1 = new $TypeData().i($c_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1, "sketchlib.utils.mirror.GaussianMirrorReflection$$anon$1", ({
  dG: 1,
  dE: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT(uv) {
  this.aq = null;
  this.aq = uv;
}
$p = $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT() {
}
$h_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT.prototype = $p;
var $d_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT, "trivalibs.graphics.buffers.UniformLayout$given_UniformLayout_T", ({
  dL: 1,
  dK: 1
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
$p.qB = (function(ref, value) {
  var value$proxy1 = Math.fround(value);
  var offset$proxy3 = (ref.off | 0);
  ref.dv.setFloat32(offset$proxy3, value$proxy1, true);
});
$p.D = (function(ref, value) {
  this.qB(ref, (+value));
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Double_$times$colon$", ({
  dM: 1,
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
$p.D = (function(ref, value) {
  $f_Ltrivalibs_graphics_math_Mat4MutableOps__set__O__Ltrivalibs_graphics_math_Mat4Mutable__O__Ltrivalibs_graphics_math_Mat4Base__V($m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$().oQ(), ref, $m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$(), value, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Mat4_Mat4Buffer$", ({
  dN: 1,
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
$p.D = (function(ref, value) {
  $f_Ltrivalibs_graphics_math_Vec2MutableOps__set__O__Ltrivalibs_graphics_math_Vec2Mutable__O__Ltrivalibs_graphics_math_Vec2Base__V($m_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$().qu(), ref, $m_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$(), value, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$());
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Vec2_Vec2Buffer$", ({
  dO: 1,
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
$p.qC = (function(ref, value) {
  var value$proxy2 = value.y;
  var value$proxy3 = Math.fround(value$proxy2);
  var offset$proxy5 = (ref.off | 0);
  ref.dv.setFloat32(offset$proxy5, value$proxy3, true);
  var value$proxy4 = value.A;
  var value$proxy5 = Math.fround(value$proxy4);
  var offset$proxy6 = ((4 + (ref.off | 0)) | 0);
  ref.dv.setFloat32(offset$proxy6, value$proxy5, true);
  var value$proxy6 = value.z;
  var value$proxy7 = Math.fround(value$proxy6);
  var offset$proxy7 = ((8 + (ref.off | 0)) | 0);
  ref.dv.setFloat32(offset$proxy7, value$proxy7, true);
});
$p.D = (function(ref, value) {
  this.qC(ref, value);
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Vec3_Vec4Buffer$", ({
  dP: 1,
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
$p.D = (function(ref, value) {
  $f_Ltrivalibs_graphics_math_Vec4MutableOps__set__O__Ltrivalibs_graphics_math_Vec4Mutable__O__Ltrivalibs_graphics_math_Vec4Base__V($m_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$().qv(), ref, $m_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$(), value, $m_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$());
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Vec4_Vec4Buffer$", ({
  dQ: 1,
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
$p.fX = (function(t) {
  return new $c_T2(t.ih, t.ii);
});
var $d_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$, "trivalibs.graphics.geometry.FieldWriter$vec2Writer$", ({
  dV: 1,
  aX: 1
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
$p.fX = (function(t) {
  return new $c_T3(t.y, t.A, t.z);
});
var $d_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$, "trivalibs.graphics.geometry.FieldWriter$vec3Writer$", ({
  dW: 1,
  aX: 1
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
  this.je = null;
  this.je = x$1;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexLayout$named.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexLayout$named;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexLayout$named() {
}
$h_Ltrivalibs_graphics_geometry_VertexLayout$named.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_VertexLayout$named = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayout$named, "trivalibs.graphics.geometry.VertexLayout$named", ({
  e4: 1,
  e3: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons(x$1, x$2) {
  this.lu = null;
  this.lv = null;
  this.lu = x$1;
  this.lv = x$2;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons() {
}
$h_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons.prototype = $p;
$p.qt = (function(t) {
  return $m_sr_Tuples$().mV(this.lu.fX(t.n(0)), this.lv.fX($m_sr_Tuples$().qk(t)));
});
$p.fX = (function(t) {
  return this.qt(t);
});
var $d_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons, "trivalibs.graphics.geometry.VertexLayoutHelper$cons", ({
  e5: 1,
  aY: 1
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
$p.fX = (function(t) {
  return $m_T$package$EmptyTuple$();
});
var $d_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$, "trivalibs.graphics.geometry.VertexLayoutHelper$nil$", ({
  e6: 1,
  aY: 1
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
  this.lx = 0;
  this.lx = idx$2;
}
$p = $c_Ltrivalibs_graphics_geometry_package$package$$anon$1.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_package$package$$anon$1;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_package$package$$anon$1() {
}
$h_Ltrivalibs_graphics_geometry_package$package$$anon$1.prototype = $p;
$p.bs = (function(t) {
  return t.n(this.lx);
});
var $d_Ltrivalibs_graphics_geometry_package$package$$anon$1 = new $TypeData().i($c_Ltrivalibs_graphics_geometry_package$package$$anon$1, "trivalibs.graphics.geometry.package$package$$anon$1", ({
  eb: 1,
  e1: 1
}));
function $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D($thiz, v, other) {
  return (((v.y * other.y) + (v.A * other.A)) + (v.z * other.z));
}
function $f_Ltrivalibs_graphics_math_Vec3Base__length__O__D($thiz, v) {
  var p$proxy1 = $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D($thiz, v, v);
  return (+Math.sqrt(p$proxy1));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat4$() {
  this.ly = null;
  this.lz = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat4$() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat4$.prototype = $p;
$p.gN = (function() {
  if ((!this.lz)) {
    this.ly = $m_Ltrivalibs_graphics_math_cpu_Mat4$();
    this.lz = true;
  }
  return this.ly;
});
$p.ka = (function(t, r, s) {
  var x = r.id;
  var y = r.ie;
  var z = r.ig;
  var w = r.ic;
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
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4(((1.0 - (yy + zz)) * s.y), ((xy + wz) * s.y), ((xz - wy) * s.y), 0.0, ((xy - wz) * s.A), ((1.0 - (xx + zz)) * s.A), ((yz + wx) * s.A), 0.0, ((xz + wy) * s.z), ((yz - wx) * s.z), ((1.0 - (xx + yy)) * s.z), 0.0, t.y, t.A, t.z, 1.0);
});
var $d_Ltrivalibs_graphics_math_cpu_Mat4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4$, "trivalibs.graphics.math.cpu.Mat4$", ({
  er: 1,
  ee: 1
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
  ev: 1,
  ex: 1
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
  this.lA = null;
  this.lB = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec3$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec3$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec3$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec3$.prototype = $p;
$p.Z = (function() {
  if ((!this.lB)) {
    this.lA = $m_Ltrivalibs_graphics_math_cpu_Vec3$();
    this.lB = true;
  }
  return this.lA;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3$, "trivalibs.graphics.math.cpu.Vec3$", ({
  eB: 1,
  ek: 1
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
  this.lC = null;
  this.lD = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec4$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec4$.prototype = $p;
$p.oP = (function() {
  if ((!this.lD)) {
    this.lC = new $c_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3();
    this.lD = true;
  }
  return this.lC;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4$, "trivalibs.graphics.math.cpu.Vec4$", ({
  eE: 1,
  en: 1
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
  eI: 1,
  eg: 1
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
  eL: 1,
  ei: 1
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
  eO: 1,
  ep: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1(f$2) {
  this.lK = null;
  this.lK = f$2;
}
$p = $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1() {
}
$h_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1.prototype = $p;
$p.b3 = (function(s) {
  return this.lK.h(s);
});
var $d_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1, "trivalibs.graphics.math.gpu.LeftScalar$$anon$1", ({
  eS: 1,
  eQ: 1
}));
function $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__($thiz, name) {
  $thiz.fI = name;
  $ct_Ltrivalibs_graphics_math_gpu_Expr__T__($thiz, name);
  return $thiz;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_LetExpr() {
  this.d = null;
  this.fI = null;
}
$p = $c_Ltrivalibs_graphics_math_gpu_LetExpr.prototype = new $h_Ltrivalibs_graphics_math_gpu_Expr();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_LetExpr;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_LetExpr() {
}
$h_Ltrivalibs_graphics_math_gpu_LetExpr.prototype = $p;
$p.a6 = (function(value) {
  return (((("  let " + this.fI) + " = ") + value.d) + ";");
});
var $d_Ltrivalibs_graphics_math_gpu_LetExpr = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_LetExpr, "trivalibs.graphics.math.gpu.LetExpr", ({
  b4: 1,
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
$p.i0 = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.d + ".x"));
});
$p.i1 = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.d + ".y"));
});
$p.G = (function(v) {
  return this.i0(v);
});
$p.x = (function(v) {
  return this.i1(v);
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$4 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$4, "trivalibs.graphics.math.gpu.float_expr$package$$anon$4", ({
  eZ: 1,
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
$p.i0 = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.d + ".x"));
});
$p.i1 = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.d + ".y"));
});
$p.kq = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.d + ".z"));
});
$p.ow = (function(v, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("dot(" + v.d) + ", ") + other.d) + ")"));
});
$p.G = (function(v) {
  return this.i0(v);
});
$p.x = (function(v) {
  return this.i1(v);
});
$p.ae = (function(v) {
  return this.kq(v);
});
$p.mY = (function(v, other) {
  return this.ow(v, other);
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5, "trivalibs.graphics.math.gpu.float_expr$package$$anon$5", ({
  f0: 1,
  b3: 1
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
$p.i0 = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.d + ".x"));
});
$p.i1 = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.d + ".y"));
});
$p.kq = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.d + ".z"));
});
$p.qx = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.d + ".w"));
});
$p.G = (function(v) {
  return this.i0(v);
});
$p.x = (function(v) {
  return this.i1(v);
});
$p.ae = (function(v) {
  return this.kq(v);
});
$p.av = (function(v) {
  return this.qx(v);
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6, "trivalibs.graphics.math.gpu.float_expr$package$$anon$6", ({
  f1: 1,
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
  f2: 1,
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
$p.pC = (function(m, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + m.d) + " * ") + other.d) + ")"));
});
$p.gP = (function(m, x$2, v, x$4, x$5) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + m.d) + " * ") + v.d) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Mat4ImmutableOpsG_FloatExpr_Mat4Expr$", ({
  f3: 1,
  ef: 1
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
$p.fS = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("abs(" + a.d) + ")"));
});
$p.n3 = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("fract(" + a.d) + ")"));
});
$p.iN = (function(a, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("min(" + a.d) + ", ") + other.d) + ")"));
});
$p.pD = (function(a, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("max(" + a.d) + ", ") + other.d) + ")"));
});
$p.oj = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("saturate(" + a.d) + ")"));
});
$p.oI = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(" + a.d) + " * 0.5 + 0.5)"));
});
$p.nq = (function(a, b, t) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("mix(" + a.d) + ", ") + b.d) + ", ") + t.d) + ")"));
});
$p.be = (function(a, edge0, edge1) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("smoothstep(" + edge0.d) + ", ") + edge1.d) + ", ") + a.d) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$, "trivalibs.graphics.math.gpu.float_expr$package$given_NumExt_FloatExpr$", ({
  f4: 1,
  g9: 1
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
$p.aC = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.d) + " + ") + b.d) + ")"));
});
$p.bL = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.d) + " - ") + b.d) + ")"));
});
$p.bb = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.d) + " * ") + b.d) + ")"));
});
$p.nL = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.d) + " / ") + b.d) + ")"));
});
$p.nz = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(-" + a.d) + ")"));
});
$p.nO = (function(a, b) {
  return this.aC(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().p().h(b));
});
$p.mK = (function(a, b) {
  return this.bL(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().p().h(b));
});
$p.S = (function(a, b) {
  return this.bb(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().p().h(b));
});
$p.k4 = (function(a, b) {
  return this.nL(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().p().h(b));
});
$p.oE = (function(a, v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.d) + " * ") + v.d) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$, "trivalibs.graphics.math.gpu.float_expr$package$given_NumOps_FloatExpr$", ({
  f5: 1,
  ga: 1
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
$p.nV = (function(v, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.d) + " + ") + other.d) + ")"));
});
$p.pI = (function(v, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.d) + " * ") + other.d) + ")"));
});
$p.ot = (function(v, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.d) + " / ") + other.d) + ")"));
});
$p.oH = (function(v, x$2) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(" + v.d) + " * 2.0 - 1.0)"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec2ImmutableOpsG_FloatExpr_Vec2Expr$", ({
  f6: 1,
  eh: 1
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
$p.mL = (function(v, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.d) + " + ") + other.d) + ")"));
});
$p.bq = (function(v, x$2, scalar) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.d) + " * ") + scalar.d) + ")"));
});
$p.k5 = (function(v, x$2, scalar) {
  return this.bq(v, x$2, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().p().h(scalar));
});
$p.os = (function(v, x$2, scalar) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.d) + " / ") + scalar.d) + ")"));
});
$p.om = (function(v, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("cross(" + v.d) + ", ") + other.d) + ")"));
});
$p.pL = (function(v, x$2) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("normalize(" + v.d) + ")"));
});
$p.pF = (function(v, x$2, b, t) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("mix(" + v.d) + ", ") + b.d) + ", ") + t.d) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec3ImmutableOpsG_FloatExpr_Vec3Expr$", ({
  f7: 1,
  el: 1
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
$p.nW = (function(v, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.d) + " + ") + other.d) + ")"));
});
$p.pH = (function(v, x$2, scalar) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.d) + " * ") + scalar.d) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec4ImmutableOpsG_FloatExpr_Vec4Expr$", ({
  f8: 1,
  eo: 1
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
  this.jB = null;
  this.lZ = null;
  this.aI = null;
  this.ik = null;
  this.jB = shade;
  this.lZ = painter;
  this.aI = [];
  this.ik = [];
}
$p = $c_Ltrivalibs_graphics_painter_Instance.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Instance;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Instance() {
}
$h_Ltrivalibs_graphics_painter_Instance.prototype = $p;
var $d_Ltrivalibs_graphics_painter_Instance = new $TypeData().i($c_Ltrivalibs_graphics_painter_Instance, "trivalibs.graphics.painter.Instance", ({
  fh: 1,
  a2: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Layer(painter, shade) {
  this.ha = null;
  this.w = null;
  this.jC = null;
  this.im = 0;
  this.h9 = 0;
  this.i = null;
  this.Q = null;
  this.O = null;
  this.il = null;
  this.ha = painter;
  this.w = shade;
  this.jC = null;
  this.im = (-1);
  this.h9 = (-1);
  this.i = [];
  this.Q = [];
  this.O = null;
  this.il = new $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter);
}
$p = $c_Ltrivalibs_graphics_painter_Layer.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Layer;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Layer() {
}
$h_Ltrivalibs_graphics_painter_Layer.prototype = $p;
$p.mT = (function() {
  return ((this.w.iw !== null) && (((this.Q.length | 0) === 0) || (this.Q[0] === null)));
});
$p.qa = (function(blendState, mipSource, mipTarget) {
  if ((blendState !== (void 0))) {
    this.jC = blendState;
  }
  if ((mipSource !== (void 0))) {
    var v = (mipSource | 0);
    this.im = v;
  }
  if ((mipTarget !== (void 0))) {
    var v$1 = (mipTarget | 0);
    this.h9 = v$1;
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Layer = new $TypeData().i($c_Ltrivalibs_graphics_painter_Layer, "trivalibs.graphics.painter.Layer", ({
  fj: 1,
  a2: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Shape(painter, form, shade) {
  this.hk = null;
  this.X = null;
  this.jK = null;
  this.jJ = null;
  this.V = null;
  this.a8 = null;
  this.jL = null;
  this.hk = form;
  this.X = shade;
  this.jK = "none";
  this.jJ = null;
  this.V = [];
  this.a8 = [];
  this.jL = new $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter);
}
$p = $c_Ltrivalibs_graphics_painter_Shape.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Shape;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Shape() {
}
$h_Ltrivalibs_graphics_painter_Shape.prototype = $p;
$p.qb = (function(cullMode, blendState) {
  if ((cullMode !== (void 0))) {
    this.jK = cullMode;
  }
  if ((blendState !== (void 0))) {
    this.jJ = blendState;
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Shape = new $TypeData().i($c_Ltrivalibs_graphics_painter_Shape, "trivalibs.graphics.painter.Shape", ({
  fp: 1,
  a2: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform(inner) {
  this.R = null;
  this.R = inner;
}
$p = $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform() {
}
$h_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform.prototype = $p;
$p.u = (function() {
  return this.R.u();
});
var $d_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform = new $TypeData().i($c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform, "trivalibs.graphics.shader.FragmentUniform$given_WGSLType_FragmentUniform", ({
  fx: 1,
  t: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform(inner) {
  this.bK = null;
  this.bK = inner;
}
$p = $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform() {
}
$h_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform.prototype = $p;
$p.u = (function() {
  return this.bK.u();
});
var $d_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform = new $TypeData().i($c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform, "trivalibs.graphics.shader.VertexUniform$given_WGSLType_VertexUniform", ({
  fy: 1,
  t: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor(prefix) {
  this.jS = null;
  this.jS = prefix;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor.prototype = $p;
$p.a0 = (function(name) {
  return new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget(((this.jS === "") ? name : ((this.jS + ".") + name)));
});
var $d_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor, "trivalibs.graphics.shader.dsl.TypedAssignAccessor", ({
  fG: 1,
  D: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(prefix) {
  this.jT = null;
  this.jT = prefix;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor.prototype = $p;
$p.j = (function(name) {
  return ((this.jT === "") ? $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), name) : $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), ((this.jT + ".") + name)));
});
var $d_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor, "trivalibs.graphics.shader.dsl.TypedExprAccessor", ({
  fH: 1,
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
  fI: 1,
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
  fJ: 1,
  D: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_VertexOut(prefix) {
  this.mr = null;
  this.hn = null;
  this.mr = prefix;
  this.hn = new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget((prefix + ".position"));
}
$p = $c_Ltrivalibs_graphics_shader_dsl_VertexOut.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_VertexOut;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_VertexOut() {
}
$h_Ltrivalibs_graphics_shader_dsl_VertexOut.prototype = $p;
$p.a0 = (function(name) {
  return new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget(((this.mr + ".") + name));
});
var $d_Ltrivalibs_graphics_shader_dsl_VertexOut = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_VertexOut, "trivalibs.graphics.shader.dsl.VertexOut", ({
  fL: 1,
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
  fS: 1,
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
$p.u = (function() {
  return "mat4x4<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$, "trivalibs.graphics.shader.types$package$given_WGSLType_Mat4$", ({
  fT: 1,
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
$p.u = (function() {
  return "sampler";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$, "trivalibs.graphics.shader.types$package$given_WGSLType_Sampler$", ({
  fU: 1,
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
$p.u = (function() {
  return "vec2<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$, "trivalibs.graphics.shader.types$package$given_WGSLType_Vec2$", ({
  fV: 1,
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
$p.u = (function() {
  return "vec3<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$, "trivalibs.graphics.shader.types$package$given_WGSLType_Vec3$", ({
  fW: 1,
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
$p.u = (function() {
  return "vec4<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$, "trivalibs.graphics.shader.types$package$given_WGSLType_Vec4$", ({
  fX: 1,
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
  this.iV = $data;
}
$p = $c_jl_Class.prototype = new $h_O();
$p.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
}
$h_jl_Class.prototype = $p;
$p.o = (function() {
  return ((this.iV.Y ? "interface " : (this.iV.X ? "" : "class ")) + this.iV.N);
});
var $d_jl_Class = new $TypeData().i($c_jl_Class, "java.lang.Class", ({
  bd: 1,
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
  bK: 1,
  bH: 1,
  bI: 1
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
    return $thiz.fY;
  } else {
    throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 0)"));
  }
}
function $f_s_Product10__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fZ;
      break;
    }
    case 1: {
      return $thiz.bQ;
      break;
    }
    case 2: {
      return $thiz.bR;
      break;
    }
    case 3: {
      return $thiz.bS;
      break;
    }
    case 4: {
      return $thiz.bT;
      break;
    }
    case 5: {
      return $thiz.bU;
      break;
    }
    case 6: {
      return $thiz.bV;
      break;
    }
    case 7: {
      return $thiz.bW;
      break;
    }
    case 8: {
      return $thiz.bX;
      break;
    }
    case 9: {
      return $thiz.bP;
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
      return $thiz.g0;
      break;
    }
    case 1: {
      return $thiz.c0;
      break;
    }
    case 2: {
      return $thiz.c1;
      break;
    }
    case 3: {
      return $thiz.c2;
      break;
    }
    case 4: {
      return $thiz.c3;
      break;
    }
    case 5: {
      return $thiz.c4;
      break;
    }
    case 6: {
      return $thiz.c5;
      break;
    }
    case 7: {
      return $thiz.c6;
      break;
    }
    case 8: {
      return $thiz.c7;
      break;
    }
    case 9: {
      return $thiz.bY;
      break;
    }
    case 10: {
      return $thiz.bZ;
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
      return $thiz.g1;
      break;
    }
    case 1: {
      return $thiz.cb;
      break;
    }
    case 2: {
      return $thiz.cc;
      break;
    }
    case 3: {
      return $thiz.cd;
      break;
    }
    case 4: {
      return $thiz.ce;
      break;
    }
    case 5: {
      return $thiz.cf;
      break;
    }
    case 6: {
      return $thiz.cg;
      break;
    }
    case 7: {
      return $thiz.ch;
      break;
    }
    case 8: {
      return $thiz.ci;
      break;
    }
    case 9: {
      return $thiz.c8;
      break;
    }
    case 10: {
      return $thiz.c9;
      break;
    }
    case 11: {
      return $thiz.ca;
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
      return $thiz.g2;
      break;
    }
    case 1: {
      return $thiz.cn;
      break;
    }
    case 2: {
      return $thiz.co;
      break;
    }
    case 3: {
      return $thiz.cp;
      break;
    }
    case 4: {
      return $thiz.cq;
      break;
    }
    case 5: {
      return $thiz.cr;
      break;
    }
    case 6: {
      return $thiz.cs;
      break;
    }
    case 7: {
      return $thiz.ct;
      break;
    }
    case 8: {
      return $thiz.cu;
      break;
    }
    case 9: {
      return $thiz.cj;
      break;
    }
    case 10: {
      return $thiz.ck;
      break;
    }
    case 11: {
      return $thiz.cl;
      break;
    }
    case 12: {
      return $thiz.cm;
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
      return $thiz.g3;
      break;
    }
    case 1: {
      return $thiz.cA;
      break;
    }
    case 2: {
      return $thiz.cB;
      break;
    }
    case 3: {
      return $thiz.cC;
      break;
    }
    case 4: {
      return $thiz.cD;
      break;
    }
    case 5: {
      return $thiz.cE;
      break;
    }
    case 6: {
      return $thiz.cF;
      break;
    }
    case 7: {
      return $thiz.cG;
      break;
    }
    case 8: {
      return $thiz.cH;
      break;
    }
    case 9: {
      return $thiz.cv;
      break;
    }
    case 10: {
      return $thiz.cw;
      break;
    }
    case 11: {
      return $thiz.cx;
      break;
    }
    case 12: {
      return $thiz.cy;
      break;
    }
    case 13: {
      return $thiz.cz;
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
      return $thiz.g4;
      break;
    }
    case 1: {
      return $thiz.cO;
      break;
    }
    case 2: {
      return $thiz.cP;
      break;
    }
    case 3: {
      return $thiz.cQ;
      break;
    }
    case 4: {
      return $thiz.cR;
      break;
    }
    case 5: {
      return $thiz.cS;
      break;
    }
    case 6: {
      return $thiz.cT;
      break;
    }
    case 7: {
      return $thiz.cU;
      break;
    }
    case 8: {
      return $thiz.cV;
      break;
    }
    case 9: {
      return $thiz.cI;
      break;
    }
    case 10: {
      return $thiz.cJ;
      break;
    }
    case 11: {
      return $thiz.cK;
      break;
    }
    case 12: {
      return $thiz.cL;
      break;
    }
    case 13: {
      return $thiz.cM;
      break;
    }
    case 14: {
      return $thiz.cN;
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
      return $thiz.g5;
      break;
    }
    case 1: {
      return $thiz.d3;
      break;
    }
    case 2: {
      return $thiz.d4;
      break;
    }
    case 3: {
      return $thiz.d5;
      break;
    }
    case 4: {
      return $thiz.d6;
      break;
    }
    case 5: {
      return $thiz.d7;
      break;
    }
    case 6: {
      return $thiz.d8;
      break;
    }
    case 7: {
      return $thiz.d9;
      break;
    }
    case 8: {
      return $thiz.da;
      break;
    }
    case 9: {
      return $thiz.cW;
      break;
    }
    case 10: {
      return $thiz.cX;
      break;
    }
    case 11: {
      return $thiz.cY;
      break;
    }
    case 12: {
      return $thiz.cZ;
      break;
    }
    case 13: {
      return $thiz.d0;
      break;
    }
    case 14: {
      return $thiz.d1;
      break;
    }
    case 15: {
      return $thiz.d2;
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
      return $thiz.g6;
      break;
    }
    case 1: {
      return $thiz.dj;
      break;
    }
    case 2: {
      return $thiz.dk;
      break;
    }
    case 3: {
      return $thiz.dl;
      break;
    }
    case 4: {
      return $thiz.dm;
      break;
    }
    case 5: {
      return $thiz.dn;
      break;
    }
    case 6: {
      return $thiz.dp;
      break;
    }
    case 7: {
      return $thiz.dq;
      break;
    }
    case 8: {
      return $thiz.dr;
      break;
    }
    case 9: {
      return $thiz.db;
      break;
    }
    case 10: {
      return $thiz.dc;
      break;
    }
    case 11: {
      return $thiz.dd;
      break;
    }
    case 12: {
      return $thiz.de;
      break;
    }
    case 13: {
      return $thiz.df;
      break;
    }
    case 14: {
      return $thiz.dg;
      break;
    }
    case 15: {
      return $thiz.dh;
      break;
    }
    case 16: {
      return $thiz.di;
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
      return $thiz.g7;
      break;
    }
    case 1: {
      return $thiz.dB;
      break;
    }
    case 2: {
      return $thiz.dC;
      break;
    }
    case 3: {
      return $thiz.dD;
      break;
    }
    case 4: {
      return $thiz.dE;
      break;
    }
    case 5: {
      return $thiz.dF;
      break;
    }
    case 6: {
      return $thiz.dG;
      break;
    }
    case 7: {
      return $thiz.dH;
      break;
    }
    case 8: {
      return $thiz.dI;
      break;
    }
    case 9: {
      return $thiz.ds;
      break;
    }
    case 10: {
      return $thiz.dt;
      break;
    }
    case 11: {
      return $thiz.du;
      break;
    }
    case 12: {
      return $thiz.dv;
      break;
    }
    case 13: {
      return $thiz.dw;
      break;
    }
    case 14: {
      return $thiz.dx;
      break;
    }
    case 15: {
      return $thiz.dy;
      break;
    }
    case 16: {
      return $thiz.dz;
      break;
    }
    case 17: {
      return $thiz.dA;
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
      return $thiz.g8;
      break;
    }
    case 1: {
      return $thiz.dT;
      break;
    }
    case 2: {
      return $thiz.dU;
      break;
    }
    case 3: {
      return $thiz.dV;
      break;
    }
    case 4: {
      return $thiz.dW;
      break;
    }
    case 5: {
      return $thiz.dX;
      break;
    }
    case 6: {
      return $thiz.dY;
      break;
    }
    case 7: {
      return $thiz.dZ;
      break;
    }
    case 8: {
      return $thiz.e0;
      break;
    }
    case 9: {
      return $thiz.dJ;
      break;
    }
    case 10: {
      return $thiz.dK;
      break;
    }
    case 11: {
      return $thiz.dL;
      break;
    }
    case 12: {
      return $thiz.dM;
      break;
    }
    case 13: {
      return $thiz.dN;
      break;
    }
    case 14: {
      return $thiz.dO;
      break;
    }
    case 15: {
      return $thiz.dP;
      break;
    }
    case 16: {
      return $thiz.dQ;
      break;
    }
    case 17: {
      return $thiz.dR;
      break;
    }
    case 18: {
      return $thiz.dS;
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
      return $thiz.a1;
      break;
    }
    case 1: {
      return $thiz.ax;
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
      return $thiz.g9;
      break;
    }
    case 1: {
      return $thiz.eb;
      break;
    }
    case 2: {
      return $thiz.ed;
      break;
    }
    case 3: {
      return $thiz.ee;
      break;
    }
    case 4: {
      return $thiz.ef;
      break;
    }
    case 5: {
      return $thiz.eg;
      break;
    }
    case 6: {
      return $thiz.eh;
      break;
    }
    case 7: {
      return $thiz.ei;
      break;
    }
    case 8: {
      return $thiz.ej;
      break;
    }
    case 9: {
      return $thiz.e1;
      break;
    }
    case 10: {
      return $thiz.e2;
      break;
    }
    case 11: {
      return $thiz.e3;
      break;
    }
    case 12: {
      return $thiz.e4;
      break;
    }
    case 13: {
      return $thiz.e5;
      break;
    }
    case 14: {
      return $thiz.e6;
      break;
    }
    case 15: {
      return $thiz.e7;
      break;
    }
    case 16: {
      return $thiz.e8;
      break;
    }
    case 17: {
      return $thiz.e9;
      break;
    }
    case 18: {
      return $thiz.ea;
      break;
    }
    case 19: {
      return $thiz.ec;
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
      return $thiz.ga;
      break;
    }
    case 1: {
      return $thiz.eu;
      break;
    }
    case 2: {
      return $thiz.ex;
      break;
    }
    case 3: {
      return $thiz.ey;
      break;
    }
    case 4: {
      return $thiz.ez;
      break;
    }
    case 5: {
      return $thiz.eA;
      break;
    }
    case 6: {
      return $thiz.eB;
      break;
    }
    case 7: {
      return $thiz.eC;
      break;
    }
    case 8: {
      return $thiz.eD;
      break;
    }
    case 9: {
      return $thiz.ek;
      break;
    }
    case 10: {
      return $thiz.el;
      break;
    }
    case 11: {
      return $thiz.em;
      break;
    }
    case 12: {
      return $thiz.en;
      break;
    }
    case 13: {
      return $thiz.eo;
      break;
    }
    case 14: {
      return $thiz.ep;
      break;
    }
    case 15: {
      return $thiz.eq;
      break;
    }
    case 16: {
      return $thiz.er;
      break;
    }
    case 17: {
      return $thiz.es;
      break;
    }
    case 18: {
      return $thiz.et;
      break;
    }
    case 19: {
      return $thiz.ev;
      break;
    }
    case 20: {
      return $thiz.ew;
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
      return $thiz.gb;
      break;
    }
    case 1: {
      return $thiz.eO;
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
    case 5: {
      return $thiz.eV;
      break;
    }
    case 6: {
      return $thiz.eW;
      break;
    }
    case 7: {
      return $thiz.eX;
      break;
    }
    case 8: {
      return $thiz.eY;
      break;
    }
    case 9: {
      return $thiz.eE;
      break;
    }
    case 10: {
      return $thiz.eF;
      break;
    }
    case 11: {
      return $thiz.eG;
      break;
    }
    case 12: {
      return $thiz.eH;
      break;
    }
    case 13: {
      return $thiz.eI;
      break;
    }
    case 14: {
      return $thiz.eJ;
      break;
    }
    case 15: {
      return $thiz.eK;
      break;
    }
    case 16: {
      return $thiz.eL;
      break;
    }
    case 17: {
      return $thiz.eM;
      break;
    }
    case 18: {
      return $thiz.eN;
      break;
    }
    case 19: {
      return $thiz.eP;
      break;
    }
    case 20: {
      return $thiz.eQ;
      break;
    }
    case 21: {
      return $thiz.eR;
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
      return $thiz.bt;
      break;
    }
    case 1: {
      return $thiz.bf;
      break;
    }
    case 2: {
      return $thiz.bg;
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
      return $thiz.eZ;
      break;
    }
    case 1: {
      return $thiz.bu;
      break;
    }
    case 2: {
      return $thiz.bv;
      break;
    }
    case 3: {
      return $thiz.bw;
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
      return $thiz.gc;
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
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 4)"));
    }
  }
}
function $f_s_Product6__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.gd;
      break;
    }
    case 1: {
      return $thiz.f4;
      break;
    }
    case 2: {
      return $thiz.f5;
      break;
    }
    case 3: {
      return $thiz.f6;
      break;
    }
    case 4: {
      return $thiz.f7;
      break;
    }
    case 5: {
      return $thiz.f8;
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
      return $thiz.ge;
      break;
    }
    case 1: {
      return $thiz.f9;
      break;
    }
    case 2: {
      return $thiz.fa;
      break;
    }
    case 3: {
      return $thiz.fb;
      break;
    }
    case 4: {
      return $thiz.fc;
      break;
    }
    case 5: {
      return $thiz.fd;
      break;
    }
    case 6: {
      return $thiz.fe;
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
      return $thiz.gf;
      break;
    }
    case 1: {
      return $thiz.ff;
      break;
    }
    case 2: {
      return $thiz.fg;
      break;
    }
    case 3: {
      return $thiz.fh;
      break;
    }
    case 4: {
      return $thiz.fi;
      break;
    }
    case 5: {
      return $thiz.fj;
      break;
    }
    case 6: {
      return $thiz.fk;
      break;
    }
    case 7: {
      return $thiz.fl;
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
      return $thiz.gg;
      break;
    }
    case 1: {
      return $thiz.fm;
      break;
    }
    case 2: {
      return $thiz.fn;
      break;
    }
    case 3: {
      return $thiz.fo;
      break;
    }
    case 4: {
      return $thiz.fp;
      break;
    }
    case 5: {
      return $thiz.fq;
      break;
    }
    case 6: {
      return $thiz.fr;
      break;
    }
    case 7: {
      return $thiz.fs;
      break;
    }
    case 8: {
      return $thiz.ft;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 8)"));
    }
  }
}
function $f_sc_Iterator__concat__F0__sc_Iterator($thiz, xs) {
  return new $c_sc_Iterator$ConcatIterator($thiz).ok(xs);
}
function $f_sc_Iterator__sliceIterator__I__I__sc_Iterator($thiz, from, until) {
  var lo = ((from > 0) ? from : 0);
  var rest = ((until < 0) ? (-1) : ((until <= lo) ? 0 : ((until - lo) | 0)));
  return ((rest === 0) ? $m_sc_Iterator$().b4 : new $c_sc_Iterator$SliceIterator($thiz, lo, rest));
}
function $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz, that) {
  var those = that.ad();
  while ($thiz.U()) {
    if ((!those.U())) {
      return false;
    }
    if ((!$m_sr_BoxesRunTime$().c($thiz.N(), those.N()))) {
      return false;
    }
  }
  return (!those.U());
}
/** @constructor */
function $c_sc_Iterator$() {
  this.b4 = null;
  $n_sc_Iterator$ = this;
  this.b4 = new $c_sc_Iterator$$anon$19();
}
$p = $c_sc_Iterator$.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
}
$h_sc_Iterator$.prototype = $p;
var $d_sc_Iterator$ = new $TypeData().i($c_sc_Iterator$, "scala.collection.Iterator$", ({
  cg: 1,
  a: 1,
  aB: 1
}));
var $n_sc_Iterator$;
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$();
  }
  return $n_sc_Iterator$;
}
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cM)));
}
/** @constructor */
function $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(f) {
  this.kJ = null;
  this.kJ = f;
}
$p = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = new $h_sr_AbstractFunction0();
$p.constructor = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c;
/** @constructor */
function $h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c() {
}
$h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = $p;
$p.hy = (function() {
  return (0, this.kJ)();
});
var $d_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c = new $TypeData().i($c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c, "scala.runtime.AbstractFunction0.$$Lambda$07eded5776954a9c145e92c329afd52873ad179c", ({
  cV: 1,
  cU: 1,
  bC: 1
}));
/** @constructor */
function $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(f) {
  this.kK = null;
  this.kK = f;
}
$p = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919;
/** @constructor */
function $h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919() {
}
$h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = $p;
$p.h = (function(x0) {
  return (0, this.kK)(x0);
});
var $d_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919 = new $TypeData().i($c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919, "scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919", ({
  cX: 1,
  cW: 1,
  g: 1
}));
/** @constructor */
function $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(f) {
  this.kL = null;
  this.kL = f;
}
$p = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = new $h_sr_AbstractFunction2();
$p.constructor = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8;
/** @constructor */
function $h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8() {
}
$h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = $p;
$p.bc = (function(x0, x1) {
  return (0, this.kL)(x0, x1);
});
var $d_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8 = new $TypeData().i($c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8, "scala.runtime.AbstractFunction2.$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8", ({
  cZ: 1,
  cY: 1,
  bD: 1
}));
/** @constructor */
function $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(f) {
  this.kM = null;
  this.kM = f;
}
$p = $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825.prototype = new $h_sr_AbstractFunction3();
$p.constructor = $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825;
/** @constructor */
function $h_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825() {
}
$h_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825.prototype = $p;
$p.mO = (function(x0, x1, x2) {
  return (0, this.kM)(x0, x1, x2);
});
var $d_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825 = new $TypeData().i($c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825, "scala.runtime.AbstractFunction3.$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825", ({
  d1: 1,
  d0: 1,
  bE: 1
}));
/** @constructor */
function $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(f) {
  this.kN = null;
  this.kN = f;
}
$p = $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a.prototype = new $h_sr_AbstractFunction4();
$p.constructor = $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a;
/** @constructor */
function $h_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a() {
}
$h_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a.prototype = $p;
$p.mN = (function(x0, x1, x2, x3) {
  return (0, this.kN)(x0, x1, x2, x3);
});
var $d_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a = new $TypeData().i($c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a, "scala.runtime.AbstractFunction4.$$Lambda$451042f443265710aa66de6985cba67480d9b00a", ({
  d3: 1,
  d2: 1,
  bF: 1
}));
/** @constructor */
function $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078(f) {
  this.kO = null;
  this.kO = f;
}
$p = $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078.prototype = new $h_sr_AbstractFunction5();
$p.constructor = $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078;
/** @constructor */
function $h_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078() {
}
$h_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078.prototype = $p;
$p.nZ = (function(x0, x1, x2, x3, x4) {
  return (0, this.kO)(x0, x1, x2, x3, x4);
});
var $d_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078 = new $TypeData().i($c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078, "scala.runtime.AbstractFunction5.$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078", ({
  d5: 1,
  d4: 1,
  bG: 1
}));
var $d_sr_Nothing$ = new $TypeData().i(0, "scala.runtime.Nothing$", ({
  d8: 1,
  f: 1,
  a: 1
}));
/** @constructor */
function $c_sr_TupleXXL(es) {
  this.af = null;
  this.af = es;
  if ((es.b.length <= 22)) {
    $m_sr_Scala3RunTime$().o7();
  }
}
$p = $c_sr_TupleXXL.prototype = new $h_O();
$p.constructor = $c_sr_TupleXXL;
/** @constructor */
function $h_sr_TupleXXL() {
}
$h_sr_TupleXXL.prototype = $p;
$p.C = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.n = (function(n) {
  return this.af.b[n];
});
$p.v = (function() {
  return this.af.b.length;
});
$p.B = (function() {
  return "Tuple";
});
$p.o = (function() {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($m_s_Predef$().qA(this.af), "(", ",", ")");
});
$p.t = (function() {
  return $m_s_util_hashing_MurmurHash3$().oi(this, (-889275714), null);
});
$p.r = (function(that) {
  if ((that instanceof $c_sr_TupleXXL)) {
    if ((this.af === that.af)) {
      return true;
    } else {
      if ((this.af.b.length !== that.af.b.length)) {
        return false;
      }
      var i = 0;
      while ((i < this.af.b.length)) {
        var $x_2 = $m_sr_BoxesRunTime$();
        var arr$3 = this.af;
        var n = i;
        var $x_1 = arr$3.b[n];
        var arr$4 = that.af;
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aO)));
}
var $d_sr_TupleXXL = new $TypeData().i($c_sr_TupleXXL, "scala.runtime.TupleXXL", ({
  aO: 1,
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
$p.hA = (function(f) {
  return ((arg1$2) => f.h(arg1$2));
});
var $d_sjs_js_Any$ = new $TypeData().i($c_sjs_js_Any$, "scala.scalajs.js.Any$", ({
  de: 1,
  di: 1,
  dj: 1
}));
var $n_sjs_js_Any$;
function $m_sjs_js_Any$() {
  if ((!$n_sjs_js_Any$)) {
    $n_sjs_js_Any$ = new $c_sjs_js_Any$();
  }
  return $n_sjs_js_Any$;
}
/** @constructor */
function $c_Lsketches_templates_rooms_gridcanvases_Wall$() {
}
$p = $c_Lsketches_templates_rooms_gridcanvases_Wall$.prototype = new $h_O();
$p.constructor = $c_Lsketches_templates_rooms_gridcanvases_Wall$;
/** @constructor */
function $h_Lsketches_templates_rooms_gridcanvases_Wall$() {
}
$h_Lsketches_templates_rooms_gridcanvases_Wall$.prototype = $p;
$p.o = (function() {
  return "Wall";
});
$p.nN = (function() {
  return [];
});
var $d_Lsketches_templates_rooms_gridcanvases_Wall$ = new $TypeData().i($c_Lsketches_templates_rooms_gridcanvases_Wall$, "sketches.templates.rooms.gridcanvases.Wall$", ({
  dx: 1,
  aM: 1,
  aN: 1
}));
var $n_Lsketches_templates_rooms_gridcanvases_Wall$;
function $m_Lsketches_templates_rooms_gridcanvases_Wall$() {
  if ((!$n_Lsketches_templates_rooms_gridcanvases_Wall$)) {
    $n_Lsketches_templates_rooms_gridcanvases_Wall$ = new $c_Lsketches_templates_rooms_gridcanvases_Wall$();
  }
  return $n_Lsketches_templates_rooms_gridcanvases_Wall$;
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
  return new $c_Ltrivalibs_graphics_math_cpu_Vec4((+x.eZ), (+x.bu), (+x.bv), (+x.bw));
});
var $d_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3, "trivalibs.graphics.math.cpu.Vec4$$anon$3", ({
  eF: 1,
  M: 1,
  g: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_VarExpr(name) {
  this.d = null;
  this.fI = null;
  this.jv = false;
  $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(this, name);
  this.jv = false;
}
$p = $c_Ltrivalibs_graphics_math_gpu_VarExpr.prototype = new $h_Ltrivalibs_graphics_math_gpu_LetExpr();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_VarExpr;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_VarExpr() {
}
$h_Ltrivalibs_graphics_math_gpu_VarExpr.prototype = $p;
$p.a6 = (function(value) {
  if ((!this.jv)) {
    this.jv = true;
    return (((("  var " + this.fI) + " = ") + value.d) + ";");
  } else {
    return (((("  " + this.fI) + " = ") + value.d) + ";");
  }
});
$p.nP = (function(value) {
  return (((("  " + this.fI) + " += ") + value.d) + ";");
});
$p.nQ = (function(value) {
  return (((("  " + this.fI) + " *= ") + value.d) + ";");
});
var $d_Ltrivalibs_graphics_math_gpu_VarExpr = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_VarExpr, "trivalibs.graphics.math.gpu.VarExpr", ({
  eT: 1,
  b4: 1,
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
  eW: 1,
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
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aD((+x)));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1, "trivalibs.graphics.math.gpu.float_expr$package$$anon$1", ({
  eY: 1,
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
        deps = ((rest[0] === (void 0)) ? $m_Ltrivalibs_graphics_shader_dsl_WgslFnData$().nM() : rest[0]);
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
  fM: 1,
  dk: 1,
  aP: 1
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
  b9: 1,
  be: 1,
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
  ba: 1,
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a8)));
}
var $d_jl_Character = new $TypeData().i(0, "java.lang.Character", ({
  a8: 1,
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
$p.o = (function() {
  return this.ao;
});
$p.F = (function() {
  return this.ao.length;
});
$p.mU = (function(index) {
  return this.ao.charCodeAt(index);
});
var $d_jl_StringBuilder = new $TypeData().i($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  bq: 1,
  L: 1,
  a6: 1,
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
$p.aj = (function() {
  return (-1);
});
$p.mW = (function(dest, start, n) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, dest, start, n);
});
$p.k6 = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.ad = (function() {
  return this;
});
$p.hz = (function(n) {
  return this.iS(n, (-1));
});
$p.iS = (function(from, until) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until);
});
$p.o = (function() {
  return "<iterator>";
});
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.bN(0) === 0);
}
function $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  var thisKnownSize = $thiz.aj();
  if ((thisKnownSize !== (-1))) {
    var thatKnownSize = that.aj();
    if ((thatKnownSize !== (-1))) {
      if ((thisKnownSize !== thatKnownSize)) {
        return false;
      }
      if ((thisKnownSize === 0)) {
        return true;
      }
    }
  }
  return $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz.ad(), that);
}
function $isArrayOf_s_util_CommandLineParser$ParseError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ds)));
}
/** @constructor */
function $c_Lsketches_templates_rooms_gridcanvases_Painting(model, shape, shadowRect, shadowFade, basePos, baseRect, rotY, wallHeight) {
  this.gm = null;
  this.gp = null;
  this.fz = null;
  this.go = null;
  this.gl = null;
  this.bl = null;
  this.gn = 0.0;
  this.gq = 0.0;
  this.gm = model;
  this.gp = shape;
  this.fz = shadowRect;
  this.go = shadowFade;
  this.gl = basePos;
  this.bl = baseRect;
  this.gn = rotY;
  this.gq = wallHeight;
}
$p = $c_Lsketches_templates_rooms_gridcanvases_Painting.prototype = new $h_O();
$p.constructor = $c_Lsketches_templates_rooms_gridcanvases_Painting;
/** @constructor */
function $h_Lsketches_templates_rooms_gridcanvases_Painting() {
}
$h_Lsketches_templates_rooms_gridcanvases_Painting.prototype = $p;
$p.C = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.t = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().m(acc, 990625508);
  acc = $m_sr_Statics$().m(acc, $m_sr_Statics$().L(this.gm));
  acc = $m_sr_Statics$().m(acc, $m_sr_Statics$().L(this.gp));
  acc = $m_sr_Statics$().m(acc, $m_sr_Statics$().L(this.fz));
  acc = $m_sr_Statics$().m(acc, $m_sr_Statics$().L(this.go));
  acc = $m_sr_Statics$().m(acc, $m_sr_Statics$().L(this.gl));
  acc = $m_sr_Statics$().m(acc, $m_sr_Statics$().L(this.bl));
  acc = $m_sr_Statics$().m(acc, $m_sr_Statics$().aL(this.gn));
  acc = $m_sr_Statics$().m(acc, $m_sr_Statics$().aL(this.gq));
  return $m_sr_Statics$().ah(acc, 8);
});
$p.r = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lsketches_templates_rooms_gridcanvases_Painting)) {
    if (((this.gn === x$0.gn) && (this.gq === x$0.gq))) {
      var x = this.gm;
      var x$2 = x$0.gm;
      var $x_5 = ((x === null) ? (x$2 === null) : (x === x$2));
    } else {
      var $x_5 = false;
    }
    if ($x_5) {
      var x$3 = this.gp;
      var x$4 = x$0.gp;
      var $x_4 = ((x$3 === null) ? (x$4 === null) : (x$3 === x$4));
    } else {
      var $x_4 = false;
    }
    if ($x_4) {
      var x$5 = this.fz;
      var x$6 = x$0.fz;
      var $x_3 = ((x$5 === null) ? (x$6 === null) : (x$5 === x$6));
    } else {
      var $x_3 = false;
    }
    if ($x_3) {
      var x$7 = this.go;
      var x$8 = x$0.go;
      var $x_2 = ((x$7 === null) ? (x$8 === null) : (x$7 === x$8));
    } else {
      var $x_2 = false;
    }
    if ($x_2) {
      var x$9 = this.gl;
      var x$10 = x$0.gl;
      var $x_1 = ((x$9 === null) ? (x$10 === null) : (x$9 === x$10));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      var x$11 = this.bl;
      var x$12 = x$0.bl;
      return ((x$11 === null) ? (x$12 === null) : (x$11 === x$12));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.o = (function() {
  return $m_sr_ScalaRunTime$().hx(this);
});
$p.v = (function() {
  return 8;
});
$p.B = (function() {
  return "Painting";
});
$p.n = (function(n) {
  switch (n) {
    case 0: {
      return this.gm;
      break;
    }
    case 1: {
      return this.gp;
      break;
    }
    case 2: {
      return this.fz;
      break;
    }
    case 3: {
      return this.go;
      break;
    }
    case 4: {
      return this.gl;
      break;
    }
    case 5: {
      return this.bl;
      break;
    }
    case 6: {
      return this.gn;
      break;
    }
    case 7: {
      return this.gq;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException(("" + n));
    }
  }
});
function $isArrayOf_Lsketches_templates_rooms_gridcanvases_Painting(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aS)));
}
var $d_Lsketches_templates_rooms_gridcanvases_Painting = new $TypeData().i($c_Lsketches_templates_rooms_gridcanvases_Painting, "sketches.templates.rooms.gridcanvases.Painting", ({
  aS: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_Lsketches_templates_rooms_gridcanvases_PaintingSpec(width, height, depth, image, sideStretch) {
  this.bE = 0.0;
  this.bD = 0.0;
  this.bm = 0.0;
  this.gr = null;
  this.fA = 0.0;
  this.bE = width;
  this.bD = height;
  this.bm = depth;
  this.gr = image;
  this.fA = sideStretch;
}
$p = $c_Lsketches_templates_rooms_gridcanvases_PaintingSpec.prototype = new $h_O();
$p.constructor = $c_Lsketches_templates_rooms_gridcanvases_PaintingSpec;
/** @constructor */
function $h_Lsketches_templates_rooms_gridcanvases_PaintingSpec() {
}
$h_Lsketches_templates_rooms_gridcanvases_PaintingSpec.prototype = $p;
$p.C = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.t = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().m(acc, 1068570815);
  acc = $m_sr_Statics$().m(acc, $m_sr_Statics$().aL(this.bE));
  acc = $m_sr_Statics$().m(acc, $m_sr_Statics$().aL(this.bD));
  acc = $m_sr_Statics$().m(acc, $m_sr_Statics$().aL(this.bm));
  acc = $m_sr_Statics$().m(acc, $m_sr_Statics$().L(this.gr));
  acc = $m_sr_Statics$().m(acc, $m_sr_Statics$().aL(this.fA));
  return $m_sr_Statics$().ah(acc, 5);
});
$p.r = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lsketches_templates_rooms_gridcanvases_PaintingSpec)) {
    if (((((this.bE === x$0.bE) && (this.bD === x$0.bD)) && (this.bm === x$0.bm)) && (this.fA === x$0.fA))) {
      var x = this.gr;
      var x$2 = x$0.gr;
      return ((x === null) ? (x$2 === null) : (x === x$2));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.o = (function() {
  return $m_sr_ScalaRunTime$().hx(this);
});
$p.v = (function() {
  return 5;
});
$p.B = (function() {
  return "PaintingSpec";
});
$p.n = (function(n) {
  switch (n) {
    case 0: {
      return this.bE;
      break;
    }
    case 1: {
      return this.bD;
      break;
    }
    case 2: {
      return this.bm;
      break;
    }
    case 3: {
      return this.gr;
      break;
    }
    case 4: {
      return this.fA;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException(("" + n));
    }
  }
});
function $isArrayOf_Lsketches_templates_rooms_gridcanvases_PaintingSpec(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aT)));
}
var $d_Lsketches_templates_rooms_gridcanvases_PaintingSpec = new $TypeData().i($c_Lsketches_templates_rooms_gridcanvases_PaintingSpec, "sketches.templates.rooms.gridcanvases.PaintingSpec", ({
  aT: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_Lsketches_templates_rooms_gridcanvases_Sway(painting, phase, speed, amp) {
  this.gt = null;
  this.gu = 0.0;
  this.gv = 0.0;
  this.gs = 0.0;
  this.gt = painting;
  this.gu = phase;
  this.gv = speed;
  this.gs = amp;
}
$p = $c_Lsketches_templates_rooms_gridcanvases_Sway.prototype = new $h_O();
$p.constructor = $c_Lsketches_templates_rooms_gridcanvases_Sway;
/** @constructor */
function $h_Lsketches_templates_rooms_gridcanvases_Sway() {
}
$h_Lsketches_templates_rooms_gridcanvases_Sway.prototype = $p;
$p.C = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.t = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().m(acc, 2590140);
  acc = $m_sr_Statics$().m(acc, $m_sr_Statics$().L(this.gt));
  acc = $m_sr_Statics$().m(acc, $m_sr_Statics$().aL(this.gu));
  acc = $m_sr_Statics$().m(acc, $m_sr_Statics$().aL(this.gv));
  acc = $m_sr_Statics$().m(acc, $m_sr_Statics$().aL(this.gs));
  return $m_sr_Statics$().ah(acc, 4);
});
$p.r = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lsketches_templates_rooms_gridcanvases_Sway)) {
    if ((((this.gu === x$0.gu) && (this.gv === x$0.gv)) && (this.gs === x$0.gs))) {
      var x = this.gt;
      var x$2 = x$0.gt;
      return ((x === null) ? (x$2 === null) : x.r(x$2));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.o = (function() {
  return $m_sr_ScalaRunTime$().hx(this);
});
$p.v = (function() {
  return 4;
});
$p.B = (function() {
  return "Sway";
});
$p.n = (function(n) {
  switch (n) {
    case 0: {
      return this.gt;
      break;
    }
    case 1: {
      return this.gu;
      break;
    }
    case 2: {
      return this.gv;
      break;
    }
    case 3: {
      return this.gs;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException(("" + n));
    }
  }
});
function $isArrayOf_Lsketches_templates_rooms_gridcanvases_Sway(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aU)));
}
var $d_Lsketches_templates_rooms_gridcanvases_Sway = new $TypeData().i($c_Lsketches_templates_rooms_gridcanvases_Sway, "sketches.templates.rooms.gridcanvases.Sway", ({
  aU: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_Lsketches_templates_rooms_gridcanvases_Wall(center, width, height, rotY, inwardNormal, form, paintings) {
  this.gw = null;
  this.aV = 0.0;
  this.aU = 0.0;
  this.fD = 0.0;
  this.fC = null;
  this.fB = null;
  this.bF = null;
  this.gw = center;
  this.aV = width;
  this.aU = height;
  this.fD = rotY;
  this.fC = inwardNormal;
  this.fB = form;
  this.bF = paintings;
}
$p = $c_Lsketches_templates_rooms_gridcanvases_Wall.prototype = new $h_O();
$p.constructor = $c_Lsketches_templates_rooms_gridcanvases_Wall;
/** @constructor */
function $h_Lsketches_templates_rooms_gridcanvases_Wall() {
}
$h_Lsketches_templates_rooms_gridcanvases_Wall.prototype = $p;
$p.C = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.t = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().m(acc, 2688490);
  acc = $m_sr_Statics$().m(acc, $m_sr_Statics$().L(this.gw));
  acc = $m_sr_Statics$().m(acc, $m_sr_Statics$().aL(this.aV));
  acc = $m_sr_Statics$().m(acc, $m_sr_Statics$().aL(this.aU));
  acc = $m_sr_Statics$().m(acc, $m_sr_Statics$().aL(this.fD));
  acc = $m_sr_Statics$().m(acc, $m_sr_Statics$().L(this.fC));
  acc = $m_sr_Statics$().m(acc, $m_sr_Statics$().L(this.fB));
  acc = $m_sr_Statics$().m(acc, $m_sr_Statics$().L(this.bF));
  return $m_sr_Statics$().ah(acc, 7);
});
$p.r = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lsketches_templates_rooms_gridcanvases_Wall)) {
    if ((((this.aV === x$0.aV) && (this.aU === x$0.aU)) && (this.fD === x$0.fD))) {
      var x = this.gw;
      var x$2 = x$0.gw;
      var $x_3 = ((x === null) ? (x$2 === null) : (x === x$2));
    } else {
      var $x_3 = false;
    }
    if ($x_3) {
      var x$3 = this.fC;
      var x$4 = x$0.fC;
      var $x_2 = ((x$3 === null) ? (x$4 === null) : (x$3 === x$4));
    } else {
      var $x_2 = false;
    }
    if ($x_2) {
      var x$5 = this.fB;
      var x$6 = x$0.fB;
      var $x_1 = ((x$5 === null) ? (x$6 === null) : (x$5 === x$6));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      return $m_sr_BoxesRunTime$().c(this.bF, x$0.bF);
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.o = (function() {
  return $m_sr_ScalaRunTime$().hx(this);
});
$p.v = (function() {
  return 7;
});
$p.B = (function() {
  return "Wall";
});
$p.n = (function(n) {
  switch (n) {
    case 0: {
      return this.gw;
      break;
    }
    case 1: {
      return this.aV;
      break;
    }
    case 2: {
      return this.aU;
      break;
    }
    case 3: {
      return this.fD;
      break;
    }
    case 4: {
      return this.fC;
      break;
    }
    case 5: {
      return this.fB;
      break;
    }
    case 6: {
      return this.bF;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException(("" + n));
    }
  }
});
function $isArrayOf_Lsketches_templates_rooms_gridcanvases_Wall(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aV)));
}
var $d_Lsketches_templates_rooms_gridcanvases_Wall = new $TypeData().i($c_Lsketches_templates_rooms_gridcanvases_Wall, "sketches.templates.rooms.gridcanvases.Wall", ({
  aV: 1,
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
$p.hC = (function(m) {
  return m.jf;
});
$p.hD = (function(m) {
  return m.jg;
});
$p.hE = (function(m) {
  return m.jh;
});
$p.hF = (function(m) {
  return m.ji;
});
$p.hG = (function(m) {
  return m.jj;
});
$p.hH = (function(m) {
  return m.jk;
});
$p.hI = (function(m) {
  return m.jl;
});
$p.hJ = (function(m) {
  return m.jm;
});
$p.hK = (function(m) {
  return m.jn;
});
$p.hL = (function(m) {
  return m.jo;
});
$p.hM = (function(m) {
  return m.jp;
});
$p.hN = (function(m) {
  return m.jq;
});
$p.hO = (function(m) {
  return m.jr;
});
$p.hP = (function(m) {
  return m.js;
});
$p.hQ = (function(m) {
  return m.jt;
});
$p.hR = (function(m) {
  return m.ju;
});
$p.n9 = (function(m, v) {
  m.jf = v;
});
$p.na = (function(m, v) {
  m.jg = v;
});
$p.nb = (function(m, v) {
  m.jh = v;
});
$p.nc = (function(m, v) {
  m.ji = v;
});
$p.nd = (function(m, v) {
  m.jj = v;
});
$p.ne = (function(m, v) {
  m.jk = v;
});
$p.nf = (function(m, v) {
  m.jl = v;
});
$p.ng = (function(m, v) {
  m.jm = v;
});
$p.nh = (function(m, v) {
  m.jn = v;
});
$p.ni = (function(m, v) {
  m.jo = v;
});
$p.nj = (function(m, v) {
  m.jp = v;
});
$p.nk = (function(m, v) {
  m.jq = v;
});
$p.nl = (function(m, v) {
  m.jr = v;
});
$p.nm = (function(m, v) {
  m.js = v;
});
$p.nn = (function(m, v) {
  m.jt = v;
});
$p.no = (function(m, v) {
  m.ju = v;
});
var $d_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$, "trivalibs.graphics.math.cpu.Mat4$given_Mat4Mutable_Mat4$", ({
  es: 1,
  X: 1,
  aZ: 1,
  b0: 1
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
$p.G = (function(v) {
  return v.id;
});
$p.x = (function(v) {
  return v.ie;
});
$p.ae = (function(v) {
  return v.ig;
});
$p.av = (function(v) {
  return v.ic;
});
$p.gQ = (function(v, value) {
  v.id = value;
});
$p.gS = (function(v, value) {
  v.ie = value;
});
$p.kr = (function(v, value) {
  v.ig = value;
});
$p.kl = (function(v, value) {
  v.ic = value;
});
var $d_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$, "trivalibs.graphics.math.cpu.Quat$given_Vec4Mutable_Quat$", ({
  ew: 1,
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
$p.G = (function(v) {
  return v.ih;
});
$p.x = (function(v) {
  return v.ii;
});
$p.gQ = (function(v, value) {
  v.ih = value;
});
$p.gS = (function(v, value) {
  v.ii = value;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$, "trivalibs.graphics.math.cpu.Vec2$given_Vec2Mutable_Vec2$", ({
  ez: 1,
  Y: 1,
  b1: 1,
  b2: 1
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
$p.G = (function(v) {
  return v.y;
});
$p.x = (function(v) {
  return v.A;
});
$p.ae = (function(v) {
  return v.z;
});
$p.mY = (function(v, other) {
  return $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D(this, v, other);
});
var $d_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$, "trivalibs.graphics.math.cpu.Vec3$given_Vec3Mutable_Vec3$", ({
  eC: 1,
  b3: 1,
  ej: 1,
  em: 1
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
$p.G = (function(v) {
  return v.fF;
});
$p.x = (function(v) {
  return v.fG;
});
$p.ae = (function(v) {
  return v.fH;
});
$p.av = (function(v) {
  return v.fE;
});
$p.gQ = (function(v, value) {
  v.fF = value;
});
$p.gS = (function(v, value) {
  v.fG = value;
});
$p.kr = (function(v, value) {
  v.fH = value;
});
$p.kl = (function(v, value) {
  v.fE = value;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$, "trivalibs.graphics.math.cpu.Vec4$given_Vec4Mutable_Vec4$", ({
  eG: 1,
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
$p.p5 = (function(m) {
  var offset$proxy1 = (m.off | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy1, true));
});
$p.p7 = (function(m) {
  var offset$proxy2 = ((4 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy2, true));
});
$p.p9 = (function(m) {
  var offset$proxy3 = ((8 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy3, true));
});
$p.pb = (function(m) {
  var offset$proxy4 = ((12 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy4, true));
});
$p.pd = (function(m) {
  var offset$proxy5 = ((16 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy5, true));
});
$p.pf = (function(m) {
  var offset$proxy6 = ((20 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy6, true));
});
$p.ph = (function(m) {
  var offset$proxy7 = ((24 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy7, true));
});
$p.pj = (function(m) {
  var offset$proxy8 = ((28 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy8, true));
});
$p.pl = (function(m) {
  var offset$proxy9 = ((32 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy9, true));
});
$p.pn = (function(m) {
  var offset$proxy10 = ((36 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy10, true));
});
$p.pp = (function(m) {
  var offset$proxy11 = ((40 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy11, true));
});
$p.pr = (function(m) {
  var offset$proxy12 = ((44 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy12, true));
});
$p.pt = (function(m) {
  var offset$proxy13 = ((48 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy13, true));
});
$p.pv = (function(m) {
  var offset$proxy14 = ((52 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy14, true));
});
$p.px = (function(m) {
  var offset$proxy15 = ((56 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy15, true));
});
$p.pz = (function(m) {
  var offset$proxy16 = ((60 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy16, true));
});
$p.p6 = (function(m, v) {
  var value$proxy1 = Math.fround(v);
  var offset$proxy17 = (m.off | 0);
  m.dv.setFloat32(offset$proxy17, value$proxy1, true);
});
$p.p8 = (function(m, v) {
  var value$proxy2 = Math.fround(v);
  var offset$proxy18 = ((4 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy18, value$proxy2, true);
});
$p.pa = (function(m, v) {
  var value$proxy3 = Math.fround(v);
  var offset$proxy19 = ((8 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy19, value$proxy3, true);
});
$p.pc = (function(m, v) {
  var value$proxy4 = Math.fround(v);
  var offset$proxy20 = ((12 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy20, value$proxy4, true);
});
$p.pe = (function(m, v) {
  var value$proxy5 = Math.fround(v);
  var offset$proxy21 = ((16 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy21, value$proxy5, true);
});
$p.pg = (function(m, v) {
  var value$proxy6 = Math.fround(v);
  var offset$proxy22 = ((20 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy22, value$proxy6, true);
});
$p.pi = (function(m, v) {
  var value$proxy7 = Math.fround(v);
  var offset$proxy23 = ((24 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy23, value$proxy7, true);
});
$p.pk = (function(m, v) {
  var value$proxy8 = Math.fround(v);
  var offset$proxy24 = ((28 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy24, value$proxy8, true);
});
$p.pm = (function(m, v) {
  var value$proxy9 = Math.fround(v);
  var offset$proxy25 = ((32 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy25, value$proxy9, true);
});
$p.po = (function(m, v) {
  var value$proxy10 = Math.fround(v);
  var offset$proxy26 = ((36 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy26, value$proxy10, true);
});
$p.pq = (function(m, v) {
  var value$proxy11 = Math.fround(v);
  var offset$proxy27 = ((40 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy27, value$proxy11, true);
});
$p.ps = (function(m, v) {
  var value$proxy12 = Math.fround(v);
  var offset$proxy28 = ((44 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy28, value$proxy12, true);
});
$p.pu = (function(m, v) {
  var value$proxy13 = Math.fround(v);
  var offset$proxy29 = ((48 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy29, value$proxy13, true);
});
$p.pw = (function(m, v) {
  var value$proxy14 = Math.fround(v);
  var offset$proxy30 = ((52 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy30, value$proxy14, true);
});
$p.py = (function(m, v) {
  var value$proxy15 = Math.fround(v);
  var offset$proxy31 = ((56 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy31, value$proxy15, true);
});
$p.pA = (function(m, v) {
  var value$proxy16 = Math.fround(v);
  var offset$proxy32 = ((60 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy32, value$proxy16, true);
});
$p.hC = (function(m) {
  return this.p5(m);
});
$p.hD = (function(m) {
  return this.p7(m);
});
$p.hE = (function(m) {
  return this.p9(m);
});
$p.hF = (function(m) {
  return this.pb(m);
});
$p.hG = (function(m) {
  return this.pd(m);
});
$p.hH = (function(m) {
  return this.pf(m);
});
$p.hI = (function(m) {
  return this.ph(m);
});
$p.hJ = (function(m) {
  return this.pj(m);
});
$p.hK = (function(m) {
  return this.pl(m);
});
$p.hL = (function(m) {
  return this.pn(m);
});
$p.hM = (function(m) {
  return this.pp(m);
});
$p.hN = (function(m) {
  return this.pr(m);
});
$p.hO = (function(m) {
  return this.pt(m);
});
$p.hP = (function(m) {
  return this.pv(m);
});
$p.hQ = (function(m) {
  return this.px(m);
});
$p.hR = (function(m) {
  return this.pz(m);
});
$p.n9 = (function(m, v) {
  this.p6(m, v);
});
$p.na = (function(m, v) {
  this.p8(m, v);
});
$p.nb = (function(m, v) {
  this.pa(m, v);
});
$p.nc = (function(m, v) {
  this.pc(m, v);
});
$p.nd = (function(m, v) {
  this.pe(m, v);
});
$p.ne = (function(m, v) {
  this.pg(m, v);
});
$p.nf = (function(m, v) {
  this.pi(m, v);
});
$p.ng = (function(m, v) {
  this.pk(m, v);
});
$p.nh = (function(m, v) {
  this.pm(m, v);
});
$p.ni = (function(m, v) {
  this.po(m, v);
});
$p.nj = (function(m, v) {
  this.pq(m, v);
});
$p.nk = (function(m, v) {
  this.ps(m, v);
});
$p.nl = (function(m, v) {
  this.pu(m, v);
});
$p.nm = (function(m, v) {
  this.pw(m, v);
});
$p.nn = (function(m, v) {
  this.py(m, v);
});
$p.no = (function(m, v) {
  this.pA(m, v);
});
var $d_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$, "trivalibs.graphics.math.cpu.mat4$package$Mat4Buffer$given_Mat4Mutable_StructRef$", ({
  eJ: 1,
  X: 1,
  aZ: 1,
  b0: 1
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
$p.km = (function(v) {
  var offset$proxy1 = (v.off | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy1, true));
});
$p.ko = (function(v) {
  var offset$proxy2 = ((4 + (v.off | 0)) | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy2, true));
});
$p.kn = (function(v, value) {
  var value$proxy1 = Math.fround(value);
  var offset$proxy3 = (v.off | 0);
  v.dv.setFloat32(offset$proxy3, value$proxy1, true);
});
$p.kp = (function(v, value) {
  var value$proxy2 = Math.fround(value);
  var offset$proxy4 = ((4 + (v.off | 0)) | 0);
  v.dv.setFloat32(offset$proxy4, value$proxy2, true);
});
$p.G = (function(v) {
  return this.km(v);
});
$p.x = (function(v) {
  return this.ko(v);
});
$p.gQ = (function(v, value) {
  this.kn(v, value);
});
$p.gS = (function(v, value) {
  this.kp(v, value);
});
var $d_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$, "trivalibs.graphics.math.cpu.vec2$package$Vec2Buffer$vec2MutableBuffer$", ({
  eM: 1,
  Y: 1,
  b1: 1,
  b2: 1
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
$p.km = (function(v) {
  var offset$proxy1 = (v.off | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy1, true));
});
$p.ko = (function(v) {
  var offset$proxy2 = ((4 + (v.off | 0)) | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy2, true));
});
$p.qE = (function(v) {
  var offset$proxy3 = ((8 + (v.off | 0)) | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy3, true));
});
$p.qw = (function(v) {
  var offset$proxy4 = ((12 + (v.off | 0)) | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy4, true));
});
$p.kn = (function(v, value) {
  var value$proxy1 = Math.fround(value);
  var offset$proxy5 = (v.off | 0);
  v.dv.setFloat32(offset$proxy5, value$proxy1, true);
});
$p.kp = (function(v, value) {
  var value$proxy2 = Math.fround(value);
  var offset$proxy6 = ((4 + (v.off | 0)) | 0);
  v.dv.setFloat32(offset$proxy6, value$proxy2, true);
});
$p.qF = (function(v, value) {
  var value$proxy3 = Math.fround(value);
  var offset$proxy7 = ((8 + (v.off | 0)) | 0);
  v.dv.setFloat32(offset$proxy7, value$proxy3, true);
});
$p.qy = (function(v, value) {
  var value$proxy4 = Math.fround(value);
  var offset$proxy8 = ((12 + (v.off | 0)) | 0);
  v.dv.setFloat32(offset$proxy8, value$proxy4, true);
});
$p.G = (function(v) {
  return this.km(v);
});
$p.x = (function(v) {
  return this.ko(v);
});
$p.ae = (function(v) {
  return this.qE(v);
});
$p.av = (function(v) {
  return this.qw(v);
});
$p.gQ = (function(v, value) {
  this.kn(v, value);
});
$p.gS = (function(v, value) {
  this.kp(v, value);
});
$p.kr = (function(v, value) {
  this.qF(v, value);
});
$p.kl = (function(v, value) {
  this.qy(v, value);
});
var $d_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$, "trivalibs.graphics.math.cpu.vec4$package$Vec4Buffer$vec4MutableBuffer$", ({
  eP: 1,
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
  var all = [vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, uniformDecls, $thiz.hm, f$proxy1, g$proxy1];
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
  this.aa = null;
  this.a9 = null;
  this.hm = null;
  this.aa = vertexBody;
  this.a9 = fragmentBody;
  this.hm = helperFns;
}
$p = $c_Ltrivalibs_graphics_shader_ShaderDef.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_ShaderDef;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_ShaderDef() {
}
$h_Ltrivalibs_graphics_shader_ShaderDef.prototype = $p;
$p.C = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.t = (function() {
  return $m_s_util_hashing_MurmurHash3$().W(this, (-1488826029), true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_Ltrivalibs_graphics_shader_ShaderDef) && (((this.aa === x$0.aa) && (this.a9 === x$0.a9)) && (this.hm === x$0.hm))));
});
$p.o = (function() {
  return $m_sr_ScalaRunTime$().hx(this);
});
$p.v = (function() {
  return 3;
});
$p.B = (function() {
  return "ShaderDef";
});
$p.n = (function(n) {
  switch (n) {
    case 0: {
      return this.aa;
      break;
    }
    case 1: {
      return this.a9;
      break;
    }
    case 2: {
      return this.hm;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException(("" + n));
    }
  }
});
function $isArrayOf_Ltrivalibs_graphics_shader_ShaderDef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.b5)));
}
var $d_Ltrivalibs_graphics_shader_ShaderDef = new $TypeData().i($c_Ltrivalibs_graphics_shader_ShaderDef, "trivalibs.graphics.shader.ShaderDef", ({
  b5: 1,
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
  b8: 1,
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
  bb: 1,
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
  aa: 1,
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
  bg: 1,
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
  bk: 1,
  a5: 1,
  a3: 1,
  a7: 1,
  a4: 1
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
  bl: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
function $isArrayOf_jl_SecurityException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bn)));
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
  bo: 1,
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
  bt: 1,
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
  by: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
function $p_s_MatchError__objString__T($thiz) {
  if ((!$thiz.kz)) {
    if (($thiz.i2 === null)) {
      var $x_1 = "null";
    } else {
      var this$1 = $thiz.i2;
      var cls = $objectGetClass(this$1);
      var ofClass = ((cls === null) ? "of a JS class" : ("of class " + cls.iV.N));
      try {
        var $x_1 = ((($thiz.i2 + " (") + ofClass) + ")");
      } catch (e) {
        var $x_1 = ("an instance " + ofClass);
      }
    }
    $thiz.ky = $x_1;
    $thiz.kz = true;
  }
  return $thiz.ky;
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.i2 = null;
    this.ky = null;
    this.kz = false;
    this.i2 = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  iK() {
    return $p_s_MatchError__objString__T(this);
  }
}
var $d_s_MatchError = new $TypeData().i($c_s_MatchError, "scala.MatchError", ({
  bJ: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.gU = 0;
  this.kB = 0;
  this.kA = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.kA = outer;
  this.gU = 0;
  this.kB = outer.v();
}
$p = $c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $p;
$p.U = (function() {
  return (this.gU < this.kB);
});
$p.N = (function() {
  var result = this.kA.n(this.gU);
  this.gU = ((1 + this.gU) | 0);
  return result;
});
var $d_s_Product$$anon$1 = new $TypeData().i($c_s_Product$$anon$1, "scala.Product$$anon$1", ({
  bL: 1,
  m: 1,
  d: 1,
  e: 1,
  r: 1
}));
/** @constructor */
function $c_T1(_1) {
  this.fY = null;
  this.fY = _1;
}
$p = $c_T1.prototype = new $h_O();
$p.constructor = $c_T1;
/** @constructor */
function $h_T1() {
}
$h_T1.prototype = $p;
$p.v = (function() {
  return 1;
});
$p.n = (function(n) {
  return $f_s_Product1__productElement__I__O(this, n);
});
$p.o = (function() {
  return (("(" + this.fY) + ")");
});
$p.B = (function() {
  return "Tuple1";
});
$p.C = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.t = (function() {
  return $m_s_util_hashing_MurmurHash3$().W(this, 1228477340, true);
});
$p.r = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T1) && $m_sr_BoxesRunTime$().c(this.fY, x$1.fY)));
});
function $isArrayOf_T1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ac)));
}
var $d_T1 = new $TypeData().i($c_T1, "scala.Tuple1", ({
  ac: 1,
  bM: 1,
  c: 1,
  b: 1,
  a: 1
}));
/** @constructor */
function $c_T10(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10) {
  this.fZ = null;
  this.bQ = null;
  this.bR = null;
  this.bS = null;
  this.bT = null;
  this.bU = null;
  this.bV = null;
  this.bW = null;
  this.bX = null;
  this.bP = null;
  this.fZ = _1;
  this.bQ = _2;
  this.bR = _3;
  this.bS = _4;
  this.bT = _5;
  this.bU = _6;
  this.bV = _7;
  this.bW = _8;
  this.bX = _9;
  this.bP = _10;
}
$p = $c_T10.prototype = new $h_O();
$p.constructor = $c_T10;
/** @constructor */
function $h_T10() {
}
$h_T10.prototype = $p;
$p.C = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.v = (function() {
  return 10;
});
$p.n = (function(n) {
  return $f_s_Product10__productElement__I__O(this, n);
});
$p.t = (function() {
  return $m_s_util_hashing_MurmurHash3$().W(this, 2104595240, true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T10) && ((((((((($m_sr_BoxesRunTime$().c(this.fZ, x$0.fZ) && $m_sr_BoxesRunTime$().c(this.bQ, x$0.bQ)) && $m_sr_BoxesRunTime$().c(this.bR, x$0.bR)) && $m_sr_BoxesRunTime$().c(this.bS, x$0.bS)) && $m_sr_BoxesRunTime$().c(this.bT, x$0.bT)) && $m_sr_BoxesRunTime$().c(this.bU, x$0.bU)) && $m_sr_BoxesRunTime$().c(this.bV, x$0.bV)) && $m_sr_BoxesRunTime$().c(this.bW, x$0.bW)) && $m_sr_BoxesRunTime$().c(this.bX, x$0.bX)) && $m_sr_BoxesRunTime$().c(this.bP, x$0.bP))));
});
$p.B = (function() {
  return "Tuple10";
});
$p.o = (function() {
  return (((((((((((((((((((("(" + this.fZ) + ",") + this.bQ) + ",") + this.bR) + ",") + this.bS) + ",") + this.bT) + ",") + this.bU) + ",") + this.bV) + ",") + this.bW) + ",") + this.bX) + ",") + this.bP) + ")");
});
function $isArrayOf_T10(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ad)));
}
var $d_T10 = new $TypeData().i($c_T10, "scala.Tuple10", ({
  ad: 1,
  b: 1,
  c: 1,
  bN: 1,
  a: 1
}));
/** @constructor */
function $c_T11(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11) {
  this.g0 = null;
  this.c0 = null;
  this.c1 = null;
  this.c2 = null;
  this.c3 = null;
  this.c4 = null;
  this.c5 = null;
  this.c6 = null;
  this.c7 = null;
  this.bY = null;
  this.bZ = null;
  this.g0 = _1;
  this.c0 = _2;
  this.c1 = _3;
  this.c2 = _4;
  this.c3 = _5;
  this.c4 = _6;
  this.c5 = _7;
  this.c6 = _8;
  this.c7 = _9;
  this.bY = _10;
  this.bZ = _11;
}
$p = $c_T11.prototype = new $h_O();
$p.constructor = $c_T11;
/** @constructor */
function $h_T11() {
}
$h_T11.prototype = $p;
$p.C = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.v = (function() {
  return 11;
});
$p.n = (function(n) {
  return $f_s_Product11__productElement__I__O(this, n);
});
$p.t = (function() {
  return $m_s_util_hashing_MurmurHash3$().W(this, 838406606, true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T11) && (((((((((($m_sr_BoxesRunTime$().c(this.g0, x$0.g0) && $m_sr_BoxesRunTime$().c(this.c0, x$0.c0)) && $m_sr_BoxesRunTime$().c(this.c1, x$0.c1)) && $m_sr_BoxesRunTime$().c(this.c2, x$0.c2)) && $m_sr_BoxesRunTime$().c(this.c3, x$0.c3)) && $m_sr_BoxesRunTime$().c(this.c4, x$0.c4)) && $m_sr_BoxesRunTime$().c(this.c5, x$0.c5)) && $m_sr_BoxesRunTime$().c(this.c6, x$0.c6)) && $m_sr_BoxesRunTime$().c(this.c7, x$0.c7)) && $m_sr_BoxesRunTime$().c(this.bY, x$0.bY)) && $m_sr_BoxesRunTime$().c(this.bZ, x$0.bZ))));
});
$p.B = (function() {
  return "Tuple11";
});
$p.o = (function() {
  return (((((((((((((((((((((("(" + this.g0) + ",") + this.c0) + ",") + this.c1) + ",") + this.c2) + ",") + this.c3) + ",") + this.c4) + ",") + this.c5) + ",") + this.c6) + ",") + this.c7) + ",") + this.bY) + ",") + this.bZ) + ")");
});
function $isArrayOf_T11(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ae)));
}
var $d_T11 = new $TypeData().i($c_T11, "scala.Tuple11", ({
  ae: 1,
  b: 1,
  c: 1,
  bO: 1,
  a: 1
}));
/** @constructor */
function $c_T12(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12) {
  this.g1 = null;
  this.cb = null;
  this.cc = null;
  this.cd = null;
  this.ce = null;
  this.cf = null;
  this.cg = null;
  this.ch = null;
  this.ci = null;
  this.c8 = null;
  this.c9 = null;
  this.ca = null;
  this.g1 = _1;
  this.cb = _2;
  this.cc = _3;
  this.cd = _4;
  this.ce = _5;
  this.cf = _6;
  this.cg = _7;
  this.ch = _8;
  this.ci = _9;
  this.c8 = _10;
  this.c9 = _11;
  this.ca = _12;
}
$p = $c_T12.prototype = new $h_O();
$p.constructor = $c_T12;
/** @constructor */
function $h_T12() {
}
$h_T12.prototype = $p;
$p.C = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.v = (function() {
  return 12;
});
$p.n = (function(n) {
  return $f_s_Product12__productElement__I__O(this, n);
});
$p.t = (function() {
  return $m_s_util_hashing_MurmurHash3$().W(this, (-1964145863), true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T12) && ((((((((((($m_sr_BoxesRunTime$().c(this.g1, x$0.g1) && $m_sr_BoxesRunTime$().c(this.cb, x$0.cb)) && $m_sr_BoxesRunTime$().c(this.cc, x$0.cc)) && $m_sr_BoxesRunTime$().c(this.cd, x$0.cd)) && $m_sr_BoxesRunTime$().c(this.ce, x$0.ce)) && $m_sr_BoxesRunTime$().c(this.cf, x$0.cf)) && $m_sr_BoxesRunTime$().c(this.cg, x$0.cg)) && $m_sr_BoxesRunTime$().c(this.ch, x$0.ch)) && $m_sr_BoxesRunTime$().c(this.ci, x$0.ci)) && $m_sr_BoxesRunTime$().c(this.c8, x$0.c8)) && $m_sr_BoxesRunTime$().c(this.c9, x$0.c9)) && $m_sr_BoxesRunTime$().c(this.ca, x$0.ca))));
});
$p.B = (function() {
  return "Tuple12";
});
$p.o = (function() {
  return (((((((((((((((((((((((("(" + this.g1) + ",") + this.cb) + ",") + this.cc) + ",") + this.cd) + ",") + this.ce) + ",") + this.cf) + ",") + this.cg) + ",") + this.ch) + ",") + this.ci) + ",") + this.c8) + ",") + this.c9) + ",") + this.ca) + ")");
});
function $isArrayOf_T12(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.af)));
}
var $d_T12 = new $TypeData().i($c_T12, "scala.Tuple12", ({
  af: 1,
  b: 1,
  c: 1,
  bP: 1,
  a: 1
}));
/** @constructor */
function $c_T13(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13) {
  this.g2 = null;
  this.cn = null;
  this.co = null;
  this.cp = null;
  this.cq = null;
  this.cr = null;
  this.cs = null;
  this.ct = null;
  this.cu = null;
  this.cj = null;
  this.ck = null;
  this.cl = null;
  this.cm = null;
  this.g2 = _1;
  this.cn = _2;
  this.co = _3;
  this.cp = _4;
  this.cq = _5;
  this.cr = _6;
  this.cs = _7;
  this.ct = _8;
  this.cu = _9;
  this.cj = _10;
  this.ck = _11;
  this.cl = _12;
  this.cm = _13;
}
$p = $c_T13.prototype = new $h_O();
$p.constructor = $c_T13;
/** @constructor */
function $h_T13() {
}
$h_T13.prototype = $p;
$p.C = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.v = (function() {
  return 13;
});
$p.n = (function(n) {
  return $f_s_Product13__productElement__I__O(this, n);
});
$p.t = (function() {
  return $m_s_util_hashing_MurmurHash3$().W(this, 1224168367, true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T13) && (((((((((((($m_sr_BoxesRunTime$().c(this.g2, x$0.g2) && $m_sr_BoxesRunTime$().c(this.cn, x$0.cn)) && $m_sr_BoxesRunTime$().c(this.co, x$0.co)) && $m_sr_BoxesRunTime$().c(this.cp, x$0.cp)) && $m_sr_BoxesRunTime$().c(this.cq, x$0.cq)) && $m_sr_BoxesRunTime$().c(this.cr, x$0.cr)) && $m_sr_BoxesRunTime$().c(this.cs, x$0.cs)) && $m_sr_BoxesRunTime$().c(this.ct, x$0.ct)) && $m_sr_BoxesRunTime$().c(this.cu, x$0.cu)) && $m_sr_BoxesRunTime$().c(this.cj, x$0.cj)) && $m_sr_BoxesRunTime$().c(this.ck, x$0.ck)) && $m_sr_BoxesRunTime$().c(this.cl, x$0.cl)) && $m_sr_BoxesRunTime$().c(this.cm, x$0.cm))));
});
$p.B = (function() {
  return "Tuple13";
});
$p.o = (function() {
  return (((((((((((((((((((((((((("(" + this.g2) + ",") + this.cn) + ",") + this.co) + ",") + this.cp) + ",") + this.cq) + ",") + this.cr) + ",") + this.cs) + ",") + this.ct) + ",") + this.cu) + ",") + this.cj) + ",") + this.ck) + ",") + this.cl) + ",") + this.cm) + ")");
});
function $isArrayOf_T13(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ag)));
}
var $d_T13 = new $TypeData().i($c_T13, "scala.Tuple13", ({
  ag: 1,
  b: 1,
  c: 1,
  bQ: 1,
  a: 1
}));
/** @constructor */
function $c_T14(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14) {
  this.g3 = null;
  this.cA = null;
  this.cB = null;
  this.cC = null;
  this.cD = null;
  this.cE = null;
  this.cF = null;
  this.cG = null;
  this.cH = null;
  this.cv = null;
  this.cw = null;
  this.cx = null;
  this.cy = null;
  this.cz = null;
  this.g3 = _1;
  this.cA = _2;
  this.cB = _3;
  this.cC = _4;
  this.cD = _5;
  this.cE = _6;
  this.cF = _7;
  this.cG = _8;
  this.cH = _9;
  this.cv = _10;
  this.cw = _11;
  this.cx = _12;
  this.cy = _13;
  this.cz = _14;
}
$p = $c_T14.prototype = new $h_O();
$p.constructor = $c_T14;
/** @constructor */
function $h_T14() {
}
$h_T14.prototype = $p;
$p.C = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.v = (function() {
  return 14;
});
$p.n = (function(n) {
  return $f_s_Product14__productElement__I__O(this, n);
});
$p.t = (function() {
  return $m_s_util_hashing_MurmurHash3$().W(this, 147759069, true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T14) && ((((((((((((($m_sr_BoxesRunTime$().c(this.g3, x$0.g3) && $m_sr_BoxesRunTime$().c(this.cA, x$0.cA)) && $m_sr_BoxesRunTime$().c(this.cB, x$0.cB)) && $m_sr_BoxesRunTime$().c(this.cC, x$0.cC)) && $m_sr_BoxesRunTime$().c(this.cD, x$0.cD)) && $m_sr_BoxesRunTime$().c(this.cE, x$0.cE)) && $m_sr_BoxesRunTime$().c(this.cF, x$0.cF)) && $m_sr_BoxesRunTime$().c(this.cG, x$0.cG)) && $m_sr_BoxesRunTime$().c(this.cH, x$0.cH)) && $m_sr_BoxesRunTime$().c(this.cv, x$0.cv)) && $m_sr_BoxesRunTime$().c(this.cw, x$0.cw)) && $m_sr_BoxesRunTime$().c(this.cx, x$0.cx)) && $m_sr_BoxesRunTime$().c(this.cy, x$0.cy)) && $m_sr_BoxesRunTime$().c(this.cz, x$0.cz))));
});
$p.B = (function() {
  return "Tuple14";
});
$p.o = (function() {
  return (((((((((((((((((((((((((((("(" + this.g3) + ",") + this.cA) + ",") + this.cB) + ",") + this.cC) + ",") + this.cD) + ",") + this.cE) + ",") + this.cF) + ",") + this.cG) + ",") + this.cH) + ",") + this.cv) + ",") + this.cw) + ",") + this.cx) + ",") + this.cy) + ",") + this.cz) + ")");
});
function $isArrayOf_T14(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ah)));
}
var $d_T14 = new $TypeData().i($c_T14, "scala.Tuple14", ({
  ah: 1,
  b: 1,
  c: 1,
  bR: 1,
  a: 1
}));
/** @constructor */
function $c_T15(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15) {
  this.g4 = null;
  this.cO = null;
  this.cP = null;
  this.cQ = null;
  this.cR = null;
  this.cS = null;
  this.cT = null;
  this.cU = null;
  this.cV = null;
  this.cI = null;
  this.cJ = null;
  this.cK = null;
  this.cL = null;
  this.cM = null;
  this.cN = null;
  this.g4 = _1;
  this.cO = _2;
  this.cP = _3;
  this.cQ = _4;
  this.cR = _5;
  this.cS = _6;
  this.cT = _7;
  this.cU = _8;
  this.cV = _9;
  this.cI = _10;
  this.cJ = _11;
  this.cK = _12;
  this.cL = _13;
  this.cM = _14;
  this.cN = _15;
}
$p = $c_T15.prototype = new $h_O();
$p.constructor = $c_T15;
/** @constructor */
function $h_T15() {
}
$h_T15.prototype = $p;
$p.C = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.v = (function() {
  return 15;
});
$p.n = (function(n) {
  return $f_s_Product15__productElement__I__O(this, n);
});
$p.t = (function() {
  return $m_s_util_hashing_MurmurHash3$().W(this, 1834180931, true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T15) && (((((((((((((($m_sr_BoxesRunTime$().c(this.g4, x$0.g4) && $m_sr_BoxesRunTime$().c(this.cO, x$0.cO)) && $m_sr_BoxesRunTime$().c(this.cP, x$0.cP)) && $m_sr_BoxesRunTime$().c(this.cQ, x$0.cQ)) && $m_sr_BoxesRunTime$().c(this.cR, x$0.cR)) && $m_sr_BoxesRunTime$().c(this.cS, x$0.cS)) && $m_sr_BoxesRunTime$().c(this.cT, x$0.cT)) && $m_sr_BoxesRunTime$().c(this.cU, x$0.cU)) && $m_sr_BoxesRunTime$().c(this.cV, x$0.cV)) && $m_sr_BoxesRunTime$().c(this.cI, x$0.cI)) && $m_sr_BoxesRunTime$().c(this.cJ, x$0.cJ)) && $m_sr_BoxesRunTime$().c(this.cK, x$0.cK)) && $m_sr_BoxesRunTime$().c(this.cL, x$0.cL)) && $m_sr_BoxesRunTime$().c(this.cM, x$0.cM)) && $m_sr_BoxesRunTime$().c(this.cN, x$0.cN))));
});
$p.B = (function() {
  return "Tuple15";
});
$p.o = (function() {
  return (((((((((((((((((((((((((((((("(" + this.g4) + ",") + this.cO) + ",") + this.cP) + ",") + this.cQ) + ",") + this.cR) + ",") + this.cS) + ",") + this.cT) + ",") + this.cU) + ",") + this.cV) + ",") + this.cI) + ",") + this.cJ) + ",") + this.cK) + ",") + this.cL) + ",") + this.cM) + ",") + this.cN) + ")");
});
function $isArrayOf_T15(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ai)));
}
var $d_T15 = new $TypeData().i($c_T15, "scala.Tuple15", ({
  ai: 1,
  b: 1,
  c: 1,
  bS: 1,
  a: 1
}));
/** @constructor */
function $c_T16(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16) {
  this.g5 = null;
  this.d3 = null;
  this.d4 = null;
  this.d5 = null;
  this.d6 = null;
  this.d7 = null;
  this.d8 = null;
  this.d9 = null;
  this.da = null;
  this.cW = null;
  this.cX = null;
  this.cY = null;
  this.cZ = null;
  this.d0 = null;
  this.d1 = null;
  this.d2 = null;
  this.g5 = _1;
  this.d3 = _2;
  this.d4 = _3;
  this.d5 = _4;
  this.d6 = _5;
  this.d7 = _6;
  this.d8 = _7;
  this.d9 = _8;
  this.da = _9;
  this.cW = _10;
  this.cX = _11;
  this.cY = _12;
  this.cZ = _13;
  this.d0 = _14;
  this.d1 = _15;
  this.d2 = _16;
}
$p = $c_T16.prototype = new $h_O();
$p.constructor = $c_T16;
/** @constructor */
function $h_T16() {
}
$h_T16.prototype = $p;
$p.C = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.v = (function() {
  return 16;
});
$p.n = (function(n) {
  return $f_s_Product16__productElement__I__O(this, n);
});
$p.t = (function() {
  return $m_s_util_hashing_MurmurHash3$().W(this, 499793902, true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T16) && ((((((((((((((($m_sr_BoxesRunTime$().c(this.g5, x$0.g5) && $m_sr_BoxesRunTime$().c(this.d3, x$0.d3)) && $m_sr_BoxesRunTime$().c(this.d4, x$0.d4)) && $m_sr_BoxesRunTime$().c(this.d5, x$0.d5)) && $m_sr_BoxesRunTime$().c(this.d6, x$0.d6)) && $m_sr_BoxesRunTime$().c(this.d7, x$0.d7)) && $m_sr_BoxesRunTime$().c(this.d8, x$0.d8)) && $m_sr_BoxesRunTime$().c(this.d9, x$0.d9)) && $m_sr_BoxesRunTime$().c(this.da, x$0.da)) && $m_sr_BoxesRunTime$().c(this.cW, x$0.cW)) && $m_sr_BoxesRunTime$().c(this.cX, x$0.cX)) && $m_sr_BoxesRunTime$().c(this.cY, x$0.cY)) && $m_sr_BoxesRunTime$().c(this.cZ, x$0.cZ)) && $m_sr_BoxesRunTime$().c(this.d0, x$0.d0)) && $m_sr_BoxesRunTime$().c(this.d1, x$0.d1)) && $m_sr_BoxesRunTime$().c(this.d2, x$0.d2))));
});
$p.B = (function() {
  return "Tuple16";
});
$p.o = (function() {
  return (((((((((((((((((((((((((((((((("(" + this.g5) + ",") + this.d3) + ",") + this.d4) + ",") + this.d5) + ",") + this.d6) + ",") + this.d7) + ",") + this.d8) + ",") + this.d9) + ",") + this.da) + ",") + this.cW) + ",") + this.cX) + ",") + this.cY) + ",") + this.cZ) + ",") + this.d0) + ",") + this.d1) + ",") + this.d2) + ")");
});
function $isArrayOf_T16(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aj)));
}
var $d_T16 = new $TypeData().i($c_T16, "scala.Tuple16", ({
  aj: 1,
  b: 1,
  c: 1,
  bT: 1,
  a: 1
}));
/** @constructor */
function $c_T17(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17) {
  this.g6 = null;
  this.dj = null;
  this.dk = null;
  this.dl = null;
  this.dm = null;
  this.dn = null;
  this.dp = null;
  this.dq = null;
  this.dr = null;
  this.db = null;
  this.dc = null;
  this.dd = null;
  this.de = null;
  this.df = null;
  this.dg = null;
  this.dh = null;
  this.di = null;
  this.g6 = _1;
  this.dj = _2;
  this.dk = _3;
  this.dl = _4;
  this.dm = _5;
  this.dn = _6;
  this.dp = _7;
  this.dq = _8;
  this.dr = _9;
  this.db = _10;
  this.dc = _11;
  this.dd = _12;
  this.de = _13;
  this.df = _14;
  this.dg = _15;
  this.dh = _16;
  this.di = _17;
}
$p = $c_T17.prototype = new $h_O();
$p.constructor = $c_T17;
/** @constructor */
function $h_T17() {
}
$h_T17.prototype = $p;
$p.C = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.v = (function() {
  return 17;
});
$p.n = (function(n) {
  return $f_s_Product17__productElement__I__O(this, n);
});
$p.t = (function() {
  return $m_s_util_hashing_MurmurHash3$().W(this, (-934366247), true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T17) && (((((((((((((((($m_sr_BoxesRunTime$().c(this.g6, x$0.g6) && $m_sr_BoxesRunTime$().c(this.dj, x$0.dj)) && $m_sr_BoxesRunTime$().c(this.dk, x$0.dk)) && $m_sr_BoxesRunTime$().c(this.dl, x$0.dl)) && $m_sr_BoxesRunTime$().c(this.dm, x$0.dm)) && $m_sr_BoxesRunTime$().c(this.dn, x$0.dn)) && $m_sr_BoxesRunTime$().c(this.dp, x$0.dp)) && $m_sr_BoxesRunTime$().c(this.dq, x$0.dq)) && $m_sr_BoxesRunTime$().c(this.dr, x$0.dr)) && $m_sr_BoxesRunTime$().c(this.db, x$0.db)) && $m_sr_BoxesRunTime$().c(this.dc, x$0.dc)) && $m_sr_BoxesRunTime$().c(this.dd, x$0.dd)) && $m_sr_BoxesRunTime$().c(this.de, x$0.de)) && $m_sr_BoxesRunTime$().c(this.df, x$0.df)) && $m_sr_BoxesRunTime$().c(this.dg, x$0.dg)) && $m_sr_BoxesRunTime$().c(this.dh, x$0.dh)) && $m_sr_BoxesRunTime$().c(this.di, x$0.di))));
});
$p.B = (function() {
  return "Tuple17";
});
$p.o = (function() {
  return (((((((((((((((((((((((((((((((((("(" + this.g6) + ",") + this.dj) + ",") + this.dk) + ",") + this.dl) + ",") + this.dm) + ",") + this.dn) + ",") + this.dp) + ",") + this.dq) + ",") + this.dr) + ",") + this.db) + ",") + this.dc) + ",") + this.dd) + ",") + this.de) + ",") + this.df) + ",") + this.dg) + ",") + this.dh) + ",") + this.di) + ")");
});
function $isArrayOf_T17(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ak)));
}
var $d_T17 = new $TypeData().i($c_T17, "scala.Tuple17", ({
  ak: 1,
  b: 1,
  c: 1,
  bU: 1,
  a: 1
}));
/** @constructor */
function $c_T18(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18) {
  this.g7 = null;
  this.dB = null;
  this.dC = null;
  this.dD = null;
  this.dE = null;
  this.dF = null;
  this.dG = null;
  this.dH = null;
  this.dI = null;
  this.ds = null;
  this.dt = null;
  this.du = null;
  this.dv = null;
  this.dw = null;
  this.dx = null;
  this.dy = null;
  this.dz = null;
  this.dA = null;
  this.g7 = _1;
  this.dB = _2;
  this.dC = _3;
  this.dD = _4;
  this.dE = _5;
  this.dF = _6;
  this.dG = _7;
  this.dH = _8;
  this.dI = _9;
  this.ds = _10;
  this.dt = _11;
  this.du = _12;
  this.dv = _13;
  this.dw = _14;
  this.dx = _15;
  this.dy = _16;
  this.dz = _17;
  this.dA = _18;
}
$p = $c_T18.prototype = new $h_O();
$p.constructor = $c_T18;
/** @constructor */
function $h_T18() {
}
$h_T18.prototype = $p;
$p.C = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.v = (function() {
  return 18;
});
$p.n = (function(n) {
  return $f_s_Product18__productElement__I__O(this, n);
});
$p.t = (function() {
  return $m_s_util_hashing_MurmurHash3$().W(this, (-937041276), true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T18) && ((((((((((((((((($m_sr_BoxesRunTime$().c(this.g7, x$0.g7) && $m_sr_BoxesRunTime$().c(this.dB, x$0.dB)) && $m_sr_BoxesRunTime$().c(this.dC, x$0.dC)) && $m_sr_BoxesRunTime$().c(this.dD, x$0.dD)) && $m_sr_BoxesRunTime$().c(this.dE, x$0.dE)) && $m_sr_BoxesRunTime$().c(this.dF, x$0.dF)) && $m_sr_BoxesRunTime$().c(this.dG, x$0.dG)) && $m_sr_BoxesRunTime$().c(this.dH, x$0.dH)) && $m_sr_BoxesRunTime$().c(this.dI, x$0.dI)) && $m_sr_BoxesRunTime$().c(this.ds, x$0.ds)) && $m_sr_BoxesRunTime$().c(this.dt, x$0.dt)) && $m_sr_BoxesRunTime$().c(this.du, x$0.du)) && $m_sr_BoxesRunTime$().c(this.dv, x$0.dv)) && $m_sr_BoxesRunTime$().c(this.dw, x$0.dw)) && $m_sr_BoxesRunTime$().c(this.dx, x$0.dx)) && $m_sr_BoxesRunTime$().c(this.dy, x$0.dy)) && $m_sr_BoxesRunTime$().c(this.dz, x$0.dz)) && $m_sr_BoxesRunTime$().c(this.dA, x$0.dA))));
});
$p.B = (function() {
  return "Tuple18";
});
$p.o = (function() {
  return (((((((((((((((((((((((((((((((((((("(" + this.g7) + ",") + this.dB) + ",") + this.dC) + ",") + this.dD) + ",") + this.dE) + ",") + this.dF) + ",") + this.dG) + ",") + this.dH) + ",") + this.dI) + ",") + this.ds) + ",") + this.dt) + ",") + this.du) + ",") + this.dv) + ",") + this.dw) + ",") + this.dx) + ",") + this.dy) + ",") + this.dz) + ",") + this.dA) + ")");
});
function $isArrayOf_T18(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.al)));
}
var $d_T18 = new $TypeData().i($c_T18, "scala.Tuple18", ({
  al: 1,
  b: 1,
  c: 1,
  bV: 1,
  a: 1
}));
/** @constructor */
function $c_T19(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19) {
  this.g8 = null;
  this.dT = null;
  this.dU = null;
  this.dV = null;
  this.dW = null;
  this.dX = null;
  this.dY = null;
  this.dZ = null;
  this.e0 = null;
  this.dJ = null;
  this.dK = null;
  this.dL = null;
  this.dM = null;
  this.dN = null;
  this.dO = null;
  this.dP = null;
  this.dQ = null;
  this.dR = null;
  this.dS = null;
  this.g8 = _1;
  this.dT = _2;
  this.dU = _3;
  this.dV = _4;
  this.dW = _5;
  this.dX = _6;
  this.dY = _7;
  this.dZ = _8;
  this.e0 = _9;
  this.dJ = _10;
  this.dK = _11;
  this.dL = _12;
  this.dM = _13;
  this.dN = _14;
  this.dO = _15;
  this.dP = _16;
  this.dQ = _17;
  this.dR = _18;
  this.dS = _19;
}
$p = $c_T19.prototype = new $h_O();
$p.constructor = $c_T19;
/** @constructor */
function $h_T19() {
}
$h_T19.prototype = $p;
$p.C = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.v = (function() {
  return 19;
});
$p.n = (function(n) {
  return $f_s_Product19__productElement__I__O(this, n);
});
$p.t = (function() {
  return $m_s_util_hashing_MurmurHash3$().W(this, (-1955940499), true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T19) && (((((((((((((((((($m_sr_BoxesRunTime$().c(this.g8, x$0.g8) && $m_sr_BoxesRunTime$().c(this.dT, x$0.dT)) && $m_sr_BoxesRunTime$().c(this.dU, x$0.dU)) && $m_sr_BoxesRunTime$().c(this.dV, x$0.dV)) && $m_sr_BoxesRunTime$().c(this.dW, x$0.dW)) && $m_sr_BoxesRunTime$().c(this.dX, x$0.dX)) && $m_sr_BoxesRunTime$().c(this.dY, x$0.dY)) && $m_sr_BoxesRunTime$().c(this.dZ, x$0.dZ)) && $m_sr_BoxesRunTime$().c(this.e0, x$0.e0)) && $m_sr_BoxesRunTime$().c(this.dJ, x$0.dJ)) && $m_sr_BoxesRunTime$().c(this.dK, x$0.dK)) && $m_sr_BoxesRunTime$().c(this.dL, x$0.dL)) && $m_sr_BoxesRunTime$().c(this.dM, x$0.dM)) && $m_sr_BoxesRunTime$().c(this.dN, x$0.dN)) && $m_sr_BoxesRunTime$().c(this.dO, x$0.dO)) && $m_sr_BoxesRunTime$().c(this.dP, x$0.dP)) && $m_sr_BoxesRunTime$().c(this.dQ, x$0.dQ)) && $m_sr_BoxesRunTime$().c(this.dR, x$0.dR)) && $m_sr_BoxesRunTime$().c(this.dS, x$0.dS))));
});
$p.B = (function() {
  return "Tuple19";
});
$p.o = (function() {
  return (((((((((((((((((((((((((((((((((((((("(" + this.g8) + ",") + this.dT) + ",") + this.dU) + ",") + this.dV) + ",") + this.dW) + ",") + this.dX) + ",") + this.dY) + ",") + this.dZ) + ",") + this.e0) + ",") + this.dJ) + ",") + this.dK) + ",") + this.dL) + ",") + this.dM) + ",") + this.dN) + ",") + this.dO) + ",") + this.dP) + ",") + this.dQ) + ",") + this.dR) + ",") + this.dS) + ")");
});
function $isArrayOf_T19(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.am)));
}
var $d_T19 = new $TypeData().i($c_T19, "scala.Tuple19", ({
  am: 1,
  b: 1,
  c: 1,
  bW: 1,
  a: 1
}));
/** @constructor */
function $c_T2(_1, _2) {
  this.a1 = null;
  this.ax = null;
  this.a1 = _1;
  this.ax = _2;
}
$p = $c_T2.prototype = new $h_O();
$p.constructor = $c_T2;
/** @constructor */
function $h_T2() {
}
$h_T2.prototype = $p;
$p.v = (function() {
  return 2;
});
$p.n = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n);
});
$p.o = (function() {
  return (((("(" + this.a1) + ",") + this.ax) + ")");
});
$p.B = (function() {
  return "Tuple2";
});
$p.C = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.t = (function() {
  return $m_s_util_hashing_MurmurHash3$().W(this, (-116390334), true);
});
$p.r = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T2) && ($m_sr_BoxesRunTime$().c(this.a1, x$1.a1) && $m_sr_BoxesRunTime$().c(this.ax, x$1.ax))));
});
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.an)));
}
var $d_T2 = new $TypeData().i($c_T2, "scala.Tuple2", ({
  an: 1,
  bX: 1,
  c: 1,
  b: 1,
  a: 1
}));
/** @constructor */
function $c_T20(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20) {
  this.g9 = null;
  this.eb = null;
  this.ed = null;
  this.ee = null;
  this.ef = null;
  this.eg = null;
  this.eh = null;
  this.ei = null;
  this.ej = null;
  this.e1 = null;
  this.e2 = null;
  this.e3 = null;
  this.e4 = null;
  this.e5 = null;
  this.e6 = null;
  this.e7 = null;
  this.e8 = null;
  this.e9 = null;
  this.ea = null;
  this.ec = null;
  this.g9 = _1;
  this.eb = _2;
  this.ed = _3;
  this.ee = _4;
  this.ef = _5;
  this.eg = _6;
  this.eh = _7;
  this.ei = _8;
  this.ej = _9;
  this.e1 = _10;
  this.e2 = _11;
  this.e3 = _12;
  this.e4 = _13;
  this.e5 = _14;
  this.e6 = _15;
  this.e7 = _16;
  this.e8 = _17;
  this.e9 = _18;
  this.ea = _19;
  this.ec = _20;
}
$p = $c_T20.prototype = new $h_O();
$p.constructor = $c_T20;
/** @constructor */
function $h_T20() {
}
$h_T20.prototype = $p;
$p.C = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.v = (function() {
  return 20;
});
$p.n = (function(n) {
  return $f_s_Product20__productElement__I__O(this, n);
});
$p.t = (function() {
  return $m_s_util_hashing_MurmurHash3$().W(this, 1328807075, true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T20) && ((((((((((((((((((($m_sr_BoxesRunTime$().c(this.g9, x$0.g9) && $m_sr_BoxesRunTime$().c(this.eb, x$0.eb)) && $m_sr_BoxesRunTime$().c(this.ed, x$0.ed)) && $m_sr_BoxesRunTime$().c(this.ee, x$0.ee)) && $m_sr_BoxesRunTime$().c(this.ef, x$0.ef)) && $m_sr_BoxesRunTime$().c(this.eg, x$0.eg)) && $m_sr_BoxesRunTime$().c(this.eh, x$0.eh)) && $m_sr_BoxesRunTime$().c(this.ei, x$0.ei)) && $m_sr_BoxesRunTime$().c(this.ej, x$0.ej)) && $m_sr_BoxesRunTime$().c(this.e1, x$0.e1)) && $m_sr_BoxesRunTime$().c(this.e2, x$0.e2)) && $m_sr_BoxesRunTime$().c(this.e3, x$0.e3)) && $m_sr_BoxesRunTime$().c(this.e4, x$0.e4)) && $m_sr_BoxesRunTime$().c(this.e5, x$0.e5)) && $m_sr_BoxesRunTime$().c(this.e6, x$0.e6)) && $m_sr_BoxesRunTime$().c(this.e7, x$0.e7)) && $m_sr_BoxesRunTime$().c(this.e8, x$0.e8)) && $m_sr_BoxesRunTime$().c(this.e9, x$0.e9)) && $m_sr_BoxesRunTime$().c(this.ea, x$0.ea)) && $m_sr_BoxesRunTime$().c(this.ec, x$0.ec))));
});
$p.B = (function() {
  return "Tuple20";
});
$p.o = (function() {
  return (((((((((((((((((((((((((((((((((((((((("(" + this.g9) + ",") + this.eb) + ",") + this.ed) + ",") + this.ee) + ",") + this.ef) + ",") + this.eg) + ",") + this.eh) + ",") + this.ei) + ",") + this.ej) + ",") + this.e1) + ",") + this.e2) + ",") + this.e3) + ",") + this.e4) + ",") + this.e5) + ",") + this.e6) + ",") + this.e7) + ",") + this.e8) + ",") + this.e9) + ",") + this.ea) + ",") + this.ec) + ")");
});
function $isArrayOf_T20(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ao)));
}
var $d_T20 = new $TypeData().i($c_T20, "scala.Tuple20", ({
  ao: 1,
  b: 1,
  c: 1,
  bY: 1,
  a: 1
}));
/** @constructor */
function $c_T21(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21) {
  this.ga = null;
  this.eu = null;
  this.ex = null;
  this.ey = null;
  this.ez = null;
  this.eA = null;
  this.eB = null;
  this.eC = null;
  this.eD = null;
  this.ek = null;
  this.el = null;
  this.em = null;
  this.en = null;
  this.eo = null;
  this.ep = null;
  this.eq = null;
  this.er = null;
  this.es = null;
  this.et = null;
  this.ev = null;
  this.ew = null;
  this.ga = _1;
  this.eu = _2;
  this.ex = _3;
  this.ey = _4;
  this.ez = _5;
  this.eA = _6;
  this.eB = _7;
  this.eC = _8;
  this.eD = _9;
  this.ek = _10;
  this.el = _11;
  this.em = _12;
  this.en = _13;
  this.eo = _14;
  this.ep = _15;
  this.eq = _16;
  this.er = _17;
  this.es = _18;
  this.et = _19;
  this.ev = _20;
  this.ew = _21;
}
$p = $c_T21.prototype = new $h_O();
$p.constructor = $c_T21;
/** @constructor */
function $h_T21() {
}
$h_T21.prototype = $p;
$p.C = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.v = (function() {
  return 21;
});
$p.n = (function(n) {
  return $f_s_Product21__productElement__I__O(this, n);
});
$p.t = (function() {
  return $m_s_util_hashing_MurmurHash3$().W(this, (-21288119), true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T21) && (((((((((((((((((((($m_sr_BoxesRunTime$().c(this.ga, x$0.ga) && $m_sr_BoxesRunTime$().c(this.eu, x$0.eu)) && $m_sr_BoxesRunTime$().c(this.ex, x$0.ex)) && $m_sr_BoxesRunTime$().c(this.ey, x$0.ey)) && $m_sr_BoxesRunTime$().c(this.ez, x$0.ez)) && $m_sr_BoxesRunTime$().c(this.eA, x$0.eA)) && $m_sr_BoxesRunTime$().c(this.eB, x$0.eB)) && $m_sr_BoxesRunTime$().c(this.eC, x$0.eC)) && $m_sr_BoxesRunTime$().c(this.eD, x$0.eD)) && $m_sr_BoxesRunTime$().c(this.ek, x$0.ek)) && $m_sr_BoxesRunTime$().c(this.el, x$0.el)) && $m_sr_BoxesRunTime$().c(this.em, x$0.em)) && $m_sr_BoxesRunTime$().c(this.en, x$0.en)) && $m_sr_BoxesRunTime$().c(this.eo, x$0.eo)) && $m_sr_BoxesRunTime$().c(this.ep, x$0.ep)) && $m_sr_BoxesRunTime$().c(this.eq, x$0.eq)) && $m_sr_BoxesRunTime$().c(this.er, x$0.er)) && $m_sr_BoxesRunTime$().c(this.es, x$0.es)) && $m_sr_BoxesRunTime$().c(this.et, x$0.et)) && $m_sr_BoxesRunTime$().c(this.ev, x$0.ev)) && $m_sr_BoxesRunTime$().c(this.ew, x$0.ew))));
});
$p.B = (function() {
  return "Tuple21";
});
$p.o = (function() {
  return (((((((((((((((((((((((((((((((((((((((((("(" + this.ga) + ",") + this.eu) + ",") + this.ex) + ",") + this.ey) + ",") + this.ez) + ",") + this.eA) + ",") + this.eB) + ",") + this.eC) + ",") + this.eD) + ",") + this.ek) + ",") + this.el) + ",") + this.em) + ",") + this.en) + ",") + this.eo) + ",") + this.ep) + ",") + this.eq) + ",") + this.er) + ",") + this.es) + ",") + this.et) + ",") + this.ev) + ",") + this.ew) + ")");
});
function $isArrayOf_T21(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ap)));
}
var $d_T21 = new $TypeData().i($c_T21, "scala.Tuple21", ({
  ap: 1,
  b: 1,
  c: 1,
  bZ: 1,
  a: 1
}));
/** @constructor */
function $c_T22(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22) {
  this.gb = null;
  this.eO = null;
  this.eS = null;
  this.eT = null;
  this.eU = null;
  this.eV = null;
  this.eW = null;
  this.eX = null;
  this.eY = null;
  this.eE = null;
  this.eF = null;
  this.eG = null;
  this.eH = null;
  this.eI = null;
  this.eJ = null;
  this.eK = null;
  this.eL = null;
  this.eM = null;
  this.eN = null;
  this.eP = null;
  this.eQ = null;
  this.eR = null;
  this.gb = _1;
  this.eO = _2;
  this.eS = _3;
  this.eT = _4;
  this.eU = _5;
  this.eV = _6;
  this.eW = _7;
  this.eX = _8;
  this.eY = _9;
  this.eE = _10;
  this.eF = _11;
  this.eG = _12;
  this.eH = _13;
  this.eI = _14;
  this.eJ = _15;
  this.eK = _16;
  this.eL = _17;
  this.eM = _18;
  this.eN = _19;
  this.eP = _20;
  this.eQ = _21;
  this.eR = _22;
}
$p = $c_T22.prototype = new $h_O();
$p.constructor = $c_T22;
/** @constructor */
function $h_T22() {
}
$h_T22.prototype = $p;
$p.C = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.v = (function() {
  return 22;
});
$p.n = (function(n) {
  return $f_s_Product22__productElement__I__O(this, n);
});
$p.t = (function() {
  return $m_s_util_hashing_MurmurHash3$().W(this, (-139445068), true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T22) && ((((((((((((((((((((($m_sr_BoxesRunTime$().c(this.gb, x$0.gb) && $m_sr_BoxesRunTime$().c(this.eO, x$0.eO)) && $m_sr_BoxesRunTime$().c(this.eS, x$0.eS)) && $m_sr_BoxesRunTime$().c(this.eT, x$0.eT)) && $m_sr_BoxesRunTime$().c(this.eU, x$0.eU)) && $m_sr_BoxesRunTime$().c(this.eV, x$0.eV)) && $m_sr_BoxesRunTime$().c(this.eW, x$0.eW)) && $m_sr_BoxesRunTime$().c(this.eX, x$0.eX)) && $m_sr_BoxesRunTime$().c(this.eY, x$0.eY)) && $m_sr_BoxesRunTime$().c(this.eE, x$0.eE)) && $m_sr_BoxesRunTime$().c(this.eF, x$0.eF)) && $m_sr_BoxesRunTime$().c(this.eG, x$0.eG)) && $m_sr_BoxesRunTime$().c(this.eH, x$0.eH)) && $m_sr_BoxesRunTime$().c(this.eI, x$0.eI)) && $m_sr_BoxesRunTime$().c(this.eJ, x$0.eJ)) && $m_sr_BoxesRunTime$().c(this.eK, x$0.eK)) && $m_sr_BoxesRunTime$().c(this.eL, x$0.eL)) && $m_sr_BoxesRunTime$().c(this.eM, x$0.eM)) && $m_sr_BoxesRunTime$().c(this.eN, x$0.eN)) && $m_sr_BoxesRunTime$().c(this.eP, x$0.eP)) && $m_sr_BoxesRunTime$().c(this.eQ, x$0.eQ)) && $m_sr_BoxesRunTime$().c(this.eR, x$0.eR))));
});
$p.B = (function() {
  return "Tuple22";
});
$p.o = (function() {
  return (((((((((((((((((((((((((((((((((((((((((((("(" + this.gb) + ",") + this.eO) + ",") + this.eS) + ",") + this.eT) + ",") + this.eU) + ",") + this.eV) + ",") + this.eW) + ",") + this.eX) + ",") + this.eY) + ",") + this.eE) + ",") + this.eF) + ",") + this.eG) + ",") + this.eH) + ",") + this.eI) + ",") + this.eJ) + ",") + this.eK) + ",") + this.eL) + ",") + this.eM) + ",") + this.eN) + ",") + this.eP) + ",") + this.eQ) + ",") + this.eR) + ")");
});
function $isArrayOf_T22(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aq)));
}
var $d_T22 = new $TypeData().i($c_T22, "scala.Tuple22", ({
  aq: 1,
  b: 1,
  c: 1,
  c0: 1,
  a: 1
}));
/** @constructor */
function $c_T3(_1, _2, _3) {
  this.bt = null;
  this.bf = null;
  this.bg = null;
  this.bt = _1;
  this.bf = _2;
  this.bg = _3;
}
$p = $c_T3.prototype = new $h_O();
$p.constructor = $c_T3;
/** @constructor */
function $h_T3() {
}
$h_T3.prototype = $p;
$p.C = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.v = (function() {
  return 3;
});
$p.n = (function(n) {
  return $f_s_Product3__productElement__I__O(this, n);
});
$p.t = (function() {
  return $m_s_util_hashing_MurmurHash3$().W(this, (-192629203), true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T3) && (($m_sr_BoxesRunTime$().c(this.bt, x$0.bt) && $m_sr_BoxesRunTime$().c(this.bf, x$0.bf)) && $m_sr_BoxesRunTime$().c(this.bg, x$0.bg))));
});
$p.B = (function() {
  return "Tuple3";
});
$p.o = (function() {
  return (((((("(" + this.bt) + ",") + this.bf) + ",") + this.bg) + ")");
});
function $isArrayOf_T3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ar)));
}
var $d_T3 = new $TypeData().i($c_T3, "scala.Tuple3", ({
  ar: 1,
  b: 1,
  c: 1,
  c1: 1,
  a: 1
}));
/** @constructor */
function $c_T4(_1, _2, _3, _4) {
  this.eZ = null;
  this.bu = null;
  this.bv = null;
  this.bw = null;
  this.eZ = _1;
  this.bu = _2;
  this.bv = _3;
  this.bw = _4;
}
$p = $c_T4.prototype = new $h_O();
$p.constructor = $c_T4;
/** @constructor */
function $h_T4() {
}
$h_T4.prototype = $p;
$p.C = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.v = (function() {
  return 4;
});
$p.n = (function(n) {
  return $f_s_Product4__productElement__I__O(this, n);
});
$p.t = (function() {
  return $m_s_util_hashing_MurmurHash3$().W(this, (-1542739752), true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T4) && ((($m_sr_BoxesRunTime$().c(this.eZ, x$0.eZ) && $m_sr_BoxesRunTime$().c(this.bu, x$0.bu)) && $m_sr_BoxesRunTime$().c(this.bv, x$0.bv)) && $m_sr_BoxesRunTime$().c(this.bw, x$0.bw))));
});
$p.B = (function() {
  return "Tuple4";
});
$p.o = (function() {
  return (((((((("(" + this.eZ) + ",") + this.bu) + ",") + this.bv) + ",") + this.bw) + ")");
});
function $isArrayOf_T4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.as)));
}
var $d_T4 = new $TypeData().i($c_T4, "scala.Tuple4", ({
  as: 1,
  b: 1,
  c: 1,
  c2: 1,
  a: 1
}));
/** @constructor */
function $c_T5(_1, _2, _3, _4, _5) {
  this.gc = null;
  this.f0 = null;
  this.f1 = null;
  this.f2 = null;
  this.f3 = null;
  this.gc = _1;
  this.f0 = _2;
  this.f1 = _3;
  this.f2 = _4;
  this.f3 = _5;
}
$p = $c_T5.prototype = new $h_O();
$p.constructor = $c_T5;
/** @constructor */
function $h_T5() {
}
$h_T5.prototype = $p;
$p.C = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.v = (function() {
  return 5;
});
$p.n = (function(n) {
  return $f_s_Product5__productElement__I__O(this, n);
});
$p.t = (function() {
  return $m_s_util_hashing_MurmurHash3$().W(this, 417360321, true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T5) && (((($m_sr_BoxesRunTime$().c(this.gc, x$0.gc) && $m_sr_BoxesRunTime$().c(this.f0, x$0.f0)) && $m_sr_BoxesRunTime$().c(this.f1, x$0.f1)) && $m_sr_BoxesRunTime$().c(this.f2, x$0.f2)) && $m_sr_BoxesRunTime$().c(this.f3, x$0.f3))));
});
$p.B = (function() {
  return "Tuple5";
});
$p.o = (function() {
  return (((((((((("(" + this.gc) + ",") + this.f0) + ",") + this.f1) + ",") + this.f2) + ",") + this.f3) + ")");
});
function $isArrayOf_T5(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.at)));
}
var $d_T5 = new $TypeData().i($c_T5, "scala.Tuple5", ({
  at: 1,
  b: 1,
  c: 1,
  c3: 1,
  a: 1
}));
/** @constructor */
function $c_T6(_1, _2, _3, _4, _5, _6) {
  this.gd = null;
  this.f4 = null;
  this.f5 = null;
  this.f6 = null;
  this.f7 = null;
  this.f8 = null;
  this.gd = _1;
  this.f4 = _2;
  this.f5 = _3;
  this.f6 = _4;
  this.f7 = _5;
  this.f8 = _6;
}
$p = $c_T6.prototype = new $h_O();
$p.constructor = $c_T6;
/** @constructor */
function $h_T6() {
}
$h_T6.prototype = $p;
$p.C = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.v = (function() {
  return 6;
});
$p.n = (function(n) {
  return $f_s_Product6__productElement__I__O(this, n);
});
$p.t = (function() {
  return $m_s_util_hashing_MurmurHash3$().W(this, (-1037607828), true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T6) && ((((($m_sr_BoxesRunTime$().c(this.gd, x$0.gd) && $m_sr_BoxesRunTime$().c(this.f4, x$0.f4)) && $m_sr_BoxesRunTime$().c(this.f5, x$0.f5)) && $m_sr_BoxesRunTime$().c(this.f6, x$0.f6)) && $m_sr_BoxesRunTime$().c(this.f7, x$0.f7)) && $m_sr_BoxesRunTime$().c(this.f8, x$0.f8))));
});
$p.B = (function() {
  return "Tuple6";
});
$p.o = (function() {
  return (((((((((((("(" + this.gd) + ",") + this.f4) + ",") + this.f5) + ",") + this.f6) + ",") + this.f7) + ",") + this.f8) + ")");
});
function $isArrayOf_T6(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.au)));
}
var $d_T6 = new $TypeData().i($c_T6, "scala.Tuple6", ({
  au: 1,
  b: 1,
  c: 1,
  c4: 1,
  a: 1
}));
/** @constructor */
function $c_T7(_1, _2, _3, _4, _5, _6, _7) {
  this.ge = null;
  this.f9 = null;
  this.fa = null;
  this.fb = null;
  this.fc = null;
  this.fd = null;
  this.fe = null;
  this.ge = _1;
  this.f9 = _2;
  this.fa = _3;
  this.fb = _4;
  this.fc = _5;
  this.fd = _6;
  this.fe = _7;
}
$p = $c_T7.prototype = new $h_O();
$p.constructor = $c_T7;
/** @constructor */
function $h_T7() {
}
$h_T7.prototype = $p;
$p.C = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.v = (function() {
  return 7;
});
$p.n = (function(n) {
  return $f_s_Product7__productElement__I__O(this, n);
});
$p.t = (function() {
  return $m_s_util_hashing_MurmurHash3$().W(this, (-1050932777), true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T7) && (((((($m_sr_BoxesRunTime$().c(this.ge, x$0.ge) && $m_sr_BoxesRunTime$().c(this.f9, x$0.f9)) && $m_sr_BoxesRunTime$().c(this.fa, x$0.fa)) && $m_sr_BoxesRunTime$().c(this.fb, x$0.fb)) && $m_sr_BoxesRunTime$().c(this.fc, x$0.fc)) && $m_sr_BoxesRunTime$().c(this.fd, x$0.fd)) && $m_sr_BoxesRunTime$().c(this.fe, x$0.fe))));
});
$p.B = (function() {
  return "Tuple7";
});
$p.o = (function() {
  return (((((((((((((("(" + this.ge) + ",") + this.f9) + ",") + this.fa) + ",") + this.fb) + ",") + this.fc) + ",") + this.fd) + ",") + this.fe) + ")");
});
function $isArrayOf_T7(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.av)));
}
var $d_T7 = new $TypeData().i($c_T7, "scala.Tuple7", ({
  av: 1,
  b: 1,
  c: 1,
  c5: 1,
  a: 1
}));
/** @constructor */
function $c_T8(_1, _2, _3, _4, _5, _6, _7, _8) {
  this.gf = null;
  this.ff = null;
  this.fg = null;
  this.fh = null;
  this.fi = null;
  this.fj = null;
  this.fk = null;
  this.fl = null;
  this.gf = _1;
  this.ff = _2;
  this.fg = _3;
  this.fh = _4;
  this.fi = _5;
  this.fj = _6;
  this.fk = _7;
  this.fl = _8;
}
$p = $c_T8.prototype = new $h_O();
$p.constructor = $c_T8;
/** @constructor */
function $h_T8() {
}
$h_T8.prototype = $p;
$p.C = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.v = (function() {
  return 8;
});
$p.n = (function(n) {
  return $f_s_Product8__productElement__I__O(this, n);
});
$p.t = (function() {
  return $m_s_util_hashing_MurmurHash3$().W(this, 1998822530, true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T8) && ((((((($m_sr_BoxesRunTime$().c(this.gf, x$0.gf) && $m_sr_BoxesRunTime$().c(this.ff, x$0.ff)) && $m_sr_BoxesRunTime$().c(this.fg, x$0.fg)) && $m_sr_BoxesRunTime$().c(this.fh, x$0.fh)) && $m_sr_BoxesRunTime$().c(this.fi, x$0.fi)) && $m_sr_BoxesRunTime$().c(this.fj, x$0.fj)) && $m_sr_BoxesRunTime$().c(this.fk, x$0.fk)) && $m_sr_BoxesRunTime$().c(this.fl, x$0.fl))));
});
$p.B = (function() {
  return "Tuple8";
});
$p.o = (function() {
  return (((((((((((((((("(" + this.gf) + ",") + this.ff) + ",") + this.fg) + ",") + this.fh) + ",") + this.fi) + ",") + this.fj) + ",") + this.fk) + ",") + this.fl) + ")");
});
function $isArrayOf_T8(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aw)));
}
var $d_T8 = new $TypeData().i($c_T8, "scala.Tuple8", ({
  aw: 1,
  b: 1,
  c: 1,
  c6: 1,
  a: 1
}));
/** @constructor */
function $c_T9(_1, _2, _3, _4, _5, _6, _7, _8, _9) {
  this.gg = null;
  this.fm = null;
  this.fn = null;
  this.fo = null;
  this.fp = null;
  this.fq = null;
  this.fr = null;
  this.fs = null;
  this.ft = null;
  this.gg = _1;
  this.fm = _2;
  this.fn = _3;
  this.fo = _4;
  this.fp = _5;
  this.fq = _6;
  this.fr = _7;
  this.fs = _8;
  this.ft = _9;
}
$p = $c_T9.prototype = new $h_O();
$p.constructor = $c_T9;
/** @constructor */
function $h_T9() {
}
$h_T9.prototype = $p;
$p.C = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.v = (function() {
  return 9;
});
$p.n = (function(n) {
  return $f_s_Product9__productElement__I__O(this, n);
});
$p.t = (function() {
  return $m_s_util_hashing_MurmurHash3$().W(this, (-1807911176), true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T9) && (((((((($m_sr_BoxesRunTime$().c(this.gg, x$0.gg) && $m_sr_BoxesRunTime$().c(this.fm, x$0.fm)) && $m_sr_BoxesRunTime$().c(this.fn, x$0.fn)) && $m_sr_BoxesRunTime$().c(this.fo, x$0.fo)) && $m_sr_BoxesRunTime$().c(this.fp, x$0.fp)) && $m_sr_BoxesRunTime$().c(this.fq, x$0.fq)) && $m_sr_BoxesRunTime$().c(this.fr, x$0.fr)) && $m_sr_BoxesRunTime$().c(this.fs, x$0.fs)) && $m_sr_BoxesRunTime$().c(this.ft, x$0.ft))));
});
$p.B = (function() {
  return "Tuple9";
});
$p.o = (function() {
  return (((((((((((((((((("(" + this.gg) + ",") + this.fm) + ",") + this.fn) + ",") + this.fo) + ",") + this.fp) + ",") + this.fq) + ",") + this.fr) + ",") + this.fs) + ",") + this.ft) + ")");
});
function $isArrayOf_T9(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ax)));
}
var $d_T9 = new $TypeData().i($c_T9, "scala.Tuple9", ({
  ax: 1,
  b: 1,
  c: 1,
  c7: 1,
  a: 1
}));
function $f_sc_Iterable__toString__T($thiz) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, ($thiz.fU() + "("), ", ", ")");
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
$p.pJ = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator");
});
$p.aj = (function() {
  return 0;
});
$p.N = (function() {
  this.pJ();
});
$p.iS = (function(from, until) {
  return this;
});
var $d_sc_Iterator$$anon$19 = new $TypeData().i($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  ch: 1,
  m: 1,
  d: 1,
  e: 1,
  r: 1
}));
function $p_sc_Iterator$ConcatIterator__merge$1__V($thiz) {
  while (true) {
    if (($thiz.aE instanceof $c_sc_Iterator$ConcatIterator)) {
      var c = $thiz.aE;
      $thiz.aE = c.aE;
      $thiz.by = c.by;
      if ((c.aO !== null)) {
        if (($thiz.aN === null)) {
          $thiz.aN = c.aN;
        }
        var x$proxy10 = c.aN;
        if ((x$proxy10 === null)) {
          $m_sr_Scala3RunTime$().iQ();
        }
        x$proxy10.gW = $thiz.aO;
        $thiz.aO = c.aO;
      }
    } else {
      return (void 0);
    }
  }
}
function $p_sc_Iterator$ConcatIterator__advance$1__Z($thiz) {
  while (true) {
    if (($thiz.aO === null)) {
      $thiz.aE = null;
      $thiz.aN = null;
      return false;
    } else {
      $thiz.aE = $thiz.aO.oS();
      if (($thiz.aN === $thiz.aO)) {
        var x$proxy12 = $thiz.aN;
        if ((x$proxy12 === null)) {
          $m_sr_Scala3RunTime$().iQ();
        }
        $thiz.aN = x$proxy12.gW;
      }
      $thiz.aO = $thiz.aO.gW;
      $p_sc_Iterator$ConcatIterator__merge$1__V($thiz);
      if ($thiz.by) {
        return true;
      } else {
        if ((!(($thiz.aE !== null) && $thiz.aE.U()))) {
          continue;
        }
        $thiz.by = true;
        return true;
      }
    }
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIterator(from) {
  this.aE = null;
  this.aO = null;
  this.aN = null;
  this.by = false;
  this.aE = from;
  this.aO = null;
  this.aN = null;
  this.by = false;
}
$p = $c_sc_Iterator$ConcatIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$ConcatIterator;
/** @constructor */
function $h_sc_Iterator$ConcatIterator() {
}
$h_sc_Iterator$ConcatIterator.prototype = $p;
$p.U = (function() {
  if (this.by) {
    return true;
  } else if ((this.aE !== null)) {
    if (this.aE.U()) {
      this.by = true;
      return true;
    } else {
      return $p_sc_Iterator$ConcatIterator__advance$1__Z(this);
    }
  } else {
    return false;
  }
});
$p.N = (function() {
  if (this.U()) {
    this.by = false;
    var x$proxy13 = this.aE;
    if ((x$proxy13 === null)) {
      $m_sr_Scala3RunTime$().iQ();
    }
    return x$proxy13.N();
  } else {
    return $m_sc_Iterator$().b4.N();
  }
});
$p.ok = (function(that) {
  var c = new $c_sc_Iterator$ConcatIteratorCell(that, null);
  if ((this.aO === null)) {
    this.aO = c;
    this.aN = c;
  } else {
    var x$proxy14 = this.aN;
    if ((x$proxy14 === null)) {
      $m_sr_Scala3RunTime$().iQ();
    }
    x$proxy14.gW = c;
    this.aN = c;
  }
  if ((this.aE === null)) {
    this.aE = $m_sc_Iterator$().b4;
  }
  return this;
});
function $isArrayOf_sc_Iterator$ConcatIterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aC)));
}
var $d_sc_Iterator$ConcatIterator = new $TypeData().i($c_sc_Iterator$ConcatIterator, "scala.collection.Iterator$ConcatIterator", ({
  aC: 1,
  m: 1,
  d: 1,
  e: 1,
  r: 1
}));
function $p_sc_Iterator$SliceIterator__skip__V($thiz) {
  while (($thiz.bi > 0)) {
    if ($thiz.bz.U()) {
      $thiz.bz.N();
      $thiz.bi = (($thiz.bi - 1) | 0);
    } else {
      $thiz.bi = 0;
    }
  }
}
function $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I($thiz, lo$1) {
  if (($thiz.aG < 0)) {
    return (-1);
  } else {
    var that = (($thiz.aG - lo$1) | 0);
    return ((that < 0) ? 0 : that);
  }
}
/** @constructor */
function $c_sc_Iterator$SliceIterator(underlying, start, limit) {
  this.bz = null;
  this.aG = 0;
  this.bi = 0;
  this.bz = underlying;
  this.aG = limit;
  this.bi = start;
}
$p = $c_sc_Iterator$SliceIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$SliceIterator;
/** @constructor */
function $h_sc_Iterator$SliceIterator() {
}
$h_sc_Iterator$SliceIterator.prototype = $p;
$p.aj = (function() {
  var size = this.bz.aj();
  if ((size < 0)) {
    return (-1);
  } else {
    var that = ((size - this.bi) | 0);
    var dropSize = ((that < 0) ? 0 : that);
    if ((this.aG < 0)) {
      return dropSize;
    } else {
      var x = this.aG;
      return ((x < dropSize) ? x : dropSize);
    }
  }
});
$p.U = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  return ((this.aG !== 0) && this.bz.U());
});
$p.N = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  if ((this.aG > 0)) {
    this.aG = ((this.aG - 1) | 0);
    return this.bz.N();
  } else {
    return ((this.aG < 0) ? this.bz.N() : $m_sc_Iterator$().b4.N());
  }
});
$p.iS = (function(from, until) {
  var lo = ((from > 0) ? from : 0);
  if ((until < 0)) {
    var rest = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
  } else if ((until <= lo)) {
    var rest = 0;
  } else if ((this.aG < 0)) {
    var rest = ((until - lo) | 0);
  } else {
    var x = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
    var that = ((until - lo) | 0);
    var rest = ((x < that) ? x : that);
  }
  var sum = ((this.bi + lo) | 0);
  if ((rest === 0)) {
    return $m_sc_Iterator$().b4;
  } else if ((sum < 0)) {
    this.bi = 2147483647;
    this.aG = 0;
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => new $c_sc_Iterator$SliceIterator(this.bz, ((sum - 2147483647) | 0), rest))));
  } else {
    this.bi = sum;
    this.aG = rest;
    return this;
  }
});
var $d_sc_Iterator$SliceIterator = new $TypeData().i($c_sc_Iterator$SliceIterator, "scala.collection.Iterator$SliceIterator", ({
  cj: 1,
  m: 1,
  d: 1,
  e: 1,
  r: 1
}));
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw new $c_jl_IndexOutOfBoundsException(("" + n));
  }
  var skipped = $thiz.ox(n);
  if (skipped.ac()) {
    throw new $c_jl_IndexOutOfBoundsException(("" + n));
  }
  return skipped.kb();
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
      if ((((!a$tailLocal1.ac()) && (!b$tailLocal1.ac())) && $m_sr_BoxesRunTime$().c(a$tailLocal1.kb(), b$tailLocal1.kb()))) {
        var a$tailLocal1$tmp1 = a$tailLocal1.ki();
        var b$tailLocal1$tmp1 = b$tailLocal1.ki();
        a$tailLocal1 = a$tailLocal1$tmp1;
        b$tailLocal1 = b$tailLocal1$tmp1;
        continue;
      }
      return (a$tailLocal1.ac() && b$tailLocal1.ac());
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
  cy: 1,
  a: 1,
  aB: 1,
  cl: 1,
  cp: 1
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
  this.kQ = null;
  this.gY = 0;
  this.kP = 0;
  this.kQ = x$1;
  this.gY = 0;
  this.kP = x$1.v();
}
$p = $c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $p;
$p.U = (function() {
  return (this.gY < this.kP);
});
$p.N = (function() {
  var result = this.kQ.n(this.gY);
  this.gY = ((1 + this.gY) | 0);
  return result;
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().i($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
  db: 1,
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a9)));
}
var $d_jl_Double = new $TypeData().i(0, "java.lang.Double", ({
  a9: 1,
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
  bf: 1,
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
  bh: 1,
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
  return $m_RTLong$().ny($thiz, $thizhi);
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ab)));
}
var $d_jl_Long = new $TypeData().i(0, "java.lang.Long", ({
  ab: 1,
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
  bm: 1,
  aa: 1,
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
  var str = $m_jl_Character$().qn(ch);
  return ($thiz.indexOf(str) | 0);
}
function $f_T__toString__T($thiz) {
  return $thiz;
}
var $d_T = new $TypeData().i(0, "java.lang.String", ({
  bp: 1,
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
$p.bp = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.k6 = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.fU = (function() {
  return this.bO();
});
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator(xs) {
  this.i3 = null;
  this.bh = 0;
  this.gV = 0;
  this.i3 = xs;
  this.bh = 0;
  this.gV = $m_jl_reflect_Array$().hB(this.i3);
}
$p = $c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
}
$h_sc_ArrayOps$ArrayIterator.prototype = $p;
$p.aj = (function() {
  return ((this.gV - this.bh) | 0);
});
$p.U = (function() {
  return (this.bh < this.gV);
});
$p.N = (function() {
  if ((this.bh >= $m_jl_reflect_Array$().hB(this.i3))) {
    $m_sc_Iterator$().b4.N();
  }
  var r = $m_sr_ScalaRunTime$().gM(this.i3, this.bh);
  this.bh = ((1 + this.bh) | 0);
  return r;
});
$p.hz = (function(n) {
  if ((n > 0)) {
    var newPos = ((this.bh + n) | 0);
    if ((newPos < 0)) {
      var $x_1 = this.gV;
    } else {
      var a = this.gV;
      var $x_1 = ((a < newPos) ? a : newPos);
    }
    this.bh = $x_1;
  }
  return this;
});
var $d_sc_ArrayOps$ArrayIterator = new $TypeData().i($c_sc_ArrayOps$ArrayIterator, "scala.collection.ArrayOps$ArrayIterator", ({
  cb: 1,
  m: 1,
  d: 1,
  e: 1,
  r: 1,
  a: 1
}));
function $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I($thiz, value) {
  return ((value < 0) ? 0 : ((value > $thiz.aS) ? $thiz.aS : value));
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator(self) {
  this.kC = null;
  this.bx = 0;
  this.aS = 0;
  this.kC = self;
  this.bx = 0;
  this.aS = self.F();
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $p;
$p.aj = (function() {
  return this.aS;
});
$p.U = (function() {
  return (this.aS > 0);
});
$p.N = (function() {
  if ((this.aS > 0)) {
    var r = this.kC.ab(this.bx);
    this.bx = ((1 + this.bx) | 0);
    this.aS = ((this.aS - 1) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().b4.N();
  }
});
$p.hz = (function(n) {
  if ((n > 0)) {
    this.bx = ((this.bx + n) | 0);
    var b = ((this.aS - n) | 0);
    this.aS = ((b < 0) ? 0 : b);
  }
  return this;
});
$p.iS = (function(from, until) {
  var formatFrom = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, from);
  var formatUntil = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, until);
  var b = ((formatUntil - formatFrom) | 0);
  this.aS = ((b < 0) ? 0 : b);
  this.bx = ((this.bx + formatFrom) | 0);
  return this;
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
  cf: 1,
  m: 1,
  d: 1,
  e: 1,
  r: 1,
  a: 1
}));
function $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($thiz) {
  if ((!$thiz.kG)) {
    $thiz.kF = new $c_sci_ArraySeq$ofRef(new ($d_sr_Nothing$.r().C)(0));
    $thiz.kG = true;
  }
  return $thiz.kF;
}
/** @constructor */
function $c_sci_ArraySeq$() {
  this.kF = null;
  this.kG = false;
}
$p = $c_sci_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_sci_ArraySeq$;
/** @constructor */
function $h_sci_ArraySeq$() {
}
$h_sci_ArraySeq$.prototype = $p;
var $d_sci_ArraySeq$ = new $TypeData().i($c_sci_ArraySeq$, "scala.collection.immutable.ArraySeq$", ({
  cu: 1,
  a: 1,
  aA: 1,
  ay: 1,
  az: 1,
  aD: 1
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
  this.gi = 0;
  this.fx = 0;
  this.fv = false;
  this.fw = 0;
  this.gi = step;
  this.fx = lastElement;
  this.fv = (!initiallyEmpty);
  this.fw = start;
}
$p = $c_sci_RangeIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_RangeIterator;
/** @constructor */
function $h_sci_RangeIterator() {
}
$h_sci_RangeIterator.prototype = $p;
$p.aj = (function() {
  return (this.fv ? ((1 + ((((this.fx - this.fw) | 0) / $checkIntDivisor(this.gi)) | 0)) | 0) : 0);
});
$p.U = (function() {
  return this.fv;
});
$p.pK = (function() {
  if ((!this.fv)) {
    $m_sc_Iterator$().b4.N();
  }
  var value = this.fw;
  this.fv = (value !== this.fx);
  this.fw = ((value + this.gi) | 0);
  return value;
});
$p.hz = (function(n) {
  if ((n > 0)) {
    var value = this.fw;
    var hi = (value >> 31);
    var value$1 = Math.imul(this.gi, n);
    var hi$1 = (value$1 >> 31);
    var lo = ((value + value$1) | 0);
    var hi$2 = ((((hi + hi$1) | 0) + ((((value & value$1) | ((value | value$1) & (~lo))) >>> 31) | 0)) | 0);
    if ((this.gi > 0)) {
      var x = this.fx;
      var hi$3 = (x >> 31);
      if (((hi$3 === hi$2) ? ((x >>> 0) < (lo >>> 0)) : (hi$3 < hi$2))) {
        var $x_1_$_lo = x;
        var $x_1_$_hi = hi$3;
      } else {
        var $x_1_$_lo = lo;
        var $x_1_$_hi = hi$2;
      }
      this.fw = $x_1_$_lo;
      var value$2 = this.fx;
      var hi$4 = (value$2 >> 31);
      this.fv = ((hi$2 === hi$4) ? ((lo >>> 0) <= (value$2 >>> 0)) : (hi$2 < hi$4));
    } else if ((this.gi < 0)) {
      var x$2 = this.fx;
      var hi$5 = (x$2 >> 31);
      if (((hi$5 === hi$2) ? ((x$2 >>> 0) > (lo >>> 0)) : (hi$5 > hi$2))) {
        var $x_2_$_lo = x$2;
        var $x_2_$_hi = hi$5;
      } else {
        var $x_2_$_lo = lo;
        var $x_2_$_hi = hi$2;
      }
      this.fw = $x_2_$_lo;
      var value$3 = this.fx;
      var hi$6 = (value$3 >> 31);
      this.fv = ((hi$2 === hi$6) ? ((lo >>> 0) >= (value$3 >>> 0)) : (hi$2 > hi$6));
    }
  }
  return this;
});
$p.N = (function() {
  return this.pK();
});
var $d_sci_RangeIterator = new $TypeData().i($c_sci_RangeIterator, "scala.collection.immutable.RangeIterator", ({
  cC: 1,
  m: 1,
  d: 1,
  e: 1,
  r: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$() {
  this.kI = null;
  $n_scm_ArraySeq$ = this;
  this.kI = new $c_scm_ArraySeq$ofRef(new $ac_O(0));
}
$p = $c_scm_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_scm_ArraySeq$;
/** @constructor */
function $h_scm_ArraySeq$() {
}
$h_scm_ArraySeq$.prototype = $p;
var $d_scm_ArraySeq$ = new $TypeData().i($c_scm_ArraySeq$, "scala.collection.mutable.ArraySeq$", ({
  cE: 1,
  a: 1,
  aA: 1,
  ay: 1,
  az: 1,
  aD: 1
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
$p.C = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.t = (function() {
  return 924202651;
});
$p.v = (function() {
  return 0;
});
$p.B = (function() {
  return "EmptyTuple";
});
$p.n = (function(n) {
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
$p.o = (function() {
  return "()";
});
var $d_T$package$EmptyTuple$ = new $TypeData().i($c_T$package$EmptyTuple$, "scala.Tuple$package$EmptyTuple$", ({
  c8: 1,
  b: 1,
  c: 1,
  a: 1,
  aM: 1,
  aN: 1,
  cK: 1
}));
var $n_T$package$EmptyTuple$;
function $m_T$package$EmptyTuple$() {
  if ((!$n_T$package$EmptyTuple$)) {
    $n_T$package$EmptyTuple$ = new $c_T$package$EmptyTuple$();
  }
  return $n_T$package$EmptyTuple$;
}
function $f_sc_View__toString__T($thiz) {
  return ($thiz.bO() + "(<not computed>)");
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
  iK() {
    return $dp_toString__T(this.aF);
  }
  B() {
    return "JavaScriptException";
  }
  v() {
    return 1;
  }
  n(x$1) {
    return ((x$1 === 0) ? this.aF : $m_sr_Statics$().oY(x$1));
  }
  C() {
    return new $c_sr_ScalaRunTime$$anon$1(this);
  }
  t() {
    return $m_s_util_hashing_MurmurHash3$().W(this, 1744042595, true);
  }
  r(x$1) {
    return ((this === x$1) || ((x$1 instanceof $c_sjs_js_JavaScriptException) && $m_sr_BoxesRunTime$().c(this.aF, x$1.aF)));
  }
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aQ)));
}
var $d_sjs_js_JavaScriptException = new $TypeData().i($c_sjs_js_JavaScriptException, "scala.scalajs.js.JavaScriptException", ({
  aQ: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1,
  c: 1,
  b: 1
}));
function $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V($thiz, line) {
  if (((typeof console) !== "undefined")) {
    if (($thiz.ks && (!(!(!(!console.error)))))) {
      console.error(line);
    } else {
      console.log(line);
    }
  }
}
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream(isErr) {
  this.ks = false;
  this.gT = null;
  this.ks = isErr;
  $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__(this, new $c_jl_JSConsoleBasedPrintStream$DummyOutputStream(), false, null);
  this.gT = "";
}
$p = $c_jl_JSConsoleBasedPrintStream.prototype = new $h_Ljava_io_PrintStream();
$p.constructor = $c_jl_JSConsoleBasedPrintStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream() {
}
$h_jl_JSConsoleBasedPrintStream.prototype = $p;
$p.p1 = (function(s) {
  var rest = s;
  while ((rest !== "")) {
    var this$1 = rest;
    var nlPos = (this$1.indexOf("\n") | 0);
    if ((nlPos < 0)) {
      this.gT = (("" + this.gT) + rest);
      rest = "";
    } else {
      var $x_1 = this.gT;
      var this$2 = rest;
      $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V(this, (("" + $x_1) + this$2.substring(0, nlPos)));
      this.gT = "";
      var this$3 = rest;
      var beginIndex = ((1 + nlPos) | 0);
      rest = this$3.substring(beginIndex);
    }
  }
});
var $d_jl_JSConsoleBasedPrintStream = new $TypeData().i($c_jl_JSConsoleBasedPrintStream, "java.lang.JSConsoleBasedPrintStream", ({
  bj: 1,
  b7: 1,
  b6: 1,
  a5: 1,
  a3: 1,
  a7: 1,
  a4: 1,
  a6: 1
}));
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  var s$tailLocal1 = s;
  var n$tailLocal1 = n;
  while (true) {
    if (((n$tailLocal1 <= 0) || s$tailLocal1.ac())) {
      return s$tailLocal1;
    } else {
      var n$tailLocal1$tmp1 = ((n$tailLocal1 - 1) | 0);
      var s$tailLocal1$tmp1 = s$tailLocal1.ki();
      n$tailLocal1 = n$tailLocal1$tmp1;
      s$tailLocal1 = s$tailLocal1$tmp1;
    }
  }
}
/** @constructor */
function $c_s_reflect_ManifestFactory$PhantomManifest() {
  this.iY = null;
}
$p = $c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$p.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
}
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $p;
$p.o = (function() {
  return this.iY;
});
$p.r = (function(that) {
  return (this === that);
});
$p.t = (function() {
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
  this.iY = null;
  this.iY = "Object";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$ObjectManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ObjectManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ObjectManifest$() {
}
$h_s_reflect_ManifestFactory$ObjectManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ObjectManifest$, "scala.reflect.ManifestFactory$ObjectManifest$", ({
  cR: 1,
  cS: 1,
  cQ: 1,
  a: 1,
  cT: 1,
  cN: 1,
  b: 1,
  cO: 1,
  cP: 1
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
$p.ac = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.hT = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.iJ = (function(that) {
  return true;
});
$p.r = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.t = (function() {
  return $m_s_util_hashing_MurmurHash3$().kf(this);
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
  return (!(!((obj && obj.$classData) && obj.$classData.n.N)));
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.N)));
}
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.gX = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.gX = null;
}
$p = $c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $p;
$p.ab = (function(idx) {
  return this.gX.ab(idx);
});
$p.F = (function() {
  return this.gX.F();
});
$p.ac = (function() {
  return this.gX.ac();
});
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.gX = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$p.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
}
$h_sc_IndexedSeqView$Id.prototype = $p;
$p.bN = (function(len) {
  var x = this.F();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.aj = (function() {
  return this.F();
});
$p.ad = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this);
});
$p.bO = (function() {
  return "IndexedSeqView";
});
var $d_sc_IndexedSeqView$Id = new $TypeData().i($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  ce: 1,
  cn: 1,
  c9: 1,
  ca: 1,
  w: 1,
  d: 1,
  e: 1,
  q: 1,
  p: 1,
  o: 1,
  a: 1,
  cr: 1,
  s: 1,
  cm: 1,
  x: 1,
  cd: 1
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
  return ($is_sci_IndexedSeq(that) ? ($thiz.F() === that.F()) : true);
}
function $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z($thiz, o) {
  if ($is_sci_IndexedSeq(o)) {
    if (($thiz === o)) {
      return true;
    } else {
      var length = $thiz.F();
      var equal = (length === o.F());
      if (equal) {
        var index = 0;
        var a = $thiz.iI();
        var b = o.iI();
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
          equal = $m_sr_BoxesRunTime$().c($thiz.ab(index), o.ab(index));
          index = ((1 + index) | 0);
        }
        if (((index < length) && equal)) {
          var thisIt = $thiz.ad().hz(index);
          var thatIt = o.ad().hz(index);
          while ((equal && thisIt.U())) {
            equal = $m_sr_BoxesRunTime$().c(thisIt.N(), thatIt.N());
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
  this.i4 = null;
  this.i4 = array;
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
$p.hT = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.iI = (function() {
  return $m_sci_IndexedSeqDefaults$().kH;
});
$p.ad = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.bN = (function(len) {
  var x = this.F();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.aj = (function() {
  return this.F();
});
$p.r = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.t = (function() {
  return $m_s_util_hashing_MurmurHash3$().kf(this);
});
$p.o = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.ac = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.bp = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.k6 = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.F = (function() {
  return (this.i4.length | 0);
});
$p.ab = (function(idx) {
  return this.i4[idx];
});
$p.fU = (function() {
  return "WrappedVarArgs";
});
$p.h = (function(v1) {
  return this.ab((v1 | 0));
});
function $isArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aR)));
}
var $d_sjsr_WrappedVarArgs = new $TypeData().i($c_sjsr_WrappedVarArgs, "scala.scalajs.runtime.WrappedVarArgs", ({
  aR: 1,
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
  return ((($thiz.fu + $thiz.ap) | 0) !== $thiz.gh);
}
function $ct_sci_Range__I__I__I__($thiz, start, end, step) {
  $thiz.ak = start;
  $thiz.gh = end;
  $thiz.ap = step;
  $thiz.ay = ((step >= 0) ? (start >= end) : (start <= end));
  if ((step === 0)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "step cannot be 0.");
  }
  var stepSign = (step >> 31);
  var gap = (((((end - start) | 0) ^ stepSign) - stepSign) | 0);
  var absStep = (((step ^ stepSign) - stepSign) | 0);
  var div = (((gap >>> 0) / ($checkIntDivisor(absStep) >>> 0)) | 0);
  $thiz.bA = ((Math.imul(absStep, div) !== gap) ? ((1 + div) | 0) : div);
  if ((((-3) & ((1 + step) | 0)) === 0)) {
    var $x_1 = ((end - step) | 0);
  } else {
    var n = (($thiz.bA - 1) | 0);
    var $x_1 = (($thiz.ak + Math.imul($thiz.ap, n)) | 0);
  }
  $thiz.fu = $x_1;
  return $thiz;
}
/** @constructor */
function $c_sci_Range() {
  this.ak = 0;
  this.gh = 0;
  this.ap = 0;
  this.ay = false;
  this.bA = 0;
  this.fu = 0;
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
$p.bO = (function() {
  return "IndexedSeq";
});
$p.bN = (function(len) {
  var x = this.F();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.aj = (function() {
  return this.F();
});
$p.ad = (function() {
  return new $c_sci_RangeIterator(this.ak, this.ap, this.fu, this.ay);
});
$p.ac = (function() {
  return this.ay;
});
$p.F = (function() {
  return (this.ay ? 0 : ((this.bA > 0) ? this.bA : $m_sci_Range$().nw(this.ak, this.gh, this.ap, false)));
});
$p.n8 = (function() {
  if (this.ay) {
    var $x_1 = $m_sci_Range$().q6("last");
    throw (($x_1 instanceof $c_sjs_js_JavaScriptException) ? $x_1.aF : $x_1);
  } else {
    return this.fu;
  }
});
$p.q7 = (function() {
  if (((this.bA <= 0) && (!this.ay))) {
    $m_sci_Range$().nw(this.ak, this.gh, this.ap, false);
  }
});
$p.bp = (function(f) {
  if ((!this.ay)) {
    var i = this.ak;
    while (true) {
      f.h(i);
      if ((i === this.fu)) {
        return (void 0);
      }
      i = ((i + this.ap) | 0);
    }
  }
});
$p.hT = (function(that) {
  if ((that instanceof $c_sci_Range)) {
    var x1$2 = this.F();
    switch (x1$2) {
      case 0: {
        return that.ay;
        break;
      }
      case 1: {
        return ((that.F() === 1) && (this.ak === that.ak));
        break;
      }
      default: {
        return ((that.F() === x1$2) && ((this.ak === that.ak) && (this.ap === that.ap)));
      }
    }
  } else {
    return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, that);
  }
});
$p.iI = (function() {
  return 2147483647;
});
$p.r = (function(other) {
  if ((other instanceof $c_sci_Range)) {
    if (this.ay) {
      return other.ay;
    } else if (((!other.ay) && (this.ak === other.ak))) {
      var l0 = this.n8();
      return ((l0 === other.n8()) && ((this.ak === l0) || (this.ap === other.ap)));
    } else {
      return false;
    }
  } else {
    return $f_sc_Seq__equals__O__Z(this, other);
  }
});
$p.t = (function() {
  if ((this.F() >= 2)) {
    var this$1 = $m_s_util_hashing_MurmurHash3$();
    return this$1.nt(this.ak, this.ap, this.fu, this$1.fy);
  } else {
    return $m_s_util_hashing_MurmurHash3$().kf(this);
  }
});
$p.o = (function() {
  var stepped = ((this.ap === 1) ? "" : (" by " + this.ap));
  return ((((((this.ay ? "empty " : ($p_sci_Range__isInexact$1__Z(this) ? "inexact " : "")) + "Range ") + this.ak) + " until ") + this.gh) + stepped);
});
$p.fU = (function() {
  return "Range";
});
$p.mR = (function(idx) {
  if ((((idx < 0) || (idx >= this.bA)) || this.ay)) {
    this.q7();
    var max = (this.ay ? (-1) : ((this.bA - 1) | 0));
    throw new $c_jl_IndexOutOfBoundsException((((idx + " is out of bounds (min 0, max ") + max) + ")"));
  } else {
    return ((this.ak + Math.imul(this.ap, idx)) | 0);
  }
});
$p.h = (function(v1) {
  return this.mR((v1 | 0));
});
$p.ab = (function(i) {
  return this.mR(i);
});
function $isArrayOf_sci_Range(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aG)));
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
$p.bN = (function(len) {
  var x = this.bj.b.length;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.aj = (function() {
  return this.bj.b.length;
});
$p.bO = (function() {
  return "IndexedSeq";
});
$p.iJ = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.hT = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.fU = (function() {
  return "ArraySeq";
});
$p.iI = (function() {
  return 2147483647;
});
/** @constructor */
function $c_sci_Range$Exclusive(start, end, step) {
  this.ak = 0;
  this.gh = 0;
  this.ap = 0;
  this.ay = false;
  this.bA = 0;
  this.fu = 0;
  $ct_sci_Range__I__I__I__(this, start, end, step);
}
$p = $c_sci_Range$Exclusive.prototype = new $h_sci_Range();
$p.constructor = $c_sci_Range$Exclusive;
/** @constructor */
function $h_sci_Range$Exclusive() {
}
$h_sci_Range$Exclusive.prototype = $p;
var $d_sci_Range$Exclusive = new $TypeData().i($c_sci_Range$Exclusive, "scala.collection.immutable.Range$Exclusive", ({
  cB: 1,
  aG: 1,
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
$p.bN = (function(len) {
  var x = this.aT.b.length;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.aj = (function() {
  return this.aT.b.length;
});
$p.bO = (function() {
  return "IndexedSeq";
});
$p.fU = (function() {
  return "ArraySeq";
});
$p.r = (function(other) {
  if ((other instanceof $c_scm_ArraySeq)) {
    if ((this.aT.b.length !== other.aT.b.length)) {
      return false;
    }
  }
  return $f_sc_Seq__equals__O__Z(this, other);
});
function $isArrayOf_scm_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aH)));
}
/** @constructor */
function $c_sci_ArraySeq$ofRef(unsafeArray) {
  this.bj = null;
  this.bj = unsafeArray;
}
$p = $c_sci_ArraySeq$ofRef.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofRef;
/** @constructor */
function $h_sci_ArraySeq$ofRef() {
}
$h_sci_ArraySeq$ofRef.prototype = $p;
$p.F = (function() {
  return this.bj.b.length;
});
$p.ab = (function(i) {
  return this.bj.b[i];
});
$p.t = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.mS(this.bj, this$1.fy);
});
$p.r = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofRef) ? $m_s_Array$().n0(this.bj, that.bj) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.ad = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.bj);
});
$p.h = (function(v1) {
  return this.ab((v1 | 0));
});
function $isArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aE)));
}
var $d_sci_ArraySeq$ofRef = new $TypeData().i($c_sci_ArraySeq$ofRef, "scala.collection.immutable.ArraySeq$ofRef", ({
  aE: 1,
  ct: 1,
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
  cc: 1,
  a: 1
}));
function $p_sci_List__loop$2__I__I__sci_List__I($thiz, len$1, i, xs) {
  var xs$tailLocal1 = xs;
  var i$tailLocal1 = i;
  while (true) {
    return ((i$tailLocal1 === len$1) ? (xs$tailLocal1.ac() ? 0 : 1) : (xs$tailLocal1.ac() ? (-1) : xs$tailLocal1.hX()));
  }
}
function $p_sci_List__listEq$1__sci_List__sci_List__Z($thiz, a, b) {
  var b$tailLocal1 = b;
  var a$tailLocal1 = a;
  while (true) {
    if ((a$tailLocal1 === b$tailLocal1)) {
      return true;
    } else {
      var aEmpty = a$tailLocal1.ac();
      var bEmpty = b$tailLocal1.ac();
      if ((!(aEmpty || bEmpty))) {
        a$tailLocal1.iL();
      }
      if (false) {
        a$tailLocal1.hX();
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
$p.ab = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.hT = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.bO = (function() {
  return "LinearSeq";
});
$p.ac = (function() {
  return (this === $m_sci_Nil$());
});
$p.bp = (function(f) {
  var these = this;
  while ((!these.ac())) {
    f.h(these.iL());
    these.hX();
  }
});
$p.F = (function() {
  var these = this;
  var len = 0;
  while ((!these.ac())) {
    len = ((1 + len) | 0);
    these.hX();
  }
  return len;
});
$p.bN = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__I__sci_List__I(this, len, 0, this));
});
$p.fU = (function() {
  return "List";
});
$p.r = (function(o) {
  return ((o instanceof $c_sci_List) ? $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, o) : $f_sc_Seq__equals__O__Z(this, o));
});
$p.ox = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
$p.h = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aF)));
}
/** @constructor */
function $c_scm_ArraySeq$ofRef(array) {
  this.aT = null;
  this.aT = array;
}
$p = $c_scm_ArraySeq$ofRef.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofRef;
/** @constructor */
function $h_scm_ArraySeq$ofRef() {
}
$h_scm_ArraySeq$ofRef.prototype = $p;
$p.F = (function() {
  return this.aT.b.length;
});
$p.ab = (function(index) {
  return this.aT.b[index];
});
$p.t = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.mS(this.aT, this$1.fy);
});
$p.r = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofRef) ? $m_s_Array$().n0(this.aT, that.aT) : $c_scm_ArraySeq.prototype.r.call(this, that));
});
$p.ad = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.aT);
});
$p.h = (function(v1) {
  return this.ab((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aI)));
}
var $d_scm_ArraySeq$ofRef = new $TypeData().i($c_scm_ArraySeq$ofRef, "scala.collection.mutable.ArraySeq$ofRef", ({
  aI: 1,
  aH: 1,
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
$p.C = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.v = (function() {
  return 0;
});
$p.B = (function() {
  return "Nil";
});
$p.n = (function(n) {
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
$p.iL = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list");
});
$p.hX = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$p.aj = (function() {
  return 0;
});
$p.ad = (function() {
  return $m_sc_Iterator$().b4;
});
$p.kb = (function() {
  this.iL();
});
$p.ki = (function() {
  this.hX();
});
var $d_sci_Nil$ = new $TypeData().i($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  cz: 1,
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
  ck: 1,
  N: 1,
  cx: 1,
  cw: 1,
  z: 1,
  A: 1,
  co: 1,
  J: 1,
  a: 1,
  cs: 1,
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
  $thiz.b5 = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, new $c_jl_StringBuilder());
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.b5 = null;
}
$p = $c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
}
$h_scm_StringBuilder.prototype = $p;
$p.ad = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.bN = (function(len) {
  var x = this.b5.F();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.bO = (function() {
  return "IndexedSeq";
});
$p.F = (function() {
  return this.b5.F();
});
$p.aj = (function() {
  return this.b5.F();
});
$p.o = (function() {
  return this.b5.ao;
});
$p.ac = (function() {
  return (this.b5.F() === 0);
});
$p.ab = (function(i) {
  return $bC(this.b5.mU(i));
});
$p.h = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.b5.mU(i));
});
var $d_scm_StringBuilder = new $TypeData().i($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
  cJ: 1,
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
  aK: 1,
  aL: 1,
  aJ: 1,
  cH: 1,
  x: 1,
  n: 1,
  T: 1,
  S: 1,
  L: 1,
  a: 1
}));
/** @constructor */
function $c_sjs_js_WrappedArray(array) {
  this.gj = null;
  this.gj = array;
}
$p = $c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
}
$h_sjs_js_WrappedArray.prototype = $p;
$p.bO = (function() {
  return "IndexedSeq";
});
$p.ad = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.bN = (function(len) {
  var x = (this.gj.length | 0);
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.ab = (function(index) {
  return this.gj[index];
});
$p.F = (function() {
  return (this.gj.length | 0);
});
$p.aj = (function() {
  return (this.gj.length | 0);
});
$p.fU = (function() {
  return "WrappedArray";
});
$p.h = (function(v1) {
  var index = (v1 | 0);
  return this.gj[index];
});
var $d_sjs_js_WrappedArray = new $TypeData().i($c_sjs_js_WrappedArray, "scala.scalajs.js.WrappedArray", ({
  dl: 1,
  cD: 1,
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
  aK: 1,
  aL: 1,
  cI: 1,
  cF: 1,
  A: 1,
  z: 1,
  S: 1,
  x: 1,
  n: 1,
  T: 1,
  cG: 1,
  aJ: 1,
  a: 1
}));
$s_Lsketches_templates_rooms_gridcanvases_roomsGridCanvases__main__AT__V(new ($d_T.r().C)([]));
