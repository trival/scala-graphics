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
  return (arg0.$classData.Z ? arg0.aj() : $objectClone(arg0));
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
        return null.ns();
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
        return instance.m(x0);
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__equals__O__Z(instance.l, instance.h, x0);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__equals__O__Z(instance.c, x0);
      } else {
        return $c_O.prototype.m.call(instance, x0);
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
    return instance.nt(x0);
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
$p.m = (function(that) {
  return (this === that);
});
$p.j = (function() {
  var i = this.q();
  return (($objectClassName(this) + "@") + (i >>> 0.0).toString(16));
});
$p.toString = (function() {
  return this.j();
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
$p.aj = (function() {
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
$p.aj = (function() {
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
$p.aj = (function() {
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
$p.aj = (function() {
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
$p.aj = (function() {
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
$p.aj = (function() {
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
$p.aj = (function() {
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
$p.aj = (function() {
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
$p.aj = (function() {
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
  $p.aj = (function() {
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
/** @constructor */
function $c_jl_System$Streams$() {
  this.iV = null;
  this.l8 = null;
  $n_jl_System$Streams$ = this;
  this.iV = new $c_jl_JSConsoleBasedPrintStream(false);
  this.l8 = new $c_jl_JSConsoleBasedPrintStream(true);
}
$p = $c_jl_System$Streams$.prototype = new $h_O();
$p.constructor = $c_jl_System$Streams$;
/** @constructor */
function $h_jl_System$Streams$() {
}
$h_jl_System$Streams$.prototype = $p;
var $d_jl_System$Streams$ = new $TypeData().i($c_jl_System$Streams$, "java.lang.System$Streams$", ({
  bg: 1
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
  this.hr = null;
  this.iW = null;
  $n_jl_System$SystemProperties$ = this;
  this.hr = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
  this.iW = null;
}
$p = $c_jl_System$SystemProperties$.prototype = new $h_O();
$p.constructor = $c_jl_System$SystemProperties$;
/** @constructor */
function $h_jl_System$SystemProperties$() {
}
$h_jl_System$SystemProperties$.prototype = $p;
$p.kG = (function(key, default$1) {
  if ((this.hr !== null)) {
    var dict = this.hr;
    return ((!(!$m_jl_Utils$Cache$().iY.call(dict, key))) ? dict[key] : default$1);
  } else {
    return this.iW.kG(key, default$1);
  }
});
var $d_jl_System$SystemProperties$ = new $TypeData().i($c_jl_System$SystemProperties$, "java.lang.System$SystemProperties$", ({
  bh: 1
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
  this.iY = null;
  $n_jl_Utils$Cache$ = this;
  this.iY = Object.prototype.hasOwnProperty;
}
$p = $c_jl_Utils$Cache$.prototype = new $h_O();
$p.constructor = $c_jl_Utils$Cache$;
/** @constructor */
function $h_jl_Utils$Cache$() {
}
$h_jl_Utils$Cache$.prototype = $p;
var $d_jl_Utils$Cache$ = new $TypeData().i($c_jl_Utils$Cache$, "java.lang.Utils$Cache$", ({
  bj: 1
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
  bk: 1
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
$p.g9 = (function(array) {
  return ((array instanceof $ac_O) ? array.a.length : ((array instanceof $ac_Z) ? array.a.length : ((array instanceof $ac_C) ? array.a.length : ((array instanceof $ac_B) ? array.a.length : ((array instanceof $ac_S) ? array.a.length : ((array instanceof $ac_I) ? array.a.length : ((array instanceof $ac_J) ? ((array.a.length >>> 1) | 0) : ((array instanceof $ac_F) ? array.a.length : ((array instanceof $ac_D) ? array.a.length : $p_jl_reflect_Array$__mismatch__O__E(this, array))))))))));
});
var $d_jl_reflect_Array$ = new $TypeData().i($c_jl_reflect_Array$, "java.lang.reflect.Array$", ({
  bl: 1
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
$p.lv = (function(a, key) {
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
  bm: 1
}));
var $n_ju_Arrays$;
function $m_ju_Arrays$() {
  if ((!$n_ju_Arrays$)) {
    $n_ju_Arrays$ = new $c_ju_Arrays$();
  }
  return $n_ju_Arrays$;
}
function $s_RTLong__remainderUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().mX(alo, ahi, blo, bhi);
}
function $s_RTLong__remainder__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().mW(alo, ahi, blo, bhi);
}
function $s_RTLong__divideUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().lI(alo, ahi, blo, bhi);
}
function $s_RTLong__divide__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().lH(alo, ahi, blo, bhi);
}
function $s_RTLong__fromDoubleBits__D__O__J(value, fpBitsDataView) {
  fpBitsDataView.setFloat64(0, value, true);
  var lo = (fpBitsDataView.getInt32(0, true) | 0);
  var hi = (fpBitsDataView.getInt32(4, true) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__fromDouble__D__J(value) {
  return $m_RTLong$().kF(value);
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
  return $m_RTLong$().l2(lo, hi);
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
$p.l2 = (function(lo, hi) {
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
$p.kF = (function(value) {
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
$p.lH = (function(alo, ahi, blo, bhi) {
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
    var $x_1 = this.hj(rlo, rhi, rlo$1, rhi$1, true);
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
$p.lI = (function(alo, ahi, blo, bhi) {
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
    return this.hj(alo, ahi, blo, bhi, true);
  }
});
$p.mW = (function(alo, ahi, blo, bhi) {
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
    var $x_1 = this.hj(rlo, rhi, rlo$1, rhi$1, false);
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
$p.mX = (function(alo, ahi, blo, bhi) {
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
    return this.hj(alo, ahi, blo, bhi, false);
  }
});
$p.hj = (function(alo, ahi, blo, bhi, askQuotient) {
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
  bo: 1
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
$p.kD = (function(xs, ys) {
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
  bp: 1
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
      var srclen = $m_jl_reflect_Array$().g9(dest);
      break matchResult18;
    }
    var srclen = x31;
  }
  var destLen = $m_jl_reflect_Array$().g9(dest);
  var limit = ((n < srclen) ? n : srclen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var end = ((start + ((total < 0) ? 0 : total)) | 0);
  while (((i < end) && it.C())) {
    $m_sr_ScalaRunTime$().lr(dest, i, it.B());
    i = ((1 + i) | 0);
  }
  return ((i - start) | 0);
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  return (($thiz.U() === 0) ? (("" + start) + end) : $thiz.io($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end).al.R);
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = b.al;
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
  this.fw = null;
  this.j5 = head;
  this.fw = tail;
}
$p = $c_sc_Iterator$ConcatIteratorCell.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$ConcatIteratorCell;
/** @constructor */
function $h_sc_Iterator$ConcatIteratorCell() {
}
$h_sc_Iterator$ConcatIteratorCell.prototype = $p;
$p.m8 = (function() {
  return this.j5.g6().N();
});
var $d_sc_Iterator$ConcatIteratorCell = new $TypeData().i($c_sc_Iterator$ConcatIteratorCell, "scala.collection.Iterator$ConcatIteratorCell", ({
  c7: 1
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
  this.j9 = 0;
  $n_sci_IndexedSeqDefaults$ = this;
  try {
    $m_sc_StringOps$();
    var $x_1 = $m_jl_Integer$().mi($m_jl_System$SystemProperties$().kG("scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength", "64"), 10, 214748364);
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
$p.b = (function(x, y) {
  return ((x === y) || ($is_jl_Number(x) ? this.lQ(x, y) : ((x instanceof $Char) ? this.lO(x, y) : ((x === null) ? (y === null) : $dp_equals__O__Z(x, y)))));
});
$p.lQ = (function(xn, y) {
  if ($is_jl_Number(y)) {
    return this.lP(xn, y);
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
$p.lP = (function(xn, yn) {
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
      return (false && yn.m(x2));
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
      return (false && yn.m($bL(x3$2_$_lo, x3$2_$_hi)));
    }
  } else {
    return ((xn === null) ? (yn === null) : $dp_equals__O__Z(xn, yn));
  }
});
$p.lO = (function(xc, y) {
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
$p.ls = (function() {
  throw new $c_jl_AssertionError("assertion failed");
});
$p.hi = (function() {
  throw $ct_jl_NullPointerException__T__(new $c_jl_NullPointerException(), "tried to cast away nullability, but value is null");
});
var $d_sr_Scala3RunTime$ = new $TypeData().i($c_sr_Scala3RunTime$, "scala.runtime.Scala3RunTime$", ({
  cW: 1
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
$p.fo = (function(xs, idx) {
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
$p.lr = (function(xs, idx, value) {
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
$p.lf = (function(x) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(x.A(), (x.x() + "("), ",", ")");
});
$p.l3 = (function(xs) {
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
  cX: 1
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
$p.mm = (function(lv_$_lo, lv_$_hi) {
  return ((lv_$_hi === (lv_$_lo >> 31)) ? lv_$_lo : (lv_$_lo ^ lv_$_hi));
});
$p.lJ = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var $x_1 = $m_RTLong$().kF(dv);
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
    return this.lJ((+x));
  } else if ((x instanceof $Long)) {
    var $x_1 = $uJ(x);
    return this.mm($x_1.l, $x_1.h);
  } else {
    return $dp_hashCode__I(x);
  }
});
$p.mg = (function(n) {
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
var $d_sr_Statics$ = new $TypeData().i($c_sr_Statics$, "scala.runtime.Statics$", ({
  cZ: 1
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
    return new $c_T2(x, self.eM);
  }
  if ((self instanceof $c_T2)) {
    return new $c_T3(x, self.af, self.a8);
  }
  if ((self instanceof $c_T3)) {
    return new $c_T4(x, self.aH, self.ay, self.az);
  }
  if ((self instanceof $c_T4)) {
    return new $c_T5(x, self.e8, self.aI, self.aJ, self.aK);
  }
  if ((self instanceof $c_T5)) {
    return new $c_T6(x, self.f0, self.e9, self.ea, self.eb, self.ec);
  }
  if ((self instanceof $c_T6)) {
    return new $c_T7(x, self.f1, self.ed, self.ee, self.ef, self.eg, self.eh);
  }
  if ((self instanceof $c_T7)) {
    return new $c_T8(x, self.f2, self.ei, self.ej, self.ek, self.el, self.em, self.en);
  }
  if ((self instanceof $c_T8)) {
    return new $c_T9(x, self.f3, self.eo, self.ep, self.eq, self.er, self.es, self.et, self.eu);
  }
  if ((self instanceof $c_T9)) {
    return new $c_T10(x, self.f4, self.ev, self.ew, self.ex, self.ey, self.ez, self.eA, self.eB, self.eC);
  }
  if ((self instanceof $c_T10)) {
    return new $c_T11(x, self.eN, self.aZ, self.b0, self.b1, self.b2, self.b3, self.b4, self.b5, self.b6, self.aY);
  }
  if ((self instanceof $c_T11)) {
    return new $c_T12(x, self.eO, self.b9, self.ba, self.bb, self.bc, self.bd, self.be, self.bf, self.bg, self.b7, self.b8);
  }
  if ((self instanceof $c_T12)) {
    return new $c_T13(x, self.eP, self.bk, self.bl, self.bm, self.bn, self.bo, self.bp, self.bq, self.br, self.bh, self.bi, self.bj);
  }
  if ((self instanceof $c_T13)) {
    return new $c_T14(x, self.eQ, self.bw, self.bx, self.by, self.bz, self.bA, self.bB, self.bC, self.bD, self.bs, self.bt, self.bu, self.bv);
  }
  if ((self instanceof $c_T14)) {
    return new $c_T15(x, self.eR, self.bJ, self.bK, self.bL, self.bM, self.bN, self.bO, self.bP, self.bQ, self.bE, self.bF, self.bG, self.bH, self.bI);
  }
  if ((self instanceof $c_T15)) {
    return new $c_T16(x, self.eS, self.bX, self.bY, self.bZ, self.c0, self.c1, self.c2, self.c3, self.c4, self.bR, self.bS, self.bT, self.bU, self.bV, self.bW);
  }
  if ((self instanceof $c_T16)) {
    return new $c_T17(x, self.eT, self.cc, self.cd, self.ce, self.cf, self.cg, self.ch, self.ci, self.cj, self.c5, self.c6, self.c7, self.c8, self.c9, self.ca, self.cb);
  }
  if ((self instanceof $c_T17)) {
    return new $c_T18(x, self.eU, self.cs, self.ct, self.cu, self.cv, self.cw, self.cx, self.cy, self.cz, self.ck, self.cl, self.cm, self.cn, self.co, self.cp, self.cq, self.cr);
  }
  if ((self instanceof $c_T18)) {
    return new $c_T19(x, self.eV, self.cJ, self.cK, self.cL, self.cM, self.cN, self.cO, self.cP, self.cQ, self.cA, self.cB, self.cC, self.cD, self.cE, self.cF, self.cG, self.cH, self.cI);
  }
  if ((self instanceof $c_T19)) {
    return new $c_T20(x, self.eW, self.d1, self.d2, self.d3, self.d4, self.d5, self.d6, self.d7, self.d8, self.cR, self.cS, self.cT, self.cU, self.cV, self.cW, self.cX, self.cY, self.cZ, self.d0);
  }
  if ((self instanceof $c_T20)) {
    return new $c_T21(x, self.eX, self.dj, self.dl, self.dm, self.dn, self.dp, self.dq, self.dr, self.ds, self.d9, self.da, self.db, self.dc, self.dd, self.de, self.df, self.dg, self.dh, self.di, self.dk);
  }
  if ((self instanceof $c_T21)) {
    return new $c_T22(x, self.eY, self.dD, self.dG, self.dH, self.dI, self.dJ, self.dK, self.dL, self.dM, self.dt, self.du, self.dv, self.dw, self.dx, self.dy, self.dz, self.dA, self.dB, self.dC, self.dE, self.dF);
  }
  if ((self instanceof $c_T22)) {
    return new $c_sr_TupleXXL(new $ac_O([x, self.eZ, self.dX, self.e1, self.e2, self.e3, self.e4, self.e5, self.e6, self.e7, self.dN, self.dO, self.dP, self.dQ, self.dR, self.dS, self.dT, self.dU, self.dV, self.dW, self.dY, self.dZ, self.e0]));
  }
  throw new $c_s_MatchError(self);
}
function $p_sr_Tuples$__xxlCons__O__sr_TupleXXL__sr_TupleXXL($thiz, x, xxl) {
  var arr = new $ac_O(((1 + xxl.t()) | 0));
  arr.a[0] = x;
  var src = xxl.J;
  var length = xxl.t();
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
      var $x_1 = new $c_T2(self.ay, self.az);
      break matchResult34$1;
    }
    if ((self instanceof $c_T4)) {
      var $x_1 = new $c_T3(self.aI, self.aJ, self.aK);
      break matchResult34$1;
    }
    if ((self instanceof $c_T5)) {
      var $x_1 = new $c_T4(self.e9, self.ea, self.eb, self.ec);
      break matchResult34$1;
    }
    if ((self instanceof $c_T6)) {
      var $x_1 = new $c_T5(self.ed, self.ee, self.ef, self.eg, self.eh);
      break matchResult34$1;
    }
    if ((self instanceof $c_T7)) {
      var $x_1 = new $c_T6(self.ei, self.ej, self.ek, self.el, self.em, self.en);
      break matchResult34$1;
    }
    if ((self instanceof $c_T8)) {
      var $x_1 = new $c_T7(self.eo, self.ep, self.eq, self.er, self.es, self.et, self.eu);
      break matchResult34$1;
    }
    if ((self instanceof $c_T9)) {
      var $x_1 = new $c_T8(self.ev, self.ew, self.ex, self.ey, self.ez, self.eA, self.eB, self.eC);
      break matchResult34$1;
    }
    if ((self instanceof $c_T10)) {
      var $x_1 = new $c_T9(self.aZ, self.b0, self.b1, self.b2, self.b3, self.b4, self.b5, self.b6, self.aY);
      break matchResult34$1;
    }
    if ((self instanceof $c_T11)) {
      var $x_1 = new $c_T10(self.b9, self.ba, self.bb, self.bc, self.bd, self.be, self.bf, self.bg, self.b7, self.b8);
      break matchResult34$1;
    }
    if ((self instanceof $c_T12)) {
      var $x_1 = new $c_T11(self.bk, self.bl, self.bm, self.bn, self.bo, self.bp, self.bq, self.br, self.bh, self.bi, self.bj);
      break matchResult34$1;
    }
    if ((self instanceof $c_T13)) {
      var $x_1 = new $c_T12(self.bw, self.bx, self.by, self.bz, self.bA, self.bB, self.bC, self.bD, self.bs, self.bt, self.bu, self.bv);
      break matchResult34$1;
    }
    if ((self instanceof $c_T14)) {
      var $x_1 = new $c_T13(self.bJ, self.bK, self.bL, self.bM, self.bN, self.bO, self.bP, self.bQ, self.bE, self.bF, self.bG, self.bH, self.bI);
      break matchResult34$1;
    }
    if ((self instanceof $c_T15)) {
      var $x_1 = new $c_T14(self.bX, self.bY, self.bZ, self.c0, self.c1, self.c2, self.c3, self.c4, self.bR, self.bS, self.bT, self.bU, self.bV, self.bW);
      break matchResult34$1;
    }
    if ((self instanceof $c_T16)) {
      var $x_1 = new $c_T15(self.cc, self.cd, self.ce, self.cf, self.cg, self.ch, self.ci, self.cj, self.c5, self.c6, self.c7, self.c8, self.c9, self.ca, self.cb);
      break matchResult34$1;
    }
    if ((self instanceof $c_T17)) {
      var $x_1 = new $c_T16(self.cs, self.ct, self.cu, self.cv, self.cw, self.cx, self.cy, self.cz, self.ck, self.cl, self.cm, self.cn, self.co, self.cp, self.cq, self.cr);
      break matchResult34$1;
    }
    if ((self instanceof $c_T18)) {
      var $x_1 = new $c_T17(self.cJ, self.cK, self.cL, self.cM, self.cN, self.cO, self.cP, self.cQ, self.cA, self.cB, self.cC, self.cD, self.cE, self.cF, self.cG, self.cH, self.cI);
      break matchResult34$1;
    }
    if ((self instanceof $c_T19)) {
      var $x_1 = new $c_T18(self.d1, self.d2, self.d3, self.d4, self.d5, self.d6, self.d7, self.d8, self.cR, self.cS, self.cT, self.cU, self.cV, self.cW, self.cX, self.cY, self.cZ, self.d0);
      break matchResult34$1;
    }
    if ((self instanceof $c_T20)) {
      var $x_1 = new $c_T19(self.dj, self.dl, self.dm, self.dn, self.dp, self.dq, self.dr, self.ds, self.d9, self.da, self.db, self.dc, self.dd, self.de, self.df, self.dg, self.dh, self.di, self.dk);
      break matchResult34$1;
    }
    if ((self instanceof $c_T21)) {
      var $x_1 = new $c_T20(self.dD, self.dG, self.dH, self.dI, self.dJ, self.dK, self.dL, self.dM, self.dt, self.du, self.dv, self.dw, self.dx, self.dy, self.dz, self.dA, self.dB, self.dC, self.dE, self.dF);
      break matchResult34$1;
    }
    if ((self instanceof $c_T22)) {
      var $x_1 = new $c_T21(self.dX, self.e1, self.e2, self.e3, self.e4, self.e5, self.e6, self.e7, self.dN, self.dO, self.dP, self.dQ, self.dR, self.dS, self.dT, self.dU, self.dV, self.dW, self.dY, self.dZ, self.e0);
      break matchResult34$1;
    }
    throw new $c_s_MatchError(self);
  }
  return $x_1;
}
function $p_sr_Tuples$__xxlTail__sr_TupleXXL__s_Product($thiz, xxl) {
  if ((xxl.t() === 23)) {
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
$p.lX = (function(xs) {
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
      return new $c_sr_TupleXXL(xs.aj());
    }
  }
});
$p.lY = (function(xs) {
  return ((xs.a.length <= 22) ? this.lX(xs) : new $c_sr_TupleXXL(xs));
});
$p.ky = (function(x, self) {
  return ((self instanceof $c_sr_TupleXXL) ? $p_sr_Tuples$__xxlCons__O__sr_TupleXXL__sr_TupleXXL(this, x, self) : $p_sr_Tuples$__specialCaseCons__O__s_Product__s_Product(this, x, self));
});
$p.lC = (function(self, that) {
  var selfSize = $m_sr_Tuples$().l0(self);
  if ((selfSize === 0)) {
    return that;
  }
  var thatSize = $m_sr_Tuples$().l0(that);
  if ((thatSize === 0)) {
    return self;
  }
  var arr = new $ac_O(((selfSize + thatSize) | 0));
  if ((self instanceof $c_sr_TupleXXL)) {
    var src = self.J;
    src.a7(0, arr, 0, selfSize);
  } else {
    self.A().kz(arr, 0, selfSize);
  }
  if ((that instanceof $c_sr_TupleXXL)) {
    var src$1 = that.J;
    src$1.a7(0, arr, selfSize, thatSize);
  } else {
    that.A().kz(arr, selfSize, thatSize);
  }
  return this.lY(arr);
});
$p.l0 = (function(self) {
  if (($m_T$package$EmptyTuple$() === self)) {
    return 0;
  }
  if ((self !== null)) {
    return self.t();
  }
  throw new $c_s_MatchError(self);
});
$p.na = (function(self) {
  return ((self instanceof $c_sr_TupleXXL) ? $p_sr_Tuples$__xxlTail__sr_TupleXXL__s_Product(this, self) : $p_sr_Tuples$__specialCaseTail__s_Product__s_Product(this, self));
});
var $d_sr_Tuples$ = new $TypeData().i($c_sr_Tuples$, "scala.runtime.Tuples$", ({
  d0: 1
}));
var $n_sr_Tuples$;
function $m_sr_Tuples$() {
  if ((!$n_sr_Tuples$)) {
    $n_sr_Tuples$ = new $c_sr_Tuples$();
  }
  return $n_sr_Tuples$;
}
var $d_sjs_js_Any = new $TypeData().i(2, "scala.scalajs.js.Any", ({
  d1: 1
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
$p.m7 = (function(this$, o, p) {
  return (!(!(p in o)));
});
var $d_sjs_js_Any$ObjectCompanionOps$ = new $TypeData().i($c_sjs_js_Any$ObjectCompanionOps$, "scala.scalajs.js.Any$ObjectCompanionOps$", ({
  d3: 1
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
$p.kL = (function(this$, elem, from) {
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
$p.l6 = (function(this$, that) {
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
$p.l7 = (function(this$) {
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
  d4: 1
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
$p.o = (function(left, right) {
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
  d5: 1
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
  d9: 1
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
$p.l1 = (function(seq) {
  if ((seq instanceof $c_sjsr_WrappedVarArgs)) {
    return seq.gw;
  } else {
    var result = [];
    seq.is(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2$2) => (result.push(x$2$2) | 0))));
    return result;
  }
});
var $d_sjsr_Compat$ = new $TypeData().i($c_sjsr_Compat$, "scala.scalajs.runtime.Compat$", ({
  da: 1
}));
var $n_sjsr_Compat$;
function $m_sjsr_Compat$() {
  if ((!$n_sjsr_Compat$)) {
    $n_sjsr_Compat$ = new $c_sjsr_Compat$();
  }
  return $n_sjsr_Compat$;
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
$p.n6 = (function(err) {
  var where = ((err.kK() === 0) ? "" : ((err.kK() === 1) ? " after first argument" : ((" after " + err.kK()) + " arguments")));
  var x = ((("Illegal command line" + where) + ": ") + err.nu());
  $m_s_Console$().mL().mj((x + "\n"));
});
var $d_s_util_CommandLineParser$ = new $TypeData().i($c_s_util_CommandLineParser$, "scala.util.CommandLineParser$", ({
  db: 1
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
  this.ht = null;
  this.ht = init;
}
$p = $c_s_util_DynamicVariable.prototype = new $h_O();
$p.constructor = $c_s_util_DynamicVariable;
/** @constructor */
function $h_s_util_DynamicVariable() {
}
$h_s_util_DynamicVariable.prototype = $p;
$p.j = (function() {
  return (("DynamicVariable(" + this.ht) + ")");
});
var $d_s_util_DynamicVariable = new $TypeData().i($c_s_util_DynamicVariable, "scala.util.DynamicVariable", ({
  dd: 1
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
$p.w = (function(hash, data) {
  var h = this.kU(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.kU = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.a6 = (function(hash, length) {
  return this.gr((hash ^ length));
});
$p.gr = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.E = (function(x, seed, ignorePrefix) {
  var arr = x.t();
  if ((arr === 0)) {
    return ((!ignorePrefix) ? $f_T__hashCode__I(x.x()) : seed);
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.w(h, $f_T__hashCode__I(x.x()));
    }
    var i = 0;
    while ((i < arr)) {
      h = this.w(h, $m_sr_Statics$().K(x.k(i)));
      i = ((1 + i) | 0);
    }
    return this.a6(h, arr);
  }
});
$p.lA = (function(x, seed, caseClassName) {
  var arr = x.t();
  var aye = $f_T__hashCode__I(((caseClassName !== null) ? caseClassName : x.x()));
  if ((arr === 0)) {
    return aye;
  } else {
    var h = seed;
    h = this.w(h, aye);
    var i = 0;
    while ((i < arr)) {
      h = this.w(h, $m_sr_Statics$().K(x.k(i)));
      i = ((1 + i) | 0);
    }
    return this.a6(h, arr);
  }
});
$p.ng = (function(xs, seed) {
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
  h$2 = this.kU(h$2, c);
  return this.a6(h$2, n);
});
$p.mK = (function(xs, seed) {
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
  return this.gr(this.w(this.w(h0, rangeDiff), prev));
});
$p.kv = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().g9(a);
  switch (l) {
    case 0: {
      return this.a6(h, 0);
      break;
    }
    case 1: {
      return this.a6(this.w(h, $m_sr_Statics$().K($m_sr_ScalaRunTime$().fo(a, 0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().K($m_sr_ScalaRunTime$().fo(a, 0));
      h = this.w(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().K($m_sr_ScalaRunTime$().fo(a, 1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.w(h, prev);
        var hash = $m_sr_Statics$().K($m_sr_ScalaRunTime$().fo(a, i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.w(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.w(h, $m_sr_Statics$().K($m_sr_ScalaRunTime$().fo(a, i)));
            i = ((1 + i) | 0);
          }
          return this.a6(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.gr(this.w(this.w(h0, rangeDiff), prev));
    }
  }
});
$p.mT = (function(start, step, last, seed) {
  return this.gr(this.w(this.w(this.w(seed, start), step), last));
});
$p.mb = (function(a, seed) {
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
      return this.gr(this.w(this.w(h0, rangeDiff), prev));
    }
  }
});
$p.ml = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!elems.M())) {
    elems.hh();
  }
  return ((rangeState === 2) ? this.mT(initial, rangeDiff, prev, seed) : this.a6(h, n));
});
function $p_Lsketches_rooms_columns_Columns$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2($thiz, c, u, v) {
  return new $c_T2(c, new $c_Ltrivalibs_graphics_math_cpu_Vec2(u, v));
}
function $p_Lsketches_rooms_columns_Columns$package$__columnFaces$1__sjs_js_Array($thiz) {
  var box = $m_Ltrivalibs_graphics_geometry_Box$().kt(new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0), $m_Lsketches_rooms_columns_Columns$package$().fz, $m_Lsketches_rooms_columns_Columns$package$().f7, $m_Lsketches_rooms_columns_Columns$package$().fz);
  var f = ((c$2, uvw$2) => $p_Lsketches_rooms_columns_Columns$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2($thiz, c$2, uvw$2.r, uvw$2.l));
  var $x_19 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0 = box.gz;
  var x1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0);
  var $x_18 = f(x0, x1);
  var x0$1 = box.fC;
  var x1$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
  var $x_17 = f(x0$1, x1$1);
  var x0$2 = box.fD;
  var x1$2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0);
  var $x_16 = f(x0$2, x1$2);
  var x0$3 = box.gA;
  var x1$3 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 0.0);
  var $x_15 = $x_19.aF($x_18, $x_17, $x_16, f(x0$3, x1$3));
  var f$1 = ((c$2$1, uvw$2$1) => $p_Lsketches_rooms_columns_Columns$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2($thiz, c$2$1, (1.0 - uvw$2$1.r), uvw$2$1.l));
  var $x_14 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0$4 = box.gy;
  var x1$4 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 1.0);
  var $x_13 = f$1(x0$4, x1$4);
  var x0$5 = box.fB;
  var x1$5 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0);
  var $x_12 = f$1(x0$5, x1$5);
  var x0$6 = box.fA;
  var x1$6 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0);
  var $x_11 = f$1(x0$6, x1$6);
  var x0$7 = box.gx;
  var x1$7 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0);
  var $x_10 = $x_14.aF($x_13, $x_12, $x_11, f$1(x0$7, x1$7));
  var f$2 = ((c$2$2, uvw$2$2) => $p_Lsketches_rooms_columns_Columns$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2($thiz, c$2$2, (1.0 - uvw$2$2.n), uvw$2$2.l));
  var $x_9 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0$8 = box.gx;
  var x1$8 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0);
  var $x_8 = f$2(x0$8, x1$8);
  var x0$9 = box.fA;
  var x1$9 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0);
  var $x_7 = f$2(x0$9, x1$9);
  var x0$10 = box.fC;
  var x1$10 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
  var $x_6 = f$2(x0$10, x1$10);
  var x0$11 = box.gz;
  var x1$11 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0);
  var $x_5 = $x_9.aF($x_8, $x_7, $x_6, f$2(x0$11, x1$11));
  var f$3 = ((c$2$3, uvw$2$3) => $p_Lsketches_rooms_columns_Columns$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2($thiz, c$2$3, uvw$2$3.n, uvw$2$3.l));
  var $x_4 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0$12 = box.gA;
  var x1$12 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 0.0);
  var $x_3 = f$3(x0$12, x1$12);
  var x0$13 = box.fD;
  var x1$13 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0);
  var $x_2 = f$3(x0$13, x1$13);
  var x0$14 = box.fB;
  var x1$14 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0);
  var $x_1 = f$3(x0$14, x1$14);
  var x0$15 = box.gy;
  var x1$15 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 1.0);
  return [$x_15, $x_10, $x_5, $x_4.aF($x_3, $x_2, $x_1, f$3(x0$15, x1$15))];
}
function $p_Lsketches_rooms_columns_Columns$package$__balkFaces$1__sjs_js_Array($thiz) {
  var box = $m_Ltrivalibs_graphics_geometry_Box$().kt(new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0), $m_Lsketches_rooms_columns_Columns$package$().fz, $m_Lsketches_rooms_columns_Columns$package$().hu, $m_Lsketches_rooms_columns_Columns$package$().I);
  var f = ((c$2, uvw$2) => $p_Lsketches_rooms_columns_Columns$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2($thiz, c$2, (1.0 - uvw$2.n), uvw$2.l));
  var $x_14 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0 = box.gx;
  var x1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0);
  var $x_13 = f(x0, x1);
  var x0$1 = box.fA;
  var x1$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0);
  var $x_12 = f(x0$1, x1$1);
  var x0$2 = box.fC;
  var x1$2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
  var $x_11 = f(x0$2, x1$2);
  var x0$3 = box.gz;
  var x1$3 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0);
  var $x_10 = $x_14.aF($x_13, $x_12, $x_11, f(x0$3, x1$3));
  var f$1 = ((c$2$1, uvw$2$1) => $p_Lsketches_rooms_columns_Columns$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2($thiz, c$2$1, uvw$2$1.n, uvw$2$1.l));
  var $x_9 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0$4 = box.gA;
  var x1$4 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 0.0);
  var $x_8 = f$1(x0$4, x1$4);
  var x0$5 = box.fD;
  var x1$5 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0);
  var $x_7 = f$1(x0$5, x1$5);
  var x0$6 = box.fB;
  var x1$6 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0);
  var $x_6 = f$1(x0$6, x1$6);
  var x0$7 = box.gy;
  var x1$7 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 1.0);
  var $x_5 = $x_9.aF($x_8, $x_7, $x_6, f$1(x0$7, x1$7));
  var f$2 = ((c$2$2, uvw$2$2) => $p_Lsketches_rooms_columns_Columns$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2($thiz, c$2$2, uvw$2$2.r, uvw$2$2.n));
  var $x_4 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0$8 = box.fC;
  var x1$8 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
  var $x_3 = f$2(x0$8, x1$8);
  var x0$9 = box.fA;
  var x1$9 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0);
  var $x_2 = f$2(x0$9, x1$9);
  var x0$10 = box.fB;
  var x1$10 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0);
  var $x_1 = f$2(x0$10, x1$10);
  var x0$11 = box.fD;
  var x1$11 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0);
  return [$x_10, $x_5, $x_4.aF($x_3, $x_2, $x_1, f$2(x0$11, x1$11))];
}
function $p_Lsketches_rooms_columns_Columns$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form($thiz, p$1, faces) {
  var mesh$proxy1 = $m_Ltrivalibs_graphics_geometry_Mesh$().lo(faces, null, 0, new $c_Ltrivalibs_graphics_geometry_package$package$$anon$1(0));
  var vl = new $c_Ltrivalibs_graphics_geometry_VertexLayout$named(new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$(), new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$(), $m_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$())));
  var f = ((v$3, n$3, ref$3) => {
    var nVal = new $c_T3(n$3.r, n$3.l, n$3.n);
    var values$proxy1 = $m_sr_Tuples$().lC(vl.jn.fr(v$3), $m_sr_Tuples$().ky(nVal, $m_T$package$EmptyTuple$()));
    var baseOffset$proxy1 = (ref$3.off | 0);
    var nestedValues = values$proxy1.k(0);
    var value = nestedValues.k(0);
    ref$3.dv.setFloat32(baseOffset$proxy1, Math.fround(value), true);
    var tailOffset = ((4 + baseOffset$proxy1) | 0);
    var value$2 = nestedValues.k(1);
    ref$3.dv.setFloat32(tailOffset, Math.fround(value$2), true);
    var tailOffset$2 = ((4 + tailOffset) | 0);
    var value$3 = nestedValues.k(2);
    ref$3.dv.setFloat32(tailOffset$2, Math.fround(value$3), true);
    var tailOffset$4 = ((12 + baseOffset$proxy1) | 0);
    var nestedValues$2 = values$proxy1.k(1);
    var value$4 = nestedValues$2.k(0);
    ref$3.dv.setFloat32(tailOffset$4, Math.fround(value$4), true);
    var tailOffset$5 = ((4 + tailOffset$4) | 0);
    var value$5 = nestedValues$2.k(1);
    ref$3.dv.setFloat32(tailOffset$5, Math.fround(value$5), true);
    var tailOffset$7 = ((8 + tailOffset$4) | 0);
    var nestedValues$3 = values$proxy1.k(2);
    var value$6 = nestedValues$3.k(0);
    ref$3.dv.setFloat32(tailOffset$7, Math.fround(value$6), true);
    var tailOffset$8 = ((4 + tailOffset$7) | 0);
    var value$7 = nestedValues$3.k(1);
    ref$3.dv.setFloat32(tailOffset$8, Math.fround(value$7), true);
    var tailOffset$9 = ((4 + tailOffset$8) | 0);
    var value$8 = nestedValues$3.k(2);
    ref$3.dv.setFloat32(tailOffset$9, Math.fround(value$8), true);
  });
  var \u03b4proxy2 = $m_Ltrivalibs_graphics_geometry_buffers$package$();
  mesh$proxy1.lL();
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
      var opt$proxy1 = mesh$proxy1.f9[fi].fE;
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
      var opt$proxy2 = mesh$proxy1.f9[fi].fE;
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
    var $x_1 = new $c_Ltrivalibs_graphics_geometry_BufferedGeometry(verts, \u03b4proxy2.mB(idxBuf, vertexCount));
  }
  return p$1.lV($x_1, (void 0), (void 0), (void 0));
}
/** @constructor */
function $c_Lsketches_rooms_columns_Columns$package$() {
  this.I = 0.0;
  this.f7 = 0.0;
  this.fz = 0.0;
  this.hu = 0.0;
  this.a0 = 0;
  this.Z = 0;
  $n_Lsketches_rooms_columns_Columns$package$ = this;
  this.I = 12.0;
  this.f7 = 40.0;
  this.fz = 2.0;
  this.hu = (3.4 * $m_Lsketches_rooms_columns_Columns$package$().fz);
  this.a0 = 8;
  this.Z = 4;
}
$p = $c_Lsketches_rooms_columns_Columns$package$.prototype = new $h_O();
$p.constructor = $c_Lsketches_rooms_columns_Columns$package$;
/** @constructor */
function $h_Lsketches_rooms_columns_Columns$package$() {
}
$h_Lsketches_rooms_columns_Columns$package$.prototype = $p;
$p.n0 = (function() {
  $m_Ltrivalibs_graphics_painter_Painter$().mc(document.getElementById("canvas"), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((p$3) => {
    var n$proxy1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
    var center$proxy1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0);
    var f = ((pos$2, uv$2) => $p_Lsketches_rooms_columns_Columns$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2(this, pos$2, uv$2.fa, uv$2.fb));
    var uvAtPivot = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.5, 0.5);
    var n = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().p(), n$proxy1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
    var x = n.l;
    if (((+Math.abs(x)) > 0.999)) {
      var up = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().p(), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
    } else {
      var up = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
    }
    var uDir = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().p(), up, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), n);
    var uVec = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().p(), uDir, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), 200.0);
    var vVec = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().p(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().p(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().p(), n, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uDir), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$()), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), 200.0);
    var tlPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().p(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().p(), center$proxy1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().p(), uVec, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uvAtPivot.fa)), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().p(), vVec, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uvAtPivot.fb));
    var trPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().p(), tlPos, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uVec);
    var blPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().p(), tlPos, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), vVec);
    var brPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().p(), blPos, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uVec);
    var $x_4 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
    var x1 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 0.0);
    var $x_3 = f(tlPos, x1);
    var x1$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 1.0);
    var $x_2 = f(blPos, x1$1);
    var x1$2 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(1.0, 1.0);
    var $x_1 = f(brPos, x1$2);
    var x1$3 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(1.0, 0.0);
    var groundFaces = [$x_4.aF($x_3, $x_2, $x_1, f(trPos, x1$3))];
    var n$proxy2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0);
    var center$proxy2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, (0.5 * $m_Lsketches_rooms_columns_Columns$package$().f7), 0.0);
    var f$1 = ((pos$2$1, uv$2$1) => $p_Lsketches_rooms_columns_Columns$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2(this, pos$2$1, uv$2$1.fa, uv$2$1.fb));
    var width = $m_Lsketches_rooms_columns_Columns$package$().I;
    var height = $m_Lsketches_rooms_columns_Columns$package$().f7;
    var uvAtPivot$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.5, 0.5);
    var n$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().p(), n$proxy2, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
    var x$1 = n$1.l;
    if (((+Math.abs(x$1)) > 0.999)) {
      var up$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().p(), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
    } else {
      var up$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
    }
    var uDir$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().p(), up$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), n$1);
    var uVec$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().p(), uDir$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), width);
    var vVec$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().p(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().p(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().p(), n$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uDir$1), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$()), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), height);
    var tlPos$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().p(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().p(), center$proxy2, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().p(), uVec$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uvAtPivot$1.fa)), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().p(), vVec$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uvAtPivot$1.fb));
    var trPos$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().p(), tlPos$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uVec$1);
    var blPos$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().p(), tlPos$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), vVec$1);
    var brPos$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().p(), blPos$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uVec$1);
    var $x_8 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
    var x1$4 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 0.0);
    var $x_7 = f$1(tlPos$1, x1$4);
    var x1$5 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 1.0);
    var $x_6 = f$1(blPos$1, x1$5);
    var x1$6 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(1.0, 1.0);
    var $x_5 = f$1(brPos$1, x1$6);
    var x1$7 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(1.0, 0.0);
    var wallFaces = [$x_8.aF($x_7, $x_6, $x_5, f$1(trPos$1, x1$7))];
    var groundForm = $p_Lsketches_rooms_columns_Columns$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$3, groundFaces);
    var wallForm = $p_Lsketches_rooms_columns_Columns$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$3, wallFaces);
    var columnForm = $p_Lsketches_rooms_columns_Columns$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$3, $p_Lsketches_rooms_columns_Columns$package$__columnFaces$1__sjs_js_Array(this));
    var balkForm = $p_Lsketches_rooms_columns_Columns$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$3, $p_Lsketches_rooms_columns_Columns$package$__balkFaces$1__sjs_js_Array(this));
    var program = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    var d = ({});
    var ctx = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().eG;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().eG = reg;
    try {
      var AssignTarget_this = ctx.h9.ke;
      var value$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().nk($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().mD(ctx.h7.ax("viewProj"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().kI(), ctx.h7.ax("model")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().kI(), $m_Ltrivalibs_graphics_math_gpu_vec4$().ku(ctx.h8.ax("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().eJ().F(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().m6(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$());
      var x0 = (((("  " + AssignTarget_this.fV) + " = ") + value$proxy1.s) + ";");
      var AssignTarget_this$2 = ctx.h9.hl("normal");
      var value$proxy2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$().nj(ctx.h7.ax("normalMat"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().m4(), ctx.h8.ax("normal"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().it(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$());
      var x1$8 = (((("  " + AssignTarget_this$2.fV) + " = ") + value$proxy2.s) + ";");
      var AssignTarget_this$3 = ctx.h9.hl("uv");
      var value$proxy3 = ctx.h8.ax("uv");
      var $x_9 = $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs([x0, x1$8, (((("  " + AssignTarget_this$3.fV) + " = ") + value$proxy3.s) + ";")]), "", "\n", "");
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().eG = prev;
    }
    program.ia = $x_9;
    var array$1 = reg.i6;
    var len = (array$1.length | 0);
    var i = 0;
    while ((i < len)) {
      $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$1[i]);
      i = ((1 + i) | 0);
    }
    var d$2 = ({});
    var ctx$2 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$2), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().eG;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().eG = reg$2;
    try {
      var uv = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("uv");
      var col = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("col");
      var x0$2 = uv.kr($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().lW($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().le(ctx$2.fW.ax("uv"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fq(), 40.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fq()));
      var x1$9 = col.kr($m_Ltrivalibs_graphics_math_gpu_expr$package$().n1($m_Ltrivalibs_graphics_math_gpu_vec3$().lp($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fq().l4(ctx$2.fW.ax("uv")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fq().l5(ctx$2.fW.ax("uv")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().eJ().F(0.5)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().lT(ctx$2.fW.ax("normal"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().it()), $m_Ltrivalibs_graphics_math_gpu_expr$package$().lx($m_Ltrivalibs_graphics_math_gpu_expr$package$().kE($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fq().l4(uv), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().eJ().F(0.2)), $m_Ltrivalibs_graphics_math_gpu_expr$package$().kE($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fq().l5(uv), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().eJ().F(0.2)))));
      var AssignTarget_this$1 = ctx$2.kd.hl("color");
      var value$proxy4 = $m_Ltrivalibs_graphics_math_gpu_vec4$().ku($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().mR(col, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().it(), 2.2), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().eJ().F(1.0));
      var $x_10 = $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs([x0$2, x1$9, (((("  " + AssignTarget_this$1.fV) + " = ") + value$proxy4.s) + ";")]), "", "\n", "");
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().eG = prev$2;
    }
    program.i9 = $x_10;
    var array$3 = reg$2.i6;
    var len$1 = (array$3.length | 0);
    var i$1 = 0;
    while ((i$1 < len$1)) {
      $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$3[i$1]);
      i$1 = ((1 + i$1) | 0);
    }
    var b = program.ia;
    var b$1 = program.i9;
    var helperFns$proxy1 = program.ma();
    var id = p$3.gU;
    p$3.gU = ((1 + p$3.gU) | 0);
    var names = $m_sjs_js_ArrayOpsCommon$().o(["model"], $m_sjs_js_ArrayOpsCommon$().o(["normalMat"], $m_sjs_js_ArrayOpsCommon$().o(["viewProj"], [])));
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
    var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef(b, b$1, helperFns$proxy1);
    var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().o(["position"], $m_sjs_js_ArrayOpsCommon$().o(["uv"], $m_sjs_js_ArrayOpsCommon$().o(["normal"], []))), $m_sjs_js_ArrayOpsCommon$().o(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().o(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().o(["vec3<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().o([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().o([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().o(["uv"], $m_sjs_js_ArrayOpsCommon$().o(["normal"], [])), $m_sjs_js_ArrayOpsCommon$().o(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().o(["vec3<f32>"], [])), $m_sjs_js_ArrayOpsCommon$().o([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().o(["color"], []), $m_sjs_js_ArrayOpsCommon$().o(["vec4<f32>"], []), []);
    var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().o(["model"], $m_sjs_js_ArrayOpsCommon$().o(["normalMat"], $m_sjs_js_ArrayOpsCommon$().o(["viewProj"], []))), $m_sjs_js_ArrayOpsCommon$().o([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).fU.fs()], $m_sjs_js_ArrayOpsCommon$().o([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$()).fU.fs()], $m_sjs_js_ArrayOpsCommon$().o([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).fU.fs()], []))));
    var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().o([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.fT, sd.fR, fragBuiltinParams);
    var args$proxy1 = $m_sr_ScalaRunTime$().l3(new ($d_sjs_js_Any.r().C)([baseWgsl]));
    console.log(...$m_sjsr_Compat$().l1(args$proxy1));
    var module = p$3.e.createShaderModule(({
      "code": baseWgsl
    }));
    var formats = $m_sjs_js_ArrayOpsCommon$().o(["float32x3"], $m_sjs_js_ArrayOpsCommon$().o(["float32x2"], $m_sjs_js_ArrayOpsCommon$().o(["float32x3"], [])));
    var sizes = $m_sjs_js_ArrayOpsCommon$().o([12], $m_sjs_js_ArrayOpsCommon$().o([8], $m_sjs_js_ArrayOpsCommon$().o([12], [])));
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
    var descriptors = $x_14.o([$x_13.o([({
      "binding": 0,
      "visibility": 1,
      "buffer": _2
    })], $x_12.o([({
      "binding": 1,
      "visibility": 1,
      "buffer": _2$1
    })], $x_11.o([({
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
    var \u03b42$___2 = $m_Ltrivalibs_graphics_shader_layouts$().kA(p$3.e, result);
    var bgls$2 = \u03b42$___1;
    var pl = $m_Ltrivalibs_graphics_shader_layouts$().kA(p$3.e, bgls$2);
    var shade = new $c_Ltrivalibs_graphics_painter_Shade(id, module, vbl, bgls$2[0], null, pl, false, dict, dict$2);
    var identityMat = new $c_Ltrivalibs_graphics_math_cpu_Mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0);
    var identityN = $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().X(identityMat);
    var Bindable_this = p$3.hm(groundForm, shade, (void 0), (void 0));
    var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("model", identityMat);
    var e2$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", identityN);
    var \u03b4scrutinee112 = e1$proxy1.v;
    var idx = (Bindable_this.ac.u.model | 0);
    if (((idx < (Bindable_this.S.length | 0)) && (Bindable_this.S[idx] !== null))) {
      var BufferBinding_this = Bindable_this.S[idx];
      BufferBinding_this.h.i(BufferBinding_this.d, \u03b4scrutinee112);
      var $x_16 = BufferBinding_this.g.queue;
      var $x_15 = BufferBinding_this.f;
      var s$proxy2 = BufferBinding_this.d;
      $x_16.writeBuffer($x_15, 0.0, s$proxy2.dv.buffer);
    } else {
      var uv$1 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
      var device$proxy1 = Bindable_this.i3.e;
      var buffer = new ArrayBuffer(64);
      var arr$proxy6 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
      var b$2 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy6.dv, 0), device$proxy1, uv$1);
      b$2.h.i(b$2.d, \u03b4scrutinee112);
      var $x_18 = b$2.g.queue;
      var $x_17 = b$2.f;
      var s$proxy3 = b$2.d;
      $x_18.writeBuffer($x_17, 0.0, s$proxy3.dv.buffer);
      while (((Bindable_this.S.length | 0) <= idx)) {
        Bindable_this.S.push(null);
      }
      Bindable_this.S[idx] = b$2;
    }
    var \u03b4scrutinee123 = e2$proxy1.v;
    var idx$2 = (Bindable_this.ac.u.normalMat | 0);
    if (((idx$2 < (Bindable_this.S.length | 0)) && (Bindable_this.S[idx$2] !== null))) {
      var BufferBinding_this$5 = Bindable_this.S[idx$2];
      BufferBinding_this$5.h.i(BufferBinding_this$5.d, \u03b4scrutinee123);
      var $x_20 = BufferBinding_this$5.g.queue;
      var $x_19 = BufferBinding_this$5.f;
      var s$proxy4 = BufferBinding_this$5.d;
      $x_20.writeBuffer($x_19, 0.0, s$proxy4.dv.buffer);
    } else {
      var uv$2$2 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
      var device$proxy2 = Bindable_this.i3.e;
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
    var columnShape = p$3.hm(columnForm, shade, (void 0), (void 0));
    var balkShape = p$3.hm(balkForm, shade, (void 0), (void 0));
    var wallShape = p$3.hm(wallForm, shade, (void 0), (void 0));
    var colY = (0.5 * $m_Lsketches_rooms_columns_Columns$package$().f7);
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
      var idx$3 = (Bindable_this$6.z.u.model | 0);
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
        var b$3 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy8.dv, 0), device$proxy3, uv$3);
        b$3.h.i(b$3.d, \u03b4scrutinee134);
        var $x_26 = b$3.g.queue;
        var $x_25 = b$3.f;
        var s$proxy7 = b$3.d;
        $x_26.writeBuffer($x_25, 0.0, s$proxy7.dv.buffer);
        while (((Bindable_this$6.c.length | 0) <= idx$3)) {
          Bindable_this$6.c.push(null);
        }
        Bindable_this$6.c[idx$3] = b$3;
      }
      var \u03b4scrutinee145 = e2$proxy2.v;
      var idx$4 = (Bindable_this$6.z.u.normalMat | 0);
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
        var b$4 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy9.dv, 0), device$proxy4, uv$4);
        b$4.h.i(b$4.d, \u03b4scrutinee145);
        var $x_30 = b$4.g.queue;
        var $x_29 = b$4.f;
        var s$proxy9 = b$4.d;
        $x_30.writeBuffer($x_29, 0.0, s$proxy9.dv.buffer);
        while (((Bindable_this$6.c.length | 0) <= idx$4)) {
          Bindable_this$6.c.push(null);
        }
        Bindable_this$6.c[idx$4] = b$4;
      }
      var x$proxy3 = ($m_Lsketches_rooms_columns_Columns$package$().Z * $m_Lsketches_rooms_columns_Columns$package$().I);
      var m$2 = new $c_Ltrivalibs_graphics_math_cpu_Mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, x$proxy3, colY, z, 1.0);
      var InstanceList_this$2 = columnShape.P;
      var e1$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$2);
      var e2$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().X(m$2));
      var i$5 = InstanceList_this$2.a1();
      var Bindable_this$11 = InstanceList_this$2.G[i$5];
      var \u03b4scrutinee156 = e1$proxy3.v;
      var idx$5 = (Bindable_this$11.z.u.model | 0);
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
      var idx$6 = (Bindable_this$11.z.u.normalMat | 0);
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
      var idx$7 = (Bindable_this$16.z.u.model | 0);
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
      var idx$8 = (Bindable_this$16.z.u.normalMat | 0);
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
      var idx$9 = (Bindable_this$21.z.u.model | 0);
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
      var idx$10 = (Bindable_this$21.z.u.normalMat | 0);
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
      var idx$11 = (Bindable_this$26.z.u.model | 0);
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
      var idx$12 = (Bindable_this$26.z.u.normalMat | 0);
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
      var idx$13 = (Bindable_this$31.z.u.model | 0);
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
      var idx$14 = (Bindable_this$31.z.u.normalMat | 0);
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
      var idx$15 = (Bindable_this$36.z.u.model | 0);
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
      var idx$16 = (Bindable_this$36.z.u.normalMat | 0);
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
      var idx$17 = (Bindable_this$41.z.u.model | 0);
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
      var idx$18 = (Bindable_this$41.z.u.normalMat | 0);
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
    var balkY = ($m_Lsketches_rooms_columns_Columns$package$().f7 - (0.5 * $m_Lsketches_rooms_columns_Columns$package$().hu));
    ix = ((-$m_Lsketches_rooms_columns_Columns$package$().Z) | 0);
    while ((ix <= $m_Lsketches_rooms_columns_Columns$package$().Z)) {
      var t$proxy1 = new $c_Ltrivalibs_graphics_scene_Transform(new $c_Ltrivalibs_graphics_math_cpu_Vec3((ix * $m_Lsketches_rooms_columns_Columns$package$().I), balkY, 0.0), new $c_Ltrivalibs_graphics_math_cpu_Quat(0.0, 0.0, 0.0, 1.0), new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, (2.0 * $m_Lsketches_rooms_columns_Columns$package$().a0)));
      var m$9 = $m_Ltrivalibs_graphics_math_cpu_Mat4$().eI(t$proxy1.aS, t$proxy1.aQ, t$proxy1.aR);
      var InstanceList_this$9 = balkShape.P;
      var e1$proxy10 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$9);
      var e2$proxy10 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().X(m$9));
      var i$12 = InstanceList_this$9.a1();
      var Bindable_this$46 = InstanceList_this$9.G[i$12];
      var \u03b4scrutinee310 = e1$proxy10.v;
      var idx$19 = (Bindable_this$46.z.u.model | 0);
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
      var idx$20 = (Bindable_this$46.z.u.normalMat | 0);
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
      var t$proxy2 = new $c_Ltrivalibs_graphics_scene_Transform(new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, balkY, (iz * $m_Lsketches_rooms_columns_Columns$package$().I)), $m_Ltrivalibs_graphics_math_cpu_Quat$().g8(1.5707963267948966), new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, (2.0 * $m_Lsketches_rooms_columns_Columns$package$().Z)));
      var m$10 = $m_Ltrivalibs_graphics_math_cpu_Mat4$().eI(t$proxy2.aS, t$proxy2.aQ, t$proxy2.aR);
      var InstanceList_this$10 = balkShape.P;
      var e1$proxy11 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$10);
      var e2$proxy11 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().X(m$10));
      var i$13 = InstanceList_this$10.a1();
      var Bindable_this$51 = InstanceList_this$10.G[i$13];
      var \u03b4scrutinee332 = e1$proxy11.v;
      var idx$21 = (Bindable_this$51.z.u.model | 0);
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
      var idx$22 = (Bindable_this$51.z.u.normalMat | 0);
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
    var m$11 = $m_Ltrivalibs_graphics_math_cpu_Mat4$().eI(t$proxy3.aS, t$proxy3.aQ, t$proxy3.aR);
    var InstanceList_this$11 = wallShape.P;
    var e1$proxy12 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$11);
    var e2$proxy12 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().X(m$11));
    var i$14 = InstanceList_this$11.a1();
    var Bindable_this$56 = InstanceList_this$11.G[i$14];
    var \u03b4scrutinee354 = e1$proxy12.v;
    var idx$23 = (Bindable_this$56.z.u.model | 0);
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
    var idx$24 = (Bindable_this$56.z.u.normalMat | 0);
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
    var t$proxy4 = new $c_Ltrivalibs_graphics_scene_Transform(new $c_Ltrivalibs_graphics_math_cpu_Vec3((((-$m_Lsketches_rooms_columns_Columns$package$().Z) | 0) * $m_Lsketches_rooms_columns_Columns$package$().I), 0.0, 0.0), $m_Ltrivalibs_graphics_math_cpu_Quat$().g8(1.5707963267948966), new $c_Ltrivalibs_graphics_math_cpu_Vec3(((2.0 * $m_Lsketches_rooms_columns_Columns$package$().a0) + 2.0), 1.0, 1.0));
    var m$12 = $m_Ltrivalibs_graphics_math_cpu_Mat4$().eI(t$proxy4.aS, t$proxy4.aQ, t$proxy4.aR);
    var InstanceList_this$12 = wallShape.P;
    var e1$proxy13 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$12);
    var e2$proxy13 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().X(m$12));
    var i$15 = InstanceList_this$12.a1();
    var Bindable_this$61 = InstanceList_this$12.G[i$15];
    var \u03b4scrutinee376 = e1$proxy13.v;
    var idx$25 = (Bindable_this$61.z.u.model | 0);
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
    var idx$26 = (Bindable_this$61.z.u.normalMat | 0);
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
    var t$proxy5 = new $c_Ltrivalibs_graphics_scene_Transform(new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, ($m_Lsketches_rooms_columns_Columns$package$().a0 * $m_Lsketches_rooms_columns_Columns$package$().I)), $m_Ltrivalibs_graphics_math_cpu_Quat$().g8(3.141592653589793), new $c_Ltrivalibs_graphics_math_cpu_Vec3(((2.0 * $m_Lsketches_rooms_columns_Columns$package$().Z) + 2.0), 1.0, 1.0));
    var m$13 = $m_Ltrivalibs_graphics_math_cpu_Mat4$().eI(t$proxy5.aS, t$proxy5.aQ, t$proxy5.aR);
    var InstanceList_this$13 = wallShape.P;
    var e1$proxy14 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$13);
    var e2$proxy14 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().X(m$13));
    var i$16 = InstanceList_this$13.a1();
    var Bindable_this$66 = InstanceList_this$13.G[i$16];
    var \u03b4scrutinee398 = e1$proxy14.v;
    var idx$27 = (Bindable_this$66.z.u.model | 0);
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
    var idx$28 = (Bindable_this$66.z.u.normalMat | 0);
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
    var t$proxy6 = new $c_Ltrivalibs_graphics_scene_Transform(new $c_Ltrivalibs_graphics_math_cpu_Vec3(($m_Lsketches_rooms_columns_Columns$package$().Z * $m_Lsketches_rooms_columns_Columns$package$().I), 0.0, 0.0), $m_Ltrivalibs_graphics_math_cpu_Quat$().g8(4.71238898038469), new $c_Ltrivalibs_graphics_math_cpu_Vec3(((2.0 * $m_Lsketches_rooms_columns_Columns$package$().a0) + 2.0), 1.0, 1.0));
    var m$14 = $m_Ltrivalibs_graphics_math_cpu_Mat4$().eI(t$proxy6.aS, t$proxy6.aQ, t$proxy6.aR);
    var InstanceList_this$14 = wallShape.P;
    var e1$proxy15 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$14);
    var e2$proxy15 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().X(m$14));
    var i$17 = InstanceList_this$14.a1();
    var Bindable_this$71 = InstanceList_this$14.G[i$17];
    var \u03b4scrutinee420 = e1$proxy15.v;
    var idx$29 = (Bindable_this$71.z.u.model | 0);
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
    var idx$30 = (Bindable_this$71.z.u.normalMat | 0);
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
    var clearColor$1 = $m_Ltrivalibs_graphics_math_cpu_Vec4$().m3().F(new $c_T4(0.9, 0.95, 0.99, 1.0));
    var shapes$1 = [Bindable_this, columnShape, balkShape, wallShape];
    var Panel_this = p$3.mM((void 0), (void 0), clearColor$1, true, true, (void 0), (void 0), (void 0), (void 0), (void 0), shapes$1, (void 0), (void 0));
    var e1$proxy16 = new $c_Ltrivalibs_graphics_painter_BindPair("viewProj", viewProj);
    var \u03b4scrutinee439 = e1$proxy16.v;
    var dict$proxy1 = Panel_this.h0;
    dict$proxy1.viewProj = \u03b4scrutinee439;
    var cam = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().lk(0.6, 1.0, 0.1, 200.0, 0.0, 0.0, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 3.0, 15.0));
    $m_Ltrivalibs_dev_devPreserve$().lq(cam, "camera");
    var input = $m_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$().mf(p$3.fd, true, 400.0, 5.0, true, (void 0));
    var controller = new $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController(cam, input, 3.0, 4.0);
    p$3.mJ(new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((v1$2, v2$2) => {
      var cw = (+v1$2);
      var ch = (+v2$2);
      var aspect$2 = (cw / ch);
      var fov$1 = cam.fj;
      var near$1 = cam.fk;
      var far$1 = cam.fi;
      var rotH$2 = cam.a5;
      var rotV$2 = cam.aE;
      var pos$2$2 = cam.T;
      cam.iP(fov$1, aspect$2, near$1, far$1, rotH$2, rotV$2, pos$2$2);
    })));
    $m_Ltrivalibs_utils_animation_animate$package$().lj(((p$3$1) => ((arg1$2) => {
      var tpf = (+arg1$2);
      input.gt(tpf);
      controller.gt(tpf);
      var value$proxy19 = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().kJ(), cam.i5, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), cam.nl());
      viewProj.h.i(viewProj.d, value$proxy19);
      var $x_136 = viewProj.g.queue;
      var $x_135 = viewProj.f;
      var s$proxy62 = viewProj.d;
      $x_136.writeBuffer($x_135, 0.0, s$proxy62.dv.buffer);
      $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$3$1, Panel_this);
      p$3$1.n5(Panel_this);
    }))(p$3));
  })));
});
var $d_Lsketches_rooms_columns_Columns$package$ = new $TypeData().i($c_Lsketches_rooms_columns_Columns$package$, "sketches.rooms.columns.Columns$package$", ({
  dg: 1
}));
var $n_Lsketches_rooms_columns_Columns$package$;
function $m_Lsketches_rooms_columns_Columns$package$() {
  if ((!$n_Lsketches_rooms_columns_Columns$package$)) {
    $n_Lsketches_rooms_columns_Columns$package$ = new $c_Lsketches_rooms_columns_Columns$package$();
  }
  return $n_Lsketches_rooms_columns_Columns$package$;
}
function $s_Lsketches_rooms_columns_roomsColumns__main__AT__V(args) {
  try {
    $m_Lsketches_rooms_columns_Columns$package$().n0();
  } catch (e) {
    if (false) {
      $m_s_util_CommandLineParser$().n6(e);
    } else {
      throw e;
    }
  }
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
  dh: 1
}));
/** @constructor */
function $c_Ltrivalibs_dev_dev$package$() {
  this.f8 = null;
  this.hv = false;
  $n_Ltrivalibs_dev_dev$package$ = this;
  this.f8 = [];
  this.hv = false;
}
$p = $c_Ltrivalibs_dev_dev$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_dev_dev$package$;
/** @constructor */
function $h_Ltrivalibs_dev_dev$package$() {
}
$h_Ltrivalibs_dev_dev$package$.prototype = $p;
$p.lF = (function() {
  return (import.meta.hot !== (void 0));
});
$p.mE = (function() {
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
$p.n8 = (function(label) {
  return ((("trivalibs:dev:" + $m_Ltrivalibs_dev_dev$package$().mE()) + ":") + label);
});
$p.iQ = (function() {
  return window.sessionStorage;
});
$p.mU = (function(key) {
  var raw = $m_Ltrivalibs_dev_dev$package$().iQ().getItem(key);
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
$p.no = (function(key, json) {
  $m_Ltrivalibs_dev_dev$package$().iQ().setItem(key, JSON.stringify(json));
});
$p.mY = (function(key) {
  $m_Ltrivalibs_dev_dev$package$().iQ().removeItem(key);
});
$p.lM = (function() {
  if ((!$m_Ltrivalibs_dev_dev$package$().hv)) {
    $m_Ltrivalibs_dev_dev$package$().hv = true;
    window.addEventListener("pagehide", ((_$1$2) => {
      var i = 0;
      while ((i < ($m_Ltrivalibs_dev_dev$package$().f8.length | 0))) {
        $m_Ltrivalibs_dev_dev$package$().f8[i].g6();
        i = ((1 + i) | 0);
      }
    }));
  }
});
$p.mV = (function(flush) {
  $m_Ltrivalibs_dev_dev$package$().lM();
  $m_Ltrivalibs_dev_dev$package$().f8.push(flush);
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    var idx = $m_sjs_js_ArrayOps$().kL($m_Ltrivalibs_dev_dev$package$().f8, flush, 0);
    if ((idx >= 0)) {
      $m_Ltrivalibs_dev_dev$package$().f8.splice(idx, 1);
    }
  }));
});
var $d_Ltrivalibs_dev_dev$package$ = new $TypeData().i($c_Ltrivalibs_dev_dev$package$, "trivalibs.dev.dev$package$", ({
  di: 1
}));
var $n_Ltrivalibs_dev_dev$package$;
function $m_Ltrivalibs_dev_dev$package$() {
  if ((!$n_Ltrivalibs_dev_dev$package$)) {
    $n_Ltrivalibs_dev_dev$package$ = new $c_Ltrivalibs_dev_dev$package$();
  }
  return $n_Ltrivalibs_dev_dev$package$;
}
function $p_Ltrivalibs_dev_devPreserve$__encodeCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any($thiz, cam) {
  return [cam.T.r, cam.T.l, cam.T.n, cam.a5, cam.aE];
}
function $p_Ltrivalibs_dev_devPreserve$__applyCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any__V($thiz, cam, json) {
  if ((!(!Array.isArray(json)))) {
    if (((json.length | 0) >= 5)) {
      var pos$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((+json[0]), (+json[1]), (+json[2]));
      var rotH$1 = (+json[3]);
      var rotV$1 = (+json[4]);
      var fov$1 = cam.fj;
      var aspect$1 = cam.fQ;
      var near$1 = cam.fk;
      var far$1 = cam.fi;
      cam.iP(fov$1, aspect$1, near$1, far$1, rotH$1, rotV$1, pos$1);
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
$p.lq = (function(cam, label) {
  if ((!$m_Ltrivalibs_dev_dev$package$().lF())) {
    return new $c_Ltrivalibs_dev_DevHandle(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => (void 0))));
  } else {
    var sk = $m_Ltrivalibs_dev_dev$package$().n8(label);
    var initPos = cam.T;
    var initRotH = cam.a5;
    var initRotV = cam.aE;
    var stored = $m_Ltrivalibs_dev_dev$package$().mU(sk);
    if ((stored !== null)) {
      $p_Ltrivalibs_dev_devPreserve$__applyCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any__V(this, cam, stored);
    }
    return new $c_Ltrivalibs_dev_DevHandle(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(((unregister) => (() => {
      unregister.g6();
      $m_Ltrivalibs_dev_dev$package$().mY(sk);
      var fov$proxy1 = cam.fj;
      var aspect$proxy1 = cam.fQ;
      var near$proxy1 = cam.fk;
      var far$proxy1 = cam.fi;
      cam.iP(fov$proxy1, aspect$proxy1, near$proxy1, far$proxy1, initRotH, initRotV, initPos);
    }))($m_Ltrivalibs_dev_dev$package$().mV(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
      $m_Ltrivalibs_dev_dev$package$().no(sk, $p_Ltrivalibs_dev_devPreserve$__encodeCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any(this, cam));
    }))))));
  }
});
var $d_Ltrivalibs_dev_devPreserve$ = new $TypeData().i($c_Ltrivalibs_dev_devPreserve$, "trivalibs.dev.devPreserve$", ({
  dj: 1
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aI)));
}
var $d_Ltrivalibs_graphics_buffers_BufferBinding = new $TypeData().i($c_Ltrivalibs_graphics_buffers_BufferBinding, "trivalibs.graphics.buffers.BufferBinding", ({
  aI: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Box(center, size, frontTopLeft, frontTopRight, frontBottomLeft, frontBottomRight, backTopLeft, backTopRight, backBottomLeft, backBottomRight) {
  this.gz = null;
  this.gA = null;
  this.fC = null;
  this.fD = null;
  this.gx = null;
  this.gy = null;
  this.fA = null;
  this.fB = null;
  this.gz = frontTopLeft;
  this.gA = frontTopRight;
  this.fC = frontBottomLeft;
  this.fD = frontBottomRight;
  this.gx = backTopLeft;
  this.gy = backTopRight;
  this.fA = backBottomLeft;
  this.fB = backBottomRight;
}
$p = $c_Ltrivalibs_graphics_geometry_Box.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Box;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Box() {
}
$h_Ltrivalibs_graphics_geometry_Box.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_Box = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Box, "trivalibs.graphics.geometry.Box", ({
  dp: 1
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
$p.kt = (function(center, width, height, depth) {
  var hw = (0.5 * width);
  var hh = (0.5 * height);
  var hd = (0.5 * depth);
  var cx = center.r;
  var cy = center.l;
  var cz = center.n;
  return new $c_Ltrivalibs_graphics_geometry_Box(center, new $c_Ltrivalibs_graphics_math_cpu_Vec3(width, height, depth), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy + hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy + hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy - hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy - hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy + hh), (cz - hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy + hh), (cz - hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy - hh), (cz - hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy - hh), (cz - hd)));
});
var $d_Ltrivalibs_graphics_geometry_Box$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Box$, "trivalibs.graphics.geometry.Box$", ({
  dq: 1
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
  this.jm = null;
  this.hw = null;
  this.jm = vertices;
  this.hw = indices;
}
$p = $c_Ltrivalibs_graphics_geometry_BufferedGeometry.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_BufferedGeometry;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_BufferedGeometry() {
}
$h_Ltrivalibs_graphics_geometry_BufferedGeometry.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_BufferedGeometry = new $TypeData().i($c_Ltrivalibs_graphics_geometry_BufferedGeometry, "trivalibs.graphics.geometry.BufferedGeometry", ({
  dr: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_FaceData(normal, section) {
  this.fE = null;
  this.la = 0;
  this.fE = normal;
  this.la = section;
}
$p = $c_Ltrivalibs_graphics_geometry_FaceData.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_FaceData;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_FaceData() {
}
$h_Ltrivalibs_graphics_geometry_FaceData.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_FaceData = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FaceData, "trivalibs.graphics.geometry.FaceData", ({
  ds: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Mesh(evidence$1) {
  this.fF = null;
  this.a3 = null;
  this.f9 = null;
  this.gC = null;
  this.gB = null;
  this.fF = evidence$1;
  this.a3 = [];
  this.f9 = [];
  this.gC = [];
  this.gB = ({});
}
$p = $c_Ltrivalibs_graphics_geometry_Mesh.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Mesh;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Mesh() {
}
$h_Ltrivalibs_graphics_geometry_Mesh.prototype = $p;
$p.lh = (function(face, normal, section) {
  var faceIdx = (this.a3.length | 0);
  this.a3.push(face);
  this.f9.push(new $c_Ltrivalibs_graphics_geometry_FaceData(normal, section));
  var n = (face.length | 0);
  var slot = 0;
  while ((slot < n)) {
    var v = face[slot];
    var key = $m_Ltrivalibs_graphics_geometry_package$package$().mQ(this.fF.aG(v));
    if ($m_sjs_js_Any$ObjectCompanionOps$().m7(Object, this.gB, key)) {
      var $x_2 = this.gC;
      var dict = this.gB;
      if ((!(!(!$m_sjs_js_WrappedDictionary$Cache$().jj.call(dict, key))))) {
        throw new $c_ju_NoSuchElementException(("key not found: " + key));
      }
      var $x_1 = $x_2[(dict[key] | 0)];
      $x_1.jq.push(new $c_Ltrivalibs_graphics_geometry_PositionFaceRef(faceIdx, slot));
    } else {
      var idx = (this.gC.length | 0);
      var dict$1 = this.gB;
      dict$1[key] = idx;
      this.gC.push(new $c_Ltrivalibs_graphics_geometry_VertexPosition(this.fF.aG(v), [new $c_Ltrivalibs_graphics_geometry_PositionFaceRef(faceIdx, slot)]));
    }
    slot = ((1 + slot) | 0);
  }
});
$p.lL = (function() {
  var hasQuads = false;
  var i = 0;
  while ((i < (this.a3.length | 0))) {
    var arr = this.a3[i];
    if ((this.f9[i].fE === null)) {
      var $x_2 = this.f9[i];
      if (((arr.length | 0) === 3)) {
        var $x_1 = $m_Ltrivalibs_graphics_geometry_polygon$package$Triangle$().iO(this.a3[i], this.fF);
      } else {
        hasQuads = true;
        var $x_1 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().iO(this.a3[i], this.fF);
      }
      $x_2.fE = $x_1;
    }
    i = ((1 + i) | 0);
  }
  return hasQuads;
});
var $d_Ltrivalibs_graphics_geometry_Mesh = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Mesh, "trivalibs.graphics.geometry.Mesh", ({
  dv: 1
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
$p.lo = (function(faces, normal, section, evidence$1) {
  var m = new $c_Ltrivalibs_graphics_geometry_Mesh(evidence$1);
  $m_Ltrivalibs_graphics_geometry_mesh$package$().li(m, faces, normal, section, evidence$1);
  return m;
});
var $d_Ltrivalibs_graphics_geometry_Mesh$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Mesh$, "trivalibs.graphics.geometry.Mesh$", ({
  dw: 1
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
  this.lb = 0;
  this.lc = 0;
  this.lb = faceIndex;
  this.lc = vertexSlot;
}
$p = $c_Ltrivalibs_graphics_geometry_PositionFaceRef.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_PositionFaceRef;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_PositionFaceRef() {
}
$h_Ltrivalibs_graphics_geometry_PositionFaceRef.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_PositionFaceRef = new $TypeData().i($c_Ltrivalibs_graphics_geometry_PositionFaceRef, "trivalibs.graphics.geometry.PositionFaceRef", ({
  dy: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexPosition(position, faces) {
  this.ld = null;
  this.jq = null;
  this.ld = position;
  this.jq = faces;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexPosition.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexPosition;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexPosition() {
}
$h_Ltrivalibs_graphics_geometry_VertexPosition.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_VertexPosition = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexPosition, "trivalibs.graphics.geometry.VertexPosition", ({
  dD: 1
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
$p.mB = (function(idxBuf, vertexCount) {
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
  dE: 1
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
$p.li = (function(m, faces, normal, section, evidence$1) {
  var i = 0;
  while ((i < (faces.length | 0))) {
    m.lh(faces[i], normal, section);
    i = ((1 + i) | 0);
  }
});
var $d_Ltrivalibs_graphics_geometry_mesh$package$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_mesh$package$, "trivalibs.graphics.geometry.mesh$package$", ({
  dF: 1
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
$p.mQ = (function(v) {
  return (((($doubleToInt((10000.0 * v.r)) + ",") + $doubleToInt((10000.0 * v.l))) + ",") + $doubleToInt((10000.0 * v.n)));
});
var $d_Ltrivalibs_graphics_geometry_package$package$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_package$package$, "trivalibs.graphics.geometry.package$package$", ({
  dG: 1
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
$p.aF = (function(tl, bl, br, tr) {
  return [tl, bl, br, tr];
});
$p.nc = (function(q, evidence$1) {
  return q[0];
});
$p.lw = (function(q, evidence$1) {
  return q[1];
});
$p.ly = (function(q, evidence$1) {
  return q[2];
});
$p.ne = (function(q, evidence$1) {
  return q[3];
});
$p.iO = (function(q, evidence$1) {
  var a = evidence$1.aG(this.nc(q, evidence$1));
  var b = evidence$1.aG(this.lw(q, evidence$1));
  var c = evidence$1.aG(this.ly(q, evidence$1));
  var d = evidence$1.aG(this.ne(q, evidence$1));
  var d1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((c.r - a.r), (c.l - a.l), (c.n - a.n));
  var d2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((d.r - b.r), (d.l - b.l), (d.n - b.n));
  return $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().p(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().p(), d1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), d2), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
});
var $d_Ltrivalibs_graphics_geometry_polygon$package$Quad$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_polygon$package$Quad$, "trivalibs.graphics.geometry.polygon$package$Quad$", ({
  dI: 1
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
$p.lg = (function(tri, evidence$1) {
  return tri[0];
});
$p.lu = (function(tri, evidence$1) {
  return tri[1];
});
$p.lz = (function(tri, evidence$1) {
  return tri[2];
});
$p.iO = (function(tri, evidence$1) {
  var pa = evidence$1.aG(this.lg(tri, evidence$1));
  var pb = evidence$1.aG(this.lu(tri, evidence$1));
  var pc = evidence$1.aG(this.lz(tri, evidence$1));
  var e1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((pb.r - pa.r), (pb.l - pa.l), (pb.n - pa.n));
  var e2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((pc.r - pa.r), (pc.l - pa.l), (pc.n - pa.n));
  return $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().p(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().p(), e1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), e2), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
});
var $d_Ltrivalibs_graphics_geometry_polygon$package$Triangle$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_polygon$package$Triangle$, "trivalibs.graphics.geometry.polygon$package$Triangle$", ({
  dJ: 1
}));
var $n_Ltrivalibs_graphics_geometry_polygon$package$Triangle$;
function $m_Ltrivalibs_graphics_geometry_polygon$package$Triangle$() {
  if ((!$n_Ltrivalibs_graphics_geometry_polygon$package$Triangle$)) {
    $n_Ltrivalibs_graphics_geometry_polygon$package$Triangle$ = new $c_Ltrivalibs_graphics_geometry_polygon$package$Triangle$();
  }
  return $n_Ltrivalibs_graphics_geometry_polygon$package$Triangle$;
}
function $f_Ltrivalibs_graphics_math_Mat3ImmutableOps__transpose__O__Ltrivalibs_graphics_math_Mat3Base__O($thiz, m, x$2) {
  return new $c_Ltrivalibs_graphics_math_cpu_Mat3((+x$2.ao(m)), (+x$2.ar(m)), (+x$2.au(m)), (+x$2.ap(m)), (+x$2.as(m)), (+x$2.av(m)), (+x$2.aq(m)), (+x$2.at(m)), (+x$2.aw(m)));
}
function $f_Ltrivalibs_graphics_math_Mat3ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat3Base__O($thiz, m, x$2) {
  var a00 = (+x$2.ao(m));
  var a01 = (+x$2.ap(m));
  var a02 = (+x$2.aq(m));
  var a10 = (+x$2.ar(m));
  var a11 = (+x$2.as(m));
  var a12 = (+x$2.at(m));
  var a20 = (+x$2.au(m));
  var a21 = (+x$2.av(m));
  var a22 = (+x$2.aw(m));
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
  mb.ga(m, (+x$4.ao(other)));
  mb.gb(m, (+x$4.ap(other)));
  mb.gc(m, (+x$4.aq(other)));
  mb.ge(m, (+x$4.ar(other)));
  mb.gf(m, (+x$4.as(other)));
  mb.gg(m, (+x$4.at(other)));
  mb.gi(m, (+x$4.au(other)));
  mb.gj(m, (+x$4.av(other)));
  mb.gk(m, (+x$4.aw(other)));
}
function $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($thiz, fovY, aspect, near, far) {
  var x = (0.5 * fovY);
  var f = (1.0 / (+Math.tan(x)));
  var rInv = (1.0 / (near - far));
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4((f / aspect), 0.0, 0.0, 0.0, 0.0, f, 0.0, 0.0, 0.0, 0.0, (far * rInv), (-1.0), 0.0, 0.0, ((near * far) * rInv), 0.0);
}
function $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($thiz, m, x$2, other) {
  var a00 = (+x$2.ao(m));
  var a01 = (+x$2.ap(m));
  var a02 = (+x$2.aq(m));
  var a03 = (+x$2.gd(m));
  var a10 = (+x$2.ar(m));
  var a11 = (+x$2.as(m));
  var a12 = (+x$2.at(m));
  var a13 = (+x$2.gh(m));
  var a20 = (+x$2.au(m));
  var a21 = (+x$2.av(m));
  var a22 = (+x$2.aw(m));
  var a23 = (+x$2.gl(m));
  var a30 = (+x$2.gm(m));
  var a31 = (+x$2.gn(m));
  var a32 = (+x$2.go(m));
  var a33 = (+x$2.gp(m));
  var b00 = (+x$2.ao(other));
  var b01 = (+x$2.ap(other));
  var b02 = (+x$2.aq(other));
  var b03 = (+x$2.gd(other));
  var b10 = (+x$2.ar(other));
  var b11 = (+x$2.as(other));
  var b12 = (+x$2.at(other));
  var b13 = (+x$2.gh(other));
  var b20 = (+x$2.au(other));
  var b21 = (+x$2.av(other));
  var b22 = (+x$2.aw(other));
  var b23 = (+x$2.gl(other));
  var b30 = (+x$2.gm(other));
  var b31 = (+x$2.gn(other));
  var b32 = (+x$2.go(other));
  var b33 = (+x$2.gp(other));
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4(((((a00 * b00) + (a10 * b01)) + (a20 * b02)) + (a30 * b03)), ((((a01 * b00) + (a11 * b01)) + (a21 * b02)) + (a31 * b03)), ((((a02 * b00) + (a12 * b01)) + (a22 * b02)) + (a32 * b03)), ((((a03 * b00) + (a13 * b01)) + (a23 * b02)) + (a33 * b03)), ((((a00 * b10) + (a10 * b11)) + (a20 * b12)) + (a30 * b13)), ((((a01 * b10) + (a11 * b11)) + (a21 * b12)) + (a31 * b13)), ((((a02 * b10) + (a12 * b11)) + (a22 * b12)) + (a32 * b13)), ((((a03 * b10) + (a13 * b11)) + (a23 * b12)) + (a33 * b13)), ((((a00 * b20) + (a10 * b21)) + (a20 * b22)) + (a30 * b23)), ((((a01 * b20) + (a11 * b21)) + (a21 * b22)) + (a31 * b23)), ((((a02 * b20) + (a12 * b21)) + (a22 * b22)) + (a32 * b23)), ((((a03 * b20) + (a13 * b21)) + (a23 * b22)) + (a33 * b23)), ((((a00 * b30) + (a10 * b31)) + (a20 * b32)) + (a30 * b33)), ((((a01 * b30) + (a11 * b31)) + (a21 * b32)) + (a31 * b33)), ((((a02 * b30) + (a12 * b31)) + (a22 * b32)) + (a32 * b33)), ((((a03 * b30) + (a13 * b31)) + (a23 * b32)) + (a33 * b33)));
}
function $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($thiz, m, x$2) {
  var a00 = (+x$2.ao(m));
  var a01 = (+x$2.ap(m));
  var a02 = (+x$2.aq(m));
  var a03 = (+x$2.gd(m));
  var a10 = (+x$2.ar(m));
  var a11 = (+x$2.as(m));
  var a12 = (+x$2.at(m));
  var a13 = (+x$2.gh(m));
  var a20 = (+x$2.au(m));
  var a21 = (+x$2.av(m));
  var a22 = (+x$2.aw(m));
  var a23 = (+x$2.gl(m));
  var a30 = (+x$2.gm(m));
  var a31 = (+x$2.gn(m));
  var a32 = (+x$2.go(m));
  var a33 = (+x$2.gp(m));
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
  mb.ga(m, (+x$4.ao(other)));
  mb.gb(m, (+x$4.ap(other)));
  mb.gc(m, (+x$4.aq(other)));
  mb.kM(m, (+x$4.gd(other)));
  mb.ge(m, (+x$4.ar(other)));
  mb.gf(m, (+x$4.as(other)));
  mb.gg(m, (+x$4.at(other)));
  mb.kN(m, (+x$4.gh(other)));
  mb.gi(m, (+x$4.au(other)));
  mb.gj(m, (+x$4.av(other)));
  mb.gk(m, (+x$4.aw(other)));
  mb.kO(m, (+x$4.gl(other)));
  mb.kP(m, (+x$4.gm(other)));
  mb.kQ(m, (+x$4.gn(other)));
  mb.kR(m, (+x$4.go(other)));
  mb.kS(m, (+x$4.gp(other)));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.r + other.r), (v.l + other.l), (v.n + other.n));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($thiz, v, x$2) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((-v.r), (-v.l), (-v.n));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.r - other.r), (v.l - other.l), (v.n - other.n));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, scalar) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.r * scalar), (v.l * scalar), (v.n * scalar));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__divScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, scalar) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.r / scalar), (v.l / scalar), (v.n / scalar));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3(((v.l * other.n) - (v.n * other.l)), ((v.n * other.r) - (v.r * other.n)), ((v.r * other.l) - (v.l * other.r)));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($thiz, v, x$2) {
  return $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__divScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, $f_Ltrivalibs_graphics_math_Vec3Base__length__O__D(x$2, v));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat3(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  this.hx = 0.0;
  this.hy = 0.0;
  this.hz = 0.0;
  this.hA = 0.0;
  this.hB = 0.0;
  this.hC = 0.0;
  this.hD = 0.0;
  this.hE = 0.0;
  this.hF = 0.0;
  this.hx = m00;
  this.hy = m01;
  this.hz = m02;
  this.hA = m10;
  this.hB = m11;
  this.hC = m12;
  this.hD = m20;
  this.hE = m21;
  this.hF = m22;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat3.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat3;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat3() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat3.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Mat3 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat3, "trivalibs.graphics.math.cpu.Mat3", ({
  e0: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat4(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  this.gD = 0.0;
  this.gE = 0.0;
  this.gF = 0.0;
  this.hG = 0.0;
  this.gG = 0.0;
  this.gH = 0.0;
  this.gI = 0.0;
  this.hH = 0.0;
  this.gJ = 0.0;
  this.gK = 0.0;
  this.gL = 0.0;
  this.hI = 0.0;
  this.hJ = 0.0;
  this.hK = 0.0;
  this.hL = 0.0;
  this.hM = 0.0;
  this.gD = m00;
  this.gE = m01;
  this.gF = m02;
  this.hG = m03;
  this.gG = m10;
  this.gH = m11;
  this.gI = m12;
  this.hH = m13;
  this.gJ = m20;
  this.gK = m21;
  this.gL = m22;
  this.hI = m23;
  this.hJ = m30;
  this.hK = m31;
  this.hL = m32;
  this.hM = m33;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat4.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat4;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat4() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat4.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Mat4 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4, "trivalibs.graphics.math.cpu.Mat4", ({
  e3: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Quat(x, y, z, w) {
  this.hO = 0.0;
  this.hP = 0.0;
  this.hQ = 0.0;
  this.hN = 0.0;
  this.hO = x;
  this.hP = y;
  this.hQ = z;
  this.hN = w;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Quat.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Quat;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Quat() {
}
$h_Ltrivalibs_graphics_math_cpu_Quat.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Quat = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat, "trivalibs.graphics.math.cpu.Quat", ({
  e6: 1
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
$p.lZ = (function(angle) {
  var h = (0.5 * angle);
  return new $c_Ltrivalibs_graphics_math_cpu_Quat((+Math.sin(h)), 0.0, 0.0, (+Math.cos(h)));
});
$p.g8 = (function(angle) {
  var h = (0.5 * angle);
  return new $c_Ltrivalibs_graphics_math_cpu_Quat(0.0, (+Math.sin(h)), 0.0, (+Math.cos(h)));
});
var $d_Ltrivalibs_graphics_math_cpu_Quat$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat$, "trivalibs.graphics.math.cpu.Quat$", ({
  e7: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Quat$;
function $m_Ltrivalibs_graphics_math_cpu_Quat$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Quat$)) {
    $n_Ltrivalibs_graphics_math_cpu_Quat$ = new $c_Ltrivalibs_graphics_math_cpu_Quat$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Quat$;
}
function $f_Ltrivalibs_graphics_math_cpu_QuatImmutableOps__quatMul__O__Ltrivalibs_graphics_math_Vec4Base__O__O($thiz, q, x$2, p) {
  return new $c_Ltrivalibs_graphics_math_cpu_Quat((((((+x$2.aU(q)) * (+x$2.aV(p))) + ((+x$2.aV(q)) * (+x$2.aU(p)))) + ((+x$2.aW(q)) * (+x$2.aX(p)))) - ((+x$2.aX(q)) * (+x$2.aW(p)))), (((((+x$2.aU(q)) * (+x$2.aW(p))) - ((+x$2.aV(q)) * (+x$2.aX(p)))) + ((+x$2.aW(q)) * (+x$2.aU(p)))) + ((+x$2.aX(q)) * (+x$2.aV(p)))), (((((+x$2.aU(q)) * (+x$2.aX(p))) + ((+x$2.aV(q)) * (+x$2.aW(p)))) - ((+x$2.aW(q)) * (+x$2.aV(p)))) + ((+x$2.aX(q)) * (+x$2.aU(p)))), (((((+x$2.aU(q)) * (+x$2.aU(p))) - ((+x$2.aV(q)) * (+x$2.aV(p)))) - ((+x$2.aW(q)) * (+x$2.aW(p)))) - ((+x$2.aX(q)) * (+x$2.aX(p)))));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec2(x, y) {
  this.fa = 0.0;
  this.fb = 0.0;
  this.fa = x;
  this.fb = y;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec2.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec2;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec2() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec2.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec2 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec2, "trivalibs.graphics.math.cpu.Vec2", ({
  eb: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec3(x, y, z) {
  this.r = 0.0;
  this.l = 0.0;
  this.n = 0.0;
  this.r = x;
  this.l = y;
  this.n = z;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec3.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec3;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec3() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec3.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec3 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3, "trivalibs.graphics.math.cpu.Vec3", ({
  ec: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec4(x, y, z, w) {
  this.gN = 0.0;
  this.gO = 0.0;
  this.gP = 0.0;
  this.gM = 0.0;
  this.gN = x;
  this.gO = y;
  this.gP = z;
  this.gM = w;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec4.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec4;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec4() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec4.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec4 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4, "trivalibs.graphics.math.cpu.Vec4", ({
  ef: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$() {
  this.jA = null;
  this.jB = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$.prototype = $p;
$p.mC = (function() {
  if ((!this.jB)) {
    this.jA = new $c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$$anon$21();
    this.jB = true;
  }
  return this.jA;
});
var $d_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$, "trivalibs.graphics.math.cpu.mat3$package$Mat3PaddedBuffer$", ({
  ei: 1
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
  this.jC = null;
  this.jD = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$.prototype = $p;
$p.m5 = (function() {
  if ((!this.jD)) {
    this.jC = new $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18();
    this.jD = true;
  }
  return this.jC;
});
var $d_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$, "trivalibs.graphics.math.cpu.mat4$package$Mat4Buffer$", ({
  el: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$;
function $m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$)) {
    $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$ = new $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$;
}
function $ct_Ltrivalibs_graphics_math_gpu_Expr__T__($thiz, wgsl) {
  $thiz.s = wgsl;
  return $thiz;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_Expr() {
  this.s = null;
}
$p = $c_Ltrivalibs_graphics_math_gpu_Expr.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_Expr;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_Expr() {
}
$h_Ltrivalibs_graphics_math_gpu_Expr.prototype = $p;
$p.j = (function() {
  return this.s;
});
var $d_Ltrivalibs_graphics_math_gpu_Expr = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_Expr, "trivalibs.graphics.math.gpu.Expr", ({
  aS: 1
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
$p.n1 = (function(onFalse, onTrue, cond) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("select(" + onFalse.s) + ", ") + onTrue.s) + ", ") + cond.s) + ")"));
});
$p.lx = (function(cond, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + cond.s) + " || ") + other.s) + ")"));
});
$p.kE = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.s) + " < ") + b.s) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_expr$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_expr$package$, "trivalibs.graphics.math.gpu.expr$package$", ({
  ep: 1
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
  this.jF = null;
  this.jG = false;
  this.jL = null;
  this.jM = false;
  this.jN = null;
  this.jO = false;
  this.jP = null;
  this.jQ = false;
  this.jH = null;
  this.jI = false;
  this.jJ = null;
  this.jK = false;
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$.prototype = $p;
$p.lU = (function(v) {
  var s = ("" + v);
  return (((($f_T__indexOf__I__I(s, 46) >= 0) || ($f_T__indexOf__I__I(s, 69) >= 0)) || ($f_T__indexOf__I__I(s, 101) >= 0)) ? s : (s + ".0"));
});
$p.eJ = (function() {
  if ((!this.jG)) {
    this.jF = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1();
    this.jG = true;
  }
  return this.jF;
});
$p.fq = (function() {
  if ((!this.jM)) {
    this.jL = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$4();
    this.jM = true;
  }
  return this.jL;
});
$p.it = (function() {
  if ((!this.jO)) {
    this.jN = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5();
    this.jO = true;
  }
  return this.jN;
});
$p.m6 = (function() {
  if ((!this.jQ)) {
    this.jP = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6();
    this.jQ = true;
  }
  return this.jP;
});
$p.m4 = (function() {
  if ((!this.jI)) {
    this.jH = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$8();
    this.jI = true;
  }
  return this.jH;
});
$p.kI = (function() {
  if ((!this.jK)) {
    this.jJ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$9();
    this.jK = true;
  }
  return this.jJ;
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$, "trivalibs.graphics.math.gpu.float_expr$package$", ({
  eq: 1
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
$p.lp = (function(x, y, z) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("vec3<f32>(" + x.s) + ", ") + y.s) + ", ") + z.s) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_vec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec3$, "trivalibs.graphics.math.gpu.vec3$", ({
  eC: 1
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
$p.ku = (function(xyz, w) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("vec4<f32>(" + xyz.s) + ", ") + w.s) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_vec4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec4$, "trivalibs.graphics.math.gpu.vec4$", ({
  eD: 1
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
  eE: 1
}));
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
  var $x_1 = $thiz.fG.e;
  var value = (ab.byteLength | 0);
  var buf = $x_1.createBuffer(({
    "size": value,
    "usage": 24
  }));
  $thiz.fG.ab.writeBuffer(buf, 0.0, ab);
  if (($thiz.fc !== null)) {
    var opt$proxy2 = $thiz.fc;
    opt$proxy2.destroy();
  }
  $thiz.fc = buf;
  $thiz.gQ = count;
  $thiz.hS = fmt;
}
function $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_bufferdata_BufferView__V($thiz, verts) {
  var $x_1 = $thiz.fG.e;
  var value = (verts.dv.buffer.byteLength | 0);
  var buf = $x_1.createBuffer(({
    "size": value,
    "usage": 40
  }));
  $thiz.fG.ab.writeBuffer(buf, 0.0, verts.dv.buffer);
  if (($thiz.fH !== null)) {
    var opt$proxy4 = $thiz.fH;
    opt$proxy4.destroy();
  }
  $thiz.fH = buf;
  $thiz.gR = (verts.off | 0);
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Form(painter) {
  this.fG = null;
  this.fH = null;
  this.gR = 0;
  this.fc = null;
  this.gQ = 0;
  this.hS = null;
  this.hT = null;
  this.hR = null;
  this.fG = painter;
  this.fH = null;
  this.gR = 0;
  this.fc = null;
  this.gQ = 0;
  this.hS = "uint16";
  this.hT = "triangle-list";
  this.hR = "ccw";
}
$p = $c_Ltrivalibs_graphics_painter_Form.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Form;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Form() {
}
$h_Ltrivalibs_graphics_painter_Form.prototype = $p;
$p.n3 = (function(geometry, vertices, topology, frontFace) {
  if ((topology !== (void 0))) {
    this.hT = topology;
  }
  if ((frontFace !== (void 0))) {
    this.hR = frontFace;
  }
  if ((geometry !== (void 0))) {
    $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_bufferdata_BufferView__V(this, geometry.jm);
    if ((geometry.hw !== null)) {
      $p_Ltrivalibs_graphics_painter_Form__uploadIndices__sjs_js_typedarray_TypedArray__V(this, geometry.hw);
    }
  }
  if ((vertices !== (void 0))) {
    $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_bufferdata_BufferView__V(this, vertices);
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Form = new $TypeData().i($c_Ltrivalibs_graphics_painter_Form, "trivalibs.graphics.painter.Form", ({
  eF: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter) {
  this.jS = null;
  this.jR = null;
  this.G = null;
  this.jS = shade;
  this.jR = painter;
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
  var inst = new $c_Ltrivalibs_graphics_painter_Instance(this.jS, this.jR);
  this.G.push(inst);
  return (((this.G.length | 0) - 1) | 0);
});
var $d_Ltrivalibs_graphics_painter_InstanceList = new $TypeData().i($c_Ltrivalibs_graphics_painter_InstanceList, "trivalibs.graphics.painter.InstanceList", ({
  eH: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_LayerBindCache(panelId, epoch, valueGroup, panelGroup) {
  this.jU = 0;
  this.jT = 0;
  this.hV = null;
  this.hU = null;
  this.jU = panelId;
  this.jT = epoch;
  this.hV = valueGroup;
  this.hU = panelGroup;
}
$p = $c_Ltrivalibs_graphics_painter_LayerBindCache.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_LayerBindCache;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_LayerBindCache() {
}
$h_Ltrivalibs_graphics_painter_LayerBindCache.prototype = $p;
var $d_Ltrivalibs_graphics_painter_LayerBindCache = new $TypeData().i($c_Ltrivalibs_graphics_painter_LayerBindCache, "trivalibs.graphics.painter.LayerBindCache", ({
  eI: 1
}));
function $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var w = $thiz.nm();
  var h = $thiz.m9();
  panel.lN(w, h);
  var msaa = panel.fh;
  var encoder = $thiz.e.createCommandEncoder();
  var panelFormats = panel.ir();
  var colorAttachments = [];
  var t = 0;
  while ((t < panel.nb())) {
    if ((panel.gZ !== null)) {
      var opt$proxy2 = panel.gZ;
      if (msaa) {
        var _2 = panel.kV(t);
        var TextureViewBundle_this = panel.H[t];
        var _2$1 = TextureViewBundle_this.ad[0];
        var value = opt$proxy2.gN;
        var value$1 = opt$proxy2.gO;
        var value$2 = opt$proxy2.gP;
        var value$3 = opt$proxy2.gM;
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
        var value$4 = opt$proxy2.gN;
        var value$5 = opt$proxy2.gO;
        var value$6 = opt$proxy2.gP;
        var value$7 = opt$proxy2.gM;
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
      var _2$5 = panel.kV(t);
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
  if (panel.fO) {
    var _2$8 = panel.kB();
    passDesc.depthStencilAttachment = ({
      "view": _2$8,
      "depthLoadOp": "clear",
      "depthStoreOp": "store",
      "depthClearValue": 1.0
    });
  }
  var shapePass = encoder.beginRenderPass(passDesc);
  var i = 0;
  while ((i < (panel.h1.length | 0))) {
    $p_Ltrivalibs_graphics_painter_Painter__renderShapeOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shape__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_Panel__V($thiz, shapePass, panel.h1[i], panel.fO, msaa, panelFormats, panel);
    i = ((1 + i) | 0);
  }
  shapePass.end();
  $thiz.ab.submit([encoder.finish()]);
  if (panel.fL) {
    $p_Ltrivalibs_graphics_painter_Painter__resolvePanelDepth__Ltrivalibs_graphics_painter_Panel__V($thiz, panel);
  }
  var curEncoder = null;
  var curPass = null;
  var j = 0;
  while ((j < (panel.aP.length | 0))) {
    var layer = panel.aP[j];
    var needsPingPong = layer.lt();
    if ((layer.kT() >= 0)) {
      if ((curPass !== null)) {
        curPass.end();
        $thiz.ab.submit([curEncoder.finish()]);
        curPass = null;
      }
      var mipDstView = panel.H[0].ad[layer.kT()];
      var mipSrcView = ((layer.mF() >= 0) ? panel.H[0].ad[layer.mF()] : panel.ho());
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
      var _2$10 = panel.mP();
      var _2$11 = [({
        "view": _2$10,
        "loadOp": "load",
        "storeOp": "store"
      })];
      var ppPass = enc$2.beginRenderPass(({
        "colorAttachments": _2$11
      }));
      $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V($thiz, ppPass, layer, false, false, panelFormats, panel.ho(), panel);
      ppPass.end();
      $thiz.ab.submit([enc$2.finish()]);
      panel.n9();
    } else {
      if ((curPass === null)) {
        curEncoder = $thiz.e.createCommandEncoder();
        var $x_1 = curEncoder;
        var _2$12 = panel.ho();
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
  while ((mi < (panel.aP.length | 0))) {
    if ((panel.aP[mi].kT() >= 0)) {
      hasMipTargetLayers = true;
    }
    mi = ((1 + mi) | 0);
  }
  if (((panel.iN() > 1) && (!hasMipTargetLayers))) {
    $p_Ltrivalibs_graphics_painter_Painter__generateMipmaps__Ltrivalibs_graphics_painter_Panel__V($thiz, panel);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__blitSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz) {
  if ((!$thiz.k0)) {
    $thiz.jZ = $thiz.e.createSampler(({
      "magFilter": "nearest",
      "minFilter": "nearest"
    }));
    $thiz.k0 = true;
  }
  return $thiz.jZ;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz) {
  if ((!$thiz.jW)) {
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
    $thiz.jV = $x_1;
    $thiz.jW = true;
  }
  return $thiz.jV;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitPipeline__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz) {
  if ((!$thiz.jY)) {
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
    var f$proxy4 = $thiz.fe;
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
    $thiz.jX = $x_2;
    $thiz.jY = true;
  }
  return $thiz.jX;
}
function $p_Ltrivalibs_graphics_painter_Painter__depthResolveBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz) {
  if ((!$thiz.k3)) {
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
    $thiz.k2 = $x_1;
    $thiz.k3 = true;
  }
  return $thiz.k2;
}
function $p_Ltrivalibs_graphics_painter_Painter__depthResolvePipeline__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz) {
  if ((!$thiz.k5)) {
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
    $thiz.k4 = $x_2;
    $thiz.k5 = true;
  }
  return $thiz.k4;
}
function $p_Ltrivalibs_graphics_painter_Painter__resolvePanelDepth__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var encoder = $thiz.e.createCommandEncoder();
  var _2 = [];
  var _2$1 = panel.mZ();
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
  var _2$4 = panel.kB();
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
  if ((!$thiz.k7)) {
    $thiz.k6 = $thiz.e.createSampler(({
      "magFilter": "linear",
      "minFilter": "linear"
    }));
    $thiz.k7 = true;
  }
  return $thiz.k6;
}
function $p_Ltrivalibs_graphics_painter_Painter__getMipBlitPipeline__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, format) {
  if ((!(!(!(!$thiz.gT.hasOwnProperty(format)))))) {
    return $thiz.gT[format];
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
    $thiz.gT[format] = p;
    return p;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__generateMipmaps__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var mipCount = panel.iN();
  if ((mipCount <= 1)) {
    return (void 0);
  }
  var fmt = (((panel.eE.length | 0) > 0) ? panel.eE[0] : $thiz.fe);
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
  var dict = panel.h0;
  var keys = Object.keys(dict);
  var i = 0;
  while ((i < (keys.length | 0))) {
    var name = keys[i];
    var value = dict[name];
    if ((!(!(!(!shade.u.hasOwnProperty(name)))))) {
      var idx = (shade.u[name] | 0);
      if (((idx >= (workBindings.length | 0)) || (workBindings[idx] === null))) {
        while (((workBindings.length | 0) <= idx)) {
          workBindings.push(null);
        }
        workBindings[idx] = value;
      }
    } else if ((!(!(!(!shade.hY.hasOwnProperty(name)))))) {
      var idx$2 = (shade.hY[name] | 0);
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
  while ((j < (inst.gS.length | 0))) {
    if ((inst.gS[j] !== null)) {
      while (((workPanelBindings.length | 0) <= j)) {
        workPanelBindings.push(null);
      }
      workPanelBindings[j] = inst.gS[j];
    }
    j = ((1 + j) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel) {
  return ((panel !== null) && ((Object.keys(panel.h0).length | 0) > 0));
}
function $p_Ltrivalibs_graphics_painter_Painter__buildValueBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, shade, bindings) {
  if ((((bindings.length | 0) > 0) && (shade.hZ !== null))) {
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
    var _2 = shade.hZ;
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
  if ((shade.hX !== null)) {
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
        var view = ((!(!pb.depth)) ? pb.panel.lE() : (((pb.mipLevel | 0) < 0) ? pb.panel.H[(pb.index | 0)].ka : pb.panel.H[(pb.index | 0)].ad[(pb.mipLevel | 0)]));
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
      var _2 = shade.hX;
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
  var fmts = ((formats !== null) ? formats : [$thiz.fe]);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, shape.ac, shape.i1, fmts, depthTest, multisample, shape.ai.hT, shape.i2, shape.ai.hR);
  pass.setPipeline(pipeline);
  pass.setVertexBuffer(0, shape.ai.fH);
  var opt$proxy9 = shape.ai.fc;
  var hasIndex = (opt$proxy9 !== null);
  if (hasIndex) {
    pass.setIndexBuffer(shape.ai.fc, shape.ai.hS);
  }
  var instanceCount = shape.P.D();
  var hasPanelBinds = $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel);
  if ((instanceCount === 0)) {
    if (hasPanelBinds) {
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, shape.S, shape.h5);
      $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shape.ac, $thiz.a4, $thiz.O);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.ac, $thiz.a4);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.ac, $thiz.O, null);
    } else {
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.ac, shape.S);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.ac, shape.h5, null);
    }
    if (hasIndex) {
      pass.drawIndexed(shape.ai.gQ);
    } else {
      pass.draw(shape.ai.gR);
    }
  } else {
    var i = 0;
    while ((i < instanceCount)) {
      var inst = shape.P.G[i];
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, shape.S, shape.h5);
      if (hasPanelBinds) {
        $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shape.ac, $thiz.a4, $thiz.O);
      }
      $p_Ltrivalibs_graphics_painter_Painter__applyInstanceBindings__Ltrivalibs_graphics_painter_Instance__sjs_js_Array__sjs_js_Array__V($thiz, inst, $thiz.a4, $thiz.O);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.ac, $thiz.a4);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.ac, $thiz.O, null);
      if (hasIndex) {
        pass.drawIndexed(shape.ai.gQ);
      } else {
        pass.draw(shape.ai.gR);
      }
      i = ((1 + i) | 0);
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V($thiz, pass, layer, depthTest, multisample, formats, srcView, panel) {
  var fmts = ((formats !== null) ? formats : [$thiz.fe]);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, layer.aT(), layer.np(), fmts, depthTest, multisample, "triangle-list", "none", "ccw");
  pass.setPipeline(pipeline);
  var instanceCount = layer.me().D();
  var hasPanelBinds = $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel);
  if ((instanceCount === 0)) {
    if (hasPanelBinds) {
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, layer.kw(), layer.kW());
      $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, layer.aT(), $thiz.a4, $thiz.O);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, layer.aT(), $thiz.a4);
      var effectiveSrcView = (((($thiz.O.length | 0) > 0) && ($thiz.O[0] !== null)) ? null : srcView);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer.aT(), $thiz.O, effectiveSrcView);
    } else {
      var c = layer.nq();
      if (((((c !== null) && (panel !== null)) && (c.jU === panel.hW)) && (c.jT === panel.eD))) {
        if ((c.hV !== null)) {
          pass.setBindGroup(0, c.hV);
        }
        if ((c.hU !== null)) {
          pass.setBindGroup(1, c.hU);
        }
      } else {
        var vg = $p_Ltrivalibs_graphics_painter_Painter__buildValueBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, layer.aT(), layer.kw());
        var pg = $p_Ltrivalibs_graphics_painter_Painter__buildPanelBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, layer.aT(), layer.kW(), srcView);
        if ((vg !== null)) {
          pass.setBindGroup(0, vg);
        }
        if ((pg !== null)) {
          pass.setBindGroup(1, pg);
        }
        layer.nr(((panel !== null) ? new $c_Ltrivalibs_graphics_painter_LayerBindCache(panel.hW, panel.eD, vg, pg) : null));
      }
    }
    pass.draw(3);
  } else {
    var i = 0;
    while ((i < instanceCount)) {
      var inst = layer.me().G[i];
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, layer.kw(), layer.kW());
      if (hasPanelBinds) {
        $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, layer.aT(), $thiz.a4, $thiz.O);
      }
      $p_Ltrivalibs_graphics_painter_Painter__applyInstanceBindings__Ltrivalibs_graphics_painter_Instance__sjs_js_Array__sjs_js_Array__V($thiz, inst, $thiz.a4, $thiz.O);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, layer.aT(), $thiz.a4);
      var effectiveSrcView$2 = (((($thiz.O.length | 0) > 0) && ($thiz.O[0] !== null)) ? null : srcView);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer.aT(), $thiz.O, effectiveSrcView$2);
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
  var key = ((((((((((((((shade.k8 + "|") + $p_Ltrivalibs_graphics_painter_Painter__blendKeyStr__Ltrivalibs_graphics_painter_BlendState__T($thiz, blendState)) + "|") + formats.join(",")) + "|") + depthTest) + "|") + multisample) + "|") + topology) + "|") + cullMode) + "|") + frontFace);
  if ((!(!(!(!$thiz.gV.hasOwnProperty(key)))))) {
    return $thiz.gV[key];
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
    if ((shade.i0 !== null)) {
      var _2 = shade.h4;
      var _2$1 = [shade.i0];
      var vertexDescriptor = ({
        "module": _2,
        "entryPoint": "vs_main",
        "buffers": _2$1
      });
    } else {
      var _2$2 = shade.h4;
      var vertexDescriptor = ({
        "module": _2$2,
        "entryPoint": "vs_main"
      });
    }
    var _2$3 = shade.k9;
    var _2$4 = shade.h4;
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
    var p = $thiz.e.createRenderPipeline(desc);
    $thiz.gV[key] = p;
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
  this.fd = null;
  this.k1 = null;
  this.fe = null;
  this.gV = null;
  this.gU = 0;
  this.gW = null;
  this.jZ = null;
  this.k0 = false;
  this.jV = null;
  this.jW = false;
  this.jX = null;
  this.jY = false;
  this.k2 = null;
  this.k3 = false;
  this.k4 = null;
  this.k5 = false;
  this.k6 = null;
  this.k7 = false;
  this.gT = null;
  this.a4 = null;
  this.O = null;
  this.e = device;
  this.ab = queue;
  this.fd = canvas;
  this.k1 = context;
  this.fe = preferredFormat;
  this.gV = ({});
  this.gU = 0;
  this.gW = [];
  this.gT = ({});
  this.a4 = [];
  this.O = [];
}
$p = $c_Ltrivalibs_graphics_painter_Painter.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Painter;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Painter() {
}
$h_Ltrivalibs_graphics_painter_Painter.prototype = $p;
$p.mJ = (function(cb) {
  this.gW.push(cb);
  cb.ks((this.fd.width | 0), (this.fd.height | 0));
});
$p.lS = (function(w, h) {
  var k = 0;
  while ((k < (this.gW.length | 0))) {
    this.gW[k].ks(w, h);
    k = ((1 + k) | 0);
  }
});
$p.nm = (function() {
  return (this.fd.width | 0);
});
$p.m9 = (function() {
  return (this.fd.height | 0);
});
$p.lV = (function(geometry, vertices, topology, frontFace) {
  return new $c_Ltrivalibs_graphics_painter_Form(this).n3(geometry, vertices, topology, frontFace);
});
$p.hm = (function(form, shade, cullMode, blendState) {
  return new $c_Ltrivalibs_graphics_painter_Shape(this, form, shade).n4(cullMode, blendState);
});
$p.mM = (function(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers) {
  return new $c_Ltrivalibs_graphics_painter_Panel(this).n2(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers);
});
$p.n5 = (function(panel) {
  var encoder = this.e.createCommandEncoder();
  var swapChainView = this.k1.getCurrentTexture().createView();
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
  var _2$2 = panel.ho();
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
  eJ: 1
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
$p.md = (function(canvas) {
  var maybeGpu = $m_Ltrivalibs_graphics_painter_WebGPU$().m2();
  if ((maybeGpu === (void 0))) {
    return Promise.reject(Error("WebGPU is not supported"));
  } else {
    var promise$proxy1 = maybeGpu.requestAdapter();
    var promise$proxy3 = promise$proxy1.then(((value$2) => {
      if ((value$2 === null)) {
        throw new $c_sjs_js_JavaScriptException(Error("Failed to get WebGPU adapter")).aO;
      } else {
        return value$2;
      }
    }));
    var f$proxy11 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((adapter$2) => {
      var promise$proxy2 = adapter$2.requestDevice();
      var f$proxy10 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((device$2) => {
        var queue = device$2.queue;
        var context = $m_Ltrivalibs_graphics_painter_WebGPU$().m1(canvas);
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
            painter.lS(rw, rh);
          }
        }));
        observer.observe(canvas);
        return painter;
      }));
      return promise$proxy2.then($m_sjs_js_Any$().g7(f$proxy10));
    }));
    return promise$proxy3.then($m_sjs_js_Any$().g7(f$proxy11));
  }
});
$p.mc = (function(canvas, setup) {
  var promise$proxy4 = this.md(canvas);
  return promise$proxy4.then($m_sjs_js_Any$().g7(setup));
});
var $d_Ltrivalibs_graphics_painter_Painter$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_Painter$, "trivalibs.graphics.painter.Painter$", ({
  eK: 1
}));
var $n_Ltrivalibs_graphics_painter_Painter$;
function $m_Ltrivalibs_graphics_painter_Painter$() {
  if ((!$n_Ltrivalibs_graphics_painter_Painter$)) {
    $n_Ltrivalibs_graphics_painter_Painter$ = new $c_Ltrivalibs_graphics_painter_Painter$();
  }
  return $n_Ltrivalibs_graphics_painter_Painter$;
}
function $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V($thiz) {
  if (($thiz.fJ !== null)) {
    var opt$proxy4 = $thiz.fJ;
    opt$proxy4.destroy();
  }
  if (($thiz.fM !== null)) {
    var opt$proxy6 = $thiz.fM;
    opt$proxy6.destroy();
  }
  var depthUsage = ($thiz.fI ? 20 : 16);
  var $x_1 = $thiz.eF.e;
  var value = $thiz.fg;
  var value$1 = $thiz.ff;
  var _2 = ({
    "width": value,
    "height": value$1
  });
  var _2$1 = ($thiz.fh ? 4 : 1);
  var depthTex = $x_1.createTexture(({
    "size": _2,
    "format": "depth24plus",
    "usage": depthUsage,
    "sampleCount": _2$1
  }));
  $thiz.fJ = depthTex;
  $thiz.gX = depthTex.createView();
  if (($thiz.fI && $thiz.fh)) {
    var $x_2 = $thiz.eF.e;
    var value$2 = $thiz.fg;
    var value$3 = $thiz.ff;
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
    $thiz.fM = resTex;
    $thiz.fN = resTex.createView();
    $thiz.fL = true;
  } else {
    $thiz.fM = null;
    $thiz.fN = null;
    $thiz.fL = false;
  }
}
function $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z($thiz) {
  var i = 0;
  while ((i < ($thiz.aP.length | 0))) {
    if ($thiz.aP[i].lt()) {
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
  this.eF = null;
  this.h3 = 0;
  this.h2 = 0;
  this.gZ = null;
  this.fO = false;
  this.fh = false;
  this.fP = 0;
  this.eE = null;
  this.h1 = null;
  this.aP = null;
  this.h0 = null;
  this.hW = 0;
  this.eD = 0;
  this.am = null;
  this.H = null;
  this.fJ = null;
  this.gX = null;
  this.fI = false;
  this.fM = null;
  this.fN = null;
  this.fL = false;
  this.fK = null;
  this.gY = null;
  this.fg = 0;
  this.ff = 0;
  this.eF = painter;
  this.h3 = 0;
  this.h2 = 0;
  this.gZ = null;
  this.fO = false;
  this.fh = false;
  this.fP = 1;
  this.eE = [];
  this.h1 = [];
  this.aP = [];
  this.h0 = ({});
  $m_Ltrivalibs_graphics_painter_panel$package$().h6 = ((1 + $m_Ltrivalibs_graphics_painter_panel$package$().h6) | 0);
  this.hW = $m_Ltrivalibs_graphics_painter_panel$package$().h6;
  this.eD = 0;
  this.am = [];
  this.H = [];
  this.fJ = null;
  this.gX = null;
  this.fI = false;
  this.fM = null;
  this.fN = null;
  this.fL = false;
  this.fK = [];
  this.gY = [];
  this.fg = 0;
  this.ff = 0;
}
$p = $c_Ltrivalibs_graphics_painter_Panel.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Panel;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Panel() {
}
$h_Ltrivalibs_graphics_painter_Panel.prototype = $p;
$p.iN = (function() {
  if ((this.fP === 0)) {
    var a = this.fg;
    var b = this.ff;
    var maxDim = ((a > b) ? a : b);
    if ((maxDim <= 0)) {
      return 1;
    } else {
      var a$1 = maxDim;
      return ((1 + $doubleToInt(((+Math.log(a$1)) / (+Math.log(2.0))))) | 0);
    }
  } else {
    return this.fP;
  }
});
$p.ir = (function() {
  return (((this.eE.length | 0) === 0) ? [this.eF.fe] : this.eE);
});
$p.nb = (function() {
  return (this.ir().length | 0);
});
$p.ho = (function() {
  var TextureViewBundle_this = this.H[0];
  return TextureViewBundle_this.ad[0];
});
$p.mP = (function() {
  var TextureViewBundle_this = this.H[1];
  return TextureViewBundle_this.ad[0];
});
$p.kB = (function() {
  return this.gX;
});
$p.mZ = (function() {
  return this.fN;
});
$p.kV = (function(index) {
  return this.gY[index];
});
$p.n9 = (function() {
  var t = this.am[0];
  this.am[0] = this.am[1];
  this.am[1] = t;
  var sv = this.H[0];
  this.H[0] = this.H[1];
  this.H[1] = sv;
  this.eD = ((1 + this.eD) | 0);
});
$p.lE = (function() {
  if (((!this.fI) && (this.fJ !== null))) {
    this.fI = true;
    $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V(this);
  }
  return (this.fL ? this.fN : this.gX);
});
$p.n2 = (function(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers) {
  if ((width !== (void 0))) {
    var v = (width | 0);
    this.h3 = v;
  }
  if ((height !== (void 0))) {
    var v$1 = (height | 0);
    this.h2 = v$1;
  }
  if ((clearColor !== (void 0))) {
    this.gZ = ((clearColor === null) ? null : new $c_Ltrivalibs_graphics_math_cpu_Vec4(clearColor.gN, clearColor.gO, clearColor.gP, clearColor.gM));
  }
  if ((depthTest !== (void 0))) {
    var v$2 = (!(!depthTest));
    this.fO = v$2;
  }
  if ((multisample !== (void 0))) {
    var v$3 = (!(!multisample));
    this.fh = v$3;
  }
  if ((mips !== (void 0))) {
    if ((!(!mips))) {
      this.fP = 0;
    }
  }
  if ((mipLevels !== (void 0))) {
    var v$5 = (mipLevels | 0);
    if ((v$5 > 0)) {
      this.fP = v$5;
    }
  }
  var x$1 = ((formats === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy1$1__O__O(this, format) : formats);
  if ((x$1 !== (void 0))) {
    this.eE = x$1;
  }
  var x$2 = ((shapes === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy2$1__O__O(this, shape) : shapes);
  if ((x$2 !== (void 0))) {
    this.h1 = x$2;
  }
  var x$3 = ((layers === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy3$1__O__O(this, layer) : layers);
  if ((x$3 !== (void 0))) {
    this.aP = x$3;
  }
  if ((((this.eE.length | 0) > 1) && $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z(this))) {
    throw new $c_sjs_js_JavaScriptException(Error("Panel: MRT (multiple formats) cannot host auto-pong layers. Chain a single-format panel for post-processing instead.")).aO;
  }
  return this;
});
$p.lN = (function(canvasW, canvasH) {
  var targetW = ((this.h3 === 0) ? canvasW : this.h3);
  var targetH = ((this.h2 === 0) ? canvasH : this.h2);
  if (((targetW !== this.fg) || (targetH !== this.ff))) {
    var d = 0;
    while ((d < (this.am.length | 0))) {
      this.am[d].destroy();
      d = ((1 + d) | 0);
    }
    d = 0;
    while ((d < (this.fK.length | 0))) {
      this.fK[d].destroy();
      d = ((1 + d) | 0);
    }
    this.fg = targetW;
    this.ff = targetH;
    var mipCount = this.iN();
    var fmts = this.ir();
    var hasPong = $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z(this);
    this.am = [];
    this.H = [];
    this.fK = [];
    this.gY = [];
    var i = 0;
    while ((i < (fmts.length | 0))) {
      var fmt = fmts[i];
      var $x_1 = this.eF.e;
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
      this.am.push(tex);
      this.H.push($p_Ltrivalibs_graphics_painter_Panel__buildViews__Ltrivalibs_graphics_painter_GPUTexture__I__Ltrivalibs_graphics_painter_TextureViewBundle(this, tex, mipCount));
      if (this.fh) {
        var $x_2 = this.eF.e;
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
        this.fK.push(msaaTex);
        this.gY.push(msaaTex.createView());
      }
      i = ((1 + i) | 0);
    }
    if (hasPong) {
      var $x_3 = this.eF.e;
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
      this.am.push(pongTex);
      this.H.push($p_Ltrivalibs_graphics_painter_Panel__buildViews__Ltrivalibs_graphics_painter_GPUTexture__I__Ltrivalibs_graphics_painter_TextureViewBundle(this, pongTex, mipCount));
    }
    if (this.fO) {
      $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V(this);
    }
    this.eD = ((1 + this.eD) | 0);
  }
});
var $d_Ltrivalibs_graphics_painter_Panel = new $TypeData().i($c_Ltrivalibs_graphics_painter_Panel, "trivalibs.graphics.painter.Panel", ({
  eL: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Shade(id, shaderModule, vertexBufferLayout, valueBindGroupLayout, panelBindGroupLayout, pipelineLayout, isLayer, uniformIndices, panelIndices) {
  this.k8 = 0;
  this.h4 = null;
  this.i0 = null;
  this.hZ = null;
  this.hX = null;
  this.k9 = null;
  this.u = null;
  this.hY = null;
  this.k8 = id;
  this.h4 = shaderModule;
  this.i0 = vertexBufferLayout;
  this.hZ = valueBindGroupLayout;
  this.hX = panelBindGroupLayout;
  this.k9 = pipelineLayout;
  this.u = uniformIndices;
  this.hY = panelIndices;
}
$p = $c_Ltrivalibs_graphics_painter_Shade.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Shade;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Shade() {
}
$h_Ltrivalibs_graphics_painter_Shade.prototype = $p;
var $d_Ltrivalibs_graphics_painter_Shade = new $TypeData().i($c_Ltrivalibs_graphics_painter_Shade, "trivalibs.graphics.painter.Shade", ({
  eM: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_TextureViewBundle(perMip, sampling) {
  this.ad = null;
  this.ka = null;
  this.ad = perMip;
  this.ka = sampling;
}
$p = $c_Ltrivalibs_graphics_painter_TextureViewBundle.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_TextureViewBundle;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_TextureViewBundle() {
}
$h_Ltrivalibs_graphics_painter_TextureViewBundle.prototype = $p;
var $d_Ltrivalibs_graphics_painter_TextureViewBundle = new $TypeData().i($c_Ltrivalibs_graphics_painter_TextureViewBundle, "trivalibs.graphics.painter.TextureViewBundle", ({
  eO: 1
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
$p.m2 = (function() {
  return window.navigator.gpu;
});
$p.m1 = (function(canvas) {
  return canvas.getContext("webgpu");
});
var $d_Ltrivalibs_graphics_painter_WebGPU$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_WebGPU$, "trivalibs.graphics.painter.WebGPU$", ({
  eP: 1
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
  this.h6 = 0;
  this.h6 = 0;
}
$p = $c_Ltrivalibs_graphics_painter_panel$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_panel$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_panel$package$() {
}
$h_Ltrivalibs_graphics_painter_panel$package$.prototype = $p;
var $d_Ltrivalibs_graphics_painter_panel$package$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_panel$package$, "trivalibs.graphics.painter.panel$package$", ({
  eQ: 1
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
  this.kb = null;
  this.Q = null;
  this.i4 = 0.0;
  this.kc = 0.0;
  this.kb = cam;
  this.Q = in$1;
  this.i4 = sensitivity;
  this.kc = speed;
}
$p = $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController() {
}
$h_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController.prototype = $p;
$p.gt = (function(tpf) {
  var dist = ((this.kc * tpf) / 1000.0);
  var forward = 0.0;
  if (((this.Q.V.ak("KeyW") || this.Q.V.ak("ArrowUp")) || (this.Q.ih.eH && (this.Q.V.kX() === 1)))) {
    forward = (forward + dist);
  }
  if ((((this.Q.V.ak("KeyS") || this.Q.V.ak("ArrowDown")) || this.Q.V.mh(2)) || (this.Q.V.kX() >= 2))) {
    forward = (forward - dist);
  }
  var left = 0.0;
  if ((this.Q.V.ak("KeyA") || this.Q.V.ak("ArrowLeft"))) {
    left = (left + dist);
  }
  if ((this.Q.V.ak("KeyD") || this.Q.V.ak("ArrowRight"))) {
    left = (left - dist);
  }
  var up = 0.0;
  if (this.Q.V.ak("Space")) {
    up = (up + dist);
  }
  if ((this.Q.V.ak("ShiftLeft") || this.Q.V.ak("ShiftRight"))) {
    up = (up - dist);
  }
  var drag = this.Q.ig.lD();
  var deltaH = (((-(+drag.af)) * this.i4) / 1000.0);
  var deltaV = (((-(+drag.a8)) * this.i4) / 1000.0);
  this.kb.mG(forward, left, up, deltaH, deltaV);
});
var $d_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController = new $TypeData().i($c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController, "trivalibs.graphics.scene.BasicFirstPersonCameraController", ({
  eR: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_scene_PerspectiveCamera(fov, aspect, near, far, rotH, rotV, pos, proj) {
  this.fj = 0.0;
  this.fQ = 0.0;
  this.fk = 0.0;
  this.fi = 0.0;
  this.a5 = 0.0;
  this.aE = 0.0;
  this.T = null;
  this.i5 = null;
  this.fj = fov;
  this.fQ = aspect;
  this.fk = near;
  this.fi = far;
  this.a5 = rotH;
  this.aE = rotV;
  this.T = pos;
  this.i5 = proj;
}
$p = $c_Ltrivalibs_graphics_scene_PerspectiveCamera.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_PerspectiveCamera;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_PerspectiveCamera() {
}
$h_Ltrivalibs_graphics_scene_PerspectiveCamera.prototype = $p;
$p.iP = (function(fov, aspect, near, far, rotH, rotV, pos) {
  var needsProj = ((((fov !== this.fj) || (aspect !== this.fQ)) || (near !== this.fk)) || (far !== this.fi));
  this.fj = fov;
  this.fQ = aspect;
  this.fk = near;
  this.fi = far;
  if ((rotH !== this.a5)) {
    this.a5 = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().iT(rotH);
  }
  if ((rotV !== this.aE)) {
    this.aE = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().iS(rotV);
  }
  this.T = pos;
  if (needsProj) {
    this.i5 = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($m_Ltrivalibs_graphics_math_cpu_Mat4$(), fov, aspect, near, far);
  }
});
$p.mG = (function(forward, left, up, deltaH, deltaV) {
  if ((deltaH !== 0.0)) {
    this.a5 = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().iT((this.a5 + deltaH));
  }
  if ((deltaV !== 0.0)) {
    this.aE = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().iS((this.aE + deltaV));
  }
  if ((up !== 0.0)) {
    this.T = new $c_Ltrivalibs_graphics_math_cpu_Vec3(this.T.r, (this.T.l + up), this.T.n);
  }
  if ((forward !== 0.0)) {
    var $x_4 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().p();
    var $x_3 = this.T;
    var $x_2 = $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$();
    var $x_1 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().p();
    var p$proxy1 = this.a5;
    var x$1 = (-(+Math.sin(p$proxy1)));
    var p$proxy2 = this.a5;
    this.T = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($x_4, $x_3, $x_2, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($x_1, new $c_Ltrivalibs_graphics_math_cpu_Vec3(x$1, 0.0, (-(+Math.cos(p$proxy2)))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), forward));
  }
  if ((left !== 0.0)) {
    var $x_9 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().p();
    var $x_8 = this.T;
    var $x_7 = $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$();
    var $x_6 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().p();
    var p$proxy3 = this.a5;
    var $x_5 = Math.cos(p$proxy3);
    var p$proxy4 = this.a5;
    this.T = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($x_9, $x_8, $x_7, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($x_6, new $c_Ltrivalibs_graphics_math_cpu_Vec3((-(+$x_5)), 0.0, (+Math.sin(p$proxy4))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), left));
  }
});
$p.nf = (function() {
  return new $c_Ltrivalibs_graphics_scene_Transform(this.T, $f_Ltrivalibs_graphics_math_cpu_QuatImmutableOps__quatMul__O__Ltrivalibs_graphics_math_Vec4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$(), $m_Ltrivalibs_graphics_math_cpu_Quat$().g8(this.a5), $m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$(), $m_Ltrivalibs_graphics_math_cpu_Quat$().lZ(this.aE)), new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0));
});
$p.nl = (function() {
  var $x_1 = $m_Ltrivalibs_graphics_math_cpu_Mat4$().kJ();
  var t = this.nf();
  return $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($x_1, $m_Ltrivalibs_graphics_math_cpu_Mat4$().eI(t.aS, t.aQ, t.aR), $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
});
var $d_Ltrivalibs_graphics_scene_PerspectiveCamera = new $TypeData().i($c_Ltrivalibs_graphics_scene_PerspectiveCamera, "trivalibs.graphics.scene.PerspectiveCamera", ({
  eS: 1
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
$p.iT = (function(a) {
  var r = (a % 6.283185307179586);
  return ((r < 0.0) ? (r + 6.283185307179586) : r);
});
$p.iS = (function(a) {
  return ((a < (-1.5707963267948966)) ? (-1.5707963267948966) : ((a > 1.5707963267948966) ? 1.5707963267948966 : a));
});
$p.lk = (function(fov, aspect, near, far, rotH, rotV, pos) {
  var proj = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($m_Ltrivalibs_graphics_math_cpu_Mat4$(), fov, aspect, near, far);
  return new $c_Ltrivalibs_graphics_scene_PerspectiveCamera(fov, aspect, near, far, this.iT(rotH), this.iS(rotV), pos, proj);
});
var $d_Ltrivalibs_graphics_scene_PerspectiveCamera$ = new $TypeData().i($c_Ltrivalibs_graphics_scene_PerspectiveCamera$, "trivalibs.graphics.scene.PerspectiveCamera$", ({
  eT: 1
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
  this.aS = null;
  this.aQ = null;
  this.aR = null;
  this.aS = translation;
  this.aQ = rotation;
  this.aR = scale;
}
$p = $c_Ltrivalibs_graphics_scene_Transform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_Transform;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_Transform() {
}
$h_Ltrivalibs_graphics_scene_Transform.prototype = $p;
var $d_Ltrivalibs_graphics_scene_Transform = new $TypeData().i($c_Ltrivalibs_graphics_scene_Transform, "trivalibs.graphics.scene.Transform", ({
  eU: 1
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
  return $f_Ltrivalibs_graphics_math_Mat3ImmutableOps__transpose__O__Ltrivalibs_graphics_math_Mat3Base__O($m_Ltrivalibs_graphics_math_cpu_Mat3$().kH(), $f_Ltrivalibs_graphics_math_Mat3ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat3Base__O($m_Ltrivalibs_graphics_math_cpu_Mat3$().kH(), $m_Ltrivalibs_graphics_math_cpu_Mat3$().m0(m), $m_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$()), $m_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$());
});
var $d_Ltrivalibs_graphics_scene_scene\uff3fobject$package$ = new $TypeData().i($c_Ltrivalibs_graphics_scene_scene\uff3fobject$package$, "trivalibs.graphics.scene.scene_object$package$", ({
  eV: 1
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
    s = ((s + ((((", @builtin(" + b.ay) + ") ") + b.aH) + ": ")) + b.az);
    i = ((1 + i) | 0);
  }
  return s;
}
function $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($thiz, structName, locNames, locTypes, builtins) {
  var array$1 = $m_sjs_js_ArrayOps$().l7($m_sjs_js_ArrayOps$().l6(locNames, new $c_sjs_js_WrappedArray(locTypes)));
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
        var name$1 = x0$1.aH;
        var builtin = x0$1.ay;
        var typ$1 = x0$1.az;
        var $x_3 = (((((("  @builtin(" + builtin) + ") ") + name$1) + ": ") + typ$1) + ",");
        break matchResult4;
      }
      throw new $c_s_MatchError(x0$1);
    }
    res$1[$x_4] = $x_3;
    i$1 = ((1 + i$1) | 0);
  }
  var allFields = $m_sjs_js_ArrayOpsCommon$().o(res, res$1);
  return (((allFields.length | 0) === 0) ? "" : (((("struct " + structName) + " {\n") + allFields.join("\n")) + "\n}"));
}
function $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($thiz, groupIdx, names, types) {
  var array$1 = $m_sjs_js_ArrayOps$().l7($m_sjs_js_ArrayOps$().l6(names, new $c_sjs_js_WrappedArray(types)));
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
  eX: 1
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
  this.fV = null;
  this.fV = target;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_AssignTarget.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_AssignTarget;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_AssignTarget() {
}
$h_Ltrivalibs_graphics_shader_dsl_AssignTarget.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_AssignTarget = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_AssignTarget, "trivalibs.graphics.shader.dsl.AssignTarget", ({
  eY: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_FnRegistry() {
  this.i6 = null;
  this.i6 = [];
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FnRegistry() {
}
$h_Ltrivalibs_graphics_shader_dsl_FnRegistry.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_FnRegistry = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FnRegistry, "trivalibs.graphics.shader.dsl.FnRegistry", ({
  eZ: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$() {
  this.eG = null;
  this.eG = null;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FnRegistry$() {
}
$h_Ltrivalibs_graphics_shader_dsl_FnRegistry$.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_FnRegistry$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FnRegistry$, "trivalibs.graphics.shader.dsl.FnRegistry$", ({
  f0: 1
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
  this.fW = null;
  this.kd = null;
  this.fW = in$1;
  this.kd = out;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FragmentCtx() {
}
$h_Ltrivalibs_graphics_shader_dsl_FragmentCtx.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_FragmentCtx = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FragmentCtx, "trivalibs.graphics.shader.dsl.FragmentCtx", ({
  f1: 1
}));
function $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, data) {
  if ((!(!(!(!(!$thiz.i7.hasOwnProperty(data.name))))))) {
    var dict = $thiz.i7;
    var key = data.name;
    dict[key] = true;
    var array = data.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, array[i]);
      i = ((1 + i) | 0);
    }
    $thiz.i8.push(data.src);
  }
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_Program() {
  this.ia = null;
  this.i9 = null;
  this.i8 = null;
  this.i7 = null;
  this.ia = "";
  this.i9 = "";
  this.i8 = [];
  this.i7 = ({});
}
$p = $c_Ltrivalibs_graphics_shader_dsl_Program.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_Program;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_Program() {
}
$h_Ltrivalibs_graphics_shader_dsl_Program.prototype = $p;
$p.ma = (function() {
  return this.i8.join("\n\n");
});
var $d_Ltrivalibs_graphics_shader_dsl_Program = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_Program, "trivalibs.graphics.shader.dsl.Program", ({
  f2: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(in$1, out, bindings, locals, textures) {
  this.h8 = null;
  this.h9 = null;
  this.h7 = null;
  this.h8 = in$1;
  this.h9 = out;
  this.h7 = bindings;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_VertexCtx.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_VertexCtx;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_VertexCtx() {
}
$h_Ltrivalibs_graphics_shader_dsl_VertexCtx.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_VertexCtx = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_VertexCtx, "trivalibs.graphics.shader.dsl.VertexCtx", ({
  f7: 1
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
$p.kA = (function(device, bindGroupLayouts) {
  return device.createPipelineLayout(({
    "bindGroupLayouts": bindGroupLayouts
  }));
});
var $d_Ltrivalibs_graphics_shader_layouts$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_layouts$, "trivalibs.graphics.shader.layouts$", ({
  f9: 1
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
  this.kg = null;
  this.id = null;
  this.fX = 0;
  this.fY = 0.0;
  this.ha = 0.0;
  this.hb = 0.0;
  this.ie = false;
  this.kg = frame;
  this.id = onFpsCallback;
  this.fX = 0;
  this.fY = 0.0;
  this.ha = 0.0;
  this.hb = (-1.0);
  this.ie = false;
}
$p = $c_Ltrivalibs_utils_animation_Animator.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_animation_Animator;
/** @constructor */
function $h_Ltrivalibs_utils_animation_Animator() {
}
$h_Ltrivalibs_utils_animation_Animator.prototype = $p;
$p.kY = (function(time) {
  this.fX = ((1 + this.fX) | 0);
  if ((this.fY === 0.0)) {
    this.fY = time;
    this.ha = time;
  }
  var fpsElapsed = (time - this.fY);
  if ((fpsElapsed >= 1000.0)) {
    var fps = ((1000.0 * this.fX) / fpsElapsed);
    if (((time - this.ha) >= 1000.0)) {
      var args$proxy1 = $m_sr_ScalaRunTime$().l3(new ($d_sjs_js_Any.r().C)([(fps.toFixed(1) + " FPS")]));
      console.log(...$m_sjsr_Compat$().l1(args$proxy1));
      this.ha = time;
      if ((this.id !== null)) {
        (0, this.id)(fps);
      }
    }
    this.fX = 0;
    this.fY = time;
  }
  var delta = ((this.hb < 0.0) ? 0.0 : (time - this.hb));
  this.hb = time;
  (0, this.kg)(delta);
  if (this.ie) {
    requestAnimationFrame($m_sjs_js_Any$().g7(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2) => {
      this.kY((+v1$2));
    }))));
  }
});
$p.n7 = (function() {
  this.ie = true;
  return requestAnimationFrame($m_sjs_js_Any$().g7(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2) => {
    this.kY((+v1$2));
  }))));
});
var $d_Ltrivalibs_utils_animation_Animator = new $TypeData().i($c_Ltrivalibs_utils_animation_Animator, "trivalibs.utils.animation.Animator", ({
  fc: 1
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
$p.lj = (function(frame) {
  var animator = new $c_Ltrivalibs_utils_animation_Animator(frame, null);
  animator.n7();
  return animator;
});
var $d_Ltrivalibs_utils_animation_animate$package$ = new $TypeData().i($c_Ltrivalibs_utils_animation_animate$package$, "trivalibs.utils.animation.animate$package$", ({
  fd: 1
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
  this.ig = null;
  this.ih = null;
  this.V = input;
  this.ig = drag;
  this.ih = hold;
}
$p = $c_Ltrivalibs_utils_events_CanvasInput.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_CanvasInput;
/** @constructor */
function $h_Ltrivalibs_utils_events_CanvasInput() {
}
$h_Ltrivalibs_utils_events_CanvasInput.prototype = $p;
$p.gt = (function(tpf) {
  this.ig.nh();
  this.ih.gt(tpf);
});
var $d_Ltrivalibs_utils_events_CanvasInput = new $TypeData().i($c_Ltrivalibs_utils_events_CanvasInput, "trivalibs.utils.events.CanvasInput", ({
  fe: 1
}));
function $ct_Ltrivalibs_utils_events_DragGesture__F0__($thiz, pointersOf) {
  $thiz.kh = pointersOf;
  $thiz.fZ = null;
  $thiz.ii = 0.0;
  $thiz.ij = 0.0;
  $thiz.hc = 0.0;
  $thiz.hd = 0.0;
  return $thiz;
}
function $ct_Ltrivalibs_utils_events_DragGesture__Ltrivalibs_utils_events_InputState__($thiz, input) {
  $ct_Ltrivalibs_utils_events_DragGesture__F0__($thiz, $ps_Ltrivalibs_utils_events_DragGesture__DragGesture$superArg$1__Ltrivalibs_utils_events_InputState__F0(input));
  return $thiz;
}
function $ps_Ltrivalibs_utils_events_DragGesture__DragGesture$superArg$1__Ltrivalibs_utils_events_InputState__F0(input) {
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => input.ae));
}
/** @constructor */
function $c_Ltrivalibs_utils_events_DragGesture() {
  this.kh = null;
  this.fZ = null;
  this.ii = 0.0;
  this.ij = 0.0;
  this.hc = 0.0;
  this.hd = 0.0;
}
$p = $c_Ltrivalibs_utils_events_DragGesture.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_DragGesture;
/** @constructor */
function $h_Ltrivalibs_utils_events_DragGesture() {
}
$h_Ltrivalibs_utils_events_DragGesture.prototype = $p;
$p.lD = (function() {
  return new $c_T2(this.hc, this.hd);
});
$p.nh = (function() {
  var d = $m_Ltrivalibs_utils_events_gestures$package$().kC(this.kh.g6());
  if ((d === null)) {
    this.fZ = null;
    this.hc = 0.0;
    this.hd = 0.0;
  } else {
    var opt$proxy2 = this.fZ;
    var sameDriver = (((opt$proxy2 !== null) && (d.an !== null)) && ((+this.fZ) === (+d.an)));
    this.hc = (sameDriver ? (d.fm - this.ii) : 0.0);
    this.hd = (sameDriver ? (d.fn - this.ij) : 0.0);
    this.fZ = d.an;
    this.ii = d.fm;
    this.ij = d.fn;
  }
});
var $d_Ltrivalibs_utils_events_DragGesture = new $TypeData().i($c_Ltrivalibs_utils_events_DragGesture, "trivalibs.utils.events.DragGesture", ({
  ff: 1
}));
function $ct_Ltrivalibs_utils_events_HoldGesture__F0__D__D__($thiz, pointersOf, holdDelay, holdRadius) {
  $thiz.kk = pointersOf;
  $thiz.ki = holdDelay;
  $thiz.kj = holdRadius;
  $thiz.g1 = null;
  $thiz.fl = 0.0;
  $thiz.g2 = false;
  $thiz.g0 = false;
  $thiz.eH = false;
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
  this.kk = null;
  this.ki = 0.0;
  this.kj = 0.0;
  this.g1 = null;
  this.fl = 0.0;
  this.g2 = false;
  this.g0 = false;
  this.eH = false;
}
$p = $c_Ltrivalibs_utils_events_HoldGesture.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_HoldGesture;
/** @constructor */
function $h_Ltrivalibs_utils_events_HoldGesture() {
}
$h_Ltrivalibs_utils_events_HoldGesture.prototype = $p;
$p.gt = (function(tpf) {
  var d = $m_Ltrivalibs_utils_events_gestures$package$().kC(this.kk.g6());
  if ((d === null)) {
    this.g1 = null;
    this.fl = 0.0;
    this.g2 = false;
    this.g0 = false;
    this.eH = false;
  } else {
    var pid = d.an;
    if ((!(((this.g1 !== null) && (pid !== null)) && ((+this.g1) === (+pid))))) {
      this.g1 = pid;
      this.fl = 0.0;
      this.g2 = false;
      this.g0 = false;
    }
    this.fl = (this.fl + tpf);
    if (this.g0) {
      this.eH = true;
    } else if ((this.fl < this.ki)) {
      var dx = (d.fm - d.il);
      var dy = (d.fn - d.im);
      var p$proxy1 = ((dx * dx) + (dy * dy));
      if (((+Math.sqrt(p$proxy1)) > this.kj)) {
        this.g2 = true;
      }
      this.eH = false;
    } else if (this.g2) {
      this.eH = false;
    } else {
      this.g0 = true;
      this.eH = true;
    }
  }
});
var $d_Ltrivalibs_utils_events_HoldGesture = new $TypeData().i($c_Ltrivalibs_utils_events_HoldGesture, "trivalibs.utils.events.HoldGesture", ({
  fg: 1
}));
function $p_Ltrivalibs_utils_events_InputState__freeSlot__Ltrivalibs_utils_events_Pointer($thiz) {
  var i = 0;
  while ((i < ($thiz.g5.length | 0))) {
    if (($thiz.g5[i].an === null)) {
      return $thiz.g5[i];
    }
    i = ((1 + i) | 0);
  }
  return null;
}
function $p_Ltrivalibs_utils_events_InputState__slotById__D__Ltrivalibs_utils_events_Pointer($thiz, id) {
  var i = 0;
  while ((i < ($thiz.ae.length | 0))) {
    var p = $thiz.ae[i];
    if (((p.an !== null) && ((+p.an) === id))) {
      return p;
    }
    i = ((1 + i) | 0);
  }
  return null;
}
function $p_Ltrivalibs_utils_events_InputState__removePointer__D__V($thiz, id) {
  var p = $p_Ltrivalibs_utils_events_InputState__slotById__D__Ltrivalibs_utils_events_Pointer($thiz, id);
  if ((p !== null)) {
    p.an = null;
    var idx = $m_sjs_js_ArrayOps$().kL($thiz.ae, p, 0);
    if ((idx >= 0)) {
      $thiz.ae.splice(idx, 1);
    }
  }
}
function $p_Ltrivalibs_utils_events_InputState__install__V($thiz) {
  var i = 0;
  while ((i < $thiz.kp)) {
    $thiz.g5.push(new $c_Ltrivalibs_utils_events_Pointer());
    i = ((1 + i) | 0);
  }
  $m_Ltrivalibs_utils_events_keyboard$package$().mk($thiz.g3, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((k$3) => {
    if ((!(!(!(!(!$thiz.g4.hasOwnProperty(k$3))))))) {
      var value$proxy1 = (+Date.now());
      $thiz.g4[k$3] = value$proxy1;
      if ((!($thiz.W === (void 0)))) {
        var m$proxy3 = $thiz.W;
        m$proxy3();
      }
    }
  })), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((k$3$1) => {
    delete $thiz.g4[k$3$1];
    if ((!($thiz.W === (void 0)))) {
      var m$proxy4 = $thiz.W;
      m$proxy4();
    }
  })), false);
  $m_Ltrivalibs_utils_events_pointer$package$().mN($thiz.km, $m_Ltrivalibs_utils_events_pointer$package$().mO(), new $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078(((v1$2, v2$2, v3$2, v4$2, v5$2) => {
    var button = (v1$2 | 0);
    var id = (+v2$2);
    var x$1 = (+v3$2);
    var y = (+v4$2);
    if ($thiz.ko) {
      $thiz.g3.focus();
    }
    var key$proxy3 = ("" + button);
    var value$proxy2 = (+Date.now());
    $thiz.he[key$proxy3] = value$proxy2;
    var slot = $p_Ltrivalibs_utils_events_InputState__freeSlot__Ltrivalibs_utils_events_Pointer($thiz);
    if ((slot !== null)) {
      slot.an = id;
      slot.ik = button;
      (+Date.now());
      slot.il = x$1;
      slot.im = y;
      slot.fm = x$1;
      slot.fn = y;
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
      p.fm = x$2;
      p.fn = y$1;
      if ((($thiz.ae.length | 0) > 0)) {
        $thiz.ae[0];
      }
    }
  })), new $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(((v1$2$2, v2$2$2, v3$2$2, v4$2$1) => {
    var button$1 = (v1$2$2 | 0);
    var id$2 = (+v2$2$2);
    delete $thiz.he[("" + button$1)];
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
  })), $thiz.kq);
  $thiz.g3.addEventListener("focus", $thiz.kn);
  $thiz.g3.addEventListener("blur", $thiz.kl);
}
/** @constructor */
function $c_Ltrivalibs_utils_events_InputState(el, keyTarget, suppressContextMenu, onActivity, focusOnPointerDown, maxPointers) {
  this.km = null;
  this.g3 = null;
  this.kq = false;
  this.W = null;
  this.ko = false;
  this.kp = 0;
  this.g4 = null;
  this.he = null;
  this.g5 = null;
  this.ae = null;
  this.kn = null;
  this.kl = null;
  this.km = el;
  this.g3 = keyTarget;
  this.kq = suppressContextMenu;
  this.W = onActivity;
  this.ko = focusOnPointerDown;
  this.kp = maxPointers;
  this.g4 = ({});
  this.he = ({});
  this.g5 = [];
  this.ae = [];
  if ($m_sr_BoxesRunTime$().b(keyTarget, window)) {
    (!(!document.hasFocus()));
  } else {
    $m_sr_BoxesRunTime$().b(keyTarget, document.activeElement);
  }
  this.kn = ((_$1$3) => {
    if ((!(this.W === (void 0)))) {
      var m$proxy1 = this.W;
      m$proxy1();
    }
  });
  this.kl = ((_$2$3) => {
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
$p.ak = (function(key) {
  return (!(!(!(!this.g4.hasOwnProperty(key)))));
});
$p.mh = (function(button) {
  var key$proxy7 = ("" + button);
  return (!(!(!(!this.he.hasOwnProperty(key$proxy7)))));
});
$p.kX = (function() {
  return (this.ae.length | 0);
});
var $d_Ltrivalibs_utils_events_InputState = new $TypeData().i($c_Ltrivalibs_utils_events_InputState, "trivalibs.utils.events.InputState", ({
  fh: 1
}));
/** @constructor */
function $c_Ltrivalibs_utils_events_Pointer() {
  this.an = null;
  this.ik = 0;
  this.il = 0.0;
  this.im = 0.0;
  this.fm = 0.0;
  this.fn = 0.0;
  this.an = null;
  this.ik = 0;
  this.il = 0.0;
  this.im = 0.0;
  this.fm = 0.0;
  this.fn = 0.0;
}
$p = $c_Ltrivalibs_utils_events_Pointer.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_Pointer;
/** @constructor */
function $h_Ltrivalibs_utils_events_Pointer() {
}
$h_Ltrivalibs_utils_events_Pointer.prototype = $p;
var $d_Ltrivalibs_utils_events_Pointer = new $TypeData().i($c_Ltrivalibs_utils_events_Pointer, "trivalibs.utils.events.Pointer", ({
  fi: 1
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
$p.kC = (function(pointers) {
  var i = 0;
  while ((i < (pointers.length | 0))) {
    var p = pointers[i];
    if ((p.ik === 0)) {
      return p;
    }
    i = ((1 + i) | 0);
  }
  return null;
});
var $d_Ltrivalibs_utils_events_gestures$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_gestures$package$, "trivalibs.utils.events.gestures$package$", ({
  fj: 1
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
$p.mf = (function(canvas, initialFocus, holdDelay, holdRadius, suppressContextMenu, onActivity) {
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
  fk: 1
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
$p.mk = (function(el, onDown, onUp, keepDefault) {
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
  fl: 1
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
$p.mN = (function(el, moveTarget, onDown, onMove, onUp, onCancel, suppressContextMenu) {
  var downFn = ((e$3) => {
    onDown.ll((e$3.button | 0), (+e$3.pointerId), (+e$3.clientX), (+e$3.clientY), (!(!e$3.isPrimary)));
  });
  var moveFn = ((e$3$1) => {
    onMove.ln((+e$3$1.pointerId), (+e$3$1.clientX), (+e$3$1.clientY));
  });
  var upFn = ((e$3$2) => {
    onUp.lm((e$3$2.button | 0), (+e$3$2.pointerId), (+e$3$2.clientX), (+e$3$2.clientY));
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
$p.mO = (function() {
  return window;
});
var $d_Ltrivalibs_utils_events_pointer$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_pointer$package$, "trivalibs.utils.events.pointer$package$", ({
  fm: 1
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
  this.hq = null;
  $n_jl_Character$ = this;
  this.hq = new $ac_I(new Int32Array([1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3558, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43504, 43600, 44016, 65296, 66720, 68912, 69734, 69872, 69942, 70096, 70384, 70736, 70864, 71248, 71360, 71472, 71904, 72016, 72784, 73040, 73120, 73552, 92768, 92864, 93008, 120782, 120792, 120802, 120812, 120822, 123200, 123632, 124144, 125264, 130032]));
}
$p = $c_jl_Character$.prototype = new $h_O();
$p.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
}
$h_jl_Character$.prototype = $p;
$p.nd = (function(codePoint) {
  if (((codePoint >>> 0) > 1114111)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return String.fromCodePoint(codePoint);
});
$p.lG = (function(codePoint, radix) {
  if ((codePoint < 256)) {
    var value = (((((codePoint - 48) | 0) >>> 0) <= 9) ? ((codePoint - 48) | 0) : (((((codePoint - 65) | 0) >>> 0) <= 25) ? ((codePoint - 55) | 0) : (((((codePoint - 97) | 0) >>> 0) <= 25) ? ((codePoint - 87) | 0) : (-1))));
  } else if (((((codePoint - 65313) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65303) | 0);
  } else if (((((codePoint - 65345) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65335) | 0);
  } else {
    var p = $m_ju_Arrays$().lv(this.hq, codePoint);
    var zeroCodePointIndex = ((p < 0) ? (((-2) - p) | 0) : p);
    if ((zeroCodePointIndex < 0)) {
      var value = (-1);
    } else {
      var v = ((codePoint - this.hq.a[zeroCodePointIndex]) | 0);
      var value = ((v > 9) ? (-1) : v);
    }
  }
  return ((value < radix) ? value : (-1));
});
var $d_jl_Character$ = new $TypeData().i($c_jl_Character$, "java.lang.Character$", ({
  b1: 1,
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
$p.gq = (function(s) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s) + "\""));
});
$p.mi = (function(s, radix, overflowBarrier) {
  if ((s === null)) {
    $m_jl_Integer$().gq(s);
  }
  var len = s.length;
  if ((len === 0)) {
    $m_jl_Integer$().gq(s);
  }
  var character = $m_jl_Character$();
  var firstChar = s.charCodeAt(0);
  var negative = (firstChar === 45);
  var sign = (negative ? (-1) : 0);
  var i = ((negative || (firstChar === 43)) ? 1 : 0);
  if ((i >= len)) {
    $m_jl_Integer$().gq(s);
  }
  var java$lang$IntFloatBits$Int32Box$$value = 0;
  java$lang$IntFloatBits$Int32Box$$value = 0;
  while ((i !== len)) {
    var x = character.lG(s.charCodeAt(i), radix);
    if (((x < 0) || ((java$lang$IntFloatBits$Int32Box$$value >>> 0) > (overflowBarrier >>> 0)))) {
      $m_jl_Integer$().gq(s);
    }
    var x$2 = java$lang$IntFloatBits$Int32Box$$value;
    var x$3 = Math.imul(x$2, radix);
    var v = ((x$3 + x) | 0);
    java$lang$IntFloatBits$Int32Box$$value = v;
    i = ((1 + i) | 0);
  }
  if (((java$lang$IntFloatBits$Int32Box$$value >>> 0) > (((2147483647 - sign) | 0) >>> 0))) {
    $m_jl_Integer$().gq(s);
  }
  return (((java$lang$IntFloatBits$Int32Box$$value ^ sign) - sign) | 0);
});
var $d_jl_Integer$ = new $TypeData().i($c_jl_Integer$, "java.lang.Integer$", ({
  b7: 1,
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
  $thiz.iX = s;
  if (writableStackTrace) {
    $thiz.lR();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.iX = null;
  }
  hg() {
    return this.iX;
  }
  lR() {
    var reference = ((this instanceof $c_sjs_js_JavaScriptException) ? this.aO : this);
    if ((Object.prototype.toString.call(reference) !== "[object Error]")) {
      if (((Error.captureStackTrace === (void 0)) || (!(!Object.isSealed(this))))) {
        new Error();
      } else {
        Error.captureStackTrace(this);
      }
    }
    return this;
  }
  j() {
    var className = $objectClassName(this);
    var message = this.hg();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  q() {
    return $c_O.prototype.q.call(this);
  }
  m(that) {
    return $c_O.prototype.m.call(this, that);
  }
  get "message"() {
    var m = this.hg();
    return ((m === null) ? "" : m);
  }
  get "name"() {
    return $objectClassName(this);
  }
  "toString"() {
    return this.j();
  }
}
function $isArrayOf_jl_Throwable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.f)));
}
/** @constructor */
function $c_s_Console$() {
  this.iZ = null;
  $n_s_Console$ = this;
  this.iZ = new $c_s_util_DynamicVariable($m_jl_System$Streams$().iV);
}
$p = $c_s_Console$.prototype = new $h_O();
$p.constructor = $c_s_Console$;
/** @constructor */
function $h_s_Console$() {
}
$h_s_Console$.prototype = $p;
$p.mL = (function() {
  return this.iZ.ht;
});
var $d_s_Console$ = new $TypeData().i($c_s_Console$, "scala.Console$", ({
  bq: 1,
  cz: 1
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
$p.j = (function() {
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
$p.nn = (function(xs) {
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
$p.j = (function() {
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
$p.j = (function() {
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
$p.j = (function() {
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
$p.j = (function() {
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
$p.j = (function() {
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
$p.j = (function() {
  return "<function5>";
});
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.f6 = 0;
  this.jk = 0;
  this.l9 = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.f6 = $f_T__hashCode__I("Seq");
  this.jk = $f_T__hashCode__I("Map");
  $f_T__hashCode__I("Set");
  this.l9 = this.ng($m_sci_Nil$(), this.jk);
}
$p = $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$p.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $p;
$p.kZ = (function(xs) {
  return ($is_sc_IndexedSeq(xs) ? this.mb(xs, this.f6) : ((xs instanceof $c_sci_List) ? this.ml(xs, this.f6) : this.mK(xs, this.f6)));
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
  dl: 1,
  dk: 1
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
  $f_Ltrivalibs_graphics_math_Mat3MutableOps__set__O__Ltrivalibs_graphics_math_Mat3Mutable__O__Ltrivalibs_graphics_math_Mat3Base__V($m_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$().mC(), ref, $m_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$(), value, $m_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$());
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Mat3_Mat3PaddedBuffer$", ({
  dm: 1,
  aJ: 1
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
  $f_Ltrivalibs_graphics_math_Mat4MutableOps__set__O__Ltrivalibs_graphics_math_Mat4Mutable__O__Ltrivalibs_graphics_math_Mat4Base__V($m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$().m5(), ref, $m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$(), value, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Mat4_Mat4Buffer$", ({
  dn: 1,
  aJ: 1
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
$p.fr = (function(t) {
  return new $c_T2(t.fa, t.fb);
});
var $d_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$, "trivalibs.graphics.geometry.FieldWriter$vec2Writer$", ({
  dt: 1,
  aK: 1
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
$p.fr = (function(t) {
  return new $c_T3(t.r, t.l, t.n);
});
var $d_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$, "trivalibs.graphics.geometry.FieldWriter$vec3Writer$", ({
  du: 1,
  aK: 1
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
  this.jn = null;
  this.jn = x$1;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexLayout$named.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexLayout$named;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexLayout$named() {
}
$h_Ltrivalibs_graphics_geometry_VertexLayout$named.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_VertexLayout$named = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayout$named, "trivalibs.graphics.geometry.VertexLayout$named", ({
  dA: 1,
  dz: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons(x$1, x$2) {
  this.jo = null;
  this.jp = null;
  this.jo = x$1;
  this.jp = x$2;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons() {
}
$h_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons.prototype = $p;
$p.ni = (function(t) {
  return $m_sr_Tuples$().ky(this.jo.fr(t.k(0)), this.jp.fr($m_sr_Tuples$().na(t)));
});
$p.fr = (function(t) {
  return this.ni(t);
});
var $d_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons, "trivalibs.graphics.geometry.VertexLayoutHelper$cons", ({
  dB: 1,
  aL: 1
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
$p.fr = (function(t) {
  return $m_T$package$EmptyTuple$();
});
var $d_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$, "trivalibs.graphics.geometry.VertexLayoutHelper$nil$", ({
  dC: 1,
  aL: 1
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
  this.jr = 0;
  this.jr = idx$2;
}
$p = $c_Ltrivalibs_graphics_geometry_package$package$$anon$1.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_package$package$$anon$1;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_package$package$$anon$1() {
}
$h_Ltrivalibs_graphics_geometry_package$package$$anon$1.prototype = $p;
$p.aG = (function(t) {
  return t.k(this.jr);
});
var $d_Ltrivalibs_graphics_geometry_package$package$$anon$1 = new $TypeData().i($c_Ltrivalibs_graphics_geometry_package$package$$anon$1, "trivalibs.graphics.geometry.package$package$$anon$1", ({
  dH: 1,
  dx: 1
}));
function $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D($thiz, v, other) {
  return (((v.r * other.r) + (v.l * other.l)) + (v.n * other.n));
}
function $f_Ltrivalibs_graphics_math_Vec3Base__length__O__D($thiz, v) {
  var p$proxy1 = $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D($thiz, v, v);
  return (+Math.sqrt(p$proxy1));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat3$() {
  this.js = null;
  this.jt = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat3$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat3$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat3$() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat3$.prototype = $p;
$p.kH = (function() {
  if ((!this.jt)) {
    this.js = $m_Ltrivalibs_graphics_math_cpu_Mat3$();
    this.jt = true;
  }
  return this.js;
});
$p.m0 = (function(m) {
  return new $c_Ltrivalibs_graphics_math_cpu_Mat3(m.gD, m.gE, m.gF, m.gG, m.gH, m.gI, m.gJ, m.gK, m.gL);
});
var $d_Ltrivalibs_graphics_math_cpu_Mat3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat3$, "trivalibs.graphics.math.cpu.Mat3$", ({
  e1: 1,
  dK: 1
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
  this.ju = null;
  this.jv = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat4$() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat4$.prototype = $p;
$p.kJ = (function() {
  if ((!this.jv)) {
    this.ju = $m_Ltrivalibs_graphics_math_cpu_Mat4$();
    this.jv = true;
  }
  return this.ju;
});
$p.eI = (function(t, r, s) {
  var x = r.hO;
  var y = r.hP;
  var z = r.hQ;
  var w = r.hN;
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
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4(((1.0 - (yy + zz)) * s.r), ((xy + wz) * s.r), ((xz - wy) * s.r), 0.0, ((xy - wz) * s.l), ((1.0 - (xx + zz)) * s.l), ((yz + wx) * s.l), 0.0, ((xz + wy) * s.n), ((yz - wx) * s.n), ((1.0 - (xx + yy)) * s.n), 0.0, t.r, t.l, t.n, 1.0);
});
var $d_Ltrivalibs_graphics_math_cpu_Mat4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4$, "trivalibs.graphics.math.cpu.Mat4$", ({
  e4: 1,
  dN: 1
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
  e8: 1,
  ea: 1
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
  this.jw = null;
  this.jx = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec3$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec3$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec3$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec3$.prototype = $p;
$p.p = (function() {
  if ((!this.jx)) {
    this.jw = $m_Ltrivalibs_graphics_math_cpu_Vec3$();
    this.jx = true;
  }
  return this.jw;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3$, "trivalibs.graphics.math.cpu.Vec3$", ({
  ed: 1,
  dT: 1
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
  this.jy = null;
  this.jz = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec4$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec4$.prototype = $p;
$p.m3 = (function() {
  if ((!this.jz)) {
    this.jy = new $c_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3();
    this.jz = true;
  }
  return this.jy;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4$, "trivalibs.graphics.math.cpu.Vec4$", ({
  eg: 1,
  dX: 1
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
  ej: 1,
  dM: 1
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
  em: 1,
  dP: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_LetExpr(name) {
  this.s = null;
  this.jE = null;
  this.jE = name;
  $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(this, name);
}
$p = $c_Ltrivalibs_graphics_math_gpu_LetExpr.prototype = new $h_Ltrivalibs_graphics_math_gpu_Expr();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_LetExpr;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_LetExpr() {
}
$h_Ltrivalibs_graphics_math_gpu_LetExpr.prototype = $p;
$p.kr = (function(value) {
  return (((("  let " + this.jE) + " = ") + value.s) + ";");
});
var $d_Ltrivalibs_graphics_math_gpu_LetExpr = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_LetExpr, "trivalibs.graphics.math.gpu.LetExpr", ({
  eo: 1,
  aS: 1
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
$p.l4 = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.s + ".x"));
});
$p.l5 = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.s + ".y"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$4 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$4, "trivalibs.graphics.math.gpu.float_expr$package$$anon$4", ({
  es: 1,
  dQ: 1
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
  et: 1,
  aQ: 1
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
  eu: 1,
  aR: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$8() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$8.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$8;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$8() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$8.prototype = $p;
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$8 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$8, "trivalibs.graphics.math.gpu.float_expr$package$$anon$8", ({
  ev: 1,
  R: 1
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
  ew: 1,
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
$p.nj = (function(m, x$2, v, x$4, x$5) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + m.s) + " * ") + v.s) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Mat3ImmutableOpsG_FloatExpr_Mat3Expr$", ({
  ex: 1,
  dL: 1
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
$p.mD = (function(m, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + m.s) + " * ") + other.s) + ")"));
});
$p.nk = (function(m, x$2, v, x$4, x$5) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + m.s) + " * ") + v.s) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Mat4ImmutableOpsG_FloatExpr_Mat4Expr$", ({
  ey: 1,
  dO: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$;
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
$p.mH = (function(v, x$2, scalar) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.s) + " * ") + scalar.s) + ")"));
});
$p.le = (function(v, x$2, scalar) {
  return this.mH(v, x$2, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().eJ().F(scalar));
});
$p.lW = (function(v, x$2) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("fract(" + v.s) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec2ImmutableOpsG_FloatExpr_Vec2Expr$", ({
  ez: 1,
  dR: 1
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
$p.mS = (function(v, x$2, e) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("pow(" + v.s) + ", vec3<f32>(") + e.s) + "))"));
});
$p.mR = (function(v, x$2, scalar) {
  return this.mS(v, x$2, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().eJ().F(scalar));
});
$p.lT = (function(v, x$2) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(" + v.s) + " * 0.5 + 0.5)"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec3ImmutableOpsG_FloatExpr_Vec3Expr$", ({
  eA: 1,
  dU: 1
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
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec4ImmutableOpsG_FloatExpr_Vec4Expr$", ({
  eB: 1,
  dY: 1
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
  this.gS = null;
  this.z = shade;
  this.y = painter;
  this.c = [];
  this.gS = [];
}
$p = $c_Ltrivalibs_graphics_painter_Instance.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Instance;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Instance() {
}
$h_Ltrivalibs_graphics_painter_Instance.prototype = $p;
var $d_Ltrivalibs_graphics_painter_Instance = new $TypeData().i($c_Ltrivalibs_graphics_painter_Instance, "trivalibs.graphics.painter.Instance", ({
  eG: 1,
  aT: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Shape(painter, form, shade) {
  this.i3 = null;
  this.ai = null;
  this.ac = null;
  this.i2 = null;
  this.i1 = null;
  this.S = null;
  this.h5 = null;
  this.P = null;
  this.i3 = painter;
  this.ai = form;
  this.ac = shade;
  this.i2 = "none";
  this.i1 = null;
  this.S = [];
  this.h5 = [];
  this.P = new $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter);
}
$p = $c_Ltrivalibs_graphics_painter_Shape.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Shape;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Shape() {
}
$h_Ltrivalibs_graphics_painter_Shape.prototype = $p;
$p.n4 = (function(cullMode, blendState) {
  if ((cullMode !== (void 0))) {
    this.i2 = cullMode;
  }
  if ((blendState !== (void 0))) {
    this.i1 = blendState;
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Shape = new $TypeData().i($c_Ltrivalibs_graphics_painter_Shape, "trivalibs.graphics.painter.Shape", ({
  eN: 1,
  aT: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform(inner) {
  this.fU = null;
  this.fU = inner;
}
$p = $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform() {
}
$h_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform.prototype = $p;
$p.fs = (function() {
  return this.fU.fs();
});
var $d_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform = new $TypeData().i($c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform, "trivalibs.graphics.shader.VertexUniform$given_WGSLType_VertexUniform", ({
  eW: 1,
  T: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor(prefix) {
  this.ib = null;
  this.ib = prefix;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor.prototype = $p;
$p.hl = (function(name) {
  return new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget(((this.ib === "") ? name : ((this.ib + ".") + name)));
});
var $d_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor, "trivalibs.graphics.shader.dsl.TypedAssignAccessor", ({
  f3: 1,
  z: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(prefix) {
  this.ic = null;
  this.ic = prefix;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor.prototype = $p;
$p.ax = (function(name) {
  return ((this.ic === "") ? $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), name) : $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), ((this.ic + ".") + name)));
});
var $d_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor, "trivalibs.graphics.shader.dsl.TypedExprAccessor", ({
  f4: 1,
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
  f5: 1,
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
  f6: 1,
  z: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_VertexOut(prefix) {
  this.kf = null;
  this.ke = null;
  this.kf = prefix;
  this.ke = new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget((prefix + ".position"));
}
$p = $c_Ltrivalibs_graphics_shader_dsl_VertexOut.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_VertexOut;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_VertexOut() {
}
$h_Ltrivalibs_graphics_shader_dsl_VertexOut.prototype = $p;
$p.hl = (function(name) {
  return new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget(((this.kf + ".") + name));
});
var $d_Ltrivalibs_graphics_shader_dsl_VertexOut = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_VertexOut, "trivalibs.graphics.shader.dsl.VertexOut", ({
  f8: 1,
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
$p.fs = (function() {
  return "mat3x3<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$, "trivalibs.graphics.shader.types$package$given_WGSLType_Mat3$", ({
  fa: 1,
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
$p.fs = (function() {
  return "mat4x4<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$, "trivalibs.graphics.shader.types$package$given_WGSLType_Mat4$", ({
  fb: 1,
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
  this.hp = $data;
}
$p = $c_jl_Class.prototype = new $h_O();
$p.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
}
$h_jl_Class.prototype = $p;
$p.j = (function() {
  return ((this.hp.Y ? "interface " : (this.hp.X ? "" : "class ")) + this.hp.N);
});
var $d_jl_Class = new $TypeData().i($c_jl_Class, "java.lang.Class", ({
  b2: 1,
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
    return $thiz.eM;
  } else {
    throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 0)"));
  }
}
function $f_s_Product10__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.eN;
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
    case 3: {
      return $thiz.b1;
      break;
    }
    case 4: {
      return $thiz.b2;
      break;
    }
    case 5: {
      return $thiz.b3;
      break;
    }
    case 6: {
      return $thiz.b4;
      break;
    }
    case 7: {
      return $thiz.b5;
      break;
    }
    case 8: {
      return $thiz.b6;
      break;
    }
    case 9: {
      return $thiz.aY;
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
      return $thiz.eO;
      break;
    }
    case 1: {
      return $thiz.b9;
      break;
    }
    case 2: {
      return $thiz.ba;
      break;
    }
    case 3: {
      return $thiz.bb;
      break;
    }
    case 4: {
      return $thiz.bc;
      break;
    }
    case 5: {
      return $thiz.bd;
      break;
    }
    case 6: {
      return $thiz.be;
      break;
    }
    case 7: {
      return $thiz.bf;
      break;
    }
    case 8: {
      return $thiz.bg;
      break;
    }
    case 9: {
      return $thiz.b7;
      break;
    }
    case 10: {
      return $thiz.b8;
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
      return $thiz.eP;
      break;
    }
    case 1: {
      return $thiz.bk;
      break;
    }
    case 2: {
      return $thiz.bl;
      break;
    }
    case 3: {
      return $thiz.bm;
      break;
    }
    case 4: {
      return $thiz.bn;
      break;
    }
    case 5: {
      return $thiz.bo;
      break;
    }
    case 6: {
      return $thiz.bp;
      break;
    }
    case 7: {
      return $thiz.bq;
      break;
    }
    case 8: {
      return $thiz.br;
      break;
    }
    case 9: {
      return $thiz.bh;
      break;
    }
    case 10: {
      return $thiz.bi;
      break;
    }
    case 11: {
      return $thiz.bj;
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
      return $thiz.eQ;
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
    case 4: {
      return $thiz.bz;
      break;
    }
    case 5: {
      return $thiz.bA;
      break;
    }
    case 6: {
      return $thiz.bB;
      break;
    }
    case 7: {
      return $thiz.bC;
      break;
    }
    case 8: {
      return $thiz.bD;
      break;
    }
    case 9: {
      return $thiz.bs;
      break;
    }
    case 10: {
      return $thiz.bt;
      break;
    }
    case 11: {
      return $thiz.bu;
      break;
    }
    case 12: {
      return $thiz.bv;
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
      return $thiz.eR;
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
      return $thiz.bE;
      break;
    }
    case 10: {
      return $thiz.bF;
      break;
    }
    case 11: {
      return $thiz.bG;
      break;
    }
    case 12: {
      return $thiz.bH;
      break;
    }
    case 13: {
      return $thiz.bI;
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
      return $thiz.eS;
      break;
    }
    case 1: {
      return $thiz.bX;
      break;
    }
    case 2: {
      return $thiz.bY;
      break;
    }
    case 3: {
      return $thiz.bZ;
      break;
    }
    case 4: {
      return $thiz.c0;
      break;
    }
    case 5: {
      return $thiz.c1;
      break;
    }
    case 6: {
      return $thiz.c2;
      break;
    }
    case 7: {
      return $thiz.c3;
      break;
    }
    case 8: {
      return $thiz.c4;
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
    case 13: {
      return $thiz.bV;
      break;
    }
    case 14: {
      return $thiz.bW;
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
      return $thiz.eT;
      break;
    }
    case 1: {
      return $thiz.cc;
      break;
    }
    case 2: {
      return $thiz.cd;
      break;
    }
    case 3: {
      return $thiz.ce;
      break;
    }
    case 4: {
      return $thiz.cf;
      break;
    }
    case 5: {
      return $thiz.cg;
      break;
    }
    case 6: {
      return $thiz.ch;
      break;
    }
    case 7: {
      return $thiz.ci;
      break;
    }
    case 8: {
      return $thiz.cj;
      break;
    }
    case 9: {
      return $thiz.c5;
      break;
    }
    case 10: {
      return $thiz.c6;
      break;
    }
    case 11: {
      return $thiz.c7;
      break;
    }
    case 12: {
      return $thiz.c8;
      break;
    }
    case 13: {
      return $thiz.c9;
      break;
    }
    case 14: {
      return $thiz.ca;
      break;
    }
    case 15: {
      return $thiz.cb;
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
      return $thiz.eU;
      break;
    }
    case 1: {
      return $thiz.cs;
      break;
    }
    case 2: {
      return $thiz.ct;
      break;
    }
    case 3: {
      return $thiz.cu;
      break;
    }
    case 4: {
      return $thiz.cv;
      break;
    }
    case 5: {
      return $thiz.cw;
      break;
    }
    case 6: {
      return $thiz.cx;
      break;
    }
    case 7: {
      return $thiz.cy;
      break;
    }
    case 8: {
      return $thiz.cz;
      break;
    }
    case 9: {
      return $thiz.ck;
      break;
    }
    case 10: {
      return $thiz.cl;
      break;
    }
    case 11: {
      return $thiz.cm;
      break;
    }
    case 12: {
      return $thiz.cn;
      break;
    }
    case 13: {
      return $thiz.co;
      break;
    }
    case 14: {
      return $thiz.cp;
      break;
    }
    case 15: {
      return $thiz.cq;
      break;
    }
    case 16: {
      return $thiz.cr;
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
      return $thiz.eV;
      break;
    }
    case 1: {
      return $thiz.cJ;
      break;
    }
    case 2: {
      return $thiz.cK;
      break;
    }
    case 3: {
      return $thiz.cL;
      break;
    }
    case 4: {
      return $thiz.cM;
      break;
    }
    case 5: {
      return $thiz.cN;
      break;
    }
    case 6: {
      return $thiz.cO;
      break;
    }
    case 7: {
      return $thiz.cP;
      break;
    }
    case 8: {
      return $thiz.cQ;
      break;
    }
    case 9: {
      return $thiz.cA;
      break;
    }
    case 10: {
      return $thiz.cB;
      break;
    }
    case 11: {
      return $thiz.cC;
      break;
    }
    case 12: {
      return $thiz.cD;
      break;
    }
    case 13: {
      return $thiz.cE;
      break;
    }
    case 14: {
      return $thiz.cF;
      break;
    }
    case 15: {
      return $thiz.cG;
      break;
    }
    case 16: {
      return $thiz.cH;
      break;
    }
    case 17: {
      return $thiz.cI;
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
      return $thiz.eW;
      break;
    }
    case 1: {
      return $thiz.d1;
      break;
    }
    case 2: {
      return $thiz.d2;
      break;
    }
    case 3: {
      return $thiz.d3;
      break;
    }
    case 4: {
      return $thiz.d4;
      break;
    }
    case 5: {
      return $thiz.d5;
      break;
    }
    case 6: {
      return $thiz.d6;
      break;
    }
    case 7: {
      return $thiz.d7;
      break;
    }
    case 8: {
      return $thiz.d8;
      break;
    }
    case 9: {
      return $thiz.cR;
      break;
    }
    case 10: {
      return $thiz.cS;
      break;
    }
    case 11: {
      return $thiz.cT;
      break;
    }
    case 12: {
      return $thiz.cU;
      break;
    }
    case 13: {
      return $thiz.cV;
      break;
    }
    case 14: {
      return $thiz.cW;
      break;
    }
    case 15: {
      return $thiz.cX;
      break;
    }
    case 16: {
      return $thiz.cY;
      break;
    }
    case 17: {
      return $thiz.cZ;
      break;
    }
    case 18: {
      return $thiz.d0;
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
      return $thiz.eX;
      break;
    }
    case 1: {
      return $thiz.dj;
      break;
    }
    case 2: {
      return $thiz.dl;
      break;
    }
    case 3: {
      return $thiz.dm;
      break;
    }
    case 4: {
      return $thiz.dn;
      break;
    }
    case 5: {
      return $thiz.dp;
      break;
    }
    case 6: {
      return $thiz.dq;
      break;
    }
    case 7: {
      return $thiz.dr;
      break;
    }
    case 8: {
      return $thiz.ds;
      break;
    }
    case 9: {
      return $thiz.d9;
      break;
    }
    case 10: {
      return $thiz.da;
      break;
    }
    case 11: {
      return $thiz.db;
      break;
    }
    case 12: {
      return $thiz.dc;
      break;
    }
    case 13: {
      return $thiz.dd;
      break;
    }
    case 14: {
      return $thiz.de;
      break;
    }
    case 15: {
      return $thiz.df;
      break;
    }
    case 16: {
      return $thiz.dg;
      break;
    }
    case 17: {
      return $thiz.dh;
      break;
    }
    case 18: {
      return $thiz.di;
      break;
    }
    case 19: {
      return $thiz.dk;
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
      return $thiz.eY;
      break;
    }
    case 1: {
      return $thiz.dD;
      break;
    }
    case 2: {
      return $thiz.dG;
      break;
    }
    case 3: {
      return $thiz.dH;
      break;
    }
    case 4: {
      return $thiz.dI;
      break;
    }
    case 5: {
      return $thiz.dJ;
      break;
    }
    case 6: {
      return $thiz.dK;
      break;
    }
    case 7: {
      return $thiz.dL;
      break;
    }
    case 8: {
      return $thiz.dM;
      break;
    }
    case 9: {
      return $thiz.dt;
      break;
    }
    case 10: {
      return $thiz.du;
      break;
    }
    case 11: {
      return $thiz.dv;
      break;
    }
    case 12: {
      return $thiz.dw;
      break;
    }
    case 13: {
      return $thiz.dx;
      break;
    }
    case 14: {
      return $thiz.dy;
      break;
    }
    case 15: {
      return $thiz.dz;
      break;
    }
    case 16: {
      return $thiz.dA;
      break;
    }
    case 17: {
      return $thiz.dB;
      break;
    }
    case 18: {
      return $thiz.dC;
      break;
    }
    case 19: {
      return $thiz.dE;
      break;
    }
    case 20: {
      return $thiz.dF;
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
      return $thiz.eZ;
      break;
    }
    case 1: {
      return $thiz.dX;
      break;
    }
    case 2: {
      return $thiz.e1;
      break;
    }
    case 3: {
      return $thiz.e2;
      break;
    }
    case 4: {
      return $thiz.e3;
      break;
    }
    case 5: {
      return $thiz.e4;
      break;
    }
    case 6: {
      return $thiz.e5;
      break;
    }
    case 7: {
      return $thiz.e6;
      break;
    }
    case 8: {
      return $thiz.e7;
      break;
    }
    case 9: {
      return $thiz.dN;
      break;
    }
    case 10: {
      return $thiz.dO;
      break;
    }
    case 11: {
      return $thiz.dP;
      break;
    }
    case 12: {
      return $thiz.dQ;
      break;
    }
    case 13: {
      return $thiz.dR;
      break;
    }
    case 14: {
      return $thiz.dS;
      break;
    }
    case 15: {
      return $thiz.dT;
      break;
    }
    case 16: {
      return $thiz.dU;
      break;
    }
    case 17: {
      return $thiz.dV;
      break;
    }
    case 18: {
      return $thiz.dW;
      break;
    }
    case 19: {
      return $thiz.dY;
      break;
    }
    case 20: {
      return $thiz.dZ;
      break;
    }
    case 21: {
      return $thiz.e0;
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
      return $thiz.aH;
      break;
    }
    case 1: {
      return $thiz.ay;
      break;
    }
    case 2: {
      return $thiz.az;
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
      return $thiz.e8;
      break;
    }
    case 1: {
      return $thiz.aI;
      break;
    }
    case 2: {
      return $thiz.aJ;
      break;
    }
    case 3: {
      return $thiz.aK;
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
      return $thiz.f0;
      break;
    }
    case 1: {
      return $thiz.e9;
      break;
    }
    case 2: {
      return $thiz.ea;
      break;
    }
    case 3: {
      return $thiz.eb;
      break;
    }
    case 4: {
      return $thiz.ec;
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
      return $thiz.f1;
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
    case 5: {
      return $thiz.eh;
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
      return $thiz.f2;
      break;
    }
    case 1: {
      return $thiz.ei;
      break;
    }
    case 2: {
      return $thiz.ej;
      break;
    }
    case 3: {
      return $thiz.ek;
      break;
    }
    case 4: {
      return $thiz.el;
      break;
    }
    case 5: {
      return $thiz.em;
      break;
    }
    case 6: {
      return $thiz.en;
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
      return $thiz.f3;
      break;
    }
    case 1: {
      return $thiz.eo;
      break;
    }
    case 2: {
      return $thiz.ep;
      break;
    }
    case 3: {
      return $thiz.eq;
      break;
    }
    case 4: {
      return $thiz.er;
      break;
    }
    case 5: {
      return $thiz.es;
      break;
    }
    case 6: {
      return $thiz.et;
      break;
    }
    case 7: {
      return $thiz.eu;
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
      return $thiz.f4;
      break;
    }
    case 1: {
      return $thiz.ev;
      break;
    }
    case 2: {
      return $thiz.ew;
      break;
    }
    case 3: {
      return $thiz.ex;
      break;
    }
    case 4: {
      return $thiz.ey;
      break;
    }
    case 5: {
      return $thiz.ez;
      break;
    }
    case 6: {
      return $thiz.eA;
      break;
    }
    case 7: {
      return $thiz.eB;
      break;
    }
    case 8: {
      return $thiz.eC;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 8)"));
    }
  }
}
function $f_sc_Iterator__concat__F0__sc_Iterator($thiz, xs) {
  return new $c_sc_Iterator$ConcatIterator($thiz).lB(xs);
}
function $f_sc_Iterator__sliceIterator__I__I__sc_Iterator($thiz, from, until) {
  var lo = ((from > 0) ? from : 0);
  var rest = ((until < 0) ? (-1) : ((until <= lo) ? 0 : ((until - lo) | 0)));
  return ((rest === 0) ? $m_sc_Iterator$().aB : new $c_sc_Iterator$SliceIterator($thiz, lo, rest));
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
  this.aB = null;
  $n_sc_Iterator$ = this;
  this.aB = new $c_sc_Iterator$$anon$19();
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
  at: 1
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
  this.jb = null;
  this.jb = f;
}
$p = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = new $h_sr_AbstractFunction0();
$p.constructor = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c;
/** @constructor */
function $h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c() {
}
$h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = $p;
$p.g6 = (function() {
  return (0, this.jb)();
});
var $d_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c = new $TypeData().i($c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c, "scala.runtime.AbstractFunction0.$$Lambda$07eded5776954a9c145e92c329afd52873ad179c", ({
  cJ: 1,
  cI: 1,
  br: 1
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
  cL: 1,
  cK: 1,
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
$p.ks = (function(x0, x1) {
  return (0, this.jd)(x0, x1);
});
var $d_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8 = new $TypeData().i($c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8, "scala.runtime.AbstractFunction2.$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8", ({
  cN: 1,
  cM: 1,
  bs: 1
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
$p.ln = (function(x0, x1, x2) {
  return (0, this.je)(x0, x1, x2);
});
var $d_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825 = new $TypeData().i($c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825, "scala.runtime.AbstractFunction3.$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825", ({
  cP: 1,
  cO: 1,
  bt: 1
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
$p.lm = (function(x0, x1, x2, x3) {
  return (0, this.jf)(x0, x1, x2, x3);
});
var $d_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a = new $TypeData().i($c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a, "scala.runtime.AbstractFunction4.$$Lambda$451042f443265710aa66de6985cba67480d9b00a", ({
  cR: 1,
  cQ: 1,
  bu: 1
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
$p.ll = (function(x0, x1, x2, x3, x4) {
  return (0, this.jg)(x0, x1, x2, x3, x4);
});
var $d_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078 = new $TypeData().i($c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078, "scala.runtime.AbstractFunction5.$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078", ({
  cT: 1,
  cS: 1,
  bv: 1
}));
var $d_sr_Nothing$ = new $TypeData().i(0, "scala.runtime.Nothing$", ({
  cV: 1,
  f: 1,
  a: 1
}));
/** @constructor */
function $c_sr_TupleXXL(es) {
  this.J = null;
  this.J = es;
  if ((es.a.length <= 22)) {
    $m_sr_Scala3RunTime$().ls();
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
$p.k = (function(n) {
  return this.J.a[n];
});
$p.t = (function() {
  return this.J.a.length;
});
$p.x = (function() {
  return "Tuple";
});
$p.j = (function() {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($m_s_Predef$().nn(this.J), "(", ",", ")");
});
$p.q = (function() {
  return $m_s_util_hashing_MurmurHash3$().lA(this, (-889275714), null);
});
$p.m = (function(that) {
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aF)));
}
var $d_sr_TupleXXL = new $TypeData().i($c_sr_TupleXXL, "scala.runtime.TupleXXL", ({
  aF: 1,
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
$p.g7 = (function(f) {
  return ((arg1$2) => f.F(arg1$2));
});
var $d_sjs_js_Any$ = new $TypeData().i($c_sjs_js_Any$, "scala.scalajs.js.Any$", ({
  d2: 1,
  d6: 1,
  d7: 1
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
  return new $c_Ltrivalibs_graphics_math_cpu_Vec4((+x.e8), (+x.aI), (+x.aJ), (+x.aK));
});
var $d_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3, "trivalibs.graphics.math.cpu.Vec4$$anon$3", ({
  eh: 1,
  a3: 1,
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
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().lU((+x)));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1, "trivalibs.graphics.math.gpu.float_expr$package$$anon$1", ({
  er: 1,
  a3: 1,
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
  aY: 1,
  b3: 1,
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
  aZ: 1,
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.Z)));
}
var $d_jl_Character = new $TypeData().i(0, "java.lang.Character", ({
  Z: 1,
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
$p.j = (function() {
  return this.R;
});
$p.D = (function() {
  return this.R.length;
});
$p.kx = (function(index) {
  return this.R.charCodeAt(index);
});
var $d_jl_StringBuilder = new $TypeData().i($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  bf: 1,
  E: 1,
  X: 1,
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
$p.kz = (function(dest, start, n) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, dest, start, n);
});
$p.io = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.N = (function() {
  return this;
});
$p.hf = (function(n) {
  return this.hn(n, (-1));
});
$p.hn = (function(from, until) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until);
});
$p.j = (function() {
  return "<iterator>";
});
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.eK(0) === 0);
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
function $isArrayOf_s_util_CommandLineParser$ParseError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.dc)));
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
$p.ao = (function(m) {
  return m.hx;
});
$p.ap = (function(m) {
  return m.hy;
});
$p.aq = (function(m) {
  return m.hz;
});
$p.ar = (function(m) {
  return m.hA;
});
$p.as = (function(m) {
  return m.hB;
});
$p.at = (function(m) {
  return m.hC;
});
$p.au = (function(m) {
  return m.hD;
});
$p.av = (function(m) {
  return m.hE;
});
$p.aw = (function(m) {
  return m.hF;
});
$p.ga = (function(m, v) {
  m.hx = v;
});
$p.gb = (function(m, v) {
  m.hy = v;
});
$p.gc = (function(m, v) {
  m.hz = v;
});
$p.ge = (function(m, v) {
  m.hA = v;
});
$p.gf = (function(m, v) {
  m.hB = v;
});
$p.gg = (function(m, v) {
  m.hC = v;
});
$p.gi = (function(m, v) {
  m.hD = v;
});
$p.gj = (function(m, v) {
  m.hE = v;
});
$p.gk = (function(m, v) {
  m.hF = v;
});
var $d_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$, "trivalibs.graphics.math.cpu.Mat3$given_Mat3Mutable_Mat3$", ({
  e2: 1,
  R: 1,
  aM: 1,
  aN: 1
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
$p.ao = (function(m) {
  return m.gD;
});
$p.ap = (function(m) {
  return m.gE;
});
$p.aq = (function(m) {
  return m.gF;
});
$p.gd = (function(m) {
  return m.hG;
});
$p.ar = (function(m) {
  return m.gG;
});
$p.as = (function(m) {
  return m.gH;
});
$p.at = (function(m) {
  return m.gI;
});
$p.gh = (function(m) {
  return m.hH;
});
$p.au = (function(m) {
  return m.gJ;
});
$p.av = (function(m) {
  return m.gK;
});
$p.aw = (function(m) {
  return m.gL;
});
$p.gl = (function(m) {
  return m.hI;
});
$p.gm = (function(m) {
  return m.hJ;
});
$p.gn = (function(m) {
  return m.hK;
});
$p.go = (function(m) {
  return m.hL;
});
$p.gp = (function(m) {
  return m.hM;
});
$p.ga = (function(m, v) {
  m.gD = v;
});
$p.gb = (function(m, v) {
  m.gE = v;
});
$p.gc = (function(m, v) {
  m.gF = v;
});
$p.kM = (function(m, v) {
  m.hG = v;
});
$p.ge = (function(m, v) {
  m.gG = v;
});
$p.gf = (function(m, v) {
  m.gH = v;
});
$p.gg = (function(m, v) {
  m.gI = v;
});
$p.kN = (function(m, v) {
  m.hH = v;
});
$p.gi = (function(m, v) {
  m.gJ = v;
});
$p.gj = (function(m, v) {
  m.gK = v;
});
$p.gk = (function(m, v) {
  m.gL = v;
});
$p.kO = (function(m, v) {
  m.hI = v;
});
$p.kP = (function(m, v) {
  m.hJ = v;
});
$p.kQ = (function(m, v) {
  m.hK = v;
});
$p.kR = (function(m, v) {
  m.hL = v;
});
$p.kS = (function(m, v) {
  m.hM = v;
});
var $d_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$, "trivalibs.graphics.math.cpu.Mat4$given_Mat4Mutable_Mat4$", ({
  e5: 1,
  S: 1,
  aO: 1,
  aP: 1
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
$p.aV = (function(v) {
  return v.hO;
});
$p.aW = (function(v) {
  return v.hP;
});
$p.aX = (function(v) {
  return v.hQ;
});
$p.aU = (function(v) {
  return v.hN;
});
var $d_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$, "trivalibs.graphics.math.cpu.Quat$given_Vec4Mutable_Quat$", ({
  e9: 1,
  aR: 1,
  dW: 1,
  dZ: 1
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
  ee: 1,
  aQ: 1,
  dS: 1,
  dV: 1
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
$p.iv = (function(m) {
  var offset$proxy19 = (m.off | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy19, true));
});
$p.ix = (function(m) {
  var offset$proxy20 = ((4 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy20, true));
});
$p.iz = (function(m) {
  var offset$proxy21 = ((8 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy21, true));
});
$p.iB = (function(m) {
  var offset$proxy22 = ((16 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy22, true));
});
$p.iD = (function(m) {
  var offset$proxy23 = ((20 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy23, true));
});
$p.iF = (function(m) {
  var offset$proxy24 = ((24 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy24, true));
});
$p.iH = (function(m) {
  var offset$proxy25 = ((32 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy25, true));
});
$p.iJ = (function(m) {
  var offset$proxy26 = ((36 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy26, true));
});
$p.iL = (function(m) {
  var offset$proxy27 = ((40 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy27, true));
});
$p.iw = (function(m, v) {
  var value$proxy10 = Math.fround(v);
  var offset$proxy28 = (m.off | 0);
  m.dv.setFloat32(offset$proxy28, value$proxy10, true);
});
$p.iy = (function(m, v) {
  var value$proxy11 = Math.fround(v);
  var offset$proxy29 = ((4 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy29, value$proxy11, true);
});
$p.iA = (function(m, v) {
  var value$proxy12 = Math.fround(v);
  var offset$proxy30 = ((8 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy30, value$proxy12, true);
});
$p.iC = (function(m, v) {
  var value$proxy13 = Math.fround(v);
  var offset$proxy31 = ((16 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy31, value$proxy13, true);
});
$p.iE = (function(m, v) {
  var value$proxy14 = Math.fround(v);
  var offset$proxy32 = ((20 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy32, value$proxy14, true);
});
$p.iG = (function(m, v) {
  var value$proxy15 = Math.fround(v);
  var offset$proxy33 = ((24 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy33, value$proxy15, true);
});
$p.iI = (function(m, v) {
  var value$proxy16 = Math.fround(v);
  var offset$proxy34 = ((32 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy34, value$proxy16, true);
});
$p.iK = (function(m, v) {
  var value$proxy17 = Math.fround(v);
  var offset$proxy35 = ((36 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy35, value$proxy17, true);
});
$p.iM = (function(m, v) {
  var value$proxy18 = Math.fround(v);
  var offset$proxy36 = ((40 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy36, value$proxy18, true);
});
$p.ao = (function(m) {
  return this.iv(m);
});
$p.ap = (function(m) {
  return this.ix(m);
});
$p.aq = (function(m) {
  return this.iz(m);
});
$p.ar = (function(m) {
  return this.iB(m);
});
$p.as = (function(m) {
  return this.iD(m);
});
$p.at = (function(m) {
  return this.iF(m);
});
$p.au = (function(m) {
  return this.iH(m);
});
$p.av = (function(m) {
  return this.iJ(m);
});
$p.aw = (function(m) {
  return this.iL(m);
});
$p.ga = (function(m, v) {
  this.iw(m, v);
});
$p.gb = (function(m, v) {
  this.iy(m, v);
});
$p.gc = (function(m, v) {
  this.iA(m, v);
});
$p.ge = (function(m, v) {
  this.iC(m, v);
});
$p.gf = (function(m, v) {
  this.iE(m, v);
});
$p.gg = (function(m, v) {
  this.iG(m, v);
});
$p.gi = (function(m, v) {
  this.iI(m, v);
});
$p.gj = (function(m, v) {
  this.iK(m, v);
});
$p.gk = (function(m, v) {
  this.iM(m, v);
});
var $d_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$, "trivalibs.graphics.math.cpu.mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$", ({
  ek: 1,
  R: 1,
  aM: 1,
  aN: 1
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
$p.iv = (function(m) {
  var offset$proxy1 = (m.off | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy1, true));
});
$p.ix = (function(m) {
  var offset$proxy2 = ((4 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy2, true));
});
$p.iz = (function(m) {
  var offset$proxy3 = ((8 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy3, true));
});
$p.mn = (function(m) {
  var offset$proxy4 = ((12 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy4, true));
});
$p.iB = (function(m) {
  var offset$proxy5 = ((16 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy5, true));
});
$p.iD = (function(m) {
  var offset$proxy6 = ((20 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy6, true));
});
$p.iF = (function(m) {
  var offset$proxy7 = ((24 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy7, true));
});
$p.mp = (function(m) {
  var offset$proxy8 = ((28 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy8, true));
});
$p.iH = (function(m) {
  var offset$proxy9 = ((32 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy9, true));
});
$p.iJ = (function(m) {
  var offset$proxy10 = ((36 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy10, true));
});
$p.iL = (function(m) {
  var offset$proxy11 = ((40 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy11, true));
});
$p.mr = (function(m) {
  var offset$proxy12 = ((44 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy12, true));
});
$p.mt = (function(m) {
  var offset$proxy13 = ((48 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy13, true));
});
$p.mv = (function(m) {
  var offset$proxy14 = ((52 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy14, true));
});
$p.mx = (function(m) {
  var offset$proxy15 = ((56 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy15, true));
});
$p.mz = (function(m) {
  var offset$proxy16 = ((60 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy16, true));
});
$p.iw = (function(m, v) {
  var value$proxy1 = Math.fround(v);
  var offset$proxy17 = (m.off | 0);
  m.dv.setFloat32(offset$proxy17, value$proxy1, true);
});
$p.iy = (function(m, v) {
  var value$proxy2 = Math.fround(v);
  var offset$proxy18 = ((4 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy18, value$proxy2, true);
});
$p.iA = (function(m, v) {
  var value$proxy3 = Math.fround(v);
  var offset$proxy19 = ((8 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy19, value$proxy3, true);
});
$p.mo = (function(m, v) {
  var value$proxy4 = Math.fround(v);
  var offset$proxy20 = ((12 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy20, value$proxy4, true);
});
$p.iC = (function(m, v) {
  var value$proxy5 = Math.fround(v);
  var offset$proxy21 = ((16 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy21, value$proxy5, true);
});
$p.iE = (function(m, v) {
  var value$proxy6 = Math.fround(v);
  var offset$proxy22 = ((20 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy22, value$proxy6, true);
});
$p.iG = (function(m, v) {
  var value$proxy7 = Math.fround(v);
  var offset$proxy23 = ((24 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy23, value$proxy7, true);
});
$p.mq = (function(m, v) {
  var value$proxy8 = Math.fround(v);
  var offset$proxy24 = ((28 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy24, value$proxy8, true);
});
$p.iI = (function(m, v) {
  var value$proxy9 = Math.fround(v);
  var offset$proxy25 = ((32 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy25, value$proxy9, true);
});
$p.iK = (function(m, v) {
  var value$proxy10 = Math.fround(v);
  var offset$proxy26 = ((36 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy26, value$proxy10, true);
});
$p.iM = (function(m, v) {
  var value$proxy11 = Math.fround(v);
  var offset$proxy27 = ((40 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy27, value$proxy11, true);
});
$p.ms = (function(m, v) {
  var value$proxy12 = Math.fround(v);
  var offset$proxy28 = ((44 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy28, value$proxy12, true);
});
$p.mu = (function(m, v) {
  var value$proxy13 = Math.fround(v);
  var offset$proxy29 = ((48 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy29, value$proxy13, true);
});
$p.mw = (function(m, v) {
  var value$proxy14 = Math.fround(v);
  var offset$proxy30 = ((52 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy30, value$proxy14, true);
});
$p.my = (function(m, v) {
  var value$proxy15 = Math.fround(v);
  var offset$proxy31 = ((56 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy31, value$proxy15, true);
});
$p.mA = (function(m, v) {
  var value$proxy16 = Math.fround(v);
  var offset$proxy32 = ((60 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy32, value$proxy16, true);
});
$p.ao = (function(m) {
  return this.iv(m);
});
$p.ap = (function(m) {
  return this.ix(m);
});
$p.aq = (function(m) {
  return this.iz(m);
});
$p.gd = (function(m) {
  return this.mn(m);
});
$p.ar = (function(m) {
  return this.iB(m);
});
$p.as = (function(m) {
  return this.iD(m);
});
$p.at = (function(m) {
  return this.iF(m);
});
$p.gh = (function(m) {
  return this.mp(m);
});
$p.au = (function(m) {
  return this.iH(m);
});
$p.av = (function(m) {
  return this.iJ(m);
});
$p.aw = (function(m) {
  return this.iL(m);
});
$p.gl = (function(m) {
  return this.mr(m);
});
$p.gm = (function(m) {
  return this.mt(m);
});
$p.gn = (function(m) {
  return this.mv(m);
});
$p.go = (function(m) {
  return this.mx(m);
});
$p.gp = (function(m) {
  return this.mz(m);
});
$p.ga = (function(m, v) {
  this.iw(m, v);
});
$p.gb = (function(m, v) {
  this.iy(m, v);
});
$p.gc = (function(m, v) {
  this.iA(m, v);
});
$p.kM = (function(m, v) {
  this.mo(m, v);
});
$p.ge = (function(m, v) {
  this.iC(m, v);
});
$p.gf = (function(m, v) {
  this.iE(m, v);
});
$p.gg = (function(m, v) {
  this.iG(m, v);
});
$p.kN = (function(m, v) {
  this.mq(m, v);
});
$p.gi = (function(m, v) {
  this.iI(m, v);
});
$p.gj = (function(m, v) {
  this.iK(m, v);
});
$p.gk = (function(m, v) {
  this.iM(m, v);
});
$p.kO = (function(m, v) {
  this.ms(m, v);
});
$p.kP = (function(m, v) {
  this.mu(m, v);
});
$p.kQ = (function(m, v) {
  this.mw(m, v);
});
$p.kR = (function(m, v) {
  this.my(m, v);
});
$p.kS = (function(m, v) {
  this.mA(m, v);
});
var $d_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$, "trivalibs.graphics.math.cpu.mat4$package$Mat4Buffer$given_Mat4Mutable_StructRef$", ({
  en: 1,
  S: 1,
  aO: 1,
  aP: 1
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
  var all = [vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, uniformDecls, $thiz.fS, f$proxy1, g$proxy1];
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
  this.fT = null;
  this.fR = null;
  this.fS = null;
  this.fT = vertexBody;
  this.fR = fragmentBody;
  this.fS = helperFns;
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
$p.m = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_Ltrivalibs_graphics_shader_ShaderDef) && (((this.fT === x$0.fT) && (this.fR === x$0.fR)) && (this.fS === x$0.fS))));
});
$p.j = (function() {
  return $m_sr_ScalaRunTime$().lf(this);
});
$p.t = (function() {
  return 3;
});
$p.x = (function() {
  return "ShaderDef";
});
$p.k = (function(n) {
  switch (n) {
    case 0: {
      return this.fT;
      break;
    }
    case 1: {
      return this.fR;
      break;
    }
    case 2: {
      return this.fS;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException(("" + n));
    }
  }
});
function $isArrayOf_Ltrivalibs_graphics_shader_ShaderDef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aU)));
}
var $d_Ltrivalibs_graphics_shader_ShaderDef = new $TypeData().i($c_Ltrivalibs_graphics_shader_ShaderDef, "trivalibs.graphics.shader.ShaderDef", ({
  aU: 1,
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
  aX: 1,
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
  b0: 1,
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
  a1: 1,
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
  b5: 1,
  j: 1,
  i: 1,
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
  b9: 1,
  W: 1,
  U: 1,
  Y: 1,
  V: 1
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
  ba: 1,
  j: 1,
  i: 1,
  f: 1,
  a: 1
}));
function $isArrayOf_jl_SecurityException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bc)));
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
  bd: 1,
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
  bi: 1,
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
  bn: 1,
  j: 1,
  i: 1,
  f: 1,
  a: 1
}));
function $p_s_MatchError__objString__T($thiz) {
  if ((!$thiz.j1)) {
    if (($thiz.gu === null)) {
      var $x_1 = "null";
    } else {
      var this$1 = $thiz.gu;
      var cls = $objectGetClass(this$1);
      var ofClass = ((cls === null) ? "of a JS class" : ("of class " + cls.hp.N));
      try {
        var $x_1 = ((($thiz.gu + " (") + ofClass) + ")");
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
    this.gu = null;
    this.j0 = null;
    this.j1 = false;
    this.gu = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  hg() {
    return $p_s_MatchError__objString__T(this);
  }
}
var $d_s_MatchError = new $TypeData().i($c_s_MatchError, "scala.MatchError", ({
  by: 1,
  j: 1,
  i: 1,
  f: 1,
  a: 1
}));
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.fu = 0;
  this.j3 = 0;
  this.j2 = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.j2 = outer;
  this.fu = 0;
  this.j3 = outer.t();
}
$p = $c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $p;
$p.C = (function() {
  return (this.fu < this.j3);
});
$p.B = (function() {
  var result = this.j2.k(this.fu);
  this.fu = ((1 + this.fu) | 0);
  return result;
});
var $d_s_Product$$anon$1 = new $TypeData().i($c_s_Product$$anon$1, "scala.Product$$anon$1", ({
  bA: 1,
  n: 1,
  d: 1,
  e: 1,
  s: 1
}));
/** @constructor */
function $c_T1(_1) {
  this.eM = null;
  this.eM = _1;
}
$p = $c_T1.prototype = new $h_O();
$p.constructor = $c_T1;
/** @constructor */
function $h_T1() {
}
$h_T1.prototype = $p;
$p.t = (function() {
  return 1;
});
$p.k = (function(n) {
  return $f_s_Product1__productElement__I__O(this, n);
});
$p.j = (function() {
  return (("(" + this.eM) + ")");
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
$p.m = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T1) && $m_sr_BoxesRunTime$().b(this.eM, x$1.eM)));
});
function $isArrayOf_T1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a4)));
}
var $d_T1 = new $TypeData().i($c_T1, "scala.Tuple1", ({
  a4: 1,
  bB: 1,
  c: 1,
  b: 1,
  a: 1
}));
/** @constructor */
function $c_T10(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10) {
  this.eN = null;
  this.aZ = null;
  this.b0 = null;
  this.b1 = null;
  this.b2 = null;
  this.b3 = null;
  this.b4 = null;
  this.b5 = null;
  this.b6 = null;
  this.aY = null;
  this.eN = _1;
  this.aZ = _2;
  this.b0 = _3;
  this.b1 = _4;
  this.b2 = _5;
  this.b3 = _6;
  this.b4 = _7;
  this.b5 = _8;
  this.b6 = _9;
  this.aY = _10;
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
$p.t = (function() {
  return 10;
});
$p.k = (function(n) {
  return $f_s_Product10__productElement__I__O(this, n);
});
$p.q = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, 2104595240, true);
});
$p.m = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T10) && ((((((((($m_sr_BoxesRunTime$().b(this.eN, x$0.eN) && $m_sr_BoxesRunTime$().b(this.aZ, x$0.aZ)) && $m_sr_BoxesRunTime$().b(this.b0, x$0.b0)) && $m_sr_BoxesRunTime$().b(this.b1, x$0.b1)) && $m_sr_BoxesRunTime$().b(this.b2, x$0.b2)) && $m_sr_BoxesRunTime$().b(this.b3, x$0.b3)) && $m_sr_BoxesRunTime$().b(this.b4, x$0.b4)) && $m_sr_BoxesRunTime$().b(this.b5, x$0.b5)) && $m_sr_BoxesRunTime$().b(this.b6, x$0.b6)) && $m_sr_BoxesRunTime$().b(this.aY, x$0.aY))));
});
$p.x = (function() {
  return "Tuple10";
});
$p.j = (function() {
  return (((((((((((((((((((("(" + this.eN) + ",") + this.aZ) + ",") + this.b0) + ",") + this.b1) + ",") + this.b2) + ",") + this.b3) + ",") + this.b4) + ",") + this.b5) + ",") + this.b6) + ",") + this.aY) + ")");
});
function $isArrayOf_T10(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a5)));
}
var $d_T10 = new $TypeData().i($c_T10, "scala.Tuple10", ({
  a5: 1,
  b: 1,
  c: 1,
  bC: 1,
  a: 1
}));
/** @constructor */
function $c_T11(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11) {
  this.eO = null;
  this.b9 = null;
  this.ba = null;
  this.bb = null;
  this.bc = null;
  this.bd = null;
  this.be = null;
  this.bf = null;
  this.bg = null;
  this.b7 = null;
  this.b8 = null;
  this.eO = _1;
  this.b9 = _2;
  this.ba = _3;
  this.bb = _4;
  this.bc = _5;
  this.bd = _6;
  this.be = _7;
  this.bf = _8;
  this.bg = _9;
  this.b7 = _10;
  this.b8 = _11;
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
$p.t = (function() {
  return 11;
});
$p.k = (function(n) {
  return $f_s_Product11__productElement__I__O(this, n);
});
$p.q = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, 838406606, true);
});
$p.m = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T11) && (((((((((($m_sr_BoxesRunTime$().b(this.eO, x$0.eO) && $m_sr_BoxesRunTime$().b(this.b9, x$0.b9)) && $m_sr_BoxesRunTime$().b(this.ba, x$0.ba)) && $m_sr_BoxesRunTime$().b(this.bb, x$0.bb)) && $m_sr_BoxesRunTime$().b(this.bc, x$0.bc)) && $m_sr_BoxesRunTime$().b(this.bd, x$0.bd)) && $m_sr_BoxesRunTime$().b(this.be, x$0.be)) && $m_sr_BoxesRunTime$().b(this.bf, x$0.bf)) && $m_sr_BoxesRunTime$().b(this.bg, x$0.bg)) && $m_sr_BoxesRunTime$().b(this.b7, x$0.b7)) && $m_sr_BoxesRunTime$().b(this.b8, x$0.b8))));
});
$p.x = (function() {
  return "Tuple11";
});
$p.j = (function() {
  return (((((((((((((((((((((("(" + this.eO) + ",") + this.b9) + ",") + this.ba) + ",") + this.bb) + ",") + this.bc) + ",") + this.bd) + ",") + this.be) + ",") + this.bf) + ",") + this.bg) + ",") + this.b7) + ",") + this.b8) + ")");
});
function $isArrayOf_T11(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a6)));
}
var $d_T11 = new $TypeData().i($c_T11, "scala.Tuple11", ({
  a6: 1,
  b: 1,
  c: 1,
  bD: 1,
  a: 1
}));
/** @constructor */
function $c_T12(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12) {
  this.eP = null;
  this.bk = null;
  this.bl = null;
  this.bm = null;
  this.bn = null;
  this.bo = null;
  this.bp = null;
  this.bq = null;
  this.br = null;
  this.bh = null;
  this.bi = null;
  this.bj = null;
  this.eP = _1;
  this.bk = _2;
  this.bl = _3;
  this.bm = _4;
  this.bn = _5;
  this.bo = _6;
  this.bp = _7;
  this.bq = _8;
  this.br = _9;
  this.bh = _10;
  this.bi = _11;
  this.bj = _12;
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
$p.t = (function() {
  return 12;
});
$p.k = (function(n) {
  return $f_s_Product12__productElement__I__O(this, n);
});
$p.q = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, (-1964145863), true);
});
$p.m = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T12) && ((((((((((($m_sr_BoxesRunTime$().b(this.eP, x$0.eP) && $m_sr_BoxesRunTime$().b(this.bk, x$0.bk)) && $m_sr_BoxesRunTime$().b(this.bl, x$0.bl)) && $m_sr_BoxesRunTime$().b(this.bm, x$0.bm)) && $m_sr_BoxesRunTime$().b(this.bn, x$0.bn)) && $m_sr_BoxesRunTime$().b(this.bo, x$0.bo)) && $m_sr_BoxesRunTime$().b(this.bp, x$0.bp)) && $m_sr_BoxesRunTime$().b(this.bq, x$0.bq)) && $m_sr_BoxesRunTime$().b(this.br, x$0.br)) && $m_sr_BoxesRunTime$().b(this.bh, x$0.bh)) && $m_sr_BoxesRunTime$().b(this.bi, x$0.bi)) && $m_sr_BoxesRunTime$().b(this.bj, x$0.bj))));
});
$p.x = (function() {
  return "Tuple12";
});
$p.j = (function() {
  return (((((((((((((((((((((((("(" + this.eP) + ",") + this.bk) + ",") + this.bl) + ",") + this.bm) + ",") + this.bn) + ",") + this.bo) + ",") + this.bp) + ",") + this.bq) + ",") + this.br) + ",") + this.bh) + ",") + this.bi) + ",") + this.bj) + ")");
});
function $isArrayOf_T12(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a7)));
}
var $d_T12 = new $TypeData().i($c_T12, "scala.Tuple12", ({
  a7: 1,
  b: 1,
  c: 1,
  bE: 1,
  a: 1
}));
/** @constructor */
function $c_T13(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13) {
  this.eQ = null;
  this.bw = null;
  this.bx = null;
  this.by = null;
  this.bz = null;
  this.bA = null;
  this.bB = null;
  this.bC = null;
  this.bD = null;
  this.bs = null;
  this.bt = null;
  this.bu = null;
  this.bv = null;
  this.eQ = _1;
  this.bw = _2;
  this.bx = _3;
  this.by = _4;
  this.bz = _5;
  this.bA = _6;
  this.bB = _7;
  this.bC = _8;
  this.bD = _9;
  this.bs = _10;
  this.bt = _11;
  this.bu = _12;
  this.bv = _13;
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
$p.t = (function() {
  return 13;
});
$p.k = (function(n) {
  return $f_s_Product13__productElement__I__O(this, n);
});
$p.q = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, 1224168367, true);
});
$p.m = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T13) && (((((((((((($m_sr_BoxesRunTime$().b(this.eQ, x$0.eQ) && $m_sr_BoxesRunTime$().b(this.bw, x$0.bw)) && $m_sr_BoxesRunTime$().b(this.bx, x$0.bx)) && $m_sr_BoxesRunTime$().b(this.by, x$0.by)) && $m_sr_BoxesRunTime$().b(this.bz, x$0.bz)) && $m_sr_BoxesRunTime$().b(this.bA, x$0.bA)) && $m_sr_BoxesRunTime$().b(this.bB, x$0.bB)) && $m_sr_BoxesRunTime$().b(this.bC, x$0.bC)) && $m_sr_BoxesRunTime$().b(this.bD, x$0.bD)) && $m_sr_BoxesRunTime$().b(this.bs, x$0.bs)) && $m_sr_BoxesRunTime$().b(this.bt, x$0.bt)) && $m_sr_BoxesRunTime$().b(this.bu, x$0.bu)) && $m_sr_BoxesRunTime$().b(this.bv, x$0.bv))));
});
$p.x = (function() {
  return "Tuple13";
});
$p.j = (function() {
  return (((((((((((((((((((((((((("(" + this.eQ) + ",") + this.bw) + ",") + this.bx) + ",") + this.by) + ",") + this.bz) + ",") + this.bA) + ",") + this.bB) + ",") + this.bC) + ",") + this.bD) + ",") + this.bs) + ",") + this.bt) + ",") + this.bu) + ",") + this.bv) + ")");
});
function $isArrayOf_T13(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a8)));
}
var $d_T13 = new $TypeData().i($c_T13, "scala.Tuple13", ({
  a8: 1,
  b: 1,
  c: 1,
  bF: 1,
  a: 1
}));
/** @constructor */
function $c_T14(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14) {
  this.eR = null;
  this.bJ = null;
  this.bK = null;
  this.bL = null;
  this.bM = null;
  this.bN = null;
  this.bO = null;
  this.bP = null;
  this.bQ = null;
  this.bE = null;
  this.bF = null;
  this.bG = null;
  this.bH = null;
  this.bI = null;
  this.eR = _1;
  this.bJ = _2;
  this.bK = _3;
  this.bL = _4;
  this.bM = _5;
  this.bN = _6;
  this.bO = _7;
  this.bP = _8;
  this.bQ = _9;
  this.bE = _10;
  this.bF = _11;
  this.bG = _12;
  this.bH = _13;
  this.bI = _14;
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
$p.t = (function() {
  return 14;
});
$p.k = (function(n) {
  return $f_s_Product14__productElement__I__O(this, n);
});
$p.q = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, 147759069, true);
});
$p.m = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T14) && ((((((((((((($m_sr_BoxesRunTime$().b(this.eR, x$0.eR) && $m_sr_BoxesRunTime$().b(this.bJ, x$0.bJ)) && $m_sr_BoxesRunTime$().b(this.bK, x$0.bK)) && $m_sr_BoxesRunTime$().b(this.bL, x$0.bL)) && $m_sr_BoxesRunTime$().b(this.bM, x$0.bM)) && $m_sr_BoxesRunTime$().b(this.bN, x$0.bN)) && $m_sr_BoxesRunTime$().b(this.bO, x$0.bO)) && $m_sr_BoxesRunTime$().b(this.bP, x$0.bP)) && $m_sr_BoxesRunTime$().b(this.bQ, x$0.bQ)) && $m_sr_BoxesRunTime$().b(this.bE, x$0.bE)) && $m_sr_BoxesRunTime$().b(this.bF, x$0.bF)) && $m_sr_BoxesRunTime$().b(this.bG, x$0.bG)) && $m_sr_BoxesRunTime$().b(this.bH, x$0.bH)) && $m_sr_BoxesRunTime$().b(this.bI, x$0.bI))));
});
$p.x = (function() {
  return "Tuple14";
});
$p.j = (function() {
  return (((((((((((((((((((((((((((("(" + this.eR) + ",") + this.bJ) + ",") + this.bK) + ",") + this.bL) + ",") + this.bM) + ",") + this.bN) + ",") + this.bO) + ",") + this.bP) + ",") + this.bQ) + ",") + this.bE) + ",") + this.bF) + ",") + this.bG) + ",") + this.bH) + ",") + this.bI) + ")");
});
function $isArrayOf_T14(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a9)));
}
var $d_T14 = new $TypeData().i($c_T14, "scala.Tuple14", ({
  a9: 1,
  b: 1,
  c: 1,
  bG: 1,
  a: 1
}));
/** @constructor */
function $c_T15(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15) {
  this.eS = null;
  this.bX = null;
  this.bY = null;
  this.bZ = null;
  this.c0 = null;
  this.c1 = null;
  this.c2 = null;
  this.c3 = null;
  this.c4 = null;
  this.bR = null;
  this.bS = null;
  this.bT = null;
  this.bU = null;
  this.bV = null;
  this.bW = null;
  this.eS = _1;
  this.bX = _2;
  this.bY = _3;
  this.bZ = _4;
  this.c0 = _5;
  this.c1 = _6;
  this.c2 = _7;
  this.c3 = _8;
  this.c4 = _9;
  this.bR = _10;
  this.bS = _11;
  this.bT = _12;
  this.bU = _13;
  this.bV = _14;
  this.bW = _15;
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
$p.t = (function() {
  return 15;
});
$p.k = (function(n) {
  return $f_s_Product15__productElement__I__O(this, n);
});
$p.q = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, 1834180931, true);
});
$p.m = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T15) && (((((((((((((($m_sr_BoxesRunTime$().b(this.eS, x$0.eS) && $m_sr_BoxesRunTime$().b(this.bX, x$0.bX)) && $m_sr_BoxesRunTime$().b(this.bY, x$0.bY)) && $m_sr_BoxesRunTime$().b(this.bZ, x$0.bZ)) && $m_sr_BoxesRunTime$().b(this.c0, x$0.c0)) && $m_sr_BoxesRunTime$().b(this.c1, x$0.c1)) && $m_sr_BoxesRunTime$().b(this.c2, x$0.c2)) && $m_sr_BoxesRunTime$().b(this.c3, x$0.c3)) && $m_sr_BoxesRunTime$().b(this.c4, x$0.c4)) && $m_sr_BoxesRunTime$().b(this.bR, x$0.bR)) && $m_sr_BoxesRunTime$().b(this.bS, x$0.bS)) && $m_sr_BoxesRunTime$().b(this.bT, x$0.bT)) && $m_sr_BoxesRunTime$().b(this.bU, x$0.bU)) && $m_sr_BoxesRunTime$().b(this.bV, x$0.bV)) && $m_sr_BoxesRunTime$().b(this.bW, x$0.bW))));
});
$p.x = (function() {
  return "Tuple15";
});
$p.j = (function() {
  return (((((((((((((((((((((((((((((("(" + this.eS) + ",") + this.bX) + ",") + this.bY) + ",") + this.bZ) + ",") + this.c0) + ",") + this.c1) + ",") + this.c2) + ",") + this.c3) + ",") + this.c4) + ",") + this.bR) + ",") + this.bS) + ",") + this.bT) + ",") + this.bU) + ",") + this.bV) + ",") + this.bW) + ")");
});
function $isArrayOf_T15(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aa)));
}
var $d_T15 = new $TypeData().i($c_T15, "scala.Tuple15", ({
  aa: 1,
  b: 1,
  c: 1,
  bH: 1,
  a: 1
}));
/** @constructor */
function $c_T16(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16) {
  this.eT = null;
  this.cc = null;
  this.cd = null;
  this.ce = null;
  this.cf = null;
  this.cg = null;
  this.ch = null;
  this.ci = null;
  this.cj = null;
  this.c5 = null;
  this.c6 = null;
  this.c7 = null;
  this.c8 = null;
  this.c9 = null;
  this.ca = null;
  this.cb = null;
  this.eT = _1;
  this.cc = _2;
  this.cd = _3;
  this.ce = _4;
  this.cf = _5;
  this.cg = _6;
  this.ch = _7;
  this.ci = _8;
  this.cj = _9;
  this.c5 = _10;
  this.c6 = _11;
  this.c7 = _12;
  this.c8 = _13;
  this.c9 = _14;
  this.ca = _15;
  this.cb = _16;
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
$p.t = (function() {
  return 16;
});
$p.k = (function(n) {
  return $f_s_Product16__productElement__I__O(this, n);
});
$p.q = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, 499793902, true);
});
$p.m = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T16) && ((((((((((((((($m_sr_BoxesRunTime$().b(this.eT, x$0.eT) && $m_sr_BoxesRunTime$().b(this.cc, x$0.cc)) && $m_sr_BoxesRunTime$().b(this.cd, x$0.cd)) && $m_sr_BoxesRunTime$().b(this.ce, x$0.ce)) && $m_sr_BoxesRunTime$().b(this.cf, x$0.cf)) && $m_sr_BoxesRunTime$().b(this.cg, x$0.cg)) && $m_sr_BoxesRunTime$().b(this.ch, x$0.ch)) && $m_sr_BoxesRunTime$().b(this.ci, x$0.ci)) && $m_sr_BoxesRunTime$().b(this.cj, x$0.cj)) && $m_sr_BoxesRunTime$().b(this.c5, x$0.c5)) && $m_sr_BoxesRunTime$().b(this.c6, x$0.c6)) && $m_sr_BoxesRunTime$().b(this.c7, x$0.c7)) && $m_sr_BoxesRunTime$().b(this.c8, x$0.c8)) && $m_sr_BoxesRunTime$().b(this.c9, x$0.c9)) && $m_sr_BoxesRunTime$().b(this.ca, x$0.ca)) && $m_sr_BoxesRunTime$().b(this.cb, x$0.cb))));
});
$p.x = (function() {
  return "Tuple16";
});
$p.j = (function() {
  return (((((((((((((((((((((((((((((((("(" + this.eT) + ",") + this.cc) + ",") + this.cd) + ",") + this.ce) + ",") + this.cf) + ",") + this.cg) + ",") + this.ch) + ",") + this.ci) + ",") + this.cj) + ",") + this.c5) + ",") + this.c6) + ",") + this.c7) + ",") + this.c8) + ",") + this.c9) + ",") + this.ca) + ",") + this.cb) + ")");
});
function $isArrayOf_T16(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ab)));
}
var $d_T16 = new $TypeData().i($c_T16, "scala.Tuple16", ({
  ab: 1,
  b: 1,
  c: 1,
  bI: 1,
  a: 1
}));
/** @constructor */
function $c_T17(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17) {
  this.eU = null;
  this.cs = null;
  this.ct = null;
  this.cu = null;
  this.cv = null;
  this.cw = null;
  this.cx = null;
  this.cy = null;
  this.cz = null;
  this.ck = null;
  this.cl = null;
  this.cm = null;
  this.cn = null;
  this.co = null;
  this.cp = null;
  this.cq = null;
  this.cr = null;
  this.eU = _1;
  this.cs = _2;
  this.ct = _3;
  this.cu = _4;
  this.cv = _5;
  this.cw = _6;
  this.cx = _7;
  this.cy = _8;
  this.cz = _9;
  this.ck = _10;
  this.cl = _11;
  this.cm = _12;
  this.cn = _13;
  this.co = _14;
  this.cp = _15;
  this.cq = _16;
  this.cr = _17;
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
$p.t = (function() {
  return 17;
});
$p.k = (function(n) {
  return $f_s_Product17__productElement__I__O(this, n);
});
$p.q = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, (-934366247), true);
});
$p.m = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T17) && (((((((((((((((($m_sr_BoxesRunTime$().b(this.eU, x$0.eU) && $m_sr_BoxesRunTime$().b(this.cs, x$0.cs)) && $m_sr_BoxesRunTime$().b(this.ct, x$0.ct)) && $m_sr_BoxesRunTime$().b(this.cu, x$0.cu)) && $m_sr_BoxesRunTime$().b(this.cv, x$0.cv)) && $m_sr_BoxesRunTime$().b(this.cw, x$0.cw)) && $m_sr_BoxesRunTime$().b(this.cx, x$0.cx)) && $m_sr_BoxesRunTime$().b(this.cy, x$0.cy)) && $m_sr_BoxesRunTime$().b(this.cz, x$0.cz)) && $m_sr_BoxesRunTime$().b(this.ck, x$0.ck)) && $m_sr_BoxesRunTime$().b(this.cl, x$0.cl)) && $m_sr_BoxesRunTime$().b(this.cm, x$0.cm)) && $m_sr_BoxesRunTime$().b(this.cn, x$0.cn)) && $m_sr_BoxesRunTime$().b(this.co, x$0.co)) && $m_sr_BoxesRunTime$().b(this.cp, x$0.cp)) && $m_sr_BoxesRunTime$().b(this.cq, x$0.cq)) && $m_sr_BoxesRunTime$().b(this.cr, x$0.cr))));
});
$p.x = (function() {
  return "Tuple17";
});
$p.j = (function() {
  return (((((((((((((((((((((((((((((((((("(" + this.eU) + ",") + this.cs) + ",") + this.ct) + ",") + this.cu) + ",") + this.cv) + ",") + this.cw) + ",") + this.cx) + ",") + this.cy) + ",") + this.cz) + ",") + this.ck) + ",") + this.cl) + ",") + this.cm) + ",") + this.cn) + ",") + this.co) + ",") + this.cp) + ",") + this.cq) + ",") + this.cr) + ")");
});
function $isArrayOf_T17(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ac)));
}
var $d_T17 = new $TypeData().i($c_T17, "scala.Tuple17", ({
  ac: 1,
  b: 1,
  c: 1,
  bJ: 1,
  a: 1
}));
/** @constructor */
function $c_T18(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18) {
  this.eV = null;
  this.cJ = null;
  this.cK = null;
  this.cL = null;
  this.cM = null;
  this.cN = null;
  this.cO = null;
  this.cP = null;
  this.cQ = null;
  this.cA = null;
  this.cB = null;
  this.cC = null;
  this.cD = null;
  this.cE = null;
  this.cF = null;
  this.cG = null;
  this.cH = null;
  this.cI = null;
  this.eV = _1;
  this.cJ = _2;
  this.cK = _3;
  this.cL = _4;
  this.cM = _5;
  this.cN = _6;
  this.cO = _7;
  this.cP = _8;
  this.cQ = _9;
  this.cA = _10;
  this.cB = _11;
  this.cC = _12;
  this.cD = _13;
  this.cE = _14;
  this.cF = _15;
  this.cG = _16;
  this.cH = _17;
  this.cI = _18;
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
$p.t = (function() {
  return 18;
});
$p.k = (function(n) {
  return $f_s_Product18__productElement__I__O(this, n);
});
$p.q = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, (-937041276), true);
});
$p.m = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T18) && ((((((((((((((((($m_sr_BoxesRunTime$().b(this.eV, x$0.eV) && $m_sr_BoxesRunTime$().b(this.cJ, x$0.cJ)) && $m_sr_BoxesRunTime$().b(this.cK, x$0.cK)) && $m_sr_BoxesRunTime$().b(this.cL, x$0.cL)) && $m_sr_BoxesRunTime$().b(this.cM, x$0.cM)) && $m_sr_BoxesRunTime$().b(this.cN, x$0.cN)) && $m_sr_BoxesRunTime$().b(this.cO, x$0.cO)) && $m_sr_BoxesRunTime$().b(this.cP, x$0.cP)) && $m_sr_BoxesRunTime$().b(this.cQ, x$0.cQ)) && $m_sr_BoxesRunTime$().b(this.cA, x$0.cA)) && $m_sr_BoxesRunTime$().b(this.cB, x$0.cB)) && $m_sr_BoxesRunTime$().b(this.cC, x$0.cC)) && $m_sr_BoxesRunTime$().b(this.cD, x$0.cD)) && $m_sr_BoxesRunTime$().b(this.cE, x$0.cE)) && $m_sr_BoxesRunTime$().b(this.cF, x$0.cF)) && $m_sr_BoxesRunTime$().b(this.cG, x$0.cG)) && $m_sr_BoxesRunTime$().b(this.cH, x$0.cH)) && $m_sr_BoxesRunTime$().b(this.cI, x$0.cI))));
});
$p.x = (function() {
  return "Tuple18";
});
$p.j = (function() {
  return (((((((((((((((((((((((((((((((((((("(" + this.eV) + ",") + this.cJ) + ",") + this.cK) + ",") + this.cL) + ",") + this.cM) + ",") + this.cN) + ",") + this.cO) + ",") + this.cP) + ",") + this.cQ) + ",") + this.cA) + ",") + this.cB) + ",") + this.cC) + ",") + this.cD) + ",") + this.cE) + ",") + this.cF) + ",") + this.cG) + ",") + this.cH) + ",") + this.cI) + ")");
});
function $isArrayOf_T18(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ad)));
}
var $d_T18 = new $TypeData().i($c_T18, "scala.Tuple18", ({
  ad: 1,
  b: 1,
  c: 1,
  bK: 1,
  a: 1
}));
/** @constructor */
function $c_T19(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19) {
  this.eW = null;
  this.d1 = null;
  this.d2 = null;
  this.d3 = null;
  this.d4 = null;
  this.d5 = null;
  this.d6 = null;
  this.d7 = null;
  this.d8 = null;
  this.cR = null;
  this.cS = null;
  this.cT = null;
  this.cU = null;
  this.cV = null;
  this.cW = null;
  this.cX = null;
  this.cY = null;
  this.cZ = null;
  this.d0 = null;
  this.eW = _1;
  this.d1 = _2;
  this.d2 = _3;
  this.d3 = _4;
  this.d4 = _5;
  this.d5 = _6;
  this.d6 = _7;
  this.d7 = _8;
  this.d8 = _9;
  this.cR = _10;
  this.cS = _11;
  this.cT = _12;
  this.cU = _13;
  this.cV = _14;
  this.cW = _15;
  this.cX = _16;
  this.cY = _17;
  this.cZ = _18;
  this.d0 = _19;
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
$p.t = (function() {
  return 19;
});
$p.k = (function(n) {
  return $f_s_Product19__productElement__I__O(this, n);
});
$p.q = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, (-1955940499), true);
});
$p.m = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T19) && (((((((((((((((((($m_sr_BoxesRunTime$().b(this.eW, x$0.eW) && $m_sr_BoxesRunTime$().b(this.d1, x$0.d1)) && $m_sr_BoxesRunTime$().b(this.d2, x$0.d2)) && $m_sr_BoxesRunTime$().b(this.d3, x$0.d3)) && $m_sr_BoxesRunTime$().b(this.d4, x$0.d4)) && $m_sr_BoxesRunTime$().b(this.d5, x$0.d5)) && $m_sr_BoxesRunTime$().b(this.d6, x$0.d6)) && $m_sr_BoxesRunTime$().b(this.d7, x$0.d7)) && $m_sr_BoxesRunTime$().b(this.d8, x$0.d8)) && $m_sr_BoxesRunTime$().b(this.cR, x$0.cR)) && $m_sr_BoxesRunTime$().b(this.cS, x$0.cS)) && $m_sr_BoxesRunTime$().b(this.cT, x$0.cT)) && $m_sr_BoxesRunTime$().b(this.cU, x$0.cU)) && $m_sr_BoxesRunTime$().b(this.cV, x$0.cV)) && $m_sr_BoxesRunTime$().b(this.cW, x$0.cW)) && $m_sr_BoxesRunTime$().b(this.cX, x$0.cX)) && $m_sr_BoxesRunTime$().b(this.cY, x$0.cY)) && $m_sr_BoxesRunTime$().b(this.cZ, x$0.cZ)) && $m_sr_BoxesRunTime$().b(this.d0, x$0.d0))));
});
$p.x = (function() {
  return "Tuple19";
});
$p.j = (function() {
  return (((((((((((((((((((((((((((((((((((((("(" + this.eW) + ",") + this.d1) + ",") + this.d2) + ",") + this.d3) + ",") + this.d4) + ",") + this.d5) + ",") + this.d6) + ",") + this.d7) + ",") + this.d8) + ",") + this.cR) + ",") + this.cS) + ",") + this.cT) + ",") + this.cU) + ",") + this.cV) + ",") + this.cW) + ",") + this.cX) + ",") + this.cY) + ",") + this.cZ) + ",") + this.d0) + ")");
});
function $isArrayOf_T19(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ae)));
}
var $d_T19 = new $TypeData().i($c_T19, "scala.Tuple19", ({
  ae: 1,
  b: 1,
  c: 1,
  bL: 1,
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
$p.t = (function() {
  return 2;
});
$p.k = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n);
});
$p.j = (function() {
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
$p.m = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T2) && ($m_sr_BoxesRunTime$().b(this.af, x$1.af) && $m_sr_BoxesRunTime$().b(this.a8, x$1.a8))));
});
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.af)));
}
var $d_T2 = new $TypeData().i($c_T2, "scala.Tuple2", ({
  af: 1,
  bM: 1,
  c: 1,
  b: 1,
  a: 1
}));
/** @constructor */
function $c_T20(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20) {
  this.eX = null;
  this.dj = null;
  this.dl = null;
  this.dm = null;
  this.dn = null;
  this.dp = null;
  this.dq = null;
  this.dr = null;
  this.ds = null;
  this.d9 = null;
  this.da = null;
  this.db = null;
  this.dc = null;
  this.dd = null;
  this.de = null;
  this.df = null;
  this.dg = null;
  this.dh = null;
  this.di = null;
  this.dk = null;
  this.eX = _1;
  this.dj = _2;
  this.dl = _3;
  this.dm = _4;
  this.dn = _5;
  this.dp = _6;
  this.dq = _7;
  this.dr = _8;
  this.ds = _9;
  this.d9 = _10;
  this.da = _11;
  this.db = _12;
  this.dc = _13;
  this.dd = _14;
  this.de = _15;
  this.df = _16;
  this.dg = _17;
  this.dh = _18;
  this.di = _19;
  this.dk = _20;
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
$p.t = (function() {
  return 20;
});
$p.k = (function(n) {
  return $f_s_Product20__productElement__I__O(this, n);
});
$p.q = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, 1328807075, true);
});
$p.m = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T20) && ((((((((((((((((((($m_sr_BoxesRunTime$().b(this.eX, x$0.eX) && $m_sr_BoxesRunTime$().b(this.dj, x$0.dj)) && $m_sr_BoxesRunTime$().b(this.dl, x$0.dl)) && $m_sr_BoxesRunTime$().b(this.dm, x$0.dm)) && $m_sr_BoxesRunTime$().b(this.dn, x$0.dn)) && $m_sr_BoxesRunTime$().b(this.dp, x$0.dp)) && $m_sr_BoxesRunTime$().b(this.dq, x$0.dq)) && $m_sr_BoxesRunTime$().b(this.dr, x$0.dr)) && $m_sr_BoxesRunTime$().b(this.ds, x$0.ds)) && $m_sr_BoxesRunTime$().b(this.d9, x$0.d9)) && $m_sr_BoxesRunTime$().b(this.da, x$0.da)) && $m_sr_BoxesRunTime$().b(this.db, x$0.db)) && $m_sr_BoxesRunTime$().b(this.dc, x$0.dc)) && $m_sr_BoxesRunTime$().b(this.dd, x$0.dd)) && $m_sr_BoxesRunTime$().b(this.de, x$0.de)) && $m_sr_BoxesRunTime$().b(this.df, x$0.df)) && $m_sr_BoxesRunTime$().b(this.dg, x$0.dg)) && $m_sr_BoxesRunTime$().b(this.dh, x$0.dh)) && $m_sr_BoxesRunTime$().b(this.di, x$0.di)) && $m_sr_BoxesRunTime$().b(this.dk, x$0.dk))));
});
$p.x = (function() {
  return "Tuple20";
});
$p.j = (function() {
  return (((((((((((((((((((((((((((((((((((((((("(" + this.eX) + ",") + this.dj) + ",") + this.dl) + ",") + this.dm) + ",") + this.dn) + ",") + this.dp) + ",") + this.dq) + ",") + this.dr) + ",") + this.ds) + ",") + this.d9) + ",") + this.da) + ",") + this.db) + ",") + this.dc) + ",") + this.dd) + ",") + this.de) + ",") + this.df) + ",") + this.dg) + ",") + this.dh) + ",") + this.di) + ",") + this.dk) + ")");
});
function $isArrayOf_T20(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ag)));
}
var $d_T20 = new $TypeData().i($c_T20, "scala.Tuple20", ({
  ag: 1,
  b: 1,
  c: 1,
  bN: 1,
  a: 1
}));
/** @constructor */
function $c_T21(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21) {
  this.eY = null;
  this.dD = null;
  this.dG = null;
  this.dH = null;
  this.dI = null;
  this.dJ = null;
  this.dK = null;
  this.dL = null;
  this.dM = null;
  this.dt = null;
  this.du = null;
  this.dv = null;
  this.dw = null;
  this.dx = null;
  this.dy = null;
  this.dz = null;
  this.dA = null;
  this.dB = null;
  this.dC = null;
  this.dE = null;
  this.dF = null;
  this.eY = _1;
  this.dD = _2;
  this.dG = _3;
  this.dH = _4;
  this.dI = _5;
  this.dJ = _6;
  this.dK = _7;
  this.dL = _8;
  this.dM = _9;
  this.dt = _10;
  this.du = _11;
  this.dv = _12;
  this.dw = _13;
  this.dx = _14;
  this.dy = _15;
  this.dz = _16;
  this.dA = _17;
  this.dB = _18;
  this.dC = _19;
  this.dE = _20;
  this.dF = _21;
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
$p.t = (function() {
  return 21;
});
$p.k = (function(n) {
  return $f_s_Product21__productElement__I__O(this, n);
});
$p.q = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, (-21288119), true);
});
$p.m = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T21) && (((((((((((((((((((($m_sr_BoxesRunTime$().b(this.eY, x$0.eY) && $m_sr_BoxesRunTime$().b(this.dD, x$0.dD)) && $m_sr_BoxesRunTime$().b(this.dG, x$0.dG)) && $m_sr_BoxesRunTime$().b(this.dH, x$0.dH)) && $m_sr_BoxesRunTime$().b(this.dI, x$0.dI)) && $m_sr_BoxesRunTime$().b(this.dJ, x$0.dJ)) && $m_sr_BoxesRunTime$().b(this.dK, x$0.dK)) && $m_sr_BoxesRunTime$().b(this.dL, x$0.dL)) && $m_sr_BoxesRunTime$().b(this.dM, x$0.dM)) && $m_sr_BoxesRunTime$().b(this.dt, x$0.dt)) && $m_sr_BoxesRunTime$().b(this.du, x$0.du)) && $m_sr_BoxesRunTime$().b(this.dv, x$0.dv)) && $m_sr_BoxesRunTime$().b(this.dw, x$0.dw)) && $m_sr_BoxesRunTime$().b(this.dx, x$0.dx)) && $m_sr_BoxesRunTime$().b(this.dy, x$0.dy)) && $m_sr_BoxesRunTime$().b(this.dz, x$0.dz)) && $m_sr_BoxesRunTime$().b(this.dA, x$0.dA)) && $m_sr_BoxesRunTime$().b(this.dB, x$0.dB)) && $m_sr_BoxesRunTime$().b(this.dC, x$0.dC)) && $m_sr_BoxesRunTime$().b(this.dE, x$0.dE)) && $m_sr_BoxesRunTime$().b(this.dF, x$0.dF))));
});
$p.x = (function() {
  return "Tuple21";
});
$p.j = (function() {
  return (((((((((((((((((((((((((((((((((((((((((("(" + this.eY) + ",") + this.dD) + ",") + this.dG) + ",") + this.dH) + ",") + this.dI) + ",") + this.dJ) + ",") + this.dK) + ",") + this.dL) + ",") + this.dM) + ",") + this.dt) + ",") + this.du) + ",") + this.dv) + ",") + this.dw) + ",") + this.dx) + ",") + this.dy) + ",") + this.dz) + ",") + this.dA) + ",") + this.dB) + ",") + this.dC) + ",") + this.dE) + ",") + this.dF) + ")");
});
function $isArrayOf_T21(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ah)));
}
var $d_T21 = new $TypeData().i($c_T21, "scala.Tuple21", ({
  ah: 1,
  b: 1,
  c: 1,
  bO: 1,
  a: 1
}));
/** @constructor */
function $c_T22(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22) {
  this.eZ = null;
  this.dX = null;
  this.e1 = null;
  this.e2 = null;
  this.e3 = null;
  this.e4 = null;
  this.e5 = null;
  this.e6 = null;
  this.e7 = null;
  this.dN = null;
  this.dO = null;
  this.dP = null;
  this.dQ = null;
  this.dR = null;
  this.dS = null;
  this.dT = null;
  this.dU = null;
  this.dV = null;
  this.dW = null;
  this.dY = null;
  this.dZ = null;
  this.e0 = null;
  this.eZ = _1;
  this.dX = _2;
  this.e1 = _3;
  this.e2 = _4;
  this.e3 = _5;
  this.e4 = _6;
  this.e5 = _7;
  this.e6 = _8;
  this.e7 = _9;
  this.dN = _10;
  this.dO = _11;
  this.dP = _12;
  this.dQ = _13;
  this.dR = _14;
  this.dS = _15;
  this.dT = _16;
  this.dU = _17;
  this.dV = _18;
  this.dW = _19;
  this.dY = _20;
  this.dZ = _21;
  this.e0 = _22;
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
$p.t = (function() {
  return 22;
});
$p.k = (function(n) {
  return $f_s_Product22__productElement__I__O(this, n);
});
$p.q = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, (-139445068), true);
});
$p.m = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T22) && ((((((((((((((((((((($m_sr_BoxesRunTime$().b(this.eZ, x$0.eZ) && $m_sr_BoxesRunTime$().b(this.dX, x$0.dX)) && $m_sr_BoxesRunTime$().b(this.e1, x$0.e1)) && $m_sr_BoxesRunTime$().b(this.e2, x$0.e2)) && $m_sr_BoxesRunTime$().b(this.e3, x$0.e3)) && $m_sr_BoxesRunTime$().b(this.e4, x$0.e4)) && $m_sr_BoxesRunTime$().b(this.e5, x$0.e5)) && $m_sr_BoxesRunTime$().b(this.e6, x$0.e6)) && $m_sr_BoxesRunTime$().b(this.e7, x$0.e7)) && $m_sr_BoxesRunTime$().b(this.dN, x$0.dN)) && $m_sr_BoxesRunTime$().b(this.dO, x$0.dO)) && $m_sr_BoxesRunTime$().b(this.dP, x$0.dP)) && $m_sr_BoxesRunTime$().b(this.dQ, x$0.dQ)) && $m_sr_BoxesRunTime$().b(this.dR, x$0.dR)) && $m_sr_BoxesRunTime$().b(this.dS, x$0.dS)) && $m_sr_BoxesRunTime$().b(this.dT, x$0.dT)) && $m_sr_BoxesRunTime$().b(this.dU, x$0.dU)) && $m_sr_BoxesRunTime$().b(this.dV, x$0.dV)) && $m_sr_BoxesRunTime$().b(this.dW, x$0.dW)) && $m_sr_BoxesRunTime$().b(this.dY, x$0.dY)) && $m_sr_BoxesRunTime$().b(this.dZ, x$0.dZ)) && $m_sr_BoxesRunTime$().b(this.e0, x$0.e0))));
});
$p.x = (function() {
  return "Tuple22";
});
$p.j = (function() {
  return (((((((((((((((((((((((((((((((((((((((((((("(" + this.eZ) + ",") + this.dX) + ",") + this.e1) + ",") + this.e2) + ",") + this.e3) + ",") + this.e4) + ",") + this.e5) + ",") + this.e6) + ",") + this.e7) + ",") + this.dN) + ",") + this.dO) + ",") + this.dP) + ",") + this.dQ) + ",") + this.dR) + ",") + this.dS) + ",") + this.dT) + ",") + this.dU) + ",") + this.dV) + ",") + this.dW) + ",") + this.dY) + ",") + this.dZ) + ",") + this.e0) + ")");
});
function $isArrayOf_T22(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ai)));
}
var $d_T22 = new $TypeData().i($c_T22, "scala.Tuple22", ({
  ai: 1,
  b: 1,
  c: 1,
  bP: 1,
  a: 1
}));
/** @constructor */
function $c_T3(_1, _2, _3) {
  this.aH = null;
  this.ay = null;
  this.az = null;
  this.aH = _1;
  this.ay = _2;
  this.az = _3;
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
$p.t = (function() {
  return 3;
});
$p.k = (function(n) {
  return $f_s_Product3__productElement__I__O(this, n);
});
$p.q = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, (-192629203), true);
});
$p.m = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T3) && (($m_sr_BoxesRunTime$().b(this.aH, x$0.aH) && $m_sr_BoxesRunTime$().b(this.ay, x$0.ay)) && $m_sr_BoxesRunTime$().b(this.az, x$0.az))));
});
$p.x = (function() {
  return "Tuple3";
});
$p.j = (function() {
  return (((((("(" + this.aH) + ",") + this.ay) + ",") + this.az) + ")");
});
function $isArrayOf_T3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aj)));
}
var $d_T3 = new $TypeData().i($c_T3, "scala.Tuple3", ({
  aj: 1,
  b: 1,
  c: 1,
  bQ: 1,
  a: 1
}));
/** @constructor */
function $c_T4(_1, _2, _3, _4) {
  this.e8 = null;
  this.aI = null;
  this.aJ = null;
  this.aK = null;
  this.e8 = _1;
  this.aI = _2;
  this.aJ = _3;
  this.aK = _4;
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
$p.t = (function() {
  return 4;
});
$p.k = (function(n) {
  return $f_s_Product4__productElement__I__O(this, n);
});
$p.q = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, (-1542739752), true);
});
$p.m = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T4) && ((($m_sr_BoxesRunTime$().b(this.e8, x$0.e8) && $m_sr_BoxesRunTime$().b(this.aI, x$0.aI)) && $m_sr_BoxesRunTime$().b(this.aJ, x$0.aJ)) && $m_sr_BoxesRunTime$().b(this.aK, x$0.aK))));
});
$p.x = (function() {
  return "Tuple4";
});
$p.j = (function() {
  return (((((((("(" + this.e8) + ",") + this.aI) + ",") + this.aJ) + ",") + this.aK) + ")");
});
function $isArrayOf_T4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ak)));
}
var $d_T4 = new $TypeData().i($c_T4, "scala.Tuple4", ({
  ak: 1,
  b: 1,
  c: 1,
  bR: 1,
  a: 1
}));
/** @constructor */
function $c_T5(_1, _2, _3, _4, _5) {
  this.f0 = null;
  this.e9 = null;
  this.ea = null;
  this.eb = null;
  this.ec = null;
  this.f0 = _1;
  this.e9 = _2;
  this.ea = _3;
  this.eb = _4;
  this.ec = _5;
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
$p.t = (function() {
  return 5;
});
$p.k = (function(n) {
  return $f_s_Product5__productElement__I__O(this, n);
});
$p.q = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, 417360321, true);
});
$p.m = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T5) && (((($m_sr_BoxesRunTime$().b(this.f0, x$0.f0) && $m_sr_BoxesRunTime$().b(this.e9, x$0.e9)) && $m_sr_BoxesRunTime$().b(this.ea, x$0.ea)) && $m_sr_BoxesRunTime$().b(this.eb, x$0.eb)) && $m_sr_BoxesRunTime$().b(this.ec, x$0.ec))));
});
$p.x = (function() {
  return "Tuple5";
});
$p.j = (function() {
  return (((((((((("(" + this.f0) + ",") + this.e9) + ",") + this.ea) + ",") + this.eb) + ",") + this.ec) + ")");
});
function $isArrayOf_T5(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.al)));
}
var $d_T5 = new $TypeData().i($c_T5, "scala.Tuple5", ({
  al: 1,
  b: 1,
  c: 1,
  bS: 1,
  a: 1
}));
/** @constructor */
function $c_T6(_1, _2, _3, _4, _5, _6) {
  this.f1 = null;
  this.ed = null;
  this.ee = null;
  this.ef = null;
  this.eg = null;
  this.eh = null;
  this.f1 = _1;
  this.ed = _2;
  this.ee = _3;
  this.ef = _4;
  this.eg = _5;
  this.eh = _6;
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
$p.t = (function() {
  return 6;
});
$p.k = (function(n) {
  return $f_s_Product6__productElement__I__O(this, n);
});
$p.q = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, (-1037607828), true);
});
$p.m = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T6) && ((((($m_sr_BoxesRunTime$().b(this.f1, x$0.f1) && $m_sr_BoxesRunTime$().b(this.ed, x$0.ed)) && $m_sr_BoxesRunTime$().b(this.ee, x$0.ee)) && $m_sr_BoxesRunTime$().b(this.ef, x$0.ef)) && $m_sr_BoxesRunTime$().b(this.eg, x$0.eg)) && $m_sr_BoxesRunTime$().b(this.eh, x$0.eh))));
});
$p.x = (function() {
  return "Tuple6";
});
$p.j = (function() {
  return (((((((((((("(" + this.f1) + ",") + this.ed) + ",") + this.ee) + ",") + this.ef) + ",") + this.eg) + ",") + this.eh) + ")");
});
function $isArrayOf_T6(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.am)));
}
var $d_T6 = new $TypeData().i($c_T6, "scala.Tuple6", ({
  am: 1,
  b: 1,
  c: 1,
  bT: 1,
  a: 1
}));
/** @constructor */
function $c_T7(_1, _2, _3, _4, _5, _6, _7) {
  this.f2 = null;
  this.ei = null;
  this.ej = null;
  this.ek = null;
  this.el = null;
  this.em = null;
  this.en = null;
  this.f2 = _1;
  this.ei = _2;
  this.ej = _3;
  this.ek = _4;
  this.el = _5;
  this.em = _6;
  this.en = _7;
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
$p.t = (function() {
  return 7;
});
$p.k = (function(n) {
  return $f_s_Product7__productElement__I__O(this, n);
});
$p.q = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, (-1050932777), true);
});
$p.m = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T7) && (((((($m_sr_BoxesRunTime$().b(this.f2, x$0.f2) && $m_sr_BoxesRunTime$().b(this.ei, x$0.ei)) && $m_sr_BoxesRunTime$().b(this.ej, x$0.ej)) && $m_sr_BoxesRunTime$().b(this.ek, x$0.ek)) && $m_sr_BoxesRunTime$().b(this.el, x$0.el)) && $m_sr_BoxesRunTime$().b(this.em, x$0.em)) && $m_sr_BoxesRunTime$().b(this.en, x$0.en))));
});
$p.x = (function() {
  return "Tuple7";
});
$p.j = (function() {
  return (((((((((((((("(" + this.f2) + ",") + this.ei) + ",") + this.ej) + ",") + this.ek) + ",") + this.el) + ",") + this.em) + ",") + this.en) + ")");
});
function $isArrayOf_T7(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.an)));
}
var $d_T7 = new $TypeData().i($c_T7, "scala.Tuple7", ({
  an: 1,
  b: 1,
  c: 1,
  bU: 1,
  a: 1
}));
/** @constructor */
function $c_T8(_1, _2, _3, _4, _5, _6, _7, _8) {
  this.f3 = null;
  this.eo = null;
  this.ep = null;
  this.eq = null;
  this.er = null;
  this.es = null;
  this.et = null;
  this.eu = null;
  this.f3 = _1;
  this.eo = _2;
  this.ep = _3;
  this.eq = _4;
  this.er = _5;
  this.es = _6;
  this.et = _7;
  this.eu = _8;
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
$p.t = (function() {
  return 8;
});
$p.k = (function(n) {
  return $f_s_Product8__productElement__I__O(this, n);
});
$p.q = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, 1998822530, true);
});
$p.m = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T8) && ((((((($m_sr_BoxesRunTime$().b(this.f3, x$0.f3) && $m_sr_BoxesRunTime$().b(this.eo, x$0.eo)) && $m_sr_BoxesRunTime$().b(this.ep, x$0.ep)) && $m_sr_BoxesRunTime$().b(this.eq, x$0.eq)) && $m_sr_BoxesRunTime$().b(this.er, x$0.er)) && $m_sr_BoxesRunTime$().b(this.es, x$0.es)) && $m_sr_BoxesRunTime$().b(this.et, x$0.et)) && $m_sr_BoxesRunTime$().b(this.eu, x$0.eu))));
});
$p.x = (function() {
  return "Tuple8";
});
$p.j = (function() {
  return (((((((((((((((("(" + this.f3) + ",") + this.eo) + ",") + this.ep) + ",") + this.eq) + ",") + this.er) + ",") + this.es) + ",") + this.et) + ",") + this.eu) + ")");
});
function $isArrayOf_T8(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ao)));
}
var $d_T8 = new $TypeData().i($c_T8, "scala.Tuple8", ({
  ao: 1,
  b: 1,
  c: 1,
  bV: 1,
  a: 1
}));
/** @constructor */
function $c_T9(_1, _2, _3, _4, _5, _6, _7, _8, _9) {
  this.f4 = null;
  this.ev = null;
  this.ew = null;
  this.ex = null;
  this.ey = null;
  this.ez = null;
  this.eA = null;
  this.eB = null;
  this.eC = null;
  this.f4 = _1;
  this.ev = _2;
  this.ew = _3;
  this.ex = _4;
  this.ey = _5;
  this.ez = _6;
  this.eA = _7;
  this.eB = _8;
  this.eC = _9;
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
$p.t = (function() {
  return 9;
});
$p.k = (function(n) {
  return $f_s_Product9__productElement__I__O(this, n);
});
$p.q = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, (-1807911176), true);
});
$p.m = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T9) && (((((((($m_sr_BoxesRunTime$().b(this.f4, x$0.f4) && $m_sr_BoxesRunTime$().b(this.ev, x$0.ev)) && $m_sr_BoxesRunTime$().b(this.ew, x$0.ew)) && $m_sr_BoxesRunTime$().b(this.ex, x$0.ex)) && $m_sr_BoxesRunTime$().b(this.ey, x$0.ey)) && $m_sr_BoxesRunTime$().b(this.ez, x$0.ez)) && $m_sr_BoxesRunTime$().b(this.eA, x$0.eA)) && $m_sr_BoxesRunTime$().b(this.eB, x$0.eB)) && $m_sr_BoxesRunTime$().b(this.eC, x$0.eC))));
});
$p.x = (function() {
  return "Tuple9";
});
$p.j = (function() {
  return (((((((((((((((((("(" + this.f4) + ",") + this.ev) + ",") + this.ew) + ",") + this.ex) + ",") + this.ey) + ",") + this.ez) + ",") + this.eA) + ",") + this.eB) + ",") + this.eC) + ")");
});
function $isArrayOf_T9(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ap)));
}
var $d_T9 = new $TypeData().i($c_T9, "scala.Tuple9", ({
  ap: 1,
  b: 1,
  c: 1,
  bW: 1,
  a: 1
}));
function $f_sc_Iterable__toString__T($thiz) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, ($thiz.fp() + "("), ", ", ")");
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
$p.mI = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator");
});
$p.U = (function() {
  return 0;
});
$p.B = (function() {
  this.mI();
});
$p.hn = (function(from, until) {
  return this;
});
var $d_sc_Iterator$$anon$19 = new $TypeData().i($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  c6: 1,
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
      $thiz.aM = c.aM;
      if ((c.aa !== null)) {
        if (($thiz.a9 === null)) {
          $thiz.a9 = c.a9;
        }
        var x$proxy10 = c.a9;
        if ((x$proxy10 === null)) {
          $m_sr_Scala3RunTime$().hi();
        }
        x$proxy10.fw = $thiz.aa;
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
      $thiz.Y = $thiz.aa.m8();
      if (($thiz.a9 === $thiz.aa)) {
        var x$proxy12 = $thiz.a9;
        if ((x$proxy12 === null)) {
          $m_sr_Scala3RunTime$().hi();
        }
        $thiz.a9 = x$proxy12.fw;
      }
      $thiz.aa = $thiz.aa.fw;
      $p_sc_Iterator$ConcatIterator__merge$1__V($thiz);
      if ($thiz.aM) {
        return true;
      } else {
        if ((!(($thiz.Y !== null) && $thiz.Y.C()))) {
          continue;
        }
        $thiz.aM = true;
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
  this.aM = false;
  this.Y = from;
  this.aa = null;
  this.a9 = null;
  this.aM = false;
}
$p = $c_sc_Iterator$ConcatIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$ConcatIterator;
/** @constructor */
function $h_sc_Iterator$ConcatIterator() {
}
$h_sc_Iterator$ConcatIterator.prototype = $p;
$p.C = (function() {
  if (this.aM) {
    return true;
  } else if ((this.Y !== null)) {
    if (this.Y.C()) {
      this.aM = true;
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
    this.aM = false;
    var x$proxy13 = this.Y;
    if ((x$proxy13 === null)) {
      $m_sr_Scala3RunTime$().hi();
    }
    return x$proxy13.B();
  } else {
    return $m_sc_Iterator$().aB.B();
  }
});
$p.lB = (function(that) {
  var c = new $c_sc_Iterator$ConcatIteratorCell(that, null);
  if ((this.aa === null)) {
    this.aa = c;
    this.a9 = c;
  } else {
    var x$proxy14 = this.a9;
    if ((x$proxy14 === null)) {
      $m_sr_Scala3RunTime$().hi();
    }
    x$proxy14.fw = c;
    this.a9 = c;
  }
  if ((this.Y === null)) {
    this.Y = $m_sc_Iterator$().aB;
  }
  return this;
});
function $isArrayOf_sc_Iterator$ConcatIterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.au)));
}
var $d_sc_Iterator$ConcatIterator = new $TypeData().i($c_sc_Iterator$ConcatIterator, "scala.collection.Iterator$ConcatIterator", ({
  au: 1,
  n: 1,
  d: 1,
  e: 1,
  s: 1
}));
function $p_sc_Iterator$SliceIterator__skip__V($thiz) {
  while (($thiz.aC > 0)) {
    if ($thiz.aN.C()) {
      $thiz.aN.B();
      $thiz.aC = (($thiz.aC - 1) | 0);
    } else {
      $thiz.aC = 0;
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
  this.aN = null;
  this.a2 = 0;
  this.aC = 0;
  this.aN = underlying;
  this.a2 = limit;
  this.aC = start;
}
$p = $c_sc_Iterator$SliceIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$SliceIterator;
/** @constructor */
function $h_sc_Iterator$SliceIterator() {
}
$h_sc_Iterator$SliceIterator.prototype = $p;
$p.U = (function() {
  var size = this.aN.U();
  if ((size < 0)) {
    return (-1);
  } else {
    var that = ((size - this.aC) | 0);
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
  return ((this.a2 !== 0) && this.aN.C());
});
$p.B = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  if ((this.a2 > 0)) {
    this.a2 = ((this.a2 - 1) | 0);
    return this.aN.B();
  } else {
    return ((this.a2 < 0) ? this.aN.B() : $m_sc_Iterator$().aB.B());
  }
});
$p.hn = (function(from, until) {
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
  var sum = ((this.aC + lo) | 0);
  if ((rest === 0)) {
    return $m_sc_Iterator$().aB;
  } else if ((sum < 0)) {
    this.aC = 2147483647;
    this.a2 = 0;
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => new $c_sc_Iterator$SliceIterator(this.aN, ((sum - 2147483647) | 0), rest))));
  } else {
    this.aC = sum;
    this.a2 = rest;
    return this;
  }
});
var $d_sc_Iterator$SliceIterator = new $TypeData().i($c_sc_Iterator$SliceIterator, "scala.collection.Iterator$SliceIterator", ({
  c8: 1,
  n: 1,
  d: 1,
  e: 1,
  s: 1
}));
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw new $c_jl_IndexOutOfBoundsException(("" + n));
  }
  var skipped = $thiz.lK(n);
  if (skipped.M()) {
    throw new $c_jl_IndexOutOfBoundsException(("" + n));
  }
  return skipped.iu();
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
      if ((((!a$tailLocal1.M()) && (!b$tailLocal1.M())) && $m_sr_BoxesRunTime$().b(a$tailLocal1.iu(), b$tailLocal1.iu()))) {
        var a$tailLocal1$tmp1 = a$tailLocal1.iR();
        var b$tailLocal1$tmp1 = b$tailLocal1.iR();
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
  cn: 1,
  a: 1,
  at: 1,
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
  this.ji = null;
  this.fy = 0;
  this.jh = 0;
  this.ji = x$1;
  this.fy = 0;
  this.jh = x$1.t();
}
$p = $c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $p;
$p.C = (function() {
  return (this.fy < this.jh);
});
$p.B = (function() {
  var result = this.ji.k(this.fy);
  this.fy = ((1 + this.fy) | 0);
  return result;
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().i($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
  cY: 1,
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a0)));
}
var $d_jl_Double = new $TypeData().i(0, "java.lang.Double", ({
  a0: 1,
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
  b4: 1,
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
  b6: 1,
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
  return $m_RTLong$().l2($thiz, $thizhi);
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a2)));
}
var $d_jl_Long = new $TypeData().i(0, "java.lang.Long", ({
  a2: 1,
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
  bb: 1,
  a1: 1,
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
  var str = $m_jl_Character$().nd(ch);
  return ($thiz.indexOf(str) | 0);
}
function $f_T__toString__T($thiz) {
  return $thiz;
}
var $d_T = new $TypeData().i(0, "java.lang.String", ({
  be: 1,
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
$p.is = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.io = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.fp = (function() {
  return this.eL();
});
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator(xs) {
  this.gv = null;
  this.aA = 0;
  this.fv = 0;
  this.gv = xs;
  this.aA = 0;
  this.fv = $m_jl_reflect_Array$().g9(this.gv);
}
$p = $c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
}
$h_sc_ArrayOps$ArrayIterator.prototype = $p;
$p.U = (function() {
  return ((this.fv - this.aA) | 0);
});
$p.C = (function() {
  return (this.aA < this.fv);
});
$p.B = (function() {
  if ((this.aA >= $m_jl_reflect_Array$().g9(this.gv))) {
    $m_sc_Iterator$().aB.B();
  }
  var r = $m_sr_ScalaRunTime$().fo(this.gv, this.aA);
  this.aA = ((1 + this.aA) | 0);
  return r;
});
$p.hf = (function(n) {
  if ((n > 0)) {
    var newPos = ((this.aA + n) | 0);
    if ((newPos < 0)) {
      var $x_1 = this.fv;
    } else {
      var a = this.fv;
      var $x_1 = ((a < newPos) ? a : newPos);
    }
    this.aA = $x_1;
  }
  return this;
});
var $d_sc_ArrayOps$ArrayIterator = new $TypeData().i($c_sc_ArrayOps$ArrayIterator, "scala.collection.ArrayOps$ArrayIterator", ({
  c0: 1,
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
  this.aL = 0;
  this.ag = 0;
  this.j4 = self;
  this.aL = 0;
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
    var r = this.j4.L(this.aL);
    this.aL = ((1 + this.aL) | 0);
    this.ag = ((this.ag - 1) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().aB.B();
  }
});
$p.hf = (function(n) {
  if ((n > 0)) {
    this.aL = ((this.aL + n) | 0);
    var b = ((this.ag - n) | 0);
    this.ag = ((b < 0) ? 0 : b);
  }
  return this;
});
$p.hn = (function(from, until) {
  var formatFrom = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, from);
  var formatUntil = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, until);
  var b = ((formatUntil - formatFrom) | 0);
  this.ag = ((b < 0) ? 0 : b);
  this.aL = ((this.aL + formatFrom) | 0);
  return this;
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
  c4: 1,
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
  cj: 1,
  a: 1,
  as: 1,
  aq: 1,
  ar: 1,
  av: 1
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
  cq: 1,
  a: 1,
  as: 1,
  aq: 1,
  ar: 1,
  av: 1
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
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.q = (function() {
  return 924202651;
});
$p.t = (function() {
  return 0;
});
$p.x = (function() {
  return "EmptyTuple";
});
$p.k = (function(n) {
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
$p.j = (function() {
  return "()";
});
var $d_T$package$EmptyTuple$ = new $TypeData().i($c_T$package$EmptyTuple$, "scala.Tuple$package$EmptyTuple$", ({
  bX: 1,
  b: 1,
  c: 1,
  a: 1,
  cw: 1,
  cx: 1,
  cy: 1
}));
var $n_T$package$EmptyTuple$;
function $m_T$package$EmptyTuple$() {
  if ((!$n_T$package$EmptyTuple$)) {
    $n_T$package$EmptyTuple$ = new $c_T$package$EmptyTuple$();
  }
  return $n_T$package$EmptyTuple$;
}
function $f_sc_View__toString__T($thiz) {
  return ($thiz.eL() + "(<not computed>)");
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
    this.aO = null;
    this.aO = exception;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  hg() {
    return $dp_toString__T(this.aO);
  }
  x() {
    return "JavaScriptException";
  }
  t() {
    return 1;
  }
  k(x$1) {
    return ((x$1 === 0) ? this.aO : $m_sr_Statics$().mg(x$1));
  }
  A() {
    return new $c_sr_ScalaRunTime$$anon$1(this);
  }
  q() {
    return $m_s_util_hashing_MurmurHash3$().E(this, 1744042595, true);
  }
  m(x$1) {
    return ((this === x$1) || ((x$1 instanceof $c_sjs_js_JavaScriptException) && $m_sr_BoxesRunTime$().b(this.aO, x$1.aO)));
  }
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aG)));
}
var $d_sjs_js_JavaScriptException = new $TypeData().i($c_sjs_js_JavaScriptException, "scala.scalajs.js.JavaScriptException", ({
  aG: 1,
  j: 1,
  i: 1,
  f: 1,
  a: 1,
  c: 1,
  b: 1
}));
function $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V($thiz, line) {
  if (((typeof console) !== "undefined")) {
    if (($thiz.iU && (!(!(!(!console.error)))))) {
      console.error(line);
    } else {
      console.log(line);
    }
  }
}
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream(isErr) {
  this.iU = false;
  this.ft = null;
  this.iU = isErr;
  $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__(this, new $c_jl_JSConsoleBasedPrintStream$DummyOutputStream(), false, null);
  this.ft = "";
}
$p = $c_jl_JSConsoleBasedPrintStream.prototype = new $h_Ljava_io_PrintStream();
$p.constructor = $c_jl_JSConsoleBasedPrintStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream() {
}
$h_jl_JSConsoleBasedPrintStream.prototype = $p;
$p.mj = (function(s) {
  var rest = s;
  while ((rest !== "")) {
    var this$1 = rest;
    var nlPos = (this$1.indexOf("\n") | 0);
    if ((nlPos < 0)) {
      this.ft = (("" + this.ft) + rest);
      rest = "";
    } else {
      var $x_1 = this.ft;
      var this$2 = rest;
      $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V(this, (("" + $x_1) + this$2.substring(0, nlPos)));
      this.ft = "";
      var this$3 = rest;
      var beginIndex = ((1 + nlPos) | 0);
      rest = this$3.substring(beginIndex);
    }
  }
});
var $d_jl_JSConsoleBasedPrintStream = new $TypeData().i($c_jl_JSConsoleBasedPrintStream, "java.lang.JSConsoleBasedPrintStream", ({
  b8: 1,
  aW: 1,
  aV: 1,
  W: 1,
  U: 1,
  Y: 1,
  V: 1,
  X: 1
}));
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  var s$tailLocal1 = s;
  var n$tailLocal1 = n;
  while (true) {
    if (((n$tailLocal1 <= 0) || s$tailLocal1.M())) {
      return s$tailLocal1;
    } else {
      var n$tailLocal1$tmp1 = ((n$tailLocal1 - 1) | 0);
      var s$tailLocal1$tmp1 = s$tailLocal1.iR();
      n$tailLocal1 = n$tailLocal1$tmp1;
      s$tailLocal1 = s$tailLocal1$tmp1;
    }
  }
}
/** @constructor */
function $c_s_reflect_ManifestFactory$PhantomManifest() {
  this.hs = null;
}
$p = $c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$p.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
}
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $p;
$p.j = (function() {
  return this.hs;
});
$p.m = (function(that) {
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
$p.j = (function() {
  return $f_sc_View__toString__T(this);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ObjectManifest$() {
  this.hs = null;
  this.hs = "Object";
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
      if (o.iq($thiz)) {
        return $thiz.hk(o);
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
$p.hk = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.iq = (function(that) {
  return true;
});
$p.m = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.q = (function() {
  return $m_s_util_hashing_MurmurHash3$().kZ(this);
});
$p.j = (function() {
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
  $thiz.fx = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.fx = null;
}
$p = $c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $p;
$p.L = (function(idx) {
  return this.fx.L(idx);
});
$p.D = (function() {
  return this.fx.D();
});
$p.M = (function() {
  return this.fx.M();
});
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.fx = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$p.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
}
$h_sc_IndexedSeqView$Id.prototype = $p;
$p.eK = (function(len) {
  var x = this.D();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.U = (function() {
  return this.D();
});
$p.N = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this);
});
$p.eL = (function() {
  return "IndexedSeqView";
});
var $d_sc_IndexedSeqView$Id = new $TypeData().i($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  c3: 1,
  cc: 1,
  bY: 1,
  bZ: 1,
  v: 1,
  d: 1,
  e: 1,
  r: 1,
  q: 1,
  p: 1,
  a: 1,
  cg: 1,
  t: 1,
  cb: 1,
  w: 1,
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
        var a = $thiz.ip();
        var b = o.ip();
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
          var thisIt = $thiz.N().hf(index);
          var thatIt = o.N().hf(index);
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
  this.gw = null;
  this.gw = array;
}
$p = $c_sjsr_WrappedVarArgs.prototype = new $h_O();
$p.constructor = $c_sjsr_WrappedVarArgs;
/** @constructor */
function $h_sjsr_WrappedVarArgs() {
}
$h_sjsr_WrappedVarArgs.prototype = $p;
$p.iq = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.hk = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.ip = (function() {
  return $m_sci_IndexedSeqDefaults$().j9;
});
$p.N = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.eK = (function(len) {
  var x = this.D();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.U = (function() {
  return this.D();
});
$p.m = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.q = (function() {
  return $m_s_util_hashing_MurmurHash3$().kZ(this);
});
$p.j = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.M = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.is = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.io = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.D = (function() {
  return (this.gw.length | 0);
});
$p.L = (function(idx) {
  return this.gw[idx];
});
$p.fp = (function() {
  return "WrappedVarArgs";
});
$p.F = (function(v1) {
  return this.L((v1 | 0));
});
function $isArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aH)));
}
var $d_sjsr_WrappedVarArgs = new $TypeData().i($c_sjsr_WrappedVarArgs, "scala.scalajs.runtime.WrappedVarArgs", ({
  aH: 1,
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
  ay: 1,
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
$p.eK = (function(len) {
  var x = this.aD.a.length;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.U = (function() {
  return this.aD.a.length;
});
$p.eL = (function() {
  return "IndexedSeq";
});
$p.iq = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.hk = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.fp = (function() {
  return "ArraySeq";
});
$p.ip = (function() {
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
$p.eK = (function(len) {
  var x = this.ah.a.length;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.U = (function() {
  return this.ah.a.length;
});
$p.eL = (function() {
  return "IndexedSeq";
});
$p.fp = (function() {
  return "ArraySeq";
});
$p.m = (function(other) {
  if ((other instanceof $c_scm_ArraySeq)) {
    if ((this.ah.a.length !== other.ah.a.length)) {
      return false;
    }
  }
  return $f_sc_Seq__equals__O__Z(this, other);
});
function $isArrayOf_scm_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aA)));
}
/** @constructor */
function $c_sci_ArraySeq$ofRef(unsafeArray) {
  this.aD = null;
  this.aD = unsafeArray;
}
$p = $c_sci_ArraySeq$ofRef.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofRef;
/** @constructor */
function $h_sci_ArraySeq$ofRef() {
}
$h_sci_ArraySeq$ofRef.prototype = $p;
$p.D = (function() {
  return this.aD.a.length;
});
$p.L = (function(i) {
  return this.aD.a[i];
});
$p.q = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.kv(this.aD, this$1.f6);
});
$p.m = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofRef) ? $m_s_Array$().kD(this.aD, that.aD) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.N = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.aD);
});
$p.F = (function(v1) {
  return this.L((v1 | 0));
});
function $isArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ax)));
}
var $d_sci_ArraySeq$ofRef = new $TypeData().i($c_sci_ArraySeq$ofRef, "scala.collection.immutable.ArraySeq$ofRef", ({
  ax: 1,
  ci: 1,
  aw: 1,
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
  ay: 1,
  D: 1,
  B: 1,
  C: 1,
  J: 1,
  c1: 1,
  a: 1
}));
function $p_sci_List__loop$2__I__I__sci_List__I($thiz, len$1, i, xs) {
  var xs$tailLocal1 = xs;
  var i$tailLocal1 = i;
  while (true) {
    return ((i$tailLocal1 === len$1) ? (xs$tailLocal1.M() ? 0 : 1) : (xs$tailLocal1.M() ? (-1) : xs$tailLocal1.gs()));
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
        a$tailLocal1.hh();
      }
      if (false) {
        a$tailLocal1.gs();
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
$p.hk = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.eL = (function() {
  return "LinearSeq";
});
$p.M = (function() {
  return (this === $m_sci_Nil$());
});
$p.is = (function(f) {
  var these = this;
  while ((!these.M())) {
    f.F(these.hh());
    these.gs();
  }
});
$p.D = (function() {
  var these = this;
  var len = 0;
  while ((!these.M())) {
    len = ((1 + len) | 0);
    these.gs();
  }
  return len;
});
$p.eK = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__I__sci_List__I(this, len, 0, this));
});
$p.fp = (function() {
  return "List";
});
$p.m = (function(o) {
  return ((o instanceof $c_sci_List) ? $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, o) : $f_sc_Seq__equals__O__Z(this, o));
});
$p.lK = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
$p.F = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.az)));
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
  return this$1.kv(this.ah, this$1.f6);
});
$p.m = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofRef) ? $m_s_Array$().kD(this.ah, that.ah) : $c_scm_ArraySeq.prototype.m.call(this, that));
});
$p.N = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.ah);
});
$p.F = (function(v1) {
  return this.L((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aB)));
}
var $d_scm_ArraySeq$ofRef = new $TypeData().i($c_scm_ArraySeq$ofRef, "scala.collection.mutable.ArraySeq$ofRef", ({
  aB: 1,
  aA: 1,
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
$p.t = (function() {
  return 0;
});
$p.x = (function() {
  return "Nil";
});
$p.k = (function(n) {
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
$p.hh = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list");
});
$p.gs = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$p.U = (function() {
  return 0;
});
$p.N = (function() {
  return $m_sc_Iterator$().aB;
});
$p.iu = (function() {
  this.hh();
});
$p.iR = (function() {
  this.gs();
});
var $d_sci_Nil$ = new $TypeData().i($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  co: 1,
  az: 1,
  aw: 1,
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
  c9: 1,
  F: 1,
  cm: 1,
  cl: 1,
  B: 1,
  C: 1,
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
  $thiz.al = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, new $c_jl_StringBuilder());
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.al = null;
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
$p.eK = (function(len) {
  var x = this.al.D();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.eL = (function() {
  return "IndexedSeq";
});
$p.D = (function() {
  return this.al.D();
});
$p.U = (function() {
  return this.al.D();
});
$p.j = (function() {
  return this.al.R;
});
$p.M = (function() {
  return (this.al.D() === 0);
});
$p.L = (function(i) {
  return $bC(this.al.kx(i));
});
$p.F = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.al.kx(i));
});
var $d_scm_StringBuilder = new $TypeData().i($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
  cv: 1,
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
  aD: 1,
  aE: 1,
  aC: 1,
  ct: 1,
  w: 1,
  o: 1,
  N: 1,
  M: 1,
  E: 1,
  a: 1
}));
/** @constructor */
function $c_sjs_js_WrappedArray(array) {
  this.f5 = null;
  this.f5 = array;
}
$p = $c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
}
$h_sjs_js_WrappedArray.prototype = $p;
$p.eL = (function() {
  return "IndexedSeq";
});
$p.N = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.eK = (function(len) {
  var x = (this.f5.length | 0);
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.L = (function(index) {
  return this.f5[index];
});
$p.D = (function() {
  return (this.f5.length | 0);
});
$p.U = (function() {
  return (this.f5.length | 0);
});
$p.fp = (function() {
  return "WrappedArray";
});
$p.F = (function(v1) {
  var index = (v1 | 0);
  return this.f5[index];
});
var $d_sjs_js_WrappedArray = new $TypeData().i($c_sjs_js_WrappedArray, "scala.scalajs.js.WrappedArray", ({
  d8: 1,
  cp: 1,
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
  aD: 1,
  aE: 1,
  cu: 1,
  cr: 1,
  C: 1,
  B: 1,
  M: 1,
  w: 1,
  o: 1,
  N: 1,
  cs: 1,
  aC: 1,
  a: 1
}));
$s_Lsketches_rooms_columns_roomsColumns__main__AT__V(new ($d_T.r().C)([]));
